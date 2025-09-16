/**
 * 草稿箱开关。
 * 文档: https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_switch.html
 *
 * @summary draftSwitch
 * @param {import('../../client.js').SaClient} client
 * @param {{is_open:0|1}} params - 1 开启，0 关闭
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function draftSwitch(client, { is_open }) {
    if (is_open !== 0 && is_open !== 1) throw new Error('[draftSwitch] is_open must be 0 or 1');
    return client.request('POST', '/cgi-bin/draft/switch', { data: { is_open } });
}

/**
 * 新建草稿。
 * 文档: https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_add.html
 *
 * @summary draftAdd
 * @param {import('../../client.js').SaClient} client
 * @param {{articles:Array<Object>}} payload - 图文数组 articles
 * @returns {Promise<{media_id:string}>}
 */
export async function draftAdd(client, payload) {
    const { articles } = payload || {};
    if (!Array.isArray(articles) || articles.length === 0) {
        throw new Error('[draftAdd] articles is required and must be non-empty array');
    }
    return client.request('POST', '/cgi-bin/draft/add', { data: payload });
}

/**
 * 获取草稿。
 * 文档: https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_getdraft.html
 *
 * @summary getDraft
 * @param {import('../../client.js').SaClient} client
 * @param {{media_id:string}} params
 * @returns {Promise<Object>}
 */
export async function getDraft(client, { media_id }) {
    if (!media_id) throw new Error('[getDraft] media_id is required');
    return client.request('POST', '/cgi-bin/draft/get', { data: { media_id } });
}

/**
 * 删除草稿。
 * 文档: https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_delete.html
 *
 * @summary draftDelete
 * @param {import('../../client.js').SaClient} client
 * @param {{media_id:string}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function draftDelete(client, { media_id }) {
    if (!media_id) throw new Error('[draftDelete] media_id is required');
    return client.request('POST', '/cgi-bin/draft/delete', { data: { media_id } });
}

/**
 * 修改草稿。
 * 文档: https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_update.html
 *
 * @summary draftUpdate
 * @param {import('../../client.js').SaClient} client
 * @param {Object} payload - 按文档传入 {media_id, index?, articles}
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function draftUpdate(client, payload) {
    const { media_id } = payload || {};
    if (!media_id) throw new Error('[draftUpdate] media_id is required');
    return client.request('POST', '/cgi-bin/draft/update', { data: payload });
}

/**
 * 批量获取草稿。
 * 文档: https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_batchget.html
 *
 * @summary draftBatchGet
 * @param {import('../../client.js').SaClient} client
 * @param {{offset:number, count:number, no_content?:0|1}} params
 * @returns {Promise<{total_count:number, item_count:number, item:Array<Object>}>}
 */
export async function draftBatchGet(client, { offset, count, no_content } = {}) {
    if (offset === undefined || count === undefined) {
        throw new Error('[draftBatchGet] offset and count are required');
    }
    return client.request('POST', '/cgi-bin/draft/batchget', {
        data: no_content === undefined ? { offset, count } : { offset, count, no_content },
    });
}

/**
 * 获取草稿总数。
 * 文档: https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_count.html
 *
 * @summary draftCount
 * @param {import('../../client.js').SaClient} client
 * @returns {Promise<{total_count:number}>}
 */
export async function draftCount(client) {
    return client.request('GET', '/cgi-bin/draft/count');
}

/* -------------------- 草稿内商品卡片 -------------------- */

/**
 * 获取商品卡片信息。
 * 文档: https://developers.weixin.qq.com/doc/service/api/draftbox/shop/api_ecsgetproductcardinfo.html
 *
 * @summary ecsGetProductCardInfo
 * @param {import('../../client.js').SaClient} client
 * @param {Object} params - 按文档传入查询条件（如商品 ID 等）
 * @returns {Promise<Object>}
 */
export async function ecsGetProductCardInfo(client, params = {}) {
    // 以官方文档为准，通常为 POST JSON
    return client.request('POST', '/cgi-bin/draft/ecs/getproductcardinfo', { data: params });
}
