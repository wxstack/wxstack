export class InMemoryTokenStore {
    constructor() {
        this.map = new Map();
    }
    async get(key) {
        const v = this.map.get(key);
        if (!v) return null;
        if (v.expiresAt && Date.now() >= v.expiresAt) {
            this.map.delete(key);
            return null;
        }
        return v.value;
    }
    async set(key, value, ttlSeconds) {
        const expiresAt = ttlSeconds ? Date.now() + ttlSeconds * 1000 : null;
        this.map.set(key, { value, expiresAt });
    }
}