// ESM 消费示例：验证 @wxstack/core 的加解密与回调内核（无需网络）。
// 运行：node examples/esm/core-crypto.mjs
import { WXBizMsgCrypt, buildXml, createWebhook, parseXml } from '@wxstack/core';

// 1) 消息回调加解密往返（安全模式）
const token = 'mytoken';
const aesKey = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFG'; // 43 位示例
const appId = 'wxAppId123';
const crypt = new WXBizMsgCrypt(token, aesKey, appId);

const replyXml = buildXml({
  ToUserName: 'u',
  FromUserName: 'me',
  MsgType: 'text',
  Content: '你好',
});
const { encrypt, msgSignature, timestamp, nonce } = crypt.encryptMessage(replyXml);
const decrypted = crypt.decryptMessage(msgSignature, timestamp, nonce, encrypt);
console.log('解密往返一致：', parseXml(decrypted).Content === '你好');

// 2) 回调内核分发
const wh = createWebhook({
  token,
  receiveId: appId,
  encodingAESKey: aesKey,
  onMessage: (msg, ctx) => ctx.text(`收到：${msg.Content}`),
});
const incoming = buildXml({
  ToUserName: appId,
  FromUserName: 'openid1',
  MsgType: 'text',
  Content: 'hi',
});
const enc = crypt.encryptMessage(incoming);
const body = buildXml({ Encrypt: enc.encrypt });
const result = await wh.handle({
  method: 'POST',
  rawBody: body,
  query: { msg_signature: enc.msgSignature, timestamp: enc.timestamp, nonce: enc.nonce },
});
console.log('回调返回状态：', result.status, '内容类型：', result.contentType);
