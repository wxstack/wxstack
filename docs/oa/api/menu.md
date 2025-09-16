---
title: Menu API
outline: deep
---

# Menu API

> 订阅号/服务号通用

## 方法

### addConditionalMenu()
创建个性化菜单。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/custommenu/api_addconditionalmenu.html)

#### 签名
```ts
addConditionalMenu(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `Object` | 是 |  | - 个性化菜单定义（&#123; button: [...], matchrule: &#123;...&#125; &#125;） |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string, menuid?:string}>`


说明：menuid）
#### 示例
```ts
// 用法示例
await client.addConditionalMenu(payload);
```

### createCustomMenu()
创建自定义菜单。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/custommenu/api_createcustommenu.html)

#### 签名
```ts
createCustomMenu(payload)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `payload` | `Object` | 是 |  | - 菜单定义（&#123; button: [...] &#125;） |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.createCustomMenu(payload);
```

### deleteConditionalMenu()
删除个性化菜单。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/custommenu/api_deleteconditionalmenu.html)

#### 签名
```ts
deleteConditionalMenu(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{menuid: string}` | 是 |  | - 必填，待删除的个性化菜单 ID |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.deleteConditionalMenu(params);
```

### deleteMenu()
删除自定义菜单（包含删除全部个性化菜单）。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/custommenu/api_deletemenu.html)

#### 签名
```ts
deleteMenu()
```
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`

#### 示例
```ts
// 用法示例
await client.deleteMenu();
```

### getCurrentSelfMenuInfo()
获取自定义菜单配置（账号当前自定义菜单信息）。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/custommenu/api_getcurrentselfmenuinfo.html)

#### 签名
```ts
getCurrentSelfMenuInfo()
```
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.getCurrentSelfMenuInfo();
```

### getMenu()
获取自定义菜单（包含个性化菜单 if any）。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/custommenu/api_getmenu.html)

#### 签名
```ts
getMenu()
```
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.getMenu();
```

### tryMatchMenu()
测试个性化菜单匹配结果。
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/custommenu/api_trymatchmenu.html)

#### 签名
```ts
tryMatchMenu(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `{user_id: string}` | 是 |  | - 必填，用户标识（可以是 openid 或者 微信号） |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.tryMatchMenu(params);
```
