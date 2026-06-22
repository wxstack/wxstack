/**
 * 退款（境内）。
 */
import type { PayClient } from '../client.js';

/**
 * 申请退款。
 * @param body 退款参数（out_trade_no/transaction_id、out_refund_no、amount 等）。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012791862
 */
export function create(client: PayClient, body: object): Promise<Record<string, unknown>> {
  return client.request('POST', '/v3/refund/domestic/refunds', { body });
}

/**
 * 查询单笔退款（商户退款单号）。
 * @param outRefundNo 商户退款单号。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012791863
 */
export function query(client: PayClient, outRefundNo: string): Promise<Record<string, unknown>> {
  return client.request('GET', `/v3/refund/domestic/refunds/${encodeURIComponent(outRefundNo)}`);
}
