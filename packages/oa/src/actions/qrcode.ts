/**
 * 二维码跳转规则、二维码生成、短链接/短 Key。
 */
import type { OaClient } from '../client.js';
import type { ErrResult } from './menu.js';

/* -------------------- 二维码跳转（规则管理） -------------------- */

/**
 * 获取已设置的二维码跳转规则。
 * @param client OaClient 实例。
 * @returns 跳转规则。
 * @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpget.html
 */
export async function qrcodeJumpGet(client: OaClient): Promise<Record<string, unknown>> {
  return client.request({ method: 'GET', url: '/cgi-bin/wxopen/qrcodejumpget' });
}

/** 增加二维码跳转规则入参。 */
export interface QrcodeJumpAddParams {
  prefix: string;
  path: string;
  open_version?: number;
  permit_sub_rule?: 0 | 1;
  debug_url?: string[];
}

/**
 * 增加二维码跳转规则。
 * @param client OaClient 实例。
 * @param payload 跳转规则参数。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpadd.html
 */
export async function qrcodeJumpAdd(
  client: OaClient,
  payload: QrcodeJumpAddParams,
): Promise<ErrResult> {
  const { prefix, path } = payload ?? {};
  if (!prefix) throw new Error('[qrcodeJumpAdd] prefix is required');
  if (!path) throw new Error('[qrcodeJumpAdd] path is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/wxopen/qrcodejumpadd',
    body: { ...payload },
  });
}

/**
 * 发布二维码跳转规则。
 * @param client OaClient 实例。
 * @param params prefix。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumppublish.html
 */
export async function qrcodeJumpPublish(
  client: OaClient,
  { prefix }: { prefix: string },
): Promise<ErrResult> {
  if (!prefix) throw new Error('[qrcodeJumpPublish] prefix is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/wxopen/qrcodejumppublish',
    body: { prefix },
  });
}

/**
 * 删除二维码跳转规则。
 * @param client OaClient 实例。
 * @param params prefix。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpdelete.html
 */
export async function qrcodeJumpDelete(
  client: OaClient,
  { prefix }: { prefix: string },
): Promise<ErrResult> {
  if (!prefix) throw new Error('[qrcodeJumpDelete] prefix is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/wxopen/qrcodejumpdelete',
    body: { prefix },
  });
}

/* -------------------- 生成二维码 -------------------- */

/** 创建二维码入参。 */
export interface CreateQrcodeParams {
  expire_seconds?: number;
  action_name: 'QR_SCENE' | 'QR_STR_SCENE' | 'QR_LIMIT_SCENE' | 'QR_LIMIT_STR_SCENE';
  action_info: { scene: { scene_id?: number; scene_str?: string } };
}

/**
 * 创建二维码（临时/永久）。
 * @param client OaClient 实例。
 * @param payload 二维码参数。
 * @returns ticket、过期时间与展示 URL。
 * @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodes/api_createqrcode.html
 */
export async function createQrcode(
  client: OaClient,
  payload: CreateQrcodeParams,
): Promise<{ ticket: string; expire_seconds?: number; url: string }> {
  const { action_name, action_info } = payload ?? {};
  if (!action_name) throw new Error('[createQrcode] action_name is required');
  if (!action_info) throw new Error('[createQrcode] action_info is required');
  return client.request({ method: 'POST', url: '/cgi-bin/qrcode/create', body: { ...payload } });
}

/* -------------------- 短链接/短 Key -------------------- */

/**
 * 生成短 Key。
 * @param client OaClient 实例。
 * @param payload long_url 与可选 expire_seconds。
 * @returns short_key 与过期时间。
 * @see https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_genshortkey.html
 */
export async function genShortKey(
  client: OaClient,
  { long_url, expire_seconds }: { long_url: string; expire_seconds?: number },
): Promise<{ short_key: string; expire_seconds?: number }> {
  if (!long_url) throw new Error('[genShortKey] long_url is required');
  const body = expire_seconds ? { long_url, expire_seconds } : { long_url };
  return client.request({ method: 'POST', url: '/cgi-bin/shorten/gen', body });
}

/**
 * 通过短 Key 拉取原始信息。
 * @param client OaClient 实例。
 * @param params short_key。
 * @returns 原始长链接与状态。
 * @see https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_fetchshorten.html
 */
export async function fetchShorten(
  client: OaClient,
  { short_key }: { short_key: string },
): Promise<{ long_url?: string; status?: number }> {
  if (!short_key) throw new Error('[fetchShorten] short_key is required');
  return client.request({ method: 'POST', url: '/cgi-bin/shorten/fetch', body: { short_key } });
}
