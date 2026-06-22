/**
 * 商家转账到零钱。
 *
 * 微信支付存在两套接口：
 * - 批次版（旧）：`/v3/transfer/batches`，以「批次 + 明细」模型组织，一个批次内含多笔明细。
 * - 新版商家转账（单笔）：`/v3/fund-app/mch-transfer/transfer-bills`，以「单笔转账单」模型组织，
 *   接口更简洁、合规校验更严格。新接入建议优先使用新版。
 *
 * 两者请求字段差异较大，且部分字段（收款人真实姓名等敏感信息）需 RSA-OAEP 加密并带
 * `Wechatpay-Serial` 头；未在此固化的字段请用逃生口 client.request() 自行组织 body。
 */
import type { PayClient } from '../client.js';

/**
 * 发起批量转账（批次版）。
 * @param body 批次参数（appid、out_batch_no、batch_name、total_amount、total_num、transfer_detail_list 等）。
 * @param opts.sensitiveSerial 含加密姓名等敏感字段时，对应公钥序列号。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012458842
 */
export function batch(
  client: PayClient,
  body: object,
  opts?: { sensitiveSerial?: string },
): Promise<Record<string, unknown>> {
  return client.request('POST', '/v3/transfer/batches', {
    body,
    sensitiveSerial: opts?.sensitiveSerial,
  });
}

/**
 * 发起商家转账（新版，单笔转账单）。
 * @param body 转账单参数（appid、out_bill_no、transfer_scene_id、openid、transfer_amount、
 *   transfer_remark、user_recv_perception、transfer_scene_report_infos 等）。
 * @param opts.sensitiveSerial 含加密 user_name 等敏感字段时，对应公钥序列号。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012716434
 */
export function transferBills(
  client: PayClient,
  body: object,
  opts?: { sensitiveSerial?: string },
): Promise<Record<string, unknown>> {
  return client.request('POST', '/v3/fund-app/mch-transfer/transfer-bills', {
    body,
    sensitiveSerial: opts?.sensitiveSerial,
  });
}

/**
 * 商户单号查询转账单（新版）。
 * @param outBillNo 商户单号。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012716437
 */
export function queryTransferByOutBillNo(
  client: PayClient,
  outBillNo: string,
): Promise<Record<string, unknown>> {
  return client.request(
    'GET',
    `/v3/fund-app/mch-transfer/transfer-bills/out-bill-no/${encodeURIComponent(outBillNo)}`,
  );
}

/**
 * 微信转账单号查询转账单（新版）。
 * @param transferBillNo 微信转账单号。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012716434
 */
export function queryTransferByBillNo(
  client: PayClient,
  transferBillNo: string,
): Promise<Record<string, unknown>> {
  return client.request(
    'GET',
    `/v3/fund-app/mch-transfer/transfer-bills/transfer-bill-no/${encodeURIComponent(transferBillNo)}`,
  );
}

/**
 * 撤销转账（新版）。
 * @param outBillNo 商户单号。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012716434
 */
export function cancelTransfer(
  client: PayClient,
  outBillNo: string,
): Promise<Record<string, unknown>> {
  return client.request(
    'POST',
    `/v3/fund-app/mch-transfer/transfer-bills/out-bill-no/${encodeURIComponent(outBillNo)}/cancel`,
  );
}

/**
 * 微信批次单号查询批次（批次版）。
 * @param batchId 微信批次单号。
 * @param query 可选 need_query_detail / offset / limit / detail_status。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012458844
 */
export function queryBatchById(
  client: PayClient,
  batchId: string,
  query?: Record<string, string | number | boolean>,
): Promise<Record<string, unknown>> {
  return client.request('GET', `/v3/transfer/batches/batch-id/${encodeURIComponent(batchId)}`, {
    query,
  });
}

/**
 * 商家批次单号查询批次（批次版）。
 * @param outBatchNo 商家批次单号。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012458845
 */
export function queryBatchByOutBatchNo(
  client: PayClient,
  outBatchNo: string,
  query?: Record<string, string | number | boolean>,
): Promise<Record<string, unknown>> {
  return client.request(
    'GET',
    `/v3/transfer/batches/out-batch-no/${encodeURIComponent(outBatchNo)}`,
    { query },
  );
}
