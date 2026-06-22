# @wxstack/core

wxstack 微信全生态 SDK 的内核。各业务包（`@wxstack/oa`、`@wxstack/pay` 等）共享这里的共性能力，
你也可以单独使用它来自建客户端或处理回调。

## 安装

```bash
pnpm add @wxstack/core
```

## 能力一览

| 模块 | 说明 |
|---|---|
| `FetchTransport` | 基于全局 fetch 的传输层：指数退避重试、多域名故障转移、暴露 `raw` 原始字节、超时控制、可注入自定义 fetch |
| `TokenManager` / `createAccessTokenManager` | 令牌管理：单飞 + 分布式锁 + 提前刷新 + 稳定版令牌 + 多令牌命名空间 |
| `BaseClient` | 业务客户端基类：自动鉴权、令牌失效自动重试、低层逃生口 `request()` / `requestRaw()` |
| `WXBizMsgCrypt` | 公众号 / 企业微信 / 开放平台消息回调加解密与验签 |
| 支付加解密 | `LocalSigner` / `LocalVerifier` / `aesGcmDecrypt` / `rsaOaepEncrypt` / `buildJsapiPaySign` 等 |
| `decryptMpData` | 小程序 / 小游戏 `encryptedData` 解密 |
| `createWebhook` | 框架无关的回调处理内核 |
| 错误体系 | `WxApiError` / `WxHttpError` / `WxCryptoError` / `WxTokenError` … + 错误码自动重试 |
| 存储 | `MemoryStore` / `FileStore` / `KVStore` 接口（可接 Redis） |
| 日志 | `Logger` 接口 + 自动脱敏 |

## 子路径导出

```ts
import { TokenManager } from '@wxstack/core';
import { WXBizMsgCrypt, aesGcmDecrypt } from '@wxstack/core/crypto';
import { createWebhook } from '@wxstack/core/webhook';
```

## 自建一个客户端

```ts
import { BaseClient, createAccessTokenManager, type BaseClientConfig } from '@wxstack/core';

interface MyConfig extends BaseClientConfig { appId: string; appSecret: string; }

class MyClient extends BaseClient {
  constructor(cfg: MyConfig) {
    super(cfg);
    const { provider } = createAccessTokenManager({
      appId: cfg.appId, appSecret: cfg.appSecret,
      store: this['store'], transport: this['transport'], logger: this['logger'],
    });
    this['tokenProvider'] = provider; // 之后 request() 自动带 access_token
  }
  getCallbackIp() { return this.request({ method: 'GET', url: '/cgi-bin/getcallbackip' }); }
}
```

## 处理回调

```ts
import { createWebhook } from '@wxstack/core/webhook';

const wh = createWebhook({
  token: 'yourToken',
  receiveId: 'wxAppId',
  encodingAESKey: '43位AESKey', // 安全模式
  onMessage: (msg, ctx) => ctx.text(`收到：${msg.Content}`),
});

// 任意框架里：
const result = await wh.handle({ method: req.method, rawBody, query, headers });
res.status(result.status).type(result.contentType).send(result.body);
```

## 许可证

MIT
