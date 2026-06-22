/**
 * 素材管理：上传临时素材、下载素材。
 * @see https://developer.work.weixin.qq.com/document/path/90253
 */
import type { BaseClient } from '@wxstack/core';
import type { WecomBaseResponse } from '../types.js';

type Caller = Pick<BaseClient, 'request' | 'requestRaw'>;

/** 上传临时素材的类型。 */
export type MediaType = 'image' | 'voice' | 'video' | 'file';

/** 上传临时素材返回体。 */
export interface UploadMediaResponse extends WecomBaseResponse {
  type?: string;
  media_id?: string;
  created_at?: string;
}

/** 上传素材入参：文件内容 + 文件名。 */
export interface UploadMediaFile {
  /** 文件二进制内容。 */
  data: Buffer | Uint8Array | ArrayBuffer | Blob;
  /** 文件名（带扩展名，企业微信据此判定类型）。 */
  filename: string;
  /** MIME 类型（可选）。 */
  contentType?: string;
}

/**
 * 上传临时素材（multipart/form-data，3 天有效）。
 * @see https://developer.work.weixin.qq.com/document/path/90253
 */
export function uploadMedia(
  client: Caller,
  type: MediaType,
  file: UploadMediaFile,
): Promise<UploadMediaResponse> {
  const form = new FormData();
  let blob: Blob;
  if (file.data instanceof Blob) {
    blob = file.data;
  } else {
    // 统一转成 Uint8Array 视图，避免依赖浏览器 BlobPart 类型。
    const bytes =
      file.data instanceof Uint8Array ? file.data : new Uint8Array(file.data as ArrayBuffer);
    blob = new Blob([bytes], file.contentType ? { type: file.contentType } : undefined);
  }
  form.append('media', blob, file.filename);
  return client.request({
    method: 'POST',
    url: '/cgi-bin/media/upload',
    query: { type },
    body: form,
  });
}

/**
 * 下载临时素材（二进制），返回原始字节 Buffer。
 * @see https://developer.work.weixin.qq.com/document/path/90254
 */
export async function getMedia(client: Caller, media_id: string): Promise<Buffer> {
  const resp = await client.requestRaw<Buffer>({
    method: 'GET',
    url: '/cgi-bin/media/get',
    query: { media_id },
    responseType: 'arraybuffer',
  });
  return resp.raw;
}
