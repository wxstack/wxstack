/**
 * 登录态接口：code2Session。
 *
 * 端点函数为纯函数：接收已装配好的 BaseClient（具备自动鉴权/重试/解包）与参数，
 * 返回 client.request(...) 的 Promise。高层语义封装在 client.ts 中调用这些函数。
 */
import type { BaseClient } from '@wxstack/core';
import type { Code2SessionResult } from '../types.js';

/**
 * 用临时登录凭证 code 换取用户登录态（openid / session_key / unionid）。
 *
 * 该接口走 /sns/* 域，使用 appid + secret 直接鉴权，**不需要 access_token**，
 * 因此调用时显式 `auth:false`。
 *
 * @param client 已装配的客户端。
 * @param appId 小游戏 AppID。
 * @param appSecret 小游戏 AppSecret。
 * @param jsCode 客户端 wx.login 得到的临时登录凭证。
 * @see https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/login/code2Session.html
 */
export function code2Session(
  client: BaseClient,
  appId: string,
  appSecret: string,
  jsCode: string,
): Promise<Code2SessionResult> {
  return client.request<Code2SessionResult>({
    method: 'GET',
    url: '/sns/jscode2session',
    query: {
      appid: appId,
      secret: appSecret,
      js_code: jsCode,
      grant_type: 'authorization_code',
    },
    auth: false,
  });
}
