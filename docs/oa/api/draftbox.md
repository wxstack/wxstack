---
title: Draftbox API
outline: deep
---

# Draftbox API

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

### draftAdd()
新建草稿。
文档: https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_add.html

签名：`draftAdd(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{articles:Array<Object>}`，必填)：- 图文数组 articles
返回值：`Promise<{media_id:string}>`
```ts
// 用法示例
await client.draftAdd(client, payload);
```

### draftBatchGet()
批量获取草稿。
文档: https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_batchget.html

签名：`draftBatchGet(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{offset:number, count:number, no_content?:0|1}`，必填)
返回值：`Promise<{total_count:number, item_count:number, item:Array<Object>}>`
```ts
// 用法示例
await client.draftBatchGet(client, params);
```

### draftCount()
获取草稿总数。
文档: https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_count.html

签名：`draftCount(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
返回值：`Promise<{total_count:number}>`
```ts
// 用法示例
await client.draftCount(client);
```

### draftDelete()
删除草稿。
文档: https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_delete.html

签名：`draftDelete(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{media_id:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.draftDelete(client, params);
```

### draftSwitch()
草稿箱开关。
文档: https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_switch.html

签名：`draftSwitch(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{is_open:0|1}`，必填)：- 1 开启，0 关闭
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.draftSwitch(client, params);
```

### draftUpdate()
修改草稿。
文档: https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_update.html

签名：`draftUpdate(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`Object`，必填)：- 按文档传入 {media_id, index?, articles}
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.draftUpdate(client, payload);
```

### ecsGetProductCardInfo()
获取商品卡片信息。
文档: https://developers.weixin.qq.com/doc/service/api/draftbox/shop/api_ecsgetproductcardinfo.html

签名：`ecsGetProductCardInfo(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`Object`，必填)：- 按文档传入查询条件（如商品 ID 等）
返回值：`Promise<Object>`
```ts
// 用法示例
await client.ecsGetProductCardInfo(client, params);
```

### getDraft()
获取草稿。
文档: https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_getdraft.html

签名：`getDraft(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{media_id:string}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.getDraft(client, params);
```
