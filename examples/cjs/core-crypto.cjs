// CJS 消费示例：验证 @wxstack/core 可被 require（双格式发行）。
// 运行：node examples/cjs/core-crypto.cjs
const { WXBizMsgCrypt, buildXml, parseXml } = require('@wxstack/core');
const { aesGcmDecrypt, nonceStr } = require('@wxstack/core/crypto');

const crypt = new WXBizMsgCrypt(
  'mytoken',
  'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFG',
  'wxAppId123',
);
const xml = buildXml({ MsgType: 'text', Content: '微信' });
const enc = crypt.encryptMessage(xml);
const dec = crypt.decryptMessage(enc.msgSignature, enc.timestamp, enc.nonce, enc.encrypt);

console.log('require 加载成功；解密往返一致：', parseXml(dec).Content === '微信');
console.log('随机串示例：', nonceStr(16));
console.log('aesGcmDecrypt 可用：', typeof aesGcmDecrypt === 'function');
