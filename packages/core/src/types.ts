/**
 * HTTP 传输抽象。内核不写死 fetch/axios，而是定义接口、提供默认实现、允许注入，
 * 以兼容 edge / 老 Node / Serverless 等运行时（设计文档 §3.5、§4.1）。
 */

/** HTTP 方法。 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/** 查询参数取值类型。 */
export type QueryValue = string | number | boolean | undefined | null;

/** 请求体可接受的类型：JSON 对象 / 字符串 / 二进制 / 表单。 */
export type RequestBody =
  | undefined
  | string
  | Buffer
  | Uint8Array
  | ArrayBuffer
  | FormData
  | Record<string, unknown>
  | unknown[];

/** 期望的响应解析方式。 */
export type ResponseType = 'auto' | 'json' | 'text' | 'arraybuffer' | 'stream';

/** 统一请求描述。 */
export interface HttpRequest {
  method: HttpMethod;
  /** 绝对 URL，或相对路径（配合 baseURL）。 */
  url: string;
  headers?: Record<string, string>;
  query?: Record<string, QueryValue>;
  body?: RequestBody;
  /** 取消信号。 */
  signal?: AbortSignal;
  /** 单次请求超时（毫秒）。 */
  timeoutMs?: number;
  /** 期望响应类型，默认 auto（按 content-type 推断）。 */
  responseType?: ResponseType;
}

/** 统一响应描述。 */
export interface HttpResponse<T = unknown> {
  status: number;
  headers: Record<string, string>;
  /** 解析后的响应数据。 */
  data: T;
  /**
   * 原始响应字节。支付验签、消息验签都要对「原文」做哈希，
   * 不能用反序列化后的对象，因此必须暴露原始字节。
   */
  raw: Buffer;
}

/** 传输层接口。 */
export interface Transport {
  request<T = unknown>(req: HttpRequest): Promise<HttpResponse<T>>;
}

/** 多域名（接入点）选择。 */
export type DomainPreference =
  | 'auto'
  | 'disaster'
  | 'shanghai'
  | 'sh'
  | 'shenzhen'
  | 'sz'
  | 'hongkong'
  | 'hk';

/** 重试配置。 */
export interface RetryOptions {
  /** 最大重试次数（不含首次）。默认 2。 */
  retries?: number;
  /** 基础退避毫秒，配合指数退避 + 抖动。默认 300。 */
  baseDelayMs?: number;
  /** 退避上限毫秒。默认 5000。 */
  maxDelayMs?: number;
}
