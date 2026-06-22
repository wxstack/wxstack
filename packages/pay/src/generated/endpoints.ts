// 本文件由 scripts/gen-endpoints.mjs 自动生成，请勿手改。
// 数据来源：官方文档站点 pay.weixin.qq.com，覆盖该平台已抓取的全部服务端接口与参数。
// 每个端点是「自动鉴权薄封装」；未在高层方法中显式封装的接口均可在此调用。

import type { CallOptions, QueryValue, RequestBody } from '@wxstack/core';

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
  // ===== misc =====
  /** JSAPI/小程序下单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012791856 */
  transactionsJsapi: {
    method: 'POST',
    path: '/v3/pay/transactions/jsapi',
    title: 'JSAPI/小程序下单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012791856',
  },
  /** 关闭订单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012791860 */
  transactionsOutTradeNoClose: {
    method: 'POST',
    path: '/v3/pay/transactions/out-trade-no/{out_trade_no}/close',
    title: '关闭订单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012791860',
  },
  /** 微信支付订单号查询订单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012791858 */
  transactionsId: {
    method: 'GET',
    path: '/v3/pay/transactions/id/{transaction_id}',
    title: '微信支付订单号查询订单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012791858',
  },
  /** 商户订单号查询订单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012791859 */
  transactionsOutTradeNo: {
    method: 'GET',
    path: '/v3/pay/transactions/out-trade-no/{out_trade_no}',
    title: '商户订单号查询订单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012791859',
  },
  /** 退款申请 @see https://pay.weixin.qq.com/doc/v3/merchant/4012791862 */
  refundDomesticRefunds: {
    method: 'POST',
    path: '/v3/refund/domestic/refunds',
    title: '退款申请',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012791862',
  },
  /** 查询单笔退款（通过商户退款单号） @see https://pay.weixin.qq.com/doc/v3/merchant/4012791863 */
  refundDomesticRefunds2: {
    method: 'GET',
    path: '/v3/refund/domestic/refunds/{out_refund_no}',
    title: '查询单笔退款（通过商户退款单号）',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012791863',
  },
  /** 申请交易账单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012791866 */
  billTradebill: {
    method: 'GET',
    path: '/v3/bill/tradebill',
    title: '申请交易账单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012791866',
  },
  /** 发起异常退款 @see https://pay.weixin.qq.com/doc/v3/merchant/4012791864 */
  refundDomesticRefundsApplyAbnormalRefund: {
    method: 'POST',
    path: '/v3/refund/domestic/refunds/{refund_id}/apply-abnormal-refund',
    title: '发起异常退款',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012791864',
  },
  /** 申请资金账单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012791867 */
  billFundflowbill: {
    method: 'GET',
    path: '/v3/bill/fundflowbill',
    title: '申请资金账单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012791867',
  },
  /** 下载账单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012791868 */
  billdownloadFile: {
    method: 'POST',
    path: '/v3/billdownload/file',
    title: '下载账单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012791868',
  },
  /** APP下单 @see https://pay.weixin.qq.com/doc/v3/merchant/4013070347 */
  transactionsApp: {
    method: 'POST',
    path: '/v3/pay/transactions/app',
    title: 'APP下单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4013070347',
  },
  /** H5下单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012791834 */
  transactionsH5: {
    method: 'POST',
    path: '/v3/pay/transactions/h5',
    title: 'H5下单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012791834',
  },
  /** Native下单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012791877 */
  transactionsNative: {
    method: 'POST',
    path: '/v3/pay/transactions/native',
    title: 'Native下单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012791877',
  },
  /** 关闭合单订单 @see https://pay.weixin.qq.com/doc/v3/merchant/4013421225 */
  combineTransactionsOutTradeNoClose: {
    method: 'POST',
    path: '/v3/combine-transactions/out-trade-no/{combine_out_trade_no}/close',
    title: '关闭合单订单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4013421225',
  },
  /** JSAPI合单下单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012556926 */
  combineTransactionsJsapi: {
    method: 'POST',
    path: '/v3/combine-transactions/jsapi',
    title: 'JSAPI合单下单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012556926',
  },
  /** 查询合单订单 @see https://pay.weixin.qq.com/doc/v3/merchant/4013421222 */
  combineTransactionsOutTradeNo: {
    method: 'GET',
    path: '/v3/combine-transactions/out-trade-no/{combine_out_trade_no}',
    title: '查询合单订单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4013421222',
  },
  /** App合单下单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012556944 */
  combineTransactionsApp: {
    method: 'POST',
    path: '/v3/combine-transactions/app',
    title: 'App合单下单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012556944',
  },
  /** H5合单下单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012556961 */
  combineTransactionsH5: {
    method: 'POST',
    path: '/v3/combine-transactions/h5',
    title: 'H5合单下单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012556961',
  },
  /** Native合单下单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012556982 */
  combineTransactionsNative: {
    method: 'POST',
    path: '/v3/combine-transactions/native',
    title: 'Native合单下单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012556982',
  },
  /** 使用商户订单号查看下单结果 @see https://pay.weixin.qq.com/doc/v3/merchant/4016781490 */
  medInsOrdersOutTradeNo: {
    method: 'GET',
    path: '/v3/med-ins/orders/out-trade-no/{out_trade_no}',
    title: '使用商户订单号查看下单结果',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4016781490',
  },
  /** 使用医保自费混合订单号查看下单结果 @see https://pay.weixin.qq.com/doc/v3/merchant/4016781479 */
  medInsOrdersMixTradeNo: {
    method: 'GET',
    path: '/v3/med-ins/orders/mix-trade-no/{mix_trade_no}',
    title: '使用医保自费混合订单号查看下单结果',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4016781479',
  },
  /** 医保自费混合收款下单 @see https://pay.weixin.qq.com/doc/v3/merchant/4016781466 */
  medInsOrders: {
    method: 'POST',
    path: '/v3/med-ins/orders',
    title: '医保自费混合收款下单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4016781466',
  },
  /** 医保退款通知 @see https://pay.weixin.qq.com/doc/v3/merchant/4016781561 */
  medInsRefundsNotify: {
    method: 'POST',
    path: '/v3/med-ins/refunds/notify',
    title: '医保退款通知',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4016781561',
  },
  /** 查询分账结果 @see https://pay.weixin.qq.com/doc/v3/merchant/4012525210 */
  profitsharingOrders: {
    method: 'GET',
    path: '/v3/profitsharing/orders/{out_order_no}',
    title: '查询分账结果',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012525210',
  },
  /** 请求分账回退 @see https://pay.weixin.qq.com/doc/v3/merchant/4012525287 */
  profitsharingReturnOrders: {
    method: 'POST',
    path: '/v3/profitsharing/return-orders',
    title: '请求分账回退',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012525287',
  },
  /** 查询分账回退结果 @see https://pay.weixin.qq.com/doc/v3/merchant/4012526279 */
  profitsharingReturnOrders2: {
    method: 'GET',
    path: '/v3/profitsharing/return-orders/{out_return_no}',
    title: '查询分账回退结果',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012526279',
  },
  /** 请求分账 @see https://pay.weixin.qq.com/doc/v3/merchant/4012524936 */
  profitsharingOrders2: {
    method: 'POST',
    path: '/v3/profitsharing/orders',
    title: '请求分账',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012524936',
  },
  /** 查询剩余待分金额 @see https://pay.weixin.qq.com/doc/v3/merchant/4012457939 */
  profitsharingTransactionsAmounts: {
    method: 'GET',
    path: '/v3/profitsharing/transactions/{transaction_id}/amounts',
    title: '查询剩余待分金额',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012457939',
  },
  /** 解冻剩余资金 @see https://pay.weixin.qq.com/doc/v3/merchant/4012526374 */
  profitsharingOrdersUnfreeze: {
    method: 'POST',
    path: '/v3/profitsharing/orders/unfreeze',
    title: '解冻剩余资金',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012526374',
  },
  /** 添加分账接收方 @see https://pay.weixin.qq.com/doc/v3/merchant/4012528995 */
  profitsharingReceiversAdd: {
    method: 'POST',
    path: '/v3/profitsharing/receivers/add',
    title: '添加分账接收方',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012528995',
  },
  /** 申请分账账单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012529628 */
  profitsharingBills: {
    method: 'GET',
    path: '/v3/profitsharing/bills',
    title: '申请分账账单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012529628',
  },
  /** 删除分账接收方 @see https://pay.weixin.qq.com/doc/v3/merchant/4012529590 */
  profitsharingReceiversDelete: {
    method: 'POST',
    path: '/v3/profitsharing/receivers/delete',
    title: '删除分账接收方',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012529590',
  },
  /** 发起转账 @see https://pay.weixin.qq.com/doc/v3/merchant/4012716434 */
  fundAppMchTransferTransferBills: {
    method: 'POST',
    path: '/v3/fund-app/mch-transfer/transfer-bills',
    title: '发起转账',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012716434',
  },
  /** 撤销转账 @see https://pay.weixin.qq.com/doc/v3/merchant/4012716458 */
  fundAppMchTransferTransferBillsOutBillNoCancel: {
    method: 'POST',
    path: '/v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}/cancel',
    title: '撤销转账',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012716458',
  },
  /** 微信单号查询转账单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012716457 */
  fundAppMchTransferTransferBillsTransferBillNo: {
    method: 'GET',
    path: '/v3/fund-app/mch-transfer/transfer-bills/transfer-bill-no/{transfer_bill_no}',
    title: '微信单号查询转账单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012716457',
  },
  /** 商户单号查询转账单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012716437 */
  fundAppMchTransferTransferBillsOutBillNo: {
    method: 'GET',
    path: '/v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}',
    title: '商户单号查询转账单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012716437',
  },
  /** 微信单号申请电子回单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012716456 */
  fundAppMchTransferElecsignTransferBillNo: {
    method: 'POST',
    path: '/v3/fund-app/mch-transfer/elecsign/transfer-bill-no',
    title: '微信单号申请电子回单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012716456',
  },
  /** 商户单号查询电子回单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012716436 */
  fundAppMchTransferElecsignOutBillNo: {
    method: 'GET',
    path: '/v3/fund-app/mch-transfer/elecsign/out-bill-no/{out_bill_no}',
    title: '商户单号查询电子回单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012716436',
  },
  /** 商户单号申请电子回单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012716452 */
  fundAppMchTransferElecsignOutBillNo2: {
    method: 'POST',
    path: '/v3/fund-app/mch-transfer/elecsign/out-bill-no',
    title: '商户单号申请电子回单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012716452',
  },
  /** 下载电子回单 @see https://pay.weixin.qq.com/doc/v3/merchant/4013866774 */
  transferdownloadSignfile: {
    method: 'GET',
    path: '/v3/transferdownload/signfile',
    title: '下载电子回单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4013866774',
  },
  /** 微信单号查询电子回单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012716455 */
  fundAppMchTransferElecsignTransferBillNo2: {
    method: 'GET',
    path: '/v3/fund-app/mch-transfer/elecsign/transfer-bill-no/{transfer_bill_no}',
    title: '微信单号查询电子回单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012716455',
  },
  /** 发起免确认收款授权 @see https://pay.weixin.qq.com/doc/v3/merchant/4015901167 */
  fundAppMchTransferUserConfirmAuthorization: {
    method: 'POST',
    path: '/v3/fund-app/mch-transfer/user-confirm-authorization',
    title: '发起免确认收款授权',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4015901167',
  },
  /** 发起转账并完成免确认收款授权 @see https://pay.weixin.qq.com/doc/v3/merchant/4014399293 */
  fundAppMchTransferTransferBillsPreTransferWithAuthorization: {
    method: 'POST',
    path: '/v3/fund-app/mch-transfer/transfer-bills/pre-transfer-with-authorization',
    title: '发起转账并完成免确认收款授权',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4014399293',
  },
  /** 用户授权后转账 @see https://pay.weixin.qq.com/doc/v3/merchant/4014399371 */
  fundAppMchTransferTransferBillsTransfer: {
    method: 'POST',
    path: '/v3/fund-app/mch-transfer/transfer-bills/transfer',
    title: '用户授权后转账',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4014399371',
  },
  /** 商户单号查询授权结果 @see https://pay.weixin.qq.com/doc/v3/merchant/4014399423 */
  fundAppMchTransferUserConfirmAuthorizationOutAuthorizationNo: {
    method: 'GET',
    path: '/v3/fund-app/mch-transfer/user-confirm-authorization/out-authorization-no/{out_authorization_no}',
    title: '商户单号查询授权结果',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4014399423',
  },
  /** 解除免确认收款授权 @see https://pay.weixin.qq.com/doc/v3/merchant/4015653811 */
  fundAppMchTransferUserConfirmAuthorizationOutAuthorizationNoClose: {
    method: 'POST',
    path: '/v3/fund-app/mch-transfer/user-confirm-authorization/out-authorization-no/{out_authorization_no}/close',
    title: '解除免确认收款授权',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4015653811',
  },
  /** 取消支付分订单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012587905 */
  payscoreServiceorderCancel: {
    method: 'POST',
    path: '/v3/payscore/serviceorder/{out_order_no}/cancel',
    title: '取消支付分订单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012587905',
  },
  /** 查询支付分订单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012587902 */
  payscoreServiceorder: {
    method: 'GET',
    path: '/v3/payscore/serviceorder',
    title: '查询支付分订单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012587902',
  },
  /** 创建支付分订单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012587900 */
  payscoreServiceorder2: {
    method: 'POST',
    path: '/v3/payscore/serviceorder',
    title: '创建支付分订单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012587900',
  },
  /** 同步订单状态 @see https://pay.weixin.qq.com/doc/v3/merchant/4012587962 */
  payscoreServiceorderSync: {
    method: 'POST',
    path: '/v3/payscore/serviceorder/{out_order_no}/sync',
    title: '同步订单状态',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012587962',
  },
  /** 修改订单金额 @see https://pay.weixin.qq.com/doc/v3/merchant/4012587957 */
  payscoreServiceorderModify: {
    method: 'POST',
    path: '/v3/payscore/serviceorder/{out_order_no}/modify',
    title: '修改订单金额',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012587957',
  },
  /** 完结支付分订单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012587955 */
  payscoreServiceorderComplete: {
    method: 'POST',
    path: '/v3/payscore/serviceorder/{out_order_no}/complete',
    title: '完结支付分订单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012587955',
  },
  /** 创建停车入场 @see https://pay.weixin.qq.com/doc/v3/merchant/4012533937 */
  vehicleParkingParkings: {
    method: 'POST',
    path: '/v3/vehicle/parking/parkings',
    title: '创建停车入场',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012533937',
  },
  /** 查询车牌服务开通信息 @see https://pay.weixin.qq.com/doc/v3/merchant/4012534043 */
  vehicleParkingServicesFind: {
    method: 'GET',
    path: '/v3/vehicle/parking/services/find',
    title: '查询车牌服务开通信息',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012534043',
  },
  /** 查询订单 @see https://pay.weixin.qq.com/doc/v3/merchant/4012534308 */
  vehicleTransactionsOutTradeNo: {
    method: 'GET',
    path: '/v3/vehicle/transactions/out-trade-no/{out_trade_no}',
    title: '查询订单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012534308',
  },
  /** 扣费受理 @see https://pay.weixin.qq.com/doc/v3/merchant/4012534352 */
  vehicleTransactionsParking: {
    method: 'POST',
    path: '/v3/vehicle/transactions/parking',
    title: '扣费受理',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012534352',
  },
  /** 开发指引 @see https://pay.weixin.qq.com/doc/v3/merchant/4012084207 */
  marketingFavorCouponStocks: {
    method: 'POST',
    path: '/v3/marketing/favor/coupon-stocks',
    title: '开发指引',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012084207',
  },
  /** 激活代金券批次 @see https://pay.weixin.qq.com/doc/v3/merchant/4012460137 */
  marketingFavorStocksStart: {
    method: 'POST',
    path: '/v3/marketing/favor/stocks/{stock_id}/start',
    title: '激活代金券批次',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012460137',
  },
  /** 暂停代金券批次 @see https://pay.weixin.qq.com/doc/v3/merchant/4012460305 */
  marketingFavorStocksPause: {
    method: 'POST',
    path: '/v3/marketing/favor/stocks/{stock_id}/pause',
    title: '暂停代金券批次',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012460305',
  },
  /** 重启代金券批次 @see https://pay.weixin.qq.com/doc/v3/merchant/4012460411 */
  marketingFavorStocksRestart: {
    method: 'POST',
    path: '/v3/marketing/favor/stocks/{stock_id}/restart',
    title: '重启代金券批次',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012460411',
  },
  /** 条件查询批次列表 @see https://pay.weixin.qq.com/doc/v3/merchant/4012460489 */
  marketingFavorStocks: {
    method: 'GET',
    path: '/v3/marketing/favor/stocks',
    title: '条件查询批次列表',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012460489',
  },
  /** 查询代金券可用商户 @see https://pay.weixin.qq.com/doc/v3/merchant/4012463358 */
  marketingFavorStocksMerchants: {
    method: 'GET',
    path: '/v3/marketing/favor/stocks/{stock_id}/merchants',
    title: '查询代金券可用商户',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012463358',
  },
  /** 查询代金券可用单品 @see https://pay.weixin.qq.com/doc/v3/merchant/4012463442 */
  marketingFavorStocksItems: {
    method: 'GET',
    path: '/v3/marketing/favor/stocks/{stock_id}/items',
    title: '查询代金券可用单品',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012463442',
  },
  /** 查询批次详情 @see https://pay.weixin.qq.com/doc/v3/merchant/4012460564 */
  marketingFavorStocks2: {
    method: 'GET',
    path: '/v3/marketing/favor/stocks/{stock_id}',
    title: '查询批次详情',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012460564',
  },
  /** 下载批次核销明细 @see https://pay.weixin.qq.com/doc/v3/merchant/4012463585 */
  marketingFavorStocksUseFlow: {
    method: 'GET',
    path: '/v3/marketing/favor/stocks/{stock_id}/use-flow',
    title: '下载批次核销明细',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012463585',
  },
  /** 下载批次退款明细 @see https://pay.weixin.qq.com/doc/v3/merchant/4012463523 */
  marketingFavorStocksRefundFlow: {
    method: 'GET',
    path: '/v3/marketing/favor/stocks/{stock_id}/refund-flow',
    title: '下载批次退款明细',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012463523',
  },
  /** 设置代金券消息通知地址 @see https://pay.weixin.qq.com/doc/v3/merchant/4012464198 */
  marketingFavorCallbacks: {
    method: 'POST',
    path: '/v3/marketing/favor/callbacks',
    title: '设置代金券消息通知地址',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012464198',
  },
  /** 查询代金券详情 @see https://pay.weixin.qq.com/doc/v3/merchant/4012486942 */
  marketingFavorUsersCoupons: {
    method: 'GET',
    path: '/v3/marketing/favor/users/{openid}/coupons/{coupon_id}',
    title: '查询代金券详情',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012486942',
  },
  /** 根据商户号查用户的券 @see https://pay.weixin.qq.com/doc/v3/merchant/4012534690 */
  marketingFavorUsersCoupons2: {
    method: 'GET',
    path: '/v3/marketing/favor/users/{openid}/coupons',
    title: '根据商户号查用户的券',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012534690',
  },
  /** 查询代金券消息通知地址 @see https://pay.weixin.qq.com/doc/v3/merchant/4012464070 */
  marketingFavorCallbacks2: {
    method: 'GET',
    path: '/v3/marketing/favor/callbacks',
    title: '查询代金券消息通知地址',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012464070',
  },
  /** 发放指定批次的代金券 @see https://pay.weixin.qq.com/doc/v3/merchant/4012463767 */
  marketingFavorUsersCoupons3: {
    method: 'POST',
    path: '/v3/marketing/favor/users/{openid}/coupons',
    title: '发放指定批次的代金券',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012463767',
  },
  /** 图片上传（营销专用） @see https://pay.weixin.qq.com/doc/v3/merchant/4012557233 */
  marketingFavorMediaImageUpload: {
    method: 'POST',
    path: '/v3/marketing/favor/media/image-upload',
    title: '图片上传（营销专用）',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012557233',
  },
  /** 开发指引 @see https://pay.weixin.qq.com/doc/v3/merchant/4012063233 */
  marketingPartnershipsBuild: {
    method: 'POST',
    path: '/v3/marketing/partnerships/build',
    title: '开发指引',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012063233',
  },
  /** 查询合作关系列表 @see https://pay.weixin.qq.com/doc/v3/merchant/4012380536 */
  marketingPartnerships: {
    method: 'GET',
    path: '/v3/marketing/partnerships',
    title: '查询合作关系列表',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012380536',
  },
  /** 获取活动发券商户号 @see https://pay.weixin.qq.com/doc/v3/merchant/4012466149 */
  marketingPaygiftactivityActivitiesMerchants: {
    method: 'GET',
    path: '/v3/marketing/paygiftactivity/activities/{activity_id}/merchants',
    title: '获取活动发券商户号',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012466149',
  },
  /** 获取活动指定商品列表 @see https://pay.weixin.qq.com/doc/v3/merchant/4012466448 */
  marketingPaygiftactivityActivitiesGoods: {
    method: 'GET',
    path: '/v3/marketing/paygiftactivity/activities/{activity_id}/goods',
    title: '获取活动指定商品列表',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012466448',
  },
  /** 终止活动 @see https://pay.weixin.qq.com/doc/v3/merchant/4012466523 */
  marketingPaygiftactivityActivitiesTerminate: {
    method: 'POST',
    path: '/v3/marketing/paygiftactivity/activities/{activity_id}/terminate',
    title: '终止活动',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012466523',
  },
  /** 获取活动详情接口 @see https://pay.weixin.qq.com/doc/v3/merchant/4012487971 */
  marketingPaygiftactivityActivities: {
    method: 'GET',
    path: '/v3/marketing/paygiftactivity/activities/{activity_id}',
    title: '获取活动详情接口',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012487971',
  },
  /** 新增活动发券商户号 @see https://pay.weixin.qq.com/doc/v3/merchant/4012466671 */
  marketingPaygiftactivityActivitiesMerchantsAdd: {
    method: 'POST',
    path: '/v3/marketing/paygiftactivity/activities/{activity_id}/merchants/add',
    title: '新增活动发券商户号',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012466671',
  },
  /** 开发指引 @see https://pay.weixin.qq.com/doc/v3/merchant/4012064366 */
  marketingPaygiftactivityUniqueThresholdActivity: {
    method: 'POST',
    path: '/v3/marketing/paygiftactivity/unique-threshold-activity',
    title: '开发指引',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012064366',
  },
  /** 删除活动发券商户号 @see https://pay.weixin.qq.com/doc/v3/merchant/4012466787 */
  marketingPaygiftactivityActivitiesMerchantsDelete: {
    method: 'POST',
    path: '/v3/marketing/paygiftactivity/activities/{activity_id}/merchants/delete',
    title: '删除活动发券商户号',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012466787',
  },
  /** 获取支付有礼活动列表 @see https://pay.weixin.qq.com/doc/v3/merchant/4012489126 */
  marketingPaygiftactivityActivities2: {
    method: 'GET',
    path: '/v3/marketing/paygiftactivity/activities',
    title: '获取支付有礼活动列表',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012489126',
  },
  /** 开发指引 @see https://pay.weixin.qq.com/doc/v3/merchant/4012068086 */
  businesscirclePointsNotify: {
    method: 'POST',
    path: '/v3/businesscircle/points/notify',
    title: '开发指引',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012068086',
  },
  /** 商圈会员积分服务授权查询 @see https://pay.weixin.qq.com/doc/v3/merchant/4012534848 */
  businesscircleUserAuthorizations: {
    method: 'GET',
    path: '/v3/businesscircle/user-authorizations/{openid}',
    title: '商圈会员积分服务授权查询',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012534848',
  },
  /** 商圈会员停车状态同步 @see https://pay.weixin.qq.com/doc/v3/merchant/4012535502 */
  businesscircleParkings: {
    method: 'POST',
    path: '/v3/businesscircle/parkings',
    title: '商圈会员停车状态同步',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012535502',
  },
  /** 商圈会员待积分状态查询 @see https://pay.weixin.qq.com/doc/v3/merchant/4012534994 */
  businesscircleUsersPointsCommitStatus: {
    method: 'GET',
    path: '/v3/businesscircle/users/{openid}/points/commit_status',
    title: '商圈会员待积分状态查询',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012534994',
  },
  /** 开发指引 @see https://pay.weixin.qq.com/doc/v3/merchant/4012062997 */
  smartguideGuides: {
    method: 'POST',
    path: '/v3/smartguide/guides',
    title: '开发指引',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012062997',
  },
  /** 服务人员查询 @see https://pay.weixin.qq.com/doc/v3/merchant/4012535123 */
  smartguideGuides2: {
    method: 'GET',
    path: '/v3/smartguide/guides',
    title: '服务人员查询',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012535123',
  },
  /** 服务人员更新 @see https://pay.weixin.qq.com/doc/v3/merchant/4012535160 */
  smartguideGuides3: {
    method: 'POST',
    path: '/v3/smartguide/guides/{guide_id}',
    title: '服务人员更新',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012535160',
  },
  /** 服务人员分配 @see https://pay.weixin.qq.com/doc/v3/merchant/4012535161 */
  smartguideGuidesAssign: {
    method: 'POST',
    path: '/v3/smartguide/guides/{guide_id}/assign',
    title: '服务人员分配',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012535161',
  },
  /** 开发指引 @see https://pay.weixin.qq.com/doc/v3/merchant/4012068499 */
  merchantServiceComplaintsV2: {
    method: 'POST',
    path: '/v3/merchant-service/complaints-v2',
    title: '开发指引',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012068499',
  },
  /** 业务示例代码 @see https://pay.weixin.qq.com/doc/v3/merchant/4015821404 */
  merchantServiceImagesXxxxx: {
    method: 'POST',
    path: '/v3/merchant-service/images/xxxxx',
    title: '业务示例代码',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4015821404',
  },
  /** 查询投诉单详情 @see https://pay.weixin.qq.com/doc/v3/merchant/4012533436 */
  merchantServiceComplaintsV22: {
    method: 'GET',
    path: '/v3/merchant-service/complaints-v2/{complaint_id}',
    title: '查询投诉单详情',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012533436',
  },
  /** 查询投诉单列表 @see https://pay.weixin.qq.com/doc/v3/merchant/4012533431 */
  merchantServiceComplaintsV23: {
    method: 'GET',
    path: '/v3/merchant-service/complaints-v2',
    title: '查询投诉单列表',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012533431',
  },
  /** 创建投诉通知回调地址 @see https://pay.weixin.qq.com/doc/v3/merchant/4012458679 */
  merchantServiceComplaintNotifications: {
    method: 'POST',
    path: '/v3/merchant-service/complaint-notifications',
    title: '创建投诉通知回调地址',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012458679',
  },
  /** 查询投诉通知回调地址 @see https://pay.weixin.qq.com/doc/v3/merchant/4012459014 */
  merchantServiceComplaintNotifications2: {
    method: 'GET',
    path: '/v3/merchant-service/complaint-notifications',
    title: '查询投诉通知回调地址',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012459014',
  },
  /** 更新投诉通知回调地址 @see https://pay.weixin.qq.com/doc/v3/merchant/4012459282 */
  merchantServiceComplaintNotifications3: {
    method: 'PUT',
    path: '/v3/merchant-service/complaint-notifications',
    title: '更新投诉通知回调地址',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012459282',
  },
  /** 删除投诉通知回调地址 @see https://pay.weixin.qq.com/doc/v3/merchant/4012460452 */
  merchantServiceComplaintNotifications4: {
    method: 'DELETE',
    path: '/v3/merchant-service/complaint-notifications',
    title: '删除投诉通知回调地址',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012460452',
  },
  /** 查询投诉单协商历史 @see https://pay.weixin.qq.com/doc/v3/merchant/4012533439 */
  merchantServiceComplaintsV2NegotiationHistorys: {
    method: 'GET',
    path: '/v3/merchant-service/complaints-v2/{complaint_id}/negotiation-historys',
    title: '查询投诉单协商历史',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012533439',
  },
  /** 反馈处理完成 @see https://pay.weixin.qq.com/doc/v3/merchant/4012467255 */
  merchantServiceComplaintsV2Complete: {
    method: 'POST',
    path: '/v3/merchant-service/complaints-v2/{complaint_id}/complete',
    title: '反馈处理完成',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012467255',
  },
  /** 回复用户 @see https://pay.weixin.qq.com/doc/v3/merchant/4012467254 */
  merchantServiceComplaintsV2Response: {
    method: 'POST',
    path: '/v3/merchant-service/complaints-v2/{complaint_id}/response',
    title: '回复用户',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012467254',
  },
  /** 更新退款审批结果 @see https://pay.weixin.qq.com/doc/v3/merchant/4012467256 */
  merchantServiceComplaintsV2UpdateRefundProgress: {
    method: 'POST',
    path: '/v3/merchant-service/complaints-v2/{complaint_id}/update-refund-progress',
    title: '更新退款审批结果',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012467256',
  },
  /** 图片上传接口 @see https://pay.weixin.qq.com/doc/v3/merchant/4012467250 */
  merchantServiceImagesUpload: {
    method: 'POST',
    path: '/v3/merchant-service/images/upload',
    title: '图片上传接口',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012467250',
  },
  /** 图片请求接口 @see https://pay.weixin.qq.com/doc/v3/merchant/4012467251 */
  merchantServiceImages: {
    method: 'GET',
    path: '/v3/merchant-service/images/{media_id}',
    title: '图片请求接口',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012467251',
  },
  /** 常见问题 @see https://pay.weixin.qq.com/doc/v3/merchant/4013038816 */
  xxx: {
    method: 'GET',
    path: '/v3/xxx',
    title: '常见问题',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4013038816',
  },
  /** 商户签名验签／加解密测试 @see https://pay.weixin.qq.com/doc/v3/merchant/4014551946 */
  securityEcho: {
    method: 'POST',
    path: '/v3/security/echo',
    title: '商户签名验签／加解密测试',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4014551946',
  },
  /** 回复需要即时服务的投诉单 @see https://pay.weixin.qq.com/doc/v3/merchant/4017151596 */
  merchantServiceComplaintsV2ResponseImmediateService: {
    method: 'POST',
    path: '/v3/merchant-service/complaints-v2/{complaint_id}/response-immediate-service',
    title: '回复需要即时服务的投诉单',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4017151596',
  },
  /** 下载平台证书 @see https://pay.weixin.qq.com/doc/v3/merchant/4012551764 */
  certificates: {
    method: 'GET',
    path: '/v3/certificates',
    title: '下载平台证书',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012551764',
  },
  /** 请求参数里有Query（查询参数），如何计算签名 @see https://pay.weixin.qq.com/doc/v3/merchant/4012365337 */
  marketingPartnerships2: {
    method: 'POST',
    path: '/v3/marketing/partnerships',
    title: '请求参数里有Query（查询参数），如何计算签名',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012365337',
  },
  /** 报错：HTTP header缺少微信支付平台证书序列号(Wechatpay-Serial) @see https://pay.weixin.qq.com/doc/v3/merchant/4012365346 */
  transactionsOutTradeNo1217752501201407033233368018Close: {
    method: 'POST',
    path: '/v3/pay/transactions/out-trade-no/1217752501201407033233368018/close',
    title: '报错：HTTP header缺少微信支付平台证书序列号(Wechatpay-Serial)',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012365346',
  },
  /** 报错：状态码401或者“错误的签名，验签失败”或者“签名错误，请检查后再试” @see https://pay.weixin.qq.com/doc/v3/merchant/4012365347 */
  certificates2: {
    method: 'POST',
    path: '/v3/certificates',
    title: '报错：状态码401或者“错误的签名，验签失败”或者“签名错误，请检查后再试”',
    cat: 'misc',
    doc: 'https://pay.weixin.qq.com/doc/v3/merchant/4012365347',
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

/** 全量接口表：每个端点封装为 (body?, query?, extra?) => Promise<T>。 */
export type GeneratedApi = {
  [K in EndpointId]: <T = unknown>(
    body?: RequestBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ) => Promise<T>;
};

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
