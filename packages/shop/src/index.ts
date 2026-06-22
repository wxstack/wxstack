/**
 * @wxstack/shop —— 微信小店服务端 SDK。
 *
 * 提供两种 API 风格：
 * - 高层语义方法：`client.product.* / order.* / aftersale.* / coupon.*`；
 * - 低层逃生口：继承自基类的 `client.request()` / `client.requestRaw()`，
 *   可调用任意「SDK 尚未封装」的小店接口（小店接口仍在演进，强烈建议善用逃生口）。
 *
 * @see https://developers.weixin.qq.com/doc/store/shop/API.html
 */

// 工厂 + 类
export { ShopClient, createShopClient } from './client.js';

// 回调
export { createShopWebhook, type ShopWebhookOptions } from './webhook.js';

// 类型
export type { ShopClientConfig, ShopParams, ShopResult } from './types.js';

// 端点纯函数（按需直接使用，便于树摇）
export * from './actions/index.js';

// re-export 常用核心错误类，方便使用方 try/catch 而无需额外依赖 @wxstack/core
export { WxApiError, WxError, WxHttpError } from '@wxstack/core';

// 全量接口表（覆盖官方文档抓取到的全部端点）。
export { endpoints as shopEndpoints, createGeneratedApi } from './generated/endpoints.js';
export type {
  EndpointId,
  EndpointMeta,
  GeneratedApi,
  GeneratedCallExtra,
} from './generated/endpoints.js';
