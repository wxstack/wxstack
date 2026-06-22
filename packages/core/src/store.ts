/**
 * KV 存储抽象，用于缓存 access_token / ticket 等凭据。
 *
 * 默认提供内存实现与本地文件实现；生产多实例部署应注入 Redis 等共享存储，
 * 并实现可选的分布式锁，避免多实例同时刷新令牌造成「令牌漂移」。
 */
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

/** KV 存储接口。 */
export interface KVStore {
  /** 读取键值；不存在或已过期返回 null。 */
  get(key: string): Promise<string | null>;
  /** 写入键值，可带过期秒数。 */
  set(key: string, val: string, ttlSec?: number): Promise<void>;
  /** 删除键。 */
  del(key: string): Promise<void>;
  /** 可选：获取分布式锁（SET NX PX 语义）。 */
  acquireLock?(key: string, ttlSec: number): Promise<boolean>;
  /** 可选：释放分布式锁。 */
  releaseLock?(key: string): Promise<void>;
}

interface MemEntry {
  value: string;
  expiresAt: number | null;
}

/** 进程内内存存储（默认）。 */
export class MemoryStore implements KVStore {
  private readonly map = new Map<string, MemEntry>();
  private readonly locks = new Map<string, number>();

  async get(key: string): Promise<string | null> {
    const v = this.map.get(key);
    if (!v) return null;
    if (v.expiresAt !== null && Date.now() >= v.expiresAt) {
      this.map.delete(key);
      return null;
    }
    return v.value;
  }

  async set(key: string, val: string, ttlSec?: number): Promise<void> {
    const expiresAt = ttlSec ? Date.now() + ttlSec * 1000 : null;
    this.map.set(key, { value: val, expiresAt });
  }

  async del(key: string): Promise<void> {
    this.map.delete(key);
  }

  async acquireLock(key: string, ttlSec: number): Promise<boolean> {
    const now = Date.now();
    const exp = this.locks.get(key);
    if (exp && exp > now) return false;
    this.locks.set(key, now + ttlSec * 1000);
    return true;
  }

  async releaseLock(key: string): Promise<void> {
    this.locks.delete(key);
  }
}

/**
 * 本地文件存储（单机持久化，适合开发或单实例部署）。
 * 每个键写入一个 JSON 文件，含 value 与 expiresAt。
 */
export class FileStore implements KVStore {
  private readonly dir: string;

  constructor(dir?: string) {
    this.dir = dir ?? path.join(os.tmpdir(), 'wxstack-store');
  }

  private file(key: string): string {
    const safe = Buffer.from(key).toString('hex');
    return path.join(this.dir, `${safe}.json`);
  }

  async get(key: string): Promise<string | null> {
    try {
      const raw = await fs.readFile(this.file(key), 'utf8');
      const parsed = JSON.parse(raw) as MemEntry;
      if (parsed.expiresAt !== null && Date.now() >= parsed.expiresAt) {
        await this.del(key);
        return null;
      }
      return parsed.value;
    } catch {
      return null;
    }
  }

  async set(key: string, val: string, ttlSec?: number): Promise<void> {
    await fs.mkdir(this.dir, { recursive: true });
    const entry: MemEntry = { value: val, expiresAt: ttlSec ? Date.now() + ttlSec * 1000 : null };
    await fs.writeFile(this.file(key), JSON.stringify(entry), 'utf8');
  }

  async del(key: string): Promise<void> {
    try {
      await fs.unlink(this.file(key));
    } catch {
      /* 忽略不存在 */
    }
  }
}
