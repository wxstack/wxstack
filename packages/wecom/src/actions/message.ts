/**
 * 应用消息：发送与撤回。
 * @see https://developer.work.weixin.qq.com/document/path/90235
 */
import type { BaseClient } from '@wxstack/core';
import type { WecomBaseResponse } from '../types.js';

type Caller = Pick<BaseClient, 'request' | 'requestRaw'>;

/** 发送应用消息的返回体。 */
export interface SendMessageResponse extends WecomBaseResponse {
  /** 消息 ID，可用于撤回。 */
  msgid?: string;
  /** 不在范围内的成员/部门/标签。 */
  invaliduser?: string;
}

/**
 * 发送应用消息（body 含 agentid、touser/toparty/totag、msgtype 及对应消息体）。
 * 若构造客户端时配置了默认 agentid，未显式传入时会自动补上。
 * @see https://developer.work.weixin.qq.com/document/path/90236
 */
export function sendMessage(
  client: Caller,
  body: { msgtype: string } & Record<string, unknown>,
): Promise<SendMessageResponse> {
  return client.request({ method: 'POST', url: '/cgi-bin/message/send', body });
}

/**
 * 撤回应用消息。
 * @see https://developer.work.weixin.qq.com/document/path/94867
 */
export function recallMessage(client: Caller, msgid: string): Promise<WecomBaseResponse> {
  return client.request({ method: 'POST', url: '/cgi-bin/message/recall', body: { msgid } });
}
