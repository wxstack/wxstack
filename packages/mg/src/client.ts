/**
 * 小游戏服务端客户端：装配标准 access_token 鉴权（query），封装高层语义方法。
 *
 * 与小程序服务端同源：使用 createAccessTokenManager（keyPrefix:'mg'）拉取标准
 * access_token，并置于请求 query。除高层方法外，继承自基类的逃生口
 * client.request() / client.requestRaw() 可调用任意尚未封装的端点。
 */
import {
  BaseClient,
  type DecryptedMpData,
  WxConfigError,
  createAccessTokenManager,
  decryptMpData,
} from '@wxstack/core';

import { code2Session } from './actions/login.js';
import { type SubscribeMessageResult, sendSubscribeMessage } from './actions/message.js';
import {
  cancelPay as midasCancelPay,
  getBalance as midasGetBalance,
  pay as midasPay,
  present as midasPresent,
} from './actions/midas.js';
import { mediaCheckAsync, msgSecCheck } from './actions/security.js';
import { type GeneratedApi, createGeneratedApi } from './generated/endpoints.js';
import { type SignParams, buildMidasMpSig, buildMidasSig } from './midas-sign.js';
import type {
  Code2SessionResult,
  MediaCheckAsyncResult,
  MgClientConfig,
  MidasResult,
  MsgSecCheckResult,
} from './types.js';

/** Midas 高层方法的入参：业务字段 + 可选签名注入 + 可选沙箱开关。 */
export interface MidasCallParams {
  /** 用户 openid。 */
  openid: string;
  /** 业务区域 id，默认取配置 midasZoneId（再默认 '1'）。 */
  zoneId?: string;
  /** 用户 session_key，用于自动计算 mp_sig（不注入 mp_sig 时必填）。 */
  sessionKey?: string;
  /** 自定义时间戳（秒），默认当前时间。 */
  ts?: number;
  /** 直接注入 sig（提供则不再用 AppKey 计算）。 */
  sig?: string;
  /** 直接注入 mp_sig（提供则不再用 session_key 计算）。 */
  mpSig?: string;
  /** 本次是否走沙箱（覆盖配置默认）。 */
  sandbox?: boolean;
  /** 其余业务字段（如 amount、bill_no、quantity 等）。 */
  [key: string]: unknown;
}

/** 小游戏服务端客户端。 */
export class MgClient extends BaseClient {
  /**
   * 全量接口表：小游戏服务端可用的 api.weixin.qq.com OpenAPI 子集
   * （虚拟支付/内容安全/登录/订阅消息/数据分析等，与小程序共用主机）。
   */
  readonly api: GeneratedApi;
  private readonly appId: string;
  private readonly appSecret: string;
  private readonly midasAppKey?: string;
  private readonly midasSandbox: boolean;
  private readonly midasZoneId: string;

  constructor(config: MgClientConfig) {
    super(config);
    if (!config.appId || !config.appSecret) {
      throw new WxConfigError('MgClient 需要 appId 与 appSecret');
    }
    this.appId = config.appId;
    this.appSecret = config.appSecret;
    this.midasAppKey = config.midasAppKey;
    this.midasSandbox = config.midasSandbox ?? false;
    this.midasZoneId = config.midasZoneId ?? '1';

    // 装配标准 access_token：keyPrefix 'mg'，置于 query。
    const { provider } = createAccessTokenManager({
      appId: this.appId,
      appSecret: this.appSecret,
      mode: config.tokenMode,
      store: this.store,
      transport: this.transport,
      logger: this.logger,
      keyPrefix: 'mg',
    });
    this.tokenProvider = provider;
    this.tokenPlacement = 'query';
    this.tokenQueryKey = 'access_token';
    this.api = createGeneratedApi(this);
  }

  // ───────────────────────────── 登录 ─────────────────────────────

  /**
   * 用 wx.login 的 code 换取登录态（openid / session_key / unionid）。
   * @param jsCode 客户端临时登录凭证。
   * @see https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/login/code2Session.html
   */
  async code2Session(jsCode: string): Promise<Code2SessionResult> {
    return code2Session(this, this.appId, this.appSecret, jsCode);
  }

  /**
   * 解密客户端返回的 encryptedData（用户信息 / 手机号等）。
   * 内部委托 core 的 {@link decryptMpData}（AES-128-CBC）。
   * @param sessionKey code2Session 得到的 session_key。
   * @param encryptedData 客户端返回的 encryptedData（Base64）。
   * @param iv 客户端返回的 iv（Base64）。
   * @returns 解密后的明文对象（含 watermark），自动校验水印 appid。
   * @see https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/data/getUserInfo.html
   */
  decryptData(sessionKey: string, encryptedData: string, iv: string): DecryptedMpData {
    return decryptMpData(sessionKey, encryptedData, iv, this.appId);
  }

  // ─────────────────────────── 内容安全 ───────────────────────────

  /**
   * 文本内容安全检测（version 2）。
   * @param body 检测请求体（content / scene / openid 等）。
   * @see https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/sec-check/msgSecCheck.html
   */
  async msgSecCheck(body: Record<string, unknown>): Promise<MsgSecCheckResult> {
    return msgSecCheck(this, body);
  }

  /**
   * 媒体（图片 / 音频）异步内容安全检测。
   * @param body 检测请求体（media_url / media_type / openid 等）。
   * @see https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/sec-check/mediaCheckAsync.html
   */
  async mediaCheckAsync(body: Record<string, unknown>): Promise<MediaCheckAsyncResult> {
    return mediaCheckAsync(this, body);
  }

  // ─────────────────────────── 订阅消息 ───────────────────────────

  /**
   * 发送订阅消息。
   * @param body 请求体（touser / template_id / data 等）。
   * @see https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/subscribe-message/sendSubscribeMessage.html
   */
  async sendSubscribeMessage(body: Record<string, unknown>): Promise<SubscribeMessageResult> {
    return sendSubscribeMessage(this, body);
  }

  // ───────────────────────── 虚拟支付（Midas）─────────────────────────

  /** 命名空间式入口，便于按 client.midas.pay(...) 调用。 */
  readonly midas = {
    /**
     * 查询用户代币余额。
     * @see https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment.html
     */
    getBalance: (params: MidasCallParams): Promise<MidasResult> =>
      midasGetBalance(this, this.buildMidasBody(params), this.resolveSandbox(params)),
    /**
     * 扣减用户代币（消费 / 下单）。
     * @see https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment.html
     */
    pay: (params: MidasCallParams): Promise<MidasResult> =>
      midasPay(this, this.buildMidasBody(params), this.resolveSandbox(params)),
    /**
     * 撤销扣款。
     * @see https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment.html
     */
    cancelPay: (params: MidasCallParams): Promise<MidasResult> =>
      midasCancelPay(this, this.buildMidasBody(params), this.resolveSandbox(params)),
    /**
     * 赠送代币。
     * @see https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment.html
     */
    present: (params: MidasCallParams): Promise<MidasResult> =>
      midasPresent(this, this.buildMidasBody(params), this.resolveSandbox(params)),
  };

  /** 解析单次调用是否走沙箱（入参优先于配置）。 */
  private resolveSandbox(params: MidasCallParams): boolean {
    return params.sandbox ?? this.midasSandbox;
  }

  /**
   * 组装 Midas 请求体并补全 sig / mp_sig。
   *
   * 签名策略：
   * - 若 params.sig 已提供则直接使用；否则用 midasAppKey 对「业务参数 + access_token」算 HMAC-SHA256。
   *   但本方法在装配阶段拿不到 access_token（由基类在发请求时注入 query），因此默认仅对业务参数签名。
   *   如官方要求把 access_token 纳入签名，请改用逃生口自行计算后注入 sig/mp_sig。
   * - 若 params.mpSig 已提供则直接使用；否则用 sessionKey 对「业务参数 + sig」算 HMAC-SHA256。
   *
   * 该方法不臆断官方未公开的字段细节：能算就算，算不了（缺 AppKey / sessionKey）则留空，
   * 由调用方注入或改用逃生口兜底。
   */
  private buildMidasBody(params: MidasCallParams): Record<string, unknown> {
    const { openid, zoneId, sessionKey, ts, sig, mpSig, sandbox, ...rest } = params;
    const zone = zoneId ?? this.midasZoneId;
    const timestamp = ts ?? Math.floor(Date.now() / 1000);

    // 参与签名的业务参数（不含 sig/mp_sig 本身）。
    const signParams: SignParams = {
      openid,
      zone_id: zone,
      ts: timestamp,
    };
    for (const [k, v] of Object.entries(rest)) {
      if (typeof v === 'string' || typeof v === 'number') signParams[k] = v;
    }

    let finalSig = sig;
    if (finalSig === undefined && this.midasAppKey) {
      finalSig = buildMidasSig(signParams, this.midasAppKey);
    }

    let finalMpSig = mpSig;
    if (finalMpSig === undefined && sessionKey) {
      const mpSource: SignParams = { ...signParams };
      if (finalSig !== undefined) mpSource.sig = finalSig;
      finalMpSig = buildMidasMpSig(mpSource, sessionKey);
    }

    const body: Record<string, unknown> = {
      ...rest,
      openid,
      zone_id: zone,
      ts: timestamp,
    };
    if (finalSig !== undefined) body.sig = finalSig;
    if (finalMpSig !== undefined) body.mp_sig = finalMpSig;
    return body;
  }
}

/**
 * 创建小游戏服务端客户端。
 * @param config 客户端配置（appId/appSecret 必填）。
 */
export function createMgClient(config: MgClientConfig): MgClient {
  return new MgClient(config);
}
