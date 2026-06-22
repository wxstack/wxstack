/**
 * 订阅消息接口。
 *
 * 端点函数为纯函数：接收已装配好的 BaseClient 与请求体，返回 client.request(...)。
 */
import type { BaseClient } from '@wxstack/core';

/** 订阅消息发送返回结构。 */
export interface SubscribeMessageResult {
  errcode: number;
  errmsg: string;
  [key: string]: unknown;
}

/**
 * 发送订阅消息。
 *
 * 向用户下发一条一次性/长期订阅消息。请求体须含 `touser`(openid)、`template_id`、`data`，
 * 可选 `page`、`miniprogram_state`、`lang` 等。内核自动附加 access_token（query）。
 *
 * @param client 已装配的客户端。
 * @param body 订阅消息请求体。
 * @see https://developers.weixin.qq.com/minigame/dev/api-backend/open-api/subscribe-message/sendSubscribeMessage.html
 */
export function sendSubscribeMessage(
  client: BaseClient,
  body: Record<string, unknown>,
): Promise<SubscribeMessageResult> {
  return client.request<SubscribeMessageResult>({
    method: 'POST',
    url: '/cgi-bin/message/subscribe/send',
    body,
  });
}
