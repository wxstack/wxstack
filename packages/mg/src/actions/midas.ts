/**
 * 虚拟支付（米大师 Midas）接口：余额查询、扣款、撤销、赠送。
 *
 * 这些接口除 access_token 外还需要 `sig`（AppKey 签名）与 `mp_sig`（session_key 签名）。
 * 端点函数本身只负责「拼路径 + 发请求」，签名既可由 client.ts 的高层方法自动计算后并入
 * body 传进来，也可由调用方自行算好注入。沙箱环境路径前缀为 `/cgi-bin/midas/sandbox/*`。
 *
 * @see https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment.html
 */
import type { BaseClient } from '@wxstack/core';
import type { MidasResult } from '../types.js';

/** Midas 接口名（不含前缀）。 */
export type MidasAction = 'getbalance' | 'pay' | 'cancelpay' | 'present';

/**
 * 拼出 Midas 接口完整路径。
 * @param action 接口名。
 * @param sandbox 是否走沙箱（true => /cgi-bin/midas/sandbox/<action>）。
 */
export function midasUrl(action: MidasAction, sandbox: boolean): string {
  return sandbox ? `/cgi-bin/midas/sandbox/${action}` : `/cgi-bin/midas/${action}`;
}

/**
 * 调用任意 Midas 接口（通用底座）。
 * @param client 已装配的客户端。
 * @param action 接口名。
 * @param body 完整请求体（应已包含 openid/zone_id/ts/sig/mp_sig 等）。
 * @param sandbox 是否走沙箱。
 */
export function midasCall(
  client: BaseClient,
  action: MidasAction,
  body: Record<string, unknown>,
  sandbox: boolean,
): Promise<MidasResult> {
  return client.request<MidasResult>({
    method: 'POST',
    url: midasUrl(action, sandbox),
    body,
  });
}

/**
 * 查询用户代币余额。
 * @see https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment.html
 */
export function getBalance(
  client: BaseClient,
  body: Record<string, unknown>,
  sandbox: boolean,
): Promise<MidasResult> {
  return midasCall(client, 'getbalance', body, sandbox);
}

/**
 * 扣减用户代币（下单 / 消费）。
 * @see https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment.html
 */
export function pay(
  client: BaseClient,
  body: Record<string, unknown>,
  sandbox: boolean,
): Promise<MidasResult> {
  return midasCall(client, 'pay', body, sandbox);
}

/**
 * 撤销扣款（取消之前的 pay）。
 * @see https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment.html
 */
export function cancelPay(
  client: BaseClient,
  body: Record<string, unknown>,
  sandbox: boolean,
): Promise<MidasResult> {
  return midasCall(client, 'cancelpay', body, sandbox);
}

/**
 * 赠送代币。
 * @see https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment.html
 */
export function present(
  client: BaseClient,
  body: Record<string, unknown>,
  sandbox: boolean,
): Promise<MidasResult> {
  return midasCall(client, 'present', body, sandbox);
}
