/**
 * 内核加解密能力统一出口。
 * 各业务的加解密算法不同，这里集中封装并按子域导出。
 */
export * from './message.js';
export * from './pay.js';
export * from './miniprogram.js';
