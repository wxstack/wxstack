/* -------------------- 用户分析 -------------------- */
/**
 * 获取用户增减数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusersummary.html
 */
export async function getUserSummary(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getUserSummary] begin_date and end_date are required');
    return client.request('POST', '/datacube/getusersummary', { data: { begin_date, end_date } });
}

/**
 * 获取累计用户数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusercumulate.html
 */
export async function getUserCumulate(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getUserCumulate] begin_date and end_date are required');
    return client.request('POST', '/datacube/getusercumulate', { data: { begin_date, end_date } });
}

/* -------------------- 图文分析 -------------------- */
/**
 * 获取图文群发每日数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticlesummary.html
 */
export async function getArticleSummary(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getArticleSummary] begin_date and end_date are required');
    return client.request('POST', '/datacube/getarticlesummary', { data: { begin_date, end_date } });
}

/**
 * 获取图文统计分时数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserreadhour.html
 */
export async function getUserReadHour(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getUserReadHour] begin_date and end_date are required');
    return client.request('POST', '/datacube/getuserreadhour', { data: { begin_date, end_date } });
}

/**
 * 获取图文分享转发分时数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusersharehour.html
 */
export async function getUserShareHour(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getUserShareHour] begin_date and end_date are required');
    return client.request('POST', '/datacube/getusersharehour', { data: { begin_date, end_date } });
}

/**
 * 获取图文统计数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserread.html
 */
export async function getUserRead(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getUserRead] begin_date and end_date are required');
    return client.request('POST', '/datacube/getuserread', { data: { begin_date, end_date } });
}

/**
 * 获取图文群发总数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticletotal.html
 */
export async function getArticleTotal(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getArticleTotal] begin_date and end_date are required');
    return client.request('POST', '/datacube/getarticletotal', { data: { begin_date, end_date } });
}

/**
 * 获取图文分享转发数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusershare.html
 */
export async function getUserShare(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getUserShare] begin_date and end_date are required');
    return client.request('POST', '/datacube/getusershare', { data: { begin_date, end_date } });
}

/* -------------------- 消息分析 -------------------- */
/**
 * 获取消息发送概况数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsg.html
 */
export async function getUpstreamMsg(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getUpstreamMsg] begin_date and end_date are required');
    return client.request('POST', '/datacube/getupstreammsg', { data: { begin_date, end_date } });
}

/**
 * 获取消息发送月数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgmonth.html
 */
export async function getUpstreamMsgMonth(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getUpstreamMsgMonth] begin_date and end_date are required');
    return client.request('POST', '/datacube/getupstreammsgmonth', { data: { begin_date, end_date } });
}

/**
 * 获取消息发送分布周数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistweek.html
 */
export async function getUpstreamMsgDistWeek(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getUpstreamMsgDistWeek] begin_date and end_date are required');
    return client.request('POST', '/datacube/getupstreammsgdistweek', { data: { begin_date, end_date } });
}

/**
 * 获取消息发送分布月数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistmonth.html
 */
export async function getUpstreamMsgDistMonth(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getUpstreamMsgDistMonth] begin_date and end_date are required');
    return client.request('POST', '/datacube/getupstreammsgdistmonth', { data: { begin_date, end_date } });
}

/**
 * 获取消息发送分时数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsghour.html
 */
export async function getUpstreamMsgHour(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getUpstreamMsgHour] begin_date and end_date are required');
    return client.request('POST', '/datacube/getupstreammsghour', { data: { begin_date, end_date } });
}

/**
 * 获取消息发送周数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgweek.html
 */
export async function getUpstreamMsgWeek(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getUpstreamMsgWeek] begin_date and end_date are required');
    return client.request('POST', '/datacube/getupstreammsgweek', { data: { begin_date, end_date } });
}

/**
 * 获取消息发送分布数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdist.html
 */
export async function getUpstreamMsgDist(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getUpstreamMsgDist] begin_date and end_date are required');
    return client.request('POST', '/datacube/getupstreammsgdist', { data: { begin_date, end_date } });
}

/* -------------------- 接口分析 -------------------- */
/**
 * 获取接口分析数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummary.html
 */
export async function getInterfaceSummary(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getInterfaceSummary] begin_date and end_date are required');
    return client.request('POST', '/datacube/getinterfacesummary', { data: { begin_date, end_date } });
}

/**
 * 获取接口分析分时数据
 * 文档: https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummaryhour.html
 */
export async function getInterfaceSummaryHour(client, { begin_date, end_date } = {}) {
    if (!begin_date || !end_date) throw new Error('[getInterfaceSummaryHour] begin_date and end_date are required');
    return client.request('POST', '/datacube/getinterfacesummaryhour', { data: { begin_date, end_date } });
}
