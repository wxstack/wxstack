/**
 * @wxstack/mp —— 微信小程序服务端 SDK。
 *
 * 提供登录、手机号、订阅消息、小程序码、URL Scheme/Link、内容安全、客服消息、
 * 数据分析、发货信息管理、风控、SOTER，以及物流助手 / 直播的核心端点封装。
 *
 * 两种 API 风格：
 * - 高层语义方法：`client.code2Session()`、`client.getQRCode()` 等；
 * - 逃生口：`client.request()` / `client.requestRaw()`，可调用任意尚未封装的端点
 *   （自动带 access_token）。物流助手、直播等仅封装少量核心端点，其余走逃生口。
 *
 * @example
 * ```ts
 * import { createMpClient } from '@wxstack/mp';
 * const mp = createMpClient({ appId: 'wx...', appSecret: '...' });
 * const session = await mp.code2Session(jsCode);
 * ```
 */
export { MpClient, createMpClient } from './client.js';

export type {
  MpClientConfig,
  Code2SessionResult,
  GetPhoneNumberResult,
  PhoneInfo,
  TempMediaType,
  JsonObject,
} from './types.js';

export type { DateRange } from './actions/analysis.js';

// 全量接口表（覆盖官方文档抓取到的全部小程序服务端端点）。
export { endpoints as mpEndpoints, createGeneratedApi } from './generated/endpoints.js';
export type { EndpointId, EndpointMeta, GeneratedApi } from './generated/endpoints.js';

// 重导出常用核心能力，便于直接 try/catch 与复用小程序解密。
export { WxApiError, decryptMpData } from '@wxstack/core';
export type { DecryptedMpData } from '@wxstack/core';
