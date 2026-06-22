/**
 * 登录与用户信息相关端点。
 *
 * 这些端点导出为 `(client, params) => client.request(...)` 的纯函数，
 * 由 {@link MpClient} 的高层方法装配调用。
 */
import type { MpClient } from '../client.js';
import type { Code2SessionResult, GetPhoneNumberResult, JsonObject } from '../types.js';

/**
 * 登录凭证校验：用 jsCode 换取 openid / session_key / unionid。
 *
 * 该端点不需要 access_token（auth:false），用 appid + secret 直接换取。
 * @param jsCode 前端 wx.login 拿到的临时登录凭证 code。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html
 */
export async function code2Session(client: MpClient, jsCode: string): Promise<Code2SessionResult> {
  return client.request<Code2SessionResult>({
    method: 'GET',
    url: '/sns/jscode2session',
    query: {
      appid: client.appId,
      secret: client.appSecret,
      js_code: jsCode,
      grant_type: 'authorization_code',
    },
    auth: false,
  });
}

/**
 * 获取手机号：用前端 getPhoneNumber 返回的动态 code 换取手机号信息。
 * @param params 形如 `{ code }`，可附带 openid。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/phone-number/getPhoneNumber.html
 */
export async function getPhoneNumber(
  client: MpClient,
  params: { code: string } & JsonObject,
): Promise<GetPhoneNumberResult> {
  return client.post<GetPhoneNumberResult>('/wxa/business/getuserphonenumber', params);
}

/**
 * 获取用户安全等级（风控）。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/sec-check/getUserRiskRank.html
 */
export async function getUserRiskRank(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/wxa/getuserriskrank', body);
}
