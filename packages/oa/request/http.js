import axios from 'axios';
import { WxHttpError } from '../lib/errors.js';

export function createHttpClient({ baseURL, timeout }) {
    const instance = axios.create({
        baseURL,
        timeout,
        headers: { 'Content-Type': 'application/json' },
    });

    // 统一错误转译
    instance.interceptors.response.use(
        (resp) => resp,
        (error) => {
            // 标注可重试
            const err = new WxHttpError(error.message, error);
            return Promise.reject(err);
        }
    );

    return instance;
}