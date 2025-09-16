export class WxError extends Error {
    constructor(message, code, details) {
        super(message);
        this.name = 'WxError';
        this.code = code;
        this.details = details;
    }
}
export class WxHttpError extends WxError {
    constructor(message, details) {
        super(message, 'HTTP_ERROR', details);
        this.name = 'WxHttpError';
        this.isRetryable = isRetryableHttp(details);
    }
}
export class WxApiError extends WxError {
    constructor(message, code, details) {
        super(message, code, details);
        this.name = 'WxApiError';
    }
}
export class WxCryptoError extends WxError {
    constructor(message, details) {
        super(message, 'CRYPTO_ERROR', details);
        this.name = 'WxCryptoError';
    }
}
export class WxAuthError extends WxError {
    constructor(message, code, details) {
        super(message, code ?? 'AUTH_ERROR', details);
        this.name = 'WxAuthError';
    }
}
function isRetryableHttp(details) {
    const status = details?.response?.status;
    if (!status) return true; // network error
    return status >= 500 || status === 429;
}