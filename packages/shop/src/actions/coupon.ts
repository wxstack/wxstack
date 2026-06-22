/**
 * 优惠券相关端点。
 *
 * 路径位于 /channels/ec/coupon/* 下，均为 POST。
 * 字段以官方文档为准；本处为薄封装，body 透传。
 *
 * @see https://developers.weixin.qq.com/doc/store/shop/API.html
 */
import type { ShopClient } from '../client.js';
import type { ShopParams, ShopResult } from '../types.js';

/**
 * 创建优惠券。
 *
 * @param client 小店客户端实例。
 * @param params 优惠券信息（面额、门槛、库存、有效期等），字段以官方文档为准。
 * @returns 微信返回体（含新建券 id）。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/create_coupon.html
 */
export async function createCoupon<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams,
): Promise<T> {
  return client.request<T>({ method: 'POST', url: '/channels/ec/coupon/create', body: params });
}

/**
 * 获取优惠券详情。
 *
 * @param client 小店客户端实例。
 * @param params 查询参数（通常含 coupon_id）。
 * @returns 微信返回体（含券详情）。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/get_coupon.html
 */
export async function getCoupon<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams,
): Promise<T> {
  return client.request<T>({ method: 'POST', url: '/channels/ec/coupon/get', body: params });
}

/**
 * 获取优惠券列表。
 *
 * @param client 小店客户端实例。
 * @param params 分页与筛选参数（如 status / page_size / next_key）。
 * @returns 微信返回体（含券 id 列表与分页游标）。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/get_coupon_list.html
 */
export async function getCouponList<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams = {},
): Promise<T> {
  return client.request<T>({ method: 'POST', url: '/channels/ec/coupon/list/get', body: params });
}
