/**
 * 第三方平台「授权事件 / ticket 推送」回调内核。
 *
 * 微信向第三方平台推送两类消息到「授权事件接收 URL」：
 * - component_verify_ticket：每 10 分钟一次，必须落库（否则 component_access_token 断链）；
 * - authorized / unauthorized / updateauthorized：公众号/小程序对第三方平台的授权变更。
 *
 * 全部为安全模式（密文），用 WXBizMsgCrypt(componentToken, componentEncodingAESKey,
 * componentAppId) 解密（receiveid = component_appid）。本内核自动落库 ticket，并把已
 * 解析的事件分发给可选回调；始终向微信返回明文 "success" 以避免重试风暴。
 *
 * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/api/component_verify_ticket.html
 */
import { type Logger, WXBizMsgCrypt, type XmlNode, noopLogger, parseXml } from '@wxstack/core';
import type { ComponentClient } from './client.js';

/**
 * 解析后的授权事件（扁平字段，字段名与微信 XML 标签一致）。
 * 用交叉类型而非 interface extends，以保留 XmlNode 的索引签名同时声明已知字段。
 */
export type ComponentEvent = XmlNode & {
  /** 第三方平台 AppID。 */
  AppId?: string;
  /** 时间戳。 */
  CreateTime?: string | number;
  /**
   * 事件类型：
   * - component_verify_ticket
   * - authorized
   * - unauthorized
   * - updateauthorized
   */
  InfoType?: string;
  /** verify_ticket 推送时的票据。 */
  ComponentVerifyTicket?: string;
  /** 授权方 AppID（授权变更类事件）。 */
  AuthorizerAppid?: string;
  /** 授权码（authorized / updateauthorized）。 */
  AuthorizationCode?: string;
  /** 授权码有效结束时间。 */
  AuthorizationCodeExpiredTime?: string | number;
  /** 预授权码。 */
  PreAuthCode?: string;
};

/** 与框架解耦的原始回调输入。 */
export interface RawComponentCallback {
  /** HTTP 方法。 */
  method: string;
  /** 原始请求体（POST 时为密文 XML）。 */
  rawBody: string | Buffer;
  /** URL 查询参数（msg_signature/timestamp/nonce 等）。 */
  query: Record<string, string | undefined>;
  /** 请求头（可选）。 */
  headers?: Record<string, string | string[] | undefined>;
}

/** 回调处理结果，由适配器写回 HTTP 响应。 */
export interface ComponentWebhookResult {
  status: number;
  body: string;
  contentType: string;
}

/** 第三方平台回调配置。 */
export interface ComponentWebhookOptions {
  /** 第三方平台消息校验 Token。 */
  token: string;
  /** 第三方平台 43 位 EncodingAESKey。 */
  encodingAESKey: string;
  /** 第三方平台 AppID（receiveid）。 */
  componentAppId: string;
  /**
   * 可选：传入 ComponentClient 以自动落库 ticket / refresh_token。
   * 传入后即便不提供 onVerifyTicket，也会自动调用 client.setVerifyTicket。
   */
  client?: ComponentClient;
  /** 收到 ticket 推送（落库已自动完成，可在此做额外处理）。 */
  onVerifyTicket?: (ticket: string, event: ComponentEvent) => void | Promise<void>;
  /** 公众号/小程序授权成功。 */
  onAuthorized?: (event: ComponentEvent) => void | Promise<void>;
  /** 取消授权。 */
  onUnauthorized?: (event: ComponentEvent) => void | Promise<void>;
  /** 更新授权。 */
  onUpdateAuthorized?: (event: ComponentEvent) => void | Promise<void>;
  /** 兜底处理器：未匹配上述类型时调用。 */
  onEvent?: (event: ComponentEvent) => void | Promise<void>;
  /** 日志器。 */
  logger?: Logger;
}

const SUCCESS: ComponentWebhookResult = { status: 200, body: 'success', contentType: 'text/plain' };
const FAIL: ComponentWebhookResult = {
  status: 401,
  body: 'invalid signature',
  contentType: 'text/plain',
};

/**
 * 创建第三方平台授权事件 / ticket 推送回调处理器。
 *
 * @example
 * const webhook = createComponentWebhook({
 *   token, encodingAESKey, componentAppId, client,
 *   onAuthorized: (e) => console.log('授权', e.AuthorizerAppid),
 * });
 * const res = await webhook.handle({ method: 'POST', rawBody, query });
 */
export function createComponentWebhook(options: ComponentWebhookOptions): {
  handle(raw: RawComponentCallback): Promise<ComponentWebhookResult>;
} {
  const logger = options.logger ?? noopLogger;
  const crypt = new WXBizMsgCrypt(options.token, options.encodingAESKey, options.componentAppId);

  const dispatch = async (event: ComponentEvent): Promise<void> => {
    const infoType = String(event.InfoType ?? '').toLowerCase();
    switch (infoType) {
      case 'component_verify_ticket': {
        const ticket = String(event.ComponentVerifyTicket ?? '');
        if (ticket && options.client) {
          await options.client.setVerifyTicket(ticket);
        }
        if (options.onVerifyTicket) await options.onVerifyTicket(ticket, event);
        return;
      }
      case 'authorized':
        if (options.onAuthorized) await options.onAuthorized(event);
        else if (options.onEvent) await options.onEvent(event);
        return;
      case 'unauthorized':
        if (options.onUnauthorized) await options.onUnauthorized(event);
        else if (options.onEvent) await options.onEvent(event);
        return;
      case 'updateauthorized':
        if (options.onUpdateAuthorized) await options.onUpdateAuthorized(event);
        else if (options.onEvent) await options.onEvent(event);
        return;
      default:
        if (options.onEvent) await options.onEvent(event);
        return;
    }
  };

  const handle = async (raw: RawComponentCallback): Promise<ComponentWebhookResult> => {
    const q = raw.query;
    const msgSignature = q.msg_signature ?? '';
    const timestamp = q.timestamp ?? '';
    const nonce = q.nonce ?? '';

    // 第三方平台授权事件只走 POST 密文，无 GET URL 校验环节。
    if (raw.method.toUpperCase() !== 'POST') {
      return SUCCESS;
    }

    const bodyText = typeof raw.rawBody === 'string' ? raw.rawBody : raw.rawBody.toString('utf8');
    const parsed = parseXml(bodyText) as XmlNode & { Encrypt?: string };
    const encryptText = parsed.Encrypt;
    if (!encryptText) {
      logger.warn('第三方平台回调缺少 Encrypt 字段');
      return FAIL;
    }

    let decryptedXml: string;
    try {
      decryptedXml = crypt.decryptMessage(msgSignature, timestamp, nonce, String(encryptText));
    } catch (err) {
      logger.warn('第三方平台回调解密/验签失败', { err: String(err) });
      return FAIL;
    }

    const event = parseXml(decryptedXml) as ComponentEvent;
    try {
      await dispatch(event);
    } catch (err) {
      // 业务异常不向微信暴露，避免触发重试风暴；ticket 已尽力落库。
      logger.error('第三方平台事件处理器异常', { err: String(err), infoType: event.InfoType });
    }
    return SUCCESS;
  };

  return { handle };
}
