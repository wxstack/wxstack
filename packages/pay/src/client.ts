/**
 * 微信支付 v3 客户端：自实现「每请求 RSA-SHA256 签名」鉴权，并暴露逃生口。
 *
 * 与 BaseClient 的差异：微信支付不使用 access_token，而是每个请求都用商户 API 私钥
 * 对「方法 + URL(path+query) + 时间戳 + 随机串 + 请求体」签名，应答用平台证书或
 * 「微信支付公钥」验签。故本类不继承 BaseClient，直接组合 core 的传输与签名/验签器。
 *
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012365334 （签名生成）
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012071382 （应答/回调验签）
 */
import crypto from 'node:crypto';
import {
  FetchTransport,
  LocalSigner,
  LocalVerifier,
  WxApiError,
  WxCryptoError,
  WxHttpError,
  aesGcmDecrypt,
  buildAppPaySign,
  buildJsapiPaySign,
  buildQuery,
  buildSignMessage,
  buildVerifyMessage,
  nonceStr,
  noopLogger,
  rsaOaepDecrypt,
  rsaOaepEncrypt,
  unixTimestamp,
} from '@wxstack/core';
import type { HttpMethod, HttpResponse, Logger, Transport } from '@wxstack/core';
import { type GeneratedApi, createGeneratedApi } from './generated/endpoints.js';
import type {
  CallbackDecryptResult,
  CallbackEnvelope,
  CallbackInput,
  DecryptedCertificate,
  PayClientConfig,
  PayRequestOptions,
  SpConfig,
} from './types.js';
import { PAY_BASE_URL } from './types.js';

/** 取单个响应头（兼容 string | string[]）。 */
function headerValue(
  headers: Record<string, string | string[] | undefined>,
  name: string,
): string | undefined {
  const lower = name.toLowerCase();
  for (const [k, v] of Object.entries(headers)) {
    if (k.toLowerCase() === lower) {
      return Array.isArray(v) ? v[0] : v;
    }
  }
  return undefined;
}

/** 微信支付错误体结构。 */
interface PayErrorBody {
  code?: string;
  message?: string;
  detail?: unknown;
}

/**
 * 微信支付 v3 客户端。
 *
 * 提供「高层语义方法」（见各 actions 分组与本类挂载的命名空间）与
 * 「逃生口」 {@link PayClient.request} / {@link PayClient.requestRaw}，
 * 后者可调用任意尚未封装的 v3 端点（自动带签名）。
 */
export class PayClient {
  /** 商户号。 */
  readonly mchid: string;
  /** 商户绑定 appid（可空）。 */
  readonly appid?: string;
  /** 服务商模式配置（可空）。 */
  readonly sp?: SpConfig;
  /**
   * 全量接口表：覆盖官方文档抓取到的全部支付 v3 端点（自动签名薄封装）。
   * 用法：`client.api.<operationId>(body?, query?, { params })`，
   * 其中 `params` 用于替换路径占位符（如 `{ out_trade_no }`）。端点清单见 docs/api-specs/pay.json。
   */
  readonly api: GeneratedApi;

  /** APIv3 密钥（回调/证书解密）。 */
  private readonly apiV3Key: string;
  /** 商户私钥对象（敏感字段下行解密）。 */
  private readonly privateKey: crypto.KeyObject;
  /** 请求签名器。 */
  private readonly signer: LocalSigner;
  /** 应答/回调验签器。 */
  private readonly verifier: LocalVerifier;
  /** 传输实现。 */
  private readonly transport: Transport;
  /** 日志器。 */
  private readonly logger: Logger;
  /** 单请求超时。 */
  private readonly timeoutMs?: number;
  /** 微信支付公钥模式下的公钥 ID（作为加密敏感字段时的首选序列号）。 */
  private readonly wechatPayPublicKeyId?: string;
  /** 微信支付公钥（PEM），用于敏感字段上行加密。 */
  private readonly wechatPayPublicKeyPem?: string;
  /** 已加载的平台证书 PEM 缓存（serialNo → PEM），用于敏感字段上行加密。 */
  private readonly platformCertPems = new Map<string, string>();

  constructor(config: PayClientConfig) {
    this.mchid = config.mchid;
    this.appid = config.appid;
    this.sp = config.sp;
    this.apiV3Key = config.apiV3Key;
    this.timeoutMs = config.timeoutMs;
    this.logger = config.logger ?? noopLogger;

    this.privateKey = crypto.createPrivateKey(config.privateKey);
    this.signer = new LocalSigner(config.privateKey, config.serialNo);
    this.verifier = new LocalVerifier();

    // 微信支付公钥模式：以公钥 ID 作序列号载入。
    if (config.wechatPayPublicKey && config.wechatPayPublicKeyId) {
      this.wechatPayPublicKeyId = config.wechatPayPublicKeyId;
      this.wechatPayPublicKeyPem =
        typeof config.wechatPayPublicKey === 'string'
          ? config.wechatPayPublicKey
          : config.wechatPayPublicKey.toString('utf8');
      this.verifier.addPublicKey(config.wechatPayPublicKeyId, config.wechatPayPublicKey);
    }

    // 平台证书模式：预置证书。
    for (const c of config.platformCerts ?? []) {
      this.verifier.addCertificate(c.serialNo, c.certificate);
      this.platformCertPems.set(c.serialNo, c.certificate);
    }

    this.transport =
      config.transport ??
      new FetchTransport({ baseURL: PAY_BASE_URL, timeoutMs: config.timeoutMs });

    // 全量接口表：经签名逃生口 request(method, path, opts) 适配。
    this.api = createGeneratedApi({
      request: (o) =>
        this.request(o.method ?? 'POST', o.url, {
          body: o.body as object | undefined,
          query: o.query,
        }),
    });
  }

  /** 商户证书序列号。 */
  get serialNo(): string {
    return this.signer.serialNo;
  }

  /**
   * 逃生口（带响应体解包）：对任意 v3 端点发起带签名的请求。
   *
   * 用于调用本包尚未封装的接口。2xx 直接返回响应体对象；204 无内容返回 undefined；
   * 非 2xx 解析微信支付错误体（{code,message,detail}）后抛出 {@link WxApiError}。
   *
   * @param method HTTP 方法。
   * @param path 接口路径（如 `/v3/pay/transactions/jsapi`，不含域名）。
   * @param opts 请求选项（body / query / 敏感字段序列号 / 是否验签）。
   */
  async request<T = unknown>(
    method: HttpMethod,
    path: string,
    opts: PayRequestOptions = {},
  ): Promise<T> {
    const resp = await this.send<T>(method, path, opts);
    if (resp.status === 204) return undefined as T;
    return resp.data;
  }

  /**
   * 逃生口（暴露完整响应）：返回含 raw（Buffer）、headers、status 的完整响应。
   * 适合下载账单等需要原始字节的场景。仍会带签名。
   */
  async requestRaw<T = unknown>(
    method: HttpMethod,
    path: string,
    opts: PayRequestOptions = {},
  ): Promise<HttpResponse<T>> {
    return this.send<T>(method, path, opts);
  }

  /** 内部：构造签名头、发送请求、（可选）验签并归一化错误。 */
  private async send<T>(
    method: HttpMethod,
    path: string,
    opts: PayRequestOptions,
  ): Promise<HttpResponse<T>> {
    const query = buildQuery(opts.query);
    const urlPath = `${path}${query}`; // 待签名 URL 必须含查询串
    const bodyStr = opts.body ? JSON.stringify(opts.body) : '';
    const ts = unixTimestamp();
    const nonce = nonceStr();
    const message = buildSignMessage(method, urlPath, ts, nonce, bodyStr);
    const { signature } = await this.signer.sign(message);

    const authorization = `WECHATPAY2-SHA256-RSA2048 mchid="${this.mchid}",nonce_str="${nonce}",timestamp="${ts}",serial_no="${this.serialNo}",signature="${signature}"`;

    const headers: Record<string, string> = {
      Authorization: authorization,
      Accept: 'application/json',
      'User-Agent': 'wxstack-pay',
    };
    if (bodyStr) headers['Content-Type'] = 'application/json';
    if (opts.sensitiveSerial) headers['Wechatpay-Serial'] = opts.sensitiveSerial;

    let resp: HttpResponse<T>;
    try {
      resp = await this.transport.request<T>({
        method,
        url: urlPath, // 相对路径，配合 FetchTransport.baseURL
        headers,
        body: bodyStr || undefined,
        responseType: opts.responseType ?? 'auto',
        signal: opts.signal,
        timeoutMs: this.timeoutMs,
      });
    } catch (err) {
      throw this.normalizeError(err);
    }
    if (opts.verify !== false) {
      this.verifyResponse(resp.headers, resp.raw.toString('utf8'));
    }
    return resp;
  }

  /** 将微信支付的 HTTP 错误体（{code,message,detail}）转为 WxApiError。 */
  private normalizeError(err: unknown): unknown {
    if (!(err instanceof WxHttpError)) return err;
    const details = err.details as { body?: string } | undefined;
    let parsed: PayErrorBody = {};
    if (details?.body) {
      try {
        parsed = JSON.parse(details.body) as PayErrorBody;
      } catch {
        parsed = { message: details.body };
      }
    }
    const code = parsed.code ?? `HTTP_${err.status}`;
    const message = parsed.message ?? err.message;
    // 微信支付错误码是字符串（如 ORDER_CLOSED），统一以 errcode=-1 承载，字符串 code 放 hint/details。
    return new WxApiError(
      message,
      -1,
      { status: err.status, code, detail: parsed.detail, body: details?.body },
      {
        hint: code,
      },
    );
  }

  /**
   * 应答验签：用响应头 Wechatpay-Timestamp/Nonce/Signature/Serial + 原始报文体验签。
   * 找不到对应序列号公钥时跳过并告警（首次未下载平台证书属正常）。
   */
  private verifyResponse(headers: Record<string, string>, rawBody: string): void {
    const timestamp = headers['wechatpay-timestamp'];
    const nonce = headers['wechatpay-nonce'];
    const signature = headers['wechatpay-signature'];
    const serial = headers['wechatpay-serial'];
    if (!timestamp || !nonce || !signature || !serial) {
      // 无验签头（如部分下载接口），跳过。
      return;
    }
    if (!this.verifier.serials.includes(serial)) {
      this.logger.warn('支付应答验签跳过：未加载对应序列号公钥', { serial });
      return;
    }
    const message = buildVerifyMessage(timestamp, nonce, rawBody);
    // verify 为异步，但 LocalVerifier 内部同步；此处用 fire-and-check 包装。
    void this.verifier
      .verify(serial, message, signature)
      .then((ok) => {
        if (!ok) this.logger.error('支付应答验签失败', { serial });
      })
      .catch((e: unknown) => this.logger.error('支付应答验签异常', { error: e }));
  }

  // ──────────────────────────── 平台证书 ────────────────────────────

  /**
   * 下载并解密平台证书，载入验签器（addCertificate），返回证书列表。
   * 每个 encrypt_certificate 用 APIv3Key 做 AES-256-GCM 解密。
   * @see https://pay.weixin.qq.com/doc/v3/merchant/4012064703
   */
  async certificates(): Promise<DecryptedCertificate[]> {
    interface CertItem {
      serial_no: string;
      effective_time?: string;
      expire_time?: string;
      encrypt_certificate: {
        algorithm: string;
        nonce: string;
        associated_data?: string;
        ciphertext: string;
      };
    }
    // 下载证书接口本身不验签（首次无证书可用）。
    const data = await this.request<{ data: CertItem[] }>('GET', '/v3/certificates', {
      verify: false,
    });
    const result: DecryptedCertificate[] = [];
    for (const item of data.data ?? []) {
      const enc = item.encrypt_certificate;
      const pem = aesGcmDecrypt(
        this.apiV3Key,
        enc.nonce,
        enc.ciphertext,
        enc.associated_data ?? '',
      );
      this.verifier.addCertificate(item.serial_no, pem);
      this.platformCertPems.set(item.serial_no, pem);
      result.push({
        serialNo: item.serial_no,
        certificate: pem,
        effectiveTime: item.effective_time,
        expireTime: item.expire_time,
      });
    }
    return result;
  }

  // ──────────────────────────── 敏感字段 ────────────────────────────

  /**
   * 加密敏感字段（上行）：RSA-OAEP(SHA-1)，优先用微信支付公钥，否则用最新平台证书公钥。
   * 返回 Base64 密文；请求时需将对应序列号通过 sensitiveSerial 传入（写 Wechatpay-Serial 头）。
   * @returns { ciphertext, serial } serial 即解密所用公钥序列号。
   */
  encryptSensitive(plaintext: string): { ciphertext: string; serial: string } {
    if (this.wechatPayPublicKeyId && this.wechatPayPublicKeyPem) {
      const pub = crypto.createPublicKey(this.wechatPayPublicKeyPem);
      return {
        ciphertext: rsaOaepEncrypt(plaintext, pub),
        serial: this.wechatPayPublicKeyId,
      };
    }
    const latest = [...this.platformCertPems.entries()].pop();
    if (!latest) {
      throw new WxCryptoError(
        '无可用平台公钥用于敏感字段加密，请配置 wechatPayPublicKey 或先调用 certificates() 下载平台证书',
      );
    }
    const [serial, pem] = latest;
    const cert = new crypto.X509Certificate(pem);
    return { ciphertext: rsaOaepEncrypt(plaintext, cert.publicKey), serial };
  }

  /**
   * 解密敏感字段（下行）：用商户私钥 RSA-OAEP(SHA-1) 解密 Base64 密文。
   */
  decryptSensitive(ciphertextB64: string): string {
    return rsaOaepDecrypt(ciphertextB64, this.privateKey);
  }

  // ──────────────────────────── 回调 ────────────────────────────

  /** 回调相关方法命名空间。 */
  readonly callback = {
    /**
     * 验证回调签名。序列号缺失时自动下载平台证书后重试一次。
     * @param headers 回调请求头。
     * @param rawBody 回调原始报文体字符串。
     */
    verify: async (
      headers: Record<string, string | string[] | undefined>,
      rawBody: string,
    ): Promise<boolean> => {
      const timestamp = headerValue(headers, 'Wechatpay-Timestamp');
      const nonce = headerValue(headers, 'Wechatpay-Nonce');
      const signature = headerValue(headers, 'Wechatpay-Signature');
      const serial = headerValue(headers, 'Wechatpay-Serial');
      if (!timestamp || !nonce || !signature || !serial) {
        this.logger.warn('回调验签失败：缺少必要的验签头');
        return false;
      }
      const message = buildVerifyMessage(timestamp, nonce, rawBody);
      if (!this.verifier.serials.includes(serial)) {
        // 公钥模式下序列号不应缺失；平台证书模式下尝试下载后重试一次。
        try {
          await this.certificates();
        } catch (e) {
          this.logger.warn('回调验签：下载平台证书失败', { error: e });
        }
        if (!this.verifier.serials.includes(serial)) {
          this.logger.warn('回调验签失败：仍未找到对应序列号公钥', { serial });
          return false;
        }
      }
      try {
        return await this.verifier.verify(serial, message, signature);
      } catch (e) {
        this.logger.error('回调验签异常', { error: e });
        return false;
      }
    },

    /**
     * 解密回调通知。先（可选）验签，再用 APIv3Key 对 resource 做 AES-256-GCM 解密。
     * @param input { headers, body }，body 为原始报文体字符串。
     * @param options.verify 是否验签（默认 true）。
     * @returns { event_type, resource_type, resource(解密对象), envelope }
     * @see https://pay.weixin.qq.com/doc/v3/merchant/4012075675
     */
    decrypt: async <T = Record<string, unknown>>(
      input: CallbackInput,
      options: { verify?: boolean } = {},
    ): Promise<CallbackDecryptResult<T>> => {
      const envelope = JSON.parse(input.body) as CallbackEnvelope;
      if (options.verify !== false) {
        const ok = await this.callback.verify(input.headers, input.body);
        if (!ok) throw new WxCryptoError('回调验签未通过');
      }
      const r = envelope.resource;
      const plain = aesGcmDecrypt(this.apiV3Key, r.nonce, r.ciphertext, r.associated_data ?? '');
      return {
        event_type: envelope.event_type,
        resource_type: envelope.resource_type,
        resource: JSON.parse(plain) as T,
        envelope,
      };
    },
  };

  // ──────────────────────────── 调起支付参数 ────────────────────────────

  /**
   * 构建 JSAPI / 小程序前端调起支付参数（含 paySign）。
   * @param prepayId 预支付交易会话标识。
   * @param appId 覆盖默认 appid（不传则用构造时的 appid）。
   */
  async buildJsapiPayParams(
    prepayId: string,
    appId?: string,
  ): Promise<{
    timeStamp: string;
    nonceStr: string;
    package: string;
    signType: 'RSA';
    paySign: string;
  }> {
    const id = appId ?? this.appid;
    if (!id) throw new WxCryptoError('缺少 appId：请在配置中提供 appid 或显式传入');
    return buildJsapiPaySign(id, prepayId, { sign: (m: string) => this.signer.sign(m) });
  }

  /**
   * 构建 App 端调起支付参数（额外补 partnerid=mchid）。
   * @param prepayId 预支付交易会话标识。
   * @param appId 覆盖默认 appid（App 应用的 appid）。
   */
  async buildAppPayParams(
    prepayId: string,
    appId?: string,
  ): Promise<{
    appid: string;
    timestamp: string;
    noncestr: string;
    prepayid: string;
    partnerid: string;
    package: 'Sign=WXPay';
    sign: string;
  }> {
    const id = appId ?? this.appid;
    if (!id) throw new WxCryptoError('缺少 appId：请在配置中提供 appid 或显式传入');
    const base = await buildAppPaySign(id, prepayId, { sign: (m: string) => this.signer.sign(m) });
    return { ...base, partnerid: this.mchid };
  }
}
