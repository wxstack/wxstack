/**
 * 视频号（finder）账号信息接口。
 *
 * 端点取自官方「视频号助手 API 接口列表」，路径已核对。其余字段以官方文档为准；
 * 未封装端点可用逃生口 client.request() 直接调用。
 *
 * @see https://developers.weixin.qq.com/doc/channels/api/channels/
 */
import type { RequestLike } from './internal.js';

/**
 * 通过 appid 获取视频号账号属性（账号信息）。
 * @param client 具备 request 逃生口的客户端。
 * @param params 透传请求体。
 * @see https://developers.weixin.qq.com/doc/channels/api/channels/
 */
export async function getFinderAttr<T = unknown>(
  client: RequestLike,
  params: Record<string, unknown> = {},
): Promise<T> {
  return client.request<T>({
    method: 'POST',
    url: '/channels/finderlive/get_finder_attr_by_appid',
    body: params,
  });
}
