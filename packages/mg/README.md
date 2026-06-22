# @wxstack/mg

微信**小游戏**服务端 SDK。与小程序服务端同源：使用标准 `access_token`（appId + appSecret），令牌自动置于请求 `query`，并内置自动鉴权、令牌失效重放、错误解包。

## 安装

```bash
npm i @wxstack/mg @wxstack/core
# 或 pnpm add / yarn add
```

## 快速上手

```ts
import { createMgClient } from '@wxstack/mg';

const client = createMgClient({
  appId: 'wx_your_appid',
  appSecret: 'your_app_secret',
  // 可选：多实例部署建议用稳定版令牌
  tokenMode: 'stable',
  // 可选：虚拟支付（米大师）相关
  midasAppKey: 'your_midas_app_key',
  midasSandbox: false, // 默认正式环境；true 走沙箱
});

// 1) 登录：用 wx.login 的 code 换登录态
const session = await client.code2Session(jsCode);
// => { openid, session_key, unionid? }

// 2) 解密 encryptedData（用户信息 / 手机号等，自动校验水印 appid）
const data = client.decryptData(session.session_key, encryptedData, iv);

// 3) 内容安全：文本检测（version 2）
await client.msgSecCheck({ openid: session.openid, scene: 1, content: '待检测文本' });

// 4) 内容安全：媒体异步检测（结果通过回调异步返回）
await client.mediaCheckAsync({ openid: session.openid, media_type: 2, media_url: 'https://...' });

// 5) 订阅消息
await client.sendSubscribeMessage({
  touser: session.openid,
  template_id: 'TEMPLATE_ID',
  data: { thing1: { value: '内容' } },
});
```

## 虚拟支付（米大师 Midas）

Midas 接口除 `access_token` 外还需要 `sig`（用 **AppKey** 做 HMAC-SHA256）和 `mp_sig`（用 **session_key** 做 HMAC-SHA256）。SDK 会在你提供 `midasAppKey` / `sessionKey` 时自动计算，也允许直接注入签名。

```ts
// 自动计算签名（需配置 midasAppKey，并传入用户 sessionKey）
const balance = await client.midas.getBalance({
  openid: session.openid,
  sessionKey: session.session_key,
  zoneId: '1',
});

// 扣款
await client.midas.pay({
  openid: session.openid,
  sessionKey: session.session_key,
  amount: 100,
  bill_no: 'order_xxx',
});

// 撤销 / 赠送
await client.midas.cancelPay({ openid, sessionKey, bill_no: 'order_xxx' });
await client.midas.present({ openid, sessionKey, present_counts: 10 });

// 单次走沙箱：传 sandbox:true 覆盖全局配置（路径变为 /cgi-bin/midas/sandbox/*）
await client.midas.getBalance({ openid, sessionKey, sandbox: true });

// 自行算好签名时直接注入，绕过内置签名助手
await client.midas.pay({ openid, sig: '...', mpSig: '...', amount: 100, bill_no: 'order_xxx' });
```

> 签名说明：微信对参与签名的字段集合、是否包含 `access_token` 等细节在不同版本文档中存在出入。内置助手实现的是「业务参数按 key 字典序拼 `k=v&...` 后 HMAC-SHA256」这一常见算法，并将 `sig` / `mp_sig` 设计为可注入。若校验失败，请以[官方虚拟支付文档](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment.html)为准，或自行计算签名后注入，或改用下文「逃生口」。
>
> 签名助手也可单独导入：`import { buildMidasSig, buildMidasMpSig } from '@wxstack/mg'`。

## 逃生口：调用任意未封装接口

`MgClient` 继承自 `@wxstack/core` 的 `BaseClient`，凡 SDK 尚未封装的小游戏服务端接口（例如**防沉迷/实名**、**UnionID** 相关接口等），都可用逃生口直接调用——令牌、重试、错误解包照常生效：

```ts
// 自动解包（errcode!=0 抛 WxApiError），自动附加 access_token
const res = await client.request({
  method: 'POST',
  url: '/some/uncovered/endpoint',
  body: { foo: 'bar' },
});

// 需要原始字节（如二进制下载）时用 requestRaw + responseType:'arraybuffer'
const raw = await client.requestRaw({
  method: 'GET',
  url: '/some/binary/endpoint',
  responseType: 'arraybuffer',
});
const buf = raw.raw; // Buffer

// 不需要鉴权的接口显式关闭：auth:false
await client.request({ url: '/public/endpoint', auth: false });
```

## 错误处理

业务错误（`errcode !== 0`）会抛出 `WxApiError`（自 `@wxstack/core` re-export）：

```ts
import { WxApiError } from '@wxstack/mg';

try {
  await client.msgSecCheck({ openid, scene: 1, content: '...' });
} catch (err) {
  if (err instanceof WxApiError) {
    console.error(err.errcode, err.errmsg, err.hint);
  }
}
```

## 说明

- 防沉迷/实名、UnionID 等不确定细节的接口未做高层封装，请走逃生口 `client.request()`。
- 全部方法为 `async/await`，运行环境要求 Node >= 18（使用全局 `fetch`）。

## License

MIT
