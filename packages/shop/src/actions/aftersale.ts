/**
 * 售后（退款/退货）相关端点。
 *
 * 路径位于 /channels/ec/aftersale/* 下，均为 POST。
 * 字段以官方文档为准；本处为薄封装，body 透传。
 *
 * @see https://developers.weixin.qq.com/doc/store/shop/API.html
 */
import type { ShopClient } from '../client.js';
import type { ShopParams, ShopResult } from '../types.js';

/**
 * 获取售后单详情。
 *
 * @param client 小店客户端实例。
 * @param params 查询参数（通常含 aftersale_id）。
 * @returns 微信返回体（含售后单详情）。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/aftersale/get_aftersale.html
 */
export async function getAftersale<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams,
): Promise<T> {
  return client.request<T>({ method: 'POST', url: '/channels/ec/aftersale/get', body: params });
}

/**
 * 获取售后单列表。
 *
 * @param client 小店客户端实例。
 * @param params 分页与筛选参数（如 status / page_size / next_key）。
 * @returns 微信返回体（含售后单 id 列表与分页游标）。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/aftersale/get_aftersale_list.html
 */
export async function getAftersaleList<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams = {},
): Promise<T> {
  return client.request<T>({
    method: 'POST',
    url: '/channels/ec/aftersale/list/get',
    body: params,
  });
}

/**
 * 同意售后（商家受理通过）。
 *
 * @param client 小店客户端实例。
 * @param params 受理参数（需含 aftersale_id；退货时含收货地址等）。
 * @returns 微信返回体。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/aftersale/accept_aftersale.html
 */
export async function acceptAftersale<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams,
): Promise<T> {
  return client.request<T>({ method: 'POST', url: '/channels/ec/aftersale/accept', body: params });
}

/**
 * 拒绝售后（商家驳回）。
 *
 * @param client 小店客户端实例。
 * @param params 驳回参数（需含 aftersale_id 与拒绝原因等）。
 * @returns 微信返回体。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/aftersale/reject_aftersale.html
 */
export async function rejectAftersale<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams,
): Promise<T> {
  return client.request<T>({ method: 'POST', url: '/channels/ec/aftersale/reject', body: params });
}
