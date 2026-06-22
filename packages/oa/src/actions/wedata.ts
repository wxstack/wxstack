/**
 * 数据统计（用户分析、图文分析、消息分析、接口分析）。
 *
 * 所有接口入参均为日期区间 `{ begin_date, end_date }`（格式 yyyy-MM-dd）。
 */
import type { OaClient } from '../client.js';

/** 数据统计日期区间入参。 */
export interface DateRange {
  begin_date: string;
  end_date: string;
}

/** 内部：统一的日期区间 POST 调用。 */
function dateCube(
  client: OaClient,
  url: string,
  label: string,
  { begin_date, end_date }: DateRange,
): Promise<Record<string, unknown>> {
  if (!begin_date || !end_date) throw new Error(`[${label}] begin_date and end_date are required`);
  return client.request({ method: 'POST', url, body: { begin_date, end_date } });
}

/* -------------------- 用户分析 -------------------- */

/**
 * 获取用户增减数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusersummary.html
 */
export async function getUserSummary(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getusersummary', 'getUserSummary', params);
}

/**
 * 获取累计用户数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusercumulate.html
 */
export async function getUserCumulate(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getusercumulate', 'getUserCumulate', params);
}

/* -------------------- 图文分析 -------------------- */

/**
 * 获取图文群发每日数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticlesummary.html
 */
export async function getArticleSummary(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getarticlesummary', 'getArticleSummary', params);
}

/**
 * 获取图文统计分时数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserreadhour.html
 */
export async function getUserReadHour(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getuserreadhour', 'getUserReadHour', params);
}

/**
 * 获取图文分享转发分时数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusersharehour.html
 */
export async function getUserShareHour(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getusersharehour', 'getUserShareHour', params);
}

/**
 * 获取图文统计数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserread.html
 */
export async function getUserRead(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getuserread', 'getUserRead', params);
}

/**
 * 获取图文群发总数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticletotal.html
 */
export async function getArticleTotal(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getarticletotal', 'getArticleTotal', params);
}

/**
 * 获取图文分享转发数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusershare.html
 */
export async function getUserShare(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getusershare', 'getUserShare', params);
}

/* -------------------- 消息分析 -------------------- */

/**
 * 获取消息发送概况数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsg.html
 */
export async function getUpstreamMsg(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getupstreammsg', 'getUpstreamMsg', params);
}

/**
 * 获取消息发送月数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgmonth.html
 */
export async function getUpstreamMsgMonth(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getupstreammsgmonth', 'getUpstreamMsgMonth', params);
}

/**
 * 获取消息发送分布周数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistweek.html
 */
export async function getUpstreamMsgDistWeek(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getupstreammsgdistweek', 'getUpstreamMsgDistWeek', params);
}

/**
 * 获取消息发送分布月数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistmonth.html
 */
export async function getUpstreamMsgDistMonth(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getupstreammsgdistmonth', 'getUpstreamMsgDistMonth', params);
}

/**
 * 获取消息发送分时数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsghour.html
 */
export async function getUpstreamMsgHour(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getupstreammsghour', 'getUpstreamMsgHour', params);
}

/**
 * 获取消息发送周数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgweek.html
 */
export async function getUpstreamMsgWeek(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getupstreammsgweek', 'getUpstreamMsgWeek', params);
}

/**
 * 获取消息发送分布数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdist.html
 */
export async function getUpstreamMsgDist(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getupstreammsgdist', 'getUpstreamMsgDist', params);
}

/* -------------------- 接口分析 -------------------- */

/**
 * 获取接口分析数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummary.html
 */
export async function getInterfaceSummary(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getinterfacesummary', 'getInterfaceSummary', params);
}

/**
 * 获取接口分析分时数据。
 * @see https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummaryhour.html
 */
export async function getInterfaceSummaryHour(
  client: OaClient,
  params: DateRange,
): Promise<Record<string, unknown>> {
  return dateCube(client, '/datacube/getinterfacesummaryhour', 'getInterfaceSummaryHour', params);
}
