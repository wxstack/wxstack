# @wxstack/op

微信开放平台 SDK：**第三方平台（代公众号 / 小程序）** + **网站应用扫码登录**。

两条能力线彼此独立：

- `ComponentClient`：托管第三方平台完整令牌派生链，代授权方调用任意 OpenAPI，并附带授权事件 / ticket 推送回调内核。
- `WebsiteLoginClient`：开放平台 OAuth2 网站应用扫码登录。

## 安装

```bash
pnpm add @wxstack/op @wxstack/core
```

> 生产多实例部署务必注入共享存储（Redis 等实现 `KVStore`），否则各实例各刷各的令牌会互相顶掉。

## 令牌派生链（务必理解）

第三方平台的令牌不是普通 `access_token`，而是一条派生链：

```
component_verify_ticket  ← 微信每 10 分钟推送一次，必须落库（断了整条链失效）
        │
        ▼
component_access_token   ← 第三方平台级令牌（component 接口在 query 带它）
        │
        ▼
pre_auth_code            ← 预授权码，用于拼装授权链接
        │
        ▼  （用户扫码授权）
        ▼
authorizer_access_token  ← 授权方令牌，代该公众号/小程序调用任意 OpenAPI
authorizer_refresh_token ← 必须落库，每次刷新会滚动下发新值
```

**关键：`component_verify_ticket` 必须落库。** 它由微信通过「授权事件接收 URL」每 10 分钟推送一次密文。只要回调里调用了 `client.setVerifyTicket(...)`（或把 `client` 传给 `createComponentWebhook`，内核会自动落库），后续 `component_access_token` 才能正常刷新。首次接入时需等待至多 10 分钟收到第一条推送，链路才打通。

## 快速上手：第三方平台

```ts
import { createComponentClient, createComponentWebhook } from '@wxstack/op';
import { FileStore } from '@wxstack/core';

const client = createComponentClient({
  componentAppId: 'wx_component_appid',
  componentAppSecret: 'component_secret',
  componentToken: 'your_message_token',
  componentEncodingAESKey: 'your_43_char_encoding_aes_key',
  store: new FileStore(), // 生产替换为 Redis 等共享实现
});

// 1) 授权事件 / ticket 推送回调（部署在「授权事件接收 URL」）
const webhook = createComponentWebhook({
  token: client.componentToken,
  encodingAESKey: client.componentEncodingAESKey,
  componentAppId: client.componentAppId,
  client, // 传入后自动落库 component_verify_ticket
  onAuthorized: (e) => console.log('新授权', e.AuthorizerAppid),
  onUnauthorized: (e) => console.log('取消授权', e.AuthorizerAppid),
  onUpdateAuthorized: (e) => console.log('更新授权', e.AuthorizerAppid),
});

// 在你的 HTTP 框架里：
// const res = await webhook.handle({ method: req.method, rawBody, query: req.query });
// res => { status, body, contentType }，直接写回响应即可。

// 2) 发起授权（生成授权链接）
const { pre_auth_code } = await client.createPreAuthCode();
const { pc, mobile } = client.buildAuthUrl({
  pre_auth_code,
  redirect_uri: 'https://your.app/op/callback',
  auth_type: 3, // 1 仅公众号 / 2 仅小程序 / 3 都展示
});
// pc：PC 扫码授权页；mobile：移动端绑定授权页

// 3) 授权回调里用 auth_code 换取并落库授权方令牌
const info = await client.queryAuth(authCodeFromCallback);
// info.authorizer_appid / authorizer_access_token / authorizer_refresh_token（已自动落库）

// 4) 代该授权方调用任意接口（逃生口，覆盖代公众号/小程序全部 OpenAPI）
const menu = await client.callAuthorizer(info.authorizer_appid, {
  method: 'GET',
  path: '/cgi-bin/menu/get',
});
```

## 代调用逃生口

第三方平台「全功能」的工程兑现方式是逃生口——任何未被高层方法封装的接口都能直接调：

```ts
// 代授权方调用（自动注入 authorizer_access_token 到 query.access_token，令牌失效自动刷新重放一次）
await client.callAuthorizer(authorizerAppId, {
  method: 'POST',
  path: '/cgi-bin/message/custom/send',
  body: { touser: 'openid', msgtype: 'text', text: { content: 'hi' } },
});

// 下载二进制（如小程序码）：取 resp.raw（Buffer）
const resp = await client.callAuthorizerRaw(authorizerAppId, {
  path: '/wxa/getwxacode',
  body: { path: 'pages/index/index' },
  responseType: 'arraybuffer',
  throwOnApiError: false,
});
const png = resp.raw;

// component 级逃生口（自动注入 component_access_token）
await client.callComponent('/cgi-bin/component/api_create_preauthcode', {
  component_appid: client.componentAppId,
});
```

## 小程序代开发 / 代码管理

挂在 `client.miniprogram.*`（也可从包顶层 import 纯函数版）：

```ts
await client.miniprogram.commit(authorizerAppId, {
  template_id: 1,
  ext_json: JSON.stringify({ extAppid: authorizerAppId }),
  user_version: '1.0.0',
  user_desc: '首次提交',
});
const qr = await client.miniprogram.getQrcode(authorizerAppId); // qr.raw 为二维码图片
await client.miniprogram.submitAudit(authorizerAppId, { item_list: [] });
const status = await client.miniprogram.getAuditStatus(authorizerAppId); // 不传 auditid 查最新
await client.miniprogram.release(authorizerAppId);
await client.miniprogram.modifyDomain(authorizerAppId, { action: 'add', requestdomain: ['https://api.x.com'] });
```

## 网站应用扫码登录

与第三方平台无关，独立的开放平台 OAuth2：

```ts
import { createWebsiteLogin } from '@wxstack/op';

const login = createWebsiteLogin({ appId: 'website_appid', appSecret: 'secret' });

// 1) 生成扫码登录二维码链接
const url = login.buildQrConnectUrl({
  redirect_uri: 'https://your.app/login/callback',
  state: 'csrf_token',
});

// 2) 回调里用 code 换取身份
const token = await login.getAccessToken(codeFromCallback); // { access_token, openid, unionid, ... }
const user = await login.getUserInfo(token.access_token, token.openid);

// 3) 续期
const refreshed = await login.refreshToken(token.refresh_token);
```

## 双 API 约定

每个能力都有「高层语义方法」与「逃生口」两种风格：

- 高层方法：`createPreAuthCode`、`queryAuth`、`getAuthorizerInfo`、`miniprogram.*` 等，封装好的强类型方法。
- 逃生口：`client.callAuthorizer()` / `client.callAuthorizerRaw()`（代授权方调任意接口）、`client.callComponent()`（调任意 component 接口）。任何官方新接口无需等 SDK 升级即可调用。

## 顶层导出

- 客户端：`ComponentClient` / `createComponentClient`、`WebsiteLoginClient` / `createWebsiteLogin`
- 回调：`createComponentWebhook`
- 小程序动作：`commit` / `getQrcode` / `submitAudit` / `getAuditStatus` / `release` / `modifyDomain` / … 及 `createMiniProgramApi`
- 从内核 re-export：`WxApiError`、`WXBizMsgCrypt`
- 全部相关类型（`ComponentClientConfig`、`AuthorizationInfo`、`SnsUserInfoResult` 等）
