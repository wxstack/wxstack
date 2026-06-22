# wxstack · 微信全生态 Node SDK

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)](https://nodejs.org/)
[![Module](https://img.shields.io/badge/module-ESM%20%2B%20CJS-blue.svg)](#)
[![Types](https://img.shields.io/badge/types-included-blue.svg)](#)

> 一个**跨格式（ESM + CJS）、跨运行时、TypeScript 优先、模块化**的微信全生态服务端 SDK。
> 覆盖公众号、小程序、微信支付、企业微信、开放平台、微信小店、视频号、小游戏、智能对话。

面向个人与企业开发者，目标是用一套一致的 API 把分散的微信开放能力整合到任意 Node 项目里——
无论你用 TypeScript 还是 JavaScript、`import` 还是 `require`、传统服务器还是 Serverless / 边缘运行时。

## ✨ 设计要点

- **TypeScript 源码 → 双格式发行**：每个包同时产出 ESM + CJS 与 `.d.ts` / `.d.cts`，`publint` + `attw` 发布门禁。
- **统一内核 `@wxstack/core`**：access_token 管理（单飞 + 分布式锁 + 稳定版令牌）、签名/加解密、回调验签、错误码自动重试、多域名故障转移、HTTP 可插拔。
- **低层逃生口**：每个业务客户端都内置自动鉴权的 `client.request()` / `client.requestRaw()`，**未被高层方法封装的接口也能立即调用**——这是「全功能」在工程上可持续的兑现方式。
- **零运行时强依赖**：core 只用 Node 内置 `crypto` 与全局 `fetch`。
- **多租户友好**：不可变配置 + 显式依赖注入，一个进程可同时跑多个 appid / mchid。
- **全中文注释与文档**，每个高层方法标注官方文档 `@see` 链接作为权威依据。

## 📦 包清单

| 包名 | 范围 |
|---|---|
| [`@wxstack/core`](packages/core) | 内核：HTTP / 令牌 / 加解密 / 错误 / 回调 / 存储 / 日志 |
| [`@wxstack/oa`](packages/oa) | 公众号（订阅号 / 服务号） |
| [`@wxstack/pay`](packages/pay) | 微信支付 v3 |
| [`@wxstack/mp`](packages/mp) | 小程序服务端 |
| [`@wxstack/wecom`](packages/wecom) | 企业微信 |
| [`@wxstack/op`](packages/op) | 微信开放平台（第三方平台 / 扫码登录） |
| [`@wxstack/shop`](packages/shop) | 微信小店 |
| [`@wxstack/ch`](packages/ch) | 视频号 |
| [`@wxstack/mg`](packages/mg) | 小游戏服务端 |
| [`@wxstack/ai`](packages/ai) | 智能对话开放平台 |
| [`wxstack`](packages/wxstack) | 聚合 meta 包（按子路径引入各业务） |

## 🧩 全量接口覆盖（以官方文档为准）

我们用 Playwright 实际打开各官方文档站点、逐菜单抓取每个接口页，提取「方法 + 路径 + 文档链接 + 请求/返回参数表」，
为各包生成**类型化的全量接口表 `client.api`**（自动鉴权/自动签名）。目前已据官方文档生成 **1486** 个端点，
其中 **1367 个带有从官方参数表抽取的精确 `Req`/`Resp` 类型**（字段名/类型/必填/说明逐项落到 TS 接口）：

| 平台 | mp | oa | op | shop | pay | ch | mg | ai | wecom |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| 端点数 | 429 | 196 | 223 | 384 | 111 | 49 | 93 | 1 | 逃生口* |

\* 企业微信文档站点限制程序化抓取（仅对浏览器导航返回正文），故 wecom 以「手写高频方法 + 逃生口」覆盖，
逃生口 `client.request()` 可调用任意企业微信接口；其完整文档目录已抓取留档。详见
[docs/api-specs](docs/api-specs/README.md)。

```ts
// 高层语义方法（手写强类型） + 全量接口表（覆盖官方文档全部端点）双轨：
await mp.getUnlimited({ scene: 'id=1' });          // 手写方法
await mp.api.msgSecCheck({ content, version: 2 }); // 全量接口表，按 operationId 调用
await pay.api.transactionsJsapi({ /* ... */ });    // 支付自动签名
```

## 🚀 快速上手

```bash
pnpm add @wxstack/oa        # 按需安装单个业务包
# 或安装聚合包，按子路径引入
pnpm add wxstack
```

### 公众号

```ts
import { createClient } from '@wxstack/oa';

const oa = createClient({ appId: 'wx...', appSecret: '...', tokenMode: 'stable' });

const user = await oa.getUserInfo({ openid: 'oOpenId' });
await oa.sendTemplateMessage({ touser: 'oOpenId', template_id: 'tmpl', data: { /* ... */ } });

// 逃生口：调用任意尚未封装的接口（自动带 access_token）
const res = await oa.request({ method: 'POST', url: '/cgi-bin/some/new/api', body: { foo: 1 } });
```

### 微信支付 v3

```ts
import { createPayClient } from '@wxstack/pay';

const pay = createPayClient({
  mchid: '1900000000', appid: 'wx...', serialNo: 'ABCD...',
  privateKey: process.env.WXPAY_PRIVATE_KEY!, apiV3Key: process.env.WXPAY_APIV3_KEY!,
  // 推荐新商户启用「微信支付公钥」模式：
  wechatPayPublicKey: process.env.WXPAY_PUBLIC_KEY, wechatPayPublicKeyId: 'PUB_KEY_ID_...',
});

const { prepay_id } = await pay.transactions.jsapi({
  description: '商品', out_trade_no: 'no_1', amount: { total: 1 },
  payer: { openid: 'oOpenId' },
});
const payParams = await pay.buildJsapiPayParams(prepay_id); // 直接给前端 wx.requestPayment
```

### 聚合包

```ts
import { createMpClient } from 'wxstack/mp';
import { createPayClient } from 'wxstack/pay';
```

## 🧱 架构

```
L1 业务包  oa · pay · mp · wecom · op · shop · ch · mg · ai   （各自只依赖 core）
                              │
L0 内核    @wxstack/core
            ├─ Transport（fetch 可插拔、重试、多域名、暴露 raw 字节）
            ├─ TokenManager（单飞 + 分布式锁 + 稳定版 + 多令牌类型）
            ├─ Crypto（WXBizMsgCrypt / 支付 RSA+GCM+OAEP / 小程序解密）
            ├─ Errors（WxError 体系 + 错误码自动重试）
            ├─ Store（内存 / 文件 / 自定义，可分布式锁）
            ├─ Webhook（框架无关回调内核）
            └─ Logger（默认 no-op，自动脱敏）
```

## 🛠️ 本地开发

```bash
pnpm install
pnpm build       # turbo 编排，按依赖顺序构建全部包
pnpm typecheck
pnpm test
pnpm lint
```

要求 Node >= 18，推荐 pnpm。

## 🔒 安全

- 日志自动脱敏（token / secret / 私钥 / 手机号打码）。
- 密钥支持 PEM 字符串 / Buffer 入参；签名器/验签器可注入以托管到 KMS/HSM。
- 回调强制时间戳窗口 + 验签，签名比较走常量时间。

## 📄 许可证

[MIT](LICENSE)
