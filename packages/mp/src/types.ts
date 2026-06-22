/**
 * @wxstack/mp 配置与关键类型定义。
 *
 * 小程序服务端绝大多数业务接口都接受/返回任意 JSON，故除登录、手机号等
 * 强类型出参外，多数 body 采用 `Record<string, unknown>` 透传，避免与官方
 * 频繁变更的字段强耦合；需要精确类型时可在调用处自行断言。
 */
import type { DomainPreference, KVStore, Logger, RetryOptions, Transport } from '@wxstack/core';
import type { TokenMode } from '@wxstack/core';

/** 任意 JSON 对象（业务 body 透传用）。 */
export type JsonObject = Record<string, unknown>;

/** 创建小程序客户端的配置。 */
export interface MpClientConfig {
  /** 小程序 AppID。 */
  appId: string;
  /** 小程序 AppSecret。 */
  appSecret: string;
  /** 接入点偏好（默认 auto => api.weixin.qq.com）。 */
  domain?: DomainPreference;
  /** access_token 模式：normal（默认）/ stable（稳定版，适合多实例）。 */
  tokenMode?: TokenMode;
  /** 请求超时毫秒。 */
  timeoutMs?: number;
  /** 重试配置。 */
  retry?: RetryOptions;
  /** 共享存储（令牌缓存等），默认内存存储。 */
  store?: KVStore;
  /** 日志器（默认 no-op）。 */
  logger?: Logger;
  /** 自定义传输层（默认 FetchTransport）。 */
  transport?: Transport;
}

/** code2Session 返回结果。 */
export interface Code2SessionResult {
  /** 用户唯一标识。 */
  openid: string;
  /** 会话密钥（用于解密 encryptedData，切勿下发到前端）。 */
  session_key: string;
  /** 用户在开放平台的唯一标识符（绑定开放平台账号时返回）。 */
  unionid?: string;
  errcode?: number;
  errmsg?: string;
}

/** getPhoneNumber 返回的手机号信息。 */
export interface PhoneInfo {
  /** 用户绑定的手机号（国外手机号会有区号）。 */
  phoneNumber: string;
  /** 没有区号的手机号。 */
  purePhoneNumber: string;
  /** 区号。 */
  countryCode: string;
  /** 数据水印。 */
  watermark: { appid: string; timestamp: number };
}

/** getPhoneNumber 完整返回。 */
export interface GetPhoneNumberResult {
  phone_info: PhoneInfo;
}

/** 临时素材类型。 */
export type TempMediaType = 'image' | 'voice' | 'video' | 'thumb';
