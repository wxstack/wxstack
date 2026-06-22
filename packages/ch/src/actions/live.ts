/**
 * 视频号直播（live）相关接口。
 *
 * 端点取自官方「视频号助手 API 接口列表」，路径已核对；字段以官方文档为准。
 *
 * @see https://developers.weixin.qq.com/doc/channels/api/channels/
 */
import type { RequestLike } from './internal.js';

/**
 * 获取视频号直播记录列表。
 * @param client 具备 request 逃生口的客户端。
 * @param params 透传请求体（分页等）。
 * @see https://developers.weixin.qq.com/doc/channels/api/channels/
 */
export async function getLiveRecordList<T = unknown>(
  client: RequestLike,
  params: Record<string, unknown> = {},
): Promise<T> {
  return client.request<T>({
    method: 'POST',
    url: '/channels/ec/finderlive/getfinderliverecordlist',
    body: params,
  });
}

/**
 * 获取直播大屏的直播列表。
 * @param client 具备 request 逃生口的客户端。
 * @param params 透传请求体。
 * @see https://developers.weixin.qq.com/doc/channels/api/channels/
 */
export async function getLiveDashboardList<T = unknown>(
  client: RequestLike,
  params: Record<string, unknown> = {},
): Promise<T> {
  return client.request<T>({
    method: 'POST',
    url: '/channels/livedashboard/getlivelist',
    body: params,
  });
}
