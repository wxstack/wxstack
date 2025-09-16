---
title: Material API
outline: deep
---

# Material API

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

### addMaterial()
新增其他类型永久素材（图片/语音/视频/缩略图）。
文档: https://developers.weixin.qq.com/doc/service/api/material/permanent/api_addmaterial.html

签名：`addMaterial(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{type:'image'|'voice'|'video'|'thumb'} & ({filePath:string} | {file:Buffer|import('stream').Readable, filename?:string, contentType?:string}) & {videoDescription?: {title:string, introduction:string}}`，必填)
返回值：`Promise<{media_id:string, url?:string}>`
```ts
// 用法示例
await client.addMaterial(client, params);
```

### batchGetMaterial()
批量获取素材列表。
文档: https://developers.weixin.qq.com/doc/service/api/material/permanent/api_batchgetmaterial.html

签名：`batchGetMaterial(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{type:'image'|'video'|'voice'|'news', offset:number, count:number}`，必填)
返回值：`Promise<{total_count:number, item_count:number, item:Array<Object>}>`
```ts
// 用法示例
await client.batchGetMaterial(client, payload);
```

### delMaterial()
删除永久素材。
文档: https://developers.weixin.qq.com/doc/service/api/material/permanent/api_delmaterial.html

签名：`delMaterial(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{media_id:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.delMaterial(client, params);
```

### getHdVoice()
高清语音素材获取（JSSDK 语音下载）。
文档: https://developers.weixin.qq.com/doc/service/api/material/temporary/api_gethdvoice.html

签名：`getHdVoice(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{media_id:string, responseType?: 'arraybuffer'|'stream'}`，必填)
返回值：`Promise<any>`
```ts
// 用法示例
await client.getHdVoice(client, params);
```

### getMaterial()
获取永久素材。
文档: https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterial.html

注意：图文素材返回 JSON；非图文（图片/语音等）返回二进制。可用 responseType 指定返回体类型。

签名：`getMaterial(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{media_id:string, responseType?: 'json'|'arraybuffer'}`，必填)
返回值：`Promise<any>`
```ts
// 用法示例
await client.getMaterial(client, params);
```

### getMaterialCount()
获取素材总数。
文档: https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterialcount.html

签名：`getMaterialCount(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
返回值：`Promise<{voice_count:number, video_count:number, image_count:number, news_count:number}>`
```ts
// 用法示例
await client.getMaterialCount(client);
```

### getMedia()
获取临时素材（二进制）。
文档: https://developers.weixin.qq.com/doc/service/api/material/temporary/api_getmedia.html

签名：`getMedia(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{media_id:string, responseType?: 'arraybuffer'|'stream'}`，必填)
返回值：`Promise<any>`
```ts
// 用法示例
await client.getMedia(client, params);
```

### materialUploadImage()
上传图文消息内图片（永久素材域）。
文档: https://developers.weixin.qq.com/doc/service/api/material/permanent/api_uploadimage.html

签名：`materialUploadImage(client, input)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `input` (`{filePath?:string, file?:Buffer|import('stream').Readable, filename?:string, contentType?:string}`，必填)
返回值：`Promise<{url:string}>`
```ts
// 用法示例
await client.materialUploadImage(client, input);
```

### uploadTempMedia()
上传临时素材。
文档: https://developers.weixin.qq.com/doc/service/api/material/temporary/api_uploadtempmedia.html

签名：`uploadTempMedia(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{type:'image'|'voice'|'video'|'thumb'} & ({filePath:string} | {file:Buffer|import('stream').Readable, filename?:string, contentType?:string})`，必填)
返回值：`Promise<{type:string, media_id:string, created_at:number}>`
```ts
// 用法示例
await client.uploadTempMedia(client, params);
```
