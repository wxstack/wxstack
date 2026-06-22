/**
 * OaClient：微信公众号（订阅号/服务号）服务端客户端。
 *
 * 基于 @wxstack/core 的 BaseClient 装配：
 * - 自动鉴权：用 createAccessTokenManager（keyPrefix='oa'）管理标准 access_token，query 模式附加。
 * - 自动重试 + 错误解包 + 令牌失效自动重放，均由基类提供。
 *
 * 双 API 风格：
 * - 高层语义方法（本文件逐一委托 actions/* 纯函数），覆盖菜单/消息/客服/素材/草稿/留言/用户/二维码/数据/其它等域。
 * - 低层逃生口 `request()` / `requestRaw()`（继承自基类）：可调用任意「尚未被高层方法封装」的新接口，
 *   自动带令牌、自动解包；二进制下载用 `requestRaw({ responseType:'arraybuffer' })` 取 `resp.raw`。
 */
import {
  BaseClient,
  type BaseClientConfig,
  WxConfigError,
  createAccessTokenManager,
} from '@wxstack/core';
import type { OaClientConfig, OaRetryOptions } from './types.js';

import * as base from './actions/base.js';
import * as customer from './actions/customer.js';
import * as draftbox from './actions/draftbox.js';
import * as leaving from './actions/leaving.js';
import * as material from './actions/material.js';
import * as menu from './actions/menu.js';
import * as message from './actions/message.js';
import * as other from './actions/other.js';
import * as qrcode from './actions/qrcode.js';
import * as user from './actions/user.js';
import * as wedata from './actions/wedata.js';
import { type GeneratedApi, createGeneratedApi } from './generated/endpoints.js';

/** 将旧版 `{ retries, delayMs }` 重试配置映射为核心 RetryOptions。 */
function normalizeRetry(retry?: OaRetryOptions): BaseClientConfig['retry'] {
  if (!retry) return undefined;
  const baseDelayMs = retry.baseDelayMs ?? retry.delayMs;
  return {
    retries: retry.retries,
    ...(baseDelayMs !== undefined ? { baseDelayMs } : {}),
    ...(retry.maxDelayMs !== undefined ? { maxDelayMs: retry.maxDelayMs } : {}),
  };
}

/** 公众号服务端客户端。 */
export class OaClient extends BaseClient {
  /** 公众号 AppID。 */
  readonly appId: string;
  /**
   * 全量接口表：覆盖官方文档抓取到的全部公众号端点（自动鉴权薄封装）。
   * 用法：`client.api.<operationId>(body?, query?)`。端点清单见 docs/api-specs/oa.json。
   */
  readonly api: GeneratedApi;

  constructor(config: OaClientConfig) {
    if (!config || !config.appId || !config.appSecret) {
      throw new WxConfigError('[OaClient] appId 与 appSecret 为必填项');
    }
    super({
      domain: config.domain,
      timeoutMs: config.timeoutMs ?? 15000,
      retry: normalizeRetry(config.retry),
      store: config.store,
      logger: config.logger,
      transport: config.transport,
      throwOnApiError: config.throwOnApiError,
    });

    this.appId = config.appId;

    // 标准 access_token：query 模式附加（默认 access_token 字段名）。
    const { provider } = createAccessTokenManager({
      appId: config.appId,
      appSecret: config.appSecret,
      mode: config.tokenMode ?? 'normal',
      store: this.store,
      transport: this.transport,
      logger: this.logger,
      keyPrefix: 'oa',
    });
    this.tokenProvider = provider;
    this.tokenPlacement = 'query';
    this.tokenQueryKey = 'access_token';
    this.api = createGeneratedApi(this);
  }

  /* ==================== 基础接口 ==================== */

  /**
   * 获取回调 IP 列表。
   * @see https://developers.weixin.qq.com/doc/service/api/base/api_getcallbackip.html
   */
  async getCallbackIpList(): Promise<string[]> {
    return base.getCallbackIpList(this);
  }

  /**
   * 获取 API 域名 IP 列表。
   * @see https://developers.weixin.qq.com/doc/service/api/base/api_getapidomainip.html
   */
  async getApiDomainIpList(): Promise<string[]> {
    return base.getApiDomainIpList(this);
  }

  /**
   * 回调网络检测。
   * @param opts 检测类型与运营商。
   * @see https://developers.weixin.qq.com/doc/service/api/base/api_callbackcheck.html
   */
  async callbackCheck(opts?: base.CallbackCheckParams): Promise<Record<string, unknown>> {
    return base.callbackCheck(this, opts);
  }

  /**
   * 清空账号当日接口调用额度。
   * @param params 要清空额度的账号 appid。
   * @see https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/clear_quota.html
   */
  async clearQuota(params: { appid: string }): Promise<{ errcode: number; errmsg: string }> {
    return base.clearQuota(this, params);
  }

  /* ==================== 自定义菜单 ==================== */

  /**
   * 创建自定义菜单。
   * @param payload 菜单定义（{ button: [...] }）。
   * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_createcustommenu.html
   */
  async createCustomMenu(payload: Record<string, unknown>): Promise<menu.ErrResult> {
    return menu.createCustomMenu(this, payload);
  }

  /**
   * 获取当前自定义菜单信息。
   * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_getcurrentselfmenuinfo.html
   */
  async getCurrentSelfMenuInfo(): Promise<Record<string, unknown>> {
    return menu.getCurrentSelfMenuInfo(this);
  }

  /**
   * 获取自定义菜单。
   * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_getmenu.html
   */
  async getMenu(): Promise<Record<string, unknown>> {
    return menu.getMenu(this);
  }

  /**
   * 删除自定义菜单（含个性化）。
   * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_deletemenu.html
   */
  async deleteMenu(): Promise<menu.ErrResult> {
    return menu.deleteMenu(this);
  }

  /**
   * 创建个性化菜单。
   * @param payload { button: [...], matchrule: {...} }。
   * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_addconditionalmenu.html
   */
  async addConditionalMenu(
    payload: Record<string, unknown>,
  ): Promise<menu.ErrResult & { menuid?: string }> {
    return menu.addConditionalMenu(this, payload);
  }

  /**
   * 删除个性化菜单。
   * @param params menuid 必填。
   * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_deleteconditionalmenu.html
   */
  async deleteConditionalMenu(params: { menuid: string }): Promise<menu.ErrResult> {
    return menu.deleteConditionalMenu(this, params);
  }

  /**
   * 测试个性化菜单匹配。
   * @param params user_id 为 openid 或微信号。
   * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_trymatchmenu.html
   */
  async tryMatchMenu(params: { user_id: string }): Promise<Record<string, unknown>> {
    return menu.tryMatchMenu(this, params);
  }

  /* ==================== 群发 / 模板 / 订阅消息 ==================== */

  /**
   * 上传群发图文内图片，返回可外链 URL。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_uploadimage.html
   */
  async uploadImage(input: import('./types.js').UploadInput): Promise<{ url: string }> {
    return message.uploadImage(this, input);
  }

  /**
   * 删除群发消息。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_deletemassmsg.html
   */
  async deleteMassMsg(params: {
    msg_id: number | string;
    article_idx?: number;
  }): Promise<menu.ErrResult> {
    return message.deleteMassMsg(this, params);
  }

  /**
   * 获取群发速度等级。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_getspeed.html
   */
  async getSpeed(): Promise<{ speed: number }> {
    return message.getSpeed(this);
  }

  /**
   * 查询群发消息状态。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_massmsgget.html
   */
  async massMsgGet(params: { msg_id: number | string }): Promise<{
    msg_id: string | number;
    msg_status: string;
  }> {
    return message.massMsgGet(this, params);
  }

  /**
   * 按 openid 列表群发。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_masssend.html
   */
  async massSend(
    payload: Record<string, unknown>,
  ): Promise<menu.ErrResult & { msg_id?: number | string }> {
    return message.massSend(this, payload);
  }

  /**
   * 群发预览。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_preview.html
   */
  async preview(
    payload: Record<string, unknown>,
  ): Promise<menu.ErrResult & { msg_id?: number | string }> {
    return message.preview(this, payload);
  }

  /**
   * 按标签群发。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_sendall.html
   */
  async sendAll(
    payload: Record<string, unknown>,
  ): Promise<menu.ErrResult & { msg_id?: number | string }> {
    return message.sendAll(this, payload);
  }

  /**
   * 设置群发速度等级。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_setspeed.html
   */
  async setSpeed(params: { speed: 0 | 1 | 2 | 3 | 4 }): Promise<menu.ErrResult> {
    return message.setSpeed(this, params);
  }

  /**
   * 上传图文消息素材（用于群发）。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_uploadnewsmsg.html
   */
  async uploadNewsMsg(payload: { articles: Array<Record<string, unknown>> }): Promise<{
    type?: string;
    media_id: string;
    created_at?: number;
  }> {
    return message.uploadNewsMsg(this, payload);
  }

  /**
   * 发送模板消息。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_sendtemplatemessage.html
   */
  async sendTemplateMessage(
    payload: Record<string, unknown>,
  ): Promise<menu.ErrResult & { msgid?: number | string }> {
    return message.sendTemplateMessage(this, payload);
  }

  /**
   * 添加私有模板。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_addtemplate.html
   */
  async addTemplate(params: { template_id_short: string }): Promise<
    menu.ErrResult & { template_id?: string }
  > {
    return message.addTemplate(this, params);
  }

  /**
   * 查询模板消息拦截情况。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_queryblocktmplmsg.html
   */
  async queryBlockTmplMsg(params: Record<string, unknown>): Promise<Record<string, unknown>> {
    return message.queryBlockTmplMsg(this, params);
  }

  /**
   * 删除私有模板。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_deletetemplate.html
   */
  async deleteTemplate(params: { template_id: string }): Promise<menu.ErrResult> {
    return message.deleteTemplate(this, params);
  }

  /**
   * 获取全部私有模板。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_getalltemplates.html
   */
  async getAllTemplates(): Promise<{ template_list: Array<Record<string, unknown>> }> {
    return message.getAllTemplates(this);
  }

  /**
   * 获取所属行业。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_getindustry.html
   */
  async getIndustry(): Promise<{
    primary_industry: Record<string, unknown>;
    secondary_industry: Record<string, unknown>;
  }> {
    return message.getIndustry(this);
  }

  /**
   * 设置所属行业。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_setindustry.html
   */
  async setIndustry(params: {
    industry_id1: string | number;
    industry_id2: string | number;
  }): Promise<menu.ErrResult> {
    return message.setIndustry(this, params);
  }

  /**
   * 新增新版订阅个人模板。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_addwxanewtemplate.html
   */
  async addWxaNewTemplate(params: { tid: string; kidList: number[]; sceneDesc?: string }): Promise<{
    priTmplId: string;
  }> {
    return message.addWxaNewTemplate(this, params);
  }

  /**
   * 删除新版订阅个人模板。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_delwxanewtemplate.html
   */
  async delWxaNewTemplate(params: { priTmplId: string }): Promise<menu.ErrResult> {
    return message.delWxaNewTemplate(this, params);
  }

  /**
   * 获取账号所属类目。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getcategory.html
   */
  async getCategory(): Promise<Record<string, unknown>> {
    return message.getCategory(this);
  }

  /**
   * 获取公共模板关键词。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatekeywords.html
   */
  async getPubNewTemplateKeywords(params: { tid: string }): Promise<{
    count: number;
    data: Array<Record<string, unknown>>;
  }> {
    return message.getPubNewTemplateKeywords(this, params);
  }

  /**
   * 获取公共模板标题。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatetitles.html
   */
  async getPubNewTemplateTitles(params: {
    ids: string | number[];
    start?: number;
    limit?: number;
  }): Promise<{ count: number; data: Array<Record<string, unknown>> }> {
    return message.getPubNewTemplateTitles(this, params);
  }

  /**
   * 获取账号个人模板列表。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getwxapubnewtemplate.html
   */
  async getWxaPubNewTemplate(): Promise<{ data: Array<Record<string, unknown>> }> {
    return message.getWxaPubNewTemplate(this);
  }

  /**
   * 发送新版订阅消息。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_sendnewsubscribemsg.html
   */
  async sendNewSubscribeMsg(
    payload: Record<string, unknown>,
  ): Promise<menu.ErrResult & { msgid?: string | number }> {
    return message.sendNewSubscribeMsg(this, payload);
  }

  /**
   * 模板订阅（旧版）。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/subscribe/api_templatesubscribe.html
   */
  async templateSubscribe(payload: Record<string, unknown>): Promise<Record<string, unknown>> {
    return message.templateSubscribe(this, payload);
  }

  /**
   * 获取当前自动回复规则。
   * @see https://developers.weixin.qq.com/doc/service/api/notify/autoreplies/api_getcurrentautoreplyinfo.html
   */
  async getCurrentAutoReplyInfo(): Promise<Record<string, unknown>> {
    return message.getCurrentAutoReplyInfo(this);
  }

  /* ==================== 客服 ==================== */

  /**
   * 上传客服头像。
   * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_uploadkfheadimg.html
   */
  async uploadKfHeadImg(
    params: { kf_account: string } & import('./types.js').UploadInput,
  ): Promise<menu.ErrResult> {
    return customer.uploadKfHeadImg(this, params);
  }

  /**
   * 添加客服账号。
   * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_addkfaccount.html
   */
  async addKfAccount(payload: { kf_account: string; nickname: string }): Promise<menu.ErrResult> {
    return customer.addKfAccount(this, payload);
  }

  /**
   * 更新客服账号。
   * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_updatekfaccount.html
   */
  async updateKfAccount(payload: {
    kf_account: string;
    nickname: string;
  }): Promise<menu.ErrResult> {
    return customer.updateKfAccount(this, payload);
  }

  /**
   * 删除客服账号。
   * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_delkfaccount.html
   */
  async delKfAccount(params: { kf_account: string }): Promise<menu.ErrResult> {
    return customer.delKfAccount(this, params);
  }

  /**
   * 邀请绑定为客服。
   * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_invitekfworker.html
   */
  async inviteKfWorker(payload: {
    kf_account: string;
    invite_wx: string;
  }): Promise<menu.ErrResult> {
    return customer.inviteKfWorker(this, payload);
  }

  /**
   * 获取所有客服账号列表。
   * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getkflist.html
   */
  async getKfList(): Promise<{ kf_list: Array<Record<string, unknown>> }> {
    return customer.getKfList(this);
  }

  /**
   * 获取在线客服列表。
   * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getonlinekflist.html
   */
  async getOnlineKfList(): Promise<{ kf_online_list: Array<Record<string, unknown>> }> {
    return customer.getOnlineKfList(this);
  }

  /**
   * 获取客服的会话列表。
   * @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsessionlist.html
   */
  async getKfSessionList(params: { kf_account: string }): Promise<{
    sessionlist: Array<Record<string, unknown>>;
  }> {
    return customer.getKfSessionList(this, params);
  }

  /**
   * 获取用户会话状态。
   * @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsession.html
   */
  async getKfSession(params: { openid: string }): Promise<Record<string, unknown>> {
    return customer.getKfSession(this, params);
  }

  /**
   * 创建会话。
   * @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_createkfsession.html
   */
  async createKfSession(payload: { kf_account: string; openid: string }): Promise<menu.ErrResult> {
    return customer.createKfSession(this, payload);
  }

  /**
   * 关闭会话。
   * @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_closesession.html
   */
  async closeSession(payload: { kf_account: string; openid: string }): Promise<menu.ErrResult> {
    return customer.closeSession(this, payload);
  }

  /**
   * 获取待接入会话列表。
   * @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getwaitcase.html
   */
  async getWaitCase(): Promise<{ count: number; waitcaselist: Array<Record<string, unknown>> }> {
    return customer.getWaitCase(this);
  }

  /**
   * 获取客服消息记录。
   * @see https://developers.weixin.qq.com/doc/service/api/customer/message/api_getmsglist.html
   */
  async getMsgList(
    payload: customer.GetMsgListParams,
  ): Promise<{ recordlist: Array<Record<string, unknown>> }> {
    return customer.getMsgList(this, payload);
  }

  /**
   * 设置客服输入状态。
   * @see https://developers.weixin.qq.com/doc/service/api/customer/message/api_typing.html
   */
  async typing(payload: {
    touser: string;
    command: 'Typing' | 'CancelTyping';
  }): Promise<menu.ErrResult> {
    return customer.typing(this, payload);
  }

  /**
   * 发送客服消息。
   * @see https://developers.weixin.qq.com/doc/service/api/customer/message/api_sendcustommessage.html
   */
  async sendCustomMessage(payload: Record<string, unknown>): Promise<menu.ErrResult> {
    return customer.sendCustomMessage(this, payload);
  }

  /* ==================== 素材 ==================== */

  /**
   * 获取永久素材（图文返回 JSON，二进制类传 responseType:'arraybuffer' 返回 Buffer）。
   * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterial.html
   */
  async getMaterial(params: { media_id: string; responseType?: 'json' | 'arraybuffer' }): Promise<
    Record<string, unknown> | Buffer
  > {
    return material.getMaterial(this, params);
  }

  /**
   * 获取素材总数。
   * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterialcount.html
   */
  async getMaterialCount(): Promise<{
    voice_count: number;
    video_count: number;
    image_count: number;
    news_count: number;
  }> {
    return material.getMaterialCount(this);
  }

  /**
   * 批量获取素材列表。
   * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_batchgetmaterial.html
   */
  async batchGetMaterial(
    payload: material.BatchGetMaterialParams,
  ): Promise<{ total_count: number; item_count: number; item: Array<Record<string, unknown>> }> {
    return material.batchGetMaterial(this, payload);
  }

  /**
   * 上传图文消息内图片（永久素材域）。
   * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_uploadimage.html
   */
  async materialUploadImage(input: import('./types.js').UploadInput): Promise<{ url: string }> {
    return material.materialUploadImage(this, input);
  }

  /**
   * 新增其他类型永久素材。
   * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_addmaterial.html
   */
  async addMaterial(
    params: material.AddMaterialParams,
  ): Promise<{ media_id: string; url?: string }> {
    return material.addMaterial(this, params);
  }

  /**
   * 删除永久素材。
   * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_delmaterial.html
   */
  async delMaterial(params: { media_id: string }): Promise<menu.ErrResult> {
    return material.delMaterial(this, params);
  }

  /**
   * 获取临时素材（二进制 Buffer）。
   * @see https://developers.weixin.qq.com/doc/service/api/material/temporary/api_getmedia.html
   */
  async getMedia(params: { media_id: string }): Promise<Buffer> {
    return material.getMedia(this, params);
  }

  /**
   * 上传临时素材。
   * @see https://developers.weixin.qq.com/doc/service/api/material/temporary/api_uploadtempmedia.html
   */
  async uploadTempMedia(
    params: material.UploadTempMediaParams,
  ): Promise<{ type: string; media_id: string; created_at: number }> {
    return material.uploadTempMedia(this, params);
  }

  /**
   * 高清语音素材获取（二进制 Buffer）。
   * @see https://developers.weixin.qq.com/doc/service/api/material/temporary/api_gethdvoice.html
   */
  async getHdVoice(params: { media_id: string }): Promise<Buffer> {
    return material.getHdVoice(this, params);
  }

  /* ==================== 草稿箱 ==================== */

  /**
   * 草稿箱开关。
   * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_switch.html
   */
  async draftSwitch(params: { is_open: 0 | 1 }): Promise<menu.ErrResult> {
    return draftbox.draftSwitch(this, params);
  }

  /**
   * 新建草稿。
   * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_add.html
   */
  async draftAdd(payload: { articles: Array<Record<string, unknown>> }): Promise<{
    media_id: string;
  }> {
    return draftbox.draftAdd(this, payload);
  }

  /**
   * 获取草稿。
   * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_getdraft.html
   */
  async getDraft(params: { media_id: string }): Promise<Record<string, unknown>> {
    return draftbox.getDraft(this, params);
  }

  /**
   * 删除草稿。
   * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_delete.html
   */
  async draftDelete(params: { media_id: string }): Promise<menu.ErrResult> {
    return draftbox.draftDelete(this, params);
  }

  /**
   * 修改草稿。
   * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_update.html
   */
  async draftUpdate(
    payload: { media_id: string; index?: number; articles?: Record<string, unknown> } & Record<
      string,
      unknown
    >,
  ): Promise<menu.ErrResult> {
    return draftbox.draftUpdate(this, payload);
  }

  /**
   * 批量获取草稿。
   * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_batchget.html
   */
  async draftBatchGet(params: { offset: number; count: number; no_content?: 0 | 1 }): Promise<{
    total_count: number;
    item_count: number;
    item: Array<Record<string, unknown>>;
  }> {
    return draftbox.draftBatchGet(this, params);
  }

  /**
   * 获取草稿总数。
   * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_count.html
   */
  async draftCount(): Promise<{ total_count: number }> {
    return draftbox.draftCount(this);
  }

  /**
   * 获取商品卡片信息。
   * @see https://developers.weixin.qq.com/doc/service/api/draftbox/shop/api_ecsgetproductcardinfo.html
   */
  async ecsGetProductCardInfo(params: Record<string, unknown>): Promise<Record<string, unknown>> {
    return draftbox.ecsGetProductCardInfo(this, params);
  }

  /* ==================== 留言 / 发布 ==================== */

  /**
   * 开启评论。
   * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_openarticlecomment.html
   */
  async openArticleComment(params: {
    msg_data_id: number | string;
    index?: number;
  }): Promise<menu.ErrResult> {
    return leaving.openArticleComment(this, params);
  }

  /**
   * 拉取评论列表。
   * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_listcomment.html
   */
  async listComment(
    params: leaving.ListCommentParams,
  ): Promise<{ total: number; comment: Array<Record<string, unknown>> }> {
    return leaving.listComment(this, params);
  }

  /**
   * 关闭评论。
   * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_closecomment.html
   */
  async closeComment(params: {
    msg_data_id: number | string;
    index?: number;
  }): Promise<menu.ErrResult> {
    return leaving.closeComment(this, params);
  }

  /**
   * 标记精选。
   * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_electcomment.html
   */
  async electComment(params: leaving.CommentOpParams): Promise<menu.ErrResult> {
    return leaving.electComment(this, params);
  }

  /**
   * 取消精选。
   * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_unelectcomment.html
   */
  async unelectComment(params: leaving.CommentOpParams): Promise<menu.ErrResult> {
    return leaving.unelectComment(this, params);
  }

  /**
   * 删除评论。
   * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_delcomment.html
   */
  async delComment(params: leaving.CommentOpParams): Promise<menu.ErrResult> {
    return leaving.delComment(this, params);
  }

  /**
   * 回复评论。
   * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_replycomment.html
   */
  async replyComment(
    params: leaving.CommentOpParams & { content: string },
  ): Promise<menu.ErrResult> {
    return leaving.replyComment(this, params);
  }

  /**
   * 删除回复。
   * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_delreplycomment.html
   */
  async delReplyComment(params: leaving.CommentOpParams): Promise<menu.ErrResult> {
    return leaving.delReplyComment(this, params);
  }

  /**
   * 提交发布。
   * @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_submit.html
   */
  async freePublishSubmit(params: { media_id: string }): Promise<
    menu.ErrResult & { publish_id?: string }
  > {
    return leaving.freePublishSubmit(this, params);
  }

  /**
   * 查询发布结果。
   * @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_get.html
   */
  async freePublishGet(params: { publish_id?: string; article_id?: string }): Promise<
    Record<string, unknown>
  > {
    return leaving.freePublishGet(this, params);
  }

  /**
   * 获取已发布列表。
   * @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_batchget.html
   */
  async freePublishBatchGet(params: {
    offset: number;
    count: number;
    no_content?: 0 | 1;
  }): Promise<{ total_count: number; item_count: number; item: Array<Record<string, unknown>> }> {
    return leaving.freePublishBatchGet(this, params);
  }

  /**
   * 通过 article_id 获取已发布素材。
   * @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublishgetarticle.html
   */
  async freePublishGetArticle(params: { article_id: string }): Promise<Record<string, unknown>> {
    return leaving.freePublishGetArticle(this, params);
  }

  /**
   * 删除已发布素材。
   * @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublishdelete.html
   */
  async freePublishDelete(params: { article_id: string }): Promise<menu.ErrResult> {
    return leaving.freePublishDelete(this, params);
  }

  /* ==================== 用户管理 ==================== */

  /**
   * 获取标签下粉丝列表。
   * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagfans.html
   */
  async getTagFans(params: { tagid: number; next_openid?: string }): Promise<{
    count: number;
    data?: { openid: string[] };
    next_openid?: string;
  }> {
    return user.getTagFans(this, params);
  }

  /**
   * 获取已创建的标签。
   * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettags.html
   */
  async getTags(): Promise<{ tags: Array<{ id: number; name: string; count: number }> }> {
    return user.getTags(this);
  }

  /**
   * 创建标签。
   * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_createtag.html
   */
  async createTag(params: { name: string }): Promise<{ tag: { id: number; name: string } }> {
    return user.createTag(this, params);
  }

  /**
   * 编辑标签。
   * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_updatetag.html
   */
  async updateTag(params: { id: number; name: string }): Promise<menu.ErrResult> {
    return user.updateTag(this, params);
  }

  /**
   * 删除标签。
   * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_deletetag.html
   */
  async deleteTag(params: { id: number }): Promise<menu.ErrResult> {
    return user.deleteTag(this, params);
  }

  /**
   * 批量为用户打标签。
   * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchtagging.html
   */
  async batchTagging(payload: { openid_list: string[]; tagid: number }): Promise<menu.ErrResult> {
    return user.batchTagging(this, payload);
  }

  /**
   * 批量为用户取消标签。
   * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchuntagging.html
   */
  async batchUntagging(payload: { openid_list: string[]; tagid: number }): Promise<menu.ErrResult> {
    return user.batchUntagging(this, payload);
  }

  /**
   * 获取用户身上的标签列表。
   * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagidlist.html
   */
  async getTagIdList(params: { openid: string }): Promise<{ tagid_list: number[] }> {
    return user.getTagIdList(this, params);
  }

  /**
   * 获取黑名单列表。
   * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getblacklist.html
   */
  async getBlacklist(params?: { begin_openid?: string }): Promise<{
    total: number;
    count: number;
    data?: { openid: string[] };
    next_openid?: string;
  }> {
    return user.getBlacklist(this, params);
  }

  /**
   * 批量拉黑用户。
   * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchblacklist.html
   */
  async batchBlacklist(payload: { openid_list: string[] }): Promise<menu.ErrResult> {
    return user.batchBlacklist(this, payload);
  }

  /**
   * 批量取消拉黑。
   * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchunblacklist.html
   */
  async batchUnblacklist(payload: { openid_list: string[] }): Promise<menu.ErrResult> {
    return user.batchUnblacklist(this, payload);
  }

  /**
   * 获取用户基本信息。
   * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_userinfo.html
   */
  async getUserInfo(params: { openid: string; lang?: import('./types.js').WxLang }): Promise<
    Record<string, unknown>
  > {
    return user.getUserInfo(this, params);
  }

  /**
   * 批量获取用户基本信息。
   * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchuserinfo.html
   */
  async batchUserInfo(payload: {
    user_list: Array<{ openid: string; lang?: import('./types.js').WxLang }>;
  }): Promise<{ user_info_list: Array<Record<string, unknown>> }> {
    return user.batchUserInfo(this, payload);
  }

  /**
   * 获取公众号粉丝列表。
   * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getfans.html
   */
  async getFans(params?: { next_openid?: string }): Promise<{
    total: number;
    count: number;
    data?: { openid: string[] };
    next_openid?: string;
  }> {
    return user.getFans(this, params);
  }

  /**
   * 设置用户备注名。
   * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_updateremark.html
   */
  async updateRemark(payload: { openid: string; remark: string }): Promise<menu.ErrResult> {
    return user.updateRemark(this, payload);
  }

  /* ==================== 二维码 / 短链 ==================== */

  /**
   * 获取二维码跳转规则。
   * @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpget.html
   */
  async qrcodeJumpGet(): Promise<Record<string, unknown>> {
    return qrcode.qrcodeJumpGet(this);
  }

  /**
   * 增加二维码跳转规则。
   * @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpadd.html
   */
  async qrcodeJumpAdd(payload: qrcode.QrcodeJumpAddParams): Promise<menu.ErrResult> {
    return qrcode.qrcodeJumpAdd(this, payload);
  }

  /**
   * 发布二维码跳转规则。
   * @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumppublish.html
   */
  async qrcodeJumpPublish(params: { prefix: string }): Promise<menu.ErrResult> {
    return qrcode.qrcodeJumpPublish(this, params);
  }

  /**
   * 删除二维码跳转规则。
   * @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpdelete.html
   */
  async qrcodeJumpDelete(params: { prefix: string }): Promise<menu.ErrResult> {
    return qrcode.qrcodeJumpDelete(this, params);
  }

  /**
   * 创建二维码（临时/永久）。
   * @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodes/api_createqrcode.html
   */
  async createQrcode(
    payload: qrcode.CreateQrcodeParams,
  ): Promise<{ ticket: string; expire_seconds?: number; url: string }> {
    return qrcode.createQrcode(this, payload);
  }

  /**
   * 生成短 Key。
   * @see https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_genshortkey.html
   */
  async genShortKey(payload: { long_url: string; expire_seconds?: number }): Promise<{
    short_key: string;
    expire_seconds?: number;
  }> {
    return qrcode.genShortKey(this, payload);
  }

  /**
   * 通过短 Key 拉取原始信息。
   * @see https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_fetchshorten.html
   */
  async fetchShorten(params: { short_key: string }): Promise<{
    long_url?: string;
    status?: number;
  }> {
    return qrcode.fetchShorten(this, params);
  }

  /* ==================== 数据统计 ==================== */

  /**
   * 获取用户增减数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusersummary.html
   */
  async getUserSummary(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getUserSummary(this, params);
  }

  /**
   * 获取累计用户数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusercumulate.html
   */
  async getUserCumulate(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getUserCumulate(this, params);
  }

  /**
   * 获取图文群发每日数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticlesummary.html
   */
  async getArticleSummary(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getArticleSummary(this, params);
  }

  /**
   * 获取图文统计分时数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserreadhour.html
   */
  async getUserReadHour(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getUserReadHour(this, params);
  }

  /**
   * 获取图文分享转发分时数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusersharehour.html
   */
  async getUserShareHour(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getUserShareHour(this, params);
  }

  /**
   * 获取图文统计数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserread.html
   */
  async getUserRead(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getUserRead(this, params);
  }

  /**
   * 获取图文群发总数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticletotal.html
   */
  async getArticleTotal(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getArticleTotal(this, params);
  }

  /**
   * 获取图文分享转发数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusershare.html
   */
  async getUserShare(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getUserShare(this, params);
  }

  /**
   * 获取消息发送概况数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsg.html
   */
  async getUpstreamMsg(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getUpstreamMsg(this, params);
  }

  /**
   * 获取消息发送月数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgmonth.html
   */
  async getUpstreamMsgMonth(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getUpstreamMsgMonth(this, params);
  }

  /**
   * 获取消息发送分布周数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistweek.html
   */
  async getUpstreamMsgDistWeek(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getUpstreamMsgDistWeek(this, params);
  }

  /**
   * 获取消息发送分布月数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistmonth.html
   */
  async getUpstreamMsgDistMonth(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getUpstreamMsgDistMonth(this, params);
  }

  /**
   * 获取消息发送分时数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsghour.html
   */
  async getUpstreamMsgHour(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getUpstreamMsgHour(this, params);
  }

  /**
   * 获取消息发送周数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgweek.html
   */
  async getUpstreamMsgWeek(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getUpstreamMsgWeek(this, params);
  }

  /**
   * 获取消息发送分布数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdist.html
   */
  async getUpstreamMsgDist(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getUpstreamMsgDist(this, params);
  }

  /**
   * 获取接口分析数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummary.html
   */
  async getInterfaceSummary(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getInterfaceSummary(this, params);
  }

  /**
   * 获取接口分析分时数据。
   * @see https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummaryhour.html
   */
  async getInterfaceSummaryHour(params: wedata.DateRange): Promise<Record<string, unknown>> {
    return wedata.getInterfaceSummaryHour(this, params);
  }

  /* ==================== 网页授权 / JSSDK / AI / OCR / 图像 ==================== */

  /**
   * 通过 code 换取网页授权 access_token（不需 access_token）。
   * @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsaccesstoken.html
   */
  async snsAccessToken(params: {
    appid: string;
    secret: string;
    code: string;
    grant_type?: 'authorization_code';
  }): Promise<Record<string, unknown>> {
    return other.snsAccessToken(this, params);
  }

  /**
   * 检验授权凭证有效性。
   * @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsauth.html
   */
  async snsAuth(params: { access_token: string; openid: string }): Promise<menu.ErrResult> {
    return other.snsAuth(this, params);
  }

  /**
   * 拉取用户信息。
   * @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsuserinfo.html
   */
  async snsUserInfo(params: {
    access_token: string;
    openid: string;
    lang?: import('./types.js').WxLang;
  }): Promise<Record<string, unknown>> {
    return other.snsUserInfo(this, params);
  }

  /**
   * 刷新网页授权 access_token。
   * @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsrefreshtoken.html
   */
  async snsRefreshToken(params: {
    appid: string;
    refresh_token: string;
    grant_type?: 'refresh_token';
  }): Promise<Record<string, unknown>> {
    return other.snsRefreshToken(this, params);
  }

  /**
   * 获取 API ticket。
   * @see https://developers.weixin.qq.com/doc/service/api/webdev/jssdk/api_getticket.html
   */
  async getTicket(params: { type: 'jsapi' | 'wx_card' }): Promise<
    menu.ErrResult & { ticket: string; expires_in: number }
  > {
    return other.getTicket(this, params);
  }

  /**
   * 翻译内容。
   * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_translatecontent.html
   */
  async translateContent(payload: { lfrom: string; lto: string; content: string }): Promise<
    Record<string, unknown>
  > {
    return other.translateContent(this, payload);
  }

  /**
   * 提交语音用于识别。
   * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_addvoicetorecofortext.html
   */
  async addVoiceToRecoForText(
    payload: other.AddVoiceToRecoParams,
  ): Promise<Record<string, unknown>> {
    return other.addVoiceToRecoForText(this, payload);
  }

  /**
   * 查询语音识别结果。
   * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_queryrecoresultfortext.html
   */
  async queryRecoResultForText(payload: { voice_id: string; lang: string }): Promise<
    Record<string, unknown>
  > {
    return other.queryRecoResultForText(this, payload);
  }

  /**
   * 菜单 OCR。
   * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_menuocr.html
   */
  async menuOcr(payload: other.ImgInput): Promise<Record<string, unknown>> {
    return other.menuOcr(this, payload);
  }

  /**
   * 通用印刷体 OCR。
   * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_commocr.html
   */
  async commOcr(payload: other.ImgInput): Promise<Record<string, unknown>> {
    return other.commOcr(this, payload);
  }

  /**
   * 行驶证 OCR。
   * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivingocr.html
   */
  async drivingOcr(payload: other.ImgInput): Promise<Record<string, unknown>> {
    return other.drivingOcr(this, payload);
  }

  /**
   * 银行卡 OCR。
   * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bankcardocr.html
   */
  async bankcardOcr(payload: other.ImgInput): Promise<Record<string, unknown>> {
    return other.bankcardOcr(this, payload);
  }

  /**
   * 营业执照 OCR。
   * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bizlicenseocr.html
   */
  async bizLicenseOcr(payload: other.ImgInput): Promise<Record<string, unknown>> {
    return other.bizLicenseOcr(this, payload);
  }

  /**
   * 驾驶证 OCR。
   * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivinglicenseocr.html
   */
  async drivingLicenseOcr(payload: other.ImgInput): Promise<Record<string, unknown>> {
    return other.drivingLicenseOcr(this, payload);
  }

  /**
   * 身份证 OCR。
   * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_idcardocr.html
   */
  async idcardOcr(payload: other.ImgInput): Promise<Record<string, unknown>> {
    return other.idcardOcr(this, payload);
  }

  /**
   * 智能裁剪。
   * @see https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgaicrop.html
   */
  async imgAiCrop(payload: other.ImgInput): Promise<Record<string, unknown>> {
    return other.imgAiCrop(this, payload);
  }

  /**
   * 二维码/条码识别。
   * @see https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgqrcode.html
   */
  async imgQrcode(payload: other.ImgInput): Promise<Record<string, unknown>> {
    return other.imgQrcode(this, payload);
  }
}

/**
 * 创建公众号客户端。
 * @param config OaClient 配置（appId、appSecret 必填）。
 * @returns OaClient 实例。
 */
export function createOaClient(config: OaClientConfig): OaClient {
  return new OaClient(config);
}
