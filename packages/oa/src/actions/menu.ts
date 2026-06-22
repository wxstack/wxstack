/**
 * 自定义菜单与个性化菜单接口。
 */
import type { OaClient } from '../client.js';

/** 通用 errcode/errmsg 返回体。 */
export interface ErrResult {
  errcode: number;
  errmsg: string;
}

/**
 * 创建自定义菜单。
 * @param client OaClient 实例。
 * @param payload 菜单定义（{ button: [...] }）。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_createcustommenu.html
 */
export async function createCustomMenu(
  client: OaClient,
  payload: Record<string, unknown>,
): Promise<ErrResult> {
  return client.request({ method: 'POST', url: '/cgi-bin/menu/create', body: payload });
}

/**
 * 获取自定义菜单配置（账号当前自定义菜单信息）。
 * @param client OaClient 实例。
 * @returns 自定义菜单信息。
 * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_getcurrentselfmenuinfo.html
 */
export async function getCurrentSelfMenuInfo(client: OaClient): Promise<Record<string, unknown>> {
  return client.request({ method: 'GET', url: '/cgi-bin/get_current_selfmenu_info' });
}

/**
 * 获取自定义菜单（包含个性化菜单 if any）。
 * @param client OaClient 实例。
 * @returns 菜单详情。
 * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_getmenu.html
 */
export async function getMenu(client: OaClient): Promise<Record<string, unknown>> {
  return client.request({ method: 'GET', url: '/cgi-bin/menu/get' });
}

/**
 * 删除自定义菜单（包含删除全部个性化菜单）。
 * @param client OaClient 实例。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_deletemenu.html
 */
export async function deleteMenu(client: OaClient): Promise<ErrResult> {
  return client.request({ method: 'GET', url: '/cgi-bin/menu/delete' });
}

/**
 * 创建个性化菜单。
 * @param client OaClient 实例。
 * @param payload 个性化菜单定义（{ button: [...], matchrule: {...} }）。
 * @returns 结果（含 menuid）。
 * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_addconditionalmenu.html
 */
export async function addConditionalMenu(
  client: OaClient,
  payload: Record<string, unknown>,
): Promise<ErrResult & { menuid?: string }> {
  return client.request({ method: 'POST', url: '/cgi-bin/menu/addconditional', body: payload });
}

/**
 * 删除个性化菜单。
 * @param client OaClient 实例。
 * @param params 待删除的个性化菜单 ID。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_deleteconditionalmenu.html
 */
export async function deleteConditionalMenu(
  client: OaClient,
  { menuid }: { menuid: string },
): Promise<ErrResult> {
  if (!menuid) throw new Error('[deleteConditionalMenu] menuid is required');
  return client.request({ method: 'POST', url: '/cgi-bin/menu/delconditional', body: { menuid } });
}

/**
 * 测试个性化菜单匹配结果。
 * @param client OaClient 实例。
 * @param params 用户标识（openid 或微信号）。
 * @returns 命中菜单配置。
 * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_trymatchmenu.html
 */
export async function tryMatchMenu(
  client: OaClient,
  { user_id }: { user_id: string },
): Promise<Record<string, unknown>> {
  if (!user_id) throw new Error('[tryMatchMenu] user_id is required');
  return client.request({ method: 'POST', url: '/cgi-bin/menu/trymatch', body: { user_id } });
}
