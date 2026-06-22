/**
 * @wxstack/op 配置与关键类型定义。
 *
 * 微信开放平台第三方平台的令牌派生链（核心难点）：
 *   component_verify_ticket（微信每 10 分钟推送，必须落库）
 *     → component_access_token（第三方平台级令牌）
 *       → pre_auth_code（预授权码）
 *         → 用户扫码授权
 *           → authorizer_access_token / authorizer_refresh_token（授权方令牌，refresh_token 必须落库）
 *             → 代公众号 / 小程序调用任意 OpenAPI
 */
import type {
  HttpMethod,
  KVStore,
  Logger,
  QueryValue,
  RequestBody,
  Transport,
} from '@wxstack/core';

/** 第三方平台客户端配置。 */
export interface ComponentClientConfig {
  /** 第三方平台 AppID（component_appid）。 */
  componentAppId: string;
  /** 第三方平台 AppSecret（component_appsecret）。 */
  componentAppSecret: string;
  /** 第三方平台消息校验 Token（用于授权事件/ticket 推送回调验签）。 */
  componentToken: string;
  /** 第三方平台 43 位 EncodingAESKey（用于授权事件/ticket 推送回调解密）。 */
  componentEncodingAESKey: string;
  /** 共享存储（默认内存）。生产多实例务必注入 Redis 等共享实现。 */
  store?: KVStore;
  /** 自定义传输层（默认 FetchTransport，基址 https://api.weixin.qq.com）。 */
  transport?: Transport;
  /** 日志器（默认 no-op）。 */
  logger?: Logger;
}

/** component_access_token 接口返回。 */
export interface ComponentTokenResult {
  component_access_token?: string;
  expires_in?: number;
  errcode?: number;
  errmsg?: string;
}

/** 创建预授权码返回。 */
export interface PreAuthCodeResult {
  pre_auth_code: string;
  expires_in: number;
}

/** 构建授权链接的参数。 */
export interface BuildAuthUrlParams {
  /** 预授权码（createPreAuthCode 获取）。 */
  pre_auth_code: string;
  /** 授权后回调地址（需做 URL 编码，内部会自动编码）。 */
  redirect_uri: string;
  /**
   * 授权类型：
   * - 1 仅展示公众号；
   * - 2 仅展示小程序；
   * - 3 同时展示公众号与小程序（默认）。
   * 与 biz_appid 互斥。
   */
  auth_type?: 1 | 2 | 3;
  /** 指定授权的公众号/小程序 AppID（与 auth_type 互斥）。 */
  biz_appid?: string;
}

/** 授权信息（query_auth / 授权事件中均会出现）。 */
export interface AuthorizationInfo {
  /** 授权方 AppID（公众号或小程序）。 */
  authorizer_appid: string;
  /** 授权方接口调用令牌。 */
  authorizer_access_token: string;
  /** 授权方令牌有效期（秒）。 */
  expires_in: number;
  /** 授权方刷新令牌（必须落库，长期有效）。 */
  authorizer_refresh_token: string;
  /** 授权给开发者的权限集列表。 */
  func_info?: Array<{ funcscope_category: { id: number } }>;
}

/** query_auth 返回。 */
export interface QueryAuthResult {
  authorization_info: AuthorizationInfo;
}

/** 刷新授权方令牌返回。 */
export interface AuthorizerTokenResult {
  authorizer_access_token: string;
  expires_in: number;
  authorizer_refresh_token: string;
}

/** 授权方账号信息返回。 */
export interface AuthorizerInfoResult {
  /** 授权方资料。 */
  authorizer_info?: Record<string, unknown>;
  /** 授权信息（含 func_info、refresh_token 等）。 */
  authorization_info?: Record<string, unknown>;
  [k: string]: unknown;
}

/** 获取授权方选项返回。 */
export interface AuthorizerOptionResult {
  authorizer_appid: string;
  option_name: string;
  option_value: string;
}

/** 代调用任意授权方接口的请求描述（逃生口）。 */
export interface CallAuthorizerOptions {
  /** HTTP 方法，默认 POST。 */
  method?: HttpMethod;
  /** 接口路径（如 /cgi-bin/menu/create、/wxa/get_qrcode）。 */
  path: string;
  /** 请求体（JSON / 二进制 / FormData 等）。 */
  body?: RequestBody;
  /** 附加查询参数（access_token 会自动注入，无需手填）。 */
  query?: Record<string, QueryValue>;
  /** 是否对 errcode!=0 抛 WxApiError，默认 true。 */
  throwOnApiError?: boolean;
  /** 期望响应类型，默认 auto。 */
  responseType?: 'auto' | 'json' | 'text' | 'arraybuffer' | 'stream';
  /** 自定义请求头。 */
  headers?: Record<string, string>;
}

/** 网站应用扫码登录配置。 */
export interface WebsiteLoginConfig {
  /** 开放平台网站应用 AppID。 */
  appId: string;
  /** 开放平台网站应用 AppSecret。 */
  appSecret: string;
  /** 自定义传输层（默认 FetchTransport）。 */
  transport?: Transport;
  /** 日志器（默认 no-op）。 */
  logger?: Logger;
}

/** 构建扫码登录二维码链接参数。 */
export interface BuildQrConnectParams {
  /** 授权后回调地址（内部自动 URL 编码）。 */
  redirect_uri: string;
  /** 应用授权作用域，网站应用固定 snsapi_login。 */
  scope?: string;
  /** 用于保持请求与回调状态、防 CSRF 的随机串。 */
  state?: string;
}

/** sns 网页授权令牌返回。 */
export interface SnsAccessTokenResult {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  openid: string;
  scope: string;
  unionid?: string;
  errcode?: number;
  errmsg?: string;
}

/** sns 用户信息返回。 */
export interface SnsUserInfoResult {
  openid: string;
  nickname: string;
  sex: number;
  province: string;
  city: string;
  country: string;
  headimgurl: string;
  privilege: string[];
  unionid?: string;
  errcode?: number;
  errmsg?: string;
}
