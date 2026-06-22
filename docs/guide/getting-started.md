# 快速开始

wxstack 是一个**跨格式（ESM + CJS）、TypeScript 优先**的微信全生态服务端 SDK，覆盖公众号、小程序、
微信支付、企业微信、开放平台、微信小店、视频号、小游戏与智能对话。

## 安装

按需安装单个业务包：

```bash
pnpm add @wxstack/oa     # 公众号
pnpm add @wxstack/pay    # 微信支付
pnpm add @wxstack/mp     # 小程序
# ……
```

或安装聚合包，按子路径引入：

```bash
pnpm add wxstack
```

```ts
import { createOaClient } from 'wxstack/oa';
import { createPayClient } from 'wxstack/pay';
```

> 要求 Node >= 18。所有包同时提供 ESM 与 CJS 产物及类型声明，`import` / `require` 均可。

## 统一的客户端范式

每个业务包都导出一个 `createXxxClient(config)` 工厂，返回的客户端有两类 API：

1. **高层语义方法**：带类型、带官方文档 `@see` 链接。
2. **低层逃生口**：`client.request()` / `client.requestRaw()`，自动带令牌/签名，
   可调用**任意尚未被高层方法封装的接口**——这是「全功能」的可持续兑现方式。

```ts
import { createOaClient } from '@wxstack/oa';

const oa = createOaClient({ appId: 'wx...', appSecret: '...', tokenMode: 'stable' });

// 高层方法
const user = await oa.getUserInfo({ openid: 'oOpenId' });

// 逃生口：调用任意接口（自动带 access_token）
const res = await oa.request({ method: 'POST', url: '/cgi-bin/some/new/api', body: { foo: 1 } });
```

## 令牌与多实例

`@wxstack/core` 的 `TokenManager` 内置单飞、提前刷新、稳定版令牌；生产多实例部署时注入共享存储
（如 Redis）即可避免「令牌漂移」：

```ts
import { createOaClient } from '@wxstack/oa';
import type { KVStore } from '@wxstack/core';

const redisStore: KVStore = { /* 实现 get/set/del，及可选 acquireLock/releaseLock */ } as KVStore;
const oa = createOaClient({ appId: 'wx...', appSecret: '...', store: redisStore });
```

## 处理回调

```ts
import { createWebhook } from '@wxstack/core/webhook';

const wh = createWebhook({
  token: 'yourToken',
  receiveId: 'wxAppId',
  encodingAESKey: '43位AESKey',
  onMessage: (msg, ctx) => ctx.text(`收到：${msg.Content}`),
});

const r = await wh.handle({ method: req.method, rawBody, query, headers });
res.status(r.status).type(r.contentType).send(r.body);
```

## 下一步

- [公众号（oa）文档](/oa/guide/getting-started)
- 各包 README 提供该业务的端点清单与示例。
