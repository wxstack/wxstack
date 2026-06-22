/**
 * 内部共享：将上传入参（本地路径或字节）构建为全局 FormData。
 *
 * 使用 Node 全局 `FormData` + `Blob`（Node 18+），不依赖第三方 form-data 包，
 * 也不使用浏览器专属类型。字段名固定为 `media`（与微信上传接口一致）。
 */
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { UploadInput } from '../types.js';

/**
 * 构建上传表单。
 * @param input 上传入参（filePath 或 file 二选一）。
 * @param fallbackName 当无法推断文件名时的兜底名。
 * @param label 错误信息前缀（用于定位调用方）。
 * @returns 可直接作为 body 传给 client.request 的 FormData。
 */
export async function buildUploadForm(
  input: UploadInput = {},
  fallbackName = 'file.bin',
  label = 'upload',
): Promise<FormData> {
  const form = new FormData();
  if (input.filePath) {
    const bytes = await readFile(input.filePath);
    const filename = input.filename ?? path.basename(input.filePath);
    const blob = input.contentType
      ? new Blob([bytes], { type: input.contentType })
      : new Blob([bytes]);
    form.append('media', blob, filename);
  } else if (input.file) {
    const filename = input.filename ?? fallbackName;
    const bytes = input.file instanceof Uint8Array ? input.file : new Uint8Array(input.file);
    const blob = input.contentType
      ? new Blob([bytes], { type: input.contentType })
      : new Blob([bytes]);
    form.append('media', blob, filename);
  } else {
    throw new Error(`[${label}] either filePath or file is required`);
  }
  return form;
}
