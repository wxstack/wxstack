/**
 * 物流助手（express）核心端点（少量封装，其余请用逃生口 client.request）。
 *
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/logistics/express-by-business/
 */
import type { MpClient } from '../client.js';
import type { JsonObject } from '../types.js';

/**
 * 生成运单。
 * @param body 形如 `{ order_id, openid, delivery_id, biz_id, sender, receiver, shipper, ... }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/logistics/express-by-business/addOrder.html
 */
export async function addExpressOrder(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/cgi-bin/express/business/order/add', body);
}

/**
 * 取消运单。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/logistics/express-by-business/cancelOrder.html
 */
export async function cancelExpressOrder(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/cgi-bin/express/business/order/cancel', body);
}

/**
 * 获取运单数据。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/logistics/express-by-business/getOrder.html
 */
export async function getExpressOrder(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/cgi-bin/express/business/order/get', body);
}

/**
 * 查询运单轨迹。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/logistics/express-by-business/getPath.html
 */
export async function getExpressPath(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/cgi-bin/express/business/path/get', body);
}

/**
 * 获取支持的快递公司列表。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/logistics/express-by-business/getAllDelivery.html
 */
export async function getAllDelivery(client: MpClient): Promise<JsonObject> {
  return client.get<JsonObject>('/cgi-bin/express/business/delivery/getall');
}
