# 贡献指南

感谢您对 wxstack 项目的关注和贡献！本文档将帮助您了解如何参与项目开发。

## 🚀 开始贡献

### 开发环境设置

1. **Fork 项目**
   ```bash
   # 在 GitHub 上 Fork 项目到您的账户
   ```

2. **克隆项目**
   ```bash
   git clone https://github.com/your-username/wxstack.git
   cd wxstack
   ```

3. **安装依赖**
   ```bash
   # 推荐使用 pnpm
   pnpm install
   
   # 或使用其他包管理器
   npm install
   yarn install
   ```

4. **常用命令**
   ```bash
   pnpm build       # 构建全部包（turbo 编排，ESM + CJS + 类型声明）
   pnpm typecheck   # 类型检查
   pnpm test        # 运行 Vitest 单元测试
   pnpm lint        # Biome 代码规范检查
   pnpm format      # Biome 自动格式化
   pnpm docs:dev    # 启动文档开发服务器
   ```

### 项目结构

```
wxstack/
├── packages/                 # TypeScript 源码（pnpm workspace + turbo）
│   ├── core/                # @wxstack/core 内核（HTTP/令牌/加解密/错误/回调/存储/日志）
│   │   ├── src/             # 源码
│   │   └── test/            # Vitest 单元测试
│   ├── oa/  pay/  mp/  wecom/  op/  shop/  ch/  mg/  ai/   # 各业务包（仅依赖 core）
│   │   ├── src/             # client.ts / types.ts / actions/ / index.ts
│   │   └── README.md
│   └── wxstack/             # 聚合 meta 包
├── docs/                    # VitePress 文档
│   ├── api-specs/          # 官方文档权威核验记录（端点 DSL）
│   ├── guide/  oa/         # 指南与各业务文档
│   └── index.md            # 首页
├── examples/               # ESM / CJS 消费示例与冒烟测试
├── .changeset/             # Changesets 版本管理
├── tsconfig.base.json  turbo.json  biome.json  pnpm-workspace.yaml
└── README.md
```

> 每个包统一产物：`dist/index.js`（ESM）、`dist/index.cjs`（CJS）、`dist/index.d.ts` / `dist/index.d.cts`（类型）。
> 发布前由 `publint` + `attw` 校验双发行正确性。

## 📝 贡献类型

### 🐛 问题修复

1. 在 [Issues](https://github.com/wxstack/wxstack/issues) 中查找相关问题
2. 如果问题不存在，请先创建 Issue 描述问题
3. Fork 项目并创建修复分支
4. 修复问题并添加测试
5. 提交 Pull Request

### ✨ 新功能开发

1. 先在 Issues 中讨论新功能的必要性
2. 等待维护者确认后开始开发
3. 遵循现有 API 设计模式
4. 添加完整的文档和示例
5. 确保向后兼容

### 📖 文档改进

1. 修正文档中的错误
2. 添加缺失的示例
3. 改进文档结构和可读性
4. 翻译文档到其他语言

### 🔧 代码重构

1. 提出重构方案并讨论
2. 确保不破坏现有 API
3. 提供迁移指南（如需要）
4. 更新相关文档

## 🛠️ 开发规范

### 代码风格

- **源码语言**: TypeScript（strict 模式）；产物为 ESM + CJS 双格式 + 类型声明
- **编码风格**: 由 Biome 统一约束（`pnpm format` / `pnpm lint`）
- **注释语言**: 注释、文档字符串与用户可见文本一律使用简体中文；标识符用英文
- **文档依据**: 高层方法须以 `@see` 标注官方文档 URL，只采信官方站点
- **命名规范**: 
  - 文件名使用 kebab-case
  - 函数名使用 camelCase
  - 常量使用 UPPER_SNAKE_CASE

### 提交规范

使用语义化提交信息：

```bash
# 功能添加
feat: add user group management API

# 问题修复
fix: handle timeout error in token refresh

# 文档更新
docs: update API examples in README

# 代码重构
refactor: optimize error handling logic

# 性能优化
perf: improve token caching mechanism

# 测试相关
test: add unit tests for crypto functions
```

### API 设计原则

1. **一致性**: 保持与现有 API 的一致性
2. **简洁性**: API 应该易于理解和使用
3. **扩展性**: 考虑未来功能扩展的可能性
4. **错误处理**: 提供清晰的错误信息和处理机制

### 文档要求

- **JSDoc 注释**: 所有公开函数必须有完整的 JSDoc
- **示例代码**: 提供实际可运行的示例
- **参数说明**: 详细说明所有参数的类型和含义
- **返回值**: 说明返回值的结构和类型

示例：
```javascript
/**
 * 获取用户基本信息
 * @param {object} params - 请求参数
 * @param {string} params.openid - 用户的 OpenID
 * @param {string} [params.lang='zh_CN'] - 语言类型
 * @returns {Promise<object>} 用户信息对象
 * @throws {WxApiError} 当 API 调用失败时抛出
 * 
 * @example
 * const userInfo = await client.getUserInfo({ 
 *   openid: 'user-openid' 
 * });
 * console.log(userInfo.nickname);
 */
export function getUserInfo(params) {
  // 实现代码
}
```

## ✅ 测试要求

### 运行测试

```bash
# 运行所有测试
pnpm test

# 运行特定模块测试
pnpm test:oa

# 生成测试覆盖率报告
pnpm test:coverage
```

### 测试规范

1. **单元测试**: 为所有核心功能编写单元测试
2. **集成测试**: 测试 API 接口的完整流程
3. **模拟测试**: 使用 mock 避免真实 API 调用
4. **边界测试**: 测试异常情况和边界条件

## 📋 Pull Request 流程

### 提交前检查

- [ ] 代码遵循项目规范
- [ ] 所有测试通过
- [ ] 文档已更新
- [ ] 提交信息清晰
- [ ] 没有多余的文件

### PR 描述模板

```markdown
## 变更类型
- [ ] 🐛 问题修复
- [ ] ✨ 新功能
- [ ] 📖 文档更新
- [ ] 🔧 代码重构
- [ ] ⚡ 性能优化

## 变更说明
描述本次变更的内容和原因...

## 测试情况
- [ ] 添加了单元测试
- [ ] 测试全部通过
- [ ] 手动测试通过

## 相关 Issue
Closes #123

## 破坏性变更
如果有破坏性变更，请在此说明...
```

### 代码审查

1. 维护者会在 48 小时内回应 PR
2. 根据反馈意见修改代码
3. 确保 CI 检查全部通过
4. 获得至少一个维护者的批准
5. 合并到主分支

## 🏆 贡献者认可

我们非常感谢每一位贡献者！您的贡献将会在以下地方得到认可：

- **README.md** - 贡献者列表
- **CHANGELOG.md** - 版本更新记录
- **GitHub Releases** - 版本发布说明

## 🤔 需要帮助？

如果您在贡献过程中遇到任何问题，可以通过以下方式获得帮助：

- 📧 邮件：通过 GitHub Issues 联系
- 💬 讨论：使用 GitHub Discussions
- 📖 文档：查看项目文档和 API 说明

## 📄 许可协议

通过向本项目贡献代码，您同意您的贡献将采用与项目相同的 [MIT](LICENSE) 许可协议。

---

再次感谢您的贡献！您的参与让 wxstack 变得更好！ 🎉