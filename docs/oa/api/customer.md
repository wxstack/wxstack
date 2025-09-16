---
title: Customer API
outline: deep
---

# Customer API

> 仅服务号可用

## 方法

### addKfAccount()
添加客服账号。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_addkfaccount.html)

#### 签名
```ts
addKfAccount(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{kf_account:string, nickname:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.addKfAccount(payload);
```

### closeSession()
关闭会话。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_closesession.html)

#### 签名
```ts
closeSession(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{kf_account:string, openid:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.closeSession(payload);
```

### createKfSession()
创建会话。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_createkfsession.html)

#### 签名
```ts
createKfSession(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{kf_account:string, openid:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.createKfSession(payload);
```

### delKfAccount()
删除客服账号。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_delkfaccount.html)

#### 签名
```ts
delKfAccount(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{kf_account:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.delKfAccount(params);
```

### getKfList()
获取所有客服账号列表。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getkflist.html)

#### 签名
```ts
getKfList()
```
#### 返回值

类型：`Promise<{kf_list:Array<Object>}>`

#### 示例
```ts
// 用法示例
await client.getKfList();
```

### getKfSession()
获取用户会话状态。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsession.html)

#### 签名
```ts
getKfSession(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{openid:string}` | 是 |  |  |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.getKfSession(params);
```

### getKfSessionList()
获取客服的会话列表。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsessionlist.html)

#### 签名
```ts
getKfSessionList(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{kf_account:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{sessionlist:Array<Object>}>`

#### 示例
```ts
// 用法示例
await client.getKfSessionList(params);
```

### getMsgList()
获取客服消息记录。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/customer/message/api_getmsglist.html)

#### 签名
```ts
getMsgList(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{starttime:number, endtime:number, msgid:number, number:number}` | 是 |  | - 时间为秒级 Unix 时间戳 |
#### 返回值

类型：`Promise<{recordlist:Array<Object>}>`

#### 示例
```ts
// 用法示例
await client.getMsgList(payload);
```

### getOnlineKfList()
获取在线客服列表。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getonlinekflist.html)

#### 签名
```ts
getOnlineKfList()
```
#### 返回值

类型：`Promise<{kf_online_list:Array<Object>}>`

#### 示例
```ts
// 用法示例
await client.getOnlineKfList();
```

### getWaitCase()
获取待接入会话列表。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getwaitcase.html)

#### 签名
```ts
getWaitCase()
```
#### 返回值

类型：`Promise<{count:number, waitcaselist:Array<Object>}>`

#### 示例
```ts
// 用法示例
await client.getWaitCase();
```

### inviteKfWorker()
邀请微信号绑定为客服。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_invitekfworker.html)

#### 签名
```ts
inviteKfWorker(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{kf_account:string, invite_wx:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.inviteKfWorker(payload);
```

### sendCustomMessage()
发送客服消息。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/customer/message/api_sendcustommessage.html)

#### 签名
```ts
sendCustomMessage(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `Object` | 是 |  | - &#123; touser, msgtype, text/image/news/... &#125; |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.sendCustomMessage(payload);
```

### typing()
下发客服输入状态。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/customer/message/api_typing.html)

#### 签名
```ts
typing(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{touser:string, command:'Typing'\|'CancelTyping'}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.typing(payload);
```

### updateKfAccount()
更新客服账号。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_updatekfaccount.html)

#### 签名
```ts
updateKfAccount(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{kf_account:string, nickname:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.updateKfAccount(payload);
```

### uploadKfHeadImg()
上传客服头像。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_uploadkfheadimg.html)

#### 签名
```ts
uploadKfHeadImg(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{kf_account:string} & ({filePath:string} \| {file:Buffer\|import('stream').Readable, filename?:string, contentType?:string})` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.uploadKfHeadImg(params);
```
