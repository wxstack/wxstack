import * as bill from './actions/bill.js';
import * as profitSharing from './actions/profit-sharing.js';
import * as refunds from './actions/refunds.js';
import * as transactions from './actions/transactions.js';
import * as transfer from './actions/transfer.js';
/**
 * @wxstack/pay —— 微信支付 v3 SDK。
 *
 * 鉴权方式与公众号/小程序不同：不使用 access_token，而是「每个请求都用商户 API 私钥
 * 做 RSA-SHA256 签名」，应答用平台证书或「微信支付公钥」验签。
 *
 * 双 API 设计：
 * - 高层语义方法：client.transactions.jsapi(...)、client.refunds.create(...) 等；
 * - 逃生口：client.request(method, path, opts) / client.requestRaw(...)，可调用任意
 *   尚未封装的 v3 端点（自动带签名）。
 *
 * @example
 * ```ts
 * import { createPayClient } from '@wxstack/pay';
 * const pay = createPayClient({
 *   mchid: '190000xxxx',
 *   appid: 'wxabc...',
 *   privateKey: fs.readFileSync('apiclient_key.pem'),
 *   serialNo: 'AABBCC...',
 *   apiV3Key: '32 字节 APIv3 密钥',
 *   wechatPayPublicKey: fs.readFileSync('pub_key.pem'),
 *   wechatPayPublicKeyId: 'PUB_KEY_ID_xxx',
 * });
 * const { prepay_id } = await pay.transactions.jsapi({ ... });
 * const payParams = await pay.buildJsapiPayParams(prepay_id);
 * ```
 */
import { PayClient } from './client.js';
import type { PayClientConfig } from './types.js';

/** 将「(client, ...args) => ...」纯函数族绑定到具体 client，形成高层命名空间。 */
type Bound<T> = {
  [K in keyof T]: T[K] extends (client: PayClient, ...args: infer A) => infer R
    ? (...args: A) => R
    : never;
};

function bindGroup<T extends Record<string, unknown>>(client: PayClient, group: T): Bound<T> {
  const out: Record<string, unknown> = {};
  for (const [name, fn] of Object.entries(group)) {
    if (typeof fn === 'function') {
      out[name] = (...args: unknown[]) => (fn as (...a: unknown[]) => unknown)(client, ...args);
    }
  }
  return out as Bound<T>;
}

/** 带高层命名空间的支付客户端类型。 */
export type WxPayClient = PayClient & {
  /** 下单与订单查询/关闭。 */
  transactions: Bound<typeof transactions>;
  /** 退款。 */
  refunds: Bound<typeof refunds>;
  /** 分账。 */
  profitSharing: Bound<typeof profitSharing>;
  /** 商家转账到零钱（批次版 + 新版单笔）。 */
  transfer: Bound<typeof transfer>;
  /** 账单与下载。 */
  bill: Bound<typeof bill>;
};

/**
 * 创建微信支付 v3 客户端。
 * @param config 商户配置（mchid、私钥、序列号、APIv3Key，以及公钥/平台证书等）。
 */
export function createPayClient(config: PayClientConfig): WxPayClient {
  const client = new PayClient(config) as WxPayClient;
  client.transactions = bindGroup(client, transactions);
  client.refunds = bindGroup(client, refunds);
  client.profitSharing = bindGroup(client, profitSharing);
  client.transfer = bindGroup(client, transfer);
  client.bill = bindGroup(client, bill);
  return client;
}

export { PayClient } from './client.js';
export { PAY_BASE_URL } from './types.js';
export type {
  PayClientConfig,
  PayRequestOptions,
  SpConfig,
  CallbackInput,
  CallbackEnvelope,
  CallbackDecryptResult,
  DecryptedCertificate,
} from './types.js';
export type { BillDownloadInfo } from './actions/bill.js';

// re-export 常用核心错误类，便于上层 instanceof 判定。
export { WxApiError, WxCryptoError, WxHttpError } from '@wxstack/core';

// 全量接口表（覆盖官方文档抓取到的全部端点）。
export { endpoints as payEndpoints, createGeneratedApi } from './generated/endpoints.js';
export type {
  EndpointId,
  EndpointMeta,
  GeneratedApi,
  GeneratedCallExtra,
} from './generated/endpoints.js';
