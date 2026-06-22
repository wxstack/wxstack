/**
 * 发货信息管理（支付后发货）相关端点，路径前缀 `/wxa/sec/order/`。
 *
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/order-shipping/
 */
import type { MpClient } from '../client.js';
import type { JsonObject } from '../types.js';

/**
 * 发货信息录入（单个商品发货 / 单笔订单）。
 * @param body 形如 `{ order_key, logistics_type, delivery_mode, shipping_list, upload_time, payer }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/order-shipping/order-shipping-info/uploadShippingInfo.html
 */
export async function uploadShippingInfo(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/wxa/sec/order/upload_shipping_info', body);
}

/**
 * 合单发货信息录入。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/order-shipping/order-shipping-info/uploadCombinedShippingInfo.html
 */
export async function uploadCombinedShippingInfo(
  client: MpClient,
  body: JsonObject,
): Promise<JsonObject> {
  return client.post<JsonObject>('/wxa/sec/order/upload_combined_shipping_info', body);
}

/**
 * 查询订单发货状态。
 * @param body 形如 `{ transaction_id } | { merchant_id, sub_merchant_id, merchant_trade_no }`。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/order-shipping/order-shipping-info/getOrder.html
 */
export async function getOrder(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/wxa/sec/order/get_order', body);
}

/**
 * 查询小程序是否已开通发货信息管理服务。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/order-shipping/order-shipping-info/isTradeManaged.html
 */
export async function isTradeManaged(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/wxa/sec/order/is_trade_managed', body);
}

/**
 * 确认收货提醒接口（提醒用户确认收货）。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/order-shipping/order-shipping-info/notifyConfirmReceive.html
 */
export async function notifyConfirmReceive(
  client: MpClient,
  body: JsonObject,
): Promise<JsonObject> {
  return client.post<JsonObject>('/wxa/sec/order/notify_confirm_receive', body);
}

/**
 * 消息跳转路径设置（设置消息卡片点击后跳转的小程序页面）。
 * @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/order-shipping/order-shipping-info/setMsgJumpPath.html
 */
export async function setMsgJumpPath(client: MpClient, body: JsonObject): Promise<JsonObject> {
  return client.post<JsonObject>('/wxa/sec/order/set_msg_jump_path', body);
}
