/**
 * 分账。
 */
import type { QueryValue } from '@wxstack/core';
import type { PayClient } from '../client.js';

/**
 * 请求分账。
 * @param body 分账参数（appid、transaction_id、out_order_no、receivers 等）。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012458841
 */
export function create(client: PayClient, body: object): Promise<Record<string, unknown>> {
  return client.request('POST', '/v3/profitsharing/orders', { body });
}

/**
 * 查询分账结果。
 * @param outOrderNo 商户分账单号。
 * @param params { transaction_id }。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012458842
 */
export function query(
  client: PayClient,
  outOrderNo: string,
  params: { transaction_id: string } & Record<string, QueryValue>,
): Promise<Record<string, unknown>> {
  return client.request('GET', `/v3/profitsharing/orders/${encodeURIComponent(outOrderNo)}`, {
    query: params,
  });
}

/**
 * 添加分账接收方。
 * @param body 接收方参数（appid、type、account 等；姓名等敏感字段需加密并带 Wechatpay-Serial）。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012458846
 */
export function addReceiver(
  client: PayClient,
  body: object,
  opts?: { sensitiveSerial?: string },
): Promise<Record<string, unknown>> {
  return client.request('POST', '/v3/profitsharing/receivers/add', {
    body,
    sensitiveSerial: opts?.sensitiveSerial,
  });
}

/**
 * 删除分账接收方。
 * @param body 接收方参数（appid、type、account）。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012458847
 */
export function deleteReceiver(client: PayClient, body: object): Promise<Record<string, unknown>> {
  return client.request('POST', '/v3/profitsharing/receivers/delete', { body });
}
