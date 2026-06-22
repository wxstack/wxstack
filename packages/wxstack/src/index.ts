/**
 * wxstack 聚合包：将各业务子模块以命名空间形式聚合导出，避免同名导出冲突。
 * 用法：import { pay, mp } from 'wxstack'; const client = pay.createPayClient({...});
 * 也可按子路径精确引入：import { createPayClient } from 'wxstack/pay';（更利于 tree-shaking）
 */
export * as core from '@wxstack/core';
export * as oa from '@wxstack/oa';
export * as pay from '@wxstack/pay';
export * as mp from '@wxstack/mp';
export * as wecom from '@wxstack/wecom';
export * as op from '@wxstack/op';
export * as shop from '@wxstack/shop';
export * as ch from '@wxstack/ch';
export * as mg from '@wxstack/mg';
export * as ai from '@wxstack/ai';
