# 微信支付 v3 加解密与签名（权威核验记录）

> 本文记录 `@wxstack/core` 与 `@wxstack/pay` 实现所依据的官方文档结论，均经官网核对。
> 凡涉及签名/加解密的实现细节以本文为准；本文与官方文档冲突时以官方为准。

## 1. 请求签名（RSA-SHA256）

待签名串（每行以 `\n` 结尾，含最后一行）：

```
HTTP方法\n
URL（含查询串的路径，如 /v3/pay/transactions/jsapi）\n
时间戳（秒）\n
随机串\n
请求报文主体（GET 等无体时为空字符串）\n
```

- 签名算法：`SHA256withRSA`，商户 API 私钥签名后 Base64。
- `Authorization` 头：
  `WECHATPAY2-SHA256-RSA2048 mchid="商户号",nonce_str="随机串",signature="签名",timestamp="时间戳",serial_no="商户证书序列号"`
- `serial_no` 为**商户证书**序列号（非平台证书）。五项无顺序要求。

来源：<https://pay.weixin.qq.com/doc/v3/merchant/4012365334>

## 2. 应答 / 回调验签

- 应答头：`Wechatpay-Timestamp`、`Wechatpay-Nonce`、`Wechatpay-Signature`、`Wechatpay-Serial`。
- 待验签串：`时间戳\n 随机串\n 报文主体\n`。
- 验签公钥来源二选一，按 `Wechatpay-Serial` 区分：
  - **平台证书模式**：序列号为平台证书序列号 → 用对应平台证书公钥验签。
  - **微信支付公钥模式**（官方推荐新商户）：序列号形如 `PUB_KEY_ID_*` → 用「微信支付公钥」验签。
- 强烈建议做时间戳重放校验（5 分钟窗口）。

来源：<https://pay.weixin.qq.com/doc/v3/merchant/4012071382>

## 3. 回调报文 / 平台证书解密（AES-256-GCM）

- 加密对象：`{ original_type, algorithm:"AEAD_AES_256_GCM", ciphertext, nonce, associated_data }`。
- 密钥：APIv3 密钥（32 字节）。`nonce` 12 字节；认证 tag 为 Base64 解码后密文的**末尾 16 字节**；`associated_data` 作为 AAD（可空）。
- 平台证书下载接口 `GET /v3/certificates`，每个 `encrypt_certificate` 的 `associated_data` 值为 `"certificate"`。
- 回调通知体：`{ id, create_time, event_type, resource_type, resource, summary }`，`resource` 即上述加密对象。

来源：<https://pay.weixin.qq.com/doc/v3/merchant/4012071382>

## 4. 敏感字段加解密（RSA-OAEP）

- 上行加密：用平台证书 / 微信支付公钥，`RSA_PKCS1_OAEP_PADDING` + `SHA-1`，结果 Base64；并在请求头加 `Wechatpay-Serial` 指明所用证书/公钥序列号。
- 下行解密：用商户私钥，同样 OAEP + SHA-1。

## 5. 前端调起支付参数（paySign）

- 小程序 / JSAPI 待签名串：`appId\n timeStamp\n nonceStr\n package\n`，`package` 形如 `prepay_id=xxx`；商户私钥 RSA-SHA256 + Base64。
- 返回前端字段：`timeStamp`、`nonceStr`、`package`、`signType:"RSA"`、`paySign`。
- 必须使用「实际调起支付的小程序 appid」，且与下单 appid 一致。

来源：<https://pay.weixin.qq.com/doc/v3/merchant/4012791898>

## 6. 关键端点（核对）

| 能力 | 方法 | 路径 |
|---|---|---|
| JSAPI 下单 | POST | `/v3/pay/transactions/jsapi` |
| App 下单 | POST | `/v3/pay/transactions/app` |
| Native 下单 | POST | `/v3/pay/transactions/native` |
| H5 下单 | POST | `/v3/pay/transactions/h5` |
| 查询（微信单号） | GET | `/v3/pay/transactions/id/{transaction_id}?mchid=` |
| 查询（商户单号） | GET | `/v3/pay/transactions/out-trade-no/{out_trade_no}?mchid=` |
| 关单 | POST | `/v3/pay/transactions/out-trade-no/{out_trade_no}/close` |
| 退款 | POST | `/v3/refund/domestic/refunds` |
| 退款查询 | GET | `/v3/refund/domestic/refunds/{out_refund_no}` |
| 平台证书 | GET | `/v3/certificates` |
| 交易账单 | GET | `/v3/bill/tradebill` |
| 资金账单 | GET | `/v3/bill/fundflowbill` |

来源：微信支付商户文档中心 <https://pay.weixin.qq.com/doc/v3/merchant/4012062524>
