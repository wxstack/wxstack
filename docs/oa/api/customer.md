---
title: Customer API
outline: deep
---

# Customer API

> 仅服务号可用

## 快速上手

```ts
import { createClient } from '@wxstack/oa';

const client = createClient({
  appId: 'wx_your_appid',
  appSecret: 'your_secret'
});

// 此模块仅服务号可用。
```

## 方法

### addKfAccount()
添加客服账号。
文档: https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_addkfaccount.html

签名：`addKfAccount(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{kf_account:string, nickname:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.addKfAccount(client, payload);
```

### closeSession()
关闭会话。
文档: https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_closesession.html

签名：`closeSession(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{kf_account:string, openid:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.closeSession(client, payload);
```

### createKfSession()
创建会话。
文档: https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_createkfsession.html

签名：`createKfSession(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{kf_account:string, openid:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.createKfSession(client, payload);
```

### delKfAccount()
删除客服账号。
文档: https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_delkfaccount.html

签名：`delKfAccount(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{kf_account:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.delKfAccount(client, params);
```

### getKfList()
获取所有客服账号列表。
文档: https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getkflist.html

签名：`getKfList(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
返回值：`Promise<{kf_list:Array<Object>}>`
```ts
// 用法示例
await client.getKfList(client);
```

### getKfSession()
获取用户会话状态。
文档: https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsession.html

签名：`getKfSession(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{openid:string}`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.getKfSession(client, params);
```

### getKfSessionList()
获取客服的会话列表。
文档: https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsessionlist.html

签名：`getKfSessionList(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{kf_account:string}`，必填)
返回值：`Promise<{sessionlist:Array<Object>}>`
```ts
// 用法示例
await client.getKfSessionList(client, params);
```

### getMsgList()
获取客服消息记录。
文档: https://developers.weixin.qq.com/doc/service/api/customer/message/api_getmsglist.html

签名：`getMsgList(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{starttime:number, endtime:number, msgid:number, number:number}`，必填)：- 时间为秒级 Unix 时间戳
返回值：`Promise<{recordlist:Array<Object>}>`
```ts
// 用法示例
await client.getMsgList(client, payload);
```

### getOnlineKfList()
获取在线客服列表。
文档: https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getonlinekflist.html

签名：`getOnlineKfList(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
返回值：`Promise<{kf_online_list:Array<Object>}>`
```ts
// 用法示例
await client.getOnlineKfList(client);
```

### getWaitCase()
获取待接入会话列表。
文档: https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getwaitcase.html

签名：`getWaitCase(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
返回值：`Promise<{count:number, waitcaselist:Array<Object>}>`
```ts
// 用法示例
await client.getWaitCase(client);
```

### inviteKfWorker()
邀请微信号绑定为客服。
文档: https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_invitekfworker.html

签名：`inviteKfWorker(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{kf_account:string, invite_wx:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.inviteKfWorker(client, payload);
```

### sendCustomMessage()
发送客服消息。
文档: https://developers.weixin.qq.com/doc/service/api/customer/message/api_sendcustommessage.html

签名：`sendCustomMessage(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`Object`，必填)：- { touser, msgtype, text/image/news/... }
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.sendCustomMessage(client, payload);
```

### typing()
下发客服输入状态。
文档: https://developers.weixin.qq.com/doc/service/api/customer/message/api_typing.html

签名：`typing(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{touser:string, command:'Typing'|'CancelTyping'}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.typing(client, payload);
```

### updateKfAccount()
更新客服账号。
文档: https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_updatekfaccount.html

签名：`updateKfAccount(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{kf_account:string, nickname:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.updateKfAccount(client, payload);
```

### uploadKfHeadImg()
上传客服头像。
文档: https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_uploadkfheadimg.html

签名：`uploadKfHeadImg(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{kf_account:string} & ({filePath:string} | {file:Buffer|import('stream').Readable, filename?:string, contentType?:string})`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.uploadKfHeadImg(client, params);
```
