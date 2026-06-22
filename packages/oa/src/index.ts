/**
 * @wxstack/oa —— 微信公众号（订阅号/服务号）服务端 SDK。
 *
 * 基于 @wxstack/core 内核实现，提供：
 * - OaClient：约 100+ 高层语义方法（菜单/消息/客服/素材/草稿/留言/用户/二维码/数据/网页授权/OCR 等）。
 * - 逃生口：继承自基类的 client.request() / client.requestRaw()，可调用任意「尚未封装」的新接口
 *   （自动带令牌、自动解包；二进制下载用 requestRaw + responseType:'arraybuffer' 取 resp.raw）。
 * - 回调：createOaWebhook（框架无关）与 createExpressMiddleware（Express 适配）。
 */
export { OaClient, createOaClient } from './client.js';

// 兼容旧用法：createClient 为 createOaClient 的别名。
export { createOaClient as createClient } from './client.js';

export { createOaWebhook, createExpressMiddleware } from './webhook.js';
export type { OaWebhookOptions, ExpressMiddlewareOptions } from './webhook.js';

export type {
  OaClientConfig,
  OaRetryOptions,
  TokenMode,
  WxLang,
  UploadInput,
  BinaryResponseType,
} from './types.js';

// 全量接口表（覆盖官方文档抓取到的全部公众号端点）。
export { endpoints as oaEndpoints, createGeneratedApi } from './generated/endpoints.js';
export type { EndpointId, EndpointMeta, GeneratedApi } from './generated/endpoints.js';

// 重新导出常用核心能力，便于按需直接使用。
export {
  WxApiError,
  WxHttpError,
  WxCryptoError,
  parseXml,
  buildXml,
  WXBizMsgCrypt,
  verifySignature,
  verifyMsgSignature,
  decodeAESKey,
} from '@wxstack/core';

export type {
  MessageHandler,
  RawCallback,
  WebhookResult,
  WxMessage,
  ReplyContext,
  ReplyPayload,
} from '@wxstack/core';
