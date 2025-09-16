/**
 * 创建自定义菜单。
 * 文档: https://developers.weixin.qq.com/doc/service/api/custommenu/api_createcustommenu.html
 *
 * @summary createCustomMenu
 * @param {import('../../client.js').SaClient} client - SaClient 实例
 * @param {Object} payload - 菜单定义（{ button: [...] }）
 * @returns {Promise<{errcode:number, errmsg:string}>} 结果
 */
export async function createCustomMenu(client, payload) {
    return client.request('POST', '/cgi-bin/menu/create', { data: payload });
}

/**
 * 获取自定义菜单配置（账号当前自定义菜单信息）。
 * 文档: https://developers.weixin.qq.com/doc/service/api/custommenu/api_getcurrentselfmenuinfo.html
 *
 * @summary getCurrentSelfMenuInfo
 * @param {import('../../client.js').SaClient} client - SaClient 实例
 * @returns {Promise<Object>} 自定义菜单信息
 */
export async function getCurrentSelfMenuInfo(client) {
    return client.request('GET', '/cgi-bin/get_current_selfmenu_info');
}

/**
 * 获取自定义菜单（包含个性化菜单 if any）。
 * 文档: https://developers.weixin.qq.com/doc/service/api/custommenu/api_getmenu.html
 *
 * @summary getMenu
 * @param {import('../../client.js').SaClient} client - SaClient 实例
 * @returns {Promise<Object>} 菜单详情
 */
export async function getMenu(client) {
    return client.request('GET', '/cgi-bin/menu/get');
}

/**
 * 删除自定义菜单（包含删除全部个性化菜单）。
 * 文档: https://developers.weixin.qq.com/doc/service/api/custommenu/api_deletemenu.html
 *
 * @summary deleteMenu
 * @param {import('../../client.js').SaClient} client - SaClient 实例
 * @returns {Promise<{errcode:number, errmsg:string}>} 结果
 */
export async function deleteMenu(client) {
    return client.request('GET', '/cgi-bin/menu/delete');
}

/**
 * 创建个性化菜单。
 * 文档: https://developers.weixin.qq.com/doc/service/api/custommenu/api_addconditionalmenu.html
 *
 * @summary addConditionalMenu
 * @param {import('../../client.js').SaClient} client - SaClient 实例
 * @param {Object} payload - 个性化菜单定义（{ button: [...], matchrule: {...} }）
 * @returns {Promise<{errcode:number, errmsg:string, menuid?:string}>} 结果（含 menuid）
 */
export async function addConditionalMenu(client, payload) {
    return client.request('POST', '/cgi-bin/menu/addconditional', { data: payload });
}

/**
 * 删除个性化菜单。
 * 文档: https://developers.weixin.qq.com/doc/service/api/custommenu/api_deleteconditionalmenu.html
 *
 * @summary deleteConditionalMenu
 * @param {import('../../client.js').SaClient} client - SaClient 实例
 * @param {{menuid: string}} params - 必填，待删除的个性化菜单 ID
 * @returns {Promise<{errcode:number, errmsg:string}>} 结果
 */
export async function deleteConditionalMenu(client, { menuid }) {
    if (!menuid) throw new Error('[deleteConditionalMenu] menuid is required');
    return client.request('POST', '/cgi-bin/menu/delconditional', { data: { menuid } });
}

/**
 * 测试个性化菜单匹配结果。
 * 文档: https://developers.weixin.qq.com/doc/service/api/custommenu/api_trymatchmenu.html
 *
 * @summary tryMatchMenu
 * @param {import('../../client.js').SaClient} client - SaClient 实例
 * @param {{user_id: string}} params - 必填，用户标识（可以是 openid 或者 微信号）
 * @returns {Promise<Object>} 命中菜单配置
 */
export async function tryMatchMenu(client, { user_id }) {
    if (!user_id) throw new Error('[tryMatchMenu] user_id is required');
    return client.request('POST', '/cgi-bin/menu/trymatch', { data: { user_id } });
}
