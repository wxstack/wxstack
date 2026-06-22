# @wxstack/wecom

企业微信（WeCom）服务端 SDK。基于 [`@wxstack/core`](../core) 内核，提供自动鉴权、令牌共享、回调加解密，以及通讯录、应用消息、客户联系、素材、OAuth、JS-SDK、第三方服务商等高层方法。

## 安装

```bash
pnpm add @wxstack/wecom
# 或 npm i @wxstack/wecom / yarn add @wxstack/wecom
```

## 快速上手

```ts
import { createWecomClient } from '@wxstack/wecom';

const wecom = createWecomClient({
  corpid: 'ww1234567890',
  corpsecret: 'your-app-secret',
  agentid: 1000002, // 发应用消息 / OAuth 时需要
});

// 通讯录
const user = await wecom.user.get('zhangsan');
const departments = await wecom.department.list();

// 发送应用消息（未显式传 agentid 时自动补上配置的 agentid）
await wecom.message.send({
  touser: 'zhangsan',
  msgtype: 'text',
  text: { content: '你好，世界' },
});
```

> access_token 由内核 `TokenManager` 自动获取、缓存与刷新，按 `corpid + agentid/secret` 区分命名空间。
> 多实例部署时，传入共享存储（如 Redis 实现的 `KVStore`）到 `store` 即可让各实例共用同一份令牌，避免「令牌漂移」。

## OAuth 网页授权

```ts
// 1. 生成授权跳转链接
const url = wecom.buildOAuthUrl({
  redirect_uri: 'https://example.com/callback',
  scope: 'snsapi_base',
  state: 'xyz',
});

// 2. 回调里用 code 换取身份
const info = await wecom.getUserInfo(code); // { userid } 或 { openid }
```

## JS-SDK 签名

```ts
const ticket = await wecom.getJsApiTicket();        // 企业 jsapi_ticket（已缓存）
const sign = wecom.buildJsSdkSignature(pageUrl, ticket);
// sign = { noncestr, timestamp, signature }，回传前端 wx.config

// 应用级 agentConfig
const agentTicket = await wecom.getAgentTicket();
const agentSign = wecom.buildJsSdkSignature(pageUrl, agentTicket);
```

## 素材上传 / 下载

```ts
import { readFile } from 'node:fs/promises';

const buf = await readFile('./avatar.png');
const up = await wecom.media.upload('image', { data: buf, filename: 'avatar.png' });

const bytes = await wecom.media.get(up.media_id!); // Buffer
```

## 客户联系（外部联系人）

```ts
const followers = await wecom.externalContact.getFollowUserList();
const contacts = await wecom.externalContact.list({ userid: 'zhangsan' });
const detail = await wecom.externalContact.get({ external_userid: 'wmxxxx' });
const groups = await wecom.externalContact.groupChat.list({ status_filter: 0 });
```

## 回调（消息 / 事件）加解密

企业微信回调始终为安全模式（`msg_signature` + `EncodingAESKey`），`receiveid` 为 `corpid`。

```ts
import { createWecomWebhook } from '@wxstack/wecom';

const webhook = createWecomWebhook({
  token: 'callback-token',
  encodingAESKey: '43 位 EncodingAESKey',
  corpid: 'ww1234567890',
  handlers: {
    text: (msg, ctx) => ctx.text(`收到：${msg.Content}`),
    'event:subscribe': (msg, ctx) => ctx.none(),
  },
});

// 任意框架适配：传入 { method, rawBody, query, headers? }
const { status, body, contentType } = await webhook.handle({
  method: req.method,
  rawBody: rawBodyString, // 原始 XML（务必用原始字节/文本，勿预解析）
  query: req.query,
});
```

## 第三方应用 / 服务商

`service.*` 使用 suite/provider 凭证（非企业 access_token），凭证需显式传入：

```ts
const suite = await wecom.service.getSuiteToken({
  suite_id, suite_secret, suite_ticket,
});
const pre = await wecom.service.getPreAuthCode(suite.suite_access_token!);
```

## 逃生口：调用任意未封装接口

任何尚未被高层方法覆盖的企业微信接口，都可直接用继承自基类的逃生口调用，**自动携带 access_token**：

```ts
// JSON 接口（自动解包，errcode!=0 抛 WxApiError）
const agent = await wecom.request({
  method: 'GET',
  url: '/cgi-bin/agent/get',
  query: { agentid: 1000002 },
});

// 需要原始响应 / 二进制下载
const resp = await wecom.requestRaw({
  method: 'GET',
  url: '/cgi-bin/media/get',
  query: { media_id: 'xxx' },
  responseType: 'arraybuffer',
});
const buffer = resp.raw;
```

`request()` 与 `requestRaw()` 是「全功能」的兜底：当 SDK 尚未跟进某个新接口时，无需等待升级即可调用。

## 错误处理

```ts
import { WxApiError } from '@wxstack/wecom';

try {
  await wecom.user.get('not-exist');
} catch (e) {
  if (e instanceof WxApiError) {
    console.error(e.errcode, e.errmsg);
  }
}
```

## License

MIT
