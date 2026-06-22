/**
 * 第三方应用 / 服务商（service）相关接口。
 *
 * 这些接口使用的是 suite_access_token / provider_access_token，而非企业 access_token，
 * 因此本模块的方法均关闭基类自动鉴权（auth:false），令牌/凭证由调用方在 body 中显式提供。
 * 字段随官方版本演进较多，未建模的字段一律透传，必要时直接走逃生口。
 * @see https://developer.work.weixin.qq.com/document/path/90600
 */
import type { BaseClient } from '@wxstack/core';
import type { SuiteTokenParams, WecomBaseResponse } from '../types.js';

type Caller = Pick<BaseClient, 'request' | 'requestRaw'>;

/** suite_access_token 返回体。 */
export interface SuiteTokenResponse extends WecomBaseResponse {
  suite_access_token?: string;
  expires_in?: number;
}

/**
 * 获取第三方应用凭证 suite_access_token。
 * @see https://developer.work.weixin.qq.com/document/path/90600
 */
export function getSuiteToken(client: Caller, body: SuiteTokenParams): Promise<SuiteTokenResponse> {
  return client.request({
    method: 'POST',
    url: '/cgi-bin/service/get_suite_token',
    body,
    auth: false,
  });
}

/**
 * 获取预授权码 pre_auth_code。
 * @param suiteAccessToken 上一步获取的 suite_access_token。
 * @see https://developer.work.weixin.qq.com/document/path/90601
 */
export function getPreAuthCode(
  client: Caller,
  suiteAccessToken: string,
): Promise<Record<string, unknown>> {
  return client.request({
    method: 'GET',
    url: '/cgi-bin/service/get_pre_auth_code',
    query: { suite_access_token: suiteAccessToken },
    auth: false,
  });
}

/**
 * 用临时授权码 auth_code 换取企业永久授权码 permanent_code。
 * @see https://developer.work.weixin.qq.com/document/path/90603
 */
export function getPermanentCode(
  client: Caller,
  suiteAccessToken: string,
  body: { auth_code: string } & Record<string, unknown>,
): Promise<Record<string, unknown>> {
  return client.request({
    method: 'POST',
    url: '/cgi-bin/service/get_permanent_code',
    query: { suite_access_token: suiteAccessToken },
    body,
    auth: false,
  });
}

/**
 * 获取已授权企业的 access_token（corp access_token）。
 * @see https://developer.work.weixin.qq.com/document/path/90605
 */
export function getCorpToken(
  client: Caller,
  suiteAccessToken: string,
  body: { auth_corpid: string; permanent_code: string } & Record<string, unknown>,
): Promise<Record<string, unknown>> {
  return client.request({
    method: 'POST',
    url: '/cgi-bin/service/get_corp_token',
    query: { suite_access_token: suiteAccessToken },
    body,
    auth: false,
  });
}
