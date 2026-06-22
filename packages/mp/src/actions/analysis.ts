/**
 * 数据分析（统计）相关端点。
 *
 * 全部为 POST，body 形如 `{ begin_date, end_date }`（日期格式 YYYYMMDD）。
 * 不同接口对时间跨度有不同限制，详见各端点官方文档。
 *
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/
 */
import type { MpClient } from '../client.js';
import type { JsonObject } from '../types.js';

/** 统计接口通用入参（允许透传其它字段）。 */
export interface DateRange extends JsonObject {
  /** 开始日期（YYYYMMDD）。 */
  begin_date: string;
  /** 结束日期（YYYYMMDD）。 */
  end_date: string;
}

/**
 * 概况趋势（日趋势）。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-trend/getDailySummary.html
 */
export async function getDailySummary(client: MpClient, body: DateRange): Promise<JsonObject> {
  return client.post<JsonObject>('/datacube/getweanalysisappiddailysummarytrend', body);
}

/**
 * 访问趋势（日趋势）。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-trend/getDailyVisitTrend.html
 */
export async function getDailyVisitTrend(client: MpClient, body: DateRange): Promise<JsonObject> {
  return client.post<JsonObject>('/datacube/getweanalysisappiddailyvisittrend', body);
}

/**
 * 访问趋势（周趋势）。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-trend/getWeeklyVisitTrend.html
 */
export async function getWeeklyVisitTrend(client: MpClient, body: DateRange): Promise<JsonObject> {
  return client.post<JsonObject>('/datacube/getweanalysisappidweeklyvisittrend', body);
}

/**
 * 访问趋势（月趋势）。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-trend/getMonthlyVisitTrend.html
 */
export async function getMonthlyVisitTrend(client: MpClient, body: DateRange): Promise<JsonObject> {
  return client.post<JsonObject>('/datacube/getweanalysisappidmonthlyvisittrend', body);
}

/**
 * 访问分布。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-trend/getVisitDistribution.html
 */
export async function getVisitDistribution(client: MpClient, body: DateRange): Promise<JsonObject> {
  return client.post<JsonObject>('/datacube/getweanalysisappidvisitdistribution', body);
}

/**
 * 用户访问留存（日留存）。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-retain/getDailyRetain.html
 */
export async function getDailyRetain(client: MpClient, body: DateRange): Promise<JsonObject> {
  return client.post<JsonObject>('/datacube/getweanalysisappiddailyretaininfo', body);
}

/**
 * 用户访问留存（周留存）。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-retain/getWeeklyRetain.html
 */
export async function getWeeklyRetain(client: MpClient, body: DateRange): Promise<JsonObject> {
  return client.post<JsonObject>('/datacube/getweanalysisappidweeklyretaininfo', body);
}

/**
 * 用户访问留存（月留存）。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-retain/getMonthlyRetain.html
 */
export async function getMonthlyRetain(client: MpClient, body: DateRange): Promise<JsonObject> {
  return client.post<JsonObject>('/datacube/getweanalysisappidmonthlyretaininfo', body);
}

/**
 * 访问页面数据。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-page/getVisitPage.html
 */
export async function getVisitPage(client: MpClient, body: DateRange): Promise<JsonObject> {
  return client.post<JsonObject>('/datacube/getweanalysisappidvisitpage', body);
}

/**
 * 用户画像分布。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/user-portrait/getUserPortrait.html
 */
export async function getUserPortrait(client: MpClient, body: DateRange): Promise<JsonObject> {
  return client.post<JsonObject>('/datacube/getweanalysisappiduserportrait', body);
}
