/**
 * 基础下单与订单查询（直连/服务商通用，字段差异由调用方在 body 自填）。
 *
 * 所有函数均为纯函数：(client, params) => client.request(...)。
 */
import type { QueryValue } from '@wxstack/core';
import type { PayClient } from '../client.js';

/**
 * JSAPI / 小程序下单。
 * @returns { prepay_id } 预支付交易会话标识。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012791856
 */
export function jsapi(client: PayClient, body: object): Promise<{ prepay_id: string }> {
  return client.request('POST', '/v3/pay/transactions/jsapi', { body });
}

/**
 * App 下单。
 * @returns { prepay_id } 预支付交易会话标识。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012791884
 */
export function app(client: PayClient, body: object): Promise<{ prepay_id: string }> {
  return client.request('POST', '/v3/pay/transactions/app', { body });
}

/**
 * Native 下单。
 * @returns { code_url } 二维码链接。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012791870
 */
export function native(client: PayClient, body: object): Promise<{ code_url: string }> {
  return client.request('POST', '/v3/pay/transactions/native', { body });
}

/**
 * H5 下单。
 * @returns { h5_url } H5 支付跳转链接。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012791898
 */
export function h5(client: PayClient, body: object): Promise<{ h5_url: string }> {
  return client.request('POST', '/v3/pay/transactions/h5', { body });
}

/**
 * 微信支付订单号查询订单。
 * @param transactionId 微信支付订单号。
 * @param params { mchid }（服务商场景另需 sub_mchid，请用逃生口）。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012791900
 */
export function queryById(
  client: PayClient,
  transactionId: string,
  params: { mchid: string } & Record<string, QueryValue>,
): Promise<Record<string, unknown>> {
  return client.request('GET', `/v3/pay/transactions/id/${encodeURIComponent(transactionId)}`, {
    query: params,
  });
}

/**
 * 商户订单号查询订单。
 * @param outTradeNo 商户订单号。
 * @param params { mchid }。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012791901
 */
export function queryByOutTradeNo(
  client: PayClient,
  outTradeNo: string,
  params: { mchid: string } & Record<string, QueryValue>,
): Promise<Record<string, unknown>> {
  return client.request(
    'GET',
    `/v3/pay/transactions/out-trade-no/${encodeURIComponent(outTradeNo)}`,
    { query: params },
  );
}

/**
 * 关闭订单。
 * @param outTradeNo 商户订单号。
 * @param params { mchid }（服务商另需 sub_mchid）。
 * @see https://pay.weixin.qq.com/doc/v3/merchant/4012791899
 */
export function close(
  client: PayClient,
  outTradeNo: string,
  params: { mchid: string } & Record<string, unknown>,
): Promise<void> {
  return client.request(
    'POST',
    `/v3/pay/transactions/out-trade-no/${encodeURIComponent(outTradeNo)}/close`,
    { body: params },
  );
}
