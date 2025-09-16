---
title: Other API
outline: deep
---

# Other API

> 订阅号/服务号通用

## 快速上手

```ts
import { createClient } from '@wxstack/oa';

const client = createClient({
  appId: 'wx_your_appid',
  appSecret: 'your_secret'
});

// 订阅号/服务号均可用。
```

## 方法

### addVoiceToRecoForText()
提交语音用于识别（异步）
文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_addvoicetorecofortext.html

签名：`addVoiceToRecoForText(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{voice_id:string, lang:string, format?:string, voice_url?:string, file_id?:string, voice_data?:string, rate?:number}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.addVoiceToRecoForText(client, payload);
```

### bankcardOcr()
银行卡 OCR
文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bankcardocr.html

签名：`bankcardOcr(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{img_url?:string, img?:string}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.bankcardOcr(client, payload);
```

### bizLicenseOcr()
营业执照 OCR
文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bizlicenseocr.html

签名：`bizLicenseOcr(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{img_url?:string, img?:string}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.bizLicenseOcr(client, payload);
```

### commOcr()
通用印刷体 OCR
文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_commocr.html

签名：`commOcr(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{img_url?:string, img?:string}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.commOcr(client, payload);
```

### drivingLicenseOcr()
驾驶证 OCR
文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivinglicenseocr.html

签名：`drivingLicenseOcr(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{img_url?:string, img?:string}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.drivingLicenseOcr(client, payload);
```

### drivingOcr()
行驶证 OCR
文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivingocr.html

签名：`drivingOcr(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{img_url?:string, img?:string}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.drivingOcr(client, payload);
```

### getTicket()
获取 API ticket（jsapi 或 wx_card）
文档: https://developers.weixin.qq.com/doc/service/api/webdev/jssdk/api_getticket.html

签名：`getTicket(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{type:'jsapi'|'wx_card'}`，必填)
返回值：`Promise<{errcode:number, errmsg:string, ticket:string, expires_in:number}>`
```ts
// 用法示例
await client.getTicket(client, params);
```

### idcardOcr()
身份证 OCR
文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_idcardocr.html

签名：`idcardOcr(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{img_url?:string, img?:string}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.idcardOcr(client, payload);
```

### imgAiCrop()
智能裁剪
文档: https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgaicrop.html

签名：`imgAiCrop(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{img_url?:string, img?:string}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.imgAiCrop(client, payload);
```

### imgQrcode()
二维码/条码识别
文档: https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgqrcode.html

签名：`imgQrcode(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{img_url?:string, img?:string}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.imgQrcode(client, payload);
```

### menuOcr()
菜单 OCR
文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_menuocr.html

签名：`menuOcr(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{img_url?:string, img?:string}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.menuOcr(client, payload);
```

### queryRecoResultForText()
查询语音识别结果
文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_queryrecoresultfortext.html

签名：`queryRecoResultForText(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{voice_id:string, lang:string}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.queryRecoResultForText(client, payload);
```

### snsAccessToken()
通过 code 换取网页授权 access_token
文档: https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsaccesstoken.html

签名：`snsAccessToken(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{appid:string, secret:string, code:string, grant_type?:'authorization_code'}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.snsAccessToken(client, params);
```

### snsAuth()
检验授权凭证（access_token）是否有效
文档: https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsauth.html

签名：`snsAuth(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{access_token:string, openid:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.snsAuth(client, params);
```

### snsRefreshToken()
刷新网页授权 access_token
文档: https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsrefreshtoken.html

签名：`snsRefreshToken(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{appid:string, refresh_token:string, grant_type?:'refresh_token'}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.snsRefreshToken(client, params);
```

### snsUserInfo()
拉取用户信息（scope\=snsapi_userinfo）
文档: https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsuserinfo.html

签名：`snsUserInfo(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{access_token:string, openid:string, lang?:'zh_CN'|'zh_TW'|'en'}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.snsUserInfo(client, params);
```

### translateContent()
翻译内容
文档: https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_translatecontent.html

签名：`translateContent(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{lfrom:string, lto:string, content:string}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.translateContent(client, payload);
```
