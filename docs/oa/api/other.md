---
title: Other API
outline: deep
---

# Other API

> 订阅号/服务号通用

## 方法

### addVoiceToRecoForText()
提交语音用于识别（异步）
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_addvoicetorecofortext.html)

#### 签名
```ts
addVoiceToRecoForText(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{voice_id:string, lang:string, format?:string, voice_url?:string, file_id?:string, voice_data?:string, rate?:number}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.addVoiceToRecoForText(payload);
```

### bankcardOcr()
银行卡 OCR
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bankcardocr.html)

#### 签名
```ts
bankcardOcr(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{img_url?:string, img?:string}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.bankcardOcr(payload);
```

### bizLicenseOcr()
营业执照 OCR
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bizlicenseocr.html)

#### 签名
```ts
bizLicenseOcr(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{img_url?:string, img?:string}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.bizLicenseOcr(payload);
```

### commOcr()
通用印刷体 OCR
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_commocr.html)

#### 签名
```ts
commOcr(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{img_url?:string, img?:string}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.commOcr(payload);
```

### drivingLicenseOcr()
驾驶证 OCR
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivinglicenseocr.html)

#### 签名
```ts
drivingLicenseOcr(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{img_url?:string, img?:string}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.drivingLicenseOcr(payload);
```

### drivingOcr()
行驶证 OCR
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivingocr.html)

#### 签名
```ts
drivingOcr(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{img_url?:string, img?:string}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.drivingOcr(payload);
```

### getTicket()
获取 API ticket（jsapi 或 wx_card）
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/webdev/jssdk/api_getticket.html)

#### 签名
```ts
getTicket(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{type:'jsapi'\|'wx_card'}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string, ticket:string, expires_in:number}>`

#### 示例
```ts
// 用法示例
await client.getTicket(params);
```

### idcardOcr()
身份证 OCR
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_idcardocr.html)

#### 签名
```ts
idcardOcr(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{img_url?:string, img?:string}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.idcardOcr(payload);
```

### imgAiCrop()
智能裁剪
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgaicrop.html)

#### 签名
```ts
imgAiCrop(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{img_url?:string, img?:string}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.imgAiCrop(payload);
```

### imgQrcode()
二维码/条码识别
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgqrcode.html)

#### 签名
```ts
imgQrcode(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{img_url?:string, img?:string}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.imgQrcode(payload);
```

### menuOcr()
菜单 OCR
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_menuocr.html)

#### 签名
```ts
menuOcr(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{img_url?:string, img?:string}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.menuOcr(payload);
```

### queryRecoResultForText()
查询语音识别结果
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_queryrecoresultfortext.html)

#### 签名
```ts
queryRecoResultForText(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{voice_id:string, lang:string}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.queryRecoResultForText(payload);
```

### snsAccessToken()
通过 code 换取网页授权 access_token
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsaccesstoken.html)

#### 签名
```ts
snsAccessToken(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{appid:string, secret:string, code:string, grant_type?:'authorization_code'}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.snsAccessToken(params);
```

### snsAuth()
检验授权凭证（access_token）是否有效
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsauth.html)

#### 签名
```ts
snsAuth(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{access_token:string, openid:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.snsAuth(params);
```

### snsRefreshToken()
刷新网页授权 access_token
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsrefreshtoken.html)

#### 签名
```ts
snsRefreshToken(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{appid:string, refresh_token:string, grant_type?:'refresh_token'}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.snsRefreshToken(params);
```

### snsUserInfo()
拉取用户信息（scope\=snsapi_userinfo）
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsuserinfo.html)

#### 签名
```ts
snsUserInfo(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{access_token:string, openid:string, lang?:'zh_CN'\|'zh_TW'\|'en'}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.snsUserInfo(params);
```

### translateContent()
翻译内容
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_translatecontent.html)

#### 签名
```ts
translateContent(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{lfrom:string, lto:string, content:string}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.translateContent(payload);
```
