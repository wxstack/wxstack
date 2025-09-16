import crypto from 'node:crypto';

export function sha1(str) {
    return crypto.createHash('sha1').update(str).digest('hex');
}

/**
 * 校验 URL 验证签名（明文模式或服务器有效性校验）。
 * 算法：`sha1(sort([token, timestamp, nonce]).join(''))` 与 `signature` 比较。
 * - 字典序需按字符串比较（JS 默认 `.sort()` 即为字典序）。
 * @param {string} token 公众号配置的 Token。
 * @param {string|number} timestamp URL 参数 `timestamp`。
 * @param {string|number} nonce URL 参数 `nonce`。
 * @param {string} signature URL 参数 `signature`（微信端计算的 SHA1 十六进制，通常小写）。
 * @returns {boolean} 是否匹配。
 * @see https://developers.weixin.qq.com/doc/service/guide/dev/push/encryption.html
 */
export function verifySignature(token, timestamp, nonce, signature) {
    const s = [token, timestamp, nonce].sort().join('');
    return sha1(s) === signature;
}

/**
 * 校验消息体签名 `msg_signature`（安全模式）。
 * 算法：`sha1(sort([token, timestamp, nonce, encrypt]).join(''))` 与 `msgSignature` 比较。
 * @param {string} token 公众号配置的 Token。
 * @param {string|number} timestamp URL 参数 `timestamp`。
 * @param {string|number} nonce URL 参数 `nonce`。
 * @param {string} encrypt 消息体 `Encrypt` 字段（Base64 字符串）。
 * @param {string} msgSignature URL 参数 `msg_signature`。
 * @returns {boolean} 是否匹配。
 * @see https://developers.weixin.qq.com/doc/service/guide/dev/push/encryption.html
 */
export function verifyMsgSignature(token, timestamp, nonce, encrypt, msgSignature) {
    const s = [token, timestamp, nonce, encrypt].sort().join('');
    return sha1(s) === msgSignature;
}

export function decodeAESKey(encodingAESKey) {
    return Buffer.from(encodingAESKey + '=', 'base64');
}

function pkcs7Unpad(buf) {
    const pad = buf[buf.length - 1];
    if (pad < 1 || pad > 32) return buf;
    return buf.subarray(0, buf.length - pad);
}

/**
 * 解密微信回调消息体（安全模式）。
 * - 算法：AES\-256\-CBC，IV 为 `AESKey` 前 16 字节，`PKCS#7` 填充（`node:crypto` 关闭自动填充并手动去填充）。
 * - 明文结构：16 字节随机数 + 4 字节大端消息长度 + 消息正文（XML） + AppId。
 * @param {string} encryptedBase64 回调 JSON/XML 中的 `Encrypt` 字段（Base64）。
 * @param {Buffer} key 32 字节的 `AESKey`（由 43 位 `EncodingAESKey` Base64 解出）。
 * @returns {{xml:string, appId:string}} 解密出的 XML 字符串与 `appId`。
 * @throws {Error} 当密钥无效、数据损坏或填充非法时抛出。
 * @see https://developers.weixin.qq.com/doc/service/guide/dev/push/encryption.html
 */
export function decryptMessage(encryptedBase64, key) {
    const iv = key.subarray(0, 16);
    const encrypted = Buffer.from(encryptedBase64, 'base64');
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    decipher.setAutoPadding(false);
    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    const unpadded = pkcs7Unpad(decrypted);
    const content = unpadded.subarray(16);
    const msgLen = content.readUInt32BE(0);
    const msg = content.subarray(4, 4 + msgLen);
    const appId = content.subarray(4 + msgLen).toString('utf8');
    return { xml: msg.toString('utf8'), appId };
}