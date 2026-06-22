import crypto from 'node:crypto';
import { describe, expect, it } from 'vitest';
import {
  LocalSigner,
  LocalVerifier,
  WXBizMsgCrypt,
  aesGcmDecrypt,
  buildAppPaySign,
  buildJsapiPaySign,
  buildSignMessage,
  rsaOaepDecrypt,
  rsaOaepEncrypt,
  rsaVerify,
} from '../src/crypto/index.js';
import { decryptMpData } from '../src/crypto/miniprogram.js';
import { buildXml, parseXml } from '../src/xml.js';

const AES_KEY_43 = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFG'; // 43 位示例

describe('WXBizMsgCrypt 消息加解密', () => {
  it('加密后能正确解密并校验 receiveId', () => {
    const crypt = new WXBizMsgCrypt('token', AES_KEY_43, 'wxAppId');
    const xml = buildXml({ MsgType: 'text', Content: '你好，世界' });
    const enc = crypt.encryptMessage(xml);
    const dec = crypt.decryptMessage(enc.msgSignature, enc.timestamp, enc.nonce, enc.encrypt);
    expect(parseXml(dec).Content).toBe('你好，世界');
  });

  it('msg_signature 不匹配时抛错', () => {
    const crypt = new WXBizMsgCrypt('token', AES_KEY_43, 'wxAppId');
    const enc = crypt.encryptMessage(buildXml({ Content: 'x' }));
    expect(() => crypt.decryptMessage('wrong', enc.timestamp, enc.nonce, enc.encrypt)).toThrow();
  });
});

describe('支付 v3 签名与验签', () => {
  it('LocalSigner 签名可被 LocalVerifier 验签', async () => {
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
    const signer = new LocalSigner(
      privateKey.export({ type: 'pkcs8', format: 'pem' }) as string,
      'SERIAL123',
    );
    const verifier = new LocalVerifier();
    verifier.addPublicKey('SERIAL123', publicKey.export({ type: 'spki', format: 'pem' }) as string);

    const message = buildSignMessage(
      'POST',
      '/v3/pay/transactions/jsapi',
      '1700000000',
      'NONCE',
      '{"a":1}',
    );
    const { signature, serialNo } = await signer.sign(message);
    expect(serialNo).toBe('SERIAL123');
    expect(await verifier.verify('SERIAL123', message, signature)).toBe(true);
    expect(await verifier.verify('SERIAL123', `${message}tampered`, signature)).toBe(false);
  });

  it('buildJsapiPaySign 生成正确字段且签名可验证', async () => {
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
    const signer = new LocalSigner(
      privateKey.export({ type: 'pkcs8', format: 'pem' }) as string,
      'S',
    );
    const params = await buildJsapiPaySign('wxAppId', 'prepay_123', signer);
    expect(params.package).toBe('prepay_id=prepay_123');
    expect(params.signType).toBe('RSA');
    const message = `wxAppId\n${params.timeStamp}\n${params.nonceStr}\n${params.package}\n`;
    expect(rsaVerify(message, params.paySign, publicKey)).toBe(true);
  });

  it('buildAppPaySign 含 package=Sign=WXPay', async () => {
    const { privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
    const signer = new LocalSigner(
      privateKey.export({ type: 'pkcs8', format: 'pem' }) as string,
      'S',
    );
    const params = await buildAppPaySign('wxAppId', 'prepay_1', signer);
    expect(params.package).toBe('Sign=WXPay');
    expect(params.prepayid).toBe('prepay_1');
  });
});

describe('AES-256-GCM 回调解密', () => {
  it('能解密用 APIv3Key 加密的报文', () => {
    const apiV3Key = '01234567890123456789012345678901'; // 32 字节
    const nonce = 'abcdefghijkl'; // 12 字节
    const aad = 'transaction';
    const plaintext = JSON.stringify({ out_trade_no: 'no_1', amount: { total: 1 } });

    const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(apiV3Key), Buffer.from(nonce));
    cipher.setAAD(Buffer.from(aad));
    const enc = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
    const tag = cipher.getAuthTag();
    const ciphertextB64 = Buffer.concat([enc, tag]).toString('base64');

    const decrypted = aesGcmDecrypt(apiV3Key, nonce, ciphertextB64, aad);
    expect(JSON.parse(decrypted).out_trade_no).toBe('no_1');
  });
});

describe('敏感字段 RSA-OAEP', () => {
  it('加密后能用私钥解密', () => {
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
    const enc = rsaOaepEncrypt('张三', publicKey);
    const dec = rsaOaepDecrypt(enc, privateKey);
    expect(dec).toBe('张三');
  });
});

describe('小程序 encryptedData 解密', () => {
  it('能解密并校验水印 appid', () => {
    const sessionKey = crypto.randomBytes(16).toString('base64');
    const iv = crypto.randomBytes(16);
    const payload = { phoneNumber: '13800000000', watermark: { appid: 'wxAppId', timestamp: 1 } };
    const cipher = crypto.createCipheriv('aes-128-cbc', Buffer.from(sessionKey, 'base64'), iv);
    const enc = Buffer.concat([cipher.update(JSON.stringify(payload), 'utf8'), cipher.final()]);

    const result = decryptMpData(
      sessionKey,
      enc.toString('base64'),
      iv.toString('base64'),
      'wxAppId',
    );
    expect(result.phoneNumber).toBe('13800000000');
    expect(() =>
      decryptMpData(sessionKey, enc.toString('base64'), iv.toString('base64'), 'otherAppId'),
    ).toThrow();
  });
});

describe('XML 解析与构建', () => {
  it('扁平消息往返一致', () => {
    const xml =
      '<xml><ToUserName><![CDATA[u]]></ToUserName><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[hi]]></Content></xml>';
    const obj = parseXml(xml);
    expect(obj.ToUserName).toBe('u');
    expect(obj.Content).toBe('hi');
  });

  it('单层嵌套结构能解析', () => {
    const xml =
      '<xml><Event><![CDATA[scancode]]></Event><ScanCodeInfo><ScanType><![CDATA[qrcode]]></ScanType><ScanResult><![CDATA[abc]]></ScanResult></ScanCodeInfo></xml>';
    const obj = parseXml(xml) as { ScanCodeInfo: { ScanType: string; ScanResult: string } };
    expect(obj.ScanCodeInfo.ScanType).toBe('qrcode');
    expect(obj.ScanCodeInfo.ScanResult).toBe('abc');
  });

  it('buildXml 字符串用 CDATA、数字保持原样', () => {
    const xml = buildXml({ Content: '文本', CreateTime: 123 });
    expect(xml).toContain('<Content><![CDATA[文本]]></Content>');
    expect(xml).toContain('<CreateTime>123</CreateTime>');
  });
});
