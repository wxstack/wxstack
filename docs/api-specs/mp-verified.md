# 小程序（@wxstack/mp）端点核验记录

> 以下端点已对照官方文档（developers.weixin.qq.com/miniprogram/dev/OpenApiDoc）逐一核对，method/path 一致。

| 能力 | 方法 | 路径 | 核验 |
|---|---|---|---|
| 登录 code2Session | GET | `/sns/jscode2session` | ✅ |
| 获取手机号 | POST | `/wxa/business/getuserphonenumber` | ✅ |
| 订阅消息发送 | POST | `/cgi-bin/message/subscribe/send` | ✅ |
| 不限量小程序码 getUnlimited | POST | `/wxa/getwxacodeunlimit`（二进制） | ✅ |
| 小程序码 getQRCode | POST | `/wxa/getwxacode`（二进制） | ✅ |
| 文本内容安全 msgSecCheck | POST | `/wxa/msg_sec_check` | ✅ |
| 生成 URL Link | POST | `/wxa/generate_urllink` | ✅ |
| 发货信息录入 | POST | `/wxa/sec/order/upload_shipping_info` | ✅ |

其余已实现端点（订阅模板管理 `/wxaapi/newtmpl/*`、URL Scheme/ShortLink、数据分析 `/datacube/*`、客服消息 `/cgi-bin/message/custom/*`、物流 `/cgi-bin/express/*`、直播 `/wxaapi/broadcast/*`、风控/soter 等）均遵循同一 OpenApiDoc 路径规范；未覆盖端点由逃生口 `client.request()` 兜底。

来源：<https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/>
