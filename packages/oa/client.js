import { createHttpClient } from './request/http.js';
import { DOMAINS } from './request/domains.js';
import { withRetry } from './request/retry.js';
import { getAccessToken } from './auth/token.js';
import { InMemoryTokenStore } from './auth/tokenStore.js';
import {
    verifySignature,
    verifyMsgSignature,
    decryptMessage as _decryptMessage,
    decodeAESKey,
} from './lib/crypto.js';
import { buildWechatXml, parseXml } from './lib/xml.js';
import { WxApiError } from './lib/errors.js';
import {
    getCallbackIpList as _getCallbackIpList,
    getApiDomainIpList as _getApiDomainIpList,
    callbackCheck as _callbackCheck,
    clearQuota as _clearQuota,
} from './request/actions/base.js';
import {
    createCustomMenu as _createCustomMenu,
    getCurrentSelfMenuInfo as _getCurrentSelfMenuInfo,
    getMenu as _getMenu,
    deleteMenu as _deleteMenu,
    addConditionalMenu as _addConditionalMenu,
    deleteConditionalMenu as _deleteConditionalMenu,
    tryMatchMenu as _tryMatchMenu,
} from './request/actions/menu.js';
import {
    uploadImage as _uploadImage,
    deleteMassMsg as _deleteMassMsg,
    getSpeed as _getSpeed,
    massMsgGet as _massMsgGet,
    massSend as _massSend,
    preview as _preview,
    sendAll as _sendAll,
    setSpeed as _setSpeed,
    uploadNewsMsg as _uploadNewsMsg,
    sendTemplateMessage as _sendTemplateMessage,
    addTemplate as _addTemplate,
    queryBlockTmplMsg as _queryBlockTmplMsg,
    deleteTemplate as _deleteTemplate,
    getAllTemplates as _getAllTemplates,
    getIndustry as _getIndustry,
    setIndustry as _setIndustry,
    addWxaNewTemplate as _addWxaNewTemplate,
    delWxaNewTemplate as _delWxaNewTemplate,
    getCategory as _getCategory,
    getPubNewTemplateKeywords as _getPubNewTemplateKeywords,
    getPubNewTemplateTitles as _getPubNewTemplateTitles,
    getWxaPubNewTemplate as _getWxaPubNewTemplate,
    sendNewSubscribeMsg as _sendNewSubscribeMsg,
    templateSubscribe as _templateSubscribe,
    getCurrentAutoReplyInfo as _getCurrentAutoReplyInfo,
} from './request/actions/message.js';
import {
    uploadKfHeadImg as _uploadKfHeadImg,
    delKfAccount as _delKfAccount,
    inviteKfWorker as _inviteKfWorker,
    getKfList as _getKfList,
    addKfAccount as _addKfAccount,
    getOnlineKfList as _getOnlineKfList,
    updateKfAccount as _updateKfAccount,
    getKfSessionList as _getKfSessionList,
    closeSession as _closeSession,
    createKfSession as _createKfSession,
    getKfSession as _getKfSession,
    getWaitCase as _getWaitCase,
    getMsgList as _getMsgList,
    typing as _typing,
    sendCustomMessage as _sendCustomMessage,
} from './request/actions/customer.js';
import {
    getMaterial as _getMaterial,
    getMaterialCount as _getMaterialCount,
    batchGetMaterial as _batchGetMaterial,
    materialUploadImage as _materialUploadImage,
    addMaterial as _addMaterial,
    delMaterial as _delMaterial,
    getMedia as _getMedia,
    uploadTempMedia as _uploadTempMedia,
    getHdVoice as _getHdVoice,
} from './request/actions/material.js';
import {
    draftSwitch as _draftSwitch,
    draftUpdate as _draftUpdate,
    draftBatchGet as _draftBatchGet,
    draftAdd as _draftAdd,
    draftCount as _draftCount,
    draftDelete as _draftDelete,
    getDraft as _getDraft,
    ecsGetProductCardInfo as _ecsGetProductCardInfo,
} from './request/actions/draftbox.js';
import {
    openArticleComment as _openArticleComment,
    listComment as _listComment,
    closeComment as _closeComment,
    electComment as _electComment,
    unelectComment as _unelectComment,
    delComment as _delComment,
    replyComment as _replyComment,
    delReplyComment as _delReplyComment,
    freePublishBatchGet as _freePublishBatchGet,
    freePublishDelete as _freePublishDelete,
    freePublishGet as _freePublishGet,
    freePublishGetArticle as _freePublishGetArticle,
    freePublishSubmit as _freePublishSubmit,
} from './request/actions/leaving.js';
import {
    getTagFans as _getTagFans,
    getTags as _getTags,
    createTag as _createTag,
    updateTag as _updateTag,
    deleteTag as _deleteTag,
    batchUntagging as _batchUntagging,
    batchTagging as _batchTagging,
    getTagIdList as _getTagIdList,
    batchUnblacklist as _batchUnblacklist,
    getBlacklist as _getBlacklist,
    getUserInfo as _getUserInfo,
    batchUserInfo as _batchUserInfo,
    getFans as _getFans,
    batchBlacklist as _batchBlacklist,
    updateRemark as _updateRemark,
} from './request/actions/user.js';
import {
    qrcodeJumpGet as _qrcodeJumpGet,
    qrcodeJumpAdd as _qrcodeJumpAdd,
    qrcodeJumpPublish as _qrcodeJumpPublish,
    qrcodeJumpDelete as _qrcodeJumpDelete,
    createQrcode as _createQrcode,
    genShortKey as _genShortKey,
    fetchShorten as _fetchShorten,
} from './request/actions/qrcode.js';
import {
    getUserSummary as _getUserSummary,
    getUserCumulate as _getUserCumulate,
    getArticleSummary as _getArticleSummary,
    getUserReadHour as _getUserReadHour,
    getUserShareHour as _getUserShareHour,
    getUserRead as _getUserRead,
    getArticleTotal as _getArticleTotal,
    getUserShare as _getUserShare,
    getUpstreamMsg as _getUpstreamMsg,
    getUpstreamMsgMonth as _getUpstreamMsgMonth,
    getUpstreamMsgDistWeek as _getUpstreamMsgDistWeek,
    getUpstreamMsgDistMonth as _getUpstreamMsgDistMonth,
    getUpstreamMsgHour as _getUpstreamMsgHour,
    getUpstreamMsgWeek as _getUpstreamMsgWeek,
    getUpstreamMsgDist as _getUpstreamMsgDist,
    getInterfaceSummary as _getInterfaceSummary,
    getInterfaceSummaryHour as _getInterfaceSummaryHour,
} from './request/actions/wedata.js';
import {
    snsAccessToken as _snsAccessToken,
    snsAuth as _snsAuth,
    snsUserInfo as _snsUserInfo,
    snsRefreshToken as _snsRefreshToken,
    getTicket as _getTicket,
    translateContent as _translateContent,
    addVoiceToRecoForText as _addVoiceToRecoForText,
    queryRecoResultForText as _queryRecoResultForText,
    menuOcr as _menuOcr,
    commOcr as _commOcr,
    drivingOcr as _drivingOcr,
    bankcardOcr as _bankcardOcr,
    bizLicenseOcr as _bizLicenseOcr,
    drivingLicenseOcr as _drivingLicenseOcr,
    idcardOcr as _idcardOcr,
    imgAiCrop as _imgAiCrop,
    imgQrcode as _imgQrcode,
} from './request/actions/other.js';


export class SaClient {
    /**
     * @param {object} options
     * @param {string} options.appId
     * @param {string} options.appSecret
     * @param {('auto'|'disaster'|'shanghai'|'sh'|'shenzhen'|'sz'|'hongkong'|'hk')} [options.domain='auto']
     * @param {number} [options.timeoutMs=15000]
     * @param {{retries?:number, delayMs?:number}} [options.retry]
     * @param {('normal'|'stable')} [options.tokenMode='normal']
     * @param {('query'|'header')} [options.tokenPlacement='query']
     * @param {string} [options.tokenKey='access_token']
     * @param {InMemoryTokenStore} [options.store]
     * @param {{checkCallbackIp?: boolean, ipCacheTtlMs?: number}} [options.middleware]
     */
    constructor(options = {}) {
        const {
            appId,
            appSecret,
            domain = 'auto',
            timeoutMs = 15000,
            retry = { retries: 2, delayMs: 3000 },
            tokenMode = 'normal',
            tokenPlacement = 'query',
            tokenKey = 'access_token',
            store = new InMemoryTokenStore(),
            middleware = {},
        } = options;

        if (!appId || !appSecret) {
            throw new Error('[SaClient] appId and appSecret are required');
        }

        this.appId = appId;
        this.appSecret = appSecret;
        this.tokenMode = tokenMode;
        this.tokenPlacement = tokenPlacement;
        this.tokenKey = tokenKey;
        this.store = store;

        const baseURL = DOMAINS[domain] || DOMAINS.auto;
        this.http = createHttpClient({ baseURL, timeout: timeoutMs });
        this.retry = { retries: retry.retries ?? 2, delayMs: retry.delayMs ?? 3000 };

        this._tokenFlight = null;
        this._tokenKey = `${this.tokenMode}:wx:sa:access_token:${this.appId}`;

        this.middleware = {
            checkCallbackIp: middleware.checkCallbackIp ?? false,
            ipCacheTtlMs: middleware.ipCacheTtlMs ?? 10 * 60 * 1000,
        };
    }

    async getAccessToken() {
        if (this._tokenFlight) return this._tokenFlight;
        this._tokenFlight = getAccessToken({
            appId: this.appId,
            appSecret: this.appSecret,
            mode: this.tokenMode,
            store: this.store,
            cacheKey: this._tokenKey,
            http: this.http,
        }).finally(() => (this._tokenFlight = null));
        return this._tokenFlight;
    }

    async request(method, url, { params = {}, data, headers = {} } = {}) {
        const perform = async () => {
            const token = await this.getAccessToken();
            let finalParams = { ...params };
            let finalHeaders = { ...headers };

            if (this.tokenPlacement === 'query') {
                finalParams[this.tokenKey] = token;
            } else {
                finalHeaders.Authorization = `Bearer ${token}`;
            }

            const resp = await this.http.request({
                method,
                url,
                params: finalParams,
                data,
                headers: finalHeaders,
            });
            const body = resp.data;

            if (body && typeof body === 'object' && body.errcode && body.errcode !== 0) {
                if (body.errcode === -1) {
                    throw new WxApiError('system busy', body.errcode, body);
                }
                throw new WxApiError(body.errmsg || 'wx api error', body.errcode, body);
            }
            return body;
        };

        return withRetry(perform, {
            retries: this.retry.retries,
            delayMs: this.retry.delayMs,
            shouldRetry: (err) => {
                if (err && err.code === -1) return true;
                return err?.isRetryable === true;
            },
        });
    }

    /**
     * 获取回调 IP 列表。
     * @returns {Promise<string[]>}
     * @see https://developers.weixin.qq.com/doc/service/api/base/api_getcallbackip.html
     */
    async getCallbackIpList() {
        return _getCallbackIpList(this);
    }

    /**
     * 获取 API 域名 IP 列表。
     * @returns {Promise<string[]>}
     * @see https://developers.weixin.qq.com/doc/service/api/base/api_getapidomainip.html
     */
    async getApiDomainIpList() {
        return _getApiDomainIpList(this);
    }

    /**
     * 回调网络检测。
     * @param {{action?: 'all'|'dns'|'ping', check_operator?: 'DEFAULT'|'CT'|'CU'|'CM'}} [opts]
     * @returns {Promise<Object>}
     * @see https://developers.weixin.qq.com/doc/service/api/base/api_callbackcheck.html
     */
    async callbackCheck(opts) {
        return _callbackCheck(this, opts);
    }

    /**
     * 清空账号当日接口调用额度。
     * @param {{appid: string}} params - 要清空额度的账号 appid
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/clear_quota.html
     */
    async clearQuota(params) {
        return _clearQuota(this, params);
    }

    /**
     * 创建自定义菜单。
     * @param {Object} payload - 菜单定义（{ button: [...] }）
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_createcustommenu.html
     */
    async createCustomMenu(payload) {
        return _createCustomMenu(this, payload);
    }

    /**
     * 获取当前自定义菜单信息。
     * @returns {Promise<Object>}
     * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_getcurrentselfmenuinfo.html
     */
    async getCurrentSelfMenuInfo() {
        return _getCurrentSelfMenuInfo(this);
    }

    /**
     * 获取自定义菜单。
     * @returns {Promise<Object>}
     * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_getmenu.html
     */
    async getMenu() {
        return _getMenu(this);
    }

    /**
     * 删除自定义菜单（含个性化）。
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_deletemenu.html
     */
    async deleteMenu() {
        return _deleteMenu(this);
    }

    /**
     * 创建个性化菜单。
     * @param {Object} payload - { button: [...], matchrule: {...} }
     * @returns {Promise<{errcode:number, errmsg:string, menuid?:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_addconditionalmenu.html
     */
    async addConditionalMenu(payload) {
        return _addConditionalMenu(this, payload);
    }

    /**
     * 删除个性化菜单。
     * @param {{menuid: string}} params - menuid 必填
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_deleteconditionalmenu.html
     */
    async deleteConditionalMenu(params) {
        return _deleteConditionalMenu(this, params);
    }

    /**
     * 测试个性化菜单匹配。
     * @param {{user_id: string}} params - user\_id 为 openid 或微信号
     * @returns {Promise<Object>}
     * @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_trymatchmenu.html
     */
    async tryMatchMenu(params) {
        return _tryMatchMenu(this, params);
    }

    /**
     * uploadImage - 上传群发图文内图片，返回可外链 URL。
     * @param {{filePath?: string, file?: Buffer|import('stream').Readable, filename?: string, contentType?: string}} input
     * @returns {Promise<{url:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_uploadimage.html
     */
    async uploadImage(input) {
        return _uploadImage(this, input);
    }

    /**
     * deleteMassMsg - 删除群发消息。
     * @param {{msg_id:number|string, article_idx?:number}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_deletemassmsg.html
     */
    async deleteMassMsg(params) {
        return _deleteMassMsg(this, params);
    }

    /**
     * getSpeed - 获取群发速度等级。
     * @returns {Promise<{speed:number}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_getspeed.html
     */
    async getSpeed() {
        return _getSpeed(this);
    }

    /**
     * massMsgGet - 查询群发消息状态。
     * @param {{msg_id:number|string}} params
     * @returns {Promise<{msg_id:string|number, msg_status:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_massmsgget.html
     */
    async massMsgGet(params) {
        return _massMsgGet(this, params);
    }

    /**
     * massSend - 按 openid 列表群发。
     * @param {Object} payload
     * @returns {Promise<{errcode:number, errmsg:string, msg_id?:number|string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_masssend.html
     */
    async massSend(payload) {
        return _massSend(this, payload);
    }

    /**
     * preview - 群发预览。
     * @param {Object} payload
     * @returns {Promise<{errcode:number, errmsg:string, msg_id?:number|string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_preview.html
     */
    async preview(payload) {
        return _preview(this, payload);
    }

    /**
     * sendAll - 按标签群发。
     * @param {Object} payload
     * @returns {Promise<{errcode:number, errmsg:string, msg_id?:number|string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_sendall.html
     */
    async sendAll(payload) {
        return _sendAll(this, payload);
    }

    /**
     * setSpeed - 设置群发速度等级。
     * @param {{speed:0|1|2|3|4}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_setspeed.html
     */
    async setSpeed(params) {
        return _setSpeed(this, params);
    }

    /**
     * uploadNewsMsg - 上传图文消息素材（用于群发）。
     * @param {{articles: Array<Object>}} payload
     * @returns {Promise<{type?:string, media_id:string, created_at?:number}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_uploadnewsmsg.html
     */
    async uploadNewsMsg(payload) {
        return _uploadNewsMsg(this, payload);
    }

    /**
     * sendTemplateMessage - 发送模板消息。
     * @param {Object} payload
     * @returns {Promise<{errcode:number, errmsg:string, msgid?:number|string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_sendtemplatemessage.html
     */
    async sendTemplateMessage(payload) {
        return _sendTemplateMessage(this, payload);
    }

    /**
     * addTemplate - 添加私有模板。
     * @param {{template_id_short:string}} params
     * @returns {Promise<{errcode:number, errmsg:string, template_id?:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_addtemplate.html
     */
    async addTemplate(params) {
        return _addTemplate(this, params);
    }

    /**
     * queryBlockTmplMsg - 查询模板消息拦截情况。
     * @param {Object} params
     * @returns {Promise<Object>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_queryblocktmplmsg.html
     */
    async queryBlockTmplMsg(params) {
        return _queryBlockTmplMsg(this, params);
    }

    /**
     * deleteTemplate - 删除私有模板。
     * @param {{template_id:string}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_deletetemplate.html
     */
    async deleteTemplate(params) {
        return _deleteTemplate(this, params);
    }

    /**
     * getAllTemplates - 获取全部私有模板。
     * @returns {Promise<{template_list:Array<Object>}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_getalltemplates.html
     */
    async getAllTemplates() {
        return _getAllTemplates(this);
    }

    /**
     * getIndustry - 获取所属行业。
     * @returns {Promise<{primary_industry:Object, secondary_industry:Object}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_getindustry.html
     */
    async getIndustry() {
        return _getIndustry(this);
    }

    /**
     * setIndustry - 设置所属行业。
     * @param {{industry_id1:string|number, industry_id2:string|number}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_setindustry.html
     */
    async setIndustry(params) {
        return _setIndustry(this, params);
    }

    /**
     * addWxaNewTemplate - 新增新版订阅个人模板。
     * @param {{tid:string, kidList:number[], sceneDesc?:string}} params
     * @returns {Promise<{priTmplId:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_addwxanewtemplate.html
     */
    async addWxaNewTemplate(params) {
        return _addWxaNewTemplate(this, params);
    }

    /**
     * delWxaNewTemplate - 删除新版订阅个人模板。
     * @param {{priTmplId:string}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_delwxanewtemplate.html
     */
    async delWxaNewTemplate(params) {
        return _delWxaNewTemplate(this, params);
    }

    /**
     * getCategory - 获取账号所属类目。
     * @returns {Promise<Object>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getcategory.html
     */
    async getCategory() {
        return _getCategory(this);
    }

    /**
     * getPubNewTemplateKeywords - 获取公共模板关键词。
     * @param {{tid:string}} params
     * @returns {Promise<{count:number, data:Array<Object>}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatekeywords.html
     */
    async getPubNewTemplateKeywords(params) {
        return _getPubNewTemplateKeywords(this, params);
    }

    /**
     * getPubNewTemplateTitles - 获取公共模板标题。
     * @param {{ids:string|number[], start?:number, limit?:number}} params
     * @returns {Promise<{count:number, data:Array<Object>}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatetitles.html
     */
    async getPubNewTemplateTitles(params) {
        return _getPubNewTemplateTitles(this, params);
    }

    /**
     * getWxaPubNewTemplate - 获取账号个人模板列表。
     * @returns {Promise<{data:Array<Object>}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getwxapubnewtemplate.html
     */
    async getWxaPubNewTemplate() {
        return _getWxaPubNewTemplate(this);
    }

    /**
     * sendNewSubscribeMsg - 发送新版订阅消息。
     * @param {Object} payload
     * @returns {Promise<{errcode:number, errmsg:string, msgid?:string|number}>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_sendnewsubscribemsg.html
     */
    async sendNewSubscribeMsg(payload) {
        return _sendNewSubscribeMsg(this, payload);
    }

    /**
     * templateSubscribe - 模板订阅（旧版）。
     * @param {Object} payload
     * @returns {Promise<Object>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/subscribe/api_templatesubscribe.html
     */
    async templateSubscribe(payload) {
        return _templateSubscribe(this, payload);
    }

    /**
     * getCurrentAutoReplyInfo - 获取当前自动回复规则。
     * @returns {Promise<Object>}
     * @see https://developers.weixin.qq.com/doc/service/api/notify/autoreplies/api_getcurrentautoreplyinfo.html
     */
    async getCurrentAutoReplyInfo() {
        return _getCurrentAutoReplyInfo(this);
    }

    /**
     * uploadKfHeadImg - 上传客服头像。
     * @param {{kf_account:string} & ({filePath:string} | {file:Buffer|import('stream').Readable, filename?:string, contentType?:string})} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_uploadkfheadimg.html
     */
    async uploadKfHeadImg(params) {
        return _uploadKfHeadImg(this, params);
    }

    /**
     * addKfAccount - 添加客服账号。
     * @param {{kf_account:string, nickname:string}} payload
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_addkfaccount.html
     */
    async addKfAccount(payload) {
        return _addKfAccount(this, payload);
    }

    /**
     * updateKfAccount - 更新客服账号。
     * @param {{kf_account:string, nickname:string}} payload
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_updatekfaccount.html
     */
    async updateKfAccount(payload) {
        return _updateKfAccount(this, payload);
    }

    /**
     * delKfAccount - 删除客服账号。
     * @param {{kf_account:string}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_delkfaccount.html
     */
    async delKfAccount(params) {
        return _delKfAccount(this, params);
    }

    /**
     * inviteKfWorker - 邀请绑定为客服。
     * @param {{kf_account:string, invite_wx:string}} payload
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_invitekfworker.html
     */
    async inviteKfWorker(payload) {
        return _inviteKfWorker(this, payload);
    }

    /**
     * getKfList - 获取所有客服账号列表。
     * @returns {Promise<{kf_list:Array<Object>}>}
     * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getkflist.html
     */
    async getKfList() {
        return _getKfList(this);
    }

    /**
     * getOnlineKfList - 获取在线客服列表。
     * @returns {Promise<{kf_online_list:Array<Object>}>}
     * @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getonlinekflist.html
     */
    async getOnlineKfList() {
        return _getOnlineKfList(this);
    }

    /**
     * getKfSessionList - 获取客服的会话列表。
     * @param {{kf_account:string}} params
     * @returns {Promise<{sessionlist:Array<Object>}>}
     * @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsessionlist.html
     */
    async getKfSessionList(params) {
        return _getKfSessionList(this, params);
    }

    /**
     * getKfSession - 获取用户会话状态。
     * @param {{openid:string}} params
     * @returns {Promise<Object>}
     * @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsession.html
     */
    async getKfSession(params) {
        return _getKfSession(this, params);
    }

    /**
     * createKfSession - 创建会话。
     * @param {{kf_account:string, openid:string}} payload
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_createkfsession.html
     */
    async createKfSession(payload) {
        return _createKfSession(this, payload);
    }

    /**
     * closeSession - 关闭会话。
     * @param {{kf_account:string, openid:string}} payload
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_closesession.html
     */
    async closeSession(payload) {
        return _closeSession(this, payload);
    }

    /**
     * getWaitCase - 获取待接入会话列表。
     * @returns {Promise<{count:number, waitcaselist:Array<Object>}>}
     * @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getwaitcase.html
     */
    async getWaitCase() {
        return _getWaitCase(this);
    }

    /**
     * getMsgList - 获取客服消息记录。
     * @param {{starttime:number, endtime:number, msgid:number, number:number}} payload
     * @returns {Promise<{recordlist:Array<Object>}>}
     * @see https://developers.weixin.qq.com/doc/service/api/customer/message/api_getmsglist.html
     */
    async getMsgList(payload) {
        return _getMsgList(this, payload);
    }

    /**
     * typing - 设置客服输入状态。
     * @param {{touser:string, command:'Typing'|'CancelTyping'}} payload
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/customer/message/api_typing.html
     */
    async typing(payload) {
        return _typing(this, payload);
    }

    /**
     * sendCustomMessage - 发送客服消息。
     * @param {Object} payload
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/customer/message/api_sendcustommessage.html
     */
    async sendCustomMessage(payload) {
        return _sendCustomMessage(this, payload);
    }

    /**
     * 获取永久素材。
     * @param {{media_id:string, responseType?: 'json'|'arraybuffer'}} params
     * @returns {Promise<any>}
     * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterial.html
     */
    async getMaterial(params) {
        return _getMaterial(this, params);
    }

    /**
     * 获取素材总数。
     * @returns {Promise<{voice_count:number, video_count:number, image_count:number, news_count:number}>}
     * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterialcount.html
     */
    async getMaterialCount() {
        return _getMaterialCount(this);
    }

    /**
     * 批量获取素材列表。
     * @param {{type:'image'|'video'|'voice'|'news', offset:number, count:number}} payload
     * @returns {Promise<{total_count:number, item_count:number, item:Array<Object>}>}
     * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_batchgetmaterial.html
     */
    async batchGetMaterial(payload) {
        return _batchGetMaterial(this, payload);
    }

    /**
     * 上传图文消息内图片（永久素材域）。
     * @param {{filePath?:string, file?:Buffer|import('stream').Readable, filename?:string, contentType?:string}} input
     * @returns {Promise<{url:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_uploadimage.html
     */
    async materialUploadImage(input) {
        return _materialUploadImage(this, input);
    }

    /**
     * 新增其他类型永久素材。
     * @param {{type:'image'|'voice'|'video'|'thumb'} & ({filePath:string} | {file:Buffer|import('stream').Readable, filename?:string, contentType?:string}) & {videoDescription?: {title:string, introduction:string}}} params
     * @returns {Promise<{media_id:string, url?:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_addmaterial.html
     */
    async addMaterial(params) {
        return _addMaterial(this, params);
    }

    /**
     * 删除永久素材。
     * @param {{media_id:string}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_delmaterial.html
     */
    async delMaterial(params) {
        return _delMaterial(this, params);
    }

    /**
     * 获取临时素材（二进制）。
     * @param {{media_id:string, responseType?: 'arraybuffer'|'stream'}} params
     * @returns {Promise<any>}
     * @see https://developers.weixin.qq.com/doc/service/api/material/temporary/api_getmedia.html
     */
    async getMedia(params) {
        return _getMedia(this, params);
    }

    /**
     * 上传临时素材。
     * @param {{type:'image'|'voice'|'video'|'thumb'} & ({filePath:string} | {file:Buffer|import('stream').Readable, filename?:string, contentType?:string})} params
     * @returns {Promise<{type:string, media_id:string, created_at:number}>}
     * @see https://developers.weixin.qq.com/doc/service/api/material/temporary/api_uploadtempmedia.html
     */
    async uploadTempMedia(params) {
        return _uploadTempMedia(this, params);
    }

    /**
     * 高清语音素材获取。
     * @param {{media_id:string, responseType?: 'arraybuffer'|'stream'}} params
     * @returns {Promise<any>}
     * @see https://developers.weixin.qq.com/doc/service/api/material/temporary/api_gethdvoice.html
     */
    async getHdVoice(params) {
        return _getHdVoice(this, params);
    }

    /**
     * draftSwitch - 草稿箱开关。
     * @param {{is_open:0|1}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_switch.html
     */
    async draftSwitch(params) {
        return _draftSwitch(this, params);
    }

    /**
     * draftAdd - 新建草稿。
     * @param {{articles:Array<Object>}} payload
     * @returns {Promise<{media_id:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_add.html
     */
    async draftAdd(payload) {
        return _draftAdd(this, payload);
    }

    /**
     * getDraft - 获取草稿。
     * @param {{media_id:string}} params
     * @returns {Promise<Object>}
     * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_getdraft.html
     */
    async getDraft(params) {
        return _getDraft(this, params);
    }

    /**
     * draftDelete - 删除草稿。
     * @param {{media_id:string}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_delete.html
     */
    async draftDelete(params) {
        return _draftDelete(this, params);
    }

    /**
     * draftUpdate - 修改草稿。
     * @param {Object} payload
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_update.html
     */
    async draftUpdate(payload) {
        return _draftUpdate(this, payload);
    }

    /**
     * draftBatchGet - 批量获取草稿。
     * @param {{offset:number, count:number, no_content?:0|1}} params
     * @returns {Promise<{total_count:number, item_count:number, item:Array<Object>}>}
     * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_batchget.html
     */
    async draftBatchGet(params) {
        return _draftBatchGet(this, params);
    }

    /**
     * draftCount - 获取草稿总数。
     * @returns {Promise<{total_count:number}>}
     * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_count.html
     */
    async draftCount() {
        return _draftCount(this);
    }

    /**
     * ecsGetProductCardInfo - 获取商品卡片信息。
     * @param {Object} params
     * @returns {Promise<Object>}
     * @see https://developers.weixin.qq.com/doc/service/api/draftbox/shop/api_ecsgetproductcardinfo.html
     */
    async ecsGetProductCardInfo(params) {
        return _ecsGetProductCardInfo(this, params);
    }

    /**
     * openArticleComment - 开启评论
     * @param {{msg_data_id:number|string, index?:number}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_openarticlecomment.html
     */
    async openArticleComment(params) {
        return _openArticleComment(this, params);
    }

    /**
     * listComment - 拉取评论列表
     * @param {{msg_data_id:number|string, index?:number, begin:number, count:number, type?:0|1}} params
     * @returns {Promise<{total:number, comment:Array<Object>}>}
     * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_listcomment.html
     */
    async listComment(params) {
        return _listComment(this, params);
    }

    /**
     * closeComment - 关闭评论
     * @param {{msg_data_id:number|string, index?:number}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_closecomment.html
     */
    async closeComment(params) {
        return _closeComment(this, params);
    }

    /**
     * electComment - 标记精选
     * @param {{msg_data_id:number|string, index?:number, user_comment_id:number|string}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_electcomment.html
     */
    async electComment(params) {
        return _electComment(this, params);
    }

    /**
     * unelectComment - 取消精选
     * @param {{msg_data_id:number|string, index?:number, user_comment_id:number|string}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_unelectcomment.html
     */
    async unelectComment(params) {
        return _unelectComment(this, params);
    }

    /**
     * delComment - 删除评论
     * @param {{msg_data_id:number|string, index?:number, user_comment_id:number|string}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_delcomment.html
     */
    async delComment(params) {
        return _delComment(this, params);
    }

    /**
     * replyComment - 回复评论
     * @param {{msg_data_id:number|string, index?:number, user_comment_id:number|string, content:string}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_replycomment.html
     */
    async replyComment(params) {
        return _replyComment(this, params);
    }

    /**
     * delReplyComment - 删除回复
     * @param {{msg_data_id:number|string, index?:number, user_comment_id:number|string}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_delreplycomment.html
     */
    async delReplyComment(params) {
        return _delReplyComment(this, params);
    }

    /**
     * freePublishSubmit - 提交发布
     * @param {{media_id:string}} params
     * @returns {Promise<{publish_id?:string, errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_submit.html
     */
    async freePublishSubmit(params) {
        return _freePublishSubmit(this, params);
    }

    /**
     * freePublishGet - 查询发布结果
     * @param {{publish_id?:string, article_id?:string}} params
     * @returns {Promise<Object>}
     * @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_get.html
     */
    async freePublishGet(params) {
        return _freePublishGet(this, params);
    }

    /**
     * freePublishBatchGet - 获取已发布列表
     * @param {{offset:number, count:number, no_content?:0|1}} params
     * @returns {Promise<{total_count:number, item_count:number, item:Array<Object>}>}
     * @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_batchget.html
     */
    async freePublishBatchGet(params) {
        return _freePublishBatchGet(this, params);
    }

    /**
     * freePublishGetArticle - 通过 article_id 获取已发布素材
     * @param {{article_id:string}} params
     * @returns {Promise<Object>}
     * @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublishgetarticle.html
     */
    async freePublishGetArticle(params) {
        return _freePublishGetArticle(this, params);
    }

    /**
     * freePublishDelete - 删除已发布素材
     * @param {{article_id:string}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublishdelete.html
     */
    async freePublishDelete(params) {
        return _freePublishDelete(this, params);
    }

    /**
     * getTagFans - 获取标签下粉丝列表
     * @param {{tagid:number, next_openid?:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagfans.html
     */
    async getTagFans(params) { return _getTagFans(this, params); }

    /**
     * getTags - 获取已创建的标签
     * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettags.html
     */
    async getTags() { return _getTags(this); }

    /**
     * createTag - 创建标签
     * @param {{name:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_createtag.html
     */
    async createTag(params) { return _createTag(this, params); }

    /**
     * updateTag - 编辑标签
     * @param {{id:number, name:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_updatetag.html
     */
    async updateTag(params) { return _updateTag(this, params); }

    /**
     * deleteTag - 删除标签
     * @param {{id:number}} params
     * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_deletetag.html
     */
    async deleteTag(params) { return _deleteTag(this, params); }

    /**
     * batchTagging - 批量为用户打标签
     * @param {{openid_list:string[], tagid:number}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchtagging.html
     */
    async batchTagging(payload) { return _batchTagging(this, payload); }

    /**
     * batchUntagging - 批量为用户取消标签
     * @param {{openid_list:string[], tagid:number}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchuntagging.html
     */
    async batchUntagging(payload) { return _batchUntagging(this, payload); }

    /**
     * getTagIdList - 获取用户身上的标签列表
     * @param {{openid:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagidlist.html
     */
    async getTagIdList(params) { return _getTagIdList(this, params); }

    /**
     * getBlacklist - 获取黑名单列表
     * @param {{begin_openid?:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getblacklist.html
     */
    async getBlacklist(params) { return _getBlacklist(this, params); }

    /**
     * batchBlacklist - 批量拉黑用户
     * @param {{openid_list:string[]}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchblacklist.html
     */
    async batchBlacklist(payload) { return _batchBlacklist(this, payload); }

    /**
     * batchUnblacklist - 批量取消拉黑
     * @param {{openid_list:string[]}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchunblacklist.html
     */
    async batchUnblacklist(payload) { return _batchUnblacklist(this, payload); }

    /**
     * getUserInfo - 获取用户基本信息
     * @param {{openid:string, lang?:'zh_CN'|'zh_TW'|'en'}} params
     * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_userinfo.html
     */
    async getUserInfo(params) { return _getUserInfo(this, params); }

    /**
     * batchUserInfo - 批量获取用户基本信息
     * @param {{user_list:Array<{openid:string, lang?:'zh_CN'|'zh_TW'|'en'}>}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchuserinfo.html
     */
    async batchUserInfo(payload) { return _batchUserInfo(this, payload); }

    /**
     * getFans - 获取公众号粉丝列表
     * @param {{next_openid?:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getfans.html
     */
    async getFans(params) { return _getFans(this, params); }

    /**
     * updateRemark - 设置用户备注名
     * @param {{openid:string, remark:string}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_updateremark.html
     */
    async updateRemark(payload) { return _updateRemark(this, payload); }

    /**
     * qrcodeJumpGet - 获取二维码跳转规则
     * @returns {Promise<Object>}
     * @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpget.html
     */
    async qrcodeJumpGet() { return _qrcodeJumpGet(this); }

    /**
     * qrcodeJumpAdd - 增加二维码跳转规则
     * @param {{prefix:string, path:string, open_version?:number, permit_sub_rule?:1|0, debug_url?:string[]}} payload
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpadd.html
     */
    async qrcodeJumpAdd(payload) { return _qrcodeJumpAdd(this, payload); }

    /**
     * qrcodeJumpPublish - 发布二维码跳转规则
     * @param {{prefix:string}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumppublish.html
     */
    async qrcodeJumpPublish(params) { return _qrcodeJumpPublish(this, params); }

    /**
     * qrcodeJumpDelete - 删除二维码跳转规则
     * @param {{prefix:string}} params
     * @returns {Promise<{errcode:number, errmsg:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpdelete.html
     */
    async qrcodeJumpDelete(params) { return _qrcodeJumpDelete(this, params); }

    /**
     * createQrcode - 创建二维码（临时/永久）
     * @param {{expire_seconds?:number, action_name:'QR_SCENE'|'QR_STR_SCENE'|'QR_LIMIT_SCENE'|'QR_LIMIT_STR_SCENE', action_info:{scene:{scene_id?:number, scene_str?:string}}}} payload
     * @returns {Promise<{ticket:string, expire_seconds?:number, url:string}>}
     * @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodes/api_createqrcode.html
     */
    async createQrcode(payload) { return _createQrcode(this, payload); }

    /**
     * genShortKey - 生成短 Key
     * @param {{long_url:string, expire_seconds?:number}} payload
     * @returns {Promise<{short_key:string, expire_seconds?:number}>}
     * @see https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_genshortkey.html
     */
    async genShortKey(payload) { return _genShortKey(this, payload); }

    /**
     * fetchShorten - 通过短 Key 拉取原始信息
     * @param {{short_key:string}} params
     * @returns {Promise<{long_url?:string, status?:number}>}
     * @see https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_fetchshorten.html
     */
    async fetchShorten(params) { return _fetchShorten(this, params); }

    /**
     * 获取用户增减数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusersummary.html
     */
    async getUserSummary(params) { return _getUserSummary(this, params); }

    /**
     * 获取累计用户数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusercumulate.html
     */
    async getUserCumulate(params) { return _getUserCumulate(this, params); }

    /**
     * 获取图文群发每日数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticlesummary.html
     */
    async getArticleSummary(params) { return _getArticleSummary(this, params); }

    /**
     * 获取图文统计分时数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserreadhour.html
     */
    async getUserReadHour(params) { return _getUserReadHour(this, params); }

    /**
     * 获取图文分享转发分时数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusersharehour.html
     */
    async getUserShareHour(params) { return _getUserShareHour(this, params); }

    /**
     * 获取图文统计数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserread.html
     */
    async getUserRead(params) { return _getUserRead(this, params); }

    /**
     * 获取图文群发总数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticletotal.html
     */
    async getArticleTotal(params) { return _getArticleTotal(this, params); }

    /**
     * 获取图文分享转发数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusershare.html
     */
    async getUserShare(params) { return _getUserShare(this, params); }

    /**
     * 获取消息发送概况数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsg.html
     */
    async getUpstreamMsg(params) { return _getUpstreamMsg(this, params); }

    /**
     * 获取消息发送月数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgmonth.html
     */
    async getUpstreamMsgMonth(params) { return _getUpstreamMsgMonth(this, params); }

    /**
     * 获取消息发送分布周数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistweek.html
     */
    async getUpstreamMsgDistWeek(params) { return _getUpstreamMsgDistWeek(this, params); }

    /**
     * 获取消息发送分布月数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistmonth.html
     */
    async getUpstreamMsgDistMonth(params) { return _getUpstreamMsgDistMonth(this, params); }

    /**
     * 获取消息发送分时数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsghour.html
     */
    async getUpstreamMsgHour(params) { return _getUpstreamMsgHour(this, params); }

    /**
     * 获取消息发送周数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgweek.html
     */
    async getUpstreamMsgWeek(params) { return _getUpstreamMsgWeek(this, params); }

    /**
     * 获取消息发送分布数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdist.html
     */
    async getUpstreamMsgDist(params) { return _getUpstreamMsgDist(this, params); }

    /**
     * 获取接口分析数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummary.html
     */
    async getInterfaceSummary(params) { return _getInterfaceSummary(this, params); }

    /**
     * 获取接口分析分时数据
     * @param {{begin_date:string, end_date:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummaryhour.html
     */
    async getInterfaceSummaryHour(params) { return _getInterfaceSummaryHour(this, params); }

    /**
     * snsAccessToken - 通过 code 换取网页授权 access_token
     * @param {{appid:string, secret:string, code:string, grant_type?:'authorization_code'}} params
     * @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsaccesstoken.html
     */
    async snsAccessToken(params) { return _snsAccessToken(this, params); }

    /**
     * snsAuth - 检验授权凭证有效性
     * @param {{access_token:string, openid:string}} params
     * @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsauth.html
     */
    async snsAuth(params) { return _snsAuth(this, params); }

    /**
     * snsUserInfo - 拉取用户信息
     * @param {{access_token:string, openid:string, lang?:'zh_CN'|'zh_TW'|'en'}} params
     * @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsuserinfo.html
     */
    async snsUserInfo(params) { return _snsUserInfo(this, params); }

    /**
     * snsRefreshToken - 刷新网页授权 access_token
     * @param {{appid:string, refresh_token:string, grant_type?:'refresh_token'}} params
     * @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsrefreshtoken.html
     */
    async snsRefreshToken(params) { return _snsRefreshToken(this, params); }

    /**
     * getTicket - 获取 API ticket
     * @param {{type:'jsapi'|'wx_card'}} params
     * @see https://developers.weixin.qq.com/doc/service/api/webdev/jssdk/api_getticket.html
     */
    async getTicket(params) { return _getTicket(this, params); }

    /**
     * translateContent - 翻译内容
     * @param {{lfrom:string, lto:string, content:string}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_translatecontent.html
     */
    async translateContent(payload) { return _translateContent(this, payload); }

    /**
     * addVoiceToRecoForText - 提交语音用于识别
     * @param {{voice_id:string, lang:string, format?:string, voice_url?:string, file_id?:string, voice_data?:string, rate?:number}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_addvoicetorecofortext.html
     */
    async addVoiceToRecoForText(payload) { return _addVoiceToRecoForText(this, payload); }

    /**
     * queryRecoResultForText - 查询语音识别结果
     * @param {{voice_id:string, lang:string}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_queryrecoresultfortext.html
     */
    async queryRecoResultForText(payload) { return _queryRecoResultForText(this, payload); }

    /**
     * menuOcr - 菜单 OCR
     * @param {{img_url?:string, img?:string}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_menuocr.html
     */
    async menuOcr(payload) { return _menuOcr(this, payload); }

    /**
     * commOcr - 通用印刷体 OCR
     * @param {{img_url?:string, img?:string}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_commocr.html
     */
    async commOcr(payload) { return _commOcr(this, payload); }

    /**
     * drivingOcr - 行驶证 OCR
     * @param {{img_url?:string, img?:string}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivingocr.html
     */
    async drivingOcr(payload) { return _drivingOcr(this, payload); }

    /**
     * bankcardOcr - 银行卡 OCR
     * @param {{img_url?:string, img?:string}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bankcardocr.html
     */
    async bankcardOcr(payload) { return _bankcardOcr(this, payload); }

    /**
     * bizLicenseOcr - 营业执照 OCR
     * @param {{img_url?:string, img?:string}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bizlicenseocr.html
     */
    async bizLicenseOcr(payload) { return _bizLicenseOcr(this, payload); }

    /**
     * drivingLicenseOcr - 驾驶证 OCR
     * @param {{img_url?:string, img?:string}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivinglicenseocr.html
     */
    async drivingLicenseOcr(payload) { return _drivingLicenseOcr(this, payload); }

    /**
     * idcardOcr - 身份证 OCR
     * @param {{img_url?:string, img?:string}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_idcardocr.html
     */
    async idcardOcr(payload) { return _idcardOcr(this, payload); }

    /**
     * imgAiCrop - 智能裁剪
     * @param {{img_url?:string, img?:string}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgaicrop.html
     */
    async imgAiCrop(payload) { return _imgAiCrop(this, payload); }

    /**
     * imgQrcode - 二维码/条码识别
     * @param {{img_url?:string, img?:string}} payload
     * @see https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgqrcode.html
     */
    async imgQrcode(payload) { return _imgQrcode(this, payload); }


    static verifySignature(token, timestamp, nonce, signature) {
        return verifySignature(token, timestamp, nonce, signature);
    }
    static verifyMsgSignature(token, timestamp, nonce, encrypt, msgSignature) {
        return verifyMsgSignature(token, timestamp, nonce, encrypt, msgSignature);
    }
    decryptMessage(encryptBase64, aesKey) {
        const key = decodeAESKey(aesKey);
        return _decryptMessage(encryptBase64, key);
    }
    buildXml(obj) {
        return buildWechatXml(obj);
    }
    parseXml(xmlStr) {
        return parseXml(xmlStr);
    }
}
