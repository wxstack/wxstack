/**
 * 小程序/小游戏 encryptedData 解密（AES-128-CBC）。
 *
 * 用 session_key 作为密钥（Base64 解码为 16 字节），iv 随包返回（Base64）。
 * 解密后需校验 `watermark.appid` 与自身 appid 一致，防篡改/重放。
 */
import crypto from 'node:crypto';
import { WxCryptoError } from '../errors.js';

/** 解密结果（含水印）。 */
export interface DecryptedMpData {
  [key: string]: unknown;
  watermark?: { appid: string; timestamp: number };
}

/**
 * 解密小程序加密数据（用户信息 / 手机号等）。
 * @param sessionKey code2Session 得到的 session_key（Base64）。
 * @param encryptedData 客户端返回的 encryptedData（Base64）。
 * @param iv 客户端返回的 iv（Base64）。
 * @param appId 期望的 appid，用于校验水印（传入则强制校验）。
 */
export function decryptMpData(
  sessionKey: string,
  encryptedData: string,
  iv: string,
  appId?: string,
): DecryptedMpData {
  try {
    const key = Buffer.from(sessionKey, 'base64');
    const ivBuf = Buffer.from(iv, 'base64');
    const data = Buffer.from(encryptedData, 'base64');
    const decipher = crypto.createDecipheriv('aes-128-cbc', key, ivBuf);
    decipher.setAutoPadding(true);
    const decoded = Buffer.concat([decipher.update(data), decipher.final()]).toString('utf8');
    const result = JSON.parse(decoded) as DecryptedMpData;
    if (appId && result.watermark?.appid !== appId) {
      throw new WxCryptoError('encryptedData 水印 appid 不匹配');
    }
    return result;
  } catch (err) {
    if (err instanceof WxCryptoError) throw err;
    throw new WxCryptoError('小程序数据解密失败（请检查 session_key 是否有效）', err);
  }
}
