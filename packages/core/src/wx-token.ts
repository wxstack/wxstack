/**
 * 标准 access_token（appid + secret）令牌工厂。
 *
 * 同时支持普通版（GET /cgi-bin/token）与稳定版（POST /cgi-bin/stable_token）。
 * 稳定版适合多实例部署：force_refresh=false 时不会立即使旧 token 失效。
 *
 * @see https://developers.weixin.qq.com/doc/service/api/base/getAccessToken.html
 */
import type { TokenProvider } from './client.js';
import { WxTokenError } from './errors.js';
import { type Logger, noopLogger } from './logger.js';
import type { KVStore } from './store.js';
import { TokenManager } from './token.js';
import type { Transport } from './types.js';

/** access_token 令牌模式。 */
export type TokenMode = 'normal' | 'stable';

/** access_token 工厂配置。 */
export interface AccessTokenOptions {
  appId: string;
  appSecret: string;
  /** 令牌模式，默认 normal。 */
  mode?: TokenMode;
  /** 共享存储。 */
  store: KVStore;
  /** 传输层（用于拉取令牌）。 */
  transport: Transport;
  logger?: Logger;
  /** 命名空间前缀，区分不同业务（如 oa/mp）。默认 wx。 */
  keyPrefix?: string;
}

interface TokenResp {
  access_token?: string;
  expires_in?: number;
  errcode?: number;
  errmsg?: string;
}

/**
 * 创建标准 access_token 管理器，返回管理器、缓存 key 与可注入基类的 TokenProvider。
 */
export function createAccessTokenManager(opts: AccessTokenOptions): {
  manager: TokenManager;
  key: string;
  provider: TokenProvider;
} {
  const mode: TokenMode = opts.mode ?? 'normal';
  const prefix = opts.keyPrefix ?? 'wx';
  const key = `${prefix}:${mode}:access_token:${opts.appId}`;
  const logger = opts.logger ?? noopLogger;

  const manager = new TokenManager({
    store: opts.store,
    logger,
    fetcher: async () => {
      let resp: TokenResp;
      if (mode === 'stable') {
        const r = await opts.transport.request<TokenResp>({
          method: 'POST',
          url: '/cgi-bin/stable_token',
          body: {
            grant_type: 'client_credential',
            appid: opts.appId,
            secret: opts.appSecret,
            force_refresh: false,
          },
        });
        resp = r.data;
      } else {
        const r = await opts.transport.request<TokenResp>({
          method: 'GET',
          url: '/cgi-bin/token',
          query: { grant_type: 'client_credential', appid: opts.appId, secret: opts.appSecret },
        });
        resp = r.data;
      }
      if (!resp.access_token) {
        throw new WxTokenError(
          resp.errmsg ?? '获取 access_token 失败',
          resp.errcode ?? 'TOKEN_ERROR',
          resp,
        );
      }
      return { token: resp.access_token, expiresIn: resp.expires_in ?? 7200 };
    },
  });

  const provider: TokenProvider = {
    get: () => manager.getToken(key),
    refresh: () => manager.refresh(key),
  };

  return { manager, key, provider };
}
