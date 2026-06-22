/**
 * 令牌管理器：微信全家桶第一大坑（设计文档 §4.2）。
 *
 * access_token 是应用级全局、有频次限制、约 7200s 过期。多实例部署时若各实例
 * 各刷各的会互相顶掉（「令牌漂移」）。本管理器解决：
 * 1. 可插拔 KVStore：默认内存，生产用 Redis/自定义共享同一份令牌；
 * 2. 单飞（singleflight）+ 分布式锁：同进程并发只触发一次刷新；多实例用锁避免惊群；
 * 3. 提前刷新：过期前若干秒主动刷新，避免临界点失败；
 * 4. 多令牌类型：用字符串 key 区分命名空间（access_token / component_access_token / jsapi_ticket 等）。
 */
import { WxTokenError } from './errors.js';
import { type Logger, noopLogger } from './logger.js';
import type { KVStore } from './store.js';

/** 令牌获取结果。 */
export interface TokenFetchResult {
  /** 令牌值。 */
  token: string;
  /** 有效期（秒）。 */
  expiresIn: number;
}

/** 令牌获取函数：给定命名空间 key，返回新令牌。 */
export type TokenFetcher = (key: string) => Promise<TokenFetchResult>;

/** 令牌管理器配置。 */
export interface TokenManagerOptions {
  /** 共享存储。 */
  store: KVStore;
  /** 真实拉取令牌的函数。 */
  fetcher: TokenFetcher;
  /** 日志器。 */
  logger?: Logger;
  /** 提前刷新秒数（在存储 TTL 中预留的安全余量），默认 300。 */
  earlyRefreshSec?: number;
  /** 分布式锁持有时长（秒），默认 10。 */
  lockTtlSec?: number;
  /** 等到他人刷新完成的最长等待时间（毫秒），默认 5000。 */
  lockWaitMs?: number;
}

const sleep = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

/** 令牌管理器。 */
export class TokenManager {
  private readonly store: KVStore;
  private readonly fetcher: TokenFetcher;
  private readonly logger: Logger;
  private readonly earlyRefreshSec: number;
  private readonly lockTtlSec: number;
  private readonly lockWaitMs: number;
  /** 同进程单飞表：相同 key 并发刷新只发一次请求。 */
  private readonly inflight = new Map<string, Promise<string>>();

  constructor(opts: TokenManagerOptions) {
    this.store = opts.store;
    this.fetcher = opts.fetcher;
    this.logger = opts.logger ?? noopLogger;
    this.earlyRefreshSec = opts.earlyRefreshSec ?? 300;
    this.lockTtlSec = opts.lockTtlSec ?? 10;
    this.lockWaitMs = opts.lockWaitMs ?? 5000;
  }

  /** 按需获取令牌：命中缓存直接返回，否则刷新。 */
  async getToken(key: string): Promise<string> {
    const cached = await this.store.get(key);
    if (cached) return cached;
    return this.refresh(key);
  }

  /** 强制刷新令牌（如命中令牌失效错误码时调用）。 */
  async refresh(key: string): Promise<string> {
    const existing = this.inflight.get(key);
    if (existing) return existing;

    const p = this.doRefresh(key).finally(() => {
      this.inflight.delete(key);
    });
    this.inflight.set(key, p);
    return p;
  }

  /** 使某个令牌失效（删除缓存）。 */
  async invalidate(key: string): Promise<void> {
    await this.store.del(key);
  }

  private async doRefresh(key: string): Promise<string> {
    const lockKey = `${key}:lock`;
    const canLock = typeof this.store.acquireLock === 'function';

    if (canLock) {
      const locked = await this.store.acquireLock!(lockKey, this.lockTtlSec);
      if (!locked) {
        // 未抢到锁：等待持锁者刷新完成后读取新值
        const waited = await this.waitForOther(key);
        if (waited) return waited;
        // 超时仍无值：兜底自行拉取（不持锁，宁可多刷一次也不阻塞业务）
        this.logger.warn('等待他人刷新令牌超时，降级为自行拉取', { key });
      }
    }

    try {
      const { token, expiresIn } = await this.fetcher(key);
      if (!token) throw new WxTokenError('令牌拉取返回为空', 'TOKEN_EMPTY', { key });
      const ttl = Math.max(60, expiresIn - this.earlyRefreshSec);
      await this.store.set(key, token, ttl);
      this.logger.debug('令牌已刷新', { key, expiresIn, ttl });
      return token;
    } finally {
      if (canLock && typeof this.store.releaseLock === 'function') {
        await this.store.releaseLock(lockKey).catch(() => undefined);
      }
    }
  }

  /** 轮询等待他人刷新完成。 */
  private async waitForOther(key: string): Promise<string | null> {
    const deadline = Date.now() + this.lockWaitMs;
    while (Date.now() < deadline) {
      await sleep(150);
      const v = await this.store.get(key);
      if (v) return v;
    }
    return null;
  }
}
