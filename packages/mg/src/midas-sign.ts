/**
 * 米大师（Midas）虚拟支付签名助手。
 *
 * 官方对虚拟支付接口要求两个签名（除 access_token 外）：
 * - `sig`：用「业务参数 + access_token」按 key 字典序拼接，再用 **AppKey** 做 HMAC-SHA256。
 * - `mp_sig`：用「业务参数 + access_token + sig」按 key 字典序拼接，再用 **session_key** 做 HMAC-SHA256。
 *
 * 注意：微信对参与签名的字段集合、是否包含 access_token、拼接形式在不同版本文档中
 * 存在出入。这里实现的是社区与官方示例中最常见的「key 字典序 + key=value&... + HMAC-SHA256」算法，
 * 并将 `sig` / `mp_sig` 设计为「可注入」：若你已自行算好，直接传入即可绕过本助手；
 * 若签名校验失败，请以官方最新文档为准，或改用逃生口 client.request() 自带签名调用。
 *
 * @see https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment.html
 */
import crypto from 'node:crypto';

/** 参与签名的参数集合（值会被 String() 序列化）。 */
export type SignParams = Record<string, string | number | undefined>;

/**
 * 将参数按 key 字典序拼成 `k1=v1&k2=v2` 形式（忽略 undefined / 空字符串）。
 * @param params 业务参数。
 */
export function buildSignSource(params: SignParams): string {
  return Object.keys(params)
    .filter((k) => params[k] !== undefined && params[k] !== '')
    .sort()
    .map((k) => `${k}=${String(params[k])}`)
    .join('&');
}

/**
 * 计算 Midas `sig`：对「业务参数（含 access_token）」字典序拼接后用 AppKey 做 HMAC-SHA256。
 * @param params 业务参数（建议包含 access_token）。
 * @param appKey 米大师 AppKey。
 * @returns 十六进制小写签名串。
 */
export function buildMidasSig(params: SignParams, appKey: string): string {
  const source = buildSignSource(params);
  return crypto.createHmac('sha256', appKey).update(source, 'utf8').digest('hex');
}

/**
 * 计算 Midas `mp_sig`：对「业务参数 + access_token + sig」字典序拼接后用 session_key 做 HMAC-SHA256。
 * @param params 业务参数（应包含 access_token 与已算好的 sig）。
 * @param sessionKey 用户 session_key（来自 code2Session）。
 * @returns 十六进制小写签名串。
 */
export function buildMidasMpSig(params: SignParams, sessionKey: string): string {
  const source = buildSignSource(params);
  return crypto.createHmac('sha256', sessionKey).update(source, 'utf8').digest('hex');
}
