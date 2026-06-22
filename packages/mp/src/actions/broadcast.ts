/**
 * 直播（broadcast）核心端点（少量封装，其余请用逃生口 client.request）。
 *
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/live-broadcast/
 */
import type { QueryValue } from '@wxstack/core';
import type { MpClient } from '../client.js';
import type { JsonObject } from '../types.js';

/**
 * 获取直播间列表（含回放）。
 * @param query `{ start, limit }`，start 从 0 开始，limit 最大 100。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/live-broadcast/getLiveInfo.html
 */
export async function getLiveInfo(
  client: MpClient,
  body: { start: number; limit: number } & JsonObject,
): Promise<JsonObject> {
  return client.post<JsonObject>('/wxa/business/getliveinfo', body);
}

/**
 * 创建直播间。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/live-broadcast/createRoom.html
 */
export async function createLiveRoom(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/wxaapi/broadcast/room/create', body);
}

/**
 * 获取直播间推流地址。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/live-broadcast/getPushUrl.html
 */
export async function getLivePushUrl(
  client: MpClient,
  query: { roomId: number } & Record<string, QueryValue>,
): Promise<JsonObject> {
  return client.get<JsonObject>('/wxaapi/broadcast/room/getpushurl', query);
}

/**
 * 商品添加并提审。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/live-broadcast/goods/addGoods.html
 */
export async function addLiveGoods(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/wxaapi/broadcast/goods/add', body);
}
