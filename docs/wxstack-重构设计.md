# wxstack 重构设计文档：现代化微信全生态 Node SDK

> 目标：把 `wxstack` 从「ESM-only / 纯 JS / 单包 OA」演进为一个**跨格式（CJS + ESM）、跨语言（TS + JS）、跨运行时、模块化、可被任意 Node 项目消费**的微信全生态 SDK。

> 以下所有内容都不能作为结论, 你必须先熟读官网文章, 了解到所有接口的用意和请求返回值, 然后再进行编写. 

文档:
小程序 https://developers.weixin.qq.com/miniprogram/dev/framework/
小游戏: https://developers.weixin.qq.com/minigame/introduction/
公众号: https://developers.weixin.qq.com/doc/subscription/guide/
服务号: https://developers.weixin.qq.com/doc/service/guide/
开放平台: https://developers.weixin.qq.com/doc/oplatform/open/intro.html
企业微信: https://developer.work.weixin.qq.com/document
微信支付: https://pay.weixin.qq.com/doc/v3/merchant/4012062524
视频号: https://developers.weixin.qq.com/doc/channels/
微信小店: https://developers.weixin.qq.com/doc/store/shop/
智能对话: https://developers.weixin.qq.com/doc/aispeech/platform/INTRODUCTION.html

使用Playwright或其他合理的办法 去层级读取网页文章. 由于其存在大量交互按钮, 你也必须确保所有菜单内的文章和接口你都完全读取一遍. 
---

## 0. 先说三个结论（TL;DR）

1. **当前仓库的最大短板是"格式与类型"**：GitHub 显示语言 100% JavaScript、README 标注 "ESM Only"。这与你"要能被 TS/JS、CJS/ESM、各种架构使用"的目标直接冲突。重构第一优先级不是加功能，而是**把构建管线改成 TS 源码 → 双格式（ESM + CJS）+ `.d.ts` 产物**。

2. **抽出 `@wxstack/core` 内核**：微信全家桶的痛点 80% 是共性的——access_token 管理、签名/加解密、回调验签、错误码处理、HTTP 重试/多域名。把这些做成一个高质量内核，各业务包只写"端点 + 类型"，是这个 SDK 能不能长期维护的关键。

3. **保持你已有的包命名**（`@wxstack/core|pay|mp|oa|wecom|op|shop|ch|mg|ai`），分阶段交付。不要一次重写所有模块。

> 备注：你写的 "CJS EJS" 我理解为 **CJS + ESM 双格式**（EJS 是模板引擎，应该是笔误）。下文统一按 ESM/CJS 双发行处理。

---

## 1. 现状盘点（基于现仓库）

| 维度 | 现状 | 重构后目标 |
|---|---|---|
| 源码语言 | JavaScript | TypeScript（严格模式） |
| 模块格式 | ESM only | ESM + CJS 双发行，附 `.d.ts`/`.d.cts` |
| 类型 | README 说有，实际 100% JS | 真·完整类型，`attw` 校验通过 |
| 仓库结构 | pnpm workspaces（已有 `packages/`） | 保留，升级为 Turborepo 任务编排 |
| 已发布 | `@wxstack/oa` v0.1.1 | 重构进 core 体系 |
| Node 要求 | >= 18 | >= 18 LTS（HTTP/crypto 可插拔以兼容更广） |
| 已有能力 | OA：多域名、重试、Token 模式、Express 中间件、错误分类（`WxApiError/WxHttpError/WxCryptoError`） | **这些设计是对的，全部上移到 core 复用** |

**好消息**：你 OA 包里已经具备多域名故障转移、指数退避重试、`normal/stable` 双 token 模式、可插拔 `store`、统一错误类型、Express 中间件——这正是 `@wxstack/core` 应该有的雏形。重构本质是"把 OA 里做对的东西抽象出来，再让其他 9 个包复用"。

---

## 2. 总体架构

### 2.1 分层

```
┌─────────────────────────────────────────────────────────────┐
│  L3 框架集成（可选包）                                          │
│  @wxstack/express · @wxstack/koa · @wxstack/fastify           │
│  @wxstack/nest · @wxstack/nuxt · @wxstack/egg                 │
├─────────────────────────────────────────────────────────────┤
│  L2 聚合包                                                     │
│  wxstack（meta，re-export 全部）                               │
├─────────────────────────────────────────────────────────────┤
│  L1 业务包（每个都只依赖 core）                                  │
│  pay · mp · oa · wecom · op · shop · ch · mg · ai             │
├─────────────────────────────────────────────────────────────┤
│  L0 内核                                                       │
│  @wxstack/core                                                │
│   ├─ Transport（HTTP 抽象：fetch/undici/axios 可插拔）          │
│   ├─ TokenManager（凭据/令牌，单飞 + 分布式锁 + 多类型）         │
│   ├─ Crypto（WXBizMsgCrypt / Pay RSA+GCM+OAEP / MP 解密）       │
│   ├─ Store（KV 抽象：memory/redis/file/自定义）                 │
│   ├─ Errors（WxError 体系 + 错误码自动重试）                    │
│   ├─ Webhook（统一回调路由内核，框架无关）                       │
│   ├─ Logger（可插拔，默认 no-op，自动脱敏）                      │
│   └─ Signer/Verifier（私钥可走 KMS/HSM）                        │
├─────────────────────────────────────────────────────────────┤
│  L-1 运行时适配（可选拆包）                                      │
│  @wxstack/adapter-redis · adapter-undici · adapter-axios      │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 依赖原则

- 业务包**只依赖 `@wxstack/core`**，互相之间**零依赖**（避免循环、便于按需安装）。
- core **零运行时强依赖**（只用 Node 内置 `crypto` + 全局 `fetch`）；axios/redis/ioredis/form-data 等全部走 `peerDependencies` + 适配器，按需启用。
- 聚合包 `wxstack` 把各业务包列为 `dependencies`，但通过 subpath exports 让用户仍可 tree-shake。

### 2.3 包清单（沿用你的命名）

| 包名 | 范围 | 优先级 |
|---|---|---|
| `@wxstack/core` | 内核（HTTP/Token/Crypto/Errors/Webhook） | P0 |
| `@wxstack/pay` | 微信支付 v3（v2 legacy 可选） | P0 |
| `@wxstack/mp` | 小程序（服务端 OpenAPI） | P0 |
| `@wxstack/oa` | 公众号（订阅号/服务号） | P0（重构） |
| `@wxstack/wecom` | 企业微信 | P1 |
| `@wxstack/op` | 开放平台（第三方平台 / 网站扫码登录） | P1 |
| `@wxstack/shop` | 微信小店 | P2 |
| `@wxstack/ch` | 视频号 | P2 |
| `@wxstack/mg` | 小游戏（服务端：登录/虚拟支付/内容安全） | P2 |
| `@wxstack/ai` | 智能对话（对话开放平台） | P3 |
| `wxstack` | 聚合 meta 包 | 随各包推进 |

---

## 3. 跨格式 / 跨运行时方案（你的核心诉求）

这是重构成败的技术核心。要同时满足"TS 项目、JS 项目、`import`、`require`、老 Node、打包器、Serverless"，关键是**构建产物 + `package.json` 字段 + 校验**三件套。

### 3.1 构建工具选型

| 工具 | 特点 | 建议 |
|---|---|---|
| **tsdown** | Rolldown（Rust）驱动，tsup 的"继任者"，Vite 团队主推的长期方向，迁移近乎零成本 | ✅ **首选**（2026 新项目） |
| tsup | esbuild 驱动，生态最大、最稳，~6M 周下载 | 求稳可选 |
| tshy / zshy | 纯 `tsc`、无 bundler、约定式 | 介意 bundler 行为时可选 |

> 三者都能产出双格式 + `.d.ts`，差异在 re-export 类型、CJS 默认导出 interop、声明 map 的边角处理。**推荐 tsdown**，并开启 `isolatedDeclarations` 走 oxc 快速生成声明文件。

### 3.2 每个包的 `package.json`（关键模板）

```jsonc
{
  "name": "@wxstack/pay",
  "version": "0.1.0",
  "type": "module",
  "sideEffects": false,                 // 允许 tree-shaking
  "engines": { "node": ">=18" },

  // 老平台/老解析器的兜底（不依赖 exports 的环境）
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.cts",        // ← 指向 .d.cts，规避 "Masquerading as ESM"

  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.js"
      },
      "require": {
        "types": "./dist/index.d.cts",
        "default": "./dist/index.cjs"
      }
    },
    // 子路径导出：用户可只引子模块，进一步 tree-shake
    "./jsapi": {
      "import": { "types": "./dist/jsapi.d.ts", "default": "./dist/jsapi.js" },
      "require": { "types": "./dist/jsapi.d.cts", "default": "./dist/jsapi.cjs" }
    },
    "./callback": { "import": "./dist/callback.js", "require": "./dist/callback.cjs" },
    "./package.json": "./package.json"
  },

  "files": ["dist"],
  "peerDependencies": {
    "@wxstack/core": "workspace:*"
  },
  "scripts": {
    "build": "tsdown",
    "lint:pkg": "publint && attw --pack ."   // 发布前自检
  }
}
```

**两个容易踩坑、必须记住的点：**

1. **`types` 字段（顶层）指向 `.d.cts` 而非 `.d.ts`**——这是 tshy/zshy 验证过的"圣杯"做法。因为 ESM 文件能 import CJS，但 CJS 不能 require ESM；让类型默认走 CJS 声明可在各种解析模式下都成立，规避那条经典报错：*"...is an ECMAScript module and cannot be imported with 'require'"*。

2. **`exports` 里每个条件都要 `types` 在前、`default` 在后**，且 `import`/`require` 各自带自己的 `.d.ts`/`.d.cts`，否则 TS 在 `node16`/`nodenext` 解析下会拿错类型。

### 3.3 tsdown 配置（每包一致）

```ts
// tsdown.config.ts
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    jsapi: 'src/jsapi.ts',
    callback: 'src/callback.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  target: 'es2022',     // 编译基线：兼顾老 Node 与可读性
  platform: 'node',
  clean: true,
  outExtensions: ({ format }) => ({
    js: format === 'cjs' ? '.cjs' : '.js',
    dts: format === 'cjs' ? '.d.cts' : '.d.ts',
  }),
})
```

### 3.4 兼容性矩阵（要在 CI 里跑通）

| 消费方式 | 必须可用 | 验证手段 |
|---|---|---|
| `import x from '@wxstack/pay'`（ESM/TS） | ✅ | attw `node16 from ESM` |
| `const x = require('@wxstack/pay')`（CJS/TS） | ✅ | attw `node16 from CJS` |
| 纯 JS + `require` | ✅ | 集成测试 fixture |
| 打包器（webpack/vite/rollup/esbuild） | ✅ | attw `bundler` |
| 老解析（node10） | 尽力 | attw `node10` |
| Serverless（阿里云 FC / 腾讯 SCF / Vercel） | ✅ | HTTP 可插拔 + 冷启动测试 |

**强制门禁**：`prepublishOnly` 与 CI 都跑 `publint`（校验 exports/main/module/types 指向真实文件）+ `are-the-types-wrong (attw)`（校验各解析模式类型正确）。这两个工具能在发布前拦掉 90% 的双发行事故。

> 关于 Node 22/23 已原生支持 `require(ESM)`：这缓解了痛点，但**短期内仍要双发行**——大量用户不在最新 Node 上。等生态完全迁移再考虑收敛。

### 3.5 运行时可插拔（兼容 edge / 老 Node / Serverless）

core 不写死 `fetch`/`crypto`，而是定义接口、提供默认实现、允许注入：

- `Transport`：默认用全局 `fetch`（Node 18+）；可注入 undici/axios/got 适配器，或边缘运行时的 fetch。
- `CryptoProvider`：默认 Node `crypto`；预留 WebCrypto 实现位（未来上 Cloudflare Workers / Deno）。

---

## 4. `@wxstack/core` 内核详设（重中之重）

### 4.1 Transport（HTTP 抽象）

```ts
export interface HttpRequest {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  url: string
  headers?: Record<string, string>
  query?: Record<string, string | number | boolean | undefined>
  body?: unknown                 // JSON | Buffer | FormData
  signal?: AbortSignal
  timeoutMs?: number
}

export interface HttpResponse<T = unknown> {
  status: number
  headers: Record<string, string>
  data: T
  raw: ArrayBuffer | Buffer      // 验签需要原始字节
}

export interface Transport {
  request<T = unknown>(req: HttpRequest): Promise<HttpResponse<T>>
}
```

内置能力（从你 OA 包上移）：
- **指数退避 + 抖动重试**（幂等方法默认重试，POST 默认不重试，可配）。
- **多域名故障转移**：微信 API 有上海/深圳/香港等接入点，按延迟/失败率切换（你 OA 已有 `domain: auto|shanghai|shenzhen|hongkong`，泛化到 core）。
- 拦截器（注入签名/Token/日志）。
- **必须暴露 `raw` 原始响应字节**——支付验签、消息验签都要对原文做哈希，不能用反序列化后的对象。

### 4.2 TokenManager（凭据/令牌）—— 全家桶第一大坑

微信的 access_token 是**应用级全局**、有调用频次限制、约 7200s 过期。多实例部署时如果各实例各刷各的，会互相把对方的 token 顶掉（"token 漂移"）。设计要点：

```ts
export interface TokenManager {
  getToken(key: TokenKey): Promise<string>      // 自动按需刷新
  refresh(key: TokenKey): Promise<string>        // 强制刷新（错误码触发）
  invalidate(key: TokenKey): Promise<void>
}
```

必须解决：
1. **可插拔 `TokenStore`**：默认内存；生产用 Redis/自定义，让多实例共享同一份 token。
2. **单飞（singleflight）+ 分布式锁**：同进程内并发只触发一次刷新；多实例用 Redis 锁（`SET NX PX`）避免惊群，未拿到锁的实例等待并读取新值。
3. **提前刷新**：过期前 ~5 分钟主动刷新，避免临界点失败。
4. **稳定版 token**：支持 `stable_token` 模式（`stable=true` 不会使旧 token 立即失效，适合多实例；你 OA 已有 `tokenMode: stable`，上移到 core）。
5. **多 token 类型**（用 `TokenKey` 区分命名空间）：

| 类型 | 适用 | 派生关系 |
|---|---|---|
| `access_token`（普通/稳定） | OA / MP | appid+secret |
| `wecom_access_token` | 企业微信 | corpid+secret（按 agent） |
| `provider/suite_access_token` | 企业微信第三方 | suite ticket |
| `component_access_token` | 开放平台 | component_verify_ticket（10min 推送） |
| `authorizer_access_token` | 开放平台代调用 | + refresh_token |
| `jsapi_ticket` / `wx_card_ticket` | JS-SDK / 卡券 | access_token 派生 |

> `component_verify_ticket` 由微信每 10 分钟推送到回调，**必须落库**——拿不到它整个开放平台链路就断了。这是 `op` 包的设计重心，TokenManager 要把"ticket → token"的派生链建模清楚。

### 4.3 Crypto（加解密 / 签名）

微信不同业务的加解密算法不同，core 统一封装：

| 场景 | 算法 | 用于 |
|---|---|---|
| 公众号/企业微信回调消息 | **AES-256-CBC + PKCS7**，签名为 SHA1(sort(token,timestamp,nonce,encrypt)) | `WXBizMsgCrypt` 收发消息加解密 |
| 小程序 `encryptedData` | **AES-128-CBC**（session_key 为 key，iv 随包） | 解密用户信息/手机号 |
| 支付 v3 请求签名 | **RSA-SHA256**（`sha256WithRSAEncryption`） | 商户私钥签名 `Authorization` 头 |
| 支付 v3 回调/证书 | **AES-256-GCM**（APIv3Key 为对称密钥） | 解密回调报文、平台证书下载 |
| 支付 v3 敏感字段 | **RSA-OAEP**（`RSA_PKCS1_OAEP_PADDING`） | 加密上行敏感信息、解密下行 |

```ts
// 把私钥操作抽象成接口，便于走 KMS/HSM（参考微信官方 Go SDK 的 Signer/Verifier）
export interface Signer {
  sign(message: string): Promise<{ serialNo: string; signature: string }>
}
export interface Verifier {
  verify(serialNo: string, message: string, signature: string): Promise<boolean>
}
```

### 4.4 错误模型

```ts
export class WxError extends Error { code: string }
export class WxApiError extends WxError {     // errcode !== 0
  errcode: number; errmsg: string; rid?: string
}
export class WxHttpError extends WxError { status: number }
export class WxCryptoError extends WxError {}
export class WxConfigError extends WxError {}
export class WxTokenError extends WxError {}
export class WxRateLimitError extends WxApiError {}   // 45009 等
```

- **错误码自动重试**：命中 token 失效码（`40001/42001/40014` 等）→ 自动 `refresh` 一次并重放请求（最多一次）。
- 维护**错误码 → 可读释义**注册表，`errmsg` 之外给中文解释和处理建议。
- 默认把 `errcode !== 0` 抛成 `WxApiError`；提供 `{ throwOnApiError: false }` 拿原始返回的逃生口。

### 4.5 Store（KV 抽象）

```ts
export interface KVStore {
  get(key: string): Promise<string | null>
  set(key: string, val: string, ttlSec?: number): Promise<void>
  del(key: string): Promise<void>
  // 可选：分布式锁
  acquireLock?(key: string, ttlSec: number): Promise<boolean>
  releaseLock?(key: string): Promise<void>
}
```

提供 `MemoryStore`（默认）、`RedisStore`/`IoRedisStore`（适配器包）、`FileStore`（本地单机）。

### 4.6 Webhook（统一回调内核）

微信各业务回调"形态各异但内核相通"，做一个**框架无关**的处理核：

```ts
// 输入永远是这三样，与框架解耦
type RawCallback = { rawBody: string | Buffer; query: Record<string,string>; headers: Record<string,string> }

const handler = createWebhook({
  appId, token, encodingAESKey,            // 消息回调
  // 或 pay: { apiV3Key, verifier }        // 支付回调
  on: {
    text: async (msg, ctx) => ctx.reply.text('收到：' + msg.Content),
    event_subscribe: async (e, ctx) => {/*...*/},
    pay_success: async (resource, ctx) => {/*幂等处理*/},
    op_authorized: async (info, ctx) => {/*授权事件*/},
  },
})
```

统一处理：
- **URL 验证**（消息回调的 `echostr`）。
- **消息验签 + 解密**（`WXBizMsgCrypt`）→ 回包自动加密。
- **支付回调**（不同链路）：AES-GCM 解密 + RSA 验签；**注意灰度**——微信从平台证书向"微信支付公钥"迁移期间，回调会按比例混用两种签名，需读 `Wechatpay-Serial` 头判断用公钥还是平台证书验签。
- **开放平台 ticket/授权事件**推送。
- **重放保护**（时间戳窗口）+ **幂等**（业务方提供去重键）。

适配器（薄封装核）：`@wxstack/express`、`/koa`、`/fastify`、原生 `http`、Next.js Route Handler、Serverless。你 OA 现有的 `createExpressMiddleware` 即此模式，泛化即可。

### 4.7 统一客户端工厂 & 低层逃生口

```ts
// 所有业务包统一的工厂签名
const pay = createPayClient({ mchid, appid, privateKey, apiV3Key, /* ... */ })

// 高层语义方法
await pay.transactions.jsapi({ description, out_trade_no, amount, payer })

// 低层逃生口：自动签名 + 自动带 token，覆盖"SDK 还没封装的新接口"
await pay.request({ method: 'POST', path: '/v3/refund/domestic/refunds', data })
```

> **逃生口是覆盖率的保险**。微信接口几乎每月都在新增，靠人肉追平不现实。给每个包一个"自动鉴权的裸请求"出口，未封装的接口用户也能立刻用——这是"全功能"在工程上唯一可持续的实现方式。

---

## 5. 各业务包要点（鉴权模型 + 关键坑）

### 5.1 `@wxstack/pay` 微信支付

- **以 v3 为主**（RESTful + JSON + RSA-SHA256 + AES-GCM），v2 作为 `@wxstack/pay/v2` 子模块给历史商户。
- **两种验签模式都要支持**：平台证书模式 + **微信支付公钥模式（官方推荐新商户用公钥）**。内置**平台证书自动下载器 + 定时轮换**；处理公钥灰度切换。
- 业务覆盖：JSAPI/小程序支付、Native、APP、H5、合单支付；查单/关单；退款/退款查询；账单下载（交易/资金）；**分账**（profit sharing）；**商家转账到零钱**；代金券/商家券；电子发票；**服务商模式**（`sp_mchid`/`sub_mchid`）。
- 敏感字段 RSA-OAEP 加解密，自动带 `Wechatpay-Serial` 头。
- 下单后生成**前端调起支付参数**（`paySign`）。
- 回调：AES-256-GCM 解密 + 验签 + 重放保护 + 幂等。
- `Signer`/`Verifier` 可注入 → 私钥托管到 KMS/HSM 而非落盘。

### 5.2 `@wxstack/mp` 小程序（服务端 OpenAPI）

- 鉴权：`appid+secret → access_token`；`code2Session（jscode2session）→ openid/session_key/unionid`。
- 覆盖：登录、`encryptedData` 解密（用户信息/手机号，也支持新版 `getPhoneNumber` 用 code 换）、**订阅消息**、小程序码（`getUnlimited`/`getQRCode`）、URL Link / URL Scheme / Short Link、**内容安全**（`msgSecCheck`/`mediaSecCheck` v2）、物流助手、直播、客服消息、数据分析、**支付后发货信息管理**、即时配送。
- **边界声明**：客户端 `wx.*` 框架 API 不在 Node SDK 范围内；本包只做服务端能力。

### 5.3 `@wxstack/oa` 公众号（重构现有包）

- 把现有功能（用户/消息（模板/群发/客服）/素材/菜单/二维码短链/数据统计/网页 OAuth/JS-SDK 签名）**改成 TS + 接入 core**，行为保持向后兼容。
- 注意 **订阅号 vs 服务号** 能力差异（如客服消息仅服务号）。

### 5.4 `@wxstack/wecom` 企业微信

- 鉴权：`corpid+corpsecret → access_token`（按 agent 分命名空间）；第三方有 `provider_access_token`/`suite_access_token`。
- 覆盖：通讯录（成员/部门/标签）、应用消息推送、**客户联系**（外部联系人/客户群/朋友圈）、企业支付、OA 审批、日程/会议/直播、素材、身份验证（OAuth/扫码登录）、回调（URL 验证 + 消息加解密，同 `WXBizMsgCrypt`）、**会话内容存档**（需官方 SDK + RSA 解密，单独子模块）、电子发票、微盘。
- 第三方/代开发应用生态单列。

### 5.5 `@wxstack/op` 开放平台（最难，慎排期）

- 第三方平台链路：`component_verify_ticket`（10min 推送，必落库）→ `component_access_token` → `pre_auth_code` → 用户授权 → `authorizer_access_token/refresh_token` → **代公众号/小程序调用**。
- 授权事件接收/加解密、全网发布、小程序代码管理（上传/提审/审核回调/发布/体验版二维码）。
- **网站应用扫码登录**（微信开放平台 OAuth）、移动应用、公众号第三方。
- 设计重心是把"ticket→token"的派生链交给 core 的 TokenManager 建模，业务包只编排流程。

### 5.6 `@wxstack/shop` 微信小店

- 2024 起视频号小店升级为「微信小店」并打通公众号/小程序/视频号。覆盖：商品（SPU/SKU）、订单、售后、物流、优惠券、**达人带货/团长分销**、资金结算、回调。
- 鉴权依托对应主体的 access_token。接口仍在演进，建议**先做低层逃生口 + 高频接口**，逐步补全。

### 5.7 `@wxstack/ch` 视频号

- 直播、橱窗、视频号助手 API、互动数据；与 shop 有重叠。
- **坦白说**：视频号对外开放的服务端 API 面较窄且在变化，本包先以"鉴权 + 逃生口 + 已开放接口"为主，不承诺大而全。

### 5.8 `@wxstack/mg` 小游戏（服务端）

- 登录（同小程序 `code2Session`）、**虚拟支付（米大师 Midas，游戏内代币/道具）**、订阅消息、内容安全、防沉迷/实名、UnionID。
- 客户端开放数据域、游戏框架 API 不在范围内（那是运行在微信里的代码，非 Node 服务端）。

### 5.9 `@wxstack/ai` 智能对话（对话开放平台）

- 技能/意图/实体管理、问答库、与公众号/小程序对接、`query` 发问取机器人回复、导入导出。
- 平台 token 鉴权；体量较小，放最后。

---

## 6. API 设计原则（贯穿全包）

1. **统一工厂**：`createXxxClient(config)`，共享 `BaseClientConfig`（store/logger/transport/retry/timeout 都从 core 继承）。
2. **双 API 风格**：高层语义方法（带类型）+ 低层 `client.request()` 逃生口（自动鉴权/签名）。
3. **类型优先**：入参/返回都有类型；返回默认解包并在 `errcode!=0` 抛 `WxApiError`，可选拿原始体。
4. **现代异步**：全 `async/await`，支持 `AbortSignal` 取消。
5. **ESM 与 CJS 都是一等公民**，子路径导出支持按需引入。
6. **不可变配置 + 显式依赖注入**，便于测试与多租户（一个进程跑多个 appid/mchid）。

---

## 7. 工程化与工具链（"规划"部分）

| 关注点 | 选型 | 说明 |
|---|---|---|
| Monorepo | pnpm workspaces + **Turborepo** | 任务编排 + 远程缓存；你已有 workspaces |
| 构建 | **tsdown**（备选 tsup） | 双格式 + dts |
| 语言 | TypeScript strict + `isolatedDeclarations` | 快速声明生成 |
| 测试 | **Vitest** + nock/msw | 单测 + HTTP 录制/契约测试 |
| Lint/格式化 | **Biome** 或 oxlint + Prettier | 求速选 Biome；求生态选 ESLint flat |
| 版本/发布 | **Changesets** | 各包独立版本号，CI 自动发版，开 npm provenance |
| 文档 | **VitePress**（已用）+ **TypeDoc** | 指南 + 自动 API 参考 |
| Git 规范 | Conventional Commits + commitlint + **lefthook** | |
| 发布门禁 | **publint + attw** + size-limit | `prepublishOnly` 与 CI 双跑 |
| CI | GitHub Actions，Node **18/20/22** 矩阵 | lint→build→test→publint/attw |

**目录结构建议：**

```
wxstack/
├─ packages/
│  ├─ core/        @wxstack/core
│  ├─ pay/         @wxstack/pay
│  ├─ mp/  oa/  wecom/  op/  shop/  ch/  mg/  ai/
│  ├─ adapters/    adapter-redis / adapter-undici / adapter-axios
│  └─ integrations/express / koa / nest / nuxt ...
├─ docs/           VitePress
├─ examples/       各场景可跑 demo（含 CJS 与 ESM 两份验证用例）
├─ scripts/
├─ turbo.json  pnpm-workspace.yaml  tsconfig.base.json
└─ .changeset/
```

**关于"接口太多"的工程对策**：微信没有官方 OpenAPI 规范。建议维护一份**内部端点 DSL**（声明式：path/method/鉴权类型/入参出参类型），用代码生成器产出高层方法 + 类型，减少手写样板、保证一致性。短期靠"逃生口"兜底覆盖率，长期靠 DSL 补齐语义方法。

---

## 8. 安全清单

- 日志**自动脱敏**：token/secret/私钥/手机号一律打码，core 的 Logger 内置 redaction。
- 密钥材料支持 **PEM 字符串 / 文件路径 / Buffer** 三种入参；生产推荐 KMS/HSM 经 `Signer` 注入，**不落盘**。
- 签名比较走**常量时间**比较。
- 回调**强制时间戳窗口校验 + 幂等键**，防重放。
- 文档显著位置写清楚**支付公钥迁移**指引（平台证书 5 年有效、迁移有 7 天灰度，算好过期时间）。

---

## 9. 重构路线图（分阶段）

> 原则：**先打地基，再迁移已有，再扩新模块**。不要一次重写十个包。

### Phase 0 — 地基（最高优先）
- 切换构建管线到 TS + tsdown，跑通**双格式产物**。
- 落地 `package.json` exports 模板 + publint/attw 门禁 + Node 18/20/22 CI 矩阵。
- 从现有 OA 代码**抽出 `@wxstack/core`**：Transport / TokenManager / Crypto / Errors / Store / Webhook / Logger。
- `examples/` 里放一份 **CJS** 和一份 **ESM** 的冒烟用例，证明两种消费方式都通。
- ✅ 交付物：可发布的 `@wxstack/core@0.1`，OA 在其上跑通且向后兼容。

### Phase 1 — 核心三件套 + 企业微信（覆盖 80% 需求）
- `@wxstack/pay`（v3，公钥+平台证书双模、回调、退款、分账、转账）。
- `@wxstack/mp`（登录/订阅消息/内容安全/小程序码/发货）。
- `@wxstack/oa` 重构完成。
- `@wxstack/wecom`（通讯录/消息/客户联系/回调）。
- ✅ 交付物：上述四包 + core 的稳定版与完整文档。

### Phase 2 — 开放平台 + 回调适配器全家桶
- `@wxstack/op`（第三方平台 ticket→token 链、代调用、代码管理、扫码登录）。
- `@wxstack/express|koa|fastify|nest` 回调适配器。
- ✅ 交付物：第三方平台完整链路 + 多框架接入。

### Phase 3 — 电商三号（小店 / 视频号 / 小游戏）
- `@wxstack/shop`、`@wxstack/ch`、`@wxstack/mg`（先逃生口 + 高频接口）。

### Phase 4 — 收尾与增强
- `@wxstack/ai` 智能对话。
- 增强：分布式 token 锁、可观测性（OpenTelemetry hooks）、KMS Signer、端点 DSL + 代码生成、`wxstack` 聚合包定版。

---

## 10. 给你的几条直接建议（决策点）

1. **第一件事就把构建改成 TS + 双发行**，并用 attw/publint 卡死。这件事不做，后面加多少功能都满足不了你"任意架构可用"的目标。
2. **`types` 指 `.d.cts`、exports 条件 types 在前**——这两个细节决定 TS 用户体验，最容易被忽略，写进模板一次到位。
3. **TokenManager 做成可插拔 + 分布式锁**，这是多实例生产环境最大的隐形坑，也是你 SDK 相对市面方案的差异化亮点。
4. **每个包都留低层 `request()` 逃生口**——这是"全功能"在工程上唯一可持续的兑现方式，别试图人肉追平所有接口。
5. **支付优先支持"微信支付公钥"模式**（官方对新商户的推荐），平台证书作为兼容，并处理灰度混签。
6. 对**视频号/小店/智能对话**保持坦诚：开放的服务端 API 有限且在变，先把鉴权和高频接口做扎实，逃生口兜底，不过度承诺。

---

*需要的话，我可以继续产出任意一项的落地代码：`@wxstack/core` 的 TokenManager + 分布式单飞完整实现、支付 v3 的签名/验签/AES-GCM 回调解密模块、或一套 publint+attw 通过的 `package.json` + tsdown 模板骨架。*
