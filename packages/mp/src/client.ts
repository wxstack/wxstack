/**
 * MpClient：微信小程序服务端客户端。
 *
 * 继承自 `@wxstack/core` 的 {@link BaseClient}，统一获得：
 * - 自动鉴权（access_token 放在 query，命中失效错误码自动刷新重放一次）；
 * - 自动重试 / 多接入点故障转移；
 * - 错误解包（errcode!=0 抛 WxApiError）。
 *
 * 两种 API 风格：
 * - 高层语义方法（如 {@link MpClient.code2Session}）：带类型、带文档；
 * - 逃生口 {@link MpClient.request} / {@link MpClient.requestRaw}：可调用任意尚未封装的端点，
 *   自动带令牌。物流助手、直播等仅封装了少量核心端点，其余一律走逃生口。
 */
import {
  BaseClient,
  type CallOptions,
  type DecryptedMpData,
  type HttpResponse,
  type QueryValue,
  type RequestBody,
  createAccessTokenManager,
  decryptMpData,
} from '@wxstack/core';

import * as analysis from './actions/analysis.js';
import * as broadcast from './actions/broadcast.js';
import * as customer from './actions/customer.js';
import * as express from './actions/express.js';
import * as login from './actions/login.js';
import * as qrcode from './actions/qrcode.js';
import * as security from './actions/security.js';
import * as shipping from './actions/shipping.js';
import * as soter from './actions/soter.js';
import * as subscribe from './actions/subscribe.js';
import * as urllink from './actions/urllink.js';

import { type GeneratedApi, createGeneratedApi } from './generated/endpoints.js';

import type {
  Code2SessionResult,
  GetPhoneNumberResult,
  JsonObject,
  MpClientConfig,
  TempMediaType,
} from './types.js';

export class MpClient extends BaseClient {
  /** 小程序 AppID。 */
  readonly appId: string;
  /** 小程序 AppSecret。 */
  readonly appSecret: string;
  /**
   * 全量接口表：覆盖官方文档抓取到的全部小程序服务端端点（自动鉴权薄封装）。
   * 用法：`client.api.<operationId>(body?, query?)`。端点清单见 docs/api-specs/mp.json。
   */
  readonly api: GeneratedApi;

  constructor(config: MpClientConfig) {
    super({
      domain: config.domain,
      timeoutMs: config.timeoutMs,
      retry: config.retry,
      store: config.store,
      logger: config.logger,
      transport: config.transport,
    });
    this.appId = config.appId;
    this.appSecret = config.appSecret;

    // 装配标准 access_token（放 query，keyPrefix='mp'）。
    const { provider } = createAccessTokenManager({
      appId: config.appId,
      appSecret: config.appSecret,
      mode: config.tokenMode,
      store: this.store,
      transport: this.transport,
      logger: this.logger,
      keyPrefix: 'mp',
    });
    this.tokenProvider = provider;
    this.tokenPlacement = 'query';
    this.tokenQueryKey = 'access_token';
    this.api = createGeneratedApi(this);
  }

  // ───────────────────────── 内部：开放给 actions 的 GET/POST 包装 ─────────────────────────
  // 基类的 get/post 为 protected；actions 是外部纯函数，需经由公开包装调用。

  /** 公开 GET 包装（actions 内部使用，也可直接当便捷逃生口）。 */
  override get<T = unknown>(
    url: string,
    query?: Record<string, QueryValue>,
    extra?: Partial<CallOptions>,
  ): Promise<T> {
    return this.request<T>({ method: 'GET', url, query, ...extra });
  }

  /** 公开 POST 包装（actions 内部使用，也可直接当便捷逃生口）。 */
  override post<T = unknown>(
    url: string,
    body?: RequestBody,
    extra?: Partial<CallOptions>,
  ): Promise<T> {
    return this.request<T>({ method: 'POST', url, body, ...extra });
  }

  // ───────────────────────── 登录 / 用户信息 ─────────────────────────

  /**
   * 登录凭证校验：用 jsCode 换取 openid / session_key / unionid。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html
   */
  code2Session(jsCode: string): Promise<Code2SessionResult> {
    return login.code2Session(this, jsCode);
  }

  /**
   * 解密小程序 encryptedData（用户信息 / 手机号等），并校验水印 appid。
   * @param sessionKey code2Session 得到的 session_key。
   * @param encryptedData 前端返回的 encryptedData。
   * @param iv 前端返回的 iv。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-encrypt/
   */
  decryptData(sessionKey: string, encryptedData: string, iv: string): DecryptedMpData {
    return decryptMpData(sessionKey, encryptedData, iv, this.appId);
  }

  /**
   * 获取手机号：用前端 getPhoneNumber 返回的动态 code 换取手机号信息。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/phone-number/getPhoneNumber.html
   */
  getPhoneNumber(params: { code: string } & JsonObject): Promise<GetPhoneNumberResult> {
    return login.getPhoneNumber(this, params);
  }

  /**
   * 获取用户安全等级（风控）。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/sec-check/getUserRiskRank.html
   */
  getUserRiskRank(body: JsonObject): Promise<JsonObject> {
    return login.getUserRiskRank(this, body);
  }

  // ───────────────────────── 订阅消息 ─────────────────────────

  /**
   * 发送订阅消息。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/subscribe-message/sendMessage.html
   */
  sendSubscribeMessage(body: JsonObject): Promise<JsonObject> {
    return subscribe.sendSubscribeMessage(this, body);
  }

  /** 订阅消息模板管理子命名空间。 */
  readonly subscribe = {
    /**
     * 选用模板（从公共库添加到个人库），返回 priTmplId。
     * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/subscribe-message/addMessageTemplate.html
     */
    addTemplate: (params: { tid: string; kidList: number[]; sceneDesc?: string }) =>
      subscribe.addTemplate(this, params),
    /**
     * 删除个人模板。
     * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/subscribe-message/deleteMessageTemplate.html
     */
    delTemplate: (params: { priTmplId: string }) => subscribe.delTemplate(this, params),
    /**
     * 获取个人模板列表。
     * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/subscribe-message/getMessageTemplateList.html
     */
    getTemplateList: () => subscribe.getTemplateList(this),
    /**
     * 获取小程序账号的类目。
     * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/subscribe-message/getCategory.html
     */
    getCategory: () => subscribe.getCategory(this),
    /**
     * 获取模板库标题下的关键词。
     * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/subscribe-message/getPubTemplateKeyWordsById.html
     */
    getPubTemplateKeyWordsById: (params: { tid: string }) =>
      subscribe.getPubTemplateKeyWordsById(this, params),
    /**
     * 获取类目下的公共模板标题列表。
     * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/subscribe-message/getPubTemplateTitleList.html
     */
    getPubTemplateTitleList: (params: { ids: string; start: number; limit: number }) =>
      subscribe.getPubTemplateTitleList(this, params),
  };

  // ───────────────────────── 小程序码 / 二维码（二进制） ─────────────────────────

  /**
   * 获取小程序码（数量有限）。返回图片字节（Buffer）；失败抛 WxApiError。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/getQRCode.html
   */
  getQRCode(body: JsonObject): Promise<Buffer> {
    return qrcode.getQRCode(this, body);
  }

  /**
   * 获取不限数量的小程序码。返回图片字节（Buffer）；失败抛 WxApiError。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/getUnlimitedQRCode.html
   */
  getUnlimited(body: JsonObject): Promise<Buffer> {
    return qrcode.getUnlimited(this, body);
  }

  /**
   * 获取小程序二维码（数量有限）。返回图片字节（Buffer）；失败抛 WxApiError。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/createQRCode.html
   */
  createQRCode(body: JsonObject): Promise<Buffer> {
    return qrcode.createQRCode(this, body);
  }

  // ───────────────────────── URL Scheme / Link / 短链 ─────────────────────────

  /**
   * 生成跳转小程序的 URL Scheme，返回 `{ openlink }`。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/url-scheme/generateScheme.html
   */
  generateScheme(body: JsonObject): Promise<{ openlink: string } & JsonObject> {
    return urllink.generateScheme(this, body);
  }

  /**
   * 查询 URL Scheme。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/url-scheme/queryScheme.html
   */
  queryScheme(body: JsonObject): Promise<JsonObject> {
    return urllink.queryScheme(this, body);
  }

  /**
   * 生成 URL Link，返回 `{ url_link }`。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/url-link/generateUrlLink.html
   */
  generateUrlLink(body: JsonObject): Promise<{ url_link: string } & JsonObject> {
    return urllink.generateUrlLink(this, body);
  }

  /**
   * 查询 URL Link。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/url-link/queryUrlLink.html
   */
  queryUrlLink(body: JsonObject): Promise<JsonObject> {
    return urllink.queryUrlLink(this, body);
  }

  /**
   * 生成 Short Link，返回 `{ link }`。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/short-link/generateShortLink.html
   */
  generateShortLink(body: JsonObject): Promise<{ link: string } & JsonObject> {
    return urllink.generateShortLink(this, body);
  }

  // ───────────────────────── 内容安全 ─────────────────────────

  /**
   * 文本内容安全检测（v2）。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/sec-check/msgSecCheck.html
   */
  msgSecCheck(body: JsonObject): Promise<JsonObject> {
    return security.msgSecCheck(this, body);
  }

  /**
   * 音视频 / 图片内容异步安全检测，返回 `{ trace_id }`。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/sec-check/mediaCheckAsync.html
   */
  mediaCheckAsync(body: JsonObject): Promise<{ trace_id: string } & JsonObject> {
    return security.mediaCheckAsync(this, body);
  }

  // ───────────────────────── 客服消息 / 临时素材 ─────────────────────────

  /**
   * 发送客服消息。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/customer-message/sendCustomerMessage.html
   */
  sendCustomMessage(body: JsonObject): Promise<JsonObject> {
    return customer.sendCustomMessage(this, body);
  }

  /**
   * 下发客服「正在输入」状态。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/customer-message/setTyping.html
   */
  setTyping(body: JsonObject): Promise<JsonObject> {
    return customer.setTyping(this, body);
  }

  /**
   * 上传临时素材（multipart）。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/customer-message/uploadTempMedia.html
   */
  uploadTempMedia(
    type: TempMediaType,
    file: Buffer | Uint8Array | ArrayBuffer | Blob,
    filename?: string,
  ): Promise<{ type: string; media_id: string; created_at: number } & JsonObject> {
    return customer.uploadTempMedia(this, type, file, filename);
  }

  /**
   * 获取临时素材（二进制下载，返回 Buffer）。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/customer-message/getTempMedia.html
   */
  getTempMedia(mediaId: string): Promise<Buffer> {
    return customer.getTempMedia(this, mediaId);
  }

  // ───────────────────────── 数据分析 ─────────────────────────

  /**
   * 概况趋势（日）。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-trend/getDailySummary.html
   */
  getDailySummary(body: analysis.DateRange): Promise<JsonObject> {
    return analysis.getDailySummary(this, body);
  }

  /**
   * 访问趋势（日）。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-trend/getDailyVisitTrend.html
   */
  getDailyVisitTrend(body: analysis.DateRange): Promise<JsonObject> {
    return analysis.getDailyVisitTrend(this, body);
  }

  /**
   * 访问趋势（周）。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-trend/getWeeklyVisitTrend.html
   */
  getWeeklyVisitTrend(body: analysis.DateRange): Promise<JsonObject> {
    return analysis.getWeeklyVisitTrend(this, body);
  }

  /**
   * 访问趋势（月）。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-trend/getMonthlyVisitTrend.html
   */
  getMonthlyVisitTrend(body: analysis.DateRange): Promise<JsonObject> {
    return analysis.getMonthlyVisitTrend(this, body);
  }

  /**
   * 访问分布。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-trend/getVisitDistribution.html
   */
  getVisitDistribution(body: analysis.DateRange): Promise<JsonObject> {
    return analysis.getVisitDistribution(this, body);
  }

  /**
   * 留存（日）。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-retain/getDailyRetain.html
   */
  getDailyRetain(body: analysis.DateRange): Promise<JsonObject> {
    return analysis.getDailyRetain(this, body);
  }

  /**
   * 留存（周）。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-retain/getWeeklyRetain.html
   */
  getWeeklyRetain(body: analysis.DateRange): Promise<JsonObject> {
    return analysis.getWeeklyRetain(this, body);
  }

  /**
   * 留存（月）。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-retain/getMonthlyRetain.html
   */
  getMonthlyRetain(body: analysis.DateRange): Promise<JsonObject> {
    return analysis.getMonthlyRetain(this, body);
  }

  /**
   * 访问页面数据。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/visit-page/getVisitPage.html
   */
  getVisitPage(body: analysis.DateRange): Promise<JsonObject> {
    return analysis.getVisitPage(this, body);
  }

  /**
   * 用户画像分布。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/data-analysis/user-portrait/getUserPortrait.html
   */
  getUserPortrait(body: analysis.DateRange): Promise<JsonObject> {
    return analysis.getUserPortrait(this, body);
  }

  // ───────────────────────── 发货信息管理 ─────────────────────────

  /**
   * 发货信息录入。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/order-shipping/order-shipping-info/uploadShippingInfo.html
   */
  uploadShippingInfo(body: JsonObject): Promise<JsonObject> {
    return shipping.uploadShippingInfo(this, body);
  }

  /**
   * 合单发货信息录入。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/order-shipping/order-shipping-info/uploadCombinedShippingInfo.html
   */
  uploadCombinedShippingInfo(body: JsonObject): Promise<JsonObject> {
    return shipping.uploadCombinedShippingInfo(this, body);
  }

  /**
   * 查询订单发货状态。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/order-shipping/order-shipping-info/getOrder.html
   */
  getOrder(body: JsonObject): Promise<JsonObject> {
    return shipping.getOrder(this, body);
  }

  /**
   * 查询是否已开通发货信息管理服务。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/order-shipping/order-shipping-info/isTradeManaged.html
   */
  isTradeManaged(body: JsonObject): Promise<JsonObject> {
    return shipping.isTradeManaged(this, body);
  }

  /**
   * 确认收货提醒。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/order-shipping/order-shipping-info/notifyConfirmReceive.html
   */
  notifyConfirmReceive(body: JsonObject): Promise<JsonObject> {
    return shipping.notifyConfirmReceive(this, body);
  }

  /**
   * 消息跳转路径设置。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/order-shipping/order-shipping-info/setMsgJumpPath.html
   */
  setMsgJumpPath(body: JsonObject): Promise<JsonObject> {
    return shipping.setMsgJumpPath(this, body);
  }

  // ───────────────────────── SOTER 生物认证 ─────────────────────────

  /**
   * SOTER 生物认证秘钥签名验证。
   * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/soter/verifySignature.html
   */
  verifySoterSignature(body: JsonObject): Promise<JsonObject> {
    return soter.verifySignature(this, body);
  }

  // ───────────────────────── 物流助手（express，少量封装） ─────────────────────────

  /** 物流助手子命名空间（仅核心端点，其余请用逃生口 client.request）。 */
  readonly express = {
    /** @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/logistics/express-by-business/addOrder.html */
    addOrder: (body: JsonObject) => express.addExpressOrder(this, body),
    /** @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/logistics/express-by-business/cancelOrder.html */
    cancelOrder: (body: JsonObject) => express.cancelExpressOrder(this, body),
    /** @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/logistics/express-by-business/getOrder.html */
    getOrder: (body: JsonObject) => express.getExpressOrder(this, body),
    /** @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/logistics/express-by-business/getPath.html */
    getPath: (body: JsonObject) => express.getExpressPath(this, body),
    /** @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/logistics/express-by-business/getAllDelivery.html */
    getAllDelivery: () => express.getAllDelivery(this),
  };

  // ───────────────────────── 直播（broadcast，少量封装） ─────────────────────────

  /** 直播子命名空间（仅核心端点，其余请用逃生口 client.request）。 */
  readonly broadcast = {
    /** @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/live-broadcast/getLiveInfo.html */
    getLiveInfo: (body: { start: number; limit: number } & JsonObject) =>
      broadcast.getLiveInfo(this, body),
    /** @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/live-broadcast/createRoom.html */
    createRoom: (body: JsonObject) => broadcast.createLiveRoom(this, body),
    /** @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/live-broadcast/getPushUrl.html */
    getPushUrl: (query: { roomId: number } & Record<string, QueryValue>) =>
      broadcast.getLivePushUrl(this, query),
    /** @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/live-broadcast/goods/addGoods.html */
    addGoods: (body: JsonObject) => broadcast.addLiveGoods(this, body),
  };
}

/**
 * 创建小程序服务端客户端。
 * @param config 至少需要 `appId` 与 `appSecret`。
 */
export function createMpClient(config: MpClientConfig): MpClient {
  return new MpClient(config);
}

export type { HttpResponse, CallOptions };
