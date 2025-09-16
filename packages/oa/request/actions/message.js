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
        const filename = input.filename || 'file.jpg';
        const opts = input.contentType ? { filename, contentType: input.contentType } : { filename };
        form.append('media', input.file, opts);
    } else {
        throw new Error('[uploadImage] either filePath or file is required');
    }
    return form;
}

/**
 * 上传图文消息内图片，返回可在正文中使用的 URL。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_uploadimage.html
 *
 * @summary uploadImage
 * @param {import('../../client.js').SaClient} client - SaClient 实例
 * @param {{filePath?: string, file?: Buffer|import('stream').Readable, filename?: string, contentType?: string}} input - 文件路径或文件流/Buffer
 * @returns {Promise<{url: string}>} 图片 URL
 */
export async function uploadImage(client, input) {
    const form = buildUploadForm(input);
    return client.request('POST', '/cgi-bin/media/uploadimg', {
        data: form,
        headers: form.getHeaders(),
    });
}

/**
 * 删除群发消息。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_deletemassmsg.html
 *
 * @summary deleteMassMsg
 * @param {import('../../client.js').SaClient} client
 * @param {{msg_id: number|string, article_idx?: number}} params - msg_id 必填，article_idx 可选（当删除图文中某篇）
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function deleteMassMsg(client, { msg_id, article_idx }) {
    if (!msg_id && msg_id !== 0) throw new Error('[deleteMassMsg] msg_id is required');
    return client.request('POST', '/cgi-bin/message/mass/delete', {
        data: article_idx ? { msg_id, article_idx } : { msg_id },
    });
}

/**
 * 获取群发速度等级。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_getspeed.html
 *
 * @summary getSpeed
 * @param {import('../../client.js').SaClient} client
 * @returns {Promise<{speed:number}>} 当前速度等级
 */
export async function getSpeed(client) {
    return client.request('POST', '/cgi-bin/message/mass/speed/get');
}

/**
 * 查询群发消息状态。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_massmsgget.html
 *
 * @summary massMsgGet
 * @param {import('../../client.js').SaClient} client
 * @param {{msg_id: number|string}} params - 必填 msg_id
 * @returns {Promise<{msg_id:string|number, msg_status:string}>} 典型返回包含 msg_status
 */
export async function massMsgGet(client, { msg_id }) {
    if (!msg_id && msg_id !== 0) throw new Error('[massMsgGet] msg_id is required');
    return client.request('POST', '/cgi-bin/message/mass/get', { data: { msg_id } });
}

/**
 * 根据 openid 列表群发。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_masssend.html
 *
 * @summary massSend
 * @param {import('../../client.js').SaClient} client
 * @param {Object} payload - 形如 { touser: [...], msgtype: 'mpnews'|'text'|..., mpnews/text/... }
 * @returns {Promise<{errcode:number, errmsg:string, msg_id?:number|string}>}
 */
export async function massSend(client, payload) {
    return client.request('POST', '/cgi-bin/message/mass/send', { data: payload });
}

/**
 * 群发预览接口（对指定用户预览）。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_preview.html
 *
 * @summary preview
 * @param {import('../../client.js').SaClient} client
 * @param {Object} payload - 形如 { touser: 'OPENID'|'微信号', msgtype: 'mpnews'|'text'|..., mpnews/text/... }
 * @returns {Promise<{errcode:number, errmsg:string, msg_id?:number|string}>}
 */
export async function preview(client, payload) {
    return client.request('POST', '/cgi-bin/message/mass/preview', { data: payload });
}

/**
 * 按标签进行群发。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_sendall.html
 *
 * @summary sendAll
 * @param {import('../../client.js').SaClient} client
 * @param {Object} payload - 形如 { filter:{is_to_all:boolean, tag_id?:number}, msgtype:'mpnews'|'text'|..., mpnews/text/... }
 * @returns {Promise<{errcode:number, errmsg:string, msg_id?:number|string}>}
 */
export async function sendAll(client, payload) {
    return client.request('POST', '/cgi-bin/message/mass/sendall', { data: payload });
}

/**
 * 设置群发速度等级。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_setspeed.html
 *
 * @summary setSpeed
 * @param {import('../../client.js').SaClient} client
 * @param {{speed: 0|1|2|3|4}} params - 必填，速度等级（0~4）
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function setSpeed(client, { speed }) {
    if (speed === undefined || speed === null) throw new Error('[setSpeed] speed is required');
    return client.request('POST', '/cgi-bin/message/mass/speed/set', { data: { speed } });
}

/**
 * 上传图文消息素材（用于群发）。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_uploadnewsmsg.html
 *
 * @summary uploadNewsMsg
 * @param {import('../../client.js').SaClient} client
 * @param {{articles: Array<Object>}} payload - 图文素材定义（articles 数组）
 * @returns {Promise<{type?:string, media_id:string, created_at?:number}>}
 */
export async function uploadNewsMsg(client, payload) {
    return client.request('POST', '/cgi-bin/media/uploadnews', { data: payload });
}

/* -------------------- 模板消息（公众号） -------------------- */

/**
 * 发送模板消息。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/template/api_sendtemplatemessage.html
 *
 * @summary sendTemplateMessage
 * @param {import('../../client.js').SaClient} client
 * @param {Object} payload - { touser, template_id, url?, miniprogram?, data, client_msg_id? }
 * @returns {Promise<{errcode:number, errmsg:string, msgid?:number|string}>}
 */
export async function sendTemplateMessage(client, payload) {
    return client.request('POST', '/cgi-bin/message/template/send', { data: payload });
}

/**
 * 账户添加模板（通过短 ID 获取模板 ID）。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/template/api_addtemplate.html
 *
 * @summary addTemplate
 * @param {import('../../client.js').SaClient} client
 * @param {{template_id_short: string}} params
 * @returns {Promise<{errcode:number, errmsg:string, template_id?:string}>}
 */
export async function addTemplate(client, { template_id_short }) {
    if (!template_id_short) throw new Error('[addTemplate] template_id_short is required');
    return client.request('POST', '/cgi-bin/template/api_add_template', {
        data: { template_id_short },
    });
}

/**
 * 查询模板消息被拦截/封禁信息。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/template/api_queryblocktmplmsg.html
 *
 * @summary queryBlockTmplMsg
 * @param {import('../../client.js').SaClient} client
 * @param {Object} params - 查询参数（按文档要求传入）
 * @returns {Promise<Object>} 查询结果
 */
export async function queryBlockTmplMsg(client, params = {}) {
    // 具体字段以官方文档为准
    return client.request('POST', '/cgi-bin/message/template/api_query_block_tmpl_msg', {
        data: params,
    });
}

/**
 * 删除私有模板。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/template/api_deletetemplate.html
 *
 * @summary deleteTemplate
 * @param {import('../../client.js').SaClient} client
 * @param {{template_id:string}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function deleteTemplate(client, { template_id }) {
    if (!template_id) throw new Error('[deleteTemplate] template_id is required');
    return client.request('POST', '/cgi-bin/template/del_private_template', {
        data: { template_id },
    });
}

/**
 * 获取账号下所有私有模板。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/template/api_getalltemplates.html
 *
 * @summary getAllTemplates
 * @param {import('../../client.js').SaClient} client
 * @returns {Promise<{template_list:Array<Object>}>}
 */
export async function getAllTemplates(client) {
    return client.request('GET', '/cgi-bin/template/get_all_private_template');
}

/**
 * 获取所属行业。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/template/api_getindustry.html
 *
 * @summary getIndustry
 * @param {import('../../client.js').SaClient} client
 * @returns {Promise<{primary_industry:Object, secondary_industry:Object}>}
 */
export async function getIndustry(client) {
    return client.request('GET', '/cgi-bin/template/get_industry');
}

/**
 * 设置所属行业。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/template/api_setindustry.html
 *
 * @summary setIndustry
 * @param {import('../../client.js').SaClient} client
 * @param {{industry_id1:string|number, industry_id2:string|number}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function setIndustry(client, { industry_id1, industry_id2 }) {
    if (industry_id1 === undefined || industry_id2 === undefined) {
        throw new Error('[setIndustry] industry_id1 and industry_id2 are required');
    }
    return client.request('POST', '/cgi-bin/template/api_set_industry', {
        data: { industry_id1, industry_id2 },
    });
}

/* -------------------- 新版订阅消息（newtmpl） -------------------- */

/**
 * 新增账号个人模板。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/notify/api_addwxanewtemplate.html
 *
 * @summary addWxaNewTemplate
 * @param {import('../../client.js').SaClient} client
 * @param {{tid:string, kidList:number[], sceneDesc?:string}} params
 * @returns {Promise<{priTmplId:string}>}
 */
export async function addWxaNewTemplate(client, { tid, kidList, sceneDesc }) {
    if (!tid || !Array.isArray(kidList) || kidList.length === 0) {
        throw new Error('[addWxaNewTemplate] tid and kidList are required');
    }
    return client.request('POST', '/wxaapi/newtmpl/addtemplate', {
        data: { tid, kidList, sceneDesc },
    });
}

/**
 * 删除账号个人模板。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/notify/api_delwxanewtemplate.html
 *
 * @summary delWxaNewTemplate
 * @param {import('../../client.js').SaClient} client
 * @param {{priTmplId:string}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function delWxaNewTemplate(client, { priTmplId }) {
    if (!priTmplId) throw new Error('[delWxaNewTemplate] priTmplId is required');
    return client.request('POST', '/wxaapi/newtmpl/deltemplate', { data: { priTmplId } });
}

/**
 * 获取账号所属类目。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getcategory.html
 *
 * @summary getCategory
 * @param {import('../../client.js').SaClient} client
 * @returns {Promise<Object>} 类目列表
 */
export async function getCategory(client) {
    return client.request('GET', '/wxaapi/newtmpl/getcategory');
}

/**
 * 获取公共模板关键词列表。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatekeywords.html
 *
 * @summary getPubNewTemplateKeywords
 * @param {import('../../client.js').SaClient} client
 * @param {{tid:string}} params
 * @returns {Promise<{count:number, data:Array<Object>}>}
 */
export async function getPubNewTemplateKeywords(client, { tid }) {
    if (!tid) throw new Error('[getPubNewTemplateKeywords] tid is required');
    return client.request('GET', '/wxaapi/newtmpl/getpubtemplatekeywords', {
        params: { tid },
    });
}

/**
 * 获取公共模板标题列表。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatetitles.html
 *
 * @summary getPubNewTemplateTitles
 * @param {import('../../client.js').SaClient} client
 * @param {{ids:string|number[] , start?:number, limit?:number}} params - ids 支持数组或逗号分隔字符串
 * @returns {Promise<{count:number, data:Array<Object>}>}
 */
export async function getPubNewTemplateTitles(client, { ids, start = 0, limit = 30 }) {
    if (!ids || (Array.isArray(ids) && ids.length === 0)) {
        throw new Error('[getPubNewTemplateTitles] ids is required');
    }
    const normIds = Array.isArray(ids) ? ids.join(',') : String(ids);
    return client.request('GET', '/wxaapi/newtmpl/getpubtemplatetitles', {
        params: { ids: normIds, start, limit },
    });
}

/**
 * 获取账号下的个人模板列表。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getwxapubnewtemplate.html
 *
 * @summary getWxaPubNewTemplate
 * @param {import('../../client.js').SaClient} client
 * @returns {Promise<{data:Array<Object>}>}
 */
export async function getWxaPubNewTemplate(client) {
    return client.request('GET', '/wxaapi/newtmpl/gettemplate');
}

/**
 * 发送订阅消息（新版）。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/notify/api_sendnewsubscribemsg.html
 *
 * @summary sendNewSubscribeMsg
 * @param {import('../../client.js').SaClient} client
 * @param {Object} payload - { touser, template_id/priTmplId, page?, miniprogram_state?, lang?, data }
 * @returns {Promise<{errcode:number, errmsg:string, msgid?:string|number}>}
 */
export async function sendNewSubscribeMsg(client, payload) {
    // 小程序新版订阅消息
    return client.request('POST', '/cgi-bin/message/subscribe/send', { data: payload });
}

/* -------------------- 旧版模板订阅接口 -------------------- */

/**
 * 模板订阅接口（旧版）。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/subscribe/api_templatesubscribe.html
 *
 * @summary templateSubscribe
 * @param {import('../../client.js').SaClient} client
 * @param {Object} payload - 按文档填写参数
 * @returns {Promise<Object>}
 */
export async function templateSubscribe(client, payload) {
    return client.request('POST', '/cgi-bin/message/template/subscribe', { data: payload });
}

/* -------------------- 自动回复 -------------------- */

/**
 * 获取当前自动回复规则。
 * 文档: https://developers.weixin.qq.com/doc/service/api/notify/autoreplies/api_getcurrentautoreplyinfo.html
 *
 * @summary getCurrentAutoReplyInfo
 * @param {import('../../client.js').SaClient} client
 * @returns {Promise<Object>} 自动回复配置
 */
export async function getCurrentAutoReplyInfo(client) {
    return client.request('GET', '/cgi-bin/get_current_autoreply_info');
}
