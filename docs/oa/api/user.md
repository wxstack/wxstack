---
title: User API
outline: deep
---

# User API

> 订阅号/服务号通用

## 方法

### batchBlacklist()
批量拉黑用户
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchblacklist.html)

#### 签名
```ts
batchBlacklist(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{openid_list:string[]}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.batchBlacklist(payload);
```

### batchTagging()
批量为用户打标签
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchtagging.html)

#### 签名
```ts
batchTagging(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{openid_list:string[], tagid:number}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.batchTagging(payload);
```

### batchUnblacklist()
批量取消拉黑
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchunblacklist.html)

#### 签名
```ts
batchUnblacklist(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{openid_list:string[]}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.batchUnblacklist(payload);
```

### batchUntagging()
批量为用户取消标签
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchuntagging.html)

#### 签名
```ts
batchUntagging(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{openid_list:string[], tagid:number}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.batchUntagging(payload);
```

### batchUserInfo()
批量获取用户基本信息
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchuserinfo.html)

#### 签名
```ts
batchUserInfo(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{user_list:Array<{openid:string, lang?:'zh_CN'\|'zh_TW'\|'en'}>}` | 是 |  |  |
#### 返回值

类型：`Promise<{user_info_list:Array<Object>}>`

#### 示例
```ts
// 用法示例
await client.batchUserInfo(payload);
```

### createTag()
创建标签
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_createtag.html)

#### 签名
```ts
createTag(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{name:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{tag:{id:number,name:string}}>`

#### 示例
```ts
// 用法示例
await client.createTag(params);
```

### deleteTag()
删除标签
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_deletetag.html)

#### 签名
```ts
deleteTag(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{id:number}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.deleteTag(params);
```

### getBlacklist()
获取黑名单列表
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getblacklist.html)

#### 签名
```ts
getBlacklist(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{begin_openid?:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{total:number, count:number, data?:{openid:string[]}, next_openid?:string}>`

#### 示例
```ts
// 用法示例
await client.getBlacklist(params);
```

### getFans()
获取公众号的粉丝列表
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getfans.html)

#### 签名
```ts
getFans(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{next_openid?:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{total:number, count:number, data?:{openid:string[]}, next_openid?:string}>`

#### 示例
```ts
// 用法示例
await client.getFans(params);
```

### getTagFans()
获取标签下粉丝列表
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagfans.html)

#### 签名
```ts
getTagFans(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{tagid:number, next_openid?:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{count:number, data?:{openid:string[]}, next_openid?:string}>`

#### 示例
```ts
// 用法示例
await client.getTagFans(params);
```

### getTagIdList()
获取用户身上的标签列表
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagidlist.html)

#### 签名
```ts
getTagIdList(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{openid:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{tagid_list:number[]}>`

#### 示例
```ts
// 用法示例
await client.getTagIdList(params);
```

### getTags()
获取已创建的标签
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettags.html)

#### 签名
```ts
getTags()
```
#### 返回值

类型：`Promise<{tags:Array<{id:number,name:string,count:number}>}>`

#### 示例
```ts
// 用法示例
await client.getTags();
```

### getUserInfo()
获取用户基本信息
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_userinfo.html)

#### 签名
```ts
getUserInfo(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{openid:string, lang?:'zh_CN'\|'zh_TW'\|'en'}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.getUserInfo(params);
```

### updateRemark()
设置用户备注名
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_updateremark.html)

#### 签名
```ts
updateRemark(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{openid:string, remark:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.updateRemark(payload);
```

### updateTag()
编辑标签
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_updatetag.html)

#### 签名
```ts
updateTag(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{id:number, name:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.updateTag(params);
```
