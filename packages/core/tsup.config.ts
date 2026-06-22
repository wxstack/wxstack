import { defineConfig } from 'tsup';

// 内核构建：TS 源码 → ESM + CJS 双格式 + .d.ts/.d.cts
// （package.json 的 "type":"module" 使 cjs 产物自动用 .cjs / .d.cts 扩展名）
export default defineConfig({
  entry: {
    index: 'src/index.ts',
    crypto: 'src/crypto/index.ts',
    webhook: 'src/webhook.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  target: 'es2022',
  platform: 'node',
  clean: true,
  splitting: false,
  treeshake: true,
});
