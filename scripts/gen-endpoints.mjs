// 从抓取的接口目录生成各包 src/generated/endpoints.ts：
// 覆盖官方文档全部端点的「类型化薄封装方法」。
//
// 输入可为两种形态：
//  - 仅含 method/path/title 的基础 catalog（生成泛型签名）；
//  - 含 body/query/resp 字段 schema 的增强 catalog（生成精确的 Req/Resp 接口）。
//
// 用法：node scripts/gen-endpoints.mjs <pkg> <rawFile> <host>
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [pkg, rawRel, host] = process.argv.slice(2);
if (!pkg || !rawRel || !host) {
  console.error('用法: node scripts/gen-endpoints.mjs <pkg> <rawFile> <host>');
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(path.join(ROOT, rawRel), 'utf8'));
const root = raw.result ?? raw;
const rowsArr = Array.isArray(root) ? root : (root.data ?? root.result ?? []);
const rowsRaw = rowsArr.filter((r) => r && r.path && r.method);

// 按 method+path 去重
const seenPath = new Set();
const rows = [];
for (const r of rowsRaw) {
  const k = `${r.method} ${r.path}`;
  if (seenPath.has(k)) continue;
  seenPath.add(k);
  rows.push(r);
}

const PREFIXES = new Set([
  'cgi-bin', 'wxa', 'wxaapi', 'datacube', 'sns', 'retail', 'channels',
  'intp', 'card', 'component', 'sec', 'v3', 'pay', 'api', 'xpay', 'mmpaymkttransfers',
]);
const AUTH_QUERY = new Set(['access_token', 'component_access_token', 'appid', 'secret']);

const cap = (w) => w.charAt(0).toUpperCase() + w.slice(1);
const camel = (s) =>
  s.split(/[^a-zA-Z0-9]+/).filter(Boolean).map((w, i) => (i === 0 ? w.charAt(0).toLowerCase() + w.slice(1) : cap(w))).join('');

function opId(p) {
  const segs = p.replace(/\{[^}]+\}/g, '').split('/').filter(Boolean).filter((s) => !PREFIXES.has(s));
  const base = segs.length ? segs.join('_') : p.split('/').filter(Boolean).pop() || 'op';
  let id = camel(base) || 'op';
  if (/^[0-9]/.test(id)) id = `op${id}`;
  return id;
}

/** 文档类型 → TS 类型。 */
function tsType(raw) {
  const t = String(raw || '').toLowerCase().trim();
  if (!t) return 'unknown';
  const isArr = /\[\]|数组|array|list/.test(t);
  if (/object|对象|map|结构/.test(t)) return isArr ? 'Record<string, unknown>[]' : 'Record<string, unknown>';
  if (/^(u?int|integer|number|long|float|double|decimal|money|金额|时间戳|timestamp)/.test(t) || /int(32|64)?\b/.test(t))
    return isArr ? 'number[]' : 'number';
  if (/^(bool|boolean|布尔)/.test(t)) return isArr ? 'boolean[]' : 'boolean';
  if (/^(string|str|文本|字符)/.test(t) || /string\(\d+\)/.test(t)) return isArr ? 'string[]' : 'string';
  if (isArr) return 'unknown[]';
  return 'unknown';
}

const validId = (n) => /^[A-Za-z_][A-Za-z0-9_]*$/.test(n);
function fieldsToInterface(fields) {
  const seen = new Set();
  const lines = [];
  for (const f of fields || []) {
    const name = f.n;
    if (!validId(name) || seen.has(name)) continue;
    seen.add(name);
    const desc = (f.d || '').replace(/\*\//g, '*\\/').replace(/\n/g, ' ').trim();
    if (desc) lines.push(`  /** ${desc} */`);
    lines.push(`  ${name}${f.r ? '' : '?'}: ${tsType(f.t)};`);
  }
  return lines;
}

// 生成唯一 operationId
const used = new Map();
const entries = [];
for (const r of rows) {
  let id = opId(r.path);
  if (used.has(id)) { const n = used.get(id) + 1; used.set(id, n); id = `${id}${n}`; }
  else used.set(id, 1);
  entries.push({
    id,
    Pascal: cap(id),
    method: r.method,
    path: r.path,
    title: (r.title || r.name || '').replace(/^#\s*/, '').trim(),
    cat: r.cat || 'misc',
    doc: r.url
      ? (r.url.startsWith('http') ? r.url : `https://${host}${r.url}`)
      : r.ref ? `https://${host}/doc/v3/${r.ref}` : r.doc || '',
    body: r.body || [],
    query: (r.query || []).filter((f) => !AUTH_QUERY.has(f.n)),
    resp: r.resp || [],
  });
}

const hasSchema = entries.some((e) => e.body.length || e.query.length || e.resp.length);

let body = '// 本文件由 scripts/gen-endpoints.mjs 自动生成，请勿手改。\n';
body += `// 数据来源：官方文档站点 ${host}，覆盖该平台已抓取的全部服务端接口与参数。\n`;
body += '// 每个端点是「自动鉴权薄封装」；未在高层方法中显式封装的接口均可在此调用。\n\n';
body += "import type { CallOptions, QueryValue, RequestBody } from '@wxstack/core';\n\n";

// 1) 每端点 Req/Query/Resp 接口（有 schema 时精确，否则回退泛型别名）
if (hasSchema) {
  for (const e of entries) {
    const bodyLines = fieldsToInterface(e.body);
    const queryLines = fieldsToInterface(e.query);
    const respLines = fieldsToInterface(e.resp);
    if (bodyLines.length) body += `/** ${e.title} —— 请求体。 */\nexport interface ${e.Pascal}Body {\n${bodyLines.join('\n')}\n}\n`;
    else body += `/** ${e.title} —— 请求体（文档未列字段，放行任意键）。 */\nexport type ${e.Pascal}Body = Record<string, unknown>;\n`;
    if (queryLines.length) body += `/** ${e.title} —— 查询参数。 */\nexport interface ${e.Pascal}Query {\n${queryLines.join('\n')}\n}\n`;
    if (respLines.length) body += `/** ${e.title} —— 返回体。 */\nexport interface ${e.Pascal}Resp {\n${respLines.join('\n')}\n}\n`;
    else body += `/** ${e.title} —— 返回体。 */\nexport type ${e.Pascal}Resp = Record<string, unknown>;\n`;
    body += '\n';
  }
}

// 2) 端点元数据表
body += "/** 端点元数据。 */\nexport interface EndpointMeta { method: CallOptions['method']; path: string; title: string; cat: string; doc: string; }\n\n";
body += '/** 全部端点元数据（operationId → 元数据）。 */\nexport const endpoints = {\n';
const byCat = {};
for (const e of entries) (byCat[e.cat] ||= []).push(e);
for (const cat of Object.keys(byCat).sort()) {
  body += `  // ===== ${cat} =====\n`;
  for (const e of byCat[cat]) {
    const t = e.title.replace(/\*\//g, '*\\/');
    body += `  /** ${t || e.id}${e.doc ? ` @see ${e.doc}` : ''} */\n`;
    body += `  ${JSON.stringify(e.id)}: { method: ${JSON.stringify(e.method)}, path: ${JSON.stringify(e.path)}, title: ${JSON.stringify(e.title)}, cat: ${JSON.stringify(e.cat)}, doc: ${JSON.stringify(e.doc)} },\n`;
  }
}
body += '} as const satisfies Record<string, EndpointMeta>;\n\n';
body += '/** operationId 联合类型。 */\nexport type EndpointId = keyof typeof endpoints;\n\n';
body += '/** 调用某端点的最小客户端形状（非泛型，便于适配 callComponent/callAuthorizer 等自定义逃生口）。 */\nexport interface GeneratedCaller {\n  request(opts: CallOptions): Promise<unknown>;\n}\n\n';
body += '/** 调用时附加项：支持替换 URL 路径中的 {占位符}（如 {out_trade_no}）。 */\nexport type GeneratedCallExtra = Partial<CallOptions> & { params?: Record<string, string | number> };\n\n';

// 3) GeneratedApi 类型：有 schema 时逐端点精确签名，否则统一泛型
if (hasSchema) {
  body += '/** 全量接口表（按 operationId 调用，自动鉴权；签名取自官方文档参数表）。 */\nexport interface GeneratedApi {\n';
  for (const e of entries) {
    const q = e.query.length ? `${e.Pascal}Query & Record<string, QueryValue>` : 'Record<string, QueryValue>';
    body += `  /** ${(e.title || e.id).replace(/\*\//g, '*\\/')}${e.doc ? ` @see ${e.doc}` : ''} */\n`;
    body += `  ${e.id}(body?: ${e.Pascal}Body, query?: ${q}, extra?: GeneratedCallExtra): Promise<${e.Pascal}Resp>;\n`;
  }
  body += '}\n\n';
} else {
  body += '/** 全量接口表：每个端点封装为 (body?, query?, extra?) => Promise<T>。 */\nexport type GeneratedApi = {\n  [K in EndpointId]: <T = unknown>(\n    body?: RequestBody,\n    query?: Record<string, QueryValue>,\n    extra?: GeneratedCallExtra,\n  ) => Promise<T>;\n};\n\n';
}

// 4) 运行时绑定
body += '/**\n * 基于端点表为客户端绑定全部接口方法（运行时与类型一致）。\n * @param client 拥有 request() 逃生口的客户端。\n */\nexport function createGeneratedApi(client: GeneratedCaller): GeneratedApi {\n';
body += '  const api = {} as Record<string, unknown>;\n  for (const [id, ep] of Object.entries(endpoints)) {\n    api[id] = (body?: RequestBody, query?: Record<string, QueryValue>, extra?: GeneratedCallExtra) => {\n      let url: string = ep.path;\n      const { params, ...rest } = extra ?? {};\n      if (params) {\n        for (const [k, v] of Object.entries(params)) url = url.replace(`{${k}}`, encodeURIComponent(String(v)));\n      }\n      return client.request({ method: ep.method, url, body, query, ...rest });\n    };\n  }\n  return api as unknown as GeneratedApi;\n}\n';

const outDir = path.join(ROOT, 'packages', pkg, 'src', 'generated');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'endpoints.ts'), body);

// 规范化 catalog（不含描述噪声）落库到 docs/api-specs/<pkg>.json
fs.writeFileSync(
  path.join(ROOT, 'docs', 'api-specs', `${pkg}.json`),
  `${JSON.stringify(entries.map((e) => ({
    id: e.id, method: e.method, path: e.path, title: e.title, cat: e.cat, doc: e.doc,
    reqFields: e.body.map((f) => f.n), respFields: e.resp.map((f) => f.n),
  })), null, 0)}\n`,
);

const typed = entries.filter((e) => e.body.length || e.resp.length || e.query.length).length;
console.log(`[${pkg}] ${entries.length} 端点，${Object.keys(byCat).length} 类目，${hasSchema ? `${typed} 个含精确类型` : '泛型签名'} → packages/${pkg}/src/generated/endpoints.ts`);
