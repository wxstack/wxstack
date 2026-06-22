/**
 * 永久素材与临时素材接口（含二进制下载）。
 *
 * 二进制下载遵循内核约定：使用 `client.requestRaw({ responseType:'arraybuffer' })`
 * 并取 `resp.raw`（Buffer）。图文类素材仍返回 JSON。
 */
import type { OaClient } from '../client.js';
import type { UploadInput } from '../types.js';
import { buildUploadForm } from './_upload.js';
import type { ErrResult } from './menu.js';

/* -------------------- 永久素材 -------------------- */

/**
 * 获取永久素材。
 *
 * 图文素材返回 JSON；非图文（图片/语音等）为二进制。
 * 传 `responseType:'arraybuffer'` 时返回 Buffer，否则返回解析后的 JSON。
 * @param client OaClient 实例。
 * @param params media_id 与可选 responseType。
 * @returns JSON 对象或 Buffer。
 * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterial.html
 */
export async function getMaterial(
  client: OaClient,
  { media_id, responseType }: { media_id: string; responseType?: 'json' | 'arraybuffer' },
): Promise<Record<string, unknown> | Buffer> {
  if (!media_id) throw new Error('[getMaterial] media_id is required');
  if (responseType === 'arraybuffer') {
    const resp = await client.requestRaw({
      method: 'POST',
      url: '/cgi-bin/material/get_material',
      body: { media_id },
      responseType: 'arraybuffer',
    });
    return resp.raw;
  }
  return client.request({
    method: 'POST',
    url: '/cgi-bin/material/get_material',
    body: { media_id },
  });
}

/**
 * 获取素材总数。
 * @param client OaClient 实例。
 * @returns 各类型素材数量。
 * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterialcount.html
 */
export async function getMaterialCount(
  client: OaClient,
): Promise<{ voice_count: number; video_count: number; image_count: number; news_count: number }> {
  return client.request({ method: 'GET', url: '/cgi-bin/material/get_materialcount' });
}

/** 批量获取素材列表入参。 */
export interface BatchGetMaterialParams {
  type: 'image' | 'video' | 'voice' | 'news';
  offset: number;
  count: number;
}

/**
 * 批量获取素材列表。
 * @param client OaClient 实例。
 * @param payload type、offset、count。
 * @returns 素材列表。
 * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_batchgetmaterial.html
 */
export async function batchGetMaterial(
  client: OaClient,
  payload: BatchGetMaterialParams,
): Promise<{ total_count: number; item_count: number; item: Array<Record<string, unknown>> }> {
  const { type, offset, count } = payload ?? {};
  if (!type) throw new Error('[batchGetMaterial] type is required');
  if (offset === undefined || count === undefined) {
    throw new Error('[batchGetMaterial] offset and count are required');
  }
  return client.request({
    method: 'POST',
    url: '/cgi-bin/material/batchget_material',
    body: { ...payload },
  });
}

/**
 * 上传图文消息内图片（永久素材域）。
 * @param client OaClient 实例。
 * @param input 上传文件入参。
 * @returns 图片 URL。
 * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_uploadimage.html
 */
export async function materialUploadImage(
  client: OaClient,
  input: UploadInput,
): Promise<{ url: string }> {
  const form = await buildUploadForm(input, 'image.jpg', 'materialUploadImage');
  return client.request({ method: 'POST', url: '/cgi-bin/media/uploadimg', body: form });
}

/** 新增永久素材入参。 */
export type AddMaterialParams = {
  type: 'image' | 'voice' | 'video' | 'thumb';
  videoDescription?: { title: string; introduction: string };
} & UploadInput;

/**
 * 新增其他类型永久素材（图片/语音/视频/缩略图）。
 * @param client OaClient 实例。
 * @param params type、视频描述与上传文件入参。
 * @returns media_id（视频/图片含 url）。
 * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_addmaterial.html
 */
export async function addMaterial(
  client: OaClient,
  { type, videoDescription, ...input }: AddMaterialParams,
): Promise<{ media_id: string; url?: string }> {
  if (!type) throw new Error('[addMaterial] type is required');
  const form = await buildUploadForm(input, 'file.bin', 'addMaterial');
  if (type === 'video' && videoDescription) {
    form.append('description', JSON.stringify(videoDescription));
  }
  return client.request({
    method: 'POST',
    url: '/cgi-bin/material/add_material',
    query: { type },
    body: form,
  });
}

/**
 * 删除永久素材。
 * @param client OaClient 实例。
 * @param params media_id。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_delmaterial.html
 */
export async function delMaterial(
  client: OaClient,
  { media_id }: { media_id: string },
): Promise<ErrResult> {
  if (!media_id) throw new Error('[delMaterial] media_id is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/material/del_material',
    body: { media_id },
  });
}

/* -------------------- 临时素材 -------------------- */

/**
 * 获取临时素材（二进制）。
 * @param client OaClient 实例。
 * @param params media_id。
 * @returns 素材字节（Buffer）。
 * @see https://developers.weixin.qq.com/doc/service/api/material/temporary/api_getmedia.html
 */
export async function getMedia(
  client: OaClient,
  { media_id }: { media_id: string },
): Promise<Buffer> {
  if (!media_id) throw new Error('[getMedia] media_id is required');
  const resp = await client.requestRaw({
    method: 'GET',
    url: '/cgi-bin/media/get',
    query: { media_id },
    responseType: 'arraybuffer',
  });
  return resp.raw;
}

/** 上传临时素材入参。 */
export type UploadTempMediaParams = {
  type: 'image' | 'voice' | 'video' | 'thumb';
} & UploadInput;

/**
 * 上传临时素材。
 * @param client OaClient 实例。
 * @param params type 与上传文件入参。
 * @returns type、media_id、created_at。
 * @see https://developers.weixin.qq.com/doc/service/api/material/temporary/api_uploadtempmedia.html
 */
export async function uploadTempMedia(
  client: OaClient,
  { type, ...input }: UploadTempMediaParams,
): Promise<{ type: string; media_id: string; created_at: number }> {
  if (!type) throw new Error('[uploadTempMedia] type is required');
  const form = await buildUploadForm(input, 'file.bin', 'uploadTempMedia');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/media/upload',
    query: { type },
    body: form,
  });
}

/**
 * 高清语音素材获取（JSSDK 语音下载，二进制）。
 * @param client OaClient 实例。
 * @param params media_id。
 * @returns 语音字节（Buffer）。
 * @see https://developers.weixin.qq.com/doc/service/api/material/temporary/api_gethdvoice.html
 */
export async function getHdVoice(
  client: OaClient,
  { media_id }: { media_id: string },
): Promise<Buffer> {
  if (!media_id) throw new Error('[getHdVoice] media_id is required');
  const resp = await client.requestRaw({
    method: 'GET',
    url: '/cgi-bin/media/get/jssdk',
    query: { media_id },
    responseType: 'arraybuffer',
  });
  return resp.raw;
}
