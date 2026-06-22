/**
 * 客户联系（外部联系人 / 客户群）。
 * @see https://developer.work.weixin.qq.com/document/path/92109
 */
import type { BaseClient } from '@wxstack/core';
import type { AddContactWayParams, WecomBaseResponse } from '../types.js';

type Caller = Pick<BaseClient, 'request' | 'requestRaw'>;

/**
 * 获取配置了客户联系功能的成员列表。
 * @see https://developer.work.weixin.qq.com/document/path/92571
 */
export function getFollowUserList(client: Caller): Promise<Record<string, unknown>> {
  return client.request({
    method: 'GET',
    url: '/cgi-bin/externalcontact/get_follow_user_list',
  });
}

/**
 * 获取某成员的客户列表（external_userid 列表）。
 * @see https://developer.work.weixin.qq.com/document/path/92113
 */
export function listExternalContact(
  client: Caller,
  params: { userid: string },
): Promise<Record<string, unknown>> {
  return client.request({
    method: 'GET',
    url: '/cgi-bin/externalcontact/list',
    query: { userid: params.userid },
  });
}

/**
 * 获取客户详情。
 * @see https://developer.work.weixin.qq.com/document/path/92114
 */
export function getExternalContact(
  client: Caller,
  params: { external_userid: string; cursor?: string },
): Promise<Record<string, unknown>> {
  return client.request({
    method: 'GET',
    url: '/cgi-bin/externalcontact/get',
    query: { external_userid: params.external_userid, cursor: params.cursor },
  });
}

/**
 * 配置客户联系「联系我」方式。
 * @see https://developer.work.weixin.qq.com/document/path/92228
 */
export function addContactWay(
  client: Caller,
  body: AddContactWayParams,
): Promise<WecomBaseResponse> {
  return client.request({
    method: 'POST',
    url: '/cgi-bin/externalcontact/add_contact_way',
    body,
  });
}

/**
 * 获取客户群列表。
 * @see https://developer.work.weixin.qq.com/document/path/92120
 */
export function listGroupChat(
  client: Caller,
  body: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  return client.request({
    method: 'POST',
    url: '/cgi-bin/externalcontact/groupchat/list',
    body,
  });
}

/**
 * 获取客户群详情。
 * @see https://developer.work.weixin.qq.com/document/path/92122
 */
export function getGroupChat(
  client: Caller,
  body: { chat_id: string } & Record<string, unknown>,
): Promise<Record<string, unknown>> {
  return client.request({
    method: 'POST',
    url: '/cgi-bin/externalcontact/groupchat/get',
    body,
  });
}
