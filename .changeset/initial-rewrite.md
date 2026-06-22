---
'@wxstack/core': minor
'@wxstack/oa': minor
'@wxstack/pay': minor
'@wxstack/mp': minor
'@wxstack/wecom': minor
'@wxstack/op': minor
'@wxstack/shop': minor
'@wxstack/ch': minor
'@wxstack/mg': minor
'@wxstack/ai': minor
'wxstack': minor
---

重构为 TypeScript 双格式（ESM + CJS）monorepo：抽出 `@wxstack/core` 内核（HTTP/令牌/加解密/错误/回调/存储/日志），
各业务包基于内核实现高层方法与自动鉴权逃生口，覆盖公众号、微信支付 v3、小程序、企业微信、开放平台、
微信小店、视频号、小游戏与智能对话，并提供聚合包 `wxstack`。
