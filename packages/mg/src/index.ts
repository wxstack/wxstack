/**
 * @wxstack/mg —— 微信小游戏服务端 SDK。
 *
 * 提供登录态（code2Session / 解密）、虚拟支付（米大师 Midas）、内容安全、订阅消息等
 * 高层语义方法；并继承自基类的逃生口 `client.request()` / `client.requestRaw()`，
 * 可调用任意尚未封装的小游戏服务端接口（如防沉迷/实名、UnionID 相关接口）。
 *
 * @see https://developers.weixin.qq.com/minigame/dev/api-backend/
 */

// 工厂 + 类
export { MgClient, createMgClient, type MidasCallParams } from './client.js';

// 配置与关键类型
export type {
  MgClientConfig,
  Code2SessionResult,
  MsgSecCheckResult,
  MediaCheckAsyncResult,
  MidasResult,
} from './types.js';
export type { SubscribeMessageResult } from './actions/message.js';

// Midas 签名助手（高级用法 / 自行注入签名时使用）
export {
  buildMidasSig,
  buildMidasMpSig,
  buildSignSource,
  type SignParams,
} from './midas-sign.js';

// re-export 必要的核心错误类与工具
export { WxApiError, decryptMpData } from '@wxstack/core';
export type { DecryptedMpData } from '@wxstack/core';

// 全量接口表（小游戏可用的 api.weixin.qq.com OpenAPI 子集）。
export { endpoints as mgEndpoints, createGeneratedApi } from './generated/endpoints.js';
export type {
  EndpointId,
  EndpointMeta,
  GeneratedApi,
  GeneratedCallExtra,
} from './generated/endpoints.js';
