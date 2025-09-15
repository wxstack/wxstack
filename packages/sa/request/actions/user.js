/* -------------------- 标签管理 -------------------- */
/**
 * 获取标签下粉丝列表
 * 文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagfans.html
 * @summary getTagFans
 * @param {import('../../client.js').SaClient} client
 * @param {{tagid:number, next_openid?:string}} params
 * @returns {Promise<{count:number, data?:{openid:string[]}, next_openid?:string}>}
 */
export async function getTagFans(client, { tagid, next_openid } = {}) {
    if (typeof tagid !== 'number') throw new Error('[getTagFans] tagid is required and must be number');
    return client.request('POST', '/cgi-bin/user/tag/get', { data: { tagid, next_openid } });
}

/**
 * 获取已创建的标签
 * 文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettags.html
 * @summary getTags
 * @param {import('../../client.js').SaClient} client
 * @returns {Promise<{tags:Array<{id:number,name:string,count:number}>}>}
 */
export async function getTags(client) {
    return client.request('GET', '/cgi-bin/tags/get');
}

/**
 * 创建标签
 * 文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_createtag.html
 * @summary createTag
 * @param {import('../../client.js').SaClient} client
 * @param {{name:string}} params
 * @returns {Promise<{tag:{id:number,name:string}}>}
 */
export async function createTag(client, { name }) {
    if (!name) throw new Error('[createTag] name is required');
    return client.request('POST', '/cgi-bin/tags/create', { data: { tag: { name } } });
}

/**
 * 编辑标签
 * 文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_updatetag.html
 * @summary updateTag
 * @param {import('../../client.js').SaClient} client
 * @param {{id:number, name:string}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function updateTag(client, { id, name }) {
    if (typeof id !== 'number' || !name) throw new Error('[updateTag] id and name are required');
    return client.request('POST', '/cgi-bin/tags/update', { data: { tag: { id, name } } });
}

/**
 * 删除标签
 * 文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_deletetag.html
 * @summary deleteTag
 * @param {import('../../client.js').SaClient} client
 * @param {{id:number}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function deleteTag(client, { id }) {
    if (typeof id !== 'number') throw new Error('[deleteTag] id is required and must be number');
    return client.request('POST', '/cgi-bin/tags/delete', { data: { tag: { id } } });
}

/**
 * 批量为用户打标签
 * 文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchtagging.html
 * @summary batchTagging
 * @param {import('../../client.js').SaClient} client
 * @param {{openid_list:string[], tagid:number}} payload
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function batchTagging(client, { openid_list, tagid }) {
    if (!Array.isArray(openid_list) || openid_list.length === 0) throw new Error('[batchTagging] openid_list is required');
    if (typeof tagid !== 'number') throw new Error('[batchTagging] tagid is required and must be number');
    return client.request('POST', '/cgi-bin/tags/members/batchtagging', { data: { openid_list, tagid } });
}

/**
 * 批量为用户取消标签
 * 文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchuntagging.html
 * @summary batchUntagging
 * @param {import('../../client.js').SaClient} client
 * @param {{openid_list:string[], tagid:number}} payload
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function batchUntagging(client, { openid_list, tagid }) {
    if (!Array.isArray(openid_list) || openid_list.length === 0) throw new Error('[batchUntagging] openid_list is required');
    if (typeof tagid !== 'number') throw new Error('[batchUntagging] tagid is required and must be number');
    return client.request('POST', '/cgi-bin/tags/members/batchuntagging', { data: { openid_list, tagid } });
}

/**
 * 获取用户身上的标签列表
 * 文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagidlist.html
 * @summary getTagIdList
 * @param {import('../../client.js').SaClient} client
 * @param {{openid:string}} params
 * @returns {Promise<{tagid_list:number[]}>}
 */
export async function getTagIdList(client, { openid }) {
    if (!openid) throw new Error('[getTagIdList] openid is required');
    return client.request('POST', '/cgi-bin/tags/getidlist', { data: { openid } });
}

/* -------------------- 黑名单管理 -------------------- */
/**
 * 获取黑名单列表
 * 文档: https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getblacklist.html
 * @summary getBlacklist
 * @param {import('../../client.js').SaClient} client
 * @param {{begin_openid?:string}} params
 * @returns {Promise<{total:number, count:number, data?:{openid:string[]}, next_openid?:string}>}
 */
export async function getBlacklist(client, { begin_openid } = {}) {
    return client.request('POST', '/cgi-bin/tags/members/getblacklist', { data: { begin_openid } });
}

/**
 * 批量拉黑用户
 * 文档: https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchblacklist.html
 * @summary batchBlacklist
 * @param {import('../../client.js').SaClient} client
 * @param {{openid_list:string[]}} payload
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function batchBlacklist(client, { openid_list }) {
    if (!Array.isArray(openid_list) || openid_list.length === 0) throw new Error('[batchBlacklist] openid_list is required');
    return client.request('POST', '/cgi-bin/tags/members/batchblacklist', { data: { openid_list } });
}

/**
 * 批量取消拉黑
 * 文档: https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchunblacklist.html
 * @summary batchUnblacklist
 * @param {import('../../client.js').SaClient} client
 * @param {{openid_list:string[]}} payload
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function batchUnblacklist(client, { openid_list }) {
    if (!Array.isArray(openid_list) || openid_list.length === 0) throw new Error('[batchUnblacklist] openid_list is required');
    return client.request('POST', '/cgi-bin/tags/members/batchunblacklist', { data: { openid_list } });
}

/* -------------------- 用户信息与粉丝列表 -------------------- */
/**
 * 获取用户基本信息
 * 文档: https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_userinfo.html
 * @summary getUserInfo
 * @param {import('../../client.js').SaClient} client
 * @param {{openid:string, lang?:'zh_CN'|'zh_TW'|'en'}} params
 * @returns {Promise<Object>}
 */
export async function getUserInfo(client, { openid, lang = 'zh_CN' }) {
    if (!openid) throw new Error('[getUserInfo] openid is required');
    return client.request('GET', '/cgi-bin/user/info', { params: { openid, lang } });
}

/**
 * 批量获取用户基本信息
 * 文档: https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchuserinfo.html
 * @summary batchUserInfo
 * @param {import('../../client.js').SaClient} client
 * @param {{user_list:Array<{openid:string, lang?:'zh_CN'|'zh_TW'|'en'}>}} payload
 * @returns {Promise<{user_info_list:Array<Object>}>}
 */
export async function batchUserInfo(client, { user_list } = {}) {
    if (!Array.isArray(user_list) || user_list.length === 0) throw new Error('[batchUserInfo] user_list is required');
    return client.request('POST', '/cgi-bin/user/info/batchget', { data: { user_list } });
}

/**
 * 获取公众号的粉丝列表
 * 文档: https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getfans.html
 * @summary getFans
 * @param {import('../../client.js').SaClient} client
 * @param {{next_openid?:string}} params
 * @returns {Promise<{total:number, count:number, data?:{openid:string[]}, next_openid?:string}>}
 */
export async function getFans(client, { next_openid } = {}) {
    return client.request('GET', '/cgi-bin/user/get', { params: { next_openid } });
}

/**
 * 设置用户备注名
 * 文档: https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_updateremark.html
 * @summary updateRemark
 * @param {import('../../client.js').SaClient} client
 * @param {{openid:string, remark:string}} payload
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function updateRemark(client, { openid, remark }) {
    if (!openid || !remark) throw new Error('[updateRemark] openid and remark are required');
    return client.request('POST', '/cgi-bin/user/info/updateremark', { data: { openid, remark } });
}