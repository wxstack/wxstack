/**
 * 小程序码 / 二维码相关端点（返回二进制图片）。
 *
 * 这些端点成功时直接返回图片字节（Buffer），失败时返回 JSON 错误体。
 * 因此统一用 `requestRaw({ responseType: 'arraybuffer' })` 取原始字节，
 * 再通过 {@link decodeImageOrThrow} 判别：若是 JSON 错误则抛 WxApiError。
 *
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/
 */
import { type HttpResponse, buildApiError, isApiErrorBody } from '@wxstack/core';
import type { MpClient } from '../client.js';
import type { JsonObject } from '../types.js';

/**
 * 将响应字节判别为图片或 JSON 错误。
 *
 * 微信失败时返回 `application/json`（形如 `{"errcode":...,"errmsg":...}`），
 * 成功时返回 `image/*`。优先看 content-type，其次嗅探首字节是否为 `{`。
 */
function decodeImageOrThrow(resp: HttpResponse<Buffer>): Buffer {
  const ct = (resp.headers['content-type'] ?? '').toLowerCase();
  const raw = resp.raw;
  const looksJson = ct.includes('json') || ct.includes('text') || raw[0] === 0x7b; // '{'
  if (looksJson) {
    let body: unknown;
    try {
      body = JSON.parse(raw.toString('utf8'));
    } catch {
      body = undefined;
    }
    if (isApiErrorBody(body)) {
      throw buildApiError(body);
    }
  }
  return raw;
}

/**
 * 获取小程序码（数量有限，适合需要的码数量较少的业务）。
 * @param body 形如 `{ path, width?, auto_color?, line_color?, is_hyaline?, env_version? }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/getQRCode.html
 */
export async function getQRCode(client: MpClient, body: JsonObject): Promise<Buffer> {
  const resp = await client.requestRaw<Buffer>({
    method: 'POST',
    url: '/wxa/getwxacode',
    body,
    responseType: 'arraybuffer',
  });
  return decodeImageOrThrow(resp);
}

/**
 * 获取不限数量的小程序码（适合码数量极多的业务）。
 * @param body 形如 `{ scene, page?, width?, check_path?, env_version? }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/getUnlimitedQRCode.html
 */
export async function getUnlimited(client: MpClient, body: JsonObject): Promise<Buffer> {
  const resp = await client.requestRaw<Buffer>({
    method: 'POST',
    url: '/wxa/getwxacodeunlimit',
    body,
    responseType: 'arraybuffer',
  });
  return decodeImageOrThrow(resp);
}

/**
 * 获取小程序二维码（数量有限）。
 * @param body 形如 `{ path, width? }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/createQRCode.html
 */
export async function createQRCode(client: MpClient, body: JsonObject): Promise<Buffer> {
  const resp = await client.requestRaw<Buffer>({
    method: 'POST',
    url: '/cgi-bin/wxaapp/createwxaqrcode',
    body,
    responseType: 'arraybuffer',
  });
  return decodeImageOrThrow(resp);
}
