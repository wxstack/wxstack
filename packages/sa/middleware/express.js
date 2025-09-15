import getRawBody from 'raw-body';
import { verifySignature, verifyMsgSignature, decodeAESKey, decryptMessage } from '../lib/crypto.js';
import { buildWechatXml, parseXml } from '../lib/xml.js';

/**
 * @param {object} options
 * @param {string} options.token
 * @param {string} [options.aesKey]
 * @param {string} [options.appId]
 * @param {import('../client.js').SaClient} [options.client] - 可传以自动获取并缓存回调 IP
 * @param {boolean} [options.checkCallbackIp] - 是否校验回调源 IP（默认读取 client.middleware.checkCallbackIp）
 * @param {number} [options.ipCacheTtlMs] - 回调 IP 列表缓存时长（默认读取 client.middleware.ipCacheTtlMs 或 10 分钟）
 * @param {string[]} [options.ipWhitelist] - 覆盖白名单；设置后将不再从微信接口拉取
 */
export function createExpressMiddleware(options) {
    const {
        token,
        aesKey,
        appId,
        client,
        ipWhitelist,
    } = options || {};
    if (!token) throw new Error('[sa middleware] token is required');

    const checkCallbackIp =
        options?.checkCallbackIp ?? client?.middleware?.checkCallbackIp ?? false;
    const ipCacheTtlMs =
        options?.ipCacheTtlMs ?? client?.middleware?.ipCacheTtlMs ?? 10 * 60 * 1000;

    const aesKeyBuf = aesKey ? decodeAESKey(aesKey) : null;

    // 简单缓存（实例级）
    let cachedIps = Array.isArray(ipWhitelist) ? [...ipWhitelist] : null;
    let expiresAt = 0;

    const now = () => Date.now();

    const normalizeIp = (ip) => {
        if (!ip) return '';
        if (ip.startsWith('::ffff:')) return ip.slice(7);
        if (ip === '::1') return '127.0.0.1';
        return ip;
    };

    const getClientIp = (req) => {
        // 优先 X-Forwarded-For 首个，回退 req.ip/socket.remoteAddress
        const xff = req.headers['x-forwarded-for'];
        if (typeof xff === 'string' && xff.length > 0) {
            const first = xff.split(',')[0].trim();
            return normalizeIp(first);
        }
        const ip = req.ip || req.socket?.remoteAddress || req.connection?.remoteAddress;
        return normalizeIp(ip || '');
    };

    const loadCallbackIps = async () => {
        if (Array.isArray(ipWhitelist)) return ipWhitelist;
        if (!client) return null; // 无 client 则跳过自动拉取
        if (cachedIps && now() < expiresAt) return cachedIps;
        const list = await client.getCallbackIpList();
        cachedIps = Array.isArray(list) ? list.map(normalizeIp) : [];
        expiresAt = now() + ipCacheTtlMs;
        return cachedIps;
    };

    const ensureIpAllowed = async (req) => {
        if (!checkCallbackIp) return true;
        const remoteIp = getClientIp(req);
        const list = await loadCallbackIps();
        if (!list || list.length === 0) return true; // 无法确定，放行（可按需改为拒绝）
        return list.includes(remoteIp);
    };

    return async function wechatMiddleware(req, res, next) {
        try {
            // 可选：回调 IP 白名单校验（尽早做）
            if (!(await ensureIpAllowed(req))) {
                res.status(403).end('forbidden ip');
                return;
            }

            const { signature, timestamp, nonce, echostr, msg_signature } = req.query || {};

            if (req.method === 'GET') {
                if (!verifySignature(token, timestamp, nonce, signature)) {
                    res.status(401).end('invalid signature');
                    return;
                }
                res.status(200).end(echostr || '');
                return;
            }

            if (!timestamp || !nonce) {
                res.status(400).end('missing timestamp/nonce');
                return;
            }

            const charset = (req.headers['content-type'] || '').split('charset=')[1] || 'utf-8';
            const raw = await getRawBody(req, { encoding: charset });

            const parsed = parseXml(raw);
            const xml = parsed?.xml || parsed;
            let message = xml;

            if (xml?.Encrypt) {
                if (!aesKeyBuf) {
                    res.status(400).end('aesKey required for encrypted messages');
                    return;
                }
                const encrypt = typeof xml.Encrypt === 'object' ? xml.Encrypt?.['#cdata'] : xml.Encrypt;
                if (!verifyMsgSignature(token, timestamp, nonce, encrypt, msg_signature)) {
                    res.status(401).end('invalid msg_signature');
                    return;
                }
                const { xml: decryptedXml, appId: decAppId } = decryptMessage(encrypt, aesKeyBuf);
                if (appId && decAppId && appId !== decAppId) {
                    res.status(401).end('appId mismatch');
                    return;
                }
                const decParsed = parseXml(decryptedXml);
                message = decParsed?.xml || decParsed;
            } else if (signature && !verifySignature(token, timestamp, nonce, signature)) {
                res.status(401).end('invalid signature');
                return;
            }

            req.wechatMessage = message;

            res.wechatReply = (obj) => {
                if (!obj.CreateTime) obj.CreateTime = Math.floor(Date.now() / 1000);
                const xmlStr = buildWechatXml(obj);
                res.setHeader('Content-Type', 'application/xml; charset=utf-8');
                res.status(200).end(xmlStr);
            };

            next();
        } catch (err) {
            next(err);
        }
    };
}