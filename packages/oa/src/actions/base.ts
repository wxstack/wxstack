/**
 * 基础接口：回调 IP、API 域名 IP、网络检测、清空配额。
 *
 * 每个函数签名为 `(client, params) => client.request(...)` 纯函数，
 * 由 OaClient 上的同名高层方法委托调用。
 */
import type { OaClient } from '../client.js';

interface IpListResp {
  ip_list?: string[];
  iplist?: string[];
}

/**
 * 获取微信服务器回调出口 IP 列表。
 * @param client OaClient 实例。
 * @returns 回调 IP 列表。
 * @see https://developers.weixin.qq.com/doc/service/api/base/api_getcallbackip.html
 */
export async function getCallbackIpList(client: OaClient): Promise<string[]> {
  const data = await client.request<IpListResp>({ method: 'GET', url: '/cgi-bin/getcallbackip' });
  return data.ip_list ?? data.iplist ?? [];
}

/**
 * 获取微信 API 接口域名解析的 IP 列表。
 * @param client OaClient 实例。
 * @returns 域名 IP 列表。
 * @see https://developers.weixin.qq.com/doc/service/api/base/api_getapidomainip.html
 */
export async function getApiDomainIpList(client: OaClient): Promise<string[]> {
  const data = await client.request<IpListResp>({
    method: 'GET',
    url: '/cgi-bin/get_api_domain_ip',
  });
  return data.ip_list ?? data.iplist ?? [];
}

/** 回调网络检测入参。 */
export interface CallbackCheckParams {
  action?: 'all' | 'dns' | 'ping';
  check_operator?: 'DEFAULT' | 'CT' | 'CU' | 'CM';
}

/**
 * 网络检测（回调连通性检测）。
 * @param client OaClient 实例。
 * @param opts 检测类型与运营商。
 * @returns 检测结果对象。
 * @see https://developers.weixin.qq.com/doc/service/api/base/api_callbackcheck.html
 */
export async function callbackCheck(
  client: OaClient,
  { action = 'all', check_operator = 'DEFAULT' }: CallbackCheckParams = {},
): Promise<Record<string, unknown>> {
  return client.request({
    method: 'POST',
    url: '/cgi-bin/callback/check',
    body: { action, check_operator },
  });
}

/**
 * 清空账号当日接口调用额度。
 * @param client OaClient 实例。
 * @param params 要清空额度的账号 appid。
 * @returns 接口返回。
 * @see https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/clear_quota.html
 */
export async function clearQuota(
  client: OaClient,
  { appid }: { appid: string },
): Promise<{ errcode: number; errmsg: string }> {
  if (!appid) throw new Error('[clearQuota] appid is required');
  return client.request({ method: 'POST', url: '/cgi-bin/clear_quota', body: { appid } });
}
