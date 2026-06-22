/**
 * 公众号消息回调：框架无关内核 createOaWebhook + Express 适配 createExpressMiddleware。
 *
 * - createOaWebhook：基于 core 的 createWebhook 封装，处理 GET 校验、POST 解析/解密、消息分发与回包。
 * - createExpressMiddleware：参考旧版 middleware/express.js 行为，GET 校验 echostr，POST 解析/解密消息，
 *   在 req 上挂 wechatMessage、在 res 上挂 wechatReply。
 */
import {
  type Logger,
  type MessageHandler,
  type RawCallback,
  WXBizMsgCrypt,
  type WebhookResult,
  type WxMessage,
  buildXml,
  createWebhook,
  decodeAESKey,
  parseXml,
  verifyMsgSignature,
  verifySignature,
} from '@wxstack/core';

/** createOaWebhook 配置。 */
export interface OaWebhookOptions {
  /** 回调 Token（必填）。 */
  token: string;
  /** 43 位 EncodingAESKey（安全模式必填）。 */
  encodingAESKey?: string;
  /** 公众号 AppID（安全模式用于 receiveId 校验）。 */
  appId?: string;
  /** 统一消息处理器。 */
  onMessage?: MessageHandler;
  /** 按 MsgType/Event 精细分发的处理器表。 */
  handlers?: Record<string, MessageHandler>;
  /** 日志器。 */
  logger?: Logger;
}

/**
 * 创建公众号消息回调处理器（框架无关）。
 *
 * 返回的 `handle(raw)` 接受 `{ method, rawBody, query, headers? }`，
 * 返回 `{ status, body, contentType }` 供任意框架写回响应。
 *
 * @param opts 回调配置。
 * @returns 含 handle 方法的回调处理器。
 * @see https://developers.weixin.qq.com/doc/service/guide/dev/push/encryption.html
 */
export function createOaWebhook(opts: OaWebhookOptions): {
  handle(raw: RawCallback): Promise<WebhookResult>;
} {
  return createWebhook({
    token: opts.token,
    receiveId: opts.appId,
    encodingAESKey: opts.encodingAESKey,
    onMessage: opts.onMessage,
    handlers: opts.handlers,
    logger: opts.logger,
  });
}

/** Express 中间件配置。 */
export interface ExpressMiddlewareOptions {
  /** 回调 Token（必填）。 */
  token: string;
  /** 43 位 EncodingAESKey（安全模式必填，亦兼容旧字段名 aesKey）。 */
  encodingAESKey?: string;
  /** 旧字段名兼容：等价于 encodingAESKey。 */
  aesKey?: string;
  /** 公众号 AppID（用于解密后 appId 校验）。 */
  appId?: string;
}

/**
 * 创建 Express 中间件（向后兼容旧版行为）。
 *
 * - GET：校验 signature，命中后返回 echostr。
 * - POST：解析消息；若为安全模式（含 Encrypt 字段）则校验 msg_signature 并解密；
 *   解析后的消息挂在 `req.wechatMessage`，并在 `res.wechatReply(obj)` 上提供回包能力。
 *
 * Express 的 req/res/next 用 any 表达（不引入 express 依赖）。
 *
 * @param options 中间件配置。
 * @returns Express 中间件函数。
 */
export function createExpressMiddleware(
  options: ExpressMiddlewareOptions,
): (req: any, res: any, next: (err?: unknown) => void) => Promise<void> {
  const token = options?.token;
  if (!token) throw new Error('[oa middleware] token is required');

  const encodingAESKey = options.encodingAESKey ?? options.aesKey;
  const appId = options.appId;
  const aesKeyBuf = encodingAESKey ? decodeAESKey(encodingAESKey) : null;
  const crypt =
    encodingAESKey && appId !== undefined ? new WXBizMsgCrypt(token, encodingAESKey, appId) : null;

  return async function wechatMiddleware(
    req: any,
    res: any,
    next: (err?: unknown) => void,
  ): Promise<void> {
    try {
      const query = req.query ?? {};
      const signature = asString(query.signature);
      const timestamp = asString(query.timestamp);
      const nonce = asString(query.nonce);
      const echostr = asString(query.echostr);
      const msgSignature = asString(query.msg_signature);

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

      const raw = await readRawBody(req);
      const parsed = parseXml(raw) as WxMessage;
      let messageXml = parsed;

      const encryptField = parsed.Encrypt;
      if (encryptField) {
        if (!aesKeyBuf) {
          res.status(400).end('aesKey required for encrypted messages');
          return;
        }
        const encrypt = String(encryptField);
        if (!verifyMsgSignature(token, timestamp, nonce, encrypt, msgSignature)) {
          res.status(401).end('invalid msg_signature');
          return;
        }
        if (!crypt) {
          // 未配置 appId 时无法构造 WXBizMsgCrypt，但仍可解密：用 receiveId 为空的实例
          const tmp = new WXBizMsgCrypt(token, encodingAESKey!, appId ?? '');
          const decryptedXml = tmp.decryptMessage(msgSignature, timestamp, nonce, encrypt);
          messageXml = parseXml(decryptedXml) as WxMessage;
        } else {
          let decryptedXml: string;
          try {
            decryptedXml = crypt.decryptMessage(msgSignature, timestamp, nonce, encrypt);
          } catch {
            res.status(401).end('appId mismatch or invalid signature');
            return;
          }
          messageXml = parseXml(decryptedXml) as WxMessage;
        }
      } else if (signature && !verifySignature(token, timestamp, nonce, signature)) {
        res.status(401).end('invalid signature');
        return;
      }

      req.wechatMessage = messageXml;

      res.wechatReply = (obj: Record<string, unknown>): void => {
        const base: Record<string, unknown> = {
          ToUserName: messageXml.FromUserName,
          FromUserName: messageXml.ToUserName,
          CreateTime: obj.CreateTime ?? Math.floor(Date.now() / 1000),
          ...obj,
        };
        let xmlStr = buildXml(base);
        // 安全模式：加密回包
        if (encryptField && crypt) {
          xmlStr = crypt.buildEncryptedReply(xmlStr);
        }
        res.setHeader('Content-Type', 'application/xml; charset=utf-8');
        res.status(200).end(xmlStr);
      };

      next();
    } catch (err) {
      next(err);
    }
  };
}

/** 将查询值规整为字符串（兼容数组/未定义）。 */
function asString(v: unknown): string {
  if (Array.isArray(v)) return v[0] != null ? String(v[0]) : '';
  return v != null ? String(v) : '';
}

/** 读取原始请求体（兼容已被解析为字符串/Buffer 的场景，否则收集流）。 */
async function readRawBody(req: any): Promise<string> {
  if (typeof req.rawBody === 'string') return req.rawBody;
  if (Buffer.isBuffer(req.rawBody)) return req.rawBody.toString('utf8');
  if (typeof req.body === 'string') return req.body;
  if (Buffer.isBuffer(req.body)) return req.body.toString('utf8');
  // 回退：从可读流收集
  return new Promise<string>((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', (c: Buffer) => chunks.push(Buffer.isBuffer(c) ? c : Buffer.from(c)));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}
