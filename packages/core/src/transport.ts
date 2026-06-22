/**
 * 基于全局 fetch 的默认传输实现（Node 18+ 内置）。
 *
 * 内置能力（设计文档 §4.1，从原 OA 包上移并泛化）：
 * - 指数退避 + 抖动重试（幂等方法默认重试，POST 默认不重试，可配）；
 * - 多域名故障转移（微信 API 有上海/深圳/香港等接入点）；
 * - 暴露 raw 原始响应字节（验签需对原文哈希）；
 * - 超时控制（AbortSignal）。
 */
import { WxHttpError } from './errors.js';
import type {
  DomainPreference,
  HttpMethod,
  HttpRequest,
  HttpResponse,
  QueryValue,
  RetryOptions,
  Transport,
} from './types.js';

/** 微信通用 API 多接入点域名表。 */
export const WX_API_DOMAINS: Record<DomainPreference, string> = {
  auto: 'https://api.weixin.qq.com',
  disaster: 'https://api2.weixin.qq.com',
  shanghai: 'https://sh.api.weixin.qq.com',
  sh: 'https://sh.api.weixin.qq.com',
  shenzhen: 'https://sz.api.weixin.qq.com',
  sz: 'https://sz.api.weixin.qq.com',
  hongkong: 'https://hk.api.weixin.qq.com',
  hk: 'https://hk.api.weixin.qq.com',
};

/** 主域名故障时的备用故障转移顺序。 */
const FAILOVER_HOSTS = [
  'https://api.weixin.qq.com',
  'https://api2.weixin.qq.com',
  'https://sh.api.weixin.qq.com',
  'https://sz.api.weixin.qq.com',
  'https://hk.api.weixin.qq.com',
];

/** 幂等方法集合（默认可重试）。 */
const IDEMPOTENT: ReadonlySet<HttpMethod> = new Set(['GET', 'PUT', 'DELETE']);

/** FetchTransport 配置。 */
export interface FetchTransportOptions {
  /** 基础 URL（绝对 URL 请求时忽略）。 */
  baseURL?: string;
  /** 默认超时毫秒。默认 15000。 */
  timeoutMs?: number;
  /** 默认请求头。 */
  defaultHeaders?: Record<string, string>;
  /** 重试配置。 */
  retry?: RetryOptions;
  /** 是否对 POST 也启用重试（默认 false，避免重复下单等副作用）。 */
  retryOnPost?: boolean;
  /** 是否启用主域名失败后的多接入点故障转移（默认对 weixin.qq.com 域启用）。 */
  failover?: boolean;
  /** 注入自定义 fetch（边缘运行时 / undici / 测试桩）。默认全局 fetch。 */
  fetchImpl?: typeof fetch;
}

const sleep = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

/** 序列化查询参数（跳过 undefined/null）。 */
export function buildQuery(query?: Record<string, QueryValue>): string {
  if (!query) return '';
  const sp = new URLSearchParams();
  for (const [k, v] of Object.entries(query)) {
    if (v === undefined || v === null) continue;
    sp.append(k, String(v));
  }
  const s = sp.toString();
  return s ? `?${s}` : '';
}

/** 基于 fetch 的传输实现。 */
export class FetchTransport implements Transport {
  private readonly baseURL?: string;
  private readonly timeoutMs: number;
  private readonly defaultHeaders: Record<string, string>;
  private readonly retry: Required<RetryOptions>;
  private readonly retryOnPost: boolean;
  private readonly failover: boolean;
  private readonly fetchImpl: typeof fetch;

  constructor(opts: FetchTransportOptions = {}) {
    this.baseURL = opts.baseURL;
    this.timeoutMs = opts.timeoutMs ?? 15000;
    this.defaultHeaders = opts.defaultHeaders ?? {};
    this.retry = {
      retries: opts.retry?.retries ?? 2,
      baseDelayMs: opts.retry?.baseDelayMs ?? 300,
      maxDelayMs: opts.retry?.maxDelayMs ?? 5000,
    };
    this.retryOnPost = opts.retryOnPost ?? false;
    this.failover = opts.failover ?? true;
    const f = opts.fetchImpl ?? globalThis.fetch;
    if (typeof f !== 'function') {
      throw new Error('当前运行时不存在全局 fetch，请升级到 Node 18+ 或注入 fetchImpl');
    }
    this.fetchImpl = f;
  }

  /** 拼接最终 URL，并返回是否为可故障转移的微信域。 */
  private resolveUrl(url: string): { isAbsolute: boolean; path: string; origin: string } {
    if (/^https?:\/\//i.test(url)) {
      const u = new URL(url);
      return { isAbsolute: true, path: u.pathname + u.search, origin: u.origin };
    }
    const base = this.baseURL ?? WX_API_DOMAINS.auto;
    const u = new URL(base);
    return { isAbsolute: false, path: url, origin: u.origin };
  }

  private hostsToTry(origin: string): string[] {
    if (!this.failover || !/weixin\.qq\.com$/.test(new URL(origin).hostname)) {
      return [origin];
    }
    // 主域名优先，其余作为故障转移
    return [origin, ...FAILOVER_HOSTS.filter((h) => h !== origin)];
  }

  async request<T = unknown>(req: HttpRequest): Promise<HttpResponse<T>> {
    const { isAbsolute, path, origin } = this.resolveUrl(req.url);
    const hosts = isAbsolute ? [origin] : this.hostsToTry(origin);
    const query = buildQuery(req.query);
    const maxAttempts = this.retry.retries + 1;
    const allowRetry = this.retryOnPost || IDEMPOTENT.has(req.method);

    let lastErr: unknown;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      // 每次重试在可用接入点之间轮换
      const host = hosts[attempt % hosts.length] ?? hosts[0]!;
      const fullUrl = `${host}${path}${path.includes('?') ? '' : query}`;
      try {
        return await this.doFetch<T>(fullUrl, req);
      } catch (err) {
        lastErr = err;
        const retryable = err instanceof WxHttpError ? err.isRetryable : true;
        if (attempt === maxAttempts - 1 || !allowRetry || !retryable) break;
        const backoff = Math.min(this.retry.maxDelayMs, this.retry.baseDelayMs * 2 ** attempt);
        const jitter = Math.floor(backoff * 0.2 * Math.random());
        await sleep(backoff + jitter);
      }
    }
    throw lastErr;
  }

  private async doFetch<T>(fullUrl: string, req: HttpRequest): Promise<HttpResponse<T>> {
    const controller = new AbortController();
    const timeoutMs = req.timeoutMs ?? this.timeoutMs;
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    if (req.signal) {
      if (req.signal.aborted) controller.abort();
      else req.signal.addEventListener('abort', () => controller.abort(), { once: true });
    }

    const headers: Record<string, string> = { ...this.defaultHeaders, ...req.headers };
    const { body, contentType } = encodeBody(req.body);
    if (contentType && !hasHeader(headers, 'content-type')) {
      headers['Content-Type'] = contentType;
    }

    try {
      const resp = await this.fetchImpl(fullUrl, {
        method: req.method,
        headers,
        body: body as RequestInit['body'],
        signal: controller.signal,
      });
      const rawArrayBuffer = await resp.arrayBuffer();
      const raw = Buffer.from(rawArrayBuffer);
      const respHeaders: Record<string, string> = {};
      resp.headers.forEach((v, k) => {
        respHeaders[k] = v;
      });

      if (resp.status >= 400) {
        throw new WxHttpError(`HTTP ${resp.status} ${resp.statusText}`, resp.status, {
          url: fullUrl,
          body: raw.toString('utf8').slice(0, 2048),
        });
      }

      const data = parseBody<T>(raw, respHeaders['content-type'], req.responseType);
      return { status: resp.status, headers: respHeaders, data, raw };
    } catch (err) {
      if (err instanceof WxHttpError) throw err;
      const e = err as { name?: string; message?: string };
      const msg =
        e?.name === 'AbortError' ? `请求超时（${timeoutMs}ms）` : (e?.message ?? '网络错误');
      throw new WxHttpError(msg, 0, { url: fullUrl, cause: err });
    } finally {
      clearTimeout(timer);
    }
  }
}

function hasHeader(headers: Record<string, string>, name: string): boolean {
  return Object.keys(headers).some((k) => k.toLowerCase() === name.toLowerCase());
}

/** 将请求体编码为 fetch 可接受的形式，并推断 Content-Type。 */
export function encodeBody(body: unknown): { body: unknown; contentType?: string } {
  if (body === undefined || body === null) return { body: undefined };
  if (typeof body === 'string') return { body };
  if (body instanceof FormData) return { body }; // fetch 自动设置 multipart 边界
  if (body instanceof ArrayBuffer || ArrayBuffer.isView(body)) return { body };
  if (Buffer.isBuffer(body)) return { body };
  // 其余按 JSON 处理
  return { body: JSON.stringify(body), contentType: 'application/json' };
}

/** 解析响应体。 */
export function parseBody<T>(raw: Buffer, contentType?: string, responseType?: string): T {
  if (responseType === 'arraybuffer' || responseType === 'stream') {
    return raw as unknown as T;
  }
  if (responseType === 'text') return raw.toString('utf8') as unknown as T;
  const ct = (contentType ?? '').toLowerCase();
  const looksJson = ct.includes('json') || ct.includes('text/plain');
  if (
    responseType === 'json' ||
    (responseType === undefined && looksJson) ||
    responseType === 'auto'
  ) {
    const text = raw.toString('utf8');
    if (!text) return undefined as unknown as T;
    if (responseType === 'json' || looksJson) {
      try {
        return JSON.parse(text) as T;
      } catch {
        return text as unknown as T;
      }
    }
    // auto 且非 JSON content-type：尝试 JSON，失败则原样返回字节
    if (
      ct.startsWith('image/') ||
      ct.startsWith('audio/') ||
      ct.startsWith('video/') ||
      ct.includes('octet-stream')
    ) {
      return raw as unknown as T;
    }
    try {
      return JSON.parse(text) as T;
    } catch {
      return text as unknown as T;
    }
  }
  return raw as unknown as T;
}
