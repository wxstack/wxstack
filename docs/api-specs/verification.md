# 官方文档接口核验记录

> 本文记录各业务包高层方法的端点已对照**官方文档**核验的情况。原则：只采信官方站点；
> 凡与官方不一致者已修正；官方未公开稳定端点者不臆造，改以「可配置 + 逃生口」兜底。

## 核验结论一览

| 包 | 抽检/核验端点 | 结果 | 来源 |
|---|---|---|---|
| mp | `/sns/jscode2session`、`/wxa/business/getuserphonenumber`、`/cgi-bin/message/subscribe/send`、`/wxa/getwxacodeunlimit`、`/wxa/getwxacode`、`/wxa/msg_sec_check`、`/wxa/generate_urllink`、`/wxa/sec/order/upload_shipping_info` | ✅ 全部一致 | developers.weixin.qq.com/miniprogram/dev/OpenApiDoc |
| pay | 请求签名串/Authorization 头、AES-GCM 回调解密、paySign、`/v3/refund/domestic/refunds`、`/v3/fund-app/mch-transfer/transfer-bills` | ✅ 一致；并补充新版转账查询/撤销、批次查询端点 | pay.weixin.qq.com/doc/v3/merchant |
| wecom | `/cgi-bin/gettoken`、`/cgi-bin/message/send`、`/cgi-bin/user/get`、`/cgi-bin/auth/getuserinfo` | ✅ 一致（OAuth 用新路径 auth/getuserinfo） | developer.work.weixin.qq.com/document |
| op | `/cgi-bin/component/api_component_token`、`/cgi-bin/component/api_query_auth`、ticket 每 10 分钟推送、令牌 2 小时 | ✅ 一致 | developers.weixin.qq.com/doc/oplatform |
| oa | `/cgi-bin/user/info` 等（自旧版「逐方法带 @see」实现忠实移植，139 方法） | ✅ 抽检一致 | developers.weixin.qq.com/doc/service |
| shop | `/channels/ec/order/get`、`/channels/ec/product/{add,get,list/get,listing,delisting}` | ✅ 一致 | developers.weixin.qq.com/doc/store/shop |
| mg | `POST /cgi-bin/midas/pay`（沙箱 `/cgi-bin/midas/sandbox/pay`）、HMAC-SHA256 签名 | ✅ 一致 | developers.weixin.qq.com/minigame/dev/api-backend/midas-payment |
| ch | **已修正**为官方「视频号助手 API 接口列表」中的真实端点（见下） | ✅ 修正后一致 | developers.weixin.qq.com/doc/channels/api/channels |
| ai | 平台未公开统一 HTTP 端点 → **不臆造**，改为可配置 baseURL + 鉴权 + 逃生口 | ✅ 诚实处理 | developers.weixin.qq.com/doc/aispeech/platform |

## ch 修正明细

原代理生成的 `/channels/ec/account/info/get`、`/channels/ec/basicinfo/get`、`/channels/ec/live/info/get` 为推断路径，
已对照官方接口列表更正为：

| 方法 | 真实路径 |
|---|---|
| getFinderInfo | `/channels/finderlive/get_finder_attr_by_appid` |
| getLiveRecordList | `/channels/ec/finderlive/getfinderliverecordlist` |
| getLiveDashboardList | `/channels/livedashboard/getlivelist` |
| addWindowProduct | `/channels/ec/window/product/add` |
| getLeadsInfo | `/channels/leads/get_leads_info_by_request_id` |
| getCompassOverall | `/channels/ec/compass/finder/overall/get` |

## ai 修正明细

原代理臆造了 `/cgi-bin/aispeech/*` 路径与「标准 access_token」鉴权假设。由于该平台服务端接口按机器人单独开通、
未公开统一端点，已重写为：可配置 `baseURL`（默认 chatbot.weixin.qq.com）+ 三选一鉴权（平台 token / access_token / 无）+
`query(path, params)` / `call(method, path, opts)` / 逃生口，**不再硬编码不存在的端点**。

## 覆盖面说明

微信全生态服务端接口数以千计且持续演进，逐一固化为高层方法不现实。本 SDK 的覆盖策略：
**核心鉴权/加解密严格按官方核验**（错误不可逆的部分），**高频端点提供带 `@see` 的高层方法**，
**长尾与新增端点由各客户端的逃生口 `request()`/`requestRaw()` 保证 100% 可达**。
