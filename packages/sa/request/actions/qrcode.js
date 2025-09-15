/* -------------------- 二维码跳转（规则管理） -------------------- */

/**
 * 获取已设置的二维码跳转规则。
 * 文档: https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpget.html
 *
 * @summary qrcodeJumpGet
 * @param {import('../../client.js').SaClient} client
 * @returns {Promise<Object>}
 */
export async function qrcodeJumpGet(client) {
    return client.request('GET', '/cgi-bin/wxopen/qrcodejumpget');
}

/**
 * 增加二维码跳转规则。
 * 文档: https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpadd.html
 *
 * @summary qrcodeJumpAdd
 * @param {import('../../client.js').SaClient} client
 * @param {{prefix:string, path:string, open_version?:number, permit_sub_rule?:1|0, debug_url?:string[]}} payload
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function qrcodeJumpAdd(client, payload = {}) {
    const { prefix, path } = payload;
    if (!prefix) throw new Error('[qrcodeJumpAdd] prefix is required');
    if (!path) throw new Error('[qrcodeJumpAdd] path is required');
    return client.request('POST', '/cgi-bin/wxopen/qrcodejumpadd', { data: payload });
}

/**
 * 发布二维码跳转规则。
 * 文档: https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumppublish.html
 *
 * @summary qrcodeJumpPublish
 * @param {import('../../client.js').SaClient} client
 * @param {{prefix:string}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function qrcodeJumpPublish(client, { prefix }) {
    if (!prefix) throw new Error('[qrcodeJumpPublish] prefix is required');
    return client.request('POST', '/cgi-bin/wxopen/qrcodejumppublish', { data: { prefix } });
}

/**
 * 删除二维码跳转规则。
 * 文档: https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpdelete.html
 *
 * @summary qrcodeJumpDelete
 * @param {import('../../client.js').SaClient} client
 * @param {{prefix:string}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function qrcodeJumpDelete(client, { prefix }) {
    if (!prefix) throw new Error('[qrcodeJumpDelete] prefix is required');
    return client.request('POST', '/cgi-bin/wxopen/qrcodejumpdelete', { data: { prefix } });
}

/* -------------------- 生成二维码 -------------------- */

/**
 * 创建二维码（临时/永久）。
 * 文档: https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodes/api_createqrcode.html
 *
 * @summary createQrcode
 * @param {import('../../client.js').SaClient} client
 * @param {{expire_seconds?:number, action_name:'QR_SCENE'|'QR_STR_SCENE'|'QR_LIMIT_SCENE'|'QR_LIMIT_STR_SCENE', action_info:{scene:{scene_id?:number, scene_str?:string}}}} payload
 * @returns {Promise<{ticket:string, expire_seconds?:number, url:string}>}
 */
export async function createQrcode(client, payload = {}) {
    const { action_name, action_info } = payload;
    if (!action_name) throw new Error('[createQrcode] action_name is required');
    if (!action_info) throw new Error('[createQrcode] action_info is required');
    return client.request('POST', '/cgi-bin/qrcode/create', { data: payload });
}

/* -------------------- 短链接/短 Key -------------------- */

/**
 * 生成短 Key。
 * 文档: https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_genshortkey.html
 *
 * @summary genShortKey
 * @param {import('../../client.js').SaClient} client
 * @param {{long_url:string, expire_seconds?:number}} payload
 * @returns {Promise<{short_key:string, expire_seconds?:number}>}
 */
export async function genShortKey(client, { long_url, expire_seconds } = {}) {
    if (!long_url) throw new Error('[genShortKey] long_url is required');
    const data = expire_seconds ? { long_url, expire_seconds } : { long_url };
    return client.request('POST', '/cgi-bin/shorten/gen', { data });
}

/**
 * 通过短 Key 拉取原始信息。
 * 文档: https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_fetchshorten.html
 *
 * @summary fetchShorten
 * @param {import('../../client.js').SaClient} client
 * @param {{short_key:string}} params
 * @returns {Promise<{long_url?:string, status?:number}>}
 */
export async function fetchShorten(client, { short_key }) {
    if (!short_key) throw new Error('[fetchShorten] short_key is required');
    return client.request('POST', '/cgi-bin/shorten/fetch', { data: { short_key } });
}