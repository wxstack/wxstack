function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

/**
 * 通用重试
 * @param {() => Promise<any>} fn
 * @param {{retries:number, delayMs:number, shouldRetry?:(err:any)=>boolean}} opts
 */
export async function withRetry(fn, opts) {
    const retries = opts.retries ?? 0;
    const delayMs = opts.delayMs ?? 0;
    let lastErr;
    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            return await fn();
        } catch (err) {
            lastErr = err;
            const retryable = opts.shouldRetry ? opts.shouldRetry(err) : true;
            if (attempt === retries || !retryable) break;
            if (delayMs > 0) await sleep(delayMs);
        }
    }
    throw lastErr;
}