/**
 * 客服能力：账号管理、会话控制、客服消息。
 */
import type { OaClient } from '../client.js';
import type { UploadInput } from '../types.js';
import { buildUploadForm } from './_upload.js';
import type { ErrResult } from './menu.js';

/* -------------------- 客服账号管理 -------------------- */

/**
 * 上传客服头像。
 * @param client OaClient 实例。
 * @param params kf_account 与上传文件入参。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_uploadkfheadimg.html
 */
export async function uploadKfHeadImg(
  client: OaClient,
  { kf_account, ...input }: { kf_account: string } & UploadInput,
): Promise<ErrResult> {
  if (!kf_account) throw new Error('[uploadKfHeadImg] kf_account is required');
  const form = await buildUploadForm(input, 'headimg.jpg', 'uploadKfHeadImg');
  return client.request({
    method: 'POST',
    url: '/customservice/kfaccount/uploadheadimg',
    query: { kf_account },
    body: form,
  });
}

/**
 * 添加客服账号。
 * @param client OaClient 实例。
 * @param payload kf_account 与 nickname。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_addkfaccount.html
 */
export async function addKfAccount(
  client: OaClient,
  { kf_account, nickname }: { kf_account: string; nickname: string },
): Promise<ErrResult> {
  if (!kf_account || !nickname)
    throw new Error('[addKfAccount] kf_account and nickname are required');
  return client.request({
    method: 'POST',
    url: '/customservice/kfaccount/add',
    body: { kf_account, nickname },
  });
}

/**
 * 更新客服账号。
 * @param client OaClient 实例。
 * @param payload kf_account 与 nickname。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_updatekfaccount.html
 */
export async function updateKfAccount(
  client: OaClient,
  { kf_account, nickname }: { kf_account: string; nickname: string },
): Promise<ErrResult> {
  if (!kf_account || !nickname)
    throw new Error('[updateKfAccount] kf_account and nickname are required');
  return client.request({
    method: 'POST',
    url: '/customservice/kfaccount/update',
    body: { kf_account, nickname },
  });
}

/**
 * 删除客服账号。
 * @param client OaClient 实例。
 * @param params kf_account（按官方要求 query 传参）。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_delkfaccount.html
 */
export async function delKfAccount(
  client: OaClient,
  { kf_account }: { kf_account: string },
): Promise<ErrResult> {
  if (!kf_account) throw new Error('[delKfAccount] kf_account is required');
  return client.request({
    method: 'GET',
    url: '/customservice/kfaccount/del',
    query: { kf_account },
  });
}

/**
 * 邀请微信号绑定为客服。
 * @param client OaClient 实例。
 * @param payload kf_account 与 invite_wx。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_invitekfworker.html
 */
export async function inviteKfWorker(
  client: OaClient,
  { kf_account, invite_wx }: { kf_account: string; invite_wx: string },
): Promise<ErrResult> {
  if (!kf_account || !invite_wx)
    throw new Error('[inviteKfWorker] kf_account and invite_wx are required');
  return client.request({
    method: 'POST',
    url: '/customservice/kfaccount/inviteworker',
    body: { kf_account, invite_wx },
  });
}

/**
 * 获取所有客服账号列表。
 * @param client OaClient 实例。
 * @returns 客服账号列表。
 * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getkflist.html
 */
export async function getKfList(
  client: OaClient,
): Promise<{ kf_list: Array<Record<string, unknown>> }> {
  return client.request({ method: 'GET', url: '/cgi-bin/customservice/getkflist' });
}

/**
 * 获取在线客服列表。
 * @param client OaClient 实例。
 * @returns 在线客服列表。
 * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getonlinekflist.html
 */
export async function getOnlineKfList(
  client: OaClient,
): Promise<{ kf_online_list: Array<Record<string, unknown>> }> {
  return client.request({ method: 'GET', url: '/cgi-bin/customservice/getonlinekflist' });
}

/* -------------------- 会话控制 -------------------- */

/**
 * 获取客服的会话列表。
 * @param client OaClient 实例。
 * @param params kf_account。
 * @returns 会话列表。
 * @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsessionlist.html
 */
export async function getKfSessionList(
  client: OaClient,
  { kf_account }: { kf_account: string },
): Promise<{ sessionlist: Array<Record<string, unknown>> }> {
  if (!kf_account) throw new Error('[getKfSessionList] kf_account is required');
  return client.request({
    method: 'GET',
    url: '/customservice/kfsession/getsessionlist',
    query: { kf_account },
  });
}

/**
 * 获取用户会话状态。
 * @param client OaClient 实例。
 * @param params openid。
 * @returns 会话状态。
 * @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsession.html
 */
export async function getKfSession(
  client: OaClient,
  { openid }: { openid: string },
): Promise<Record<string, unknown>> {
  if (!openid) throw new Error('[getKfSession] openid is required');
  return client.request({
    method: 'GET',
    url: '/customservice/kfsession/getsession',
    query: { openid },
  });
}

/**
 * 创建会话。
 * @param client OaClient 实例。
 * @param payload kf_account 与 openid。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_createkfsession.html
 */
export async function createKfSession(
  client: OaClient,
  { kf_account, openid }: { kf_account: string; openid: string },
): Promise<ErrResult> {
  if (!kf_account || !openid)
    throw new Error('[createKfSession] kf_account and openid are required');
  return client.request({
    method: 'POST',
    url: '/customservice/kfsession/create',
    body: { kf_account, openid },
  });
}

/**
 * 关闭会话。
 * @param client OaClient 实例。
 * @param payload kf_account 与 openid。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_closesession.html
 */
export async function closeSession(
  client: OaClient,
  { kf_account, openid }: { kf_account: string; openid: string },
): Promise<ErrResult> {
  if (!kf_account || !openid) throw new Error('[closeSession] kf_account and openid are required');
  return client.request({
    method: 'POST',
    url: '/customservice/kfsession/close',
    body: { kf_account, openid },
  });
}

/**
 * 获取待接入会话列表。
 * @param client OaClient 实例。
 * @returns 待接入会话列表。
 * @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getwaitcase.html
 */
export async function getWaitCase(
  client: OaClient,
): Promise<{ count: number; waitcaselist: Array<Record<string, unknown>> }> {
  return client.request({ method: 'GET', url: '/customservice/kfsession/getwaitcase' });
}

/* -------------------- 客服消息 -------------------- */

/** 获取客服消息记录入参（时间为秒级 Unix 时间戳）。 */
export interface GetMsgListParams {
  starttime: number;
  endtime: number;
  msgid: number;
  number: number;
}

/**
 * 获取客服消息记录。
 * @param client OaClient 实例。
 * @param payload 时间区间与分页参数。
 * @returns 消息记录列表。
 * @see https://developers.weixin.qq.com/doc/service/api/customer/message/api_getmsglist.html
 */
export async function getMsgList(
  client: OaClient,
  payload: GetMsgListParams,
): Promise<{ recordlist: Array<Record<string, unknown>> }> {
  const { starttime, endtime, msgid, number } = payload ?? {};
  if ([starttime, endtime, msgid, number].some((v) => v === undefined)) {
    throw new Error('[getMsgList] starttime, endtime, msgid and number are required');
  }
  return client.request({
    method: 'POST',
    url: '/customservice/msgrecord/getmsglist',
    body: { ...payload },
  });
}

/**
 * 下发客服输入状态。
 * @param client OaClient 实例。
 * @param payload touser 与 command。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/customer/message/api_typing.html
 */
export async function typing(
  client: OaClient,
  { touser, command }: { touser: string; command: 'Typing' | 'CancelTyping' },
): Promise<ErrResult> {
  if (!touser || !command) throw new Error('[typing] touser and command are required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/message/custom/typing',
    body: { touser, command },
  });
}

/**
 * 发送客服消息。
 * @param client OaClient 实例。
 * @param payload { touser, msgtype, text/image/news/... }。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/customer/message/api_sendcustommessage.html
 */
export async function sendCustomMessage(
  client: OaClient,
  payload: Record<string, unknown>,
): Promise<ErrResult> {
  return client.request({ method: 'POST', url: '/cgi-bin/message/custom/send', body: payload });
}
