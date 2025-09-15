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
        throw new Error('[uploadKfHeadImg] either filePath or file is required');
    }
    return form;
}

/* -------------------- 客服账号管理 -------------------- */

/**
 * 上传客服头像。
 * 文档: https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_uploadkfheadimg.html
 *
 * @summary uploadKfHeadImg
 * @param {import('../../client.js').SaClient} client
 * @param {{kf_account:string} & ({filePath:string} | {file:Buffer|import('stream').Readable, filename?:string, contentType?:string})} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function uploadKfHeadImg(client, { kf_account, ...input }) {
    if (!kf_account) throw new Error('[uploadKfHeadImg] kf_account is required');
    const form = buildUploadForm(input);
    return client.request('POST', '/customservice/kfaccount/uploadheadimg', {
        params: { kf_account },
        data: form,
        headers: form.getHeaders(),
    });
}

/**
 * 添加客服账号。
 * 文档: https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_addkfaccount.html
 *
 * @summary addKfAccount
 * @param {import('../../client.js').SaClient} client
 * @param {{kf_account:string, nickname:string}} payload
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function addKfAccount(client, { kf_account, nickname }) {
    if (!kf_account || !nickname) throw new Error('[addKfAccount] kf_account and nickname are required');
    return client.request('POST', '/customservice/kfaccount/add', { data: { kf_account, nickname } });
}

/**
 * 更新客服账号。
 * 文档: https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_updatekfaccount.html
 *
 * @summary updateKfAccount
 * @param {import('../../client.js').SaClient} client
 * @param {{kf_account:string, nickname:string}} payload
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function updateKfAccount(client, { kf_account, nickname }) {
    if (!kf_account || !nickname) throw new Error('[updateKfAccount] kf_account and nickname are required');
    return client.request('POST', '/customservice/kfaccount/update', { data: { kf_account, nickname } });
}

/**
 * 删除客服账号。
 * 文档: https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_delkfaccount.html
 *
 * @summary delKfAccount
 * @param {import('../../client.js').SaClient} client
 * @param {{kf_account:string}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function delKfAccount(client, { kf_account }) {
    if (!kf_account) throw new Error('[delKfAccount] kf_account is required');
    // 按官方要求使用 query 传参
    return client.request('GET', '/customservice/kfaccount/del', { params: { kf_account } });
}

/**
 * 邀请微信号绑定为客服。
 * 文档: https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_invitekfworker.html
 *
 * @summary inviteKfWorker
 * @param {import('../../client.js').SaClient} client
 * @param {{kf_account:string, invite_wx:string}} payload
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function inviteKfWorker(client, { kf_account, invite_wx }) {
    if (!kf_account || !invite_wx) throw new Error('[inviteKfWorker] kf_account and invite_wx are required');
    return client.request('POST', '/customservice/kfaccount/inviteworker', {
        data: { kf_account, invite_wx },
    });
}

/**
 * 获取所有客服账号列表。
 * 文档: https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getkflist.html
 *
 * @summary getKfList
 * @param {import('../../client.js').SaClient} client
 * @returns {Promise<{kf_list:Array<Object>}>}
 */
export async function getKfList(client) {
    return client.request('GET', '/cgi-bin/customservice/getkflist');
}

/**
 * 获取在线客服列表。
 * 文档: https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getonlinekflist.html
 *
 * @summary getOnlineKfList
 * @param {import('../../client.js').SaClient} client
 * @returns {Promise<{kf_online_list:Array<Object>}>}
 */
export async function getOnlineKfList(client) {
    return client.request('GET', '/cgi-bin/customservice/getonlinekflist');
}

/* -------------------- 会话控制 -------------------- */

/**
 * 获取客服的会话列表。
 * 文档: https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsessionlist.html
 *
 * @summary getKfSessionList
 * @param {import('../../client.js').SaClient} client
 * @param {{kf_account:string}} params
 * @returns {Promise<{sessionlist:Array<Object>}>}
 */
export async function getKfSessionList(client, { kf_account }) {
    if (!kf_account) throw new Error('[getKfSessionList] kf_account is required');
    return client.request('GET', '/customservice/kfsession/getsessionlist', {
        params: { kf_account },
    });
}

/**
 * 获取用户会话状态。
 * 文档: https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsession.html
 *
 * @summary getKfSession
 * @param {import('../../client.js').SaClient} client
 * @param {{openid:string}} params
 * @returns {Promise<Object>}
 */
export async function getKfSession(client, { openid }) {
    if (!openid) throw new Error('[getKfSession] openid is required');
    return client.request('GET', '/customservice/kfsession/getsession', { params: { openid } });
}

/**
 * 创建会话。
 * 文档: https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_createkfsession.html
 *
 * @summary createKfSession
 * @param {import('../../client.js').SaClient} client
 * @param {{kf_account:string, openid:string}} payload
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function createKfSession(client, { kf_account, openid }) {
    if (!kf_account || !openid) throw new Error('[createKfSession] kf_account and openid are required');
    return client.request('POST', '/customservice/kfsession/create', { data: { kf_account, openid } });
}

/**
 * 关闭会话。
 * 文档: https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_closesession.html
 *
 * @summary closeSession
 * @param {import('../../client.js').SaClient} client
 * @param {{kf_account:string, openid:string}} payload
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function closeSession(client, { kf_account, openid }) {
    if (!kf_account || !openid) throw new Error('[closeSession] kf_account and openid are required');
    return client.request('POST', '/customservice/kfsession/close', { data: { kf_account, openid } });
}

/**
 * 获取待接入会话列表。
 * 文档: https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getwaitcase.html
 *
 * @summary getWaitCase
 * @param {import('../../client.js').SaClient} client
 * @returns {Promise<{count:number, waitcaselist:Array<Object>}>}
 */
export async function getWaitCase(client) {
    return client.request('GET', '/customservice/kfsession/getwaitcase');
}

/* -------------------- 客服消息 -------------------- */

/**
 * 获取客服消息记录。
 * 文档: https://developers.weixin.qq.com/doc/service/api/customer/message/api_getmsglist.html
 *
 * @summary getMsgList
 * @param {import('../../client.js').SaClient} client
 * @param {{starttime:number, endtime:number, msgid:number, number:number}} payload - 时间为秒级 Unix 时间戳
 * @returns {Promise<{recordlist:Array<Object>}>}
 */
export async function getMsgList(client, payload) {
    const { starttime, endtime, msgid, number } = payload || {};
    if ([starttime, endtime, msgid, number].some((v) => v === undefined)) {
        throw new Error('[getMsgList] starttime, endtime, msgid and number are required');
    }
    return client.request('POST', '/customservice/msgrecord/getmsglist', { data: payload });
}

/**
 * 下发客服输入状态。
 * 文档: https://developers.weixin.qq.com/doc/service/api/customer/message/api_typing.html
 *
 * @summary typing
 * @param {import('../../client.js').SaClient} client
 * @param {{touser:string, command:'Typing'|'CancelTyping'}} payload
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function typing(client, { touser, command }) {
    if (!touser || !command) throw new Error('[typing] touser and command are required');
    return client.request('POST', '/cgi-bin/message/custom/typing', { data: { touser, command } });
}

/**
 * 发送客服消息。
 * 文档: https://developers.weixin.qq.com/doc/service/api/customer/message/api_sendcustommessage.html
 *
 * @summary sendCustomMessage
 * @param {import('../../client.js').SaClient} client
 * @param {Object} payload - { touser, msgtype, text/image/news/... }
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function sendCustomMessage(client, payload) {
    return client.request('POST', '/cgi-bin/message/custom/send', { data: payload });
}
