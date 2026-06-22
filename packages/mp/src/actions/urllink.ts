/**
 * URL Scheme / URL Link / 短链相关端点。
 *
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/url-scheme/
 */
import type { MpClient } from '../client.js';
import type { JsonObject } from '../types.js';

/**
 * 生成跳转小程序的 URL Scheme。
 * @param body 形如 `{ jump_wxa?, is_expire?, expire_time?, expire_interval? }`。
 * @returns `{ openlink }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/url-scheme/generateScheme.html
 */
export async function generateScheme(
  client: MpClient,
  body: JsonObject,
): Promise<{ openlink: string } & JsonObject> {
  return client.post<{ openlink: string } & JsonObject>('/wxa/generatescheme', body);
}

/**
 * 查询 URL Scheme 的配置与生效情况。
 * @param body 形如 `{ scheme }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/url-scheme/queryScheme.html
 */
export async function queryScheme(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/wxa/queryscheme', body);
}

/**
 * 生成加密的 URL Link，适用于短信、邮件等场景跳转小程序。
 * @param body 形如 `{ path?, query?, is_expire?, expire_type?, expire_time?, ... }`。
 * @returns `{ url_link }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/url-link/generateUrlLink.html
 */
export async function generateUrlLink(
  client: MpClient,
  body: JsonObject,
): Promise<{ url_link: string } & JsonObject> {
  return client.post<{ url_link: string } & JsonObject>('/wxa/generate_urllink', body);
}

/**
 * 查询 URL Link 的配置与生效情况。
 * @param body 形如 `{ url_link }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/url-link/queryUrlLink.html
 */
export async function queryUrlLink(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/wxa/query_urllink', body);
}

/**
 * 生成 Short Link，适用于微信内拉起小程序的业务场景。
 * @param body 形如 `{ page_url, page_title, is_permanent? }`。
 * @returns `{ link }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/short-link/generateShortLink.html
 */
export async function generateShortLink(
  client: MpClient,
  body: JsonObject,
): Promise<{ link: string } & JsonObject> {
  return client.post<{ link: string } & JsonObject>('/wxa/genwxashortlink', body);
}
