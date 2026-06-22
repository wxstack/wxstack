/**
 * 微信支付 v3 加解密与签名（设计文档 §4.3、§5.1）。
 *
 * 已对照官方文档核验：
 * - 请求签名（RSA-SHA256）：待签名串 = 方法\n + URL(path+query)\n + 时间戳\n + 随机串\n + 请求体\n；
 *   Authorization 头：`WECHATPAY2-SHA256-RSA2048 mchid="..",nonce_str="..",timestamp="..",serial_no="..",signature=".."`。
 *   @see https://pay.weixin.qq.com/doc/v3/merchant/4012365334
 * - 应答/回调验签：待签名串 = 时间戳\n + 随机串\n + 报文体\n，用平台证书或「微信支付公钥」验签。
 *   @see https://pay.weixin.qq.com/doc/v3/merchant/4012071382
 * - 回调/证书解密（AES-256-GCM）：key=APIv3Key(32B)、nonce(12B)、tag 为密文后 16 字节、associated_data 作 AAD。
 * - 敏感字段（RSA-OAEP，SHA-1）：上行用平台公钥加密、下行用商户私钥解密。
 */
import crypto from 'node:crypto';
import { WxCryptoError } from '../errors.js';

/** 签名器接口：可注入以将私钥托管到 KMS/HSM。 */
export interface Signer {
  /** 商户证书序列号。 */
  readonly serialNo: string;
  /** 对待签名串签名，返回序列号与 Base64 签名。 */
  sign(message: string): Promise<{ serialNo: string; signature: string }>;
}

/** 验签器接口。 */
export interface Verifier {
  /** 按平台证书序列号验签。 */
  verify(serialNo: string, message: string, signature: string): Promise<boolean>;
}

/** 生成随机串（十六进制大写，默认 32 位）。 */
export function nonceStr(len = 32): string {
  return crypto
    .randomBytes(Math.ceil(len / 2))
    .toString('hex')
    .toUpperCase()
    .slice(0, len);
}

/** 秒级时间戳字符串。 */
export function unixTimestamp(): string {
  return String(Math.floor(Date.now() / 1000));
}

/**
 * 构造请求签名的待签名串。
 * @param method HTTP 方法（大写）。
 * @param urlPath 含查询串的 URL 路径（如 `/v3/pay/transactions/jsapi`）。
 * @param timestamp 时间戳。
 * @param nonce 随机串。
 * @param body 请求体字符串（GET 等无体时传空串）。
 */
export function buildSignMessage(
  method: string,
  urlPath: string,
  timestamp: string,
  nonce: string,
  body: string,
): string {
  return `${method}\n${urlPath}\n${timestamp}\n${nonce}\n${body}\n`;
}

/**
 * 构造应答/回调验签的待签名串。
 * @param timestamp Wechatpay-Timestamp 头。
 * @param nonce Wechatpay-Nonce 头。
 * @param body 原始报文体。
 */
export function buildVerifyMessage(timestamp: string, nonce: string, body: string): string {
  return `${timestamp}\n${nonce}\n${body}\n`;
}

/** 用商户私钥做 SHA256withRSA 签名，返回 Base64。 */
export function rsaSign(message: string, privateKey: crypto.KeyLike): string {
  try {
    return crypto.createSign('RSA-SHA256').update(message, 'utf8').sign(privateKey, 'base64');
  } catch (err) {
    throw new WxCryptoError('支付请求签名失败', err);
  }
}

/** 用平台证书/公钥做 SHA256withRSA 验签。 */
export function rsaVerify(message: string, signature: string, publicKey: crypto.KeyLike): boolean {
  try {
    return crypto
      .createVerify('RSA-SHA256')
      .update(message, 'utf8')
      .verify(publicKey, signature, 'base64');
  } catch (err) {
    throw new WxCryptoError('支付应答验签失败', err);
  }
}

/** 本地私钥签名器。 */
export class LocalSigner implements Signer {
  readonly serialNo: string;
  private readonly privateKey: crypto.KeyObject;

  /**
   * @param privateKeyPem 商户 API 私钥（PEM 字符串或 Buffer）。
   * @param serialNo 商户证书序列号。
   */
  constructor(privateKeyPem: string | Buffer, serialNo: string) {
    this.serialNo = serialNo;
    this.privateKey = crypto.createPrivateKey(privateKeyPem);
  }

  async sign(message: string): Promise<{ serialNo: string; signature: string }> {
    return { serialNo: this.serialNo, signature: rsaSign(message, this.privateKey) };
  }
}

/**
 * 本地验签器：维护「序列号 → 公钥」映射（平台证书或微信支付公钥）。
 */
export class LocalVerifier implements Verifier {
  private readonly keys = new Map<string, crypto.KeyObject>();

  /** 添加一个验签公钥（来自平台证书或微信支付公钥）。 */
  addPublicKey(serialNo: string, publicKeyPem: string | Buffer): void {
    this.keys.set(serialNo, crypto.createPublicKey(publicKeyPem));
  }

  /** 添加平台证书（自动从证书提取公钥）。 */
  addCertificate(serialNo: string, certPem: string | Buffer): void {
    const cert = new crypto.X509Certificate(certPem);
    this.keys.set(serialNo, cert.publicKey);
  }

  /** 当前已加载的序列号列表。 */
  get serials(): string[] {
    return [...this.keys.keys()];
  }

  async verify(serialNo: string, message: string, signature: string): Promise<boolean> {
    const key = this.keys.get(serialNo);
    if (!key) {
      throw new WxCryptoError(
        `未找到序列号为 ${serialNo} 的验签公钥，请先下载平台证书或配置微信支付公钥`,
      );
    }
    return rsaVerify(message, signature, key);
  }
}

/**
 * AES-256-GCM 解密（回调报文 / 平台证书）。
 * @param apiV3Key APIv3 密钥（32 字节）。
 * @param nonce 随机串（resource.nonce）。
 * @param ciphertextB64 Base64 密文（含末尾 16 字节认证 tag）。
 * @param associatedData 附加数据（resource.associated_data，可空）。
 */
export function aesGcmDecrypt(
  apiV3Key: string | Buffer,
  nonce: string,
  ciphertextB64: string,
  associatedData = '',
): string {
  try {
    const key = typeof apiV3Key === 'string' ? Buffer.from(apiV3Key, 'utf8') : apiV3Key;
    if (key.length !== 32) throw new WxCryptoError('APIv3Key 长度必须为 32 字节');
    const data = Buffer.from(ciphertextB64, 'base64');
    const authTag = data.subarray(data.length - 16);
    const ciphertext = data.subarray(0, data.length - 16);
    const decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(nonce, 'utf8'));
    decipher.setAuthTag(authTag);
    if (associatedData) decipher.setAAD(Buffer.from(associatedData, 'utf8'));
    return Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString('utf8');
  } catch (err) {
    if (err instanceof WxCryptoError) throw err;
    throw new WxCryptoError('支付回调/证书解密失败（请检查 APIv3Key 是否正确）', err);
  }
}

/**
 * RSA-OAEP 加密敏感字段（上行）。用平台证书/微信支付公钥加密，padding 为 OAEP + SHA-1。
 * @param plaintext 明文（如收款人姓名、银行卡号）。
 * @param publicKey 平台公钥（PEM/证书提取）。
 */
export function rsaOaepEncrypt(plaintext: string, publicKey: crypto.KeyLike): string {
  try {
    const encrypted = crypto.publicEncrypt(
      {
        key: publicKey as crypto.KeyLike,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha1',
      },
      Buffer.from(plaintext, 'utf8'),
    );
    return encrypted.toString('base64');
  } catch (err) {
    throw new WxCryptoError('敏感字段加密失败', err);
  }
}

/**
 * RSA-OAEP 解密敏感字段（下行）。用商户私钥解密。
 * @param ciphertextB64 Base64 密文。
 * @param privateKey 商户私钥。
 */
export function rsaOaepDecrypt(ciphertextB64: string, privateKey: crypto.KeyLike): string {
  try {
    const decrypted = crypto.privateDecrypt(
      {
        key: privateKey as crypto.KeyLike,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha1',
      },
      Buffer.from(ciphertextB64, 'base64'),
    );
    return decrypted.toString('utf8');
  } catch (err) {
    throw new WxCryptoError('敏感字段解密失败', err);
  }
}

/**
 * 构建小程序/JSAPI 前端调起支付参数（paySign）。
 * 待签名串 = appId\n + timeStamp\n + nonceStr\n + package\n，商户私钥 RSA-SHA256 签名。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012791898
 */
export function buildJsapiPaySign(
  appId: string,
  prepayId: string,
  signer: { sign(message: string): { signature: string } | Promise<{ signature: string }> },
): Promise<{
  timeStamp: string;
  nonceStr: string;
  package: string;
  signType: 'RSA';
  paySign: string;
}> {
  const timeStamp = unixTimestamp();
  const nonce = nonceStr();
  const pkg = `prepay_id=${prepayId}`;
  const message = `${appId}\n${timeStamp}\n${nonce}\n${pkg}\n`;
  return Promise.resolve(signer.sign(message)).then((r) => ({
    timeStamp,
    nonceStr: nonce,
    package: pkg,
    signType: 'RSA',
    paySign: r.signature,
  }));
}

/**
 * 构建 App 端调起支付参数。
 * 待签名串 = appId\n + timeStamp\n + nonceStr\n + prepayId\n。
 */
export function buildAppPaySign(
  appId: string,
  prepayId: string,
  signer: { sign(message: string): { signature: string } | Promise<{ signature: string }> },
): Promise<{
  appid: string;
  timestamp: string;
  noncestr: string;
  prepayid: string;
  partnerid?: string;
  package: 'Sign=WXPay';
  sign: string;
}> {
  const timestamp = unixTimestamp();
  const nonce = nonceStr();
  const message = `${appId}\n${timestamp}\n${nonce}\n${prepayId}\n`;
  return Promise.resolve(signer.sign(message)).then((r) => ({
    appid: appId,
    timestamp,
    noncestr: nonce,
    prepayid: prepayId,
    package: 'Sign=WXPay',
    sign: r.signature,
  }));
}
