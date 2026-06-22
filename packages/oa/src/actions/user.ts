/**
 * 用户管理：标签、黑名单、用户信息与粉丝列表。
 */
import type { OaClient } from '../client.js';
import type { WxLang } from '../types.js';
import type { ErrResult } from './menu.js';

/* -------------------- 标签管理 -------------------- */

/**
 * 获取标签下粉丝列表。
 * @param client OaClient 实例。
 * @param params tagid 与可选 next_openid。
 * @returns 粉丝列表。
 * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagfans.html
 */
export async function getTagFans(
  client: OaClient,
  { tagid, next_openid }: { tagid: number; next_openid?: string },
): Promise<{ count: number; data?: { openid: string[] }; next_openid?: string }> {
  if (typeof tagid !== 'number')
    throw new Error('[getTagFans] tagid is required and must be number');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/user/tag/get',
    body: { tagid, next_openid },
  });
}

/**
 * 获取已创建的标签。
 * @param client OaClient 实例。
 * @returns 标签列表。
 * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettags.html
 */
export async function getTags(
  client: OaClient,
): Promise<{ tags: Array<{ id: number; name: string; count: number }> }> {
  return client.request({ method: 'GET', url: '/cgi-bin/tags/get' });
}

/**
 * 创建标签。
 * @param client OaClient 实例。
 * @param params name。
 * @returns 新建标签。
 * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_createtag.html
 */
export async function createTag(
  client: OaClient,
  { name }: { name: string },
): Promise<{ tag: { id: number; name: string } }> {
  if (!name) throw new Error('[createTag] name is required');
  return client.request({ method: 'POST', url: '/cgi-bin/tags/create', body: { tag: { name } } });
}

/**
 * 编辑标签。
 * @param client OaClient 实例。
 * @param params id 与 name。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_updatetag.html
 */
export async function updateTag(
  client: OaClient,
  { id, name }: { id: number; name: string },
): Promise<ErrResult> {
  if (typeof id !== 'number' || !name) throw new Error('[updateTag] id and name are required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/tags/update',
    body: { tag: { id, name } },
  });
}

/**
 * 删除标签。
 * @param client OaClient 实例。
 * @param params id。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_deletetag.html
 */
export async function deleteTag(client: OaClient, { id }: { id: number }): Promise<ErrResult> {
  if (typeof id !== 'number') throw new Error('[deleteTag] id is required and must be number');
  return client.request({ method: 'POST', url: '/cgi-bin/tags/delete', body: { tag: { id } } });
}

/**
 * 批量为用户打标签。
 * @param client OaClient 实例。
 * @param payload openid_list 与 tagid。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchtagging.html
 */
export async function batchTagging(
  client: OaClient,
  { openid_list, tagid }: { openid_list: string[]; tagid: number },
): Promise<ErrResult> {
  if (!Array.isArray(openid_list) || openid_list.length === 0)
    throw new Error('[batchTagging] openid_list is required');
  if (typeof tagid !== 'number')
    throw new Error('[batchTagging] tagid is required and must be number');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/tags/members/batchtagging',
    body: { openid_list, tagid },
  });
}

/**
 * 批量为用户取消标签。
 * @param client OaClient 实例。
 * @param payload openid_list 与 tagid。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchuntagging.html
 */
export async function batchUntagging(
  client: OaClient,
  { openid_list, tagid }: { openid_list: string[]; tagid: number },
): Promise<ErrResult> {
  if (!Array.isArray(openid_list) || openid_list.length === 0)
    throw new Error('[batchUntagging] openid_list is required');
  if (typeof tagid !== 'number')
    throw new Error('[batchUntagging] tagid is required and must be number');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/tags/members/batchuntagging',
    body: { openid_list, tagid },
  });
}

/**
 * 获取用户身上的标签列表。
 * @param client OaClient 实例。
 * @param params openid。
 * @returns 标签 ID 列表。
 * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagidlist.html
 */
export async function getTagIdList(
  client: OaClient,
  { openid }: { openid: string },
): Promise<{ tagid_list: number[] }> {
  if (!openid) throw new Error('[getTagIdList] openid is required');
  return client.request({ method: 'POST', url: '/cgi-bin/tags/getidlist', body: { openid } });
}

/* -------------------- 黑名单管理 -------------------- */

/**
 * 获取黑名单列表。
 * @param client OaClient 实例。
 * @param params begin_openid。
 * @returns 黑名单列表。
 * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getblacklist.html
 */
export async function getBlacklist(
  client: OaClient,
  { begin_openid }: { begin_openid?: string } = {},
): Promise<{ total: number; count: number; data?: { openid: string[] }; next_openid?: string }> {
  return client.request({
    method: 'POST',
    url: '/cgi-bin/tags/members/getblacklist',
    body: { begin_openid },
  });
}

/**
 * 批量拉黑用户。
 * @param client OaClient 实例。
 * @param payload openid_list。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchblacklist.html
 */
export async function batchBlacklist(
  client: OaClient,
  { openid_list }: { openid_list: string[] },
): Promise<ErrResult> {
  if (!Array.isArray(openid_list) || openid_list.length === 0)
    throw new Error('[batchBlacklist] openid_list is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/tags/members/batchblacklist',
    body: { openid_list },
  });
}

/**
 * 批量取消拉黑。
 * @param client OaClient 实例。
 * @param payload openid_list。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchunblacklist.html
 */
export async function batchUnblacklist(
  client: OaClient,
  { openid_list }: { openid_list: string[] },
): Promise<ErrResult> {
  if (!Array.isArray(openid_list) || openid_list.length === 0)
    throw new Error('[batchUnblacklist] openid_list is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/tags/members/batchunblacklist',
    body: { openid_list },
  });
}

/* -------------------- 用户信息与粉丝列表 -------------------- */

/**
 * 获取用户基本信息。
 * @param client OaClient 实例。
 * @param params openid 与可选 lang。
 * @returns 用户信息。
 * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_userinfo.html
 */
export async function getUserInfo(
  client: OaClient,
  { openid, lang = 'zh_CN' }: { openid: string; lang?: WxLang },
): Promise<Record<string, unknown>> {
  if (!openid) throw new Error('[getUserInfo] openid is required');
  return client.request({ method: 'GET', url: '/cgi-bin/user/info', query: { openid, lang } });
}

/**
 * 批量获取用户基本信息。
 * @param client OaClient 实例。
 * @param payload user_list。
 * @returns 用户信息列表。
 * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchuserinfo.html
 */
export async function batchUserInfo(
  client: OaClient,
  { user_list }: { user_list: Array<{ openid: string; lang?: WxLang }> },
): Promise<{ user_info_list: Array<Record<string, unknown>> }> {
  if (!Array.isArray(user_list) || user_list.length === 0)
    throw new Error('[batchUserInfo] user_list is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/user/info/batchget',
    body: { user_list },
  });
}

/**
 * 获取公众号的粉丝列表。
 * @param client OaClient 实例。
 * @param params next_openid。
 * @returns 粉丝 openid 列表。
 * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getfans.html
 */
export async function getFans(
  client: OaClient,
  { next_openid }: { next_openid?: string } = {},
): Promise<{ total: number; count: number; data?: { openid: string[] }; next_openid?: string }> {
  return client.request({ method: 'GET', url: '/cgi-bin/user/get', query: { next_openid } });
}

/**
 * 设置用户备注名。
 * @param client OaClient 实例。
 * @param payload openid 与 remark。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_updateremark.html
 */
export async function updateRemark(
  client: OaClient,
  { openid, remark }: { openid: string; remark: string },
): Promise<ErrResult> {
  if (!openid || !remark) throw new Error('[updateRemark] openid and remark are required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/user/info/updateremark',
    body: { openid, remark },
  });
}
