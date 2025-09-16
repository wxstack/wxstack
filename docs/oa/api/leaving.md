---
title: Leaving API
outline: deep
---

# Leaving API

> 订阅号/服务号通用

## 方法

### closeComment()
关闭评论
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/leaving/api_closecomment.html)

#### 签名
```ts
closeComment(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{msg_data_id:number\|string, index?:number}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.closeComment(params);
```

### delComment()
删除评论
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/leaving/api_delcomment.html)

#### 签名
```ts
delComment(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{msg_data_id:number\|string, index?:number, user_comment_id:number\|string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.delComment(params);
```

### delReplyComment()
删除回复
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/leaving/api_delreplycomment.html)

#### 签名
```ts
delReplyComment(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{msg_data_id:number\|string, index?:number, user_comment_id:number\|string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.delReplyComment(params);
```

### electComment()
将评论标记为精选
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/leaving/api_electcomment.html)

#### 签名
```ts
electComment(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{msg_data_id:number\|string, index?:number, user_comment_id:number\|string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.electComment(params);
```

### freePublishBatchGet()
获取已发布列表
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_batchget.html)

#### 签名
```ts
freePublishBatchGet(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{offset:number, count:number, no_content?:0\|1}` | 是 |  |  |
#### 返回值

类型：`Promise<{total_count:number, item_count:number, item:Array<Object>}>`

#### 示例
```ts
// 用法示例
await client.freePublishBatchGet(params);
```

### freePublishDelete()
删除已发布素材
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/public/api_freepublishdelete.html)

#### 签名
```ts
freePublishDelete(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{article_id:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.freePublishDelete(params);
```

### freePublishGet()
查询发布结果
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_get.html)

#### 签名
```ts
freePublishGet(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{publish_id?:string, article_id?:string}` | 是 |  | - 文档支持以 publish_id 或 article_id 查询 |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.freePublishGet(params);
```

### freePublishGetArticle()
通过 article_id 获取已发布素材
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/public/api_freepublishgetarticle.html)

#### 签名
```ts
freePublishGetArticle(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{article_id:string}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.freePublishGetArticle(params);
```

### freePublishSubmit()
提交发布
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_submit.html)

#### 签名
```ts
freePublishSubmit(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{media_id:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{publish_id?:string, errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.freePublishSubmit(params);
```

### listComment()
拉取评论列表
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/leaving/api_listcomment.html)

#### 签名
```ts
listComment(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{msg_data_id:number\|string, index?:number, begin:number, count:number, type?:0\|1}` | 是 |  | - type: 0 全部，1 精选 |
#### 返回值

类型：`Promise<{total:number, comment:Array<Object>}>`

#### 示例
```ts
// 用法示例
await client.listComment(params);
```

### openArticleComment()
开启评论
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/leaving/api_openarticlecomment.html)

#### 签名
```ts
openArticleComment(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{msg_data_id:number\|string, index?:number}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.openArticleComment(params);
```

### replyComment()
回复评论
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/leaving/api_replycomment.html)

#### 签名
```ts
replyComment(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{msg_data_id:number\|string, index?:number, user_comment_id:number\|string, content:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.replyComment(params);
```

### unelectComment()
取消精选
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/leaving/api_unelectcomment.html)

#### 签名
```ts
unelectComment(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{msg_data_id:number\|string, index?:number, user_comment_id:number\|string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.unelectComment(params);
```
