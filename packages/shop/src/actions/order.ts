/**
 * 订单与物流相关端点。
 *
 * 路径位于 /channels/ec/order/* 下，均为 POST。
 * 字段以官方文档为准；本处为薄封装，body 透传。
 *
 * @see https://developers.weixin.qq.com/doc/store/shop/API.html
 */
import type { ShopClient } from '../client.js';
import type { ShopParams, ShopResult } from '../types.js';

/**
 * 获取订单详情。
 *
 * @param client 小店客户端实例。
 * @param params 查询参数（通常含 order_id）。
 * @returns 微信返回体（含订单详情）。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/order/get_order.html
 */
export async function getOrder<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams,
): Promise<T> {
  return client.request<T>({ method: 'POST', url: '/channels/ec/order/get', body: params });
}

/**
 * 获取订单列表（按时间/状态分页拉取）。
 *
 * @param client 小店客户端实例。
 * @param params 分页与筛选参数（如 status / create_time_range / page_size / next_key）。
 * @returns 微信返回体（含订单 id 列表与分页游标）。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/order/get_order_list.html
 */
export async function getOrderList<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams = {},
): Promise<T> {
  return client.request<T>({ method: 'POST', url: '/channels/ec/order/list/get', body: params });
}

/**
 * 搜索订单（多条件组合检索）。
 *
 * @param client 小店客户端实例。
 * @param params 检索条件。
 * @returns 微信返回体（含命中订单列表）。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/order/search_order.html
 */
export async function searchOrder<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams = {},
): Promise<T> {
  return client.request<T>({ method: 'POST', url: '/channels/ec/order/search', body: params });
}

/**
 * 上传订单物流信息（发货）。
 *
 * @param client 小店客户端实例。
 * @param params 物流信息（需含 order_id 与快递单号/物流公司等）。
 * @returns 微信返回体。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/order/upload_delivery_info.html
 */
export async function uploadDeliveryInfo<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams,
): Promise<T> {
  return client.request<T>({
    method: 'POST',
    url: '/channels/ec/order/deliveryinfo/upload',
    body: params,
  });
}
