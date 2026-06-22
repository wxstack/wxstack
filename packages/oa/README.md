# @wxstack/oa

微信公众号（订阅号/服务号）服务端 SDK，基于内核 [`@wxstack/core`](../core) 实现。

- 约 100+ 高层语义方法，覆盖菜单、群发/模板/订阅消息、客服、素材、草稿箱、留言/发布、用户管理、二维码/短链、数据统计、网页授权、JSSDK、AI/OCR/图像等域。
- 内置自动鉴权（access_token）、自动重试、错误解包、令牌失效自动重放（均由内核提供）。
- 提供消息回调：框架无关的 `createOaWebhook` 与 Express 适配 `createExpressMiddleware`。
- 提供「逃生口」：可调用任意尚未被高层方法封装的新接口。

## 安装

```bash
npm install @wxstack/oa
# 或
pnpm add @wxstack/oa
```

需要 Node.js >= 18（使用全局 `fetch` / `FormData` / `Blob`）。

## 快速上手

```ts
import { createOaClient } from '@wxstack/oa';

const client = createOaClient({
  appId: 'wx...',
  appSecret: '...',
  // 可选项：
  // domain: 'auto',          // 接入点：auto/sh/sz/hk/disaster
  // timeoutMs: 15000,
  // retry: { retries: 2, delayMs: 3000 }, // 兼容旧写法（delayMs 等价 baseDelayMs）
  // tokenMode: 'normal',     // 'normal' | 'stable'
});

// 获取自定义菜单
const menu = await client.getMenu();

// 发送模板消息
await client.sendTemplateMessage({
  touser: 'OPENID',
  template_id: 'TEMPLATE_ID',
  data: { first: { value: '您好' } },
});

// 创建带参二维码
const qr = await client.createQrcode({
  action_name: 'QR_LIMIT_STR_SCENE',
  action_info: { scene: { scene_str: 'promo-001' } },
});
```

### 网页授权（OAuth，无需 access_token）

```ts
const tokenInfo = await client.snsAccessToken({
  appid: 'wx...',
  secret: '...',
  code: 'CODE_FROM_REDIRECT',
});
const user = await client.snsUserInfo({
  access_token: tokenInfo.access_token as string,
  openid: tokenInfo.openid as string,
});
```

### 上传与二进制下载

上传支持本地路径或字节（`Buffer`/`Uint8Array`）：

```ts
// 上传永久图片素材
const res = await client.addMaterial({ type: 'image', filePath: './logo.png' });

// 下载临时素材（返回 Buffer）
const buf = await client.getMedia({ media_id: 'MEDIA_ID' });
```

## 逃生口：调用任意未封装的接口

每个 `OaClient` 都继承自内核基类，提供两个低层方法，可访问「SDK 尚未封装的新接口」，并自动带令牌、自动解包：

```ts
// 自动解包（errcode!=0 抛 WxApiError，令牌失效自动刷新重放一次）
const data = await client.request({
  method: 'POST',
  url: '/cgi-bin/some/new_endpoint',
  body: { foo: 'bar' },
});

// 需要原始响应（含响应头/字节）时用 requestRaw；二进制下载取 resp.raw（Buffer）
const resp = await client.requestRaw({
  method: 'GET',
  url: '/cgi-bin/media/get',
  query: { media_id: 'MEDIA_ID' },
  responseType: 'arraybuffer',
});
const bytes = resp.raw;

// 网页授权类（/sns/*）不需要 access_token，用 auth:false：
await client.request({ method: 'GET', url: '/sns/xxx', query: { /* ... */ }, auth: false });
```

> 高层方法覆盖了绝大多数公众号接口；当微信新增接口而 SDK 尚未跟进时，逃生口保证你始终能调用到。

## 消息回调

### 框架无关内核

```ts
import { createOaWebhook } from '@wxstack/oa';

const webhook = createOaWebhook({
  token: 'YOUR_TOKEN',
  encodingAESKey: 'YOUR_AES_KEY', // 安全模式必填
  appId: 'wx...',
  onMessage: (msg, ctx) => {
    if (msg.MsgType === 'text') return ctx.text(`收到：${msg.Content}`);
    return ctx.none();
  },
});

// 在任意框架中：
const result = await webhook.handle({
  method: req.method,
  rawBody: rawBodyStringOrBuffer,
  query: req.query,
  headers: req.headers,
});
// result => { status, body, contentType }
```

### Express 适配

```ts
import express from 'express';
import { createExpressMiddleware } from '@wxstack/oa';

const app = express();
app.use(
  '/wechat',
  createExpressMiddleware({ token: 'YOUR_TOKEN', encodingAESKey: 'YOUR_AES_KEY', appId: 'wx...' }),
  (req, res) => {
    const msg = (req as any).wechatMessage;
    if (msg?.MsgType === 'text') {
      (res as any).wechatReply({ MsgType: 'text', Content: `收到：${msg.Content}` });
    } else {
      res.end('success');
    }
  },
);
```

- GET：自动校验 `signature` 并回写 `echostr`。
- POST：解析消息；安全模式（含 `Encrypt`）自动校验 `msg_signature` 并解密；
  解析结果挂在 `req.wechatMessage`，回包用 `res.wechatReply(obj)`（安全模式自动加密）。

## 兼容性

- `createClient` 是 `createOaClient` 的别名（兼容旧用法）。
- `retry` 选项兼容旧版 `{ retries, delayMs }` 写法（`delayMs` 映射为内核 `baseDelayMs`）。
- 保留 `lang` 选项与原参数名（向后兼容）。

## 导出一览

- 工厂：`createOaClient`、`createClient`（别名）
- 类：`OaClient`
- 回调：`createOaWebhook`、`createExpressMiddleware`
- 重新导出内核：`WxApiError`、`WxHttpError`、`WxCryptoError`、`parseXml`、`buildXml`、`WXBizMsgCrypt`、`verifySignature`、`verifyMsgSignature`、`decodeAESKey`

## 许可证

MIT
