# wxstack 微信生态 Node SDK

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)](https://nodejs.org/)
[![ESM Only](https://img.shields.io/badge/module-ESM-brightgreen.svg)](https://nodejs.org/api/esm.html)

> 🚀 现代化的微信生态开发工具包，基于 Node.js，采用 ESM 模块设计

一个功能完整、易于使用的微信生态开发 SDK，旨在简化微信公众号、小程序、企业微信、支付等功能的集成开发。

## ✨ 特性

- 🎯 **模块化设计** - 按需安装，轻量高效
- 🔒 **类型安全** - 完整的 TypeScript 类型定义
- 🌐 **多域名支持** - 自动故障转移和负载均衡
- 🔄 **智能重试** - 内置指数退避重试机制
- 🎨 **现代化 API** - Promise/async-await 原生支持
- 📦 **ESM 优先** - 面向未来的模块系统
- 🛡️ **错误处理** - 统一的错误类型和处理机制

## 📦 功能模块

| 包名 | 状态 | 描述 | 版本 |
|------|------|------|------|
| `@wxstack/oa` | ✅ **可用** | 公众号（订阅号/服务号） | ![npm](https://img.shields.io/npm/v/@wxstack/oa) |
| `@wxstack/pay` | 🚧 开发中 | 微信支付 | - |
| `@wxstack/mp` | 📋 计划中 | 小程序 | - |
| `@wxstack/wecom` | 📋 计划中 | 企业微信 | - |
| `@wxstack/op` | 📋 计划中 | 微信开放平台 | - |
| `@wxstack/core` | 📋 计划中 | 核心功能（统一凭据管理） | - |
| `@wxstack/shop` | 📋 计划中 | 微信小店 | - |
| `@wxstack/ch` | 📋 计划中 | 视频号 | - |
| `@wxstack/mg` | 📋 计划中 | 小游戏 | - |
| `@wxstack/ai` | 📋 计划中 | 智能对话 | - |

## 🚀 快速开始

### 安装

推荐使用 pnpm 进行安装：

```bash
# 安装公众号 SDK
pnpm add @wxstack/oa

# 或使用其他包管理器
npm install @wxstack/oa
yarn add @wxstack/oa
bun add @wxstack/oa
```

### 基础用法

```javascript
import { createClient } from '@wxstack/oa';

// 创建客户端
const client = createClient({
  appId: 'your-app-id',
  appSecret: 'your-app-secret',
  // 可选配置
  domain: 'auto',        // 域名选择：auto | shanghai | shenzhen | hongkong
  timeoutMs: 15000,      // 请求超时时间
  tokenMode: 'normal',   // Token 模式：normal | stable
});

// 测试连接
const result = await client.callbackCheck({ action: 'all' });
console.log('API 测试结果:', result);

// 获取用户信息
const userInfo = await client.getUserInfo({ openid: 'user-openid' });
console.log('用户信息:', userInfo);

// 发送模板消息
await client.sendTemplateMessage({
  touser: 'user-openid',
  template_id: 'template-id',
  data: {
    first: { value: '消息标题' },
    keyword1: { value: '关键信息1' },
    keyword2: { value: '关键信息2' },
    remark: { value: '备注信息' }
  }
});
```

## 🎯 公众号功能概览

### 🔑 基础功能
- **接口调试** - API 连通性测试、IP 白名单管理
- **域名管理** - 多域名支持，自动故障转移

### 👥 用户管理
- **用户信息** - 获取用户基本信息、用户列表
- **用户分组** - 创建、查询、移动用户分组
- **黑名单** - 拉黑、取消拉黑用户

### 📤 消息管理
- **群发消息** - 文本、图文、视频等多媒体消息群发
- **模板消息** - 模板消息发送、模板管理
- **客服消息** - 一对一客服消息发送（仅服务号）
- **消息加密** - 消息加解密、签名验证

### 🎨 素材管理
- **多媒体素材** - 图片、语音、视频上传与管理
- **图文素材** - 图文消息创建、编辑、删除
- **素材统计** - 素材使用情况统计

### 📱 菜单管理
- **自定义菜单** - 创建、查询、删除菜单
- **个性化菜单** - 条件菜单设置
- **菜单匹配** - 测试菜单匹配规则

### 🔗 二维码与短链
- **临时二维码** - 生成带场景值的临时二维码
- **永久二维码** - 生成永久二维码
- **短链接** - 长链接转短链接

### 📊 数据统计
- **用户统计** - 用户增减、累计用户数据
- **图文统计** - 图文阅读、分享数据
- **消息统计** - 消息发送、接收数据
- **接口统计** - API 调用次数统计

## 🛠️ 高级配置

```javascript
const client = createClient({
  appId: 'your-app-id',
  appSecret: 'your-app-secret',
  
  // 域名配置
  domain: 'shanghai',    // 指定服务器：shanghai | shenzhen | hongkong
  
  // 超时和重试
  timeoutMs: 30000,      // 30秒超时
  retry: {
    retries: 3,          // 重试3次
    delayMs: 1000        // 重试间隔1秒
  },
  
  // Token 配置
  tokenMode: 'stable',          // 使用稳定版 access_token
  tokenPlacement: 'header',     // Token 放在请求头
  tokenKey: 'authorization',    // 自定义 Token 字段名
  
  // 自定义 Token 存储
  store: new CustomTokenStore()
});
```

## 🔧 中间件支持

### Express 中间件

```javascript
import express from 'express';
import { createExpressMiddleware } from '@wxstack/oa';

const app = express();

// 创建微信消息处理中间件
const wxMiddleware = createExpressMiddleware({
  appId: 'your-app-id',
  token: 'your-token',
  encodingAESKey: 'your-encoding-aes-key', // 可选，用于消息加密
  
  // 消息处理器
  async onTextMessage(message, context) {
    console.log('收到文本消息:', message.Content);
    return '收到你的消息：' + message.Content;
  },
  
  async onClickEvent(event, context) {
    console.log('菜单点击事件:', event.EventKey);
    return '菜单功能开发中...';
  }
});

app.use('/wechat', wxMiddleware);
app.listen(3000);
```

## 📖 文档

- 📚 [完整文档](https://wxstack.b1397kb.com)
- 🚀 [快速开始](https://wxstack.b1397kb.com/oa/guide/getting-started)
- 📖 [API 参考](https://wxstack.b1397kb.com/oa/api/)

## 🛡️ 错误处理

```javascript
import { WxApiError, WxHttpError, WxCryptoError } from '@wxstack/oa';

try {
  const result = await client.getUserInfo({ openid: 'invalid-openid' });
} catch (error) {
  if (error instanceof WxApiError) {
    console.error('微信 API 错误:', error.errcode, error.errmsg);
  } else if (error instanceof WxHttpError) {
    console.error('网络请求错误:', error.status, error.message);
  } else if (error instanceof WxCryptoError) {
    console.error('加密解密错误:', error.message);
  }
}
```

## 🔒 安全特性

- **签名验证** - 自动验证微信服务器请求签名
- **消息加密** - 支持消息加密模式
- **Token 管理** - 智能 Token 缓存和刷新
- **IP 白名单** - 支持 IP 白名单验证

## 💻 开发环境

### 系统要求

- **Node.js** >= 18.0.0
- **包管理器** pnpm（推荐）/ npm / yarn

### 本地开发

```bash
# 克隆项目
git clone https://github.com/wxstack/wxstack.git
cd wxstack

# 安装依赖
pnpm install

# 构建文档
pnpm run docs:dev

# 构建生产版本
pnpm run docs:build
```

## 🤝 贡献指南

我们欢迎所有形式的贡献！请阅读 [贡献指南](CONTRIBUTING.md) 了解详情。

### 如何贡献

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 开发规范

- 使用 ESM 模块格式
- 遵循现有代码风格
- 添加必要的测试用例
- 更新相关文档

## 📄 许可证

本项目基于 [MIT](LICENSE) 许可证开源。

## 🙏 致谢

感谢所有为 wxstack 项目做出贡献的开发者们！

---

<div align="center">

**[官网](https://wxstack.b1397kb.com)** • **[文档](https://wxstack.b1397kb.com/oa/guide/getting-started)** • **[GitHub](https://github.com/wxstack/wxstack)** • **[问题反馈](https://github.com/wxstack/wxstack/issues)**

</div>



