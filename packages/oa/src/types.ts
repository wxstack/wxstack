/**
 * @wxstack/oa 配置与关键类型定义。
 *
 * 公众号（订阅号/服务号）服务端 SDK 的对外类型，向后兼容旧版 JS 实现的选项命名。
 */
import type { DomainPreference, KVStore, Logger, RetryOptions, Transport } from '@wxstack/core';

/** access_token 令牌模式：普通版（GET /cgi-bin/token）或稳定版（POST /cgi-bin/stable_token）。 */
export type TokenMode = 'normal' | 'stable';

/**
 * 重试配置（向后兼容旧版 `{ retries, delayMs }` 写法）。
 *
 * - `retries`：最大重试次数（不含首次）。
 * - `delayMs`：旧版固定退避毫秒；映射为核心的 `baseDelayMs`（兼容字段）。
 * - `baseDelayMs` / `maxDelayMs`：核心退避参数（指数退避 + 抖动）。
 */
export interface OaRetryOptions extends RetryOptions {
  /** 旧版固定退避毫秒（兼容字段，等价于 baseDelayMs）。 */
  delayMs?: number;
}

/**
 * OaClient 配置项。
 *
 * @property appId 公众号 AppID（必填）。
 * @property appSecret 公众号 AppSecret（必填）。
 * @property domain 接入点偏好，默认 `auto`（api.weixin.qq.com）。
 * @property timeoutMs 请求超时毫秒，默认 15000。
 * @property retry 重试配置（兼容旧版 `{ retries, delayMs }`）。
 * @property tokenMode access_token 模式，默认 `normal`。
 * @property store 共享存储（令牌缓存等），默认内存存储。
 * @property logger 日志器，默认 no-op。
 * @property transport 自定义传输层，默认核心 FetchTransport。
 * @property throwOnApiError errcode!=0 时是否抛 WxApiError，默认 true。
 */
export interface OaClientConfig {
  /** 公众号 AppID（必填）。 */
  appId: string;
  /** 公众号 AppSecret（必填）。 */
  appSecret: string;
  /** 接入点偏好，默认 'auto'。 */
  domain?: DomainPreference;
  /** 请求超时毫秒，默认 15000。 */
  timeoutMs?: number;
  /** 重试配置（兼容旧版 `{ retries, delayMs }`）。 */
  retry?: OaRetryOptions;
  /** access_token 模式，默认 'normal'。 */
  tokenMode?: TokenMode;
  /** 共享存储（默认内存）。 */
  store?: KVStore;
  /** 日志器（默认 no-op）。 */
  logger?: Logger;
  /** 自定义传输层（默认核心 FetchTransport）。 */
  transport?: Transport;
  /** errcode!=0 时是否抛 WxApiError（默认 true）。 */
  throwOnApiError?: boolean;
}

/** 网页授权语言，影响昵称等多语言字段。 */
export type WxLang = 'zh_CN' | 'zh_TW' | 'en';

/**
 * 上传文件入参：可传本地路径（filePath）或文件字节（file）。
 *
 * - 浏览器/DOM 类型不可用，`file` 使用 Node 全局 Buffer/Uint8Array。
 * - 不再支持旧版的 Node 可读流（请先读入 Buffer 后传入）。
 */
export interface UploadInput {
  /** 本地文件路径（Node 环境）。 */
  filePath?: string;
  /** 文件字节内容。 */
  file?: Buffer | Uint8Array;
  /** 文件名（用于 multipart），默认从路径推断或取兜底名。 */
  filename?: string;
  /** MIME 类型（可选）。 */
  contentType?: string;
}

/** 二进制下载返回体类型选项。 */
export type BinaryResponseType = 'arraybuffer' | 'stream';
