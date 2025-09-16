---
title: Menu API
outline: deep
---

# Menu API

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

### addConditionalMenu()
创建个性化菜单。
文档: https://developers.weixin.qq.com/doc/service/api/custommenu/api_addconditionalmenu.html

签名：`addConditionalMenu(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)：- SaClient 实例
- `payload` (`Object`，必填)：- 个性化菜单定义（{ button: [...], matchrule: {...} }）
返回值：`Promise<{errcode:number, errmsg:string, menuid?:string}>` - menuid）
```ts
// 用法示例
await client.addConditionalMenu(client, payload);
```

### createCustomMenu()
创建自定义菜单。
文档: https://developers.weixin.qq.com/doc/service/api/custommenu/api_createcustommenu.html

签名：`createCustomMenu(client, payload)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)：- SaClient 实例
- `payload` (`Object`，必填)：- 菜单定义（{ button: [...] }）
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.createCustomMenu(client, payload);
```

### deleteConditionalMenu()
删除个性化菜单。
文档: https://developers.weixin.qq.com/doc/service/api/custommenu/api_deleteconditionalmenu.html

签名：`deleteConditionalMenu(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)：- SaClient 实例
- `params` (`{menuid: string}`，必填)：- 必填，待删除的个性化菜单 ID
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.deleteConditionalMenu(client, params);
```

### deleteMenu()
删除自定义菜单（包含删除全部个性化菜单）。
文档: https://developers.weixin.qq.com/doc/service/api/custommenu/api_deletemenu.html

签名：`deleteMenu(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)：- SaClient 实例
返回值：`Promise<{errcode:number, errmsg:string}>`
```ts
// 用法示例
await client.deleteMenu(client);
```

### getCurrentSelfMenuInfo()
获取自定义菜单配置（账号当前自定义菜单信息）。
文档: https://developers.weixin.qq.com/doc/service/api/custommenu/api_getcurrentselfmenuinfo.html

签名：`getCurrentSelfMenuInfo(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)：- SaClient 实例
返回值：`Promise<Object>`
```ts
// 用法示例
await client.getCurrentSelfMenuInfo(client);
```

### getMenu()
获取自定义菜单（包含个性化菜单 if any）。
文档: https://developers.weixin.qq.com/doc/service/api/custommenu/api_getmenu.html

签名：`getMenu(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)：- SaClient 实例
返回值：`Promise<Object>`
```ts
// 用法示例
await client.getMenu(client);
```

### tryMatchMenu()
测试个性化菜单匹配结果。
文档: https://developers.weixin.qq.com/doc/service/api/custommenu/api_trymatchmenu.html

签名：`tryMatchMenu(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)：- SaClient 实例
- `params` (`{user_id: string}`，必填)：- 必填，用户标识（可以是 openid 或者 微信号）
返回值：`Promise<Object>`
```ts
// 用法示例
await client.tryMatchMenu(client, params);
```
