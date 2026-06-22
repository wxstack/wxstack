/**
 * 客服消息与临时素材相关端点。
 *
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/customer-message/
 */
import { buildApiError, isApiErrorBody } from '@wxstack/core';
import type { MpClient } from '../client.js';
import type { JsonObject, TempMediaType } from '../types.js';

/**
 * 发送客服消息（文本、图片、图文链接、小程序卡片等）。
 * @param body 形如 `{ touser, msgtype, text? | image? | link? | miniprogrampage? }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/customer-message/sendCustomerMessage.html
 */
export async function sendCustomMessage(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/cgi-bin/message/custom/send', body);
}

/**
 * 下发客服「正在输入」状态。
 * @param body 形如 `{ touser, command: 'Typing' | 'CancelTyping' }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/customer-message/setTyping.html
 */
export async function setTyping(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/cgi-bin/message/custom/typing', body);
}

/**
 * 上传临时素材（multipart），用于客服消息等。
 *
 * 用全局 FormData + Blob 装配 multipart；file 接受 Buffer / Uint8Array / ArrayBuffer / Blob。
 * @param type 素材类型（image / voice / video / thumb）。
 * @param file 媒体文件内容。
 * @param filename 文件名（默认按类型推断扩展名）。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/customer-message/uploadTempMedia.html
 */
export async function uploadTempMedia(
  client: MpClient,
  type: TempMediaType,
  file: Buffer | Uint8Array | ArrayBuffer | Blob,
  filename?: string,
): Promise<{ type: string; media_id: string; created_at: number } & JsonObject> {
  const form = new FormData();
  // Buffer / Uint8Array / ArrayBuffer 均可被 Blob 构造函数接受（避免 DOM 专属类型 BlobPart）。
  const blob = file instanceof Blob ? file : new Blob([file as Uint8Array]);
  form.append('media', blob, filename ?? `media-${type}`);
  return client.post<{ type: string; media_id: string; created_at: number } & JsonObject>(
    '/cgi-bin/media/upload',
    form,
    { query: { type } },
  );
}

/**
 * 获取临时素材（二进制下载，返回 Buffer）。
 *
 * 注意：视频素材的下载需用 http（微信返回的是带 down_url 的 JSON），
 * 其余类型直接返回文件字节。若返回 JSON 错误体则抛 WxApiError。
 * @param mediaId 上传素材时拿到的 media_id。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/customer-message/getTempMedia.html
 */
export async function getTempMedia(client: MpClient, mediaId: string): Promise<Buffer> {
  const resp = await client.requestRaw<Buffer>({
    method: 'GET',
    url: '/cgi-bin/media/get',
    query: { media_id: mediaId },
    responseType: 'arraybuffer',
  });
  // 失败时微信返回 JSON 错误体，需要识别并抛错。
  const ct = (resp.headers['content-type'] ?? '').toLowerCase();
  if (ct.includes('json') || resp.raw[0] === 0x7b) {
    let body: unknown;
    try {
      body = JSON.parse(resp.raw.toString('utf8'));
    } catch {
      body = undefined;
    }
    if (isApiErrorBody(body)) throw buildApiError(body);
  }
  return resp.raw;
}
