/**
 * @wxstack/ai —— 微信智能对话开放平台（对话机器人）SDK。
 *
 * 该平台服务端「开放接口」按机器人在平台后台单独开通、地址与 token 各异，公开文档未给出
 * 统一稳定的端点清单。故本包**不臆造端点**，以「可配置 baseURL + 鉴权 + 逃生口」为核心：
 * - `createAiClient({ baseURL, token })` 或 `{ appId, appSecret }`；
 * - `client.query(path, params)` / `client.call(method, path, opts)`；
 * - 任意接口经 `client.request()` / `client.requestRaw()` 调用。
 *
 * @see https://developers.weixin.qq.com/doc/aispeech/platform/INTRODUCTION.html
 */
export { AiClient, createAiClient } from './client.js';
export type { AiBaseResponse, AiClientConfig, AiQueryParams, AiQueryResult } from './types.js';

// 便于调用方做错误分支判断，从内核再导出常用错误类型。
export { WxApiError } from '@wxstack/core';

// 全量接口表（覆盖官方文档抓取到的全部端点）。
export { endpoints as aiEndpoints, createGeneratedApi } from './generated/endpoints.js';
export type {
  EndpointId,
  EndpointMeta,
  GeneratedApi,
  GeneratedCallExtra,
} from './generated/endpoints.js';
