---
title: Message API
outline: deep
---

# Message API

> 订阅号/服务号通用

## 方法

### addTemplate()
账户添加模板（通过短 ID 获取模板 ID）。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/template/api_addtemplate.html)

#### 签名
```ts
addTemplate(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{template_id_short: string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string, template_id?:string}>`

#### 示例
```ts
// 用法示例
await client.addTemplate(params);
```

### addWxaNewTemplate()
新增账号个人模板。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/notify/api_addwxanewtemplate.html)

#### 签名
```ts
addWxaNewTemplate(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{tid:string, kidList:number[], sceneDesc?:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{priTmplId:string}>`

#### 示例
```ts
// 用法示例
await client.addWxaNewTemplate(params);
```

### delWxaNewTemplate()
删除账号个人模板。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/notify/api_delwxanewtemplate.html)

#### 签名
```ts
delWxaNewTemplate(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{priTmplId:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.delWxaNewTemplate(params);
```

### deleteMassMsg()
删除群发消息。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/message/api_deletemassmsg.html)

#### 签名
```ts
deleteMassMsg(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{msg_id: number\|string, article_idx?: number}` | 是 |  | - msg_id 必填，article_idx 可选（当删除图文中某篇） |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.deleteMassMsg(params);
```

### deleteTemplate()
删除私有模板。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/template/api_deletetemplate.html)

#### 签名
```ts
deleteTemplate(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{template_id:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.deleteTemplate(params);
```

### getAllTemplates()
获取账号下所有私有模板。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/template/api_getalltemplates.html)

#### 签名
```ts
getAllTemplates()
```
#### 返回值

类型：`Promise<{template_list:Array<Object>}>`

#### 示例
```ts
// 用法示例
await client.getAllTemplates();
```

### getCategory()
获取账号所属类目。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getcategory.html)

#### 签名
```ts
getCategory()
```
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.getCategory();
```

### getCurrentAutoReplyInfo()
获取当前自动回复规则。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/autoreplies/api_getcurrentautoreplyinfo.html)

#### 签名
```ts
getCurrentAutoReplyInfo()
```
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.getCurrentAutoReplyInfo();
```

### getIndustry()
获取所属行业。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/template/api_getindustry.html)

#### 签名
```ts
getIndustry()
```
#### 返回值

类型：`Promise<{primary_industry:Object, secondary_industry:Object}>`

#### 示例
```ts
// 用法示例
await client.getIndustry();
```

### getPubNewTemplateKeywords()
获取公共模板关键词列表。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatekeywords.html)

#### 签名
```ts
getPubNewTemplateKeywords(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{tid:string}` | 是 |  |  |
#### 返回值

类型：`Promise<{count:number, data:Array<Object>}>`

#### 示例
```ts
// 用法示例
await client.getPubNewTemplateKeywords(params);
```

### getPubNewTemplateTitles()
获取公共模板标题列表。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatetitles.html)

#### 签名
```ts
getPubNewTemplateTitles(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{ids:string\|number[] , start?:number, limit?:number}` | 是 |  | - ids 支持数组或逗号分隔字符串 |
#### 返回值

类型：`Promise<{count:number, data:Array<Object>}>`

#### 示例
```ts
// 用法示例
await client.getPubNewTemplateTitles(params);
```

### getSpeed()
获取群发速度等级。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/message/api_getspeed.html)

#### 签名
```ts
getSpeed()
```
#### 返回值

类型：`Promise<{speed:number}>`

#### 示例
```ts
// 用法示例
await client.getSpeed();
```

### getWxaPubNewTemplate()
获取账号下的个人模板列表。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getwxapubnewtemplate.html)

#### 签名
```ts
getWxaPubNewTemplate()
```
#### 返回值

类型：`Promise<{data:Array<Object>}>`

#### 示例
```ts
// 用法示例
await client.getWxaPubNewTemplate();
```

### massMsgGet()
查询群发消息状态。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/message/api_massmsgget.html)

#### 签名
```ts
massMsgGet(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{msg_id: number\|string}` | 是 |  | - 必填 msg_id |
#### 返回值

类型：`Promise<{msg_id:string|number, msg_status:string}>`


说明：msg_status
#### 示例
```ts
// 用法示例
await client.massMsgGet(params);
```

### massSend()
根据 openid 列表群发。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/message/api_masssend.html)

#### 签名
```ts
massSend(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `Object` | 是 |  | - 形如 &#123; touser: [...], msgtype: 'mpnews'\|'text'\|..., mpnews/text/... &#125; |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string, msg_id?:number|string}>`

#### 示例
```ts
// 用法示例
await client.massSend(payload);
```

### preview()
群发预览接口（对指定用户预览）。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/message/api_preview.html)

#### 签名
```ts
preview(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `Object` | 是 |  | - 形如 &#123; touser: 'OPENID'\|'微信号', msgtype: 'mpnews'\|'text'\|..., mpnews/text/... &#125; |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string, msg_id?:number|string}>`

#### 示例
```ts
// 用法示例
await client.preview(payload);
```

### queryBlockTmplMsg()
查询模板消息被拦截/封禁信息。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/template/api_queryblocktmplmsg.html)

#### 签名
```ts
queryBlockTmplMsg(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `Object` | 是 |  | - 查询参数（按文档要求传入） |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.queryBlockTmplMsg(params);
```

### sendAll()
按标签进行群发。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/message/api_sendall.html)

#### 签名
```ts
sendAll(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `Object` | 是 |  | - 形如 &#123; filter:&#123;is_to_all:boolean, tag_id?:number&#125;, msgtype:'mpnews'\|'text'\|..., mpnews/text/... &#125; |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string, msg_id?:number|string}>`

#### 示例
```ts
// 用法示例
await client.sendAll(payload);
```

### sendNewSubscribeMsg()
发送订阅消息（新版）。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/notify/api_sendnewsubscribemsg.html)

#### 签名
```ts
sendNewSubscribeMsg(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `Object` | 是 |  | - &#123; touser, template_id/priTmplId, page?, miniprogram_state?, lang?, data &#125; |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string, msgid?:string|number}>`

#### 示例
```ts
// 用法示例
await client.sendNewSubscribeMsg(payload);
```

### sendTemplateMessage()
发送模板消息。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/template/api_sendtemplatemessage.html)

#### 签名
```ts
sendTemplateMessage(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `Object` | 是 |  | - &#123; touser, template_id, url?, miniprogram?, data, client_msg_id? &#125; |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string, msgid?:number|string}>`

#### 示例
```ts
// 用法示例
await client.sendTemplateMessage(payload);
```

### setIndustry()
设置所属行业。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/template/api_setindustry.html)

#### 签名
```ts
setIndustry(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{industry_id1:string\|number, industry_id2:string\|number}` | 是 |  |  |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.setIndustry(params);
```

### setSpeed()
设置群发速度等级。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/message/api_setspeed.html)

#### 签名
```ts
setSpeed(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{speed: 0\|1\|2\|3\|4}` | 是 |  | - 必填，速度等级（0~4） |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.setSpeed(params);
```

### templateSubscribe()
模板订阅接口（旧版）。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/subscribe/api_templatesubscribe.html)

#### 签名
```ts
templateSubscribe(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `Object` | 是 |  | - 按文档填写参数 |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.templateSubscribe(payload);
```

### uploadImage()
上传图文消息内图片，返回可在正文中使用的 URL。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/message/api_uploadimage.html)

#### 签名
```ts
uploadImage(input)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `input` | `{filePath?: string, file?: Buffer\|import('stream').Readable, filename?: string, contentType?: string}` | 是 |  | - 文件路径或文件流/Buffer |
#### 返回值

类型：`Promise<{url: string}>`


说明：URL
#### 示例
```ts
// 用法示例
await client.uploadImage(input);
```

### uploadNewsMsg()
上传图文消息素材（用于群发）。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/notify/message/api_uploadnewsmsg.html)

#### 签名
```ts
uploadNewsMsg(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `{articles: Array<Object>}` | 是 |  | - 图文素材定义（articles 数组） |
#### 返回值

类型：`Promise<{type?:string, media_id:string, created_at?:number}>`

#### 示例
```ts
// 用法示例
await client.uploadNewsMsg(payload);
```
