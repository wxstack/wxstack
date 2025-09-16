---
title: User API
outline: deep
---

# User API

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

### batchBlacklist()
批量拉黑用户
文档: https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchblacklist.html

签名：`batchBlacklist(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{openid_list:string[]}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.batchBlacklist(client, payload);
```

### batchTagging()
批量为用户打标签
文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchtagging.html

签名：`batchTagging(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{openid_list:string[], tagid:number}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.batchTagging(client, payload);
```

### batchUnblacklist()
批量取消拉黑
文档: https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchunblacklist.html

签名：`batchUnblacklist(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{openid_list:string[]}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.batchUnblacklist(client, payload);
```

### batchUntagging()
批量为用户取消标签
文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchuntagging.html

签名：`batchUntagging(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{openid_list:string[], tagid:number}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.batchUntagging(client, payload);
```

### batchUserInfo()
批量获取用户基本信息
文档: https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchuserinfo.html

签名：`batchUserInfo(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{user_list:Array<{openid:string, lang?:'zh_CN'|'zh_TW'|'en'}>}`，必填)
返回值：`Promise<{user_info_list:Array<Object>}>`
```ts
// 用法示例
await client.batchUserInfo(client, payload);
```

### createTag()
创建标签
文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_createtag.html

签名：`createTag(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{name:string}`，必填)
返回值：`Promise<{tag:{id:number,name:string}}>`
```ts
// 用法示例
await client.createTag(client, params);
```

### deleteTag()
删除标签
文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_deletetag.html

签名：`deleteTag(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{id:number}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.deleteTag(client, params);
```

### getBlacklist()
获取黑名单列表
文档: https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getblacklist.html

签名：`getBlacklist(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{begin_openid?:string}`，必填)
返回值：`Promise<{total:number, count:number, data?:{openid:string[]}, next_openid?:string}>`
```ts
// 用法示例
await client.getBlacklist(client, params);
```

### getFans()
获取公众号的粉丝列表
文档: https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getfans.html

签名：`getFans(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{next_openid?:string}`，必填)
返回值：`Promise<{total:number, count:number, data?:{openid:string[]}, next_openid?:string}>`
```ts
// 用法示例
await client.getFans(client, params);
```

### getTagFans()
获取标签下粉丝列表
文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagfans.html

签名：`getTagFans(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{tagid:number, next_openid?:string}`，必填)
返回值：`Promise<{count:number, data?:{openid:string[]}, next_openid?:string}>`
```ts
// 用法示例
await client.getTagFans(client, params);
```

### getTagIdList()
获取用户身上的标签列表
文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagidlist.html

签名：`getTagIdList(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{openid:string}`，必填)
返回值：`Promise<{tagid_list:number[]}>`
```ts
// 用法示例
await client.getTagIdList(client, params);
```

### getTags()
获取已创建的标签
文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettags.html

签名：`getTags(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
返回值：`Promise<{tags:Array<{id:number,name:string,count:number}>}>`
```ts
// 用法示例
await client.getTags(client);
```

### getUserInfo()
获取用户基本信息
文档: https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_userinfo.html

签名：`getUserInfo(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{openid:string, lang?:'zh_CN'|'zh_TW'|'en'}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.getUserInfo(client, params);
```

### updateRemark()
设置用户备注名
文档: https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_updateremark.html

签名：`updateRemark(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{openid:string, remark:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.updateRemark(client, payload);
```

### updateTag()
编辑标签
文档: https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_updatetag.html

签名：`updateTag(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{id:number, name:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.updateTag(client, params);
```
