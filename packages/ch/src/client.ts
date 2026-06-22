/**
 * 视频号业务客户端：装配标准 access_token 鉴权，并提供高层语义方法。
 *
 * 设计取舍（坦诚策略）：视频号对外服务端 API 面较窄且仍在演进，因此本包
 * 以「鉴权 + 逃生口 + 已开放接口薄封装」为主，不承诺大而全。高层方法的端点
 * 取自官方「视频号助手 API 接口列表」；未封装的接口一律可经继承自基类的逃生口
 * {@link ChClient.request} / {@link ChClient.requestRaw} 调用。
 *
 * @see https://developers.weixin.qq.com/doc/channels/api/channels/
 */
import { BaseClient, createAccessTokenManager } from '@wxstack/core';
import * as finder from './actions/finder.js';
import * as live from './actions/live.js';
import * as window from './actions/shop.js';
import { type GeneratedApi, createGeneratedApi } from './generated/endpoints.js';
import type { ChClientConfig } from './types.js';

/**
 * 视频号客户端。
 *
 * 双 API 风格：
 * - 高层语义方法：对已开放接口的薄封装，带 @see（路径已核对官方接口列表）；
 * - 逃生口 {@link request} / {@link requestRaw}（继承自 BaseClient）：可调用任意
 *   尚未被本包封装的端点，自动携带 access_token、自动失效重刷。
 */
export class ChClient extends BaseClient {
  /** 全量接口表：覆盖官方文档抓取到的全部视频号端点（自动鉴权薄封装）。 */
  readonly api: GeneratedApi;

  constructor(config: ChClientConfig) {
    super(config);
    // 视频号令牌即标准 access_token，放在 query 的 access_token 字段。
    const { provider } = createAccessTokenManager({
      appId: config.appId,
      appSecret: config.appSecret,
      mode: config.tokenMode,
      store: this.store,
      transport: this.transport,
      logger: this.logger,
      keyPrefix: 'ch',
    });
    this.tokenProvider = provider;
    this.api = createGeneratedApi(this);
  }

  /**
   * 通过 appid 获取视频号账号属性（账号信息）。
   * @see https://developers.weixin.qq.com/doc/channels/api/channels/
   */
  getFinderInfo<T = unknown>(params: Record<string, unknown> = {}): Promise<T> {
    return finder.getFinderAttr<T>(this, params);
  }

  /**
   * 获取视频号直播记录列表。
   * @see https://developers.weixin.qq.com/doc/channels/api/channels/
   */
  getLiveRecordList<T = unknown>(params: Record<string, unknown> = {}): Promise<T> {
    return live.getLiveRecordList<T>(this, params);
  }

  /**
   * 获取直播大屏的直播列表。
   * @see https://developers.weixin.qq.com/doc/channels/api/channels/
   */
  getLiveDashboardList<T = unknown>(params: Record<string, unknown> = {}): Promise<T> {
    return live.getLiveDashboardList<T>(this, params);
  }

  /**
   * 橱窗添加商品。
   * @see https://developers.weixin.qq.com/doc/channels/api/channels/
   */
  addWindowProduct<T = unknown>(params: Record<string, unknown> = {}): Promise<T> {
    return window.addWindowProduct<T>(this, params);
  }

  /**
   * 通过 request_id 获取留资组件信息。
   * @see https://developers.weixin.qq.com/doc/channels/api/channels/
   */
  getLeadsInfo<T = unknown>(params: Record<string, unknown> = {}): Promise<T> {
    return window.getLeadsInfo<T>(this, params);
  }

  /**
   * 获取视频号罗盘账号整体数据。
   * @see https://developers.weixin.qq.com/doc/channels/api/channels/
   */
  getCompassOverall<T = unknown>(params: Record<string, unknown> = {}): Promise<T> {
    return window.getCompassOverall<T>(this, params);
  }
}

/**
 * 创建视频号客户端实例。
 *
 * @param config 客户端配置（至少包含 appId 与 appSecret）。
 * @returns 已装配鉴权的 {@link ChClient}。
 *
 * @example
 * ```ts
 * import { createChClient } from '@wxstack/ch';
 * const ch = createChClient({ appId: 'wx...', appSecret: '...' });
 * const info = await ch.getFinderInfo();
 * // 逃生口：调用任意未封装端点
 * const data = await ch.request({ method: 'POST', url: '/channels/ec/xxx', body: {} });
 * ```
 */
export function createChClient(config: ChClientConfig): ChClient {
  return new ChClient(config);
}
