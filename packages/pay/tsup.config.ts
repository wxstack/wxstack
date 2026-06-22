import { defineConfig } from 'tsup';

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
