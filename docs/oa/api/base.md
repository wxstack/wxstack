---
title: Base API
outline: deep
---

# Base API

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

### callbackCheck()
网络检测（回调连通性检测）。
文档： https://developers.weixin.qq.com/doc/service/api/base/api_callbackcheck.html

签名：`callbackCheck(client, opts)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)：- 已初始化的客户端
- `opts` (`Object`，可选)
- `opts.action` (`'all'|'dns'|'ping'`，可选，默认：`'all'`)：- 检测类型
- `opts.check_operator` (`'DEFAULT'|'CT'|'CU'|'CM'`，可选，默认：`'DEFAULT'`)：- 运营商
返回值：`Promise<Object>`
```ts
// 用法示例
await client.callbackCheck(client, opts);
```

### clearQuota()
清空账号当日接口调用额度。
文档： https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/clear_quota.html

签名：`clearQuota(client, params)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)：- 已初始化的客户端
- `params` (`Object`，必填)
- `params.appid` (`string`，必填)：- 必填，要被清空额度的账号 appid
返回值：`Promise<{errcode:number, errmsg:string}>` - 错误码：
- 0: ok
- 40013: invalid appid（不合法的 AppID）
- 48006: forbid to clear quota because of reaching the limit（清零次数达到上限）
```ts
// 用法示例
await client.clearQuota(client, params);
```

### getApiDomainIpList()
获取微信 API 接口域名解析的 IP 列表。
文档： https://developers.weixin.qq.com/doc/service/api/base/api_getapidomainip.html

签名：`getApiDomainIpList(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)：- 已初始化的客户端
返回值：`Promise<string[]>` - IP 列表
```ts
// 用法示例
await client.getApiDomainIpList(client);
```

### getCallbackIpList()
获取微信服务器回调出口 IP 列表。
文档： https://developers.weixin.qq.com/doc/service/api/base/api_getcallbackip.html

签名：`getCallbackIpList(client)`
参数：
- `client` (`import('../../client.js').SaClient`，必填)：- 已初始化的客户端
返回值：`Promise<string[]>` - IP 列表（形如 ['101.226.xx.xx', ...]）
```ts
// 用法示例
await client.getCallbackIpList(client);
```
