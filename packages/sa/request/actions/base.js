/**
 * 获取微信服务器回调出口 IP 列表。
 * 文档： https://developers.weixin.qq.com/doc/service/api/base/api_getcallbackip.html
 *
 * @summary 获取回调 IP
 * @param {import('../../client.js').SaClient} client - 已初始化的客户端
 * @returns {Promise<string[]>} 回调 IP 列表（形如 ['101.226.xx.xx', ...]）
 */
export async function getCallbackIpList(client) {
    const data = await client.request('GET', '/cgi-bin/getcallbackip');
    return data?.ip_list ?? data?.iplist ?? [];
}

/**
 * 获取微信 API 接口域名解析的 IP 列表。
 * 文档： https://developers.weixin.qq.com/doc/service/api/base/api_getapidomainip.html
 *
 * @summary 获取 API 域名 IP
 * @param {import('../../client.js').SaClient} client - 已初始化的客户端
 * @returns {Promise<string[]>} 域名 IP 列表
 */
export async function getApiDomainIpList(client) {
    const data = await client.request('GET', '/cgi-bin/get_api_domain_ip');
    return data?.ip_list ?? data?.iplist ?? [];
}

/**
 * 网络检测（回调连通性检测）。
 * 文档： https://developers.weixin.qq.com/doc/service/api/base/api_callbackcheck.html
 *
 * @summary 回调网络检测
 * @param {import('../../client.js').SaClient} client - 已初始化的客户端
 * @param {Object} [opts]
 * @param {'all'|'dns'|'ping'} [opts.action='all'] - 检测类型
 * @param {'DEFAULT'|'CT'|'CU'|'CM'} [opts.check_operator='DEFAULT'] - 运营商
 * @returns {Promise<Object>} 检测结果对象（包含各子项耗时/连通性等）
 */
export async function callbackCheck(client, { action = 'all', check_operator = 'DEFAULT' } = {}) {
    return client.request('POST', '/cgi-bin/callback/check', {
        data: { action, check_operator },
    });
}

/**
 * 清空账号当日接口调用额度。
 * 文档： https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/clear_quota.html
 *
 * @summary 清空当日配额 clearQuota
 * @param {import('../../client.js').SaClient} client - 已初始化的客户端
 * @param {Object} params
 * @param {string} params.appid - 必填，要被清空额度的账号 appid
 * @returns {Promise<{errcode:number, errmsg:string}>} 接口返回
 *
 * 错误码：
 * - 0: ok
 * - 40013: invalid appid（不合法的 AppID）
 * - 48006: forbid to clear quota because of reaching the limit（清零次数达到上限）
 */
export async function clearQuota(client, { appid }) {
    if (!appid) throw new Error('[clearQuota] appid is required');
    return client.request('POST', '/cgi-bin/clear_quota', { data: { appid } });
}