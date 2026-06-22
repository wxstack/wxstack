/**
 * 订阅消息相关端点（含模板管理）。
 *
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/subscribe-message/
 */
import type { MpClient } from '../client.js';
import type { JsonObject } from '../types.js';

/**
 * 发送订阅消息。
 * @param body 形如 `{ touser, template_id, page?, data, miniprogram_state?, lang? }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/subscribe-message/sendMessage.html
 */
export async function sendSubscribeMessage(
  client: MpClient,
  body: JsonObject,
): Promise<JsonObject> {
  return client.post<JsonObject>('/cgi-bin/message/subscribe/send', body);
}

/**
 * 选用模板：从公共模板库选取并添加到个人模板库，返回个人模板 ID。
 * @param params `{ tid, kidList, sceneDesc? }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/subscribe-message/addMessageTemplate.html
 */
export async function addTemplate(
  client: MpClient,
  params: { tid: string; kidList: number[]; sceneDesc?: string },
): Promise<{ priTmplId: string } & JsonObject> {
  return client.post<{ priTmplId: string } & JsonObject>('/wxaapi/newtmpl/addtemplate', params);
}

/**
 * 删除个人模板。
 * @param params `{ priTmplId }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/subscribe-message/deleteMessageTemplate.html
 */
export async function delTemplate(
  client: MpClient,
  params: { priTmplId: string },
): Promise<JsonObject> {
  return client.post<JsonObject>('/wxaapi/newtmpl/deltemplate', params);
}

/**
 * 获取当前帐号下的个人模板列表。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/subscribe-message/getMessageTemplateList.html
 */
export async function getTemplateList(client: MpClient): Promise<JsonObject> {
  return client.get<JsonObject>('/wxaapi/newtmpl/gettemplate');
}

/**
 * 获取小程序账号的类目。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/subscribe-message/getCategory.html
 */
export async function getCategory(client: MpClient): Promise<JsonObject> {
  return client.get<JsonObject>('/wxaapi/newtmpl/getcategory');
}

/**
 * 获取模板库某个模板标题下的关键词列表。
 * @param params `{ tid }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/subscribe-message/getPubTemplateKeyWordsById.html
 */
export async function getPubTemplateKeyWordsById(
  client: MpClient,
  params: { tid: string },
): Promise<JsonObject> {
  return client.get<JsonObject>('/wxaapi/newtmpl/getpubtemplatekeywords', { tid: params.tid });
}

/**
 * 获取帐号所属类目下的公共模板标题列表。
 * @param params `{ ids, start, limit }`，ids 为类目 id 列表（逗号分隔字符串）。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/subscribe-message/getPubTemplateTitleList.html
 */
export async function getPubTemplateTitleList(
  client: MpClient,
  params: { ids: string; start: number; limit: number },
): Promise<JsonObject> {
  return client.get<JsonObject>('/wxaapi/newtmpl/getpubtemplatetitles', {
    ids: params.ids,
    start: params.start,
    limit: params.limit,
  });
}
