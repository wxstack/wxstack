/**
 * @wxstack/mg 配置与关键类型。
 *
 * 小游戏服务端与小程序服务端同源：均使用标准 access_token（appid + secret），
 * 令牌置于 query。配置项在基类 {@link BaseClientConfig} 之上补充 appId/appSecret 等。
 */
import type { BaseClientConfig, TokenMode } from '@wxstack/core';

/** 小游戏客户端配置。 */
export interface MgClientConfig extends BaseClientConfig {
  /** 小游戏 AppID。 */
  appId: string;
  /** 小游戏 AppSecret。 */
  appSecret: string;
  /** access_token 模式：normal（默认）或 stable（多实例稳妥）。 */
  tokenMode?: TokenMode;
  /**
   * 虚拟支付（米大师 Midas）AppKey。
   * 用于生成 Midas 接口要求的 `sig`（HMAC-SHA256）。不调用虚拟支付可不填。
   * @see https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment.html
   */
  midasAppKey?: string;
  /**
   * 是否默认走 Midas 沙箱环境（路径前缀 `/cgi-bin/midas/sandbox/*`）。
   * 也可在单次调用时通过 `sandbox` 入参覆盖。默认 false。
   */
  midasSandbox?: boolean;
  /** Midas 业务区域 zone_id，默认 '1'（一般为字符串数字）。 */
  midasZoneId?: string;
}

/** code2Session 返回结构。 */
export interface Code2SessionResult {
  /** 用户唯一标识。 */
  openid: string;
  /** 会话密钥（解密 encryptedData 用）。 */
  session_key: string;
  /** 用户在开放平台的唯一标识（绑定开放平台时返回）。 */
  unionid?: string;
  /** 错误码（成功为 0 或缺省）。 */
  errcode?: number;
  /** 错误信息。 */
  errmsg?: string;
}

/** 内容安全检测返回的基础结构。 */
export interface MsgSecCheckResult {
  errcode: number;
  errmsg: string;
  /** 综合检测结果（version:2 返回）。 */
  result?: { suggest: 'risky' | 'pass' | 'review'; label: number };
  /** 命中的详细标签列表（version:2 返回）。 */
  detail?: Array<{
    strategy?: string;
    errcode?: number;
    suggest?: 'risky' | 'pass' | 'review';
    label?: number;
    keyword?: string;
    prob?: number;
  }>;
  /** 唯一请求标识。 */
  trace_id?: string;
  [key: string]: unknown;
}

/** 异步媒体检测返回结构。 */
export interface MediaCheckAsyncResult {
  errcode: number;
  errmsg: string;
  /** 任务 id，可用于匹配异步回调结果。 */
  trace_id?: string;
  [key: string]: unknown;
}

/** Midas 接口通用返回结构（具体字段随接口而异）。 */
export interface MidasResult {
  errcode: number;
  errmsg: string;
  [key: string]: unknown;
}
