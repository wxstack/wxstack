/**
 * wxstack 统一错误体系。
 *
 * 所有微信相关错误均继承自 {@link WxError}，便于上层用 `instanceof` 精细分类处理。
 * 设计参考微信全家桶各业务的错误返回约定：业务错误用 `errcode/errmsg`，
 * HTTP 层错误用 status，加解密错误单列，配置/令牌错误单列。
 */

/** 所有 wxstack 错误的基类。 */
export class WxError extends Error {
  /** 机器可读的错误代码（字符串或数字，视子类而定）。 */
  readonly code: string | number;
  /** 原始上下文（响应体、底层错误等），便于调试。 */
  readonly details?: unknown;

  constructor(message: string, code: string | number, details?: unknown) {
    super(message);
    this.name = 'WxError';
    this.code = code;
    this.details = details;
  }
}

/**
 * 微信业务接口错误：`errcode !== 0`。
 * @see 各业务文档「全局返回码」章节
 */
export class WxApiError extends WxError {
  /** 微信返回的业务错误码。 */
  readonly errcode: number;
  /** 微信返回的业务错误信息。 */
  readonly errmsg: string;
  /** 部分接口返回的请求标识，便于向微信侧报障排查。 */
  readonly rid?: string;
  /** 错误码对应的中文释义与处理建议（若注册表命中）。 */
  readonly hint?: string;

  constructor(
    errmsg: string,
    errcode: number,
    details?: unknown,
    extra?: { rid?: string; hint?: string },
  ) {
    super(errmsg, errcode, details);
    this.name = 'WxApiError';
    this.errcode = errcode;
    this.errmsg = errmsg;
    this.rid = extra?.rid;
    this.hint = extra?.hint ?? ERRCODE_HINTS[errcode];
  }
}

/** HTTP 传输层错误（非 2xx、网络异常、超时等）。 */
export class WxHttpError extends WxError {
  /** HTTP 状态码（网络异常时为 0）。 */
  readonly status: number;
  /** 是否可重试（5xx / 429 / 网络异常默认可重试）。 */
  readonly isRetryable: boolean;

  constructor(message: string, status: number, details?: unknown) {
    super(message, 'HTTP_ERROR', details);
    this.name = 'WxHttpError';
    this.status = status;
    this.isRetryable = status === 0 || status >= 500 || status === 429;
  }
}

/** 加解密 / 验签错误。 */
export class WxCryptoError extends WxError {
  constructor(message: string, details?: unknown) {
    super(message, 'CRYPTO_ERROR', details);
    this.name = 'WxCryptoError';
  }
}

/** 配置错误（缺少必填项、参数非法等）。 */
export class WxConfigError extends WxError {
  constructor(message: string, details?: unknown) {
    super(message, 'CONFIG_ERROR', details);
    this.name = 'WxConfigError';
  }
}

/** 令牌（access_token / ticket 等）获取或刷新失败。 */
export class WxTokenError extends WxError {
  constructor(message: string, code: string | number = 'TOKEN_ERROR', details?: unknown) {
    super(message, code, details);
    this.name = 'WxTokenError';
  }
}

/** 频率限制错误（如公众号 45009）。 */
export class WxRateLimitError extends WxApiError {
  constructor(errmsg: string, errcode: number, details?: unknown) {
    super(errmsg, errcode, details);
    this.name = 'WxRateLimitError';
  }
}

/**
 * 触发「令牌失效」的错误码集合：命中后内核会强制刷新令牌并重放一次请求。
 * - 40001 获取 access_token 时 secret 错误，或 access_token 无效
 * - 40014 不合法的 access_token
 * - 42001 access_token 超时
 * - 41001 缺少 access_token 参数
 */
export const TOKEN_INVALID_ERRCODES: ReadonlySet<number> = new Set([40001, 40014, 42001, 41001]);

/** 频率限制类错误码。 */
export const RATE_LIMIT_ERRCODES: ReadonlySet<number> = new Set([45009, 45011, 45047, 48001, -1]);

/** 常见错误码 → 中文释义/处理建议注册表（按需扩充）。 */
export const ERRCODE_HINTS: Record<number, string> = {
  '-1': '系统繁忙，建议稍后重试',
  0: '请求成功',
  40001: 'access_token 无效或 AppSecret 错误，已自动刷新令牌重试',
  40002: '不合法的凭证类型',
  40003: '不合法的 OpenID',
  40013: '不合法的 AppID',
  40014: '不合法的 access_token，请检查令牌来源',
  40125: '不合法的 AppSecret',
  40164: '调用接口的 IP 不在白名单中，请在公众平台配置 IP 白名单',
  41001: '缺少 access_token 参数',
  42001: 'access_token 已超时，已自动刷新令牌重试',
  45009: '接口调用频率超过上限',
  45011: 'API 调用太频繁，请稍候再试',
  48001: 'api 功能未授权，请确认公众号已获得该接口权限',
  50002: '用户受限，可能是违规后接口被封禁',
};

/**
 * 根据微信返回体构造合适的错误对象。
 * @param body 微信返回的 JSON 对象（含 errcode/errmsg）。
 */
export function buildApiError(body: {
  errcode: number;
  errmsg?: string;
  [k: string]: unknown;
}): WxApiError {
  const errcode = Number(body.errcode);
  const errmsg = String(body.errmsg ?? ERRCODE_HINTS[errcode] ?? 'wx api error');
  const rid = typeof body.rid === 'string' ? body.rid : undefined;
  if (RATE_LIMIT_ERRCODES.has(errcode)) {
    return new WxRateLimitError(errmsg, errcode, body);
  }
  return new WxApiError(errmsg, errcode, body, { rid });
}

/** 判断返回体是否为业务错误（errcode 存在且非 0）。 */
export function isApiErrorBody(body: unknown): body is { errcode: number; errmsg?: string } {
  return (
    typeof body === 'object' &&
    body !== null &&
    'errcode' in body &&
    typeof (body as { errcode: unknown }).errcode === 'number' &&
    (body as { errcode: number }).errcode !== 0
  );
}
