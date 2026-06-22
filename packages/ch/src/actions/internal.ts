/**
 * actions 内部共享类型。
 *
 * actions 不直接依赖 ChClient 具体类，仅依赖逃生口 request 的结构，
 * 以保持纯函数、便于单测与避免与 client.ts 的循环依赖。
 */
import type { CallOptions } from '@wxstack/core';

/** actions 所需的最小客户端能力：一个可解包的 request 逃生口。 */
export interface RequestLike {
  request<T = unknown>(opts: CallOptions): Promise<T>;
}
