---
title: Draftbox API
outline: deep
---

# Draftbox API

> 订阅号/服务号通用

## 方法

### draftAdd()
新建草稿。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_add.html)

#### 签名
```ts
draftAdd(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{articles:Array<Object>}` | 是 |  | - 图文数组 articles |
#### 返回值

类型：`Promise<{media_id:string}>`

#### 示例
```ts
// 用法示例
await client.draftAdd(payload);
```

### draftBatchGet()
批量获取草稿。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_batchget.html)

#### 签名
```ts
draftBatchGet(params)
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
await client.draftBatchGet(params);
```

### draftCount()
获取草稿总数。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_count.html)

#### 签名
```ts
draftCount()
```
#### 返回值

类型：`Promise<{total_count:number}>`

#### 示例
```ts
// 用法示例
await client.draftCount();
```

### draftDelete()
删除草稿。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_delete.html)

#### 签名
```ts
draftDelete(params)
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
await client.draftDelete(params);
```

### draftSwitch()
草稿箱开关。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_switch.html)

#### 签名
```ts
draftSwitch(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{is_open:0\|1}` | 是 |  | - 1 开启，0 关闭 |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.draftSwitch(params);
```

### draftUpdate()
修改草稿。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_update.html)

#### 签名
```ts
draftUpdate(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `Object` | 是 |  | - 按文档传入 &#123;media_id, index?, articles&#125; |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.draftUpdate(payload);
```

### ecsGetProductCardInfo()
获取商品卡片信息。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/draftbox/shop/api_ecsgetproductcardinfo.html)

#### 签名
```ts
ecsGetProductCardInfo(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `Object` | 是 |  | - 按文档传入查询条件（如商品 ID 等） |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.ecsGetProductCardInfo(params);
```

### getDraft()
获取草稿。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_getdraft.html)

#### 签名
```ts
getDraft(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{media_id:string}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.getDraft(params);
```
