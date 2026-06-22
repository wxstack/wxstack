/**
 * 微信小店事件回调。
 *
 * 小店的订单 / 售后 / 商品审核等事件，沿用微信统一的消息回调机制
 * （URL 验证 echostr、消息验签、安全模式 AES 解密、自动回包）。
 * 因此本处直接复用内核 `createWebhook`，仅做命名透传与说明。
 *
 * 事件类型仍在演进，未在此约束具体 Event；请在 `onMessage` / `handlers`
 * 中按 `message.Event` 自行分发，未覆盖的事件即「逃生口」式处理。
 *
 * @see https://developers.weixin.qq.com/doc/store/shop/API.html
 */
import { type WebhookOptions, createWebhook } from '@wxstack/core';

/** 小店回调配置（与内核 WebhookOptions 一致）。 */
export type ShopWebhookOptions = WebhookOptions;

/**
 * 创建微信小店事件回调处理器。
 *
 * @param options 回调配置（token 必填；安全模式需 encodingAESKey + receiveId）。
 * @returns 含 `handle(raw)` 的处理器，由各框架适配器薄封装写回 HTTP 响应。
 *
 * @example
 * ```ts
 * const hook = createShopWebhook({
 *   token: 'xxx',
 *   encodingAESKey: '43位密钥',
 *   receiveId: 'wx...appid',
 *   onMessage: (msg) => { console.log(msg.Event); },
 * });
 * const res = await hook.handle({ method, rawBody, query, headers });
 * ```
 */
export function createShopWebhook(options: ShopWebhookOptions): ReturnType<typeof createWebhook> {
  return createWebhook(options);
}
