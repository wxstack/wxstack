// 本文件由 scripts/gen-endpoints.mjs 自动生成，请勿手改。
// 数据来源：官方文档站点 developers.weixin.qq.com，覆盖该平台已抓取的全部服务端接口与参数。
// 每个端点是「自动鉴权薄封装」；未在高层方法中显式封装的接口均可在此调用。

import type { CallOptions, QueryValue, RequestBody } from '@wxstack/core';

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

/** 获取电商概览数据 —— 请求体。 */
export interface EcCompassFinderOverallGetBody {
  /** 日期，格式YYYYMMDD */
  ds: string;
}
/** 获取电商概览数据 —— 返回体。 */
export interface EcCompassFinderOverallGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** data */
  data?: Record<string, unknown>;
}

/** 获取带货商品数据 —— 请求体。 */
export interface EcCompassFinderProductDataGetBody {
  /** 日期，格式YYYYMMDD */
  ds: string;
}
/** 获取带货商品数据 —— 返回体。 */
export interface EcCompassFinderProductDataGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** product_info */
  product_info?: Record<string, unknown>;
}

/** 获取带货商品列表 —— 请求体。 */
export interface EcCompassFinderProductListGetBody {
  /** 日期，格式YYYYMMDD */
  ds: string;
}
/** 获取带货商品列表 —— 返回体。 */
export interface EcCompassFinderProductListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** product_list */
  product_list?: unknown[];
}

/** 获取带货人群数据 —— 请求体。 */
export interface EcCompassFinderSaleProfileDataGetBody {
  /** 日期，格式YYYYMMDD */
  ds: string;
  /** 用户类型，详情请参考下文 */
  type: number;
}
/** 获取带货人群数据 —— 返回体。 */
export interface EcCompassFinderSaleProfileDataGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** data */
  data?: Record<string, unknown>;
}

/** 获取留资组件Id列表详情 —— 请求体。 */
export interface LeadsGetLeadsComponentIdBody {
  /** 顺序翻页，传入上次请求返回的last_buffer, 会从上次返回的结果往后翻一页 */
  last_buffer?: string;
}
/** 获取留资组件Id列表详情 —— 返回体。 */
export interface LeadsGetLeadsComponentIdResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 留资组件 */
  item?: unknown[];
  /** 本次翻页的上下文，用于顺序翻页请求 */
  last_buffer?: string;
  /** 是否还有留资组件Id */
  continue_flag?: boolean;
}

/** 获取留资组件直播推广记录信息详情 —— 请求体。 */
export interface LeadsGetLeadsComponentPromoteRecordBody {
  /** 用于查询某个留资组件某段时间内的直播推广记录信息 */
  leads_component_id: string;
  /** 开始时间 */
  start_time?: number;
  /** 结束时间 */
  end_time?: number;
  /** 顺序翻页，传入上次请求返回的last_buffer, 会从上次返回的结果往后翻一页 */
  last_buffer?: string;
}
/** 获取留资组件直播推广记录信息详情 —— 返回体。 */
export interface LeadsGetLeadsComponentPromoteRecordResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 留资组件直播推广记录列表 */
  record_data?: unknown[];
  /** 本次翻页的上下文，用于顺序翻页请求 */
  last_buffer?: string;
  /** 是否还有直播推广记录信息 */
  continue_flag?: boolean;
}

/** 按时间获取留资信息详情 —— 请求体。 */
export interface LeadsGetLeadsInfoByComponentIdBody {
  /** 用于查询某个留资组件某段时间内收集的留资信息 */
  leads_component_id: string;
  /** 开始时间 */
  start_time?: number;
  /** 结束时间 */
  end_time?: number;
  /** 顺序翻页，传入上次请求返回的last_buffer, 会从上次返回的结果往后翻一页 */
  last_buffer?: string;
  /** 接口版本号 */
  version: number;
}
/** 按时间获取留资信息详情 —— 返回体。 */
export interface LeadsGetLeadsInfoByComponentIdResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户留资信息列表 */
  user_data?: unknown[];
  /** 本次翻页的上下文，用于顺序翻页请求 */
  last_buffer?: string;
  /** 是否还有留资信息 */
  continue_flag?: boolean;
}

/** 按直播场次获取留资信息详情 —— 请求体。 */
export interface LeadsGetLeadsInfoByRequestIdBody {
  /** 用于查询某个留资组件某场直播收集的留资信息 */
  request_id: string;
  /** 顺序翻页，传入上次请求返回的last_buffer, 会从上次返回的结果往后翻一页 */
  last_buffer?: string;
  /** 接口版本号 */
  version: number;
}
/** 按直播场次获取留资信息详情 —— 返回体。 */
export interface LeadsGetLeadsInfoByRequestIdResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户留资信息列表 */
  user_data?: unknown[];
  /** 本次翻页的上下文，用于顺序翻页请求 */
  last_buffer?: string;
  /** 是否还有留资信息 */
  continue_flag?: boolean;
}

/** 获取留资request_id列表详情 —— 请求体。 */
export interface LeadsGetLeadsRequestIdBody {
  /** 用于查询某个留资组件的直播列表对应的request_id列表信息 */
  leads_component_id: string;
  /** 顺序翻页，传入上次请求返回的last_buffer, 会从上次返回的结果往后翻一页 */
  last_buffer?: string;
}
/** 获取留资request_id列表详情 —— 返回体。 */
export interface LeadsGetLeadsRequestIdResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 直播功能 */
  item?: unknown[];
  /** 本次翻页的上下文，用于顺序翻页请求 */
  last_buffer?: string;
  /** 是否还有留资信息 */
  continue_flag?: boolean;
}

/** 获取视频号账号信息 —— 请求体（文档未列字段，放行任意键）。 */
export type FinderliveGetFinderAttrByAppidBody = Record<string, unknown>;
/** 获取视频号账号信息 —— 返回体。 */
export interface FinderliveGetFinderAttrByAppidResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 视频号信息 */
  finder_attr?: unknown[];
}

/** 获取留资直播数据详情 —— 请求体。 */
export interface FinderliveGetFinderLiveDataListBody {
  /** 查询范围的开始时间（与关播时间对比） */
  start_time?: number;
  /** 查询范围的结束时间（与关播时间对比） */
  end_time?: number;
  /** 顺序翻页，传入上次请求返回的last_buffer, 会从上次返回的结果往后翻一页 */
  last_buffer?: string;
}
/** 获取留资直播数据详情 —— 返回体。 */
export interface FinderliveGetFinderLiveDataListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 本次翻页的上下文，用于顺序翻页请求 */
  last_buffer?: string;
  /** 是否还有直播 */
  continue_flag?: boolean;
  /** 直播信息 */
  item?: unknown[];
}

/** 获取账号收集的留资数量 —— 请求体。 */
export interface FinderliveGetFinderLiveLeadsDataBody {
  /** 查询范围的开始时间（与用户留资时间对比） */
  start_time: number;
  /** 查询范围的结束时间（与用户留资时间对比） */
  end_time: number;
  /** 来源类型，枚举值详情请参考下文 */
  source_type?: number;
}
/** 获取账号收集的留资数量 —— 返回体。 */
export interface FinderliveGetFinderLiveLeadsDataResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 留资详情 */
  item?: unknown[];
}

/** 视频号获取当前的直播预约记录 —— 请求体（文档未列字段，放行任意键）。 */
export type EcFinderliveGetfinderlivenoticerecordlistBody = Record<string, unknown>;
/** 视频号获取当前的直播预约记录 —— 返回体。 */
export interface EcFinderliveGetfinderlivenoticerecordlistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** live_notice_list */
  live_notice_list?: Record<string, unknown>;
}

/** 视频号获取当前的直播记录 —— 请求体（文档未列字段，放行任意键）。 */
export type EcFinderliveGetfinderliverecordlistBody = Record<string, unknown>;
/** 视频号获取当前的直播记录 —— 返回体。 */
export interface EcFinderliveGetfinderliverecordlistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** live_list */
  live_list?: unknown[];
}

/** 获取直播大屏数据 —— 请求体。 */
export interface LivedashboardGetlivedataBody {
  /** 直播唯一ID */
  export_id: string;
}
/** 获取直播大屏数据 —— 返回体。 */
export interface LivedashboardGetlivedataResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 追踪ID，报bug带 */
  trace_id?: string;
  /** 直播大屏基础数据json，对应实体 LiveDashboardData */
  live_dashboard_data?: Record<string, unknown>;
  /** 内容力数据json，对应实体 LiveComparisonIndex */
  live_comparison_index?: Record<string, unknown>;
  /** 电商数据概要数据json，对应实体 LiveEcDataSummary */
  live_ec_data_summary?: Record<string, unknown>;
  /** 电商转化力数据json，对应实体 LiveEcConversionMetric */
  live_ec_conversion_metric?: Record<string, unknown>;
  /** 电商画像数据json，对应实体 LiveEcProfile */
  live_ec_profile?: Record<string, unknown>;
  /** 电商渠道分布json，对应实体 LiveDistributionChannel */
  live_distribution_channel?: Record<string, unknown>;
  /** 电商商品数据json，对应实体 SingleLiveEcSpuDataPageV2 */
  single_live_ec_spu_data_page_v2?: Record<string, unknown>;
}

/** 获取直播大屏直播列表 —— 请求体。 */
export interface LivedashboardGetlivelistBody {
  /** 日期。目前参数 ds 不得早于 20240101。 */
  ds: number;
}
/** 获取直播大屏直播列表 —— 返回体。 */
export interface LivedashboardGetlivelistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 追踪ID，报bug带 */
  trace_id?: string;
  /** 直播信息 */
  live_items?: unknown[];
  /** 是否还有更多的直播 */
  has_more?: boolean;
}

/** 上架商品到橱窗 —— 请求体。 */
export interface EcWindowProductAddBody {
  /** 橱窗商品ID */
  product_id: number;
  /** 商品来源店铺的appid */
  appid: string;
  /** 是否需要在个人橱窗页隐藏 (默认为false) */
  is_hide_for_window?: boolean;
}
/** 上架商品到橱窗 —— 返回体。 */
export interface EcWindowProductAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取橱窗商品详情 —— 请求体。 */
export interface EcWindowProductGetBody {
  /** 橱窗商品ID */
  product_id: number;
  /** 商品来源店铺的appid，need_cps_product为true时可留空, 否则必填 */
  appid: string;
  /** 是否查询带货商品 */
  need_cps_product?: boolean;
}
/** 获取橱窗商品详情 —— 返回体。 */
export interface EcWindowProductGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 橱窗商品详情，结构体详情请参考Product */
  product?: Record<string, unknown>;
  /** 橱窗中的带货商品详情(详见"关于橱窗中的带货商品") */
  cps_products?: unknown[];
}

/** 获取已添加到橱窗的商品列表 —— 请求体。 */
export interface EcWindowProductListGetBody {
  /** 用于指定查询某个店铺来源的商品 */
  appid?: string;
  /** 用于指定查询属于某个分店ID下的商品 */
  branch_id?: number;
  /** 单页商品数（不超过200） */
  page_size: number;
  /** 页面下标，下标从1开始，默认为1 */
  page_index?: number;
  /** 由上次请求返回，顺序翻页时需要传入, 会从上次返回的结果往后翻一页（填了该值后page_index不生效） */
  last_buffer?: string;
  /** 是否需要返回满足筛选条件的商品总数 */
  need_total_num?: boolean;
  /** 是否仅查询橱窗中的带货商品 */
  query_cps_product?: boolean;
}
/** 获取已添加到橱窗的商品列表 —— 返回体。 */
export interface EcWindowProductListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** products */
  products?: Record<string, unknown>;
  /** 本次翻页的上下文，用于顺序翻页请求 */
  last_buffer?: string;
  /** 商品总数 */
  total_num?: number;
}

/** 下架橱窗商品 —— 请求体。 */
export interface EcWindowProductOffBody {
  /** 橱窗商品ID */
  product_id: number;
  /** 商品来源店铺的appid */
  appid: string;
}
/** 下架橱窗商品 —— 返回体。 */
export interface EcWindowProductOffResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取售后单 —— 请求体。 */
export interface EcAftersaleGetaftersaleorderBody {
  /** 售后单号 */
  after_sale_order_id: string;
}
/** 获取售后单 —— 返回体。 */
export interface EcAftersaleGetaftersaleorderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 售后单 */
  after_sale_order?: Record<string, unknown>;
}

/** 撤销用户已核销团购优惠 —— 请求体。 */
export interface EcVoucherRevokeBody {
  /** 撤销操作幂等串，商户自定义，请保证在小店下唯一 */
  revoke_request_no: string;
  /** 待撤回核销的券列表，最多10张，需要属于同一个订单，不能为空。对于次卡类型商品，如果传多个相同的ReovkeVoucher，代表撤销多次。撤销核销多次/多张同时成功或同时失败，不会部分成功。 */
  reovke_vouchers: unknown[];
  /** 撤销核销次卡时必须要传此字段，说明撤销的核销单号 */
  consume_request_no?: string;
}
/** 撤销用户已核销团购优惠 —— 返回体。 */
export interface EcVoucherRevokeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户券详情 */
  voucher_list?: unknown[];
  /** 无法操作的券，在明确有券无法核销时返回，含无法核销原因 */
  fail_voucher_list?: unknown[];
}

/** 获取资金流水列表 —— 请求体。 */
export interface EcFundsGetfundsflowlistBody {
  /** 页码，从1开始 */
  page?: number;
  /** 页数，不填默认为10 */
  page_size?: number;
  /** 分页参数，翻页时写入上一页返回的next_key(page为上一页加一，并且page_size与上一页相同的时候才生效)，page * page_size >= 10000时必填 */
  next_key?: string;
  /** 流水产生的开始时间，uinx时间戳 */
  start_time?: number;
  /** 流水产生的结束时间，unix时间戳。当日资金流水出账时间为次日16点后，因此16点前end_time最大值为前1天的0点0分0秒，16点后end_time最大值为当天0点0分0秒。如果end_time */
  end_time?: number;
  /** 支付单号 */
  transaction_id?: string;
}
/** 获取资金流水列表 —— 返回体。 */
export interface EcFundsGetfundsflowlistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 流水单号列表 */
  flow_ids?: unknown[];
  /** 是否还有下一页 */
  has_more?: boolean;
  /** 分页参数，深翻页时使用 */
  next_key?: string;
}

/** 查询券账单 —— 请求体。 */
export interface EcVoucherGetBillListBody {
  /** 通过本地生活api创建的商品id */
  product_id: string;
  /** 账单日期，券发起核销时间 */
  bill_date: string;
  /** 页大小 值限制: 1 ≤ value ≤ 100 */
  page_size: number;
  /** 翻页上下文，第一次请求填空，后续请求值为上次请求的返回 */
  page_ctx: string;
}
/** 查询券账单 —— 返回体。 */
export interface EcVoucherGetBillListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户券账单列表 */
  bill_list?: unknown[];
  /** 翻页上下文，如果为空，说明没有下一页 */
  page_ctx?: string;
}

/** 获取订单详情 —— 请求体。 */
export interface EcOrderGetBody {
  /** 订单ID，可从获取订单列表中获得 */
  order_id: string;
}
/** 获取订单详情 —— 返回体。 */
export interface EcOrderGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 订单结构 */
  order?: Record<string, unknown>;
}

/** 添加团购优惠 —— 请求体。 */
export interface EcProductLocallifeAddBody {
  /** 外部系统id，只作为商品字段存储，不用做索引。通常为商家侧的商品id，商家需自动维护好out_product_id和平台侧生成的product_id之间对应关系 */
  out_product_id?: string;
  /** 券类型。1. 代金券；2. 兑换券；3. 次卡。创建后不支持修改 */
  product_type: number;
  /** 名称（最少3字符，最多60字符），中文文字/英文字母/数字，都各算1个有效字符数，且不得仅为数字或英文，不得含非法字符，允许的特殊字符集为：`·~～!@#$%^&()！@#￥%……&*（）\-_——= */
  product_name: string;
  /** 三级类目id，通过接口[获取所有的类目 */
  category_id: number;
  /** 品牌id，店铺可用接口通过[[获取生效中的品牌资质列表 */
  brand_id: number;
  /** 主图。必使用接口[上传图片 */
  head_imgs: unknown[];
  /** 商品资质列表，所创建的商品需核验其他资质时填入（如酒店房间含早餐）；资质列表可参考获取类目信息中的字段product_qua_list */
  product_qua_infos?: Record<string, unknown>;
  /** 核销跳转出口。订单详情用户可前往小程序核销。 如小程序核销流程无法满足体验规范的商家，将予以断播处罚 */
  verify_page?: unknown;
  /** 是否支持到店核销。1. 支持；0. 不支持。不填则默认1.支持。当选择0.不支持时，订单页面将不展示核销二维码，且必须填写verify_page参数 */
  verify_at_store?: number;
  /** 1. 平台生成；2. 商家预存code，用户支付成功后平台发放。创建后不支持修改 */
  code_source_type: number;
  /** 商品属性kv，具体字段参照团购商品结构体定义【代金券属性KV】或者【兑换券属性KV】小节 */
  attr_kv_map: Record<string, unknown>;
  /** 售卖单元，本接口不支持直接设置库存，请调用修改团购优惠库存的接口设置库存 */
  skus: unknown[];
}
/** 添加团购优惠 —— 返回体。 */
export interface EcProductLocallifeAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** data */
  data?: Record<string, unknown>;
}

/** 撤回商品审核 —— 请求体。 */
export interface EcProductAuditCancelBody {
  /** 平台生成的 id */
  product_id: string;
}
/** 撤回商品审核 —— 返回体。 */
export interface EcProductAuditCancelResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 删除商品 —— 请求体。 */
export interface EcProductDeleteBody {
  /** 平台生成的 id */
  product_id: string;
}
/** 删除商品 —— 返回体。 */
export interface EcProductDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 下架商品 —— 请求体。 */
export interface EcProductDelistingBody {
  /** 平台生成的 id */
  product_id: string;
}
/** 下架商品 —— 返回体。 */
export interface EcProductDelistingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询团购优惠详情 —— 请求体。 */
export interface EcProductLocallifeGetBody {
  /** 平台生成的id */
  product_id: number;
  /** 默认取1。1:获取线上数据, 2:获取草稿数据, 3:同时获取线上和草稿数据（注意：上架过的商品才有线上数据） */
  data_type?: number;
}
/** 查询团购优惠详情 —— 返回体。 */
export interface EcProductLocallifeGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品线上数据，入参data_type==2时不返回该字段；入参data_type==3且商品从未上架过，不返回该字段 */
  online_data?: Record<string, unknown>;
  /** 商品草稿数据，入参data_type==1时不返回该字段 */
  draft_data?: Record<string, unknown>;
}

/** 查询团购优惠列表 —— 请求体。 */
export interface EcProductLocallifeListGetBody {
  /** 商品状态，不填默认拉全部商品（不包含回收站） */
  status?: number;
  /** 每页数量（默认10，不超过30） */
  page_size?: number;
  /** 由上次请求返回，记录翻页的上下文。传入时会从上次返回的结果往后翻一页，不传默认获取第一页数据 */
  next_key?: string;
}
/** 查询团购优惠列表 —— 返回体。 */
export interface EcProductLocallifeListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品id列表 */
  product_ids?: unknown[];
  /** 本次翻页的上下文，用于请求下一页 */
  next_key?: string;
  /** 商品总数 */
  total_num?: number;
}

/** 上架商品 —— 请求体。 */
export interface EcProductListingBody {
  /** 平台生成的 id */
  product_id: string;
}
/** 上架商品 —— 返回体。 */
export interface EcProductListingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 免审更新团购优惠 —— 请求体。 */
export interface EcProductLocallifeAuditfreeBody {
  /** 平台生成的id */
  product_id: number;
  /** 售卖单元，更新时sku_id为必填项。本接口不支持直接设置库存数量，请调用修改团购优惠库存的接口设置库存数量 */
  skus: Record<string, unknown>;
}
/** 免审更新团购优惠 —— 返回体。 */
export interface EcProductLocallifeAuditfreeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 更新团购优惠 —— 请求体。 */
export interface EcProductLocallifeUpdateBody {
  /** 平台生成的id */
  product_id: number;
  /** 券类型。1. 代金券；2. 兑换券；3. 次卡。创建后不支持修改。 */
  product_type: number;
  /** 名称（最少3字符，最多60字符），中文文字/英文字母/数字，都各算1个有效字符数，且不得仅为数字或英文，不得含非法字符，允许的特殊字符集为：·~～!@#$%^&()！@#￥%……&*（）\-_——=+ */
  product_name: string;
  /** 三级类目id，通过接口[获取所有的类目 */
  category_id: number;
  /** 品牌id，店铺可用接口通过[获取生效中的品牌资质列表 */
  brand_id: number;
  /** 主图。必使用接口[上传图片 */
  head_imgs: unknown[];
  /** 商品资质列表，所创建的商品需核验其他资质时填入（如酒店房间含早餐）；资质列表可参考获取类目信息中的参数product_qua_list */
  product_qua_infos?: Record<string, unknown>;
  /** 核销跳转出口，订单详情页可跳转至商家小程序核销 */
  verify_page?: unknown;
  /** 是否支持到店核销。1. 支持，0. 不支持。默认1.支持。当选择0.不支持时，订单页面将不展示核销二维码，且必须填写verify_page参数。 */
  verify_at_store?: number;
  /** 1. 平台生成；2. 商家自定义；3. 发券实时传code （实时发券模式暂不开放） 。创建后不支持修改。 */
  code_source_type: number;
  /** 商品属性kv，具体字段参照结构体定义【代金券属性KV】或者【兑换券属性KV】小节 */
  attr_kv_map: unknown;
  /** 售卖单元，更新时sku_id为必填项。本接口不支持直接设置库存数量，请调用修改团购优惠库存的接口设置库存数量。 */
  skus: unknown[];
}
/** 更新团购优惠 —— 返回体。 */
export interface EcProductLocallifeUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 核销用户的团购优惠 —— 请求体。 */
export interface EcVoucherConsumeBody {
  /** 核销操作幂等串，商户自定义，请保证在小店下唯一 size最长128字节 */
  consume_request_no: string;
  /** 用户订单详情页跳转商家上小程序时可以从path上获取。codes + sku_id组合和encrypted_codes二者选其一。对于次卡类型商品，如果传多次相同的encrypted_code，代表核 */
  encrypted_codes?: unknown[];
  /** 用户的券code，用户订单详情页面的二维码扫码后获得，查询用户的团购优惠详情接口返回的code。codes+ sku_id组合和encrypted_codes二者选其一。对于次卡类型商品，如果传多次相 */
  codes?: unknown[];
  /** 如果不是使用encrypted_code核销，sku_id必传 */
  sku_id?: string;
  /** 如果需要在C端展示券的核销门店名称，可以选填（仅作为展示）size最长128字节 */
  consume_store_name?: string;
  /** 核销渠道。仅供商家用于标记用户核销的途径是通过小程序核销/线下识别二维码核销，平台侧无额外校验规则。 */
  consume_channel: number;
  /** 核销门店id，商家自定义的门店id（仅作为商家门店标记） */
  out_store_id?: string;
}
/** 核销用户的团购优惠 —— 返回体。 */
export interface EcVoucherConsumeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户券详情 */
  voucher_list?: unknown[];
  /** 无法操作的券，在明确有券无法核销时返回，含无法核销原因,当API返回10027061时返回 */
  fail_voucher_list?: unknown[];
}

/** 查询用户的团购优惠列表 —— 请求体。 */
export interface EcVoucherGetListBody {
  /** 用户openid */
  openid: string;
  /** 不填代表查所有券 */
  status?: number;
  /** 页大小值限制: 1 ≤ value ≤ 50 */
  page_size: number;
  /** 翻页上下文，第一次请求填空，后续请求值为上次请求的返回 */
  page_ctx: string;
}
/** 查询用户的团购优惠列表 —— 返回体。 */
export interface EcVoucherGetListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户openid */
  openid?: string;
  /** 用户券列表 */
  voucher_list?: unknown[];
  /** 翻页上下文，第一次请求填空，后续请求值为上次请求的返回 */
  page_ctx?: string;
}

/** 查询用户的团购优惠详情 —— 请求体。 */
export interface EcVoucherGetBody {
  /** 用户订单详情页展示的二维码，需要进行URL解码。code和encrypted_data二者选其一 */
  encrypted_code?: string;
  /** 用户的券code，查询用户的券接口返回的code。code和encrypted_data二者选其一 */
  code?: string;
  /** 使用encrypted_code查询时，不用传sku_id */
  sku_id?: string;
}
/** 查询用户的团购优惠详情 —— 返回体。 */
export interface EcVoucherGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户券详情 */
  voucher?: Record<string, unknown>;
}

/** 快速更新库存 —— 请求体。 */
export interface EcProductStockUpdateBody {
  /** 内部商品 ID */
  product_id: string;
  /** 内部 sku_id */
  sku_id: string;
  /** 修改类型。 1=增加，2=减少，3=设置。 建议使用 1 或 2 ，不建议使用 3 ，因为使用 3 在高并发场景可能会出现预期外表现 */
  diff_type: number;
  /** 增加、减少或者设置的库存值。 */
  num: number;
}
/** 快速更新库存 —— 返回体。 */
export interface EcProductStockUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 上传团购优惠code —— 请求体。 */
export interface EcVoucherCodesUploadBody {
  /** 通过本地生活api或页面创建的商品id */
  product_id: string;
  /** 创建的商品时返回的sku_id */
  sku_id: string;
  /** 商户上传的券code列表 一次最多200个 单个code不超过48位 code仅支持由数字和字母组成 */
  codes: unknown[];
}
/** 上传团购优惠code —— 返回体。 */
export interface EcVoucherCodesUploadResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 通过本地生活api或页面创建的商品id */
  product_id?: string;
  /** 本次上传去重后的code总数 */
  total_count?: number;
  /** 本次上传操作上传成功个数 */
  success_count?: number;
  /** 上传成功的code列表 */
  success_codes?: unknown[];
  /** 本次上传操作上传失败的code数 */
  fail_count?: number;
  /** 本次导入失败的code信息，请参照错误信息，修改后重试 */
  fail_codes?: unknown[];
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
  // ===== api =====
  /** 网络通信检测 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_callbackcheck.html */
  callbackCheck: {
    method: 'POST',
    path: '/cgi-bin/callback/check',
    title: '网络通信检测',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/basic/api_callbackcheck.html',
  },
  /** 重置指定API调用次数 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_clearapiquota.html */
  openapiQuotaClear: {
    method: 'POST',
    path: '/cgi-bin/openapi/quota/clear',
    title: '重置指定API调用次数',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/basic/api_clearapiquota.html',
  },
  /** 重置API调用次数 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_clearquota.html */
  clearQuota: {
    method: 'POST',
    path: '/cgi-bin/clear_quota',
    title: '重置API调用次数',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/basic/api_clearquota.html',
  },
  /** 使用AppSecret重置API调用次数 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_clearquotabyappsecret.html */
  clearQuotaV2: {
    method: 'POST',
    path: '/cgi-bin/clear_quota/v2',
    title: '使用AppSecret重置API调用次数',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/basic/api_clearquotabyappsecret.html',
  },
  /** 获取接口调用凭据 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_getaccesstoken.html */
  token: {
    method: 'GET',
    path: '/cgi-bin/token',
    title: '获取接口调用凭据',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/basic/api_getaccesstoken.html',
  },
  /** 获取微信API服务器IP @see https://developers.weixin.qq.com/doc/channels/api/basic/api_getapidomainip.html */
  getApiDomainIp: {
    method: 'GET',
    path: '/cgi-bin/get_api_domain_ip',
    title: '获取微信API服务器IP',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/basic/api_getapidomainip.html',
  },
  /** 查询API调用额度 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_getapiquota.html */
  openapiQuotaGet: {
    method: 'POST',
    path: '/cgi-bin/openapi/quota/get',
    title: '查询API调用额度',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/basic/api_getapiquota.html',
  },
  /** 获取微信推送服务器IP @see https://developers.weixin.qq.com/doc/channels/api/basic/api_getcallbackip.html */
  getcallbackip: {
    method: 'GET',
    path: '/cgi-bin/getcallbackip',
    title: '获取微信推送服务器IP',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/basic/api_getcallbackip.html',
  },
  /** 查询rid信息 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_getridinfo.html */
  openapiRidGet: {
    method: 'POST',
    path: '/cgi-bin/openapi/rid/get',
    title: '查询rid信息',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/basic/api_getridinfo.html',
  },
  /** 获取稳定版接口调用凭据 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_getstableaccesstoken.html */
  stableToken: {
    method: 'POST',
    path: '/cgi-bin/stable_token',
    title: '获取稳定版接口调用凭据',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/basic/api_getstableaccesstoken.html',
  },
  /** 获取电商概览数据 @see https://developers.weixin.qq.com/doc/channels/api/channels/compass/api_getfinderoverall.html */
  ecCompassFinderOverallGet: {
    method: 'POST',
    path: '/channels/ec/compass/finder/overall/get',
    title: '获取电商概览数据',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/compass/api_getfinderoverall.html',
  },
  /** 获取带货商品数据 @see https://developers.weixin.qq.com/doc/channels/api/channels/compass/api_getfinderproductdata.html */
  ecCompassFinderProductDataGet: {
    method: 'POST',
    path: '/channels/ec/compass/finder/product/data/get',
    title: '获取带货商品数据',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/compass/api_getfinderproductdata.html',
  },
  /** 获取带货商品列表 @see https://developers.weixin.qq.com/doc/channels/api/channels/compass/api_getfinderproductlist.html */
  ecCompassFinderProductListGet: {
    method: 'POST',
    path: '/channels/ec/compass/finder/product/list/get',
    title: '获取带货商品列表',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/compass/api_getfinderproductlist.html',
  },
  /** 获取带货人群数据 @see https://developers.weixin.qq.com/doc/channels/api/channels/compass/api_getfindersaleprofiledata.html */
  ecCompassFinderSaleProfileDataGet: {
    method: 'POST',
    path: '/channels/ec/compass/finder/sale/profile/data/get',
    title: '获取带货人群数据',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/compass/api_getfindersaleprofiledata.html',
  },
  /** 获取留资组件Id列表详情 @see https://developers.weixin.qq.com/doc/channels/api/channels/leads/api_getleadscomponentid.html */
  leadsGetLeadsComponentId: {
    method: 'POST',
    path: '/channels/leads/get_leads_component_id',
    title: '获取留资组件Id列表详情',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/leads/api_getleadscomponentid.html',
  },
  /** 获取留资组件直播推广记录信息详情 @see https://developers.weixin.qq.com/doc/channels/api/channels/leads/api_getleadscomponentpromoterecord.html */
  leadsGetLeadsComponentPromoteRecord: {
    method: 'POST',
    path: '/channels/leads/get_leads_component_promote_record',
    title: '获取留资组件直播推广记录信息详情',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/leads/api_getleadscomponentpromoterecord.html',
  },
  /** 按时间获取留资信息详情 @see https://developers.weixin.qq.com/doc/channels/api/channels/leads/api_getleadsinfobycomponentid.html */
  leadsGetLeadsInfoByComponentId: {
    method: 'POST',
    path: '/channels/leads/get_leads_info_by_component_id',
    title: '按时间获取留资信息详情',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/leads/api_getleadsinfobycomponentid.html',
  },
  /** 按直播场次获取留资信息详情 @see https://developers.weixin.qq.com/doc/channels/api/channels/leads/api_getleadsinfobyrequestid.html */
  leadsGetLeadsInfoByRequestId: {
    method: 'POST',
    path: '/channels/leads/get_leads_info_by_request_id',
    title: '按直播场次获取留资信息详情',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/leads/api_getleadsinfobyrequestid.html',
  },
  /** 获取留资request_id列表详情 @see https://developers.weixin.qq.com/doc/channels/api/channels/leads/api_getleadsrequestid.html */
  leadsGetLeadsRequestId: {
    method: 'POST',
    path: '/channels/leads/get_leads_request_id',
    title: '获取留资request_id列表详情',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/leads/api_getleadsrequestid.html',
  },
  /** 获取视频号账号信息 @see https://developers.weixin.qq.com/doc/channels/api/channels/leadslive/api_getfinderattrbyappid.html */
  finderliveGetFinderAttrByAppid: {
    method: 'POST',
    path: '/channels/finderlive/get_finder_attr_by_appid',
    title: '获取视频号账号信息',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/leadslive/api_getfinderattrbyappid.html',
  },
  /** 获取留资直播数据详情 @see https://developers.weixin.qq.com/doc/channels/api/channels/leadslive/api_getfinderlivedatalist.html */
  finderliveGetFinderLiveDataList: {
    method: 'POST',
    path: '/channels/finderlive/get_finder_live_data_list',
    title: '获取留资直播数据详情',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/leadslive/api_getfinderlivedatalist.html',
  },
  /** 获取账号收集的留资数量 @see https://developers.weixin.qq.com/doc/channels/api/channels/leadslive/api_getfinderliveleadsdata.html */
  finderliveGetFinderLiveLeadsData: {
    method: 'POST',
    path: '/channels/finderlive/get_finder_live_leads_data',
    title: '获取账号收集的留资数量',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/leadslive/api_getfinderliveleadsdata.html',
  },
  /** 视频号获取当前的直播预约记录 @see https://developers.weixin.qq.com/doc/channels/api/channels/live/api_getfinderlivenoticerecordlist.html */
  ecFinderliveGetfinderlivenoticerecordlist: {
    method: 'POST',
    path: '/channels/ec/finderlive/getfinderlivenoticerecordlist',
    title: '视频号获取当前的直播预约记录',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/live/api_getfinderlivenoticerecordlist.html',
  },
  /** 视频号获取当前的直播记录 @see https://developers.weixin.qq.com/doc/channels/api/channels/live/api_getfinderliverecordlist.html */
  ecFinderliveGetfinderliverecordlist: {
    method: 'POST',
    path: '/channels/ec/finderlive/getfinderliverecordlist',
    title: '视频号获取当前的直播记录',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/live/api_getfinderliverecordlist.html',
  },
  /** 获取直播大屏数据 @see https://developers.weixin.qq.com/doc/channels/api/channels/livedashboard/api_getlivedata.html */
  livedashboardGetlivedata: {
    method: 'POST',
    path: '/channels/livedashboard/getlivedata',
    title: '获取直播大屏数据',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/livedashboard/api_getlivedata.html',
  },
  /** 获取直播大屏直播列表 @see https://developers.weixin.qq.com/doc/channels/api/channels/livedashboard/api_getlivelist.html */
  livedashboardGetlivelist: {
    method: 'POST',
    path: '/channels/livedashboard/getlivelist',
    title: '获取直播大屏直播列表',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/livedashboard/api_getlivelist.html',
  },
  /** 上架商品到橱窗 @see https://developers.weixin.qq.com/doc/channels/api/channels/windowproduct/api_addwindowproduct.html */
  ecWindowProductAdd: {
    method: 'POST',
    path: '/channels/ec/window/product/add',
    title: '上架商品到橱窗',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/windowproduct/api_addwindowproduct.html',
  },
  /** 获取橱窗商品详情 @see https://developers.weixin.qq.com/doc/channels/api/channels/windowproduct/api_getwindowproduct.html */
  ecWindowProductGet: {
    method: 'POST',
    path: '/channels/ec/window/product/get',
    title: '获取橱窗商品详情',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/windowproduct/api_getwindowproduct.html',
  },
  /** 获取已添加到橱窗的商品列表 @see https://developers.weixin.qq.com/doc/channels/api/channels/windowproduct/api_getwindowproductlist.html */
  ecWindowProductListGet: {
    method: 'POST',
    path: '/channels/ec/window/product/list/get',
    title: '获取已添加到橱窗的商品列表',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/windowproduct/api_getwindowproductlist.html',
  },
  /** 下架橱窗商品 @see https://developers.weixin.qq.com/doc/channels/api/channels/windowproduct/api_offwindowproduct.html */
  ecWindowProductOff: {
    method: 'POST',
    path: '/channels/ec/window/product/off',
    title: '下架橱窗商品',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/channels/windowproduct/api_offwindowproduct.html',
  },
  /** 获取售后单 @see https://developers.weixin.qq.com/doc/channels/api/locallife/automatically/api_getaftersaleorder.html */
  ecAftersaleGetaftersaleorder: {
    method: 'POST',
    path: '/channels/ec/aftersale/getaftersaleorder',
    title: '获取售后单',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/automatically/api_getaftersaleorder.html',
  },
  /** 撤销用户已核销团购优惠 @see https://developers.weixin.qq.com/doc/channels/api/locallife/cancel/api_withdrawconsume.html */
  ecVoucherRevoke: {
    method: 'POST',
    path: '/channels/ec/voucher/revoke',
    title: '撤销用户已核销团购优惠',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/cancel/api_withdrawconsume.html',
  },
  /** 获取资金流水列表 @see https://developers.weixin.qq.com/doc/channels/api/locallife/funds/api_getfundsflowlist.html */
  ecFundsGetfundsflowlist: {
    method: 'POST',
    path: '/channels/ec/funds/getfundsflowlist',
    title: '获取资金流水列表',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/funds/api_getfundsflowlist.html',
  },
  /** 查询券账单 @see https://developers.weixin.qq.com/doc/channels/api/locallife/funds/api_getvoucherbilllist.html */
  ecVoucherGetBillList: {
    method: 'POST',
    path: '/channels/ec/voucher/get_bill_list',
    title: '查询券账单',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/funds/api_getvoucherbilllist.html',
  },
  /** 获取订单详情 @see https://developers.weixin.qq.com/doc/channels/api/locallife/purchasing/api_getorder.html */
  ecOrderGet: {
    method: 'POST',
    path: '/channels/ec/order/get',
    title: '获取订单详情',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/purchasing/api_getorder.html',
  },
  /** 添加团购优惠 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_addlocalproduct.html */
  ecProductLocallifeAdd: {
    method: 'POST',
    path: '/channels/ec/product/locallife/add',
    title: '添加团购优惠',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_addlocalproduct.html',
  },
  /** 撤回商品审核 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_cancelauditproduct.html */
  ecProductAuditCancel: {
    method: 'POST',
    path: '/channels/ec/product/audit/cancel',
    title: '撤回商品审核',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_cancelauditproduct.html',
  },
  /** 删除商品 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_deleteproduct.html */
  ecProductDelete: {
    method: 'POST',
    path: '/channels/ec/product/delete',
    title: '删除商品',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_deleteproduct.html',
  },
  /** 下架商品 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_delistingproduct.html */
  ecProductDelisting: {
    method: 'POST',
    path: '/channels/ec/product/delisting',
    title: '下架商品',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_delistingproduct.html',
  },
  /** 查询团购优惠详情 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_getlocalproduct.html */
  ecProductLocallifeGet: {
    method: 'POST',
    path: '/channels/ec/product/locallife/get',
    title: '查询团购优惠详情',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_getlocalproduct.html',
  },
  /** 查询团购优惠列表 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_getlocalproductlist.html */
  ecProductLocallifeListGet: {
    method: 'POST',
    path: '/channels/ec/product/locallife/list/get',
    title: '查询团购优惠列表',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_getlocalproductlist.html',
  },
  /** 上架商品 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_listingproduct.html */
  ecProductListing: {
    method: 'POST',
    path: '/channels/ec/product/listing',
    title: '上架商品',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_listingproduct.html',
  },
  /** 免审更新团购优惠 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_updatelocalauditfree.html */
  ecProductLocallifeAuditfree: {
    method: 'POST',
    path: '/channels/ec/product/locallife/auditfree',
    title: '免审更新团购优惠',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_updatelocalauditfree.html',
  },
  /** 更新团购优惠 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_updatelocalproduct.html */
  ecProductLocallifeUpdate: {
    method: 'POST',
    path: '/channels/ec/product/locallife/update',
    title: '更新团购优惠',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_updatelocalproduct.html',
  },
  /** 核销用户的团购优惠 @see https://developers.weixin.qq.com/doc/channels/api/locallife/useing/api_consumevoucher.html */
  ecVoucherConsume: {
    method: 'POST',
    path: '/channels/ec/voucher/consume',
    title: '核销用户的团购优惠',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/useing/api_consumevoucher.html',
  },
  /** 查询用户的团购优惠列表 @see https://developers.weixin.qq.com/doc/channels/api/locallife/useing/api_findvoucher.html */
  ecVoucherGetList: {
    method: 'POST',
    path: '/channels/ec/voucher/get_list',
    title: '查询用户的团购优惠列表',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/useing/api_findvoucher.html',
  },
  /** 查询用户的团购优惠详情 @see https://developers.weixin.qq.com/doc/channels/api/locallife/useing/api_getvoucher.html */
  ecVoucherGet: {
    method: 'POST',
    path: '/channels/ec/voucher/get',
    title: '查询用户的团购优惠详情',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/useing/api_getvoucher.html',
  },
  /** 快速更新库存 @see https://developers.weixin.qq.com/doc/channels/api/locallife/voucher/api_updatestock.html */
  ecProductStockUpdate: {
    method: 'POST',
    path: '/channels/ec/product/stock/update',
    title: '快速更新库存',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/voucher/api_updatestock.html',
  },
  /** 上传团购优惠code @see https://developers.weixin.qq.com/doc/channels/api/locallife/voucher/api_uploadvouchercode.html */
  ecVoucherCodesUpload: {
    method: 'POST',
    path: '/channels/ec/voucher/codes/upload',
    title: '上传团购优惠code',
    cat: 'api',
    doc: 'https://developers.weixin.qq.com/doc/channels/api/locallife/voucher/api_uploadvouchercode.html',
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
  /** 网络通信检测 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_callbackcheck.html */
  callbackCheck(
    body?: CallbackCheckBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CallbackCheckResp>;
  /** 重置指定API调用次数 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_clearapiquota.html */
  openapiQuotaClear(
    body?: OpenapiQuotaClearBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenapiQuotaClearResp>;
  /** 重置API调用次数 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_clearquota.html */
  clearQuota(
    body?: ClearQuotaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ClearQuotaResp>;
  /** 使用AppSecret重置API调用次数 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_clearquotabyappsecret.html */
  clearQuotaV2(
    body?: ClearQuotaV2Body,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ClearQuotaV2Resp>;
  /** 获取接口调用凭据 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_getaccesstoken.html */
  token(
    body?: TokenBody,
    query?: TokenQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TokenResp>;
  /** 获取微信API服务器IP @see https://developers.weixin.qq.com/doc/channels/api/basic/api_getapidomainip.html */
  getApiDomainIp(
    body?: GetApiDomainIpBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetApiDomainIpResp>;
  /** 查询API调用额度 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_getapiquota.html */
  openapiQuotaGet(
    body?: OpenapiQuotaGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenapiQuotaGetResp>;
  /** 获取微信推送服务器IP @see https://developers.weixin.qq.com/doc/channels/api/basic/api_getcallbackip.html */
  getcallbackip(
    body?: GetcallbackipBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetcallbackipResp>;
  /** 查询rid信息 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_getridinfo.html */
  openapiRidGet(
    body?: OpenapiRidGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenapiRidGetResp>;
  /** 获取稳定版接口调用凭据 @see https://developers.weixin.qq.com/doc/channels/api/basic/api_getstableaccesstoken.html */
  stableToken(
    body?: StableTokenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<StableTokenResp>;
  /** 获取电商概览数据 @see https://developers.weixin.qq.com/doc/channels/api/channels/compass/api_getfinderoverall.html */
  ecCompassFinderOverallGet(
    body?: EcCompassFinderOverallGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCompassFinderOverallGetResp>;
  /** 获取带货商品数据 @see https://developers.weixin.qq.com/doc/channels/api/channels/compass/api_getfinderproductdata.html */
  ecCompassFinderProductDataGet(
    body?: EcCompassFinderProductDataGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCompassFinderProductDataGetResp>;
  /** 获取带货商品列表 @see https://developers.weixin.qq.com/doc/channels/api/channels/compass/api_getfinderproductlist.html */
  ecCompassFinderProductListGet(
    body?: EcCompassFinderProductListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCompassFinderProductListGetResp>;
  /** 获取带货人群数据 @see https://developers.weixin.qq.com/doc/channels/api/channels/compass/api_getfindersaleprofiledata.html */
  ecCompassFinderSaleProfileDataGet(
    body?: EcCompassFinderSaleProfileDataGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCompassFinderSaleProfileDataGetResp>;
  /** 获取留资组件Id列表详情 @see https://developers.weixin.qq.com/doc/channels/api/channels/leads/api_getleadscomponentid.html */
  leadsGetLeadsComponentId(
    body?: LeadsGetLeadsComponentIdBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<LeadsGetLeadsComponentIdResp>;
  /** 获取留资组件直播推广记录信息详情 @see https://developers.weixin.qq.com/doc/channels/api/channels/leads/api_getleadscomponentpromoterecord.html */
  leadsGetLeadsComponentPromoteRecord(
    body?: LeadsGetLeadsComponentPromoteRecordBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<LeadsGetLeadsComponentPromoteRecordResp>;
  /** 按时间获取留资信息详情 @see https://developers.weixin.qq.com/doc/channels/api/channels/leads/api_getleadsinfobycomponentid.html */
  leadsGetLeadsInfoByComponentId(
    body?: LeadsGetLeadsInfoByComponentIdBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<LeadsGetLeadsInfoByComponentIdResp>;
  /** 按直播场次获取留资信息详情 @see https://developers.weixin.qq.com/doc/channels/api/channels/leads/api_getleadsinfobyrequestid.html */
  leadsGetLeadsInfoByRequestId(
    body?: LeadsGetLeadsInfoByRequestIdBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<LeadsGetLeadsInfoByRequestIdResp>;
  /** 获取留资request_id列表详情 @see https://developers.weixin.qq.com/doc/channels/api/channels/leads/api_getleadsrequestid.html */
  leadsGetLeadsRequestId(
    body?: LeadsGetLeadsRequestIdBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<LeadsGetLeadsRequestIdResp>;
  /** 获取视频号账号信息 @see https://developers.weixin.qq.com/doc/channels/api/channels/leadslive/api_getfinderattrbyappid.html */
  finderliveGetFinderAttrByAppid(
    body?: FinderliveGetFinderAttrByAppidBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FinderliveGetFinderAttrByAppidResp>;
  /** 获取留资直播数据详情 @see https://developers.weixin.qq.com/doc/channels/api/channels/leadslive/api_getfinderlivedatalist.html */
  finderliveGetFinderLiveDataList(
    body?: FinderliveGetFinderLiveDataListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FinderliveGetFinderLiveDataListResp>;
  /** 获取账号收集的留资数量 @see https://developers.weixin.qq.com/doc/channels/api/channels/leadslive/api_getfinderliveleadsdata.html */
  finderliveGetFinderLiveLeadsData(
    body?: FinderliveGetFinderLiveLeadsDataBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FinderliveGetFinderLiveLeadsDataResp>;
  /** 视频号获取当前的直播预约记录 @see https://developers.weixin.qq.com/doc/channels/api/channels/live/api_getfinderlivenoticerecordlist.html */
  ecFinderliveGetfinderlivenoticerecordlist(
    body?: EcFinderliveGetfinderlivenoticerecordlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcFinderliveGetfinderlivenoticerecordlistResp>;
  /** 视频号获取当前的直播记录 @see https://developers.weixin.qq.com/doc/channels/api/channels/live/api_getfinderliverecordlist.html */
  ecFinderliveGetfinderliverecordlist(
    body?: EcFinderliveGetfinderliverecordlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcFinderliveGetfinderliverecordlistResp>;
  /** 获取直播大屏数据 @see https://developers.weixin.qq.com/doc/channels/api/channels/livedashboard/api_getlivedata.html */
  livedashboardGetlivedata(
    body?: LivedashboardGetlivedataBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<LivedashboardGetlivedataResp>;
  /** 获取直播大屏直播列表 @see https://developers.weixin.qq.com/doc/channels/api/channels/livedashboard/api_getlivelist.html */
  livedashboardGetlivelist(
    body?: LivedashboardGetlivelistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<LivedashboardGetlivelistResp>;
  /** 上架商品到橱窗 @see https://developers.weixin.qq.com/doc/channels/api/channels/windowproduct/api_addwindowproduct.html */
  ecWindowProductAdd(
    body?: EcWindowProductAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcWindowProductAddResp>;
  /** 获取橱窗商品详情 @see https://developers.weixin.qq.com/doc/channels/api/channels/windowproduct/api_getwindowproduct.html */
  ecWindowProductGet(
    body?: EcWindowProductGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcWindowProductGetResp>;
  /** 获取已添加到橱窗的商品列表 @see https://developers.weixin.qq.com/doc/channels/api/channels/windowproduct/api_getwindowproductlist.html */
  ecWindowProductListGet(
    body?: EcWindowProductListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcWindowProductListGetResp>;
  /** 下架橱窗商品 @see https://developers.weixin.qq.com/doc/channels/api/channels/windowproduct/api_offwindowproduct.html */
  ecWindowProductOff(
    body?: EcWindowProductOffBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcWindowProductOffResp>;
  /** 获取售后单 @see https://developers.weixin.qq.com/doc/channels/api/locallife/automatically/api_getaftersaleorder.html */
  ecAftersaleGetaftersaleorder(
    body?: EcAftersaleGetaftersaleorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleGetaftersaleorderResp>;
  /** 撤销用户已核销团购优惠 @see https://developers.weixin.qq.com/doc/channels/api/locallife/cancel/api_withdrawconsume.html */
  ecVoucherRevoke(
    body?: EcVoucherRevokeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcVoucherRevokeResp>;
  /** 获取资金流水列表 @see https://developers.weixin.qq.com/doc/channels/api/locallife/funds/api_getfundsflowlist.html */
  ecFundsGetfundsflowlist(
    body?: EcFundsGetfundsflowlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcFundsGetfundsflowlistResp>;
  /** 查询券账单 @see https://developers.weixin.qq.com/doc/channels/api/locallife/funds/api_getvoucherbilllist.html */
  ecVoucherGetBillList(
    body?: EcVoucherGetBillListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcVoucherGetBillListResp>;
  /** 获取订单详情 @see https://developers.weixin.qq.com/doc/channels/api/locallife/purchasing/api_getorder.html */
  ecOrderGet(
    body?: EcOrderGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderGetResp>;
  /** 添加团购优惠 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_addlocalproduct.html */
  ecProductLocallifeAdd(
    body?: EcProductLocallifeAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductLocallifeAddResp>;
  /** 撤回商品审核 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_cancelauditproduct.html */
  ecProductAuditCancel(
    body?: EcProductAuditCancelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductAuditCancelResp>;
  /** 删除商品 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_deleteproduct.html */
  ecProductDelete(
    body?: EcProductDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductDeleteResp>;
  /** 下架商品 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_delistingproduct.html */
  ecProductDelisting(
    body?: EcProductDelistingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductDelistingResp>;
  /** 查询团购优惠详情 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_getlocalproduct.html */
  ecProductLocallifeGet(
    body?: EcProductLocallifeGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductLocallifeGetResp>;
  /** 查询团购优惠列表 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_getlocalproductlist.html */
  ecProductLocallifeListGet(
    body?: EcProductLocallifeListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductLocallifeListGetResp>;
  /** 上架商品 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_listingproduct.html */
  ecProductListing(
    body?: EcProductListingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductListingResp>;
  /** 免审更新团购优惠 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_updatelocalauditfree.html */
  ecProductLocallifeAuditfree(
    body?: EcProductLocallifeAuditfreeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductLocallifeAuditfreeResp>;
  /** 更新团购优惠 @see https://developers.weixin.qq.com/doc/channels/api/locallife/shop/api_updatelocalproduct.html */
  ecProductLocallifeUpdate(
    body?: EcProductLocallifeUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductLocallifeUpdateResp>;
  /** 核销用户的团购优惠 @see https://developers.weixin.qq.com/doc/channels/api/locallife/useing/api_consumevoucher.html */
  ecVoucherConsume(
    body?: EcVoucherConsumeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcVoucherConsumeResp>;
  /** 查询用户的团购优惠列表 @see https://developers.weixin.qq.com/doc/channels/api/locallife/useing/api_findvoucher.html */
  ecVoucherGetList(
    body?: EcVoucherGetListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcVoucherGetListResp>;
  /** 查询用户的团购优惠详情 @see https://developers.weixin.qq.com/doc/channels/api/locallife/useing/api_getvoucher.html */
  ecVoucherGet(
    body?: EcVoucherGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcVoucherGetResp>;
  /** 快速更新库存 @see https://developers.weixin.qq.com/doc/channels/api/locallife/voucher/api_updatestock.html */
  ecProductStockUpdate(
    body?: EcProductStockUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductStockUpdateResp>;
  /** 上传团购优惠code @see https://developers.weixin.qq.com/doc/channels/api/locallife/voucher/api_uploadvouchercode.html */
  ecVoucherCodesUpload(
    body?: EcVoucherCodesUploadBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcVoucherCodesUploadResp>;
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
