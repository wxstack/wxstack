/**
 * 微信消息回调加解密（WXBizMsgCrypt）。
 *
 * 适用于公众号、企业微信、开放平台第三方平台的消息/事件回调。
 * - 验签：`sha1(sort([token, timestamp, nonce]).join(''))`（URL 校验）
 *         `sha1(sort([token, timestamp, nonce, encrypt]).join(''))`（消息体 msg_signature）
 * - 加解密：AES-256-CBC + PKCS#7；IV 取 AESKey 前 16 字节。
 * - 明文结构：16 字节随机数 + 4 字节大端消息长度 + 消息正文 + receiveid（appid/corpid/component_appid）。
 *
 * @see https://developers.weixin.qq.com/doc/service/guide/dev/push/encryption.html
 */
import crypto from 'node:crypto';
import { WxCryptoError } from '../errors.js';

/** SHA1 十六进制摘要。 */
export function sha1(input: string): string {
  return crypto.createHash('sha1').update(input, 'utf8').digest('hex');
}

/** 将 43 位 EncodingAESKey 解码为 32 字节 AESKey。 */
export function decodeAESKey(encodingAESKey: string): Buffer {
  if (encodingAESKey.length !== 43) {
    throw new WxCryptoError('EncodingAESKey 必须为 43 位');
  }
  const key = Buffer.from(`${encodingAESKey}=`, 'base64');
  if (key.length !== 32) {
    throw new WxCryptoError('EncodingAESKey 解码后长度非法（应为 32 字节）');
  }
  return key;
}

/** 计算回调签名（明文模式 / URL 校验）。 */
export function calcSignature(token: string, timestamp: string, nonce: string): string {
  return sha1([token, timestamp, nonce].sort().join(''));
}

/** 计算消息体签名 msg_signature（安全模式）。 */
export function calcMsgSignature(
  token: string,
  timestamp: string,
  nonce: string,
  encrypt: string,
): string {
  return sha1([token, timestamp, nonce, encrypt].sort().join(''));
}

/** 常量时间比较两个十六进制签名。 */
export function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ba.length !== bb.length) return false;
  return crypto.timingSafeEqual(ba, bb);
}

/** 校验 URL 接入签名（GET 服务器配置校验）。 */
export function verifySignature(
  token: string,
  timestamp: string,
  nonce: string,
  signature: string,
): boolean {
  return safeEqual(calcSignature(token, timestamp, nonce), signature);
}

/** 校验消息体 msg_signature（安全模式 POST）。 */
export function verifyMsgSignature(
  token: string,
  timestamp: string,
  nonce: string,
  encrypt: string,
  msgSignature: string,
): boolean {
  return safeEqual(calcMsgSignature(token, timestamp, nonce, encrypt), msgSignature);
}

function pkcs7Pad(buf: Buffer, blockSize = 32): Buffer {
  const amount = blockSize - (buf.length % blockSize);
  const pad = amount === 0 ? blockSize : amount;
  return Buffer.concat([buf, Buffer.alloc(pad, pad)]);
}

function pkcs7Unpad(buf: Buffer): Buffer {
  const pad = buf[buf.length - 1] ?? 0;
  if (pad < 1 || pad > 32) return buf;
  return buf.subarray(0, buf.length - pad);
}

/**
 * 解密消息密文，返回明文消息与附带的 receiveid。
 * @param encryptedBase64 `Encrypt` 字段（Base64）。
 * @param aesKey 32 字节 AESKey。
 */
export function decrypt(
  encryptedBase64: string,
  aesKey: Buffer,
): { message: string; receiveId: string } {
  try {
    const iv = aesKey.subarray(0, 16);
    const encrypted = Buffer.from(encryptedBase64, 'base64');
    const decipher = crypto.createDecipheriv('aes-256-cbc', aesKey, iv);
    decipher.setAutoPadding(false);
    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    const unpadded = pkcs7Unpad(decrypted);
    const content = unpadded.subarray(16);
    const msgLen = content.readUInt32BE(0);
    const message = content.subarray(4, 4 + msgLen).toString('utf8');
    const receiveId = content.subarray(4 + msgLen).toString('utf8');
    return { message, receiveId };
  } catch (err) {
    throw new WxCryptoError('消息解密失败', err);
  }
}

/**
 * 加密消息明文，返回 Base64 密文。
 * @param message 明文消息（通常为回复 XML）。
 * @param aesKey 32 字节 AESKey。
 * @param receiveId 接收方标识（appid/corpid/component_appid）。
 */
export function encrypt(message: string, aesKey: Buffer, receiveId: string): string {
  try {
    const iv = aesKey.subarray(0, 16);
    const random16 = crypto.randomBytes(16);
    const msgBuf = Buffer.from(message, 'utf8');
    const lenBuf = Buffer.alloc(4);
    lenBuf.writeUInt32BE(msgBuf.length, 0);
    const plain = pkcs7Pad(
      Buffer.concat([random16, lenBuf, msgBuf, Buffer.from(receiveId, 'utf8')]),
    );
    const cipher = crypto.createCipheriv('aes-256-cbc', aesKey, iv);
    cipher.setAutoPadding(false);
    return Buffer.concat([cipher.update(plain), cipher.final()]).toString('base64');
  } catch (err) {
    throw new WxCryptoError('消息加密失败', err);
  }
}

/** 随机字符串（用于回复 nonce 等）。 */
export function randomString(len = 16): string {
  return crypto
    .randomBytes(Math.ceil(len / 2))
    .toString('hex')
    .slice(0, len);
}

/**
 * WXBizMsgCrypt：封装消息回调加解密的完整流程。
 */
export class WXBizMsgCrypt {
  private readonly token: string;
  private readonly aesKey: Buffer;
  private readonly receiveId: string;

  /**
   * @param token 回调配置的 Token。
   * @param encodingAESKey 43 位 EncodingAESKey。
   * @param receiveId 接收方标识：公众号为 appid，企业微信为 corpid，开放平台为 component_appid。
   */
  constructor(token: string, encodingAESKey: string, receiveId: string) {
    this.token = token;
    this.aesKey = decodeAESKey(encodingAESKey);
    this.receiveId = receiveId;
  }

  /** 校验服务器配置 URL（明文模式），返回是否通过。 */
  verifyUrl(signature: string, timestamp: string, nonce: string): boolean {
    return verifySignature(this.token, timestamp, nonce, signature);
  }

  /**
   * 安全模式 URL 校验：校验 msg_signature 并解密 echostr，返回明文 echostr。
   */
  verifyEchoStr(msgSignature: string, timestamp: string, nonce: string, echostr: string): string {
    if (!verifyMsgSignature(this.token, timestamp, nonce, echostr, msgSignature)) {
      throw new WxCryptoError('echostr 签名校验失败');
    }
    const { message, receiveId } = decrypt(echostr, this.aesKey);
    this.assertReceiveId(receiveId);
    return message;
  }

  /**
   * 解密回调消息密文（先校验 msg_signature）。
   * @param msgSignature URL 上的 msg_signature。
   * @param timestamp URL 上的 timestamp。
   * @param nonce URL 上的 nonce。
   * @param encrypt 消息体中的 Encrypt 字段。
   */
  decryptMessage(
    msgSignature: string,
    timestamp: string,
    nonce: string,
    encryptText: string,
  ): string {
    if (!verifyMsgSignature(this.token, timestamp, nonce, encryptText, msgSignature)) {
      throw new WxCryptoError('msg_signature 校验失败');
    }
    const { message, receiveId } = decrypt(encryptText, this.aesKey);
    this.assertReceiveId(receiveId);
    return message;
  }

  /**
   * 加密回复消息，返回完整的加密回包参数。
   * @param replyMessage 回复明文（XML）。
   * @param timestamp 时间戳（秒），缺省取当前时间。
   * @param nonce 随机串，缺省自动生成。
   */
  encryptMessage(
    replyMessage: string,
    timestamp?: string,
    nonce?: string,
  ): { encrypt: string; msgSignature: string; timestamp: string; nonce: string } {
    const ts = timestamp ?? String(Math.floor(Date.now() / 1000));
    const nc = nonce ?? randomString(10);
    const encryptText = encrypt(replyMessage, this.aesKey, this.receiveId);
    const msgSignature = calcMsgSignature(this.token, ts, nc, encryptText);
    return { encrypt: encryptText, msgSignature, timestamp: ts, nonce: nc };
  }

  /** 将加密结果构建为标准回包 XML。 */
  buildEncryptedReply(replyMessage: string, timestamp?: string, nonce?: string): string {
    const r = this.encryptMessage(replyMessage, timestamp, nonce);
    return `<xml><Encrypt><![CDATA[${r.encrypt}]]></Encrypt><MsgSignature><![CDATA[${r.msgSignature}]]></MsgSignature><TimeStamp>${r.timestamp}</TimeStamp><Nonce><![CDATA[${r.nonce}]]></Nonce></xml>`;
  }

  private assertReceiveId(receiveId: string): void {
    if (this.receiveId && receiveId && this.receiveId !== receiveId) {
      throw new WxCryptoError(`receiveId 不匹配：期望 ${this.receiveId}，实际 ${receiveId}`);
    }
  }
}
