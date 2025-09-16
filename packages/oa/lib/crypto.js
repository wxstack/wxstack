import crypto from 'node:crypto';

export function sha1(str) {
    return crypto.createHash('sha1').update(str).digest('hex');
}
export function verifySignature(token, timestamp, nonce, signature) {
    const s = [token, timestamp, nonce].sort().join('');
    return sha1(s) === signature;
}
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