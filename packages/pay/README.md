# @wxstack/pay

微信支付 v3 SDK。鉴权方式与公众号/小程序不同：**不使用 access_token**，而是「每个请求都用商户 API 私钥做 RSA-SHA256 签名」，应答用「平台证书」或「微信支付公钥」验签。

- 高层语义方法：`pay.transactions.jsapi(...)`、`pay.refunds.create(...)` 等。
- **逃生口**：`pay.request(method, path, opts)` / `pay.requestRaw(...)`，可调用任意尚未封装的 v3 端点（自动带签名）。

## 安装

```bash
pnpm add @wxstack/pay
```

## 快速上手

```ts
import fs from 'node:fs';
import { createPayClient } from '@wxstack/pay';

const pay = createPayClient({
  mchid: '190000xxxx',
  appid: 'wxabcdef...',                              // 调起支付时拼 paySign 用
  privateKey: fs.readFileSync('apiclient_key.pem'),  // 商户 API 私钥 PEM
  serialNo: 'AABBCCDDEE...',                          // 商户证书序列号
  apiV3Key: '0123456789abcdef0123456789abcdef',      // APIv3 密钥（32 字节）
  // 二选一的验签方式，见下文：
  wechatPayPublicKey: fs.readFileSync('pub_key.pem'),
  wechatPayPublicKeyId: 'PUB_KEY_ID_0000000000...',
});

// JSAPI 下单
const { prepay_id } = await pay.transactions.jsapi({
  appid: pay.appid,
  mchid: pay.mchid,
  description: '商品描述',
  out_trade_no: 'ORDER_20260622_0001',
  notify_url: 'https://example.com/wxpay/notify',
  amount: { total: 1, currency: 'CNY' },
  payer: { openid: 'oABC...' },
});

// 生成前端调起支付参数
const payParams = await pay.buildJsapiPayParams(prepay_id);
```

## 验签方式：微信支付公钥 vs 平台证书

微信支付提供两种应答/回调验签方式，任选其一即可：

### 1. 微信支付公钥模式（推荐）

在商户平台下载「微信支付公钥」（PEM）及其公钥 ID（形如 `PUB_KEY_ID_...`），配置：

```ts
createPayClient({
  // ...
  wechatPayPublicKey: fs.readFileSync('pub_key.pem'),
  wechatPayPublicKeyId: 'PUB_KEY_ID_0000000000...',
});
```

公钥不会过期，无需定期轮换，无需调用 `certificates()`。

### 2. 平台证书模式

预置平台证书，或运行时动态下载：

```ts
const pay = createPayClient({
  // ...
  platformCerts: [{ serialNo: '5157F09E...', certificate: certPem }], // 可选预置
});

// 运行时下载并载入平台证书（用 APIv3Key 解密 encrypt_certificate）
const certs = await pay.certificates();
```

平台证书会过期，需定期下载更新；`callback.verify` 在遇到未知序列号时会自动下载一次后重试。

## 常用高层方法

| 命名空间 | 方法 | 端点 |
| --- | --- | --- |
| `transactions` | `jsapi` / `app` / `native` / `h5` | `POST /v3/pay/transactions/{type}` |
| `transactions` | `queryById` / `queryByOutTradeNo` / `close` | 订单查询/关闭 |
| `refunds` | `create` / `query` | `/v3/refund/domestic/refunds` |
| `profitSharing` | `create` / `query` / `addReceiver` / `deleteReceiver` | 分账 |
| `transfer` | `batch` / `transferBills` | 商家转账（批次版 / 新版单笔） |
| `bill` | `tradeBill` / `fundFlowBill` / `downloadBill` | 账单与下载 |

## 逃生口

任何未封装或新上线的端点，都可以直接用逃生口调用（自动签名、自动验签）：

```ts
// 等价于内置的 transactions.queryByOutTradeNo
const order = await pay.request('GET', '/v3/pay/transactions/out-trade-no/ORDER_0001', {
  query: { mchid: pay.mchid },
});

// 下载类（需要原始字节）走 requestRaw
const resp = await pay.requestRaw('GET', '/v3/some/download', {
  responseType: 'arraybuffer',
  verify: false,
});
const buf = resp.raw; // Buffer
```

错误处理：非 2xx 时微信支付错误体 `{ code, message, detail }` 会被解析为 `WxApiError`，
其中字符串 `code`（如 `ORDER_CLOSED`）放在 `error.hint`，`errcode` 固定为 `-1`，原始内容在 `error.details`。

## 敏感字段加解密

收款人姓名、银行卡号等敏感字段需用平台公钥/微信支付公钥加密上行，并带 `Wechatpay-Serial` 头：

```ts
const { ciphertext, serial } = pay.encryptSensitive('张三');
await pay.request('POST', '/v3/profitsharing/receivers/add', {
  body: { /* ... */ name: ciphertext },
  sensitiveSerial: serial,
});

// 下行解密用商户私钥
const name = pay.decryptSensitive(someCiphertextFromWx);
```

## 回调（通知）处理

```ts
// 在你的 HTTP 框架中（务必拿到「原始报文体字符串」，不要用反序列化对象）
app.post('/wxpay/notify', async (req, res) => {
  const rawBody = await readRawBody(req); // 字符串
  try {
    const { event_type, resource } = await pay.callback.decrypt({
      headers: req.headers,
      body: rawBody,
    });
    if (event_type === 'TRANSACTION.SUCCESS') {
      // resource 即解密后的订单对象：out_trade_no、transaction_id、amount 等
    }
    res.status(200).json({ code: 'SUCCESS', message: '成功' });
  } catch (e) {
    res.status(500).json({ code: 'FAIL', message: '失败' });
  }
});
```

`callback.decrypt` 默认会先验签再解密；如需单独验签可调 `pay.callback.verify(headers, rawBody)`。

## 调起支付参数

```ts
// JSAPI / 小程序
const jsapiParams = await pay.buildJsapiPayParams(prepay_id);
// { timeStamp, nonceStr, package, signType: 'RSA', paySign }

// App（额外含 partnerid=mchid）
const appParams = await pay.buildAppPayParams(prepay_id);
// { appid, timestamp, noncestr, prepayid, partnerid, package: 'Sign=WXPay', sign }
```

## 服务商模式

构造时传 `sp`，并在下单 body 自填 `sp_appid` / `sp_mchid` / `sub_mchid` / `sub_appid`（本包不强转字段）：

```ts
const pay = createPayClient({
  mchid: '服务商商户号',
  // ...
  sp: { spMchid: '服务商商户号', spAppid: '服务商 appid' },
});

await pay.transactions.jsapi({
  sp_appid: 'wx...',
  sp_mchid: '服务商商户号',
  sub_mchid: '特约商户号',
  // ...
});
```
