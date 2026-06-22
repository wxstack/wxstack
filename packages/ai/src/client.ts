/**
 * AiClient —— 微信智能对话开放平台（对话机器人）客户端。
 *
 * 设计取向（如实说明）：该平台服务端「开放接口」按机器人在平台后台单独开通、地址与 token 各异，
 * 公开文档未给出统一稳定的端点清单。因此本客户端**不臆造端点路径**，而是提供：
 * - 可配置 `baseURL`（默认平台域名 chatbot.weixin.qq.com）；
 * - 三选一鉴权（平台 token / 标准 access_token / 不自动鉴权）；
 * - 逃生口 `request()` / `requestRaw()`，由调用方填入平台分配的实际路径调用任意接口；
 * - 便捷方法 `query(path, params)` / `call(method, path, opts)`。
 *
 * @see https://developers.weixin.qq.com/doc/aispeech/platform/INTRODUCTION.html
 */
import {
  BaseClient,
  FetchTransport,
  type QueryValue,
  WX_API_DOMAINS,
  createAccessTokenManager,
} from '@wxstack/core';
import { type GeneratedApi, createGeneratedApi } from './generated/endpoints.js';
import type { AiClientConfig, AiQueryParams, AiQueryResult } from './types.js';

const DEFAULT_BASE = 'https://chatbot.weixin.qq.com';

/** 智能对话开放平台客户端。 */
export class AiClient extends BaseClient {
  /** 平台「开放接口」token（如使用 token 鉴权，则以 query 参数 token 附加）。 */
  private readonly botToken?: string;
  /** 全量接口表：覆盖官方文档抓取到的全部智能对话端点（自动鉴权薄封装）。 */
  readonly api: GeneratedApi;

  constructor(config: AiClientConfig) {
    super({ ...config, baseURL: config.baseURL ?? DEFAULT_BASE });
    this.botToken = config.token;

    if (config.appId && config.appSecret) {
      // 标准 access_token 鉴权：令牌须从 api.weixin.qq.com 获取，故用独立传输实例。
      const { provider } = createAccessTokenManager({
        appId: config.appId,
        appSecret: config.appSecret,
        mode: config.tokenMode,
        store: this.store,
        logger: this.logger,
        transport: new FetchTransport({ baseURL: WX_API_DOMAINS.auto }),
        keyPrefix: 'ai',
      });
      this.tokenProvider = provider;
      this.tokenPlacement = 'query';
    } else {
      // 无标准令牌：不自动附加 access_token（可用 token 鉴权或调用方自带鉴权）。
      this.tokenPlacement = 'none';
    }
    this.api = createGeneratedApi(this);
  }

  /** 合并平台 token 到查询参数。 */
  private withToken(query?: Record<string, QueryValue>): Record<string, QueryValue> | undefined {
    if (!this.botToken) return query;
    return { ...query, token: this.botToken };
  }

  /**
   * 向机器人发问，取回复。
   * @param path 平台「开放接口」分配的查询路径（绝对 URL 或相对 baseURL 的路径）。
   * @param params 发问参数（query 文本及其余透传字段）。
   * @see https://developers.weixin.qq.com/doc/aispeech/platform/INTRODUCTION.html
   */
  query(path: string, params: AiQueryParams): Promise<AiQueryResult> {
    return this.request<AiQueryResult>({
      method: 'POST',
      url: path,
      query: this.withToken(),
      body: params,
    });
  }

  /**
   * 通用调用便捷方法（自动附加平台 token，未封装接口的统一入口）。
   * @param method HTTP 方法。
   * @param path 平台分配的接口路径。
   * @param opts.body 请求体；opts.query 额外查询参数。
   * @see https://developers.weixin.qq.com/doc/aispeech/platform/INTRODUCTION.html
   */
  call<T = unknown>(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    path: string,
    opts?: { body?: Record<string, unknown>; query?: Record<string, QueryValue> },
  ): Promise<T> {
    return this.request<T>({
      method,
      url: path,
      query: this.withToken(opts?.query),
      body: opts?.body,
    });
  }
}

/**
 * 创建智能对话开放平台客户端。
 * @param config 配置（鉴权三选一，详见 {@link AiClientConfig}）。
 * @see https://developers.weixin.qq.com/doc/aispeech/platform/INTRODUCTION.html
 */
export function createAiClient(config: AiClientConfig): AiClient {
  return new AiClient(config);
}
