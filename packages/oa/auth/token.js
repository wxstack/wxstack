import { WxAuthError } from '../lib/errors.js';

/**
 * 获取并缓存 access_token（支持 normal/stable）
 * @param {object} opts
 * @param {string} opts.appId
 * @param {string} opts.appSecret
 * @param {('normal'|'stable')} opts.mode
 * @param {import('./tokenStore.js').InMemoryTokenStore} opts.store
 * @param {string} opts.cacheKey
 * @param {import('axios').AxiosInstance} opts.http
 */
export async function getAccessToken({ appId, appSecret, mode, store, cacheKey, http }) {
    const cached = await store.get(cacheKey);
    if (cached) return cached;

    const fetch = async () => {
        if (mode === 'stable') {
            // 稳定版 token（POST）
            const { data } = await http.post('/cgi-bin/stable_token', {
                grant_type: 'client_credential',
                appid: appId,
                secret: appSecret,
                force_refresh: false,
            });
            if (data.errcode && data.errcode !== 0) {
                throw new WxAuthError(data.errmsg || 'get stable token failed', data.errcode, data);
            }
            const { access_token, expires_in } = data;
            const ttl = Math.max(60, (expires_in || 7200) - 120);
            await store.set(cacheKey, access_token, ttl);
            return access_token;
        } else {
            // 普通 token（GET）
            const { data } = await http.get('/cgi-bin/token', {
                params: { grant_type: 'client_credential', appid: appId, secret: appSecret },
            });
            if (data.errcode && data.errcode !== 0) {
                throw new WxAuthError(data.errmsg || 'get access token failed', data.errcode, data);
            }
            const { access_token, expires_in } = data;
            const ttl = Math.max(60, (expires_in || 7200) - 120);
            await store.set(cacheKey, access_token, ttl);
            return access_token;
        }
    };

    return fetch();
}