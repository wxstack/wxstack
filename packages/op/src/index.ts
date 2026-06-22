/**
 * @wxstack/op —— 微信开放平台 SDK（第三方平台 + 网站应用扫码登录）。
 *
 * 两条彼此独立的能力线：
 * 1. 第三方平台（ComponentClient）：托管完整令牌派生链
 *    component_verify_ticket → component_access_token → pre_auth_code → 用户授权
 *    → authorizer_access_token / refresh_token → 代公众号/小程序调用任意 OpenAPI。
 *    并提供授权事件/ticket 推送回调内核（createComponentWebhook，自动落库 ticket）。
 * 2. 网站应用扫码登录（WebsiteLoginClient）：开放平台 OAuth2，扫码换取用户身份。
 *
 * 双 API 设计：高层语义方法 + 逃生口。第三方平台代调用的逃生口是
 * `client.callAuthorizer(authorizerAppid, { path, method, body })`，可调用任意
 * 未被高层方法封装的代公众号/小程序接口；component 级逃生口是 `client.callComponent(path, body)`。
 */

// 客户端与工厂
export { ComponentClient, createComponentClient } from './client.js';
export { WebsiteLoginClient, createWebsiteLogin } from './website.js';

// 回调内核
export {
  createComponentWebhook,
  type ComponentEvent,
  type ComponentWebhookOptions,
  type ComponentWebhookResult,
  type RawComponentCallback,
} from './webhook.js';

// 小程序代开发 / 代码管理动作（纯函数 + 命名空间工厂）
export {
  commit,
  getQrcode,
  getCategory,
  submitAudit,
  getAuditStatus,
  release,
  modifyDomain,
  setWebViewDomain,
  undoCodeAudit,
  revertCodeRelease,
  createMiniProgramApi,
  type MiniProgramApi,
  type BasicResult,
  type CommitParams,
  type SubmitAuditParams,
  type ModifyDomainParams,
  type SetWebViewDomainParams,
} from './actions/miniprogram.js';

// 类型
export type {
  ComponentClientConfig,
  ComponentTokenResult,
  PreAuthCodeResult,
  BuildAuthUrlParams,
  AuthorizationInfo,
  QueryAuthResult,
  AuthorizerTokenResult,
  AuthorizerInfoResult,
  AuthorizerOptionResult,
  CallAuthorizerOptions,
  WebsiteLoginConfig,
  BuildQrConnectParams,
  SnsAccessTokenResult,
  SnsUserInfoResult,
} from './types.js';

// 从内核 re-export 常用错误与回调加解密类，免去使用方再装 @wxstack/core
export { WxApiError, WXBizMsgCrypt } from '@wxstack/core';

// 全量接口表（覆盖官方文档抓取到的全部端点）。
export { endpoints as opEndpoints, createGeneratedApi } from './generated/endpoints.js';
export type {
  EndpointId,
  EndpointMeta,
  GeneratedApi,
  GeneratedCallExtra,
} from './generated/endpoints.js';
