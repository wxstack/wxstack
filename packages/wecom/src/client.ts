import crypto from 'node:crypto';
/**
 * 企业微信客户端：在基类之上装配「企业微信令牌」与高层语义方法。
 *
 * 设计要点：
 * 1. 基址固定为 https://qyapi.weixin.qq.com（在 super 中写死，忽略外部 baseURL）。
 * 2. 令牌为非标准 access_token（GET /cgi-bin/gettoken），自建 TokenManager 提供 fetcher；
 *    令牌按 corpid + corpsecret 哈希前缀区分命名空间，避免多应用互相顶掉。
 * 3. 两种 API 风格：高层语义方法 + 继承自基类的逃生口 `request()` / `requestRaw()`，
 *    后者可调用任意「尚未封装」的企业微信接口（自动带令牌）。
 */
import {
  BaseClient,
  TokenManager,
  type TokenProvider,
  WxConfigError,
  WxTokenError,
} from '@wxstack/core';
import {
  addTagUsers,
  createDepartment,
  createTag,
  createUser,
  deleteDepartment,
  deleteTag,
  deleteUser,
  getTagList,
  getUser,
  listDepartment,
  listUser,
  simpleListUser,
  updateDepartment,
  updateTag,
  updateUser,
} from './actions/contacts.js';
import {
  addContactWay,
  getExternalContact,
  getFollowUserList,
  getGroupChat,
  listExternalContact,
  listGroupChat,
} from './actions/external-contact.js';
import { type MediaType, type UploadMediaFile, getMedia, uploadMedia } from './actions/media.js';
import { recallMessage, sendMessage } from './actions/message.js';
import {
  getCorpToken,
  getPermanentCode,
  getPreAuthCode,
  getSuiteToken,
} from './actions/service.js';
import { buildJsSdkSignature, buildOAuthUrl } from './oauth.js';
import type {
  AddContactWayParams,
  AuthUserInfoResponse,
  BuildOAuthUrlParams,
  GetTokenResponse,
  JsSdkSignature,
  SimpleListParams,
  SuiteTokenParams,
  UserCreateParams,
  WecomBaseResponse,
  WecomClientConfig,
} from './types.js';

/** 取 corpsecret 的哈希前缀，作为令牌命名空间的一部分（避免把 secret 明文写进 key）。 */
function secretFingerprint(secret: string): string {
  return crypto.createHash('sha256').update(secret).digest('hex').slice(0, 8);
}

/**
 * 企业微信客户端。
 *
 * @example
 * const wecom = createWecomClient({ corpid: 'ww...', corpsecret: 'xxx', agentid: 1000002 });
 * const user = await wecom.user.get('zhangsan');
 * // 逃生口：调用任意未封装接口
 * const res = await wecom.request({ method: 'GET', url: '/cgi-bin/agent/get', query: { agentid: 1000002 } });
 */
export class WecomClient extends BaseClient {
  /** 企业 ID。 */
  readonly corpid: string;
  /** 默认应用 ID（发消息 / OAuth 时使用）。 */
  readonly agentid?: number;
  private readonly tokenManager: TokenManager;
  private readonly tokenKey: string;

  constructor(config: WecomClientConfig) {
    if (!config?.corpid) throw new WxConfigError('缺少必填配置：corpid');
    if (!config.corpsecret) throw new WxConfigError('缺少必填配置：corpsecret');

    super({ ...config, baseURL: 'https://qyapi.weixin.qq.com' });

    this.corpid = config.corpid;
    this.agentid = config.agentid;

    const { corpid, corpsecret } = config;
    // 自建令牌管理：企业微信 gettoken 为非标准 access_token 接口。
    this.tokenManager = new TokenManager({
      store: this.store,
      logger: this.logger,
      fetcher: async () => {
        const { data } = await this.transport.request<GetTokenResponse>({
          method: 'GET',
          url: '/cgi-bin/gettoken',
          query: { corpid, corpsecret },
        });
        if (!data.access_token) {
          throw new WxTokenError(data.errmsg ?? '获取 access_token 失败', data.errcode, data);
        }
        return { token: data.access_token, expiresIn: data.expires_in ?? 7200 };
      },
    });
    // 令牌命名空间：corpid + agentid（如有）+ secret 哈希前缀，确保多应用互不干扰。
    const agentPart =
      this.agentid !== undefined ? String(this.agentid) : secretFingerprint(corpsecret);
    this.tokenKey = `wecom:access_token:${corpid}:${agentPart}`;

    const provider: TokenProvider = {
      get: () => this.tokenManager.getToken(this.tokenKey),
      refresh: () => this.tokenManager.refresh(this.tokenKey),
    };
    this.tokenProvider = provider;
    this.tokenPlacement = 'query';
  }

  /** 主动获取当前 access_token（通常无需手动调用，逃生口已自动带令牌）。 */
  getAccessToken(): Promise<string> {
    return this.tokenManager.getToken(this.tokenKey);
  }

  // ====================== 通讯录 ======================

  /** 通讯录·成员。 */
  readonly user = {
    /** 读取成员。 */
    get: (userid: string) => getUser(this, userid),
    /** 创建成员。 */
    create: (body: UserCreateParams) => createUser(this, body),
    /** 更新成员。 */
    update: (body: { userid: string } & Record<string, unknown>) => updateUser(this, body),
    /** 删除成员。 */
    delete: (userid: string) => deleteUser(this, userid),
    /** 获取部门成员（简略）。 */
    simpleList: (params: SimpleListParams) => simpleListUser(this, params),
    /** 获取成员 ID 列表（新版）。 */
    list: (body?: Record<string, unknown>) => listUser(this, body),
  };

  /** 通讯录·部门。 */
  readonly department = {
    /** 获取部门列表。 */
    list: (params?: { id?: number }) => listDepartment(this, params),
    /** 创建部门。 */
    create: (body: Record<string, unknown>) => createDepartment(this, body),
    /** 更新部门。 */
    update: (body: Record<string, unknown>) => updateDepartment(this, body),
    /** 删除部门。 */
    delete: (id: number) => deleteDepartment(this, id),
  };

  /** 通讯录·标签。 */
  readonly tag = {
    /** 创建标签。 */
    create: (body: Record<string, unknown>) => createTag(this, body),
    /** 更新标签名。 */
    update: (body: Record<string, unknown>) => updateTag(this, body),
    /** 删除标签。 */
    delete: (tagid: number) => deleteTag(this, tagid),
    /** 增加标签成员。 */
    addTagUsers: (body: { tagid: number; userlist?: string[]; partylist?: number[] }) =>
      addTagUsers(this, body),
    /** 获取标签列表。 */
    getList: () => getTagList(this),
  };

  // ====================== 应用消息 ======================

  /** 应用消息。 */
  readonly message = {
    /**
     * 发送应用消息。若未显式提供 agentid 且客户端配置了默认 agentid，则自动补上。
     */
    send: (body: { msgtype: string } & Record<string, unknown>) => {
      const withAgent =
        body.agentid === undefined && this.agentid !== undefined
          ? { ...body, agentid: this.agentid }
          : body;
      return sendMessage(this, withAgent);
    },
    /** 撤回应用消息。 */
    recall: (msgid: string) => recallMessage(this, msgid),
  };

  // ====================== 客户联系 ======================

  /** 客户联系（外部联系人 / 客户群）。 */
  readonly externalContact = {
    /** 获取配置了客户联系功能的成员列表。 */
    getFollowUserList: () => getFollowUserList(this),
    /** 获取某成员的客户列表。 */
    list: (params: { userid: string }) => listExternalContact(this, params),
    /** 获取客户详情。 */
    get: (params: { external_userid: string; cursor?: string }) => getExternalContact(this, params),
    /** 配置「联系我」方式。 */
    addContactWay: (body: AddContactWayParams) => addContactWay(this, body),
    /** 客户群相关。 */
    groupChat: {
      /** 获取客户群列表。 */
      list: (body: Record<string, unknown>) => listGroupChat(this, body),
      /** 获取客户群详情。 */
      get: (body: { chat_id: string } & Record<string, unknown>) => getGroupChat(this, body),
    },
  };

  // ====================== 素材 ======================

  /** 素材管理。 */
  readonly media = {
    /** 上传临时素材（multipart）。 */
    upload: (type: MediaType, file: UploadMediaFile) => uploadMedia(this, type, file),
    /** 下载临时素材（返回 Buffer）。 */
    get: (mediaId: string) => getMedia(this, mediaId),
  };

  // ====================== 身份验证 OAuth ======================

  /**
   * 用网页授权 code 换取用户身份（成员返回 userid，外部用户返回 openid）。
   * @see https://developer.work.weixin.qq.com/document/path/91023
   */
  getUserInfo(code: string): Promise<AuthUserInfoResponse> {
    return this.request<AuthUserInfoResponse>({
      method: 'GET',
      url: '/cgi-bin/auth/getuserinfo',
      query: { code },
    });
  }

  /**
   * 构造网页授权跳转链接。
   * @see https://developer.work.weixin.qq.com/document/path/91022
   */
  buildOAuthUrl(params: BuildOAuthUrlParams): string {
    const agentid = params.agentid ?? this.agentid;
    return buildOAuthUrl(this.corpid, { ...params, agentid });
  }

  // ====================== JS-SDK ======================

  /**
   * 获取企业 jsapi_ticket（用于 wx.config）。基类令牌缓存之外，此处再缓存 ticket。
   * @see https://developer.work.weixin.qq.com/document/path/90506
   */
  async getJsApiTicket(): Promise<string> {
    return this.getCachedTicket(`wecom:jsapi_ticket:${this.corpid}`, {
      url: '/cgi-bin/get_jsapi_ticket',
    });
  }

  /**
   * 获取应用 agentConfig 的 jsapi_ticket（type=agent_config）。
   * @see https://developer.work.weixin.qq.com/document/path/94313
   */
  async getAgentTicket(): Promise<string> {
    const agentPart = this.agentid ?? 'default';
    return this.getCachedTicket(`wecom:agent_ticket:${this.corpid}:${agentPart}`, {
      url: '/cgi-bin/ticket/get',
      query: { type: 'agent_config' },
    });
  }

  /**
   * 计算 JS-SDK 签名（noncestr / timestamp / signature）。
   * @param url 当前网页完整 URL（不含 # 部分）。
   * @param ticket jsapi_ticket（来自 getJsApiTicket 或 getAgentTicket）。
   */
  buildJsSdkSignature(url: string, ticket: string): JsSdkSignature {
    return buildJsSdkSignature(url, ticket);
  }

  // ====================== 第三方 / 服务商 ======================

  /**
   * 服务商接口。注意：以下方法使用 suite/provider 凭证，不走企业 access_token；
   * 凭证需在参数中显式提供。
   */
  readonly service = {
    /** 获取第三方应用 suite_access_token。 */
    getSuiteToken: (params: SuiteTokenParams) => getSuiteToken(this, params),
    /** 获取预授权码。 */
    getPreAuthCode: (suiteAccessToken: string) => getPreAuthCode(this, suiteAccessToken),
    /** 用临时授权码换取永久授权码。 */
    getPermanentCode: (
      suiteAccessToken: string,
      body: { auth_code: string } & Record<string, unknown>,
    ) => getPermanentCode(this, suiteAccessToken, body),
    /** 获取已授权企业 access_token。 */
    getCorpToken: (
      suiteAccessToken: string,
      body: { auth_corpid: string; permanent_code: string } & Record<string, unknown>,
    ) => getCorpToken(this, suiteAccessToken, body),
  };

  // ---------------- 内部：ticket 缓存 ----------------

  /** 通用 ticket 缓存：命中存储直接返回，否则拉取并按 expires_in 缓存。 */
  private async getCachedTicket(
    cacheKey: string,
    req: { url: string; query?: Record<string, string> },
  ): Promise<string> {
    const cached = await this.store.get(cacheKey);
    if (cached) return cached;
    const data = await this.request<WecomBaseResponse & { ticket?: string; expires_in?: number }>({
      method: 'GET',
      url: req.url,
      query: req.query,
    });
    if (!data.ticket) {
      throw new WxTokenError(data.errmsg ?? '获取 ticket 失败', data.errcode, data);
    }
    const ttl = Math.max(60, (data.expires_in ?? 7200) - 300);
    await this.store.set(cacheKey, data.ticket, ttl);
    return data.ticket;
  }
}

/**
 * 创建企业微信客户端。
 * @param config corpid / corpsecret 必填；agentid 可选（发消息、OAuth 时使用）。
 */
export function createWecomClient(config: WecomClientConfig): WecomClient {
  return new WecomClient(config);
}
