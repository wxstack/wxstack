/**
 * @wxstack/ai 配置与关键类型。
 *
 * 微信智能对话开放平台（chatbot.weixin.qq.com）的服务端「开放接口」是按机器人/技能在平台后台
 * 单独开通与获取的（含专属接入地址与 token），并未在公开文档中给出统一、稳定的 HTTP 端点清单。
 * 因此本包**不臆造**具体端点路径，而是提供「可配置 baseURL + 鉴权 + 逃生口」，
 * 由调用方填入平台「开放接口」处获取的实际地址。
 *
 * @see https://developers.weixin.qq.com/doc/aispeech/platform/INTRODUCTION.html
 */
import type { BaseClientConfig, TokenMode } from '@wxstack/core';

/**
 * AiClient 配置。三种鉴权方式按优先级择一：
 * 1. 平台开放接口 token：传 `token`，将以 query 参数 `token` 附加；
 * 2. 微信标准 access_token：传 `appId` + `appSecret`（令牌从 api.weixin.qq.com 获取，query 附加）；
 * 3. 不自动鉴权：均不传，自行在 `request()` 中带鉴权参数。
 */
export interface AiClientConfig extends BaseClientConfig {
  /**
   * 服务端接口基础地址。默认 `https://chatbot.weixin.qq.com`。
   * 平台「开放接口」会给出实际接入域名，请按需覆盖。
   */
  baseURL?: string;
  /** 平台「开放接口」分配的 token（如使用 token 鉴权）。 */
  token?: string;
  /** 使用微信标准 access_token 鉴权时的 appId（可选）。 */
  appId?: string;
  /** 对应的 appSecret（可选）。 */
  appSecret?: string;
  /** access_token 模式：normal（默认）/ stable。 */
  tokenMode?: TokenMode;
}

/** 通用 errcode/errmsg 壳。各端点返回大多在此基础上扩展。 */
export interface AiBaseResponse {
  errcode?: number;
  errmsg?: string;
}

/**
 * 向机器人发问的请求体。字段以平台为准，保留索引签名以透传任意官方字段。
 */
export interface AiQueryParams {
  /** 用户输入的文本。 */
  query: string;
  /** 用户唯一标识（用于多轮会话上下文）。 */
  userid?: string;
  /** 透传任意官方字段。 */
  [key: string]: unknown;
}

/** 机器人回复结果（结构随技能配置变化，保留索引签名读取原始字段）。 */
export interface AiQueryResult extends AiBaseResponse {
  answer?: string;
  data?: unknown;
  [key: string]: unknown;
}
