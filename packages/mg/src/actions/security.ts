/**
 * 内容安全接口：文本检测、媒体异步检测。
 *
 * 端点函数为纯函数：接收已装配好的 BaseClient 与请求体，返回 client.request(...)。
 */
import type { BaseClient } from '@wxstack/core';
import type { MediaCheckAsyncResult, MsgSecCheckResult } from '../types.js';

/**
 * 文本内容安全检测（version 2）。
 *
 * 检测一段文本是否含违法违规内容（敏感词、广告、政治等）。
 * 内核会自动附加 access_token（query）。请求体须包含 `openid`、`scene`、`content` 等字段，
 * 这里固定附加 `version:2`（可被入参覆盖）。
 *
 * @param client 已装配的客户端。
 * @param body 检测请求体（如 { content, version, scene, openid, ... }）。
 * @see https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/sec-check/msgSecCheck.html
 */
export function msgSecCheck(
  client: BaseClient,
  body: Record<string, unknown>,
): Promise<MsgSecCheckResult> {
  return client.request<MsgSecCheckResult>({
    method: 'POST',
    url: '/wxa/msg_sec_check',
    body: { version: 2, ...body },
  });
}

/**
 * 媒体（图片 / 音频）异步内容安全检测。
 *
 * 提交后即时返回 trace_id，检测结果通过消息推送（回调）异步返回。
 *
 * @param client 已装配的客户端。
 * @param body 检测请求体（如 { media_url, media_type, version, openid, scene, ... }）。
 * @see https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/sec-check/mediaCheckAsync.html
 */
export function mediaCheckAsync(
  client: BaseClient,
  body: Record<string, unknown>,
): Promise<MediaCheckAsyncResult> {
  return client.request<MediaCheckAsyncResult>({
    method: 'POST',
    url: '/wxa/media_check_async',
    body: { version: 2, ...body },
  });
}
