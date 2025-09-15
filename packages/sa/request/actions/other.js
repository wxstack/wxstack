/* -------------------- 网页授权 WebAuth -------------------- */
/**
 * 通过 code 换取网页授权 access_token
 * 文档: https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsaccesstoken.html
 *
 * @summary snsAccessToken
 * @param {import('../../client.js').SaClient} client
 * @param {{appid:string, secret:string, code:string, grant_type?:'authorization_code'}} params
 * @returns {Promise<Object>}
 */
export async function snsAccessToken(client, { appid, secret, code, grant_type = 'authorization_code' } = {}) {
    if (!appid || !secret || !code) throw new Error('[snsAccessToken] appid, secret, code are required');
    return client.request('GET', '/sns/oauth2/access_token', { params: { appid, secret, code, grant_type } });
}

/**
 * 检验授权凭证（access_token）是否有效
 * 文档: https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsauth.html
 *
 * @summary snsAuth
 * @param {import('../../client.js').SaClient} client
 * @param {{access_token:string, openid:string}} params
 * @returns {Promise<{errcode:number, errmsg:string}>}
 */
export async function snsAuth(client, { access_token, openid } = {}) {
    if (!access_token || !openid) throw new Error('[snsAuth] access_token and openid are required');
    return client.request('GET', '/sns/auth', { params: { access_token, openid } });
}

/**
 * 拉取用户信息（scope\=snsapi_userinfo）
 * 文档: https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsuserinfo.html
 *
 * @summary snsUserInfo
 * @param {import('../../client.js').SaClient} client
 * @param {{access_token:string, openid:string, lang?:'zh_CN'|'zh_TW'|'en'}} params
 * @returns {Promise<Object>}
 */
export async function snsUserInfo(client, { access_token, openid, lang = 'zh_CN' } = {}) {
    if (!access_token || !openid) throw new Error('[snsUserInfo] access_token and openid are required');
    return client.request('GET', '/sns/userinfo', { params: { access_token, openid, lang } });
}

/**
 * 刷新网页授权 access_token
 * 文档: https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsrefreshtoken.html
 *
 * @summary snsRefreshToken
 * @param {import('../../client.js').SaClient} client
 * @param {{appid:string, refresh_token:string, grant_type?:'refresh_token'}} params
 * @returns {Promise<Object>}
 */
export async function snsRefreshToken(client, { appid, refresh_token, grant_type = 'refresh_token' } = {}) {
    if (!appid || !refresh_token) throw new Error('[snsRefreshToken] appid and refresh_token are required');
    return client.request('GET', '/sns/oauth2/refresh_token', { params: { appid, grant_type, refresh_token } });
}

/* -------------------- JSSDK -------------------- */
/**
 * 获取 API ticket（jsapi 或 wx_card）
 * 文档: https://developers.weixin.qq.com/doc/service/api/webdev/jssdk/api_getticket.html
 *
 * @summary getTicket
 * @param {import('../../client.js').SaClient} client
 * @param {{type:'jsapi'|'wx_card'}} params
 * @returns {Promise<{errcode:number, errmsg:string, ticket:string, expires_in:number}>}
 */
export async function getTicket(client, { type } = {}) {
    if (!type) throw new Error('[getTicket] type is required');
    return client.request('GET', '/cgi-bin/ticket/getticket', { params: { type } });
}

/* -------------------- AI 能力（翻译/语音转文字） -------------------- */
/**
 * 翻译内容
 * 文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_translatecontent.html
 *
 * @summary translateContent
 * @param {import('../../client.js').SaClient} client
 * @param {{lfrom:string, lto:string, content:string}} payload
 * @returns {Promise<Object>}
 */
export async function translateContent(client, { lfrom, lto, content } = {}) {
    if (!lfrom || !lto || !content) throw new Error('[translateContent] lfrom, lto, content are required');
    return client.request('POST', '/cgi-bin/media/voice/translatecontent', { data: { lfrom, lto, content } });
}

/**
 * 提交语音用于识别（异步）
 * 文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_addvoicetorecofortext.html
 *
 * @summary addVoiceToRecoForText
 * @param {import('../../client.js').SaClient} client
 * @param {{voice_id:string, lang:string, format?:string, voice_url?:string, file_id?:string, voice_data?:string, rate?:number}} payload
 * @returns {Promise<Object>}
 */
export async function addVoiceToRecoForText(client, payload = {}) {
    const { voice_id, lang } = payload;
    if (!voice_id || !lang) throw new Error('[addVoiceToRecoForText] voice_id and lang are required');
    return client.request('POST', '/cgi-bin/media/voice/addvoicetorecofortext', { data: payload });
}

/**
 * 查询语音识别结果
 * 文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_queryrecoresultfortext.html
 *
 * @summary queryRecoResultForText
 * @param {import('../../client.js').SaClient} client
 * @param {{voice_id:string, lang:string}} payload
 * @returns {Promise<Object>}
 */
export async function queryRecoResultForText(client, { voice_id, lang } = {}) {
    if (!voice_id || !lang) throw new Error('[queryRecoResultForText] voice_id and lang are required');
    return client.request('POST', '/cgi-bin/media/voice/queryrecoresultfortext', { data: { voice_id, lang } });
}

/* -------------------- OCR -------------------- */
/**
 * 菜单 OCR
 * 文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_menuocr.html
 *
 * @summary menuOcr
 * @param {import('../../client.js').SaClient} client
 * @param {{img_url?:string, img?:string}} payload
 * @returns {Promise<Object>}
 */
export async function menuOcr(client, payload = {}) {
    const { img_url, img } = payload;
    if (!img_url && !img) throw new Error('[menuOcr] img_url or img is required');
    return client.request('POST', '/cv/ocr/menu', { data: payload });
}

/**
 * 通用印刷体 OCR
 * 文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_commocr.html
 *
 * @summary commOcr
 * @param {import('../../client.js').SaClient} client
 * @param {{img_url?:string, img?:string}} payload
 * @returns {Promise<Object>}
 */
export async function commOcr(client, payload = {}) {
    const { img_url, img } = payload;
    if (!img_url && !img) throw new Error('[commOcr] img_url or img is required');
    return client.request('POST', '/cv/ocr/comm', { data: payload });
}

/**
 * 行驶证 OCR
 * 文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivingocr.html
 *
 * @summary drivingOcr
 * @param {import('../../client.js').SaClient} client
 * @param {{img_url?:string, img?:string}} payload
 * @returns {Promise<Object>}
 */
export async function drivingOcr(client, payload = {}) {
    const { img_url, img } = payload;
    if (!img_url && !img) throw new Error('[drivingOcr] img_url or img is required');
    return client.request('POST', '/cv/ocr/driving', { data: payload });
}

/**
 * 银行卡 OCR
 * 文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bankcardocr.html
 *
 * @summary bankcardOcr
 * @param {import('../../client.js').SaClient} client
 * @param {{img_url?:string, img?:string}} payload
 * @returns {Promise<Object>}
 */
export async function bankcardOcr(client, payload = {}) {
    const { img_url, img } = payload;
    if (!img_url && !img) throw new Error('[bankcardOcr] img_url or img is required');
    return client.request('POST', '/cv/ocr/bankcard', { data: payload });
}

/**
 * 营业执照 OCR
 * 文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bizlicenseocr.html
 *
 * @summary bizLicenseOcr
 * @param {import('../../client.js').SaClient} client
 * @param {{img_url?:string, img?:string}} payload
 * @returns {Promise<Object>}
 */
export async function bizLicenseOcr(client, payload = {}) {
    const { img_url, img } = payload;
    if (!img_url && !img) throw new Error('[bizLicenseOcr] img_url or img is required');
    return client.request('POST', '/cv/ocr/bizlicense', { data: payload });
}

/**
 * 驾驶证 OCR
 * 文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivinglicenseocr.html
 *
 * @summary drivingLicenseOcr
 * @param {import('../../client.js').SaClient} client
 * @param {{img_url?:string, img?:string}} payload
 * @returns {Promise<Object>}
 */
export async function drivingLicenseOcr(client, payload = {}) {
    const { img_url, img } = payload;
    if (!img_url && !img) throw new Error('[drivingLicenseOcr] img_url or img is required');
    return client.request('POST', '/cv/ocr/drivinglicense', { data: payload });
}

/**
 * 身份证 OCR
 * 文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_idcardocr.html
 *
 * @summary idcardOcr
 * @param {import('../../client.js').SaClient} client
 * @param {{img_url?:string, img?:string}} payload
 * @returns {Promise<Object>}
 */
export async function idcardOcr(client, payload = {}) {
    const { img_url, img } = payload;
    if (!img_url && !img) throw new Error('[idcardOcr] img_url or img is required');
    return client.request('POST', '/cv/ocr/idcard', { data: payload });
}

/* -------------------- 图像处理 -------------------- */
/**
 * 智能裁剪
 * 文档: https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgaicrop.html
 *
 * @summary imgAiCrop
 * @param {import('../../client.js').SaClient} client
 * @param {{img_url?:string, img?:string}} payload
 * @returns {Promise<Object>}
 */
export async function imgAiCrop(client, payload = {}) {
    const { img_url, img } = payload;
    if (!img_url && !img) throw new Error('[imgAiCrop] img_url or img is required');
    return client.request('POST', '/cv/img/aicrop', { data: payload });
}

/**
 * 二维码/条码识别
 * 文档: https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgqrcode.html
 *
 * @summary imgQrcode
 * @param {import('../../client.js').SaClient} client
 * @param {{img_url?:string, img?:string}} payload
 * @returns {Promise<Object>}
 */
export async function imgQrcode(client, payload = {}) {
    const { img_url, img } = payload;
    if (!img_url && !img) throw new Error('[imgQrcode] img_url or img is required');
    return client.request('POST', '/cv/img/qrcode', { data: payload });
}
