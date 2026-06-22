import { defineConfig } from 'tsup';

// 聚合包：每个业务子模块单独入口，便于子路径按需引入与 tree-shaking。
export default defineConfig({
  entry: {
    index: 'src/index.ts',
    core: 'src/core.ts',
    oa: 'src/oa.ts',
    pay: 'src/pay.ts',
    mp: 'src/mp.ts',
    wecom: 'src/wecom.ts',
    op: 'src/op.ts',
    shop: 'src/shop.ts',
    ch: 'src/ch.ts',
    mg: 'src/mg.ts',
    ai: 'src/ai.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  target: 'es2022',
  platform: 'node',
  clean: true,
  splitting: false,
  treeshake: true,
  external: [
    '@wxstack/core',
    '@wxstack/oa',
    '@wxstack/pay',
    '@wxstack/mp',
    '@wxstack/wecom',
    '@wxstack/op',
    '@wxstack/shop',
    '@wxstack/ch',
    '@wxstack/mg',
    '@wxstack/ai',
  ],
});
