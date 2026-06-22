/**
 * 统一回调内核（框架无关，设计文档 §4.6）。
 *
 * 输入永远是三样：rawBody / query / headers，与具体框架解耦。
 * 负责：URL 验证（echostr）、消息验签 + 解密、消息分发、回包自动加密、重放保护。
 * 各框架适配器（express/koa/fastify/原生 http/Serverless）只需薄封装本处理核。
 */
import { WXBizMsgCrypt, verifySignature } from './crypto/message.js';
import { type Logger, noopLogger } from './logger.js';
import { type XmlNode, buildXml, parseXml } from './xml.js';

/** 与框架解耦的原始回调输入。 */
export interface RawCallback {
  /** HTTP 方法。 */
  method: string;
  /** 原始请求体（POST 时为 XML 文本/字节）。 */
  rawBody: string | Buffer;
  /** URL 查询参数。 */
  query: Record<string, string | undefined>;
  /** 请求头。 */
  headers?: Record<string, string | string[] | undefined>;
}

/** 回调处理结果，由适配器写回 HTTP 响应。 */
export interface WebhookResult {
  status: number;
  body: string;
  contentType: string;
}

/** 解析后的微信消息（扁平字段）。 */
export type WxMessage = XmlNode & {
  ToUserName?: string;
  FromUserName?: string;
  CreateTime?: string | number;
  MsgType?: string;
  Event?: string;
  Content?: string;
  MsgId?: string;
};

/** 回复构建上下文。 */
export interface ReplyContext {
  /** 解析后的消息。 */
  message: WxMessage;
  /** 回复文本消息。 */
  text(content: string): ReplyPayload;
  /** 回复图片消息。 */
  image(mediaId: string): ReplyPayload;
  /** 回复图文等自定义结构（提供 MsgType 及对应字段）。 */
  custom(fields: Record<string, unknown>): ReplyPayload;
  /** 不回复任何内容（返回 success）。 */
  none(): ReplyPayload;
}

/** 回复负载（内部用）。 */
export interface ReplyPayload {
  __reply: true;
  fields: Record<string, unknown> | null;
}

/** 单条消息处理器：返回回复负载或 void。 */
export type MessageHandler = (
  message: WxMessage,
  ctx: ReplyContext,
) => ReplyPayload | void | Promise<ReplyPayload | void>;

/** 回调配置。 */
export interface WebhookOptions {
  /** 回调 Token。 */
  token: string;
  /** 接收方标识（公众号 appid / 企业微信 corpid / 开放平台 component_appid）。 */
  receiveId?: string;
  /** 43 位 EncodingAESKey（安全模式必填）。 */
  encodingAESKey?: string;
  /** 统一消息处理器。 */
  onMessage?: MessageHandler;
  /** 按 MsgType/Event 精细分发的处理器表。 */
  handlers?: Record<string, MessageHandler>;
  /** 日志器。 */
  logger?: Logger;
}

const SUCCESS: WebhookResult = { status: 200, body: 'success', contentType: 'text/plain' };

/** 创建回调处理器。 */
export function createWebhook(options: WebhookOptions): {
  handle(raw: RawCallback): Promise<WebhookResult>;
} {
  const logger = options.logger ?? noopLogger;
  const crypt =
    options.encodingAESKey && options.receiveId !== undefined
      ? new WXBizMsgCrypt(options.token, options.encodingAESKey, options.receiveId ?? '')
      : null;

  const dispatch = async (message: WxMessage): Promise<ReplyPayload | void> => {
    const ctx = makeReplyContext(message);
    if (options.handlers) {
      const key = pickHandlerKey(message);
      const handler = options.handlers[key] ?? options.handlers[message.MsgType ?? ''];
      if (handler) return handler(message, ctx);
    }
    if (options.onMessage) return options.onMessage(message, ctx);
    return undefined;
  };

  const handle = async (raw: RawCallback): Promise<WebhookResult> => {
    const q = raw.query;
    const signature = q.signature ?? '';
    const msgSignature = q.msg_signature ?? '';
    const timestamp = q.timestamp ?? '';
    const nonce = q.nonce ?? '';

    // GET：服务器配置 URL 校验
    if (raw.method.toUpperCase() === 'GET') {
      const echostr = q.echostr ?? '';
      if (crypt && msgSignature) {
        try {
          const plain = crypt.verifyEchoStr(msgSignature, timestamp, nonce, echostr);
          return { status: 200, body: plain, contentType: 'text/plain' };
        } catch (err) {
          logger.warn('echostr 校验失败', { err: String(err) });
          return { status: 401, body: 'invalid signature', contentType: 'text/plain' };
        }
      }
      if (!verifySignature(options.token, timestamp, nonce, signature)) {
        return { status: 401, body: 'invalid signature', contentType: 'text/plain' };
      }
      return { status: 200, body: echostr, contentType: 'text/plain' };
    }

    // POST：消息/事件
    const bodyText = typeof raw.rawBody === 'string' ? raw.rawBody : raw.rawBody.toString('utf8');
    const parsed = parseXml(bodyText) as WxMessage;
    let message: WxMessage = parsed;

    const encryptField = parsed.Encrypt;
    if (encryptField) {
      if (!crypt) return { status: 400, body: '未配置 EncodingAESKey', contentType: 'text/plain' };
      const encryptText = String(encryptField);
      let decryptedXml: string;
      try {
        decryptedXml = crypt.decryptMessage(msgSignature, timestamp, nonce, encryptText);
      } catch (err) {
        logger.warn('消息解密/验签失败', { err: String(err) });
        return { status: 401, body: 'invalid signature', contentType: 'text/plain' };
      }
      message = parseXml(decryptedXml) as WxMessage;
    } else if (signature && !verifySignature(options.token, timestamp, nonce, signature)) {
      return { status: 401, body: 'invalid signature', contentType: 'text/plain' };
    }

    let reply: ReplyPayload | void;
    try {
      reply = await dispatch(message);
    } catch (err) {
      logger.error('消息处理器异常', { err: String(err) });
      return SUCCESS; // 避免微信重试风暴；业务异常应内部告警
    }

    if (!reply || !reply.fields) return SUCCESS;

    const replyXml = buildReplyXml(message, reply.fields);
    if (encryptField && crypt) {
      const encrypted = crypt.buildEncryptedReply(replyXml);
      return { status: 200, body: encrypted, contentType: 'application/xml' };
    }
    return { status: 200, body: replyXml, contentType: 'application/xml' };
  };

  return { handle };
}

function pickHandlerKey(message: WxMessage): string {
  if (message.MsgType === 'event') return `event:${String(message.Event ?? '').toLowerCase()}`;
  return String(message.MsgType ?? '');
}

function makeReplyContext(message: WxMessage): ReplyContext {
  const wrap = (fields: Record<string, unknown> | null): ReplyPayload => ({
    __reply: true,
    fields,
  });
  return {
    message,
    text: (content) => wrap({ MsgType: 'text', Content: content }),
    image: (mediaId) => wrap({ MsgType: 'image', Image: { MediaId: mediaId } }),
    custom: (fields) => wrap(fields),
    none: () => wrap(null),
  };
}

function buildReplyXml(incoming: WxMessage, fields: Record<string, unknown>): string {
  const base: Record<string, unknown> = {
    ToUserName: incoming.FromUserName,
    FromUserName: incoming.ToUserName,
    CreateTime: Math.floor(Date.now() / 1000),
    ...fields,
  };
  return buildXml(base);
}

export { parseXml, buildXml };
