# @wxstack/shop

微信小店（原视频号小店）服务端 SDK。

微信小店自 2024 年起打通公众号 / 小程序 / 视频号，服务端接口位于 `api.weixin.qq.com`，路径多在 `/channels/ec/` 下，鉴权使用对应主体的标准 `access_token`（放在 query）。

> 由于小店接口仍在快速演进，本包策略为「鉴权 + 逃生口 + 高频接口」。**未封装的接口请直接使用逃生口 `client.request()` / `client.requestRaw()`。**

## 安装

```bash
npm i @wxstack/shop
# 或 pnpm add @wxstack/shop / yarn add @wxstack/shop
```

## 快速上手

```ts
import { createShopClient } from '@wxstack/shop';

const shop = createShopClient({
  appId: 'wx...',        // 主体 appid（公众号 / 小程序 / 视频号）
  appSecret: '...',
  // tokenMode: 'stable', // 可选：多实例部署建议用稳定版 token
});

// 商品
await shop.product.add({ /* 商品 SPU/SKU 信息，字段以官方文档为准 */ });
const detail = await shop.product.get({ product_id: '123' });
await shop.product.listing({ product_id: '123' });   // 上架
await shop.product.delisting({ product_id: '123' }); // 下架
const list = await shop.product.getList({ page_size: 20 });

// 订单与物流
const order = await shop.order.get({ order_id: 'o123' });
await shop.order.getList({ status: 10, page_size: 20 });
await shop.order.search({ /* 检索条件 */ });
await shop.order.uploadDeliveryInfo({ order_id: 'o123', /* 物流信息 */ });

// 售后
await shop.aftersale.getList({ page_size: 20 });
await shop.aftersale.accept({ aftersale_id: 'a123' });
await shop.aftersale.reject({ aftersale_id: 'a123', reason: '...' });

// 优惠券
await shop.coupon.create({ /* 券信息 */ });
await shop.coupon.getList();
```

> 高层方法均为薄封装：`body` 透传到对应 `/channels/ec/...` 路径。字段约束以官方文档为准，未做强类型校验。

## 逃生口（最重要）

SDK 只封装高频接口。**任何未封装的小店接口，都可以用继承自基类的逃生口直接调用**，同样自动带令牌、自动在令牌失效时刷新重放：

```ts
// JSON 接口
const r = await shop.request({
  method: 'POST',
  url: '/channels/ec/some/new/endpoint',
  body: { /* ... */ },
});

// 需要原始响应 / 二进制（如导出文件）
const resp = await shop.requestRaw({
  method: 'POST',
  url: '/channels/ec/some/export',
  body: { /* ... */ },
  responseType: 'arraybuffer',
});
const buf = resp.raw; // Buffer
```

也可直接导入按域分组的纯函数（便于树摇）：

```ts
import { getProduct, getOrderList } from '@wxstack/shop';
await getProduct(shop, { product_id: '123' });
```

## 事件回调

小店事件（订单 / 售后 / 商品审核等）沿用微信统一消息回调机制，本包复用内核回调内核：

```ts
import { createShopWebhook } from '@wxstack/shop';

const hook = createShopWebhook({
  token: 'xxx',
  encodingAESKey: '43位密钥', // 安全模式
  receiveId: 'wx...appid',
  onMessage: (msg) => {
    // 按 msg.Event 自行分发；未覆盖的事件可在此兜底处理
    console.log(msg.Event);
  },
});

// 在框架适配层调用：
const res = await hook.handle({ method, rawBody, query, headers });
// res = { status, body, contentType }
```

> 事件类型仍在演进，本包不约束具体 `Event`，请在 `onMessage` / `handlers` 中按 `message.Event` 自行分发。

## 错误处理

`errcode != 0` 时 `request()` 会抛 `WxApiError`（本包已 re-export）：

```ts
import { WxApiError } from '@wxstack/shop';

try {
  await shop.product.get({ product_id: 'bad' });
} catch (e) {
  if (e instanceof WxApiError) {
    console.error(e.errcode, e.errmsg);
  }
}
```

## 许可

MIT
