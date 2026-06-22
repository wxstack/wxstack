/**
 * 业务客户端基类：统一封装「自动鉴权 + 自动重试 + 错误解包」。
 *
 * 提供两种 API 风格（设计文档 §4.7、§6）：
 * - 高层语义方法：由各业务包实现；
 * - 低层逃生口 `request()` / `requestRaw()`：自动带令牌、自动签名，覆盖「SDK 尚未封装的新接口」。
 *   这是「全功能」在工程上唯一可持续的兑现方式。
 */
import { TOKEN_INVALID_ERRCODES, buildApiError, isApiErrorBody } from './errors.js';
import { type Logger, noopLogger } from './logger.js';
import { type KVStore, MemoryStore } from './store.js';
import { FetchTransport, WX_API_DOMAINS } from './transport.js';
import type {
  DomainPreference,
  HttpMethod,
  HttpRequest,
  HttpResponse,
  QueryValue,
  RequestBody,
  ResponseType,
  RetryOptions,
  Transport,
} from './types.js';

/** 令牌提供者：交给基类用于自动鉴权与失效重刷。 */
export interface TokenProvider {
  /** 获取当前令牌（按需刷新）。 */
  get(): Promise<string>;
  /** 强制刷新令牌。 */
  refresh(): Promise<string>;
}

/** 令牌附加位置。 */
export type TokenPlacement = 'query' | 'header' | 'none';

/** 单次调用选项。 */
export interface CallOptions {
  method?: HttpMethod;
  /** 相对路径或绝对 URL。 */
  url: string;
  query?: Record<string, QueryValue>;
  body?: RequestBody;
  headers?: Record<string, string>;
  signal?: AbortSignal;
  timeoutMs?: number;
  responseType?: ResponseType;
  /** 是否附加令牌（默认 true）。 */
  auth?: boolean;
  /** 覆盖默认的 errcode!=0 抛错行为。 */
  throwOnApiError?: boolean;
}

/** 基类配置，所有业务客户端共享。 */
export interface BaseClientConfig {
  /** 基础 URL（默认按 domain 推断）。 */
  baseURL?: string;
  /** 接入点偏好。 */
  domain?: DomainPreference;
  /** 请求超时毫秒。 */
  timeoutMs?: number;
  /** 重试配置。 */
  retry?: RetryOptions;
  /** 是否对 POST 重试（默认 false）。 */
  retryOnPost?: boolean;
  /** 共享存储（默认内存）。 */
  store?: KVStore;
  /** 日志器（默认 no-op）。 */
  logger?: Logger;
  /** 自定义传输层（默认 FetchTransport）。 */
  transport?: Transport;
  /** errcode!=0 时是否抛 WxApiError（默认 true）。设为 false 可拿原始返回体。 */
  throwOnApiError?: boolean;
}

/** 业务客户端基类。 */
export abstract class BaseClient {
  protected readonly transport: Transport;
  protected readonly store: KVStore;
  protected readonly logger: Logger;
  protected readonly throwOnApiError: boolean;
  /** 令牌提供者（子类设置）。 */
  protected tokenProvider?: TokenProvider;
  /** 令牌附加位置（子类设置）。 */
  protected tokenPlacement: TokenPlacement = 'query';
  /** query 模式下的令牌字段名。 */
  protected tokenQueryKey = 'access_token';

  constructor(config: BaseClientConfig = {}) {
    this.store = config.store ?? new MemoryStore();
    this.logger = config.logger ?? noopLogger;
    this.throwOnApiError = config.throwOnApiError ?? true;
    const baseURL = config.baseURL ?? WX_API_DOMAINS[config.domain ?? 'auto'];
    this.transport =
      config.transport ??
      new FetchTransport({
        baseURL,
        timeoutMs: config.timeoutMs,
        retry: config.retry,
        retryOnPost: config.retryOnPost,
      });
  }

  /**
   * 低层逃生口（返回完整 HttpResponse，含 raw 字节）。
   * 适合下载二进制、需要原始响应头/字节的场景。
   */
  async requestRaw<T = unknown>(opts: CallOptions): Promise<HttpResponse<T>> {
    return this.execute<T>(opts, false);
  }

  /**
   * 低层逃生口（自动解包，errcode!=0 抛错）。
   * 适合绝大多数 JSON 接口；未被高层方法封装的接口也可直接用它调用。
   */
  async request<T = unknown>(opts: CallOptions): Promise<T> {
    const resp = await this.execute<T>(opts, true);
    return resp.data;
  }

  /** GET 便捷方法。 */
  protected get<T = unknown>(
    url: string,
    query?: Record<string, QueryValue>,
    extra?: Partial<CallOptions>,
  ): Promise<T> {
    return this.request<T>({ method: 'GET', url, query, ...extra });
  }

  /** POST 便捷方法。 */
  protected post<T = unknown>(
    url: string,
    body?: RequestBody,
    extra?: Partial<CallOptions>,
  ): Promise<T> {
    return this.request<T>({ method: 'POST', url, body, ...extra });
  }

  private async execute<T>(opts: CallOptions, unwrapErrors: boolean): Promise<HttpResponse<T>> {
    const throwOnApiError = opts.throwOnApiError ?? this.throwOnApiError;
    const attempt = async (forceRefresh: boolean): Promise<HttpResponse<T>> => {
      const headers: Record<string, string> = { ...opts.headers };
      const query: Record<string, QueryValue> = { ...opts.query };

      if (opts.auth !== false && this.tokenProvider && this.tokenPlacement !== 'none') {
        const token = forceRefresh
          ? await this.tokenProvider.refresh()
          : await this.tokenProvider.get();
        if (this.tokenPlacement === 'query') query[this.tokenQueryKey] = token;
        else headers.Authorization = `Bearer ${token}`;
      }

      const req: HttpRequest = {
        method: opts.method ?? 'GET',
        url: opts.url,
        query,
        body: opts.body,
        headers,
        signal: opts.signal,
        timeoutMs: opts.timeoutMs,
        responseType: opts.responseType,
      };
      return this.transport.request<T>(req);
    };

    let resp = await attempt(false);
    let body = resp.data as unknown;

    // 命中令牌失效错误码 → 强制刷新并重放一次
    if (
      unwrapErrors &&
      opts.auth !== false &&
      this.tokenProvider &&
      isApiErrorBody(body) &&
      TOKEN_INVALID_ERRCODES.has(body.errcode)
    ) {
      this.logger.warn('命中令牌失效错误码，自动刷新并重试', { errcode: body.errcode });
      resp = await attempt(true);
      body = resp.data;
    }

    if (throwOnApiError && isApiErrorBody(body)) {
      throw buildApiError(body);
    }
    return resp;
  }
}
