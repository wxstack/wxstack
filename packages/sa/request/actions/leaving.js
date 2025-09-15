/* -------------------- 留言管理（文章评论） -------------------- */
/**
 * 开启评论
 * 文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_openarticlecomment.html
 *
 * @summary openArticleComment
 * @param {import('../../client.js').SaClient} client
 * @param {{msg_data_id:number|string, index?:number}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function openArticleComment(client, { msg_data_id, index = 0 }) {
    if (msg_data_id === undefined || msg_data_id === null) throw new Error('[openArticleComment] msg_data_id is required');
    return client.request('POST', '/cgi-bin/comment/open', { data: { msg_data_id, index } });
}

/**
 * 关闭评论
 * 文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_closecomment.html
 *
 * @summary closeComment
 * @param {import('../../client.js').SaClient} client
 * @param {{msg_data_id:number|string, index?:number}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function closeComment(client, { msg_data_id, index = 0 }) {
    if (msg_data_id === undefined || msg_data_id === null) throw new Error('[closeComment] msg_data_id is required');
    return client.request('POST', '/cgi-bin/comment/close', { data: { msg_data_id, index } });
}

/**
 * 拉取评论列表
 * 文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_listcomment.html
 *
 * @summary listComment
 * @param {import('../../client.js').SaClient} client
 * @param {{msg_data_id:number|string, index?:number, begin:number, count:number, type?:0|1}} params - type: 0 全部，1 精选
 * @returns {Promise<{total:number, comment:Array<Object>}>}
 */
export async function listComment(client, { msg_data_id, index = 0, begin, count, type = 0 }) {
    if (msg_data_id === undefined || msg_data_id === null) throw new Error('[listComment] msg_data_id is required');
    if (begin === undefined || count === undefined) throw new Error('[listComment] begin and count are required');
    return client.request('POST', '/cgi-bin/comment/list', {
        data: { msg_data_id, index, begin, count, type },
    });
}

/**
 * 将评论标记为精选
 * 文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_electcomment.html
 *
 * @summary electComment
 * @param {import('../../client.js').SaClient} client
 * @param {{msg_data_id:number|string, index?:number, user_comment_id:number|string}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function electComment(client, { msg_data_id, index = 0, user_comment_id }) {
    if (msg_data_id === undefined || msg_data_id === null) throw new Error('[electComment] msg_data_id is required');
    if (user_comment_id === undefined || user_comment_id === null) throw new Error('[electComment] user_comment_id is required');
    return client.request('POST', '/cgi-bin/comment/markelect', {
        data: { msg_data_id, index, user_comment_id },
    });
}

/**
 * 取消精选
 * 文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_unelectcomment.html
 *
 * @summary unelectComment
 * @param {import('../../client.js').SaClient} client
 * @param {{msg_data_id:number|string, index?:number, user_comment_id:number|string}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function unelectComment(client, { msg_data_id, index = 0, user_comment_id }) {
    if (msg_data_id === undefined || msg_data_id === null) throw new Error('[unelectComment] msg_data_id is required');
    if (user_comment_id === undefined || user_comment_id === null) throw new Error('[unelectComment] user_comment_id is required');
    return client.request('POST', '/cgi-bin/comment/unmarkelect', {
        data: { msg_data_id, index, user_comment_id },
    });
}

/**
 * 删除评论
 * 文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_delcomment.html
 *
 * @summary delComment
 * @param {import('../../client.js').SaClient} client
 * @param {{msg_data_id:number|string, index?:number, user_comment_id:number|string}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function delComment(client, { msg_data_id, index = 0, user_comment_id }) {
    if (msg_data_id === undefined || msg_data_id === null) throw new Error('[delComment] msg_data_id is required');
    if (user_comment_id === undefined || user_comment_id === null) throw new Error('[delComment] user_comment_id is required');
    return client.request('POST', '/cgi-bin/comment/delete', {
        data: { msg_data_id, index, user_comment_id },
    });
}

/**
 * 回复评论
 * 文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_replycomment.html
 *
 * @summary replyComment
 * @param {import('../../client.js').SaClient} client
 * @param {{msg_data_id:number|string, index?:number, user_comment_id:number|string, content:string}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function replyComment(client, { msg_data_id, index = 0, user_comment_id, content }) {
    if (msg_data_id === undefined || msg_data_id === null) throw new Error('[replyComment] msg_data_id is required');
    if (user_comment_id === undefined || user_comment_id === null) throw new Error('[replyComment] user_comment_id is required');
    if (!content) throw new Error('[replyComment] content is required');
    return client.request('POST', '/cgi-bin/comment/reply/add', {
        data: { msg_data_id, index, user_comment_id, content },
    });
}

/**
 * 删除回复
 * 文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_delreplycomment.html
 *
 * @summary delReplyComment
 * @param {import('../../client.js').SaClient} client
 * @param {{msg_data_id:number|string, index?:number, user_comment_id:number|string}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function delReplyComment(client, { msg_data_id, index = 0, user_comment_id }) {
    if (msg_data_id === undefined || msg_data_id === null) throw new Error('[delReplyComment] msg_data_id is required');
    if (user_comment_id === undefined || user_comment_id === null) throw new Error('[delReplyComment] user_comment_id is required');
    return client.request('POST', '/cgi-bin/comment/reply/delete', {
        data: { msg_data_id, index, user_comment_id },
    });
}

/* -------------------- 发布能力（Free Publish） -------------------- */
/**
 * 提交发布
 * 文档: https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_submit.html
 *
 * @summary freePublishSubmit
 * @param {import('../../client.js').SaClient} client
 * @param {{media_id:string}} params
 * @returns {Promise<{publish_id?:string, errcode:number, errmsg:string}>}
 */
export async function freePublishSubmit(client, { media_id }) {
    if (!media_id) throw new Error('[freePublishSubmit] media_id is required');
    return client.request('POST', '/cgi-bin/freepublish/submit', { data: { media_id } });
}

/**
 * 查询发布结果
 * 文档: https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_get.html
 *
 * @summary freePublishGet
 * @param {import('../../client.js').SaClient} client
 * @param {{publish_id?:string, article_id?:string}} params - 文档支持以 publish_id 或 article_id 查询
 * @returns {Promise<Object>}
 */
export async function freePublishGet(client, params) {
    const { publish_id, article_id } = params || {};
    if (!publish_id && !article_id) throw new Error('[freePublishGet] publish_id or article_id is required');
    return client.request('POST', '/cgi-bin/freepublish/get', { data: params });
}

/**
 * 获取已发布列表
 * 文档: https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_batchget.html
 *
 * @summary freePublishBatchGet
 * @param {import('../../client.js').SaClient} client
 * @param {{offset:number, count:number, no_content?:0|1}} params
 * @returns {Promise<{total_count:number, item_count:number, item:Array<Object>}>}
 */
export async function freePublishBatchGet(client, { offset, count, no_content } = {}) {
    if (offset === undefined || count === undefined) throw new Error('[freePublishBatchGet] offset and count are required');
    const data = no_content === undefined ? { offset, count } : { offset, count, no_content };
    return client.request('POST', '/cgi-bin/freepublish/batchget', { data });
}

/**
 * 通过 article_id 获取已发布素材
 * 文档: https://developers.weixin.qq.com/doc/service/api/public/api_freepublishgetarticle.html
 *
 * @summary freePublishGetArticle
 * @param {import('../../client.js').SaClient} client
 * @param {{article_id:string}} params
 * @returns {Promise<Object>}
 */
export async function freePublishGetArticle(client, { article_id }) {
    if (!article_id) throw new Error('[freePublishGetArticle] article_id is required');
    return client.request('POST', '/cgi-bin/freepublish/getarticle', { data: { article_id } });
}

/**
 * 删除已发布素材
 * 文档: https://developers.weixin.qq.com/doc/service/api/public/api_freepublishdelete.html
 *
 * @summary freePublishDelete
 * @param {import('../../client.js').SaClient} client
 * @param {{article_id:string}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function freePublishDelete(client, { article_id }) {
    if (!article_id) throw new Error('[freePublishDelete] article_id is required');
    return client.request('POST', '/cgi-bin/freepublish/delete', { data: { article_id } });
}
