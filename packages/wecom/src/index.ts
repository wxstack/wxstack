/**
 * @wxstack/wecom —— 企业微信（WeCom）服务端 SDK。
 *
 * 提供两种 API 风格：
 * - 高层语义方法：`client.user.get()`、`client.message.send()`、`client.externalContact.list()` 等；
 * - 逃生口：继承自基类的 `client.request()` / `client.requestRaw()`，可调用任意「尚未封装」的
 *   企业微信接口（自动带 access_token），覆盖 SDK 未跟进的新接口。
 *
 * @example
 * import { createWecomClient } from '@wxstack/wecom';
 * const wecom = createWecomClient({ corpid: 'ww...', corpsecret: 'xxx', agentid: 1000002 });
 * await wecom.message.send({ touser: 'zhangsan', msgtype: 'text', text: { content: 'hi' } });
 */

// 工厂 + 类
export { createWecomClient, WecomClient } from './client.js';

// OAuth / JS-SDK 纯函数工具
export { buildOAuthUrl, buildJsSdkSignature } from './oauth.js';

// 回调
export { createWecomWebhook, type WecomWebhookOptions } from './webhook.js';

// 配置与关键类型
export type {
  WecomClientConfig,
  WecomBaseResponse,
  GetTokenResponse,
  BuildOAuthUrlParams,
  AuthUserInfoResponse,
  JsSdkSignature,
  UserCreateParams,
  SimpleListParams,
  AddContactWayParams,
  SuiteTokenParams,
} from './types.js';

// action 模块的返回类型 / 入参类型
export type { SendMessageResponse } from './actions/message.js';
export type { MediaType, UploadMediaFile, UploadMediaResponse } from './actions/media.js';
export type { SuiteTokenResponse } from './actions/service.js';

// re-export 常用核心错误类与加解密类，方便使用方 instanceof 判断 / 自行处理回调
export { WxApiError, WXBizMsgCrypt } from '@wxstack/core';
