# @wxstack/ch

微信**视频号**（视频号小店 / 视频号直播）服务端 SDK，基于 [`@wxstack/core`](../core) 内核。

> 坦诚说明：视频号对外服务端 API 面较窄且仍在持续演进。本包采用务实策略，
> **以「标准 access_token 鉴权 + 逃生口 + 已开放接口薄封装」为主，不承诺大而全**。
> 凡是本包尚未封装、或官方近期调整过的接口，都可以通过**逃生口**直接调用——
> 鉴权、令牌失效自动重刷等通用能力照样生效。

## 安装

```bash
pnpm add @wxstack/ch @wxstack/core
```

## 快速上手

```ts
import { createChClient } from '@wxstack/ch';

const ch = createChClient({
  appId: 'wx...',
  appSecret: '...',
  // 可选：多实例部署建议用稳定版令牌
  // tokenMode: 'stable',
});

// 高层语义方法（端点取自官方「视频号助手 API 接口列表」，路径已核对）
const finderInfo = await ch.getFinderInfo();          // 账号属性
const lives = await ch.getLiveRecordList({ /* 分页 */ }); // 直播记录列表
const dashboard = await ch.getLiveDashboardList();    // 直播大屏列表
await ch.addWindowProduct({ /* 商品 */ });            // 橱窗添加商品
const leads = await ch.getLeadsInfo({ request_id: '...' }); // 留资信息
const compass = await ch.getCompassOverall({ /* 日期 */ }); // 罗盘整体数据
```

## 逃生口（重点）

任何**未被本包封装**的视频号端点，都可以用继承自基类的逃生口直接调用，
请求会自动携带 `access_token`，并在令牌失效时自动刷新重放一次：

```ts
// 自动解包：返回 data，errcode!=0 抛 WxApiError
const data = await ch.request({
  method: 'POST',
  url: '/channels/ec/some/new/api', // 任意官方端点路径
  body: { /* 透传请求体 */ },
});

// 需要原始响应（含字节，用于下载等）时用 requestRaw
const resp = await ch.requestRaw({
  method: 'GET',
  url: '/channels/ec/some/file',
  responseType: 'arraybuffer',
});
const buf = resp.raw; // Buffer
```

> 换言之：高层方法是「便利层」，逃生口才是覆盖**全部**视频号接口的兜底通道。
> 当某个高层方法与官方最新接口不一致时，请优先改用逃生口。

## 错误处理

```ts
import { WxApiError } from '@wxstack/ch';

try {
  await ch.getFinderInfo();
} catch (e) {
  if (e instanceof WxApiError) {
    console.error(e.errcode, e.errmsg);
  }
}
```

## 已封装方法一览

| 方法 | 路径 |
| --- | --- |
| `getFinderInfo(params?)` | `/channels/finderlive/get_finder_attr_by_appid` |
| `getLiveRecordList(params?)` | `/channels/ec/finderlive/getfinderliverecordlist` |
| `getLiveDashboardList(params?)` | `/channels/livedashboard/getlivelist` |
| `addWindowProduct(params?)` | `/channels/ec/window/product/add` |
| `getLeadsInfo(params?)` | `/channels/leads/get_leads_info_by_request_id` |
| `getCompassOverall(params?)` | `/channels/ec/compass/finder/overall/get` |

以上路径取自官方「视频号助手 API 接口列表」；**请求字段以官方文档为准**，未封装接口请走逃生口。

## 参考

- 视频号官方文档：<https://developers.weixin.qq.com/doc/channels/>
- 内核能力（传输/令牌/加解密/错误体系）：[`@wxstack/core`](../core)

## License

MIT
