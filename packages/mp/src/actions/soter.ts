/**
 * 生物认证（SOTER）相关端点。
 *
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/soter/
 */
import type { MpClient } from '../client.js';
import type { JsonObject } from '../types.js';

/**
 * SOTER 生物认证秘钥签名验证。
 * @param body 形如 `{ openid, json_string, json_signature }`。
 * @returns `{ is_ok }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/soter/verifySignature.html
 */
export async function verifySignature(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/cgi-bin/soter/verify_signature', body);
}
