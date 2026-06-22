# 接口目录（官方文档抓取与代码生成）

本目录是 wxstack「以官方文档为唯一权威」的落地记录：用 Playwright 实际打开各官方文档站点、
逐菜单抓取每个接口页，提取「方法 + 路径 + 标题 + 文档链接 + 请求/返回参数表」，据此为各包
生成**类型化的全量接口表**——其中 **1367 个端点带有从官方参数表抽取的精确 `Req`/`Resp` 类型**
（字段名、类型、必填、说明逐项落到 TS 接口与 JSDoc），其余为泛型薄封装。

## 覆盖现状

| 平台 | 包 | 已生成端点 | 文档站点 |
|---|---|---:|---|
| 小程序 | `@wxstack/mp` | **429**（429 精确类型） | developers.weixin.qq.com/miniprogram/dev/server/API |
| 公众号 | `@wxstack/oa` | **196**（196 精确类型） | developers.weixin.qq.com/doc/service/api |
| 开放平台 | `@wxstack/op` | **223**（216 精确类型） | developers.weixin.qq.com/doc/oplatform |
| 微信小店 | `@wxstack/shop` | **384**（384 精确类型） | developers.weixin.qq.com/doc/store |
| 微信支付 v3 | `@wxstack/pay` | **111**（泛型，手写方法已精确） | pay.weixin.qq.com/doc/v3 |
| 视频号 | `@wxstack/ch` | **49**（49 精确类型） | developers.weixin.qq.com/doc/channels |
| 小游戏 | `@wxstack/mg` | **93**（93 精确类型） | （与小程序共用 api.weixin.qq.com 子集） |
| 智能对话 | `@wxstack/ai` | **1**（泛型） | developers.weixin.qq.com/doc/aispeech |
| **合计** | | **1486（1367 精确类型）** | |
| 企业微信 | `@wxstack/wecom` | 见下 | developer.work.weixin.qq.com |

> 企业微信文档站点对程序化抓取做了限制（仅对浏览器「导航」请求返回正文，`fetch` 仅得到空壳，
> 且无内容 JSON 接口）。因此 wecom 暂未生成端点表，但其**完整文档目录**（3519 个文档节点的
> 标题与层级）已抓取并保存于 [`_raw/wecom-categories.json`](_raw/wecom-categories.json) 供参考；
> wecom 包以「手写高频方法 + 逃生口」覆盖（逃生口 `client.request()` 可调用任意企业微信接口）。

## 目录结构

- `<包>.json` —— 规范化端点目录：`{ id, method, path, title, cat, doc }[]`，由
  [`scripts/gen-endpoints.mjs`](../../scripts/gen-endpoints.mjs) 产出，也是各包
  `src/generated/endpoints.ts` 的数据来源。
- `_raw/` —— Playwright 抓取的原始 catalog（含每页 method/path/title），用于复现与审计。
- `pay-v3-crypto.md` —— 支付 v3 签名/加解密的官方核验记录。

## 生成的全量接口表怎么用

每个已抓取平台的客户端都暴露一个 `client.api`，覆盖该平台抓取到的全部端点，**自动鉴权/自动签名**：

```ts
import { createMpClient } from '@wxstack/mp';
const mp = createMpClient({ appId, appSecret });

// 高层语义方法（手写、强类型）：
await mp.getUnlimited({ scene: 'id=1', page: 'pages/index' });

// 全量接口表（按 operationId 调用任意已抓取端点，自动带 access_token）：
await mp.api.getUnlimited({ scene: 'id=1' });
await mp.api.msgSecCheck({ content: '...', version: 2, scene: 1, openid });
```

支付的路径常含占位符，用第三参 `params` 替换：

```ts
import { createPayClient } from '@wxstack/pay';
const pay = createPayClient({ mchid, appid, serialNo, privateKey, apiV3Key });

await pay.api.transactionsJsapi({ description, out_trade_no, amount, payer });
await pay.api.transactionsIdTransactionId(undefined, { mchid }, {
  params: { transaction_id: '4200001...' },        // 替换 {transaction_id}
});
```

开放平台区分 component 级与「代授权方」级：

```ts
import { createComponentClient } from '@wxstack/op';
const op = createComponentClient({ componentAppId, componentAppSecret, componentToken, componentEncodingAESKey });

await op.api.apiCreatePreauthcode({ component_appid });   // 自动带 component_access_token
await op.authorizerApi('wxAuthorizerAppId').menuCreate({ button: [...] }); // 自动带授权方令牌
```

## 端点元数据

各包还导出端点表常量，便于自省与生成文档：

```ts
import { mpEndpoints } from '@wxstack/mp';
// mpEndpoints.getUnlimited === { method: 'POST', path: '/wxa/getwxacodeunlimit', title: '获取不限制的小程序码', cat, doc }
```

## 复现

```bash
# 1) 用 Playwright 打开官方站点抓取（见会话记录 / scripts 内的浏览器抓取逻辑）→ docs/api-specs/_raw/<平台>-catalog.json
# 2) 据原始 catalog 生成端点表：
node scripts/gen-endpoints.mjs mp docs/api-specs/_raw/mp-catalog-full.json developers.weixin.qq.com
```
