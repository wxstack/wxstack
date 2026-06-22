/**
 * 微信小店客户端：鉴权装配 + 高层语义方法 + 逃生口。
 *
 * - 鉴权：使用主体标准 access_token（/cgi-bin/token），放在 query（access_token=...）。
 * - 高层方法：按域分组（product / order / aftersale / coupon），均为薄封装。
 * - 逃生口：继承自基类的 `request()` / `requestRaw()`，可调用任意「SDK 尚未封装」的小店接口。
 *   由于小店接口仍在演进，未封装接口请优先使用逃生口（详见 README）。
 *
 * @see https://developers.weixin.qq.com/doc/store/shop/API.html
 */
import { BaseClient, createAccessTokenManager } from '@wxstack/core';

import {
  acceptAftersale,
  addProduct,
  createCoupon,
  delistingProduct,
  getAftersale,
  getAftersaleList,
  getCoupon,
  getCouponList,
  getOrder,
  getOrderList,
  getProduct,
  getProductList,
  listingProduct,
  rejectAftersale,
  searchOrder,
  updateProduct,
  uploadDeliveryInfo,
} from './actions/index.js';
import { type GeneratedApi, createGeneratedApi } from './generated/endpoints.js';
import type { ShopClientConfig, ShopParams, ShopResult } from './types.js';

/** 微信小店服务端客户端。 */
export class ShopClient extends BaseClient {
  /** 全量接口表：覆盖官方文档抓取到的全部小店端点（自动鉴权薄封装）。 */
  readonly api: GeneratedApi;

  constructor(config: ShopClientConfig) {
    super(config);

    // 标准 access_token（appid+secret），keyPrefix 区分小店主体，放在 query。
    const { provider } = createAccessTokenManager({
      appId: config.appId,
      appSecret: config.appSecret,
      mode: config.tokenMode,
      store: this.store,
      transport: this.transport,
      logger: this.logger,
      keyPrefix: 'shop',
    });
    this.tokenProvider = provider;
    this.tokenPlacement = 'query';
    this.tokenQueryKey = 'access_token';
    this.api = createGeneratedApi(this);
  }

  /** 商品（SPU / SKU）相关方法。 */
  readonly product = {
    /** 新增商品。 */
    add: (params: ShopParams): Promise<ShopResult> => addProduct(this, params),
    /** 更新商品。 */
    update: (params: ShopParams): Promise<ShopResult> => updateProduct(this, params),
    /** 获取商品详情。 */
    get: (params: ShopParams): Promise<ShopResult> => getProduct(this, params),
    /** 获取商品列表。 */
    getList: (params?: ShopParams): Promise<ShopResult> => getProductList(this, params),
    /** 商品上架。 */
    listing: (params: ShopParams): Promise<ShopResult> => listingProduct(this, params),
    /** 商品下架。 */
    delisting: (params: ShopParams): Promise<ShopResult> => delistingProduct(this, params),
  };

  /** 订单与物流相关方法。 */
  readonly order = {
    /** 获取订单详情。 */
    get: (params: ShopParams): Promise<ShopResult> => getOrder(this, params),
    /** 获取订单列表。 */
    getList: (params?: ShopParams): Promise<ShopResult> => getOrderList(this, params),
    /** 搜索订单。 */
    search: (params?: ShopParams): Promise<ShopResult> => searchOrder(this, params),
    /** 上传订单物流信息（发货）。 */
    uploadDeliveryInfo: (params: ShopParams): Promise<ShopResult> =>
      uploadDeliveryInfo(this, params),
  };

  /** 售后相关方法。 */
  readonly aftersale = {
    /** 获取售后单详情。 */
    get: (params: ShopParams): Promise<ShopResult> => getAftersale(this, params),
    /** 获取售后单列表。 */
    getList: (params?: ShopParams): Promise<ShopResult> => getAftersaleList(this, params),
    /** 同意售后。 */
    accept: (params: ShopParams): Promise<ShopResult> => acceptAftersale(this, params),
    /** 拒绝售后。 */
    reject: (params: ShopParams): Promise<ShopResult> => rejectAftersale(this, params),
  };

  /** 优惠券相关方法。 */
  readonly coupon = {
    /** 创建优惠券。 */
    create: (params: ShopParams): Promise<ShopResult> => createCoupon(this, params),
    /** 获取优惠券详情。 */
    get: (params: ShopParams): Promise<ShopResult> => getCoupon(this, params),
    /** 获取优惠券列表。 */
    getList: (params?: ShopParams): Promise<ShopResult> => getCouponList(this, params),
  };
}

/**
 * 创建微信小店客户端。
 *
 * @param config 配置（appId / appSecret 必填，其余继承基类配置）。
 * @returns ShopClient 实例。
 *
 * @example
 * ```ts
 * const shop = createShopClient({ appId: 'wx...', appSecret: '...' });
 * const detail = await shop.product.get({ product_id: '123' });
 * // 逃生口：调用任意未封装接口
 * const r = await shop.request({ method: 'POST', url: '/channels/ec/xxx/yyy', body: {} });
 * ```
 */
export function createShopClient(config: ShopClientConfig): ShopClient {
  return new ShopClient(config);
}
