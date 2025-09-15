import { SaClient } from './client.js';
export { createExpressMiddleware } from './middleware/express.js';
export { InMemoryTokenStore } from './auth/tokenStore.js';
export { buildWechatXml, parseXml } from './lib/xml.js';
export {
    verifySignature,
    verifyMsgSignature,
    decryptMessage,
    decodeAESKey,
} from './lib/crypto.js';
export {
    WxError,
    WxHttpError,
    WxApiError,
    WxCryptoError,
    WxAuthError,
} from './lib/errors.js';
export { DOMAINS } from './request/domains.js';

/**
 * createClient: 统一入口
 * @param {object} options
 * @param {string} options.appId - 必填
 * @param {string} options.appSecret - 必填
 * @param {('auto'|'disaster'|'shanghai'|'sh'|'shenzhen'|'sz'|'hongkong'|'hk')} [options.domain='auto']
 * @param {number} [options.timeoutMs=15000]
 *
 * @param {{retries?:number, delayMs?:number}} [options.retry]
 * @param {('normal'|'stable')} [options.tokenMode='normal']
 * @param {('query'|'header')} [options.tokenPlacement='query']
 * @param {string} [options.tokenKey='access_token']
 * @param {import('./auth/tokenStore.js').InMemoryTokenStore} [options.store]
 */
export function createClient(options) {
    return new SaClient(options);
}
