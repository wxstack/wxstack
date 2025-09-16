---
title: 快速开始
---

# 快速开始

## 安装

::: code-group
```bash [pnpm]
pnpm add @wxstack/oa
```

```bash [npm]
npm add @wxstack/oa
```

```bash [yarn]
yarn add @wxstack/oa
```

```bash [bun]
bun add @wxstack/oa
```

:::


::: tip 注意

wxstack 是仅 ESM 的软件包。不要使用 `require()` 导入它，并确保最新的 `package.json` 包含 `"type": "module"`

我们推荐使用支持 ESM 的 Node.js 版本（16+）, 并且使用pnpm作为包管理器以获得最佳体验。

:::

## 创建客户端

```ts
import { createClient } from '@wxstack/oa';

const client = createClient({
  appId: 'wx_your_appid',
  appSecret: 'your_secret'
});
```

## 测试调用

```ts
await client.ping(); // 示例
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
