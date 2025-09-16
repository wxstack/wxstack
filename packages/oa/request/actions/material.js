import fs from 'node:fs';
import path from 'node:path';
import FormData from 'form-data';

/**
 * 内部：构建上传表单
 * @param {{filePath?: string, file?: Buffer|import('stream').Readable, filename?: string, contentType?: string}} input
 * @returns {FormData}
 */
function buildUploadForm(input = {}) {
    const form = new FormData();
    if (input.filePath) {
        const stream = fs.createReadStream(input.filePath);
        const filename = input.filename || path.basename(input.filePath);
        form.append('media', stream, { filename });
    } else if (input.file) {
        const filename = input.filename || 'file.bin';
        const opts = input.contentType ? { filename, contentType: input.contentType } : { filename };
        form.append('media', input.file, opts);
    } else {
        throw new Error('[material] either filePath or file is required');
    }
    return form;
}

/* -------------------- 永久素材 -------------------- */

/**
 * 获取永久素材。
 * 文档: https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterial.html
 *
 * 注意：图文素材返回 JSON；非图文（图片/语音等）返回二进制。可用 responseType 指定返回体类型。
 *
 * @summary getMaterial
 * @param {import('../../client.js').SaClient} client
 * @param {{media_id:string, responseType?: 'json'|'arraybuffer'}} params
 * @returns {Promise<any>}
 */
export async function getMaterial(client, { media_id, responseType } = {}) {
    if (!media_id) throw new Error('[getMaterial] media_id is required');
    const opts = { data: { media_id } };
    if (responseType) opts.responseType = responseType;
    return client.request('POST', '/cgi-bin/material/get_material', opts);
}

/**
 * 获取素材总数。
 * 文档: https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterialcount.html
 *
 * @summary getMaterialCount
 * @param {import('../../client.js').SaClient} client
 * @returns {Promise<{voice_count:number, video_count:number, image_count:number, news_count:number}>}
 */
export async function getMaterialCount(client) {
    return client.request('GET', '/cgi-bin/material/get_materialcount');
}

/**
 * 批量获取素材列表。
 * 文档: https://developers.weixin.qq.com/doc/service/api/material/permanent/api_batchgetmaterial.html
 *
 * @summary batchGetMaterial
 * @param {import('../../client.js').SaClient} client
 * @param {{type:'image'|'video'|'voice'|'news', offset:number, count:number}} payload
 * @returns {Promise<{total_count:number, item_count:number, item:Array<Object>}>}
 */
export async function batchGetMaterial(client, payload) {
    const { type, offset, count } = payload || {};
    if (!type && type !== 'news') throw new Error('[batchGetMaterial] type is required');
    if (offset === undefined || count === undefined) {
        throw new Error('[batchGetMaterial] offset and count are required');
    }
    return client.request('POST', '/cgi-bin/material/batchget_material', { data: payload });
}

/**
 * 上传图文消息内图片（永久素材域）。
 * 文档: https://developers.weixin.qq.com/doc/service/api/material/permanent/api_uploadimage.html
 *
 * @summary materialUploadImage
 * @param {import('../../client.js').SaClient} client
 * @param {{filePath?:string, file?:Buffer|import('stream').Readable, filename?:string, contentType?:string}} input
 * @returns {Promise<{url:string}>}
 */
export async function materialUploadImage(client, input) {
    const form = buildUploadForm(input);
    return client.request('POST', '/cgi-bin/media/uploadimg', {
        data: form,
        headers: form.getHeaders(),
    });
}

/**
 * 新增其他类型永久素材（图片/语音/视频/缩略图）。
 * 文档: https://developers.weixin.qq.com/doc/service/api/material/permanent/api_addmaterial.html
 *
 * @summary addMaterial
 * @param {import('../../client.js').SaClient} client
 * @param {{type:'image'|'voice'|'video'|'thumb'} & ({filePath:string} | {file:Buffer|import('stream').Readable, filename?:string, contentType?:string}) & {videoDescription?: {title:string, introduction:string}}} params
 * @returns {Promise<{media_id:string, url?:string}>}
 */
export async function addMaterial(client, { type, videoDescription, ...input }) {
    if (!type) throw new Error('[addMaterial] type is required');
    const form = buildUploadForm(input);
    if (type === 'video' && videoDescription) {
        form.append('description', JSON.stringify(videoDescription));
    }
    return client.request('POST', '/cgi-bin/material/add_material', {
        params: { type },
        data: form,
        headers: form.getHeaders(),
    });
}

/**
 * 删除永久素材。
 * 文档: https://developers.weixin.qq.com/doc/service/api/material/permanent/api_delmaterial.html
 *
 * @summary delMaterial
 * @param {import('../../client.js').SaClient} client
 * @param {{media_id:string}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function delMaterial(client, { media_id }) {
    if (!media_id) throw new Error('[delMaterial] media_id is required');
    return client.request('POST', '/cgi-bin/material/del_material', { data: { media_id } });
}

/* -------------------- 临时素材 -------------------- */

/**
 * 获取临时素材（二进制）。
 * 文档: https://developers.weixin.qq.com/doc/service/api/material/temporary/api_getmedia.html
 *
 * @summary getMedia
 * @param {import('../../client.js').SaClient} client
 * @param {{media_id:string, responseType?: 'arraybuffer'|'stream'}} params
 * @returns {Promise<any>}
 */
export async function getMedia(client, { media_id, responseType = 'arraybuffer' }) {
    if (!media_id) throw new Error('[getMedia] media_id is required');
    return client.request('GET', '/cgi-bin/media/get', {
        params: { media_id },
        responseType,
    });
}

/**
 * 上传临时素材。
 * 文档: https://developers.weixin.qq.com/doc/service/api/material/temporary/api_uploadtempmedia.html
 *
 * @summary uploadTempMedia
 * @param {import('../../client.js').SaClient} client
 * @param {{type:'image'|'voice'|'video'|'thumb'} & ({filePath:string} | {file:Buffer|import('stream').Readable, filename?:string, contentType?:string})} params
 * @returns {Promise<{type:string, media_id:string, created_at:number}>}
 */
export async function uploadTempMedia(client, { type, ...input }) {
    if (!type) throw new Error('[uploadTempMedia] type is required');
    const form = buildUploadForm(input);
    return client.request('POST', '/cgi-bin/media/upload', {
        params: { type },
        data: form,
        headers: form.getHeaders(),
    });
}

/**
 * 高清语音素材获取（JSSDK 语音下载）。
 * 文档: https://developers.weixin.qq.com/doc/service/api/material/temporary/api_gethdvoice.html
 *
 * @summary getHdVoice
 * @param {import('../../client.js').SaClient} client
 * @param {{media_id:string, responseType?: 'arraybuffer'|'stream'}} params
 * @returns {Promise<any>}
 */
export async function getHdVoice(client, { media_id, responseType = 'arraybuffer' }) {
    if (!media_id) throw new Error('[getHdVoice] media_id is required');
    return client.request('GET', '/cgi-bin/media/get/jssdk', {
        params: { media_id },
        responseType,
    });
}
