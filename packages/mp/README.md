# @wxstack/mp

微信小程序服务端 SDK，基于 `@wxstack/core` 内核，内置自动鉴权（access_token）、自动重试 / 多接入点故障转移、统一错误解包。

## 安装

```bash
pnpm add @wxstack/mp @wxstack/core
# 或 npm i / yarn add
```

要求 Node.js 18+（依赖全局 `fetch` / `FormData` / `Blob`）。

## 快速上手

```ts
import { createMpClient } from '@wxstack/mp';

const mp = createMpClient({
  appId: 'wx1234567890',
  appSecret: 'your-app-secret',
  // 可选：
  // tokenMode: 'stable',   // 稳定版 access_token，适合多实例部署
  // domain: 'sh',          // 接入点：sh / sz / hk / disaster ...
  // store, logger, transport, timeoutMs, retry
});

// 登录：用前端 wx.login 的 code 换取 openid / session_key
const session = await mp.code2Session(jsCode);

// 解密 encryptedData（自动校验水印 appid）
const data = mp.decryptData(session.session_key, encryptedData, iv);

// 获取手机号
const { phone_info } = await mp.getPhoneNumber({ code });

// 小程序码（返回 Buffer，可直接写文件 / 上传 OSS）
const png = await mp.getUnlimited({ scene: 'id=42', page: 'pages/index/index' });

// 订阅消息
await mp.sendSubscribeMessage({
  touser: session.openid,
  template_id: 'TEMPLATE_ID',
  page: 'pages/index/index',
  data: { thing1: { value: '示例' } },
});

// 订阅消息模板管理（子命名空间）
const { priTmplId } = await mp.subscribe.addTemplate({ tid: '123', kidList: [1, 2] });
```

## 已封装能力

- 登录 / 用户信息：`code2Session`、`decryptData`、`getPhoneNumber`、`getUserRiskRank`
- 订阅消息：`sendSubscribeMessage`，模板管理 `subscribe.*`（addTemplate / delTemplate / getTemplateList / getCategory / getPubTemplateKeyWordsById / getPubTemplateTitleList）
- 小程序码 / 二维码（返回 `Buffer`）：`getQRCode`、`getUnlimited`、`createQRCode`
- URL：`generateScheme` / `queryScheme` / `generateUrlLink` / `queryUrlLink` / `generateShortLink`
- 内容安全：`msgSecCheck`、`mediaCheckAsync`
- 客服消息 / 素材：`sendCustomMessage`、`setTyping`、`uploadTempMedia`、`getTempMedia`
- 数据分析：`getDailySummary` / `getDailyVisitTrend` / `getWeeklyVisitTrend` / `getMonthlyVisitTrend` / `getVisitDistribution` / `getDailyRetain` / `getWeeklyRetain` / `getMonthlyRetain` / `getVisitPage` / `getUserPortrait`
- 发货信息管理：`uploadShippingInfo` / `uploadCombinedShippingInfo` / `getOrder` / `isTradeManaged` / `notifyConfirmReceive` / `setMsgJumpPath`
- SOTER：`verifySoterSignature`
- 物流助手（核心端点）：`express.*`
- 直播（核心端点）：`broadcast.*`

## 逃生口：调用任意未封装端点

物流助手、直播仅封装了少量核心端点，其余接口（以及微信后续新增的接口）都可以通过基类逃生口直接调用，**自动带上 access_token**：

```ts
// 自动解包（errcode!=0 抛 WxApiError），适合绝大多数 JSON 接口
const res = await mp.request({
  method: 'POST',
  url: '/wxaapi/broadcast/goods/getapproved',
  body: { status: 2, offset: 0, limit: 30 },
});

// 需要原始字节 / 响应头（二进制下载）时用 requestRaw
const resp = await mp.requestRaw({
  method: 'GET',
  url: '/some/binary/endpoint',
  responseType: 'arraybuffer',
});
const buf = resp.raw; // Buffer

// 不需要鉴权的接口可传 auth:false
await mp.request({ url: '/some/public/endpoint', auth: false });
```

## 二进制与上传说明

- 二进制下载（小程序码、临时素材等）内部使用 `requestRaw({ responseType: 'arraybuffer' })` 返回 `Buffer`。小程序码接口在失败时会返回 JSON 错误体，SDK 已自动识别并抛出 `WxApiError`。
- 上传临时素材使用全局 `FormData` + `Blob` 装配 multipart，`file` 接受 `Buffer` / `Uint8Array` / `ArrayBuffer` / `Blob`。

## 错误处理

所有业务错误（`errcode !== 0`）会抛出 `WxApiError`（从本包再导出）：

```ts
import { WxApiError } from '@wxstack/mp';

try {
  await mp.sendSubscribeMessage({ /* ... */ });
} catch (err) {
  if (err instanceof WxApiError) {
    console.error(err.errcode, err.errmsg, err.hint);
  }
}
```

命中 `access_token` 失效错误码时，内核会自动刷新令牌并重放一次请求，无需手动处理。

## License

MIT
