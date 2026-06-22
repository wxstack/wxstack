/**
 * 留言管理（文章评论）与发布能力（Free Publish）接口。
 */
import type { OaClient } from '../client.js';
import type { ErrResult } from './menu.js';

/* -------------------- 留言管理（文章评论） -------------------- */

/**
 * 开启评论。
 * @param client OaClient 实例。
 * @param params msg_data_id 与 index。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_openarticlecomment.html
 */
export async function openArticleComment(
  client: OaClient,
  { msg_data_id, index = 0 }: { msg_data_id: number | string; index?: number },
): Promise<ErrResult> {
  if (msg_data_id === undefined || msg_data_id === null)
    throw new Error('[openArticleComment] msg_data_id is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/comment/open',
    body: { msg_data_id, index },
  });
}

/**
 * 关闭评论。
 * @param client OaClient 实例。
 * @param params msg_data_id 与 index。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_closecomment.html
 */
export async function closeComment(
  client: OaClient,
  { msg_data_id, index = 0 }: { msg_data_id: number | string; index?: number },
): Promise<ErrResult> {
  if (msg_data_id === undefined || msg_data_id === null)
    throw new Error('[closeComment] msg_data_id is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/comment/close',
    body: { msg_data_id, index },
  });
}

/** 拉取评论列表入参（type: 0 全部，1 精选）。 */
export interface ListCommentParams {
  msg_data_id: number | string;
  index?: number;
  begin: number;
  count: number;
  type?: 0 | 1;
}

/**
 * 拉取评论列表。
 * @param client OaClient 实例。
 * @param params msg_data_id、分页与类型。
 * @returns 评论列表。
 * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_listcomment.html
 */
export async function listComment(
  client: OaClient,
  { msg_data_id, index = 0, begin, count, type = 0 }: ListCommentParams,
): Promise<{ total: number; comment: Array<Record<string, unknown>> }> {
  if (msg_data_id === undefined || msg_data_id === null)
    throw new Error('[listComment] msg_data_id is required');
  if (begin === undefined || count === undefined)
    throw new Error('[listComment] begin and count are required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/comment/list',
    body: { msg_data_id, index, begin, count, type },
  });
}

/** 评论精选/删除等操作入参。 */
export interface CommentOpParams {
  msg_data_id: number | string;
  index?: number;
  user_comment_id: number | string;
}

/**
 * 将评论标记为精选。
 * @param client OaClient 实例。
 * @param params msg_data_id、index、user_comment_id。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_electcomment.html
 */
export async function electComment(
  client: OaClient,
  { msg_data_id, index = 0, user_comment_id }: CommentOpParams,
): Promise<ErrResult> {
  if (msg_data_id === undefined || msg_data_id === null)
    throw new Error('[electComment] msg_data_id is required');
  if (user_comment_id === undefined || user_comment_id === null)
    throw new Error('[electComment] user_comment_id is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/comment/markelect',
    body: { msg_data_id, index, user_comment_id },
  });
}

/**
 * 取消精选。
 * @param client OaClient 实例。
 * @param params msg_data_id、index、user_comment_id。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_unelectcomment.html
 */
export async function unelectComment(
  client: OaClient,
  { msg_data_id, index = 0, user_comment_id }: CommentOpParams,
): Promise<ErrResult> {
  if (msg_data_id === undefined || msg_data_id === null)
    throw new Error('[unelectComment] msg_data_id is required');
  if (user_comment_id === undefined || user_comment_id === null)
    throw new Error('[unelectComment] user_comment_id is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/comment/unmarkelect',
    body: { msg_data_id, index, user_comment_id },
  });
}

/**
 * 删除评论。
 * @param client OaClient 实例。
 * @param params msg_data_id、index、user_comment_id。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_delcomment.html
 */
export async function delComment(
  client: OaClient,
  { msg_data_id, index = 0, user_comment_id }: CommentOpParams,
): Promise<ErrResult> {
  if (msg_data_id === undefined || msg_data_id === null)
    throw new Error('[delComment] msg_data_id is required');
  if (user_comment_id === undefined || user_comment_id === null)
    throw new Error('[delComment] user_comment_id is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/comment/delete',
    body: { msg_data_id, index, user_comment_id },
  });
}

/**
 * 回复评论。
 * @param client OaClient 实例。
 * @param params msg_data_id、index、user_comment_id、content。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_replycomment.html
 */
export async function replyComment(
  client: OaClient,
  { msg_data_id, index = 0, user_comment_id, content }: CommentOpParams & { content: string },
): Promise<ErrResult> {
  if (msg_data_id === undefined || msg_data_id === null)
    throw new Error('[replyComment] msg_data_id is required');
  if (user_comment_id === undefined || user_comment_id === null)
    throw new Error('[replyComment] user_comment_id is required');
  if (!content) throw new Error('[replyComment] content is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/comment/reply/add',
    body: { msg_data_id, index, user_comment_id, content },
  });
}

/**
 * 删除回复。
 * @param client OaClient 实例。
 * @param params msg_data_id、index、user_comment_id。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/leaving/api_delreplycomment.html
 */
export async function delReplyComment(
  client: OaClient,
  { msg_data_id, index = 0, user_comment_id }: CommentOpParams,
): Promise<ErrResult> {
  if (msg_data_id === undefined || msg_data_id === null)
    throw new Error('[delReplyComment] msg_data_id is required');
  if (user_comment_id === undefined || user_comment_id === null)
    throw new Error('[delReplyComment] user_comment_id is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/comment/reply/delete',
    body: { msg_data_id, index, user_comment_id },
  });
}

/* -------------------- 发布能力（Free Publish） -------------------- */

/**
 * 提交发布。
 * @param client OaClient 实例。
 * @param params media_id。
 * @returns 结果（含 publish_id）。
 * @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_submit.html
 */
export async function freePublishSubmit(
  client: OaClient,
  { media_id }: { media_id: string },
): Promise<ErrResult & { publish_id?: string }> {
  if (!media_id) throw new Error('[freePublishSubmit] media_id is required');
  return client.request({ method: 'POST', url: '/cgi-bin/freepublish/submit', body: { media_id } });
}

/**
 * 查询发布结果。
 * @param client OaClient 实例。
 * @param params publish_id 或 article_id。
 * @returns 发布结果。
 * @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_get.html
 */
export async function freePublishGet(
  client: OaClient,
  params: { publish_id?: string; article_id?: string },
): Promise<Record<string, unknown>> {
  const { publish_id, article_id } = params ?? {};
  if (!publish_id && !article_id)
    throw new Error('[freePublishGet] publish_id or article_id is required');
  return client.request({ method: 'POST', url: '/cgi-bin/freepublish/get', body: params });
}

/**
 * 获取已发布列表。
 * @param client OaClient 实例。
 * @param params offset、count、no_content。
 * @returns 已发布列表。
 * @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_batchget.html
 */
export async function freePublishBatchGet(
  client: OaClient,
  { offset, count, no_content }: { offset: number; count: number; no_content?: 0 | 1 },
): Promise<{ total_count: number; item_count: number; item: Array<Record<string, unknown>> }> {
  if (offset === undefined || count === undefined)
    throw new Error('[freePublishBatchGet] offset and count are required');
  const body = no_content === undefined ? { offset, count } : { offset, count, no_content };
  return client.request({ method: 'POST', url: '/cgi-bin/freepublish/batchget', body });
}

/**
 * 通过 article_id 获取已发布素材。
 * @param client OaClient 实例。
 * @param params article_id。
 * @returns 已发布素材。
 * @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublishgetarticle.html
 */
export async function freePublishGetArticle(
  client: OaClient,
  { article_id }: { article_id: string },
): Promise<Record<string, unknown>> {
  if (!article_id) throw new Error('[freePublishGetArticle] article_id is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/freepublish/getarticle',
    body: { article_id },
  });
}

/**
 * 删除已发布素材。
 * @param client OaClient 实例。
 * @param params article_id。
 * @returns 结果。
 * @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublishdelete.html
 */
export async function freePublishDelete(
  client: OaClient,
  { article_id }: { article_id: string },
): Promise<ErrResult> {
  if (!article_id) throw new Error('[freePublishDelete] article_id is required');
  return client.request({
    method: 'POST',
    url: '/cgi-bin/freepublish/delete',
    body: { article_id },
  });
}
