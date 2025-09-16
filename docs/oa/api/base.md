---
title: Base API
outline: deep
---

# Base API

> 订阅号/服务号通用

## 方法

### callbackCheck()
网络检测（回调连通性检测）。
文档： [查看官方文档](https://developers.weixin.qq.com/doc/service/api/base/api_callbackcheck.html)

#### 签名
```ts
callbackCheck(opts)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `opts` | `Object` | 否 |  |  |
| `opts.action` | `'all'\|'dns'\|'ping'` | 否 | `'all'` | - 检测类型 |
| `opts.check_operator` | `'DEFAULT'\|'CT'\|'CU'\|'CM'` | 否 | `'DEFAULT'` | - 运营商 |
#### 返回值

类型：`Promise<Object>`

#### 示例
```ts
// 用法示例
await client.callbackCheck(opts);
```

### clearQuota()
清空账号当日接口调用额度。
文档： [查看官方文档](https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/clear_quota.html)

#### 签名
```ts
clearQuota(params)
```
#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|---|---|:---:|---|---|
| `params` | `Object` | 是 |  |  |
| `params.appid` | `string` | 是 |  | - 必填，要被清空额度的账号 appid |
#### 返回值

类型：`Promise<{errcode:number, errmsg:string}>`


说明：错误码：
- 0: ok
- 40013: invalid appid（不合法的 AppID）
- 48006: forbid to clear quota because of reaching the limit（清零次数达到上限）
#### 示例
```ts
// 用法示例
await client.clearQuota(params);
```

### getApiDomainIpList()
获取微信 API 接口域名解析的 IP 列表。
文档： [查看官方文档](https://developers.weixin.qq.com/doc/service/api/base/api_getapidomainip.html)

#### 签名
```ts
getApiDomainIpList()
```
#### 返回值

类型：`Promise<string[]>`


说明：IP 列表
#### 示例
```ts
// 用法示例
await client.getApiDomainIpList();
```

### getCallbackIpList()
获取微信服务器回调出口 IP 列表。
文档： [查看官方文档](https://developers.weixin.qq.com/doc/service/api/base/api_getcallbackip.html)

#### 签名
```ts
getCallbackIpList()
```
#### 返回值

类型：`Promise<string[]>`


说明：IP 列表（形如 ['101.226.xx.xx', ...]）
#### 示例
```ts
// 用法示例
await client.getCallbackIpList();
```
