/**
 * @wxstack/ch 配置与关键类型定义。
 *
 * 视频号（微信小店/视频号助手）服务端能力以 appId + appSecret 取标准
 * access_token，调用 api.weixin.qq.com 上 /channels/ 等路径的接口。
 */
import type { BaseClientConfig, TokenMode } from '@wxstack/core';

/**
 * 视频号客户端配置。
 *
 * 在基类配置之上补充 appId/appSecret 与令牌模式；其余传输、存储、日志、
 * 重试等共性项均沿用 {@link BaseClientConfig}。
 */
export interface ChClientConfig extends BaseClientConfig {
  /** 公众号/小程序/视频号关联的 appId。 */
  appId: string;
  /** 对应的 appSecret。 */
  appSecret: string;
  /**
   * access_token 模式：
   * - normal：GET /cgi-bin/token（默认）；
   * - stable：POST /cgi-bin/stable_token，适合多实例部署。
   */
  tokenMode?: TokenMode;
}

/**
 * 微信标准 API 返回体的通用形状。
 *
 * errcode=0（或缺省）表示成功；非 0 时基类会抛出 WxApiError。
 * 各业务字段以官方文档为准，这里仅给出最常见的错误字段。
 */
export interface ChApiResult {
  /** 错误码，0 表示成功。 */
  errcode?: number;
  /** 错误信息。 */
  errmsg?: string;
  /** 其余业务字段。 */
  [key: string]: unknown;
}
