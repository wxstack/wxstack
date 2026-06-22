/**
 * 可插拔日志接口，默认 no-op，并内置敏感字段自动脱敏。
 *
 * 安全要求（设计文档 §8）：token / secret / 私钥 / 手机号等一律打码，
 * 避免敏感信息进入日志系统。
 */

/** 日志级别。 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/** 日志器接口。 */
export interface Logger {
  debug(msg: string, meta?: Record<string, unknown>): void;
  info(msg: string, meta?: Record<string, unknown>): void;
  warn(msg: string, meta?: Record<string, unknown>): void;
  error(msg: string, meta?: Record<string, unknown>): void;
}

/** 默认无操作日志器。 */
export const noopLogger: Logger = {
  debug() {},
  info() {},
  warn() {},
  error() {},
};

/** 需要脱敏的字段名（小写匹配）。 */
const SENSITIVE_KEYS = [
  'access_token',
  'refresh_token',
  'component_access_token',
  'authorizer_access_token',
  'authorizer_refresh_token',
  'suite_access_token',
  'provider_access_token',
  'secret',
  'appsecret',
  'corpsecret',
  'apiv3key',
  'api_v3_key',
  'mch_key',
  'private_key',
  'privatekey',
  'session_key',
  'ticket',
  'paysign',
  'sign',
  'signature',
  'authorization',
];

/** 对单个字符串做打码：保留首尾少量字符。 */
export function maskString(value: string): string {
  if (value.length <= 6) return '***';
  return `${value.slice(0, 3)}***${value.slice(-2)}`;
}

/**
 * 递归脱敏对象，命中敏感键则打码；同时对疑似手机号做打码。
 * 仅用于日志输出，不改动原始对象。
 */
export function redact(input: unknown, depth = 0): unknown {
  if (depth > 6) return '[Truncated]';
  if (typeof input === 'string') {
    // 疑似手机号（11 位数字）打码
    if (/^1\d{10}$/.test(input)) return `${input.slice(0, 3)}****${input.slice(-2)}`;
    return input;
  }
  if (Array.isArray(input)) return input.map((v) => redact(v, depth + 1));
  if (input && typeof input === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(input)) {
      if (SENSITIVE_KEYS.includes(k.toLowerCase())) {
        out[k] = typeof v === 'string' ? maskString(v) : '***';
      } else {
        out[k] = redact(v, depth + 1);
      }
    }
    return out;
  }
  return input;
}

/**
 * 基于 console 的简单日志器（开发用）。生产建议注入自有日志器。
 * @param minLevel 最低输出级别。
 */
export function createConsoleLogger(minLevel: LogLevel = 'info'): Logger {
  const order: Record<LogLevel, number> = { debug: 0, info: 1, warn: 2, error: 3 };
  const min = order[minLevel];
  const emit = (level: LogLevel, msg: string, meta?: Record<string, unknown>): void => {
    if (order[level] < min) return;
    const safeMeta = meta ? redact(meta) : undefined;
    // eslint-disable-next-line no-console
    console[level === 'debug' ? 'log' : level](`[wxstack][${level}] ${msg}`, safeMeta ?? '');
  };
  return {
    debug: (m, meta) => emit('debug', m, meta),
    info: (m, meta) => emit('info', m, meta),
    warn: (m, meta) => emit('warn', m, meta),
    error: (m, meta) => emit('error', m, meta),
  };
}
