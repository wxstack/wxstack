/**
 * 视频号橱窗、留资、罗盘数据接口。
 *
 * 端点取自官方「视频号助手 API 接口列表」，路径已核对；字段以官方文档为准。
 *
 * @see https://developers.weixin.qq.com/doc/channels/api/channels/
 */
import type { RequestLike } from './internal.js';

/**
 * 橱窗添加商品。
 * @param client 具备 request 逃生口的客户端。
 * @param params 透传请求体（商品信息）。
 * @see https://developers.weixin.qq.com/doc/channels/api/channels/
 */
export async function addWindowProduct<T = unknown>(
  client: RequestLike,
  params: Record<string, unknown> = {},
): Promise<T> {
  return client.request<T>({
    method: 'POST',
    url: '/channels/ec/window/product/add',
    body: params,
  });
}

/**
 * 通过 request_id 获取留资组件信息。
 * @param client 具备 request 逃生口的客户端。
 * @param params 透传请求体（request_id 等）。
 * @see https://developers.weixin.qq.com/doc/channels/api/channels/
 */
export async function getLeadsInfo<T = unknown>(
  client: RequestLike,
  params: Record<string, unknown> = {},
): Promise<T> {
  return client.request<T>({
    method: 'POST',
    url: '/channels/leads/get_leads_info_by_request_id',
    body: params,
  });
}

/**
 * 获取视频号罗盘账号整体数据。
 * @param client 具备 request 逃生口的客户端。
 * @param params 透传请求体（日期等）。
 * @see https://developers.weixin.qq.com/doc/channels/api/channels/
 */
export async function getCompassOverall<T = unknown>(
  client: RequestLike,
  params: Record<string, unknown> = {},
): Promise<T> {
  return client.request<T>({
    method: 'POST',
    url: '/channels/ec/compass/finder/overall/get',
    body: params,
  });
}
