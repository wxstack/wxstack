/**
 * 群发消息、模板消息、新版订阅消息、自动回复等接口。
 */
import type { OaClient } from '../client.js';
import type { UploadInput } from '../types.js';
import { buildUploadForm } from './_upload.js';
import type { ErrResult } from './menu.js';

/* -------------------- 群发与图片上传 -------------------- */

/**
 * 上传图文消息内图片，返回可在正文中使用的 URL。
 * @param client OaClient 实例。
 * @param input 上传文件入参（filePath 或 file）。
 * @returns 图片 URL。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_uploadimage.html
 */
export async function uploadImage(client: OaClient, input: UploadInput): Promise<{ url: string }> {
  const form = await buildUploadForm(input, 'image.jpg', 'uploadImage');
  return client.request({ method: 'POST', url: '/cgi-bin/media/uploadimg', body: form });
}

/**
 * 删除群发消息。
 * @param client OaClient 实例。
 * @param params msg_id 必填，article_idx 可选（删除图文中某篇）。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_deletemassmsg.html
 */
export async function deleteMassMsg(
  client: OaClient,
  { msg_id, article_idx }: { msg_id: number | string; article_idx?: number },
): Promise<ErrResult> {
  if (!msg_id && msg_id !== 0) throw new Error('[deleteMassMsg] msg_id is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/message/mass/delete',
    body: article_idx ? { msg_id, article_idx } : { msg_id },
  });
}

/**
 * 获取群发速度等级。
 * @param client OaClient 实例。
 * @returns 当前速度等级。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_getspeed.html
 */
export async function getSpeed(client: OaClient): Promise<{ speed: number }> {
  return client.request({ method: 'POST', url: '/cgi-bin/message/mass/speed/get' });
}

/**
 * 查询群发消息状态。
 * @param client OaClient 实例。
 * @param params msg_id。
 * @returns 包含 msg_status 的状态对象。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_massmsgget.html
 */
export async function massMsgGet(
  client: OaClient,
  { msg_id }: { msg_id: number | string },
): Promise<{ msg_id: string | number; msg_status: string }> {
  if (!msg_id && msg_id !== 0) throw new Error('[massMsgGet] msg_id is required');
  return client.request({ method: 'POST', url: '/cgi-bin/message/mass/get', body: { msg_id } });
}

/**
 * 根据 openid 列表群发。
 * @param client OaClient 实例。
 * @param payload { touser: [...], msgtype, mpnews/text/... }。
 * @returns 结果（含 msg_id）。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_masssend.html
 */
export async function massSend(
  client: OaClient,
  payload: Record<string, unknown>,
): Promise<ErrResult & { msg_id?: number | string }> {
  return client.request({ method: 'POST', url: '/cgi-bin/message/mass/send', body: payload });
}

/**
 * 群发预览接口（对指定用户预览）。
 * @param client OaClient 实例。
 * @param payload { touser: 'OPENID'|'微信号', msgtype, mpnews/text/... }。
 * @returns 结果（含 msg_id）。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_preview.html
 */
export async function preview(
  client: OaClient,
  payload: Record<string, unknown>,
): Promise<ErrResult & { msg_id?: number | string }> {
  return client.request({ method: 'POST', url: '/cgi-bin/message/mass/preview', body: payload });
}

/**
 * 按标签进行群发。
 * @param client OaClient 实例。
 * @param payload { filter:{is_to_all, tag_id?}, msgtype, mpnews/text/... }。
 * @returns 结果（含 msg_id）。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_sendall.html
 */
export async function sendAll(
  client: OaClient,
  payload: Record<string, unknown>,
): Promise<ErrResult & { msg_id?: number | string }> {
  return client.request({ method: 'POST', url: '/cgi-bin/message/mass/sendall', body: payload });
}

/**
 * 设置群发速度等级。
 * @param client OaClient 实例。
 * @param params 速度等级（0~4）。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_setspeed.html
 */
export async function setSpeed(
  client: OaClient,
  { speed }: { speed: 0 | 1 | 2 | 3 | 4 },
): Promise<ErrResult> {
  if (speed === undefined || speed === null) throw new Error('[setSpeed] speed is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/message/mass/speed/set',
    body: { speed },
  });
}

/**
 * 上传图文消息素材（用于群发）。
 * @param client OaClient 实例。
 * @param payload { articles: [...] }。
 * @returns media_id 等。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_uploadnewsmsg.html
 */
export async function uploadNewsMsg(
  client: OaClient,
  payload: { articles: Array<Record<string, unknown>> },
): Promise<{ type?: string; media_id: string; created_at?: number }> {
  return client.request({ method: 'POST', url: '/cgi-bin/media/uploadnews', body: payload });
}

/* -------------------- 模板消息（公众号） -------------------- */

/**
 * 发送模板消息。
 * @param client OaClient 实例。
 * @param payload { touser, template_id, url?, miniprogram?, data, client_msg_id? }。
 * @returns 结果（含 msgid）。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_sendtemplatemessage.html
 */
export async function sendTemplateMessage(
  client: OaClient,
  payload: Record<string, unknown>,
): Promise<ErrResult & { msgid?: number | string }> {
  return client.request({ method: 'POST', url: '/cgi-bin/message/template/send', body: payload });
}

/**
 * 账户添加模板（通过短 ID 获取模板 ID）。
 * @param client OaClient 实例。
 * @param params template_id_short。
 * @returns 结果（含 template_id）。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_addtemplate.html
 */
export async function addTemplate(
  client: OaClient,
  { template_id_short }: { template_id_short: string },
): Promise<ErrResult & { template_id?: string }> {
  if (!template_id_short) throw new Error('[addTemplate] template_id_short is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/template/api_add_template',
    body: { template_id_short },
  });
}

/**
 * 查询模板消息被拦截/封禁信息。
 * @param client OaClient 实例。
 * @param params 查询参数（按文档要求）。
 * @returns 查询结果。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_queryblocktmplmsg.html
 */
export async function queryBlockTmplMsg(
  client: OaClient,
  params: Record<string, unknown> = {},
): Promise<Record<string, unknown>> {
  return client.request({
    method: 'POST',
    url: '/cgi-bin/message/template/api_query_block_tmpl_msg',
    body: params,
  });
}

/**
 * 删除私有模板。
 * @param client OaClient 实例。
 * @param params template_id。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_deletetemplate.html
 */
export async function deleteTemplate(
  client: OaClient,
  { template_id }: { template_id: string },
): Promise<ErrResult> {
  if (!template_id) throw new Error('[deleteTemplate] template_id is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/template/del_private_template',
    body: { template_id },
  });
}

/**
 * 获取账号下所有私有模板。
 * @param client OaClient 实例。
 * @returns 模板列表。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_getalltemplates.html
 */
export async function getAllTemplates(
  client: OaClient,
): Promise<{ template_list: Array<Record<string, unknown>> }> {
  return client.request({ method: 'GET', url: '/cgi-bin/template/get_all_private_template' });
}

/**
 * 获取所属行业。
 * @param client OaClient 实例。
 * @returns 主营/副营行业。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_getindustry.html
 */
export async function getIndustry(client: OaClient): Promise<{
  primary_industry: Record<string, unknown>;
  secondary_industry: Record<string, unknown>;
}> {
  return client.request({ method: 'GET', url: '/cgi-bin/template/get_industry' });
}

/**
 * 设置所属行业。
 * @param client OaClient 实例。
 * @param params industry_id1 与 industry_id2。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_setindustry.html
 */
export async function setIndustry(
  client: OaClient,
  { industry_id1, industry_id2 }: { industry_id1: string | number; industry_id2: string | number },
): Promise<ErrResult> {
  if (industry_id1 === undefined || industry_id2 === undefined) {
    throw new Error('[setIndustry] industry_id1 and industry_id2 are required');
  }
  return client.request({
    method: 'POST',
    url: '/cgi-bin/template/api_set_industry',
    body: { industry_id1, industry_id2 },
  });
}

/* -------------------- 新版订阅消息（newtmpl） -------------------- */

/**
 * 新增账号个人模板。
 * @param client OaClient 实例。
 * @param params tid、kidList、sceneDesc。
 * @returns 个人模板 ID。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_addwxanewtemplate.html
 */
export async function addWxaNewTemplate(
  client: OaClient,
  { tid, kidList, sceneDesc }: { tid: string; kidList: number[]; sceneDesc?: string },
): Promise<{ priTmplId: string }> {
  if (!tid || !Array.isArray(kidList) || kidList.length === 0) {
    throw new Error('[addWxaNewTemplate] tid and kidList are required');
  }
  return client.request({
    method: 'POST',
    url: '/wxaapi/newtmpl/addtemplate',
    body: { tid, kidList, sceneDesc },
  });
}

/**
 * 删除账号个人模板。
 * @param client OaClient 实例。
 * @param params priTmplId。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_delwxanewtemplate.html
 */
export async function delWxaNewTemplate(
  client: OaClient,
  { priTmplId }: { priTmplId: string },
): Promise<ErrResult> {
  if (!priTmplId) throw new Error('[delWxaNewTemplate] priTmplId is required');
  return client.request({
    method: 'POST',
    url: '/wxaapi/newtmpl/deltemplate',
    body: { priTmplId },
  });
}

/**
 * 获取账号所属类目。
 * @param client OaClient 实例。
 * @returns 类目列表。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getcategory.html
 */
export async function getCategory(client: OaClient): Promise<Record<string, unknown>> {
  return client.request({ method: 'GET', url: '/wxaapi/newtmpl/getcategory' });
}

/**
 * 获取公共模板关键词列表。
 * @param client OaClient 实例。
 * @param params tid。
 * @returns 关键词列表。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatekeywords.html
 */
export async function getPubNewTemplateKeywords(
  client: OaClient,
  { tid }: { tid: string },
): Promise<{ count: number; data: Array<Record<string, unknown>> }> {
  if (!tid) throw new Error('[getPubNewTemplateKeywords] tid is required');
  return client.request({
    method: 'GET',
    url: '/wxaapi/newtmpl/getpubtemplatekeywords',
    query: { tid },
  });
}

/**
 * 获取公共模板标题列表。
 * @param client OaClient 实例。
 * @param params ids（数组或逗号分隔字符串）、start、limit。
 * @returns 标题列表。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatetitles.html
 */
export async function getPubNewTemplateTitles(
  client: OaClient,
  { ids, start = 0, limit = 30 }: { ids: string | number[]; start?: number; limit?: number },
): Promise<{ count: number; data: Array<Record<string, unknown>> }> {
  if (!ids || (Array.isArray(ids) && ids.length === 0)) {
    throw new Error('[getPubNewTemplateTitles] ids is required');
  }
  const normIds = Array.isArray(ids) ? ids.join(',') : String(ids);
  return client.request({
    method: 'GET',
    url: '/wxaapi/newtmpl/getpubtemplatetitles',
    query: { ids: normIds, start, limit },
  });
}

/**
 * 获取账号下的个人模板列表。
 * @param client OaClient 实例。
 * @returns 个人模板列表。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getwxapubnewtemplate.html
 */
export async function getWxaPubNewTemplate(
  client: OaClient,
): Promise<{ data: Array<Record<string, unknown>> }> {
  return client.request({ method: 'GET', url: '/wxaapi/newtmpl/gettemplate' });
}

/**
 * 发送订阅消息（新版）。
 * @param client OaClient 实例。
 * @param payload { touser, template_id/priTmplId, page?, miniprogram_state?, lang?, data }。
 * @returns 结果（含 msgid）。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_sendnewsubscribemsg.html
 */
export async function sendNewSubscribeMsg(
  client: OaClient,
  payload: Record<string, unknown>,
): Promise<ErrResult & { msgid?: string | number }> {
  return client.request({ method: 'POST', url: '/cgi-bin/message/subscribe/send', body: payload });
}

/* -------------------- 旧版模板订阅接口 -------------------- */

/**
 * 模板订阅接口（旧版）。
 * @param client OaClient 实例。
 * @param payload 按文档填写参数。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/subscribe/api_templatesubscribe.html
 */
export async function templateSubscribe(
  client: OaClient,
  payload: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  return client.request({
    method: 'POST',
    url: '/cgi-bin/message/template/subscribe',
    body: payload,
  });
}

/* -------------------- 自动回复 -------------------- */

/**
 * 获取当前自动回复规则。
 * @param client OaClient 实例。
 * @returns 自动回复配置。
 * @see https://developers.weixin.qq.com/doc/service/api/notify/autoreplies/api_getcurrentautoreplyinfo.html
 */
export async function getCurrentAutoReplyInfo(client: OaClient): Promise<Record<string, unknown>> {
  return client.request({ method: 'GET', url: '/cgi-bin/get_current_autoreply_info' });
}
