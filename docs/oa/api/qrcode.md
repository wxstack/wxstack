---
title: Qrcode API
outline: deep
---

# Qrcode API

> 订阅号/服务号通用

## 方法

### createQrcode()
创建二维码（临时/永久）。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodes/api_createqrcode.html)

#### 签名
```ts
createQrcode(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{expire_seconds?:number, action_name:'QR_SCENE'\|'QR_STR_SCENE'\|'QR_LIMIT_SCENE'\|'QR_LIMIT_STR_SCENE', action_info:{scene:{scene_id?:number, scene_str?:string}}}` | 是 |  |  |
#### 返回值

类型：`Promise<{ticket:string, expire_seconds?:number, url:string}>`

#### 示例
```ts
// 用法示例
await client.createQrcode(payload);
```

### fetchShorten()
通过短 Key 拉取原始信息。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_fetchshorten.html)

#### 签名
```ts
fetchShorten(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{short_key:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{long_url?:string, status?:number}>`

#### 示例
```ts
// 用法示例
await client.fetchShorten(params);
```

### genShortKey()
生成短 Key。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_genshortkey.html)

#### 签名
```ts
genShortKey(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{long_url:string, expire_seconds?:number}` | 是 |  |  |
#### 返回值

类型：`Promise<{short_key:string, expire_seconds?:number}>`

#### 示例
```ts
// 用法示例
await client.genShortKey(payload);
```

### qrcodeJumpAdd()
增加二维码跳转规则。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpadd.html)

#### 签名
```ts
qrcodeJumpAdd(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{prefix:string, path:string, open_version?:number, permit_sub_rule?:1\|0, debug_url?:string[]}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.qrcodeJumpAdd(payload);
```

### qrcodeJumpDelete()
删除二维码跳转规则。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpdelete.html)

#### 签名
```ts
qrcodeJumpDelete(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{prefix:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.qrcodeJumpDelete(params);
```

### qrcodeJumpGet()
获取已设置的二维码跳转规则。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpget.html)

#### 签名
```ts
qrcodeJumpGet()
```
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.qrcodeJumpGet();
```

### qrcodeJumpPublish()
发布二维码跳转规则。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumppublish.html)

#### 签名
```ts
qrcodeJumpPublish(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{prefix:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.qrcodeJumpPublish(params);
```
