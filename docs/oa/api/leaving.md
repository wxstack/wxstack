---
title: Leaving API
outline: deep
---

# Leaving API

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

### closeComment()
关闭评论
文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_closecomment.html

签名：`closeComment(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{msg_data_id:number|string, index?:number}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.closeComment(client, params);
```

### delComment()
删除评论
文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_delcomment.html

签名：`delComment(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{msg_data_id:number|string, index?:number, user_comment_id:number|string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.delComment(client, params);
```

### delReplyComment()
删除回复
文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_delreplycomment.html

签名：`delReplyComment(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{msg_data_id:number|string, index?:number, user_comment_id:number|string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.delReplyComment(client, params);
```

### electComment()
将评论标记为精选
文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_electcomment.html

签名：`electComment(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{msg_data_id:number|string, index?:number, user_comment_id:number|string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.electComment(client, params);
```

### freePublishBatchGet()
获取已发布列表
文档: https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_batchget.html

签名：`freePublishBatchGet(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{offset:number, count:number, no_content?:0|1}`，必填)
返回值：`Promise<{total_count:number, item_count:number, item:Array<Object>}>`
```ts
// 用法示例
await client.freePublishBatchGet(client, params);
```

### freePublishDelete()
删除已发布素材
文档: https://developers.weixin.qq.com/doc/service/api/public/api_freepublishdelete.html

签名：`freePublishDelete(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{article_id:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.freePublishDelete(client, params);
```

### freePublishGet()
查询发布结果
文档: https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_get.html

签名：`freePublishGet(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{publish_id?:string, article_id?:string}`，必填)：- 文档支持以 publish_id 或 article_id 查询
返回值：`Promise<Object>`
```ts
// 用法示例
await client.freePublishGet(client, params);
```

### freePublishGetArticle()
通过 article_id 获取已发布素材
文档: https://developers.weixin.qq.com/doc/service/api/public/api_freepublishgetarticle.html

签名：`freePublishGetArticle(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{article_id:string}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.freePublishGetArticle(client, params);
```

### freePublishSubmit()
提交发布
文档: https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_submit.html

签名：`freePublishSubmit(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{media_id:string}`，必填)
返回值：`Promise<{publish_id?:string, errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.freePublishSubmit(client, params);
```

### listComment()
拉取评论列表
文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_listcomment.html

签名：`listComment(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{msg_data_id:number|string, index?:number, begin:number, count:number, type?:0|1}`，必填)：- type: 0 全部，1 精选
返回值：`Promise<{total:number, comment:Array<Object>}>`
```ts
// 用法示例
await client.listComment(client, params);
```

### openArticleComment()
开启评论
文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_openarticlecomment.html

签名：`openArticleComment(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{msg_data_id:number|string, index?:number}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.openArticleComment(client, params);
```

### replyComment()
回复评论
文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_replycomment.html

签名：`replyComment(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{msg_data_id:number|string, index?:number, user_comment_id:number|string, content:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.replyComment(client, params);
```

### unelectComment()
取消精选
文档: https://developers.weixin.qq.com/doc/service/api/leaving/api_unelectcomment.html

签名：`unelectComment(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{msg_data_id:number|string, index?:number, user_comment_id:number|string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.unelectComment(client, params);
```
