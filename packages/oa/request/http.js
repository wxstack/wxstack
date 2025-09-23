import axios from 'axios';
import { WxHttpError } from '../lib/errors.js';

export function createHttpClient(httpOptions) {
    const instance = axios.create({
        headers: { 'Content-Type': 'application/json' },
        ...httpOptions
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