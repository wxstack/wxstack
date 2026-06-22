// 微信支付：离线演示「下单后构建前端调起支付参数」并自验签（无需网络/真实商户）。
// 运行：node examples/esm/pay-paysign.mjs
import crypto from 'node:crypto';
import { rsaVerify } from '@wxstack/core/crypto';
import { createPayClient } from '@wxstack/pay';

// 用临时密钥模拟商户私钥（真实场景请用商户 API 私钥 PEM）
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
const privPem = privateKey.export({ type: 'pkcs8', format: 'pem' });

const pay = createPayClient({
  mchid: '1900000000',
  appid: 'wxAppId',
  serialNo: 'MERCHANT_SERIAL',
  privateKey: privPem,
  apiV3Key: '01234567890123456789012345678901',
});

// 假设下单已拿到 prepay_id，构建小程序/JSAPI 调起支付参数
const params = await pay.buildJsapiPayParams('prepay_id_demo_123');
console.log('调起支付参数：', params);

// 自验签：用对应公钥验证 paySign
const message = `wxAppId\n${params.timeStamp}\n${params.nonceStr}\n${params.package}\n`;
console.log('paySign 验签通过：', rsaVerify(message, params.paySign, publicKey));
console.log('逃生口可用：', typeof pay.request === 'function');
