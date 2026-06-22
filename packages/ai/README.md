# @wxstack/ai

微信**智能对话开放平台**（对话机器人，chatbot.weixin.qq.com）的服务端 SDK。

> **如实说明**：该平台的服务端「开放接口」是按机器人/技能在平台后台单独开通、各自分配
> 接入地址与 token 的，公开文档**未给出统一稳定的 HTTP 端点清单**。因此本包**不臆造端点**，
> 而是提供「**可配置 baseURL + 鉴权 + 逃生口**」，由你在平台「开放接口」处取得实际地址后调用。

## 安装

```bash
pnpm add @wxstack/ai
```

## 快速上手

```ts
import { createAiClient } from '@wxstack/ai';

// 方式一：平台「开放接口」分配的 token（以 query 参数 token 附加）
const ai = createAiClient({
  baseURL: 'https://chatbot.weixin.qq.com', // 默认值，可按平台给定地址覆盖
  token: '平台分配的token',
});

// 向机器人发问：path 用平台「开放接口」给出的实际查询地址
const res = await ai.query('/openapi/aibot/你的接口路径', { query: '今天天气怎么样' });
console.log(res.answer, res.data);
```

```ts
// 方式二：若你的接入使用微信标准 access_token
const ai = createAiClient({ appId: 'wx_xxx', appSecret: 'secret_xxx' });
// 令牌从 api.weixin.qq.com 获取并自动缓存/重刷
```

## 通用调用与逃生口（一等公民）

```ts
// 便捷方法：自动附加平台 token
await ai.call('POST', '/平台给定路径', { body: { /* 透传 */ } });

// 逃生口：调用任意接口，自动错误解包/重试
const data = await ai.request({ method: 'POST', url: '/平台给定路径', body: { /* ... */ } });
const resp = await ai.requestRaw({ method: 'POST', url: '/平台给定路径', body: { /* ... */ } });
```

错误处理：

```ts
import { WxApiError } from '@wxstack/ai';
try {
  await ai.query('/path', { query: 'hi' });
} catch (e) {
  if (e instanceof WxApiError) console.error(e.errcode, e.errmsg);
}
```

## 参考

- 智能对话开放平台简介：<https://developers.weixin.qq.com/doc/aispeech/platform/INTRODUCTION.html>
