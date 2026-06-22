/**
 * 第三方平台客户端：组合 FetchTransport + TokenManager，串起整条令牌派生链。
 *
 * 与多数业务包不同，第三方平台的令牌不是标准 access_token，而是
 * component_access_token（依赖落库的 component_verify_ticket）与每个授权方各自的
 * authorizer_access_token（依赖落库的 authorizer_refresh_token）。因此本类不继承
 * BaseClient，而直接组合内核能力，手工管理这条派生链。
 *
 * 设计要点：
 * - verify_ticket：微信每 10 分钟通过授权事件回调推送，必须落库（长 TTL），
 *   否则 component_access_token 无法刷新，整条链断裂。
 * - component_access_token：用 TokenManager 缓存（含单飞 + 分布式锁 + 提前刷新）。
 * - authorizer_access_token：按授权方 appid 各自用 TokenManager 缓存，
 *   刷新时需要落库的 refresh_token。
 *
 * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Third_party_platform_appid.html
 */
import {
  FetchTransport,
  type HttpMethod,
  type HttpResponse,
  type KVStore,
  type Logger,
  MemoryStore,
  type QueryValue,
  type RequestBody,
  TOKEN_INVALID_ERRCODES,
  TokenManager,
  type Transport,
  WX_API_DOMAINS,
  WxConfigError,
  WxTokenError,
  buildApiError,
  isApiErrorBody,
  noopLogger,
} from '@wxstack/core';
import { type MiniProgramApi, createMiniProgramApi } from './actions/miniprogram.js';
import { type GeneratedApi, createGeneratedApi } from './generated/endpoints.js';
import type {
  AuthorizationInfo,
  AuthorizerInfoResult,
  AuthorizerOptionResult,
  AuthorizerTokenResult,
  BuildAuthUrlParams,
  CallAuthorizerOptions,
  ComponentClientConfig,
  ComponentTokenResult,
  PreAuthCodeResult,
  QueryAuthResult,
} from './types.js';

/** verify_ticket 落库 key 模板。 */
const ticketKey = (componentAppId: string): string =>
  `op:component_verify_ticket:${componentAppId}`;
/** authorizer refresh_token 落库 key 模板。 */
const refreshKey = (componentAppId: string, authorizerAppId: string): string =>
  `op:authorizer_refresh_token:${componentAppId}:${authorizerAppId}`;
/** authorizer_access_token 缓存 key 模板。 */
const authorizerTokenKey = (componentAppId: string, authorizerAppId: string): string =>
  `op:authorizer_access_token:${componentAppId}:${authorizerAppId}`;
/** component_access_token 缓存 key 模板。 */
const componentTokenKey = (componentAppId: string): string =>
  `op:component_access_token:${componentAppId}`;

/** verify_ticket 落库默认 TTL（秒）：远大于推送周期，留足缓冲。 */
const TICKET_TTL_SEC = 30 * 24 * 3600;
/** refresh_token 落库默认 TTL（秒）：长期有效，留长 TTL。 */
const REFRESH_TTL_SEC = 365 * 24 * 3600;

/** 移动端绑定授权页基址。 */
const MOBILE_BIND_URL = 'https://open.weixin.qq.com/wxaopen/safe/bindcomponent';
/** PC 端扫码授权页基址。 */
const PC_LOGIN_URL = 'https://mp.weixin.qq.com/cgi-bin/componentloginpage';

/**
 * 第三方平台客户端。
 *
 * 典型用法见包 README：先在授权事件回调里 `setVerifyTicket` 落库，再依次
 * `createPreAuthCode` → `buildAuthUrl` → 用户授权 → `queryAuth` → `callAuthorizer`。
 */
export class ComponentClient {
  /** 第三方平台 AppID。 */
  readonly componentAppId: string;
  private readonly componentAppSecret: string;
  /** 第三方平台消息校验 Token（回调用）。 */
  readonly componentToken: string;
  /** 第三方平台 EncodingAESKey（回调用）。 */
  readonly componentEncodingAESKey: string;
  /** 共享存储（可在回调内核中复用以落库 ticket）。 */
  readonly store: KVStore;
  /** 传输层。 */
  readonly transport: Transport;
  /** 日志器。 */
  readonly logger: Logger;
  /** 小程序代开发 / 代码管理命名空间（commit/submitAudit/release 等）。 */
  readonly miniprogram: MiniProgramApi;
  /**
   * component 级全量接口表：覆盖官方文档抓取到的开放平台端点（自动带 component_access_token）。
   * 代公众号/小程序调用请改用 {@link ComponentClient.authorizerApi}（按授权方令牌）。
   */
  readonly api: GeneratedApi;

  /** component_access_token 管理器。 */
  private readonly componentTokenManager: TokenManager;
  /** 按授权方 appid 缓存的 authorizer_access_token 管理器。 */
  private readonly authorizerTokenManagers = new Map<string, TokenManager>();

  constructor(config: ComponentClientConfig) {
    if (!config.componentAppId) throw new WxConfigError('缺少 componentAppId');
    if (!config.componentAppSecret) throw new WxConfigError('缺少 componentAppSecret');
    if (!config.componentToken) throw new WxConfigError('缺少 componentToken');
    if (!config.componentEncodingAESKey) throw new WxConfigError('缺少 componentEncodingAESKey');

    this.componentAppId = config.componentAppId;
    this.componentAppSecret = config.componentAppSecret;
    this.componentToken = config.componentToken;
    this.componentEncodingAESKey = config.componentEncodingAESKey;
    this.store = config.store ?? new MemoryStore();
    this.logger = config.logger ?? noopLogger;
    this.transport = config.transport ?? new FetchTransport({ baseURL: WX_API_DOMAINS.auto });

    this.componentTokenManager = new TokenManager({
      store: this.store,
      logger: this.logger,
      fetcher: async () => {
        const ticket = await this.getVerifyTicket();
        if (!ticket) {
          throw new WxTokenError(
            'component_verify_ticket 不存在：请确认授权事件回调已配置并已落库 ticket（微信每 10 分钟推送一次）',
            'TICKET_MISSING',
          );
        }
        const resp = await this.transport.request<ComponentTokenResult>({
          method: 'POST',
          url: '/cgi-bin/component/api_component_token',
          body: {
            component_appid: this.componentAppId,
            component_appsecret: this.componentAppSecret,
            component_verify_ticket: ticket,
          },
        });
        const data = resp.data;
        if (!data.component_access_token) {
          throw new WxTokenError(
            data.errmsg ?? '获取 component_access_token 失败',
            data.errcode ?? 'COMPONENT_TOKEN_ERROR',
            data,
          );
        }
        return { token: data.component_access_token, expiresIn: data.expires_in ?? 7200 };
      },
    });

    this.miniprogram = createMiniProgramApi(this);
    // component 级全量接口：经 callComponent 适配（自动带 component_access_token）。
    this.api = createGeneratedApi({
      request: (o) => this.callComponent(o.url, o.body, o.method, o.query),
    });
  }

  /**
   * 返回「代某授权方调用」的全量接口表（自动带该授权方 authorizer_access_token）。
   * @param authorizerAppId 授权方 appid。
   */
  authorizerApi(authorizerAppId: string): GeneratedApi {
    return createGeneratedApi({
      request: (o) =>
        this.callAuthorizer(authorizerAppId, {
          method: o.method,
          path: o.url,
          body: o.body,
          query: o.query,
          headers: o.headers,
          responseType: o.responseType,
        }),
    });
  }

  // ──────────────────────────── verify_ticket 落库 ────────────────────────────

  /**
   * 落库 component_verify_ticket（授权事件回调收到推送后调用）。
   * @param ticket 微信推送的 ComponentVerifyTicket。
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/api/component_verify_ticket.html
   */
  async setVerifyTicket(ticket: string): Promise<void> {
    await this.store.set(ticketKey(this.componentAppId), ticket, TICKET_TTL_SEC);
    this.logger.debug('component_verify_ticket 已落库', { componentAppId: this.componentAppId });
  }

  /**
   * 读取已落库的 component_verify_ticket。
   * @returns ticket 字符串，未落库时为 null。
   */
  async getVerifyTicket(): Promise<string | null> {
    return this.store.get(ticketKey(this.componentAppId));
  }

  // ──────────────────────────── component 级令牌 ────────────────────────────

  /**
   * 获取 component_access_token（按需刷新）。
   * 所有 component 级接口都在 query 带此令牌。
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/api/component_access_token.html
   */
  async getComponentAccessToken(): Promise<string> {
    return this.componentTokenManager.getToken(componentTokenKey(this.componentAppId));
  }

  /** 强制刷新 component_access_token。 */
  async refreshComponentAccessToken(): Promise<string> {
    return this.componentTokenManager.refresh(componentTokenKey(this.componentAppId));
  }

  /**
   * 调用 component 级接口（自动在 query 带 component_access_token、自动解包、失效重放一次）。
   * 这是 component 级接口的统一逃生口，可调任意未被高层方法封装的 component 接口。
   * @param path 接口路径（如 /cgi-bin/component/api_create_preauthcode）。
   * @param body 请求体。
   * @param method HTTP 方法，默认 POST。
   */
  async callComponent<T = unknown>(
    path: string,
    body?: RequestBody,
    method: HttpMethod = 'POST',
    extraQuery?: Record<string, QueryValue>,
  ): Promise<T> {
    const run = async (token: string): Promise<HttpResponse<T>> =>
      this.transport.request<T>({
        method,
        url: path,
        query: { component_access_token: token, ...extraQuery },
        body,
      });

    let token = await this.getComponentAccessToken();
    let resp = await run(token);
    if (isApiErrorBody(resp.data) && TOKEN_INVALID_ERRCODES.has(resp.data.errcode)) {
      this.logger.warn('component_access_token 失效，自动刷新并重试', {
        errcode: resp.data.errcode,
      });
      token = await this.refreshComponentAccessToken();
      resp = await run(token);
    }
    if (isApiErrorBody(resp.data)) throw buildApiError(resp.data);
    return resp.data;
  }

  // ──────────────────────────── 预授权 / 授权流程 ────────────────────────────

  /**
   * 创建预授权码（pre_auth_code），有效期约 10 分钟，用于拼装授权链接。
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/api/pre_auth_code.html
   */
  async createPreAuthCode(): Promise<PreAuthCodeResult> {
    return this.callComponent<PreAuthCodeResult>('/cgi-bin/component/api_create_preauthcode', {
      component_appid: this.componentAppId,
    });
  }

  /**
   * 构建授权链接，返回 PC 扫码页与移动端绑定页两种地址。
   * @param params 预授权码、回调地址与授权范围。
   * @returns {{ pc: string; mobile: string }} 两种入口。
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Before_Develop/Authorization_Process_Technical_Description.html
   */
  buildAuthUrl(params: BuildAuthUrlParams): { pc: string; mobile: string } {
    if (!params.pre_auth_code) throw new WxConfigError('缺少 pre_auth_code');
    if (!params.redirect_uri) throw new WxConfigError('缺少 redirect_uri');
    const redirect = encodeURIComponent(params.redirect_uri);

    const pcParams = new URLSearchParams();
    pcParams.set('action', 'bindcomponent');
    pcParams.set('component_appid', this.componentAppId);
    pcParams.set('pre_auth_code', params.pre_auth_code);
    pcParams.set('redirect_uri', params.redirect_uri);
    if (params.auth_type !== undefined) pcParams.set('auth_type', String(params.auth_type));
    if (params.biz_appid !== undefined) pcParams.set('biz_appid', params.biz_appid);
    const pc = `${PC_LOGIN_URL}?${pcParams.toString()}#wechat_redirect`;

    // 移动端 bindcomponent 页对 redirect_uri 要求 URL 编码，且参数次序固定。
    let mobile =
      `${MOBILE_BIND_URL}?action=bindcomponent&no_scan=1` +
      `&component_appid=${this.componentAppId}` +
      `&pre_auth_code=${params.pre_auth_code}` +
      `&redirect_uri=${redirect}`;
    if (params.auth_type !== undefined) mobile += `&auth_type=${params.auth_type}`;
    if (params.biz_appid !== undefined) mobile += `&biz_appid=${params.biz_appid}`;
    mobile += '#wechat_redirect';

    return { pc, mobile };
  }

  /**
   * 用户授权后，凭授权码换取授权方令牌信息，并落库 refresh_token。
   * @param authorizationCode 授权回调带回的 auth_code。
   * @returns 授权信息（含 authorizer_appid / access_token / refresh_token 等）。
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/api/authorization_info.html
   */
  async queryAuth(authorizationCode: string): Promise<AuthorizationInfo> {
    if (!authorizationCode) throw new WxConfigError('缺少 authorization_code');
    const res = await this.callComponent<QueryAuthResult>('/cgi-bin/component/api_query_auth', {
      component_appid: this.componentAppId,
      authorization_code: authorizationCode,
    });
    const info = res.authorization_info;
    await this.setAuthorizerRefreshToken(info.authorizer_appid, info.authorizer_refresh_token);
    // 顺手把首批 access_token 写入缓存，省去一次刷新。
    if (info.authorizer_access_token) {
      await this.store.set(
        authorizerTokenKey(this.componentAppId, info.authorizer_appid),
        info.authorizer_access_token,
        Math.max(60, (info.expires_in ?? 7200) - 300),
      );
    }
    return info;
  }

  // ──────────────────────────── 授权方令牌 ────────────────────────────

  /** 落库授权方 refresh_token。 */
  async setAuthorizerRefreshToken(authorizerAppId: string, refreshToken: string): Promise<void> {
    await this.store.set(
      refreshKey(this.componentAppId, authorizerAppId),
      refreshToken,
      REFRESH_TTL_SEC,
    );
  }

  /** 读取落库的授权方 refresh_token。 */
  async getAuthorizerRefreshToken(authorizerAppId: string): Promise<string | null> {
    return this.store.get(refreshKey(this.componentAppId, authorizerAppId));
  }

  /** 获取某授权方的 authorizer_access_token 管理器（按 appid 懒加载）。 */
  private getAuthorizerTokenManager(authorizerAppId: string): TokenManager {
    let mgr = this.authorizerTokenManagers.get(authorizerAppId);
    if (mgr) return mgr;
    mgr = new TokenManager({
      store: this.store,
      logger: this.logger,
      fetcher: async () => {
        const refreshToken = await this.getAuthorizerRefreshToken(authorizerAppId);
        if (!refreshToken) {
          throw new WxTokenError(
            `授权方 ${authorizerAppId} 的 refresh_token 不存在：请先完成授权（queryAuth）或在授权变更事件里落库`,
            'AUTHORIZER_REFRESH_MISSING',
          );
        }
        const componentToken = await this.getComponentAccessToken();
        const resp = await this.transport.request<
          Partial<AuthorizerTokenResult> & {
            errcode?: number;
            errmsg?: string;
            [k: string]: unknown;
          }
        >({
          method: 'POST',
          url: '/cgi-bin/component/api_authorizer_token',
          query: { component_access_token: componentToken },
          body: {
            component_appid: this.componentAppId,
            authorizer_appid: authorizerAppId,
            authorizer_refresh_token: refreshToken,
          },
        });
        const data = resp.data;
        if (!data.authorizer_access_token) {
          if (isApiErrorBody(data)) throw buildApiError(data);
          throw new WxTokenError(
            '刷新 authorizer_access_token 失败',
            'AUTHORIZER_TOKEN_ERROR',
            data,
          );
        }
        // 微信每次刷新都会下发新的 refresh_token，必须滚动落库。
        if (data.authorizer_refresh_token) {
          await this.setAuthorizerRefreshToken(authorizerAppId, data.authorizer_refresh_token);
        }
        return { token: data.authorizer_access_token, expiresIn: data.expires_in ?? 7200 };
      },
    });
    this.authorizerTokenManagers.set(authorizerAppId, mgr);
    return mgr;
  }

  /**
   * 获取（必要时刷新并落库）某授权方的 authorizer_access_token。
   * @param authorizerAppId 授权方 AppID。
   * @param authorizerRefreshToken 可选；若提供则先落库再刷新，否则从 store 读取。
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/api/authorizer_token.html
   */
  async getAuthorizerToken(
    authorizerAppId: string,
    authorizerRefreshToken?: string,
  ): Promise<string> {
    if (authorizerRefreshToken) {
      await this.setAuthorizerRefreshToken(authorizerAppId, authorizerRefreshToken);
    }
    const mgr = this.getAuthorizerTokenManager(authorizerAppId);
    return mgr.getToken(authorizerTokenKey(this.componentAppId, authorizerAppId));
  }

  /** 强制刷新某授权方的 authorizer_access_token。 */
  async refreshAuthorizerToken(authorizerAppId: string): Promise<string> {
    const mgr = this.getAuthorizerTokenManager(authorizerAppId);
    return mgr.refresh(authorizerTokenKey(this.componentAppId, authorizerAppId));
  }

  // ──────────────────────────── 授权方信息 / 选项 ────────────────────────────

  /**
   * 获取授权方账号基本信息。
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/api/api_get_authorizer_info.html
   */
  async getAuthorizerInfo(authorizerAppId: string): Promise<AuthorizerInfoResult> {
    return this.callComponent<AuthorizerInfoResult>('/cgi-bin/component/api_get_authorizer_info', {
      component_appid: this.componentAppId,
      authorizer_appid: authorizerAppId,
    });
  }

  /**
   * 获取授权方选项设置（如 location_report、voice_recognize、customer_service）。
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/api/api_get_authorizer_option.html
   */
  async getAuthorizerOption(
    authorizerAppId: string,
    optionName: string,
  ): Promise<AuthorizerOptionResult> {
    return this.callComponent<AuthorizerOptionResult>(
      '/cgi-bin/component/api_get_authorizer_option',
      {
        component_appid: this.componentAppId,
        authorizer_appid: authorizerAppId,
        option_name: optionName,
      },
    );
  }

  /**
   * 设置授权方选项。
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/api/api_set_authorizer_option.html
   */
  async setAuthorizerOption(
    authorizerAppId: string,
    optionName: string,
    optionValue: string,
  ): Promise<{ errcode: number; errmsg: string }> {
    return this.callComponent<{ errcode: number; errmsg: string }>(
      '/cgi-bin/component/api_set_authorizer_option',
      {
        component_appid: this.componentAppId,
        authorizer_appid: authorizerAppId,
        option_name: optionName,
        option_value: optionValue,
      },
    );
  }

  // ──────────────────────────── 代调用逃生口 ────────────────────────────

  /**
   * 代某授权方调用任意 OpenAPI（核心逃生口）。
   *
   * 自动取该授权方的 authorizer_access_token 放入 query 的 access_token 后发起请求，
   * 命中令牌失效错误码时自动刷新并重放一次。覆盖代公众号/小程序的全部接口
   * （菜单、模板消息、客服、素材、二维码、用户管理、小程序码等）。
   *
   * @param authorizerAppId 授权方 AppID。
   * @param options 接口路径、方法、请求体、附加 query。
   * @example
   * await client.callAuthorizer('wxAppId', { path: '/cgi-bin/menu/get', method: 'GET' });
   */
  async callAuthorizer<T = unknown>(
    authorizerAppId: string,
    options: CallAuthorizerOptions,
  ): Promise<T> {
    const resp = await this.callAuthorizerRaw<T>(authorizerAppId, options);
    return resp.data;
  }

  /**
   * 代调用逃生口（返回完整 HttpResponse，含 raw 字节）。
   * 适合下载二维码/小程序码等二进制（responseType: 'arraybuffer'，读取 resp.raw）。
   */
  async callAuthorizerRaw<T = unknown>(
    authorizerAppId: string,
    options: CallAuthorizerOptions,
  ): Promise<HttpResponse<T>> {
    const method = options.method ?? 'POST';
    const throwOnApiError = options.throwOnApiError ?? true;

    const run = async (token: string): Promise<HttpResponse<T>> =>
      this.transport.request<T>({
        method,
        url: options.path,
        query: { access_token: token, ...options.query },
        body: options.body,
        headers: options.headers,
        responseType: options.responseType,
      });

    let token = await this.getAuthorizerToken(authorizerAppId);
    let resp = await run(token);
    if (isApiErrorBody(resp.data) && TOKEN_INVALID_ERRCODES.has(resp.data.errcode)) {
      this.logger.warn('authorizer_access_token 失效，自动刷新并重试', {
        authorizerAppId,
        errcode: resp.data.errcode,
      });
      token = await this.refreshAuthorizerToken(authorizerAppId);
      resp = await run(token);
    }
    if (throwOnApiError && isApiErrorBody(resp.data)) throw buildApiError(resp.data);
    return resp;
  }
}

/**
 * 创建第三方平台客户端。
 * @param config 第三方平台配置。
 */
export function createComponentClient(config: ComponentClientConfig): ComponentClient {
  return new ComponentClient(config);
}
