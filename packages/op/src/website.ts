/**
 * 网站应用扫码登录（开放平台 OAuth2，与第三方平台完全独立）。
 *
 * 流程：buildQrConnectUrl 生成二维码登录链接 → 用户扫码确认 → 微信回调带回 code
 *   → getAccessToken(code) 换取 access_token + openid（+ unionid）
 *   → getUserInfo(access_token, openid) 拉取用户资料；access_token 过期可用 refreshToken 续期。
 *
 * @see https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html
 */
import {
  FetchTransport,
  type Logger,
  type Transport,
  WX_API_DOMAINS,
  WxConfigError,
  buildApiError,
  isApiErrorBody,
  noopLogger,
} from '@wxstack/core';
import type {
  BuildQrConnectParams,
  SnsAccessTokenResult,
  SnsUserInfoResult,
  WebsiteLoginConfig,
} from './types.js';

/** 扫码登录二维码页基址。 */
const QR_CONNECT_URL = 'https://open.weixin.qq.com/connect/qrconnect';

/** 网站应用扫码登录客户端。 */
export class WebsiteLoginClient {
  private readonly appId: string;
  private readonly appSecret: string;
  private readonly transport: Transport;
  private readonly logger: Logger;

  constructor(config: WebsiteLoginConfig) {
    if (!config.appId) throw new WxConfigError('缺少 appId');
    if (!config.appSecret) throw new WxConfigError('缺少 appSecret');
    this.appId = config.appId;
    this.appSecret = config.appSecret;
    this.transport = config.transport ?? new FetchTransport({ baseURL: WX_API_DOMAINS.auto });
    this.logger = config.logger ?? noopLogger;
  }

  /**
   * 构建扫码登录二维码链接，前端跳转或内嵌即可展示二维码。
   * @param params 回调地址、作用域（默认 snsapi_login）、state。
   * @see https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html
   */
  buildQrConnectUrl(params: BuildQrConnectParams): string {
    if (!params.redirect_uri) throw new WxConfigError('缺少 redirect_uri');
    const sp = new URLSearchParams();
    sp.set('appid', this.appId);
    sp.set('redirect_uri', params.redirect_uri);
    sp.set('response_type', 'code');
    sp.set('scope', params.scope ?? 'snsapi_login');
    if (params.state !== undefined) sp.set('state', params.state);
    return `${QR_CONNECT_URL}?${sp.toString()}#wechat_redirect`;
  }

  /**
   * 凭授权码换取网页授权 access_token。
   * @param code 回调带回的 code（一次性，约 5 分钟有效）。
   * @see https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html
   */
  async getAccessToken(code: string): Promise<SnsAccessTokenResult> {
    if (!code) throw new WxConfigError('缺少 code');
    const resp = await this.transport.request<SnsAccessTokenResult>({
      method: 'GET',
      url: '/sns/oauth2/access_token',
      query: {
        appid: this.appId,
        secret: this.appSecret,
        code,
        grant_type: 'authorization_code',
      },
    });
    return this.unwrap(resp.data);
  }

  /**
   * 刷新网页授权 access_token。
   * @param refreshToken 上一步返回的 refresh_token（约 30 天有效）。
   * @see https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html
   */
  async refreshToken(refreshToken: string): Promise<SnsAccessTokenResult> {
    if (!refreshToken) throw new WxConfigError('缺少 refresh_token');
    const resp = await this.transport.request<SnsAccessTokenResult>({
      method: 'GET',
      url: '/sns/oauth2/refresh_token',
      query: {
        appid: this.appId,
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
    });
    return this.unwrap(resp.data);
  }

  /**
   * 拉取用户个人信息（需 snsapi_login / snsapi_userinfo 作用域）。
   * @param accessToken 网页授权 access_token（非全局 access_token）。
   * @param openid 用户 openid。
   * @param lang 语言，zh_CN / zh_TW / en，默认 zh_CN。
   * @see https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Authorized_API_call_UnionID.html
   */
  async getUserInfo(
    accessToken: string,
    openid: string,
    lang = 'zh_CN',
  ): Promise<SnsUserInfoResult> {
    if (!accessToken) throw new WxConfigError('缺少 access_token');
    if (!openid) throw new WxConfigError('缺少 openid');
    const resp = await this.transport.request<SnsUserInfoResult>({
      method: 'GET',
      url: '/sns/userinfo',
      query: { access_token: accessToken, openid, lang },
    });
    return this.unwrap(resp.data);
  }

  /** 校验网页授权 access_token 是否有效。 */
  async checkToken(accessToken: string, openid: string): Promise<boolean> {
    const resp = await this.transport.request<{ errcode?: number; errmsg?: string }>({
      method: 'GET',
      url: '/sns/auth',
      query: { access_token: accessToken, openid },
    });
    return resp.data.errcode === 0;
  }

  /** 统一解包：errcode!=0 抛 WxApiError。 */
  private unwrap<T>(data: T): T {
    if (isApiErrorBody(data)) {
      this.logger.warn('sns 接口返回业务错误', { errcode: data.errcode });
      throw buildApiError(data);
    }
    return data;
  }
}

/**
 * 创建网站应用扫码登录客户端。
 * @param config 网站应用 appId / appSecret。
 */
export function createWebsiteLogin(config: WebsiteLoginConfig): WebsiteLoginClient {
  return new WebsiteLoginClient(config);
}
