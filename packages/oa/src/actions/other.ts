/**
 * 网页授权（OAuth）、JSSDK ticket、AI 能力、OCR、图像处理等接口。
 *
 * 注意：`/sns/*` 网页授权接口不需要 access_token，因此统一以 `auth: false` 调用。
 */
import type { OaClient } from '../client.js';
import type { WxLang } from '../types.js';
import type { ErrResult } from './menu.js';

/* -------------------- 网页授权 WebAuth -------------------- */

/**
 * 通过 code 换取网页授权 access_token。
 * @param client OaClient 实例。
 * @param params appid、secret、code 与可选 grant_type。
 * @returns 网页授权令牌信息。
 * @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsaccesstoken.html
 */
export async function snsAccessToken(
  client: OaClient,
  {
    appid,
    secret,
    code,
    grant_type = 'authorization_code',
  }: {
    appid: string;
    secret: string;
    code: string;
    grant_type?: 'authorization_code';
  },
): Promise<Record<string, unknown>> {
  if (!appid || !secret || !code)
    throw new Error('[snsAccessToken] appid, secret, code are required');
  return client.request({
    method: 'GET',
    url: '/sns/oauth2/access_token',
    query: { appid, secret, code, grant_type },
    auth: false,
  });
}

/**
 * 检验授权凭证（access_token）是否有效。
 * @param client OaClient 实例。
 * @param params access_token 与 openid。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsauth.html
 */
export async function snsAuth(
  client: OaClient,
  { access_token, openid }: { access_token: string; openid: string },
): Promise<ErrResult> {
  if (!access_token || !openid) throw new Error('[snsAuth] access_token and openid are required');
  return client.request({
    method: 'GET',
    url: '/sns/auth',
    query: { access_token, openid },
    auth: false,
  });
}

/**
 * 拉取用户信息（scope=snsapi_userinfo）。
 * @param client OaClient 实例。
 * @param params access_token、openid 与可选 lang。
 * @returns 用户信息。
 * @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsuserinfo.html
 */
export async function snsUserInfo(
  client: OaClient,
  { access_token, openid, lang = 'zh_CN' }: { access_token: string; openid: string; lang?: WxLang },
): Promise<Record<string, unknown>> {
  if (!access_token || !openid)
    throw new Error('[snsUserInfo] access_token and openid are required');
  return client.request({
    method: 'GET',
    url: '/sns/userinfo',
    query: { access_token, openid, lang },
    auth: false,
  });
}

/**
 * 刷新网页授权 access_token。
 * @param client OaClient 实例。
 * @param params appid、refresh_token 与可选 grant_type。
 * @returns 刷新后的令牌信息。
 * @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsrefreshtoken.html
 */
export async function snsRefreshToken(
  client: OaClient,
  {
    appid,
    refresh_token,
    grant_type = 'refresh_token',
  }: {
    appid: string;
    refresh_token: string;
    grant_type?: 'refresh_token';
  },
): Promise<Record<string, unknown>> {
  if (!appid || !refresh_token)
    throw new Error('[snsRefreshToken] appid and refresh_token are required');
  return client.request({
    method: 'GET',
    url: '/sns/oauth2/refresh_token',
    query: { appid, grant_type, refresh_token },
    auth: false,
  });
}

/* -------------------- JSSDK -------------------- */

/**
 * 获取 API ticket（jsapi 或 wx_card）。
 * @param client OaClient 实例。
 * @param params type。
 * @returns ticket 与过期时间。
 * @see https://developers.weixin.qq.com/doc/service/api/webdev/jssdk/api_getticket.html
 */
export async function getTicket(
  client: OaClient,
  { type }: { type: 'jsapi' | 'wx_card' },
): Promise<ErrResult & { ticket: string; expires_in: number }> {
  if (!type) throw new Error('[getTicket] type is required');
  return client.request({ method: 'GET', url: '/cgi-bin/ticket/getticket', query: { type } });
}

/* -------------------- AI 能力（翻译/语音转文字） -------------------- */

/**
 * 翻译内容。
 * @param client OaClient 实例。
 * @param payload lfrom、lto、content。
 * @returns 翻译结果。
 * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_translatecontent.html
 */
export async function translateContent(
  client: OaClient,
  { lfrom, lto, content }: { lfrom: string; lto: string; content: string },
): Promise<Record<string, unknown>> {
  if (!lfrom || !lto || !content)
    throw new Error('[translateContent] lfrom, lto, content are required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/media/voice/translatecontent',
    body: { lfrom, lto, content },
  });
}

/** 提交语音用于识别入参。 */
export interface AddVoiceToRecoParams {
  voice_id: string;
  lang: string;
  format?: string;
  voice_url?: string;
  file_id?: string;
  voice_data?: string;
  rate?: number;
}

/**
 * 提交语音用于识别（异步）。
 * @param client OaClient 实例。
 * @param payload voice_id、lang 及其他可选字段。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_addvoicetorecofortext.html
 */
export async function addVoiceToRecoForText(
  client: OaClient,
  payload: AddVoiceToRecoParams,
): Promise<Record<string, unknown>> {
  const { voice_id, lang } = payload ?? {};
  if (!voice_id || !lang) throw new Error('[addVoiceToRecoForText] voice_id and lang are required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/media/voice/addvoicetorecofortext',
    body: { ...payload },
  });
}

/**
 * 查询语音识别结果。
 * @param client OaClient 实例。
 * @param payload voice_id 与 lang。
 * @returns 识别结果。
 * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_queryrecoresultfortext.html
 */
export async function queryRecoResultForText(
  client: OaClient,
  { voice_id, lang }: { voice_id: string; lang: string },
): Promise<Record<string, unknown>> {
  if (!voice_id || !lang)
    throw new Error('[queryRecoResultForText] voice_id and lang are required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/media/voice/queryrecoresultfortext',
    body: { voice_id, lang },
  });
}

/* -------------------- OCR -------------------- */

/** OCR/图像处理通用入参（img_url 或 img 二选一）。 */
export interface ImgInput {
  img_url?: string;
  img?: string;
}

/** 内部：统一的 OCR/图像 POST 调用。 */
function cvPost(
  client: OaClient,
  url: string,
  label: string,
  payload: ImgInput,
): Promise<Record<string, unknown>> {
  const { img_url, img } = payload ?? {};
  if (!img_url && !img) throw new Error(`[${label}] img_url or img is required`);
  return client.request({ method: 'POST', url, body: { ...payload } });
}

/**
 * 菜单 OCR。
 * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_menuocr.html
 */
export async function menuOcr(
  client: OaClient,
  payload: ImgInput,
): Promise<Record<string, unknown>> {
  return cvPost(client, '/cv/ocr/menu', 'menuOcr', payload);
}

/**
 * 通用印刷体 OCR。
 * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_commocr.html
 */
export async function commOcr(
  client: OaClient,
  payload: ImgInput,
): Promise<Record<string, unknown>> {
  return cvPost(client, '/cv/ocr/comm', 'commOcr', payload);
}

/**
 * 行驶证 OCR。
 * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivingocr.html
 */
export async function drivingOcr(
  client: OaClient,
  payload: ImgInput,
): Promise<Record<string, unknown>> {
  return cvPost(client, '/cv/ocr/driving', 'drivingOcr', payload);
}

/**
 * 银行卡 OCR。
 * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bankcardocr.html
 */
export async function bankcardOcr(
  client: OaClient,
  payload: ImgInput,
): Promise<Record<string, unknown>> {
  return cvPost(client, '/cv/ocr/bankcard', 'bankcardOcr', payload);
}

/**
 * 营业执照 OCR。
 * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bizlicenseocr.html
 */
export async function bizLicenseOcr(
  client: OaClient,
  payload: ImgInput,
): Promise<Record<string, unknown>> {
  return cvPost(client, '/cv/ocr/bizlicense', 'bizLicenseOcr', payload);
}

/**
 * 驾驶证 OCR。
 * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivinglicenseocr.html
 */
export async function drivingLicenseOcr(
  client: OaClient,
  payload: ImgInput,
): Promise<Record<string, unknown>> {
  return cvPost(client, '/cv/ocr/drivinglicense', 'drivingLicenseOcr', payload);
}

/**
 * 身份证 OCR。
 * @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_idcardocr.html
 */
export async function idcardOcr(
  client: OaClient,
  payload: ImgInput,
): Promise<Record<string, unknown>> {
  return cvPost(client, '/cv/ocr/idcard', 'idcardOcr', payload);
}

/* -------------------- 图像处理 -------------------- */

/**
 * 智能裁剪。
 * @see https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgaicrop.html
 */
export async function imgAiCrop(
  client: OaClient,
  payload: ImgInput,
): Promise<Record<string, unknown>> {
  return cvPost(client, '/cv/img/aicrop', 'imgAiCrop', payload);
}

/**
 * 二维码/条码识别。
 * @see https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgqrcode.html
 */
export async function imgQrcode(
  client: OaClient,
  payload: ImgInput,
): Promise<Record<string, unknown>> {
  return cvPost(client, '/cv/img/qrcode', 'imgQrcode', payload);
}
