// javascript
import { createRequire } from 'module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';
import { globby } from 'globby';
import { parse as parseComments } from 'comment-parser';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// 站点根目录
const SITE_DOCS_DIR = path.join(ROOT, 'docs');
const VP_DIR = path.join(SITE_DOCS_DIR, '.vitepress');

// oa 包源码与文档目录
const OA_PKG_DIR = path.join(ROOT, 'packages', 'oa');
const OA_ACTIONS_DIR = path.join(OA_PKG_DIR, 'request', 'actions');
const OA_DOCS_DIR = path.join(SITE_DOCS_DIR, 'oa');
const OA_API_DIR = path.join(OA_DOCS_DIR, 'api');
const OA_GUIDE_DIR = path.join(OA_DOCS_DIR, 'guide');

// 仅服务号可用模块标签
const SERVICE_ONLY = new Set(['customer']);

// 小工具
const titleCase = (s) => s.replace(/(^|[-_])([a-z])/g, (_, __, c) => c.toUpperCase());
const codeFence = (lang, content) => `\`\`\`${lang}\n${content.trim()}\n\`\`\``;
const writeIfChanged = async (file, content) => {
    const exists = await fs.pathExists(file);
    if (exists) {
        const old = await fs.readFile(file, 'utf8');
        if (old === content) return;
    }
    await fs.outputFile(file, content);
};

// 从源码里粗略匹配方法签名
function guessParamListFromSource(source, methodName) {
    const re = new RegExp(
        String.raw`${methodName}\s*:\s*(?:async\s*)?function\s*\(([^)]*)\)` +
        '|' +
        String.raw`${methodName}\s*\(\s*([^)]*)\)` +
        '|' +
        String.raw`${methodName}\s*:\s*(?:async\s*)?\(\s*([^)]*)\s*\)\s*=>`,
        'm'
    );
    const m = source.match(re);
    const params = m?.[1] ?? m?.[2] ?? m?.[3];
    if (!params) return '...args';
    const pretty = params.split(',').map((s) => s.trim()).filter(Boolean).join(', ');
    return pretty || '...args';
}

// 找到方法定义索引
function findMethodIndex(source, methodName) {
    const patterns = [
        new RegExp(String.raw`${methodName}\s*:\s*(?:async\s*)?function\s*\(`, 'm'),
        new RegExp(String.raw`${methodName}\s*\(`, 'm'),
        new RegExp(String.raw`${methodName}\s*:\s*(?:async\s*)?\(`, 'm')
    ];
    for (const re of patterns) {
        const m = re.exec(source);
        if (m) return m.index;
    }
    return -1;
}

// 在方法定义之前寻找最近的 JSDoc
function extractJsDocForMethod(source, methodName) {
    const idx = findMethodIndex(source, methodName);
    if (idx < 0) return null;
    const start = source.lastIndexOf('/**', idx);
    if (start < 0) return null;
    const end = source.indexOf('*/', start);
    if (end < 0 || end > idx) return null;
    const blockText = source.slice(start, end + 2);
    const parsed = parseComments(blockText, { spacing: 'preserve' });
    if (!parsed?.length) return null;
    return parsed[0];
}

// 从 JSDoc 的 @param 列表推断顶层参数名
function buildParamsFromJsDoc(jsdoc) {
    const paramTags = (jsdoc?.tags || []).filter((t) => t.tag === 'param');
    if (!paramTags.length) return null;
    const order = [];
    const seen = new Set();
    for (const t of paramTags) {
        const base = (t.name || '').split('.')[0] || '';
        if (!base) continue;
        if (!seen.has(base)) {
            seen.add(base);
            order.push(base);
        }
    }
    return order.length ? order.join(', ') : null;
}

// 读取动作模块
async function readActionModule(file) {
    const require = createRequire(import.meta.url);
    const mod = require(file);
    const actionName = path.basename(file, path.extname(file));

    const dummyClient = {
        require() {},
        getAccessToken: async () => 'DUMMY',
        request: async () => ({}),
        accountType: 'service'
    };

    const exported = typeof mod === 'function' ? mod(dummyClient) : mod;
    const methodNames = Object.keys(exported || {}).filter((k) => typeof exported[k] === 'function');

    const source = await fs.readFile(file, 'utf8');
    const methods = methodNames.map((name) => {
        const jsdoc = extractJsDocForMethod(source, name);
        const jsdocParamsSig = buildParamsFromJsDoc(jsdoc);
        const sig = jsdocParamsSig || guessParamListFromSource(source, name) || '...args';

        const description = (jsdoc?.description || '').trim();
        const params = (jsdoc?.tags || [])
            .filter((t) => t.tag === 'param')
            .map((t) => ({
                name: t.name || '',
                type: t.type || '',
                optional: !!t.optional,
                default: t.default || '',
                description: (t.description || '').trim()
            }));
        const returnsTag = (jsdoc?.tags || []).find((t) => t.tag === 'returns' || t.tag === 'return');
        const returns = returnsTag ? { type: returnsTag.type || '', description: (returnsTag.description || '').trim() } : null;
        const examples = (jsdoc?.tags || [])
            .filter((t) => t.tag === 'example')
            .map((t) => (t.source?.[0]?.tokens?.postDescription ? t.source.map((s) => s.source).join('\n') : t.description || ''))
            .map((s) => s.trim())
            .filter(Boolean);
        const throws = (jsdoc?.tags || [])
            .filter((t) => t.tag === 'throws' || t.tag === 'exception')
            .map((t) => ({ type: t.type || '', description: (t.description || '').trim() }));

        return { name, params: sig, doc: { description, params, returns, examples, throws } };
    });

    return { actionName, methods, serviceOnly: SERVICE_ONLY.has(actionName) };
}

// 生成某 action 的 Markdown（client.方法）
function renderActionMd(action) {
    const { actionName, methods, serviceOnly } = action;
    const title = `${titleCase(actionName)} API`;

    const importSample = `
import { createClient } from '@wxstack/oa';

const client = createClient({
  appId: 'wx_your_appid',
  appSecret: 'your_secret'
});

// ${serviceOnly ? '此模块仅服务号可用。' : '订阅号/服务号均可用。'}
`.trim();

    const sections = methods.map((m) => {
        const callLine = `await client.${m.name}(${m.params});`;
        const doc = m.doc || {};
        const desc = doc.description ? `${doc.description}\n` : '';

        const paramLines = (doc.params || []).map((p) => {
            const need = p.optional ? '可选' : '必填';
            const type = p.type ? `\`${p.type}\`` : '`any`';
            const def = p.default ? `，默认：\`${p.default}\`` : '';
            const dsc = p.description ? `：${p.description}` : '';
            return `- \`${p.name}\` (${type}，${need}${def})${dsc}`;
        });
        const paramsBlock = paramLines.length ? ['参数：', ...paramLines].join('\n') : '';

        const returnsBlock = doc.returns
            ? `返回值：\`${doc.returns.type || 'any'}\`${doc.returns.description ? ` - ${doc.returns.description}` : ''}`
            : '';

        const throwsLines = (doc.throws || []).map((t) => {
            const type = t.type ? `\`${t.type}\`` : '';
            const dsc = t.description || '';
            return `- ${type}${type && dsc ? ' - ' : ''}${dsc}`;
        });
        const throwsBlock = throwsLines.length ? ['可能抛出：', ...throwsLines].join('\n') : '';

        const exampleBlocks =
            doc.examples && doc.examples.length
                ? doc.examples.map((ex) => codeFence('ts', ex)).join('\n\n')
                : codeFence('ts', `// 用法示例\n${callLine}`);

        return [
            `### ${m.name}()`,
            '',
            desc,
            `签名：\`${m.name}(${m.params})\``,
            '',
            paramsBlock,
            paramsBlock ? '' : '',
            returnsBlock,
            returnsBlock ? '' : '',
            throwsBlock,
            throwsBlock ? '' : '',
            exampleBlocks
        ]
            .filter(Boolean)
            .join('\n');
    });

    const body = [
        `# ${title}`,
        '',
        serviceOnly ? '> 仅服务号可用' : '> 订阅号/服务号通用',
        '',
        '## 快速上手',
        '',
        codeFence('ts', importSample),
        '',
        '## 方法',
        '',
        sections.join('\n\n')
    ].join('\n');

    return `---\ntitle: ${title}\noutline: deep\n---\n\n${body}\n`;
}

// 扫描 oa 内的 createClient JSDoc
async function findCreateClientJsDoc() {
    const files = await globby(['**/*.{js,mjs,ts,cts,mts}'], { cwd: OA_PKG_DIR, absolute: true, gitignore: true });
    for (const file of files) {
        const source = await fs.readFile(file, 'utf8');
        const idx =
            source.search(/\bexport\s+function\s+createClient\s*\(/) >= 0
                ? source.search(/\bexport\s+function\s+createClient\s*\(/)
                : source.search(/\bfunction\s+createClient\s*\(/) >= 0
                    ? source.search(/\bfunction\s+createClient\s*\(/)
                    : source.search(/\bexport\s+const\s+createClient\s*=\s*\(/) >= 0
                        ? source.search(/\bexport\s+const\s+createClient\s*=\s*\(/)
                        : source.search(/\bconst\s+createClient\s*=\s*\(/);

        if (idx < 0) continue;

        const start = source.lastIndexOf('/**', idx);
        const end = start >= 0 ? source.indexOf('*/', start) : -1;
        if (start >= 0 && end >= 0 && end < idx) {
            const block = source.slice(start, end + 2);
            const parsed = parseComments(block, { spacing: 'preserve' });
            if (parsed?.length) return parsed[0];
        }
    }
    return null;
}

// 渲染 createClient(options) 列表
function renderCreateClientOptions(jsdoc) {
    if (!jsdoc) return '';
    const rows = (jsdoc.tags || [])
        .filter((t) => t.tag === 'param' && (t.name || '').startsWith('options.'))
        .map((t) => {
            const name = '`' + (t.name || '').replace(/^options\./, '') + '`';
            const type = t.type ? '`' + t.type + '`' : '`any`';
            const opt = t.optional ? '（可选）' : '（必填）';
            const def = t.default ? `，默认：\`${t.default}\`` : '';
            const desc = t.description ? `：${t.description.trim()}` : '';
            return `- ${name} ${type} ${opt}${def}${desc}`;
        });

    if (!rows.length) return '';
    const header = '### createClient(options)\n\n可用的 options：\n';
    return [header, ...rows].join('\n');
}

// 生成站点总览与 oa 分区
async function ensureScaffold(createClientJsDoc) {
    // 站点首页（wxstack）
    const siteIndex = `---
title: wxstack
layout: home
hero:
  name: wxstack
  text: Node 微信生态开发 SDK
  tagline: 覆盖公众号、微信小程序、企业微信、支付等生态能力
  actions:
    - theme: brand
      text: 查看文档
      link: /oa/
    - theme: alt
      text: GitHub
      link: https://github.com/wxstack/wxstack
features:
  - title: Monorepo
    details: 多分包协作，类型与接口统一
  - title: 生态完备
    details: 公众号、微信小程序、企业微信、支付、商店等
  - title: 文档与示例
    details: 完善的使用文档与代码示例
---
`;
    await writeIfChanged(path.join(SITE_DOCS_DIR, 'index.md'), siteIndex);

    // oa 分区首页
    const oaIndex = `---
title: wxstack/oa
layout: home
hero:
  name: wxstack/oa
  text: 微信公众号（订阅号/服务号）统一 SDK
  tagline: 同一套 API，自动守卫权限差异
  actions:
    - theme: brand
      text: 快速开始
      link: /oa/guide/getting-started
    - theme: alt
      text: API 文档
      link: /oa/api/
features:
  - title: 统一封装
    details: 订阅号与服务号 API 一体化封装
  - title: 代码示例
    details: 每个方法配模板示例，开箱即用
---
`;
    await writeIfChanged(path.join(OA_DOCS_DIR, 'index.md'), oaIndex);

    // oa 指南
    const gettingStarted = `---
title: 快速开始
---

# 快速开始

- 安装：\`npm i @wxstack/oa\`
- 初始化：

${codeFence(
        'ts',
        `
import { createClient } from '@wxstack/oa';

const client = createClient({
  appId: 'wx_your_appid',
  appSecret: 'your_secret'
});
`.trim()
    )}

- 调用：

${codeFence('ts', `await client.functionName(); // 示例`)}

${renderCreateClientOptions(createClientJsDoc)}
`;
    await writeIfChanged(path.join(OA_GUIDE_DIR, 'getting-started.md'), gettingStarted);

    // oa API 索引（改为 index.md，避免 /oa/api 404）
    const apiIndex = `---
title: API 索引
---

# API 索引

选择左侧模块查看对应方法。
`;
    await writeIfChanged(path.join(OA_API_DIR, 'index.md'), apiIndex);
}

// 生成 VitePress 配置（wxstack 总站点 \+ oa 分区侧边栏）
function renderVitepressConfig(sidebarGroups) {
    return `import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: 'wxstack',
  description: 'Node 微信生态开发 SDK 文档',
  themeConfig: {
    nav: [
      { text: '总览', link: '/' },
      {
        text: 'SDK',
        items: [
          { text: '公众号（oa）', link: '/oa/' },
          { text: '小程序（mp）', link: '/mp/' },
          { text: '企业微信（wecom）', link: '/wecom/' },
          { text: '微信支付（pay）', link: '/pay/' },
          { text: '商店（shop）', link: '/shop/' }
        ]
      }
    ],
    sidebar: ${sidebarGroups},
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wxstack/wxstack' }
    ]
  }
});
`;
}

async function main() {
    const exists = await fs.pathExists(OA_ACTIONS_DIR);
    if (!exists) {
        console.error(`未找到动作目录：${OA_ACTIONS_DIR}`);
        process.exit(1);
    }

    // 解析 createClient 的 JSDoc
    const createClientJsDoc = await findCreateClientJsDoc();

    // 脚手架：总站与 oa 分区
    await ensureScaffold(createClientJsDoc);

    // 扫描 oa actions 生成 API 页面
    const files = await globby(['*.{js,mjs,cjs}'], { cwd: OA_ACTIONS_DIR, absolute: true });
    const actions = [];
    for (const file of files) {
        try {
            const a = await readActionModule(file);
            actions.push(a);
        } catch (e) {
            console.warn(`跳过 ${path.basename(file)}：${e.message}`);
        }
    }

    for (const a of actions) {
        const md = renderActionMd(a);
        const out = path.join(OA_API_DIR, `${a.actionName}.md`);
        await writeIfChanged(out, md);
    }

    const apiItems = actions
        .sort((x, y) => x.actionName.localeCompare(y.actionName))
        .map((a) => ({
            text: `${titleCase(a.actionName)}${a.serviceOnly ? '（服务号）' : ''}`,
            link: `/oa/api/${a.actionName}`
        }));

    // 侧边栏：仅配置 oa 路由前缀
    const sidebarObj = {
        '/oa/guide/': [{ text: '指南', items: [{ text: '快速开始', link: '/oa/guide/getting-started' }] }],
        '/oa/api/': [{ text: 'API', items: [{ text: '索引', link: '/oa/api/' }, ...apiItems] }]
    };
    const sidebarGroups = JSON.stringify(sidebarObj, null, 2);

    const vpConfig = renderVitepressConfig(sidebarGroups);
    await fs.ensureDir(VP_DIR);
    await writeIfChanged(path.join(VP_DIR, 'config.ts'), vpConfig);

    // 旧目录提示
    const oldApiDir = path.join(SITE_DOCS_DIR, 'api');
    const oldGuideDir = path.join(SITE_DOCS_DIR, 'guide');
    if ((await fs.pathExists(oldApiDir)) || (await fs.pathExists(oldGuideDir))) {
        console.warn("检测到旧目录 'docs/api' 或 'docs/guide'，已改为 'docs/oa/*' 结构，请手动清理旧文件以避免侧边栏重复。");
    }

    console.log('文档生成完成：');
    console.log(`- oa 模块页面：${actions.length} 个，输出到 'docs/oa/api'`);
    console.log(`- oa 指南：'docs/oa/guide/getting-started.md'`);
    console.log(`- 站点首页：'docs/index.md'，oa 首页：'docs/oa/index.md'`);
    console.log(`- 配置：'docs/.vitepress/config.ts'`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
