/**
 * 企业微信（WeCom）SDK 的配置与关键类型。
 *
 * 仅声明跨模块复用的「稳定结构」；大量随官方接口扩展的字段不强行建模，
 * 一律以 `Record<string, unknown>` 透传，并由逃生口 `client.request()` 兜底。
 */
import type { BaseClientConfig } from '@wxstack/core';

/** 企业微信客户端配置。 */
export interface WecomClientConfig extends Omit<BaseClientConfig, 'baseURL'> {
  /** 企业 ID（corpid）。 */
  corpid: string;
  /**
   * 应用凭证密钥（corpsecret）。
   * 不同 secret 对应不同应用/通讯录权限，令牌按 secret 区分命名空间。
   */
  corpsecret: string;
  /** 应用 ID（agentid）：发应用消息、OAuth、agent_config 时需要。 */
  agentid?: number;
}

/** 通用接口返回体（含全局返回码）。 */
export interface WecomBaseResponse {
  errcode: number;
  errmsg: string;
  [key: string]: unknown;
}

/** 拉取 access_token 的返回体。 */
export interface GetTokenResponse extends WecomBaseResponse {
  access_token?: string;
  expires_in?: number;
}

/** OAuth 静默授权 / 扫码授权所需参数。 */
export interface BuildOAuthUrlParams {
  /** 授权后重定向的回调链接（无需 urlencode，内部会编码）。 */
  redirect_uri: string;
  /** 应用授权作用域：snsapi_base（静默）/ snsapi_privateinfo（敏感信息）。默认 snsapi_base。 */
  scope?: 'snsapi_base' | 'snsapi_privateinfo';
  /** 重定向后带回的 state，最多 128 字节。 */
  state?: string;
  /** 应用 agentid（scope 为 snsapi_privateinfo 时建议传）。 */
  agentid?: number;
}

/** getuserinfo 返回体（成员或外部用户）。 */
export interface AuthUserInfoResponse extends WecomBaseResponse {
  /** 企业成员 UserId（成员授权时返回）。 */
  userid?: string;
  /** 外部用户 openid（非企业成员授权时返回）。 */
  openid?: string;
  /** 敏感信息票据，配合 getuserdetail 使用。 */
  user_ticket?: string;
  /** 外部企业 corpid（外部成员授权时返回）。 */
  external_userid?: string;
}

/** JS-SDK 签名结果。 */
export interface JsSdkSignature {
  /** 随机串。 */
  noncestr: string;
  /** 时间戳（秒）。 */
  timestamp: number;
  /** SHA1 签名。 */
  signature: string;
}

/** 通讯录成员创建/更新入参（仅列常用字段，其余透传）。 */
export interface UserCreateParams {
  userid: string;
  name: string;
  department?: number[];
  [key: string]: unknown;
}

/** simplelist 入参。 */
export interface SimpleListParams {
  /** 部门 id。 */
  department_id: number;
  /** 是否递归获取子部门下成员：1 递归 / 0 不递归，默认 0。 */
  fetch_child?: 0 | 1;
}

/** 添加联系方式（「联系我」）入参（字段较多，透传为主）。 */
export interface AddContactWayParams {
  /** 联系方式类型：1 单人，2 多人。 */
  type: 1 | 2;
  /** 场景：1 在小程序中联系，2 通过二维码联系。 */
  scene: 1 | 2;
  [key: string]: unknown;
}

/** 服务商 / 第三方应用相关入参。 */
export interface SuiteTokenParams {
  suite_id: string;
  suite_secret: string;
  /** 企业微信后台推送的 suite_ticket。 */
  suite_ticket: string;
  [key: string]: unknown;
}
