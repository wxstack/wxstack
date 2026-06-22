// 本文件由 scripts/gen-endpoints.mjs 自动生成，请勿手改。
// 数据来源：官方文档站点 developers.weixin.qq.com，覆盖该平台已抓取的全部服务端接口与参数。
// 每个端点是「自动鉴权薄封装」；未在高层方法中显式封装的接口均可在此调用。

import type { CallOptions, QueryValue, RequestBody } from '@wxstack/core';

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
