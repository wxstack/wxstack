/**
 * 通讯录管理：成员、部门、标签。
 *
 * 每个函数为纯函数 `(client, params) => client.request(...)`，便于复用与单测。
 * 仅封装常用端点；未覆盖的接口可直接用逃生口 `client.request()` 调用。
 */
import type { BaseClient } from '@wxstack/core';
import type { SimpleListParams, UserCreateParams, WecomBaseResponse } from '../types.js';

/** 仅暴露逃生口所需的最小客户端形状。 */
type Caller = Pick<BaseClient, 'request' | 'requestRaw'>;

// ---------------- 成员 user ----------------

/**
 * 读取成员。
 * @see https://developer.work.weixin.qq.com/document/path/90196
 */
export function getUser(client: Caller, userid: string): Promise<Record<string, unknown>> {
  return client.request({ method: 'GET', url: '/cgi-bin/user/get', query: { userid } });
}

/**
 * 创建成员。
 * @see https://developer.work.weixin.qq.com/document/path/90195
 */
export function createUser(client: Caller, body: UserCreateParams): Promise<WecomBaseResponse> {
  return client.request({ method: 'POST', url: '/cgi-bin/user/create', body });
}

/**
 * 更新成员（按 userid 局部更新）。
 * @see https://developer.work.weixin.qq.com/document/path/90197
 */
export function updateUser(
  client: Caller,
  body: { userid: string } & Record<string, unknown>,
): Promise<WecomBaseResponse> {
  return client.request({ method: 'POST', url: '/cgi-bin/user/update', body });
}

/**
 * 删除成员。
 * @see https://developer.work.weixin.qq.com/document/path/90198
 */
export function deleteUser(client: Caller, userid: string): Promise<WecomBaseResponse> {
  return client.request({ method: 'GET', url: '/cgi-bin/user/delete', query: { userid } });
}

/**
 * 获取部门成员（简略信息）。
 * @see https://developer.work.weixin.qq.com/document/path/90200
 */
export function simpleListUser(
  client: Caller,
  params: SimpleListParams,
): Promise<Record<string, unknown>> {
  return client.request({
    method: 'GET',
    url: '/cgi-bin/user/simplelist',
    query: { department_id: params.department_id, fetch_child: params.fetch_child },
  });
}

/**
 * 获取成员 ID 列表（新版，不依赖部门）。
 * @see https://developer.work.weixin.qq.com/document/path/96067
 */
export function listUser(
  client: Caller,
  body?: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  return client.request({ method: 'POST', url: '/cgi-bin/user/list_id', body: body ?? {} });
}

// ---------------- 部门 department ----------------

/**
 * 获取部门列表。
 * @see https://developer.work.weixin.qq.com/document/path/90208
 */
export function listDepartment(
  client: Caller,
  params?: { id?: number },
): Promise<Record<string, unknown>> {
  return client.request({
    method: 'GET',
    url: '/cgi-bin/department/list',
    query: { id: params?.id },
  });
}

/**
 * 创建部门。
 * @see https://developer.work.weixin.qq.com/document/path/90205
 */
export function createDepartment(
  client: Caller,
  body: Record<string, unknown>,
): Promise<WecomBaseResponse> {
  return client.request({ method: 'POST', url: '/cgi-bin/department/create', body });
}

/**
 * 更新部门。
 * @see https://developer.work.weixin.qq.com/document/path/90206
 */
export function updateDepartment(
  client: Caller,
  body: Record<string, unknown>,
): Promise<WecomBaseResponse> {
  return client.request({ method: 'POST', url: '/cgi-bin/department/update', body });
}

/**
 * 删除部门。
 * @see https://developer.work.weixin.qq.com/document/path/90207
 */
export function deleteDepartment(client: Caller, id: number): Promise<WecomBaseResponse> {
  return client.request({ method: 'GET', url: '/cgi-bin/department/delete', query: { id } });
}

// ---------------- 标签 tag ----------------

/**
 * 创建标签。
 * @see https://developer.work.weixin.qq.com/document/path/90210
 */
export function createTag(
  client: Caller,
  body: Record<string, unknown>,
): Promise<WecomBaseResponse> {
  return client.request({ method: 'POST', url: '/cgi-bin/tag/create', body });
}

/**
 * 更新标签名。
 * @see https://developer.work.weixin.qq.com/document/path/90211
 */
export function updateTag(
  client: Caller,
  body: Record<string, unknown>,
): Promise<WecomBaseResponse> {
  return client.request({ method: 'POST', url: '/cgi-bin/tag/update', body });
}

/**
 * 删除标签。
 * @see https://developer.work.weixin.qq.com/document/path/90212
 */
export function deleteTag(client: Caller, tagid: number): Promise<WecomBaseResponse> {
  return client.request({ method: 'GET', url: '/cgi-bin/tag/delete', query: { tagid } });
}

/**
 * 增加标签成员。
 * @see https://developer.work.weixin.qq.com/document/path/90214
 */
export function addTagUsers(
  client: Caller,
  body: { tagid: number; userlist?: string[]; partylist?: number[] },
): Promise<WecomBaseResponse> {
  return client.request({ method: 'POST', url: '/cgi-bin/tag/addtagusers', body });
}

/**
 * 获取标签列表。
 * @see https://developer.work.weixin.qq.com/document/path/90216
 */
export function getTagList(client: Caller): Promise<Record<string, unknown>> {
  return client.request({ method: 'GET', url: '/cgi-bin/tag/list' });
}
