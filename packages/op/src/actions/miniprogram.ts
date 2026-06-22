/**
 * 小程序代开发 / 代码管理动作集（在授权方 access_token 下调用）。
 *
 * 第三方平台为授权的小程序代上传/审核/发布代码，均走 /wxa/* 路径，通过
 * `callAuthorizer` 以授权方 authorizer_access_token 发起。每个函数都是
 * `(client, authorizerAppId, params)` 形态的纯函数，便于按需 tree-shake。
 *
 * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/code_template.html
 */
import type { HttpResponse } from '@wxstack/core';
import type { ComponentClient } from '../client.js';

/** 通用接口返回（errcode/errmsg）。 */
export interface BasicResult {
  errcode: number;
  errmsg: string;
  [k: string]: unknown;
}

/** 上传代码参数。 */
export interface CommitParams {
  /** 代码库中的代码模板 ID。 */
  template_id: number;
  /** 第三方自定义的配置（JSON 字符串）。 */
  ext_json: string;
  /** 代码版本号，开发者可自定义。 */
  user_version: string;
  /** 代码描述，开发者可自定义。 */
  user_desc: string;
  [k: string]: unknown;
}

/**
 * 上传小程序代码并生成体验版。
 * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/code/commit.html
 */
export async function commit(
  client: ComponentClient,
  authorizerAppId: string,
  params: CommitParams,
): Promise<BasicResult> {
  return client.callAuthorizer<BasicResult>(authorizerAppId, { path: '/wxa/commit', body: params });
}

/**
 * 获取体验版二维码（返回二进制图片，读取 resp.raw）。
 * @param path 指定小程序页面路径及参数（可选）。
 * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/code/get_qrcode.html
 */
export async function getQrcode(
  client: ComponentClient,
  authorizerAppId: string,
  path?: string,
): Promise<HttpResponse<Buffer>> {
  return client.callAuthorizerRaw<Buffer>(authorizerAppId, {
    method: 'GET',
    path: '/wxa/get_qrcode',
    query: path ? { path } : undefined,
    responseType: 'arraybuffer',
    throwOnApiError: false,
  });
}

/**
 * 获取小程序所有类目（用于提审时选择 item_list）。
 * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/code/get_category.html
 */
export async function getCategory(
  client: ComponentClient,
  authorizerAppId: string,
): Promise<BasicResult> {
  return client.callAuthorizer<BasicResult>(authorizerAppId, {
    method: 'GET',
    path: '/wxa/get_category',
  });
}

/** 提交审核参数。 */
export interface SubmitAuditParams {
  /** 提交审核项的一个列表。 */
  item_list?: Array<Record<string, unknown>>;
  /** 用于声明小程序的版本说明等信息。 */
  preview_info?: Record<string, unknown>;
  /** 版本描述。 */
  version_desc?: string;
  /** 反馈内容。 */
  feedback_info?: string;
  /** 反馈截图的 mediaid。 */
  feedback_stuff?: string;
  [k: string]: unknown;
}

/**
 * 提交审核。
 * @returns 审核单号 auditid。
 * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/code/submit_audit.html
 */
export async function submitAudit(
  client: ComponentClient,
  authorizerAppId: string,
  params: SubmitAuditParams,
): Promise<BasicResult & { auditid?: number }> {
  return client.callAuthorizer<BasicResult & { auditid?: number }>(authorizerAppId, {
    path: '/wxa/submit_audit',
    body: params,
  });
}

/**
 * 查询指定版本的审核状态。
 * @param auditid 审核单号；缺省查询最新一次提交的审核状态（get_latest_auditstatus）。
 * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/code/get_auditstatus.html
 */
export async function getAuditStatus(
  client: ComponentClient,
  authorizerAppId: string,
  auditid?: number,
): Promise<BasicResult & { status?: number; reason?: string; screenshot?: string }> {
  if (auditid === undefined) {
    return client.callAuthorizer(authorizerAppId, {
      method: 'GET',
      path: '/wxa/get_latest_auditstatus',
    });
  }
  return client.callAuthorizer(authorizerAppId, {
    path: '/wxa/get_auditstatus',
    body: { auditid },
  });
}

/**
 * 发布已通过审核的小程序。
 * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/code/release.html
 */
export async function release(
  client: ComponentClient,
  authorizerAppId: string,
): Promise<BasicResult> {
  return client.callAuthorizer<BasicResult>(authorizerAppId, {
    path: '/wxa/release',
    body: {},
  });
}

/** 修改服务器域名参数。 */
export interface ModifyDomainParams {
  /** add 添加 / delete 删除 / set 覆盖 / get 获取。 */
  action: 'add' | 'delete' | 'set' | 'get';
  requestdomain?: string[];
  wsrequestdomain?: string[];
  uploaddomain?: string[];
  downloaddomain?: string[];
  [k: string]: unknown;
}

/**
 * 设置小程序服务器域名。
 * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/Server_Address_Configuration.html
 */
export async function modifyDomain(
  client: ComponentClient,
  authorizerAppId: string,
  params: ModifyDomainParams,
): Promise<BasicResult> {
  return client.callAuthorizer<BasicResult>(authorizerAppId, {
    path: '/wxa/modify_domain',
    body: params,
  });
}

/** 设置业务域名参数。 */
export interface SetWebViewDomainParams {
  action?: 'add' | 'delete' | 'set' | 'get';
  webviewdomain?: string[];
  [k: string]: unknown;
}

/**
 * 设置小程序业务域名（webview 域名）。
 * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/Server_Address_Configuration.html
 */
export async function setWebViewDomain(
  client: ComponentClient,
  authorizerAppId: string,
  params: SetWebViewDomainParams,
): Promise<BasicResult> {
  return client.callAuthorizer<BasicResult>(authorizerAppId, {
    path: '/wxa/setwebviewdomain',
    body: params,
  });
}

/**
 * 撤回审核（每天限 1 次）。
 * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/code/undocodeaudit.html
 */
export async function undoCodeAudit(
  client: ComponentClient,
  authorizerAppId: string,
): Promise<BasicResult> {
  return client.callAuthorizer<BasicResult>(authorizerAppId, {
    method: 'GET',
    path: '/wxa/undocodeaudit',
  });
}

/**
 * 版本回退到上一个线上版本。
 * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/code/revertcoderelease.html
 */
export async function revertCodeRelease(
  client: ComponentClient,
  authorizerAppId: string,
): Promise<BasicResult> {
  return client.callAuthorizer<BasicResult>(authorizerAppId, {
    method: 'GET',
    path: '/wxa/revertcoderelease',
  });
}

/**
 * 绑定的命名空间，挂在 ComponentClient 实例上以便 `client.miniprogram.commit(...)` 调用。
 * 每个方法等价于对应纯函数，省去重复传 client。
 */
export interface MiniProgramApi {
  commit(authorizerAppId: string, params: CommitParams): Promise<BasicResult>;
  getQrcode(authorizerAppId: string, path?: string): Promise<HttpResponse<Buffer>>;
  getCategory(authorizerAppId: string): Promise<BasicResult>;
  submitAudit(
    authorizerAppId: string,
    params: SubmitAuditParams,
  ): Promise<BasicResult & { auditid?: number }>;
  getAuditStatus(
    authorizerAppId: string,
    auditid?: number,
  ): Promise<BasicResult & { status?: number; reason?: string; screenshot?: string }>;
  release(authorizerAppId: string): Promise<BasicResult>;
  modifyDomain(authorizerAppId: string, params: ModifyDomainParams): Promise<BasicResult>;
  setWebViewDomain(authorizerAppId: string, params: SetWebViewDomainParams): Promise<BasicResult>;
  undoCodeAudit(authorizerAppId: string): Promise<BasicResult>;
  revertCodeRelease(authorizerAppId: string): Promise<BasicResult>;
}

/** 基于一个 ComponentClient 构建 miniprogram.* 命名空间。 */
export function createMiniProgramApi(client: ComponentClient): MiniProgramApi {
  return {
    commit: (appid, params) => commit(client, appid, params),
    getQrcode: (appid, path) => getQrcode(client, appid, path),
    getCategory: (appid) => getCategory(client, appid),
    submitAudit: (appid, params) => submitAudit(client, appid, params),
    getAuditStatus: (appid, auditid) => getAuditStatus(client, appid, auditid),
    release: (appid) => release(client, appid),
    modifyDomain: (appid, params) => modifyDomain(client, appid, params),
    setWebViewDomain: (appid, params) => setWebViewDomain(client, appid, params),
    undoCodeAudit: (appid) => undoCodeAudit(client, appid),
    revertCodeRelease: (appid) => revertCodeRelease(client, appid),
  };
}
