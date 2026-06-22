/**
 * @wxstack/pay 配置与关键类型。
 *
 * 微信支付 v3 的鉴权方式与公众号/小程序不同：不使用 access_token，
 * 而是「每个请求都用商户 API 私钥做 RSA-SHA256 签名」，应答用平台证书或
 * 「微信支付公钥」验签。因此本包不复用核心的 BaseClient/TokenManager，
 * 而是直接组合 core 的 FetchTransport 与 LocalSigner/LocalVerifier。
 */
import type { Logger, QueryValue, ResponseType, Transport } from '@wxstack/core';

/** 微信支付 v3 API 基址。 */
export const PAY_BASE_URL = 'https://api.mch.weixin.qq.com';

/** 服务商（特约商户）模式配置。 */
export interface SpConfig {
  /** 服务商商户号（sp_mchid）。 */
  spMchid: string;
  /** 服务商 appid（sp_appid，可选）。 */
  spAppid?: string;
}

/** PayClient 配置。 */
export interface PayClientConfig {
  /** 商户号（直连模式）或服务商商户号下属能力对应的商户号。 */
  mchid: string;
  /** 商户绑定的公众号/小程序 appid（用于前端调起支付时拼 paySign，可后续在方法里覆盖）。 */
  appid?: string;
  /** 商户 API 私钥（PEM 字符串或 Buffer），用于请求签名与敏感字段下行解密。 */
  privateKey: string | Buffer;
  /** 商户 API 证书序列号（Authorization 头 serial_no）。 */
  serialNo: string;
  /** APIv3 密钥（32 字节），用于回调/证书解密。 */
  apiV3Key: string;
  /**
   * 微信支付公钥（PEM 字符串或 Buffer）。
   * 启用「微信支付公钥」模式时配合 {@link wechatPayPublicKeyId} 提供。
   */
  wechatPayPublicKey?: string | Buffer;
  /** 微信支付公钥 ID（形如 `PUB_KEY_ID_...`），作为验签时的序列号。 */
  wechatPayPublicKeyId?: string;
  /** 平台证书列表（PEM）。「平台证书」模式可预置，亦可通过 certificates() 动态下载。 */
  platformCerts?: Array<{ serialNo: string; certificate: string }>;
  /** 自定义传输实现，默认 FetchTransport（baseURL=PAY_BASE_URL）。 */
  transport?: Transport;
  /** 请求超时毫秒，默认沿用传输层默认值。 */
  timeoutMs?: number;
  /** 日志器，默认 noopLogger。 */
  logger?: Logger;
  /** 服务商模式配置。 */
  sp?: SpConfig;
}

/** 单次请求选项。 */
export interface PayRequestOptions {
  /** JSON 请求体（GET 等无体请求省略）。 */
  body?: object;
  /** 查询参数（会一并参与签名）。 */
  query?: Record<string, QueryValue>;
  /**
   * 含敏感字段加密时，对应解密用的证书/公钥序列号，
   * 会写入 `Wechatpay-Serial` 头告知微信用哪把公钥解密。
   */
  sensitiveSerial?: string;
  /** 是否对应答做验签（默认 true；无可用公钥时自动跳过并告警）。 */
  verify?: boolean;
  /** 期望响应类型，默认 'auto'。下载账单等二进制场景传 'arraybuffer'。 */
  responseType?: ResponseType;
  /** 取消信号。 */
  signal?: AbortSignal;
}

/** 回调输入。 */
export interface CallbackInput {
  /** 回调请求头（含 Wechatpay-Signature/Timestamp/Nonce/Serial）。 */
  headers: Record<string, string | string[] | undefined>;
  /** 回调原始报文体字符串（验签与解密都需原文，不能用反序列化对象）。 */
  body: string;
}

/** 回调通知报文外层结构。 */
export interface CallbackEnvelope {
  id: string;
  create_time: string;
  event_type: string;
  resource_type: string;
  resource: {
    algorithm: string;
    ciphertext: string;
    nonce: string;
    associated_data?: string;
    original_type: string;
  };
  summary?: string;
}

/** 回调解密结果。 */
export interface CallbackDecryptResult<T = Record<string, unknown>> {
  /** 事件类型，如 `TRANSACTION.SUCCESS`、`REFUND.SUCCESS`。 */
  event_type: string;
  /** 资源类型，如 `transaction`、`refund`。 */
  resource_type: string;
  /** 解密后的业务对象。 */
  resource: T;
  /** 原始外层报文。 */
  envelope: CallbackEnvelope;
}

/** 下载到的平台证书。 */
export interface DecryptedCertificate {
  serialNo: string;
  certificate: string;
  effectiveTime?: string;
  expireTime?: string;
}
