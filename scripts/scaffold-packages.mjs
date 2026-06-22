// 为各业务包生成统一的 package.json / tsconfig.json / tsup.config.ts。
// 仅生成构建配置，源码由各包自行实现。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PKG_DIR = path.join(ROOT, 'packages');

/** 业务包元数据。 */
const packages = [
  { dir: 'oa', name: '@wxstack/oa', desc: '微信公众号（订阅号/服务号）服务端 SDK' },
  { dir: 'pay', name: '@wxstack/pay', desc: '微信支付 v3 SDK' },
  { dir: 'mp', name: '@wxstack/mp', desc: '微信小程序服务端 SDK' },
  { dir: 'wecom', name: '@wxstack/wecom', desc: '企业微信服务端 SDK' },
  { dir: 'op', name: '@wxstack/op', desc: '微信开放平台（第三方平台/扫码登录）SDK' },
  { dir: 'shop', name: '@wxstack/shop', desc: '微信小店服务端 SDK' },
  { dir: 'ch', name: '@wxstack/ch', desc: '微信视频号服务端 SDK' },
  { dir: 'mg', name: '@wxstack/mg', desc: '微信小游戏服务端 SDK' },
  { dir: 'ai', name: '@wxstack/ai', desc: '微信智能对话开放平台 SDK' },
];

const pkgJson = ({ dir, name, desc }) => ({
  name,
  version: '0.1.0',
  description: desc,
  type: 'module',
  sideEffects: false,
  engines: { node: '>=18' },
  main: './dist/index.cjs',
  module: './dist/index.js',
  types: './dist/index.d.cts',
  exports: {
    '.': {
      import: { types: './dist/index.d.ts', default: './dist/index.js' },
      require: { types: './dist/index.d.cts', default: './dist/index.cjs' },
    },
    './package.json': './package.json',
  },
  files: ['dist'],
  scripts: {
    build: 'tsup',
    typecheck: 'tsc --noEmit',
    'lint:pkg': 'publint && attw --pack . --profile node16',
  },
  repository: {
    type: 'git',
    url: 'git+https://github.com/wxstack/wxstack.git',
    directory: `packages/${dir}`,
  },
  homepage: 'https://github.com/wxstack/wxstack#readme',
  license: 'MIT',
  publishConfig: { access: 'public' },
  dependencies: { '@wxstack/core': 'workspace:*' },
});

const tsconfig = {
  extends: '../../tsconfig.base.json',
  compilerOptions: { rootDir: 'src', outDir: 'dist', noEmit: true },
  include: ['src'],
};

const tsupConfig = `import { defineConfig } from 'tsup';

// 双格式构建：TS 源码 → ESM + CJS + .d.ts/.d.cts；外置 @wxstack/core。
export default defineConfig({
  entry: { index: 'src/index.ts' },
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  target: 'es2022',
  platform: 'node',
  clean: true,
  splitting: false,
  treeshake: true,
  external: ['@wxstack/core'],
});
`;

for (const p of packages) {
  const dir = path.join(PKG_DIR, p.dir);
  fs.mkdirSync(path.join(dir, 'src'), { recursive: true });
  fs.writeFileSync(path.join(dir, 'package.json'), `${JSON.stringify(pkgJson(p), null, 2)}\n`);
  fs.writeFileSync(path.join(dir, 'tsconfig.json'), `${JSON.stringify(tsconfig, null, 2)}\n`);
  fs.writeFileSync(path.join(dir, 'tsup.config.ts'), tsupConfig);
  console.log('scaffolded', p.name);
}
