import { describe, expect, it, vi } from 'vitest';
import { MemoryStore } from '../src/store.js';
import { TokenManager } from '../src/token.js';

describe('TokenManager 令牌管理', () => {
  it('命中缓存不重复拉取', async () => {
    const store = new MemoryStore();
    const fetcher = vi.fn(async () => ({ token: 't1', expiresIn: 7200 }));
    const tm = new TokenManager({ store, fetcher });

    expect(await tm.getToken('k')).toBe('t1');
    expect(await tm.getToken('k')).toBe('t1');
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it('单飞：并发只触发一次刷新', async () => {
    const store = new MemoryStore();
    const fetcher = vi.fn(async () => {
      await new Promise((r) => setTimeout(r, 20));
      return { token: 'tok', expiresIn: 7200 };
    });
    const tm = new TokenManager({ store, fetcher });

    const results = await Promise.all([tm.getToken('k'), tm.getToken('k'), tm.getToken('k')]);
    expect(results).toEqual(['tok', 'tok', 'tok']);
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it('refresh 强制重新拉取，invalidate 清除缓存', async () => {
    const store = new MemoryStore();
    let n = 0;
    const fetcher = vi.fn(async () => ({ token: `t${++n}`, expiresIn: 7200 }));
    const tm = new TokenManager({ store, fetcher });

    expect(await tm.getToken('k')).toBe('t1');
    expect(await tm.refresh('k')).toBe('t2');
    await tm.invalidate('k');
    expect(await tm.getToken('k')).toBe('t3');
  });

  it('提前刷新余量计入存储 TTL', async () => {
    const store = new MemoryStore();
    const setSpy = vi.spyOn(store, 'set');
    const tm = new TokenManager({
      store,
      fetcher: async () => ({ token: 't', expiresIn: 7200 }),
      earlyRefreshSec: 300,
    });
    await tm.getToken('k');
    // 7200 - 300 = 6900
    expect(setSpy).toHaveBeenCalledWith('k', 't', 6900);
  });
});
