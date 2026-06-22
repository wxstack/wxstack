/**
 * 企业微信回调（消息/事件）封装。
 *
 * 企业微信回调始终为安全模式：URL 校验与消息体都需 msg_signature + EncodingAESKey，
 * 且 receiveid 为 corpid（第三方应用为 suite_id）。本处复用 core 的回调内核。
 * @see https://developer.work.weixin.qq.com/document/path/90930
 */
import {
  type Logger,
  type MessageHandler,
  type RawCallback,
  type WebhookResult,
  createWebhook,
} from '@wxstack/core';

/** 企业微信回调配置。 */
export interface WecomWebhookOptions {
  /** 回调配置的 Token。 */
  token: string;
  /** 43 位 EncodingAESKey。 */
  encodingAESKey: string;
  /** 企业 ID（receiveid）；第三方应用应传 suite_id。 */
  corpid: string;
  /** 统一消息处理器。 */
  onMessage?: MessageHandler;
  /** 按 MsgType / event:xxx 精细分发的处理器表。 */
  handlers?: Record<string, MessageHandler>;
  /** 日志器。 */
  logger?: Logger;
}

/**
 * 创建企业微信回调处理器。
 * 返回的 `handle(raw)` 接收与框架解耦的 `{ method, rawBody, query, headers? }`，
 * 自动完成 URL 校验（echostr 解密）、消息验签解密、分发与加密回包。
 * @example
 * const wh = createWecomWebhook({ token, encodingAESKey, corpid, handlers: {
 *   text: (msg, ctx) => ctx.text(`收到：${msg.Content}`),
 *   'event:subscribe': (msg, ctx) => ctx.none(),
 * }});
 * const { status, body, contentType } = await wh.handle({ method, rawBody, query });
 */
export function createWecomWebhook(options: WecomWebhookOptions): {
  handle(raw: RawCallback): Promise<WebhookResult>;
} {
  return createWebhook({
    token: options.token,
    encodingAESKey: options.encodingAESKey,
    receiveId: options.corpid,
    onMessage: options.onMessage,
    handlers: options.handlers,
    logger: options.logger,
  });
}
