// 本文件由 scripts/gen-endpoints.mjs 自动生成，请勿手改。
// 数据来源：官方文档站点 developers.weixin.qq.com，覆盖该平台已抓取的全部服务端接口与参数。
// 每个端点是「自动鉴权薄封装」；未在高层方法中显式封装的接口均可在此调用。

import type { CallOptions, QueryValue, RequestBody } from '@wxstack/core';

/** 添加分账方 —— 请求体。 */
export interface B2bAddprofitsharingaccountBody {
  /** 分账接收方关系类型 */
  profit_sharing_relation_type: string;
  /** 分账接收方类型 */
  payee_type: string;
  /** 分账接收方标识。 根据payee_type填入openid或商户号： 当payee_type="PAYEE_TYPE_EXTERNAL_USER"时填openid； 当payee_type="PAYE */
  payee_id: string;
  /** 分账接收方名称（分账接收方为商户号时必填）。 payee_type="PAYEE_TYPE_EXTERNAL_MERCHANT"时，填写商户名称 */
  payee_name?: string;
}
/** 添加分账方 —— 查询参数。 */
export interface B2bAddprofitsharingaccountQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 添加分账方 —— 返回体。 */
export interface B2bAddprofitsharingaccountResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 关闭订单 —— 请求体。 */
export interface B2bCloseb2borderBody {
  /** 微信商户号。长度限制[1,32]。由微信支付生成并下发的商户号。 示例值：1230000109 */
  mchid: string;
  /** 商户订单号。长度限制[6,32]。原支付交易对应的商户订单号。商户订单号和B2b支付订单号必填其一 示例值：1217752501201407033233368018 */
  out_trade_no?: string;
  /** B2b支付订单号。长度限制[1,32]。原支付交易对应的B2b支付订单号。商户订单号和B2b支付订单号必填其一 示例值：o202307291423123564754773 */
  order_id?: string;
}
/** 关闭订单 —— 查询参数。 */
export interface B2bCloseb2borderQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 关闭订单 —— 返回体。 */
export interface B2bCloseb2borderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 请求分账 —— 请求体。 */
export interface B2bCreateprofitsharingorderBody {
  /** 子商户id。在B2b小程序中进件完成返回的子商户 id */
  mchid: string;
  /** 支付单 id。在B2b小程序中下单的订单 id */
  out_trade_no: string;
  /** 分账费用。单位:分，不超过支付单本身的金额 */
  profit_fee: number;
  /** 分账接收方类型。同添加分账方时填入的内容 */
  receiver_type: string;
  /** 分账接收方账号。同添加分账方时填入的内容 */
  receiver_account: string;
}
/** 请求分账 —— 查询参数。 */
export interface B2bCreateprofitsharingorderQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 请求分账 —— 返回体。 */
export interface B2bCreateprofitsharingorderResp {
  /** 错误码 */
  errmsg?: string;
  /** 错误信息 */
  errcode?: number;
}

/** 跳转银行转账页面 —— 请求体。 */
export interface B2bCreatewqflinkBody {
  /** 银行转账开通单号 */
  request_no: string;
}
/** 跳转银行转账页面 —— 返回体。 */
export interface B2bCreatewqflinkResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** url */
  url?: string;
  /** expire_time */
  expire_time?: string;
}

/** 删除分账方 —— 请求体。 */
export interface B2bDelprofitsharingaccountBody {
  /** 分账接收方类型 */
  payee_type: string;
  /** 分账接收方标识。 根据payee_type填入openid或商户号： 当payee_type="PAYEE_TYPE_EXTERNAL_USER"时填openid； 当payee_type="PAYE */
  payee_id: string;
}
/** 删除分账方 —— 查询参数。 */
export interface B2bDelprofitsharingaccountQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 删除分账方 —— 返回体。 */
export interface B2bDelprofitsharingaccountResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 接口下载交易账单与资金账单 —— 请求体。 */
export interface B2bDownloadbillBody {
  /** 商户号 */
  mchid: string;
  /** 账单日期，格式:yyyymmdd */
  bill_date: string;
}
/** 接口下载交易账单与资金账单 —— 查询参数。 */
export interface B2bDownloadbillQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 接口下载交易账单与资金账单 —— 返回体。 */
export interface B2bDownloadbillResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 微信支付渠道支付成功订单下载链接，包括支付成功时间在当天的订单 */
  success_bill_url?: string;
  /** 微信支付渠道退款单下载链接，发起退款成功在当天的退款单 */
  refund_bill_url?: string;
  /** 包括微信支付渠道支付成功和退款单的下载链接 */
  all_bill_url?: string;
  /** 微信支付渠道的资金账单下载链接 */
  fund_bill_url?: string;
  /** 日终账户可提现金额 */
  ended_day_avail_amt?: number;
  /** 日终账户待结算金额 */
  ended_day_frozen_amt?: number;
  /** 日终账户总金额，等于日终账户可提现金额+日终账户待结算金额 */
  ended_day_total_amt?: number;
  /** 分账成功订单下载链接，包括分账成功时间在当天的订单 */
  profit_sharing_bill_url?: string;
  /** 分账回退单下载链接，发起分账回退成功在当天的退款单 */
  profit_refund_bill_url?: string;
  /** 银行转账渠道资金帐单下载链接 */
  bankpay_fund_bill_url?: string;
}

/** 完成分账 —— 请求体。 */
export interface B2bFinishprofitsharingorderBody {
  /** 子商户id。在B2b小程序中进件完成返回的子商户 id */
  mchid: string;
  /** 订单 id。在B2b小程序中下单的订单 id */
  out_trade_no: string;
}
/** 完成分账 —— 查询参数。 */
export interface B2bFinishprofitsharingorderQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 完成分账 —— 返回体。 */
export interface B2bFinishprofitsharingorderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取密钥AppKey —— 请求体。 */
export interface B2bGetappkeyBody {
  /** 微信商户号。长度限制[1,32]。由微信支付生成并下发的商户号。 */
  mchid: string;
}
/** 获取密钥AppKey —— 返回体。 */
export interface B2bGetappkeyResp {
  /** 现网AppKey。由平台生成并下发的现网应用密钥。 */
  appkey?: string;
  /** 沙箱AppKey。由平台生成并下发的沙箱应用密钥。 */
  sandbox_appkey?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询账户余额 —— 请求体。 */
export interface B2bGetmchbalanceBody {
  /** 微信商户号。长度限制[1,32]。由微信支付生成并下发的商户号。 */
  mchid: string;
}
/** 查询账户余额 —— 查询参数。 */
export interface B2bGetmchbalanceQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 查询账户余额 —— 返回体。 */
export interface B2bGetmchbalanceResp {
  /** 账户资金。商户号的账户资金 */
  balance_list?: unknown[];
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取小程序下所有商户的信息 —— 请求体（文档未列字段，放行任意键）。 */
export type B2bGetmchinfoBody = Record<string, unknown>;
/** 获取小程序下所有商户的信息 —— 返回体。 */
export interface B2bGetmchinfoResp {
  /** 商户列表 */
  mch_list?: unknown[];
  /** 总数 */
  total?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询订单 —— 请求体。 */
export interface B2bGetorderBody {
  /** 商户号 */
  mchid: string;
  /** 商户订单号。长度限制[6,32]。商户系统内部订单号，只能是数字、大小写字母_-*且在同一个商户号下唯一 示例值：1217752501201407033233368018（与order_id二选一填写 */
  out_trade_no?: string;
  /** B2b支付订单号。长度限制[1,32]。B2b支付生成的订单号 示例值：o202307291423123564754773（与out_trade_no二选一填写） */
  order_id?: string;
}
/** 查询订单 —— 查询参数。 */
export interface B2bGetorderQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 查询订单 —— 返回体。 */
export interface B2bGetorderResp {
  /** 小程序ID。长度限制[1,32]。商户申请的小程序对应的appid 示例值：wx8888888888888888 */
  appid?: string;
  /** 微信商户号。长度限制[1,32]。由微信支付生成并下发的商户号。 示例值：1230000109 */
  mchid?: string;
  /** 商户订单号。长度限制[6,32]。商户系统内部订单号，只能是数字、大小写字母_-*且在同一个商户号下唯一 示例值：1217752501201407033233368018 */
  out_trade_no?: string;
  /** B2b支付订单号。长度限制[1,32]。B2b支付生成的订单号 示例值：o202307291423123564754773 */
  order_id?: string;
  /** 订单状态，长度限制[1,32]。枚举值 ORDER_INIT：订单初始化 ORDER_PRE_PAY：订单预下单成功，待支付 ORDER_PAY_SUCC：订单支付成功 ORDER_CLOSE：订单已 */
  pay_status?: string;
  /** 支付完成时间。长度限制[1,32]。支付完成时间，标准北京时间，时区为东八区，格式为yyyy-MM-dd HH:mm:ss 示例值：2023-07-20 17:04:28 */
  pay_time?: string;
  /** 附加数据。长度限制[1,128]。在查询API和支付通知中原样返回，可作为自定义参数使用，实际情况下只有支付完成状态才会返回该字段。 示例值：自定义数据 */
  attach?: string;
  /** 支付者。用户在直连商户appid下的唯一标识。 示例值：oUpF8uMuAJO_M2pxb1Q9zNjWeS6o */
  payer_openid?: string;
  /** 订单金额。订单金额信息，仅支持人民币 */
  amount?: Record<string, unknown>;
  /** 微信支付订单号。微信支付生成的订单号（合单支付场景不返回） 示例值：2123191423123564754773 */
  wxpay_transaction_id?: string;
  /** 订单环境。订单环境 0：正式环境 1：沙箱环境 示例值：0 */
  env?: number;
  /** 结算状态。长度限制[1,32]。枚举值 0：未结算 1：结算中 2：结算完成 示例值：0 */
  settle_status?: number;
  /** 结算完成时间。结算完成时间，当结算状态为结算完成时有返回，标准北京时间，时区为东八区，格式为yyyy-MM-dd HH:mm:ss 示例值：2025-01-01 00:00:00 */
  settle_finish_time?: string;
  /** 技术服务费率。技术服务费率，万分比（比如 60 指的是 0.60%），当结算状态为结算完成时有返回 示例值：60 */
  platform_profit_percent?: number;
  /** 技术服务费。技术服务费，单位为分，当结算状态为结算完成时有返回 示例值：6 */
  platform_profit_fee?: number;
  /** 银行类型。支付类型说明。仅支付方式为微信支付且订单支付成功后返回，格式为银行简码_具体类型(DEBIT借记卡/CREDIT信用卡/ECNY数字人民币)，例如ICBC_DEBIT代表工商银行借记卡，非银 */
  bank_type?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询退款 —— 请求体。 */
export interface B2bGetrefundBody {
  /** 微信商户号。长度限制[1,32]。由微信支付生成并下发的商户号。 */
  mchid: string;
  /** 商户退款单号。长度限制[6, 32] 。商户系统内部退款单号，商户系统内部唯一，只能是数字、大小写字母_-*，同一退款单号多次请求只退一笔。 */
  out_refund_no: string;
  /** B2b支付退款单号。长度限制[1,32]。商户退款单号和B2b支付退款单号必填其一 */
  refund_id?: string;
}
/** 查询退款 —— 查询参数。 */
export interface B2bGetrefundQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 查询退款 —— 返回体。 */
export interface B2bGetrefundResp {
  /** B2b支付退款单号。长度限制[1, 32]。 */
  refund_id?: string;
  /** 商户退款单号。长度限制[6, 32] 是 商户系统内部退款单号，商户系统内部唯一，只能是数字、大小写字母_-*，同一退款单号多次请求只退一笔。 */
  out_refund_no?: string;
  /** B2b支付订单号。长度限制[1,32]。原支付交易对应的B2b支付订单号 */
  order_id?: string;
  /** 商户订单号。长度限制[6,32]。原支付交易对应的商户订单号 */
  out_trade_no?: string;
  /** 退款创建时间。长度限制[1, 32]。退款受理时间，标准北京时间，时区为东八区，格式为yyyy-MM-dd HH:mm:ss。 */
  create_time?: string;
  /** 退款成功时间。长度限制[1, 32] 。当退款状态为退款成功时有返回，标准北京时间，时区为东八区，格式为yyyy-MM-dd HH:mm:ss。 */
  refund_time?: string;
  /** 退款状态。长度限制[1, 32]。退款单状态，枚举值： REFUND_INIT：退款单初始化 REFUND_PROCESSING：退款处理中 REFUND_SUCC：退款成功 REFUND_FAIL： */
  refund_status?: string;
  /** 退款说明。长度限制[1, 256]。 */
  refund_desc?: string;
  /** 金额信息。金额详细信息，仅支持人民币 */
  amount?: Record<string, unknown>;
  /** 微信支付退款单号。长度限制[1, 32] */
  wxpay_refund_id?: string;
  /** 技术服务费回退状态，枚举值： 0：技术服务费未回退 1：技术服务费回退处理中 2：技术服务费回退成功 3：无需回退技术服务费 */
  reverse_sett_state?: number;
  /** 技术服务费回退完成时间，当技术服务费回退状态为成功时有返回，标准北京时间，时区为东八区，格式为yyyy-MM-dd HH:mm:ss */
  reverse_sett_finish_time?: string;
  /** 技术服务费率，万分比（比如 60 指的是 0.60%），当技术服务费回退状态为成功时有返回 */
  platform_profit_percent?: number;
  /** 回退技术服务费，单位为分，当技术服务费回退状态为成功时有返回 */
  reverse_sett_amt?: number;
  /** 退款渠道信息，仅支付方式为微信支付且订单退款成功后返回 */
  refund_channel_info?: Record<string, unknown>;
  /** 退款商品描述。 */
  description?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询银行转账的技术服务费率 —— 请求体。 */
export interface B2bGetwqfchargefeeBody {
  /** 商户号 */
  sub_mchid: string;
}
/** 查询银行转账的技术服务费率 —— 返回体。 */
export interface B2bGetwqfchargefeeResp {
  /** 商户名称 */
  merchant_name?: string;
  /** 认证费率分子。 认证的门店的费率分子，分母统一为10000。 示例：费率千四（4/1000）, certified_charge_fee_numerator = 40 */
  certified_charge_fee_numerator?: number;
  /** 未认证的费率分子。 未认证的费率分子，分母统一为10000。 示例：费率千六（6/1000）, uncertified_charge_fee_numerator = 60 */
  uncertified_charge_fee_numerator?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 发起手动提现 —— 请求体。 */
export interface B2bWithdrawBody {
  /** 微信商户号。长度限制[1,32]。由微信支付生成并下发的商户号。 提现金额， 示例值： 是 商户外部提现单号，同一个商户号下唯一，只允许数字和大小写字母_-*，长度要求为[6,32]。 示例值：aaa */
  mchid: string;
  /** 提现金额，单位为分，金额需大于0。 */
  withdraw_amount: number;
  /** 外部提现单号。长度限制[6,32]。商户外部提现单号，同一个商户号下唯一，只允许数字和大小写字母_-* */
  out_withdraw_no: string;
}
/** 发起手动提现 —— 查询参数。 */
export interface B2bWithdrawQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 发起手动提现 —— 返回体。 */
export interface B2bWithdrawResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询分账方 —— 请求体。 */
export interface B2bQueryprofitsharingaccountBody {
  /** 分账方数据起始位置的偏移量，默认值为0 */
  offset?: number;
  /** 返回分账方数据的最大条数，默认值为10 */
  limit?: number;
}
/** 查询分账方 —— 查询参数。 */
export interface B2bQueryprofitsharingaccountQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 查询分账方 —— 返回体。 */
export interface B2bQueryprofitsharingaccountResp {
  /** - */
  errcode?: number;
  /** - */
  errmsg?: string;
  /** 包含多个RetailProfitSharingAccountInfo对象 */
  account_list?: unknown[];
}

/** 查询分账结果 —— 请求体。 */
export interface B2bQueryprofitsharingorderBody {
  /** 支付单 id。在B2b小程序中下单的订单 id */
  out_trade_no: string;
  /** 分账接收方类型。同添加分账方时填入的内容 */
  receiver_type: string;
  /** 分账接收方账号。同添加分账方时填入的内容 */
  receiver_account: string;
  /** 商户号 */
  mchid: string;
}
/** 查询分账结果 —— 查询参数。 */
export interface B2bQueryprofitsharingorderQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 查询分账结果 —— 返回体。 */
export interface B2bQueryprofitsharingorderResp {
  /** 分帐状态 */
  order_status?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误信息（若 order_status 不为成功，且 errmsg 非空，可参考具体原因： S_NO_ENOUGH_MONEY：分账余额不足。可能是分账金额超过可分账余额，或者订单已过期解冻。建议调用 */
  errmsg?: string;
}

/** 查询分账剩余金额 —— 请求体。 */
export interface B2bQueryprofitsharingremainamtBody {
  /** 子商户id。在B2b小程序中进件完成返回的子商户 id */
  mchid: string;
  /** 订单 id。在B2b小程序中下单的订单 id */
  out_trade_no: string;
}
/** 查询分账剩余金额 —— 查询参数。 */
export interface B2bQueryprofitsharingremainamtQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 查询分账剩余金额 —— 返回体。 */
export interface B2bQueryprofitsharingremainamtResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 冻结金额，单位：分 */
  remain_amt?: number;
}

/** 查询分账回退结果 —— 请求体。 */
export interface B2bQueryrefundprofitsharingorderBody {
  /** 订单 id。在B2b小程序中下单后返回的订单 id */
  out_trade_no: string;
  /** 退款单 id。在B2b小程序中下单后返回的退款单 id */
  out_refund_no: string;
  /** 商户号 id。发起这笔订单的商户号 */
  mchid: string;
  /** 退款分账方类型。同添加分账方时填入的内容 */
  payee_type: string;
  /** 退款分账方 id。同添加分账方时填入的内容 */
  payee_id: string;
}
/** 查询分账回退结果 —— 查询参数。 */
export interface B2bQueryrefundprofitsharingorderQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 查询分账回退结果 —— 返回体。 */
export interface B2bQueryrefundprofitsharingorderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 订单状态 */
  order_status?: number;
}

/** 查询提现状态 —— 请求体。 */
export interface B2bQuerywithdrawBody {
  /** 微信商户号。长度限制[1,32]。由微信支付生成并下发的商户号。 提现金额， 示例值： 是 商户外部提现单号，同一个商户号下唯一，只允许数字和大小写字母_-*，长度要求为[6,32]。 示例值：aaa */
  mchid: string;
  /** 外部提现单号。长度限制[6,32]。商户发起提现时传入的外部提现单号。 */
  out_withdraw_no: string;
}
/** 查询提现状态 —— 查询参数。 */
export interface B2bQuerywithdrawQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 查询提现状态 —— 返回体。 */
export interface B2bQuerywithdrawResp {
  /** 外部提现单号。长度限制[6,32]。商户发起提现时传入的外部提现单号。 */
  out_withdraw_no?: string;
  /** 提现金额 */
  withdraw_amount?: number;
  /** 提现状态 */
  status?: string;
  /** 提现失败原因（仅当提现状态为 WITHDRAW_FAIL 时返回） */
  fail_reason?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 退款 —— 请求体。 */
export interface B2bRefundBody {
  /** 微信商户号。长度限制[1,32]。由微信支付生成并下发的商户号。 */
  mchid: string;
  /** 商户订单号。长度限制[6,32]。原支付交易对应的商户订单号。商户订单号和B2b支付订单号必填其一 */
  out_trade_no?: string;
  /** B2b支付订单号。长度限制[1,32]。原支付交易对应的B2b支付订单号。商户订单号和B2b支付订单号必填其一 */
  order_id?: string;
  /** 商户退款单号。长度限制[6, 32] 。商户系统内部退款单号，商户系统内部唯一，只能是数字、大小写字母_-*，同一退款单号多次请求只退一笔。 */
  out_refund_no: string;
  /** 退款金额。单位为分，只能为整数，不能超过原订单支付金额。 */
  refund_amount: number;
  /** 退款来源，枚举值 1：人工客服退款 2：用户自己退款 3：其他 */
  refund_from: number;
  /** 退款原因。枚举值 0：暂无描述 1：产品问题 2：售后问题 3：意愿问题 4：价格问题 5：其他原因 */
  refund_reason?: number;
  /** 退款商品描述。长度限制[1,127] */
  description?: string;
}
/** 退款 —— 查询参数。 */
export interface B2bRefundQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 退款 —— 返回体。 */
export interface B2bRefundResp {
  /** B2b支付退款单号。长度限制[1, 32] */
  refund_id?: string;
  /** 商户退款单号。长度限制[6, 32]。户系统内部退款单号，商户系统内部唯一，只能是数字、大小写字母_-*，同一退款单号多次请求只退一笔。 */
  out_refund_no?: string;
  /** B2b支付订单号。长度限制[1,32]。原支付交易对应的B2b支付订单号 */
  order_id?: string;
  /** 商户订单号。长度限制[1,32]。原支付交易对应的B2b支付订单号 */
  out_trade_no?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 请求分账回退 —— 请求体。 */
export interface B2bRefundprofitsharingBody {
  /** 订单 id。在B2b小程序中下单的订单 id */
  out_trade_no: string;
  /** 退款单 id。在B2b小程序中下单的退款单 id */
  out_refund_no: string;
  /** 退款分账方类型。同添加分账方时填入的内容 */
  payee_type: string;
  /** 退款分账方 id。同添加分账方时填入的内容 */
  payee_id: string;
  /** 商户号 id。发起这笔订单的商户号 */
  mchid: string;
  /** 退款金额。退款金额，单位为分 */
  refund_amt: number;
}
/** 请求分账回退 —— 查询参数。 */
export interface B2bRefundprofitsharingQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 请求分账回退 —— 返回体。 */
export interface B2bRefundprofitsharingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 申请开通银行转账 —— 请求体。 */
export interface B2bRegisteronlywqfBody {
  /** 订单号，原有进件订单号 */
  out_registration_id: string;
}
/** 申请开通银行转账 —— 返回体。 */
export interface B2bRegisteronlywqfResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询商户号开通状态 —— 请求体。 */
export interface B2bRetailgetmchorderBody {
  /** 订单号，某个特定的进件订单号（不填则表示拉出当前小程序的所有进件单） */
  out_registration_id?: string;
  /** 分页拉取偏移 */
  page_index?: number;
  /** 分页拉取总量限制 */
  page_size?: number;
}
/** 查询商户号开通状态 —— 返回体。 */
export interface B2bRetailgetmchorderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 订单列表 */
  list?: unknown[];
  /** 返回订单总数 */
  total?: number;
}

/** 商户号进件 —— 请求体。 */
export interface B2bRetailregistermchBody {
  /** 法人证件类型。 0-默认即大陆身份证，1-大陆身份证，2-其他国家或地区居民护照，3-中国香港居民来往内地通行证，4-中国澳门居民–来往内地通行证，5-中国台湾居民–来往大陆通行证，6-外国人居留证（ */
  id_doc_type_num: number;
  /** 经营者/法人身份证信息。当id_doc_type_num为0和1时必填 */
  id_card_info?: Record<string, unknown>;
  /** 经营者/法人其他类型证件信息。当id_doc_type_num不为0和1时必填 */
  id_doc_info?: Record<string, unknown>;
  /** 结算银行账户 */
  account_info: Record<string, unknown>;
  /** 超级管理员信息 */
  contact_info: Record<string, unknown>;
  /** 营业执照 */
  business_license: Record<string, unknown>;
  /** 商户名缩写 */
  merchant_shortname: string;
  /** 主体类型。个体户-0，企业-1 */
  organization_type: boolean;
  /** 行业特殊资质资料。 */
  qualification: Record<string, unknown>;
  /** 补充说明。示例值：特殊情况，说明原因 */
  business_addition_desc?: string;
  /** 补充材料 材料图片id可通过上传商户图片API获取获取。如有多张图片，请拼接成一张后上传。 */
  business_addition_pics?: string;
  /** 开通支付方式。 只开通微信支付-0 同时开通微信支付和银行转账-1 */
  open_type: number;
  /** 补充信息 */
  ext_register_info: Record<string, unknown>;
  /** 商户 ip 地址。支持 iPv4 和 iPv6 */
  client_ip: string;
}
/** 商户号进件 —— 返回体。 */
export interface B2bRetailregistermchResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 进件申请单号 可用于查询进件状态 */
  order_no?: string;
}

/** 上传商户图片 —— 请求体。 */
export interface B2bRetailuploadmchfileBody {
  /** 文件名 */
  file_name: string;
  /** 文件二进制流的 Base64 编码 */
  file: unknown;
}
/** 上传商户图片 —— 返回体。 */
export interface B2bRetailuploadmchfileResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 文件 id */
  file_id?: string;
}

/** 微信支付自动提现接口 —— 请求体。 */
export interface B2bSetautowithdrawBody {
  /** 微信商户号。长度限制[1,32]。由微信支付生成并下发的商户号。 */
  mchid: string;
  /** 自动提现状态。是否开启自动提现 */
  status?: number;
  /** 留存额。账户留存金额，单位为分。每天根据昨日"可提现金额"账户的日终余额减去留存额，发起提现并到账。若发起提现申请时，"可提现金额账户"的当前余额少于昨日日终余额，则提现失败，返回余额不足的错误。 */
  retain_amt?: number;
}
/** 微信支付自动提现接口 —— 查询参数。 */
export interface B2bSetautowithdrawQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 微信支付自动提现接口 —— 返回体。 */
export interface B2bSetautowithdrawResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 报名微信支付技术服务费优惠活动 —— 请求体。 */
export interface B2bSetmchprofitrateBody {
  /** 商户号 */
  sub_mchid: string;
  /** 费率 万分比，比如 40 指的是 0.40% */
  profit_rate: number;
}
/** 报名微信支付技术服务费优惠活动 —— 返回体。 */
export interface B2bSetmchprofitrateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 报名银行转账技术服务费优惠活动 —— 请求体。 */
export interface B2bUpdatewqfchargefeeBody {
  /** 商户号 */
  sub_mchid: string;
  /** 认证费率分子 认证门店的费率分子，分母统一为10000，certified_charge_fee_numerator 取值范围应该大于等于22，小于等于40。 示例：费率千四（4/1000）, cer */
  certified_charge_fee_numerator: number;
}
/** 报名银行转账技术服务费优惠活动 —— 返回体。 */
export interface B2bUpdatewqfchargefeeResp {
  /** 商户名称 */
  merchant_name?: string;
  /** 认证费率分子。 认证的门店的费率分子，分母统一为10000。 示例：费率千四（4/1000）, certified_charge_fee_numerator = 40 */
  certified_charge_fee_numerator?: number;
  /** 未认证的费率分子。 未认证的费率分子，分母统一为10000。 示例：费率千六（6/1000）, uncertified_charge_fee_numerator = 60 */
  uncertified_charge_fee_numerator?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 消息效果数据 —— 请求体。 */
export interface BusinessGetretailmessagelistBody {
  /** 分页起始位置，从0开始计数，用于分页查询，默认值为0 */
  start: number;
  /** 每页返回的数据条数上限，最大值为1000，默认值为20 */
  offset: number;
  /** 开始时间，格式为“xxxx-yy-zz”的字符串，例如：“2024-08-01” */
  begin_date: string;
  /** 结束时间，格式为“xxxx-yy-zz”的字符串，例如：“2024-08-10” */
  end_date: string;
}
/** 消息效果数据 —— 返回体。 */
export interface BusinessGetretailmessagelistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 查询到数据总数 */
  total_num?: number;
  /** 数据列表 */
  data_line?: unknown[];
}

/** 模板消息列表及下发 —— 请求体。 */
export interface BusinessRetailnotifybusinessBody {
  /** 枚举值参考B2b门店助手模板消息汇总列表 注：对于keyword.DATA等”模板消息参数值内容限制说明“参见该链接：模板消息--微信开放文档 */
  type: number;
  /** 门店负责人openid列表，最多一次发送200个openid */
  to_user_list: unknown[];
  /** 消息内容，为json格式的字符串，不同类型对应的字符串示例见模板列表 */
  content?: string;
}
/** 模板消息列表及下发 —— 返回体。 */
export interface BusinessRetailnotifybusinessResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 预录入门店信息 —— 请求体。 */
export interface BusinessBatchcreateretailBody {
  /** 门店信息列表。每次调用最多可导入 100 个门店 */
  retail_info_list: unknown[];
}
/** 预录入门店信息 —— 返回体。 */
export interface BusinessBatchcreateretailResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** num_success */
  num_success?: number;
  /** num_failure */
  num_failure?: number;
  /** failure_record_list */
  failure_record_list?: unknown[];
}

/** 门店信息查询 —— 请求体。 */
export interface BusinessGetretailinfoBody {
  /** 门店管理员/员工 openid。与手机号二选一，若都填写，优先使用 openid */
  openid?: string;
  /** 手机号 */
  mobile_phone?: string;
}
/** 门店信息查询 —— 返回体。 */
export interface BusinessGetretailinfoResp {
  /** 手机号 */
  mobile_phone?: string;
  /** 一级门店类型 */
  retail_type?: string;
  /** 二级门店类型 */
  sub_retail_type?: string;
  /** 门店地址 */
  retail_address?: string;
  /** 门店名称 */
  retail_name?: string;
  /** 营业执照注册号 */
  identification?: string;
  /** 企业名称 */
  principal?: string;
  /** 法人姓名 */
  legal_person_name?: string;
  /** 门店管理员/员工 openid。手机号查询时返回管理员 openid */
  openid?: string;
  /** 角色。1：管理员，2：员工。手机号查询时返回管理员 */
  role?: string;
  /** 认证状态。1：已完成认证 */
  status?: number;
  /** 认证时间戳 */
  auth_time?: number;
  /** 授权时间戳 */
  grant_time?: number;
  /** 经度。门店定位信息，若门店未提交定位信息，则返回值里无该字段 */
  longitude?: number;
  /** 纬度。门店定位信息，若门店未提交定位信息，则返回值里无该字段 */
  latitude?: number;
  /** 一级主营商品 */
  business_type?: unknown[];
  /** 二级主营商品 */
  other_business_type?: string;
  /** 员工列表，包含管理员 */
  staff_list?: unknown[];
}

/** 全量授权门店查询 —— 请求体。 */
export interface BusinessGetretailopenidlistBody {
  /** 分页拉取最大返回结果数。取值范围：1-100 */
  limit: number;
  /** 分页上下文。每轮遍历的首次调用传空值，后续调用填上一次调用返回参数的 page_context */
  page_context: string;
}
/** 全量授权门店查询 —— 返回体。 */
export interface BusinessGetretailopenidlistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** openid 列表 */
  openid_list?: unknown[];
  /** 分页上下文 */
  page_context?: string;
}

/** 开通流程 —— 请求体。 */
export interface BusinessRetailbusinessapplyBody {
  /** 主营商品类型。 可选项："食品", "饮料", "乳制品", "酒水", "生鲜果蔬", "调味品", "日化个护", "文具", "鞋服/配饰", "家居", "母婴/玩具", "数码3C", "其 */
  goods_type_list: unknown[];
  /** 主要线下销售渠道。 可选项："杂货店", "便利店", "超市", "餐饮店", "母婴店", "烟酒店", "其他" */
  goods_sale_list: unknown[];
  /** 门店覆盖数。 可选项："0-5千", "5千-1万", "1万-10万", "10万-50万", "50万以上" */
  cover_num: string;
  /** 所需服务类型。 可选项："门店订货", "门店促销", "门店活动执行", "门店直播", "其他" */
  service_list: unknown[];
  /** 小程序方案概述。长度限制：21-100字 */
  description: string;
  /** 联系人姓名。长度限制：1-7字。 */
  contact_name: string;
  /** 联系人手机号 */
  contact_phone: string;
  /** 联系人邮箱 */
  contact_email: string;
}
/** 开通流程 —— 返回体。 */
export interface BusinessRetailbusinessapplyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 绑定广告金充值账户 —— 请求体。 */
export interface BindTransferAccoutBody {
  /** 充值账户 uid */
  transfer_account_uid?: number;
  /** 充值账户主体名称 */
  transfer_account_org_name?: string;
  /** 0-正式环境 1-沙箱环境（仅作为签名校验，查询的结果都是正式环境的） */
  env?: number;
}
/** 绑定广告金充值账户 —— 返回体。 */
export interface BindTransferAccoutResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 代币支付退款 —— 请求体。 */
export interface CancelCurrencyPayBody {
  /** 用户的openid */
  openid: string;
  /** 0-正式环境 1-沙箱环境 */
  env: number;
  /** 用户ip，例如1.1.1.1 */
  user_ip: string;
  /** 代币支付(调用currency_pay接口时)时传的order_id */
  pay_order_id: string;
  /** 本次退款单的单号 */
  order_id: string;
  /** 退款金额 */
  amount: number;
}
/** 代币支付退款 —— 查询参数。 */
export interface CancelCurrencyPayQuery {
  /** 用户态签名 */
  signature: string;
  /** 支付签名 */
  pay_sig: string;
}
/** 代币支付退款 —— 返回体。 */
export interface CancelCurrencyPayResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 退款订单号 */
  order_id?: string;
}

/** 商家解约 —— 请求体。 */
export interface CancelSubscribeContractBody {
  /** 用户的openid */
  openid: string;
  /** 解约原因 */
  termination_reason: string;
  /** 道具 id，需为订阅制道具 */
  product_id: string;
  /** 签约时传入的协议号 */
  out_contract_code: string;
}
/** 商家解约 —— 返回体。 */
export interface CancelSubscribeContractResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 完成投诉处理 —— 请求体。 */
export interface CompleteComplaintBody {
  /** 0-正式环境 1-沙箱环境（仅作为签名校验，查询的结果都是正式环境的） */
  env: number;
  /** 投诉id，获取投诉列表接口返回 */
  complaint_id: string;
}
/** 完成投诉处理 —— 查询参数。 */
export interface CompleteComplaintQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 完成投诉处理 —— 返回体。 */
export interface CompleteComplaintResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 充值广告金 —— 请求体。 */
export interface CreateFundsBillBody {
  /** 充值金额，单位分 */
  transfer_amount: number;
  /** 充值账户 uid */
  transfer_account_uid: number;
  /** 充值账户名称 */
  transfer_account_name: string;
  /** 充值账户服务商账号 id */
  transfer_account_agency_id: number;
  /** 用户定义每一次请求的唯一 id，相同 id 的不同请求视为重复请求(不超过 1024 个字符) */
  request_id: string;
  /** 充值所使用的广告金对应的结算周期开始时间，unix秒级时间戳 */
  settle_begin: number;
  /** 充值所使用的广告金对应的结算周期结束时间，unix秒级时间戳 */
  settle_end: number;
  /** 0-正式环境 1-沙箱环境（仅作为签名校验，查询的结果都是正式环境的） */
  env: number;
  /** 是否授权广告数据, 0:否，1:是 */
  authorize_advertise: number;
  /** 广告金发放原因， 0:通用赠送，1:广告激励，2:定向激励 */
  fund_type: number;
}
/** 充值广告金 —— 返回体。 */
export interface CreateFundsBillResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 充值单 id */
  bill_id?: string;
}

/** 创建提现单 —— 请求体。 */
export interface CreateWithdrawOrderBody {
  /** 提现单单号，长度为[8,32]，字符只允许使用字母、数字、'\_'、'-' */
  withdraw_no: string;
  /** 提现的金额，单位元，例如提现1分钱请使用0.01，允许不传，不传的情况下表示全额提现 */
  withdraw_amount: string;
  /** 0-正式环境 1-沙箱环境 */
  env: number;
}
/** 创建提现单 —— 查询参数。 */
export interface CreateWithdrawOrderQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 创建提现单 —— 返回体。 */
export interface CreateWithdrawOrderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 提现单号 */
  withdraw_no?: string;
  /** 提现单的微信侧单号 */
  wx_withdraw_no?: string;
}

/** 扣减代币 —— 请求体。 */
export interface CurrencyPayBody {
  /** 用户的openid */
  openid?: string;
  /** 0-正式环境 1-沙箱环境 */
  env?: number;
  /** 用户ip，例如:1.1.1.1 */
  user_ip?: string;
  /** 支付的代币数量 */
  amount?: number;
  /** 订单号 */
  order_id?: string;
  /** 物品信息。记录到账户流水中。如:[{"productid":"物品id", "unit_price": 单价, "quantity": 数量}] */
  payitem?: string;
  /** 备注 */
  remark?: string;
}
/** 扣减代币 —— 查询参数。 */
export interface CurrencyPayQuery {
  /** 用户态签名 */
  signature: string;
  /** 支付签名 */
  pay_sig: string;
}
/** 扣减代币 —— 返回体。 */
export interface CurrencyPayResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 订单号 */
  order_id?: string;
  /** 总余额，包括有价和赠送部分 */
  balance?: number;
  /** 使用赠送部分的代币数量 */
  used_present_amount?: number;
}

/** 下载广告金对应的商户订单信息 —— 请求体。 */
export interface DownloadAdverfundsOrderBody {
  /** 广告金发放ID */
  fund_id: string;
  /** 0-正式环境 1-沙箱环境（仅作为签名校验，查询的结果都是正式环境的） */
  env: number;
}
/** 下载广告金对应的商户订单信息 —— 返回体。 */
export interface DownloadAdverfundsOrderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 订单下载链接 */
  url?: string;
}

/** 下载小程序账单 —— 请求体。 */
export interface DownloadBillBody {
  /** 起始时间（如20230801） */
  begin_ds: number;
  /** 截止时间（如20230810） */
  end_ds: number;
}
/** 下载小程序账单 —— 查询参数。 */
export interface DownloadBillQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 下载小程序账单 —— 返回体。 */
export interface DownloadBillResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 下载地址（有效时间为半小时，失效后需重新获取） */
  url?: string;
}

/** 获取投诉详情 —— 请求体。 */
export interface GetComplaintDetailBody {
  /** 0-正式环境 1-沙箱环境（仅作为签名校验，查询的结果都是正式环境的） */
  env: number;
  /** 投诉id，get_complaint_list接口返回 */
  complaint_id: string;
}
/** 获取投诉详情 —— 查询参数。 */
export interface GetComplaintDetailQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 获取投诉详情 —— 返回体。 */
export interface GetComplaintDetailResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 与get_complaint_list接口的complaints一致 */
  complaint?: Record<string, unknown>;
}

/** 获取投诉列表 —— 请求体。 */
export interface GetComplaintListBody {
  /** 0-正式环境 1-沙箱环境（仅作为签名校验，查询的结果都是正式环境的） */
  env: number;
  /** 筛选开始时间，格式为yyyy-mm-dd,如"2023-01-01" */
  begin_date: string;
  /** 筛选结束时间，格式为yyyy-mm-dd,如"2023-01-01" */
  end_date: string;
  /** 筛选偏移，从0开始 */
  offset: number;
  /** 筛选最多返回条数 */
  limit: number;
}
/** 获取投诉列表 —— 查询参数。 */
export interface GetComplaintListQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 获取投诉列表 —— 返回体。 */
export interface GetComplaintListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 总条数 */
  total?: number;
  /** 投诉列表 */
  complaints?: unknown[];
}

/** 获取协商历史 —— 请求体。 */
export interface GetNegotiationHistoryBody {
  /** 0-正式环境 1-沙箱环境（仅作为签名校验，查询的结果都是正式环境的） */
  env: number;
  /** 投诉id，get_complaint_list接口返回 */
  complaint_id: string;
  /** 筛选偏移，从0开始 */
  offset: number;
  /** 筛选最多返回条数 */
  limit: number;
}
/** 获取协商历史 —— 查询参数。 */
export interface GetNegotiationHistoryQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 获取协商历史 —— 返回体。 */
export interface GetNegotiationHistoryResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 总条数 */
  total?: number;
  /** 协商历史 */
  history?: unknown[];
}

/** 获取微信支付反馈投诉图片的签名头部 —— 请求体。 */
export interface GetUploadFileSignBody {
  /** 0-正式环境 1-沙箱环境（仅作为签名校验，查询的结果都是正式环境的） */
  env: number;
  /** 微信支付的图片地址格式为"https://api.mch.weixin.qq.com/v3/merchant-service/images/{xxxxxx}" */
  wxpay_url: string;
  /** 是否转存到cos，转存后可以获得图片的临时下载地址，30分钟有效 */
  convert_cos: boolean;
  /** 对应的反馈投诉id */
  complaint_id: string;
}
/** 获取微信支付反馈投诉图片的签名头部 —— 查询参数。 */
export interface GetUploadFileSignQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 获取微信支付反馈投诉图片的签名头部 —— 返回体。 */
export interface GetUploadFileSignResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 返回微信支付图片请求的Authorization头部值，具体使用方法可查看备注 */
  sign?: string;
  /** 当convert_cos为true时才有意义，返回转存后的url地址，30分钟有效 */
  cos_url?: string;
}

/** 通知已发货完成 —— 请求体。 */
export interface NotifyProvideGoodsBody {
  /** 下单时传的单号 */
  order_id: string;
  /** 微信内部单号(与order_id二选一) */
  wx_order_id: string;
  /** 0-正式环境 1-沙箱环境 */
  env: number;
}
/** 通知已发货完成 —— 返回体。 */
export type NotifyProvideGoodsResp = Record<string, unknown>;

/** 代币赠送 —— 请求体。 */
export interface PresentCurrencyBody {
  /** 用户的openid */
  openid: string;
  /** 0-正式环境 1-沙箱环境 */
  env: number;
  /** 赠送单号 */
  order_id: string;
  /** 赠送金额 */
  amount: number;
}
/** 代币赠送 —— 返回体。 */
export interface PresentCurrencyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 赠送后用户的代币余额 */
  balance?: number;
  /** 赠送单号 */
  order_id?: string;
  /** 用户收到的总赠送金额 */
  present_balance?: number;
}

/** 查询广告金发放记录 —— 请求体。 */
export interface QueryAdverFundsBody {
  /** 查询页码，不小于 1 */
  page?: number;
  /** 每页记录数量 */
  page_size?: number;
  /** 查询过滤条件 */
  filter?: Record<string, unknown>;
  /** 0-正式环境 1-沙箱环境（仅作为签名校验，查询的结果都是正式环境的） */
  env?: number;
}
/** 查询广告金发放记录 —— 返回体。 */
export interface QueryAdverFundsResp {
  /** 广告金发放记录列表 */
  adver_funds_list?: unknown[];
  /** 查询命中总的页数 */
  total_page?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询商家账户可提现余额 —— 请求体。 */
export interface QueryBizBalanceBody {
  /** 0-正式环境 1-沙箱环境（仅作为签名校验，查询的结果都是正式环境的） */
  env: number;
}
/** 查询商家账户可提现余额 —— 查询参数。 */
export interface QueryBizBalanceQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 查询商家账户可提现余额 —— 返回体。 */
export interface QueryBizBalanceResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 可提现余额 */
  balance_available?: Record<string, unknown>;
}

/** 查询下载订单任务 —— 请求体。 */
export interface QueryDownloadOrderBody {
  /** 下载任务 ID，由 StartDownloadOrder 接口返回 */
  task_id: string;
  /** 环境标识：0=现网 /1=沙箱（用于基类签名校验） */
  env: number;
}
/** 查询下载订单任务 —— 查询参数。 */
export interface QueryDownloadOrderQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 查询下载订单任务 —— 返回体。 */
export interface QueryDownloadOrderResp {
  /** 错误码，0 表示成功 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 下载任务 ID，与请求参数对应 */
  task_id?: string;
  /** 任务状态：0=初始化 /1=运行中 /2=成功 /3=失败 */
  status?: number;
  /** 下载文件 URL，仅 status=2(成功) 时有值 */
  download_url?: string;
  /** URL 过期时间（Unix 秒级时间戳） */
  expire_at?: number;
}

/** 查询广告金充值记录 —— 请求体。 */
export interface QueryFundsBillBody {
  /** 查询页码，不小于 1 */
  page: number;
  /** 每页记录数量 */
  page_size: number;
  /** 查询过滤条件 */
  filter: Record<string, unknown>;
  /** 0-正式环境 1-沙箱环境（仅作为签名校验，查询的结果都是正式环境的） */
  env: number;
}
/** 查询广告金充值记录 —— 返回体。 */
export interface QueryFundsBillResp {
  /** 广告金充值记录列表 */
  bill_list?: unknown[];
  /** 查询命中总的页数 */
  total_page?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询创建的订单 —— 请求体。 */
export interface QueryOrderBody {
  /** 用户的openid */
  openid: string;
  /** 0-正式环境 1-沙箱环境 */
  env: number;
  /** 创建的订单号 */
  order_id?: string;
  /** 微信内部单号(与order_id二选一) */
  wx_order_id?: string;
}
/** 查询创建的订单 —— 查询参数。 */
export interface QueryOrderQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 查询创建的订单 —— 返回体。 */
export interface QueryOrderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 订单信息 */
  order?: Record<string, unknown>;
}

/** 查询批量发布道具任务 —— 请求体。 */
export interface QueryPublishGoodsBody {
  /** 0-正式环境 1-沙箱环境 */
  env: number;
}
/** 查询批量发布道具任务 —— 查询参数。 */
export interface QueryPublishGoodsQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 查询批量发布道具任务 —— 返回体。 */
export interface QueryPublishGoodsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 发布的道具列表 */
  publish_item?: unknown[];
  /** 发布状态 */
  status?: number;
}

/** 查询广告金回收记录 —— 请求体。 */
export interface QueryRecoverBillBody {
  /** 查询页码，不小于 1 */
  page: number;
  /** 每页记录数量 */
  page_size: number;
  /** 查询过滤条件 */
  filter: Record<string, unknown>;
  /** 0-正式环境 1-沙箱环境（仅作为签名校验，查询的结果都是正式环境的） */
  env: number;
}
/** 查询广告金回收记录 —— 返回体。 */
export interface QueryRecoverBillResp {
  /** 广告金回收记录列表 */
  bill_list?: unknown[];
  /** 查询命中总的页数 */
  total_page?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询签约关系 —— 请求体。 */
export interface QuerySubscribeContractBody {
  /** 用户的openid */
  openid: string;
  /** 道具 id，需为订阅制道具 */
  product_id: string;
  /** 签约时传入的协议号 */
  out_contract_code: string;
}
/** 查询签约关系 —— 查询参数。 */
export interface QuerySubscribeContractQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 查询签约关系 —— 返回体。 */
export interface QuerySubscribeContractResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** SIGNED: 签约生效中。TERMINATED: 生效的签约协议已被解约。此时协议已经到达终态，该协议无法再次进行签约；可更换协议号再发起签约。UNBINDUSER: 从未签约过 */
  authorization_state?: string;
}

/** 查询广告金充值账户 —— 请求体。 */
export interface QueryTransferAccountBody {
  /** 0-正式环境 1-沙箱环境（仅作为签名校验，查询的结果都是正式环境的） */
  env: number;
}
/** 查询广告金充值账户 —— 返回体。 */
export interface QueryTransferAccountResp {
  /** 广告金充值账户列表 */
  acct_list?: unknown[];
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询批量上传道具任务 —— 请求体。 */
export interface QueryUploadGoodsBody {
  /** 0-正式环境 1-沙箱环境 */
  env: number;
}
/** 查询批量上传道具任务 —— 查询参数。 */
export interface QueryUploadGoodsQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 查询批量上传道具任务 —— 返回体。 */
export interface QueryUploadGoodsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 上传的道具列表 */
  upload_item?: unknown[];
  /** 0-无任务在运行 1-任务运行中 2-上传失败或部分失败（上传任务已经完成） 3-上传成功 */
  status?: number;
}

/** 查询代币余额 —— 请求体。 */
export interface QueryUserBalanceBody {
  /** 用户的openid */
  openid: string;
  /** 0-正式环境 1-沙箱环境 */
  env: number;
  /** 用户ip，例如:1.1.1.1 */
  user_ip: string;
}
/** 查询代币余额 —— 查询参数。 */
export interface QueryUserBalanceQuery {
  /** 用户态签名 */
  signature: string;
  /** 支付签名 */
  pay_sig: string;
}
/** 查询代币余额 —— 返回体。 */
export interface QueryUserBalanceResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 代币总余额，包括有价和赠送部分 */
  balance?: number;
  /** 赠送账户的代币余额 */
  present_balance?: number;
  /** 累计有价货币充值数量 */
  sum_save?: number;
  /** 累计赠送无价货币数量 */
  sum_present?: number;
  /** 历史总增加的代币金额 */
  sum_balance?: number;
  /** 历史总消耗代币金额 */
  sum_cost?: number;
  /** 是否满足首充活动标记。0:不满足。1:满足 */
  first_save_flag?: boolean;
}

/** 查询提现单 —— 请求体。 */
export interface QueryWithdrawOrderBody {
  /** 提现单单号 */
  withdraw_no: string;
  /** 0-正式环境 1-沙箱环境 */
  env: number;
}
/** 查询提现单 —— 查询参数。 */
export interface QueryWithdrawOrderQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 查询提现单 —— 返回体。 */
export interface QueryWithdrawOrderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 提现单号 */
  withdraw_no?: string;
  /** 提现状态，1-创建成功，提现中 2-提现成功 3-提现失败 */
  status?: number;
  /** 提现金额 */
  withdraw_amount?: string;
  /** 提现单的微信侧单号 */
  wx_withdraw_no?: string;
  /** 提现单成功的秒级时间戳 */
  withdraw_success_timestamp?: string;
  /** 提现单创建时间 */
  create_time?: string;
  /** 提现失败的原因 */
  fail_reason?: string;
}

/** 启动订单退款任务 —— 请求体。 */
export interface RefundOrderBody {
  /** 下单时的用户openid */
  openid: string;
  /** 下单时的单号，即jsapi接口传入的OutTradeNo，与wx_order_id字段二选一 */
  order_id?: string;
  /** 支付单对应的微信侧单号，与order_id字段二选一 */
  wx_order_id?: string;
  /** 本次退款时需要传的单号，长度为[8,32]，字符只允许使用字母、数字、'\_'、'-' */
  refund_order_id: string;
  /** 当前单剩余可退金额，单位分，可以通过调用query_order接口查到 */
  left_fee: number;
  /** 本次退款金额，单位分，需要(0,left_fee] */
  refund_fee: number;
  /** 商家自定义数据，传入后可在query_order接口查询时原样返回，长度需要[0,1024] */
  biz_meta: string;
  /** 退款原因，当前仅支持以下值 0-暂无描述 1-产品问题，影响使用或效果不佳 2-售后问题，无法满足需求 3-意愿问题，用户主动退款 4-价格问题 5:其他原因 */
  refund_reason: string;
  /** 退款来源，当前仅支持以下值 1-人工客服退款，即用户电话给客服，由客服发起退款流程 2-用户自己发起退款流程 3-其它 */
  req_from: string;
  /** 0-正式环境 1-沙箱环境 */
  env: number;
}
/** 启动订单退款任务 —— 查询参数。 */
export interface RefundOrderQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 启动订单退款任务 —— 返回体。 */
export interface RefundOrderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 退款单号 */
  refund_order_id?: string;
  /** 退款单的微信侧单号 */
  refund_wx_order_id?: string;
  /** 该退款单对应的支付单单号 */
  pay_order_id?: string;
  /** 该退款单对应的支付单微信侧单号 */
  pay_wx_order_id?: string;
}

/** 回复用户 —— 请求体。 */
export interface ResponseComplaintBody {
  /** 0-正式环境 1-沙箱环境（仅作为签名校验，查询的结果都是正式环境的） */
  env: number;
  /** 投诉id，get_complaint_list接口返回 */
  complaint_id: string;
  /** 回复内容 */
  response_content: string;
  /** 每一项的内容为string，传upload_vp_file接口返回的file_id */
  response_images: unknown[];
}
/** 回复用户 —— 查询参数。 */
export interface ResponseComplaintQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 回复用户 —— 返回体。 */
export interface ResponseComplaintResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 预通知扣款 —— 请求体。 */
export interface SendSubscribePrePaymentBody {
  /** 用户的openid */
  openid: string;
  /** 金额/分，属于 [100，道具价格] */
  deduct_price: number;
  /** 道具 id，需为订阅制道具 */
  product_id: string;
  /** 签约时传入的协议号 */
  out_contract_code: string;
}
/** 预通知扣款 —— 查询参数。 */
export interface SendSubscribePrePaymentQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 预通知扣款 —— 返回体。 */
export interface SendSubscribePrePaymentResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 下载支付订单 —— 请求体。 */
export interface StartDownloadOrderBody {
  /** 开始日期，格式 YYYYMMDD */
  begin_ds: number;
  /** 结束日期，格式 YYYYMMDD，与 begin_ds 间隔不超过 31 天 */
  end_ds: number;
  /** 订单类型：1=代币交易订单 /2=道具直购交易订单 /3=会员订阅订单 /4=退款订单 */
  order_type: number;
  /** 订单信息搜索关键字，支持按交易单号/商户单号/用户ID 模糊匹配 */
  order_info?: string;
  /** 发货状态，order_type 为 2(道具) 或 3(会员订阅) 时必须传入；true=已发货 /false=未发货；不传默认 true */
  is_provided?: boolean;
  /** 退款状态筛选，仅 order_type=4(退款订单) 时有效；0=全部 /2=已退款 /4=退款中 /5=退款失败；不传默认 0（全部） */
  refund_status?: number;
  /** 环境标识：0=现网 /1=沙箱（用于基类签名校验） */
  env: number;
  /** 支付渠道：1=普通虚拟支付 /2=苹果IAP */
  pay_channel: number;
}
/** 下载支付订单 —— 查询参数。 */
export interface StartDownloadOrderQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 下载支付订单 —— 返回体。 */
export interface StartDownloadOrderResp {
  /** 错误码，0 表示成功 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 下载任务 ID，用于后续查询下载结果 */
  task_id?: string;
}

/** 启动批量发布道具任务 —— 请求体。 */
export interface StartPublishGoodsBody {
  /** 发布的商品列表 */
  publish_item: unknown[];
  /** 0-正式环境 1-沙箱环境 */
  env: number;
}
/** 启动批量发布道具任务 —— 查询参数。 */
export interface StartPublishGoodsQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 启动批量发布道具任务 —— 返回体。 */
export interface StartPublishGoodsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 批量上传道具 —— 请求体。 */
export interface StartUploadGoodsBody {
  /** 上传的商品列表 */
  upload_item: unknown[];
  /** 0-正式环境 1-沙箱环境 */
  env: number;
}
/** 批量上传道具 —— 查询参数。 */
export interface StartUploadGoodsQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 批量上传道具 —— 返回体。 */
export interface StartUploadGoodsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 发起订阅扣款 —— 请求体。 */
export interface SubmitSubscribePayOrderBody {
  /** 用户的openid */
  openid: string;
  /** 在米大师侧申请的应用 id, mp-支付基础配置中的offerid */
  offer_id: string;
  /** 购买数量，填：1 */
  buy_quantity: number;
  /** 环境配置, 0 正式环境, 仅支持正式环境 */
  env?: number;
  /** 币种，填：CNY */
  currency_type: string;
  /** 订阅道具ID */
  product_id: string;
  /** 扣款金额(分), 属于 [1，道具价格] */
  deduct_price: number;
  /** 业务订单号, 每个订单号只能使用一次, 重复使用会失败(不建议业务强依赖平台对这里的唯一性校验)，要求8-32个字符内, 只能是数字、大小写字母、符号 _-\ */
  order_id: string;
  /** 透传数据, 发货通知时会透传给开发者 */
  attach: string;
}
/** 发起订阅扣款 —— 返回体。 */
export interface SubmitSubscribePayOrderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 上传媒体文件 —— 请求体。 */
export interface UploadVpFileBody {
  /** 0-正式环境 1-沙箱环境（仅作为签名校验，查询的结果都是正式环境的） */
  env: number;
  /** 经base64编码后的图片内容，使用这个字段最多只能传1m的图片，超过1m请使用img_url字段 */
  base64_img: string;
  /** 图片url，需要能直接下载，不能是返回302等返回码的地址，最高允许传2m图片（优先使用img_url） */
  img_url: string;
  /** 图片名称 */
  file_name: string;
}
/** 上传媒体文件 —— 查询参数。 */
export interface UploadVpFileQuery {
  /** 支付签名 */
  pay_sig: string;
}
/** 上传媒体文件 —— 返回体。 */
export interface UploadVpFileResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 返回文件id */
  file_id?: string;
}

/** 获取小程序某个付费能力的最近用量数据 —— 请求体。 */
export interface ChargeUsageGetRecentAverageBody {
  /** 商品SPU ID */
  spuId: string;
}
/** 获取小程序某个付费能力的最近用量数据 —— 返回体。 */
export interface ChargeUsageGetRecentAverageResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 最近月平均用量，经模糊化处理，非精确值。 注意：当averageData返回值为50时，语义为小程序最近平均用量小于等于50次/月，并不是特指精确等于每月50次。 */
  averageData?: number;
}

/** 查询购买资源包的用量情况 —— 请求体。 */
export interface ChargeUsageGetBody {
  /** 商品SPU ID */
  spuId: string;
  /** 分页偏移量，从0开始 */
  offset: number;
  /** 每页个数，最大20 */
  limit: number;
}
/** 查询购买资源包的用量情况 —— 返回体。 */
export interface ChargeUsageGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 累计用量（64位数字），用于资源包类商品 */
  effectiveUse?: string;
  /** 资源总量（64位数字），用于资源包类商品（已废弃） */
  effectiveAll?: string;
  /** 资源可用总量（64位数字），用于资源包类商品。详情见其他说明 */
  all?: string;
  /** 订阅开始时间戳（单位：秒），用于订阅类商品 */
  startServiceTime?: number;
  /** 订阅结束时间戳（单位：秒），用于订阅类商品 */
  endServiceTime?: number;
  /** 用量详情列表总数 */
  total?: number;
  /** 用量详情列表 */
  detailList?: unknown[];
}

/** 校验实名信息 —— 请求体。 */
export interface RealnameCheckrealnameinfoBody {
  /** 用户在业务方下的openid，与申请权限时提供的业务方的小程序appid保持一致 */
  openid: string;
  /** 需要校验的姓名 */
  real_name: string;
  /** 需要校验的证件号 */
  cred_id: string;
  /** 默认为1，即身份证，目前暂只支持身份证 */
  cred_type: string;
  /** 通过小程序回跳获取的code参数 */
  code: string;
}
/** 校验实名信息 —— 返回体。 */
export interface RealnameCheckrealnameinfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** openid 验证结果，有多个结果时用分号;连接 */
  verify_openid?: string;
  /** real_name 校验结果，当verify_openid 为V_OP_NM_MA 时返回 */
  verify_real_name?: string;
}

/** 消息通路发消息 —— 请求体。 */
export interface CityserviceSendmsgdataBody {
  /** 用户唯一标识 */
  openid: string;
  /** 城市服务分配给公众号的模板id */
  biz_template_id: string;
  /** 结果页样式id，含结果页必填 */
  result_page_style_id?: string;
  /** 办事记录样式id，含办事记录必填 */
  deal_msg_style_id?: string;
  /** 页卡样式id，含页卡必填 */
  card_style_id?: string;
  /** 订单号，同一订单号的办事记录会合并 */
  order_no: string;
  /** 跳转链接，用于服务通知、结果页、待办提醒，。含结果页必填 */
  url?: string;
  /** 模板json数据，对象信息请按照模板要求，其中color字段只对服务通知有效。如为数组时可用[ ]括起字段内数据。 */
  data: Record<string, unknown>;
}
/** 消息通路发消息 —— 返回体。 */
export interface CityserviceSendmsgdataResp {
  /** 需跳转至该url，替代原有的服务结果页面。如未传入result_page_style_id，则调用后result_page_url返回为空。 */
  result_page_url?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 获取城市服务限定页面链接 —— 请求体。 */
export interface CityserviceGetservicepathBody {
  /** 获取城市服务路径类型 */
  page_type: number;
  /** 跳转来源渠道 */
  src_channel: number;
  /** 获取h5 URL需填写1（OpenSDK不需要填写） */
  need_path_type?: number;
  /** 获取h5 URL需填写2（OpenSDK不需要填写） */
  device_type?: number;
  /** 城市名称，page_type为1、3、5时必填（城市名称以地级市为准） */
  city_name?: string;
  /** 专题页名称，page_type为3时必填 */
  content_name?: string;
  /** 附加参数，包括关键字等其他参数，page_type为5时必填 */
  ext_params?: unknown[];
  /** 服务id，page_type为0时必填 */
  service_id?: number;
  /** 透传参数，page_type为0时必填 必须为一个json数组，每个object包括两个成员key和value。key的值是透传的字段名,value的值是透传参数的值。 例如，[{\"key\":\" */
  params?: string;
  /** 用户所在城市id(需与腾讯内部要是同一套编码)，page_type为0时可传 */
  city_id?: string;
}
/** 获取城市服务限定页面链接 —— 返回体。 */
export interface CityserviceGetservicepathResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 结果路径 */
  path?: string;
  /** 类型 */
  business_type?: string;
  /** 小程序 id，page_type为5时返回 */
  app_id?: string;
  /** 原始id，page_type为5时返回 */
  username?: string;
  /** path的参数，page_type为0时返回 */
  query_string?: string;
}

/** 仿原生跳转 —— 请求体。 */
export interface TransportcodeGetbusinessviewBody {
  /** 需要跳转的页面 */
  path_type: number;
}
/** 仿原生跳转 —— 返回体。 */
export interface TransportcodeGetbusinessviewResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 业务类型 */
  business_type?: string;
  /** 调用仿原生小程序时使用的参数 */
  query_string?: string;
  /** 返回 query_string 的到期时间（uinx时间戳） */
  expire_at?: number;
}

/** 查询用户实名API —— 请求体。 */
export interface CityserviceGetmedrealnameBody {
  /** 业务方appid */
  app_id: string;
  /** 微信用户openid */
  open_id: string;
  /** 实名信息code，对应url中的wxmed_authcode，有效期10分钟 */
  wxmed_authcode: string;
}
/** 查询用户实名API —— 返回体。 */
export interface CityserviceGetmedrealnameResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 加密后的实名信息，base64后的加密信息 */
  cipher_real_name?: string;
  /** 加密算法，默认：AES_256_ECB_PKCS7Padding */
  cipher_algorithm?: string;
  /** 实名信息加密key版本号，初始版本号为0，用于识别后续密钥更换升级 */
  key_version?: number;
  /** 业务方appid */
  app_id?: string;
  /** 微信用户openid */
  open_id?: string;
}

/** 查询用户是否开通 —— 请求体。 */
export interface CityserviceGetmsgrelationBody {
  /** 业务id，长辈就医业务填130 */
  business_id: string;
  /** 微信用户openid */
  open_id: string;
}
/** 查询用户是否开通 —— 返回体。 */
export interface CityserviceGetmsgrelationResp {
  /** 返回码 */
  errcode?: number;
  /** 返回说明 */
  errmsg?: string;
  /** 是否订阅 */
  is_subscribed?: boolean;
}

/** 查询所有公告 —— 请求体。 */
export interface EldermedicalGethospnoticelistBody {
  /** 业务方公众号的appid */
  app_id: string;
  /** 公告类型 */
  notice_type: number;
}
/** 查询所有公告 —— 返回体。 */
export interface EldermedicalGethospnoticelistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 公告列表 */
  notice_list?: unknown[];
  /** 可以预览草稿的用户 openid */
  preview_openid?: unknown[];
}

/** 正式发布公告 —— 请求体。 */
export interface EldermedicalPublichopsnoticeBody {
  /** 业务方公众号的appid */
  app_id: string;
  /** 公告类型 */
  notice_type: number;
  /** 公告ID */
  notice_id: number;
}
/** 正式发布公告 —— 返回体。 */
export interface EldermedicalPublichopsnoticeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 公告ID */
  notice_id?: number;
}

/** 公告草稿预览设置 —— 请求体。 */
export interface EldermedicalPreviewhopsnoticeBody {
  /** 业务方公众号的appid */
  app_id: string;
  /** 公告类型 */
  notice_type: number;
  /** 公告ID */
  notice_id: string;
  /** 可以预览公告的微信号 */
  preview_username: string;
  /** 操作类型 */
  operation: number;
}
/** 公告草稿预览设置 —— 返回体。 */
export interface EldermedicalPreviewhopsnoticeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 草稿ID */
  notice_id?: number;
}

/** 添加公告草稿 —— 请求体。 */
export interface EldermedicalSethopsnoticeBody {
  /** 业务方公众号的appid */
  app_id: string;
  /** 公告类型 */
  notice_type: number;
  /** 公告内容，长度限制3000个字符，**支持富文本**，图片用标签的方式嵌入富文本内，具体可看下文 */
  notice_content: string;
  /** 公告ID，不传notice_id则新增一条草稿，传notice_id不新增，会覆盖指定草稿的内容 */
  notice_id?: number;
}
/** 添加公告草稿 —— 返回体。 */
export interface EldermedicalSethopsnoticeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 草稿ID */
  notice_id?: number;
}

/** 消息推送接口 —— 请求体。 */
export interface CityserviceSendchannelmsgBody {
  /** 消息子状态(如：1501001-预约挂号成功通知) */
  status: number;
  /** 用户openid(公众号/小程序) */
  open_id: string;
  /** 业务方生成的唯一订单ID */
  order_id: string;
  /** 消息唯一标识(需保证同用户同order_id下唯一) */
  msg_id: string;
  /** 公众号appid(需开通就医助手) */
  app_id: string;
  /** 固定值150 */
  business_id: number;
  /** 业务字段(不同status对应不同结构) */
  business_info?: Record<string, unknown>;
}
/** 消息推送接口 —— 返回体。 */
export interface CityserviceSendchannelmsgResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 新增集合 —— 请求体。 */
export interface TcbDatabasecollectionaddBody {
  /** 云环境ID */
  env: string;
  /** 集合名称 */
  collection_name: string;
}
/** 新增集合 —— 返回体。 */
export interface TcbDatabasecollectionaddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 数据库插入记录 —— 请求体。 */
export interface TcbDatabaseaddBody {
  /** 云环境ID */
  env: string;
  /** 数据库操作语句 */
  query: string;
}
/** 数据库插入记录 —— 返回体。 */
export interface TcbDatabaseaddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 插入成功的数据集合主键_id */
  id_list?: unknown[];
}

/** 数据库聚合 —— 请求体。 */
export interface TcbDatabaseaggregateBody {
  /** 云环境ID */
  env: string;
  /** 数据库操作语句 */
  query: string;
}
/** 数据库聚合 —— 返回体。 */
export interface TcbDatabaseaggregateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 记录数组 */
  data?: unknown[];
}

/** 删除集合 —— 请求体。 */
export interface TcbDatabasecollectiondeleteBody {
  /** 云环境ID */
  env: string;
  /** 集合名称 */
  collection_name: string;
}
/** 删除集合 —— 返回体。 */
export interface TcbDatabasecollectiondeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 数据库删除记录 —— 请求体。 */
export interface TcbDatabasedeleteBody {
  /** 云环境ID */
  env: string;
  /** 数据库操作语句 */
  query: string;
}
/** 数据库删除记录 —— 返回体。 */
export interface TcbDatabasedeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 删除记录数量 */
  deleted?: number;
}

/** 数据库导出 —— 请求体。 */
export interface TcbDatabasemigrateexportBody {
  /** 云环境ID */
  env: string;
  /** 导出文件路径（文件会导出到公共的云存储中，可使用getDownloadTcbFileLink接口获取下载链接） */
  file_path: string;
  /** 导出文件类型，文件格式参考importDatabaseItem接口的文件格式部分 */
  file_type: number;
  /** 导出条件 */
  query: string;
}
/** 数据库导出 —— 返回体。 */
export interface TcbDatabasemigrateexportResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 导出任务ID，使用getDatabaseMigrateStatus接口查询导出结果，获取文件下载链接。 */
  job_id?: number;
}

/** 获取集合信息 —— 请求体。 */
export interface TcbDatabasecollectiongetBody {
  /** 云环境ID */
  env: string;
  /** 获取数量限制 */
  limit?: number;
  /** 偏移量 */
  offset?: number;
}
/** 获取集合信息 —— 返回体。 */
export interface TcbDatabasecollectiongetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 集合信息 */
  collections?: unknown[];
  /** 分页信息 */
  pager?: Record<string, unknown>;
}

/** 统计集合记录数 —— 请求体。 */
export interface TcbDatabasecountBody {
  /** 云环境ID */
  env: string;
  /** 数据库操作语句 */
  query: string;
}
/** 统计集合记录数 —— 返回体。 */
export interface TcbDatabasecountResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 记录数量 */
  count?: number;
}

/** 数据库迁移状态查询 —— 请求体。 */
export interface TcbDatabasemigratequeryinfoBody {
  /** 云环境ID */
  env: string;
  /** 迁移任务ID */
  job_id: number;
}
/** 数据库迁移状态查询 —— 返回体。 */
export interface TcbDatabasemigratequeryinfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 导出状态 */
  status?: string;
  /** 导出成功记录数 */
  record_success?: number;
  /** 导出失败记录数 */
  record_fail?: number;
  /** 导出错误信息 */
  error_msg?: string;
  /** 导出文件下载地址 */
  file_url?: string;
}

/** 数据库查询记录 —— 请求体。 */
export interface TcbDatabasequeryBody {
  /** 云环境ID */
  env: string;
  /** 数据库操作语句 */
  query: string;
}
/** 数据库查询记录 —— 返回体。 */
export interface TcbDatabasequeryResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 分页信息 */
  pager?: Record<string, unknown>;
  /** 记录数组 */
  data?: unknown[];
}

/** 数据库导入 —— 请求体。 */
export interface TcbDatabasemigrateimportBody {
  /** 云环境ID */
  env: string;
  /** 导入 collection 名 */
  collection_name: string;
  /** 导入文件路径(导入文件需先上传到同环境的存储中，可使用开发者工具或 getUploadTcbFileLink接口上传） */
  file_path: string;
  /** 导入文件类型。1表示JSON。2表示CSV */
  file_type: number;
  /** 是否在遇到错误时停止导入 */
  stop_on_error: boolean;
  /** 冲突处理模式。1表示INSERT。2表示UPSERT。 */
  conflict_mode: number;
}
/** 数据库导入 —— 返回体。 */
export interface TcbDatabasemigrateimportResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 导入任务ID，可使用getDatabaseMigrateStatus接口查询导入进度及结果 */
  job_id?: number;
}

/** 更新数据库索引 —— 请求体。 */
export interface TcbUpdateindexBody {
  /** 云环境ID */
  env: string;
  /** 集合名称 */
  collection_name: string;
  /** 新增索引 */
  create_indexes: unknown[];
  /** 删除索引 */
  drop_indexes: unknown[];
}
/** 更新数据库索引 —— 返回体。 */
export interface TcbUpdateindexResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 数据库更新记录 —— 请求体。 */
export interface TcbDatabaseupdateBody {
  /** 云环境ID */
  env: string;
  /** 数据库操作语句 */
  query: string;
}
/** 数据库更新记录 —— 返回体。 */
export interface TcbDatabaseupdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 更新条件匹配到的结果数 */
  matched?: number;
  /** 修改的记录数，注意：使用set操作新插入的数据不计入修改数目 */
  modified?: number;
  /** 新插入记录的id，注意：只有使用set操作新插入数据时这个字段会有值 */
  id?: string;
}

/** 延时调用云函数 —— 请求体。 */
export interface TcbAdddelayedfunctiontaskBody {
  /** 环境ID */
  env: string;
  /** 函数名称 */
  function_name: string;
  /** 发送的数据包，格式必须为JSONString */
  data: string;
  /** 延迟时间，单位：秒，合法范围：6秒-30天 */
  delay_time: number;
}
/** 延时调用云函数 —— 返回体。 */
export interface TcbAdddelayedfunctiontaskResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 云开发上报接口 —— 请求体。 */
export interface TcbCloudbasereportBody {
  /** 上报动作，目前支持（sendSmsTask：发送短信；openH5：H5 打开） */
  report_action: string;
  /** 环境 ID */
  env_id: string;
  /** 活动 ID */
  activity_id: string;
  /** 任务 ID【report_action 取 sendSmsTask 时必填】 */
  task_id: string;
  /** 下发手机号数量【report_action 取 sendSmsTask 时必填】 */
  phone_count: string;
  /** 渠道 ID（云开发 CMS 使用 _cms_sms_）【report_action 取 openH5 时必填】 */
  channel_id: string;
  /** 会话 ID【report_action 取 openH5 时必填】 */
  session_id: string;
}
/** 云开发上报接口 —— 返回体。 */
export interface TcbCloudbasereportResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 创建发短信任务 —— 请求体。 */
export interface TcbCreatesendsmstaskBody {
  /** 环境 ID */
  env: string;
  /** 短信 CSV 文件地址CodeUri */
  file_url: string;
  /** 短信模版 ID 默认值：844110（销类短信模版 ID) */
  template_id: string;
}
/** 创建发短信任务 —— 返回体。 */
export interface TcbCreatesendsmstaskResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 查询 ID */
  query_id?: string;
}

/** 描述扩展上传文件信息 —— 请求体。 */
export interface TcbDescribeextensionuploadinfoBody {
  /** 待上传的文件列表 */
  ExtensionFiles: unknown[];
}
/** 描述扩展上传文件信息 —— 返回体。 */
export interface TcbDescribeextensionuploadinfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 待上传文件的信息数组 */
  FilesData?: unknown[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** 查询短信记录 —— 请求体。 */
export interface TcbDescribesmsrecordsBody {
  /** 环境 ID */
  EnvId: string;
  /** 开始日期, 如:2021-01-01 */
  StartDate: string;
  /** 结束日期, 如2021-01-07 */
  EndDate: string;
  /** 电话号码 */
  Mobile: string;
  /** 查询ID */
  QueryId: string;
  /** 页码(1开始) */
  PageNumber: number;
  /** 每页条目数 */
  PageSize: number;
}
/** 查询短信记录 —— 返回体。 */
export interface TcbDescribesmsrecordsResp {
  /** 发送记录列表 */
  SmsRecords?: unknown[];
  /** 记录总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取云开发数据 —— 请求体。 */
export interface TcbGetstatisticsBody {
  /** 获取动作，目前支持（smsMarketingOverviewData：短信营销概览数据；smsMarketingConversionData：短信营销转化数据；smsMarketingRealTime */
  action: string;
  /** 开始时间戳 */
  begin_date: number;
  /** 结束时间戳 */
  end_date: number;
  /** 分页 limit【action 取 smsMarketingOverviewData、smsMarketingConversionData 时必填】 */
  page_limit: number;
  /** 分页 offset【action 取 smsMarketingOverviewData、smsMarketingConversionData 时必填】 */
  page_offset: number;
}
/** 获取云开发数据 —— 返回体。 */
export interface TcbGetstatisticsResp {
  /** 数据列定义 */
  data_column?: unknown[];
  /** 数据行 */
  data_value?: unknown[];
  /** 总行数 */
  total_num?: number;
}

/** 获取实时语音签名 —— 请求体。 */
export interface GetvoipsignBody {
  /** 游戏房间的标识 */
  group_id: string;
  /** 生成这个随机字符串的 UNIX 时间戳（精确到秒） */
  timestamp: number;
  /** 随机字符串，长度应小于 128 */
  nonce: string;
}
/** 获取实时语音签名 —— 返回体。 */
export interface GetvoipsignResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 签名 */
  signature?: string;
}

/** 获取腾讯云API调用凭证 —— 请求体。 */
export interface TcbGetqcloudtokenBody {
  /** 有效期（单位为秒，最大7200） */
  lifespan: number;
}
/** 获取腾讯云API调用凭证 —— 返回体。 */
export interface TcbGetqcloudtokenResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** secretid */
  secretid?: string;
  /** secretkey */
  secretkey?: string;
  /** token */
  token?: string;
  /** 过期时间戳 */
  expired_time?: number;
}

/** 获取cloudID对应的数据 —— 请求体。 */
export interface GetopendataBody {
  /** CloudID 列表 */
  cloudid_list: unknown[];
}
/** 获取cloudID对应的数据 —— 查询参数。 */
export interface GetopendataQuery {
  /** 用户openid（敏感信息需要传入） */
  openid?: string;
}
/** 获取cloudID对应的数据 —— 返回体。 */
export interface GetopendataResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 开放数据列表 */
  data_list?: unknown[];
}

/** 发送短信v2 —— 请求体。 */
export interface TcbSendsmsv2Body {
  /** 环境 ID */
  env: string;
  /** URL Link */
  url_link: string;
  /** 短信模版 ID。(844110: 营销类短信模版 ID) */
  template_id: string;
  /** 短信模版变量数组 */
  template_param_list: unknown[];
  /** 手机号列表，单次请求最多支持 1000 个境内手机号，手机号必须以+86开头 */
  phone_number_list: unknown[];
  /** 是否使用小程序简称 */
  use_short_name: boolean;
  /** 资源方appid，第三方代开发时可填第三方appid或小程序appid，应为所填环境所属的账号APPID */
  resource_appid: string;
}
/** 发送短信v2 —— 返回体。 */
export interface TcbSendsmsv2Resp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 开放数据列表 */
  send_status_list?: unknown[];
}

/** 发送短信 —— 请求体。 */
export interface TcbSendsmsBody {
  /** 环境 ID */
  env: string;
  /** 手机号列表，单次请求最多支持 1000 个境内手机号，手机号必须以+86开头 */
  phone_number_list: unknown[];
  /** 短信类型，营销类短信：Marketing；通知类短信：Notification */
  sms_type: number;
  /** sms_type="Notification" 时必填，模版 ID */
  template_id: string;
  /** sms_type="Marketing" 时必填，自定义短信内容，一条短信最多为70个字。可自定义内容最多为 30 个字符，详情参考短信规则 */
  content: string;
  /** sms_type="Marketing" 时必填，云开发静态网站 path，不需要指定域名，例如/index.html */
  path: string;
  /** sms_type="Notification" 时必填，短信模版变量数组 */
  template_param_list: unknown[];
  /** 是否使用小程序简称 */
  use_short_name: boolean;
  /** 资源方appid，第三方代开发时可填第三方appid或小程序appid，应为所填环境所属的账号APPID */
  resource_appid: string;
}
/** 发送短信 —— 返回体。 */
export interface TcbSendsmsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 开放数据列表 */
  send_status_list?: unknown[];
}

/** 删除文件 —— 请求体。 */
export interface TcbBatchdeletefileBody {
  /** 云环境ID */
  env: string;
  /** 文件 ID 列表 */
  fileid_list: unknown[];
}
/** 删除文件 —— 返回体。 */
export interface TcbBatchdeletefileResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 文件列表 */
  delete_list?: unknown[];
}

/** 获取文件下载链接 —— 请求体。 */
export interface TcbBatchdownloadfileBody {
  /** 环境id */
  env: string;
  /** 文件列表 */
  file_list: unknown[];
}
/** 获取文件下载链接 —— 返回体。 */
export interface TcbBatchdownloadfileResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 文件列表 */
  file_list?: unknown[];
}

/** 获取文件上传链接 —— 请求体。 */
export interface TcbUploadfileBody {
  /** 云环境ID */
  env: string;
  /** 上传路径 */
  path: string;
}
/** 获取文件上传链接 —— 返回体。 */
export interface TcbUploadfileResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 上传url */
  url?: string;
  /** token */
  token?: string;
  /** authorization */
  authorization?: string;
  /** 文件ID */
  file_id?: string;
  /** cos文件ID */
  cos_file_id?: string;
}

/** 获取用户访问小程序数据概况 —— 请求体。 */
export interface GetweanalysisappiddailysummarytrendBody {
  /** 开始日期。格式为 yyyymmdd */
  begin_date: string;
  /** 结束日期，限定查询1天数据，允许设置的最大值为昨日。格式为 yyyymmdd */
  end_date: string;
}
/** 获取用户访问小程序数据概况 —— 返回体。 */
export interface GetweanalysisappiddailysummarytrendResp {
  /** 数据列表 */
  list?: unknown[];
}

/** 获取小程序性能数据 —— 请求体。 */
export interface BusinessPerformanceBootBody {
  /** 查询数据的类型 */
  module: number;
  /** 开始和结束日期的时间戳，时间跨度不能超过30天 */
  time: Record<string, unknown>;
  /** 查询条件，比如机型，网络类型等等 */
  params: unknown[];
}
/** 获取小程序性能数据 —— 返回体。 */
export interface BusinessPerformanceBootResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 返回的性能数据 */
  data?: Record<string, unknown>;
}

/** 获取小程序用户画像分布 —— 请求体。 */
export interface GetweanalysisappiduserportraitBody {
  /** 开始日期。格式为 yyyymmdd */
  begin_date: string;
  /** 结束日期，开始日期与结束日期相差的天数限定为0/6/29，分别表示查询最近1/7/30天数据，允许设置的最大值为昨日。格式为 yyyymmdd */
  end_date: string;
}
/** 获取小程序用户画像分布 —— 返回体。 */
export interface GetweanalysisappiduserportraitResp {
  /** 时间范围，如："20170611-20170617" */
  ref_date?: string;
  /** 新用户画像 */
  visit_uv_new?: Record<string, unknown>;
  /** 活跃用户画像 */
  visit_uv?: Record<string, unknown>;
}

/** 获取用户小程序访问分布数据 —— 请求体。 */
export interface GetweanalysisappidvisitdistributionBody {
  /** 开始日期。格式为 yyyymmdd */
  begin_date: string;
  /** 结束日期，限定查询 1 天数据，允许设置的最大值为昨日。格式为 yyyymmdd */
  end_date: string;
}
/** 获取用户小程序访问分布数据 —— 返回体。 */
export interface GetweanalysisappidvisitdistributionResp {
  /** 日期，格式为 yyyymmdd */
  ref_date?: string;
  /** 数据列表 */
  list?: unknown[];
}

/** 获取访问页面数据 —— 请求体。 */
export interface GetweanalysisappidvisitpageBody {
  /** 开始日期。格式为 yyyymmdd */
  begin_date: string;
  /** 结束日期，限定查询1天数据，允许设置的最大值为昨日。格式为 yyyymmdd */
  end_date: string;
}
/** 获取访问页面数据 —— 返回体。 */
export interface GetweanalysisappidvisitpageResp {
  /** 日期，格式为 yyyymmdd */
  ref_date?: string;
  /** 数据列表 */
  list?: unknown[];
}

/** 获取用户访问小程序日留存 —— 请求体。 */
export interface GetweanalysisappiddailyretaininfoBody {
  /** 开始日期。格式为 yyyymmdd */
  begin_date: string;
  /** 结束日期，限定查询1天数据，允许设置的最大值为昨日。格式为 yyyymmdd */
  end_date: string;
}
/** 获取用户访问小程序日留存 —— 返回体。 */
export interface GetweanalysisappiddailyretaininfoResp {
  /** 日期 */
  ref_date?: string;
  /** 新增用户留存 */
  visit_uv_new?: unknown[];
  /** 活跃用户留存 */
  visit_uv?: unknown[];
}

/** 获取用户访问小程序月留存 —— 请求体。 */
export interface GetweanalysisappidmonthlyretaininfoBody {
  /** 开始日期，为自然月第一天。格式为 yyyymmdd */
  begin_date: string;
  /** 结束日期，为自然月最后一天，限定查询一个月数据。格式为 yyyymmdd */
  end_date: string;
}
/** 获取用户访问小程序月留存 —— 返回体。 */
export interface GetweanalysisappidmonthlyretaininfoResp {
  /** 时间，如："201702" */
  ref_date?: string;
  /** 新增用户留存 */
  visit_uv_new?: unknown[];
  /** 活跃用户留存 */
  visit_uv?: unknown[];
}

/** 获取用户访问小程序周留存 —— 请求体。 */
export interface GetweanalysisappidweeklyretaininfoBody {
  /** 开始日期，为周一日期。格式为 yyyymmdd */
  begin_date: string;
  /** 结束日期，为周日日期，限定查询一周数据。格式为 yyyymmdd */
  end_date: string;
}
/** 获取用户访问小程序周留存 —— 返回体。 */
export interface GetweanalysisappidweeklyretaininfoResp {
  /** 时间，如："20170306-20170312" */
  ref_date?: string;
  /** 新增用户留存 */
  visit_uv_new?: unknown[];
  /** 活跃用户留存 */
  visit_uv?: unknown[];
}

/** 获取用户访问小程序数据日趋势 —— 请求体。 */
export interface GetweanalysisappiddailyvisittrendBody {
  /** 开始日期。格式为 yyyymmdd */
  begin_date: string;
  /** 结束日期，限定查询1天数据，允许设置的最大值为昨日。格式为 yyyymmdd */
  end_date: string;
}
/** 获取用户访问小程序数据日趋势 —— 返回体。 */
export interface GetweanalysisappiddailyvisittrendResp {
  /** 数据列表 */
  list?: unknown[];
}

/** 获取用户访问小程序数据月趋势 —— 请求体。 */
export interface GetweanalysisappidmonthlyvisittrendBody {
  /** 开始日期，为自然月第一天。格式为 yyyymmdd */
  begin_date: string;
  /** 结束日期，为自然月最后一天，限定查询一个月的数据。格式为 yyyymmdd */
  end_date: string;
}
/** 获取用户访问小程序数据月趋势 —— 返回体。 */
export interface GetweanalysisappidmonthlyvisittrendResp {
  /** 数据列表 */
  list?: unknown[];
}

/** 获取用户访问小程序数据周趋势 —— 请求体。 */
export interface GetweanalysisappidweeklyvisittrendBody {
  /** 开始日期，为周一日期。格式为 yyyymmdd */
  begin_date: string;
  /** 结束日期，为周日日期，限定查询一周数据。格式为 yyyymmdd */
  end_date: string;
}
/** 获取用户访问小程序数据周趋势 —— 返回体。 */
export interface GetweanalysisappidweeklyvisittrendResp {
  /** 数据列表 */
  list?: unknown[];
}

/** 批处理短剧合作推广计划 —— 请求体。 */
export interface WxadramaBatchprocessdramapromotionBody {
  /** 操作类型。1-加入计划；2-查询计划；3-退出计划 */
  action_type: number;
  /** 短剧数组 */
  list: unknown[];
}
/** 批处理短剧合作推广计划 —— 返回体。 */
export interface WxadramaBatchprocessdramapromotionResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 短剧数组 */
  list?: unknown[];
}

/** 获取短剧变现类型 —— 请求体。 */
export interface WxadramaDevelopergetiaadramaBody {
  /** list */
  list: unknown[];
}
/** 获取短剧变现类型 —— 返回体。 */
export interface WxadramaDevelopergetiaadramaResp {
  /** list */
  list?: unknown[];
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取已上架短剧 —— 请求体（文档未列字段，放行任意键）。 */
export type WxadramaDevelopergetpublisheddramaBody = Record<string, unknown>;
/** 获取已上架短剧 —— 返回体。 */
export interface WxadramaDevelopergetpublisheddramaResp {
  /** list */
  list?: unknown[];
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 短剧上架 —— 请求体。 */
export interface WxadramaDeveloperpublishdramaBody {
  /** list */
  list: unknown[];
}
/** 短剧上架 —— 返回体。 */
export interface WxadramaDeveloperpublishdramaResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 刷剧剧目设置 —— 请求体。 */
export interface WxadramaDevelopersetflushdramaBody {
  /** list */
  list: unknown[];
}
/** 刷剧剧目设置 —— 返回体。 */
export interface WxadramaDevelopersetflushdramaResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 设置短剧变现类型 —— 请求体。 */
export interface WxadramaDevelopersetiaadramaBody {
  /** list */
  list: unknown[];
}
/** 设置短剧变现类型 —— 返回体。 */
export interface WxadramaDevelopersetiaadramaResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 推荐剧目 —— 请求体。 */
export interface WxadramaDevelopersetrecmddramaBody {
  /** 1-剧结束 2-选集最右侧推荐 3-剧集profile页相关推荐 */
  entry_type: number;
  /** 提审方小程序的appid */
  src_appid?: string;
  /** 提审的剧目id */
  drama_id?: string;
  /** list */
  list?: unknown[];
}
/** 推荐剧目 —— 返回体。 */
export interface WxadramaDevelopersetrecmddramaResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取短剧合作推广活动 —— 请求体。 */
export interface WxadramaGetfindereventBody {
  /** 筛选短剧合作推广活动 */
  event_id_list?: unknown[];
}
/** 获取短剧合作推广活动 —— 返回体。 */
export interface WxadramaGetfindereventResp {
  /** 推广计划数组 */
  finder_event_list?: unknown[];
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 播放原始视频-推荐位控制接口 —— 请求体。 */
export interface WxadramaSetplayerdramarecmdswitchBody {
  /** 此处填2002（当需要控制推荐位时，可选值为：1-剧结束 2-选集最右侧推荐 3-剧集profile页相关推荐） */
  entry_type: number;
  /** true-打开 false-关闭，没有打开过的都默认为关闭（当需要控制推荐位时：true-打开 false-关闭，1-剧结束&3-剧集profile页默认打开） */
  switch_status: boolean;
}
/** 播放原始视频-推荐位控制接口 —— 返回体。 */
export interface WxadramaSetplayerdramarecmdswitchResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 生成运单 —— 请求体。 */
export interface ExpressBusinessOrderAddBody {
  /** 订单ID，须保证全局唯一，不超过512字节 */
  order_id: string;
  /** 用户openid，当add_source=2时无需填写（不发送物流服务通知） */
  openid: string;
  /** 快递公司ID，参见getAllDelivery */
  delivery_id: string;
  /** 快递客户编码或者现付编码 */
  biz_id: string;
  /** 快递备注信息，比如"易碎物品"，不超过1024字节 */
  custom_remark?: string;
  /** 订单标签id，用于平台型小程序区分平台上的入驻方，tagid须与入驻方账号一一对应，非平台型小程序无需填写该字段 */
  tagid?: number;
  /** 订单来源，0为小程序订单，2为App或H5订单，填2则不发送物流服务通知 */
  add_source: number;
  /** App或H5的appid，add_source=2时必填，需和开通了物流助手的小程序绑定同一open帐号 */
  wx_appid?: string;
  /** 发件人信息 */
  sender: Record<string, unknown>;
  /** 收件人信息 */
  receiver: Record<string, unknown>;
  /** 包裹信息，将传递给快递公司 */
  cargo: Record<string, unknown>;
  /** 商品信息，会展示到物流服务通知和电子面单中 */
  shop: Record<string, unknown>;
  /** 保价信息 */
  insured: Record<string, unknown>;
  /** 服务类型 */
  service: Record<string, unknown>;
  /** Unix 时间戳, 单位秒，顺丰必须传。 预期的上门揽件时间，0表示已事先约定取件时间；否则请传预期揽件时间戳，需大于当前时间，收件员会在预期时间附近上门。例如expect_time为“1557989 */
  expect_time?: number;
  /** 分单策略，【0：线下网点签约，1：总部签约结算】，不传默认线下网点签约。目前支持圆通。 */
  take_mode?: number;
}
/** 生成运单 —— 返回体。 */
export interface ExpressBusinessOrderAddResp {
  /** 微信侧错误码，下单失败时返回 */
  errcode?: number;
  /** 微信侧错误信息，下单失败时返回 */
  errmsg?: string;
  /** 订单ID，下单成功时返回 */
  order_id?: string;
  /** 运单ID，下单成功时返回 */
  waybill_id?: string;
  /** 快递侧错误码，下单失败时返回 */
  delivery_resultcode?: number;
  /** 快递侧错误信息，下单失败时返回 */
  delivery_resultmsg?: string;
  /** 运单信息，下单成功时返回 */
  waybill_data?: unknown[];
}

/** 批量获取运单数据 —— 请求体。 */
export interface ExpressBusinessOrderBatchgetBody {
  /** 订单列表, 最多不能超过100个 */
  order_list: unknown[];
}
/** 批量获取运单数据 —— 返回体。 */
export interface ExpressBusinessOrderBatchgetResp {
  /** 运单列表 */
  order_list?: unknown[];
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 绑定/解绑物流账号 —— 请求体。 */
export interface ExpressBusinessAccountBindBody {
  /** bind表示绑定，unbind表示解除绑定 */
  type: string;
  /** 快递公司客户编码 */
  biz_id: string;
  /** 快递公司ID */
  delivery_id: string;
  /** 快递公司客户密码 */
  password?: string;
  /** 备注内容（提交EMS审核需要） 格式要求： 电话：xxxxx 联系人：xxxxx 服务类型：xxxxx 发货地址：xxxx */
  remark_content?: string;
}
/** 绑定/解绑物流账号 —— 返回体。 */
export interface ExpressBusinessAccountBindResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 取消运单 —— 请求体。 */
export interface ExpressBusinessOrderCancelBody {
  /** 用户openid，当add_source=2时无需填写（不发送物流服务通知） */
  openid?: string;
  /** 快递公司ID，参见getAllDelivery */
  delivery_id: string;
  /** 运单ID */
  waybill_id: string;
  /** 订单 ID，需保证全局唯一 */
  order_id: string;
}
/** 取消运单 —— 返回体。 */
export interface ExpressBusinessOrderCancelResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 运力返回的错误码 */
  delivery_resultcode?: number;
  /** 运力返回的错误信息 */
  delivery_resultmsg?: string;
}

/** 获取所有绑定的物流账号 —— 请求体（文档未列字段，放行任意键）。 */
export type ExpressBusinessAccountGetallBody = Record<string, unknown>;
/** 获取所有绑定的物流账号 —— 返回体。 */
export interface ExpressBusinessAccountGetallResp {
  /** 账号数量 */
  count?: number;
  /** 账号列表 */
  list?: unknown[];
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取支持的快递公司列表 —— 请求体（文档未列字段，放行任意键）。 */
export type ExpressBusinessDeliveryGetallBody = Record<string, unknown>;
/** 获取支持的快递公司列表 —— 返回体。 */
export interface ExpressBusinessDeliveryGetallResp {
  /** 快递公司数量 */
  count?: number;
  /** 快递公司信息列表 */
  data?: unknown[];
}

/** 获取运单数据 —— 请求体。 */
export interface ExpressBusinessOrderGetBody {
  /** 订单 ID，需保证全局唯一 */
  order_id: string;
  /** 该参数仅在getOrder接口生效，batchGetOrder接口不生效。用户openid，当add_source=2时无需填写（不发送物流服务通知） */
  openid?: string;
  /** 快递公司ID，参见getAllDelivery, 必须和waybill_id对应 */
  delivery_id: string;
  /** 运单ID */
  waybill_id?: string;
  /** 该参数仅在getOrder接口生效，batchGetOrder接口不生效。获取打印面单类型【1：一联单，0：二联单】，默认获取二联单 */
  print_type?: number;
}
/** 获取运单数据 —— 返回体。 */
export interface ExpressBusinessOrderGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 运单 html 的 BASE64 结果 */
  print_html?: string;
  /** 运单信息 */
  waybill_data?: unknown[];
  /** 订单ID */
  order_id?: string;
  /** 快递公司ID */
  delivery_id?: string;
  /** 运单号 */
  waybill_id?: string;
  /** 运单状态, 0正常，1取消 */
  order_status?: number;
}

/** 查询运单轨迹 —— 请求体。 */
export interface ExpressBusinessPathGetBody {
  /** 用户openid，当add_source=2时无需填写（不发送物流服务通知） */
  openid?: string;
  /** 快递公司ID，参见getAllDelivery */
  delivery_id: string;
  /** 运单ID */
  waybill_id: string;
}
/** 查询运单轨迹 —— 返回体。 */
export interface ExpressBusinessPathGetResp {
  /** 用户openid */
  openid?: string;
  /** 快递公司 ID */
  delivery_id?: string;
  /** 运单 ID */
  waybill_id?: string;
  /** 轨迹节点数量 */
  path_item_num?: number;
  /** 轨迹节点列表 */
  path_item_list?: unknown[];
}

/** 获取打印员 —— 请求体（文档未列字段，放行任意键）。 */
export type ExpressBusinessPrinterGetallBody = Record<string, unknown>;
/** 获取打印员 —— 返回体。 */
export interface ExpressBusinessPrinterGetallResp {
  /** 打印员数量 */
  count?: number;
  /** 打印员openid */
  openid?: unknown[];
  /** tagid列表 */
  tagid_list?: unknown[];
}

/** 获取电子面单余额 —— 请求体。 */
export interface ExpressBusinessQuotaGetBody {
  /** 快递公司ID，参见getAllDelivery */
  delivery_id: string;
  /** 快递公司客户编码 */
  biz_id: string;
}
/** 获取电子面单余额 —— 返回体。 */
export interface ExpressBusinessQuotaGetResp {
  /** 电子面单余额 */
  quota_num?: number;
  /** 接口报错时返回，错误码 */
  errcode?: number;
  /** 接口报错时返回，错误信息 */
  errmsg?: string;
}

/** 模拟更新订单状态 —— 请求体。 */
export interface ExpressBusinessTestUpdateOrderBody {
  /** 商户id,需填test_biz_id */
  biz_id: string;
  /** 订单号 */
  order_id: string;
  /** 快递公司id,需填TEST */
  delivery_id: string;
  /** 运单号 */
  waybill_id: string;
  /** 轨迹变化 Unix 时间戳 */
  action_time: number;
  /** 轨迹变化类型,详情查看下方其他说明 */
  action_type: number;
  /** 轨迹变化具体信息说明,使用UTF-8编码 */
  action_msg: string;
}
/** 模拟更新订单状态 —— 返回体。 */
export interface ExpressBusinessTestUpdateOrderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 配置面单打印员 —— 请求体。 */
export interface ExpressBusinessPrinterUpdateBody {
  /** 打印员 openid */
  openid: string;
  /** 更新类型。bind表示绑定；unbind表示解除绑定。 */
  update_type: string;
  /** 用于平台型小程序设置入驻方的打印员面单打印权限，同一打印员最多支持10个tagid，使用半角逗号分隔，中间不加空格，如填写123,456，表示该打印员可以拉取到tagid为123和456的下的单，非平 */
  tagid_list?: string;
}
/** 配置面单打印员 —— 返回体。 */
export interface ExpressBusinessPrinterUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取面单联系人信息 —— 请求体。 */
export interface ExpressDeliveryContactGetBody {
  /** 商户侧下单事件中推送的 Token 字段 */
  token: string;
  /** 运单 ID */
  waybill_id: string;
}
/** 获取面单联系人信息 —— 返回体。 */
export interface ExpressDeliveryContactGetResp {
  /** 运单 ID */
  waybill_id?: string;
  /** 发件人信息 */
  sender?: Record<string, unknown>;
  /** 收件人信息 */
  receiver?: Record<string, unknown>;
}

/** 预览面单模板 —— 请求体。 */
export interface ExpressDeliveryTemplatePreviewBody {
  /** 运单 ID */
  waybill_id: string;
  /** 面单 HTML 模板内容（需经 Base64 编码） */
  waybill_template: string;
  /** 面单数据。详情参考下单事件返回值中的 WaybillData */
  waybill_data: string;
  /** 商户下单数据，格式是商户侧下单addOrder 接口中的请求体 */
  custom: Record<string, unknown>;
}
/** 预览面单模板 —— 返回体。 */
export interface ExpressDeliveryTemplatePreviewResp {
  /** 运单 ID */
  waybill_id?: string;
  /** 渲染后的面单 HTML 文件（已经过 Base64 编码） */
  rendered_waybill_template?: string;
}

/** 对账单下载 —— 请求体。 */
export interface ExpressDeliverySingleWaybillGetBillBody {
  /** 下载对账单的时间，格式为YYYYMMDD */
  date: string;
  /** 下载对账单的类型 ALL-所以账单 SUCCESS-成功支付账单 REFUND-退款账单 */
  type: string;
}
/** 对账单下载 —— 返回体。 */
export interface ExpressDeliverySingleWaybillGetBillResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 运力取消订单 —— 请求体。 */
export interface ExpressDeliverySingleWaybillCancelOrderBody {
  /** 商户侧下单事件中推送的 Token 字段 */
  token: string;
  /** 取消的原因 */
  reason: string;
}
/** 运力取消订单 —— 返回体。 */
export interface ExpressDeliverySingleWaybillCancelOrderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 运力公司退款 —— 请求体。 */
export interface ExpressDeliverySingleWaybillRefundOrderBody {
  /** 下单时的Token字段 */
  token: string;
  /** 退款金额，单位分 */
  fee: number;
}
/** 运力公司退款 —— 返回体。 */
export interface ExpressDeliverySingleWaybillRefundOrderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 运力返回用户投诉处理结果 —— 请求体。 */
export interface ExpressDeliveryScatterUpdateComplaintResultBody {
  /** 接口调用凭证 */
  access_token: string;
  /** 商户侧下单事件中推送的 Token 字段 */
  token: string;
  /** 运单 ID */
  waybill_id: string;
  /** 处理结果 */
  result: string;
  /** 处理结果说明 */
  desc: string;
}
/** 运力返回用户投诉处理结果 —— 返回体。 */
export interface ExpressDeliveryScatterUpdateComplaintResultResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 运力更新需支付的运费 —— 请求体。 */
export interface ExpressDeliverySingleWaybillFeeBody {
  /** 商户侧下单事件中推送的 Token 字段 */
  token: string;
  /** 运单 ID */
  waybill_id: string;
  /** 是否需要用户在线支付， 0不需要，1需要，2需要(支付分) */
  need_pay: number;
  /** 需要支付的金额（一般等于original_fee，如有优惠则填最终需要支付的金额），单位分 */
  fee: number;
  /** 原价（base_fee+insured_fee+other_fee），单位分 */
  original_fee: number;
  /** 运费，单位分 */
  base_fee: number;
  /** 保价费，单位分 */
  insured_fee?: number;
  /** 其他费用，单位分 */
  other_fee?: number;
  /** 其他费用备注 */
  remark?: number;
  /** 商品名称（对应微信支付商品详情页上的商品名称） */
  pay_goods_name?: string;
}
/** 运力更新需支付的运费 —— 返回体。 */
export interface ExpressDeliverySingleWaybillFeeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 运力更新订单状态 —— 请求体。 */
export interface ExpressDeliverySingleWaybillUpdateBody {
  /** 商户侧下单事件中推送的Token字段 */
  token: string;
  /** 运单ID */
  waybill_id?: string;
  /** 轨迹变化Unix时间戳 */
  action_time: number;
  /** 轨迹变化类型，与普通单保持一致，参见附录action_type定义 */
  action_type: number;
  /** 轨迹变化具体信息说明，展示在快递轨迹详情页中。若有手机号码，则直接写11位手机号码。使用UTF-8编码。 */
  action_msg: string;
  /** 取件员姓名 */
  pickup_courier_name: string;
  /** 取件员电话 */
  pickup_courier_phone: string;
  /** 派件员姓名 */
  delivery_courier_name: string;
  /** 派件员电话 */
  delivery_courier_phone: string;
}
/** 运力更新订单状态 —— 返回体。 */
export interface ExpressDeliverySingleWaybillUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 更新商户审核结果 —— 请求体。 */
export interface ExpressDeliveryServiceBusinessUpdateBody {
  /** 商户的小程序AppID，即审核商户事件中的 ShopAppID */
  shop_app_id: string;
  /** 商户账户 */
  biz_id: string;
  /** 审核结果，0 表示审核通过，其他表示审核失败 */
  result_code: number;
  /** 审核错误原因，仅 result_code 不等于 0 时需要设置 */
  result_msg?: string;
}
/** 更新商户审核结果 —— 返回体。 */
export interface ExpressDeliveryServiceBusinessUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 更新运单轨迹 —— 请求体。 */
export interface ExpressDeliveryPathUpdateBody {
  /** 商户侧下单事件中推送的 Token 字段 */
  token: string;
  /** 运单 ID */
  waybill_id: string;
  /** 轨迹变化 Unix 时间戳 */
  action_time: number;
  /** 轨迹变化类型，详情见下文 */
  action_type: number;
  /** 轨迹变化具体信息说明，展示在快递轨迹详情页中。若有手机号码，则直接写11位手机号码。使用UTF-8编码。 */
  action_msg: string;
}
/** 更新运单轨迹 —— 返回体。 */
export interface ExpressDeliveryPathUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取用户人脸核身会话唯一标识 —— 请求体。 */
export interface CityserviceFaceIdentifyGetverifyidBody {
  /** 业务方系统内部流水号，要求5-32个字符内，只能包含数字、大小写字母和_-字符，且在同一个appid下唯一。 */
  out_seq_no: string;
  /** 用户身份信息 */
  cert_info: Record<string, unknown>;
  /** 用户身份标识 */
  openid: string;
}
/** 获取用户人脸核身会话唯一标识 —— 返回体。 */
export interface CityserviceFaceIdentifyGetverifyidResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 微信侧生成的人脸核身会话唯一标识，用于后续接口调用。长度不超过 256 字符 */
  verify_id?: string;
  /** verify_id 有效期，过期后无法发起核身，默认值3600，单位：秒 */
  expires_in?: number;
}

/** 查询用户人脸核身真实验证结果 —— 请求体。 */
export interface CityserviceFaceIdentifyQueryverifyinfoBody {
  /** getVerifyId 接口返回的人脸核身会话唯一标识 */
  verify_id: string;
  /** 业务方系统外部流水号，必须和 getVerifyId 接口传入的一致 */
  out_seq_no: string;
  /** 根据 getVerifyId 中传入的证件信息生成的信息摘要，计算方式见注意事项。 */
  cert_hash: string;
  /** 用户身份标识，必须和 getVerifyId 接口传入的一致 */
  openid: string;
}
/** 查询用户人脸核身真实验证结果 —— 返回体。 */
export interface CityserviceFaceIdentifyQueryverifyinfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 人脸核身验证结果 */
  verify_ret?: number;
}

/** 激活设备license —— 请求体。 */
export interface BusinessLicenseActivedeviceBody {
  /** 待激活的设备列表 */
  device_list: unknown[];
  /** 资源包类型，0：测试体验包（默认），1：A 类设备，2：B 类设备，3：C 类设备，4：D 类设备，5：E类设备 */
  pkg_type: number;
}
/** 激活设备license —— 返回体。 */
export interface BusinessLicenseActivedeviceResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 设备列表 */
  device_list?: unknown[];
}

/** 设备组添加设备 —— 请求体。 */
export interface BusinessGroupAdddeviceBody {
  /** 设备组的唯一标识 */
  group_id: string;
  /** 设备列表 */
  device_list: unknown[];
  /** 是否强制更新设备列表，等于 true 时将已存在其它设备组中的设备移除并添加到当前设备组，慎用。 */
  force_add?: boolean;
}
/** 设备组添加设备 —— 返回体。 */
export interface BusinessGroupAdddeviceResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 设备列表 */
  device_list?: unknown[];
}

/** 创建设备组 —— 请求体。 */
export interface BusinessGroupCreateidBody {
  /** 设备型号的唯一标识。 */
  model_id: string;
  /** 设备组的名称（创建时时决定，无法修改） */
  group_name: string;
}
/** 创建设备组 —— 返回体。 */
export interface BusinessGroupCreateidResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 设备组的唯一标识 */
  group_id?: string;
}

/** 查询设备组信息 —— 请求体。 */
export interface BusinessGroupGetinfoBody {
  /** 设备组的唯一标识 */
  group_id: string;
}
/** 查询设备组信息 —— 返回体。 */
export interface BusinessGroupGetinfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 设备名称 */
  group_name?: string;
  /** 设备列表 */
  device_list?: unknown[];
  /** 设备型号的唯一标识 */
  model_id?: string;
  /** 设备类型 */
  model_type?: string;
}

/** 查询设备激活详情 —— 请求体。 */
export interface BusinessLicenseGetdeviceinfoBody {
  /** 设备列表 */
  device_list: unknown[];
}
/** 查询设备激活详情 —— 返回体。 */
export interface BusinessLicenseGetdeviceinfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 设备列表 */
  device_list?: unknown[];
}

/** 查询license资源包列表 —— 请求体。 */
export interface BusinessLicenseGetpkglistBody {
  /** 资源包类型，0：测试体验包，1：A 类设备，2：B 类设备，3：C 类设备，4：D 类设备，5：E类设备 */
  pkg_type: number;
}
/** 查询license资源包列表 —— 返回体。 */
export interface BusinessLicenseGetpkglistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 资源包列表 */
  pkg_list?: unknown[];
  /** 最大激活码序号，已废弃。 */
  max_active_number?: number;
}

/** 获取设备票据 —— 请求体。 */
export interface GetsnticketBody {
  /** sn 设备唯一序列号。由厂商分配，长度不能超过128字节。字符只接受数字，大小写字母，下划线（_）和连字符（-）。 */
  sn: string;
  /** 设备型号 id ，通过注册设备获得。 */
  model_id: string;
}
/** 获取设备票据 —— 返回体。 */
export interface GetsnticketResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 设备票据，5分钟内有效。 */
  sn_ticket?: string;
}

/** 设备组删除设备 —— 请求体。 */
export interface BusinessGroupRemovedeviceBody {
  /** 设备组的唯一标识 */
  group_id: string;
  /** 设备列表 */
  device_list: unknown[];
}
/** 设备组删除设备 —— 返回体。 */
export interface BusinessGroupRemovedeviceResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 设备列表 */
  device_list?: unknown[];
}

/** 发送设备消息 —— 请求体。 */
export interface MessageDeviceSubscribeSendBody {
  /** 所需下发的订阅模板id */
  template_id: string;
  /** 设备唯一序列号。由厂商分配，长度不能超过128字节。字符只接受数字，大小写字母，下划线（_）和连字符（-）。 */
  sn: string;
  /** 点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转。 */
  page: string;
  /** 接收者（用户）的 openid 列表 */
  to_openid_list: unknown[];
  /** 跳转小程序类型：developer为开发版；trial为体验版；formal为正式版；默认为正式版 */
  miniprogram_state?: string;
  /** 设备型号 id ，通过注册设备获得。 */
  modelId: string;
  /** 这是个object，不是string。模板内容，格式形如 { "key1": { "value": "xxx" }, "key2": { "value": "xxx" } } ，value 为枚举值。 */
  data: string;
  /** 进入小程序查看”的语言类型，支持zh_CN(简体中文)、en_US(英文)、zh_HK(繁体中文)、zh_TW(繁体中文)，默认为zh_CN */
  lang: string;
}
/** 发送设备消息 —— 返回体。 */
export interface MessageDeviceSubscribeSendResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 图片智能裁剪 —— 请求体。 */
export interface CvImgAicropBody {
  /** 图片文件，小于2M */
  img?: unknown;
  /** 宽高比；如果提供多个宽高比，请以英文逗号“,”分隔，最多支持5个宽高比 */
  ratios?: string;
}
/** 图片智能裁剪 —— 查询参数。 */
export interface CvImgAicropQuery {
  /** 要检测的图片 url，传这个则不用传 img 参数。 */
  img_url?: string;
}
/** 图片智能裁剪 —— 返回体。 */
export interface CvImgAicropResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 智能裁剪结果 */
  results?: unknown[];
  /** 图片大小 */
  img_size?: Record<string, unknown>;
}

/** 二维码/条码识别 —— 请求体。 */
export interface CvImgQrcodeBody {
  /** 图片文件，限制小于 2 M */
  img?: unknown;
}
/** 二维码/条码识别 —— 查询参数。 */
export interface CvImgQrcodeQuery {
  /** 图片URL地址 */
  img_url?: string;
}
/** 二维码/条码识别 —— 返回体。 */
export interface CvImgQrcodeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 处理结果 */
  code_results?: unknown[];
  /** 图片大小 */
  img_size?: Record<string, unknown>;
}

/** 图片高清化 —— 请求体。 */
export interface CvImgSuperresolutionBody {
  /** 图片文件 */
  img?: unknown;
}
/** 图片高清化 —— 查询参数。 */
export interface CvImgSuperresolutionQuery {
  /** 图片链接 */
  img_url?: unknown;
}
/** 图片高清化 —— 返回体。 */
export interface CvImgSuperresolutionResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** media id */
  media_id?: string;
}

/** 银行卡识别 —— 请求体。 */
export interface CvOcrBankcardBody {
  /** form-data 中媒体文件标识，有filename、filelength、content-type等信息，传这个则不用传 img_url。 */
  img: unknown;
}
/** 银行卡识别 —— 查询参数。 */
export interface CvOcrBankcardQuery {
  /** 要检测的图片 url，传这个则不用传 img 参数。 */
  img_url?: string;
}
/** 银行卡识别 —— 返回体。 */
export interface CvOcrBankcardResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 银行卡号 */
  number?: string;
}

/** 营业执照识别 —— 请求体。 */
export interface CvOcrBizlicenseBody {
  /** form-data 中媒体文件标识，有filename、filelength、content-type等信息，传这个则不用传 img_url。 */
  img: unknown;
}
/** 营业执照识别 —— 查询参数。 */
export interface CvOcrBizlicenseQuery {
  /** 要检测的图片 url，传这个则不用传 img 参数。 */
  img_url?: string;
}
/** 营业执照识别 —— 返回体。 */
export interface CvOcrBizlicenseResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 注册号 */
  reg_num?: string;
  /** 编号 */
  serial?: string;
  /** 法定代表人姓名 */
  legal_representative?: string;
  /** 企业名称 */
  enterprise_name?: string;
  /** 组成形式 */
  type_of_organization?: string;
  /** 经营场所/企业住所 */
  address?: string;
  /** 公司类型 */
  type_of_enterprise?: string;
  /** 经营范围 */
  business_scope?: string;
  /** 注册资本 */
  registered_capital?: string;
  /** 实收资本 */
  paid_in_capital?: string;
  /** 营业期限 */
  valid_period?: string;
  /** 注册日期/成立日期 */
  registered_date?: string;
  /** 营业执照位置 */
  cert_position?: Record<string, unknown>;
  /** 图片大小 */
  img_size?: Record<string, unknown>;
}

/** 通用印刷体识别 —— 请求体。 */
export interface CvOcrCommBody {
  /** form-data 中媒体文件标识，有filename、filelength、content-type等信息，传这个则不用传 img_url。 */
  img?: unknown;
}
/** 通用印刷体识别 —— 查询参数。 */
export interface CvOcrCommQuery {
  /** 要检测的图片 url，传这个则不用传 img 参数。 */
  img_url?: string;
}
/** 通用印刷体识别 —— 返回体。 */
export interface CvOcrCommResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 识别结果 */
  items?: unknown[];
  /** 图片大小 */
  img_size?: Record<string, unknown>;
}

/** 驾驶证识别 —— 请求体。 */
export interface CvOcrDrivinglicenseBody {
  /** form-data 中媒体文件标识，有filename、filelength、content-type等信息，传这个则不用传 img_url。 */
  img: unknown;
}
/** 驾驶证识别 —— 查询参数。 */
export interface CvOcrDrivinglicenseQuery {
  /** 要检测的图片 url，传这个则不用传 img 参数。 */
  img_url?: string;
}
/** 驾驶证识别 —— 返回体。 */
export interface CvOcrDrivinglicenseResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 证号 */
  id_num?: string;
  /** 姓名 */
  name?: string;
  /** 性别 */
  sex?: string;
  /** 地址 */
  address?: string;
  /** 出生日期 */
  birth_date?: string;
  /** 初次领证日期 */
  issue_date?: string;
  /** 准驾车型 */
  car_class?: string;
  /** 有效期限起始日 */
  valid_from?: string;
  /** 有效期限终止日 */
  valid_to?: string;
  /** 印章文构 */
  official_seal?: string;
}

/** 行驶证识别 —— 请求体。 */
export interface CvOcrDrivingBody {
  /** form-data 中媒体文件标识，有filename、filelength、content-type等信息，传这个则不用传 img_url。 */
  img: unknown;
}
/** 行驶证识别 —— 查询参数。 */
export interface CvOcrDrivingQuery {
  /** 要检测的图片 url，传这个则不用传 img 参数。 */
  img_url?: string;
}
/** 行驶证识别 —— 返回体。 */
export interface CvOcrDrivingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 车牌号码 */
  plate_num?: string;
  /** 车辆类型 */
  vehicle_type?: string;
  /** 所有人 */
  owner?: string;
  /** 住址 */
  addr?: string;
  /** 使用性质 */
  use_character?: string;
  /** 品牌型号 */
  model?: string;
  /** 车辆识别代号 */
  vin?: string;
  /** 发动机号码 */
  engine_num?: string;
  /** 注册日期 */
  register_date?: string;
  /** 发证日期 */
  issue_date?: string;
  /** 车牌号码 */
  plate_num_b?: string;
  /** 号牌 */
  record?: string;
  /** 核定载人数 */
  passengers_num?: string;
  /** 总质量 */
  total_quality?: string;
  /** 整备质量 */
  prepare_quality?: string;
}

/** 身份证识别 —— 请求体。 */
export interface CvOcrIdcardBody {
  /** form-data 中媒体文件标识，有filename、filelength、content-type等信息，传这个则不用传 img_url。 */
  img?: unknown;
}
/** 身份证识别 —— 查询参数。 */
export interface CvOcrIdcardQuery {
  /** 要检测的图片 url，传这个则不用传 img 参数。 */
  img_url?: string;
}
/** 身份证识别 —— 返回体。 */
export interface CvOcrIdcardResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 正面或背面，Front / Back */
  type?: string;
  /** 正面返回，姓名 */
  name?: string;
  /** 正面返回，身份证号 */
  id?: string;
  /** 背面返回，有效期 */
  valid_date?: string;
  /** 正面返回，地址 */
  addr?: string;
  /** 正面返回，性别 */
  gender?: string;
  /** 正面返回，民族 */
  nationality?: string;
}

/** 异常件退回商家确认 —— 请求体。 */
export interface ExpressLocalBusinessOrderConfirmReturnBody {
  /** 商家id，由配送公司分配的appkey */
  shopid: string;
  /** 唯一标识订单的 ID，由商户生成 */
  shop_order_id: string;
  /** 配送单id */
  waybill_id: string;
  /** 用配送公司提供的appSecret加密的校验串，见注意事项 */
  delivery_sign: string;
  /** 商家门店编号，在配送公司登记，闪送必填，值为店铺id */
  shop_no: string;
  /** 备注 */
  remark?: string;
}
/** 异常件退回商家确认 —— 返回体。 */
export interface ExpressLocalBusinessOrderConfirmReturnResp {
  /** 运力返回的错误码 */
  resultcode?: number;
  /** 运力返回的错误描述 */
  resultmsg?: string;
}

/** 添加配送单 —— 请求体。 */
export interface ExpressLocalBusinessOrderAddBody {
  /** 商家id，由配送公司分配的appkey */
  shopid: string;
  /** 唯一标识订单的 ID，由商户生成, 不超过128字节 */
  shop_order_id: string;
  /** 配送公司ID */
  delivery_id: string;
  /** 下单用户的openid */
  openid: string;
  /** 发件人信息，顺丰同城急送必须填写，美团配送、达达、闪送，若传了shop_no的值可不填该字段 */
  sender: Record<string, unknown>;
  /** 收件人信息 */
  receiver: Record<string, unknown>;
  /** 货物信息 */
  cargo: Record<string, unknown>;
  /** 订单信息 */
  order_info: Record<string, unknown>;
  /** 商品信息，会展示到物流通知消息中 */
  shop: Record<string, unknown>;
  /** 预下单接口返回的参数，配送公司可保证在一段时间内运费不变 */
  delivery_token: string;
  /** 用配送公司提供的appSecret加密的校验串，见注意事项 */
  delivery_sign: string;
  /** 商家门店编号，在配送公司登记，如果只有一个门店，美团闪送必填, 值为店铺id */
  shop_no: string;
  /** 子商户id，区分小程序内部多个子商户 */
  sub_biz_id?: string;
}
/** 添加配送单 —— 返回体。 */
export interface ExpressLocalBusinessOrderAddResp {
  /** 运力返回的错误码 */
  resultcode?: number;
  /** 运力返回的错误描述 */
  resultmsg?: string;
  /** 实际运费(单位：元)，运费减去优惠券费用 */
  fee?: number;
  /** 运费(单位：元) */
  deliverfee?: number;
  /** 优惠券费用(单位：元) */
  couponfee?: number;
  /** 小费(单位：元) */
  tips?: number;
  /** 保价费(单位：元) */
  insurancfee?: number;
  /** 配送距离(整数单位：米) */
  distance?: number;
  /** 配送单号 */
  waybill_id?: string;
  /** 配送状态。 */
  order_status?: number;
  /** 收货码 */
  finish_code?: number;
  /** 取货码 */
  pickup_code?: number;
  /** 预计骑手接单时间，单位秒，比如5分钟，就填300, 无法预计填0 */
  dispatch_duration?: number;
}

/** 添加小费 —— 请求体。 */
export interface ExpressLocalBusinessOrderAddtipsBody {
  /** 商家id， 由配送公司分配的appkey */
  shopid: string;
  /** 唯一标识订单的 ID，由商户生成 */
  shop_order_id: string;
  /** 配送单id */
  waybill_id: string;
  /** 小费金额(单位：元) 各家配送公司最大值不同 */
  tips: number;
  /** 备注 */
  remark: string;
  /** 用配送公司提供的appSecret加密的校验串说明 */
  delivery_sign: string;
  /** 商家门店编号，在配送公司登记，如果只有一个门店，闪送shop_no必填，值为店铺id */
  shop_no: string;
}
/** 添加小费 —— 返回体。 */
export interface ExpressLocalBusinessOrderAddtipsResp {
  /** 运力返回的错误码 */
  resultcode?: number;
  /** 运力返回的错误描述 */
  resultmsg?: string;
}

/** 发起绑定请求 —— 请求体。 */
export interface ExpressLocalBusinessShopAddBody {
  /** 配送公司ID */
  delivery_id: string;
}
/** 发起绑定请求 —— 返回体。 */
export interface ExpressLocalBusinessShopAddResp {
  /** 运力返回的错误码 */
  resultcode?: number;
  /** 运力返回的错误描述 */
  resultmsg?: string;
}

/** 取消配送单 —— 请求体。 */
export interface ExpressLocalBusinessOrderCancelBody {
  /** 商家id， 由配送公司分配的appkey */
  shopid: string;
  /** 唯一标识订单的 ID，由商户生成 */
  shop_order_id: string;
  /** 快递公司ID */
  delivery_id: string;
  /** 配送单id（顺丰同城必填） */
  waybill_id?: string;
  /** 取消原因Id。1表示暂时不需要邮寄；2表示价格不合适；3表示订单信息有误，重新下单；4表示骑手取货不及时；5表示骑手配送不及时；6表示其他原因( 如果选择6，需要填写取消原因，否则不需要填写 ) */
  cancel_reason_id: number;
  /** 取消原因 */
  cancel_reason: string;
  /** 商家门店编号，如果只有一个门店，闪送shop_no必填，值为店铺id */
  shop_no: string;
  /** 用配送公司提供的appSecret加密的校验串，见注意事项 */
  delivery_sign: string;
}
/** 取消配送单 —— 返回体。 */
export interface ExpressLocalBusinessOrderCancelResp {
  /** 运力返回的错误码 */
  resultcode?: number;
  /** 运力返回的错误描述 */
  resultmsg?: string;
  /** 扣除的违约金(单位：元)，精确到分 */
  deduct_fee?: number;
  /** 说明 */
  desc?: string;
}

/** 获取已支持的配送公司列表 —— 请求体（文档未列字段，放行任意键）。 */
export type ExpressLocalBusinessDeliveryGetallBody = Record<string, unknown>;
/** 获取已支持的配送公司列表 —— 返回体。 */
export interface ExpressLocalBusinessDeliveryGetallResp {
  /** 运力返回的错误码 */
  resultcode?: number;
  /** 运力返回的错误描述 */
  resultmsg?: string;
  /** 配送公司列表 */
  list?: unknown[];
}

/** 拉取已绑定账号 —— 请求体（文档未列字段，放行任意键）。 */
export type ExpressLocalBusinessShopGetBody = Record<string, unknown>;
/** 拉取已绑定账号 —— 返回体。 */
export interface ExpressLocalBusinessShopGetResp {
  /** 运力返回的错误码 */
  resultcode?: number;
  /** 力返回的错误描述 */
  resultmsg?: string;
  /** 绑定的商家签约账号列表 */
  shop_list?: unknown[];
}

/** 拉取配送单信息 —— 请求体。 */
export interface ExpressLocalBusinessOrderGetBody {
  /** 商家id， 由配送公司分配的appkey */
  shopid: string;
  /** 唯一标识订单的 ID，由商户生成 */
  shop_order_id: string;
  /** 商家门店编号， 在配送公司登记，如果只有一个门店，可以不填 */
  shop_no: string;
  /** 用配送公司提供的appSecret加密的校验串，见注意事项 */
  delivery_sign: string;
}
/** 拉取配送单信息 —— 返回体。 */
export interface ExpressLocalBusinessOrderGetResp {
  /** 运力返回的错误码 */
  resultcode?: number;
  /** 运力返回的错误描述 */
  resultmsg?: string;
  /** 配送状态 */
  order_status?: number;
  /** 配送单号 */
  waybill_id?: string;
  /** 骑手姓名 */
  rider_name?: string;
  /** 骑手电话 */
  rider_phone?: string;
  /** 骑手位置经度, 配送中时返回 */
  rider_lng?: number;
  /** 骑手位置纬度, 配送中时返回 */
  rider_lat?: number;
  /** 预计还剩多久送达时间, 配送中时返回，单位秒， 已取货配送中需返回，比如5分钟后送达，填300 */
  reach_time?: number;
}

/** 模拟配送公司更新配送单状态 —— 请求体。 */
export interface ExpressLocalBusinessTestUpdateOrderBody {
  /** 商家id, 必须是 "test_shop_id" */
  shopid: string;
  /** 唯一标识订单的 ID，由商户生成 */
  shop_order_id: string;
  /** 配送状态 */
  order_status: number;
  /** 状态变更时间点，Unix秒级时间戳 */
  action_time: number;
  /** 附加信息 */
  action_msg?: string;
}
/** 模拟配送公司更新配送单状态 —— 返回体。 */
export interface ExpressLocalBusinessTestUpdateOrderResp {
  /** 运力返回的错误码 */
  resultcode?: number;
  /** 运力返回的错误描述 */
  resultmsg?: string;
}

/** 申请开通即时配送 —— 请求体（文档未列字段，放行任意键）。 */
export type ExpressLocalBusinessOpenBody = Record<string, unknown>;
/** 申请开通即时配送 —— 返回体。 */
export interface ExpressLocalBusinessOpenResp {
  /** 运力返回的错误码 */
  resultcode?: number;
  /** 运力返回的错误描述 */
  resultmsg?: string;
}

/** 预下配送单 —— 请求体。 */
export interface ExpressLocalBusinessOrderPreAddBody {
  /** 商家id， 由配送公司分配的appkey */
  shopid: string;
  /** 唯一标识订单的 ID，由商户生成, 不超过128字节 */
  shop_order_id: string;
  /** 配送公司ID */
  delivery_id: string;
  /** 下单用户的openid */
  openid: string;
  /** 发件人信息，闪送、顺丰同城急送必须填写，美团配送、达达，若传了shop_no的值可不填该字段 */
  sender: Record<string, unknown>;
  /** 收件人信息 */
  receiver: Record<string, unknown>;
  /** 货物信息 */
  cargo: Record<string, unknown>;
  /** 订单信息 */
  order_info: Record<string, unknown>;
  /** 商品信息，会展示到物流通知消息中 */
  shop: Record<string, unknown>;
  /** 用配送公司提供的appSecret加密的校验串说明 */
  delivery_sign: string;
  /** 商家门店编号，在配送公司登记，美团、闪送必填 */
  shop_no: string;
  /** 子商户id，区分小程序内部多个子商户 */
  sub_biz_id: string;
}
/** 预下配送单 —— 返回体。 */
export interface ExpressLocalBusinessOrderPreAddResp {
  /** 运力返回的错误码 */
  resultcode?: number;
  /** 运力返回的错误描述 */
  resultmsg?: string;
  /** 实际运费(单位：元)，运费减去优惠券费用 */
  fee?: number;
  /** 运费(单位：元) */
  deliverfee?: number;
  /** 优惠券费用(单位：元) */
  couponFee?: number;
  /** 小费(单位：元) */
  tips?: number;
  /** 保价费(单位：元) */
  insurancefee?: number;
  /** 配送距离(单位：米)预计骑手接单时间，单位秒，比如5分钟，就填300, 无法预计填0 */
  distance?: number;
  /** 配送公司可以返回此字段，当用户下单时候带上这个字段，保证在一段时间内运费不变 */
  delivery_token?: string;
  /** 预计骑手接单时间，单位秒，比如5分钟，就填300, 无法预计填0 */
  dispatch_duration?: number;
}

/** 预取消配送单 —— 请求体。 */
export interface ExpressLocalBusinessOrderPrecancelBody {
  /** 商家id， 由配送公司分配的appkey */
  shopid: string;
  /** 唯一标识订单的 ID，由商户生成 */
  shop_order_id: string;
  /** 快递公司ID */
  delivery_id: string;
  /** 配送单id */
  waybill_id: string;
  /** 取消原因Id */
  cancel_reason_id?: number;
  /** 取消原因 */
  cancel_reason?: string;
  /** 商家门店编号，在配送公司登记，闪送shop_no必填，值为店铺id */
  shop_no: string;
  /** 用配送公司提供的appSecret加密的校验串说明 */
  delivery_sign: string;
}
/** 预取消配送单 —— 返回体。 */
export interface ExpressLocalBusinessOrderPrecancelResp {
  /** 运力返回的错误码 */
  resultcode?: number;
  /** 运力返回的错误描述 */
  resultmsg?: string;
  /** 预计扣除的违约金(单位：元)，精确到分 */
  deduct_fee?: number;
  /** 说明 */
  desc?: string;
}

/** 模拟更新配送单状态 —— 请求体。 */
export interface ExpressLocalBusinessRealmockUpdateOrderBody {
  /** 商家id */
  shopid: string;
  /** 唯一标识订单的 ID，由商户生成 */
  shop_order_id: string;
  /** 配送状态，详见order_status 枚举值 */
  order_status: number;
  /** 状态变更时间点，Unix秒级时间戳 */
  action_time: number;
  /** 附加信息 */
  action_msg?: string;
  /** 用配送公司提供的appSecret加密的校验串说明 */
  delivery_sign: string;
}
/** 模拟更新配送单状态 —— 返回体。 */
export interface ExpressLocalBusinessRealmockUpdateOrderResp {
  /** 运力返回的错误码 */
  resultcode?: number;
  /** 运力返回的错误描述 */
  resultmsg?: string;
}

/** 重新下单 —— 请求体。 */
export interface ExpressLocalBusinessOrderReaddBody {
  /** 商家id，由配送公司分配的appkey */
  shopid: string;
  /** 唯一标识订单的 ID，由商户生成, 不超过128字节 */
  shop_order_id: string;
  /** 配送公司ID */
  delivery_id: string;
  /** 下单用户的openid */
  openid: string;
  /** 发件人信息，顺丰同城急送必须填写，美团配送、达达、闪送，若传了shop_no的值可不填该字段 */
  sender: Record<string, unknown>;
  /** 收件人信息 */
  receiver: Record<string, unknown>;
  /** 货物信息 */
  cargo: Record<string, unknown>;
  /** 订单信息 */
  order_info: Record<string, unknown>;
  /** 商品信息，会展示到物流通知消息中 */
  shop: Record<string, unknown>;
  /** 预下单接口返回的参数，配送公司可保证在一段时间内运费不变 */
  delivery_token: string;
  /** 用配送公司提供的appSecret加密的校验串说明 */
  delivery_sign: string;
  /** 商家门店编号，在配送公司登记，如果只有一个门店，美团闪送必填, 值为店铺id */
  shop_no: string;
  /** 子商户id，区分小程序内部多个子商户 */
  sub_biz_id?: string;
}
/** 重新下单 —— 返回体。 */
export interface ExpressLocalBusinessOrderReaddResp {
  /** 运力返回的错误码 */
  resultcode?: number;
  /** 运力返回的错误描述 */
  resultmsg?: string;
  /** 实际运费(单位：元)，运费减去优惠券费用 */
  fee?: number;
  /** 运费(单位：元) */
  deliverfee?: number;
  /** 优惠券费用(单位：元) */
  couponfee?: number;
  /** 小费(单位：元) */
  tips?: number;
  /** 保价费(单位：元) */
  insurancfee?: number;
  /** 配送距离(整数单位：米) */
  distance?: number;
  /** 配送单号 */
  waybill_id?: string;
  /** 配送状态 */
  order_status?: number;
  /** 收货码 */
  finish_code?: number;
  /** 取货码 */
  pickup_code?: number;
  /** 预计骑手接单时间，单位秒，比如5分钟，就填300, 无法预计填0 */
  dispatch_duration?: number;
}

/** 更新配送单状态 —— 请求体。 */
export interface ExpressLocalDeliveryUpdateOrderBody {
  /** 下单事件中推送的token字段 */
  wx_token: string;
  /** 订单状态 */
  order_status: number;
  /** 配送单id */
  waybill_id: string;
  /** 附加信息 */
  action_msg?: string;
  /** 状态变更时间点，Unix秒级时间戳 */
  action_time: number;
  /** 骑手信息, 骑手接单时需返回 */
  agent?: Record<string, unknown>;
  /** 商家id， 由配送公司分配，可以是dev_id或者appkey */
  shopid: string;
  /** 唯一标识订单的 ID，由商户生成 */
  shop_order_id: string;
  /** 商家门店编号， 在配送公司侧登记 */
  shop_no?: string;
  /** 配送公司小程序跳转路径，用于用户收到消息会间接跳转到这个页面 */
  wxa_path: string;
  /** 预计送达时间戳， 骑手接单时需返回 */
  expected_delivery_time?: number;
}
/** 更新配送单状态 —— 返回体。 */
export interface ExpressLocalDeliveryUpdateOrderResp {
  /** 错误码 */
  resultcode?: number;
  /** 错误描述 */
  resultmsg?: string;
}

/** 客服子商户拉取单个商户信息 —— 请求体。 */
export interface BusinessGetBody {
  /** 创建商户时得到的商户id,与account_name选填一个 */
  business_id?: string;
  /** 创建商户时用到的account_name,与business_id选填一个 */
  account_name?: string;
}
/** 客服子商户拉取单个商户信息 —— 返回体。 */
export interface BusinessGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 商户信息 */
  business_info?: Record<string, unknown>;
}

/** 客服子商户拉取多个商户信息 —— 请求体。 */
export interface BusinessListBody {
  /** 用于分页拉取，从0开始 */
  offset: number;
  /** 一次拉取的商户个数，最多为200 */
  count: number;
}
/** 客服子商户拉取多个商户信息 —— 返回体。 */
export interface BusinessListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 商户信息列表 */
  list?: unknown[];
}

/** 客服子商户创建商户 —— 请求体。 */
export interface BusinessRegisterBody {
  /** 创建商户时用到，一个account_name只能创建一次，account_name为6-30字符，必须为英文、数字、或者下划线，区分大小写。 */
  account_name: string;
  /** 商户昵称，会在客户端会话里展示，4-30字符(中文视为2字符)，由中文、英文、数字组成 */
  nickname: string;
  /** 头像，图片类型，需要用临时素材接口得到，使用新增临时素材，为空则不更新头像 */
  icon_media_id: string;
  /** 是否将消息转发到通用客服，false为不转发，true为转发，如果transfer_to_commkf=true时，可以使用客服管理相关api，请求参数新增business_id */
  transfer_to_commkf?: boolean;
}
/** 客服子商户创建商户 —— 返回体。 */
export interface BusinessRegisterResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 商户ID */
  business_id?: string;
}

/** 客服子商户更新商户信息 —— 请求体。 */
export interface BusinessUpdateBody {
  /** 创建商户时得到的商户id */
  business_id: string;
  /** 商户昵称，会在客户端会话里展示，4-30字符(中文视为2字符)，由中文、英文、数字组成 */
  nickname?: string;
  /** 头像，图片类型，需要用临时素材接口得到，使用新增临时素材，为空则不更新头像 */
  icon_media_id?: string;
}
/** 客服子商户更新商户信息 —— 返回体。 */
export interface BusinessUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 添加客服账号 —— 请求体。 */
export interface CustomserviceKfaccountAddBody {
  /** 完整客服账号，格式为：账号前缀@公众号微信号，账号前缀最多10个字符，必须是英文、数字字符或者下划线，后缀为公众号微信号，长度不超过30个字符 */
  kf_account: string;
  /** 客服昵称，最长16个字 */
  nickname: string;
  /** 客服子商户的business_id，对于普通账号客服不需要填business_id */
  business_id?: string;
}
/** 添加客服账号 —— 返回体。 */
export interface CustomserviceKfaccountAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 取消客服管理员 —— 请求体（文档未列字段，放行任意键）。 */
export type CustomserviceKfaccountCanceladminBody = Record<string, unknown>;
/** 取消客服管理员 —— 查询参数。 */
export interface CustomserviceKfaccountCanceladminQuery {
  /** 账号openid */
  kf_openid: string;
  /** 客服子商户的business_id，对于普通账号客服不需要填business_id */
  business_id?: string;
}
/** 取消客服管理员 —— 返回体。 */
export interface CustomserviceKfaccountCanceladminResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 删除客服账号 —— 请求体。 */
export interface CustomserviceKfaccountDelBody {
  /** 完整客服帐号，格式为：帐号前缀@公众号微信号 */
  kf_account: string;
  /** 客服子商户的business_id，对于普通账号客服不需要填business_id */
  business_id?: string;
}
/** 删除客服账号 —— 返回体。 */
export interface CustomserviceKfaccountDelResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取所有客服账号 —— 请求体（文档未列字段，放行任意键）。 */
export type CustomserviceGetkflistBody = Record<string, unknown>;
/** 获取所有客服账号 —— 查询参数。 */
export interface CustomserviceGetkflistQuery {
  /** 客服子商户的business_id，对于普通账号（小程序、公众号、服务号）客服不需要填business_id */
  business_id?: string;
}
/** 获取所有客服账号 —— 返回体。 */
export interface CustomserviceGetkflistResp {
  /** 客服列表 */
  kf_list?: unknown[];
}

/** 获取临时素材 —— 请求体（文档未列字段，放行任意键）。 */
export type MediaGetBody = Record<string, unknown>;
/** 获取临时素材 —— 查询参数。 */
export interface MediaGetQuery {
  /** 媒体文件ID */
  media_id: string;
}
/** 获取临时素材 —— 返回体。 */
export interface MediaGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 视频消息素材下载地址 */
  video_url?: string;
}

/** 获取在线客服列表 —— 请求体（文档未列字段，放行任意键）。 */
export type CustomserviceGetonlinekflistBody = Record<string, unknown>;
/** 获取在线客服列表 —— 查询参数。 */
export interface CustomserviceGetonlinekflistQuery {
  /** 客服子商户的business_id，对于普通小程序客服不需要填business_id */
  business_id?: string;
}
/** 获取在线客服列表 —— 返回体。 */
export interface CustomserviceGetonlinekflistResp {
  /** 在线客服列表 */
  kf_online_list?: unknown[];
}

/** 发送客服消息 —— 请求体。 */
export interface MessageCustomSendBody {
  /** 用户的 OpenID */
  touser: string;
  /** 消息类型。text表示文本消息；image表示图片消息；link表示图文链接；miniprogrampage表示小程序卡片。 */
  msgtype: string;
  /** 文本消息，msgtype="text" 时必填 */
  text?: Record<string, unknown>;
  /** 图片消息，msgtype="image" 时必填 */
  image?: Record<string, unknown>;
  /** 语音消息，msgtype="voice" 时必填 */
  voice?: Record<string, unknown>;
  /** 视频消息，msgtype="video" 时必填 */
  video?: Record<string, unknown>;
  /** 音乐消息，msgtype="music" 时必填 */
  music?: Record<string, unknown>;
  /** 图文消息（点击跳转到外链），msgtype="news" 时必填 */
  news?: Record<string, unknown>;
  /** 图文消息（点击跳转到图文消息页面），msgtype="mpnews" 时必填，图文消息条数限制在1条以内，注意，如果图文数超过1，则将会返回错误码45008。（草稿灰度完成后，此类型不再支持） */
  mpnews?: Record<string, unknown>;
  /** 图文消息（点击跳转到图文消息页面），msgtype="mpnewsarticle" 时必填，使用通过 “发布” 系列接口得到的 article_id */
  mpnewsarticle?: Record<string, unknown>;
  /** 菜单消息，msgtype="msgmenu" 时必填 */
  msgmenu?: Record<string, unknown>;
  /** 卡券信息，msgtype="wxcard"时必填 */
  wxcard?: Record<string, unknown>;
  /** 小程序消息，msgtype="miniprogrampage"时必填 */
  miniprogrampage?: Record<string, unknown>;
  /** 以某个客服账号来发消息 */
  customservice?: Record<string, unknown>;
  /** ai 消息上下文 */
  aimsgcontext?: Record<string, unknown>;
  /** 子商户ID，普通账号无需传 */
  businessid?: string;
}
/** 发送客服消息 —— 返回体。 */
export interface MessageCustomSendResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 设置客服管理员 —— 请求体（文档未列字段，放行任意键）。 */
export type CustomserviceKfaccountSetadminBody = Record<string, unknown>;
/** 设置客服管理员 —— 查询参数。 */
export interface CustomserviceKfaccountSetadminQuery {
  /** 账号openid */
  kf_openid: string;
  /** 客服子商户的business_id，对于普通账号客服不需要填business_id */
  business_id?: string;
}
/** 设置客服管理员 —— 返回体。 */
export interface CustomserviceKfaccountSetadminResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 客服输入状态 —— 请求体。 */
export interface MessageCustomBusinessTypingBody {
  /** 用户的 OpenID */
  touser: string;
  /** 命令。Typing表示对用户下发"正在输入"状态 ；CancelTyping表示取消对用户的"正在输入"状态 */
  command: string;
  /** 子商户 ID，普通账号无需填写 */
  businessid?: string;
}
/** 客服输入状态 —— 返回体。 */
export interface MessageCustomBusinessTypingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 新增临时素材 —— 请求体。 */
export interface MediaUploadBody {
  /** form-data 中媒体文件标识，有filename、filelength、content-type等信息 */
  media: unknown;
}
/** 新增临时素材 —— 查询参数。 */
export interface MediaUploadQuery {
  /** 媒体文件类型，分别有图片（image）、语音（voice）、视频（video）和缩略图（thumb） */
  type: string;
}
/** 新增临时素材 —— 返回体。 */
export interface MediaUploadResp {
  /** 媒体文件类型 */
  type?: string;
  /** 媒体文件标识 */
  media_id?: string;
  /** 上传时间戳 */
  created_at?: number;
}

/** 绑定微信客服 —— 请求体。 */
export interface CustomserviceWorkBindBody {
  /** 企业ID，获取方式参考：术语说明-corpid。 */
  corpid: string;
}
/** 绑定微信客服 —— 返回体。 */
export interface CustomserviceWorkBindResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询绑定情况 —— 请求体（文档未列字段，放行任意键）。 */
export type CustomserviceWorkGetBody = Record<string, unknown>;
/** 查询绑定情况 —— 返回体。 */
export interface CustomserviceWorkGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 该小程序的主体名称，未绑定时不返回 */
  entityName?: string;
  /** 企业ID，未绑定时不返回 */
  corpid?: string;
  /** 绑定时间戳（单位：秒），未绑定时不返回 */
  bindTime?: number;
}

/** 解除绑定微信客服 —— 请求体。 */
export interface CustomserviceWorkUnbindBody {
  /** 企业ID，获取方式参考：术语说明-corpid。 */
  corpid: string;
}
/** 解除绑定微信客服 —— 返回体。 */
export interface CustomserviceWorkUnbindResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 推送用工消息 —— 请求体。 */
export interface MessageWxopenEmployeerelationmsgSendBody {
  /** 消息模版id */
  template_id: string;
  /** 跳转路径 */
  page: string;
  /** 被推送用户openid */
  touser: string;
  /** 消息内容 */
  data: string;
}
/** 推送用工消息 —— 返回体。 */
export interface MessageWxopenEmployeerelationmsgSendResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 解绑用工关系 —— 请求体。 */
export interface BusinessUnbinduserb2cauthinfoBody {
  /** 被解绑用户的openid列表 */
  openid_list: unknown[];
}
/** 解绑用工关系 —— 返回体。 */
export interface BusinessUnbinduserb2cauthinfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 添加并提审商品 —— 请求体。 */
export interface BroadcastGoodsAddBody {
  /** 商品信息 */
  goodsInfo: Record<string, unknown>;
}
/** 添加并提审商品 —— 返回体。 */
export interface BroadcastGoodsAddResp {
  /** 商品ID */
  goodsId?: number;
  /** 审核单ID */
  auditId?: number;
}

/** 删除商品 —— 请求体。 */
export interface BroadcastGoodsDeleteBody {
  /** 商品ID */
  goodsId: number;
}
/** 删除商品 —— 返回体。 */
export interface BroadcastGoodsDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 获取商品的信息与审核状态 —— 请求体。 */
export interface BusinessGetgoodswarehouseBody {
  /** 商品ID */
  goods_ids: unknown[];
}
/** 获取商品的信息与审核状态 —— 返回体。 */
export interface BusinessGetgoodswarehouseResp {
  /** 商品列表 */
  goods?: unknown[];
  /** 商品个数 */
  total?: number;
}

/** 获取商品列表 —— 请求体（文档未列字段，放行任意键）。 */
export type BroadcastGoodsGetapprovedBody = Record<string, unknown>;
/** 获取商品列表 —— 查询参数。 */
export interface BroadcastGoodsGetapprovedQuery {
  /** 分页条数起点 */
  offset: number;
  /** 分页大小，默认30，不超过100 */
  limit?: number;
  /** 商品状态，0：未审核。1：审核中，2：审核通过，3：审核驳回 */
  status: number;
}
/** 获取商品列表 —— 返回体。 */
export interface BroadcastGoodsGetapprovedResp {
  /** 商品列表 */
  goods?: unknown[];
  /** 商品个数 */
  total?: number;
}

/** 撤回商品审核 —— 请求体。 */
export interface BroadcastGoodsResetauditBody {
  /** 商品ID */
  goodsId: number;
  /** 审核单ID */
  auditId: number;
}
/** 撤回商品审核 —— 返回体。 */
export interface BroadcastGoodsResetauditResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 重新提交商品审核 —— 请求体。 */
export interface BroadcastGoodsAuditBody {
  /** 商品ID */
  goodsId: number;
}
/** 重新提交商品审核 —— 返回体。 */
export interface BroadcastGoodsAuditResp {
  /** 审核单ID */
  auditId?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 更新商品 —— 请求体。 */
export interface BroadcastGoodsUpdateBody {
  /** 商品信息 */
  goodsInfo: Record<string, unknown>;
}
/** 更新商品 —— 返回体。 */
export interface BroadcastGoodsUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 移除成员角色 —— 请求体。 */
export interface BroadcastRoleDeleteroleBody {
  /** 用户的微信号 */
  username: string;
  /** 删除用户的角色 */
  role: number;
}
/** 移除成员角色 —— 返回体。 */
export interface BroadcastRoleDeleteroleResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 查询成员列表 —— 请求体（文档未列字段，放行任意键）。 */
export type BroadcastRoleGetrolelistBody = Record<string, unknown>;
/** 查询成员列表 —— 查询参数。 */
export interface BroadcastRoleGetrolelistQuery {
  /** 起始偏移量, 默认0 */
  offset?: number;
  /** 查询个数，最大30，默认10 */
  limit?: number;
  /** 搜索的微信号或昵称，不传则返回全部 */
  keyword?: string;
}
/** 查询成员列表 —— 返回体。 */
export interface BroadcastRoleGetrolelistResp {
  /** 总个数 */
  total?: number;
  /** 角色列表 */
  list?: unknown[];
}

/** 设置成员角色 —— 请求体。 */
export interface BroadcastRoleAddroleBody {
  /** 用户的微信号 */
  username: string;
  /** 设置用户的角色 */
  role: number;
}
/** 设置成员角色 —— 返回体。 */
export interface BroadcastRoleAddroleResp {
  /** 如果主播未实名认证，需要先前往“小程序直播”小程序进行实名验证 */
  codeurl?: string;
}

/** 添加主播副号 —— 请求体。 */
export interface BroadcastRoomAddsubanchorBody {
  /** 房间ID */
  roomId: number;
  /** 用户微信号 */
  username: string;
}
/** 添加主播副号 —— 返回体。 */
export interface BroadcastRoomAddsubanchorResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 添加管理直播间小助手 —— 请求体。 */
export interface BroadcastRoomAddassistantBody {
  /** 房间ID */
  roomId: number;
  /** 用户数组 */
  users: unknown[];
}
/** 添加管理直播间小助手 —— 返回体。 */
export interface BroadcastRoomAddassistantResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 创建直播间 —— 请求体。 */
export interface BroadcastRoomCreateBody {
  /** 直播间名字，最短3个汉字，最长17个汉字，1个汉字相当于2个字符 */
  name: string;
  /** 背景图，填入mediaID（mediaID获取后，三天内有效）；图片mediaID的获取，请参考新增临时素材；直播间背景图，图片规则：建议像素1080*1920，大小不超过2M */
  coverImg: string;
  /** 直播计划开始时间（开播时间需要在当前时间的10分钟后 并且 开始时间不能在 6 个月后） */
  startTime: number;
  /** 直播计划结束时间（开播时间和结束时间间隔不得短于30分钟，不得超过24小时） */
  endTime: number;
  /** 主播昵称，最短2个汉字，最长15个汉字，1个汉字相当于2个字符 */
  anchorName: string;
  /** 主播微信号，如果未实名认证，需要先前往小程序直播小程序进行实名验证 */
  anchorWechat: string;
  /** 主播副号微信号，如果未实名认证，需要先前往小程序直播小程序进行实名验证 */
  subAnchorWechat?: string;
  /** 创建者微信号，不传入则此直播间所有成员可见。传入则此房间仅创建者、管理员、超管、直播间主播可见 */
  createrWechat?: string;
  /** 分享图，填入mediaID（mediaID获取后，三天内有效）；图片mediaID的获取，请参考新增临时素材；直播间分享图，图片规则：建议像素800*640，大小不超过1M； */
  shareImg: string;
  /** 购物直播频道封面图，填入mediaID（mediaID获取后，三天内有效）；图片mediaID的获取，请参考新增临时素材；购物直播频道封面图，图片规则：建议像素800*800，大小不超过100KB； */
  feedsImg: string;
  /** 是否开启官方收录 【1: 开启，0：关闭】，默认开启收录 */
  isFeedsPublic?: number;
  /** 直播间类型 【1: 推流，0：手机直播】 */
  type: number;
  /** 是否关闭点赞 【0：开启，1：关闭】（若关闭，观众端将隐藏点赞按钮，直播开始后不允许开启） */
  closeLike: number;
  /** 是否关闭货架 【0：开启，1：关闭】（若关闭，观众端将隐藏商品货架，直播开始后不允许开启） */
  closeGoods: number;
  /** 是否关闭评论 【0：开启，1：关闭】（若关闭，观众端将隐藏评论入口，直播开始后不允许开启） */
  closeComment: number;
  /** 是否关闭回放 【0：开启，1：关闭】默认关闭回放（直播开始后允许开启） */
  closeReplay?: number;
  /** 是否关闭分享 【0：开启，1：关闭】默认开启分享（直播开始后不允许修改） */
  closeShare?: number;
  /** 是否关闭客服 【0：开启，1：关闭】 默认关闭客服（直播开始后允许开启） */
  closeKf?: number;
}
/** 创建直播间 —— 返回体。 */
export interface BroadcastRoomCreateResp {
  /** 房间ID */
  roomId?: number;
  /** 小程序直播小程序码 */
  qrcode_url?: string;
}

/** 删除直播间商品 —— 请求体。 */
export interface BroadcastGoodsDeleteInRoomBody {
  /** 房间ID */
  roomId: number;
  /** 商品ID */
  goodsId: number;
}
/** 删除直播间商品 —— 返回体。 */
export interface BroadcastGoodsDeleteInRoomResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 删除直播间 —— 请求体。 */
export interface BroadcastRoomDeleteroomBody {
  /** 房间ID */
  id: number;
}
/** 删除直播间 —— 返回体。 */
export interface BroadcastRoomDeleteroomResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 删除主播副号 —— 请求体。 */
export interface BroadcastRoomDeletesubanchorBody {
  /** 房间ID */
  roomId: number;
}
/** 删除主播副号 —— 返回体。 */
export interface BroadcastRoomDeletesubanchorResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 下载商品讲解视频 —— 请求体。 */
export interface BroadcastGoodsGetVideoBody {
  /** 房间ID */
  roomId: number;
  /** 商品ID */
  goodsId: number;
}
/** 下载商品讲解视频 —— 返回体。 */
export interface BroadcastGoodsGetVideoResp {
  /** 讲解链接 */
  url?: string;
  /** 错误码 */
  errcode?: number;
}

/** 编辑直播间 —— 请求体。 */
export interface BroadcastRoomEditroomBody {
  /** 直播间id */
  id: number;
  /** 直播间名字，最短3个汉字，最长17个汉字，1个汉字相当于2个字符 */
  name: string;
  /** 背景图，填入mediaID（mediaID获取后，三天内有效）；图片mediaID的获取，请参考新增临时素材；直播间背景图，图片规则：建议像素1080*1920，大小不超过2M */
  coverImg: string;
  /** 直播计划开始时间（开播时间需要在当前时间的10分钟后 并且 开始时间不能在 6 个月后） */
  startTime: number;
  /** 直播计划结束时间（开播时间和结束时间间隔不得短于30分钟，不得超过24小时） */
  endTime: number;
  /** 主播昵称，最短2个汉字，最长15个汉字，1个汉字相当于2个字符 */
  anchorName: string;
  /** 主播微信号，如果未实名认证，需要先前往小程序直播小程序进行实名验证 */
  anchorWechat: string;
  /** 分享图，填入mediaID（mediaID获取后，三天内有效）；图片mediaID的获取，请参考新增临时素材；直播间分享图，图片规则：建议像素800*640，大小不超过1M； */
  shareImg: string;
  /** 购物直播频道封面图，填入mediaID（mediaID获取后，三天内有效）；图片mediaID的获取，请参考新增临时素材；购物直播频道封面图，图片规则：建议像素800*800，大小不超过100KB； */
  feedsImg: string;
  /** 是否开启官方收录 【1: 开启，0：关闭】，默认开启收录 */
  isFeedsPublic?: number;
  /** 是否关闭点赞 【0：开启，1：关闭】（若关闭，观众端将隐藏点赞按钮，直播开始后不允许开启） */
  closeLike: number;
  /** 是否关闭货架 【0：开启，1：关闭】（若关闭，观众端将隐藏商品货架，直播开始后不允许开启） */
  closeGoods: number;
  /** 是否关闭评论 【0：开启，1：关闭】（若关闭，观众端将隐藏评论入口，直播开始后不允许开启） */
  closeComment: number;
  /** 是否关闭回放 【0：开启，1：关闭】默认关闭回放（直播开始后允许开启） */
  closeReplay?: number;
  /** 是否关闭分享 【0：开启，1：关闭】默认开启分享（直播开始后不允许修改） */
  closeShare?: number;
  /** 是否关闭客服 【0：开启，1：关闭】 默认关闭客服（直播开始后允许开启） */
  closeKf?: number;
}
/** 编辑直播间 —— 返回体。 */
export interface BroadcastRoomEditroomResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 查询直播间小助手 —— 请求体。 */
export interface BroadcastRoomGetassistantlistBody {
  /** 房间ID */
  roomId: number;
}
/** 查询直播间小助手 —— 返回体。 */
export interface BroadcastRoomGetassistantlistResp {
  /** 小助手列表 */
  list?: unknown[];
  /** 小助手个数 */
  count?: number;
  /** 小助手最大个数 */
  maxCount?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 直播挂件获取全局KEY —— 请求体（文档未列字段，放行任意键）。 */
export type BroadcastGoodsGetkeyBody = Record<string, unknown>;
/** 直播挂件获取全局KEY —— 返回体。 */
export interface BroadcastGoodsGetkeyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 全局KEY */
  vendorGoodsKey?: unknown[];
}

/** 获取直播间列表和回放 —— 请求体。 */
export interface BusinessGetliveinfoBody {
  /** 起始拉取视频，0表示从第一个视频片段开始拉取 */
  start: number;
  /** 每次拉取的数量，建议100以内 */
  limit: number;
  /** 只能填"get_replay"，表示获取回放。 */
  action?: string;
  /** 当action有值时该字段必填，直播间ID */
  room_id?: number;
}
/** 获取直播间列表和回放 —— 返回体。 */
export interface BusinessGetliveinfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** action="get_replay"不返回。 */
  room_info?: unknown[];
  /** 拉取房间总数 */
  total?: number;
  /** action="get_replay"才返回。 */
  live_replay?: unknown[];
}

/** 获取直播间推流地址 —— 请求体。 */
export interface BroadcastRoomGetpushurlBody {
  /** 房间ID */
  roomId: number;
}
/** 获取直播间推流地址 —— 返回体。 */
export interface BroadcastRoomGetpushurlResp {
  /** 推流地址 */
  pushAddr?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 获取直播间分享二维码 —— 请求体。 */
export interface BroadcastRoomGetsharedcodeBody {
  /** 房间ID */
  roomId: number;
  /** 自定义参数 */
  params?: string;
}
/** 获取直播间分享二维码 —— 返回体。 */
export interface BroadcastRoomGetsharedcodeResp {
  /** 返回码 */
  errcode?: number;
  /** 分享二维码cdn url */
  cdnUrl?: string;
  /** 分享路径 */
  pagePath?: string;
  /** 分享海报 url */
  posterUrl?: string;
}

/** 获取主播副号 —— 请求体。 */
export interface BroadcastRoomGetsubanchorBody {
  /** 房间ID */
  roomId: number;
}
/** 获取主播副号 —— 返回体。 */
export interface BroadcastRoomGetsubanchorResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 主播微信号 */
  username?: string;
}

/** 导入商品 —— 请求体。 */
export interface BroadcastRoomAddgoodsBody {
  /** 数组列表，可传入多个，里面填写 商品 ID */
  ids: unknown[];
  /** 房间ID */
  roomId: number;
}
/** 导入商品 —— 返回体。 */
export interface BroadcastRoomAddgoodsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 修改直播间小助手 —— 请求体。 */
export interface BroadcastRoomModifyassistantBody {
  /** 房间ID */
  roomId: number;
  /** 用户微信号 */
  username: string;
  /** 用户微信昵称 */
  nickname: string;
}
/** 修改直播间小助手 —— 返回体。 */
export interface BroadcastRoomModifyassistantResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 修改主播副号 —— 请求体。 */
export interface BroadcastRoomModifysubanchorBody {
  /** 房间ID */
  roomId: number;
  /** 微信号 */
  username: string;
}
/** 修改主播副号 —— 返回体。 */
export interface BroadcastRoomModifysubanchorResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 推送商品 —— 请求体。 */
export interface BroadcastGoodsPushBody {
  /** 房间ID */
  roomId: number;
  /** 商品ID */
  goodsId: number;
}
/** 推送商品 —— 返回体。 */
export interface BroadcastGoodsPushResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 删除直播间小助手 —— 请求体。 */
export interface BroadcastRoomRemoveassistantBody {
  /** 房间ID */
  roomId: number;
  /** 用户微信号 */
  username: string;
}
/** 删除直播间小助手 —— 返回体。 */
export interface BroadcastRoomRemoveassistantResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 上下架商品 —— 请求体。 */
export interface BroadcastGoodsOnsaleBody {
  /** 房间ID */
  roomId: number;
  /** 商品ID */
  goodsId: number;
  /** 上下架 【0：下架，1：上架】 */
  onSale: number;
}
/** 上下架商品 —— 返回体。 */
export interface BroadcastGoodsOnsaleResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 直播挂件设置全局KEY —— 请求体。 */
export interface BroadcastGoodsSetkeyBody {
  /** 商品KEY */
  goodsKey: unknown[];
}
/** 直播挂件设置全局KEY —— 返回体。 */
export interface BroadcastGoodsSetkeyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 直播间商品排序 —— 请求体。 */
export interface BroadcastGoodsSortBody {
  /** 房间ID */
  roomId: number;
  /** 商品ID列表 */
  goods: unknown[];
}
/** 直播间商品排序 —— 返回体。 */
export interface BroadcastGoodsSortResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 禁言管理 —— 请求体。 */
export interface BroadcastRoomUpdatecommentBody {
  /** 房间ID */
  id: number;
  /** 1-禁言，0-取消禁言 */
  banComment: number;
}
/** 禁言管理 —— 返回体。 */
export interface BroadcastRoomUpdatecommentResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 官方收录管理 —— 请求体。 */
export interface BroadcastRoomUpdatefeedpublicBody {
  /** 房间ID */
  roomId: number;
  /** 是否开启官方收录 【1: 开启，0：关闭】 */
  isFeedsPublic: number;
}
/** 官方收录管理 —— 返回体。 */
export interface BroadcastRoomUpdatefeedpublicResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 客服功能管理 —— 请求体。 */
export interface BroadcastRoomUpdatekfBody {
  /** 房间ID */
  roomId: number;
  /** 是否关闭客服 【0：开启，1：关闭】 */
  closeKf: number;
}
/** 客服功能管理 —— 返回体。 */
export interface BroadcastRoomUpdatekfResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 回放功能管理 —— 请求体。 */
export interface BroadcastRoomUpdatereplayBody {
  /** 房间ID */
  roomId: number;
  /** 是否关闭回放 【0：开启，1：关闭】 */
  closeReplay: number;
}
/** 回放功能管理 —— 返回体。 */
export interface BroadcastRoomUpdatereplayResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 获取长期订阅用户 —— 请求体。 */
export interface BusinessGetWxaFollowersBody {
  /** 获取长期订阅用户的个数限制，默认200，最大2000 */
  limit?: number;
  /** 翻页标记，获取第一页时不带，第二页开始需带上上一页返回结果中的page_break */
  page_break?: number;
}
/** 获取长期订阅用户 —— 返回体。 */
export interface BusinessGetWxaFollowersResp {
  /** 长期订阅用户列表 */
  followers?: unknown[];
  /** 长期订阅用户OpenId */
  openid?: unknown[];
  /** 长期订阅用户订阅时间 */
  subscribe_time?: number;
  /** 用户订阅时所处房间 */
  room_id?: number;
  /** 用户订阅时房间状态 */
  room_status?: number;
  /** 翻页标记，获取下一页时带上该值 */
  page_break?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 发送直播开始事件 —— 请求体。 */
export interface BusinessPushMessageBody {
  /** 直播开始事件的房间ID */
  room_id: number;
  /** 接收该群发开播事件的订阅用户OpenId列表 */
  user_openid: unknown[];
}
/** 发送直播开始事件 —— 返回体。 */
export interface BusinessPushMessageResp {
  /** 此次群发消息的标识ID，用于对应【长期订阅群发结果回调】的message_id */
  message_id?: string;
  /** 接口返回码，0表示成功，非0则失败。若errcode=0仅表明触发接口成功，最终群发结果请看【长期订阅群发结果回调】 */
  errcode?: number;
  /** 接口返回提示信息 */
  errmsg?: string;
}

/** 剧目提审 —— 请求体。 */
export interface VodAuditdramaBody {
  /** 剧目id，首次提审不需要填该参数，重新提审时必填 */
  drama_id: number;
  /** 剧目名称，首次提审时必填，重新提审时根据是否需要修改选填。 */
  name: string;
  /** 剧集数目。首次提审时必填， 重新提审时可不填，如要填写也要和第一次提审时一样。 */
  media_count: number;
  /** 剧集媒资media_id列表。首次提审时必填，而且元素个数必须与media_count一致。重新提审时为可选，如果剧集有内容有变化，可以通过新的列表替换未通过的剧集（推荐使用replace_media */
  media_id_list: unknown[];
  /** 剧目简介，可填写200个字符。 */
  description: string;
  /** 剧目推荐语，可填写30个字符。 */
  recommendations?: string;
  /** 剧目海报临时material_id。首次提审时必填，重新提审时根据是否需要修改选填。 */
  cover_material_id: string;
  /** 推广海报临时material_id。 */
  promotion_poster_material_id?: string;
  /** 剧目制作方 。首次提审时必填，重新提审时根据是否需要修改选填。 */
  producer: string;
  /** 不申请版权保护时必填，权利声明/播放授权材料material_id。 需上传《权利声明及不侵权承诺函》 注：(1) 剧目制作方/版权方与账号主体一致时，请上传附件1（需签章）； (2) 剧目制作方/版 */
  authorized_material_id?: string;
  /** 剧目资质：1-取得《网络剧片发行许可证》或重点节目备案号；2-未取得《网络剧片发行许可证》或重点节目备案，且制作成本小于100万元 注： 1、 （1）剧目资质=1：需上传“网络剧片发行许可证”或“广电 */
  qualification_type: number;
  /** 剧目备案号，当qualification_type=1时必填。根据提供的剧目资质证明文件填写对应的网络剧片发行许可证编号或剧目备案号。如：(沪)网剧审字(2023)第001号 或 V123456788 */
  registration_number?: string;
  /** 剧目资质证明文件，当qualification_type=1时必填。请提供网络剧片发行许可证或广电备案系统截图。查看截图示例 */
  qualification_certificate_material_id?: string;
  /** 《成本配置比例情况报告》material_id，当qualification_type=2时必填。2026年1月14日00:00起提审需使用新模板。点击下载旧模板，点击下载新模板 */
  cost_commitment_letter_material_id?: string;
  /** 剧目制作成本（单位：万元），当qualification_type=2时必填。请填写“1-99” 的整数（如非整数将截断取整），数值需与《成本配置比例情况报告》中对应剧目制作成本一致。 */
  cost_of_production?: number;
  /** 填1表示审核加急，0或不填为不加急。每天有5次加急机会。该字段在首次提审时才有效，重新提审时会沿用首次提审时的属性，重新提审不会扣次数。最终是否为加急单，可以根据drama_info_list.exp */
  expedited?: number;
  /** 演员信息，需填写2-5位演员。当drama_type=2时必填，当drama_type=1和3时无需填写。 */
  actor_list?: Record<string, unknown>;
  /** 其他材料material_id，如涉及互动短剧，请上传完整剧情走线示意图。 */
  other_material_material_id?: string;
  /** 用于重新提审时替换审核不通过的剧集。 */
  replace_media_list?: unknown[];
  /** 版权保护相关。 */
  copyright: Record<string, unknown>;
  /** 剧目类型，1-漫剧；2-真人。新增3-数字真人（2026年4月20日11:00起生效） 注： 1.漫剧：指基于漫画、动画或绘图风格制作的剧目，不涉及真人出演。提审流程无需上传对应的演职人员信息。 2. */
  drama_type: number;
  /** AI内容声明，1-视频包含AI生成的内容；0或不传-视频不包含AI生成的内容 */
  content_declared?: number;
}
/** 剧目提审 —— 返回体。 */
export interface VodAuditdramaResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 剧目id。 */
  drama_id?: number;
}

/** 获取剧目信息 —— 请求体。 */
export interface VodGetdramaBody {
  /** 剧目id */
  drama_id: number;
}
/** 获取剧目信息 —— 返回体。 */
export interface VodGetdramaResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 剧目信息 */
  drama_info?: Record<string, unknown>;
}

/** 查询剧目审核信息 —— 请求体。 */
export interface VodGetdramalatestauditinfoBody {
  /** 剧目id */
  drama_id: number;
  /** 审核类型。0为首次提审；1为再次提审；2为替换剧集提审；3为修改剧目基本信息审核。 */
  audit_type: number;
}
/** 查询剧目审核信息 —— 返回体。 */
export interface VodGetdramalatestauditinfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 审核信息，区别于getdrama接口的audit_detail，getdrama接口的audit_type仅表示audit_type=0或1的审核信息。 */
  audit_detail?: Record<string, unknown>;
}

/** 获取剧目列表 —— 请求体。 */
export interface VodListdramasBody {
  /** 分页拉取的最大返回结果数。最大值：100。 */
  limit?: number;
  /** 分页拉取的起始偏移量。 */
  offset?: number;
}
/** 获取剧目列表 —— 返回体。 */
export interface VodListdramasResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 媒体文件id */
  drama_info_list?: unknown[];
}

/** 替换审核通过的剧集 —— 请求体。 */
export interface VodReplacedramamediaBody {
  /** 剧目id */
  drama_id: number;
  /** 旧剧集meida_id */
  old_media_id: number;
  /** 新剧集meida_id */
  new_media_id: number;
}
/** 替换审核通过的剧集 —— 返回体。 */
export interface VodReplacedramamediaResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 修改剧目基本信息 —— 请求体。 */
export interface VodModifydramabasicinfoBody {
  /** 剧目id */
  drama_id: number;
  /** 剧目简介，支持填写200个字符。 */
  description?: string;
  /** 剧目海报临时material_id。 */
  cover_material_id?: string;
  /** 剧目推荐语。 */
  recommendations?: string;
  /** 推广海报临时material_id。 */
  promotion_poster_material_id?: string;
  /** 备用剧名。 */
  alternate_name?: string;
  /** 演员信息。如果需要修改，请填写所有的演员信息。 */
  actor_list?: Record<string, unknown>;
  /** 剧目资质：1-取得《网络剧片发行许可证》或重点节目备案号；2-未取得《网络剧片发行许可证》或重点节目备案，且制作成本小于30万元 注： 1、 （1）剧目资质=1：需上传“网络剧片发行许可证”或“广电备 */
  qualification_type?: number;
  /** 剧目备案号，当qualification_type=1时必填。根据提供的剧目资质证明文件填写对应的网络剧片发行许可证编号或剧目备案号。如：(沪)网剧审字(2023)第001号 或 V123456788 */
  registration_number?: string;
  /** 剧目资质证明文件，当qualification_type=1时必填。请提供网络剧片发行许可证或广电备案系统截图。查看截图示例 */
  qualification_certificate_material_id?: string;
  /** 剧目制作成本（单位：万元），当qualification_type=2时必填。请填写“1-99” 的整数（如非整数将截断取整），数值需与《成本配置比例情况报告》中对应剧目制作成本一致。 */
  cost_of_production?: number;
  /** 《成本配置比例情况报告》material_id，当qualification_type=2时必填。2026年1月14日00:00起提审需使用新模板。点击下载旧模板，点击下载新模板 */
  cost_commitment_letter_material_id?: string;
  /** 其他材料material_id，如涉及互动短剧，请上传完整剧情走线示意图。 */
  other_material_material_id?: string;
  /** 剧目制作方。apply_for_copyright_protection =1时必填，否则无需填写。 */
  producer?: string;
  /** 版权保护相关。apply_for_copyright_protection =1时必填，否则无需填写 。 */
  copyright?: Record<string, unknown>;
}
/** 修改剧目基本信息 —— 返回体。 */
export interface VodModifydramabasicinfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 提交替换剧集审核 —— 请求体。 */
export interface VodSubmitreplacedramamediasBody {
  /** 剧目id */
  drama_id: number;
  /** 替换的剧集信息。 */
  replace_media_list: unknown[];
}
/** 提交替换剧集审核 —— 返回体。 */
export interface VodSubmitreplacedramamediasResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 增加账号授权 —— 请求体。 */
export interface VodAuthorizeappBody {
  /** 被授权方小程序id。 */
  authorized_appid: string;
  /** 不传或者传0，表示永久有效；否则表示授权到期的时间戳。 */
  authz_expire_time?: number;
}
/** 增加账号授权 —— 返回体。 */
export interface VodAuthorizeappResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 解除账号授权 —— 请求体。 */
export interface VodDeauthorizeappBody {
  /** 被授权方小程序id。 */
  authorized_appid: string;
}
/** 解除账号授权 —— 返回体。 */
export interface VodDeauthorizeappResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询账号授权信息 —— 请求体（文档未列字段，放行任意键）。 */
export type VodGetauthorizeappsBody = Record<string, unknown>;
/** 查询账号授权信息 —— 返回体。 */
export interface VodGetauthorizeappsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 授权信息 */
  objects?: unknown[];
}

/** 查询被授权信息 —— 请求体。 */
export interface VodGetauthorizedobjectsBody {
  /** 授权方小程序id。不填表示查询所有授权方。 */
  authorizer_appid?: string;
  /** 偏移值，分页请求用。默认0。 */
  offset?: number;
  /** 分页大小，默认100，最大值为1000。 */
  limit?: number;
}
/** 查询被授权信息 —— 返回体。 */
export interface VodGetauthorizedobjectsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 当前查询条件下的记录总数 */
  total_count?: number;
  /** 被授权信息 */
  objects?: unknown[];
}

/** 增加版权授权 —— 请求体。 */
export interface VodAuthorizecopyrightBody {
  /** 授权类型：1. 授权给主体；2. 授权给小程序； */
  authorization_type: number;
  /** 被授权方小程序id，`authorization_type` 为 2 时必填。 */
  authorized_appid?: string;
  /** 被授权方主体证件号，必须为统一社会信用代码，`authorization_type` 为 1 时必填。 */
  authorized_subject_cert_no?: string;
  /** 要授权的受版权保护的剧目 id，最多 100 个。 */
  drama_ids?: unknown[];
  /** 不传或者传 0，表示永久有效；否则表示授权到期的时间戳。如果指定授权到期时间，授权时长不能小于 7 天（从当前时间算起）。默认值为 0。 */
  expire_time?: number;
}
/** 增加版权授权 —— 返回体。 */
export interface VodAuthorizecopyrightResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 授权的结果 */
  result?: unknown[];
}

/** 解除版权授权 —— 请求体。 */
export interface VodDeauthorizecopyrightBody {
  /** 被授权方授权类型：1. 主体；2. 小程序； */
  authorization_type: number;
  /** 被授权方小程序id，`authorization_type` 为 2 时必填。 */
  authorized_appid?: string;
  /** 被授权方主体证件号，必须为统一社会信用代码，`authorization_type` 为 1 时必填。 */
  authorized_subject_cert_no?: string;
  /** 要解除授权的受版权保护的剧目 id，最多 100 个 */
  drama_ids?: unknown[];
}
/** 解除版权授权 —— 返回体。 */
export interface VodDeauthorizecopyrightResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 解除授权的结果 */
  result?: unknown[];
}

/** 查询版权授权信息 —— 请求体。 */
export interface VodGetcopyrightauthorizationlistBody {
  /** 授权类型：1. 授权给主体；2. 授权给小程序。不填默认值为 0，表示查询全部。 */
  authorization_type?: number;
  /** 被授权方小程序id，authorization_type 为 2 时必填。 */
  authorized_appid?: string;
  /** 被授权方主体证件号，必须为统一社会信用代码，authorization_type 为 1 时必填。 */
  authorized_subject_cert_no?: string;
  /** 授权剧目 id。不填默认值为 0，表示查询全部。 */
  drama_id?: number;
  /** 偏移值，分页请求用。默认 0。 */
  offset?: number;
  /** 分页大小，默认 100，最大值为 1000。 */
  limit?: number;
}
/** 查询版权授权信息 —— 返回体。 */
export interface VodGetcopyrightauthorizationlistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 授权信息 */
  list?: unknown[];
  /** 总数 */
  total_count?: number;
}

/** 查询被版权授权信息 —— 请求体。 */
export interface VodGetcopyrightauthorizedlistBody {
  /** 授权方小程序id，不填表示查全部。 */
  authorizer_appid?: string;
  /** 偏移值，分页请求用。默认 0。 */
  offset?: number;
  /** 分页大小，默认 100，最大值为 1000。 */
  limit?: number;
}
/** 查询被版权授权信息 —— 返回体。 */
export interface VodGetcopyrightauthorizedlistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 被授权信息 */
  list?: unknown[];
  /** 总数 */
  total_count?: number;
}

/** 增加剧目授权 —— 请求体。 */
export interface VodAuthorizedramaBody {
  /** 授权的剧目ID */
  drama_id: unknown[];
  /** 被授权方小程序id。 */
  authorized: string;
  /** 不传或者传0，表示永久有效；否则表示授权到期的时间戳 */
  authz_expire_time?: number;
}
/** 增加剧目授权 —— 返回体。 */
export interface VodAuthorizedramaResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 剧目的授权结果。 */
  result?: unknown[];
}

/** 解除剧目授权 —— 请求体。 */
export interface VodDeauthorizedramaBody {
  /** 解除授权剧目ID。 */
  drama_id: unknown[];
  /** 被授权方小程序id。 */
  authorized_appid: string;
}
/** 解除剧目授权 —— 返回体。 */
export interface VodDeauthorizedramaResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 剧目的解除授权结果。 */
  result?: unknown[];
}

/** 查询授权信息 —— 请求体。 */
export interface VodGetauthorizeobjectsBody {
  /** 查询的剧目ID。不填表示查询所有剧目。 */
  drama_id?: number;
  /** 查询的被授权方小程序id。不填表示查询所有被授权方。 */
  authorized_appid?: string;
  /** 偏移值，分页请求用。默认0。 */
  offset?: number;
  /** 分页大小，默认100，最大值为1000。 */
  limit?: number;
}
/** 查询授权信息 —— 返回体。 */
export interface VodGetauthorizeobjectsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 当前查询条件下的记录总数 */
  total_count?: number;
  /** 授权信息 */
  objects?: unknown[];
}

/** 查询CDN日志下载链接列表 —— 请求体。 */
export interface VodGetcdnlogsBody {
  /** 起始时间戳。 */
  start_time: number;
  /** 结束时间戳，必须大于起始时间，起始到结束时间的跨度不要超过48小时（end_time-start_time<=48h） */
  end_time: number;
  /** 查询类型，0：通用播放流量和短剧播放器定向流量；1：短剧播放器定向流量；2：通用播放流量。默认值为0。 */
  query_type?: number;
}
/** 查询CDN日志下载链接列表 —— 返回体。 */
export interface VodGetcdnlogsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 日志下载链接总数量。 */
  total_count?: number;
  /** 国内CDN节点的日志下载列表。 */
  domestic_cdn_logs?: Record<string, unknown>;
}

/** 查询CDN用量数据 —— 请求体。 */
export interface VodGetcdnusagedataBody {
  /** 起始时间戳。 */
  start_time: number;
  /** 截止时间戳。 */
  end_time: number;
  /** 用量数据的时间粒度，单位：分钟，取值有：5：5 分钟粒度，返回指定查询时间内5分钟粒度的明细数据。60：小时粒度，返回指定查询时间内1小时粒度的数据。1440：天粒度，返回指定查询时间内1天粒度的数据 */
  data_interval: string;
  /** 查询类型，0：通用播放流量和短剧播放器定向流量；1：短剧播放器定向流量；2：通用播放流量。默认值为0。 */
  query_type?: number;
}
/** 查询CDN用量数据 —— 返回体。 */
export interface VodGetcdnusagedataResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 时间粒度，单位：分钟。 */
  data_interval?: number;
  /** CDN 统计数据。 */
  item_list?: unknown[];
}

/** 查询流量包详情 —— 请求体。 */
export interface VodListpackagesBody {
  /** 按流量包状态过滤，取值有：0-不过滤，1-有效的，2-无效的，3-过期的 */
  status: number;
  /** 偏移值，分页请求用 */
  offset: number;
  /** 分页大小，最大值为100 */
  limit: number;
  /** 查询类型，0：通用流量；1：定向流量。默认值为0 */
  query_type?: number;
}
/** 查询流量包详情 —— 返回体。 */
export interface VodListpackagesResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 当前查询条件下的流量包总数 */
  total_count?: number;
  /** 流量包详情列表 */
  package_list?: unknown[];
}

/** 申请分片上传 —— 请求体。 */
export interface VodApplyuploadBody {
  /** 文件名，需按照“剧目名 - 对应剧集数”格式命名文件 */
  media_name: string;
  /** 视频格式，支持：MP4，TS，MOV，MXF，MPG，FLV，WMV，AVI，M4V，F4V，MPEG，3GP，ASF，MKV */
  media_type: string;
  /** 封面图图片格式，支持：JPG、JPEG、PNG、BMP、TIFF、AI、CDR、EPS、TIF */
  cover_type?: string;
  /** 来源上下文，会在上传完成事件中透传给开发者。 */
  source_context?: string;
}
/** 申请分片上传 —— 返回体。 */
export interface VodApplyuploadResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 本次分片上传的唯一标识 */
  upload_id?: string;
}

/** 确认上传 —— 请求体。 */
export interface VodCommituploadBody {
  /** 一次分片上传的唯一标识，由申请分片上传接口返回。 */
  upload_id: string;
  /** 本次分片上传中媒体文件每个分片的信息。 */
  media_part_infos: Record<string, unknown>;
  /** 本次分片上传中封面图片文件每个分片的信息。 */
  cover_part_infos?: Record<string, unknown>;
}
/** 确认上传 —— 返回体。 */
export interface VodCommituploadResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 媒体文件id */
  media_id?: number;
}

/** 查询任务 —— 请求体。 */
export interface VodGettaskBody {
  /** 任务id */
  task_id: number;
}
/** 查询任务 —— 返回体。 */
export interface VodGettaskResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 任务信息 */
  task_info?: Record<string, unknown>;
}

/** 拉取上传 —— 请求体。 */
export interface VodPulluploadBody {
  /** 文件名，需按照“剧目名 - 对应剧集数”格式命名文件 */
  media_name: string;
  /** 视频 URL */
  media_url: string;
  /** 封面图URL */
  cover_url?: string;
  /** 来源上下文，会在上传完成事件中透传给开发者。 */
  source_context?: string;
}
/** 拉取上传 —— 返回体。 */
export interface VodPulluploadResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 拉取上传任务id。 */
  task_id?: number;
}

/** 单个文件上传 —— 请求体。 */
export interface VodSinglefileuploadBody {
  /** 文件名，需按照“剧目名 - 对应剧集数”格式命名文件 */
  media_name: string;
  /** 视频格式，支持：MP4，TS，MOV，MXF，MPG，FLV，WMV，AVI，M4V，F4V，MPEG，3GP，ASF，MKV */
  media_type: string;
  /** 视频文件内容，二进制。 */
  media_data: unknown;
  /** 视频封面图格式，支持：JPG、JPEG、PNG、BMP、TIFF、AI、CDR、EPS、TIF */
  cover_type?: string;
  /** 视频封面图文件内容，二进制。 */
  cover_data?: unknown;
  /** 来源上下文，会在上传完成事件中透传给开发者。 */
  source_context?: string;
}
/** 单个文件上传 —— 返回体。 */
export interface VodSinglefileuploadResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 媒体文件id。 */
  media_id?: number;
}

/** 上传分片 —— 请求体。 */
export interface VodUploadpartBody {
  /** 一次分片上传的唯一标识，由申请分片上传接口返回。 */
  upload_id: string;
  /** 本次上传的分片的编号，范围在 1 - 100。 */
  part_number: number;
  /** 指定该分片属于视频还是图片的枚举值：1. 视频，2. 图片。 */
  resource_type: number;
  /** 文件内容分片，二进制。 */
  data: unknown;
}
/** 上传分片 —— 返回体。 */
export interface VodUploadpartResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 根据分片内容生成的标识。 */
  etag?: string;
}

/** 删除媒资 —— 请求体。 */
export interface VodDeletemediaBody {
  /** 媒资文件id */
  media_id: number;
}
/** 删除媒资 —— 返回体。 */
export interface VodDeletemediaResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取媒资详细信息 —— 请求体。 */
export interface VodGetmediaBody {
  /** 媒资文件id */
  media_id: number;
}
/** 获取媒资详细信息 —— 返回体。 */
export interface VodGetmediaResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 媒体文件id。 */
  media_info?: Record<string, unknown>;
}

/** 获取媒资播放链接 —— 请求体。 */
export interface VodGetmedialinkBody {
  /** 媒资文件id */
  media_id: number;
  /** 播放地址的过期时间戳。有效的时间最长不能超过2小时后 */
  t: number;
  /** 链接标识。平台默认会生成一个仅包含小写字母和数字的字符串用于增强链接的唯一性(如us=647488c4792c15185b8fd2a6)。如开发者需要增加自己的标识，比如区分播放的渠道，可使用该参数， */
  us?: string;
  /** 试看时长，单位：秒，最大值不能超过视频长度 */
  exper?: number;
  /** 最多允许多少个不同 IP 的终端播放，以十进制表示，最大值为9，不填表示不做限制。当限制 URL 只能被1个人播放时，建议 rlimit 不要严格限制成1（例如可设置为3），因为移动端断网后重连 IP */
  rlimit?: number;
  /** 允许访问的域名列表，支持1条 - 10条，用半角逗号分隔。域名前不要带协议名（http://和https://），域名为前缀匹配（如填写 abc.com，则 abc.com/123 和 abc.com */
  whref?: string;
  /** 禁止访问的域名列表，支持1条 - 10条，用半角逗号分隔。域名前不要带协议名（http://和https://），域名为前缀匹配（如填写 abc.com，则 abc.com/123 和 abc.com */
  bkref?: string;
}
/** 获取媒资播放链接 —— 返回体。 */
export interface VodGetmedialinkResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 媒体播放信息 */
  media_info?: Record<string, unknown>;
}

/** 获取媒资列表 —— 请求体。 */
export interface VodListmediaBody {
  /** 根据剧目id获取剧集信息 */
  drama_id?: number;
  /** 媒资文件名，支持精确匹配、模糊匹配。文件太多时使用该参数进行模糊匹配可能无法得到结果，推荐使用 media_name_fuzzy 参数 */
  media_name?: string;
  /** 媒资文件名，模糊匹配 */
  media_name_fuzzy?: string;
  /** 媒资上传时间>=start_time */
  start_time?: number;
  /** 媒资上传时间 */
  end_time?: number;
  /** 分页拉取的最大返回结果数。最大值：100 */
  limit?: number;
  /** 分页拉取的起始偏移量 */
  offset?: number;
}
/** 获取媒资列表 —— 返回体。 */
export interface VodListmediaResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 媒资信息列表 */
  media_info_list?: unknown[];
}

/** 获取接口调用凭据 —— 请求体（文档未列字段，放行任意键）。 */
export type TokenBody = Record<string, unknown>;
/** 获取接口调用凭据 —— 查询参数。 */
export interface TokenQuery {
  /** 填写 client_credential */
  grant_type: string;
}
/** 获取接口调用凭据 —— 返回体。 */
export interface TokenResp {
  /** 获取到的凭证 */
  access_token?: string;
  /** 凭证有效时间，单位：秒。目前是7200秒之内的值。 */
  expires_in?: number;
}

/** 获取稳定版接口调用凭据 —— 请求体。 */
export interface StableTokenBody {
  /** 填写 client_credential */
  grant_type: string;
  /** 账号的唯一凭证，即 AppID，点此查看如何获取Appid */
  appid: string;
  /** 唯一凭证密钥，即 AppSecret，点此查看如何获取AppSecret */
  secret: string;
  /** 默认使用 false。1. force_refresh = false 时为普通调用模式，access_token 有效期内重复调用该接口不会更新 access_token；2. 当force_ref */
  force_refresh?: boolean;
}
/** 获取稳定版接口调用凭据 —— 返回体。 */
export interface StableTokenResp {
  /** 获取到的凭证 */
  access_token?: string;
  /** 凭证有效时间，单位：秒。目前是7200秒之内的值。 */
  expires_in?: number;
}

/** 选用模板 —— 请求体。 */
export interface NewtmplAddtemplateBody {
  /** 模板标题 id，可通过接口获取，也可登录小程序后台查看获取 */
  tid: string;
  /** 开发者自行组合好的模板关键词列表，关键词顺序可以自由搭配（例如 [3,5,4] 或 [4,5,3]），最多支持5个，最少2个关键词组合 */
  kidList: unknown[];
  /** 服务场景描述，15个字以内 */
  sceneDesc: string;
}
/** 选用模板 —— 返回体。 */
export interface NewtmplAddtemplateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 添加至帐号下的模板id，发送小程序订阅消息时所需 */
  priTmplId?: string;
}

/** 删除模板 —— 请求体。 */
export interface NewtmplDeltemplateBody {
  /** 要删除的模板id */
  priTmplId: string;
}
/** 删除模板 —— 返回体。 */
export interface NewtmplDeltemplateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取类目 —— 请求体（文档未列字段，放行任意键）。 */
export type NewtmplGetcategoryBody = Record<string, unknown>;
/** 获取类目 —— 返回体。 */
export interface NewtmplGetcategoryResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 类目列表 */
  data?: unknown[];
}

/** 获取模板中的关键词 —— 请求体（文档未列字段，放行任意键）。 */
export type NewtmplGetpubtemplatekeywordsBody = Record<string, unknown>;
/** 获取模板中的关键词 —— 查询参数。 */
export interface NewtmplGetpubtemplatekeywordsQuery {
  /** 模板标题 id，可通过接口获取 */
  tid: string;
}
/** 获取模板中的关键词 —— 返回体。 */
export interface NewtmplGetpubtemplatekeywordsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 模版标题列表总数 */
  count?: number;
  /** 关键词列表 */
  data?: unknown[];
}

/** 获取类目下的公共模板 —— 请求体（文档未列字段，放行任意键）。 */
export type NewtmplGetpubtemplatetitlesBody = Record<string, unknown>;
/** 获取类目下的公共模板 —— 查询参数。 */
export interface NewtmplGetpubtemplatetitlesQuery {
  /** 类目 id，多个用逗号隔开 */
  ids: string;
  /** 用于分页，表示从 start 开始。从 0 开始计数 */
  start: number;
  /** 用于分页，表示拉取 limit 条记录。最大为 30 */
  limit: number;
}
/** 获取类目下的公共模板 —— 返回体。 */
export interface NewtmplGetpubtemplatetitlesResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 模版标题列表总数 */
  count?: number;
  /** 模板标题列表 */
  data?: unknown[];
}

/** 查询服务卡片状态 —— 请求体。 */
export interface GetUserNotifyBody {
  /** 用户身份标识符 */
  openid: string;
  /** 动态更新令牌 */
  notify_code: string;
  /** 卡片id */
  notify_type: number;
}
/** 查询服务卡片状态 —— 返回体。 */
export interface GetUserNotifyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 卡片状态 */
  notify_info?: Record<string, unknown>;
}

/** 获取已有模板列表 —— 请求体（文档未列字段，放行任意键）。 */
export type NewtmplGettemplateBody = Record<string, unknown>;
/** 获取已有模板列表 —— 返回体。 */
export interface NewtmplGettemplateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 模板列表 */
  data?: unknown[];
}

/** 发送订阅消息 —— 请求体。 */
export interface MessageSubscribeSendBody {
  /** 所需下发的订阅模板id */
  template_id: string;
  /** 点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转 */
  page?: string;
  /** 接收者（用户）的 openid */
  touser: string;
  /** 模板内容，格式形如{ "phrase3": { "value": "审核通过" }, "name1": { "value": "订阅" }, "date2": { "value": "2019-12- */
  data: Record<string, unknown>;
  /** 跳转小程序类型：developer为开发版；trial为体验版；formal为正式版；默认为正式版 */
  miniprogram_state: string;
  /** 进入小程序查看”的语言类型，支持zh_CN(简体中文)、en_US(英文)、zh_HK(繁体中文)、zh_TW(繁体中文)，默认为zh_CN */
  lang: string;
}
/** 发送订阅消息 —— 返回体。 */
export interface MessageSubscribeSendResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 激活与更新服务卡片 —— 请求体。 */
export interface SetUserNotifyBody {
  /** 用户身份标识符。当使用微信支付订单号作为 code 时，需要与实际支付用户一致；当通过前端获取 code 时，需要与点击 button 的用户一致。 */
  openid: string;
  /** 卡片id。可在文中（1.1）中查阅。 */
  notify_type: number;
  /** 动态更新令牌。获取方式可在文中（1.3或1.4）中查阅。需要注意的是，微信支付订单号从生成到可被校验存在一定的时延可能，若收到报错为 notify_code 不存在，建议在1分钟后重试。 */
  notify_code: string;
  /** 卡片状态与状态相关字段，不同卡片的定义不同，可在文中（1.1中各模版定义链接）中查阅。 */
  content_json: string;
  /** 微信支付订单号验证字段。当将微信支付订单号作为 notify_code 时，在激活时需要传入。见下文其他说明check_json定义 */
  check_json?: string;
}
/** 激活与更新服务卡片 —— 返回体。 */
export interface SetUserNotifyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 更新服务卡片扩展信息 —— 请求体。 */
export interface SetUserNotifyextBody {
  /** 用户身份标识符。当使用微信支付订单号作为 code 时，需要与实际支付用户一致；当通过前端获取 code 时，需要与点击 button 的用户一致。 */
  openid: string;
  /** 卡片id。可在文中（1.1）中查阅。 */
  notify_type: number;
  /** 动态更新令牌。获取方式可在文中（1.3或1.4）中查阅。需要注意的是，微信支付订单号从生成到可被校验存在一定的时延可能，若收到报错为 notify_code 不存在，建议在1分钟后重试。 */
  notify_code: string;
  /** 扩展信息，不同卡片的定义不同，可在文中（1.1中各模版定义链接）中查阅。 */
  ext_json: string;
}
/** 更新服务卡片扩展信息 —— 返回体。 */
export interface SetUserNotifyextResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 创建activity_id —— 请求体（文档未列字段，放行任意键）。 */
export type MessageWxopenActivityidCreateBody = Record<string, unknown>;
/** 创建activity_id —— 查询参数。 */
export interface MessageWxopenActivityidCreateQuery {
  /** 为私密消息创建activity_id时，指定分享者为unionid用户。其余用户不能用此activity_id分享私密消息。 openid与unionid填一个即可。私密消息暂不支持云函数生成acti */
  unionid?: string;
  /** 为私密消息创建activity_id时，指定分享者为openid用户。其余用户不能用此activity_id分享私密消息。openid与unionid填一个即可。 私密消息暂不支持云函数生成activ */
  openid?: string;
}
/** 创建activity_id —— 返回体。 */
export interface MessageWxopenActivityidCreateResp {
  /** 动态消息的 ID */
  activity_id?: string;
  /** activity_id 的过期时间戳。默认24小时后过期。 */
  expiration_time?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 修改小程序聊天工具的动态卡片消息 —— 请求体。 */
export interface MessageWxopenChattoolmsgSendBody {
  /** 动态消息的 ID，通过 createActivityId 接口获取 */
  activity_id: string;
  /** 动态消息修改后的状态 */
  target_state: number;
  /** 模板id */
  template_id: string;
  /** 更新后的聊天室成员状态 */
  participator_info_list?: unknown[];
  /** 0 正式版 1 开发版 2 体验版 */
  version_type: number;
}
/** 修改小程序聊天工具的动态卡片消息 —— 返回体。 */
export interface MessageWxopenChattoolmsgSendResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 修改动态消息 —— 请求体。 */
export interface MessageWxopenUpdatablemsgSendBody {
  /** 动态消息的 ID，通过 createActivityId 接口获取 */
  activity_id: string;
  /** 动态消息修改后的状态 */
  target_state: number;
  /** 动态消息对应的模板信息 */
  template_info: Record<string, unknown>;
}
/** 修改动态消息 —— 返回体。 */
export interface MessageWxopenUpdatablemsgSendResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 添加地点 —— 请求体。 */
export interface AddnearbypoiBody {
  /** 客服信息 选填，可自定义服务头像与昵称，具体填写字段见下方示例kf_info pic_list是字符串，内容是一个json */
  kf_info: string;
  /** 门店图片，最多9张，最少1张，上传门店图片如门店外景、环境设施、商品服务等，图片将展示在微信客户端的门店页。图片链接通过文档https://mp.weixin.qq.com/wiki?t=resour */
  pic_list: string;
  /** 必服务标签列表 必填，需要填写 1、 服务标签ID 2、 服务类型tpye 3、 服务名称name 详细字段格式见下方《服务标签id编号、类型与服务名称表》 4、 APPID 5、 对应服务落地页的p */
  service_infos: string;
  /** 门店名字 必填，门店名称需按照所选地理位置自动拉取腾讯地图门店名称，不可修改，如需修改请重现选择地图地点或重新创建地点。 */
  store_name: string;
  /** 门店电话 */
  contract_phone: string;
  /** 营业时间，格式11:11-12:12 */
  hour: string;
  /** 主体名字 */
  company_name: string;
  /** 资质号, 15位营业执照注册号或9位组织机构代码 */
  credential: string;
  /** 地址 */
  address: string;
  /** 证明材料 必填 如果company_name和该小程序主体不一致，需要填qualification_list，详细规则见附近的小程序使用指南-如何证明门店的经营主体跟公众号或小程序帐号主体相关http */
  qualification_list: string;
  /** 必填,写死为"1" */
  is_comm_nearby: string;
  /** 如果创建新的门店，poi_id字段为空 如果更新门店，poi_id参数则填对应门店的poi_id 选填 */
  poi_id: string;
  /** 对应《在腾讯地图中搜索门店》中的sosomap_poi_uid字段 腾讯地图那边有些数据不一致，如果不填map_poi_id的话，小概率会提交失败！ 注： poi_id与map_poi_id关系： m */
  map_poi_id: string;
}
/** 添加地点 —— 返回体。 */
export interface AddnearbypoiResp {
  /** - */
  errcode?: number;
  /** - */
  errmsg?: string;
  /** 附近小程序的数据 */
  data?: Record<string, unknown>;
}

/** 删除地点 —— 请求体。 */
export interface DelnearbypoiBody {
  /** 附近地点 ID */
  poi_id: string;
}
/** 删除地点 —— 返回体。 */
export interface DelnearbypoiResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查看地点 —— 请求体。 */
export interface GetnearbypoilistBody {
  /** 起始页id（从1开始计数） */
  page: number;
  /** 每页展示个数（最多1000个） */
  page_rows: number;
}
/** 查看地点 —— 返回体。 */
export interface GetnearbypoilistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 附近小程序的数据 */
  data?: Record<string, unknown>;
}

/** 设置展示状态 —— 请求体。 */
export interface SetnearbypoishowstatusBody {
  /** 附近地点 ID */
  poi_id: string;
  /** 是否展示,0表示不展示，1表示展示 */
  status: number;
}
/** 设置展示状态 —— 返回体。 */
export interface SetnearbypoishowstatusResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 新增账号-小说授权 —— 请求体。 */
export interface BookAddbookauthBody {
  /** books */
  books: unknown[];
}
/** 新增账号-小说授权 —— 返回体。 */
export interface BookAddbookauthResp {
  /** 错误码。 因为新增授权可以一次增加多条授权关系，所以返回数据里 errcode 会有内外两个字段，外层 errcode 表示本次调用整体成功/失败，内层 errcode 表示每条授权关系是成功/失败。 */
  errcode?: number;
  /** results */
  results?: unknown[];
}

/** 新增账号-账号授权 —— 请求体。 */
export interface BookAddbookauthbyappidBody {
  /** 被授权账号列表。上限一次 20 条 */
  infos: unknown[];
}
/** 新增账号-账号授权 —— 返回体。 */
export interface BookAddbookauthbyappidResp {
  /** 错误码。因为新增授权可以一次增加多条授权关系，所以返回数据里 `errcode` 会有内外两个字段，外层 `errcode` 表示本次调用整体成功/失败，内层 `errcode` 表示每条授权关系是成 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 授权结果列表 */
  results?: unknown[];
}

/** 删除指定的授权关系 —— 请求体。 */
export interface BookDelbookauthBody {
  /** 作品id */
  book_id: string;
  /** 被授权账号appid */
  grantee_appid: string;
}
/** 删除指定的授权关系 —— 返回体。 */
export interface BookDelbookauthResp {
  /** 错误码。 */
  errcode?: number;
}

/** 删除指定的账号授权关系 —— 请求体。 */
export interface BookDelbookauthbyappidBody {
  /** 被授权账号appid */
  grantee_appid: string;
}
/** 删除指定的账号授权关系 —— 返回体。 */
export interface BookDelbookauthbyappidResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查看主授权关系列表-查看被授权关系列表 —— 请求体。 */
export interface BookQuerybookauthBody {
  /** 填 0 或者不设置: 查授权列表, 填 1: 查被授权列表（查看被授权关系列表时必填） */
  type?: number;
  /** 结果数据偏移位置 从 0 开始，用于翻页 */
  offset: number;
  /** 获取记录的数量, 上限一次 30 条，用于翻页 */
  count: number;
  /** 填 true，返回总数，填 false 不返回（查看被授权关系列表时无需填写） */
  is_sum?: boolean;
  /** 过滤出等于该 book_id 的授权结果（查看被授权关系列表时无需填写） */
  book_id?: string;
}
/** 查看主授权关系列表-查看被授权关系列表 —— 返回体。 */
export interface BookQuerybookauthResp {
  /** 错误码。 */
  errcode?: number;
  /** results */
  results?: unknown[];
}

/** 查看账号主授权关系列表 —— 请求体。 */
export interface BookQuerybookauthv2Body {
  /** 填 0 或者不设置: 查授权列表, 填 1: 查被授权列表 */
  type?: number;
  /** 获取记录的数量, 上限一次 100 条，用于分页 */
  count: number;
  /** 分页游标。不填或填空字符串，标识从第一页开始查询。后一页查询填充上一页响应的next_cursor字段值 */
  cursor?: string;
  /** 用于查询指定授权方授权给当前账户的小说列表，当查询指定授权方所授权的小说列表时需要传 */
  grantor_appid?: string;
  /** 用于查询指定小说的授权信息，上限一次 30 条。查询指定小说的授权信息场景下需要传递此参数。优先级高于 grantor_appid，当 book_ids 不为空时，grantor_appid 参数无效 */
  book_ids?: unknown[];
}
/** 查看账号主授权关系列表 —— 返回体。 */
export interface BookQuerybookauthv2Resp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 被授权方列表, 结果按授权过期时间从早到晚排序 */
  appid_results?: unknown[];
  /** 下一页游标 */
  next_cursor?: string;
}

/** 作品提审 —— 请求体。 */
export interface BookAuditbookBody {
  /** 作品id */
  book_id: string;
}
/** 作品提审 —— 返回体。 */
export interface BookAuditbookResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 批量上传章节 —— 请求体。 */
export interface BookBatchcreatechapterBody {
  /** 作品id */
  book_id: string;
  /** 章节信息，单次最多上传 10 章。 */
  chapter_list: unknown[];
}
/** 批量上传章节 —— 返回体。 */
export interface BookBatchcreatechapterResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 章节id。非定长，不超过 64 字节。 */
  chapter_id?: unknown[];
  /** 冲突的章节主键列表 */
  conflict_original_id_list?: unknown[];
}

/** 创建作品 —— 请求体。 */
export interface BookCreatebookBody {
  /** 作品名，示例值："斗破苍穹"。长度限制1-30字。 */
  title: string;
  /** 作品简介。长度限制1-500字。 */
  intro: string;
  /** 封面图 media_id，通过新增临时素材接口上传得到 */
  cover_media_id: string;
  /** 作者名。长度限制1-100字。 */
  author: string;
  /** 一级类型id。可选类型见小说作品类型 */
  first_category_id: number;
  /** 二级类型id */
  second_category_id: number;
  /** 三级类型id */
  third_category_id: number;
  /** 完结状态，1：连载中，2：已完结 */
  complete_status: number;
  /** 提供方作品主键，可用于去重。长度限制0-255字节。 */
  original_id?: string;
  /** 章节排序方式，0：追加，1：seq 递增。默认值：0。 */
  chapter_order_method?: number;
  /** 自定义信息。长度限制0-128字节。 */
  custom_info?: string;
  /** 题材关键词。最多传入3个关键词，每个关键词长度限制1-4字。 */
  keyword_list?: unknown[];
  /** 精彩片段。需为本书内容，长度限制400-1000字。 */
  awesome_paragraph?: string;
}
/** 创建作品 —— 返回体。 */
export interface BookCreatebookResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 作品id。非定长，不超过 64 字节。 */
  book_id?: string;
}

/** 上传章节 —— 请求体。 */
export interface BookCreatechapterBody {
  /** 作品id */
  book_id: string;
  /** 章节信息 */
  chapter: Record<string, unknown>;
}
/** 上传章节 —— 返回体。 */
export interface BookCreatechapterResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 章节id。非定长，不超过 64 字节。 */
  chapter_id?: string;
}

/** 删除作品 —— 请求体。 */
export interface BookDeletebookBody {
  /** 作品id */
  book_id: string;
}
/** 删除作品 —— 返回体。 */
export interface BookDeletebookResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 删除章节 —— 请求体。 */
export interface BookDeletechapterBody {
  /** 作品id */
  book_id: string;
  /** 章节id */
  chapter_id: string;
}
/** 删除章节 —— 返回体。 */
export interface BookDeletechapterResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取作品信息 —— 请求体。 */
export interface BookGetbookBody {
  /** 作品id，与提供方作品主键二选一，优先使用该字段 */
  book_id?: string;
  /** true：编辑版信息，false：发布版信息。默认值：false */
  need_edited_data?: boolean;
  /** 提供方作品主键，与作品id二选一 */
  original_id?: string;
}
/** 获取作品信息 —— 返回体。 */
export interface BookGetbookResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 作品信息 */
  book?: unknown[];
}

/** 获取章节信息 —— 请求体。 */
export interface BookGetchapterBody {
  /** 作品id */
  book_id?: string;
  /** 章节id */
  chapter_id?: string;
  /** true：编辑版信息，false：发布版信息。默认值：false */
  need_edited_data?: boolean;
}
/** 获取章节信息 —— 返回体。 */
export interface BookGetchapterResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 章节信息 */
  chapter?: Record<string, unknown>;
}

/** 获取作品列表 —— 请求体。 */
export interface BookListbookBody {
  /** 分页拉取的最大返回结果数。取值范围 1-100，默认值：100 */
  limit?: number;
  /** 分页拉取的起始偏移量，默认值：0。offset 和 last_id 二选一，优先使用 last_id。 */
  offset?: number;
  /** 分页 id。首次调用填 0，后续调用填上次返回参数里的 last_id。offset 和 last_id 二选一，优先使用 last_id。 */
  last_id?: number;
  /** true：编辑版信息，false：发布版信息。默认值：false */
  need_edited_data?: boolean;
}
/** 获取作品列表 —— 返回体。 */
export interface BookListbookResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 作品信息列表 */
  book_list?: unknown[];
  /** 作品总数 */
  total_cnt?: number;
  /** 分页 id。仅当请求参数有设置 last_id 且作品信息列表不为空时才有该字段 */
  last_id?: number;
}

/** 获取章节列表 —— 请求体。 */
export interface BookListchapterBody {
  /** 作品id */
  book_id: string;
  /** true：编辑版信息，false：发布版信息。默认值：false */
  need_edited_data?: boolean;
  /** 分页拉取的最大返回结果数。默认值：10；最大值：100 */
  limit?: number;
  /** 分页拉取的起始偏移量，默认值：0 */
  offset?: number;
  /** 分卷下标，若设置则只返回指定卷的章节列表 */
  volume_index?: number;
}
/** 获取章节列表 —— 返回体。 */
export interface BookListchapterResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 章节信息列表 */
  chapter_list?: unknown[];
  /** 章节总数 */
  total_cnt?: number;
}

/** 调整章节顺序 —— 请求体。 */
export interface BookReorderchapterBody {
  /** 作品id */
  book_id: string;
  /** 章节id */
  chapter_id: string;
  /** 目标章节id */
  target_chapter_id: string;
  /** 排序操作，1：交换，2：插入到目标章节之前，3：插入到目标章节之后 */
  operation: number;
}
/** 调整章节顺序 —— 返回体。 */
export interface BookReorderchapterResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 替换章节 —— 请求体。 */
export interface BookReplacechapterBody {
  /** 作品id */
  book_id: string;
  /** 章节id */
  chapter_id: string;
  /** 新章节标题。长度限制 1-80 字。 */
  new_chapter_title: string;
  /** 新章节内容。长度限制 1-20000 字。 */
  new_content: string;
}
/** 替换章节 —— 返回体。 */
export interface BookReplacechapterResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 替换后新章节id */
  new_chapter_id?: string;
}

/** 编辑作品 —— 请求体。 */
export interface BookUpdatebookBody {
  /** 作品id */
  book_id: string;
  /** 作品名。长度限制1-30字。 */
  title?: string;
  /** 作品简介。长度限制1-500字。 */
  intro?: string;
  /** 封面图 media_id，通过 新增临时素材上传得到。 */
  cover_media_id?: string;
  /** 作者名。长度限制1-100字。 */
  author?: string;
  /** 一级类型id。可选类型见 小说作品类型 */
  first_category_id?: number;
  /** 二级类型id */
  second_category_id?: number;
  /** 三级类型id */
  third_category_id?: number;
  /** 完结状态，1：连载中，2：已完结 */
  complete_status?: number;
  /** 按照预期顺序传入章节id */
  chapter_id_list?: unknown[];
  /** 是否需要分卷 */
  need_volume?: boolean;
  /** 分卷信息 */
  volume_list?: unknown[];
  /** 章节排序方式，0：追加，1：seq 递增 */
  chapter_order_method?: number;
  /** 自定义信息。长度限制0-128字节。 */
  custom_info?: string;
  /** 是否更新题材关键词 */
  update_keyword?: boolean;
  /** 题材关键词。最多传入3个关键词，每个关键词长度限制1-4字。 */
  keyword_list?: unknown[];
  /** 精彩片段。需为本书内容，长度限制400-1000字。 */
  awesome_paragraph?: string;
}
/** 编辑作品 —— 返回体。 */
export interface BookUpdatebookResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 调整章节相对顺序 —— 请求体。 */
export interface BookUpdatechapterseqBody {
  /** 作品id */
  book_id: string;
  /** 章节 seq 列表 */
  chapter_seq_list: unknown[];
}
/** 调整章节相对顺序 —— 返回体。 */
export interface BookUpdatechapterseqResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 读后推荐 —— 请求体。 */
export interface BusinessNovelreaderSetrecmdnovelBody {
  /** 推荐小说的类型：1-android(付费小说) 2-ios(全文免费小说) */
  recmd_type: number;
  /** 推荐小说的 book_id 数组 */
  book_id_list: unknown[];
}
/** 读后推荐 —— 返回体。 */
export interface BusinessNovelreaderSetrecmdnovelResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 预览设置获取 —— 请求体。 */
export interface BusinessNovelreaderGetpreviewsettingBody {
  /** 作品id */
  book_id: string;
}
/** 预览设置获取 —— 返回体。 */
export interface BusinessNovelreaderGetpreviewsettingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** setting */
  setting?: Record<string, unknown>;
}

/** 预览设置修改 —— 请求体。 */
export interface BusinessNovelreaderSetpreviewsettingBody {
  /** 作品id */
  book_id: string;
  /** 默认预览字数 */
  default_words: number;
  /** 章节索引，从 0 开始，未设置的章节将使用 default_words 作为预览字数 */
  chapter_index?: number;
  /** 章节字数 */
  words?: number;
}
/** 预览设置修改 —— 返回体。 */
export interface BusinessNovelreaderSetpreviewsettingResp {
  /** 错误码 */
  errcode?: number;
}

/** 网络通信检测 —— 请求体。 */
export interface CallbackCheckBody {
  /** 检测动作：dns(域名解析)/ping(ping检测)/all(全部) */
  action: string;
  /** 检测运营商：CHINANET(电信)/UNICOM(联通)/CAP(腾讯)/DEFAULT(自动) */
  check_operator: string;
}
/** 网络通信检测 —— 返回体。 */
export interface CallbackCheckResp {
  /** DNS解析结果列表 */
  dns?: unknown[];
  /** PING检测结果列表 */
  ping?: unknown[];
}

/** 重置指定API调用次数 —— 请求体。 */
export interface OpenapiQuotaClearBody {
  /** api的请求地址，cgi_path 必须以"/channels/ec/"开头，不要前缀"https://api.weixin.qq.com"，也不要漏了"/" */
  cgi_path: string;
}
/** 重置指定API调用次数 —— 返回体。 */
export interface OpenapiQuotaClearResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 重置API调用次数 —— 请求体。 */
export interface ClearQuotaBody {
  /** 要被清空的账号的appid */
  appid: string;
}
/** 重置API调用次数 —— 返回体。 */
export interface ClearQuotaResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 使用AppSecret重置API调用次数 —— 请求体。 */
export interface ClearQuotaV2Body {
  /** 要被清空的账号的appid */
  appid: string;
  /** 唯一凭证密钥，即 AppSecret */
  appsecret: string;
}
/** 使用AppSecret重置API调用次数 —— 返回体。 */
export interface ClearQuotaV2Resp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取微信API服务器IP —— 请求体（文档未列字段，放行任意键）。 */
export type GetApiDomainIpBody = Record<string, unknown>;
/** 获取微信API服务器IP —— 返回体。 */
export interface GetApiDomainIpResp {
  /** 微信服务器IP地址列表 */
  ip_list?: unknown[];
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询API调用额度 —— 请求体。 */
export interface OpenapiQuotaGetBody {
  /** api的请求地址，例如"/cgi-bin/message/custom/send";不要前缀“https://api.weixin.qq.com” ，也不要漏了"/",否则都会76003的报错 */
  cgi_path: string;
}
/** 查询API调用额度 —— 返回体。 */
export interface OpenapiQuotaGetResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** quota详情 */
  quota?: Record<string, unknown>;
  /** 普通调用频率限制 */
  rate_limit?: Record<string, unknown>;
  /** 代调用频率限制 */
  component_rate_limit?: Record<string, unknown>;
}

/** 获取微信推送服务器IP —— 请求体（文档未列字段，放行任意键）。 */
export type GetcallbackipBody = Record<string, unknown>;
/** 获取微信推送服务器IP —— 返回体。 */
export interface GetcallbackipResp {
  /** 微信服务器IP地址列表 */
  ip_list?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询rid信息 —— 请求体。 */
export interface OpenapiRidGetBody {
  /** 调用接口报错返回的rid */
  rid: string;
}
/** 查询rid信息 —— 返回体。 */
export interface OpenapiRidGetResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 该rid对应的请求详情 */
  request?: Record<string, unknown>;
}

/** 查询域名配置 —— 请求体。 */
export interface GetwxadevinfoBody {
  /** 查询配置域名的类型, 可选值如下： 1. getbizdomain 返回业务域名 2. getserverdomain 返回服务器域名 3. 不指明返回全部 */
  action?: string;
}
/** 查询域名配置 —— 返回体。 */
export interface GetwxadevinfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** request合法域名列表 */
  requestdomain?: unknown[];
  /** socket合法域名列表 */
  wsrequestdomain?: unknown[];
  /** uploadFile合法域名列表 */
  uploaddomain?: unknown[];
  /** downloadFile合法域名列表 */
  downloaddomain?: unknown[];
  /** udp合法域名列表 */
  udpdomain?: unknown[];
  /** 业务域名列表 */
  bizdomain?: unknown[];
}

/** 获取用户反馈列表 —— 请求体（文档未列字段，放行任意键）。 */
export type FeedbackListBody = Record<string, unknown>;
/** 获取用户反馈列表 —— 查询参数。 */
export interface FeedbackListQuery {
  /** 反馈类型，默认拉取全部类型，详细定义见下面 */
  type?: number;
  /** 分页的页数，从1开始 */
  page: number;
  /** 分页拉取的数据数量 */
  num: number;
}
/** 获取用户反馈列表 —— 返回体。 */
export interface FeedbackListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 反馈列表 */
  list?: unknown[];
  /** 总条数 */
  total_num?: number;
}

/** 获取mediaId图片 —— 请求体（文档未列字段，放行任意键）。 */
export type MediaGetfeedbackmediaBody = Record<string, unknown>;
/** 获取mediaId图片 —— 查询参数。 */
export interface MediaGetfeedbackmediaQuery {
  /** 用户反馈信息的 record_id, 可通过 getFeedback 获取 */
  record_id: number;
  /** 图片的 mediaId */
  media_id: string;
}
/** 获取mediaId图片 —— 返回体。 */
export interface MediaGetfeedbackmediaResp {
  /** 错误码。如果成功，则直接返回图片实体，不返回errcode */
  errcode?: number;
  /** 错误信息。如果成功，则直接返回图片实体，不返回errsmg */
  errmsg?: string;
}

/** 获取分阶段发布详情 —— 请求体（文档未列字段，放行任意键）。 */
export type GetgrayreleaseplanBody = Record<string, unknown>;
/** 获取分阶段发布详情 —— 返回体。 */
export interface GetgrayreleaseplanResp {
  /** 错误码 */
  errcode?: number;
  /** 错误时间 */
  errmsg?: string;
  /** 分阶段发布计划详情 */
  gray_release_plan?: Record<string, unknown>;
}

/** 查询js错误详情 —— 请求体。 */
export interface LogJserrDetailBody {
  /** 开始时间， 格式 "xxxx-xx-xx" */
  startTime: string;
  /** 结束时间，格式 “xxxx-xx-xx” */
  endTime: string;
  /** 错误信息的md5 */
  errorMsgMd5: string;
  /** errorStack的Md5信息 */
  errorStackMd5: string;
  /** 小程序版本 "0"代表全部， 例如：“2.0.18” */
  appVersion: string;
  /** 基础库版本 "0"表示所有版本，例如 "2.14.1" */
  sdkVersion: string;
  /** 系统类型 "0"【全部】，"1" 【安卓】，"2" 【IOS】，"3"【其他】 */
  osName: string;
  /** 客户端版本 "0"表示所有版本， 例如 "7.0.22" */
  clientVersion: string;
  /** 发生错误的用户 openId */
  openid: string;
  /** 分页起始值 */
  offset: number;
  /** 一次拉取最大值 */
  limit: number;
  /** 排序规则 "0" 升序, "1" 降序 */
  desc: string;
}
/** 查询js错误详情 —— 返回体。 */
export interface LogJserrDetailResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 错误列表 */
  data?: unknown[];
  /** 总条数 */
  totalCount?: number;
}

/** 查询错误列表 —— 请求体。 */
export interface LogJserrListBody {
  /** 小程序版本 "0"代表全部， 例如：“2.0.18” */
  appVersion: string;
  /** 错误类型 "0"【全部】，"1"【业务代码错误】，"2"【插件错误】，"3"【系统框架错误】 */
  errType: string;
  /** 开始时间， 格式 "xxxx-xx-xx" */
  startTime: string;
  /** 结束时间，格式 “xxxx-xx-xx” */
  endTime: string;
  /** 从错误中搜索关键词，关键词过滤 */
  keyword: string;
  /** 发生错误的用户 openId */
  openid: string;
  /** 排序字段 "uv", "pv" 二选一 */
  orderby: string;
  /** 排序规则 "1" orderby字段降序，"2" orderby字段升序 */
  desc: string;
  /** 分页起始值 */
  offset: number;
  /** 一次拉取最大值， 最大 30 */
  limit: number;
}
/** 查询错误列表 —— 返回体。 */
export interface LogJserrListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 错误列表 */
  data?: unknown[];
  /** 总条数 */
  totalCount?: number;
}

/** 获取性能数据 —— 请求体。 */
export interface LogGetPerformanceBody {
  /** 可选值 1（启动总耗时）， 2（下载耗时），3（初次渲染耗时） */
  cost_time_type: number;
  /** 查询开始时间 */
  default_start_time: number;
  /** 查询结束时间 */
  default_end_time: number;
  /** 系统平台，可选值 "@_all:"（全部），1（IOS）， 2（android） */
  device: string;
  /** 是否下载代码包，当 type 为 1 的时候才生效，可选值 "@_all:"（全部），1（是）， 2（否） */
  is_download_code: string;
  /** 访问来源，当 type 为 1 或者 2 的时候才生效，通过 getSceneList 接口获取 */
  scene: string;
  /** 网络环境, 当 type 为 2 的时候才生效，可选值 "@_all:"，wifi, 4g, 3g, 2g */
  networktype: string;
}
/** 获取性能数据 —— 返回体。 */
export interface LogGetPerformanceResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 错误查询数据(json字符串，结构如下所述的 strbody) */
  default_time_data?: string;
  /** 比较数据 */
  compare_time_data?: string;
}

/** 获取访问来源 —— 请求体（文档未列字段，放行任意键）。 */
export type LogGetSceneBody = Record<string, unknown>;
/** 获取访问来源 —— 返回体。 */
export interface LogGetSceneResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 访问来源 */
  scene?: unknown[];
}

/** 获取客户端版本 —— 请求体（文档未列字段，放行任意键）。 */
export type LogGetClientVersionBody = Record<string, unknown>;
/** 获取客户端版本 —— 返回体。 */
export interface LogGetClientVersionResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 版本列表 */
  cvlist?: unknown[];
}

/** 查询实时日志 —— 请求体。 */
export interface UserlogUserlogSearchBody {
  /** YYYYMMDD格式的日期，仅支持最近7天 */
  date: string;
  /** 开始时间，必须是 date 指定日期的时间 */
  begintime: number;
  /** 结束时间，必须是 date 指定日期的时间 */
  endtime: number;
  /** 开始返回的数据下标，用作分页，默认为0 */
  start?: number;
  /** 返回的数据条数，用作分页，默认为20 */
  limit?: number;
  /** 小程序启动的唯一ID，按 TraceId 查询会展示该次小程序启动过程的所有页面的日志。 */
  traceId?: string;
  /** 小程序页面路径，例如pages/index/index */
  url?: string;
  /** 用户微信号或者OpenId */
  id?: string;
  /** 开发者通过setFileterMsg/addFilterMsg指定的 filterMsg 字段 */
  filterMsg?: string;
  /** 日志等级，返回大于等于 level 等级的日志，level的定义为2（Info）、4（Warn）、8（Error），如果指定为4，则返回大于等于4的日志，即返回 Warn 和Error日志 */
  level?: number;
}
/** 查询实时日志 —— 返回体。 */
export interface UserlogUserlogSearchResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 返回的日志数据和日志条数总量 */
  data?: Record<string, unknown>;
}

/** 品牌申请 —— 请求体。 */
export interface FamousbrandApplyBody {
  /** 申请品牌信息 */
  Application: Record<string, unknown>;
}
/** 品牌申请 —— 返回体。 */
export interface FamousbrandApplyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误原因 */
  errmsg?: string;
}

/** 小程序品牌申请状态查询 —— 请求体（文档未列字段，放行任意键）。 */
export type FamousbrandGetStatusBody = Record<string, unknown>;
/** 小程序品牌申请状态查询 —— 返回体。 */
export interface FamousbrandGetStatusResp {
  /** 错误码 */
  errcode?: number;
  /** 错误原因 */
  errmsg?: string;
  /** 品牌申请进度 */
  progress?: Record<string, unknown>;
  /** 申请品牌信息 */
  application?: Record<string, unknown>;
}

/** 查询订单发货状态 —— 请求体。 */
export interface OrderGetOrderBody {
  /** 原支付交易对应的微信订单号。 */
  transaction_id?: string;
  /** 支付下单商户的商户号，由微信支付生成并下发。 */
  merchant_id?: string;
  /** 二级商户号。 */
  sub_merchant_id?: string;
  /** 商户系统内部订单号，只能是数字、大小写字母`_-*`且在同一个商户号下唯一。 */
  merchant_trade_no?: string;
}
/** 查询订单发货状态 —— 返回体。 */
export interface OrderGetOrderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 支付单信息。 */
  order?: Record<string, unknown>;
}

/** 查询订单列表 —— 请求体。 */
export interface OrderGetOrderListBody {
  /** 支付时间所属范围。 */
  pay_time_range?: Record<string, unknown>;
  /** 订单状态枚举：(1) 待发货；(2) 已发货；(3) 确认收货；(4) 交易完成；(5) 已退款；(6) 资金待结算。 */
  order_state?: number;
  /** 支付者openid。 */
  openid?: string;
  /** 翻页时使用，获取第一页时不用传入，如果查询结果中 has_more 字段为 true，则传入该次查询结果中返回的 last_index 字段可获取下一页。 */
  last_index?: string;
  /** 翻页时使用，返回列表的长度，默认为100。 返回参数 */
  page_size?: number;
}
/** 查询订单列表 —— 返回体。 */
export interface OrderGetOrderListResp {
  /** 错误码 */
  errcode?: number;
  /** 翻页时使用。 */
  last_index?: string;
  /** 是否还有更多支付单。 */
  has_more?: boolean;
  /** 支付单信息列表。 */
  order_list?: Record<string, unknown>;
}

/** 查询小程序是否已开通发货信息管理服务 —— 请求体。 */
export interface OrderIsTradeManagedBody {
  /** 待查询小程序的 appid，非服务商调用时仅能查询本账号 */
  appid: string;
}
/** 查询小程序是否已开通发货信息管理服务 —— 返回体。 */
export interface OrderIsTradeManagedResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 是否已开通小程序发货信息管理服务 */
  is_trade_managed?: boolean;
}

/** 查询小程序是否已完成交易结算管理确认 —— 请求体。 */
export interface OrderIsTradeManagementConfirmationCompletedBody {
  /** 待查询小程序的 appid，非服务商调用时仅能查询本账号 */
  appid: string;
}
/** 查询小程序是否已完成交易结算管理确认 —— 返回体。 */
export interface OrderIsTradeManagementConfirmationCompletedResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 是否已完成交易结算管理确认 */
  completed?: boolean;
}

/** 确认收货提醒 —— 请求体。 */
export interface OrderNotifyConfirmReceiveBody {
  /** 原支付交易对应的微信订单号。 */
  transaction_id?: string;
  /** 支付下单商户的商户号，由微信支付生成并下发。 */
  merchant_id?: string;
  /** 二级商户号。 */
  sub_merchant_id?: string;
  /** 商户系统内部订单号，只能是数字、大小写字母`_-*`且在同一个商户号下唯一。 */
  merchant_trade_no?: string;
  /** 快递签收时间，时间戳形式。 */
  received_time: number;
}
/** 确认收货提醒 —— 返回体。 */
export interface OrderNotifyConfirmReceiveResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 特殊发货报备 —— 请求体。 */
export interface OrderOpspecialorderBody {
  /** 需要特殊发货报备的订单号，可传入微信支付单号或商户单号 */
  order_id: string;
  /** 特殊发货报备类型，1为预售商品订单，2为测试订单 */
  type: number;
  /** 预计发货时间的unix时间戳，type为1时必填，type为2可省略 */
  delay_to?: number;
}
/** 特殊发货报备 —— 返回体。 */
export interface OrderOpspecialorderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 消息跳转路径设置 —— 请求体。 */
export interface OrderSetMsgJumpPathBody {
  /** 商户自定义跳转路径。 */
  path: string;
}
/** 消息跳转路径设置 —— 返回体。 */
export interface OrderSetMsgJumpPathResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 小程序交易类型变更申请 —— 请求体。 */
export interface OrderSetwxatradetypecgiBody {
  /** 申请变更后的目标交易类型 */
  trade_type: number;
  /** 申请材料列表，最多10个，其中视频最多3个 */
  material_list: unknown[];
  /** 申请理由 */
  reason: string;
}
/** 小程序交易类型变更申请 —— 返回体。 */
export interface OrderSetwxatradetypecgiResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 发货信息合单录入 —— 请求体。 */
export interface OrderUploadCombinedShippingInfoBody {
  /** 合单订单，需要上传物流详情的合单订单，根据订单类型二选一 */
  order_key: Record<string, unknown>;
  /** 子单物流详情 */
  sub_orders?: unknown[];
  /** 上传时间，用于标识请求的先后顺序 示例值: `2022-12-15T13:29:35.120+08:00` */
  upload_time: string;
  /** 支付者，支付者信息 */
  payer: Record<string, unknown>;
}
/** 发货信息合单录入 —— 返回体。 */
export interface OrderUploadCombinedShippingInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 发货信息录入 —— 请求体。 */
export interface OrderUploadShippingInfoBody {
  /** 订单，需要上传物流信息的订单 */
  order_key: Record<string, unknown>;
  /** 物流模式，发货方式枚举值：1、实体物流配送采用快递公司进行实体物流配送形式 2、同城配送 3、虚拟商品，虚拟商品，例如话费充值，点卡等，无实体配送形式 4、用户自提 */
  logistics_type: number;
  /** 发货模式，发货模式枚举值：1、UNIFIED_DELIVERY（统一发货）2、SPLIT_DELIVERY（分拆发货） */
  delivery_mode: number;
  /** 分拆发货模式时必填，用于标识分拆发货模式下是否已全部发货完成，只有全部发货完成的情况下才会向用户推送发货完成通知。示例值: true/false */
  is_all_delivered?: boolean;
  /** 物流信息列表，发货物流单列表，支持统一发货（单个物流单）和分拆发货（多个物流单）两种模式，多重性: [1, 15] */
  shipping_list: unknown[];
  /** 上传时间，用于标识请求的先后顺序 示例值: `2022-12-15T13:29:35.120+08:00` */
  upload_time: string;
  /** 支付者，支付者信息 */
  payer: Record<string, unknown>;
}
/** 发货信息录入 —— 返回体。 */
export interface OrderUploadShippingInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 插件管理 —— 请求体。 */
export interface PluginBody {
  /** action可取值为"list"、"apply"、 "unbind"、"update"，分别表示“查询已添加的插件列表”、“申请使用插件”、“删除已添加的插件”、“快速更新插件版本号” */
  action: string;
  /** 插件的 appid */
  plugin_appid: string;
  /** 当action是"apply"时必填，申请原因 */
  reason?: string;
  /** 当action是"update"时使用。升级至版本号，要求此插件版本支持快速更新 */
  user_version?: string;
}
/** 插件管理 —— 返回体。 */
export interface PluginResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 申请或使用中的插件信息列表，当 action == 'list' 时返回 */
  plugin_list?: unknown[];
}

/** 插件申请管理 —— 请求体。 */
export interface DevpluginBody {
  /** dev_agree表示同意申请、dev_refuse表示拒绝申请、dev_delete表示删除已拒绝的申请者、dev_apply_list表示获取当前所有插件使用方信息 */
  action: string;
  /** action为"dev_agree"时填写，使用者的 appid，同意申请时填写。 */
  appid?: string;
  /** action为"dev_apply_list"时填写，要拉取第几页的数据 */
  page?: number;
  /** action为"dev_apply_list"时填写，每页的记录数 */
  num?: number;
  /** action为"dev_refuse"时填写，拒绝理由。 */
  reason?: string;
}
/** 插件申请管理 —— 返回体。 */
export interface DevpluginResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 插件使用方列表，action为"dev_apply_list"时返回 */
  apply_list?: unknown[];
}

/** 获取小程序二维码 —— 请求体。 */
export interface WxaappCreatewxaqrcodeBody {
  /** 扫码进入的小程序页面路径，最大长度 128 个字符，不能为空；对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"，即可在 wx.getLaunchOptionsS */
  path: string;
  /** 二维码的宽度，单位 px。最小 280px，最大 1280px;默认是430 */
  width?: number;
}
/** 获取小程序二维码 —— 返回体。 */
export interface WxaappCreatewxaqrcodeResp {
  /** 图片 Buffer */
  buffer?: unknown;
  /** 错误码 */
  errcode?: string;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取小程序码 —— 请求体。 */
export interface GetwxacodeBody {
  /** 扫码进入的小程序页面路径，最大长度 1024 个字符，不能为空，scancode_time为系统保留参数，不允许配置；对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=b */
  path: string;
  /** 二维码的宽度，单位 px。默认值为430，最小 280px，最大 1280px */
  width?: number;
  /** 默认值false；自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调 */
  auto_color?: boolean;
  /** 默认值{"r":0,"g":0,"b":0} ；auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示 */
  line_color?: Record<string, unknown>;
  /** 默认值false；是否需要透明底色，为 true 时，生成透明底色的小程序码 */
  is_hyaline?: boolean;
  /** 要打开的小程序版本。正式版为 "release"，体验版为 "trial"，开发版为 "develop"。默认是正式版。 */
  env_version?: string;
}
/** 获取小程序码 —— 返回体。 */
export interface GetwxacodeResp {
  /** 图片 Buffer */
  buffer?: unknown;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取不限制的小程序码 —— 请求体。 */
export interface GetwxacodeunlimitBody {
  /** 最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方 */
  scene: string;
  /** 默认是主页，页面 page，例如 pages/index/index，根路径前不要填加 /，不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面。scancode_time为系 */
  page?: string;
  /** 默认是true，检查page 是否存在，为 true 时 page 必须是已经发布的小程序存在的页面（否则报错）；为 false 时允许小程序未发布或者 page 不存在， 但page 有数量上限（6 */
  check_path?: boolean;
  /** 要打开的小程序版本。正式版为 "release"，体验版为 "trial"，开发版为 "develop"。默认是正式版。 */
  env_version?: string;
  /** 默认430，二维码的宽度，单位 px，最小 280px，最大 1280px */
  width?: number;
  /** 自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调，默认 false */
  auto_color?: boolean;
  /** 默认是{"r":0,"g":0,"b":0} 。auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示 */
  line_color?: Record<string, unknown>;
  /** 默认是false，是否需要透明底色，为 true 时，生成透明底色的小程序 */
  is_hyaline?: boolean;
}
/** 获取不限制的小程序码 —— 返回体。 */
export interface GetwxacodeunlimitResp {
  /** 图片 Buffer */
  buffer?: unknown;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取ShortLink —— 请求体。 */
export interface GenwxashortlinkBody {
  /** 通过 Short Link 进入的小程序页面路径，必须是已经发布的小程序存在的页面，可携带 query，最大1024个字符 */
  page_url: string;
  /** 短链标题，可自定义，不能包含违法信息，超过20字符会用... 截断代替 */
  page_title?: string;
  /** 默认值false。生成的 Short Link 类型，短期有效：false，永久有效：true */
  is_permanent?: boolean;
}
/** 获取ShortLink —— 返回体。 */
export interface GenwxashortlinkResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 生成的小程序 Short Link */
  link?: string;
}

/** 获取加密URLLink —— 请求体。 */
export interface GenerateUrllinkBody {
  /** 通过 URL Link 进入的小程序页面路径，必须是已经发布的小程序存在的页面，不可携带 query 。path 为空时会跳转小程序主页 */
  path?: string;
  /** 通过 URL Link 进入小程序时的query，最大1024个字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~% */
  query?: string;
  /** 默认值0.小程序 URL Link 失效类型，失效时间：0，失效间隔天数：1 */
  expire_type?: number;
  /** 到期失效的 URL Link 的失效时间，为 Unix 时间戳。生成的到期失效 URL Link 在该时间前有效。最长有效期为30天。expire_type 为 0 必填 */
  expire_time?: number;
  /** 到期失效的URL Link的失效间隔天数。生成的到期失效URL Link在该间隔时间到达前有效。最长间隔天数为30天。expire_type 为 1 必填 */
  expire_interval?: number;
  /** 云开发静态网站自定义 H5 配置参数，可配置中转的云开发 H5 页面。不填默认用官方 H5 页面 */
  cloud_base?: Record<string, unknown>;
  /** 默认值"release"。要打开的小程序版本。正式版为 "release"，体验版为"trial"，开发版为"develop"，仅在微信外打开时生效。 */
  env_version?: string;
}
/** 获取加密URLLink —— 返回体。 */
export interface GenerateUrllinkResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 生成的小程序 URL Link */
  url_link?: string;
}

/** 查询加密URLLink —— 请求体。 */
export interface QueryUrllinkBody {
  /** 小程序加密 url_link。 */
  url_link?: string;
  /** 查询类型。默认值0，查询 url_link 信息：0， 查询每天剩余访问次数：1 */
  query_type?: number;
}
/** 查询加密URLLink —— 返回体。 */
export interface QueryUrllinkResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** url_link 配置 */
  url_link_info?: Record<string, unknown>;
  /** quota 配置 */
  quota_info?: Record<string, unknown>;
}

/** 获取NFC的小程序scheme —— 请求体。 */
export interface GeneratenfcschemeBody {
  /** 跳转到的目标小程序信息。 */
  jump_wxa?: Record<string, unknown>;
  /** scheme对应的设备model_id */
  model_id: string;
  /** scheme对应的设备sn，仅一机一码时填写 */
  sn?: string;
}
/** 获取NFC的小程序scheme —— 返回体。 */
export interface GeneratenfcschemeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 生成的小程序 scheme 码 */
  openlink?: string;
}

/** 获取加密scheme码 —— 请求体。 */
export interface GenerateschemeBody {
  /** 跳转到的目标小程序信息。 */
  jump_wxa?: Record<string, unknown>;
  /** 到期失效的 scheme 码的失效时间，为 Unix 时间戳。生成的到期失效 scheme 码在该时间前有效。最长有效期为30天。is_expire 为 true 且 expire_type 为 0 */
  expire_time?: number;
  /** 默认值0，到期失效的 scheme 码失效类型，失效时间：0，失效间隔天数：1 */
  expire_type?: number;
  /** 到期失效的 scheme 码的失效间隔天数。生成的到期失效 scheme 码在该间隔时间到达前有效。最长间隔天数为30天。is_expire 为 true 且 expire_type 为 1 时必填 */
  expire_interval?: number;
}
/** 获取加密scheme码 —— 返回体。 */
export interface GenerateschemeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 生成的小程序 scheme 码 */
  openlink?: string;
}

/** 查询scheme码 —— 请求体。 */
export interface QueryschemeBody {
  /** 小程序 scheme 码。支持加密 scheme 和明文 scheme */
  scheme?: string;
  /** 查询类型。默认值0，查询 scheme 码信息：0， 查询每天剩余访问次数：1 */
  query_type?: number;
}
/** 查询scheme码 —— 返回体。 */
export interface QueryschemeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** scheme 信息 */
  scheme_info?: Record<string, unknown>;
  /** quota 配置 */
  quota_info?: Record<string, unknown>;
}

/** 获取微信红包封面 —— 请求体。 */
export interface RedpacketcoverWxappCoverUrlGetByTokenBody {
  /** 可领取用户的openid */
  openid: string;
  /** 在红包封面平台获取发放ctoken（需要指定可以发放的appid） */
  ctoken: string;
}
/** 获取微信红包封面 —— 返回体。 */
export interface RedpacketcoverWxappCoverUrlGetByTokenResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 指定用户可以领取的链接（带鉴权的链接） */
  data?: Record<string, unknown>;
}

/** 获取用户安全等级 —— 请求体。 */
export interface GetuserriskrankBody {
  /** 小程序appid */
  appid: string;
  /** 用户的openid */
  openid: string;
  /** 场景值，0:注册，1:营销作弊, 2:UGC */
  scene: number;
  /** 用户手机号 */
  mobile_no?: string;
  /** 用户访问源ip */
  client_ip: string;
  /** 用户邮箱地址 */
  email_address?: string;
  /** 额外补充信息 */
  extended_info?: string;
  /** 默认值false。false：正式调用，true：测试调用 */
  is_test?: boolean;
}
/** 获取用户安全等级 —— 返回体。 */
export interface GetuserriskrankResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户风险等级，合法值为0,1,2,3,4，数字越大风险越高。 */
  risk_rank?: number;
  /** 唯一请求标识，标记单次请求 */
  unoin_id?: number;
}

/** 多媒体内容安全识别 —— 请求体。 */
export interface MediaCheckAsyncBody {
  /** 要检测的图片或音频的url，支持图片格式包括jpg, jpeg, png, bmp, gif（取首帧），支持的音频格式包括mp3, aac, ac3, wma, flac, vorbis, opus, */
  media_url: string;
  /** 1:音频;2:图片 */
  media_type: number;
  /** 接口版本号，2.0版本为固定值2 */
  version: number;
  /** 场景枚举值（1 资料；2 评论；3 论坛；4 社交日志） */
  scene: number;
  /** 用户的openid（用户需在近两小时访问过小程序） */
  openid: string;
}
/** 多媒体内容安全识别 —— 返回体。 */
export interface MediaCheckAsyncResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 唯一请求标识，标记单次请求，用于匹配异步推送结果 */
  trace_id?: string;
}

/** 文本内容安全识别 —— 请求体。 */
export interface MsgSecCheckBody {
  /** 需检测的文本内容，文本字数的上限为2500字，需使用UTF-8编码 */
  content: string;
  /** 接口版本号，2.0版本为固定值2 */
  version: number;
  /** 场景枚举值（1 资料；2 评论；3 论坛；4 社交日志） */
  scene: number;
  /** 用户的openid（用户需在近两小时访问过小程序） */
  openid: string;
  /** 文本标题，需使用UTF-8编码 */
  title?: string;
  /** 用户昵称，需使用UTF-8编码 */
  nickname?: string;
  /** 个性签名，该参数仅在资料类场景有效(scene=1)，需使用UTF-8编码 */
  signature?: string;
}
/** 文本内容安全识别 —— 返回体。 */
export interface MsgSecCheckResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 详细检测结果 */
  detail?: unknown[];
  /** 唯一请求标识，标记单次请求 */
  trace_id?: string;
  /** 综合结果 */
  result?: Record<string, unknown>;
}

/** 生物认证秘钥签名验证 —— 请求体。 */
export interface SoterVerifySignatureBody {
  /** 用户 openid */
  openid: string;
  /** 通过 wx.startSoterAuthentication 成功回调获得的 resultJSON 字段 */
  json_string: string;
  /** 通过 wx.startSoterAuthentication 成功回调获得的 resultJSONSignature 字段 */
  json_signature: string;
}
/** 生物认证秘钥签名验证 —— 返回体。 */
export interface SoterVerifySignatureResp {
  /** 验证结果 */
  is_ok?: boolean;
}

/** 快速获取学生身份 —— 请求体。 */
export interface QuickcheckstudentidentityBody {
  /** 用户在业务方下的openid 需为已开通接口权限小程序对应的用户openid。 */
  openid: string;
  /** 用户授权查询code 由授权插件返回，插件可选择不同场景：是否为快速验证。 微信学生身份验证和微信学生身份快速验证需要使用对应场景生成的不同的code。 code有效期两小时 */
  wx_studentcheck_code: string;
}
/** 快速获取学生身份 —— 返回体。 */
export interface QuickcheckstudentidentityResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 绑定状态： 1-未绑定 2-审核中 3-已绑定 */
  bind_status?: number;
  /** 用户学生身份绑定状态说明。true-是学生，false-不是学生 */
  is_student?: boolean;
}

/** 获取交易保障标状态 —— 请求体（文档未列字段，放行任意键）。 */
export type WxamptradeGetGuaranteeStatusBody = Record<string, unknown>;
/** 获取交易保障标状态 —— 返回体。 */
export interface WxamptradeGetGuaranteeStatusResp {
  /** 是否激活交易保障标 */
  isActived?: boolean;
  /** 保障标状态相关信息 */
  msg?: string;
  /** 未能开通保障标的原因 */
  reasons?: unknown[];
}

/** 获取小程序交易体验分违规记录 —— 请求体。 */
export interface WxamptradeGetPenaltyListBody {
  /** 获取从第offset条开始的limit条记录（序号从 0 开始），最大不超过总记录数 */
  offset: number;
  /** 获取从第offset条开始的limit条记录（序号从 0 开始），最大不超过 100 */
  limit: number;
}
/** 获取小程序交易体验分违规记录 —— 返回体。 */
export interface WxamptradeGetPenaltyListResp {
  /** 记录列表 */
  appealList?: unknown[];
  /** 当前小程序的交易体验分 */
  currentScore?: number;
  /** 当前小程序的总扣分记录数 */
  totalNum?: number;
}

/** 创建回复 —— 请求体。 */
export interface CommentCommentreplyAddBody {
  /** 评价的 id */
  commentId: string;
  /** 评论的 id */
  replyId: string;
  /** 回复评论的内容 */
  content: string;
}
/** 创建回复 —— 返回体。 */
export interface CommentCommentreplyAddResp {
  /** 错误码 */
  errcode?: number;
  /** 请求是否成功状态 */
  success?: boolean;
  /** 错误信息 */
  errmsg?: string;
}

/** 创建评论 —— 请求体。 */
export interface CommentReplyAddBody {
  /** 评价的 id */
  commentId: string;
  /** 评论的内容 */
  content: string;
}
/** 创建评论 —— 返回体。 */
export interface CommentReplyAddResp {
  /** 错误码 */
  errcode?: number;
  /** 请求是否成功状态 */
  success?: boolean;
  /** 错误信息 */
  errmsg?: string;
}

/** 确认和解 —— 请求体。 */
export interface CommentConfirmcompromiseBody {
  /** 评价的 id */
  commentId: string;
  /** 和解的图片mediaId集合,可参考素材管理 */
  picList: unknown[];
  /** 和解的文本内容 */
  content: string;
}
/** 确认和解 —— 返回体。 */
export interface CommentConfirmcompromiseResp {
  /** 错误码 */
  errcode?: number;
  /** 请求是否成功状态 */
  success?: boolean;
  /** 错误信息 */
  errmsg?: string;
}

/** 删除回复 —— 请求体。 */
export interface CommentCommentreplyDeleteBody {
  /** 评价的 id */
  commentId: string;
  /** 评论的 id */
  replyId: string;
  /** 回复评论的 id */
  commentReplyId: string;
}
/** 删除回复 —— 返回体。 */
export interface CommentCommentreplyDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 请求是否成功状态 */
  success?: boolean;
  /** 错误信息 */
  errmsg?: string;
}

/** 删除评论 —— 请求体。 */
export interface CommentReplyDeleteBody {
  /** 评价的 id */
  commentId: string;
  /** 评论的 id */
  replyId: string;
}
/** 删除评论 —— 返回体。 */
export interface CommentReplyDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 请求是否成功状态 */
  success?: boolean;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询评价列表 —— 请求体。 */
export interface CommentMpcommentlistGetBody {
  /** 查询时间段的开始时间 */
  startTime: string;
  /** 查询时间段的结束时间 */
  endTime: string;
  /** 过滤的数据类型 */
  filterType?: number;
  /** 查询的偏移数（从offset开始计数拉取)，默认值为 0 代表首页拉取 */
  offset?: number;
  /** 查询每页中的数量，默认值为 8 */
  limit?: number;
}
/** 查询评价列表 —— 返回体。 */
export interface CommentMpcommentlistGetResp {
  /** 错误码 */
  errcode?: string;
  /** 查询的偏移数（从offset开始计数拉取) */
  offset?: number;
  /** 评价总数 */
  total?: number;
  /** 评价的列表 */
  commentList?: unknown[];
}

/** 查询评价详情 —— 请求体。 */
export interface CommentCommentinfoGetBody {
  /** 评价的 id */
  commentId: string;
}
/** 查询评价详情 —— 返回体。 */
export interface CommentCommentinfoGetResp {
  /** 评价的信息 */
  info?: Record<string, unknown>;
  /** 进度条的信息（只有差评才会有） */
  processInfo?: Record<string, unknown>;
  /** 旧评价的信息(只有改评的新评价才有) */
  oldComment?: Record<string, unknown>;
}

/** 查询评论列表 —— 请求体。 */
export interface CommentReplyandcommentreplylistGetBody {
  /** 评价的 id */
  commentId: string;
}
/** 查询评论列表 —— 返回体。 */
export interface CommentReplyandcommentreplylistGetResp {
  /** 错误码 */
  errcode?: number;
  /** 评论（评论回复第一条内容） */
  list?: Record<string, unknown>;
}

/** 重置Api客服quota —— 请求体。 */
export interface CommentApikfquotaResetBody {
  /** 评价的 id */
  commentId: string;
}
/** 重置Api客服quota —— 返回体。 */
export interface CommentApikfquotaResetResp {
  /** 错误码 */
  errcode?: number;
  /** 请求是否成功状态 */
  success?: boolean;
  /** 错误信息 */
  errmsg?: string;
}

/** 商家申诉 —— 请求体。 */
export interface MinishopBusiAppealBody {
  /** 回应的内容（图片数组mediaIdList跟内容content二选一） */
  content: string;
  /** 单号 */
  complaintOrderId: number;
  /** 图片 id 列表，可参考这 新增素材（图片数组mediaIdList跟内容content二选一） */
  mediaIdList: unknown[];
}
/** 商家申诉 —— 返回体。 */
export interface MinishopBusiAppealResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询投诉单详情 —— 请求体。 */
export interface MinishopComplaintOrderDetailBody {
  /** 订单id */
  complaintOrderId: string;
}
/** 查询投诉单详情 —— 返回体。 */
export interface MinishopComplaintOrderDetailResp {
  /** complaintOrder */
  complaintOrder?: Record<string, unknown>;
  /** 投诉进度 */
  item?: Record<string, unknown>;
  /** returnBill */
  returnBill?: Record<string, unknown>;
}

/** 商家回应投诉 —— 请求体。 */
export interface MinishopBussiRespondComplaintBody {
  /** 回应的内容（图片数组mediaIdList跟内容content二选一） */
  content: string;
  /** 单号 */
  complaintOrderId: number;
  /** 图片 id 列表，可参考新增素材（图片数组mediaIdList跟内容content二选一） */
  mediaIdList: unknown[];
  /** 操作：1是同意和解，2是拒绝和解 */
  bussiHandle: number;
}
/** 商家回应投诉 —— 返回体。 */
export interface MinishopBussiRespondComplaintResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 商家提交退款凭证 —— 请求体。 */
export interface MinishopBussiSupplyRefundBody {
  /** 回应的内容（图片数组mediaIdList跟内容content二选一） */
  content: string;
  /** 单号 */
  complaintOrderId: number;
  /** 图片的id list 图片 id 列表，可参考新增素材（图片数组mediaIdList跟内容content二选一） */
  mediaIdList: unknown[];
  /** 确认是否收货（退货状态下必填） */
  acceptReturn: number;
  /** 退货单号，需要通过查询投诉单详情接口获取（退货状态下必填） */
  returnId: number;
}
/** 商家提交退款凭证 —— 返回体。 */
export interface MinishopBussiSupplyRefundResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 商家补充凭证 —— 请求体。 */
export interface MinishopBussiSupplyProofBody {
  /** 回应的内容（图片数组mediaIdList跟内容content二选一） */
  content: string;
  /** 单号 */
  complaintOrderId: number;
  /** 图片 id 列表，可参考这 新增素材（图片数组mediaIdList跟内容content二选一） */
  mediaIdList: unknown[];
}
/** 商家补充凭证 —— 返回体。 */
export interface MinishopBussiSupplyProofResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 检查加密信息 —— 请求体。 */
export interface BusinessCheckencryptedmsgBody {
  /** 加密数据的sha256，通过Hex（Base16）编码后的字符串 */
  encrypted_msg_hash: string;
}
/** 检查加密信息 —— 返回体。 */
export interface BusinessCheckencryptedmsgResp {
  /** 错误码 */
  errcode?: number;
  /** 错误提示信息 */
  errmsg?: string;
  /** 是否是合法的数据 */
  vaild?: boolean;
  /** 加密数据生成的时间戳 */
  create_time?: number;
}

/** 支付后获取Unionid —— 请求体。 */
export interface GetpaidunionidBody {
  /** 支付用户唯一标识 */
  openid: string;
  /** 微信支付订单号 */
  transaction_id?: string;
  /** 微信支付分配的商户号，和商户订单号配合使用 */
  mch_id?: string;
  /** 微信支付商户订单号，和商户号配合使用 */
  out_trade_no?: string;
}
/** 支付后获取Unionid —— 返回体。 */
export interface GetpaidunionidResp {
  /** 用户唯一标识，调用成功后返回 */
  unionid?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取插件用户openpid —— 请求体。 */
export interface GetpluginopenpidBody {
  /** 通过 wx.pluginLogin 获得的插件用户标志凭证 code，有效时间为5分钟，一个 code 只能获取一次 openpid。 */
  code: string;
}
/** 获取插件用户openpid —— 返回体。 */
export interface GetpluginopenpidResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 插件用户的唯一标识。 */
  openpid?: string;
}

/** 获取用户encryptKey —— 请求体（文档未列字段，放行任意键）。 */
export type BusinessGetuserencryptkeyBody = Record<string, unknown>;
/** 获取用户encryptKey —— 查询参数。 */
export interface BusinessGetuserencryptkeyQuery {
  /** 用户的openid */
  openid: string;
  /** 用sessionkey作为密钥对空字符串签名得到的结果。session_key可通过code2Session接口获得。 伪代码：signature = hmac_sha256(session_key, */
  signature: string;
  /** 签名方法，只支持 hmac_sha256 */
  sig_method: string;
}
/** 获取用户encryptKey —— 返回体。 */
export interface BusinessGetuserencryptkeyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户最近三次的加密key列表 */
  key_info_list?: unknown[];
}

/** 获取手机号 —— 请求体。 */
export interface BusinessGetuserphonenumberBody {
  /** 手机号获取凭证 */
  code: string;
}
/** 获取手机号 —— 返回体。 */
export interface BusinessGetuserphonenumberResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户手机号信息 */
  phone_info?: Record<string, unknown>;
}

/** 检验登录态 —— 请求体。 */
export interface ChecksessionBody {
  /** 用户唯一标识符 */
  openid: string;
  /** 用户登录态签名，用session_key对空字符串签名得到的结果。即 signature = hmac_sha256(session_key, "") */
  signature: string;
  /** 用户登录态签名的哈希方法，目前只支持 hmac_sha256 */
  sig_method: string;
}
/** 检验登录态 —— 返回体。 */
export interface ChecksessionResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 小程序登录凭证校验 —— 请求体（文档未列字段，放行任意键）。 */
export type Jscode2sessionBody = Record<string, unknown>;
/** 小程序登录凭证校验 —— 查询参数。 */
export interface Jscode2sessionQuery {
  /** 登录时获取的 code，可通过wx.login获取 */
  js_code: string;
  /** 授权类型，此处只需填写 authorization_code */
  grant_type: string;
}
/** 小程序登录凭证校验 —— 返回体。 */
export interface Jscode2sessionResp {
  /** 会话密钥 */
  session_key?: string;
  /** 用户在开放平台的唯一标识符，若当前小程序已绑定到微信开放平台帐号下会返回，详见 UnionID 机制说明。 */
  unionid?: string;
  /** 用户唯一标识 */
  openid?: string;
  /** 错误码，请求失败时返回 */
  errcode?: number;
  /** 错误信息，请求失败时返回 */
  errmsg?: string;
}

/** 重置登录态 —— 请求体。 */
export interface ResetusersessionkeyBody {
  /** 用户唯一标识符 */
  openid: string;
  /** 用户登录态签名，用session_key对空字符串签名得到的结果。即 signature = hmac_sha256(session_key, "") */
  signature: string;
  /** 用户登录态签名的哈希方法，目前只支持 hmac_sha256 */
  sig_method: string;
}
/** 重置登录态 —— 返回体。 */
export interface ResetusersessionkeyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户唯一标识符 */
  openid?: string;
  /** 重置后的用户登录态 */
  session_key?: string;
}

/** 传运单 —— 请求体。 */
export interface ExpressDeliveryOpenMsgFollowWaybillBody {
  /** 用户openid */
  openid: string;
  /** 寄件人手机号 */
  sender_phone?: string;
  /** 收件人手机号，部分运力需要用户手机号作为查单依据 */
  receiver_phone: string;
  /** 运单号 */
  waybill_id: string;
  /** 商品信息 */
  goods_info: Record<string, unknown>;
  /** 交易单号（微信支付生成的交易单号，一般以420开头） */
  trans_id: string;
  /** 点击落地页商品卡片跳转路径（建议为订单详情页path），不传默认跳转小程序首页。 */
  order_detail_path: string;
  /** 运力id（运单号所属运力公司id），该字段从 get_delivery_list 获取。 该参数用于提高运单号识别的准确度；特别是对非主流快递公司，建议传入该参数，确保查询正确率。 */
  delivery_id?: string;
}
/** 传运单 —— 返回体。 */
export interface ExpressDeliveryOpenMsgFollowWaybillResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 查询id */
  waybill_token?: string;
}

/** 获取运力id列表 —— 请求体（文档未列字段，放行任意键）。 */
export type ExpressDeliveryOpenMsgGetDeliveryListBody = Record<string, unknown>;
/** 获取运力id列表 —— 返回体。 */
export interface ExpressDeliveryOpenMsgGetDeliveryListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** delivery_list */
  delivery_list?: Record<string, unknown>;
  /** 运力公司个数 */
  count?: number;
}

/** 查运单 —— 请求体。 */
export interface ExpressDeliveryOpenMsgQueryFollowTraceBody {
  /** 查询id */
  waybill_token: string;
  /** 用户openid */
  openid?: string;
}
/** 查运单 —— 返回体。 */
export interface ExpressDeliveryOpenMsgQueryFollowTraceResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 运单信息 */
  waybill_info?: Record<string, unknown>;
  /** 商品信息 */
  shop_info?: Record<string, unknown>;
  /** 运力信息 */
  delivery_info?: Record<string, unknown>;
}

/** 更新物品信息接口 —— 请求体。 */
export interface ExpressDeliveryOpenMsgUpdateFollowWaybillGoodsBody {
  /** 查询id */
  waybill_token: string;
  /** 商品信息 */
  goods_info: Record<string, unknown>;
}
/** 更新物品信息接口 —— 返回体。 */
export interface ExpressDeliveryOpenMsgUpdateFollowWaybillGoodsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 创建退货ID —— 请求体。 */
export interface ExpressDeliveryNoWorryReturnAddBody {
  /** 商家内部系统使用的退货编号 */
  shop_order_id: string;
  /** 商家退货地址 */
  biz_addr: Record<string, unknown>;
  /** 用户购物时的收货地址 */
  user_addr?: Record<string, unknown>;
  /** 退货用户的openid */
  openid: string;
  /** 退货订单在商家小程序的path。如投保时已传入订单商品信息，则以投保时传入的为准 */
  order_path: string;
  /** 退货商品list，一个元素为对象的数组,结构如下↓ 如投保时已传入订单商品信息，则以投保时传入的为准 */
  goods_list: unknown[];
  /** 退货订单的价格 */
  order_price: number;
  /** 填写已投保的微信支付单号 */
  wx_pay_id: string;
}
/** 创建退货ID —— 返回体。 */
export interface ExpressDeliveryNoWorryReturnAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 退货ID */
  return_id?: string;
}

/** 查询退货ID状态 —— 请求体。 */
export interface ExpressDeliveryNoWorryReturnGetBody {
  /** 退货ID */
  return_id: string;
}
/** 查询退货ID状态 —— 返回体。 */
export interface ExpressDeliveryNoWorryReturnGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 退货方式，0.用户未填写退货信息 1.预约上门取件 2.填写自行寄回运单号 */
  status?: number;
  /** 运单号 */
  waybill_id?: string;
  /** 物流信息，0.已下单待揽件 1.已揽件 2.运输中 3.派件中 4.已签收 5.异常 6.代签收 7.揽收失败 8.签收失败（拒收，超区） 11.已取消 13.退件中 14.已退件 99.未知 */
  order_status?: number;
  /** 运力公司编码 */
  delivery_id?: string;
  /** 运力公司名称 */
  delivery_name?: string;
}

/** 解绑退货ID —— 请求体。 */
export interface ExpressDeliveryNoWorryReturnUnbindBody {
  /** 退货ID */
  return_id: string;
}
/** 解绑退货ID —— 返回体。 */
export interface ExpressDeliveryNoWorryReturnUnbindResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询运单 —— 请求体。 */
export interface ExpressDeliveryOpenMsgQueryTraceBody {
  /** 查询id */
  waybill_token: string;
  /** 用户openid */
  openid?: string;
}
/** 查询运单 —— 返回体。 */
export interface ExpressDeliveryOpenMsgQueryTraceResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 运单信息 */
  waybill_info?: Record<string, unknown>;
  /** 商品信息 */
  shop_info?: Record<string, unknown>;
  /** 运力信息 */
  delivery_info?: Record<string, unknown>;
}

/** 传运单 —— 请求体。 */
export interface ExpressDeliveryOpenMsgTraceWaybillBody {
  /** 用户openid */
  openid: string;
  /** 寄件人手机号 */
  sender_phone?: string;
  /** 收件人手机号，部分运力需要用户手机号作为查单依据 */
  receiver_phone: string;
  /** 运单号 */
  waybill_id: string;
  /** 商品信息 */
  goods_info: Record<string, unknown>;
  /** 交易单号（微信支付生成的交易单号，一般以420开头） */
  trans_id: string;
  /** 点击落地页商品卡片跳转路径（建议为订单详情页path），不传默认跳转小程序首页。 */
  order_detail_path: string;
  /** 运力id（运单号所属运力公司id），该字段从 get_delivery_list 获取。 该参数用于提高运单号识别的准确度；特别是对非主流快递公司，建议传入该参数，确保查询正确率。 */
  delivery_id?: string;
}
/** 传运单 —— 返回体。 */
export interface ExpressDeliveryOpenMsgTraceWaybillResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 查询id */
  waybill_token?: string;
}

/** 更新物流信息 —— 请求体。 */
export interface ExpressDeliveryOpenMsgUpdateWaybillGoodsBody {
  /** 查询id */
  waybill_token: string;
  /** 商品信息 */
  goods_info: Record<string, unknown>;
}
/** 更新物流信息 —— 返回体。 */
export interface ExpressDeliveryOpenMsgUpdateWaybillGoodsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 申请支付 —— 请求体。 */
export interface BusinessInsuranceFreightApplypayBody {
  /** 充值订单id，与申请充值订单号保持一致，js等语言防止精度错误传string */
  order_id: number;
}
/** 申请支付 —— 返回体。 */
export interface BusinessInsuranceFreightApplypayResp {
  /** 充值链接 */
  pay_url?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 无忧退理赔 —— 请求体。 */
export interface BusinessInsuranceFreightClaimBody {
  /** 买家openid，与投保保持一致 */
  openid: string;
  /** 微信支付单号，与投保保持一致 */
  order_no: string;
  /** 退款运单号，理赔退款运单号唯一 */
  refund_delivery_no: string;
  /** 退款快递公司 */
  refund_company: string;
}
/** 无忧退理赔 —— 返回体。 */
export interface BusinessInsuranceFreightClaimResp {
  /** 理赔报案号，成功申请理赔时返回 */
  report_no?: string;
  /** 是否上门取件 */
  is_home_pick_up?: number;
}

/** 申请充值订单号 —— 请求体。 */
export interface BusinessInsuranceFreightCreatechargeidBody {
  /** 充值金额，单位：分 */
  quota: number;
}
/** 申请充值订单号 —— 返回体。 */
export interface BusinessInsuranceFreightCreatechargeidResp {
  /** 充值订单id */
  order_id?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 发货时投保 —— 请求体。 */
export interface BusinessInsuranceFreightCreateorderBody {
  /** 买家openid，必须和理赔openid一致 */
  openid: string;
  /** 微信支付单号，一个微信支付单号只能投保一次 */
  order_no: string;
  /** 微信支付时间，秒级时间戳，时间误差3天内 */
  pay_time: number;
  /** 微信支付金额（单位：分） */
  pay_amount: number;
  /** 发货运单号 */
  delivery_no: string;
  /** 发货地址 */
  delivery_place: Record<string, unknown>;
  /** 收货地址 */
  receipt_place: Record<string, unknown>;
  /** 投保订单信息，用于微信下发投保和理赔通知给用户，用户点击可查看投保订单，点击订单可跳回商家小程序 */
  product_info: Record<string, unknown>;
}
/** 发货时投保 —— 返回体。 */
export interface BusinessInsuranceFreightCreateorderResp {
  /** 保单号 */
  policy_no?: string;
  /** 保险止期，格式: yyyy-mm-dd hh24:mi:ss */
  insurance_end_date?: string;
  /** 保险公司预估理赔金额，单位： 分 */
  estimate_amount?: number;
  /** 保费，单位： 分 */
  premium?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 拉取保单信息 —— 请求体。 */
export interface BusinessInsuranceFreightGetorderlistBody {
  /** 买家openid，与投保理赔保持一致 */
  openid?: string;
  /** 微信支付单号，与投保理赔保持一致 */
  order_no?: string;
  /** 保单号 */
  policy_no?: string;
  /** 理赔报案号 */
  report_no?: string;
  /** 发货运单号 */
  delivery_no?: string;
  /** 退款运单号 */
  refund_delivery_no?: string;
  /** 查询开始时间，秒级时间戳 */
  begin_time?: number;
  /** 查询结束时间，秒级时间戳 */
  end_time?: number;
  /** 保单状态 */
  status_list?: unknown[];
  /** 分页offset */
  offset?: number;
  /** 分页limit（默认为100，最大为100） */
  limit?: number;
  /** 排序方式 */
  sort_direct?: number;
}
/** 拉取保单信息 —— 返回体。 */
export interface BusinessInsuranceFreightGetorderlistResp {
  /** 总数 */
  total?: number;
  /** 保单列表 */
  list?: unknown[];
}

/** 拉取充值订单信息 —— 请求体。 */
export interface BusinessInsuranceFreightGetpayorderlistBody {
  /** 订单状态 */
  status_list: unknown[];
  /** 分页offset */
  offset?: number;
  /** 分页limit */
  limit?: number;
}
/** 拉取充值订单信息 —— 返回体。 */
export interface BusinessInsuranceFreightGetpayorderlistResp {
  /** 总数 */
  total?: number;
  /** 充值订单列表 */
  list?: unknown[];
}

/** 拉取理赔摘要 —— 请求体。 */
export interface BusinessInsuranceFreightGetsummaryBody {
  /** 查询开始时间， */
  begin_time: number;
  /** 查询结束时间戳，秒级时间戳 */
  end_time: number;
}
/** 拉取理赔摘要 —— 返回体。 */
export interface BusinessInsuranceFreightGetsummaryResp {
  /** 投保总数 */
  total?: number;
  /** 理赔总数 */
  claim_num?: number;
  /** 理赔成功数 */
  claim_succ_num?: number;
  /** 当前保费，单位: 分 */
  premium?: number;
  /** 当前账号余额，单位: 分 */
  funds?: number;
  /** 是否不能投保，系统安全原因不能投保 */
  need_close?: boolean;
}

/** 开通无忧退货 —— 请求体（文档未列字段，放行任意键）。 */
export type BusinessInsuranceFreightOpenBody = Record<string, unknown>;
/** 开通无忧退货 —— 返回体。 */
export interface BusinessInsuranceFreightOpenResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 查询开通状态 —— 请求体（文档未列字段，放行任意键）。 */
export type BusinessInsuranceFreightQueryOpenBody = Record<string, unknown>;
/** 查询开通状态 —— 返回体。 */
export interface BusinessInsuranceFreightQueryOpenResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 是否开通 */
  is_open?: number;
}

/** 充值保费退款 —— 请求体（文档未列字段，放行任意键）。 */
export type BusinessInsuranceFreightRefundBody = Record<string, unknown>;
/** 充值保费退款 —— 返回体。 */
export interface BusinessInsuranceFreightRefundResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 设置保费告警余额 —— 请求体。 */
export interface BusinessInsuranceFreightUpdateNotifyFundsBody {
  /** 通知的金额（单位：分；设置为0不通知） */
  notify_funds: number;
}
/** 设置保费告警余额 —— 返回体。 */
export interface BusinessInsuranceFreightUpdateNotifyFundsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 推送已绑定物流轨迹信息 —— 请求体。 */
export interface ExpressDeliveryPathnotifyBody {
  /** 寄件人 */
  sender: Record<string, unknown>;
  /** 收件人 */
  receiver: Record<string, unknown>;
  /** 运单号 */
  waybill_id: string;
  /** 当前需要推送消息的轨迹 */
  path: Record<string, unknown>;
  /** 运单创建时间，unix时间戳（秒） */
  create_time: number;
}
/** 推送已绑定物流轨迹信息 —— 返回体。 */
export interface ExpressDeliveryPathnotifyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户是否绑定 0-未绑定 1-已绑定 */
  exist?: number;
}

/** 用户手机状态查询 —— 请求体。 */
export interface ExpressDeliveryUserqueryBody {
  /** 手机号 */
  phone: string;
}
/** 用户手机状态查询 —— 返回体。 */
export interface ExpressDeliveryUserqueryResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户是否绑定 0-未绑定 1-已绑定 */
  exist?: number;
}

/** 创建配送单 —— 请求体。 */
export interface ExpressIntracityAddorderBody {
  /** 微信门店编号 */
  wx_store_id: string;
  /** 门店订单编号。同一个门店订单编号要保证唯一，相同的订单号会重入 */
  store_order_id: string;
  /** 收货用户openid */
  user_openid: string;
  /** 收货用户地址经度 */
  user_lng: number;
  /** 收货用户地址维度 */
  user_lat: number;
  /** 收货用户详细地址 */
  user_address: string;
  /** 收货用户姓名 */
  user_name: string;
  /** 收货用户电话。11位手机号或11位带区号的固话:020-8080880 */
  user_phone: string;
  /** 订单序号。用于配送员快速寻找到匹配的商品 */
  order_seq?: string;
  /** 验证码类型 */
  verify_code_type?: string;
  /** 跳转商家订单页面路径。物流轨迹页面跳转到商家小程序的订单页面路径参数，期望向用户展示商品订单详情 */
  order_detail_path: string;
  /** 订单状态回调地址。回调协议详细查看下方其他说明。 */
  callback_url?: string;
  /** 1:使用沙箱环境; 使用测试沙箱环境，不需要充值运费就可以生成测试订单 */
  use_sandbox?: number;
  /** 商品信息 */
  cargo?: Record<string, unknown>;
}
/** 创建配送单 —— 返回体。 */
export interface ExpressIntracityAddorderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 微信门店编号。以下字段在请求成功时返回 */
  wx_store_id?: string;
  /** 微信订单编号 */
  wx_order_id?: string;
  /** 门店订单编号 */
  store_order_id?: string;
  /** 配送运力 */
  service_trans_id?: string;
  /** 配送距离，单位：米 */
  distance?: number;
  /** 运力订单号 */
  trans_order_id?: string;
  /** 运力配送单号，是否返回取决于运力 */
  waybill_id?: string;
  /** 配送费，单位：分 */
  fee?: number;
  /** 取货码 */
  fetch_code?: string;
  /** 取货序号 */
  order_seq?: string;
}

/** 开通门店权限 —— 请求体（文档未列字段，放行任意键）。 */
export type ExpressIntracityApplyBody = Record<string, unknown>;
/** 开通门店权限 —— 返回体。 */
export interface ExpressIntracityApplyResp {
  /** 错误码。0:请求成功，其他：请求失败 */
  errcode?: number;
  /** 错误信息。 */
  errmsg?: string;
}

/** 门店余额查询 —— 请求体。 */
export interface ExpressIntracityBalancequeryBody {
  /** 微信门店编号。pay_mode = PAY_MODE_STORE时必传，不传pay_mode时必传wx_store_id */
  wx_store_id?: string;
  /** 运力ID。查询门店在指定运力ID充值的余额，不指定则查询全部 */
  service_trans_id?: string;
  /** 充值/扣费主体。门店：PAY_MODE_STORE；小程序:PAY_MODE_APP；服务商：PAY_MODE_COMPONENT，不传pay_mode默认pay_mode=PAY_MODE_STOR */
  pay_mode?: string;
}
/** 门店余额查询 —— 返回体。 */
export interface ExpressIntracityBalancequeryResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息。 */
  errmsg?: string;
  /** 门店ID。以下信息在请求成功时返回 */
  wx_store_id?: string;
  /** appid */
  appid?: string;
  /** 总余额 */
  all_balance?: number;
  /** 余额详情 */
  balance_detail?: Record<string, unknown>;
}

/** 取消配送单 —— 请求体。 */
export interface ExpressIntracityCancelorderBody {
  /** 微信门店编号.wx_store_id和store_order_id需要成对出现 */
  wx_store_id?: string;
  /** wx_store_id和store_order_id需要成对出现 */
  store_order_id?: string;
  /** 可以单独使用wx_order_id取消订单 */
  wx_order_id?: string;
  /** 取消原因 */
  cancel_reason_id: number;
  /** 取消原因描述 */
  cancel_reason?: string;
}
/** 取消配送单 —— 返回体。 */
export interface ExpressIntracityCancelorderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 微信门店编号。以下字段在请求成功时返回 */
  wx_store_id?: string;
  /** 微信订单号 */
  wx_order_id?: string;
  /** 门店订单号 */
  store_order_id?: string;
  /** 订单状态，详情看其他说明订单状态列表 */
  order_status?: number;
  /** 小程序appid */
  appid?: string;
  /** 违约金。取消配送途中的订单，需要扣减违约金 */
  deductfee?: number;
}

/** 创建门店 —— 请求体。 */
export interface ExpressIntracityCreatestoreBody {
  /** 自定义门店编号 */
  out_store_id?: string;
  /** 门店名称 */
  store_name?: string;
  /** 运力偏好。1：价格优先，2：运力优先, 默认价格优先 */
  order_pattern?: number;
  /** 优先使用的运力ID。order_pattern = 2时必填 */
  service_trans_prefer?: string;
  /** 门店地址信息。务必要传入正确的门店地址作为发货地址 */
  address_info?: Record<string, unknown>;
}
/** 创建门店 —— 返回体。 */
export interface ExpressIntracityCreatestoreResp {
  /** 错误码。0:请求成功，其他：请求失败 */
  errcode?: number;
  /** 错误信息。 */
  errmsg?: string;
  /** 微信门店编号，在请求成功时返回 */
  wx_store_id?: string;
  /** 小程序appid，在请求成功时返回 */
  appid?: string;
  /** 自定义门店ID，在请求成功时返回 */
  out_store_id?: string;
}

/** 查询支持同城配送的城市 —— 请求体。 */
export interface ExpressIntracityGetcityBody {
  /** 返回指定运力的支持城市信息。SFTC:顺丰同城，DADA:达达，不传则返回所有结果 */
  service_trans_id?: string;
}
/** 查询支持同城配送的城市 —— 返回体。 */
export interface ExpressIntracityGetcityResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 运力支持的城市信息 */
  support_list?: Record<string, unknown>;
}

/** 查询扣费主体 —— 请求体。 */
export interface ExpressIntracityGetpaymodeBody {
  /** 小程序appid。必须要和access_token匹配 */
  appid: string;
}
/** 查询扣费主体 —— 返回体。 */
export interface ExpressIntracityGetpaymodeResp {
  /** 扣费主体。门店：PAY_MODE_STORE；小程序:PAY_MODE_APP；服务商：PAY_MODE_COMPONENT */
  pay_mode?: string;
  /** 扣费appid。扣费主体为小程序时返回 */
  pay_appid?: string;
  /** 扣费component_appid。扣费主体为服务商时返回 */
  pay_component_appid?: string;
}

/** 模拟回调接口 —— 请求体。 */
export interface ExpressIntracityMocknotifyBody {
  /** 微信订单号，可以单独使用wx_order_id */
  wx_order_id?: string;
  /** 门店ID wx_store_id和store_order_id需要成对出现 */
  wx_store_id?: string;
  /** 门店订单号 wx_store_id和store_order_id需要成对出现 */
  store_order_id?: string;
  /** 订单状态，详见其他说明订单状态列表 */
  order_status: number;
}
/** 模拟回调接口 —— 返回体。 */
export interface ExpressIntracityMocknotifyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询运费 —— 请求体。 */
export interface ExpressIntracityPreaddorderBody {
  /** 微信门店编号 */
  wx_store_id: string;
  /** 收件人姓名 */
  user_name: string;
  /** 收件人手机号 */
  user_phone: string;
  /** 收件用户位置经度 */
  user_lng: number;
  /** 收件用户位置维度 */
  user_lat: number;
  /** 收件用户详细地市 */
  user_address: string;
  /** 商品名称 */
  cargo_name: string;
  /** 商品重量 */
  cargo: Record<string, unknown>;
  /** 是否使用沙箱。1:使用沙箱环境 */
  use_sandbox: number;
}
/** 查询运费 —— 返回体。 */
export type ExpressIntracityPreaddorderResp = Record<string, unknown>;

/** 门店运费流水查询 —— 请求体。 */
export interface ExpressIntracityQueryflowBody {
  /** 微信门店编号 */
  wx_store_id: string;
  /** 流水类型 1:充值流水， 2:消费流水，3:退款流水 */
  flow_type: number;
  /** 运力ID */
  service_trans_id?: string;
  /** 开始时间戳，不传默认返回最近90天的数据 */
  begin_time?: number;
  /** 结束时间戳，不传默认返回最近90天的数据 */
  end_time?: number;
  /** 扣费主体。门店:PAY_MODE STORE；小程序:PAY_MODE APP；服务商:PAY_MODE_COMPONENT */
  pay_mode: string;
}
/** 门店运费流水查询 —— 返回体。 */
export interface ExpressIntracityQueryflowResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 流水数组。以下信息在请求成功时返回 */
  flow_list?: unknown[];
  /** 总支付金额 */
  total_pay_amt?: number;
  /** 总退款金额 */
  total_refund_amt?: number;
  /** 总违约金，消费流水返回 */
  total_deduct_amt?: number;
}

/** 查询配送单 —— 请求体。 */
export interface ExpressIntracityQueryorderBody {
  /** 微信门店编号.wx_store_id和store_order_id需要成对出现 */
  wx_store_id?: string;
  /** wx_store_id和store_order_id需要成对出现 */
  store_order_id?: string;
  /** 可以单独使用wx_order_id查询 */
  wx_order_id?: string;
}
/** 查询配送单 —— 返回体。 */
export interface ExpressIntracityQueryorderResp {
  /** 微信订单号 */
  wx_order_id?: string;
  /** 门店订单号 */
  store_order_id?: string;
  /** 微信门店编号 */
  wx_store_id?: string;
  /** 订单状态 */
  order_status?: number;
  /** appid */
  appid?: string;
  /** 收件用户openid */
  user_openid?: string;
  /** 运力ID */
  service_trans_id?: string;
  /** 运力订单号 */
  delivery_no?: string;
  /** 配送距离，单位：米 */
  distance?: number;
  /** 实际支付费用，单位：分 */
  actualfee?: number;
  /** 违约金，单位：分 */
  deductfee?: number;
  /** 发单时间 */
  create_time?: number;
  /** 配送员接单时间，时间戳 */
  accept_time?: number;
  /** 配送员送达时间，时间戳 */
  finish_time?: number;
  /** 配送员取货时间，时间戳 */
  fetch_time?: number;
  /** 取消时间，时间戳 */
  cancel_time?: number;
  /** 预期送达时间 */
  expected_finish_time?: number;
  /** 取货码，商家验证 */
  fetch_code?: string;
  /** 收货码，收货人验证 */
  recv_code?: string;
  /** 订单序号，用于配送员识别 */
  order_seq?: string;
  /** 配送员信息 */
  transporter_info?: Record<string, unknown>;
  /** 门店信息 */
  store_info?: Record<string, unknown>;
  /** 收货人信息 */
  receiver_info?: Record<string, unknown>;
  /** 商品信息 */
  cargo_info?: Record<string, unknown>;
}

/** 查询门店 —— 请求体。 */
export interface ExpressIntracityQuerystoreBody {
  /** 微信门店编号 */
  wx_store_id?: string;
  /** 自定义门店编号 */
  out_store_id?: string;
}
/** 查询门店 —— 返回体。 */
export interface ExpressIntracityQuerystoreResp {
  /** 错误码。0:请求成功，其他：请求失败 */
  errcode?: number;
  /** 错误信息。 */
  errmsg?: string;
  /** 门店信息列表，在请求成功时返回 */
  store_list?: unknown[];
  /** 符合条件的门店总数 */
  total?: number;
  /** 小程序appid */
  appid?: string;
}

/** 设置扣费主体 —— 请求体。 */
export interface ExpressIntracitySetpaymodeBody {
  /** 小程序appid。必须要和access_token匹配 */
  appid: string;
  /** 扣费主体。门店：PAY_MODE_STORE；小程序:PAY_MODE_APP；服务商：PAY_MODE_COMPONENT */
  pay_mode: string;
}
/** 设置扣费主体 —— 返回体。 */
export interface ExpressIntracitySetpaymodeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 门店运费退款 —— 请求体。 */
export interface ExpressIntracityStorerefundBody {
  /** 微信门店编号（pay_mode = PAY_MODE_STORE时必传，不传pay_mode时必传wx_store_id） */
  wx_store_id?: string;
  /** 充值/扣费主体，不传pay_mode默认pay_mode=PAY_MODE_STORE */
  pay_mode?: string;
  /** 运力ID */
  service_trans_id: string;
}
/** 门店运费退款 —— 返回体。 */
export interface ExpressIntracityStorerefundResp {
  /** 错误码（0:请求成功，其他：请求失败） */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 小程序appid */
  appid?: string;
  /** 微信门店编号 */
  wx_store_id?: string;
  /** 退款金额（单位：分） */
  refund_amount?: number;
}

/** 门店运费充值 —— 请求体。 */
export interface ExpressIntracityStorechargeBody {
  /** 微信门店编号 pay_mode = PAY_MODE_STORE时必传，不传pay_mode时必传wx_store_id */
  wx_store_id?: string;
  /** 运力ID */
  service_trans_id: string;
  /** 充值金额 单位：分, 50元起充 */
  amount: number;
  /** 充值主体 门店：PAY_MODE_STORE；小程序:PAY_MODE_APP；服务商：PAY_MODE_COMPONENT，不传pay_mode默认pay_mode=PAY_MODE_STORE */
  pay_mode?: string;
}
/** 门店运费充值 —— 返回体。 */
export interface ExpressIntracityStorechargeResp {
  /** 错误码。0:请求成功，其他：请求失败 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 充值页面地址，请求成功时返回 */
  payurl?: string;
  /** 小程序appid，请求成功时返回 */
  appid?: string;
  /** 微信门店编号，请求成功时返回 */
  wx_store_id?: string;
}

/** 更新门店 —— 请求体。 */
export interface ExpressIntracityUpdatestoreBody {
  /** 门店编号 */
  keys: Record<string, unknown>;
  /** 更新内容 */
  content: Record<string, unknown>;
}
/** 更新门店 —— 返回体。 */
export interface ExpressIntracityUpdatestoreResp {
  /** 错误码。0:请求成功，其他：请求失败 */
  errcode?: number;
  /** 错误信息。 */
  errmsg?: string;
}

/** 调用服务市场接口 —— 请求体。 */
export interface ServicemarketBody {
  /** 服务 ID，在每个接口详情页面中均可以找到服务id，请查看文档末尾截图 */
  service: string;
  /** 接口名；在每个接口详情页面中均可以找到api name，请查看文档末尾截图 */
  api: string;
  /** 服务提供方接口定义的 JSON 格式的数据，请看每个服务的接口文档详情 */
  data: string;
  /** 随机字符串 ID，调用方请求的唯一标识 */
  client_msg_id: string;
  /** 是否是异步API，当是异步调用时，必须填true */
  async?: boolean;
}
/** 调用服务市场接口 —— 返回体。 */
export interface ServicemarketResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 回包信息 */
  data?: string;
  /** 异步调用才会返回，唯一id */
  request_id?: string;
}

/** 异步获取处理数据 —— 请求体。 */
export interface ServicemarketretrieveBody {
  /** 调用接口invokeService接口返回的request_id */
  request_id: string;
}
/** 异步获取处理数据 —— 返回体。 */
export interface ServicemarketretrieveResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 回包信息 */
  data?: string;
  /** 唯一id */
  request_id?: string;
}

/** 搜一搜数据推送 —— 请求体。 */
export interface SearchWxaapiSubmitpagesBody {
  /** 请求提交的小程序页面信息数组，一次可提交多个页面的信息。（注意：path+query标识唯一一个页面，微信侧会使用这个信息构造唯一id） */
  pages: unknown[];
}
/** 搜一搜数据推送 —— 返回体。 */
export interface SearchWxaapiSubmitpagesResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 端点元数据。 */
export interface EndpointMeta {
  method: CallOptions['method'];
  path: string;
  title: string;
  cat: string;
  doc: string;
}

/** 全部端点元数据（operationId → 元数据）。 */
export const endpoints = {
  // ===== B2b =====
  /** 添加分账方 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_addprofitsharingaccount.html */
  b2bAddprofitsharingaccount: {
    method: 'POST',
    path: '/retail/B2b/addprofitsharingaccount',
    title: '添加分账方',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_addprofitsharingaccount.html',
  },
  /** 关闭订单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_closeb2border.html */
  b2bCloseb2border: {
    method: 'POST',
    path: '/retail/B2b/closeb2border',
    title: '关闭订单',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_closeb2border.html',
  },
  /** 请求分账 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_createprofitsharingorder.html */
  b2bCreateprofitsharingorder: {
    method: 'POST',
    path: '/retail/B2b/createprofitsharingorder',
    title: '请求分账',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_createprofitsharingorder.html',
  },
  /** 跳转银行转账页面 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_createwqflink.html */
  b2bCreatewqflink: {
    method: 'POST',
    path: '/retail/B2b/createwqflink',
    title: '跳转银行转账页面',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_createwqflink.html',
  },
  /** 删除分账方 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_delprofitsharingaccount.html */
  b2bDelprofitsharingaccount: {
    method: 'POST',
    path: '/retail/B2b/delprofitsharingaccount',
    title: '删除分账方',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_delprofitsharingaccount.html',
  },
  /** 接口下载交易账单与资金账单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_downloadbill.html */
  b2bDownloadbill: {
    method: 'POST',
    path: '/retail/B2b/downloadbill',
    title: '接口下载交易账单与资金账单',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_downloadbill.html',
  },
  /** 完成分账 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_finishprofitsharingorder.html */
  b2bFinishprofitsharingorder: {
    method: 'POST',
    path: '/retail/B2b/finishprofitsharingorder',
    title: '完成分账',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_finishprofitsharingorder.html',
  },
  /** 获取密钥AppKey @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getappkey.html */
  b2bGetappkey: {
    method: 'POST',
    path: '/retail/B2b/getappkey',
    title: '获取密钥AppKey',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getappkey.html',
  },
  /** 查询账户余额 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getmchbalance.html */
  b2bGetmchbalance: {
    method: 'POST',
    path: '/retail/B2b/getmchbalance',
    title: '查询账户余额',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getmchbalance.html',
  },
  /** 获取小程序下所有商户的信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getmchinfo.html */
  b2bGetmchinfo: {
    method: 'POST',
    path: '/retail/B2b/getmchinfo',
    title: '获取小程序下所有商户的信息',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getmchinfo.html',
  },
  /** 查询订单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getorder.html */
  b2bGetorder: {
    method: 'POST',
    path: '/retail/B2b/getorder',
    title: '查询订单',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getorder.html',
  },
  /** 查询退款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getrefund.html */
  b2bGetrefund: {
    method: 'POST',
    path: '/retail/B2b/getrefund',
    title: '查询退款',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getrefund.html',
  },
  /** 查询银行转账的技术服务费率 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getwqfchargefee.html */
  b2bGetwqfchargefee: {
    method: 'POST',
    path: '/retail/B2b/getwqfchargefee',
    title: '查询银行转账的技术服务费率',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getwqfchargefee.html',
  },
  /** 发起手动提现 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_manualwithdraw.html */
  b2bWithdraw: {
    method: 'POST',
    path: '/retail/B2b/withdraw',
    title: '发起手动提现',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_manualwithdraw.html',
  },
  /** 查询分账方 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_queryprofitsharingaccount.html */
  b2bQueryprofitsharingaccount: {
    method: 'POST',
    path: '/retail/B2b/queryprofitsharingaccount',
    title: '查询分账方',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_queryprofitsharingaccount.html',
  },
  /** 查询分账结果 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_queryprofitsharingorder.html */
  b2bQueryprofitsharingorder: {
    method: 'POST',
    path: '/retail/B2b/queryprofitsharingorder',
    title: '查询分账结果',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_queryprofitsharingorder.html',
  },
  /** 查询分账剩余金额 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_queryprofitsharingremainamt.html */
  b2bQueryprofitsharingremainamt: {
    method: 'POST',
    path: '/retail/B2b/queryprofitsharingremainamt',
    title: '查询分账剩余金额',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_queryprofitsharingremainamt.html',
  },
  /** 查询分账回退结果 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_queryrefundprofitsharingorder.html */
  b2bQueryrefundprofitsharingorder: {
    method: 'POST',
    path: '/retail/B2b/queryrefundprofitsharingorder',
    title: '查询分账回退结果',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_queryrefundprofitsharingorder.html',
  },
  /** 查询提现状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_querywithdraw.html */
  b2bQuerywithdraw: {
    method: 'POST',
    path: '/retail/B2b/querywithdraw',
    title: '查询提现状态',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_querywithdraw.html',
  },
  /** 退款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_refundorder.html */
  b2bRefund: {
    method: 'POST',
    path: '/retail/B2b/refund',
    title: '退款',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_refundorder.html',
  },
  /** 请求分账回退 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_refundprofitsharing.html */
  b2bRefundprofitsharing: {
    method: 'POST',
    path: '/retail/B2b/refundprofitsharing',
    title: '请求分账回退',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_refundprofitsharing.html',
  },
  /** 申请开通银行转账 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_registeronlywqf.html */
  b2bRegisteronlywqf: {
    method: 'POST',
    path: '/retail/B2b/registeronlywqf',
    title: '申请开通银行转账',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_registeronlywqf.html',
  },
  /** 查询商户号开通状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_retailgetmchorder.html */
  b2bRetailgetmchorder: {
    method: 'POST',
    path: '/retail/B2b/retailgetmchorder',
    title: '查询商户号开通状态',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_retailgetmchorder.html',
  },
  /** 商户号进件 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_retailregistermch.html */
  b2bRetailregistermch: {
    method: 'POST',
    path: '/retail/B2b/retailregistermch',
    title: '商户号进件',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_retailregistermch.html',
  },
  /** 上传商户图片 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_retailuploadmchfile.html */
  b2bRetailuploadmchfile: {
    method: 'POST',
    path: '/retail/B2b/retailuploadmchfile',
    title: '上传商户图片',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_retailuploadmchfile.html',
  },
  /** 微信支付自动提现接口 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_setautowithdraw.html */
  b2bSetautowithdraw: {
    method: 'POST',
    path: '/retail/B2b/setautowithdraw',
    title: '微信支付自动提现接口',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_setautowithdraw.html',
  },
  /** 报名微信支付技术服务费优惠活动 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_setmchprofitrate.html */
  b2bSetmchprofitrate: {
    method: 'POST',
    path: '/retail/B2b/setmchprofitrate',
    title: '报名微信支付技术服务费优惠活动',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_setmchprofitrate.html',
  },
  /** 报名银行转账技术服务费优惠活动 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_updatewqfchargefee.html */
  b2bUpdatewqfchargefee: {
    method: 'POST',
    path: '/retail/B2b/updatewqfchargefee',
    title: '报名银行转账技术服务费优惠活动',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_updatewqfchargefee.html',
  },
  /** 消息效果数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/notify/api_getretailmessagelist.html */
  businessGetretailmessagelist: {
    method: 'POST',
    path: '/wxa/business/getretailmessagelist',
    title: '消息效果数据',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/notify/api_getretailmessagelist.html',
  },
  /** 模板消息列表及下发 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/notify/api_retailnotifybusiness.html */
  businessRetailnotifybusiness: {
    method: 'POST',
    path: '/wxa/business/retailnotifybusiness',
    title: '模板消息列表及下发',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/notify/api_retailnotifybusiness.html',
  },
  /** 预录入门店信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/store_assistant/api_batchcreateretail.html */
  businessBatchcreateretail: {
    method: 'POST',
    path: '/wxa/business/batchcreateretail',
    title: '预录入门店信息',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/store_assistant/api_batchcreateretail.html',
  },
  /** 门店信息查询 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/store_assistant/api_getretailinfo.html */
  businessGetretailinfo: {
    method: 'POST',
    path: '/wxa/business/getretailinfo',
    title: '门店信息查询',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/store_assistant/api_getretailinfo.html',
  },
  /** 全量授权门店查询 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/store_assistant/api_getretailopenidlist.html */
  businessGetretailopenidlist: {
    method: 'POST',
    path: '/wxa/business/getretailopenidlist',
    title: '全量授权门店查询',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/store_assistant/api_getretailopenidlist.html',
  },
  /** 开通流程 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/store_assistant/api_retailbusinessapply.html */
  businessRetailbusinessapply: {
    method: 'POST',
    path: '/wxa/business/retailbusinessapply',
    title: '开通流程',
    cat: 'B2b',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/store_assistant/api_retailbusinessapply.html',
  },
  // ===== VirtualPayment =====
  /** 绑定广告金充值账户 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_bind_transfer_accout.html */
  bindTransferAccout: {
    method: 'POST',
    path: '/xpay/bind_transfer_accout',
    title: '绑定广告金充值账户',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_bind_transfer_accout.html',
  },
  /** 代币支付退款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_cancel_currency_pay.html */
  cancelCurrencyPay: {
    method: 'POST',
    path: '/xpay/cancel_currency_pay',
    title: '代币支付退款',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_cancel_currency_pay.html',
  },
  /** 商家解约 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_cancel_subscribe_contract.html */
  cancelSubscribeContract: {
    method: 'POST',
    path: '/xpay/cancel_subscribe_contract',
    title: '商家解约',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_cancel_subscribe_contract.html',
  },
  /** 完成投诉处理 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_complete_complaint.html */
  completeComplaint: {
    method: 'POST',
    path: '/xpay/complete_complaint',
    title: '完成投诉处理',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_complete_complaint.html',
  },
  /** 充值广告金 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_create_funds_bill.html */
  createFundsBill: {
    method: 'POST',
    path: '/xpay/create_funds_bill',
    title: '充值广告金',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_create_funds_bill.html',
  },
  /** 创建提现单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_create_withdraw_order.html */
  createWithdrawOrder: {
    method: 'POST',
    path: '/xpay/create_withdraw_order',
    title: '创建提现单',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_create_withdraw_order.html',
  },
  /** 扣减代币 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_currency_pay.html */
  currencyPay: {
    method: 'POST',
    path: '/xpay/currency_pay',
    title: '扣减代币',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_currency_pay.html',
  },
  /** 下载广告金对应的商户订单信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_download_adverfunds_order.html */
  downloadAdverfundsOrder: {
    method: 'POST',
    path: '/xpay/download_adverfunds_order',
    title: '下载广告金对应的商户订单信息',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_download_adverfunds_order.html',
  },
  /** 下载小程序账单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_download_bill.html */
  downloadBill: {
    method: 'POST',
    path: '/xpay/download_bill',
    title: '下载小程序账单',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_download_bill.html',
  },
  /** 获取投诉详情 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_get_complaint_detail.html */
  getComplaintDetail: {
    method: 'POST',
    path: '/xpay/get_complaint_detail',
    title: '获取投诉详情',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_get_complaint_detail.html',
  },
  /** 获取投诉列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_get_complaint_list.html */
  getComplaintList: {
    method: 'POST',
    path: '/xpay/get_complaint_list',
    title: '获取投诉列表',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_get_complaint_list.html',
  },
  /** 获取协商历史 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_get_negotiation_history.html */
  getNegotiationHistory: {
    method: 'POST',
    path: '/xpay/get_negotiation_history',
    title: '获取协商历史',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_get_negotiation_history.html',
  },
  /** 获取微信支付反馈投诉图片的签名头部 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_get_upload_file_sign.html */
  getUploadFileSign: {
    method: 'POST',
    path: '/xpay/get_upload_file_sign',
    title: '获取微信支付反馈投诉图片的签名头部',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_get_upload_file_sign.html',
  },
  /** 通知已发货完成 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_notify_provide_goods.html */
  notifyProvideGoods: {
    method: 'POST',
    path: '/xpay/notify_provide_goods',
    title: '通知已发货完成',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_notify_provide_goods.html',
  },
  /** 代币赠送 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_present_currency.html */
  presentCurrency: {
    method: 'POST',
    path: '/xpay/present_currency',
    title: '代币赠送',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_present_currency.html',
  },
  /** 查询广告金发放记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_adver_funds.html */
  queryAdverFunds: {
    method: 'POST',
    path: '/xpay/query_adver_funds',
    title: '查询广告金发放记录',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_adver_funds.html',
  },
  /** 查询商家账户可提现余额 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_biz_balance.html */
  queryBizBalance: {
    method: 'POST',
    path: '/xpay/query_biz_balance',
    title: '查询商家账户可提现余额',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_biz_balance.html',
  },
  /** 查询下载订单任务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_download_order.html */
  queryDownloadOrder: {
    method: 'POST',
    path: '/xpay/query_download_order',
    title: '查询下载订单任务',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_download_order.html',
  },
  /** 查询广告金充值记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_funds_bill.html */
  queryFundsBill: {
    method: 'POST',
    path: '/xpay/query_funds_bill',
    title: '查询广告金充值记录',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_funds_bill.html',
  },
  /** 查询创建的订单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_order.html */
  queryOrder: {
    method: 'POST',
    path: '/xpay/query_order',
    title: '查询创建的订单',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_order.html',
  },
  /** 查询批量发布道具任务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_publish_goods.html */
  queryPublishGoods: {
    method: 'POST',
    path: '/xpay/query_publish_goods',
    title: '查询批量发布道具任务',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_publish_goods.html',
  },
  /** 查询广告金回收记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_recover_bill.html */
  queryRecoverBill: {
    method: 'POST',
    path: '/xpay/query_recover_bill',
    title: '查询广告金回收记录',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_recover_bill.html',
  },
  /** 查询签约关系 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_subscribe_contract.html */
  querySubscribeContract: {
    method: 'POST',
    path: '/xpay/query_subscribe_contract',
    title: '查询签约关系',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_subscribe_contract.html',
  },
  /** 查询广告金充值账户 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_transfer_account.html */
  queryTransferAccount: {
    method: 'POST',
    path: '/xpay/query_transfer_account',
    title: '查询广告金充值账户',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_transfer_account.html',
  },
  /** 查询批量上传道具任务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_upload_goods.html */
  queryUploadGoods: {
    method: 'POST',
    path: '/xpay/query_upload_goods',
    title: '查询批量上传道具任务',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_upload_goods.html',
  },
  /** 查询代币余额 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_user_balance.html */
  queryUserBalance: {
    method: 'POST',
    path: '/xpay/query_user_balance',
    title: '查询代币余额',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_user_balance.html',
  },
  /** 查询提现单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_withdraw_order.html */
  queryWithdrawOrder: {
    method: 'POST',
    path: '/xpay/query_withdraw_order',
    title: '查询提现单',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_withdraw_order.html',
  },
  /** 启动订单退款任务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_refund_order.html */
  refundOrder: {
    method: 'POST',
    path: '/xpay/refund_order',
    title: '启动订单退款任务',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_refund_order.html',
  },
  /** 回复用户 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_response_complaint.html */
  responseComplaint: {
    method: 'POST',
    path: '/xpay/response_complaint',
    title: '回复用户',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_response_complaint.html',
  },
  /** 预通知扣款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_send_subscribe_pre_payment.html */
  sendSubscribePrePayment: {
    method: 'POST',
    path: '/xpay/send_subscribe_pre_payment',
    title: '预通知扣款',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_send_subscribe_pre_payment.html',
  },
  /** 下载支付订单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_start_download_order.html */
  startDownloadOrder: {
    method: 'POST',
    path: '/xpay/start_download_order',
    title: '下载支付订单',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_start_download_order.html',
  },
  /** 启动批量发布道具任务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_start_publish_goods.html */
  startPublishGoods: {
    method: 'POST',
    path: '/xpay/start_publish_goods',
    title: '启动批量发布道具任务',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_start_publish_goods.html',
  },
  /** 批量上传道具 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_start_upload_goods.html */
  startUploadGoods: {
    method: 'POST',
    path: '/xpay/start_upload_goods',
    title: '批量上传道具',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_start_upload_goods.html',
  },
  /** 发起订阅扣款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_submit_subscribe_pay_order.html */
  submitSubscribePayOrder: {
    method: 'POST',
    path: '/xpay/submit_subscribe_pay_order',
    title: '发起订阅扣款',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_submit_subscribe_pay_order.html',
  },
  /** 上传媒体文件 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_upload_vp_file.html */
  uploadVpFile: {
    method: 'POST',
    path: '/xpay/upload_vp_file',
    title: '上传媒体文件',
    cat: 'VirtualPayment',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_upload_vp_file.html',
  },
  // ===== charge =====
  /** 获取小程序某个付费能力的最近用量数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/charge/api_getrecentaverageusage.html */
  chargeUsageGetRecentAverage: {
    method: 'GET',
    path: '/wxa/charge/usage/get_recent_average',
    title: '获取小程序某个付费能力的最近用量数据',
    cat: 'charge',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/charge/api_getrecentaverageusage.html',
  },
  /** 查询购买资源包的用量情况 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/charge/api_getusagedetail.html */
  chargeUsageGet: {
    method: 'GET',
    path: '/wxa/charge/usage/get',
    title: '查询购买资源包的用量情况',
    cat: 'charge',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/charge/api_getusagedetail.html',
  },
  // ===== cityservice =====
  /** 校验实名信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/basic/api_checkrealnameinfo.html */
  realnameCheckrealnameinfo: {
    method: 'POST',
    path: '/intp/realname/checkrealnameinfo',
    title: '校验实名信息',
    cat: 'cityservice',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/basic/api_checkrealnameinfo.html',
  },
  /** 消息通路发消息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/basic/api_cityservice_sendmsgdata.html */
  cityserviceSendmsgdata: {
    method: 'POST',
    path: '/cityservice/sendmsgdata',
    title: '消息通路发消息',
    cat: 'cityservice',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/basic/api_cityservice_sendmsgdata.html',
  },
  /** 获取城市服务限定页面链接 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/basic/api_cityserviceservicehomepath.html */
  cityserviceGetservicepath: {
    method: 'POST',
    path: '/cityservice/getservicepath',
    title: '获取城市服务限定页面链接',
    cat: 'cityservice',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/basic/api_cityserviceservicehomepath.html',
  },
  /** 仿原生跳转 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/basic/api_transportcode_getbusinessview.html */
  transportcodeGetbusinessview: {
    method: 'POST',
    path: '/intp/transportcode/getbusinessview',
    title: '仿原生跳转',
    cat: 'cityservice',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/basic/api_transportcode_getbusinessview.html',
  },
  /** 查询用户实名API @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_cityservice_getmedrealname.html */
  cityserviceGetmedrealname: {
    method: 'POST',
    path: '/cityservice/getmedrealname',
    title: '查询用户实名API',
    cat: 'cityservice',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_cityservice_getmedrealname.html',
  },
  /** 查询用户是否开通 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_cityservice_getmsgrelation.html */
  cityserviceGetmsgrelation: {
    method: 'POST',
    path: '/cityservice/getmsgrelation',
    title: '查询用户是否开通',
    cat: 'cityservice',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_cityservice_getmsgrelation.html',
  },
  /** 查询所有公告 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_intp_eldermed_gethospnoticelist.html */
  eldermedicalGethospnoticelist: {
    method: 'POST',
    path: '/intp/eldermedical/gethospnoticelist',
    title: '查询所有公告',
    cat: 'cityservice',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_intp_eldermed_gethospnoticelist.html',
  },
  /** 正式发布公告 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_intp_eldermed_publichopsnotice.html */
  eldermedicalPublichopsnotice: {
    method: 'POST',
    path: '/intp/eldermedical/publichopsnotice',
    title: '正式发布公告',
    cat: 'cityservice',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_intp_eldermed_publichopsnotice.html',
  },
  /** 公告草稿预览设置 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_previewhopsnotice.html */
  eldermedicalPreviewhopsnotice: {
    method: 'POST',
    path: '/intp/eldermedical/previewhopsnotice',
    title: '公告草稿预览设置',
    cat: 'cityservice',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_previewhopsnotice.html',
  },
  /** 添加公告草稿 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_sethopsnotice.html */
  eldermedicalSethopsnotice: {
    method: 'POST',
    path: '/intp/eldermedical/sethopsnotice',
    title: '添加公告草稿',
    cat: 'cityservice',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_sethopsnotice.html',
  },
  /** 消息推送接口 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/medicalassistant/api_cityservice_sendchannelmsg.html */
  cityserviceSendchannelmsg: {
    method: 'POST',
    path: '/cityservice/sendchannelmsg',
    title: '消息推送接口',
    cat: 'cityservice',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/medicalassistant/api_cityservice_sendchannelmsg.html',
  },
  // ===== cloudbase =====
  /** 新增集合 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_adddatabasecollection.html */
  tcbDatabasecollectionadd: {
    method: 'POST',
    path: '/tcb/databasecollectionadd',
    title: '新增集合',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_adddatabasecollection.html',
  },
  /** 数据库插入记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_adddatabaseitem.html */
  tcbDatabaseadd: {
    method: 'POST',
    path: '/tcb/databaseadd',
    title: '数据库插入记录',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_adddatabaseitem.html',
  },
  /** 数据库聚合 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_aggregatedatabase.html */
  tcbDatabaseaggregate: {
    method: 'POST',
    path: '/tcb/databaseaggregate',
    title: '数据库聚合',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_aggregatedatabase.html',
  },
  /** 删除集合 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_deletedatabasecollection.html */
  tcbDatabasecollectiondelete: {
    method: 'POST',
    path: '/tcb/databasecollectiondelete',
    title: '删除集合',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_deletedatabasecollection.html',
  },
  /** 数据库删除记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_deletedatabaseitem.html */
  tcbDatabasedelete: {
    method: 'POST',
    path: '/tcb/databasedelete',
    title: '数据库删除记录',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_deletedatabaseitem.html',
  },
  /** 数据库导出 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_exportdatabaseitem.html */
  tcbDatabasemigrateexport: {
    method: 'POST',
    path: '/tcb/databasemigrateexport',
    title: '数据库导出',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_exportdatabaseitem.html',
  },
  /** 获取集合信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_getdatabasecollection.html */
  tcbDatabasecollectionget: {
    method: 'POST',
    path: '/tcb/databasecollectionget',
    title: '获取集合信息',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_getdatabasecollection.html',
  },
  /** 统计集合记录数 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_getdatabasecount.html */
  tcbDatabasecount: {
    method: 'POST',
    path: '/tcb/databasecount',
    title: '统计集合记录数',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_getdatabasecount.html',
  },
  /** 数据库迁移状态查询 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_getdatabasemigratestatus.html */
  tcbDatabasemigratequeryinfo: {
    method: 'POST',
    path: '/tcb/databasemigratequeryinfo',
    title: '数据库迁移状态查询',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_getdatabasemigratestatus.html',
  },
  /** 数据库查询记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_getdatabaserecord.html */
  tcbDatabasequery: {
    method: 'POST',
    path: '/tcb/databasequery',
    title: '数据库查询记录',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_getdatabaserecord.html',
  },
  /** 数据库导入 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_importdatabaseitem.html */
  tcbDatabasemigrateimport: {
    method: 'POST',
    path: '/tcb/databasemigrateimport',
    title: '数据库导入',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_importdatabaseitem.html',
  },
  /** 更新数据库索引 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_updatedatabaseindexs.html */
  tcbUpdateindex: {
    method: 'POST',
    path: '/tcb/updateindex',
    title: '更新数据库索引',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_updatedatabaseindexs.html',
  },
  /** 数据库更新记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_updatedatabaserecord.html */
  tcbDatabaseupdate: {
    method: 'POST',
    path: '/tcb/databaseupdate',
    title: '数据库更新记录',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_updatedatabaserecord.html',
  },
  /** 延时调用云函数 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/functions/api_adddelayedfunctiontask.html */
  tcbAdddelayedfunctiontask: {
    method: 'POST',
    path: '/tcb/adddelayedfunctiontask',
    title: '延时调用云函数',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/functions/api_adddelayedfunctiontask.html',
  },
  /** 云开发上报接口 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_cloudbasereportapi.html */
  tcbCloudbasereport: {
    method: 'POST',
    path: '/tcb/cloudbasereport',
    title: '云开发上报接口',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_cloudbasereportapi.html',
  },
  /** 创建发短信任务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_createsendsmstask.html */
  tcbCreatesendsmstask: {
    method: 'POST',
    path: '/tcb/createsendsmstask',
    title: '创建发短信任务',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_createsendsmstask.html',
  },
  /** 描述扩展上传文件信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_describeextensionuploadinfo.html */
  tcbDescribeextensionuploadinfo: {
    method: 'POST',
    path: '/tcb/describeextensionuploadinfo',
    title: '描述扩展上传文件信息',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_describeextensionuploadinfo.html',
  },
  /** 查询短信记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_describesmsrecords.html */
  tcbDescribesmsrecords: {
    method: 'POST',
    path: '/tcb/describesmsrecords',
    title: '查询短信记录',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_describesmsrecords.html',
  },
  /** 获取云开发数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_getcloudbasestatistics.html */
  tcbGetstatistics: {
    method: 'POST',
    path: '/tcb/getstatistics',
    title: '获取云开发数据',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_getcloudbasestatistics.html',
  },
  /** 获取实时语音签名 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_getcloudbasevoipsign.html */
  getvoipsign: {
    method: 'POST',
    path: '/wxa/getvoipsign',
    title: '获取实时语音签名',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_getcloudbasevoipsign.html',
  },
  /** 获取腾讯云API调用凭证 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_getcloudtoken.html */
  tcbGetqcloudtoken: {
    method: 'POST',
    path: '/tcb/getqcloudtoken',
    title: '获取腾讯云API调用凭证',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_getcloudtoken.html',
  },
  /** 获取cloudID对应的数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_getopendata.html */
  getopendata: {
    method: 'POST',
    path: '/wxa/getopendata',
    title: '获取cloudID对应的数据',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_getopendata.html',
  },
  /** 发送短信v2 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_newsendcloudbasesms.html */
  tcbSendsmsv2: {
    method: 'POST',
    path: '/tcb/sendsmsv2',
    title: '发送短信v2',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_newsendcloudbasesms.html',
  },
  /** 发送短信 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_sendcloudbasesms.html */
  tcbSendsms: {
    method: 'POST',
    path: '/tcb/sendsms',
    title: '发送短信',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_sendcloudbasesms.html',
  },
  /** 删除文件 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/storage/api_deletetcbcloudfile.html */
  tcbBatchdeletefile: {
    method: 'POST',
    path: '/tcb/batchdeletefile',
    title: '删除文件',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/storage/api_deletetcbcloudfile.html',
  },
  /** 获取文件下载链接 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/storage/api_getdownloadtcbfilelink.html */
  tcbBatchdownloadfile: {
    method: 'POST',
    path: '/tcb/batchdownloadfile',
    title: '获取文件下载链接',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/storage/api_getdownloadtcbfilelink.html',
  },
  /** 获取文件上传链接 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/storage/api_getuploadtcbfilelink.html */
  tcbUploadfile: {
    method: 'POST',
    path: '/tcb/uploadfile',
    title: '获取文件上传链接',
    cat: 'cloudbase',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/storage/api_getuploadtcbfilelink.html',
  },
  // ===== data-analysis =====
  /** 获取用户访问小程序数据概况 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/others/api_getdailysummary.html */
  getweanalysisappiddailysummarytrend: {
    method: 'POST',
    path: '/datacube/getweanalysisappiddailysummarytrend',
    title: '获取用户访问小程序数据概况',
    cat: 'data-analysis',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/others/api_getdailysummary.html',
  },
  /** 获取小程序性能数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/others/api_getperformancedata.html */
  businessPerformanceBoot: {
    method: 'POST',
    path: '/wxa/business/performance/boot',
    title: '获取小程序性能数据',
    cat: 'data-analysis',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/others/api_getperformancedata.html',
  },
  /** 获取小程序用户画像分布 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/others/api_getuserportrait.html */
  getweanalysisappiduserportrait: {
    method: 'POST',
    path: '/datacube/getweanalysisappiduserportrait',
    title: '获取小程序用户画像分布',
    cat: 'data-analysis',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/others/api_getuserportrait.html',
  },
  /** 获取用户小程序访问分布数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/others/api_getvisitdistribution.html */
  getweanalysisappidvisitdistribution: {
    method: 'POST',
    path: '/datacube/getweanalysisappidvisitdistribution',
    title: '获取用户小程序访问分布数据',
    cat: 'data-analysis',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/others/api_getvisitdistribution.html',
  },
  /** 获取访问页面数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/others/api_getvisitpage.html */
  getweanalysisappidvisitpage: {
    method: 'POST',
    path: '/datacube/getweanalysisappidvisitpage',
    title: '获取访问页面数据',
    cat: 'data-analysis',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/others/api_getvisitpage.html',
  },
  /** 获取用户访问小程序日留存 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-retain/api_getdailyretain.html */
  getweanalysisappiddailyretaininfo: {
    method: 'POST',
    path: '/datacube/getweanalysisappiddailyretaininfo',
    title: '获取用户访问小程序日留存',
    cat: 'data-analysis',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-retain/api_getdailyretain.html',
  },
  /** 获取用户访问小程序月留存 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-retain/api_getmonthlyretain.html */
  getweanalysisappidmonthlyretaininfo: {
    method: 'POST',
    path: '/datacube/getweanalysisappidmonthlyretaininfo',
    title: '获取用户访问小程序月留存',
    cat: 'data-analysis',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-retain/api_getmonthlyretain.html',
  },
  /** 获取用户访问小程序周留存 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-retain/api_getweeklyretain.html */
  getweanalysisappidweeklyretaininfo: {
    method: 'POST',
    path: '/datacube/getweanalysisappidweeklyretaininfo',
    title: '获取用户访问小程序周留存',
    cat: 'data-analysis',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-retain/api_getweeklyretain.html',
  },
  /** 获取用户访问小程序数据日趋势 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-trend/api_getdailyvisittrend.html */
  getweanalysisappiddailyvisittrend: {
    method: 'POST',
    path: '/datacube/getweanalysisappiddailyvisittrend',
    title: '获取用户访问小程序数据日趋势',
    cat: 'data-analysis',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-trend/api_getdailyvisittrend.html',
  },
  /** 获取用户访问小程序数据月趋势 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-trend/api_getmonthlyvisittrend.html */
  getweanalysisappidmonthlyvisittrend: {
    method: 'POST',
    path: '/datacube/getweanalysisappidmonthlyvisittrend',
    title: '获取用户访问小程序数据月趋势',
    cat: 'data-analysis',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-trend/api_getmonthlyvisittrend.html',
  },
  /** 获取用户访问小程序数据周趋势 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-trend/api_getweeklyvisittrend.html */
  getweanalysisappidweeklyvisittrend: {
    method: 'POST',
    path: '/datacube/getweanalysisappidweeklyvisittrend',
    title: '获取用户访问小程序数据周趋势',
    cat: 'data-analysis',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-trend/api_getweeklyvisittrend.html',
  },
  // ===== dramaOthersAPI =====
  /** 批处理短剧合作推广计划 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_batchprocessdramapromotion.html */
  wxadramaBatchprocessdramapromotion: {
    method: 'POST',
    path: '/wxadrama/batchprocessdramapromotion',
    title: '批处理短剧合作推广计划',
    cat: 'dramaOthersAPI',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_batchprocessdramapromotion.html',
  },
  /** 获取短剧变现类型 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developergetiaadrama.html */
  wxadramaDevelopergetiaadrama: {
    method: 'POST',
    path: '/wxadrama/developergetiaadrama',
    title: '获取短剧变现类型',
    cat: 'dramaOthersAPI',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developergetiaadrama.html',
  },
  /** 获取已上架短剧 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developergetpublisheddrama.html */
  wxadramaDevelopergetpublisheddrama: {
    method: 'POST',
    path: '/wxadrama/developergetpublisheddrama',
    title: '获取已上架短剧',
    cat: 'dramaOthersAPI',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developergetpublisheddrama.html',
  },
  /** 短剧上架 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developerpublishdrama.html */
  wxadramaDeveloperpublishdrama: {
    method: 'POST',
    path: '/wxadrama/developerpublishdrama',
    title: '短剧上架',
    cat: 'dramaOthersAPI',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developerpublishdrama.html',
  },
  /** 刷剧剧目设置 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developersetflushdrama.html */
  wxadramaDevelopersetflushdrama: {
    method: 'POST',
    path: '/wxadrama/developersetflushdrama',
    title: '刷剧剧目设置',
    cat: 'dramaOthersAPI',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developersetflushdrama.html',
  },
  /** 设置短剧变现类型 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developersetiaadrama.html */
  wxadramaDevelopersetiaadrama: {
    method: 'POST',
    path: '/wxadrama/developersetiaadrama',
    title: '设置短剧变现类型',
    cat: 'dramaOthersAPI',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developersetiaadrama.html',
  },
  /** 推荐剧目 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developersetrecmddrama.html */
  wxadramaDevelopersetrecmddrama: {
    method: 'POST',
    path: '/wxadrama/developersetrecmddrama',
    title: '推荐剧目',
    cat: 'dramaOthersAPI',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developersetrecmddrama.html',
  },
  /** 获取短剧合作推广活动 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_getfinderevent.html */
  wxadramaGetfinderevent: {
    method: 'POST',
    path: '/wxadrama/getfinderevent',
    title: '获取短剧合作推广活动',
    cat: 'dramaOthersAPI',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_getfinderevent.html',
  },
  /** 播放原始视频-推荐位控制接口 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_setplayerdramarecmdswitch.html */
  wxadramaSetplayerdramarecmdswitch: {
    method: 'POST',
    path: '/wxadrama/setplayerdramarecmdswitch',
    title: '播放原始视频-推荐位控制接口',
    cat: 'dramaOthersAPI',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_setplayerdramarecmdswitch.html',
  },
  // ===== express =====
  /** 生成运单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_addorder.html */
  expressBusinessOrderAdd: {
    method: 'POST',
    path: '/cgi-bin/express/business/order/add',
    title: '生成运单',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_addorder.html',
  },
  /** 批量获取运单数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_batchgetorder.html */
  expressBusinessOrderBatchget: {
    method: 'POST',
    path: '/cgi-bin/express/business/order/batchget',
    title: '批量获取运单数据',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_batchgetorder.html',
  },
  /** 绑定/解绑物流账号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_bindaccount.html */
  expressBusinessAccountBind: {
    method: 'POST',
    path: '/cgi-bin/express/business/account/bind',
    title: '绑定/解绑物流账号',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_bindaccount.html',
  },
  /** 取消运单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_cancelorder.html */
  expressBusinessOrderCancel: {
    method: 'POST',
    path: '/cgi-bin/express/business/order/cancel',
    title: '取消运单',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_cancelorder.html',
  },
  /** 获取所有绑定的物流账号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getallaccount.html */
  expressBusinessAccountGetall: {
    method: 'GET',
    path: '/cgi-bin/express/business/account/getall',
    title: '获取所有绑定的物流账号',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getallaccount.html',
  },
  /** 获取支持的快递公司列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getalldelivery.html */
  expressBusinessDeliveryGetall: {
    method: 'GET',
    path: '/cgi-bin/express/business/delivery/getall',
    title: '获取支持的快递公司列表',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getalldelivery.html',
  },
  /** 获取运单数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getorder.html */
  expressBusinessOrderGet: {
    method: 'POST',
    path: '/cgi-bin/express/business/order/get',
    title: '获取运单数据',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getorder.html',
  },
  /** 查询运单轨迹 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getpath.html */
  expressBusinessPathGet: {
    method: 'POST',
    path: '/cgi-bin/express/business/path/get',
    title: '查询运单轨迹',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getpath.html',
  },
  /** 获取打印员 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getprinter.html */
  expressBusinessPrinterGetall: {
    method: 'GET',
    path: '/cgi-bin/express/business/printer/getall',
    title: '获取打印员',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getprinter.html',
  },
  /** 获取电子面单余额 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getquota.html */
  expressBusinessQuotaGet: {
    method: 'POST',
    path: '/cgi-bin/express/business/quota/get',
    title: '获取电子面单余额',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getquota.html',
  },
  /** 模拟更新订单状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_testupdateorder.html */
  expressBusinessTestUpdateOrder: {
    method: 'POST',
    path: '/cgi-bin/express/business/test_update_order',
    title: '模拟更新订单状态',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_testupdateorder.html',
  },
  /** 配置面单打印员 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_updateprinter.html */
  expressBusinessPrinterUpdate: {
    method: 'POST',
    path: '/cgi-bin/express/business/printer/update',
    title: '配置面单打印员',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_updateprinter.html',
  },
  /** 获取面单联系人信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_getcontact.html */
  expressDeliveryContactGet: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/contact/get',
    title: '获取面单联系人信息',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_getcontact.html',
  },
  /** 预览面单模板 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_previewtemplate.html */
  expressDeliveryTemplatePreview: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/template/preview',
    title: '预览面单模板',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_previewtemplate.html',
  },
  /** 对账单下载 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatter_get_bill.html */
  expressDeliverySingleWaybillGetBill: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/single_waybill/get_bill',
    title: '对账单下载',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatter_get_bill.html',
  },
  /** 运力取消订单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatterdeliverycancel.html */
  expressDeliverySingleWaybillCancelOrder: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/single_waybill/cancel_order',
    title: '运力取消订单',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatterdeliverycancel.html',
  },
  /** 运力公司退款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatterdeliveryrefund.html */
  expressDeliverySingleWaybillRefundOrder: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/single_waybill/refund_order',
    title: '运力公司退款',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatterdeliveryrefund.html',
  },
  /** 运力返回用户投诉处理结果 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatterupdatecomplainresult.html */
  expressDeliveryScatterUpdateComplaintResult: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/scatter/update_complaint_result',
    title: '运力返回用户投诉处理结果',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatterupdatecomplainresult.html',
  },
  /** 运力更新需支付的运费 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatterupdateorderfee.html */
  expressDeliverySingleWaybillFee: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/single_waybill/fee',
    title: '运力更新需支付的运费',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatterupdateorderfee.html',
  },
  /** 运力更新订单状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatterupdateorderstatus.html */
  expressDeliverySingleWaybillUpdate: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/single_waybill/update',
    title: '运力更新订单状态',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatterupdateorderstatus.html',
  },
  /** 更新商户审核结果 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_updatebusiness.html */
  expressDeliveryServiceBusinessUpdate: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/service/business/update',
    title: '更新商户审核结果',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_updatebusiness.html',
  },
  /** 更新运单轨迹 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_updatepath.html */
  expressDeliveryPathUpdate: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/path/update',
    title: '更新运单轨迹',
    cat: 'express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_updatepath.html',
  },
  // ===== face =====
  /** 获取用户人脸核身会话唯一标识 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/face/api_getverifyid.html */
  cityserviceFaceIdentifyGetverifyid: {
    method: 'POST',
    path: '/cityservice/face/identify/getverifyid',
    title: '获取用户人脸核身会话唯一标识',
    cat: 'face',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/face/api_getverifyid.html',
  },
  /** 查询用户人脸核身真实验证结果 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/face/api_queryverifyinfo.html */
  cityserviceFaceIdentifyQueryverifyinfo: {
    method: 'POST',
    path: '/cityservice/face/identify/queryverifyinfo',
    title: '查询用户人脸核身真实验证结果',
    cat: 'face',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/face/api_queryverifyinfo.html',
  },
  // ===== hardware-device =====
  /** 激活设备license @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_activelicensedevice.html */
  businessLicenseActivedevice: {
    method: 'POST',
    path: '/wxa/business/license/activedevice',
    title: '激活设备license',
    cat: 'hardware-device',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_activelicensedevice.html',
  },
  /** 设备组添加设备 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_addiotgroupdevice.html */
  businessGroupAdddevice: {
    method: 'POST',
    path: '/wxa/business/group/adddevice',
    title: '设备组添加设备',
    cat: 'hardware-device',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_addiotgroupdevice.html',
  },
  /** 创建设备组 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_createiotgroupid.html */
  businessGroupCreateid: {
    method: 'POST',
    path: '/wxa/business/group/createid',
    title: '创建设备组',
    cat: 'hardware-device',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_createiotgroupid.html',
  },
  /** 查询设备组信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_getiotgroupinfo.html */
  businessGroupGetinfo: {
    method: 'POST',
    path: '/wxa/business/group/getinfo',
    title: '查询设备组信息',
    cat: 'hardware-device',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_getiotgroupinfo.html',
  },
  /** 查询设备激活详情 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_getlicensedeviceinfo.html */
  businessLicenseGetdeviceinfo: {
    method: 'POST',
    path: '/wxa/business/license/getdeviceinfo',
    title: '查询设备激活详情',
    cat: 'hardware-device',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_getlicensedeviceinfo.html',
  },
  /** 查询license资源包列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_getlicensepkglist.html */
  businessLicenseGetpkglist: {
    method: 'POST',
    path: '/wxa/business/license/getpkglist',
    title: '查询license资源包列表',
    cat: 'hardware-device',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_getlicensepkglist.html',
  },
  /** 获取设备票据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_getsnticket.html */
  getsnticket: {
    method: 'POST',
    path: '/wxa/getsnticket',
    title: '获取设备票据',
    cat: 'hardware-device',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_getsnticket.html',
  },
  /** 设备组删除设备 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_removeiotgroupdevice.html */
  businessGroupRemovedevice: {
    method: 'POST',
    path: '/wxa/business/group/removedevice',
    title: '设备组删除设备',
    cat: 'hardware-device',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_removeiotgroupdevice.html',
  },
  /** 发送设备消息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_sendhardwaredevicemessage.html */
  messageDeviceSubscribeSend: {
    method: 'POST',
    path: '/cgi-bin/message/device/subscribe/send',
    title: '发送设备消息',
    cat: 'hardware-device',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_sendhardwaredevicemessage.html',
  },
  // ===== img-ocr =====
  /** 图片智能裁剪 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/img/api_imgaicrop.html */
  cvImgAicrop: {
    method: 'POST',
    path: '/cv/img/aicrop',
    title: '图片智能裁剪',
    cat: 'img-ocr',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/img/api_imgaicrop.html',
  },
  /** 二维码/条码识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/img/api_imgqrcode.html */
  cvImgQrcode: {
    method: 'POST',
    path: '/cv/img/qrcode',
    title: '二维码/条码识别',
    cat: 'img-ocr',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/img/api_imgqrcode.html',
  },
  /** 图片高清化 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/img/api_imgsuperresolution.html */
  cvImgSuperresolution: {
    method: 'POST',
    path: '/cv/img/superresolution',
    title: '图片高清化',
    cat: 'img-ocr',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/img/api_imgsuperresolution.html',
  },
  /** 银行卡识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_bankcardocr.html */
  cvOcrBankcard: {
    method: 'POST',
    path: '/cv/ocr/bankcard',
    title: '银行卡识别',
    cat: 'img-ocr',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_bankcardocr.html',
  },
  /** 营业执照识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_bizlicenseocr.html */
  cvOcrBizlicense: {
    method: 'POST',
    path: '/cv/ocr/bizlicense',
    title: '营业执照识别',
    cat: 'img-ocr',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_bizlicenseocr.html',
  },
  /** 通用印刷体识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_commocr.html */
  cvOcrComm: {
    method: 'POST',
    path: '/cv/ocr/comm',
    title: '通用印刷体识别',
    cat: 'img-ocr',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_commocr.html',
  },
  /** 驾驶证识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_drivinglicenseocr.html */
  cvOcrDrivinglicense: {
    method: 'POST',
    path: '/cv/ocr/drivinglicense',
    title: '驾驶证识别',
    cat: 'img-ocr',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_drivinglicenseocr.html',
  },
  /** 行驶证识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_drivingocr.html */
  cvOcrDriving: {
    method: 'POST',
    path: '/cv/ocr/driving',
    title: '行驶证识别',
    cat: 'img-ocr',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_drivingocr.html',
  },
  /** 身份证识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_idcardocr.html */
  cvOcrIdcard: {
    method: 'POST',
    path: '/cv/ocr/idcard',
    title: '身份证识别',
    cat: 'img-ocr',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_idcardocr.html',
  },
  // ===== immediate-delivery =====
  /** 异常件退回商家确认 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_abnormalconfirm.html */
  expressLocalBusinessOrderConfirmReturn: {
    method: 'POST',
    path: '/cgi-bin/express/local/business/order/confirm_return',
    title: '异常件退回商家确认',
    cat: 'immediate-delivery',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_abnormalconfirm.html',
  },
  /** 添加配送单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_addlocalorder.html */
  expressLocalBusinessOrderAdd: {
    method: 'POST',
    path: '/cgi-bin/express/local/business/order/add',
    title: '添加配送单',
    cat: 'immediate-delivery',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_addlocalorder.html',
  },
  /** 添加小费 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_addtips.html */
  expressLocalBusinessOrderAddtips: {
    method: 'POST',
    path: '/cgi-bin/express/local/business/order/addtips',
    title: '添加小费',
    cat: 'immediate-delivery',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_addtips.html',
  },
  /** 发起绑定请求 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_bindlocalaccount.html */
  expressLocalBusinessShopAdd: {
    method: 'POST',
    path: '/cgi-bin/express/local/business/shop/add',
    title: '发起绑定请求',
    cat: 'immediate-delivery',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_bindlocalaccount.html',
  },
  /** 取消配送单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_cancellocalorder.html */
  expressLocalBusinessOrderCancel: {
    method: 'POST',
    path: '/cgi-bin/express/local/business/order/cancel',
    title: '取消配送单',
    cat: 'immediate-delivery',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_cancellocalorder.html',
  },
  /** 获取已支持的配送公司列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_getallimmedelivery.html */
  expressLocalBusinessDeliveryGetall: {
    method: 'POST',
    path: '/cgi-bin/express/local/business/delivery/getall',
    title: '获取已支持的配送公司列表',
    cat: 'immediate-delivery',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_getallimmedelivery.html',
  },
  /** 拉取已绑定账号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_getbindaccount.html */
  expressLocalBusinessShopGet: {
    method: 'POST',
    path: '/cgi-bin/express/local/business/shop/get',
    title: '拉取已绑定账号',
    cat: 'immediate-delivery',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_getbindaccount.html',
  },
  /** 拉取配送单信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_getlocalorder.html */
  expressLocalBusinessOrderGet: {
    method: 'POST',
    path: '/cgi-bin/express/local/business/order/get',
    title: '拉取配送单信息',
    cat: 'immediate-delivery',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_getlocalorder.html',
  },
  /** 模拟配送公司更新配送单状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_mockupdateorder.html */
  expressLocalBusinessTestUpdateOrder: {
    method: 'POST',
    path: '/cgi-bin/express/local/business/test_update_order',
    title: '模拟配送公司更新配送单状态',
    cat: 'immediate-delivery',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_mockupdateorder.html',
  },
  /** 申请开通即时配送 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_opendelivery.html */
  expressLocalBusinessOpen: {
    method: 'POST',
    path: '/cgi-bin/express/local/business/open',
    title: '申请开通即时配送',
    cat: 'immediate-delivery',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_opendelivery.html',
  },
  /** 预下配送单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_preaddorder.html */
  expressLocalBusinessOrderPreAdd: {
    method: 'POST',
    path: '/cgi-bin/express/local/business/order/pre_add',
    title: '预下配送单',
    cat: 'immediate-delivery',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_preaddorder.html',
  },
  /** 预取消配送单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_precancelorder.html */
  expressLocalBusinessOrderPrecancel: {
    method: 'POST',
    path: '/cgi-bin/express/local/business/order/precancel',
    title: '预取消配送单',
    cat: 'immediate-delivery',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_precancelorder.html',
  },
  /** 模拟更新配送单状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_realmockupdateorder.html */
  expressLocalBusinessRealmockUpdateOrder: {
    method: 'POST',
    path: '/cgi-bin/express/local/business/realmock_update_order',
    title: '模拟更新配送单状态',
    cat: 'immediate-delivery',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_realmockupdateorder.html',
  },
  /** 重新下单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_reorder.html */
  expressLocalBusinessOrderReadd: {
    method: 'POST',
    path: '/cgi-bin/express/local/business/order/readd',
    title: '重新下单',
    cat: 'immediate-delivery',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_reorder.html',
  },
  /** 更新配送单状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-provider/api_updateorder.html */
  expressLocalDeliveryUpdateOrder: {
    method: 'POST',
    path: '/cgi-bin/express/local/delivery/update_order',
    title: '更新配送单状态',
    cat: 'immediate-delivery',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-provider/api_updateorder.html',
  },
  // ===== kf-mgnt =====
  /** 客服子商户拉取单个商户信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-management/api_getbusiness.html */
  businessGet: {
    method: 'POST',
    path: '/cgi-bin/business/get',
    title: '客服子商户拉取单个商户信息',
    cat: 'kf-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-management/api_getbusiness.html',
  },
  /** 客服子商户拉取多个商户信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-management/api_listbusiness.html */
  businessList: {
    method: 'POST',
    path: '/cgi-bin/business/list',
    title: '客服子商户拉取多个商户信息',
    cat: 'kf-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-management/api_listbusiness.html',
  },
  /** 客服子商户创建商户 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-management/api_registerbusiness.html */
  businessRegister: {
    method: 'POST',
    path: '/cgi-bin/business/register',
    title: '客服子商户创建商户',
    cat: 'kf-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-management/api_registerbusiness.html',
  },
  /** 客服子商户更新商户信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-management/api_updatebusiness.html */
  businessUpdate: {
    method: 'POST',
    path: '/cgi-bin/business/update',
    title: '客服子商户更新商户信息',
    cat: 'kf-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-management/api_updatebusiness.html',
  },
  /** 添加客服账号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_addkfaccount.html */
  customserviceKfaccountAdd: {
    method: 'POST',
    path: '/customservice/kfaccount/add',
    title: '添加客服账号',
    cat: 'kf-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_addkfaccount.html',
  },
  /** 取消客服管理员 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_cancelkfadmin.html */
  customserviceKfaccountCanceladmin: {
    method: 'GET',
    path: '/customservice/kfaccount/canceladmin',
    title: '取消客服管理员',
    cat: 'kf-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_cancelkfadmin.html',
  },
  /** 删除客服账号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_delkfaccount.html */
  customserviceKfaccountDel: {
    method: 'POST',
    path: '/customservice/kfaccount/del',
    title: '删除客服账号',
    cat: 'kf-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_delkfaccount.html',
  },
  /** 获取所有客服账号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_getkflist.html */
  customserviceGetkflist: {
    method: 'GET',
    path: '/cgi-bin/customservice/getkflist',
    title: '获取所有客服账号',
    cat: 'kf-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_getkflist.html',
  },
  /** 获取临时素材 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_getmedia.html */
  mediaGet: {
    method: 'GET',
    path: '/cgi-bin/media/get',
    title: '获取临时素材',
    cat: 'kf-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_getmedia.html',
  },
  /** 获取在线客服列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_getonlinekflist.html */
  customserviceGetonlinekflist: {
    method: 'GET',
    path: '/cgi-bin/customservice/getonlinekflist',
    title: '获取在线客服列表',
    cat: 'kf-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_getonlinekflist.html',
  },
  /** 发送客服消息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_sendcustommessage.html */
  messageCustomSend: {
    method: 'POST',
    path: '/cgi-bin/message/custom/send',
    title: '发送客服消息',
    cat: 'kf-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_sendcustommessage.html',
  },
  /** 设置客服管理员 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_setkfadmin.html */
  customserviceKfaccountSetadmin: {
    method: 'GET',
    path: '/customservice/kfaccount/setadmin',
    title: '设置客服管理员',
    cat: 'kf-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_setkfadmin.html',
  },
  /** 客服输入状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_typing.html */
  messageCustomBusinessTyping: {
    method: 'POST',
    path: '/cgi-bin/message/custom/business/typing',
    title: '客服输入状态',
    cat: 'kf-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_typing.html',
  },
  /** 新增临时素材 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_uploadtempmedia.html */
  mediaUpload: {
    method: 'POST',
    path: '/cgi-bin/media/upload',
    title: '新增临时素材',
    cat: 'kf-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_uploadtempmedia.html',
  },
  // ===== kf-work =====
  /** 绑定微信客服 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-work/api_bindkfwork.html */
  customserviceWorkBind: {
    method: 'POST',
    path: '/customservice/work/bind',
    title: '绑定微信客服',
    cat: 'kf-work',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-work/api_bindkfwork.html',
  },
  /** 查询绑定情况 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-work/api_getkfworkbound.html */
  customserviceWorkGet: {
    method: 'GET',
    path: '/customservice/work/get',
    title: '查询绑定情况',
    cat: 'kf-work',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-work/api_getkfworkbound.html',
  },
  /** 解除绑定微信客服 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-work/api_unbindkfwork.html */
  customserviceWorkUnbind: {
    method: 'POST',
    path: '/customservice/work/unbind',
    title: '解除绑定微信客服',
    cat: 'kf-work',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-work/api_unbindkfwork.html',
  },
  // ===== laboruse =====
  /** 推送用工消息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/laboruse/api_sendemployeerelationmsg.html */
  messageWxopenEmployeerelationmsgSend: {
    method: 'POST',
    path: '/cgi-bin/message/wxopen/employeerelationmsg/send',
    title: '推送用工消息',
    cat: 'laboruse',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/laboruse/api_sendemployeerelationmsg.html',
  },
  /** 解绑用工关系 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/laboruse/api_unbinduserb2cauthinfo.html */
  businessUnbinduserb2cauthinfo: {
    method: 'POST',
    path: '/wxa/business/unbinduserb2cauthinfo',
    title: '解绑用工关系',
    cat: 'laboruse',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/laboruse/api_unbinduserb2cauthinfo.html',
  },
  // ===== livebroadcast =====
  /** 添加并提审商品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_addgoods.html */
  broadcastGoodsAdd: {
    method: 'POST',
    path: '/wxaapi/broadcast/goods/add',
    title: '添加并提审商品',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_addgoods.html',
  },
  /** 删除商品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_deletegoodsinfo.html */
  broadcastGoodsDelete: {
    method: 'POST',
    path: '/wxaapi/broadcast/goods/delete',
    title: '删除商品',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_deletegoodsinfo.html',
  },
  /** 获取商品的信息与审核状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_getgoodsauditinfo.html */
  businessGetgoodswarehouse: {
    method: 'POST',
    path: '/wxa/business/getgoodswarehouse',
    title: '获取商品的信息与审核状态',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_getgoodsauditinfo.html',
  },
  /** 获取商品列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_getgoodsinfo.html */
  broadcastGoodsGetapproved: {
    method: 'GET',
    path: '/wxaapi/broadcast/goods/getapproved',
    title: '获取商品列表',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_getgoodsinfo.html',
  },
  /** 撤回商品审核 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_resetaudit.html */
  broadcastGoodsResetaudit: {
    method: 'POST',
    path: '/wxaapi/broadcast/goods/resetaudit',
    title: '撤回商品审核',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_resetaudit.html',
  },
  /** 重新提交商品审核 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_resubmitaudit.html */
  broadcastGoodsAudit: {
    method: 'POST',
    path: '/wxaapi/broadcast/goods/audit',
    title: '重新提交商品审核',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_resubmitaudit.html',
  },
  /** 更新商品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_updategoodsinfo.html */
  broadcastGoodsUpdate: {
    method: 'POST',
    path: '/wxaapi/broadcast/goods/update',
    title: '更新商品',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_updategoodsinfo.html',
  },
  /** 移除成员角色 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/role-management/api_deleterole.html */
  broadcastRoleDeleterole: {
    method: 'POST',
    path: '/wxaapi/broadcast/role/deleterole',
    title: '移除成员角色',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/role-management/api_deleterole.html',
  },
  /** 查询成员列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/role-management/api_getrolelist.html */
  broadcastRoleGetrolelist: {
    method: 'GET',
    path: '/wxaapi/broadcast/role/getrolelist',
    title: '查询成员列表',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/role-management/api_getrolelist.html',
  },
  /** 设置成员角色 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/role-management/api_getrolelistdw.html */
  broadcastRoleAddrole: {
    method: 'POST',
    path: '/wxaapi/broadcast/role/addrole',
    title: '设置成员角色',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/role-management/api_getrolelistdw.html',
  },
  /** 添加主播副号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_addsubanchor.html */
  broadcastRoomAddsubanchor: {
    method: 'POST',
    path: '/wxaapi/broadcast/room/addsubanchor',
    title: '添加主播副号',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_addsubanchor.html',
  },
  /** 添加管理直播间小助手 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_addveassistant.html */
  broadcastRoomAddassistant: {
    method: 'POST',
    path: '/wxaapi/broadcast/room/addassistant',
    title: '添加管理直播间小助手',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_addveassistant.html',
  },
  /** 创建直播间 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_createroom.html */
  broadcastRoomCreate: {
    method: 'POST',
    path: '/wxaapi/broadcast/room/create',
    title: '创建直播间',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_createroom.html',
  },
  /** 删除直播间商品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_deletedoods.html */
  broadcastGoodsDeleteInRoom: {
    method: 'POST',
    path: '/wxaapi/broadcast/goods/deleteInRoom',
    title: '删除直播间商品',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_deletedoods.html',
  },
  /** 删除直播间 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_deleteroom.html */
  broadcastRoomDeleteroom: {
    method: 'POST',
    path: '/wxaapi/broadcast/room/deleteroom',
    title: '删除直播间',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_deleteroom.html',
  },
  /** 删除主播副号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_deletesubanchor.html */
  broadcastRoomDeletesubanchor: {
    method: 'POST',
    path: '/wxaapi/broadcast/room/deletesubanchor',
    title: '删除主播副号',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_deletesubanchor.html',
  },
  /** 下载商品讲解视频 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_downloadgoodsvideo.html */
  broadcastGoodsGetVideo: {
    method: 'POST',
    path: '/wxaapi/broadcast/goods/getVideo',
    title: '下载商品讲解视频',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_downloadgoodsvideo.html',
  },
  /** 编辑直播间 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_editroom.html */
  broadcastRoomEditroom: {
    method: 'POST',
    path: '/wxaapi/broadcast/room/editroom',
    title: '编辑直播间',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_editroom.html',
  },
  /** 查询直播间小助手 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getassistantlist.html */
  broadcastRoomGetassistantlist: {
    method: 'GET',
    path: '/wxaapi/broadcast/room/getassistantlist',
    title: '查询直播间小助手',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getassistantlist.html',
  },
  /** 直播挂件获取全局KEY @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getdefault_goodskey.html */
  broadcastGoodsGetkey: {
    method: 'GET',
    path: '/wxaapi/broadcast/goods/getkey',
    title: '直播挂件获取全局KEY',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getdefault_goodskey.html',
  },
  /** 获取直播间列表和回放 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getliveinfo.html */
  businessGetliveinfo: {
    method: 'POST',
    path: '/wxa/business/getliveinfo',
    title: '获取直播间列表和回放',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getliveinfo.html',
  },
  /** 获取直播间推流地址 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getpushurl.html */
  broadcastRoomGetpushurl: {
    method: 'GET',
    path: '/wxaapi/broadcast/room/getpushurl',
    title: '获取直播间推流地址',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getpushurl.html',
  },
  /** 获取直播间分享二维码 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getsharedcode.html */
  broadcastRoomGetsharedcode: {
    method: 'GET',
    path: '/wxaapi/broadcast/room/getsharedcode',
    title: '获取直播间分享二维码',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getsharedcode.html',
  },
  /** 获取主播副号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getsubanchor.html */
  broadcastRoomGetsubanchor: {
    method: 'GET',
    path: '/wxaapi/broadcast/room/getsubanchor',
    title: '获取主播副号',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getsubanchor.html',
  },
  /** 导入商品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_importgoods.html */
  broadcastRoomAddgoods: {
    method: 'POST',
    path: '/wxaapi/broadcast/room/addgoods',
    title: '导入商品',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_importgoods.html',
  },
  /** 修改直播间小助手 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_modifyassistant.html */
  broadcastRoomModifyassistant: {
    method: 'POST',
    path: '/wxaapi/broadcast/room/modifyassistant',
    title: '修改直播间小助手',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_modifyassistant.html',
  },
  /** 修改主播副号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_modifysubanchor.html */
  broadcastRoomModifysubanchor: {
    method: 'POST',
    path: '/wxaapi/broadcast/room/modifysubanchor',
    title: '修改主播副号',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_modifysubanchor.html',
  },
  /** 推送商品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_pushgoods.html */
  broadcastGoodsPush: {
    method: 'POST',
    path: '/wxaapi/broadcast/goods/push',
    title: '推送商品',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_pushgoods.html',
  },
  /** 删除直播间小助手 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_removeassistant.html */
  broadcastRoomRemoveassistant: {
    method: 'POST',
    path: '/wxaapi/broadcast/room/removeassistant',
    title: '删除直播间小助手',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_removeassistant.html',
  },
  /** 上下架商品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_salegoods.html */
  broadcastGoodsOnsale: {
    method: 'POST',
    path: '/wxaapi/broadcast/goods/onsale',
    title: '上下架商品',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_salegoods.html',
  },
  /** 直播挂件设置全局KEY @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_setdefault_goodskey.html */
  broadcastGoodsSetkey: {
    method: 'POST',
    path: '/wxaapi/broadcast/goods/setkey',
    title: '直播挂件设置全局KEY',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_setdefault_goodskey.html',
  },
  /** 直播间商品排序 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_sortgoods.html */
  broadcastGoodsSort: {
    method: 'POST',
    path: '/wxaapi/broadcast/goods/sort',
    title: '直播间商品排序',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_sortgoods.html',
  },
  /** 禁言管理 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_updatecomment.html */
  broadcastRoomUpdatecomment: {
    method: 'POST',
    path: '/wxaapi/broadcast/room/updatecomment',
    title: '禁言管理',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_updatecomment.html',
  },
  /** 官方收录管理 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_updatefeedpublic.html */
  broadcastRoomUpdatefeedpublic: {
    method: 'POST',
    path: '/wxaapi/broadcast/room/updatefeedpublic',
    title: '官方收录管理',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_updatefeedpublic.html',
  },
  /** 客服功能管理 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_updatekf.html */
  broadcastRoomUpdatekf: {
    method: 'POST',
    path: '/wxaapi/broadcast/room/updatekf',
    title: '客服功能管理',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_updatekf.html',
  },
  /** 回放功能管理 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_updatereplay.html */
  broadcastRoomUpdatereplay: {
    method: 'POST',
    path: '/wxaapi/broadcast/room/updatereplay',
    title: '回放功能管理',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_updatereplay.html',
  },
  /** 获取长期订阅用户 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/subscribe-management/api_getfollowers.html */
  businessGetWxaFollowers: {
    method: 'POST',
    path: '/wxa/business/get_wxa_followers',
    title: '获取长期订阅用户',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/subscribe-management/api_getfollowers.html',
  },
  /** 发送直播开始事件 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/subscribe-management/api_pushmessage.html */
  businessPushMessage: {
    method: 'POST',
    path: '/wxa/business/push_message',
    title: '发送直播开始事件',
    cat: 'livebroadcast',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/subscribe-management/api_pushmessage.html',
  },
  // ===== minidrama =====
  /** 剧目提审 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_auditdrama.html */
  vodAuditdrama: {
    method: 'POST',
    path: '/wxa/sec/vod/auditdrama',
    title: '剧目提审',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_auditdrama.html',
  },
  /** 获取剧目信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_getdrama.html */
  vodGetdrama: {
    method: 'POST',
    path: '/wxa/sec/vod/getdrama',
    title: '获取剧目信息',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_getdrama.html',
  },
  /** 查询剧目审核信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_getdramalatestauditinfo.html */
  vodGetdramalatestauditinfo: {
    method: 'POST',
    path: '/wxa/sec/vod/getdramalatestauditinfo',
    title: '查询剧目审核信息',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_getdramalatestauditinfo.html',
  },
  /** 获取剧目列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_listdramas.html */
  vodListdramas: {
    method: 'POST',
    path: '/wxa/sec/vod/listdramas',
    title: '获取剧目列表',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_listdramas.html',
  },
  /** 替换审核通过的剧集 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_replacedramamedia.html */
  vodReplacedramamedia: {
    method: 'POST',
    path: '/wxa/sec/vod/replacedramamedia',
    title: '替换审核通过的剧集',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_replacedramamedia.html',
  },
  /** 修改剧目基本信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_submitmodifydramabasicinforeq.html */
  vodModifydramabasicinfo: {
    method: 'POST',
    path: '/wxa/sec/vod/modifydramabasicinfo',
    title: '修改剧目基本信息',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_submitmodifydramabasicinforeq.html',
  },
  /** 提交替换剧集审核 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_submitreplacemedias.html */
  vodSubmitreplacedramamedias: {
    method: 'POST',
    path: '/wxa/sec/vod/submitreplacedramamedias',
    title: '提交替换剧集审核',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_submitreplacemedias.html',
  },
  /** 增加账号授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizeapp/api_authorizeapp.html */
  vodAuthorizeapp: {
    method: 'POST',
    path: '/wxa/sec/vod/authorizeapp',
    title: '增加账号授权',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizeapp/api_authorizeapp.html',
  },
  /** 解除账号授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizeapp/api_deauthorizeapp.html */
  vodDeauthorizeapp: {
    method: 'POST',
    path: '/wxa/sec/vod/deauthorizeapp',
    title: '解除账号授权',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizeapp/api_deauthorizeapp.html',
  },
  /** 查询账号授权信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizeapp/api_getauthorizeapps.html */
  vodGetauthorizeapps: {
    method: 'POST',
    path: '/wxa/sec/vod/getauthorizeapps',
    title: '查询账号授权信息',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizeapp/api_getauthorizeapps.html',
  },
  /** 查询被授权信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizeapp/api_getauthorizedobjects.html */
  vodGetauthorizedobjects: {
    method: 'POST',
    path: '/wxa/sec/vod/getauthorizedobjects',
    title: '查询被授权信息',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizeapp/api_getauthorizedobjects.html',
  },
  /** 增加版权授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizecopyright/api_authorizecopyright.html */
  vodAuthorizecopyright: {
    method: 'POST',
    path: '/wxa/sec/vod/authorizecopyright',
    title: '增加版权授权',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizecopyright/api_authorizecopyright.html',
  },
  /** 解除版权授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizecopyright/api_deauthorizecopyright.html */
  vodDeauthorizecopyright: {
    method: 'POST',
    path: '/wxa/sec/vod/deauthorizecopyright',
    title: '解除版权授权',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizecopyright/api_deauthorizecopyright.html',
  },
  /** 查询版权授权信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizecopyright/api_getcopyrightauthorizationlist.html */
  vodGetcopyrightauthorizationlist: {
    method: 'POST',
    path: '/wxa/sec/vod/getcopyrightauthorizationlist',
    title: '查询版权授权信息',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizecopyright/api_getcopyrightauthorizationlist.html',
  },
  /** 查询被版权授权信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizecopyright/api_getcopyrightauthorizedlist.html */
  vodGetcopyrightauthorizedlist: {
    method: 'POST',
    path: '/wxa/sec/vod/getcopyrightauthorizedlist',
    title: '查询被版权授权信息',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizecopyright/api_getcopyrightauthorizedlist.html',
  },
  /** 增加剧目授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizedrama/api_authorizedrama.html */
  vodAuthorizedrama: {
    method: 'GET',
    path: '/wxa/sec/vod/authorizedrama',
    title: '增加剧目授权',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizedrama/api_authorizedrama.html',
  },
  /** 解除剧目授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizedrama/api_deauthorizedrama.html */
  vodDeauthorizedrama: {
    method: 'POST',
    path: '/wxa/sec/vod/deauthorizedrama',
    title: '解除剧目授权',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizedrama/api_deauthorizedrama.html',
  },
  /** 查询授权信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizedrama/api_getauthorizeobjects.html */
  vodGetauthorizeobjects: {
    method: 'POST',
    path: '/wxa/sec/vod/getauthorizeobjects',
    title: '查询授权信息',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizedrama/api_getauthorizeobjects.html',
  },
  /** 查询CDN日志下载链接列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/usagedata/api_getcdnlogs.html */
  vodGetcdnlogs: {
    method: 'POST',
    path: '/wxa/sec/vod/getcdnlogs',
    title: '查询CDN日志下载链接列表',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/usagedata/api_getcdnlogs.html',
  },
  /** 查询CDN用量数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/usagedata/api_getcdnusagedata.html */
  vodGetcdnusagedata: {
    method: 'POST',
    path: '/wxa/sec/vod/getcdnusagedata',
    title: '查询CDN用量数据',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/usagedata/api_getcdnusagedata.html',
  },
  /** 查询流量包详情 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/usagedata/api_listpackages.html */
  vodListpackages: {
    method: 'POST',
    path: '/wxa/sec/vod/listpackages',
    title: '查询流量包详情',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/usagedata/api_listpackages.html',
  },
  /** 申请分片上传 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_applyupload.html */
  vodApplyupload: {
    method: 'POST',
    path: '/wxa/sec/vod/applyupload',
    title: '申请分片上传',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_applyupload.html',
  },
  /** 确认上传 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_commitupload.html */
  vodCommitupload: {
    method: 'POST',
    path: '/wxa/sec/vod/commitupload',
    title: '确认上传',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_commitupload.html',
  },
  /** 查询任务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_gettask.html */
  vodGettask: {
    method: 'POST',
    path: '/wxa/sec/vod/gettask',
    title: '查询任务',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_gettask.html',
  },
  /** 拉取上传 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_pullupload.html */
  vodPullupload: {
    method: 'POST',
    path: '/wxa/sec/vod/pullupload',
    title: '拉取上传',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_pullupload.html',
  },
  /** 单个文件上传 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_singlefileupload.html */
  vodSinglefileupload: {
    method: 'POST',
    path: '/wxa/sec/vod/singlefileupload',
    title: '单个文件上传',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_singlefileupload.html',
  },
  /** 上传分片 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_uploadpart.html */
  vodUploadpart: {
    method: 'POST',
    path: '/wxa/sec/vod/uploadpart',
    title: '上传分片',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_uploadpart.html',
  },
  /** 删除媒资 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_media/api_deletemedia.html */
  vodDeletemedia: {
    method: 'POST',
    path: '/wxa/sec/vod/deletemedia',
    title: '删除媒资',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_media/api_deletemedia.html',
  },
  /** 获取媒资详细信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_media/api_getmedia.html */
  vodGetmedia: {
    method: 'POST',
    path: '/wxa/sec/vod/getmedia',
    title: '获取媒资详细信息',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_media/api_getmedia.html',
  },
  /** 获取媒资播放链接 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_media/api_getmedialink.html */
  vodGetmedialink: {
    method: 'POST',
    path: '/wxa/sec/vod/getmedialink',
    title: '获取媒资播放链接',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_media/api_getmedialink.html',
  },
  /** 获取媒资列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_media/api_listmedia.html */
  vodListmedia: {
    method: 'POST',
    path: '/wxa/sec/vod/listmedia',
    title: '获取媒资列表',
    cat: 'minidrama',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_media/api_listmedia.html',
  },
  // ===== mp-access-token =====
  /** 获取接口调用凭据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-access-token/api_getaccesstoken.html */
  token: {
    method: 'GET',
    path: '/cgi-bin/token',
    title: '获取接口调用凭据',
    cat: 'mp-access-token',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-access-token/api_getaccesstoken.html',
  },
  /** 获取稳定版接口调用凭据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-access-token/api_getstableaccesstoken.html */
  stableToken: {
    method: 'POST',
    path: '/cgi-bin/stable_token',
    title: '获取稳定版接口调用凭据',
    cat: 'mp-access-token',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-access-token/api_getstableaccesstoken.html',
  },
  // ===== mp-message-management =====
  /** 选用模板 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_addwxanewtemplate.html */
  newtmplAddtemplate: {
    method: 'POST',
    path: '/wxaapi/newtmpl/addtemplate',
    title: '选用模板',
    cat: 'mp-message-management',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_addwxanewtemplate.html',
  },
  /** 删除模板 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_delwxanewtemplate.html */
  newtmplDeltemplate: {
    method: 'POST',
    path: '/wxaapi/newtmpl/deltemplate',
    title: '删除模板',
    cat: 'mp-message-management',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_delwxanewtemplate.html',
  },
  /** 获取类目 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getcategory.html */
  newtmplGetcategory: {
    method: 'GET',
    path: '/wxaapi/newtmpl/getcategory',
    title: '获取类目',
    cat: 'mp-message-management',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getcategory.html',
  },
  /** 获取模板中的关键词 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getpubnewtemplatekeywords.html */
  newtmplGetpubtemplatekeywords: {
    method: 'GET',
    path: '/wxaapi/newtmpl/getpubtemplatekeywords',
    title: '获取模板中的关键词',
    cat: 'mp-message-management',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getpubnewtemplatekeywords.html',
  },
  /** 获取类目下的公共模板 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getpubnewtemplatetitles.html */
  newtmplGetpubtemplatetitles: {
    method: 'GET',
    path: '/wxaapi/newtmpl/getpubtemplatetitles',
    title: '获取类目下的公共模板',
    cat: 'mp-message-management',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getpubnewtemplatetitles.html',
  },
  /** 查询服务卡片状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getusernotify.html */
  getUserNotify: {
    method: 'POST',
    path: '/wxa/get_user_notify',
    title: '查询服务卡片状态',
    cat: 'mp-message-management',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getusernotify.html',
  },
  /** 获取已有模板列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getwxapubnewtemplate.html */
  newtmplGettemplate: {
    method: 'GET',
    path: '/wxaapi/newtmpl/gettemplate',
    title: '获取已有模板列表',
    cat: 'mp-message-management',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getwxapubnewtemplate.html',
  },
  /** 发送订阅消息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_sendmessage.html */
  messageSubscribeSend: {
    method: 'POST',
    path: '/cgi-bin/message/subscribe/send',
    title: '发送订阅消息',
    cat: 'mp-message-management',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_sendmessage.html',
  },
  /** 激活与更新服务卡片 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_setusernotify.html */
  setUserNotify: {
    method: 'POST',
    path: '/wxa/set_user_notify',
    title: '激活与更新服务卡片',
    cat: 'mp-message-management',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_setusernotify.html',
  },
  /** 更新服务卡片扩展信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_setusernotifyext.html */
  setUserNotifyext: {
    method: 'POST',
    path: '/wxa/set_user_notifyext',
    title: '更新服务卡片扩展信息',
    cat: 'mp-message-management',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_setusernotifyext.html',
  },
  /** 创建activity_id @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/updatable-message/api_createactivityid.html */
  messageWxopenActivityidCreate: {
    method: 'GET',
    path: '/cgi-bin/message/wxopen/activityid/create',
    title: '创建activity_id',
    cat: 'mp-message-management',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/updatable-message/api_createactivityid.html',
  },
  /** 修改小程序聊天工具的动态卡片消息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/updatable-message/api_setchattoolmsg.html */
  messageWxopenChattoolmsgSend: {
    method: 'POST',
    path: '/cgi-bin/message/wxopen/chattoolmsg/send',
    title: '修改小程序聊天工具的动态卡片消息',
    cat: 'mp-message-management',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/updatable-message/api_setchattoolmsg.html',
  },
  /** 修改动态消息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/updatable-message/api_setupdatablemsg.html */
  messageWxopenUpdatablemsgSend: {
    method: 'POST',
    path: '/cgi-bin/message/wxopen/updatablemsg/send',
    title: '修改动态消息',
    cat: 'mp-message-management',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/updatable-message/api_setupdatablemsg.html',
  },
  // ===== nearby-poi =====
  /** 添加地点 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/nearby-poi/api_addnearbypoi.html */
  addnearbypoi: {
    method: 'POST',
    path: '/wxa/addnearbypoi',
    title: '添加地点',
    cat: 'nearby-poi',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/nearby-poi/api_addnearbypoi.html',
  },
  /** 删除地点 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/nearby-poi/api_deletenearbypoi.html */
  delnearbypoi: {
    method: 'POST',
    path: '/wxa/delnearbypoi',
    title: '删除地点',
    cat: 'nearby-poi',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/nearby-poi/api_deletenearbypoi.html',
  },
  /** 查看地点 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/nearby-poi/api_getnearbypoilist.html */
  getnearbypoilist: {
    method: 'POST',
    path: '/wxa/getnearbypoilist',
    title: '查看地点',
    cat: 'nearby-poi',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/nearby-poi/api_getnearbypoilist.html',
  },
  /** 设置展示状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/nearby-poi/api_setshowstatus.html */
  setnearbypoishowstatus: {
    method: 'POST',
    path: '/wxa/setnearbypoishowstatus',
    title: '设置展示状态',
    cat: 'nearby-poi',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/nearby-poi/api_setshowstatus.html',
  },
  // ===== novel =====
  /** 新增账号-小说授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_addbookauth.html */
  bookAddbookauth: {
    method: 'POST',
    path: '/wxa/book/addbookauth',
    title: '新增账号-小说授权',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_addbookauth.html',
  },
  /** 新增账号-账号授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_addbookauthbyappid.html */
  bookAddbookauthbyappid: {
    method: 'POST',
    path: '/wxa/book/addbookauthbyappid',
    title: '新增账号-账号授权',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_addbookauthbyappid.html',
  },
  /** 删除指定的授权关系 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_delbookauth.html */
  bookDelbookauth: {
    method: 'POST',
    path: '/wxa/book/delbookauth',
    title: '删除指定的授权关系',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_delbookauth.html',
  },
  /** 删除指定的账号授权关系 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_delbookauthbyappid.html */
  bookDelbookauthbyappid: {
    method: 'POST',
    path: '/wxa/book/delbookauthbyappid',
    title: '删除指定的账号授权关系',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_delbookauthbyappid.html',
  },
  /** 查看主授权关系列表-查看被授权关系列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_querybookauth.html */
  bookQuerybookauth: {
    method: 'POST',
    path: '/wxa/book/querybookauth',
    title: '查看主授权关系列表-查看被授权关系列表',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_querybookauth.html',
  },
  /** 查看账号主授权关系列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_querybookauthv2.html */
  bookQuerybookauthv2: {
    method: 'POST',
    path: '/wxa/book/querybookauthv2',
    title: '查看账号主授权关系列表',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_querybookauthv2.html',
  },
  /** 作品提审 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_auditbook.html */
  bookAuditbook: {
    method: 'POST',
    path: '/wxa/book/auditbook',
    title: '作品提审',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_auditbook.html',
  },
  /** 批量上传章节 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_batchcreatechapter.html */
  bookBatchcreatechapter: {
    method: 'POST',
    path: '/wxa/book/batchcreatechapter',
    title: '批量上传章节',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_batchcreatechapter.html',
  },
  /** 创建作品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_createbook.html */
  bookCreatebook: {
    method: 'POST',
    path: '/wxa/book/createbook',
    title: '创建作品',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_createbook.html',
  },
  /** 上传章节 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_createchapter.html */
  bookCreatechapter: {
    method: 'POST',
    path: '/wxa/book/createchapter',
    title: '上传章节',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_createchapter.html',
  },
  /** 删除作品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_deletebook.html */
  bookDeletebook: {
    method: 'POST',
    path: '/wxa/book/deletebook',
    title: '删除作品',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_deletebook.html',
  },
  /** 删除章节 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_deletechapter.html */
  bookDeletechapter: {
    method: 'POST',
    path: '/wxa/book/deletechapter',
    title: '删除章节',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_deletechapter.html',
  },
  /** 获取作品信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_getbook.html */
  bookGetbook: {
    method: 'POST',
    path: '/wxa/book/getbook',
    title: '获取作品信息',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_getbook.html',
  },
  /** 获取章节信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_getchapter.html */
  bookGetchapter: {
    method: 'POST',
    path: '/wxa/book/getchapter',
    title: '获取章节信息',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_getchapter.html',
  },
  /** 获取作品列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_listbook.html */
  bookListbook: {
    method: 'POST',
    path: '/wxa/book/listbook',
    title: '获取作品列表',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_listbook.html',
  },
  /** 获取章节列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_listchapter.html */
  bookListchapter: {
    method: 'POST',
    path: '/wxa/book/listchapter',
    title: '获取章节列表',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_listchapter.html',
  },
  /** 调整章节顺序 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_reorderchapter.html */
  bookReorderchapter: {
    method: 'POST',
    path: '/wxa/book/reorderchapter',
    title: '调整章节顺序',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_reorderchapter.html',
  },
  /** 替换章节 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_replacechapter.html */
  bookReplacechapter: {
    method: 'POST',
    path: '/wxa/book/replacechapter',
    title: '替换章节',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_replacechapter.html',
  },
  /** 编辑作品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_updatebook.html */
  bookUpdatebook: {
    method: 'POST',
    path: '/wxa/book/updatebook',
    title: '编辑作品',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_updatebook.html',
  },
  /** 调整章节相对顺序 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_updatechapterseq.html */
  bookUpdatechapterseq: {
    method: 'POST',
    path: '/wxa/book/updatechapterseq',
    title: '调整章节相对顺序',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_updatechapterseq.html',
  },
  /** 读后推荐 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/other/api_novelreadersetrecmdnovel.html */
  businessNovelreaderSetrecmdnovel: {
    method: 'POST',
    path: '/wxa/business/novelreader/setrecmdnovel',
    title: '读后推荐',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/other/api_novelreadersetrecmdnovel.html',
  },
  /** 预览设置获取 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/preview/api_getpreviewsetting.html */
  businessNovelreaderGetpreviewsetting: {
    method: 'POST',
    path: '/wxa/business/novelreader/getpreviewsetting',
    title: '预览设置获取',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/preview/api_getpreviewsetting.html',
  },
  /** 预览设置修改 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/preview/api_setpreviewsetting.html */
  businessNovelreaderSetpreviewsetting: {
    method: 'POST',
    path: '/wxa/business/novelreader/setpreviewsetting',
    title: '预览设置修改',
    cat: 'novel',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/preview/api_setpreviewsetting.html',
  },
  // ===== openApi-mgnt =====
  /** 网络通信检测 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_callbackcheck.html */
  callbackCheck: {
    method: 'POST',
    path: '/cgi-bin/callback/check',
    title: '网络通信检测',
    cat: 'openApi-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_callbackcheck.html',
  },
  /** 重置指定API调用次数 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_clearapiquota.html */
  openapiQuotaClear: {
    method: 'POST',
    path: '/cgi-bin/openapi/quota/clear',
    title: '重置指定API调用次数',
    cat: 'openApi-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_clearapiquota.html',
  },
  /** 重置API调用次数 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_clearquota.html */
  clearQuota: {
    method: 'POST',
    path: '/cgi-bin/clear_quota',
    title: '重置API调用次数',
    cat: 'openApi-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_clearquota.html',
  },
  /** 使用AppSecret重置API调用次数 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_clearquotabyappsecret.html */
  clearQuotaV2: {
    method: 'POST',
    path: '/cgi-bin/clear_quota/v2',
    title: '使用AppSecret重置API调用次数',
    cat: 'openApi-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_clearquotabyappsecret.html',
  },
  /** 获取微信API服务器IP @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_getapidomainip.html */
  getApiDomainIp: {
    method: 'GET',
    path: '/cgi-bin/get_api_domain_ip',
    title: '获取微信API服务器IP',
    cat: 'openApi-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_getapidomainip.html',
  },
  /** 查询API调用额度 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_getapiquota.html */
  openapiQuotaGet: {
    method: 'POST',
    path: '/cgi-bin/openapi/quota/get',
    title: '查询API调用额度',
    cat: 'openApi-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_getapiquota.html',
  },
  /** 获取微信推送服务器IP @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_getcallbackip.html */
  getcallbackip: {
    method: 'GET',
    path: '/cgi-bin/getcallbackip',
    title: '获取微信推送服务器IP',
    cat: 'openApi-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_getcallbackip.html',
  },
  /** 查询rid信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_getridinfo.html */
  openapiRidGet: {
    method: 'POST',
    path: '/cgi-bin/openapi/rid/get',
    title: '查询rid信息',
    cat: 'openApi-mgnt',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_getridinfo.html',
  },
  // ===== operation =====
  /** 查询域名配置 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getdomaininfo.html */
  getwxadevinfo: {
    method: 'POST',
    path: '/wxa/getwxadevinfo',
    title: '查询域名配置',
    cat: 'operation',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getdomaininfo.html',
  },
  /** 获取用户反馈列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getfeedback.html */
  feedbackList: {
    method: 'GET',
    path: '/wxaapi/feedback/list',
    title: '获取用户反馈列表',
    cat: 'operation',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getfeedback.html',
  },
  /** 获取mediaId图片 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getfeedbackmedia.html */
  mediaGetfeedbackmedia: {
    method: 'GET',
    path: '/cgi-bin/media/getfeedbackmedia',
    title: '获取mediaId图片',
    cat: 'operation',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getfeedbackmedia.html',
  },
  /** 获取分阶段发布详情 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getgrayreleaseplan.html */
  getgrayreleaseplan: {
    method: 'GET',
    path: '/wxa/getgrayreleaseplan',
    title: '获取分阶段发布详情',
    cat: 'operation',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getgrayreleaseplan.html',
  },
  /** 查询js错误详情 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getjserrdetail.html */
  logJserrDetail: {
    method: 'POST',
    path: '/wxaapi/log/jserr_detail',
    title: '查询js错误详情',
    cat: 'operation',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getjserrdetail.html',
  },
  /** 查询错误列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getjserrlist.html */
  logJserrList: {
    method: 'POST',
    path: '/wxaapi/log/jserr_list',
    title: '查询错误列表',
    cat: 'operation',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getjserrlist.html',
  },
  /** 获取性能数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getperformance.html */
  logGetPerformance: {
    method: 'POST',
    path: '/wxaapi/log/get_performance',
    title: '获取性能数据',
    cat: 'operation',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getperformance.html',
  },
  /** 获取访问来源 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getscenelist.html */
  logGetScene: {
    method: 'GET',
    path: '/wxaapi/log/get_scene',
    title: '获取访问来源',
    cat: 'operation',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getscenelist.html',
  },
  /** 获取客户端版本 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getversionlist.html */
  logGetClientVersion: {
    method: 'GET',
    path: '/wxaapi/log/get_client_version',
    title: '获取客户端版本',
    cat: 'operation',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getversionlist.html',
  },
  /** 查询实时日志 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_realtimelogsearch.html */
  userlogUserlogSearch: {
    method: 'GET',
    path: '/wxaapi/userlog/userlog_search',
    title: '查询实时日志',
    cat: 'operation',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_realtimelogsearch.html',
  },
  // ===== order_shipping =====
  /** 品牌申请 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_famousbrandapply.html */
  famousbrandApply: {
    method: 'POST',
    path: '/wxa/sec/famousbrand/apply',
    title: '品牌申请',
    cat: 'order_shipping',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_famousbrandapply.html',
  },
  /** 小程序品牌申请状态查询 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_getfamousbrandapplystatus.html */
  famousbrandGetStatus: {
    method: 'POST',
    path: '/wxa/sec/famousbrand/get_status',
    title: '小程序品牌申请状态查询',
    cat: 'order_shipping',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_getfamousbrandapplystatus.html',
  },
  /** 查询订单发货状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_getorder.html */
  orderGetOrder: {
    method: 'POST',
    path: '/wxa/sec/order/get_order',
    title: '查询订单发货状态',
    cat: 'order_shipping',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_getorder.html',
  },
  /** 查询订单列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_getorderlist.html */
  orderGetOrderList: {
    method: 'POST',
    path: '/wxa/sec/order/get_order_list',
    title: '查询订单列表',
    cat: 'order_shipping',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_getorderlist.html',
  },
  /** 查询小程序是否已开通发货信息管理服务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_istrademanaged.html */
  orderIsTradeManaged: {
    method: 'POST',
    path: '/wxa/sec/order/is_trade_managed',
    title: '查询小程序是否已开通发货信息管理服务',
    cat: 'order_shipping',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_istrademanaged.html',
  },
  /** 查询小程序是否已完成交易结算管理确认 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_istrademanagementconfirmationcompleted.html */
  orderIsTradeManagementConfirmationCompleted: {
    method: 'POST',
    path: '/wxa/sec/order/is_trade_management_confirmation_completed',
    title: '查询小程序是否已完成交易结算管理确认',
    cat: 'order_shipping',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_istrademanagementconfirmationcompleted.html',
  },
  /** 确认收货提醒 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_notifyconfirmreceive.html */
  orderNotifyConfirmReceive: {
    method: 'POST',
    path: '/wxa/sec/order/notify_confirm_receive',
    title: '确认收货提醒',
    cat: 'order_shipping',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_notifyconfirmreceive.html',
  },
  /** 特殊发货报备 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_opspecialorder.html */
  orderOpspecialorder: {
    method: 'POST',
    path: '/wxa/sec/order/opspecialorder',
    title: '特殊发货报备',
    cat: 'order_shipping',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_opspecialorder.html',
  },
  /** 消息跳转路径设置 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_setmsgjumppath.html */
  orderSetMsgJumpPath: {
    method: 'POST',
    path: '/wxa/sec/order/set_msg_jump_path',
    title: '消息跳转路径设置',
    cat: 'order_shipping',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_setmsgjumppath.html',
  },
  /** 小程序交易类型变更申请 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_setwxatradetypecgi.html */
  orderSetwxatradetypecgi: {
    method: 'POST',
    path: '/wxa/sec/order/setwxatradetypecgi',
    title: '小程序交易类型变更申请',
    cat: 'order_shipping',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_setwxatradetypecgi.html',
  },
  /** 发货信息合单录入 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_uploadcombinedshippinginfo.html */
  orderUploadCombinedShippingInfo: {
    method: 'POST',
    path: '/wxa/sec/order/upload_combined_shipping_info',
    title: '发货信息合单录入',
    cat: 'order_shipping',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_uploadcombinedshippinginfo.html',
  },
  /** 发货信息录入 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_uploadshippinginfo.html */
  orderUploadShippingInfo: {
    method: 'POST',
    path: '/wxa/sec/order/upload_shipping_info',
    title: '发货信息录入',
    cat: 'order_shipping',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_uploadshippinginfo.html',
  },
  // ===== plugin-management =====
  /** 插件管理 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/plugin-management/api_manageplugin.html */
  plugin: {
    method: 'POST',
    path: '/wxa/plugin',
    title: '插件管理',
    cat: 'plugin-management',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/plugin-management/api_manageplugin.html',
  },
  /** 插件申请管理 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/plugin-management/api_managepluginapplication.html */
  devplugin: {
    method: 'POST',
    path: '/wxa/devplugin',
    title: '插件申请管理',
    cat: 'plugin-management',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/plugin-management/api_managepluginapplication.html',
  },
  // ===== qrcode-link =====
  /** 获取小程序二维码 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/qr-code/api_createqrcode.html */
  wxaappCreatewxaqrcode: {
    method: 'POST',
    path: '/cgi-bin/wxaapp/createwxaqrcode',
    title: '获取小程序二维码',
    cat: 'qrcode-link',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/qr-code/api_createqrcode.html',
  },
  /** 获取小程序码 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/qr-code/api_getqrcode.html */
  getwxacode: {
    method: 'POST',
    path: '/wxa/getwxacode',
    title: '获取小程序码',
    cat: 'qrcode-link',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/qr-code/api_getqrcode.html',
  },
  /** 获取不限制的小程序码 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/qr-code/api_getunlimitedqrcode.html */
  getwxacodeunlimit: {
    method: 'POST',
    path: '/wxa/getwxacodeunlimit',
    title: '获取不限制的小程序码',
    cat: 'qrcode-link',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/qr-code/api_getunlimitedqrcode.html',
  },
  /** 获取ShortLink @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/short-link/api_generateshortlink.html */
  genwxashortlink: {
    method: 'POST',
    path: '/wxa/genwxashortlink',
    title: '获取ShortLink',
    cat: 'qrcode-link',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/short-link/api_generateshortlink.html',
  },
  /** 获取加密URLLink @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/url-link/api_generateurllink.html */
  generateUrllink: {
    method: 'POST',
    path: '/wxa/generate_urllink',
    title: '获取加密URLLink',
    cat: 'qrcode-link',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/url-link/api_generateurllink.html',
  },
  /** 查询加密URLLink @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/url-link/api_queryurllink.html */
  queryUrllink: {
    method: 'POST',
    path: '/wxa/query_urllink',
    title: '查询加密URLLink',
    cat: 'qrcode-link',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/url-link/api_queryurllink.html',
  },
  /** 获取NFC的小程序scheme @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/url-scheme/api_generatenfcscheme.html */
  generatenfcscheme: {
    method: 'POST',
    path: '/wxa/generatenfcscheme',
    title: '获取NFC的小程序scheme',
    cat: 'qrcode-link',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/url-scheme/api_generatenfcscheme.html',
  },
  /** 获取加密scheme码 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/url-scheme/api_generatescheme.html */
  generatescheme: {
    method: 'POST',
    path: '/wxa/generatescheme',
    title: '获取加密scheme码',
    cat: 'qrcode-link',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/url-scheme/api_generatescheme.html',
  },
  /** 查询scheme码 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/url-scheme/api_queryscheme.html */
  queryscheme: {
    method: 'POST',
    path: '/wxa/queryscheme',
    title: '查询scheme码',
    cat: 'qrcode-link',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/url-scheme/api_queryscheme.html',
  },
  // ===== red-packet-cover =====
  /** 获取微信红包封面 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/red-packet-cover/api_getredpacketcoverurl.html */
  redpacketcoverWxappCoverUrlGetByToken: {
    method: 'POST',
    path: '/redpacketcover/wxapp/cover_url/get_by_token',
    title: '获取微信红包封面',
    cat: 'red-packet-cover',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/red-packet-cover/api_getredpacketcoverurl.html',
  },
  // ===== sec-center =====
  /** 获取用户安全等级 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/sec-center/safety-control-capability/api_getuserriskrank.html */
  getuserriskrank: {
    method: 'POST',
    path: '/wxa/getuserriskrank',
    title: '获取用户安全等级',
    cat: 'sec-center',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/sec-center/safety-control-capability/api_getuserriskrank.html',
  },
  /** 多媒体内容安全识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/sec-center/sec-check/api_mediacheckasync.html */
  mediaCheckAsync: {
    method: 'POST',
    path: '/wxa/media_check_async',
    title: '多媒体内容安全识别',
    cat: 'sec-center',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/sec-center/sec-check/api_mediacheckasync.html',
  },
  /** 文本内容安全识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/sec-center/sec-check/api_msgseccheck.html */
  msgSecCheck: {
    method: 'POST',
    path: '/wxa/msg_sec_check',
    title: '文本内容安全识别',
    cat: 'sec-center',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/sec-center/sec-check/api_msgseccheck.html',
  },
  // ===== soter =====
  /** 生物认证秘钥签名验证 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/soter/api_verifysignature.html */
  soterVerifySignature: {
    method: 'POST',
    path: '/cgi-bin/soter/verify_signature',
    title: '生物认证秘钥签名验证',
    cat: 'soter',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/soter/api_verifysignature.html',
  },
  // ===== student =====
  /** 快速获取学生身份 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/student/api_quickcheckstudentidentity.html */
  quickcheckstudentidentity: {
    method: 'POST',
    path: '/intp/quickcheckstudentidentity',
    title: '快速获取学生身份',
    cat: 'student',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/student/api_quickcheckstudentidentity.html',
  },
  // ===== transaction-guarantee =====
  /** 获取交易保障标状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/basic/api_getguaranteestatus.html */
  wxamptradeGetGuaranteeStatus: {
    method: 'GET',
    path: '/wxaapi/wxamptrade/get_guarantee_status',
    title: '获取交易保障标状态',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/basic/api_getguaranteestatus.html',
  },
  /** 获取小程序交易体验分违规记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/basic/api_getpenaltylist.html */
  wxamptradeGetPenaltyList: {
    method: 'GET',
    path: '/wxaapi/wxamptrade/get_penalty_list',
    title: '获取小程序交易体验分违规记录',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/basic/api_getpenaltylist.html',
  },
  /** 创建回复 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_addcommentreply.html */
  commentCommentreplyAdd: {
    method: 'POST',
    path: '/wxaapi/comment/commentreply/add',
    title: '创建回复',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_addcommentreply.html',
  },
  /** 创建评论 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_addreply.html */
  commentReplyAdd: {
    method: 'POST',
    path: '/wxaapi/comment/reply/add',
    title: '创建评论',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_addreply.html',
  },
  /** 确认和解 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_confirmcompromise.html */
  commentConfirmcompromise: {
    method: 'POST',
    path: '/wxaapi/comment/confirmcompromise',
    title: '确认和解',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_confirmcompromise.html',
  },
  /** 删除回复 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_deletecommentreply.html */
  commentCommentreplyDelete: {
    method: 'POST',
    path: '/wxaapi/comment/commentreply/delete',
    title: '删除回复',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_deletecommentreply.html',
  },
  /** 删除评论 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_deletereply.html */
  commentReplyDelete: {
    method: 'POST',
    path: '/wxaapi/comment/reply/delete',
    title: '删除评论',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_deletereply.html',
  },
  /** 查询评价列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_getccommentlist.html */
  commentMpcommentlistGet: {
    method: 'GET',
    path: '/wxaapi/comment/mpcommentlist/get',
    title: '查询评价列表',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_getccommentlist.html',
  },
  /** 查询评价详情 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_getcommentinfo.html */
  commentCommentinfoGet: {
    method: 'GET',
    path: '/wxaapi/comment/commentinfo/get',
    title: '查询评价详情',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_getcommentinfo.html',
  },
  /** 查询评论列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_getcommentreplylist.html */
  commentReplyandcommentreplylistGet: {
    method: 'GET',
    path: '/wxaapi/comment/replyandcommentreplylist/get',
    title: '查询评论列表',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_getcommentreplylist.html',
  },
  /** 重置Api客服quota @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_resetapikfquota.html */
  commentApikfquotaReset: {
    method: 'POST',
    path: '/wxaapi/comment/apikfquota/reset',
    title: '重置Api客服quota',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_resetapikfquota.html',
  },
  /** 商家申诉 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/complaint/api_busiappeal.html */
  minishopBusiAppeal: {
    method: 'POST',
    path: '/wxaapi/minishop/busiAppeal',
    title: '商家申诉',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/complaint/api_busiappeal.html',
  },
  /** 查询投诉单详情 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/complaint/api_getorderdetail.html */
  minishopComplaintOrderDetail: {
    method: 'GET',
    path: '/wxaapi/minishop/complaintOrderDetail',
    title: '查询投诉单详情',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/complaint/api_getorderdetail.html',
  },
  /** 商家回应投诉 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/complaint/api_respondcomplaint.html */
  minishopBussiRespondComplaint: {
    method: 'POST',
    path: '/wxaapi/minishop/bussiRespondComplaint',
    title: '商家回应投诉',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/complaint/api_respondcomplaint.html',
  },
  /** 商家提交退款凭证 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/complaint/api_submitrefund.html */
  minishopBussiSupplyRefund: {
    method: 'POST',
    path: '/wxaapi/minishop/bussiSupplyRefund',
    title: '商家提交退款凭证',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/complaint/api_submitrefund.html',
  },
  /** 商家补充凭证 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/complaint/api_supplyproof.html */
  minishopBussiSupplyProof: {
    method: 'POST',
    path: '/wxaapi/minishop/bussiSupplyProof',
    title: '商家补充凭证',
    cat: 'transaction-guarantee',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/complaint/api_supplyproof.html',
  },
  // ===== user-info =====
  /** 检查加密信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-info/basic-info/api_checkencrypteddata.html */
  businessCheckencryptedmsg: {
    method: 'POST',
    path: '/wxa/business/checkencryptedmsg',
    title: '检查加密信息',
    cat: 'user-info',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/user-info/basic-info/api_checkencrypteddata.html',
  },
  /** 支付后获取Unionid @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-info/basic-info/api_getpaidunionid.html */
  getpaidunionid: {
    method: 'GET',
    path: '/wxa/getpaidunionid',
    title: '支付后获取Unionid',
    cat: 'user-info',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/user-info/basic-info/api_getpaidunionid.html',
  },
  /** 获取插件用户openpid @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-info/basic-info/api_getpluginopenpid.html */
  getpluginopenpid: {
    method: 'POST',
    path: '/wxa/getpluginopenpid',
    title: '获取插件用户openpid',
    cat: 'user-info',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/user-info/basic-info/api_getpluginopenpid.html',
  },
  /** 获取用户encryptKey @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-info/internet/api_getuserencryptkey.html */
  businessGetuserencryptkey: {
    method: 'GET',
    path: '/wxa/business/getuserencryptkey',
    title: '获取用户encryptKey',
    cat: 'user-info',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/user-info/internet/api_getuserencryptkey.html',
  },
  /** 获取手机号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-info/phone-number/api_getphonenumber.html */
  businessGetuserphonenumber: {
    method: 'POST',
    path: '/wxa/business/getuserphonenumber',
    title: '获取手机号',
    cat: 'user-info',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/user-info/phone-number/api_getphonenumber.html',
  },
  // ===== user-login =====
  /** 检验登录态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-login/api_checksessionkey.html */
  checksession: {
    method: 'GET',
    path: '/wxa/checksession',
    title: '检验登录态',
    cat: 'user-login',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/user-login/api_checksessionkey.html',
  },
  /** 小程序登录凭证校验 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-login/api_code2session.html */
  jscode2session: {
    method: 'GET',
    path: '/sns/jscode2session',
    title: '小程序登录凭证校验',
    cat: 'user-login',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/user-login/api_code2session.html',
  },
  /** 重置登录态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-login/api_resetusersessionkey.html */
  resetusersessionkey: {
    method: 'GET',
    path: '/wxa/resetusersessionkey',
    title: '重置登录态',
    cat: 'user-login',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/user-login/api_resetusersessionkey.html',
  },
  // ===== weixin-express =====
  /** 传运单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-msg/api_follow_waybill.html */
  expressDeliveryOpenMsgFollowWaybill: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/open_msg/follow_waybill',
    title: '传运单',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-msg/api_follow_waybill.html',
  },
  /** 获取运力id列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-msg/api_get_delivery_list.html */
  expressDeliveryOpenMsgGetDeliveryList: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/open_msg/get_delivery_list',
    title: '获取运力id列表',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-msg/api_get_delivery_list.html',
  },
  /** 查运单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-msg/api_query_follow_trace.html */
  expressDeliveryOpenMsgQueryFollowTrace: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/open_msg/query_follow_trace',
    title: '查运单',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-msg/api_query_follow_trace.html',
  },
  /** 更新物品信息接口 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-msg/api_update_follow_waybill_goods.html */
  expressDeliveryOpenMsgUpdateFollowWaybillGoods: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/open_msg/update_follow_waybill_goods',
    title: '更新物品信息接口',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-msg/api_update_follow_waybill_goods.html',
  },
  /** 创建退货ID @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-return/api_addreturnid.html */
  expressDeliveryNoWorryReturnAdd: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/no_worry_return/add',
    title: '创建退货ID',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-return/api_addreturnid.html',
  },
  /** 查询退货ID状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-return/api_getreturnid.html */
  expressDeliveryNoWorryReturnGet: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/no_worry_return/get',
    title: '查询退货ID状态',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-return/api_getreturnid.html',
  },
  /** 解绑退货ID @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-return/api_unbindreturnid.html */
  expressDeliveryNoWorryReturnUnbind: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/no_worry_return/unbind',
    title: '解绑退货ID',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-return/api_unbindreturnid.html',
  },
  /** 查询运单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-search/api_query_trace.html */
  expressDeliveryOpenMsgQueryTrace: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/open_msg/query_trace',
    title: '查询运单',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-search/api_query_trace.html',
  },
  /** 传运单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-search/api_trace_waybill.html */
  expressDeliveryOpenMsgTraceWaybill: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/open_msg/trace_waybill',
    title: '传运单',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-search/api_trace_waybill.html',
  },
  /** 更新物流信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-search/api_update_waybill_goods.html */
  expressDeliveryOpenMsgUpdateWaybillGoods: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/open_msg/update_waybill_goods',
    title: '更新物流信息',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-search/api_update_waybill_goods.html',
  },
  /** 申请支付 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_applypay.html */
  businessInsuranceFreightApplypay: {
    method: 'POST',
    path: '/wxa/business/insurance_freight/applypay',
    title: '申请支付',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_applypay.html',
  },
  /** 无忧退理赔 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_claim.html */
  businessInsuranceFreightClaim: {
    method: 'POST',
    path: '/wxa/business/insurance_freight/claim',
    title: '无忧退理赔',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_claim.html',
  },
  /** 申请充值订单号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_createchargeid.html */
  businessInsuranceFreightCreatechargeid: {
    method: 'POST',
    path: '/wxa/business/insurance_freight/createchargeid',
    title: '申请充值订单号',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_createchargeid.html',
  },
  /** 发货时投保 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_createorder.html */
  businessInsuranceFreightCreateorder: {
    method: 'POST',
    path: '/wxa/business/insurance_freight/createorder',
    title: '发货时投保',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_createorder.html',
  },
  /** 拉取保单信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_getorderlist.html */
  businessInsuranceFreightGetorderlist: {
    method: 'POST',
    path: '/wxa/business/insurance_freight/getorderlist',
    title: '拉取保单信息',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_getorderlist.html',
  },
  /** 拉取充值订单信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_getpayorderlist.html */
  businessInsuranceFreightGetpayorderlist: {
    method: 'POST',
    path: '/wxa/business/insurance_freight/getpayorderlist',
    title: '拉取充值订单信息',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_getpayorderlist.html',
  },
  /** 拉取理赔摘要 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_getsummary.html */
  businessInsuranceFreightGetsummary: {
    method: 'POST',
    path: '/wxa/business/insurance_freight/getsummary',
    title: '拉取理赔摘要',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_getsummary.html',
  },
  /** 开通无忧退货 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_open.html */
  businessInsuranceFreightOpen: {
    method: 'GET',
    path: '/wxa/business/insurance_freight/open',
    title: '开通无忧退货',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_open.html',
  },
  /** 查询开通状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_query_open.html */
  businessInsuranceFreightQueryOpen: {
    method: 'GET',
    path: '/wxa/business/insurance_freight/query_open',
    title: '查询开通状态',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_query_open.html',
  },
  /** 充值保费退款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_refund.html */
  businessInsuranceFreightRefund: {
    method: 'POST',
    path: '/wxa/business/insurance_freight/refund',
    title: '充值保费退款',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_refund.html',
  },
  /** 设置保费告警余额 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_update_notify_funds.html */
  businessInsuranceFreightUpdateNotifyFunds: {
    method: 'POST',
    path: '/wxa/business/insurance_freight/update_notify_funds',
    title: '设置保费告警余额',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_update_notify_funds.html',
  },
  /** 推送已绑定物流轨迹信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/msgpush/api_deliverypathnotify.html */
  expressDeliveryPathnotify: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/pathnotify',
    title: '推送已绑定物流轨迹信息',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/msgpush/api_deliverypathnotify.html',
  },
  /** 用户手机状态查询 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/msgpush/api_deliveryuserquery.html */
  expressDeliveryUserquery: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/userquery',
    title: '用户手机状态查询',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/msgpush/api_deliveryuserquery.html',
  },
  /** 创建配送单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_addorder.html */
  expressIntracityAddorder: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/addorder',
    title: '创建配送单',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_addorder.html',
  },
  /** 开通门店权限 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_apply.html */
  expressIntracityApply: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/apply',
    title: '开通门店权限',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_apply.html',
  },
  /** 门店余额查询 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_balancequery.html */
  expressIntracityBalancequery: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/balancequery',
    title: '门店余额查询',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_balancequery.html',
  },
  /** 取消配送单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_cancelorder.html */
  expressIntracityCancelorder: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/cancelorder',
    title: '取消配送单',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_cancelorder.html',
  },
  /** 创建门店 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_createstore.html */
  expressIntracityCreatestore: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/createstore',
    title: '创建门店',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_createstore.html',
  },
  /** 查询支持同城配送的城市 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_getcity.html */
  expressIntracityGetcity: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/getcity',
    title: '查询支持同城配送的城市',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_getcity.html',
  },
  /** 查询扣费主体 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_getpaymode.html */
  expressIntracityGetpaymode: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/getpaymode',
    title: '查询扣费主体',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_getpaymode.html',
  },
  /** 模拟回调接口 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_mocknotify.html */
  expressIntracityMocknotify: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/mocknotify',
    title: '模拟回调接口',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_mocknotify.html',
  },
  /** 查询运费 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_preaddorder.html */
  expressIntracityPreaddorder: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/preaddorder',
    title: '查询运费',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_preaddorder.html',
  },
  /** 门店运费流水查询 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_queryflow.html */
  expressIntracityQueryflow: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/queryflow',
    title: '门店运费流水查询',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_queryflow.html',
  },
  /** 查询配送单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_queryorder.html */
  expressIntracityQueryorder: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/queryorder',
    title: '查询配送单',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_queryorder.html',
  },
  /** 查询门店 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_querystore.html */
  expressIntracityQuerystore: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/querystore',
    title: '查询门店',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_querystore.html',
  },
  /** 设置扣费主体 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_setpaymode.html */
  expressIntracitySetpaymode: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/setpaymode',
    title: '设置扣费主体',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_setpaymode.html',
  },
  /** 门店运费退款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_store_refund.html */
  expressIntracityStorerefund: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/storerefund',
    title: '门店运费退款',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_store_refund.html',
  },
  /** 门店运费充值 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_storecharge.html */
  expressIntracityStorecharge: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/storecharge',
    title: '门店运费充值',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_storecharge.html',
  },
  /** 更新门店 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_updatestore.html */
  expressIntracityUpdatestore: {
    method: 'POST',
    path: '/cgi-bin/express/intracity/updatestore',
    title: '更新门店',
    cat: 'weixin-express',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_updatestore.html',
  },
  // ===== wx-service-market =====
  /** 调用服务市场接口 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/wx-service-market/api_invokeservice.html */
  servicemarket: {
    method: 'POST',
    path: '/wxa/servicemarket',
    title: '调用服务市场接口',
    cat: 'wx-service-market',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/wx-service-market/api_invokeservice.html',
  },
  /** 异步获取处理数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/wx-service-market/api_servicemarketretrieve.html */
  servicemarketretrieve: {
    method: 'POST',
    path: '/wxa/servicemarketretrieve',
    title: '异步获取处理数据',
    cat: 'wx-service-market',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/wx-service-market/api_servicemarketretrieve.html',
  },
  // ===== wxsearch =====
  /** 搜一搜数据推送 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/wxsearch/api_submitpages.html */
  searchWxaapiSubmitpages: {
    method: 'POST',
    path: '/wxa/search/wxaapi_submitpages',
    title: '搜一搜数据推送',
    cat: 'wxsearch',
    doc: 'https://developers.weixin.qq.com/miniprogram/dev/server/API/wxsearch/api_submitpages.html',
  },
} as const satisfies Record<string, EndpointMeta>;

/** operationId 联合类型。 */
export type EndpointId = keyof typeof endpoints;

/** 调用某端点的最小客户端形状（非泛型，便于适配 callComponent/callAuthorizer 等自定义逃生口）。 */
export interface GeneratedCaller {
  request(opts: CallOptions): Promise<unknown>;
}

/** 调用时附加项：支持替换 URL 路径中的 {占位符}（如 {out_trade_no}）。 */
export type GeneratedCallExtra = Partial<CallOptions> & {
  params?: Record<string, string | number>;
};

/** 全量接口表（按 operationId 调用，自动鉴权；签名取自官方文档参数表）。 */
export interface GeneratedApi {
  /** 添加分账方 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_addprofitsharingaccount.html */
  b2bAddprofitsharingaccount(
    body?: B2bAddprofitsharingaccountBody,
    query?: B2bAddprofitsharingaccountQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bAddprofitsharingaccountResp>;
  /** 关闭订单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_closeb2border.html */
  b2bCloseb2border(
    body?: B2bCloseb2borderBody,
    query?: B2bCloseb2borderQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bCloseb2borderResp>;
  /** 请求分账 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_createprofitsharingorder.html */
  b2bCreateprofitsharingorder(
    body?: B2bCreateprofitsharingorderBody,
    query?: B2bCreateprofitsharingorderQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bCreateprofitsharingorderResp>;
  /** 跳转银行转账页面 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_createwqflink.html */
  b2bCreatewqflink(
    body?: B2bCreatewqflinkBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bCreatewqflinkResp>;
  /** 删除分账方 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_delprofitsharingaccount.html */
  b2bDelprofitsharingaccount(
    body?: B2bDelprofitsharingaccountBody,
    query?: B2bDelprofitsharingaccountQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bDelprofitsharingaccountResp>;
  /** 接口下载交易账单与资金账单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_downloadbill.html */
  b2bDownloadbill(
    body?: B2bDownloadbillBody,
    query?: B2bDownloadbillQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bDownloadbillResp>;
  /** 完成分账 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_finishprofitsharingorder.html */
  b2bFinishprofitsharingorder(
    body?: B2bFinishprofitsharingorderBody,
    query?: B2bFinishprofitsharingorderQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bFinishprofitsharingorderResp>;
  /** 获取密钥AppKey @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getappkey.html */
  b2bGetappkey(
    body?: B2bGetappkeyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bGetappkeyResp>;
  /** 查询账户余额 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getmchbalance.html */
  b2bGetmchbalance(
    body?: B2bGetmchbalanceBody,
    query?: B2bGetmchbalanceQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bGetmchbalanceResp>;
  /** 获取小程序下所有商户的信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getmchinfo.html */
  b2bGetmchinfo(
    body?: B2bGetmchinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bGetmchinfoResp>;
  /** 查询订单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getorder.html */
  b2bGetorder(
    body?: B2bGetorderBody,
    query?: B2bGetorderQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bGetorderResp>;
  /** 查询退款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getrefund.html */
  b2bGetrefund(
    body?: B2bGetrefundBody,
    query?: B2bGetrefundQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bGetrefundResp>;
  /** 查询银行转账的技术服务费率 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_getwqfchargefee.html */
  b2bGetwqfchargefee(
    body?: B2bGetwqfchargefeeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bGetwqfchargefeeResp>;
  /** 发起手动提现 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_manualwithdraw.html */
  b2bWithdraw(
    body?: B2bWithdrawBody,
    query?: B2bWithdrawQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bWithdrawResp>;
  /** 查询分账方 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_queryprofitsharingaccount.html */
  b2bQueryprofitsharingaccount(
    body?: B2bQueryprofitsharingaccountBody,
    query?: B2bQueryprofitsharingaccountQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bQueryprofitsharingaccountResp>;
  /** 查询分账结果 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_queryprofitsharingorder.html */
  b2bQueryprofitsharingorder(
    body?: B2bQueryprofitsharingorderBody,
    query?: B2bQueryprofitsharingorderQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bQueryprofitsharingorderResp>;
  /** 查询分账剩余金额 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_queryprofitsharingremainamt.html */
  b2bQueryprofitsharingremainamt(
    body?: B2bQueryprofitsharingremainamtBody,
    query?: B2bQueryprofitsharingremainamtQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bQueryprofitsharingremainamtResp>;
  /** 查询分账回退结果 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_queryrefundprofitsharingorder.html */
  b2bQueryrefundprofitsharingorder(
    body?: B2bQueryrefundprofitsharingorderBody,
    query?: B2bQueryrefundprofitsharingorderQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bQueryrefundprofitsharingorderResp>;
  /** 查询提现状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_querywithdraw.html */
  b2bQuerywithdraw(
    body?: B2bQuerywithdrawBody,
    query?: B2bQuerywithdrawQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bQuerywithdrawResp>;
  /** 退款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_refundorder.html */
  b2bRefund(
    body?: B2bRefundBody,
    query?: B2bRefundQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bRefundResp>;
  /** 请求分账回退 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_refundprofitsharing.html */
  b2bRefundprofitsharing(
    body?: B2bRefundprofitsharingBody,
    query?: B2bRefundprofitsharingQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bRefundprofitsharingResp>;
  /** 申请开通银行转账 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_registeronlywqf.html */
  b2bRegisteronlywqf(
    body?: B2bRegisteronlywqfBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bRegisteronlywqfResp>;
  /** 查询商户号开通状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_retailgetmchorder.html */
  b2bRetailgetmchorder(
    body?: B2bRetailgetmchorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bRetailgetmchorderResp>;
  /** 商户号进件 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_retailregistermch.html */
  b2bRetailregistermch(
    body?: B2bRetailregistermchBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bRetailregistermchResp>;
  /** 上传商户图片 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_retailuploadmchfile.html */
  b2bRetailuploadmchfile(
    body?: B2bRetailuploadmchfileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bRetailuploadmchfileResp>;
  /** 微信支付自动提现接口 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_setautowithdraw.html */
  b2bSetautowithdraw(
    body?: B2bSetautowithdrawBody,
    query?: B2bSetautowithdrawQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bSetautowithdrawResp>;
  /** 报名微信支付技术服务费优惠活动 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_setmchprofitrate.html */
  b2bSetmchprofitrate(
    body?: B2bSetmchprofitrateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bSetmchprofitrateResp>;
  /** 报名银行转账技术服务费优惠活动 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/bill/api_updatewqfchargefee.html */
  b2bUpdatewqfchargefee(
    body?: B2bUpdatewqfchargefeeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<B2bUpdatewqfchargefeeResp>;
  /** 消息效果数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/notify/api_getretailmessagelist.html */
  businessGetretailmessagelist(
    body?: BusinessGetretailmessagelistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessGetretailmessagelistResp>;
  /** 模板消息列表及下发 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/notify/api_retailnotifybusiness.html */
  businessRetailnotifybusiness(
    body?: BusinessRetailnotifybusinessBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessRetailnotifybusinessResp>;
  /** 预录入门店信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/store_assistant/api_batchcreateretail.html */
  businessBatchcreateretail(
    body?: BusinessBatchcreateretailBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessBatchcreateretailResp>;
  /** 门店信息查询 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/store_assistant/api_getretailinfo.html */
  businessGetretailinfo(
    body?: BusinessGetretailinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessGetretailinfoResp>;
  /** 全量授权门店查询 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/store_assistant/api_getretailopenidlist.html */
  businessGetretailopenidlist(
    body?: BusinessGetretailopenidlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessGetretailopenidlistResp>;
  /** 开通流程 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/B2b/store_assistant/api_retailbusinessapply.html */
  businessRetailbusinessapply(
    body?: BusinessRetailbusinessapplyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessRetailbusinessapplyResp>;
  /** 绑定广告金充值账户 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_bind_transfer_accout.html */
  bindTransferAccout(
    body?: BindTransferAccoutBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BindTransferAccoutResp>;
  /** 代币支付退款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_cancel_currency_pay.html */
  cancelCurrencyPay(
    body?: CancelCurrencyPayBody,
    query?: CancelCurrencyPayQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CancelCurrencyPayResp>;
  /** 商家解约 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_cancel_subscribe_contract.html */
  cancelSubscribeContract(
    body?: CancelSubscribeContractBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CancelSubscribeContractResp>;
  /** 完成投诉处理 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_complete_complaint.html */
  completeComplaint(
    body?: CompleteComplaintBody,
    query?: CompleteComplaintQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CompleteComplaintResp>;
  /** 充值广告金 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_create_funds_bill.html */
  createFundsBill(
    body?: CreateFundsBillBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CreateFundsBillResp>;
  /** 创建提现单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_create_withdraw_order.html */
  createWithdrawOrder(
    body?: CreateWithdrawOrderBody,
    query?: CreateWithdrawOrderQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CreateWithdrawOrderResp>;
  /** 扣减代币 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_currency_pay.html */
  currencyPay(
    body?: CurrencyPayBody,
    query?: CurrencyPayQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CurrencyPayResp>;
  /** 下载广告金对应的商户订单信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_download_adverfunds_order.html */
  downloadAdverfundsOrder(
    body?: DownloadAdverfundsOrderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<DownloadAdverfundsOrderResp>;
  /** 下载小程序账单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_download_bill.html */
  downloadBill(
    body?: DownloadBillBody,
    query?: DownloadBillQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<DownloadBillResp>;
  /** 获取投诉详情 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_get_complaint_detail.html */
  getComplaintDetail(
    body?: GetComplaintDetailBody,
    query?: GetComplaintDetailQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetComplaintDetailResp>;
  /** 获取投诉列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_get_complaint_list.html */
  getComplaintList(
    body?: GetComplaintListBody,
    query?: GetComplaintListQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetComplaintListResp>;
  /** 获取协商历史 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_get_negotiation_history.html */
  getNegotiationHistory(
    body?: GetNegotiationHistoryBody,
    query?: GetNegotiationHistoryQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetNegotiationHistoryResp>;
  /** 获取微信支付反馈投诉图片的签名头部 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_get_upload_file_sign.html */
  getUploadFileSign(
    body?: GetUploadFileSignBody,
    query?: GetUploadFileSignQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetUploadFileSignResp>;
  /** 通知已发货完成 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_notify_provide_goods.html */
  notifyProvideGoods(
    body?: NotifyProvideGoodsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NotifyProvideGoodsResp>;
  /** 代币赠送 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_present_currency.html */
  presentCurrency(
    body?: PresentCurrencyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<PresentCurrencyResp>;
  /** 查询广告金发放记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_adver_funds.html */
  queryAdverFunds(
    body?: QueryAdverFundsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryAdverFundsResp>;
  /** 查询商家账户可提现余额 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_biz_balance.html */
  queryBizBalance(
    body?: QueryBizBalanceBody,
    query?: QueryBizBalanceQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryBizBalanceResp>;
  /** 查询下载订单任务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_download_order.html */
  queryDownloadOrder(
    body?: QueryDownloadOrderBody,
    query?: QueryDownloadOrderQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryDownloadOrderResp>;
  /** 查询广告金充值记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_funds_bill.html */
  queryFundsBill(
    body?: QueryFundsBillBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryFundsBillResp>;
  /** 查询创建的订单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_order.html */
  queryOrder(
    body?: QueryOrderBody,
    query?: QueryOrderQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryOrderResp>;
  /** 查询批量发布道具任务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_publish_goods.html */
  queryPublishGoods(
    body?: QueryPublishGoodsBody,
    query?: QueryPublishGoodsQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryPublishGoodsResp>;
  /** 查询广告金回收记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_recover_bill.html */
  queryRecoverBill(
    body?: QueryRecoverBillBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryRecoverBillResp>;
  /** 查询签约关系 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_subscribe_contract.html */
  querySubscribeContract(
    body?: QuerySubscribeContractBody,
    query?: QuerySubscribeContractQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QuerySubscribeContractResp>;
  /** 查询广告金充值账户 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_transfer_account.html */
  queryTransferAccount(
    body?: QueryTransferAccountBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryTransferAccountResp>;
  /** 查询批量上传道具任务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_upload_goods.html */
  queryUploadGoods(
    body?: QueryUploadGoodsBody,
    query?: QueryUploadGoodsQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryUploadGoodsResp>;
  /** 查询代币余额 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_user_balance.html */
  queryUserBalance(
    body?: QueryUserBalanceBody,
    query?: QueryUserBalanceQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryUserBalanceResp>;
  /** 查询提现单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_query_withdraw_order.html */
  queryWithdrawOrder(
    body?: QueryWithdrawOrderBody,
    query?: QueryWithdrawOrderQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryWithdrawOrderResp>;
  /** 启动订单退款任务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_refund_order.html */
  refundOrder(
    body?: RefundOrderBody,
    query?: RefundOrderQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<RefundOrderResp>;
  /** 回复用户 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_response_complaint.html */
  responseComplaint(
    body?: ResponseComplaintBody,
    query?: ResponseComplaintQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ResponseComplaintResp>;
  /** 预通知扣款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_send_subscribe_pre_payment.html */
  sendSubscribePrePayment(
    body?: SendSubscribePrePaymentBody,
    query?: SendSubscribePrePaymentQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SendSubscribePrePaymentResp>;
  /** 下载支付订单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_start_download_order.html */
  startDownloadOrder(
    body?: StartDownloadOrderBody,
    query?: StartDownloadOrderQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<StartDownloadOrderResp>;
  /** 启动批量发布道具任务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_start_publish_goods.html */
  startPublishGoods(
    body?: StartPublishGoodsBody,
    query?: StartPublishGoodsQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<StartPublishGoodsResp>;
  /** 批量上传道具 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_start_upload_goods.html */
  startUploadGoods(
    body?: StartUploadGoodsBody,
    query?: StartUploadGoodsQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<StartUploadGoodsResp>;
  /** 发起订阅扣款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_submit_subscribe_pay_order.html */
  submitSubscribePayOrder(
    body?: SubmitSubscribePayOrderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SubmitSubscribePayOrderResp>;
  /** 上传媒体文件 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/VirtualPayment/api_upload_vp_file.html */
  uploadVpFile(
    body?: UploadVpFileBody,
    query?: UploadVpFileQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UploadVpFileResp>;
  /** 获取小程序某个付费能力的最近用量数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/charge/api_getrecentaverageusage.html */
  chargeUsageGetRecentAverage(
    body?: ChargeUsageGetRecentAverageBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ChargeUsageGetRecentAverageResp>;
  /** 查询购买资源包的用量情况 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/charge/api_getusagedetail.html */
  chargeUsageGet(
    body?: ChargeUsageGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ChargeUsageGetResp>;
  /** 校验实名信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/basic/api_checkrealnameinfo.html */
  realnameCheckrealnameinfo(
    body?: RealnameCheckrealnameinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<RealnameCheckrealnameinfoResp>;
  /** 消息通路发消息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/basic/api_cityservice_sendmsgdata.html */
  cityserviceSendmsgdata(
    body?: CityserviceSendmsgdataBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CityserviceSendmsgdataResp>;
  /** 获取城市服务限定页面链接 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/basic/api_cityserviceservicehomepath.html */
  cityserviceGetservicepath(
    body?: CityserviceGetservicepathBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CityserviceGetservicepathResp>;
  /** 仿原生跳转 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/basic/api_transportcode_getbusinessview.html */
  transportcodeGetbusinessview(
    body?: TransportcodeGetbusinessviewBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TransportcodeGetbusinessviewResp>;
  /** 查询用户实名API @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_cityservice_getmedrealname.html */
  cityserviceGetmedrealname(
    body?: CityserviceGetmedrealnameBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CityserviceGetmedrealnameResp>;
  /** 查询用户是否开通 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_cityservice_getmsgrelation.html */
  cityserviceGetmsgrelation(
    body?: CityserviceGetmsgrelationBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CityserviceGetmsgrelationResp>;
  /** 查询所有公告 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_intp_eldermed_gethospnoticelist.html */
  eldermedicalGethospnoticelist(
    body?: EldermedicalGethospnoticelistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EldermedicalGethospnoticelistResp>;
  /** 正式发布公告 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_intp_eldermed_publichopsnotice.html */
  eldermedicalPublichopsnotice(
    body?: EldermedicalPublichopsnoticeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EldermedicalPublichopsnoticeResp>;
  /** 公告草稿预览设置 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_previewhopsnotice.html */
  eldermedicalPreviewhopsnotice(
    body?: EldermedicalPreviewhopsnoticeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EldermedicalPreviewhopsnoticeResp>;
  /** 添加公告草稿 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/elderMedical/api_sethopsnotice.html */
  eldermedicalSethopsnotice(
    body?: EldermedicalSethopsnoticeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EldermedicalSethopsnoticeResp>;
  /** 消息推送接口 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cityservice/medicalassistant/api_cityservice_sendchannelmsg.html */
  cityserviceSendchannelmsg(
    body?: CityserviceSendchannelmsgBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CityserviceSendchannelmsgResp>;
  /** 新增集合 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_adddatabasecollection.html */
  tcbDatabasecollectionadd(
    body?: TcbDatabasecollectionaddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasecollectionaddResp>;
  /** 数据库插入记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_adddatabaseitem.html */
  tcbDatabaseadd(
    body?: TcbDatabaseaddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabaseaddResp>;
  /** 数据库聚合 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_aggregatedatabase.html */
  tcbDatabaseaggregate(
    body?: TcbDatabaseaggregateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabaseaggregateResp>;
  /** 删除集合 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_deletedatabasecollection.html */
  tcbDatabasecollectiondelete(
    body?: TcbDatabasecollectiondeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasecollectiondeleteResp>;
  /** 数据库删除记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_deletedatabaseitem.html */
  tcbDatabasedelete(
    body?: TcbDatabasedeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasedeleteResp>;
  /** 数据库导出 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_exportdatabaseitem.html */
  tcbDatabasemigrateexport(
    body?: TcbDatabasemigrateexportBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasemigrateexportResp>;
  /** 获取集合信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_getdatabasecollection.html */
  tcbDatabasecollectionget(
    body?: TcbDatabasecollectiongetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasecollectiongetResp>;
  /** 统计集合记录数 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_getdatabasecount.html */
  tcbDatabasecount(
    body?: TcbDatabasecountBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasecountResp>;
  /** 数据库迁移状态查询 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_getdatabasemigratestatus.html */
  tcbDatabasemigratequeryinfo(
    body?: TcbDatabasemigratequeryinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasemigratequeryinfoResp>;
  /** 数据库查询记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_getdatabaserecord.html */
  tcbDatabasequery(
    body?: TcbDatabasequeryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasequeryResp>;
  /** 数据库导入 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_importdatabaseitem.html */
  tcbDatabasemigrateimport(
    body?: TcbDatabasemigrateimportBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasemigrateimportResp>;
  /** 更新数据库索引 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_updatedatabaseindexs.html */
  tcbUpdateindex(
    body?: TcbUpdateindexBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbUpdateindexResp>;
  /** 数据库更新记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/database/api_updatedatabaserecord.html */
  tcbDatabaseupdate(
    body?: TcbDatabaseupdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabaseupdateResp>;
  /** 延时调用云函数 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/functions/api_adddelayedfunctiontask.html */
  tcbAdddelayedfunctiontask(
    body?: TcbAdddelayedfunctiontaskBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbAdddelayedfunctiontaskResp>;
  /** 云开发上报接口 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_cloudbasereportapi.html */
  tcbCloudbasereport(
    body?: TcbCloudbasereportBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbCloudbasereportResp>;
  /** 创建发短信任务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_createsendsmstask.html */
  tcbCreatesendsmstask(
    body?: TcbCreatesendsmstaskBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbCreatesendsmstaskResp>;
  /** 描述扩展上传文件信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_describeextensionuploadinfo.html */
  tcbDescribeextensionuploadinfo(
    body?: TcbDescribeextensionuploadinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDescribeextensionuploadinfoResp>;
  /** 查询短信记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_describesmsrecords.html */
  tcbDescribesmsrecords(
    body?: TcbDescribesmsrecordsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDescribesmsrecordsResp>;
  /** 获取云开发数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_getcloudbasestatistics.html */
  tcbGetstatistics(
    body?: TcbGetstatisticsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbGetstatisticsResp>;
  /** 获取实时语音签名 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_getcloudbasevoipsign.html */
  getvoipsign(
    body?: GetvoipsignBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetvoipsignResp>;
  /** 获取腾讯云API调用凭证 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_getcloudtoken.html */
  tcbGetqcloudtoken(
    body?: TcbGetqcloudtokenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbGetqcloudtokenResp>;
  /** 获取cloudID对应的数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_getopendata.html */
  getopendata(
    body?: GetopendataBody,
    query?: GetopendataQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetopendataResp>;
  /** 发送短信v2 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_newsendcloudbasesms.html */
  tcbSendsmsv2(
    body?: TcbSendsmsv2Body,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbSendsmsv2Resp>;
  /** 发送短信 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/others/api_sendcloudbasesms.html */
  tcbSendsms(
    body?: TcbSendsmsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbSendsmsResp>;
  /** 删除文件 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/storage/api_deletetcbcloudfile.html */
  tcbBatchdeletefile(
    body?: TcbBatchdeletefileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbBatchdeletefileResp>;
  /** 获取文件下载链接 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/storage/api_getdownloadtcbfilelink.html */
  tcbBatchdownloadfile(
    body?: TcbBatchdownloadfileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbBatchdownloadfileResp>;
  /** 获取文件上传链接 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/cloudbase/storage/api_getuploadtcbfilelink.html */
  tcbUploadfile(
    body?: TcbUploadfileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbUploadfileResp>;
  /** 获取用户访问小程序数据概况 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/others/api_getdailysummary.html */
  getweanalysisappiddailysummarytrend(
    body?: GetweanalysisappiddailysummarytrendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetweanalysisappiddailysummarytrendResp>;
  /** 获取小程序性能数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/others/api_getperformancedata.html */
  businessPerformanceBoot(
    body?: BusinessPerformanceBootBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessPerformanceBootResp>;
  /** 获取小程序用户画像分布 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/others/api_getuserportrait.html */
  getweanalysisappiduserportrait(
    body?: GetweanalysisappiduserportraitBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetweanalysisappiduserportraitResp>;
  /** 获取用户小程序访问分布数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/others/api_getvisitdistribution.html */
  getweanalysisappidvisitdistribution(
    body?: GetweanalysisappidvisitdistributionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetweanalysisappidvisitdistributionResp>;
  /** 获取访问页面数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/others/api_getvisitpage.html */
  getweanalysisappidvisitpage(
    body?: GetweanalysisappidvisitpageBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetweanalysisappidvisitpageResp>;
  /** 获取用户访问小程序日留存 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-retain/api_getdailyretain.html */
  getweanalysisappiddailyretaininfo(
    body?: GetweanalysisappiddailyretaininfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetweanalysisappiddailyretaininfoResp>;
  /** 获取用户访问小程序月留存 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-retain/api_getmonthlyretain.html */
  getweanalysisappidmonthlyretaininfo(
    body?: GetweanalysisappidmonthlyretaininfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetweanalysisappidmonthlyretaininfoResp>;
  /** 获取用户访问小程序周留存 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-retain/api_getweeklyretain.html */
  getweanalysisappidweeklyretaininfo(
    body?: GetweanalysisappidweeklyretaininfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetweanalysisappidweeklyretaininfoResp>;
  /** 获取用户访问小程序数据日趋势 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-trend/api_getdailyvisittrend.html */
  getweanalysisappiddailyvisittrend(
    body?: GetweanalysisappiddailyvisittrendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetweanalysisappiddailyvisittrendResp>;
  /** 获取用户访问小程序数据月趋势 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-trend/api_getmonthlyvisittrend.html */
  getweanalysisappidmonthlyvisittrend(
    body?: GetweanalysisappidmonthlyvisittrendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetweanalysisappidmonthlyvisittrendResp>;
  /** 获取用户访问小程序数据周趋势 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/data-analysis/visit-trend/api_getweeklyvisittrend.html */
  getweanalysisappidweeklyvisittrend(
    body?: GetweanalysisappidweeklyvisittrendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetweanalysisappidweeklyvisittrendResp>;
  /** 批处理短剧合作推广计划 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_batchprocessdramapromotion.html */
  wxadramaBatchprocessdramapromotion(
    body?: WxadramaBatchprocessdramapromotionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxadramaBatchprocessdramapromotionResp>;
  /** 获取短剧变现类型 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developergetiaadrama.html */
  wxadramaDevelopergetiaadrama(
    body?: WxadramaDevelopergetiaadramaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxadramaDevelopergetiaadramaResp>;
  /** 获取已上架短剧 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developergetpublisheddrama.html */
  wxadramaDevelopergetpublisheddrama(
    body?: WxadramaDevelopergetpublisheddramaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxadramaDevelopergetpublisheddramaResp>;
  /** 短剧上架 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developerpublishdrama.html */
  wxadramaDeveloperpublishdrama(
    body?: WxadramaDeveloperpublishdramaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxadramaDeveloperpublishdramaResp>;
  /** 刷剧剧目设置 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developersetflushdrama.html */
  wxadramaDevelopersetflushdrama(
    body?: WxadramaDevelopersetflushdramaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxadramaDevelopersetflushdramaResp>;
  /** 设置短剧变现类型 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developersetiaadrama.html */
  wxadramaDevelopersetiaadrama(
    body?: WxadramaDevelopersetiaadramaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxadramaDevelopersetiaadramaResp>;
  /** 推荐剧目 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_developersetrecmddrama.html */
  wxadramaDevelopersetrecmddrama(
    body?: WxadramaDevelopersetrecmddramaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxadramaDevelopersetrecmddramaResp>;
  /** 获取短剧合作推广活动 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_getfinderevent.html */
  wxadramaGetfinderevent(
    body?: WxadramaGetfindereventBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxadramaGetfindereventResp>;
  /** 播放原始视频-推荐位控制接口 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/dramaOthersAPI/api_setplayerdramarecmdswitch.html */
  wxadramaSetplayerdramarecmdswitch(
    body?: WxadramaSetplayerdramarecmdswitchBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxadramaSetplayerdramarecmdswitchResp>;
  /** 生成运单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_addorder.html */
  expressBusinessOrderAdd(
    body?: ExpressBusinessOrderAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressBusinessOrderAddResp>;
  /** 批量获取运单数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_batchgetorder.html */
  expressBusinessOrderBatchget(
    body?: ExpressBusinessOrderBatchgetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressBusinessOrderBatchgetResp>;
  /** 绑定/解绑物流账号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_bindaccount.html */
  expressBusinessAccountBind(
    body?: ExpressBusinessAccountBindBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressBusinessAccountBindResp>;
  /** 取消运单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_cancelorder.html */
  expressBusinessOrderCancel(
    body?: ExpressBusinessOrderCancelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressBusinessOrderCancelResp>;
  /** 获取所有绑定的物流账号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getallaccount.html */
  expressBusinessAccountGetall(
    body?: ExpressBusinessAccountGetallBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressBusinessAccountGetallResp>;
  /** 获取支持的快递公司列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getalldelivery.html */
  expressBusinessDeliveryGetall(
    body?: ExpressBusinessDeliveryGetallBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressBusinessDeliveryGetallResp>;
  /** 获取运单数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getorder.html */
  expressBusinessOrderGet(
    body?: ExpressBusinessOrderGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressBusinessOrderGetResp>;
  /** 查询运单轨迹 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getpath.html */
  expressBusinessPathGet(
    body?: ExpressBusinessPathGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressBusinessPathGetResp>;
  /** 获取打印员 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getprinter.html */
  expressBusinessPrinterGetall(
    body?: ExpressBusinessPrinterGetallBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressBusinessPrinterGetallResp>;
  /** 获取电子面单余额 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_getquota.html */
  expressBusinessQuotaGet(
    body?: ExpressBusinessQuotaGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressBusinessQuotaGetResp>;
  /** 模拟更新订单状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_testupdateorder.html */
  expressBusinessTestUpdateOrder(
    body?: ExpressBusinessTestUpdateOrderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressBusinessTestUpdateOrderResp>;
  /** 配置面单打印员 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-business/api_updateprinter.html */
  expressBusinessPrinterUpdate(
    body?: ExpressBusinessPrinterUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressBusinessPrinterUpdateResp>;
  /** 获取面单联系人信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_getcontact.html */
  expressDeliveryContactGet(
    body?: ExpressDeliveryContactGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryContactGetResp>;
  /** 预览面单模板 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_previewtemplate.html */
  expressDeliveryTemplatePreview(
    body?: ExpressDeliveryTemplatePreviewBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryTemplatePreviewResp>;
  /** 对账单下载 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatter_get_bill.html */
  expressDeliverySingleWaybillGetBill(
    body?: ExpressDeliverySingleWaybillGetBillBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliverySingleWaybillGetBillResp>;
  /** 运力取消订单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatterdeliverycancel.html */
  expressDeliverySingleWaybillCancelOrder(
    body?: ExpressDeliverySingleWaybillCancelOrderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliverySingleWaybillCancelOrderResp>;
  /** 运力公司退款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatterdeliveryrefund.html */
  expressDeliverySingleWaybillRefundOrder(
    body?: ExpressDeliverySingleWaybillRefundOrderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliverySingleWaybillRefundOrderResp>;
  /** 运力返回用户投诉处理结果 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatterupdatecomplainresult.html */
  expressDeliveryScatterUpdateComplaintResult(
    body?: ExpressDeliveryScatterUpdateComplaintResultBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryScatterUpdateComplaintResultResp>;
  /** 运力更新需支付的运费 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatterupdateorderfee.html */
  expressDeliverySingleWaybillFee(
    body?: ExpressDeliverySingleWaybillFeeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliverySingleWaybillFeeResp>;
  /** 运力更新订单状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_scatterupdateorderstatus.html */
  expressDeliverySingleWaybillUpdate(
    body?: ExpressDeliverySingleWaybillUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliverySingleWaybillUpdateResp>;
  /** 更新商户审核结果 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_updatebusiness.html */
  expressDeliveryServiceBusinessUpdate(
    body?: ExpressDeliveryServiceBusinessUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryServiceBusinessUpdateResp>;
  /** 更新运单轨迹 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/express/express-by-provider/api_updatepath.html */
  expressDeliveryPathUpdate(
    body?: ExpressDeliveryPathUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryPathUpdateResp>;
  /** 获取用户人脸核身会话唯一标识 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/face/api_getverifyid.html */
  cityserviceFaceIdentifyGetverifyid(
    body?: CityserviceFaceIdentifyGetverifyidBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CityserviceFaceIdentifyGetverifyidResp>;
  /** 查询用户人脸核身真实验证结果 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/face/api_queryverifyinfo.html */
  cityserviceFaceIdentifyQueryverifyinfo(
    body?: CityserviceFaceIdentifyQueryverifyinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CityserviceFaceIdentifyQueryverifyinfoResp>;
  /** 激活设备license @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_activelicensedevice.html */
  businessLicenseActivedevice(
    body?: BusinessLicenseActivedeviceBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessLicenseActivedeviceResp>;
  /** 设备组添加设备 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_addiotgroupdevice.html */
  businessGroupAdddevice(
    body?: BusinessGroupAdddeviceBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessGroupAdddeviceResp>;
  /** 创建设备组 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_createiotgroupid.html */
  businessGroupCreateid(
    body?: BusinessGroupCreateidBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessGroupCreateidResp>;
  /** 查询设备组信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_getiotgroupinfo.html */
  businessGroupGetinfo(
    body?: BusinessGroupGetinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessGroupGetinfoResp>;
  /** 查询设备激活详情 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_getlicensedeviceinfo.html */
  businessLicenseGetdeviceinfo(
    body?: BusinessLicenseGetdeviceinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessLicenseGetdeviceinfoResp>;
  /** 查询license资源包列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_getlicensepkglist.html */
  businessLicenseGetpkglist(
    body?: BusinessLicenseGetpkglistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessLicenseGetpkglistResp>;
  /** 获取设备票据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_getsnticket.html */
  getsnticket(
    body?: GetsnticketBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetsnticketResp>;
  /** 设备组删除设备 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_removeiotgroupdevice.html */
  businessGroupRemovedevice(
    body?: BusinessGroupRemovedeviceBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessGroupRemovedeviceResp>;
  /** 发送设备消息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/hardware-device/api_sendhardwaredevicemessage.html */
  messageDeviceSubscribeSend(
    body?: MessageDeviceSubscribeSendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageDeviceSubscribeSendResp>;
  /** 图片智能裁剪 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/img/api_imgaicrop.html */
  cvImgAicrop(
    body?: CvImgAicropBody,
    query?: CvImgAicropQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvImgAicropResp>;
  /** 二维码/条码识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/img/api_imgqrcode.html */
  cvImgQrcode(
    body?: CvImgQrcodeBody,
    query?: CvImgQrcodeQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvImgQrcodeResp>;
  /** 图片高清化 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/img/api_imgsuperresolution.html */
  cvImgSuperresolution(
    body?: CvImgSuperresolutionBody,
    query?: CvImgSuperresolutionQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvImgSuperresolutionResp>;
  /** 银行卡识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_bankcardocr.html */
  cvOcrBankcard(
    body?: CvOcrBankcardBody,
    query?: CvOcrBankcardQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvOcrBankcardResp>;
  /** 营业执照识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_bizlicenseocr.html */
  cvOcrBizlicense(
    body?: CvOcrBizlicenseBody,
    query?: CvOcrBizlicenseQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvOcrBizlicenseResp>;
  /** 通用印刷体识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_commocr.html */
  cvOcrComm(
    body?: CvOcrCommBody,
    query?: CvOcrCommQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvOcrCommResp>;
  /** 驾驶证识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_drivinglicenseocr.html */
  cvOcrDrivinglicense(
    body?: CvOcrDrivinglicenseBody,
    query?: CvOcrDrivinglicenseQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvOcrDrivinglicenseResp>;
  /** 行驶证识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_drivingocr.html */
  cvOcrDriving(
    body?: CvOcrDrivingBody,
    query?: CvOcrDrivingQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvOcrDrivingResp>;
  /** 身份证识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/img-ocr/ocr/api_idcardocr.html */
  cvOcrIdcard(
    body?: CvOcrIdcardBody,
    query?: CvOcrIdcardQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvOcrIdcardResp>;
  /** 异常件退回商家确认 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_abnormalconfirm.html */
  expressLocalBusinessOrderConfirmReturn(
    body?: ExpressLocalBusinessOrderConfirmReturnBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressLocalBusinessOrderConfirmReturnResp>;
  /** 添加配送单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_addlocalorder.html */
  expressLocalBusinessOrderAdd(
    body?: ExpressLocalBusinessOrderAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressLocalBusinessOrderAddResp>;
  /** 添加小费 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_addtips.html */
  expressLocalBusinessOrderAddtips(
    body?: ExpressLocalBusinessOrderAddtipsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressLocalBusinessOrderAddtipsResp>;
  /** 发起绑定请求 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_bindlocalaccount.html */
  expressLocalBusinessShopAdd(
    body?: ExpressLocalBusinessShopAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressLocalBusinessShopAddResp>;
  /** 取消配送单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_cancellocalorder.html */
  expressLocalBusinessOrderCancel(
    body?: ExpressLocalBusinessOrderCancelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressLocalBusinessOrderCancelResp>;
  /** 获取已支持的配送公司列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_getallimmedelivery.html */
  expressLocalBusinessDeliveryGetall(
    body?: ExpressLocalBusinessDeliveryGetallBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressLocalBusinessDeliveryGetallResp>;
  /** 拉取已绑定账号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_getbindaccount.html */
  expressLocalBusinessShopGet(
    body?: ExpressLocalBusinessShopGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressLocalBusinessShopGetResp>;
  /** 拉取配送单信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_getlocalorder.html */
  expressLocalBusinessOrderGet(
    body?: ExpressLocalBusinessOrderGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressLocalBusinessOrderGetResp>;
  /** 模拟配送公司更新配送单状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_mockupdateorder.html */
  expressLocalBusinessTestUpdateOrder(
    body?: ExpressLocalBusinessTestUpdateOrderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressLocalBusinessTestUpdateOrderResp>;
  /** 申请开通即时配送 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_opendelivery.html */
  expressLocalBusinessOpen(
    body?: ExpressLocalBusinessOpenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressLocalBusinessOpenResp>;
  /** 预下配送单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_preaddorder.html */
  expressLocalBusinessOrderPreAdd(
    body?: ExpressLocalBusinessOrderPreAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressLocalBusinessOrderPreAddResp>;
  /** 预取消配送单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_precancelorder.html */
  expressLocalBusinessOrderPrecancel(
    body?: ExpressLocalBusinessOrderPrecancelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressLocalBusinessOrderPrecancelResp>;
  /** 模拟更新配送单状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_realmockupdateorder.html */
  expressLocalBusinessRealmockUpdateOrder(
    body?: ExpressLocalBusinessRealmockUpdateOrderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressLocalBusinessRealmockUpdateOrderResp>;
  /** 重新下单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-business/api_reorder.html */
  expressLocalBusinessOrderReadd(
    body?: ExpressLocalBusinessOrderReaddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressLocalBusinessOrderReaddResp>;
  /** 更新配送单状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/immediate-delivery/deliver-by-provider/api_updateorder.html */
  expressLocalDeliveryUpdateOrder(
    body?: ExpressLocalDeliveryUpdateOrderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressLocalDeliveryUpdateOrderResp>;
  /** 客服子商户拉取单个商户信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-management/api_getbusiness.html */
  businessGet(
    body?: BusinessGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessGetResp>;
  /** 客服子商户拉取多个商户信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-management/api_listbusiness.html */
  businessList(
    body?: BusinessListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessListResp>;
  /** 客服子商户创建商户 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-management/api_registerbusiness.html */
  businessRegister(
    body?: BusinessRegisterBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessRegisterResp>;
  /** 客服子商户更新商户信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-management/api_updatebusiness.html */
  businessUpdate(
    body?: BusinessUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessUpdateResp>;
  /** 添加客服账号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_addkfaccount.html */
  customserviceKfaccountAdd(
    body?: CustomserviceKfaccountAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceKfaccountAddResp>;
  /** 取消客服管理员 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_cancelkfadmin.html */
  customserviceKfaccountCanceladmin(
    body?: CustomserviceKfaccountCanceladminBody,
    query?: CustomserviceKfaccountCanceladminQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceKfaccountCanceladminResp>;
  /** 删除客服账号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_delkfaccount.html */
  customserviceKfaccountDel(
    body?: CustomserviceKfaccountDelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceKfaccountDelResp>;
  /** 获取所有客服账号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_getkflist.html */
  customserviceGetkflist(
    body?: CustomserviceGetkflistBody,
    query?: CustomserviceGetkflistQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceGetkflistResp>;
  /** 获取临时素材 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_getmedia.html */
  mediaGet(
    body?: MediaGetBody,
    query?: MediaGetQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MediaGetResp>;
  /** 获取在线客服列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_getonlinekflist.html */
  customserviceGetonlinekflist(
    body?: CustomserviceGetonlinekflistBody,
    query?: CustomserviceGetonlinekflistQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceGetonlinekflistResp>;
  /** 发送客服消息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_sendcustommessage.html */
  messageCustomSend(
    body?: MessageCustomSendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageCustomSendResp>;
  /** 设置客服管理员 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_setkfadmin.html */
  customserviceKfaccountSetadmin(
    body?: CustomserviceKfaccountSetadminBody,
    query?: CustomserviceKfaccountSetadminQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceKfaccountSetadminResp>;
  /** 客服输入状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_typing.html */
  messageCustomBusinessTyping(
    body?: MessageCustomBusinessTypingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageCustomBusinessTypingResp>;
  /** 新增临时素材 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_uploadtempmedia.html */
  mediaUpload(
    body?: MediaUploadBody,
    query?: MediaUploadQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MediaUploadResp>;
  /** 绑定微信客服 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-work/api_bindkfwork.html */
  customserviceWorkBind(
    body?: CustomserviceWorkBindBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceWorkBindResp>;
  /** 查询绑定情况 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-work/api_getkfworkbound.html */
  customserviceWorkGet(
    body?: CustomserviceWorkGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceWorkGetResp>;
  /** 解除绑定微信客服 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-work/api_unbindkfwork.html */
  customserviceWorkUnbind(
    body?: CustomserviceWorkUnbindBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceWorkUnbindResp>;
  /** 推送用工消息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/laboruse/api_sendemployeerelationmsg.html */
  messageWxopenEmployeerelationmsgSend(
    body?: MessageWxopenEmployeerelationmsgSendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageWxopenEmployeerelationmsgSendResp>;
  /** 解绑用工关系 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/laboruse/api_unbinduserb2cauthinfo.html */
  businessUnbinduserb2cauthinfo(
    body?: BusinessUnbinduserb2cauthinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessUnbinduserb2cauthinfoResp>;
  /** 添加并提审商品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_addgoods.html */
  broadcastGoodsAdd(
    body?: BroadcastGoodsAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastGoodsAddResp>;
  /** 删除商品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_deletegoodsinfo.html */
  broadcastGoodsDelete(
    body?: BroadcastGoodsDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastGoodsDeleteResp>;
  /** 获取商品的信息与审核状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_getgoodsauditinfo.html */
  businessGetgoodswarehouse(
    body?: BusinessGetgoodswarehouseBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessGetgoodswarehouseResp>;
  /** 获取商品列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_getgoodsinfo.html */
  broadcastGoodsGetapproved(
    body?: BroadcastGoodsGetapprovedBody,
    query?: BroadcastGoodsGetapprovedQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastGoodsGetapprovedResp>;
  /** 撤回商品审核 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_resetaudit.html */
  broadcastGoodsResetaudit(
    body?: BroadcastGoodsResetauditBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastGoodsResetauditResp>;
  /** 重新提交商品审核 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_resubmitaudit.html */
  broadcastGoodsAudit(
    body?: BroadcastGoodsAuditBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastGoodsAuditResp>;
  /** 更新商品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/commodity-management/api_updategoodsinfo.html */
  broadcastGoodsUpdate(
    body?: BroadcastGoodsUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastGoodsUpdateResp>;
  /** 移除成员角色 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/role-management/api_deleterole.html */
  broadcastRoleDeleterole(
    body?: BroadcastRoleDeleteroleBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoleDeleteroleResp>;
  /** 查询成员列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/role-management/api_getrolelist.html */
  broadcastRoleGetrolelist(
    body?: BroadcastRoleGetrolelistBody,
    query?: BroadcastRoleGetrolelistQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoleGetrolelistResp>;
  /** 设置成员角色 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/role-management/api_getrolelistdw.html */
  broadcastRoleAddrole(
    body?: BroadcastRoleAddroleBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoleAddroleResp>;
  /** 添加主播副号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_addsubanchor.html */
  broadcastRoomAddsubanchor(
    body?: BroadcastRoomAddsubanchorBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomAddsubanchorResp>;
  /** 添加管理直播间小助手 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_addveassistant.html */
  broadcastRoomAddassistant(
    body?: BroadcastRoomAddassistantBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomAddassistantResp>;
  /** 创建直播间 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_createroom.html */
  broadcastRoomCreate(
    body?: BroadcastRoomCreateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomCreateResp>;
  /** 删除直播间商品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_deletedoods.html */
  broadcastGoodsDeleteInRoom(
    body?: BroadcastGoodsDeleteInRoomBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastGoodsDeleteInRoomResp>;
  /** 删除直播间 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_deleteroom.html */
  broadcastRoomDeleteroom(
    body?: BroadcastRoomDeleteroomBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomDeleteroomResp>;
  /** 删除主播副号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_deletesubanchor.html */
  broadcastRoomDeletesubanchor(
    body?: BroadcastRoomDeletesubanchorBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomDeletesubanchorResp>;
  /** 下载商品讲解视频 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_downloadgoodsvideo.html */
  broadcastGoodsGetVideo(
    body?: BroadcastGoodsGetVideoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastGoodsGetVideoResp>;
  /** 编辑直播间 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_editroom.html */
  broadcastRoomEditroom(
    body?: BroadcastRoomEditroomBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomEditroomResp>;
  /** 查询直播间小助手 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getassistantlist.html */
  broadcastRoomGetassistantlist(
    body?: BroadcastRoomGetassistantlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomGetassistantlistResp>;
  /** 直播挂件获取全局KEY @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getdefault_goodskey.html */
  broadcastGoodsGetkey(
    body?: BroadcastGoodsGetkeyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastGoodsGetkeyResp>;
  /** 获取直播间列表和回放 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getliveinfo.html */
  businessGetliveinfo(
    body?: BusinessGetliveinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessGetliveinfoResp>;
  /** 获取直播间推流地址 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getpushurl.html */
  broadcastRoomGetpushurl(
    body?: BroadcastRoomGetpushurlBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomGetpushurlResp>;
  /** 获取直播间分享二维码 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getsharedcode.html */
  broadcastRoomGetsharedcode(
    body?: BroadcastRoomGetsharedcodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomGetsharedcodeResp>;
  /** 获取主播副号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_getsubanchor.html */
  broadcastRoomGetsubanchor(
    body?: BroadcastRoomGetsubanchorBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomGetsubanchorResp>;
  /** 导入商品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_importgoods.html */
  broadcastRoomAddgoods(
    body?: BroadcastRoomAddgoodsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomAddgoodsResp>;
  /** 修改直播间小助手 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_modifyassistant.html */
  broadcastRoomModifyassistant(
    body?: BroadcastRoomModifyassistantBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomModifyassistantResp>;
  /** 修改主播副号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_modifysubanchor.html */
  broadcastRoomModifysubanchor(
    body?: BroadcastRoomModifysubanchorBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomModifysubanchorResp>;
  /** 推送商品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_pushgoods.html */
  broadcastGoodsPush(
    body?: BroadcastGoodsPushBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastGoodsPushResp>;
  /** 删除直播间小助手 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_removeassistant.html */
  broadcastRoomRemoveassistant(
    body?: BroadcastRoomRemoveassistantBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomRemoveassistantResp>;
  /** 上下架商品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_salegoods.html */
  broadcastGoodsOnsale(
    body?: BroadcastGoodsOnsaleBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastGoodsOnsaleResp>;
  /** 直播挂件设置全局KEY @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_setdefault_goodskey.html */
  broadcastGoodsSetkey(
    body?: BroadcastGoodsSetkeyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastGoodsSetkeyResp>;
  /** 直播间商品排序 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_sortgoods.html */
  broadcastGoodsSort(
    body?: BroadcastGoodsSortBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastGoodsSortResp>;
  /** 禁言管理 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_updatecomment.html */
  broadcastRoomUpdatecomment(
    body?: BroadcastRoomUpdatecommentBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomUpdatecommentResp>;
  /** 官方收录管理 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_updatefeedpublic.html */
  broadcastRoomUpdatefeedpublic(
    body?: BroadcastRoomUpdatefeedpublicBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomUpdatefeedpublicResp>;
  /** 客服功能管理 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_updatekf.html */
  broadcastRoomUpdatekf(
    body?: BroadcastRoomUpdatekfBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomUpdatekfResp>;
  /** 回放功能管理 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/studio-management/api_updatereplay.html */
  broadcastRoomUpdatereplay(
    body?: BroadcastRoomUpdatereplayBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BroadcastRoomUpdatereplayResp>;
  /** 获取长期订阅用户 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/subscribe-management/api_getfollowers.html */
  businessGetWxaFollowers(
    body?: BusinessGetWxaFollowersBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessGetWxaFollowersResp>;
  /** 发送直播开始事件 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/livebroadcast/subscribe-management/api_pushmessage.html */
  businessPushMessage(
    body?: BusinessPushMessageBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessPushMessageResp>;
  /** 剧目提审 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_auditdrama.html */
  vodAuditdrama(
    body?: VodAuditdramaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodAuditdramaResp>;
  /** 获取剧目信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_getdrama.html */
  vodGetdrama(
    body?: VodGetdramaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodGetdramaResp>;
  /** 查询剧目审核信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_getdramalatestauditinfo.html */
  vodGetdramalatestauditinfo(
    body?: VodGetdramalatestauditinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodGetdramalatestauditinfoResp>;
  /** 获取剧目列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_listdramas.html */
  vodListdramas(
    body?: VodListdramasBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodListdramasResp>;
  /** 替换审核通过的剧集 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_replacedramamedia.html */
  vodReplacedramamedia(
    body?: VodReplacedramamediaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodReplacedramamediaResp>;
  /** 修改剧目基本信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_submitmodifydramabasicinforeq.html */
  vodModifydramabasicinfo(
    body?: VodModifydramabasicinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodModifydramabasicinfoResp>;
  /** 提交替换剧集审核 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/auditdrama/api_submitreplacemedias.html */
  vodSubmitreplacedramamedias(
    body?: VodSubmitreplacedramamediasBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodSubmitreplacedramamediasResp>;
  /** 增加账号授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizeapp/api_authorizeapp.html */
  vodAuthorizeapp(
    body?: VodAuthorizeappBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodAuthorizeappResp>;
  /** 解除账号授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizeapp/api_deauthorizeapp.html */
  vodDeauthorizeapp(
    body?: VodDeauthorizeappBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodDeauthorizeappResp>;
  /** 查询账号授权信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizeapp/api_getauthorizeapps.html */
  vodGetauthorizeapps(
    body?: VodGetauthorizeappsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodGetauthorizeappsResp>;
  /** 查询被授权信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizeapp/api_getauthorizedobjects.html */
  vodGetauthorizedobjects(
    body?: VodGetauthorizedobjectsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodGetauthorizedobjectsResp>;
  /** 增加版权授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizecopyright/api_authorizecopyright.html */
  vodAuthorizecopyright(
    body?: VodAuthorizecopyrightBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodAuthorizecopyrightResp>;
  /** 解除版权授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizecopyright/api_deauthorizecopyright.html */
  vodDeauthorizecopyright(
    body?: VodDeauthorizecopyrightBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodDeauthorizecopyrightResp>;
  /** 查询版权授权信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizecopyright/api_getcopyrightauthorizationlist.html */
  vodGetcopyrightauthorizationlist(
    body?: VodGetcopyrightauthorizationlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodGetcopyrightauthorizationlistResp>;
  /** 查询被版权授权信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizecopyright/api_getcopyrightauthorizedlist.html */
  vodGetcopyrightauthorizedlist(
    body?: VodGetcopyrightauthorizedlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodGetcopyrightauthorizedlistResp>;
  /** 增加剧目授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizedrama/api_authorizedrama.html */
  vodAuthorizedrama(
    body?: VodAuthorizedramaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodAuthorizedramaResp>;
  /** 解除剧目授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizedrama/api_deauthorizedrama.html */
  vodDeauthorizedrama(
    body?: VodDeauthorizedramaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodDeauthorizedramaResp>;
  /** 查询授权信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/authorizedrama/api_getauthorizeobjects.html */
  vodGetauthorizeobjects(
    body?: VodGetauthorizeobjectsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodGetauthorizeobjectsResp>;
  /** 查询CDN日志下载链接列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/usagedata/api_getcdnlogs.html */
  vodGetcdnlogs(
    body?: VodGetcdnlogsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodGetcdnlogsResp>;
  /** 查询CDN用量数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/usagedata/api_getcdnusagedata.html */
  vodGetcdnusagedata(
    body?: VodGetcdnusagedataBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodGetcdnusagedataResp>;
  /** 查询流量包详情 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/usagedata/api_listpackages.html */
  vodListpackages(
    body?: VodListpackagesBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodListpackagesResp>;
  /** 申请分片上传 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_applyupload.html */
  vodApplyupload(
    body?: VodApplyuploadBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodApplyuploadResp>;
  /** 确认上传 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_commitupload.html */
  vodCommitupload(
    body?: VodCommituploadBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodCommituploadResp>;
  /** 查询任务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_gettask.html */
  vodGettask(
    body?: VodGettaskBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodGettaskResp>;
  /** 拉取上传 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_pullupload.html */
  vodPullupload(
    body?: VodPulluploadBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodPulluploadResp>;
  /** 单个文件上传 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_singlefileupload.html */
  vodSinglefileupload(
    body?: VodSinglefileuploadBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodSinglefileuploadResp>;
  /** 上传分片 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_fileupload/api_uploadpart.html */
  vodUploadpart(
    body?: VodUploadpartBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodUploadpartResp>;
  /** 删除媒资 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_media/api_deletemedia.html */
  vodDeletemedia(
    body?: VodDeletemediaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodDeletemediaResp>;
  /** 获取媒资详细信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_media/api_getmedia.html */
  vodGetmedia(
    body?: VodGetmediaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodGetmediaResp>;
  /** 获取媒资播放链接 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_media/api_getmedialink.html */
  vodGetmedialink(
    body?: VodGetmedialinkBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodGetmedialinkResp>;
  /** 获取媒资列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/minidrama/vod_media/api_listmedia.html */
  vodListmedia(
    body?: VodListmediaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VodListmediaResp>;
  /** 获取接口调用凭据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-access-token/api_getaccesstoken.html */
  token(
    body?: TokenBody,
    query?: TokenQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TokenResp>;
  /** 获取稳定版接口调用凭据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-access-token/api_getstableaccesstoken.html */
  stableToken(
    body?: StableTokenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<StableTokenResp>;
  /** 选用模板 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_addwxanewtemplate.html */
  newtmplAddtemplate(
    body?: NewtmplAddtemplateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NewtmplAddtemplateResp>;
  /** 删除模板 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_delwxanewtemplate.html */
  newtmplDeltemplate(
    body?: NewtmplDeltemplateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NewtmplDeltemplateResp>;
  /** 获取类目 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getcategory.html */
  newtmplGetcategory(
    body?: NewtmplGetcategoryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NewtmplGetcategoryResp>;
  /** 获取模板中的关键词 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getpubnewtemplatekeywords.html */
  newtmplGetpubtemplatekeywords(
    body?: NewtmplGetpubtemplatekeywordsBody,
    query?: NewtmplGetpubtemplatekeywordsQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NewtmplGetpubtemplatekeywordsResp>;
  /** 获取类目下的公共模板 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getpubnewtemplatetitles.html */
  newtmplGetpubtemplatetitles(
    body?: NewtmplGetpubtemplatetitlesBody,
    query?: NewtmplGetpubtemplatetitlesQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NewtmplGetpubtemplatetitlesResp>;
  /** 查询服务卡片状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getusernotify.html */
  getUserNotify(
    body?: GetUserNotifyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetUserNotifyResp>;
  /** 获取已有模板列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getwxapubnewtemplate.html */
  newtmplGettemplate(
    body?: NewtmplGettemplateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NewtmplGettemplateResp>;
  /** 发送订阅消息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_sendmessage.html */
  messageSubscribeSend(
    body?: MessageSubscribeSendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageSubscribeSendResp>;
  /** 激活与更新服务卡片 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_setusernotify.html */
  setUserNotify(
    body?: SetUserNotifyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SetUserNotifyResp>;
  /** 更新服务卡片扩展信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_setusernotifyext.html */
  setUserNotifyext(
    body?: SetUserNotifyextBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SetUserNotifyextResp>;
  /** 创建activity_id @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/updatable-message/api_createactivityid.html */
  messageWxopenActivityidCreate(
    body?: MessageWxopenActivityidCreateBody,
    query?: MessageWxopenActivityidCreateQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageWxopenActivityidCreateResp>;
  /** 修改小程序聊天工具的动态卡片消息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/updatable-message/api_setchattoolmsg.html */
  messageWxopenChattoolmsgSend(
    body?: MessageWxopenChattoolmsgSendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageWxopenChattoolmsgSendResp>;
  /** 修改动态消息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/updatable-message/api_setupdatablemsg.html */
  messageWxopenUpdatablemsgSend(
    body?: MessageWxopenUpdatablemsgSendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageWxopenUpdatablemsgSendResp>;
  /** 添加地点 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/nearby-poi/api_addnearbypoi.html */
  addnearbypoi(
    body?: AddnearbypoiBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<AddnearbypoiResp>;
  /** 删除地点 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/nearby-poi/api_deletenearbypoi.html */
  delnearbypoi(
    body?: DelnearbypoiBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<DelnearbypoiResp>;
  /** 查看地点 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/nearby-poi/api_getnearbypoilist.html */
  getnearbypoilist(
    body?: GetnearbypoilistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetnearbypoilistResp>;
  /** 设置展示状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/nearby-poi/api_setshowstatus.html */
  setnearbypoishowstatus(
    body?: SetnearbypoishowstatusBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SetnearbypoishowstatusResp>;
  /** 新增账号-小说授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_addbookauth.html */
  bookAddbookauth(
    body?: BookAddbookauthBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookAddbookauthResp>;
  /** 新增账号-账号授权 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_addbookauthbyappid.html */
  bookAddbookauthbyappid(
    body?: BookAddbookauthbyappidBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookAddbookauthbyappidResp>;
  /** 删除指定的授权关系 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_delbookauth.html */
  bookDelbookauth(
    body?: BookDelbookauthBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookDelbookauthResp>;
  /** 删除指定的账号授权关系 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_delbookauthbyappid.html */
  bookDelbookauthbyappid(
    body?: BookDelbookauthbyappidBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookDelbookauthbyappidResp>;
  /** 查看主授权关系列表-查看被授权关系列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_querybookauth.html */
  bookQuerybookauth(
    body?: BookQuerybookauthBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookQuerybookauthResp>;
  /** 查看账号主授权关系列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/auth/api_querybookauthv2.html */
  bookQuerybookauthv2(
    body?: BookQuerybookauthv2Body,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookQuerybookauthv2Resp>;
  /** 作品提审 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_auditbook.html */
  bookAuditbook(
    body?: BookAuditbookBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookAuditbookResp>;
  /** 批量上传章节 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_batchcreatechapter.html */
  bookBatchcreatechapter(
    body?: BookBatchcreatechapterBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookBatchcreatechapterResp>;
  /** 创建作品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_createbook.html */
  bookCreatebook(
    body?: BookCreatebookBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookCreatebookResp>;
  /** 上传章节 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_createchapter.html */
  bookCreatechapter(
    body?: BookCreatechapterBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookCreatechapterResp>;
  /** 删除作品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_deletebook.html */
  bookDeletebook(
    body?: BookDeletebookBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookDeletebookResp>;
  /** 删除章节 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_deletechapter.html */
  bookDeletechapter(
    body?: BookDeletechapterBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookDeletechapterResp>;
  /** 获取作品信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_getbook.html */
  bookGetbook(
    body?: BookGetbookBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookGetbookResp>;
  /** 获取章节信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_getchapter.html */
  bookGetchapter(
    body?: BookGetchapterBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookGetchapterResp>;
  /** 获取作品列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_listbook.html */
  bookListbook(
    body?: BookListbookBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookListbookResp>;
  /** 获取章节列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_listchapter.html */
  bookListchapter(
    body?: BookListchapterBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookListchapterResp>;
  /** 调整章节顺序 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_reorderchapter.html */
  bookReorderchapter(
    body?: BookReorderchapterBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookReorderchapterResp>;
  /** 替换章节 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_replacechapter.html */
  bookReplacechapter(
    body?: BookReplacechapterBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookReplacechapterResp>;
  /** 编辑作品 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_updatebook.html */
  bookUpdatebook(
    body?: BookUpdatebookBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookUpdatebookResp>;
  /** 调整章节相对顺序 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/business/api_updatechapterseq.html */
  bookUpdatechapterseq(
    body?: BookUpdatechapterseqBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BookUpdatechapterseqResp>;
  /** 读后推荐 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/other/api_novelreadersetrecmdnovel.html */
  businessNovelreaderSetrecmdnovel(
    body?: BusinessNovelreaderSetrecmdnovelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessNovelreaderSetrecmdnovelResp>;
  /** 预览设置获取 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/preview/api_getpreviewsetting.html */
  businessNovelreaderGetpreviewsetting(
    body?: BusinessNovelreaderGetpreviewsettingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessNovelreaderGetpreviewsettingResp>;
  /** 预览设置修改 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/novel/preview/api_setpreviewsetting.html */
  businessNovelreaderSetpreviewsetting(
    body?: BusinessNovelreaderSetpreviewsettingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessNovelreaderSetpreviewsettingResp>;
  /** 网络通信检测 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_callbackcheck.html */
  callbackCheck(
    body?: CallbackCheckBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CallbackCheckResp>;
  /** 重置指定API调用次数 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_clearapiquota.html */
  openapiQuotaClear(
    body?: OpenapiQuotaClearBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenapiQuotaClearResp>;
  /** 重置API调用次数 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_clearquota.html */
  clearQuota(
    body?: ClearQuotaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ClearQuotaResp>;
  /** 使用AppSecret重置API调用次数 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_clearquotabyappsecret.html */
  clearQuotaV2(
    body?: ClearQuotaV2Body,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ClearQuotaV2Resp>;
  /** 获取微信API服务器IP @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_getapidomainip.html */
  getApiDomainIp(
    body?: GetApiDomainIpBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetApiDomainIpResp>;
  /** 查询API调用额度 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_getapiquota.html */
  openapiQuotaGet(
    body?: OpenapiQuotaGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenapiQuotaGetResp>;
  /** 获取微信推送服务器IP @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_getcallbackip.html */
  getcallbackip(
    body?: GetcallbackipBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetcallbackipResp>;
  /** 查询rid信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_getridinfo.html */
  openapiRidGet(
    body?: OpenapiRidGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenapiRidGetResp>;
  /** 查询域名配置 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getdomaininfo.html */
  getwxadevinfo(
    body?: GetwxadevinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetwxadevinfoResp>;
  /** 获取用户反馈列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getfeedback.html */
  feedbackList(
    body?: FeedbackListBody,
    query?: FeedbackListQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FeedbackListResp>;
  /** 获取mediaId图片 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getfeedbackmedia.html */
  mediaGetfeedbackmedia(
    body?: MediaGetfeedbackmediaBody,
    query?: MediaGetfeedbackmediaQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MediaGetfeedbackmediaResp>;
  /** 获取分阶段发布详情 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getgrayreleaseplan.html */
  getgrayreleaseplan(
    body?: GetgrayreleaseplanBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetgrayreleaseplanResp>;
  /** 查询js错误详情 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getjserrdetail.html */
  logJserrDetail(
    body?: LogJserrDetailBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<LogJserrDetailResp>;
  /** 查询错误列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getjserrlist.html */
  logJserrList(
    body?: LogJserrListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<LogJserrListResp>;
  /** 获取性能数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getperformance.html */
  logGetPerformance(
    body?: LogGetPerformanceBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<LogGetPerformanceResp>;
  /** 获取访问来源 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getscenelist.html */
  logGetScene(
    body?: LogGetSceneBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<LogGetSceneResp>;
  /** 获取客户端版本 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_getversionlist.html */
  logGetClientVersion(
    body?: LogGetClientVersionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<LogGetClientVersionResp>;
  /** 查询实时日志 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/operation/api_realtimelogsearch.html */
  userlogUserlogSearch(
    body?: UserlogUserlogSearchBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UserlogUserlogSearchResp>;
  /** 品牌申请 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_famousbrandapply.html */
  famousbrandApply(
    body?: FamousbrandApplyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FamousbrandApplyResp>;
  /** 小程序品牌申请状态查询 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_getfamousbrandapplystatus.html */
  famousbrandGetStatus(
    body?: FamousbrandGetStatusBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FamousbrandGetStatusResp>;
  /** 查询订单发货状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_getorder.html */
  orderGetOrder(
    body?: OrderGetOrderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OrderGetOrderResp>;
  /** 查询订单列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_getorderlist.html */
  orderGetOrderList(
    body?: OrderGetOrderListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OrderGetOrderListResp>;
  /** 查询小程序是否已开通发货信息管理服务 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_istrademanaged.html */
  orderIsTradeManaged(
    body?: OrderIsTradeManagedBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OrderIsTradeManagedResp>;
  /** 查询小程序是否已完成交易结算管理确认 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_istrademanagementconfirmationcompleted.html */
  orderIsTradeManagementConfirmationCompleted(
    body?: OrderIsTradeManagementConfirmationCompletedBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OrderIsTradeManagementConfirmationCompletedResp>;
  /** 确认收货提醒 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_notifyconfirmreceive.html */
  orderNotifyConfirmReceive(
    body?: OrderNotifyConfirmReceiveBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OrderNotifyConfirmReceiveResp>;
  /** 特殊发货报备 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_opspecialorder.html */
  orderOpspecialorder(
    body?: OrderOpspecialorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OrderOpspecialorderResp>;
  /** 消息跳转路径设置 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_setmsgjumppath.html */
  orderSetMsgJumpPath(
    body?: OrderSetMsgJumpPathBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OrderSetMsgJumpPathResp>;
  /** 小程序交易类型变更申请 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_setwxatradetypecgi.html */
  orderSetwxatradetypecgi(
    body?: OrderSetwxatradetypecgiBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OrderSetwxatradetypecgiResp>;
  /** 发货信息合单录入 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_uploadcombinedshippinginfo.html */
  orderUploadCombinedShippingInfo(
    body?: OrderUploadCombinedShippingInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OrderUploadCombinedShippingInfoResp>;
  /** 发货信息录入 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/order_shipping/api_uploadshippinginfo.html */
  orderUploadShippingInfo(
    body?: OrderUploadShippingInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OrderUploadShippingInfoResp>;
  /** 插件管理 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/plugin-management/api_manageplugin.html */
  plugin(
    body?: PluginBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<PluginResp>;
  /** 插件申请管理 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/plugin-management/api_managepluginapplication.html */
  devplugin(
    body?: DevpluginBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<DevpluginResp>;
  /** 获取小程序二维码 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/qr-code/api_createqrcode.html */
  wxaappCreatewxaqrcode(
    body?: WxaappCreatewxaqrcodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxaappCreatewxaqrcodeResp>;
  /** 获取小程序码 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/qr-code/api_getqrcode.html */
  getwxacode(
    body?: GetwxacodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetwxacodeResp>;
  /** 获取不限制的小程序码 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/qr-code/api_getunlimitedqrcode.html */
  getwxacodeunlimit(
    body?: GetwxacodeunlimitBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetwxacodeunlimitResp>;
  /** 获取ShortLink @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/short-link/api_generateshortlink.html */
  genwxashortlink(
    body?: GenwxashortlinkBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GenwxashortlinkResp>;
  /** 获取加密URLLink @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/url-link/api_generateurllink.html */
  generateUrllink(
    body?: GenerateUrllinkBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GenerateUrllinkResp>;
  /** 查询加密URLLink @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/url-link/api_queryurllink.html */
  queryUrllink(
    body?: QueryUrllinkBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryUrllinkResp>;
  /** 获取NFC的小程序scheme @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/url-scheme/api_generatenfcscheme.html */
  generatenfcscheme(
    body?: GeneratenfcschemeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GeneratenfcschemeResp>;
  /** 获取加密scheme码 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/url-scheme/api_generatescheme.html */
  generatescheme(
    body?: GenerateschemeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GenerateschemeResp>;
  /** 查询scheme码 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/qrcode-link/url-scheme/api_queryscheme.html */
  queryscheme(
    body?: QueryschemeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryschemeResp>;
  /** 获取微信红包封面 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/red-packet-cover/api_getredpacketcoverurl.html */
  redpacketcoverWxappCoverUrlGetByToken(
    body?: RedpacketcoverWxappCoverUrlGetByTokenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<RedpacketcoverWxappCoverUrlGetByTokenResp>;
  /** 获取用户安全等级 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/sec-center/safety-control-capability/api_getuserriskrank.html */
  getuserriskrank(
    body?: GetuserriskrankBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetuserriskrankResp>;
  /** 多媒体内容安全识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/sec-center/sec-check/api_mediacheckasync.html */
  mediaCheckAsync(
    body?: MediaCheckAsyncBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MediaCheckAsyncResp>;
  /** 文本内容安全识别 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/sec-center/sec-check/api_msgseccheck.html */
  msgSecCheck(
    body?: MsgSecCheckBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MsgSecCheckResp>;
  /** 生物认证秘钥签名验证 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/soter/api_verifysignature.html */
  soterVerifySignature(
    body?: SoterVerifySignatureBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SoterVerifySignatureResp>;
  /** 快速获取学生身份 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/student/api_quickcheckstudentidentity.html */
  quickcheckstudentidentity(
    body?: QuickcheckstudentidentityBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QuickcheckstudentidentityResp>;
  /** 获取交易保障标状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/basic/api_getguaranteestatus.html */
  wxamptradeGetGuaranteeStatus(
    body?: WxamptradeGetGuaranteeStatusBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxamptradeGetGuaranteeStatusResp>;
  /** 获取小程序交易体验分违规记录 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/basic/api_getpenaltylist.html */
  wxamptradeGetPenaltyList(
    body?: WxamptradeGetPenaltyListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxamptradeGetPenaltyListResp>;
  /** 创建回复 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_addcommentreply.html */
  commentCommentreplyAdd(
    body?: CommentCommentreplyAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentCommentreplyAddResp>;
  /** 创建评论 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_addreply.html */
  commentReplyAdd(
    body?: CommentReplyAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentReplyAddResp>;
  /** 确认和解 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_confirmcompromise.html */
  commentConfirmcompromise(
    body?: CommentConfirmcompromiseBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentConfirmcompromiseResp>;
  /** 删除回复 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_deletecommentreply.html */
  commentCommentreplyDelete(
    body?: CommentCommentreplyDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentCommentreplyDeleteResp>;
  /** 删除评论 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_deletereply.html */
  commentReplyDelete(
    body?: CommentReplyDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentReplyDeleteResp>;
  /** 查询评价列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_getccommentlist.html */
  commentMpcommentlistGet(
    body?: CommentMpcommentlistGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentMpcommentlistGetResp>;
  /** 查询评价详情 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_getcommentinfo.html */
  commentCommentinfoGet(
    body?: CommentCommentinfoGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentCommentinfoGetResp>;
  /** 查询评论列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_getcommentreplylist.html */
  commentReplyandcommentreplylistGet(
    body?: CommentReplyandcommentreplylistGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentReplyandcommentreplylistGetResp>;
  /** 重置Api客服quota @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/comment/api_resetapikfquota.html */
  commentApikfquotaReset(
    body?: CommentApikfquotaResetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentApikfquotaResetResp>;
  /** 商家申诉 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/complaint/api_busiappeal.html */
  minishopBusiAppeal(
    body?: MinishopBusiAppealBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MinishopBusiAppealResp>;
  /** 查询投诉单详情 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/complaint/api_getorderdetail.html */
  minishopComplaintOrderDetail(
    body?: MinishopComplaintOrderDetailBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MinishopComplaintOrderDetailResp>;
  /** 商家回应投诉 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/complaint/api_respondcomplaint.html */
  minishopBussiRespondComplaint(
    body?: MinishopBussiRespondComplaintBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MinishopBussiRespondComplaintResp>;
  /** 商家提交退款凭证 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/complaint/api_submitrefund.html */
  minishopBussiSupplyRefund(
    body?: MinishopBussiSupplyRefundBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MinishopBussiSupplyRefundResp>;
  /** 商家补充凭证 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/transaction-guarantee/complaint/api_supplyproof.html */
  minishopBussiSupplyProof(
    body?: MinishopBussiSupplyProofBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MinishopBussiSupplyProofResp>;
  /** 检查加密信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-info/basic-info/api_checkencrypteddata.html */
  businessCheckencryptedmsg(
    body?: BusinessCheckencryptedmsgBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessCheckencryptedmsgResp>;
  /** 支付后获取Unionid @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-info/basic-info/api_getpaidunionid.html */
  getpaidunionid(
    body?: GetpaidunionidBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetpaidunionidResp>;
  /** 获取插件用户openpid @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-info/basic-info/api_getpluginopenpid.html */
  getpluginopenpid(
    body?: GetpluginopenpidBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetpluginopenpidResp>;
  /** 获取用户encryptKey @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-info/internet/api_getuserencryptkey.html */
  businessGetuserencryptkey(
    body?: BusinessGetuserencryptkeyBody,
    query?: BusinessGetuserencryptkeyQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessGetuserencryptkeyResp>;
  /** 获取手机号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-info/phone-number/api_getphonenumber.html */
  businessGetuserphonenumber(
    body?: BusinessGetuserphonenumberBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessGetuserphonenumberResp>;
  /** 检验登录态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-login/api_checksessionkey.html */
  checksession(
    body?: ChecksessionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ChecksessionResp>;
  /** 小程序登录凭证校验 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-login/api_code2session.html */
  jscode2session(
    body?: Jscode2sessionBody,
    query?: Jscode2sessionQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<Jscode2sessionResp>;
  /** 重置登录态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/user-login/api_resetusersessionkey.html */
  resetusersessionkey(
    body?: ResetusersessionkeyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ResetusersessionkeyResp>;
  /** 传运单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-msg/api_follow_waybill.html */
  expressDeliveryOpenMsgFollowWaybill(
    body?: ExpressDeliveryOpenMsgFollowWaybillBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryOpenMsgFollowWaybillResp>;
  /** 获取运力id列表 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-msg/api_get_delivery_list.html */
  expressDeliveryOpenMsgGetDeliveryList(
    body?: ExpressDeliveryOpenMsgGetDeliveryListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryOpenMsgGetDeliveryListResp>;
  /** 查运单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-msg/api_query_follow_trace.html */
  expressDeliveryOpenMsgQueryFollowTrace(
    body?: ExpressDeliveryOpenMsgQueryFollowTraceBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryOpenMsgQueryFollowTraceResp>;
  /** 更新物品信息接口 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-msg/api_update_follow_waybill_goods.html */
  expressDeliveryOpenMsgUpdateFollowWaybillGoods(
    body?: ExpressDeliveryOpenMsgUpdateFollowWaybillGoodsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryOpenMsgUpdateFollowWaybillGoodsResp>;
  /** 创建退货ID @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-return/api_addreturnid.html */
  expressDeliveryNoWorryReturnAdd(
    body?: ExpressDeliveryNoWorryReturnAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryNoWorryReturnAddResp>;
  /** 查询退货ID状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-return/api_getreturnid.html */
  expressDeliveryNoWorryReturnGet(
    body?: ExpressDeliveryNoWorryReturnGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryNoWorryReturnGetResp>;
  /** 解绑退货ID @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-return/api_unbindreturnid.html */
  expressDeliveryNoWorryReturnUnbind(
    body?: ExpressDeliveryNoWorryReturnUnbindBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryNoWorryReturnUnbindResp>;
  /** 查询运单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-search/api_query_trace.html */
  expressDeliveryOpenMsgQueryTrace(
    body?: ExpressDeliveryOpenMsgQueryTraceBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryOpenMsgQueryTraceResp>;
  /** 传运单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-search/api_trace_waybill.html */
  expressDeliveryOpenMsgTraceWaybill(
    body?: ExpressDeliveryOpenMsgTraceWaybillBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryOpenMsgTraceWaybillResp>;
  /** 更新物流信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/express-search/api_update_waybill_goods.html */
  expressDeliveryOpenMsgUpdateWaybillGoods(
    body?: ExpressDeliveryOpenMsgUpdateWaybillGoodsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryOpenMsgUpdateWaybillGoodsResp>;
  /** 申请支付 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_applypay.html */
  businessInsuranceFreightApplypay(
    body?: BusinessInsuranceFreightApplypayBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessInsuranceFreightApplypayResp>;
  /** 无忧退理赔 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_claim.html */
  businessInsuranceFreightClaim(
    body?: BusinessInsuranceFreightClaimBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessInsuranceFreightClaimResp>;
  /** 申请充值订单号 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_createchargeid.html */
  businessInsuranceFreightCreatechargeid(
    body?: BusinessInsuranceFreightCreatechargeidBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessInsuranceFreightCreatechargeidResp>;
  /** 发货时投保 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_createorder.html */
  businessInsuranceFreightCreateorder(
    body?: BusinessInsuranceFreightCreateorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessInsuranceFreightCreateorderResp>;
  /** 拉取保单信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_getorderlist.html */
  businessInsuranceFreightGetorderlist(
    body?: BusinessInsuranceFreightGetorderlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessInsuranceFreightGetorderlistResp>;
  /** 拉取充值订单信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_getpayorderlist.html */
  businessInsuranceFreightGetpayorderlist(
    body?: BusinessInsuranceFreightGetpayorderlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessInsuranceFreightGetpayorderlistResp>;
  /** 拉取理赔摘要 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_getsummary.html */
  businessInsuranceFreightGetsummary(
    body?: BusinessInsuranceFreightGetsummaryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessInsuranceFreightGetsummaryResp>;
  /** 开通无忧退货 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_open.html */
  businessInsuranceFreightOpen(
    body?: BusinessInsuranceFreightOpenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessInsuranceFreightOpenResp>;
  /** 查询开通状态 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_query_open.html */
  businessInsuranceFreightQueryOpen(
    body?: BusinessInsuranceFreightQueryOpenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessInsuranceFreightQueryOpenResp>;
  /** 充值保费退款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_refund.html */
  businessInsuranceFreightRefund(
    body?: BusinessInsuranceFreightRefundBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessInsuranceFreightRefundResp>;
  /** 设置保费告警余额 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/freight/api_insurance_freight_update_notify_funds.html */
  businessInsuranceFreightUpdateNotifyFunds(
    body?: BusinessInsuranceFreightUpdateNotifyFundsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessInsuranceFreightUpdateNotifyFundsResp>;
  /** 推送已绑定物流轨迹信息 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/msgpush/api_deliverypathnotify.html */
  expressDeliveryPathnotify(
    body?: ExpressDeliveryPathnotifyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryPathnotifyResp>;
  /** 用户手机状态查询 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/msgpush/api_deliveryuserquery.html */
  expressDeliveryUserquery(
    body?: ExpressDeliveryUserqueryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryUserqueryResp>;
  /** 创建配送单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_addorder.html */
  expressIntracityAddorder(
    body?: ExpressIntracityAddorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracityAddorderResp>;
  /** 开通门店权限 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_apply.html */
  expressIntracityApply(
    body?: ExpressIntracityApplyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracityApplyResp>;
  /** 门店余额查询 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_balancequery.html */
  expressIntracityBalancequery(
    body?: ExpressIntracityBalancequeryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracityBalancequeryResp>;
  /** 取消配送单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_cancelorder.html */
  expressIntracityCancelorder(
    body?: ExpressIntracityCancelorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracityCancelorderResp>;
  /** 创建门店 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_createstore.html */
  expressIntracityCreatestore(
    body?: ExpressIntracityCreatestoreBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracityCreatestoreResp>;
  /** 查询支持同城配送的城市 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_getcity.html */
  expressIntracityGetcity(
    body?: ExpressIntracityGetcityBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracityGetcityResp>;
  /** 查询扣费主体 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_getpaymode.html */
  expressIntracityGetpaymode(
    body?: ExpressIntracityGetpaymodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracityGetpaymodeResp>;
  /** 模拟回调接口 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_mocknotify.html */
  expressIntracityMocknotify(
    body?: ExpressIntracityMocknotifyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracityMocknotifyResp>;
  /** 查询运费 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_preaddorder.html */
  expressIntracityPreaddorder(
    body?: ExpressIntracityPreaddorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracityPreaddorderResp>;
  /** 门店运费流水查询 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_queryflow.html */
  expressIntracityQueryflow(
    body?: ExpressIntracityQueryflowBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracityQueryflowResp>;
  /** 查询配送单 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_queryorder.html */
  expressIntracityQueryorder(
    body?: ExpressIntracityQueryorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracityQueryorderResp>;
  /** 查询门店 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_querystore.html */
  expressIntracityQuerystore(
    body?: ExpressIntracityQuerystoreBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracityQuerystoreResp>;
  /** 设置扣费主体 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_setpaymode.html */
  expressIntracitySetpaymode(
    body?: ExpressIntracitySetpaymodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracitySetpaymodeResp>;
  /** 门店运费退款 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_store_refund.html */
  expressIntracityStorerefund(
    body?: ExpressIntracityStorerefundBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracityStorerefundResp>;
  /** 门店运费充值 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_storecharge.html */
  expressIntracityStorecharge(
    body?: ExpressIntracityStorechargeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracityStorechargeResp>;
  /** 更新门店 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/weixin-express/same_city_distribution/api_intracity_updatestore.html */
  expressIntracityUpdatestore(
    body?: ExpressIntracityUpdatestoreBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressIntracityUpdatestoreResp>;
  /** 调用服务市场接口 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/wx-service-market/api_invokeservice.html */
  servicemarket(
    body?: ServicemarketBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ServicemarketResp>;
  /** 异步获取处理数据 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/wx-service-market/api_servicemarketretrieve.html */
  servicemarketretrieve(
    body?: ServicemarketretrieveBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ServicemarketretrieveResp>;
  /** 搜一搜数据推送 @see https://developers.weixin.qq.com/miniprogram/dev/server/API/wxsearch/api_submitpages.html */
  searchWxaapiSubmitpages(
    body?: SearchWxaapiSubmitpagesBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SearchWxaapiSubmitpagesResp>;
}

/**
 * 基于端点表为客户端绑定全部接口方法（运行时与类型一致）。
 * @param client 拥有 request() 逃生口的客户端。
 */
export function createGeneratedApi(client: GeneratedCaller): GeneratedApi {
  const api = {} as Record<string, unknown>;
  for (const [id, ep] of Object.entries(endpoints)) {
    api[id] = (
      body?: RequestBody,
      query?: Record<string, QueryValue>,
      extra?: GeneratedCallExtra,
    ) => {
      let url: string = ep.path;
      const { params, ...rest } = extra ?? {};
      if (params) {
        for (const [k, v] of Object.entries(params))
          url = url.replace(`{${k}}`, encodeURIComponent(String(v)));
      }
      return client.request({ method: ep.method, url, body, query, ...rest });
    };
  }
  return api as unknown as GeneratedApi;
}
