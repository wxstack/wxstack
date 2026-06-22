/**
 * 内容安全相关端点。
 *
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/sec-check/
 */
import type { MpClient } from '../client.js';
import type { JsonObject } from '../types.js';

/**
 * 文本内容安全检测（v2）。
 * @param body 形如 `{ content, version: 2, scene, openid, title?, nickname?, ... }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/sec-check/msgSecCheck.html
 */
export async function msgSecCheck(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/wxa/msg_sec_check', body);
}

/**
 * 音视频 / 图片内容异步安全检测，返回 trace_id 以便后续接收回调结果。
 * @param body 形如 `{ media_url, media_type, version: 2, scene, openid }`。
 * @returns `{ trace_id }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/sec-check/mediaCheckAsync.html
 */
export async function mediaCheckAsync(
  client: MpClient,
  body: JsonObject,
): Promise<{ trace_id: string } & JsonObject> {
  return client.post<{ trace_id: string } & JsonObject>('/wxa/media_check_async', body);
}
