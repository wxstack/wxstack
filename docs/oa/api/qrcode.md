---
title: Qrcode API
outline: deep
---

# Qrcode API

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

### createQrcode()
创建二维码（临时/永久）。
文档: https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodes/api_createqrcode.html

签名：`createQrcode(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{expire_seconds?:number, action_name:'QR_SCENE'|'QR_STR_SCENE'|'QR_LIMIT_SCENE'|'QR_LIMIT_STR_SCENE', action_info:{scene:{scene_id?:number, scene_str?:string}}}`，必填)
返回值：`Promise<{ticket:string, expire_seconds?:number, url:string}>`
```ts
// 用法示例
await client.createQrcode(client, payload);
```

### fetchShorten()
通过短 Key 拉取原始信息。
文档: https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_fetchshorten.html

签名：`fetchShorten(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{short_key:string}`，必填)
返回值：`Promise<{long_url?:string, status?:number}>`
```ts
// 用法示例
await client.fetchShorten(client, params);
```

### genShortKey()
生成短 Key。
文档: https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_genshortkey.html

签名：`genShortKey(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{long_url:string, expire_seconds?:number}`，必填)
返回值：`Promise<{short_key:string, expire_seconds?:number}>`
```ts
// 用法示例
await client.genShortKey(client, payload);
```

### qrcodeJumpAdd()
增加二维码跳转规则。
文档: https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpadd.html

签名：`qrcodeJumpAdd(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{prefix:string, path:string, open_version?:number, permit_sub_rule?:1|0, debug_url?:string[]}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.qrcodeJumpAdd(client, payload);
```

### qrcodeJumpDelete()
删除二维码跳转规则。
文档: https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpdelete.html

签名：`qrcodeJumpDelete(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{prefix:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.qrcodeJumpDelete(client, params);
```

### qrcodeJumpGet()
获取已设置的二维码跳转规则。
文档: https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpget.html

签名：`qrcodeJumpGet(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.qrcodeJumpGet(client);
```

### qrcodeJumpPublish()
发布二维码跳转规则。
文档: https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumppublish.html

签名：`qrcodeJumpPublish(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{prefix:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.qrcodeJumpPublish(client, params);
```
