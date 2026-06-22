/**
 * @wxstack/ch —— 微信视频号（视频号小店/直播）服务端 SDK。
 *
 * 视频号对外服务端 API 面较窄且仍在演进，因此本包采用「坦诚策略」：
 * 以「标准 access_token 鉴权 + 逃生口 + 已开放接口薄封装」为主，不承诺大而全。
 *
 * 任意未被封装的端点，均可通过继承自基类的逃生口调用：
 * - `client.request(opts)`：自动解包，errcode!=0 抛 {@link WxApiError}；
 * - `client.requestRaw(opts)`：返回完整 HttpResponse（含原始字节，用于下载等）。
 * 两者都会自动携带 access_token 并在令牌失效时自动刷新重放。
 *
 * @see https://developers.weixin.qq.com/doc/channels/
 */

// 工厂 + 类
export { ChClient, createChClient } from './client.js';

// 配置与关键类型
export type { ChClientConfig, ChApiResult } from './types.js';

// actions 纯函数（高级用法：可脱离实例直接组合调用）
export * as finderActions from './actions/finder.js';
export * as shopActions from './actions/shop.js';
export * as liveActions from './actions/live.js';
export type { RequestLike } from './actions/internal.js';

// 便捷转出常用核心错误类型，调用方无需再额外依赖 @wxstack/core 即可 instanceof 判错。
export { WxApiError } from '@wxstack/core';

// 全量接口表（覆盖官方文档抓取到的全部端点）。
export { endpoints as chEndpoints, createGeneratedApi } from './generated/endpoints.js';
export type {
  EndpointId,
  EndpointMeta,
  GeneratedApi,
  GeneratedCallExtra,
} from './generated/endpoints.js';
