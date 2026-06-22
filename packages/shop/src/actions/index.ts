/**
 * actions 汇总：按域分组的纯函数端点封装。
 *
 * 每个函数签名均为 (client, params) => client.request(...)，便于按需树摇与组合。
 * 这些函数同时被 ShopClient 的命名空间方法（client.product.* 等）复用。
 */
export * from './product.js';
export * from './order.js';
export * from './aftersale.js';
export * from './coupon.js';
