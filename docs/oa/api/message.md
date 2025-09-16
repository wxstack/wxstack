---
title: Message API
outline: deep
---

# Message API

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

### addTemplate()
账户添加模板（通过短 ID 获取模板 ID）。
文档: https://developers.weixin.qq.com/doc/service/api/notify/template/api_addtemplate.html

签名：`addTemplate(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{template_id_short: string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string, template_id?:string}>`
```ts
// 用法示例
await client.addTemplate(client, params);
```

### addWxaNewTemplate()
新增账号个人模板。
文档: https://developers.weixin.qq.com/doc/service/api/notify/notify/api_addwxanewtemplate.html

签名：`addWxaNewTemplate(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{tid:string, kidList:number[], sceneDesc?:string}`，必填)
返回值：`Promise<{priTmplId:string}>`
```ts
// 用法示例
await client.addWxaNewTemplate(client, params);
```

### delWxaNewTemplate()
删除账号个人模板。
文档: https://developers.weixin.qq.com/doc/service/api/notify/notify/api_delwxanewtemplate.html

签名：`delWxaNewTemplate(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{priTmplId:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.delWxaNewTemplate(client, params);
```

### deleteMassMsg()
删除群发消息。
文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_deletemassmsg.html

签名：`deleteMassMsg(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{msg_id: number|string, article_idx?: number}`，必填)：- msg_id 必填，article_idx 可选（当删除图文中某篇）
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.deleteMassMsg(client, params);
```

### deleteTemplate()
删除私有模板。
文档: https://developers.weixin.qq.com/doc/service/api/notify/template/api_deletetemplate.html

签名：`deleteTemplate(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{template_id:string}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.deleteTemplate(client, params);
```

### getAllTemplates()
获取账号下所有私有模板。
文档: https://developers.weixin.qq.com/doc/service/api/notify/template/api_getalltemplates.html

签名：`getAllTemplates(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
返回值：`Promise<{template_list:Array<Object>}>`
```ts
// 用法示例
await client.getAllTemplates(client);
```

### getCategory()
获取账号所属类目。
文档: https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getcategory.html

签名：`getCategory(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.getCategory(client);
```

### getCurrentAutoReplyInfo()
获取当前自动回复规则。
文档: https://developers.weixin.qq.com/doc/service/api/notify/autoreplies/api_getcurrentautoreplyinfo.html

签名：`getCurrentAutoReplyInfo(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
返回值：`Promise<Object>`
```ts
// 用法示例
await client.getCurrentAutoReplyInfo(client);
```

### getIndustry()
获取所属行业。
文档: https://developers.weixin.qq.com/doc/service/api/notify/template/api_getindustry.html

签名：`getIndustry(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
返回值：`Promise<{primary_industry:Object, secondary_industry:Object}>`
```ts
// 用法示例
await client.getIndustry(client);
```

### getPubNewTemplateKeywords()
获取公共模板关键词列表。
文档: https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatekeywords.html

签名：`getPubNewTemplateKeywords(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{tid:string}`，必填)
返回值：`Promise<{count:number, data:Array<Object>}>`
```ts
// 用法示例
await client.getPubNewTemplateKeywords(client, params);
```

### getPubNewTemplateTitles()
获取公共模板标题列表。
文档: https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatetitles.html

签名：`getPubNewTemplateTitles(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{ids:string|number[] , start?:number, limit?:number}`，必填)：- ids 支持数组或逗号分隔字符串
返回值：`Promise<{count:number, data:Array<Object>}>`
```ts
// 用法示例
await client.getPubNewTemplateTitles(client, params);
```

### getSpeed()
获取群发速度等级。
文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_getspeed.html

签名：`getSpeed(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
返回值：`Promise<{speed:number}>`
```ts
// 用法示例
await client.getSpeed(client);
```

### getWxaPubNewTemplate()
获取账号下的个人模板列表。
文档: https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getwxapubnewtemplate.html

签名：`getWxaPubNewTemplate(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
返回值：`Promise<{data:Array<Object>}>`
```ts
// 用法示例
await client.getWxaPubNewTemplate(client);
```

### massMsgGet()
查询群发消息状态。
文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_massmsgget.html

签名：`massMsgGet(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{msg_id: number|string}`，必填)：- 必填 msg_id
返回值：`Promise<{msg_id:string|number, msg_status:string}>` - msg_status
```ts
// 用法示例
await client.massMsgGet(client, params);
```

### massSend()
根据 openid 列表群发。
文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_masssend.html

签名：`massSend(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`Object`，必填)：- 形如 { touser: [...], msgtype: 'mpnews'|'text'|..., mpnews/text/... }
返回值：`Promise<{errcode:number, errmsg:string, msg_id?:number|string}>`
```ts
// 用法示例
await client.massSend(client, payload);
```

### preview()
群发预览接口（对指定用户预览）。
文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_preview.html

签名：`preview(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`Object`，必填)：- 形如 { touser: 'OPENID'|'微信号', msgtype: 'mpnews'|'text'|..., mpnews/text/... }
返回值：`Promise<{errcode:number, errmsg:string, msg_id?:number|string}>`
```ts
// 用法示例
await client.preview(client, payload);
```

### queryBlockTmplMsg()
查询模板消息被拦截/封禁信息。
文档: https://developers.weixin.qq.com/doc/service/api/notify/template/api_queryblocktmplmsg.html

签名：`queryBlockTmplMsg(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`Object`，必填)：- 查询参数（按文档要求传入）
返回值：`Promise<Object>`
```ts
// 用法示例
await client.queryBlockTmplMsg(client, params);
```

### sendAll()
按标签进行群发。
文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_sendall.html

签名：`sendAll(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`Object`，必填)：- 形如 { filter:{is_to_all:boolean, tag_id?:number}, msgtype:'mpnews'|'text'|..., mpnews/text/... }
返回值：`Promise<{errcode:number, errmsg:string, msg_id?:number|string}>`
```ts
// 用法示例
await client.sendAll(client, payload);
```

### sendNewSubscribeMsg()
发送订阅消息（新版）。
文档: https://developers.weixin.qq.com/doc/service/api/notify/notify/api_sendnewsubscribemsg.html

签名：`sendNewSubscribeMsg(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`Object`，必填)：- { touser, template_id/priTmplId, page?, miniprogram_state?, lang?, data }
返回值：`Promise<{errcode:number, errmsg:string, msgid?:string|number}>`
```ts
// 用法示例
await client.sendNewSubscribeMsg(client, payload);
```

### sendTemplateMessage()
发送模板消息。
文档: https://developers.weixin.qq.com/doc/service/api/notify/template/api_sendtemplatemessage.html

签名：`sendTemplateMessage(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`Object`，必填)：- { touser, template_id, url?, miniprogram?, data, client_msg_id? }
返回值：`Promise<{errcode:number, errmsg:string, msgid?:number|string}>`
```ts
// 用法示例
await client.sendTemplateMessage(client, payload);
```

### setIndustry()
设置所属行业。
文档: https://developers.weixin.qq.com/doc/service/api/notify/template/api_setindustry.html

签名：`setIndustry(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{industry_id1:string|number, industry_id2:string|number}`，必填)
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.setIndustry(client, params);
```

### setSpeed()
设置群发速度等级。
文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_setspeed.html

签名：`setSpeed(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `params` (`{speed: 0|1|2|3|4}`，必填)：- 必填，速度等级（0~4）
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.setSpeed(client, params);
```

### templateSubscribe()
模板订阅接口（旧版）。
文档: https://developers.weixin.qq.com/doc/service/api/notify/subscribe/api_templatesubscribe.html

签名：`templateSubscribe(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`Object`，必填)：- 按文档填写参数
返回值：`Promise<Object>`
```ts
// 用法示例
await client.templateSubscribe(client, payload);
```

### uploadImage()
上传图文消息内图片，返回可在正文中使用的 URL。
文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_uploadimage.html

签名：`uploadImage(client, input)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)：- SaClient 实例
- `input` (`{filePath?: string, file?: Buffer|import('stream').Readable, filename?: string, contentType?: string}`，必填)：- 文件路径或文件流/Buffer
返回值：`Promise<{url: string}>` - URL
```ts
// 用法示例
await client.uploadImage(client, input);
```

### uploadNewsMsg()
上传图文消息素材（用于群发）。
文档: https://developers.weixin.qq.com/doc/service/api/notify/message/api_uploadnewsmsg.html

签名：`uploadNewsMsg(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)
- `payload` (`{articles: Array<Object>}`，必填)：- 图文素材定义（articles 数组）
返回值：`Promise<{type?:string, media_id:string, created_at?:number}>`
```ts
// 用法示例
await client.uploadNewsMsg(client, payload);
```
