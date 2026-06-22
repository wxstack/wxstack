/**
 * 账单：交易账单、资金流水账单，以及账单文件下载。
 *
 * 流程：先调 tradeBill/fundFlowBill 拿到 { download_url, hash_value, hash_type }，
 * 再用 downloadBill(download_url) 取原始文件字节（download_url 的 path+query 仍参与签名）。
 */
import type { QueryValue } from '@wxstack/core';
import type { PayClient } from '../client.js';

/** 账单文件下载信息。 */
export interface BillDownloadInfo {
  hash_type: string;
  hash_value: string;
  download_url: string;
}

/**
 * 申请交易账单。
 * @param params { bill_date, bill_type?, tar_type? } 等查询参数。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012791835
 */
export function tradeBill(
  client: PayClient,
  params: { bill_date: string } & Record<string, QueryValue>,
): Promise<BillDownloadInfo> {
  return client.request('GET', '/v3/bill/tradebill', { query: params });
}

/**
 * 申请资金流水账单。
 * @param params { bill_date, account_type?, tar_type? } 等查询参数。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012791836
 */
export function fundFlowBill(
  client: PayClient,
  params: { bill_date: string } & Record<string, QueryValue>,
): Promise<BillDownloadInfo> {
  return client.request('GET', '/v3/bill/fundflowbill', { query: params });
}

/**
 * 下载账单文件，返回原始字节（Buffer）。
 *
 * download_url 是带域名的完整 URL；其 path+query 必须参与签名，因此这里解析出
 * pathname + search 交给 requestRaw（responseType: arraybuffer）。账单文件本身无验签头，跳过验签。
 * @param downloadUrl tradeBill/fundFlowBill 返回的 download_url。
 * @returns 文件原始字节（可能为明文 CSV，或 tar.gz 压缩包，视申请时 tar_type）。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012791837
 */
export async function downloadBill(client: PayClient, downloadUrl: string): Promise<Buffer> {
  const u = new URL(downloadUrl);
  const path = u.pathname + u.search; // path+query 参与签名，不重复拼 query
  const resp = await client.requestRaw<Buffer>('GET', path, {
    responseType: 'arraybuffer',
    verify: false,
  });
  return resp.raw;
}
