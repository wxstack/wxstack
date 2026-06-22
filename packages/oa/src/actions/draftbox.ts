/**
 * 草稿箱管理与草稿内商品卡片接口。
 */
import type { OaClient } from '../client.js';
import type { ErrResult } from './menu.js';

/**
 * 草稿箱开关。
 * @param client OaClient 实例。
 * @param params is_open（1 开启，0 关闭）。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_switch.html
 */
export async function draftSwitch(
  client: OaClient,
  { is_open }: { is_open: 0 | 1 },
): Promise<ErrResult> {
  if (is_open !== 0 && is_open !== 1) throw new Error('[draftSwitch] is_open must be 0 or 1');
  return client.request({ method: 'POST', url: '/cgi-bin/draft/switch', body: { is_open } });
}

/**
 * 新建草稿。
 * @param client OaClient 实例。
 * @param payload { articles: [...] }。
 * @returns media_id。
 * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_add.html
 */
export async function draftAdd(
  client: OaClient,
  payload: { articles: Array<Record<string, unknown>> },
): Promise<{ media_id: string }> {
  const { articles } = payload ?? {};
  if (!Array.isArray(articles) || articles.length === 0) {
    throw new Error('[draftAdd] articles is required and must be non-empty array');
  }
  return client.request({ method: 'POST', url: '/cgi-bin/draft/add', body: payload });
}

/**
 * 获取草稿。
 * @param client OaClient 实例。
 * @param params media_id。
 * @returns 草稿内容。
 * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_getdraft.html
 */
export async function getDraft(
  client: OaClient,
  { media_id }: { media_id: string },
): Promise<Record<string, unknown>> {
  if (!media_id) throw new Error('[getDraft] media_id is required');
  return client.request({ method: 'POST', url: '/cgi-bin/draft/get', body: { media_id } });
}

/**
 * 删除草稿。
 * @param client OaClient 实例。
 * @param params media_id。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_delete.html
 */
export async function draftDelete(
  client: OaClient,
  { media_id }: { media_id: string },
): Promise<ErrResult> {
  if (!media_id) throw new Error('[draftDelete] media_id is required');
  return client.request({ method: 'POST', url: '/cgi-bin/draft/delete', body: { media_id } });
}

/**
 * 修改草稿。
 * @param client OaClient 实例。
 * @param payload { media_id, index?, articles }。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_update.html
 */
export async function draftUpdate(
  client: OaClient,
  payload: { media_id: string; index?: number; articles?: Record<string, unknown> } & Record<
    string,
    unknown
  >,
): Promise<ErrResult> {
  const { media_id } = payload ?? {};
  if (!media_id) throw new Error('[draftUpdate] media_id is required');
  return client.request({ method: 'POST', url: '/cgi-bin/draft/update', body: payload });
}

/**
 * 批量获取草稿。
 * @param client OaClient 实例。
 * @param params offset、count、no_content。
 * @returns 草稿列表。
 * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_batchget.html
 */
export async function draftBatchGet(
  client: OaClient,
  { offset, count, no_content }: { offset: number; count: number; no_content?: 0 | 1 },
): Promise<{ total_count: number; item_count: number; item: Array<Record<string, unknown>> }> {
  if (offset === undefined || count === undefined) {
    throw new Error('[draftBatchGet] offset and count are required');
  }
  const body = no_content === undefined ? { offset, count } : { offset, count, no_content };
  return client.request({ method: 'POST', url: '/cgi-bin/draft/batchget', body });
}

/**
 * 获取草稿总数。
 * @param client OaClient 实例。
 * @returns 草稿总数。
 * @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_count.html
 */
export async function draftCount(client: OaClient): Promise<{ total_count: number }> {
  return client.request({ method: 'GET', url: '/cgi-bin/draft/count' });
}

/* -------------------- 草稿内商品卡片 -------------------- */

/**
 * 获取商品卡片信息。
 * @param client OaClient 实例。
 * @param params 按文档传入查询条件（如商品 ID 等）。
 * @returns 商品卡片信息。
 * @see https://developers.weixin.qq.com/doc/service/api/draftbox/shop/api_ecsgetproductcardinfo.html
 */
export async function ecsGetProductCardInfo(
  client: OaClient,
  params: Record<string, unknown> = {},
): Promise<Record<string, unknown>> {
  return client.request({
    method: 'POST',
    url: '/cgi-bin/draft/ecs/getproductcardinfo',
    body: params,
  });
}
