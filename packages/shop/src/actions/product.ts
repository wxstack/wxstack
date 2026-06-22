/**
 * 商品（SPU / SKU）相关端点。
 *
 * 路径位于 /channels/ec/product/* 下，均为 POST。
 * 字段以官方文档为准；本处为薄封装，body 透传。
 *
 * @see https://developers.weixin.qq.com/doc/store/shop/API.html
 */
import type { ShopClient } from '../client.js';
import type { ShopParams, ShopResult } from '../types.js';

/**
 * 新增商品（创建 SPU + SKU）。
 *
 * @param client 小店客户端实例。
 * @param params 商品信息，字段以官方文档为准。
 * @returns 微信返回体（含新建商品 id）。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/product/add_product.html
 */
export async function addProduct<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams,
): Promise<T> {
  return client.request<T>({ method: 'POST', url: '/channels/ec/product/add', body: params });
}

/**
 * 更新商品。
 *
 * @param client 小店客户端实例。
 * @param params 商品信息（需含 product_id）。
 * @returns 微信返回体。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/product/update_product.html
 */
export async function updateProduct<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams,
): Promise<T> {
  return client.request<T>({ method: 'POST', url: '/channels/ec/product/update', body: params });
}

/**
 * 获取商品详情。
 *
 * @param client 小店客户端实例。
 * @param params 查询参数（通常含 product_id）。
 * @returns 微信返回体（含商品详情）。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/product/get_product.html
 */
export async function getProduct<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams,
): Promise<T> {
  return client.request<T>({ method: 'POST', url: '/channels/ec/product/get', body: params });
}

/**
 * 获取商品列表。
 *
 * @param client 小店客户端实例。
 * @param params 分页与筛选参数（如 page_size / next_key / status）。
 * @returns 微信返回体（含商品 id 列表与分页游标）。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/product/get_product_list.html
 */
export async function getProductList<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams = {},
): Promise<T> {
  return client.request<T>({ method: 'POST', url: '/channels/ec/product/list/get', body: params });
}

/**
 * 商品上架。
 *
 * @param client 小店客户端实例。
 * @param params 上架参数（需含 product_id）。
 * @returns 微信返回体。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/product/listing_product.html
 */
export async function listingProduct<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams,
): Promise<T> {
  return client.request<T>({ method: 'POST', url: '/channels/ec/product/listing', body: params });
}

/**
 * 商品下架。
 *
 * @param client 小店客户端实例。
 * @param params 下架参数（需含 product_id）。
 * @returns 微信返回体。
 * @see https://developers.weixin.qq.com/doc/store/shop/API/product/delisting_product.html
 */
export async function delistingProduct<T extends ShopResult = ShopResult>(
  client: ShopClient,
  params: ShopParams,
): Promise<T> {
  return client.request<T>({ method: 'POST', url: '/channels/ec/product/delisting', body: params });
}
