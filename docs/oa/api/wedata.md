---
title: Wedata API
outline: deep
---

# Wedata API

> 订阅号/服务号通用

## 方法

### getArticleSummary()
获取图文群发每日数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticlesummary.html)

#### 签名
```ts
getArticleSummary({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getArticleSummary({ begin_date, end_date } = {});
```

### getArticleTotal()
获取图文群发总数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticletotal.html)

#### 签名
```ts
getArticleTotal({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getArticleTotal({ begin_date, end_date } = {});
```

### getInterfaceSummary()
获取接口分析数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummary.html)

#### 签名
```ts
getInterfaceSummary({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getInterfaceSummary({ begin_date, end_date } = {});
```

### getInterfaceSummaryHour()
获取接口分析分时数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummaryhour.html)

#### 签名
```ts
getInterfaceSummaryHour({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getInterfaceSummaryHour({ begin_date, end_date } = {});
```

### getUpstreamMsg()
获取消息发送概况数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsg.html)

#### 签名
```ts
getUpstreamMsg({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getUpstreamMsg({ begin_date, end_date } = {});
```

### getUpstreamMsgDist()
获取消息发送分布数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdist.html)

#### 签名
```ts
getUpstreamMsgDist({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getUpstreamMsgDist({ begin_date, end_date } = {});
```

### getUpstreamMsgDistMonth()
获取消息发送分布月数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistmonth.html)

#### 签名
```ts
getUpstreamMsgDistMonth({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getUpstreamMsgDistMonth({ begin_date, end_date } = {});
```

### getUpstreamMsgDistWeek()
获取消息发送分布周数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistweek.html)

#### 签名
```ts
getUpstreamMsgDistWeek({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getUpstreamMsgDistWeek({ begin_date, end_date } = {});
```

### getUpstreamMsgHour()
获取消息发送分时数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsghour.html)

#### 签名
```ts
getUpstreamMsgHour({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getUpstreamMsgHour({ begin_date, end_date } = {});
```

### getUpstreamMsgMonth()
获取消息发送月数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgmonth.html)

#### 签名
```ts
getUpstreamMsgMonth({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getUpstreamMsgMonth({ begin_date, end_date } = {});
```

### getUpstreamMsgWeek()
获取消息发送周数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgweek.html)

#### 签名
```ts
getUpstreamMsgWeek({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getUpstreamMsgWeek({ begin_date, end_date } = {});
```

### getUserCumulate()
获取累计用户数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusercumulate.html)

#### 签名
```ts
getUserCumulate({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getUserCumulate({ begin_date, end_date } = {});
```

### getUserRead()
获取图文统计数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserread.html)

#### 签名
```ts
getUserRead({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getUserRead({ begin_date, end_date } = {});
```

### getUserReadHour()
获取图文统计分时数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserreadhour.html)

#### 签名
```ts
getUserReadHour({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getUserReadHour({ begin_date, end_date } = {});
```

### getUserShare()
获取图文分享转发数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusershare.html)

#### 签名
```ts
getUserShare({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getUserShare({ begin_date, end_date } = {});
```

### getUserShareHour()
获取图文分享转发分时数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusersharehour.html)

#### 签名
```ts
getUserShareHour({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getUserShareHour({ begin_date, end_date } = {});
```

### getUserSummary()
获取用户增减数据
文档: [查看官方文档](https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusersummary.html)

#### 签名
```ts
getUserSummary({ begin_date, end_date } = {})
```
#### 示例
```ts
// 用法示例
await client.getUserSummary({ begin_date, end_date } = {});
```
