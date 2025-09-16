---
title: Wedata API
outline: deep
---

# Wedata API

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

### getArticleSummary()
获取图文群发每日数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticlesummary.html

签名：`getArticleSummary(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getArticleSummary(client, { begin_date, end_date } = {});
```

### getArticleTotal()
获取图文群发总数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticletotal.html

签名：`getArticleTotal(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getArticleTotal(client, { begin_date, end_date } = {});
```

### getInterfaceSummary()
获取接口分析数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummary.html

签名：`getInterfaceSummary(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getInterfaceSummary(client, { begin_date, end_date } = {});
```

### getInterfaceSummaryHour()
获取接口分析分时数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummaryhour.html

签名：`getInterfaceSummaryHour(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getInterfaceSummaryHour(client, { begin_date, end_date } = {});
```

### getUpstreamMsg()
获取消息发送概况数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsg.html

签名：`getUpstreamMsg(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getUpstreamMsg(client, { begin_date, end_date } = {});
```

### getUpstreamMsgDist()
获取消息发送分布数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdist.html

签名：`getUpstreamMsgDist(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getUpstreamMsgDist(client, { begin_date, end_date } = {});
```

### getUpstreamMsgDistMonth()
获取消息发送分布月数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistmonth.html

签名：`getUpstreamMsgDistMonth(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getUpstreamMsgDistMonth(client, { begin_date, end_date } = {});
```

### getUpstreamMsgDistWeek()
获取消息发送分布周数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistweek.html

签名：`getUpstreamMsgDistWeek(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getUpstreamMsgDistWeek(client, { begin_date, end_date } = {});
```

### getUpstreamMsgHour()
获取消息发送分时数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsghour.html

签名：`getUpstreamMsgHour(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getUpstreamMsgHour(client, { begin_date, end_date } = {});
```

### getUpstreamMsgMonth()
获取消息发送月数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgmonth.html

签名：`getUpstreamMsgMonth(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getUpstreamMsgMonth(client, { begin_date, end_date } = {});
```

### getUpstreamMsgWeek()
获取消息发送周数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgweek.html

签名：`getUpstreamMsgWeek(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getUpstreamMsgWeek(client, { begin_date, end_date } = {});
```

### getUserCumulate()
获取累计用户数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusercumulate.html

签名：`getUserCumulate(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getUserCumulate(client, { begin_date, end_date } = {});
```

### getUserRead()
获取图文统计数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserread.html

签名：`getUserRead(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getUserRead(client, { begin_date, end_date } = {});
```

### getUserReadHour()
获取图文统计分时数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserreadhour.html

签名：`getUserReadHour(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getUserReadHour(client, { begin_date, end_date } = {});
```

### getUserShare()
获取图文分享转发数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusershare.html

签名：`getUserShare(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getUserShare(client, { begin_date, end_date } = {});
```

### getUserShareHour()
获取图文分享转发分时数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusersharehour.html

签名：`getUserShareHour(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getUserShareHour(client, { begin_date, end_date } = {});
```

### getUserSummary()
获取用户增减数据
文档: https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusersummary.html

签名：`getUserSummary(client, { begin_date, end_date } = {})`
```ts
// 用法示例
await client.getUserSummary(client, { begin_date, end_date } = {});
```
