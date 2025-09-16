---
title: 快速开始
---

# 快速开始

- 安装：`npm i @wxstack/oa`
- 初始化：

```ts
import { createClient } from '@wxstack/oa';

const client = createClient({
  appId: 'wx_your_appid',
  appSecret: 'your_secret'
});
```

- 调用：

```ts
await client.functionName(); // 示例
```

### createClient(options)

可用的 options：

- `appId` `string` （必填）：- 必填
- `appSecret` `string` （必填）：- 必填
- `domain` `('auto'|'disaster'|'shanghai'|'sh'|'shenzhen'|'sz'|'hongkong'|'hk')` （可选），默认：`'auto'`
- `timeoutMs` `number` （可选），默认：`15000`：
- `retry` `{retries?:number, delayMs?:number}` （可选）
- `tokenMode` `('normal'|'stable')` （可选），默认：`'normal'`
- `tokenPlacement` `('query'|'header')` （可选），默认：`'query'`
- `tokenKey` `string` （可选），默认：`'access_token'`
- `store` `import('./auth/tokenStore.js').InMemoryTokenStore` （可选）
