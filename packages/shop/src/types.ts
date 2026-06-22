/**
 * @wxstack/shop 配置与关键类型。
 *
 * 微信小店（原视频号小店）自 2024 年起打通公众号 / 小程序 / 视频号，
 * 服务端接口位于 api.weixin.qq.com，路径多在 /channels/ec/ 下，
 * 鉴权使用对应主体的标准 access_token（放在 query）。
 *
 * @see https://developers.weixin.qq.com/doc/store/shop/API.html
 */
import type { BaseClientConfig, TokenMode } from '@wxstack/core';

/**
 * 微信小店客户端配置。
 *
 * 继承基类配置（store/transport/logger/retry/domain 等），
 * 额外需要 appId / appSecret 用于换取 access_token。
 */
export interface ShopClientConfig extends BaseClientConfig {
  /** 主体 appId（公众号 / 小程序 / 视频号对应的 appid）。 */
  appId: string;
  /** 主体 appSecret。 */
  appSecret: string;
  /** access_token 模式（normal / stable），默认 normal。 */
  tokenMode?: TokenMode;
}

/**
 * 通用请求体类型别名。
 *
 * 小店接口仍在快速演进，字段未做强约束；
 * 大多数高层方法以 `Record<string, unknown>` 透传，字段以官方文档为准。
 */
export type ShopParams = Record<string, unknown>;

/** 微信公共返回结构（errcode/errmsg + 业务字段）。 */
export interface ShopResult extends Record<string, unknown> {
  errcode?: number;
  errmsg?: string;
}
