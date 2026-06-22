/**
 * 身份验证：OAuth 网页授权与 JS-SDK 签名工具（纯函数，不依赖网络）。
 *
 * - `buildOAuthUrl`：构造网页授权跳转链接（静默 / 敏感信息授权）。
 * - `buildJsSdkSignature`：用 jsapi_ticket 计算 wx.config 所需的签名。
 */
import { buildQuery, sha1 } from '@wxstack/core';
import type { BuildOAuthUrlParams, JsSdkSignature } from './types.js';

/**
 * 构造企业微信网页授权（OAuth2）跳转链接。
 * 用户访问该链接同意授权后，会带 code 重定向回 redirect_uri，再用 code 调 `getUserInfo`。
 * @param corpid 企业 ID。
 * @param params 回调地址、作用域、state、agentid。
 * @returns 形如 `https://open.weixin.qq.com/connect/oauth2/authorize?...#wechat_redirect` 的链接。
 * @see https://developer.work.weixin.qq.com/document/path/91022
 */
export function buildOAuthUrl(corpid: string, params: BuildOAuthUrlParams): string {
  const query = buildQuery({
    appid: corpid,
    redirect_uri: params.redirect_uri,
    response_type: 'code',
    scope: params.scope ?? 'snsapi_base',
    state: params.state,
    agentid: params.agentid,
  });
  return `https://open.weixin.qq.com/connect/oauth2/authorize${query}#wechat_redirect`;
}

/** 生成 JS-SDK 签名用的随机串。 */
function randomNonce(len = 16): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let out = '';
  for (let i = 0; i < len; i++) {
    out += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return out;
}

/**
 * 计算 JS-SDK（wx.config）签名。
 * 签名串为 `jsapi_ticket=...&noncestr=...&timestamp=...&url=...` 的 SHA1。
 * @param url 当前网页的完整 URL（不含 # 及其后部分）。
 * @param ticket 通过 `getJsApiTicket()` 获取的 jsapi_ticket。
 * @returns noncestr、timestamp 与 signature，供前端 wx.config 使用。
 * @see https://developer.work.weixin.qq.com/document/path/90506
 */
export function buildJsSdkSignature(url: string, ticket: string): JsSdkSignature {
  const noncestr = randomNonce(16);
  const timestamp = Math.floor(Date.now() / 1000);
  const raw = `jsapi_ticket=${ticket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${url}`;
  return { noncestr, timestamp, signature: sha1(raw) };
}
