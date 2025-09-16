---
title: Material API
outline: deep
---

# Material API

> 订阅号/服务号通用

## 方法

### addMaterial()
新增其他类型永久素材（图片/语音/视频/缩略图）。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/material/permanent/api_addmaterial.html)

#### 签名
```ts
addMaterial(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{type:'image'\|'voice'\|'video'\|'thumb'} & ({filePath:string} \| {file:Buffer\|import('stream').Readable, filename?:string, contentType?:string}) & {videoDescription?: {title:string, introduction:string}}` | 是 |  |  |
#### 返回值

类型：`Promise<{media_id:string, url?:string}>`

#### 示例
```ts
// 用法示例
await client.addMaterial(params);
```

### batchGetMaterial()
批量获取素材列表。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/material/permanent/api_batchgetmaterial.html)

#### 签名
```ts
batchGetMaterial(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{type:'image'\|'video'\|'voice'\|'news', offset:number, count:number}` | 是 |  |  |
#### 返回值

类型：`Promise<{total_count:number, item_count:number, item:Array<Object>}>`

#### 示例
```ts
// 用法示例
await client.batchGetMaterial(payload);
```

### delMaterial()
删除永久素材。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/material/permanent/api_delmaterial.html)

#### 签名
```ts
delMaterial(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{media_id:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.delMaterial(params);
```

### getHdVoice()
高清语音素材获取（JSSDK 语音下载）。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/material/temporary/api_gethdvoice.html)

#### 签名
```ts
getHdVoice(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{media_id:string, responseType?: 'arraybuffer'\|'stream'}` | 是 |  |  |
#### 返回值

类型：`Promise<any>`

#### 示例
```ts
// 用法示例
await client.getHdVoice(params);
```

### getMaterial()
获取永久素材。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterial.html)

注意：图文素材返回 JSON；非图文（图片/语音等）返回二进制。可用 responseType 指定返回体类型。

#### 签名
```ts
getMaterial(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{media_id:string, responseType?: 'json'\|'arraybuffer'}` | 是 |  |  |
#### 返回值

类型：`Promise<any>`

#### 示例
```ts
// 用法示例
await client.getMaterial(params);
```

### getMaterialCount()
获取素材总数。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterialcount.html)

#### 签名
```ts
getMaterialCount()
```
#### 返回值

类型：`Promise<{voice_count:number, video_count:number, image_count:number, news_count:number}>`

#### 示例
```ts
// 用法示例
await client.getMaterialCount();
```

### getMedia()
获取临时素材（二进制）。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/material/temporary/api_getmedia.html)

#### 签名
```ts
getMedia(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{media_id:string, responseType?: 'arraybuffer'\|'stream'}` | 是 |  |  |
#### 返回值

类型：`Promise<any>`

#### 示例
```ts
// 用法示例
await client.getMedia(params);
```

### materialUploadImage()
上传图文消息内图片（永久素材域）。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/material/permanent/api_uploadimage.html)

#### 签名
```ts
materialUploadImage(input)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `input` | `{filePath?:string, file?:Buffer\|import('stream').Readable, filename?:string, contentType?:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{url:string}>`

#### 示例
```ts
// 用法示例
await client.materialUploadImage(input);
```

### uploadTempMedia()
上传临时素材。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/material/temporary/api_uploadtempmedia.html)

#### 签名
```ts
uploadTempMedia(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{type:'image'\|'voice'\|'video'\|'thumb'} & ({filePath:string} \| {file:Buffer\|import('stream').Readable, filename?:string, contentType?:string})` | 是 |  |  |
#### 返回值

类型：`Promise<{type:string, media_id:string, created_at:number}>`

#### 示例
```ts
// 用法示例
await client.uploadTempMedia(params);
```
