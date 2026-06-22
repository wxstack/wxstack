// 本文件由 scripts/gen-endpoints.mjs 自动生成，请勿手改。
// 数据来源：官方文档站点 developers.weixin.qq.com，覆盖该平台已抓取的全部服务端接口与参数。
// 每个端点是「自动鉴权薄封装」；未在高层方法中显式封装的接口均可在此调用。

import type { CallOptions, QueryValue, RequestBody } from '@wxstack/core';

/** 获取机构账户余额 —— 请求体（文档未列字段，放行任意键）。 */
export type EcLeagueHeadsupplierFundsBalanceGetBody = Record<string, unknown>;
/** 获取机构账户余额 —— 返回体。 */
export interface EcLeagueHeadsupplierFundsBalanceGetResp {
  /** 错误码错误信息 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 可提现余额（分） */
  available_amount?: number;
  /** 待结算余额（分） */
  pending_amount?: number;
}

/** 获取资金流水详情 —— 请求体。 */
export interface EcLeagueHeadsupplierFundsFlowdetailGetBody {
  /** 流水id */
  flow_id: string;
}
/** 获取资金流水详情 —— 返回体。 */
export interface EcLeagueHeadsupplierFundsFlowdetailGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 流水信息 */
  funds_flow?: Record<string, unknown>;
}

/** 获取资金流水列表 —— 请求体。 */
export interface EcLeagueHeadsupplierFundsFlowlistGetBody {
  /** 页码，从1开始 */
  page?: number;
  /** 页数，不填默认为10 */
  page_size?: number;
  /** 分页参数，翻页时写入上一页返回的next_key(page为上一页加一，并且page_size与上一页相同的时候才生效)，page * page_size >= 5000时必填 */
  next_key?: string;
  /** 流水产生的开始时间，uinx时间戳(即格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒起至现在的总秒数) */
  start_time?: number;
  /** 流水产生的结束时间，unix时间戳(即格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒起至现在的总秒数) */
  end_time?: number;
  /** 资金类型, 1：提现，2：分账，3：联盟技术服务费，4：分账回退 */
  funds_type?: number;
}
/** 获取资金流水列表 —— 返回体。 */
export interface EcLeagueHeadsupplierFundsFlowlistGetResp {
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

/** 获取所有类目 —— 请求体（文档未列字段，放行任意键）。 */
export type EcCategoryLeagueAllBody = Record<string, unknown>;
/** 获取所有类目 —— 返回体。 */
export interface EcCategoryLeagueAllResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** cats */
  cats?: unknown[];
  /** cats_v2 */
  cats_v2?: unknown[];
}

/** 获取合作小店详情 —— 请求体。 */
export interface EcLeagueHeadsupplierShopGetBody {
  /** 小店的appid */
  appid: string;
}
/** 获取合作小店详情 —— 返回体。 */
export interface EcLeagueHeadsupplierShopGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 小店详情 */
  shop_detail?: Record<string, unknown>;
}

/** 获取合作小店列表 —— 请求体。 */
export interface EcLeagueHeadsupplierShopListGetBody {
  /** 获取小店数量（不超过30） */
  page_size: number;
  /** 由上次请求返回，顺序翻页时需要传入, 会从上次返回的结果往后翻一页 */
  next_key?: string;
}
/** 获取合作小店列表 —— 返回体。 */
export interface EcLeagueHeadsupplierShopListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 小店详情 */
  shop_list?: unknown[];
  /** 本次翻页的上下文，用于顺序翻页请求 */
  next_key?: string;
  /** 是否还有剩余小店 */
  has_more?: boolean;
}

/** 获取店铺自定义的推广锁客时效 —— 请求体。 */
export interface EcLeagueHeadsupplierLockcustomertimeGetlocktimeBody {
  /** 指定查询的店铺 */
  shop_appid: string;
}
/** 获取店铺自定义的推广锁客时效 —— 返回体。 */
export interface EcLeagueHeadsupplierLockcustomertimeGetlocktimeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 店铺设置的商品点击后锁客天数 */
  shopsetting_product_click_lock_day?: number;
  /** 店铺设置的商品下单后延长锁客天数 */
  shopsetting_product_order_lock_day?: number;
  /** 店铺设置的内容点击后锁客天数 */
  shopsetting_content_click_lock_day?: number;
  /** 店铺设置的内容推广下单后延长锁客天数 */
  shopsetting_content_order_lock_day?: number;
  /** 默认的商品点击后锁客天数 */
  default_product_click_lock_day?: number;
  /** 默认的商品下单后延长锁客天数 */
  default_product_order_lock_day?: number;
  /** 默认的内容点击后锁客天数 */
  default_content_click_lock_day?: number;
  /** 默认的内容推广下单后延长锁客天数 */
  default_content_order_lock_day?: number;
}

/** 更新机构合作关系 —— 请求体。 */
export interface EcLeagueHeadsupplierHeadsupplierrelationUpdateBody {
  /** 对象类型 1: 机构 2: 店铺 */
  object_type: number;
  /** 对象类型为店铺时，必填 */
  to_shop_appid?: string;
  /** 对象类型为机构时，必填 */
  to_head_supplier_appid?: string;
  /** 对象类型为机构时，必填 1: 邀请 2: 通过 3: 不通过 4: 取消邀请 5: 取消合作 */
  hs_update_type?: number;
  /** 对象类型为店铺时，必填 1: 结束合作 2: 拒绝 3: 通过 */
  shop_update_type?: number;
}
/** 更新机构合作关系 —— 返回体。 */
export interface EcLeagueHeadsupplierHeadsupplierrelationUpdateResp {
  /** - */
  errcode?: number;
  /** - */
  errmsg?: string;
}

/** 机构给帮卖机构供货 —— 请求体。 */
export interface EcLeagueHeadsupplierSecondheadsupplieritemAddBody {
  /** cooperative_item_id和head_supplier_item_link必填其一，cooperative_item_id填的情况下就忽略head_supplier_item_link 获 */
  cooperative_item_id: number;
  /** cooperative_item_id和head_supplier_item_link必填其一，cooperative_item_id填的情况下就忽略head_supplier_item_link 获 */
  head_supplier_item_link: string;
  /** 给帮卖机构设置的计划类型，1：定向计划 2：公开计划 （请注意，设置定向计划之前要先设置公开计划！！） */
  plan_type: number;
  /** 商品帮卖服务费率，百万分之N，例如10000表示1%，数值需要能被1000整除 */
  service_ratio: number;
  /** 定向给该机构；如果plan_type是定向计划，则必填参数； 如果plan_type是公开计划，则无需填 */
  to_head_supplier_appid?: string;
  /** 开始时间戳（秒），如果plan_type是定向计划，则可填 */
  start_time?: number;
  /** 结束时间戳（秒），如果plan_type是定向计划，则可填 */
  end_time?: number;
}
/** 机构给帮卖机构供货 —— 返回体。 */
export interface EcLeagueHeadsupplierSecondheadsupplieritemAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 机构添加合作商品 —— 请求体。 */
export interface EcLeagueHeadsupplierCooperativeitemAddBody {
  /** 机构推广商品链接 */
  head_supplier_item_link: string;
  /** 是否在机构主页隐藏 */
  hidden_flag?: number;
}
/** 机构添加合作商品 —— 返回体。 */
export interface EcLeagueHeadsupplierCooperativeitemAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 机构合作计划id */
  cooperative_item_id?: number;
}

/** 配置达人佣金率 —— 请求体。 */
export interface EcLeagueHeadsupplierSubitemAddBody {
  /** 机构合作计划id */
  cooperative_item_id: number;
  /** 达人精确佣金率[0, 900000]，配置含小数点佣金率时使用，10000 = 1%，【二选一】 */
  ratio_ext: number;
  /** 达人佣金率[0, 90]%，配置整数佣金率时使用，【二选一】 */
  ratio: number;
}
/** 配置达人佣金率 —— 返回体。 */
export interface EcLeagueHeadsupplierSubitemAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 机构配置达人佣金计划id */
  sub_item_id?: number;
}

/** 机构获取已添加的推广计划 —— 请求体。 */
export interface EcLeagueHeadsupplierSecondheadsupplieritemGetlistBody {
  /** 要拉取的计划类型。1：定向计划 2：公开计划 */
  plan_type: number;
  /** 如果是定向计划，需要填定向的机构appid */
  to_head_supplier_appid?: string;
  /** 商品标题筛选，不填则不筛选（注：定向计划还不支持标题筛选） */
  title?: string;
  /** 商品id筛选，不填则不筛选 */
  spu_id?: number;
  /** 计划状态筛选，不填则不筛选。 1: 推广中 2：已结束 3： 暂停推广 */
  status?: number;
  /** 翻页参数，一页数量 */
  limit: number;
  /** 翻页参数，页起始位置 */
  offset: number;
}
/** 机构获取已添加的推广计划 —— 返回体。 */
export interface EcLeagueHeadsupplierSecondheadsupplieritemGetlistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 计划简要信息的列表 */
  item_list?: unknown[];
  /** 总数 */
  total_num?: number;
}

/** 获取合作商品列表 —— 请求体。 */
export interface EcLeagueHeadsupplierCooperativeitemListGetBody {
  /** 佣金分配类型 0：商家指定达人佣金, 1：机构指定达人佣金 */
  commission_type: number;
  /** 合作商品上架时间范围 */
  listing_time_range?: Record<string, unknown>;
  /** 一页获取多少个商品，最大 20 */
  page_size: number;
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key: string;
}
/** 获取合作商品列表 —— 返回体。 */
export interface EcLeagueHeadsupplierCooperativeitemListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品详情 */
  list?: unknown[];
  /** 分页参数 */
  next_key?: string;
}

/** 获取商品推广参数详情 —— 请求体。 */
export interface EcLeagueHeadsupplierItemPromotiondetailGetBody {
  /** 机构推广商品链接 */
  head_supplier_item_link: string;
}
/** 获取商品推广参数详情 —— 返回体。 */
export interface EcLeagueHeadsupplierItemPromotiondetailGetResp {
  /** - */
  errcode?: number;
  /** - */
  errmsg?: string;
  /** 商品推广详情 */
  item?: Record<string, unknown>;
}

/** 获取机构配置达人佣金计划列表 —— 请求体。 */
export interface EcLeagueHeadsupplierSubitemListGetBody {
  /** 机构合作计划id */
  cooperative_item_id: number;
  /** 一页获取多少个计划id，最大 20 */
  page_size: number;
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key: string;
  /** 是否需要推广二维码（如不确定需不需要则不填，因为会增加耗时） */
  need_qr_code: boolean;
}
/** 获取机构配置达人佣金计划列表 —— 返回体。 */
export interface EcLeagueHeadsupplierSubitemListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** list */
  list?: unknown[];
}

/** 获取机构选品广场商品列表 —— 请求体。 */
export interface EcLeagueHeadsupplierSelectionproductsListGetBody {
  /** 商品的计划类型 1：定向计划 2：公开计划 */
  plan_type: number;
  /** 商品查询条件 */
  spu_item_condition?: Record<string, unknown>;
  /** 商品类目查询条件，**定向计划不支持**。 */
  category?: Record<string, unknown>;
  /** 搜索关键词 */
  keyword?: string;
  /** 1-商家供货；2-机构供货，默认值1 */
  spu_source?: number;
  /** 佣金类型查询条件 1-商家指定达人佣金；2-机构指定达人佣金 */
  commission_type?: number;
  /** 一页获取多少个商品，最大 20 */
  page_size?: number;
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key?: string;
}
/** 获取机构选品广场商品列表 —— 返回体。 */
export interface EcLeagueHeadsupplierSelectionproductsListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品列表 */
  product_list?: unknown[];
  /** 分页参数 */
  next_key?: string;
}

/** 机构更新或删除已添加的推广计划 —— 请求体。 */
export interface EcLeagueHeadsupplierSecondheadsupplieritemUpdateBody {
  /** 要拉取的计划类型。1：定向计划 2：公开计划 */
  plan_type: number;
  /** 1：更新佣金率 2：结束推广 */
  update_type: number;
  /** cooperative_item_id和head_supplier_item_link必填其一，cooperative_item_id填的情况下就忽略head_supplier_item_link 获 */
  cooperative_item_id: number;
  /** cooperative_item_id和head_supplier_item_link必填其一，cooperative_item_id填的情况下就忽略head_supplier_item_link 获 */
  head_supplier_item_link: string;
  /** 更新的情况必填，单位是百万分之N，如10000是1% */
  service_ratio?: number;
  /** 定向计划的情况必填，定向到的机构appid */
  to_head_supplier_appid?: string;
}
/** 机构更新或删除已添加的推广计划 —— 返回体。 */
export interface EcLeagueHeadsupplierSecondheadsupplieritemUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 添加机构商品到橱窗 —— 请求体。 */
export interface EcLeagueHeadsupplierWindowAddBody {
  /** 视频号finder_id，未填openfinderid时必填，后续废弃 */
  finder_id?: string;
  /** 原始商品ID */
  product_id: number;
  /** 视频号openfinderid，操作达人视频号橱窗时必填，和opentalentid二选一 */
  openfinderid: string;
  /** 是否需要在个人橱窗页隐藏 (默认为false) */
  is_hide_for_window?: boolean;
  /** 联盟商品链接，机构类商品必填【推荐使用】 来源： 1、获取合作商品列表 中的“商家指定达人佣金”类型【“机构指定达人佣金”类型的需要创建子计划，也就是下面的2】，参数为对应返回值的head_suppl */
  product_link: string;
  /** 带货达人opentalentid，操作达人带货助手橱窗时必填，和openfinderid二选一 */
  opentalentid: string;
}
/** 添加机构商品到橱窗 —— 返回体。 */
export interface EcLeagueHeadsupplierWindowAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询橱窗上机构商品列表 —— 请求体。 */
export interface EcLeagueHeadsupplierWindowGetallBody {
  /** 视频号finder_id,未填openfinderid时必填，后续废弃 */
  finder_id?: string;
  /** 起始位置（从0开始） */
  offset: number;
  /** 每页数量(默认100, 最大500) */
  page_size?: number;
  /** 是否需要返回橱窗上机构商品总数，默认为false */
  need_total_num?: boolean;
  /** 带货达人opentalentid，操作达人带货助手橱窗时必填，和openfinderid二选一 */
  openfinderid: string;
  /** 是否需要查询达人所有橱窗商品，默认为false；【注意：如果传了 true，就会把橱窗所有商品都返回，如果只想要自己机构的商品，请不要设置】 */
  is_get_all?: boolean;
  /** 视频号openfinderid，操作达人视频号橱窗时必填，和opentalentid二选一 */
  opentalentid: string;
}
/** 查询橱窗上机构商品列表 —— 返回体。 */
export interface EcLeagueHeadsupplierWindowGetallResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品概要列表 */
  list?: unknown[];
  /** 下一页的位置 */
  next_offset?: number;
  /** 后面是否还有商品 */
  has_more?: boolean;
  /** 商品总数 */
  total_num?: number;
}

/** 获取达人橱窗授权链接 —— 请求体。 */
export interface EcLeagueHeadsupplierWindowauthGetBody {
  /** 视频号finder_id【三选一】 */
  finder_id: string;
  /** 小程序用户openid，需在机构端绑定小程序【三选一】 */
  openid: string;
  /** 带货达人appid，【三选一】 */
  talent_appid: string;
}
/** 获取达人橱窗授权链接 —— 返回体。 */
export interface EcLeagueHeadsupplierWindowauthGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 授权链接信息 */
  auth_info?: Record<string, unknown>;
  /** 视频号openfinderid */
  openfinderid?: string;
  /** 达人绑定的带货助手平台的opentalentid */
  opentalentid?: string;
}

/** 获取达人橱窗授权状态 —— 请求体。 */
export interface EcLeagueHeadsupplierWindowauthStatusGetBody {
  /** 视频号finder_id，登录视频号助手可以获取，未填openfinderid时必填，后续废弃。 */
  finder_id?: string;
  /** 视频号openfinderid，【四选一】 */
  openfinderid: string;
  /** 带货达人appid，【四选一】 */
  talent_appid: string;
  /** 带货达人opentalentid，【四选一】 */
  opentalentid: string;
}
/** 获取达人橱窗授权状态 —— 返回体。 */
export interface EcLeagueHeadsupplierWindowauthStatusGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 是否授权，0: 未授权, 1: 已授权 */
  window_auth_status?: number;
  /** 对应的 openfinderid */
  openfinderid?: string;
  /** 对应的 opentalentid */
  opentalentid?: string;
  /** 达人昵称 */
  nickname?: string;
  /** 达人头像 */
  head_img_url?: string;
}

/** 查询橱窗上机构商品详情 —— 请求体。 */
export interface EcLeagueHeadsupplierWindowGetdetailBody {
  /** 机构appid */
  appid?: string;
  /** 视频号finder_id，未填openfinderid时必填，后续废弃 */
  finder_id?: string;
  /** 商品id，和product_window_id二选一，可从查询橱窗上机构商品列表接口中获取 */
  product_id?: number;
  /** 视频号openfinderid，操作达人视频号橱窗时必填，和opentalentid二选一 */
  openfinderid: string;
  /** 橱窗商品ID，和product_id二选一【推荐使用】，可从查询橱窗上机构商品列表接口中获取 请求参数示例 */
  product_window_id?: number;
  /** 带货达人opentalentid，操作达人带货助手橱窗时必填，和openfinderid二选一 */
  opentalentid: string;
}
/** 查询橱窗上机构商品详情 —— 返回体。 */
export interface EcLeagueHeadsupplierWindowGetdetailResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品所有信息 */
  product_detail?: Record<string, unknown>;
}

/** 从橱窗移除机构商品 —— 请求体。 */
export interface EcLeagueHeadsupplierWindowRemoveBody {
  /** 视频号finder_id，未填openfinderid时必填，后续废弃 */
  finder_id?: string;
  /** 商品id，和product_window_id二选一，可从查询橱窗上机构商品列表接口中获取 */
  product_id?: number;
  /** 视频号openfinderid，操作达人视频号橱窗时必填，和opentalentid二选一 */
  openfinderid: string;
  /** 橱窗商品ID，和product_id二选一【推荐使用】，可从查询橱窗上机构商品列表接口中获取 */
  product_window_id?: number;
  /** 带货达人opentalentid，操作达人带货助手橱窗时必填，和openfinderid二选一 */
  opentalentid: string;
}
/** 从橱窗移除机构商品 —— 返回体。 */
export interface EcLeagueHeadsupplierWindowRemoveResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取佣金单详情 —— 请求体。 */
export interface EcLeagueHeadsupplierOrderGetBody {
  /** 订单号，可从获取佣金单列表接口获得 */
  order_id: number;
  /** 商品skuid，可从获取佣金单列表接口获得 */
  sku_id: number;
}
/** 获取佣金单详情 —— 返回体。 */
export interface EcLeagueHeadsupplierOrderGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 佣金单结构 */
  commssion_order?: Record<string, unknown>;
}

/** 获取佣金单列表 —— 请求体。 */
export interface EcLeagueHeadsupplierOrderListGetBody {
  /** 佣金单所属小店appid */
  appid?: string;
  /** 视频号finder_id */
  finder_id?: string;
  /** 单页佣金单数（不超过30） */
  page_size: number;
  /** 由上次请求返回，顺序翻页时需要传入, 会从上次返回的结果往后翻一页 */
  next_key?: string;
  /** 佣金单创建时间范围，填了佣金单更新时间范围则不填该时间，创建时间和更新时间必填一个 */
  create_time_range?: Record<string, unknown>;
  /** 佣金单更新时间范围，填了佣金单创建时间范围则不填该时间，创建时间和更新时间必填一个 */
  update_time_range?: Record<string, unknown>;
  /** 订单ID，填此参数后其他过滤参数无 */
  order_id?: string;
  /** 视频号openfinderid */
  openfinderid?: string;
  /** 用于查询推客，或者达人平台产生的订单数据 */
  sharer_appid?: string;
}
/** 获取佣金单列表 —— 返回体。 */
export interface EcLeagueHeadsupplierOrderListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** list */
  list?: unknown[];
  /** 本次翻页的上下文，用于顺序翻页请求 */
  next_key?: string;
  /** 是否还有剩余商品 */
  has_more?: boolean;
}

/** 获取机构绑定的推客信息 —— 请求体。 */
export interface EcPromoterGetBindSharerListBody {
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key: string;
  /** 一页获取多少个推客，最大 20 */
  page_size: number;
  /** 查询某个推客，传入推客的appid */
  sharer_appid?: string;
  /** 查询某个推客，传入推客的小程序openid。 必须是机构绑定小程序的用户openid，而不能是其他小程序的用户openid。 */
  sharer_openid?: string;
}
/** 获取机构绑定的推客信息 —— 返回体。 */
export interface EcPromoterGetBindSharerListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 推客的绑定参数列表 */
  sharer_info_list?: unknown[];
  /** 分页参数 */
  next_key?: string;
}

/** 获取合作的小店列表 —— 请求体。 */
export interface EcPromoterGetBindShopListBody {
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key: string;
  /** 一页获取多少个合作小店，最大 10 */
  page_size: number;
}
/** 获取合作的小店列表 —— 返回体。 */
export interface EcPromoterGetBindShopListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 下一页的 key */
  next_key?: string;
  /** 合作的小店列表 */
  shop_list?: unknown[];
  /** 否还有下一页 */
  has_more?: boolean;
}

/** 获取合作小店的关联账号列表 —— 请求体。 */
export interface EcPromoterGetBindShopPromoterListBody {
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key: string;
  /** 一页获取多少个关联账号，最大 10 */
  page_size: number;
  /** 小店appid */
  shop_appid: string;
}
/** 获取合作小店的关联账号列表 —— 返回体。 */
export interface EcPromoterGetBindShopPromoterListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 下一页的 key */
  next_key?: string;
  /** 合作小店的关联账号列表 */
  promoter_list?: unknown[];
  /** 是否还有下一页 */
  has_more?: boolean;
}

/** 获取合作的带货者列表 —— 请求体。 */
export interface EcPromoterGetBindTalentListBody {
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key: string;
  /** 一页获取多少个合作带货者，最大 10 */
  page_size: number;
  /** 查询某个合作的带货者 appid */
  talent_appid?: string;
}
/** 获取合作的带货者列表 —— 返回体。 */
export interface EcPromoterGetBindTalentListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 下一页的 key */
  next_key?: string;
  /** 合作的带货者列表 */
  talent_list?: unknown[];
  /** 是否还有下一页 */
  has_more?: boolean;
}

/** 获取推客的注册状态以及和机构的绑定状态 —— 请求体。 */
export interface EcPromoterGetPromoterRegisterAndBindStatusBody {
  /** 推客在小程序中的 openid， 必须是机构绑定小程序的用户openid，而不能是其他小程序的用户openid。 和 sharer_appid 二选一 */
  sharer_openid?: string;
  /** 推客在微信电商平台注册的身份标识，和 sharer_openid 二选一 */
  sharer_appid?: string;
  /** 是否走简易版本注册【当走简易版本注册时，可以不要求推客开通商户号，但分佣只能走机构自己分佣；如果不走简易注册流程时，要求推客开通商户号作为收款账户，可以平台分佣】 */
  is_simple_register: boolean;
}
/** 获取推客的注册状态以及和机构的绑定状态 —— 返回体。 */
export interface EcPromoterGetPromoterRegisterAndBindStatusResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 和机构的绑定状态，0：未绑定 1：已绑定 */
  bind_status?: number;
  /** 当前推客的注册状态 */
  register_status?: number;
  /** register_status等于 0 或者 1时，调用注册流程时，openBusinessView需要的businessType */
  register_business_type?: string;
  /** 注册时需要的queryString参数 */
  register_query_string?: string;
  /** bind_status等于0时，调用绑定流程时，openBusinessView需要的businessType */
  bind_business_type?: string;
  /** 绑定时需要的queryString参数 */
  bind_query_string?: string;
  /** 如果推客和机构已经绑定，就返回对应推客的 appid */
  sharer_appid?: string;
}

/** 机构解绑推客 —— 请求体。 */
export interface EcPromoterHeadsupplierUnbindPromoterBody {
  /** 推客的appid */
  sharer_appid: string;
}
/** 机构解绑推客 —— 返回体。 */
export interface EcPromoterHeadsupplierUnbindPromoterResp {
  /** 错误码 */
  errcode?: number;
  /** 错误提示 */
  errmsg?: string;
}

/** 设置推客的的分佣类型和比例信息 —— 请求体。 */
export interface EcPromoterSetSharerCommissionInfoBody {
  /** 推客在微信电商平台注册的身份标识 */
  sharer_appid: string;
  /** 平台分佣时的分佣比例，范围为【100000 - 1000000】，代表【10%-100%】 */
  commission_ratio: number;
  /** 分佣类型【 0：平台分佣， 1:机构自己分佣】 */
  commission_type: number;
}
/** 设置推客的的分佣类型和比例信息 —— 返回体。 */
export interface EcPromoterSetSharerCommissionInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取小店关联账号的文章列表 —— 请求体。 */
export interface EcPromoterGetShopMpArticleListBody {
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key: string;
  /** 一页获取多少个数据，最大 10 */
  page_size: number;
  /** 小店的 appid */
  shop_appid: string;
  /** 关联账号的id，可从获取合作小店的关联账号列表中获取 */
  promoter_id: string;
  /** 关联账号类型【需要是公众号或服务号】 */
  promoter_type: number;
  /** 推客appid【为了生成某个推客推广的 link】 */
  sharer_appid: string;
}
/** 获取小店关联账号的文章列表 —— 返回体。 */
export interface EcPromoterGetShopMpArticleListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 下一页的请求参数 */
  next_key?: string;
  /** 是否还有下一页 */
  has_more?: boolean;
  /** 文章列表 */
  article_list?: unknown[];
}

/** 获取某个带货者可推广文章列表 —— 请求体。 */
export interface EcPromoterGetTalentBizArticleListBody {
  /** 带货者 appid */
  talent_appid: string;
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key: string;
  /** 一页获取多少个数据，最大 10 */
  page_size: number;
  /** 推客appid【为了生成某个推客推广的 link】 */
  sharer_appid: string;
  /** 公众号 appid 当合作方式是“全部内容合作”时，需要指定公众号 appid。如果是之前的“部分内容”的合作方式，则可以不填。 获得方式：获取合作的带货者列表 */
  biz_appid?: string;
}
/** 获取某个带货者可推广文章列表 —— 返回体。 */
export interface EcPromoterGetTalentBizArticleListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 下一页的请求参数 */
  next_key?: string;
  /** 是否还有下一页 */
  has_more?: boolean;
  /** 文章列表 */
  article_list?: unknown[];
}

/** 推客机构获取内容推广的自营商品订单详情 —— 请求体。 */
export interface EcLeagueHeadsupplierClueGetBody {
  /** 订单号，可从推客机构获取内容推广的自营商品订单列表获得 */
  order_id: string;
  /** 商品skuid，可从推客机构获取内容推广的自营商品订单列表获得 */
  sku_id: string;
}
/** 推客机构获取内容推广的自营商品订单详情 —— 返回体。 */
export interface EcLeagueHeadsupplierClueGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 线索订单结构 */
  commssion_clue?: Record<string, unknown>;
}

/** 推客机构获取内容推广的自营商品订单列表 —— 请求体。 */
export interface EcLeagueHeadsupplierClueListGetBody {
  /** 线索订单所属小店appid */
  appid?: string;
  /** 用于查询推客，或者达人平台产生的订单数据 */
  sharer_appid?: string;
  /** 佣金单创建时间范围 */
  create_time_range: Record<string, unknown>;
  /** 单页数量（不超过100） */
  page_size: number;
  /** 由上次请求返回，顺序翻页时需要传入, 会从上次返回的结果往后翻一页 */
  next_key?: string;
}
/** 推客机构获取内容推广的自营商品订单列表 —— 返回体。 */
export interface EcLeagueHeadsupplierClueListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** list */
  list?: unknown[];
  /** 本次翻页的上下文，用于顺序翻页请求 */
  next_key?: string;
  /** 是否还有剩余商品 */
  has_more?: boolean;
}

/** 获取分发给其他机构的优惠券 —— 请求体。 */
export interface EcPromoterGetCouponToHeadsupplierBody {
  /** 券的接收机构 */
  to_head_supplier_appid: string;
  /** 一页数量 */
  limit: number;
  /** 翻页参数，第一页放空 */
  page_context: string;
}
/** 获取分发给其他机构的优惠券 —— 返回体。 */
export interface EcPromoterGetCouponToHeadsupplierResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 券信息的列表 */
  list?: unknown[];
  /** 下一页的翻页参数 */
  page_context?: string;
  /** 总数 */
  total_count?: number;
}

/** 获取定向券ID列表 —— 请求体。 */
export interface EcPromoterGetCooperativeCouponListBody {
  /** 店铺id，填了只返回属于该店铺的券 */
  shop_appid?: string;
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key: string;
  /** 券数量，不能超过 200 */
  page_size: number;
  /** 是否查询这个机构提供的券。见分发优惠券给其他机构 */
  is_from_head_supplier?: boolean;
  /** 查询特定机构提供的券，仅在is_from_head_supplier为true的情况下有效 */
  from_head_supplier_appid?: string;
}
/** 获取定向券ID列表 —— 返回体。 */
export interface EcPromoterGetCooperativeCouponListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 分页参数，第一页为空，后面请求返回上一次请求返回的 next_key */
  next_key?: string;
  /** 券信息，推客的绑定参数列表 */
  coupons?: unknown[];
  /** 是否还有更多，如果返回为true，表示 */
  has_more?: boolean;
}

/** 获取券ID对应的详情内容 —— 请求体。 */
export interface EcPromoterGetCouponDetailBody {
  /** 券id */
  coupon_id: string;
  /** 来源的机构，该机构通过“分发优惠券给其他机构”接口给予优惠券 */
  from_head_supplier_appid?: string;
}
/** 获取券ID对应的详情内容 —— 返回体。 */
export interface EcPromoterGetCouponDetailResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 券信息，推客的绑定参数列表 */
  coupon?: Record<string, unknown>;
  /** 分页参数，第一页为空，后面请求返回上一次请求返回的 next_key */
  next_key?: string;
  /** 是否还有更多 */
  has_more?: boolean;
}

/** 获取某个券ID对应的小程序内嵌微信小店优惠券推广参数 —— 请求体。 */
export interface EcPromoterGetCouponPromoterShareLinkBody {
  /** 券id */
  coupon_id: string;
  /** 推客的 appid，不传时生成只带机构参数的推广参数 */
  sharer_appid?: string;
  /** 来源的机构，该来源机构通过“分发优惠券给其他机构”接口给予优惠券 */
  from_head_supplier_appid?: string;
}
/** 获取某个券ID对应的小程序内嵌微信小店优惠券推广参数 —— 返回体。 */
export interface EcPromoterGetCouponPromoterShareLinkResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 小程序内嵌微信小店优惠券的推广参数 */
  promoter_share_link?: string;
}

/** 获取某个券ID对应的推广二维码 —— 请求体。 */
export interface EcPromoterGetCouponQrCodeBody {
  /** 券id */
  coupon_id: string;
  /** 推客的 appid，不传时生成只带机构参数的券短链 */
  sharer_appid?: string;
  /** 来源的机构，该来源机构通过“分发优惠券给其他机构”接口给予优惠券 */
  from_head_supplier_appid?: string;
}
/** 获取某个券ID对应的推广二维码 —— 返回体。 */
export interface EcPromoterGetCouponQrCodeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 二维码的链接内容 */
  qrcode_url?: string;
}

/** 获取某个券ID对应的推广短链 —— 请求体。 */
export interface EcPromoterGetCouponShortLinkBody {
  /** 券id */
  coupon_id: string;
  /** 推客的 appid，不传时生成只带机构参数的券短链 */
  sharer_appid?: string;
  /** 来源的机构，该来源机构通过“分发优惠券给其他机构”接口给予本机构优惠券 */
  from_head_supplier_appid?: string;
}
/** 获取某个券ID对应的推广短链 —— 返回体。 */
export interface EcPromoterGetCouponShortLinkResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 短链 */
  short_link?: string;
}

/** 获取公开券ID列表 —— 请求体。 */
export interface EcPromoterGetPublicCouponListBody {
  /** 店铺id，填了只返回属于该店铺的券 */
  shop_appid?: string;
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key: string;
  /** 券数量，不能超过 200 */
  page_size: number;
}
/** 获取公开券ID列表 —— 返回体。 */
export interface EcPromoterGetPublicCouponListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 分页参数，第一页为空，后面请求返回上一次请求返回的next_key */
  next_key?: string;
  /** 券信息，推客的绑定参数列表 */
  coupons?: unknown[];
  /** 是否还有更多 */
  has_more?: boolean;
}

/** 分发优惠券给其他机构 —— 请求体。 */
export interface EcPromoterSetCouponToHeadsupplierBody {
  /** 优惠券的接收机构appid */
  to_head_supplier_appid: string;
  /** 优惠券id，注意只能是商家给予的定向券，获取方式：获取定向券ID列表 */
  coupon_id: string;
}
/** 分发优惠券给其他机构 —— 返回体。 */
export interface EcPromoterSetCouponToHeadsupplierResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取推客对某个商品的推广短链 —— 请求体。 */
export interface EcPromoterGetProductPromotionLinkInfoBody {
  /** 推客 appid，和sharer_openid二选一 */
  sharer_appid?: string;
  /** 推客在小程序中的openid。 必须是机构绑定小程序的用户openid，而不能是其他小程序的用户openid。 和sharer_appid二选一 */
  sharer_openid?: string;
  /** 商品 id，如果使用该参数，需要传入shop_appid */
  product_id?: number;
  /** 商品所属店铺 appid */
  shop_appid?: string;
  /** 商品短链，和 product_id 二选一 */
  product_short_link?: string;
  /** 商品所属供货机构appid */
  head_supplier_appid?: string;
}
/** 获取推客对某个商品的推广短链 —— 返回体。 */
export interface EcPromoterGetProductPromotionLinkInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 推广短链 */
  short_link?: string;
  /** http短链，外部点击可跳转微信 */
  http_short_link?: string;
  /** 商品id */
  product_id?: number;
  /** 店铺appid */
  shop_appid?: string;
}

/** 获取推客对某个商品的推广二维码 —— 请求体。 */
export interface EcPromoterGetProductPromotionQrcodeInfoBody {
  /** 推客 appid，和sharer_openid二选一 */
  sharer_appid?: string;
  /** 推客在小程序中的openid 必须是机构绑定小程序的用户openid，而不能是其他小程序的用户openid。 和sharer_appid二选一 */
  sharer_openid?: string;
  /** 商品 id，如果使用该参数，需要传入shop_appid */
  product_id?: number;
  /** 商品所属店铺 appid */
  shop_appid?: string;
  /** 商品短链，和 product_id 二选一 */
  product_short_link?: string;
  /** 商品所属供货机构appid */
  head_supplier_appid?: string;
}
/** 获取推客对某个商品的推广二维码 —— 返回体。 */
export interface EcPromoterGetProductPromotionQrcodeInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 推广二维码 */
  qrcode_url?: string;
}

/** 获取可推广的商品详情 —— 请求体。 */
export interface EcPromoterGetPromoteProductDetailBody {
  /** 机构商品 所属小店appid */
  shop_appid: string;
  /** 商品的计划类型 1：定向计划 2：公开计划 3: 机构定向计划 4: 机构普通计划 */
  plan_type: number;
  /** 商品id */
  product_id: number;
  /** 填true返回商品可用的机构券 */
  get_available_coupon?: boolean;
  /** 商品所属供货机构appid【当plan_type为 3 和 4 时，这个参数必传】 */
  head_supplier_appid?: string;
  /** 用户自定义关联参数【长度要求<=128，只有商品卡的分享直接成交的才生效，间接锁客的不生效，当前不支持二维码和短链；这个关联参数直接成交时，会在订单详情中返回】 */
  custom_token?: string;
}
/** 获取可推广的商品详情 —— 返回体。 */
export interface EcPromoterGetPromoteProductDetailResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品详情 */
  product?: Record<string, unknown>;
  /** 商品可用的公开机构券 */
  publish_coupons?: unknown[];
  /** 商品可用的定向机构券 */
  cooperative_coupons?: unknown[];
}

/** 获取可推广的商品id列表 —— 请求体。 */
export interface EcPromoterGetPromoteProductListBody {
  /** 查询某个店铺下的推广商品 */
  shop_appid?: string;
  /** 商品的计划类型 1：定向计划 2：公开计划 3: 机构定向计划 4: 机构普通计划 */
  plan_type: number;
  /** 商品查询条件 */
  spu_item_condition?: Record<string, unknown>;
  /** 商品类目查询条件（定向计划不支持） */
  category?: Record<string, unknown>;
  /** 搜索关键词 */
  keyword?: string;
  /** 一页获取多少个商品，最大 20 */
  page_size: number;
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key: string;
  /** 来源机构筛选，当商品是机构公开或定向时有效 */
  from_head_supplier_appid?: string;
}
/** 获取可推广的商品id列表 —— 返回体。 */
export interface EcPromoterGetPromoteProductListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品列表 */
  product_list?: unknown[];
  /** 分页参数 */
  next_key?: string;
}

/** 获取商品推广统计数据 —— 请求体。 */
export interface EcLeagueHeadsupplierPromoteractionGetproductsharestatsBody {
  /** 推客appid */
  sharer_appid: string;
  /** 商品ID */
  product_id: number;
  /** 开始时间戳(秒) */
  start_time: number;
  /** 结束时间戳(秒) */
  end_time: number;
}
/** 获取商品推广统计数据 —— 返回体。 */
export interface EcLeagueHeadsupplierPromoteractionGetproductsharestatsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 转发人次 */
  share_count?: number;
  /** 转发人数（同一用户算一次） */
  share_user_count?: number;
  /** 点击人次 */
  click_count?: number;
  /** 点击人数（同一用户算一次） */
  click_user_count?: number;
}

/** 获取某个推客某个商品的内嵌商品卡片product_promotion_link —— 请求体。 */
export interface EcPromoterGetPromoterSingleProductPromotionInfoBody {
  /** 推客 appid，和sharer_openid二选一 */
  sharer_appid?: string;
  /** 推客在小程序中的openid， 必须是机构绑定小程序的用户openid，而不能是其他小程序的用户openid。 和sharer_appid二选一 */
  sharer_openid?: string;
  /** 商品 id，如果使用该参数，需要传入shop_appid */
  product_id?: number;
  /** 商品所属店铺 appid */
  shop_appid?: string;
  /** 商品短链，和 product_id 二选一 */
  product_short_link?: string;
  /** 商品所属供货机构appid */
  head_supplier_appid?: string;
  /** 用户自定义关联参数【长度要求<=128，只有商品卡的分享直接成交的才生效，间接锁客的不生效，当前不支持二维码和短链；这个关联参数直接成交时，会在订单详情中返回】 */
  custom_token?: string;
}
/** 获取某个推客某个商品的内嵌商品卡片product_promotion_link —— 返回体。 */
export interface EcPromoterGetPromoterSingleProductPromotionInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 内嵌商品卡片的推广参数 */
  product_promotion_link?: string;
}

/** 获取推客的某个商品的推广分佣比例 —— 请求体。 */
export interface EcPromoterGetSharerProductCommissionInfoBody {
  /** 推客在微信电商平台注册的身份标识 */
  sharer_appid: string;
  /** 要设置的商品 id */
  product_id: number;
}
/** 获取推客的某个商品的推广分佣比例 —— 返回体。 */
export interface EcPromoterGetSharerProductCommissionInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 分佣比例，范围为【100000 - 900000】，代表【10%-90%】 */
  commission_ratio?: number;
  /** 是否设置了这个商品的佣金率 */
  is_set?: boolean;
}

/** 设置推客的单个商品的分佣比例信息 —— 请求体。 */
export interface EcPromoterSetSharerProductCommissionInfoBody {
  /** 推客在微信电商平台注册的身份标识 */
  sharer_appid: string;
  /** 平台分佣时的分佣比例，范围为【100000 - 1000000】，代表【10%-100%】 */
  commission_ratio: string;
  /** 要设置的商品 id */
  product_id: number;
}
/** 设置推客的单个商品的分佣比例信息 —— 返回体。 */
export interface EcPromoterSetSharerProductCommissionInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取某个带货者当前直播的带货商品列表 —— 请求体。 */
export interface EcPromoterGetLiveCommissionProductListBody {
  /** 带货者的 appid */
  talent_appid: string;
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key: string;
  /** 一页获取多少个商品，最大 10 */
  page_size: number;
}
/** 获取某个带货者当前直播的带货商品列表 —— 返回体。 */
export interface EcPromoterGetLiveCommissionProductListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 下一页的 key */
  next_key?: string;
  /** 是否还有下一页 */
  has_more?: boolean;
  /** 商品列表 */
  product_list?: unknown[];
}

/** 生成某个带货者的用于直播预约的推广参数 —— 请求体。 */
export interface EcPromoterGetLiveNoticePromoterShareLinkBody {
  /** 需要挂在的小程序 appid【需要和机构绑定】 */
  mini_program_appid: string;
  /** 直播预约id */
  notice_id: string;
  /** 带货者的 appid */
  talent_appid: string;
  /** 推客appid */
  sharer_appid: string;
}
/** 生成某个带货者的用于直播预约的推广参数 —— 返回体。 */
export interface EcPromoterGetLiveNoticePromoterShareLinkResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 推广参数 */
  promoter_share_link?: string;
}

/** 获取带货者的直播预约列表 —— 请求体。 */
export interface EcPromoterGetLiveNoticeRecordListBody {
  /** 带货者的 appid */
  talent_appid: string;
}
/** 获取带货者的直播预约列表 —— 返回体。 */
export interface EcPromoterGetLiveNoticeRecordListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 直播预约数据 */
  live_notice_record_list?: unknown[];
}

/** 为某个推客生成单个直播预约的推广二维码 —— 请求体。 */
export interface EcPromoterGetLiveNoticeRecordQrCodeBody {
  /** 带货者的 appid */
  talent_appid: string;
  /** 直播预约 id */
  notice_id: string;
  /** 推客的 appid */
  sharer_appid: string;
}
/** 为某个推客生成单个直播预约的推广二维码 —— 返回体。 */
export interface EcPromoterGetLiveNoticeRecordQrCodeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 二维码的 url */
  qrcode_url?: string;
}

/** 获取直播预约的单个推客的推广预约人数 —— 请求体。 */
export interface EcPromoterGetLiveNoticeReservationInfoBody {
  /** 直播预约id */
  live_notice_id: string;
  /** 推客 appid */
  sharer_appid: string;
}
/** 获取直播预约的单个推客的推广预约人数 —— 返回体。 */
export interface EcPromoterGetLiveNoticeReservationInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 预约人数 */
  count?: number;
}

/** 获取直播预告推广统计数据 —— 请求体。 */
export interface EcLeagueHeadsupplierPromoteractionGetlivenoticestatsBody {
  /** 推客appid */
  sharer_appid: string;
  /** 直播预告ID */
  live_notice_id: string;
  /** 开始时间戳(秒) */
  start_time: number;
  /** 结束时间戳(秒) */
  end_time: number;
}
/** 获取直播预告推广统计数据 —— 返回体。 */
export interface EcLeagueHeadsupplierPromoteractionGetlivenoticestatsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 预约人次 */
  notice_count?: number;
  /** 预约人数（同一用户算一次） */
  notice_user_count?: number;
  /** 进直播人次 */
  join_count?: number;
  /** 进直播人数（同一用户算一次） */
  join_user_count?: number;
}

/** 获取直播大场保护的提报二维码 —— 请求体（文档未列字段，放行任意键）。 */
export type EcLeagueHeadsupplierLiveprotectionGetqrcodeBody = Record<string, unknown>;
/** 获取直播大场保护的提报二维码 —— 返回体。 */
export interface EcLeagueHeadsupplierLiveprotectionGetqrcodeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 二维码的 url */
  qrcode_url?: string;
}

/** 获取带货者的直播列表 —— 请求体。 */
export interface EcPromoterGetLiveRecordListBody {
  /** 带货者的 appid */
  talent_appid: string;
  /** 需要挂载的小程序appid【要和机构绑定】 */
  mini_program_appid: string;
  /** 推客appid【为了生成某个推客推广的 link】 */
  sharer_appid?: string;
}
/** 获取带货者的直播列表 —— 返回体。 */
export interface EcPromoterGetLiveRecordListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 当前直播的直播数据 */
  live_record_list?: unknown[];
}

/** 为某个推客生成单个直播的推广二维码 —— 请求体。 */
export interface EcPromoterGetLiveRecordQrCodeBody {
  /** 带货者的 appid */
  talent_appid: string;
  /** 直播 id */
  export_id: string;
  /** 推客的 appid */
  sharer_appid: string;
}
/** 为某个推客生成单个直播的推广二维码 —— 返回体。 */
export interface EcPromoterGetLiveRecordQrCodeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 二维码的 url */
  qrcode_url?: string;
}

/** 获取直播推广统计数据 —— 请求体。 */
export interface EcLeagueHeadsupplierPromoteractionGetlivestatsBody {
  /** 推客appid */
  sharer_appid: string;
  /** 直播ID */
  live_id: string;
  /** 查询范围的开始时间戳(秒) */
  start_time: number;
  /** 查询范围的结束时间戳(秒) */
  end_time: number;
}
/** 获取直播推广统计数据 —— 返回体。 */
export interface EcLeagueHeadsupplierPromoteractionGetlivestatsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 转发人次 */
  share_count?: number;
  /** 转发人数（同一用户算一次） */
  share_user_count?: number;
  /** 进直播人次 */
  join_count?: number;
  /** 进直播人数（同一用户算一次） */
  join_user_count?: number;
}

/** 获取小店关联账号的当前直播的自营商品列表 —— 请求体。 */
export interface EcPromoterGetShopLiveCommissionProductListBody {
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key: string;
  /** 一页获取多少个商品，最大 10 */
  page_size: number;
  /** 小店的 appid */
  shop_appid: string;
  /** 关联账号的id，可从获取合作小店的关联账号列表中获取 */
  promoter_id: string;
  /** 关联账号类型【需要是视频号】 */
  promoter_type: number;
}
/** 获取小店关联账号的当前直播的自营商品列表 —— 返回体。 */
export interface EcPromoterGetShopLiveCommissionProductListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 下一页的 key */
  next_key?: string;
  /** 商品列表 */
  product_list?: unknown[];
  /** 是否还有下一页 */
  has_more?: boolean;
}

/** 为推客获取小店关联账号直播预约的推广参数 —— 请求体。 */
export interface EcPromoterGetShopLiveNoticePromoterShareLinkBody {
  /** 小店的 appid */
  shop_appid: string;
  /** 关联账号的id，可从获取合作小店的关联账号列表中获取 */
  promoter_id: string;
  /** 关联账号类型【需要是视频号】 */
  promoter_type: number;
  /** 直播预约 id */
  notice_id: string;
  /** 推客的 appid */
  sharer_appid: string;
}
/** 为推客获取小店关联账号直播预约的推广参数 —— 返回体。 */
export interface EcPromoterGetShopLiveNoticePromoterShareLinkResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 推广参数 */
  promoter_share_link?: string;
}

/** 获取小店关联账号的预约直播列表 —— 请求体。 */
export interface EcPromoterGetShopLiveNoticeRecordListBody {
  /** 小店的 appid */
  shop_appid: string;
  /** 关联账号的id，可从获取合作小店的关联账号列表中获取 */
  promoter_id: string;
  /** 关联账号类型【需要是视频号】 */
  promoter_type: number;
}
/** 获取小店关联账号的预约直播列表 —— 返回体。 */
export interface EcPromoterGetShopLiveNoticeRecordListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 直播预约数据 */
  live_notice_record_list?: unknown[];
}

/** 为推客生成小店关联账号直播预约的推广二维码 —— 请求体。 */
export interface EcPromoterGetShopLiveNoticeRecordQrCodeBody {
  /** 小店的 appid */
  shop_appid: string;
  /** 关联账号的id，可从获取合作小店的关联账号列表中获取 */
  promoter_id: string;
  /** 直播预约 id */
  notice_id: string;
  /** 推客的 appid */
  sharer_appid: string;
  /** 关联账号类型【需要是视频号】 */
  promoter_type: number;
}
/** 为推客生成小店关联账号直播预约的推广二维码 —— 返回体。 */
export interface EcPromoterGetShopLiveNoticeRecordQrCodeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 二维码的 url */
  qrcode_url?: string;
}

/** 获取小店关联账号的直播列表 —— 请求体。 */
export interface EcPromoterGetShopLiveRecordListBody {
  /** 小店的 appid */
  shop_appid: string;
  /** 关联账号的id，可从获取合作小店的关联账号列表中获取 */
  promoter_id: string;
  /** 需要挂载的小程序appid【要和机构绑定】 */
  mini_program_appid: string;
  /** 推客appid【为了生成某个推客推广的 link】 */
  sharer_appid: string;
  /** 关联账号类型【需要是视频号】 */
  promoter_type: number;
}
/** 获取小店关联账号的直播列表 —— 返回体。 */
export interface EcPromoterGetShopLiveRecordListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 前直播的直播数据 */
  live_record_list?: unknown[];
}

/** 为推客生成小店关联账号直播的推广二维码 —— 请求体。 */
export interface EcPromoterGetShopLiveRecordQrCodeBody {
  /** 小店的 appid */
  shop_appid: string;
  /** 关联账号的id，可从获取合作小店的关联账号列表中获取 */
  promoter_id: string;
  /** 直播 id */
  export_id: string;
  /** 推客的 appid */
  sharer_appid: string;
  /** 关联账号类型【需要是视频号】 */
  promoter_type: number;
}
/** 为推客生成小店关联账号直播的推广二维码 —— 返回体。 */
export interface EcPromoterGetShopLiveRecordQrCodeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 二维码的 url */
  qrcode_url?: string;
}

/** 获取带货者推广的短视频信息 —— 请求体。 */
export interface EcPromoterGetFeedListBody {
  /** 合作的带货者id */
  talent_appid: string;
  /** 带货者的视频号username。 当合作方式是“全部内容合作”时，需要指定视频号username，如果是之前的“部分内容”的合作方式，则可以不填。 获得方式：获取合作的带货者列表 */
  finder_exportusername?: string;
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key: string;
  /** 一页获取多少个数据，最大 10 */
  page_size: number;
}
/** 获取带货者推广的短视频信息 —— 返回体。 */
export interface EcPromoterGetFeedListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 下一页的 key 内容 */
  next_key?: string;
  /** 是否还有下一页 */
  has_more?: boolean;
  /** 可以推广的短视频列表 */
  feed_list?: unknown[];
}

/** 生成某个带货者的某些短视频内嵌短视频卡片需要的feedtoken —— 请求体。 */
export interface EcPromoterGetFeedPromotionInfoBody {
  /** 需要生成 token 的短视频列表信息 */
  feed_list: unknown[];
  /** 需要挂在的小程序 appid【需要和机构绑定】 */
  mini_program_appid: string;
  /** 带货者的 appid */
  talent_appid: string;
  /** 推客appid【为了生成某个推客推广的 link】 */
  sharer_appid?: string;
}
/** 生成某个带货者的某些短视频内嵌短视频卡片需要的feedtoken —— 返回体。 */
export interface EcPromoterGetFeedPromotionInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 推客的绑定参数列表 */
  feed_list?: unknown[];
}

/** 获取小店关联账号的短视频列表 —— 请求体。 */
export interface EcPromoterGetShopFeedListBody {
  /** 分页参数，第一页为空，后面返回前面一页返回的数据 */
  next_key: string;
  /** 一页获取多少个数据，最大 10 */
  page_size: number;
  /** 小店的 appid */
  shop_appid: string;
  /** 关联账号的id，可从获取合作小店的关联账号列表中获取 */
  promoter_id: string;
  /** 关联账号类型【需要是视频号】 */
  promoter_type: number;
}
/** 获取小店关联账号的短视频列表 —— 返回体。 */
export interface EcPromoterGetShopFeedListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 下一页的 key 内容 */
  next_key?: string;
  /** 是否还有下一页 */
  has_more?: boolean;
  /** 可以推广的短视频列表 */
  feed_list?: unknown[];
}

/** 生成小店关联账号的短视频内嵌小程序推广信息 —— 请求体。 */
export interface EcPromoterGetShopFeedPromotionInfoBody {
  /** 小店的 appid */
  shop_appid: string;
  /** 关联账号的id，可从获取合作小店的关联账号列表中获取 */
  promoter_id: string;
  /** 关联账号类型【需要是视频号】 */
  promoter_type?: number;
  /** 需要挂在的小程序 appid【需要和机构绑定】 */
  mini_program_appid: string;
  /** 需要生成 token 的短视频列表信息 */
  feed_list: unknown[];
  /** 推客appid【为了生成某个推客推广的 link】 */
  sharer_appid: string;
}
/** 生成小店关联账号的短视频内嵌小程序推广信息 —— 返回体。 */
export interface EcPromoterGetShopFeedPromotionInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 推客的绑定参数列表 */
  feed_list?: unknown[];
}

/** 获取商品基础详情 —— 请求体。 */
export interface EcLeagueHeadsupplierProductdetailGetBody {
  /** 机构商品 所属小店appid */
  shop_appid: string;
  /** 商品id */
  product_id: number;
}
/** 获取商品基础详情 —— 返回体。 */
export interface EcLeagueHeadsupplierProductdetailGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品详情 */
  item?: Record<string, unknown>;
}

/** 获取订阅的商品列表 —— 请求体。 */
export interface EcLeagueHeadsupplierSubscriptionGetsubscribeBody {
  /** 筛选条件 */
  filter?: Record<string, unknown>;
  /** 每页数量(不超过1000) */
  page_size: number;
  /** 翻页参数，从第二页开始传，来源于上一页的返回值 */
  next_key?: string;
  /** 否需要返回符合条件的记录总数 */
  need_total_num?: boolean;
}
/** 获取订阅的商品列表 —— 返回体。 */
export interface EcLeagueHeadsupplierSubscriptionGetsubscribeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 订阅的商品信息列表 */
  subscribe_info_list?: unknown[];
  /** 符合条件的记录总数 */
  total_num?: number;
  /** 翻页参数 */
  next_key?: string;
  /** 是否还有下一页 */
  has_more?: boolean;
}

/** 获取商品活动补贴信息 —— 请求体。 */
export interface EcLeagueHeadsupplierProductGetactivityBody {
  /** 商品ID，必填 */
  product_id: number;
  /** 所属小店appid，必填 */
  shop_appid: string;
}
/** 获取商品活动补贴信息 —— 返回体。 */
export interface EcLeagueHeadsupplierProductGetactivityResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 是否有活动 */
  has_activity?: boolean;
  /** 商品活动信息列表 */
  product_activity_list?: unknown[];
}

/** 商品订阅 —— 请求体。 */
export interface EcLeagueHeadsupplierSubscriptionSubscribeBody {
  /** 要订阅的商品ID */
  product_id: number;
}
/** 商品订阅 —— 返回体。 */
export interface EcLeagueHeadsupplierSubscriptionSubscribeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 取消商品订阅 —— 请求体。 */
export interface EcLeagueHeadsupplierSubscriptionUnsubscribeBody {
  /** 要取消订阅的商品ID */
  product_id: number;
}
/** 取消商品订阅 —— 返回体。 */
export interface EcLeagueHeadsupplierSubscriptionUnsubscribeResp {
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

/** 通过mediaid获取数据 —— 请求体（文档未列字段，放行任意键）。 */
export type EcBasicsMediaGetBody = Record<string, unknown>;
/** 通过mediaid获取数据 —— 查询参数。 */
export interface EcBasicsMediaGetQuery {
  /** 售后单，纠纷单等接口返回的媒体 id */
  media_id: string;
}
/** 通过mediaid获取数据 —— 返回体。 */
export interface EcBasicsMediaGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 上传图片 —— 请求体。 */
export interface ShopEcBasicsImgUploadBody {
  /** upload_type=1时必填，图片url，该参数为 POST包请求参数 */
  img_url?: string;
  /** upload_type=0时必填，图片文件buffer */
  media?: unknown;
}
/** 上传图片 —— 查询参数。 */
export interface ShopEcBasicsImgUploadQuery {
  /** 传类型。0:二进制流；1:图片url（不支持301/302跳转），该参数为 URL 参数 */
  upload_type: number;
  /** 返回数据类型。0:media_id和pay_media_id；1:图片链接（商品信息相关图片请务必使用此参数得到链接），该参数为 URL 参数 */
  resp_type: number;
  /** upload_type=0时必填，图片的高，单位：像素，该参数为 URL 参数 */
  height?: number;
  /** upload_type=0时必填，图片的宽，单位：像素，该参数为 URL 参数 */
  width?: number;
}
/** 上传图片 —— 返回体。 */
export interface ShopEcBasicsImgUploadResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 图片信息 */
  pic_file?: Record<string, unknown>;
}

/** 上传资质图片 —— 请求体。 */
export interface ShopEcBasicsQualificationUploadBody {
  /** 资质图片文件file */
  media: unknown;
}
/** 上传资质图片 —— 返回体。 */
export interface ShopEcBasicsQualificationUploadResp {
  /** 错误码 */
  errcode?: string;
  /** 错误描述 */
  errmsg?: string;
  /** 文件信息 */
  data?: Record<string, unknown>;
}

/** 完成视频上传 —— 请求体。 */
export interface ShopEcBasicsVideoFinishuploadBody {
  /** 通过video_initupload接口获取 */
  video_upload_key: string;
  /** 文件分片列表，按分块偏移从小到大排列，并且上传块编号连续。 */
  finish_parts: unknown[];
}
/** 完成视频上传 —— 返回体。 */
export type ShopEcBasicsVideoFinishuploadResp = Record<string, unknown>;

/** 获取上传后的视频临时URL —— 请求体（文档未列字段，放行任意键）。 */
export type ShopEcBasicsVideoGetplayinfoBody = Record<string, unknown>;
/** 获取上传后的视频临时URL —— 查询参数。 */
export interface ShopEcBasicsVideoGetplayinfoQuery {
  /** 通过video_initupload接口获取 */
  video_upload_key: string;
}
/** 获取上传后的视频临时URL —— 返回体。 */
export interface ShopEcBasicsVideoGetplayinfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** - */
  data?: Record<string, unknown>;
}

/** 申请上传视频 —— 请求体。 */
export interface ShopEcBasicsVideoInituploadBody {
  /** 上传场景类型 */
  scene_type: number;
  /** 文件类型 */
  file_type: string;
  /** 文件大小，单位：字节 */
  file_size: number;
}
/** 申请上传视频 —— 返回体。 */
export interface ShopEcBasicsVideoInituploadResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** - */
  data?: Record<string, unknown>;
}

/** 上传视频数据分块 —— 请求体。 */
export interface ShopEcBasicsVideoUploadpartBody {
  /** 视频文件分块buffer */
  media: unknown;
}
/** 上传视频数据分块 —— 查询参数。 */
export interface ShopEcBasicsVideoUploadpartQuery {
  /** 通过video_initupload接口获取 */
  video_upload_key: string;
  /** 块编号最大10000，从1开始 */
  partnum: number;
}
/** 上传视频数据分块 —— 返回体。 */
export interface ShopEcBasicsVideoUploadpartResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** - */
  data?: Record<string, unknown>;
}

/** 新增品牌资质 —— 请求体。 */
export interface ShopEcBrandAddBody {
  /** 品牌详情 */
  brand: Record<string, unknown>;
}
/** 新增品牌资质 —— 返回体。 */
export interface ShopEcBrandAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 审核单ID, 提交审核成功后返回 */
  audit_id?: number;
}

/** 撤回品牌资质审核 —— 请求体。 */
export interface ShopEcBrandAuditCancelBody {
  /** 品牌库中的品牌编号 */
  brand_id: string;
  /** 要撤销的审核单ID, 提交审核成功后返回 */
  audit_id: string;
}
/** 撤回品牌资质审核 —— 返回体。 */
export interface ShopEcBrandAuditCancelResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 删除品牌资质 —— 请求体。 */
export interface EcBrandDeleteBody {
  /** 品牌库中的品牌编号 */
  brand_id: string;
}
/** 删除品牌资质 —— 返回体。 */
export interface EcBrandDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取品牌库列表 —— 请求体。 */
export interface ShopEcBrandAllBody {
  /** 每页数量(默认10, 不超过50) */
  page_size: number;
  /** 由上次请求返回, 记录翻页的上下文, 传入时会从上次返回的结果往后翻一页, 不传则默认获取第一页数据 */
  next_key?: string;
}
/** 获取品牌库列表 —— 返回体。 */
export interface ShopEcBrandAllResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 品牌库中的品牌信息 */
  brands?: unknown[];
  /** 本次翻页的上下文，用于请求下一页 */
  next_key?: string;
  /** 是否还有下一页内容 */
  continue_flag?: boolean;
}

/** 获取品牌资质申请列表 —— 请求体。 */
export interface EcBrandListGetBody {
  /** 每页数量(默认10, 不超过50) */
  page_size: number;
  /** 审核单状态, 不填默认拉全部商品 */
  status?: number;
  /** 由上次请求返回, 记录翻页的上下文, 传入时会从上次返回的结果往后翻一页, 不传则默认获取第一页数据 */
  next_key?: string;
}
/** 获取品牌资质申请列表 —— 返回体。 */
export interface EcBrandListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 品牌资质申请信息 */
  brands?: unknown[];
  /** 品牌资质总数 */
  total_num?: number;
  /** 本次翻页的上下文，用于请求下一页 */
  next_key?: string;
}

/** 获取品牌资质申请详情 —— 请求体。 */
export interface EcBrandGetBody {
  /** 品牌库中的品牌编号 */
  brand_id: string;
}
/** 获取品牌资质申请详情 —— 返回体。 */
export interface EcBrandGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 品牌资质申请信息 */
  brand?: Record<string, unknown>;
}

/** 获取生效中的品牌资质列表 —— 请求体。 */
export interface EcBrandValidListGetBody {
  /** 每页数量(默认10, 不超过50) */
  page_size: number;
  /** 由上次请求返回, 记录翻页的上下文, 传入时会从上次返回的结果往后翻一页, 不传则默认获取第一页数据 */
  next_key?: string;
}
/** 获取生效中的品牌资质列表 —— 返回体。 */
export interface EcBrandValidListGetResp {
  /** 品牌资质申请信息 */
  brands?: unknown[];
  /** 品牌资质总数 */
  total_num?: number;
  /** 本次翻页的上下文，用于请求下一页 */
  next_key?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 更新品牌资质 —— 请求体。 */
export interface EcBrandUpdateBody {
  /** 品牌详情 */
  brand: Record<string, unknown>;
}
/** 更新品牌资质 —— 返回体。 */
export interface EcBrandUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 审核单ID, 提交审核成功后返回 */
  audit_id?: number;
}

/** 获取保证金类目规则 —— 请求体。 */
export interface ShopEcCategoryGetcategoryruleBody {
  /** 类目id */
  category_id: number;
}
/** 获取保证金类目规则 —— 查询参数。 */
export interface ShopEcCategoryGetcategoryruleQuery {
  /** 规则id，保证金填1 */
  rule_id: number;
}
/** 获取保证金类目规则 —— 返回体。 */
export interface ShopEcCategoryGetcategoryruleResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 保证金，单位：分 */
  deposit?: number;
}

/** 获取类目下商品发布规则 —— 请求体。 */
export interface ShopEcCategoryGetcategoryproductruleBody {
  /** 类目ID */
  cat_id: number;
  /** 发布模式。0: 普通模式；1: 极简模式 */
  release_mode: number;
  /** 品牌ID */
  brand_id?: number;
}
/** 获取类目下商品发布规则 —— 返回体。 */
export interface ShopEcCategoryGetcategoryproductruleResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 类目信息 */
  info?: Record<string, unknown>;
  /** 产品属性 */
  product_attr_list?: unknown[];
  /** 销售属性 */
  sale_attr_list?: unknown[];
  /** 资质信息 */
  product_qua_list?: unknown[];
  /** 价格下限，单位分，商品售价不可低于此价格 */
  floor_price?: number;
  /** 尺码表 */
  size_chart?: Record<string, unknown>;
  /** 商品编辑要求 */
  product_requirement?: Record<string, unknown>;
  /** 额外服务，对应 添加商品 extra_service里的参数 */
  extra_service_list?: unknown[];
  /** 是否必填sku条形码 */
  is_need_bar_code?: boolean;
  /** 预售规则 */
  presale_rule?: Record<string, unknown>;
  /** 品牌信息，传入brand_id时会返回 */
  brand_info?: Record<string, unknown>;
  /** 当前类目是否为定向类目 */
  is_directed_category?: boolean;
}

/** 同意售后 —— 请求体。 */
export interface EcAftersaleAcceptapplyBody {
  /** 售后单号 */
  after_sale_order_id: string;
  /** 同意退货时传入地址id，否则后续接口在处理缺少地址信息的请求时将报错 */
  address_id?: string;
  /** 同意类型： 1用于退货退款或者换货场景表示同意退货，不能使用在仅退款或者收到货同意退款场景; 2用于收到货或者仅退款场景表示同意退款，不能使用在换货或者同意用户退货场景; 如果不填则将根据当前的售后单 */
  accept_type?: number;
}
/** 同意售后 —— 返回体。 */
export interface EcAftersaleAcceptapplyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 换货发货 —— 请求体。 */
export interface EcAftersaleAcceptexchangereshipBody {
  /** 售后单号 */
  after_sale_order_id: string;
  /** 快递单号 */
  waybill_id: string;
  /** 快递公司id，通过获取快递公司列表接口获得，非主流快递公司可以填OTHER */
  delivery_id: string;
}
/** 换货发货 —— 返回体。 */
export interface EcAftersaleAcceptexchangereshipResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 售后单兑换虚拟号 —— 请求体。 */
export interface EcAftersaleApplyvirtualtelnumBody {
  /** - */
  after_sale_order_id: number;
}
/** 售后单兑换虚拟号 —— 返回体。 */
export interface EcAftersaleApplyvirtualtelnumResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 虚拟号号码 */
  virtual_tel_number?: string;
  /** 虚拟号有效期 */
  virtual_tel_expire_time?: number;
}

/** 代用户发起售后 —— 请求体。 */
export interface EcAftersaleGenaftersaleorderBody {
  /** 请求唯一ID，失败时可用相同ID进行重试，可避免重复发起售后 */
  request_id: string;
  /** 订单ID */
  order_id: string;
  /** 商品ID */
  product_id: string;
  /** 商品SKUID */
  sku_id: string;
  /** 发起售后数量，换货场景仅支持填1 */
  count: number;
  /** 售后退款金额，单位分，非换货场景必填 */
  amount?: number;
  /** 售后原因 */
  reason: string;
  /** 售后类型，REFUND：仅退款；RETURN：退货退款；EXCHANGE：换货 */
  type: string;
  /** 售后类型为退货退款时，退货的地址ID，参考获取地址列表 */
  address_id?: string;
  /** 代发起售后补充说明 */
  desc?: string;
  /** 换货信息：type=EXCHANGE 时必填 */
  exchange_sku_info?: Record<string, unknown>;
}
/** 代用户发起售后 —— 返回体。 */
export interface EcAftersaleGenaftersaleorderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 售后ID */
  aftersale_id?: number;
}

/** 获取售后单列表 —— 请求体。 */
export interface EcAftersaleGetaftersalelistBody {
  /** 售后单创建启始时间；begin_create_time/end_create_time和begin_update_time/end_update_time成对使用，必选其一 */
  begin_create_time?: number;
  /** 售后单创建结束时间，end_create_time减去begin_create_time不得大于24小时；begin_create_time/end_create_time和begin_update_ */
  end_create_time?: number;
  /** 翻页参数，从第二页开始传，来源于上一页的返回值 */
  next_key?: string;
  /** 售后单更新起始时间；begin_create_time/end_create_time和begin_update_time/end_update_time成对使用，必选其一 */
  begin_update_time?: number;
  /** 售后单更新结束时间，end_update_time减去begin_update_time不得大于24小时；begin_create_time/end_create_time和begin_update_ */
  end_update_time?: number;
}
/** 获取售后单列表 —— 返回体。 */
export interface EcAftersaleGetaftersalelistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 售后单号列表 */
  after_sale_order_id_list?: unknown[];
  /** 是否还有数据 */
  has_more?: boolean;
  /** 翻页参数 */
  next_key?: string;
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

/** 获取全量售后原因 —— 请求体（文档未列字段，放行任意键）。 */
export type EcAftersaleReasonGetBody = Record<string, unknown>;
/** 获取全量售后原因 —— 返回体。 */
export interface EcAftersaleReasonGetResp {
  /** 错误信息 */
  errmsg?: string;
  /** 错误码 */
  errcode?: number;
  /** 售后原因列表 */
  reason_list?: unknown[];
}

/** 获取拒绝售后原因 —— 请求体（文档未列字段，放行任意键）。 */
export type EcAftersaleRejectreasonGetBody = Record<string, unknown>;
/** 获取拒绝售后原因 —— 返回体。 */
export interface EcAftersaleRejectreasonGetResp {
  /** 错误信息 */
  errmsg?: string;
  /** 错误码 */
  errcode?: number;
  /** 售后拒绝原因列表 */
  reason_list?: unknown[];
}

/** 商家处理极速换货用户退货 —— 请求体。 */
export interface EcAftersaleHandlefastexchangereceiptBody {
  /** 售后单号 */
  after_sale_order_id: string;
  /** 1-同意，2-拒绝 */
  act: number;
  /** 拒绝原因具体描述，可使用默认描述，也可以自定义描述 */
  reject_reason?: string;
  /** 拒绝原因枚举值，选择reject_scene为7的场景 */
  reject_reason_type?: number;
  /** 补充描述 */
  merchant_text?: string;
  /** 举证材料 */
  reject_confirm_exchange?: unknown[];
}
/** 商家处理极速换货用户退货 —— 返回体。 */
export interface EcAftersaleHandlefastexchangereceiptResp {
  /** - */
  errcode?: number;
  /** - */
  errmsg?: string;
}

/** 商家协商 —— 请求体。 */
export interface EcAftersaleMerchantupdateaftersaleBody {
  /** 售后单号 */
  after_sale_order_id: string;
  /** 协商修改把售后单修改成该售后类型。1:退款；2:退货退款 */
  type: number;
  /** 金额（单位：分） */
  amount: number;
  /** 协商描述 */
  merchant_update_desc: string;
  /** 协商原因 */
  update_reason_type: number;
  /** 1:已协商一致，邀请买家取消售后; 2:邀请买家核实与补充凭证; 3:修改买家售后申请 */
  merchant_update_type: number;
  /** 协商凭证id列表，可使用图片上传接口获取media_id（数据类型填0），当update_reason_type对应的need_image为1时必填 */
  media_ids: unknown[];
}
/** 商家协商 —— 返回体。 */
export interface EcAftersaleMerchantupdateaftersaleResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询可换货列表 —— 请求体。 */
export interface EcAftersaleGetexchangeableskulistBody {
  /** 订单号 */
  order_id: string;
  /** 商品ID */
  product_id: string;
  /** sku ID */
  sku_id: string;
}
/** 查询可换货列表 —— 返回体。 */
export interface EcAftersaleGetexchangeableskulistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 可换 SKU ID 列表。商家代发起换货时，从中选一个填到 genaftersaleorder.exchange_sku_info.new_sku_id */
  sku_id_list?: unknown[];
}

/** 代用户发起退差价 —— 请求体。 */
export interface EcAftersaleRefundpricediffBody {
  /** 请求唯一ID，失败时可用相同ID进行重试，可避免重复发起售后 */
  request_id: string;
  /** 订单ID */
  order_id: string;
  /** 商品ID */
  product_id: string;
  /** 商品SKUID */
  sku_id: string;
  /** 售后退款金额，单位分 */
  amount: number;
  /** 售后原因 */
  reason: string;
  /** 代发起售后补充说明 */
  desc?: string;
}
/** 代用户发起退差价 —— 返回体。 */
export interface EcAftersaleRefundpricediffResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 售后ID */
  aftersale_id?: string;
}

/** 拒绝售后 —— 请求体。 */
export interface EcAftersaleRejectapplyBody {
  /** 售后单号 */
  after_sale_order_id: string;
  /** 拒绝原因具体描述,可使用默认描述，也可以自定义描述 */
  reject_reason?: string;
  /** 拒绝原因枚举值 */
  reject_reason_type: number;
}
/** 拒绝售后 —— 返回体。 */
export interface EcAftersaleRejectapplyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 换货拒绝发货 —— 请求体。 */
export interface EcAftersaleRejectexchangereshipBody {
  /** 售后单号 */
  after_sale_order_id: string;
  /** 拒绝原因具体描述 ,可使用默认描述，也可以自定义描述 */
  reject_reason?: string;
  /** 拒绝原因枚举值 */
  reject_reason_type?: number;
  /** 退款凭证，可使用图片上传接口获取media_id（数据类型填0） */
  reject_certificates?: unknown[];
}
/** 换货拒绝发货 —— 返回体。 */
export interface EcAftersaleRejectexchangereshipResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 上传退款凭证 —— 请求体。 */
export interface EcAftersaleUploadrefundcertificateBody {
  /** 售后单号 */
  after_sale_order_id: string;
  /** 退款凭证，可使用图片上传接口获取media_id（数据类型填0） */
  refund_certificates: unknown[];
  /** 描述 */
  desc: string;
}
/** 上传退款凭证 —— 返回体。 */
export interface EcAftersaleUploadrefundcertificateResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 商家补充纠纷单留言 —— 请求体。 */
export interface EcAftersaleAddcomplaintmaterialBody {
  /** 纠纷单号 */
  complaint_id: string;
  /** 留言内容，最多500字 */
  content: string;
  /** 图片media_id列表，所有留言总图片数量最多20张，可通过上传图片接口获取 */
  media_id_list?: string;
}
/** 商家补充纠纷单留言 —— 返回体。 */
export interface EcAftersaleAddcomplaintmaterialResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 商家举证 —— 请求体。 */
export interface EcAftersaleAddcomplaintproofBody {
  /** 纠纷单号 */
  complaint_id: string;
  /** 举证文字内容，最多500字 */
  content: string;
  /** 举证图片media_id列表，可通过上传图片接口获取 */
  media_id_list?: string;
}
/** 商家举证 —— 返回体。 */
export interface EcAftersaleAddcomplaintproofResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取纠纷单 —— 请求体。 */
export interface EcAftersaleGetcomplaintorderBody {
  /** 纠纷单号 */
  complaint_id: string;
}
/** 获取纠纷单 —— 返回体。 */
export interface EcAftersaleGetcomplaintorderResp {
  /** 售后单号 */
  after_sale_order_id?: string;
  /** 订单号 */
  order_id?: string;
  /** 纠纷历史 */
  history?: unknown[];
  /** 纠纷单状态 */
  status?: number;
  /** 虚拟号码 */
  virtual_tel_num_info?: Record<string, unknown>;
}

/** 同步工单 —— 请求体。 */
export interface EcAftersaleSyncworkorderBody {
  /** 纠纷单号 */
  complaint_id: string;
  /** 工单信息 */
  work_order_info: Record<string, unknown>;
}
/** 同步工单 —— 返回体。 */
export interface EcAftersaleSyncworkorderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取保障单详情 —— 请求体。 */
export interface EcAftersaleGetguaranteeorderBody {
  /** 保障单号 */
  guarantee_order_id: number;
}
/** 获取保障单详情 —— 返回体。 */
export interface EcAftersaleGetguaranteeorderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 保障单详情 */
  guarantee_order?: Record<string, unknown>;
}

/** 商家同意保障单申请 —— 请求体。 */
export interface EcAftersaleMerchantacceptguaranteeBody {
  /** 保障单号 */
  guarantee_order_id: number;
}
/** 商家同意保障单申请 —— 返回体。 */
export interface EcAftersaleMerchantacceptguaranteeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 商家协商保障单 —— 请求体。 */
export interface EcAftersaleMerchantmodifyguaranteeBody {
  /** 保障单号 */
  guarantee_order_id: number;
  /** 商家修改坏损比例，可填10/30/50/80/100 */
  bad_level: number;
  /** 商家备注 */
  merchant_remark?: string;
}
/** 商家协商保障单 —— 返回体。 */
export interface EcAftersaleMerchantmodifyguaranteeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 商家举证保障单 —— 请求体。 */
export interface EcAftersaleMerchantproofguaranteeBody {
  /** 保障单号 */
  guarantee_order_id: number;
  /** 商家举证文字内容 */
  content: string;
  /** 拒绝凭证id列表，可使用图片上传接口获取media_id（数据类型填0） */
  pic_list: unknown[];
}
/** 商家举证保障单 —— 返回体。 */
export interface EcAftersaleMerchantproofguaranteeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 商家拒绝保障单申请 —— 请求体。 */
export interface EcAftersaleMerchantrefuseguaranteeBody {
  /** 保障单号 */
  guarantee_order_id: number;
  /** 商家拒绝原因 */
  reason: string;
  /** 拒绝凭证id列表，可使用图片上传接口获取media_id（数据类型填0） */
  pic_list: unknown[];
}
/** 商家拒绝保障单申请 —— 返回体。 */
export interface EcAftersaleMerchantrefuseguaranteeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 商家获取保障单列表 —— 请求体。 */
export interface EcAftersaleSearchguaranteeorderBody {
  /** 保障单号 */
  guarantee_order_id_list?: unknown[];
  /** 订单号 */
  order_id_list?: unknown[];
  /** 想要获取的保障单类型；0-全部类型，1-假一赔三，2-坏损包退 */
  type?: number;
  /** 保障单申请的开始时间戳 */
  begin_time?: number;
  /** 保障单申请的结束时间戳 */
  end_time?: number;
  /** 保障单当前状态筛选 */
  status_list?: string;
  /** 列表起始下标，默认从0开始 */
  offset?: number;
  /** 需要的保障单列表条数 */
  limit: number;
}
/** 商家获取保障单列表 —— 返回体。 */
export interface EcAftersaleSearchguaranteeorderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 保障单详情列表 */
  guarantee_order_list?: unknown[];
  /** 保障单列表总数 */
  total_num?: number;
}

/** 申请类目 —— 请求体。 */
export interface EcCategoryAddBody {
  /** category_info */
  category_info: Record<string, unknown>;
}
/** 申请类目 —— 返回体。 */
export interface EcCategoryAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 审核单id */
  audit_id?: number;
}

/** 撤销类目审核 —— 请求体。 */
export interface ShopEcCategoryAuditCancelBody {
  /** 提交审核时返回的id，申请类目接口获得 */
  audit_id: string;
}
/** 撤销类目审核 —— 返回体。 */
export interface ShopEcCategoryAuditCancelResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取所有类目 —— 请求体（文档未列字段，放行任意键）。 */
export type ShopEcCategoryAllBody = Record<string, unknown>;
/** 获取所有类目 —— 返回体。 */
export interface ShopEcCategoryAllResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 旧类目信息 */
  cats?: unknown[];
  /** 新类目信息 */
  cats_v2?: unknown[];
}

/** 获取店铺的类目审核单详情 —— 请求体。 */
export interface ShopEcCategoryGetbizcatflowdetailBody {
  /** 审核单id */
  audit_id: number;
}
/** 获取店铺的类目审核单详情 —— 返回体。 */
export interface ShopEcCategoryGetbizcatflowdetailResp {
  /** 类目审核单详情 */
  info?: Record<string, unknown>;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取店铺的类目审核单列表 —— 请求体。 */
export interface ShopEcCategoryGetbizcatflowlistBody {
  /** 是否过滤状态 */
  is_filter_status: boolean;
  /** 当is_filter_status = true时，过滤的状态 */
  status?: number;
  /** offset */
  offset: number;
  /** limit */
  limit: number;
}
/** 获取店铺的类目审核单列表 —— 返回体。 */
export interface ShopEcCategoryGetbizcatflowlistResp {
  /** list */
  list?: unknown[];
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取类目信息 —— 请求体。 */
export interface ShopEcCategoryDetailBody {
  /** 品类ID（叶子类目ID）。 */
  cat_id: number;
}
/** 获取类目信息 —— 返回体。 */
export interface ShopEcCategoryDetailResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 类目信息 */
  info?: Record<string, unknown>;
  /** 属性信息 */
  attr?: Record<string, unknown>;
  /** 资质信息 */
  product_qua_list?: unknown[];
}

/** 获取店铺的类目权限详情 —— 请求体。 */
export interface ShopEcCategoryGetCategoryRelationDetailBody {
  /** 类目id */
  category_id: number;
}
/** 获取店铺的类目权限详情 —— 返回体。 */
export interface ShopEcCategoryGetCategoryRelationDetailResp {
  /** 类目id */
  category_id?: number;
  /** 类目状态, 1生效中，2已失效 */
  status?: number;
  /** 失效原因 */
  uneffective_reason?: string;
  /** 审核材料 */
  audit_info?: Record<string, unknown>;
  /** 生效时间 */
  effective_time?: number;
  /** 失效时间 */
  uneffective_time?: number;
  /** 类目资质 */
  qua_id?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取店铺的类目权限列表 —— 请求体。 */
export interface ShopEcCategoryGetCategoryRelationListBody {
  /** 是否过滤状态 */
  is_filter_status: boolean;
  /** 当is_filter_status = true时，过滤的状态。 */
  status?: number;
}
/** 获取店铺的类目权限列表 —— 返回体。 */
export interface ShopEcCategoryGetCategoryRelationListResp {
  /** 店铺类目权限列表 */
  list?: unknown[];
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 添加地址 —— 请求体。 */
export interface EcMerchantAddressAddBody {
  /** 地址信息 */
  address_detail: Record<string, unknown>;
}
/** 添加地址 —— 返回体。 */
export interface EcMerchantAddressAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 新的地址id */
  address_id?: string;
}

/** 删除地址 —— 请求体。 */
export interface EcMerchantAddressDeleteBody {
  /** 地址id */
  address_id: string;
}
/** 删除地址 —— 返回体。 */
export interface EcMerchantAddressDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取地址详情 —— 请求体。 */
export interface EcMerchantAddressGetBody {
  /** 地址id */
  address_id: string;
}
/** 获取地址详情 —— 返回体。 */
export interface EcMerchantAddressGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 地址详情 */
  address_detail?: Record<string, unknown>;
}

/** 获取地址列表 —— 请求体。 */
export interface EcMerchantAddressListBody {
  /** 获取的偏移量 */
  offset: number;
  /** 获取的个数 */
  limit: number;
}
/** 获取地址列表 —— 返回体。 */
export interface EcMerchantAddressListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 地址id列表 */
  address_id_list?: unknown[];
}

/** 更新地址 —— 请求体。 */
export interface EcMerchantAddressUpdateBody {
  /** 地址信息 */
  address_detail: Record<string, unknown>;
}
/** 更新地址 —— 返回体。 */
export interface EcMerchantAddressUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 订单补发货 —— 请求体。 */
export interface EcOrderDeliveryCompensationBody {
  /** 订单id */
  order_id: number;
  /** 物流信息 */
  delivery_list: unknown[];
  /** 补发原因 */
  reason: number;
}
/** 订单补发货 —— 返回体。 */
export interface EcOrderDeliveryCompensationResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取快递公司列表-旧 —— 请求体（文档未列字段，放行任意键）。 */
export type EcOrderDeliverycompanylistGetBody = Record<string, unknown>;
/** 获取快递公司列表-旧 —— 返回体。 */
export interface EcOrderDeliverycompanylistGetResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 快递公司列表 */
  company_list?: unknown[];
}

/** 获取快递公司列表 —— 请求体。 */
export interface EcOrderDeliverycompanylistNewGetBody {
  /** 是否仅返回支持电子面单功能的快递公司 */
  ewaybill_only: boolean;
}
/** 获取快递公司列表 —— 返回体。 */
export interface EcOrderDeliverycompanylistNewGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 快递公司列表 */
  company_list?: unknown[];
}

/** 订单发货 —— 请求体。 */
export interface EcOrderDeliverySendBody {
  /** 订单id */
  order_id: number;
  /** 物流信息 */
  delivery_list: unknown[];
}
/** 订单发货 —— 返回体。 */
export interface EcOrderDeliverySendResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 电子面单子件追加 —— 请求体。 */
export interface EcLogisticsEwaybillBizOrderAddsuborderBody {
  /** 电子面单订单号 */
  ewaybill_order_id: number;
  /** 运单号 */
  waybill_id: string;
  /** 快递公司id */
  delivery_id: string;
  /** 追加面单数量 1<=add_package_quantity <= 300 */
  add_package_quantity: number;
  /** 面单模板id */
  template_id?: string;
  /** 店铺id（从查询开通账号信息接口获取） */
  shop_id: string;
  /** 电子面单账号id（从查询开通账号信息接口获取） */
  ewaybill_acct_id: string;
  /** 包裹的体积和重量信息，顺丰支持该字段 */
  subpackage_list?: unknown[];
  /** 子单额外信息，如用于填写商家与快递定义的交易分单类型等 */
  sub_order_ext_info?: string;
}
/** 电子面单子件追加 —— 返回体。 */
export interface EcLogisticsEwaybillBizOrderAddsuborderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 快递公司错误码 */
  delivery_error_msg?: string;
  /** 快递单号 */
  waybill_id?: string;
  /** 子母单号列表 */
  waybill_id_list?: unknown[];
  /** 如果请求参数填了template_id，则返回打印报文信息，可以传给打印组件打印面单。 */
  print_info?: string;
  /** 电子面单订单id */
  ewaybill_order_id?: string;
}

/** 批量打印通知 —— 请求体。 */
export interface EcLogisticsEwaybillBizOrderBatchprintBody {
  /** 订单信息 */
  req_list: unknown[];
}
/** 批量打印通知 —— 返回体。 */
export interface EcLogisticsEwaybillBizOrderBatchprintResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 成功的单号 */
  succ_ewaybill_order_id?: unknown[];
  /** 失败的单号 */
  fail_ewaybill_order_id?: unknown[];
}

/** 电子面单取消下单 —— 请求体。 */
export interface EcLogisticsEwaybillBizOrderCancelBody {
  /** 电子面单订单id，全局唯一id */
  ewaybill_order_id: string;
  /** 快递公司id */
  delivery_id: string;
  /** 快递单号 */
  waybill_id: string;
}
/** 电子面单取消下单 —— 返回体。 */
export interface EcLogisticsEwaybillBizOrderCancelResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 快递公司错误码 */
  delivery_error_msg?: string;
}

/** 电子面单取号 —— 请求体。 */
export interface EcLogisticsEwaybillBizOrderCreateBody {
  /** 电子面单订单id，全局唯一id（从预取号接口获取或者自定义）,注意该字段类型用String传递，但是数据内容要求是Uint64 */
  ewaybill_order_id: string;
  /** 快递公司id，可通过获取快递公司列表查询 */
  delivery_id: string;
  /** 网点编码 */
  site_code?: string;
  /** 物流账号编码：每绑定一个物流商网点/月结账号分配一个acct_id（从ewaybill_getacct接口获取） */
  ewaybill_acct_id: string;
  /** 寄件人，传明文 */
  sender: Record<string, unknown>;
  /** 收件人,传小店订单内的用户收件人的信息文本即可。注：此字段只做非空参数校验，实际使用的收件人地址是小店订单内的用户地址，若收件人地址有误，可以联系用户修改订单收件地址或者调用修改地址接口 */
  receiver: Record<string, unknown>;
  /** 订单信息 合并寄件的订单需要保证商品订单内address_info.hash_code 一致，避免因为寄件人信息不一致导致订单配送错误 */
  ec_order_list: unknown[];
  /** 备注 */
  remark?: string;
  /** 面单主体ID：每个商家分配的唯一shop_id */
  shop_id: string;
  /** 退货地址 */
  return_address?: Record<string, unknown>;
  /** 如果需要获取打印报文，则填该字段。回包返回print_info。 如无需使用后台模板，可直接传递template_type做为默认模板， 如‘single’ */
  template_id?: string;
  /** 支持的类型，陆续更新中，枚举值默认为1，加盟型可以不填 */
  order_type?: number;
  /** 保价等增值服务 */
  order_vas_list?: unknown[];
  /** 温层等补充字段 */
  ext_info?: Record<string, unknown>;
  /** 预约上门取件、子母件等发货信息字段 */
  delivery_info?: Record<string, unknown>;
}
/** 电子面单取号 —— 返回体。 */
export interface EcLogisticsEwaybillBizOrderCreateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 电子面单订单id */
  ewaybill_order_id?: string;
  /** 快递单号 */
  waybill_id?: string;
  /** 快递公司错误码 */
  delivery_error_msg?: string;
  /** 如果请求参数填了template_id，则返回打印报文信息，可以传给打印组件打印面单。 */
  print_info?: string;
  /** 子母单号列表 */
  waybill_id_list?: unknown[];
  /** 商品订单存被判断疑似存在风险时返回 */
  order_risk_info?: unknown[];
}

/** 新增面单模板 —— 请求体。 */
export interface EcLogisticsEwaybillBizTemplateCreateBody {
  /** 快递公司编码 */
  delivery_id: string;
  /** 模板信息 */
  info: Record<string, unknown>;
}
/** 新增面单模板 —— 返回体。 */
export interface EcLogisticsEwaybillBizTemplateCreateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 快递公司编码 */
  delivery_id?: string;
  /** 模板编码 */
  template_id?: string;
}

/** 删除面单模版 —— 请求体。 */
export interface EcLogisticsEwaybillBizTemplateDeleteBody {
  /** 快递公司编码 */
  delivery_id: string;
  /** 模板id */
  template_id: string;
}
/** 删除面单模版 —— 返回体。 */
export interface EcLogisticsEwaybillBizTemplateDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取面单标准模板 —— 请求体（文档未列字段，放行任意键）。 */
export type EcLogisticsEwaybillBizTemplateConfigBody = Record<string, unknown>;
/** 获取面单标准模板 —— 返回体。 */
export interface EcLogisticsEwaybillBizTemplateConfigResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 所有快递公司模板信息汇总，delivery_id为快递公司id，template_type为模版类型 */
  config?: unknown[];
}

/** 查询开通的电子面单网点/账号信息 —— 请求体。 */
export interface EcLogisticsEwaybillBizAccountGetBody {
  /** 快递公司编码 */
  delivery_id?: string;
  /** 是否需要查询库存 */
  need_balance: boolean;
  /** 状态过滤 */
  status?: number;
  /** 分页起始位置，默认0 */
  offset?: number;
  /** 单次请求数量,当need_balance=true请注意设置合理的limit推荐值小于20，否则limit过大会导致接口超时无返回 */
  limit: number;
  /** 物流账号编码：每绑定一个物流商网点/月结账号分配一个acct_id */
  acct_id?: string;
}
/** 查询开通的电子面单网点/账号信息 —— 返回体。 */
export interface EcLogisticsEwaybillBizAccountGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 总条数 */
  total_num?: number;
  /** 账号列表 */
  account_list?: unknown[];
}

/** 查询开通的快递公司列表 —— 请求体。 */
export interface EcLogisticsEwaybillBizDeliveryGetBody {
  /** - */
  delivery_id?: string;
  /** 状态过滤, 不填则全选 */
  status?: number;
}
/** 查询开通的快递公司列表 —— 返回体。 */
export interface EcLogisticsEwaybillBizDeliveryGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 店铺id，全局唯一，一个店铺分配一个shop_id */
  shop_id?: string;
  /** 快递公司列表 */
  list?: unknown[];
}

/** 查询面单详情 —— 请求体。 */
export interface EcLogisticsEwaybillBizOrderGetBody {
  /** 电子面单订单id，全局唯一id */
  ewaybill_order_id: string;
}
/** 查询面单详情 —— 返回体。 */
export interface EcLogisticsEwaybillBizOrderGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 电子面单列表 */
  order_info?: Record<string, unknown>;
}

/** 获取面单模板信息 —— 请求体。 */
export interface EcLogisticsEwaybillBizTemplateGetBody {
  /** 快递公司编码 */
  delivery_id?: string;
}
/** 获取面单模板信息 —— 返回体。 */
export interface EcLogisticsEwaybillBizTemplateGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 所有快递公司模板信息汇总 */
  total_template?: unknown[];
}

/** 根据模板ID获取面单模板信息 —— 请求体。 */
export interface EcLogisticsEwaybillBizTemplateGetbyidBody {
  /** 快递公司编码 */
  delivery_id: string;
  /** 模板id */
  template_id: string;
}
/** 根据模板ID获取面单模板信息 —— 返回体。 */
export interface EcLogisticsEwaybillBizTemplateGetbyidResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 模板信息 */
  template_info?: Record<string, unknown>;
}

/** 电子面单预取号 —— 请求体。 */
export interface EcLogisticsEwaybillBizOrderPrecreateBody {
  /** 快递公司id */
  delivery_id: string;
  /** 网点编码 */
  site_code?: string;
  /** 物流账号客户编码：每绑定一个物流商网点/月结账号分配一个acct_id */
  ewaybill_acct_id: string;
  /** 寄件人,传明文 */
  sender: Record<string, unknown>;
  /** 收件人,传小店订单内获取到的用户信息即可 */
  receiver: Record<string, unknown>;
  /** 订单信息 */
  ec_order_list: unknown[];
  /** 备注 */
  remark?: string;
  /** 面单主体ID：每个供货商分配的唯一shop_id（从ewaybill_getacct接口获取） */
  shop_id: string;
}
/** 电子面单预取号 —— 返回体。 */
export interface EcLogisticsEwaybillBizOrderPrecreateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 电子面单订单id，用于取号接口请求参数 */
  ewaybill_order_id?: string;
}

/** 打印成功通知 —— 请求体。 */
export interface EcLogisticsEwaybillBizOrderPrintBody {
  /** 电子面单订单id，全局唯一id */
  ewaybill_order_id: string;
  /** 快递公司id */
  delivery_id: string;
  /** 快递单号 */
  waybill_id: string;
  /** 1 补打单成功 0 首次打单成功 */
  re_print: number;
}
/** 打印成功通知 —— 返回体。 */
export interface EcLogisticsEwaybillBizOrderPrintResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 更新面单模版 —— 请求体。 */
export interface EcLogisticsEwaybillBizTemplateUpdateBody {
  /** 快递公司编码 */
  delivery_id: string;
  /** 模板信息 */
  info: Record<string, unknown>;
}
/** 更新面单模版 —— 返回体。 */
export interface EcLogisticsEwaybillBizTemplateUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取打印报文 —— 请求体。 */
export interface EcLogisticsEwaybillBizPrintGetBody {
  /** 电子面单订单id，全局唯一id */
  ewaybill_order_id: string;
  /** 模板id, 如无需使用后台模板，可直接传递template_type做为默认模板， 如‘single’ */
  template_id: string;
  /** 子单的物流单号，不传则返回整单的打印报文 */
  sub_waybill_id?: string;
}
/** 获取打印报文 —— 返回体。 */
export interface EcLogisticsEwaybillBizPrintGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 电子面单打印报文，打单时传给打印机使用 */
  print_info?: string;
}

/** 增加运费模版 —— 请求体。 */
export interface EcMerchantAddfreighttemplateBody {
  /** 运费模板详细信息 */
  freight_template: Record<string, unknown>;
}
/** 增加运费模版 —— 返回体。 */
export interface EcMerchantAddfreighttemplateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 运费模板id */
  template_id?: string;
}

/** 查询运费模版 —— 请求体。 */
export interface EcMerchantGetfreighttemplatedetailBody {
  /** 运费模板id */
  template_id: string;
}
/** 查询运费模版 —— 返回体。 */
export interface EcMerchantGetfreighttemplatedetailResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 运费模板详细信息 */
  freight_template?: Record<string, unknown>;
}

/** 获取运费模板列表 —— 请求体。 */
export interface EcMerchantGetfreighttemplatelistBody {
  /** 起始位置 */
  offset: number;
  /** 获取个数 */
  limit: number;
}
/** 获取运费模板列表 —— 返回体。 */
export interface EcMerchantGetfreighttemplatelistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 运费模板id列表 */
  template_id_list?: unknown[];
}

/** 更新运费模版 —— 请求体。 */
export interface EcMerchantUpdatefreighttemplateBody {
  /** 运费模板详细信息 */
  freight_template: Record<string, unknown>;
}
/** 更新运费模版 —— 返回体。 */
export interface EcMerchantUpdatefreighttemplateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 运费模板id */
  template_id?: string;
}

/** 同意用户修改收货地址申请 —— 请求体。 */
export interface EcOrderAddressmodifyAcceptBody {
  /** 订单id，可通过获取订单列表接口获取 */
  order_id: string;
}
/** 同意用户修改收货地址申请 —— 返回体。 */
export interface EcOrderAddressmodifyAcceptResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 申请查看订单真实号码 —— 请求体。 */
export interface EcOrderRealnumberApplyBody {
  /** 订单号 */
  order_id: string;
  /** 申请原因枚举值 */
  apply_type: number;
  /** 申请原因 */
  apply_reason: string;
  /** 申请原因图片证明， 1-5 张 */
  pic_media_ids: unknown[];
}
/** 申请查看订单真实号码 —— 返回体。 */
export interface EcOrderRealnumberApplyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 订单再次申请虚拟号 —— 请求体。 */
export interface EcOrderVirtualnumberApplyagainBody {
  /** 订单号 */
  order_id: string;
}
/** 订单再次申请虚拟号 —— 返回体。 */
export interface EcOrderVirtualnumberApplyagainResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 虚拟号 */
  virtual_number?: string;
  /** 分机号 */
  extension?: string;
  /** 剩余申请次数 */
  apply_quota?: number;
}

/** 同意待发货前更换sku请求 —— 请求体。 */
export interface EcOrderPreshipmentchangeskuApproveBody {
  /** 订单id */
  order_id: string;
}
/** 同意待发货前更换sku请求 —— 返回体。 */
export interface EcOrderPreshipmentchangeskuApproveResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 修改物流信息 —— 请求体。 */
export interface EcOrderDeliveryinfoUpdateBody {
  /** 订单id，可通过获取订单列表接口获取 */
  order_id: number;
  /** 整单物流信息，不支持拆单 */
  delivery_list?: unknown[];
  /** 更新包裹物流信息，支持拆单 */
  change_infos?: unknown[];
}
/** 修改物流信息 —— 返回体。 */
export interface EcOrderDeliveryinfoUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 修改订单备注 —— 请求体。 */
export interface EcOrderMerchantnotesUpdateBody {
  /** 订单id，可通过获取订单列表接口获取 */
  order_id: string;
  /** 备注内容 */
  merchant_notes: string;
  /** - */
  merchant_notes_tag_color?: number;
}
/** 修改订单备注 —— 返回体。 */
export interface EcOrderMerchantnotesUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 修改订单地址 —— 请求体。 */
export interface EcOrderAddressUpdateBody {
  /** 订单id，可通过获取订单列表接口获取 */
  order_id: number;
  /** 新地址 */
  user_address: Record<string, unknown>;
}
/** 修改订单地址 —— 返回体。 */
export interface EcOrderAddressUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 修改订单价格 —— 请求体。 */
export interface EcOrderPriceUpdateBody {
  /** 订单id，可通过获取订单列表接口获取 */
  order_id: number;
  /** 商品信息 */
  change_order_infos: unknown[];
  /** 是否修改运费 */
  change_express: boolean;
  /** 修改后的运费价格（change_express=true时要指定，不填默认为0），以分为单位 */
  express_fee?: number;
}
/** 修改订单价格 —— 返回体。 */
export interface EcOrderPriceUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 解密订单中的详细收货信息 —— 请求体。 */
export interface EcOrderSensitiveinfoDecodeBody {
  /** 订单 id */
  order_id: string;
}
/** 解密订单中的详细收货信息 —— 返回体。 */
export interface EcOrderSensitiveinfoDecodeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 收货信息 */
  address_info?: Record<string, unknown>;
  /** 虚拟号信息 */
  virtual_number_info?: Record<string, unknown>;
}

/** 订单虚拟号延期 —— 请求体。 */
export interface EcOrderVirtualnumberDelayBody {
  /** 订单号，19位数字字符串 */
  order_id: string;
  /** 当前已延期次数，可通过获取订单详情接口拿到，不填默认为 0 */
  has_delay_times: number;
}
/** 订单虚拟号延期 —— 返回体。 */
export interface EcOrderVirtualnumberDelayResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 过期时间，秒级时间戳 */
  expiration?: number;
  /** 可延期次数 */
  available_extend_num?: number;
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

/** 获取订单列表 —— 请求体。 */
export interface EcOrderListGetBody {
  /** 订单创建时间范围，时间范围至少填一个 */
  create_time_range: Record<string, unknown>;
  /** 订单更新时间范围，时间范围至少填一个 */
  update_time_range: Record<string, unknown>;
  /** 订单状态，具体枚举值请参考下文 */
  status?: number;
  /** 买家身份标识，可通过 订单下单通知、订单通知：合作帐号小程序 获取 */
  openid?: string;
  /** 每页数量(不超过100) */
  page_size?: number;
  /** 分页参数，上一页请求返回 */
  next_key: string;
}
/** 获取订单列表 —— 返回体。 */
export interface EcOrderListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 订单号列表 */
  order_id_list?: unknown[];
  /** 分页参数，下一页请求返回 */
  next_key?: string;
  /** bool 是否还有下一页，true:有下一页；false:已经结束，没有下一页。 */
  has_more?: boolean;
}

/** 获取礼物单的子单列表 —— 请求体。 */
export interface EcOrderPresentsuborderGetBody {
  /** 礼物单号 */
  present_order_id: string;
}
/** 获取礼物单的子单列表 —— 返回体。 */
export interface EcOrderPresentsuborderGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 订单号列表 */
  order_ids?: unknown[];
}

/** 获取所有待发货前更换sku待处理请求 —— 请求体。 */
export interface EcOrderPreshipmentchangeskuGetBody {
  /** 分页参数 */
  page: number;
  /** 每一页需要展示的条数 */
  page_size: number;
}
/** 获取所有待发货前更换sku待处理请求 —— 返回体。 */
export interface EcOrderPreshipmentchangeskuGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 等待商家处理的换款请求订单id */
  order_ids?: unknown[];
}

/** 查看订单真实号审核状态 —— 请求体。 */
export interface EcOrderRealnumberviewauditGetBody {
  /** 订单号 */
  order_id: string;
}
/** 查看订单真实号审核状态 —— 返回体。 */
export interface EcOrderRealnumberviewauditGetResp {
  /** 申请时间 */
  apply_time?: number;
  /** 审核状态 1 审核中 2 审核拒绝 3 审核通过 */
  audit_state?: number;
  /** 申请原因 */
  apply_reason?: string;
  /** 申请id */
  task_id?: number;
}

/** 礼物订单新增备注信息 —— 请求体。 */
export interface EcOrderPresentnoteAddBody {
  /** 礼物订单ID */
  present_order_id: string;
  /** 礼物订单备注信息 */
  notes: string;
}
/** 礼物订单新增备注信息 —— 返回体。 */
export interface EcOrderPresentnoteAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 添加待认证的手机号 —— 请求体。 */
export interface EcMerchantPrivatenumberAddphoneBody {
  /** 待认证的手机号 */
  mobile: string;
  /** 通过获取短信验证码接口获取的短信验证码 */
  verify_code: string;
  /** 小店成员的微信号 */
  wxusername: string;
}
/** 添加待认证的手机号 —— 返回体。 */
export interface EcMerchantPrivatenumberAddphoneResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 认证链接，获取认证链接后在手机上打开进入运营商的页面进行实名认证 */
  qrcode_url?: string;
  /** 认证状态。1=认证成功，2=认证失败，3=运营商审核中 */
  status?: number;
}

/** 获取小店手机号认证状态 —— 请求体。 */
export interface EcMerchantPrivatenumberGetphoneBody {
  /** - */
  mobile: string;
}
/** 获取小店手机号认证状态 —— 返回体。 */
export interface EcMerchantPrivatenumberGetphoneResp {
  /** 认证状态 */
  status?: number;
  /** 审核失败原因 */
  fail_reason?: string;
  /** 返回码 */
  errcode?: number;
  /** 返回码描述 */
  errmsg?: string;
}

/** 获取短信验证码 —— 请求体。 */
export interface EcMerchantPrivatenumberSendverifycodeBody {
  /** 需要实名认证的手机号 */
  mobile: string;
}
/** 获取短信验证码 —— 返回体。 */
export interface EcMerchantPrivatenumberSendverifycodeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取发货协商结果 —— 请求体。 */
export interface EcOrderDeliverynegotiationResultGetBody {
  /** 订单ID数组 */
  order_id_list: unknown[];
}
/** 获取发货协商结果 —— 返回体。 */
export interface EcOrderDeliverynegotiationResultGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 协商结果列表 */
  negotiation_list?: unknown[];
}

/** 拒绝用户修改收货地址申请 —— 请求体。 */
export interface EcOrderAddressmodifyRejectBody {
  /** 订单 ID，可通过 获取订单列表 接口获取 */
  order_id: string;
}
/** 拒绝用户修改收货地址申请 —— 返回体。 */
export interface EcOrderAddressmodifyRejectResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 拒绝待发货前更换sku请求 —— 请求体。 */
export interface EcOrderPreshipmentchangeskuRejectBody {
  /** 订单id */
  order_id: string;
}
/** 拒绝待发货前更换sku请求 —— 返回体。 */
export interface EcOrderPreshipmentchangeskuRejectResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 订单搜索 —— 请求体。 */
export interface EcOrderSearchBody {
  /** 搜索条件，备注：搜索条件下的参数必须至少设置一个字段，否则接口报错 */
  search_condition: Record<string, unknown>;
  /** 不传该参数：搜索全部订单； 0：搜索没有正在售后的订单； 1：搜索正在售后且售后单数量>=1的订单 除了以下几种售后单状态（AfterSaleStatus）外其它的都是正在售后的状态： USER_CA */
  on_aftersale_order_exist?: number;
  /** 订单状态 */
  status?: number;
  /** 每页数量(不超过100) */
  page_size: number;
  /** 分页参数，上一页请求返回 */
  next_key: string;
}
/** 订单搜索 —— 返回体。 */
export interface EcOrderSearchResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 订单号列表 */
  order_id_list?: unknown[];
  /** 分页参数，下一个页请求回传 */
  next_key?: string;
  /** 是否还有下一页, true:有下一页；false:已经结束，没有下一页。 */
  has_more?: boolean;
}

/** 提交发货协商申请 —— 请求体。 */
export interface EcOrderDeliverynegotiationSubmitBody {
  /** 订单ID */
  order_id: string;
  /** 预计发货时间(秒级时间戳) */
  predict_delivery_time: number;
  /** 协商原因 */
  reason: number;
  /** 备注 */
  remark?: string;
}
/** 提交发货协商申请 —— 返回体。 */
export interface EcOrderDeliverynegotiationSubmitResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 上传生鲜质检信息 —— 请求体。 */
export interface EcOrderFreshinspectSubmitBody {
  /** 订单id */
  order_id: string;
  /** 审核项 */
  audit_items: unknown[];
}
/** 上传生鲜质检信息 —— 返回体。 */
export interface EcOrderFreshinspectSubmitResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 添加非卖商品 —— 请求体。 */
export interface EcProductGiftAddBody {
  /** 外部平台自定义非卖商品 ID ，小店后台不作任何唯一性约束，开发者自行保证，一旦添加成功后该字段无法修改，最多 128 字符 */
  out_product_id?: string;
  /** 标题，应至少含 5 个有效字符数（中文文字/英文字母/数字，都各算 1 个有效字符数，且不得仅为数字或英文，不得含非法字符，允许的特殊字符集为：`·~～!@#$%^&()！@#￥%……&*（）-_—— */
  title: string;
  /** 主图，多张，列表，最少 3 张（食品饮料和生鲜类目非卖商品最少 4 张），最多 9 张。不得有重复图片。无形状尺寸要求，最终在商详页会显示为正方形 */
  head_imgs: unknown[];
  /** desc_info */
  desc_info?: Record<string, unknown>;
  /** 非卖商品类目，新类目树结构 */
  cats_v2: unknown[];
  /** 非卖商品参数，部分类目有必填的参数，具体参考文档获取类目信息中的字段 attr.product_attr_list[].is_required */
  attrs?: unknown[];
  /** 商家自定义的非卖商品编码 */
  spu_code?: string;
  /** 品牌 id ，无品牌为“2100000000” */
  brand_id?: string;
  /** 仅支持单 sku ，长度固定为 1 */
  skus: unknown[];
  /** 添加完成后是否立即上架。 1=是，0=否；默认 0 */
  listing?: number;
}
/** 添加非卖商品 —— 返回体。 */
export interface EcProductGiftAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 非卖商品 id */
  product_id?: string;
  /** 创建时间 */
  create_time?: string;
}

/** 获取赠品 —— 请求体。 */
export interface EcProductGiftGetBody {
  /** 商品ID */
  product_id: string;
  /** 默认取1 1:获取线上数据 2:获取草稿数据 3:同时获取线上和草稿数据（注意：上架过的商品才有线上数据） */
  data_type?: number;
}
/** 获取赠品 —— 返回体。 */
export interface EcProductGiftGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 赠品线上数据，入参data_type==2时返回该字段；入参data_type==3时赠品从未上线过，不返回该字段、 */
  product?: Record<string, unknown>;
  /** 赠品草稿数据，入参data_type==1时不返回该字段（参考product返回字段） */
  edit_product?: Record<string, unknown>;
}

/** 获取赠品列表 —— 请求体。 */
export interface EcProductGiftListGetBody {
  /** 商品状态，不填默认拉全部商品（不包含回收站）。0=初始值，5=获取上架商品，6=回收站（只有当传入status==6才会返回回收站中的商品，其他情况不返回），11=获取所有下架商品（包含自主下架和违规 */
  status?: number;
  /** 每页数量（默认 10 ，不超过 30 ） */
  page_size: number;
  /** 由上次请求返回，记录翻页的上下文。传入时会从上次返回的结果往后翻一页，不传默认获取第一页数据。 */
  next_key?: string;
}
/** 获取赠品列表 —— 返回体。 */
export interface EcProductGiftListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 赠品 id 列表 */
  product_ids?: unknown[];
  /** 本次翻页的上下文，用于请求下一页 */
  next_key?: string;
  /** 赠品总数 */
  total_num?: number;
}

/** 在售商品转赠品 —— 请求体。 */
export interface EcProductGiftOnsaleSetBody {
  /** 设置为原始商品 ID */
  product_id: string;
  /** 赠品 SKU 列表 */
  skus: unknown[];
}
/** 在售商品转赠品 —— 返回体。 */
export interface EcProductGiftOnsaleSetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 赠品 id 列表 */
  product_ids?: unknown[];
  /** 本次翻页的上下文，用于请求下一页 */
  next_key?: string;
  /** 赠品总数 */
  total_num?: number;
}

/** 更新非卖商品 —— 请求体。 */
export interface EcProductGiftUpdateBody {
  /** 商品ID */
  product_id: number;
  /** 外部平台自定义非卖商品ID，小店后台不作任何唯一性约束，开发者自行保证，一旦添加成功后该字段无法修改，最多128字符 */
  out_product_id?: string;
  /** 标题，应至少含5个有效字符数（中文文字/英文字母/数字，都各算1个有效字符数，且不得仅为数字或英文，不得含非法字符，允许的特殊字符集为：`·~～!@#$%^&()！@#￥%……&*（）-_——=+[] */
  title: string;
  /** 主图，多张，列表，最少3张（食品饮料和生鲜类目非卖商品最少4张），最多9张。不得有重复图片。无形状尺寸要求，最终在商详页会显示为正方形 */
  head_imgs: unknown[];
  /** 非卖商品参数，部分类目有必填的参数，具体参考文档获取类目信息中的字段attr.product_attr_list[].is_required */
  attrs?: unknown[];
  /** 仅支持单sku，长度固定为1 */
  skus: unknown[];
  /** 添加完成后是否立即上架。1:是；0:否；默认0 */
  listing?: number;
  /** 非卖商品类目，新类目树结构 */
  cats_v2: unknown[];
  /** 商家自定义的非卖商品编码 */
  spu_code?: string;
  /** 品牌id，无品牌为“2100000000” */
  brand_id?: string;
}
/** 更新非卖商品 —— 返回体。 */
export interface EcProductGiftUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 小店内部非卖商品ID */
  product_id?: number;
  /** 更新时间 */
  update_time?: string;
}

/** 更新赠品库存 —— 请求体。 */
export interface EcProductGiftStockUpdateBody {
  /** 内部赠品ID */
  product_id: string;
  /** 内部 skuID */
  sku_id: string;
  /** 修改类型。1=增加，2=减少，3=设置。建议使用 1 或 2 ，不建议使用 3 ，因为使用 3 在高并发场景可能会出现预期外表现 */
  diff_type: number;
  /** 增加、减少或者设置的库存值 */
  num: number;
}
/** 更新赠品库存 —— 返回体。 */
export interface EcProductGiftStockUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 创建赠品活动 —— 请求体。 */
export interface EcProductActivityAddBody {
  /** 买赠活动 id ，如果不填，则自动生成 */
  activity_id?: number;
  /** 买赠活动标题 */
  title: string;
  /** 买赠活动开始时间(秒级时间戳)，只能取大于等于当前时间的值，且距离当前时间不得超过 30 天 */
  start_time: number;
  /** 买赠活动结束时间(秒级时间戳)，必须大于当前时间以及 start_time ，且活动持续时间(end_time-start_time)需大于等于 10 分钟，小于等于 30 天 */
  end_time: number;
  /** 活动详情 */
  detail: Record<string, unknown>;
}
/** 创建赠品活动 —— 返回体。 */
export interface EcProductActivityAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 买赠活动 ID ，创建成功后返回 */
  activity_id?: string;
}

/** 删除赠品活动 —— 请求体。 */
export interface EcProductActivityDelBody {
  /** 买赠活动 ID */
  activity_id: number;
}
/** 删除赠品活动 —— 返回体。 */
export interface EcProductActivityDelResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 停止赠品活动 —— 请求体。 */
export interface EcProductActivityStopBody {
  /** 买赠活动 ID */
  activity_id: string;
}
/** 停止赠品活动 —— 返回体。 */
export interface EcProductActivityStopResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 添加限时抢购任务 —— 请求体。 */
export interface EcProductLimiteddiscounttaskAddBody {
  /** 参与抢购的商品 ID */
  product_id: string;
  /** 限时抢购任务开始时间(秒级时间戳)，只能取大于等于当前时间的值(允许有最多十分钟的误差)，且距离当前时间不得超过一年（ 365 天） */
  start_time: number;
  /** 限时抢购任务结束时间(秒级时间戳)，必须大于当前时间以及 start_time ，且距离当前时间不得超过一年（ 365 天） */
  end_time: number;
  /** limited_discount_skus */
  limited_discount_skus: unknown[];
  /** 活动名称(仅商家可见，最长 50 个字符) */
  title?: string;
  /** 是否开启限购 */
  is_limit_purchase?: boolean;
  /** 限购数量（ is_limit_purchase 为 true 时有效，需大于 0 ） */
  limit_purchase_num?: number;
}
/** 添加限时抢购任务 —— 返回体。 */
export interface EcProductLimiteddiscounttaskAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 限时抢购任务 ID ，创建成功后返回 */
  task_id?: string;
}

/** 删除限时抢购任务 —— 请求体。 */
export interface EcProductLimiteddiscounttaskDeleteBody {
  /** 限时抢购任务 ID */
  task_id: string;
}
/** 删除限时抢购任务 —— 返回体。 */
export interface EcProductLimiteddiscounttaskDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取限时抢购任务列表 —— 请求体。 */
export interface EcProductLimiteddiscounttaskListGetBody {
  /** 指定获取某个 status 状态下的限时抢购任务列表，如果不填，则获取所有状态下的限时抢购任务列表。0=限时抢购任务创建完成，未开始，此时不能直接调用删除接口，1=限时抢购任务进行中，此时不能直接调用 */
  status?: number;
  /** 每页数量(默认 10 ，不超过 50) */
  page_size: number;
  /** 由上次请求返回，记录翻页的上下文，传入时会从上次返回的结果往后翻一页，不传默认获取第一页数据 */
  next_key?: string;
}
/** 获取限时抢购任务列表 —— 返回体。 */
export interface EcProductLimiteddiscounttaskListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 限时抢购信息 */
  limited_discount_tasks?: unknown[];
  /** 本次翻页的上下文，用于请求下一页 */
  next_key?: string;
  /** 商品总数 */
  total_num?: number;
}

/** 停止限时抢购任务 —— 请求体。 */
export interface EcProductLimiteddiscounttaskStopBody {
  /** 限时抢购任务 ID */
  task_id: string;
}
/** 停止限时抢购任务 —— 返回体。 */
export interface EcProductLimiteddiscounttaskStopResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 更新限时抢购任务 —— 请求体。 */
export interface EcProductLimiteddiscounttaskUpdateBody {
  /** 限时抢购任务ID */
  task_id: string;
  /** 当前活动状态（乐观锁校验，传入时校验与实际状态是否一致。0=待开始, 1=进行中） */
  status: number;
  /** 限时抢购任务开始时间(秒级时间戳) */
  start_time: number;
  /** 限时抢购任务结束时间(秒级时间戳) */
  end_time: number;
  /** 活动名称(仅商家可见，最长50个字符) */
  title: string;
  /** SKU抢购信息列表，修改SKU时必须传入product_id */
  limited_discount_skus: unknown[];
}
/** 更新限时抢购任务 —— 返回体。 */
export interface EcProductLimiteddiscounttaskUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: number;
  /** 限时抢购任务ID */
  task_id?: number;
  /** 活动名称 */
  title?: string;
}

/** 添加商品 —— 请求体。 */
export interface EcProductAddBody {
  /** 商家自定义商品 ID ，小店后台不作任何唯一性约束，开发者自行保证，一旦添加成功后该字段无法修改，最多 128 字符 */
  out_product_id?: string;
  /** 标题，应至少含 5 个有效字符数（中文文字/英文字母/数字，都各算 1 个有效字符数，且不得仅为数字或英文，不得含非法字符，允许的特殊字符集为：·~～!@#$%^&()！@#￥%……&*（）-_——= */
  title: string;
  /** 副标题，最多 18 字符。该字段已废弃 */
  sub_title?: string;
  /** 商品短标题，最多 20 字符，用在礼物单等场景的对外展示上，如果没有填写该字段，默认展示商品标题 title 字段的内容。 */
  short_title?: string;
  /** 主图，多张，列表，最少 3 张（食品饮料和生鲜类目商品最少 4 张），最多 9 张。不得有重复图片。无形状尺寸要求，最终在商详页会显示为正方形 */
  head_imgs: unknown[];
  /** 发货方式： 0-快递发货，1-无需快递，手机号发货，3-无需快递，可选发货账号类型，默认为 0 ，若为无需快递，则无需填写运费模版 id */
  deliver_method: number;
  /** 发货账号： 1-微信 openid ，2-QQ 号，3-手机号，4-邮箱。可多选，只有 deliver_method=3 时，本参数有意义。且当发货账号为微信、 QQ 和邮箱时，需要更新订单接口读取详 */
  deliver_acct_type: unknown[];
  /** 商品详情 */
  desc_info?: Record<string, unknown>;
  /** 商品类目，大小恒等于 3 （一二三级类目），商品上架后不可修改一级类目 */
  cats: unknown[];
  /** 商品类目，新类目树结构，商品上架后不可修改一级类目 */
  cats_v2: unknown[];
  /** 商品参数，部分类目有必填的参数，具体参考获取类目信息中的字段 attr.product_attr_list[].is_required */
  attrs?: unknown[];
  /** 商家编码 */
  spu_code?: string;
  /** 品牌 id ，无品牌为“2100000000” */
  brand_id?: string;
  /** 已废弃，该字段被 product_qua_infos 代替 */
  qualifications?: unknown[];
  /** 商品资质列表，取代 qualifications 字段。注意：不同类目下必填的资质要求不同，具体参考文档获取类目信息中的字段 product_qua_list[] */
  product_qua_infos?: unknown[];
  /** 运费信息 */
  express_info?: Record<string, unknown>;
  /** 售后说明 */
  aftersale_desc?: string;
  /** 限购信息 */
  limited_info?: Record<string, unknown>;
  /** 额外服务 [ 为提升商家发品成功率，若入参信息不符合平台规则（详见各种服务的相关文档），平台会将其优化至符合规则的参数值。如，某类目要求发品时关闭运费险，但商家入参为空或开启运费险，则平台会将其调整为 */
  extra_service: Record<string, unknown>;
  /** 商品 SKU ，长度最少为 1 ，最大为 500 */
  skus: unknown[];
  /** 添加完成后是否立即上架。 1=是，0=否；默认 0 */
  listing?: number;
  /** 售后/退货地址 */
  after_sale_info?: Record<string, unknown>;
  /** 尺码表 */
  size_chart?: Record<string, unknown>;
  /** 是否在店铺首页隐藏。 0=不隐藏，1=隐藏 */
  hide_in_window?: number;
  /** 发布模式。 0=普通模式，1=极简模式 */
  release_mode?: number;
  /** 商品待开售信息 */
  timing_onsale_info?: Record<string, unknown>;
  /** 商品头图视频，最多上传 1 个。不传递该字段时不会删除商品原有视频，如果需要删除视频，请显式传入一个空的 video_url 字符串。 */
  head_videos?: Record<string, unknown>;
  /** spu 维度配置全部 sku 预售规则 */
  spu_deliver_info?: Record<string, unknown>;
  /** 供货货品（商品来源）信息 */
  supply_source?: Record<string, unknown>;
}
/** 添加商品 —— 返回体。 */
export interface EcProductAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** data */
  data?: Record<string, unknown>;
}

/** 商品立即开售 —— 请求体。 */
export interface EcProductBegintimingsaleBody {
  /** 商品 ID */
  product_id: number;
  /** 定时开售任务 ID, 商品里的字段 */
  task_id: number;
}
/** 商品立即开售 —— 返回体。 */
export interface EcProductBegintimingsaleResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 撤回商品审核 —— 请求体。 */
export interface EcProductAuditCancelBody {
  /** 商品 ID （赠品 ID ）； */
  product_id: string;
}
/** 撤回商品审核 —— 返回体。 */
export interface EcProductAuditCancelResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 取消商品开售 —— 请求体。 */
export interface EcProductCanceltimingsaleBody {
  /** 商品 ID */
  product_id: number;
}
/** 取消商品开售 —— 返回体。 */
export interface EcProductCanceltimingsaleResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 发品前校验 —— 请求体。 */
export interface EcProductCategoryprecheckBody {
  /** 叶子类目 id */
  cat_id?: number;
}
/** 发品前校验 —— 返回体。 */
export interface EcProductCategoryprecheckResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 检查类目是否可用。false=类目不可用, 请参考原因解决，true=类目正常 */
  all_pass?: boolean;
  /** 校验不通过的原因（可能为多个） */
  fail_reasons?: unknown[];
}

/** 删除商品 —— 请求体。 */
export interface EcProductDeleteBody {
  /** 商品 ID （赠品 ID ） */
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
  /** 商品 ID （赠品 ID ） */
  product_id: string;
}
/** 下架商品 —— 返回体。 */
export interface EcProductDelistingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 站内外商品属性映射 —— 请求体。 */
export interface EcProductExternalproductmappingBody {
  /** 叶子类目 id */
  cat_id: number;
  /** 外部商品属性 key */
  external_attribute_name: string;
  /** 外部商品属性值 */
  external_attribute_value?: string;
  /** 外部商品类目名称 */
  external_category_name?: string;
}
/** 站内外商品属性映射 —— 返回体。 */
export interface EcProductExternalproductmappingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 外部商品属性 key */
  external_attribute_name?: string;
  /** 外部商品属性值 */
  external_attribute_value?: string;
  /** 内部商品属性 key */
  internal_attribute_name?: string;
  /** 内部商品属性值, 可能为多选 */
  internal_attribute_value?: unknown[];
}

/** 商品属性映射及推荐 —— 请求体。 */
export interface EcProductExternalproductmappingnewBody {
  /** 叶子类目 id */
  cat_id: number;
  /** 外部商品类目名称 */
  external_category_name?: string;
  /** 主图，至少传一张 */
  head_imgs: unknown[];
  /** 详情图 */
  detail_imgs?: unknown[];
  /** 商品标题 */
  title: string;
  /** 属性列表 */
  external_attributes?: unknown[];
}
/** 商品属性映射及推荐 —— 返回体。 */
export interface EcProductExternalproductmappingnewResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 映射属性结果 */
  attributes?: unknown[];
}

/** 获取商品 —— 请求体。 */
export interface EcProductGetBody {
  /** 商品ID */
  product_id: string;
  /** 默认取1 1:获取线上数据 2:获取草稿数据 3:同时获取线上和草稿数据（注意：上架过的商品才有线上数据） */
  data_type?: number;
}
/** 获取商品 —— 返回体。 */
export interface EcProductGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品线上数据，入参data_type==2时不返回该字段；入参data_type==3且商品从未上架过，不返回该字段 */
  product?: Record<string, unknown>;
  /** 商品草稿数据，入参data_type==1时不返回该字段 */
  edit_product?: Record<string, unknown>;
  /** 当日售卖上限提醒，当店铺受到售卖管控时返回，没有返回本字段表示没有无额外限制 */
  sale_limit_info?: Record<string, unknown>;
  /** 商品信息质量 */
  info_score?: Record<string, unknown>;
  /** 商品高价预警 */
  cmp_price_info?: Record<string, unknown>;
  /** 审核信息 */
  audit_info?: Record<string, unknown>;
}

/** 获取商品提审限额 —— 请求体（文档未列字段，放行任意键）。 */
export type EcProductGetauditquotaBody = Record<string, unknown>;
/** 获取商品提审限额 —— 返回体。 */
export interface EcProductGetauditquotaResp {
  /** - */
  errcode?: number;
  /** - */
  errmsg?: string;
  /** - */
  audit_quota?: Record<string, unknown>;
}

/** 获取商品上架策略 —— 请求体（文档未列字段，放行任意键）。 */
export type EcProductAuditstrategyGetBody = Record<string, unknown>;
/** 获取商品上架策略 —— 返回体。 */
export interface EcProductAuditstrategyGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 上架策略 */
  audit_strategy?: Record<string, unknown>;
}

/** 获取商品H5短链 —— 请求体。 */
export interface EcProductH5urlGetBody {
  /** 商品 ID */
  product_id: string;
  /** 小店通过关联账号绑定的企业微信 id ，获取方式见获取关联账号企微 id */
  wecom_corp_id?: string;
  /** 小店通过关联账号绑定的企业微信下的成员 id ，获取方式见获取关联账号企微 id */
  wecom_user_id?: string;
}
/** 获取商品H5短链 —— 返回体。 */
export interface EcProductH5urlGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品 H5 短链 */
  product_h5url?: string;
}

/** 获取商品列表 —— 请求体。 */
export interface EcProductListGetBody {
  /** 商品状态，不填默认拉全部商品（不包含从未上架的草稿和回收站商品） */
  status?: number;
  /** 每页数量（默认 10 ，不超过 30 ） */
  page_size: number;
  /** 由上次请求返回，记录翻页的上下文。传入时会从上次返回的结果往后翻一页，不传默认获取第一页数据。 */
  next_key?: string;
}
/** 获取商品列表 —— 返回体。 */
export interface EcProductListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品 id 列表 */
  product_ids?: unknown[];
  /** 本次翻页的上下文，用于请求下一页 */
  next_key?: string;
  /** 商品总数 */
  total_num?: number;
}

/** 获取商品二维码 —— 请求体。 */
export interface EcProductQrcodeGetBody {
  /** 商品 ID */
  product_id: string;
  /** 二维码类型，缺省值为 1。1=二维码，2=标准物料，3=送礼物物料 */
  qrcode_type?: number;
  /** 小店通过关联账号绑定的企业微信 id ，获取方式见获取关联账号企微 id */
  wecom_corp_id?: string;
  /** 小店通过关联账号绑定的企业微信下的成员 id ，获取方式见获取关联账号企微 id */
  wecom_user_id?: string;
}
/** 获取商品二维码 —— 返回体。 */
export interface EcProductQrcodeGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品二维码链接 */
  product_qrcode?: string;
}

/** 获取商品Scheme码 —— 请求体。 */
export interface EcProductSchemeGetBody {
  /** 商品 ID */
  product_id: string;
  /** 来源 appid */
  from_appid: string;
  /** 过期时间，单位秒 */
  expire: number;
  /** 附加信息 */
  ext_info?: string;
}
/** 获取商品Scheme码 —— 返回体。 */
export interface EcProductSchemeGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品跳转 scheme 码 */
  openlink?: string;
}

/** 获取商品口令 —— 请求体。 */
export interface EcProductTaglinkGetBody {
  /** 商品 ID */
  product_id: string;
  /** 小店通过关联账号绑定的企业微信 id ，获取方式见获取关联账号企微 id */
  wecom_corp_id?: string;
  /** 小店通过关联账号绑定的企业微信下的成员 id ，获取方式见获取关联账号企微 id */
  wecom_user_id?: string;
}
/** 获取商品口令 —— 返回体。 */
export interface EcProductTaglinkGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品微信口令（只支持微信内打开） */
  product_taglink?: string;
}

/** 上架商品 —— 请求体。 */
export interface EcProductListingBody {
  /** 商品 ID （赠品 ID ）； */
  product_id: string;
}
/** 上架商品 —— 返回体。 */
export interface EcProductListingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 类目推荐 —— 请求体。 */
export interface EcProductCategoryClassifyBody {
  /** 请求类型。1=基于标题和主图推断商品类目，2=基于商品内容判断是否类目错放 */
  req_type: number;
  /** 商品标题 */
  title?: string;
  /** 商品主图, 至少传入一个有效的头图 url */
  head_imgs: unknown[];
  /** 类目 id, 请求类型为 2 时必填 */
  cat_id?: string;
}
/** 类目推荐 —— 返回体。 */
export interface EcProductCategoryClassifyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 推荐的多个多级类目信息，每个类目中包含商家是否有权限 */
  categories?: unknown[];
  /** 是否类目错放，请求类型为 2 时才返回该字段 */
  wrong_cat?: boolean;
}

/** 商品品牌推荐 —— 请求体。 */
export interface EcProductProductbrandrecommendBody {
  /** 叶子类目 id */
  cat_id: number;
  /** 主图，至少传一张 */
  head_imgs: unknown[];
  /** 详情图 */
  detail_imgs?: unknown[];
  /** 商品标题 */
  title: string;
}
/** 商品品牌推荐 —— 返回体。 */
export interface EcProductProductbrandrecommendResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 品牌 id */
  brand_id?: number;
  /** 品牌中文名称 */
  brand_name_chinese?: string;
  /** 品牌英文名称 */
  brand_name_english?: string;
}

/** 设置商品上架策略 —— 请求体。 */
export interface EcProductAuditstrategySetBody {
  /** 上架策略 */
  audit_strategy: Record<string, unknown>;
}
/** 设置商品上架策略 —— 返回体。 */
export interface EcProductAuditstrategySetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 更新商品 —— 请求体。 */
export interface EcProductUpdateBody {
  /** 小店内部商品 ID */
  product_id?: string;
  /** 标题，应至少含 5 个有效字符数（中文文字/英文字母/数字，都各算 1 个有效字符数，且不得仅为数字或英文，不得含非法字符，允许的特殊字符集为：·~～!@#$%^&()！@#￥%……&*（）-_——= */
  title: string;
  /** 副标题，最多 18 字符。该字段已废弃 */
  sub_title?: string;
  /** 商品短标题，最多 20 字符，用在礼物单等场景的对外展示上，如果没有填写该字段，默认展示商品标题 title 字段的内容。 */
  short_title?: string;
  /** 主图，多张，列表，最少 3 张（食品饮料和生鲜类目商品最少 4 张），最多 9 张。不得有重复图片。无形状尺寸要求，最终在商详页会显示为正方形 */
  head_imgs: unknown[];
  /** 发货方式： 0-快递发货，1-无需快递，手机号发货，3-无需快递，可选发货账号类型，默认为 0 ，若为无需快递，则无需填写运费模版 id */
  deliver_method: number;
  /** 发货账号： 1-微信 openid ，2-QQ 号，3-手机号，4-邮箱。可多选，只有 deliver_method=3 时，本参数有意义。且当发货账号为微信、 QQ 和邮箱时，需要更新订单接口读取详 */
  deliver_acct_type: unknown[];
  /** 商品详情 */
  desc_info?: Record<string, unknown>;
  /** 商品类目，大小恒等于 3 （一二三级类目），商品上架后不可修改一级类目 */
  cats: unknown[];
  /** 商品类目，新类目树结构，商品上架后不可修改一级类目 */
  cats_v2: unknown[];
  /** 商品参数，部分类目有必填的参数，具体参考获取类目信息中的字段 attr.product_attr_list[].is_required */
  attrs?: unknown[];
  /** 商家编码 */
  spu_code?: string;
  /** 品牌 id ，无品牌为“2100000000” */
  brand_id?: string;
  /** 已废弃，该字段被 product_qua_infos 代替 */
  qualifications?: unknown[];
  /** 商品资质列表，取代 qualifications 字段。注意：不同类目下必填的资质要求不同，具体参考文档获取类目信息中的字段 product_qua_list[] */
  product_qua_infos?: unknown[];
  /** 运费信息 */
  express_info?: Record<string, unknown>;
  /** 售后说明 */
  aftersale_desc?: string;
  /** 限购信息 */
  limited_info?: Record<string, unknown>;
  /** 额外服务 */
  extra_service: Record<string, unknown>;
  /** 商品 SKU ，长度最少为 1 ，最大为 500 */
  skus: unknown[];
  /** 添加完成后是否立即上架。 1=是，0=否；默认 0 */
  listing?: number;
  /** 售后/退货地址 */
  after_sale_info?: Record<string, unknown>;
  /** 尺码表 */
  size_chart?: Record<string, unknown>;
  /** 是否在店铺首页隐藏。 0=不隐藏，1=隐藏 */
  hide_in_window?: number;
  /** 商品待开售信息 */
  timing_onsale_info?: Record<string, unknown>;
  /** 发布模式。 0=普通模式，1=极简模式 */
  release_mode?: number;
  /** 商品头图视频，最多上传 1 个。不传递该字段时不会删除商品原有视频，如果需要删除视频，请显式传入一个空的 video_url 字符串。 */
  head_videos?: Record<string, unknown>;
  /** spu 维度配置全部 sku 预售规则 */
  spu_deliver_info?: Record<string, unknown>;
  /** 供货货品（商品来源）信息 */
  supply_source?: Record<string, unknown>;
}
/** 更新商品 —— 返回体。 */
export interface EcProductUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品信息 */
  data?: Record<string, unknown>;
}

/** 免审更新商品 —— 请求体。 */
export interface EcProductAuditfreeBody {
  /** 平台生成的 id */
  product_id: number;
  /** 商品编码 */
  spu_code?: string;
  /** 需要进行更新的 sku */
  skus: unknown[];
  /** 限购信息 */
  limited_info?: Record<string, unknown>;
  /** 运费信息 */
  express_info?: Record<string, unknown>;
  /** extra_service */
  extra_service?: Record<string, unknown>;
  /** 发货方式，若为无需快递（仅对部分类目开放），则无需填写运费模版 id 。 0=快递发货（默认）， 1=无需快递 */
  deliver_method?: number;
  /** 是否在店铺首页隐藏。 0=不隐藏，1=隐藏 */
  hide_in_window?: number;
  /** 商品待开售信息 */
  timing_onsale_info?: Record<string, unknown>;
  /** spu 维度配置全部 sku 预售规则 */
  spu_deliver_info?: Record<string, unknown>;
  /** 售后/退货地址 */
  after_sale_info?: Record<string, unknown>;
}
/** 免审更新商品 —— 返回体。 */
export interface EcProductAuditfreeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 新增第三方货源信息 —— 请求体。 */
export interface EcProductAddproductthirdpartysourceBody {
  /** 场景值 */
  scene_value: number;
  /** 商品发布方式，scene_value == 3(其他场景) 时 必填 */
  publish_method?: number;
  /** 货主 */
  supplier: Record<string, unknown>;
  /** 货主店铺经营表现 */
  supplier_shop_performance?: Record<string, unknown>;
  /** 商品在货源平台的信息 */
  product_source_info: Record<string, unknown>;
}
/** 新增第三方货源信息 —— 返回体。 */
export interface EcProductAddproductthirdpartysourceResp {
  /** 货源id */
  third_party_source_id?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 批量获取库存信息 —— 请求体。 */
export interface EcProductStockBatchgetBody {
  /** 商品 ID 列表，上限为 50 */
  product_id: unknown[];
  /** 不填默认为 0 */
  stock_type?: number;
  /** 达人的视频号 finder_id ，若 StockType 为 1 则必填 */
  finder_id?: string;
  /** 库存类型 id ，若 StockType 不为 0 且不为 1 则必填 */
  stock_type_id?: string;
}
/** 批量获取库存信息 —— 返回体。 */
export interface EcProductStockBatchgetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** data */
  data?: Record<string, unknown>;
}

/** 获取库存 —— 请求体。 */
export interface EcProductStockGetBody {
  /** 内部商品 ID */
  product_id: string;
  /** 内部 sku_id */
  sku_id: string;
}
/** 获取库存 —— 返回体。 */
export interface EcProductStockGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** data */
  data?: Record<string, unknown>;
}

/** 获取库存流水 —— 请求体。 */
export interface EcProductStockGetflowBody {
  /** 内部商品 ID */
  product_id: number;
  /** 内部 sku_id */
  sku_id: number;
  /** 库存类型 */
  stock_type: number;
  /** 达人的视频号 finder_id ，若 StockType 为 1 则必填 */
  finder_id?: string;
  /** 时间范围开始时间戳，秒级 */
  begin_time: number;
  /** 时间范围结束时间戳，秒级 */
  end_time: number;
  /** 库存事件类型 */
  op_type_list?: unknown[];
  /** 每页数量 */
  page_size: number;
  /** 由上次请求返回，记录翻页的上下文。传入时会从上次返回的结果往后翻一页，不传默认获取第一页数据 */
  next_key?: string;
  /** 库存类型 id ，若 StockType 不为 0 且不为 1 则必填 */
  stock_type_id?: string;
}
/** 获取库存流水 —— 返回体。 */
export interface EcProductStockGetflowResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** data */
  data?: Record<string, unknown>;
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

/** 获取授权视频号列表 —— 请求体（文档未列字段，放行任意键）。 */
export type EcCompassShopFinderAuthorizationListGetBody = Record<string, unknown>;
/** 获取授权视频号列表 —— 返回体。 */
export interface EcCompassShopFinderAuthorizationListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 授权视频号id列表 */
  authorized_finder_id_list?: unknown[];
}

/** 获取带货达人列表 —— 请求体。 */
export interface EcCompassShopFinderListGetBody {
  /** 日期，格式YYYYMMDD */
  ds: string;
  /** 填'v2'会返回带货者身份的id */
  version?: string;
}
/** 获取带货达人列表 —— 返回体。 */
export interface EcCompassShopFinderListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 视频号列表 */
  finder_list?: unknown[];
}

/** 获取带货数据概览 —— 请求体。 */
export interface EcCompassShopFinderOverallGetBody {
  /** 日期，格式YYYYMMDD */
  ds: string;
}
/** 获取带货数据概览 —— 返回体。 */
export interface EcCompassShopFinderOverallGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 带货数据 */
  data?: Record<string, unknown>;
}

/** 获取带货达人商品列表 —— 请求体。 */
export interface EcCompassShopFinderProductListGetBody {
  /** 日期，格式YYYYMMDD */
  ds: string;
  /** 视频号ID（finder_id、talent_id、mp_id三者必填其一） */
  finder_id?: string;
  /** 达人号ID（finder_id、talent_id、mp_id三者必填其一） */
  talent_id?: string;
  /** 公众号ID（finder_id、talent_id、mp_id三者必填其一） */
  mp_id?: string;
}
/** 获取带货达人商品列表 —— 返回体。 */
export interface EcCompassShopFinderProductListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品信息 */
  product_list?: unknown[];
}

/** 获取带货达人详情 —— 请求体。 */
export interface EcCompassShopFinderProductOverallGetBody {
  /** 日期，格式YYYYMMDD */
  ds: string;
  /** 视频号id（finder_id、talent_id、mp_id三者必填其一） */
  finder_id?: string;
  /** 达人号ID（finder_id、talent_id、mp_id三者必填其一） */
  talent_id?: string;
  /** 公众号ID（finder_id、talent_id、mp_id三者必填其一） */
  mp_id?: string;
}
/** 获取带货达人详情 —— 返回体。 */
export interface EcCompassShopFinderProductOverallGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** - */
  data?: Record<string, unknown>;
}

/** 获取店铺开播列表 —— 请求体。 */
export interface EcCompassShopLiveListGetBody {
  /** 日期，格式YYYYMMDD */
  ds: string;
  /** 视频号ID */
  finder_id: string;
}
/** 获取店铺开播列表 —— 返回体。 */
export interface EcCompassShopLiveListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 开播列表 */
  live_list?: unknown[];
}

/** 获取电商数据概览 —— 请求体。 */
export interface EcCompassShopOverallGetBody {
  /** 日期，格式YYYYMMDD */
  ds: string;
}
/** 获取电商数据概览 —— 返回体。 */
export interface EcCompassShopOverallGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 电商数据 */
  data?: Record<string, unknown>;
}

/** 获取商品详细信息 —— 请求体。 */
export interface EcCompassShopProductDataGetBody {
  /** 日期，格式YYYYMMDD */
  ds: string;
  /** 商品id */
  product_id: number;
}
/** 获取商品详细信息 —— 返回体。 */
export interface EcCompassShopProductDataGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品详细信息 */
  product_info?: Record<string, unknown>;
}

/** 获取商品列表 —— 请求体。 */
export interface EcCompassShopProductListGetBody {
  /** 日期，格式YYYYMMDD */
  ds: string;
  /** 分页参数，如果不填，默认只会返回10条商品数据 */
  limit?: number;
  /** 分页参数，如果不填，默认只会返回10条商品数据 */
  offset?: number;
}
/** 获取商品列表 —— 返回体。 */
export interface EcCompassShopProductListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品列表 */
  product_list?: unknown[];
  /** 一共有多少条商品信息 */
  total_count?: number;
}

/** 获取店铺人群数据 —— 请求体。 */
export interface EcCompassShopSaleProfileDataGetBody {
  /** 日期，格式YYYYMMDD */
  ds: string;
  /** 用户类型 */
  type: number;
}
/** 获取店铺人群数据 —— 返回体。 */
export interface EcCompassShopSaleProfileDataGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 店铺人群数据 */
  data?: Record<string, unknown>;
}

/** 创建优惠券 —— 请求体。 */
export interface EcCouponCreateBody {
  /** 优惠券类型 */
  type: number;
  /** 优惠券名称，最长 10 个中文字符 */
  name: string;
  /** 推广信息 */
  promote_info: Record<string, unknown>;
  /** 优惠信息 */
  discount_info?: Record<string, unknown>;
  /** 领取信息 */
  receive_info: Record<string, unknown>;
  /** 有效期信息 */
  valid_info?: Record<string, unknown>;
  /** 扩展信息 */
  ext_info?: Record<string, unknown>;
  /** 自动生效信息 */
  auto_valid_info?: Record<string, unknown>;
}
/** 创建优惠券 —— 返回体。 */
export interface EcCouponCreateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 返回数据 */
  data?: Record<string, unknown>;
}

/** 获取优惠券详情 —— 请求体。 */
export interface EcCouponGetBody {
  /** 优惠券 ID */
  coupon_id: string;
}
/** 获取优惠券详情 —— 返回体。 */
export interface EcCouponGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 优惠券信息 */
  coupon?: Record<string, unknown>;
}

/** 获取优惠券ID列表 —— 请求体。 */
export interface EcCouponGetListBody {
  /** 优惠券状态 */
  status: number;
  /** 页码（最小填 1） */
  page: number;
  /** 每页数量（不超过 200） */
  page_size: number;
  /** 翻页上下文，第一次请求填空，后续请求填上次返回值 */
  page_ctx: string;
}
/** 获取优惠券ID列表 —— 返回体。 */
export interface EcCouponGetListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 优惠券列表 */
  coupons?: unknown[];
  /** 优惠券总数 */
  total_num?: number;
  /** 翻页上下文 */
  page_ctx?: string;
}

/** 获取用户优惠券详情 —— 请求体。 */
export interface EcCouponGetUserCouponBody {
  /** 用户优惠券 ID */
  user_coupon_id: string;
  /** 用户 openid */
  openid: string;
}
/** 获取用户优惠券详情 —— 返回体。 */
export interface EcCouponGetUserCouponResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户 openid */
  openid?: string;
  /** 用户 unionid，小店接入 open 平台后生成的用户券会返回 */
  unionid?: string;
  /** 用户优惠券详情 */
  user_coupon?: Record<string, unknown>;
}

/** 获取用户优惠券ID列表 —— 请求体。 */
export interface EcCouponGetUserCouponListBody {
  /** 用户 openid */
  openid: string;
  /** 优惠券状态，不填时获取所有状态 */
  status?: number;
  /** 页码 */
  page: number;
  /** 每页数量 */
  page_size: number;
  /** 翻页上下文，第一次请求填空，后续请求填上次返回值 */
  page_ctx: string;
}
/** 获取用户优惠券ID列表 —— 返回体。 */
export interface EcCouponGetUserCouponListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 优惠券列表 */
  user_coupon_list?: unknown[];
  /** 翻页上下文 */
  page_ctx?: string;
}

/** 更新优惠券内容 —— 请求体。 */
export interface EcCouponUpdateBody {
  /** 优惠券 ID */
  coupon_id: string;
  /** 优惠券类型 */
  type: number;
  /** 优惠券名称，最长 10 个中文字符 */
  name: string;
  /** 推广信息 */
  promote_info: Record<string, unknown>;
  /** 优惠信息 */
  discount_info?: Record<string, unknown>;
  /** 领取信息 */
  receive_info: Record<string, unknown>;
  /** 有效期信息 */
  valid_info: Record<string, unknown>;
  /** 扩展信息 */
  ext_info?: Record<string, unknown>;
}
/** 更新优惠券内容 —— 返回体。 */
export interface EcCouponUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 返回数据 */
  data?: Record<string, unknown>;
}

/** 更新优惠券状态 —— 请求体。 */
export interface EcCouponUpdateStatusBody {
  /** 优惠券 ID */
  coupon_id: string;
  /** 目标状态。2=生效，4=作废，5=删除 */
  status: number;
}
/** 更新优惠券状态 —— 返回体。 */
export interface EcCouponUpdateStatusResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取店铺收藏的人数 —— 请求体（文档未列字段，放行任意键）。 */
export type EcFavoritesCountGetBody = Record<string, unknown>;
/** 获取店铺收藏的人数 —— 返回体。 */
export interface EcFavoritesCountGetResp {
  /** 店铺首页收藏用户数 */
  favor_uv_acc_shop_homepage?: number;
  /** 订单详情页收藏用户数 */
  favor_uv_acc_order_detail?: number;
  /** 商品详情页收藏用户数 */
  favor_uv_acc_product_detail?: number;
  /** 其他场景收藏用户数 */
  favor_uv_acc_other_scene?: number;
  /** 所有收藏用户数 */
  favor_uv_acc_all?: number;
  /** - */
  errcode?: number;
  /** - */
  errmsg?: string;
}

/** 根据卡号查银行信息 —— 请求体。 */
export interface ShopFundsGetbankbynumBody {
  /** 银行卡号 */
  account_number: string;
}
/** 根据卡号查银行信息 —— 返回体。 */
export interface ShopFundsGetbankbynumResp {
  /** 银行信息 */
  data?: unknown[];
  /** 总数 */
  total_count?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 错误码 */
  errcode?: number;
}

/** 搜索银行列表 —— 请求体。 */
export interface ShopFundsGetbanklistBody {
  /** 偏移量 */
  offset?: number;
  /** 每页数据大小 */
  limit?: number;
  /** 银行关键字 */
  key_words?: string;
  /** 银行类型(1:对私银行,2:对公银行; 默认对公) */
  bank_type?: number;
}
/** 搜索银行列表 —— 返回体。 */
export interface ShopFundsGetbanklistResp {
  /** 银行账号数据 */
  data?: unknown[];
  /** 错误信息 */
  errmsg?: string;
  /** 错误码 */
  errcode?: number;
}

/** 查询城市列表 —— 请求体。 */
export interface ShopFundsGetcityBody {
  /** 省份编码 */
  province_code: number;
}
/** 查询城市列表 —— 返回体。 */
export interface ShopFundsGetcityResp {
  /** 城市信息列表 */
  data?: unknown[];
  /** 总数 */
  total_count?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 错误码 */
  errcode?: number;
}

/** 查询大陆银行省份列表 —— 请求体（文档未列字段，放行任意键）。 */
export type ShopFundsGetprovinceBody = Record<string, unknown>;
/** 查询大陆银行省份列表 —— 返回体。 */
export interface ShopFundsGetprovinceResp {
  /** 省份信息 */
  data?: unknown[];
  /** 总数 */
  total_count?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 错误码 */
  errcode?: number;
}

/** 查询支行列表 —— 请求体。 */
export interface ShopFundsGetsubbranchBody {
  /** 银行编码,通过查询银行信息或者搜索银行信息获取 */
  bank_code: string;
  /** 城市编号,通过查询城市列表获取 */
  city_code: number;
  /** 偏移量 */
  offset?: number;
  /** 限制个数 */
  limit?: number;
}
/** 查询支行列表 —— 返回体。 */
export interface ShopFundsGetsubbranchResp {
  /** 其他银行信息 */
  data?: unknown[];
  /** 总数 */
  total_count?: number;
  /** 当前分页数量 */
  count?: number;
  /** 银行编码 */
  account_bank_code?: number;
  /** 银行别名 */
  bank_alias?: string;
  /** 银行别名编码 */
  bank_alias_code?: string;
  /** 银行名称 */
  account_bank?: string;
  /** 错误信息 */
  errmsg?: string;
  /** 错误码 */
  errcode?: number;
}

/** 获取账户余额 —— 请求体（文档未列字段，放行任意键）。 */
export type EcFundsGetbalanceBody = Record<string, unknown>;
/** 获取账户余额 —— 返回体。 */
export interface EcFundsGetbalanceResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 可提现余额 */
  available_amount?: number;
  /** 待结算余额 */
  pending_amount?: number;
  /** 二级商户号 */
  sub_mchid?: string;
}

/** 获取结算账户 —— 请求体（文档未列字段，放行任意键）。 */
export type EcFundsGetbankacctBody = Record<string, unknown>;
/** 获取结算账户 —— 返回体。 */
export interface EcFundsGetbankacctResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** account_info */
  account_info?: Record<string, unknown>;
}

/** 获取资金流水详情 —— 请求体。 */
export interface EcFundsGetfundsflowdetailBody {
  /** 流水id，可通过获取资金流水列表获取 */
  flow_id: string;
}
/** 获取资金流水详情 —— 返回体。 */
export interface EcFundsGetfundsflowdetailResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 流水信息 */
  funds_flow?: Record<string, unknown>;
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

/** 获取提现记录 —— 请求体。 */
export interface EcFundsGetwithdrawdetailBody {
  /** 提现单号，可从获取提现记录列表接口获取 */
  withdraw_id: string;
}
/** 获取提现记录 —— 返回体。 */
export interface EcFundsGetwithdrawdetailResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 金额（分） */
  amount?: number;
  /** 创建时间 */
  create_time?: number;
  /** 更新时间 */
  update_time?: number;
  /** 失败原因 */
  reason?: string;
  /** 备注 */
  remark?: string;
  /** 银行附言 */
  bank_memo?: string;
  /** 银行名称 */
  bank_name?: string;
  /** 银行账户 */
  bank_num?: string;
  /** 提现状态 */
  status?: string;
}

/** 获取提现记录列表 —— 请求体。 */
export interface EcFundsGetwithdrawlistBody {
  /** 页码 */
  page_num: number;
  /** 每页大小 */
  page_size: number;
  /** 开始时间 */
  start_time?: number;
  /** 结束时间 */
  end_time?: number;
}
/** 获取提现记录列表 —— 返回体。 */
export interface EcFundsGetwithdrawlistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 提现单号列表 */
  withdraw_ids?: unknown[];
  /** 提现单号总数 */
  total_num?: number;
}

/** 查询订单流水列表 —— 请求体。 */
export interface EcFundsListorderflowBody {
  /** 订单结算状态 */
  order_settle_state: number;
  /** 订单状态 */
  order_state?: number;
  /** 订单支付方式 */
  order_pay_method?: number;
  /** 指定订单id查询 */
  order_id?: string;
  /** 分页信息 */
  pagination_info?: Record<string, unknown>;
  /** 订单创建时间范围 */
  create_time_range?: Record<string, unknown>;
}
/** 查询订单流水列表 —— 返回体。 */
export interface EcFundsListorderflowResp {
  /** - */
  errcode?: number;
  /** - */
  errmsg?: string;
  /** 满足条件的总数量，仅供参考（翻页的过程可能变动） */
  total_count?: number;
  /** 订单流水列表 */
  data_list?: unknown[];
  /** 如果使用分页上下文，则返回此字段 */
  page_ctx?: string;
}

/** 修改结算账户 —— 请求体。 */
export interface EcFundsSetbankacctBody {
  /** account_info */
  account_info: Record<string, unknown>;
}
/** 修改结算账户 —— 返回体。 */
export interface EcFundsSetbankacctResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 商户提现 —— 请求体。 */
export interface EcFundsSubmitwithdrawBody {
  /** 提现金额（单位：分） */
  amount: number;
  /** 提现备注 */
  remark?: string;
  /** 银行附言 */
  bank_memo?: string;
}
/** 商户提现 —— 返回体。 */
export interface EcFundsSubmitwithdrawResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 二维码ticket,可用于获取二维码和查询二维码状态 */
  withdraw_id?: string;
  /** 提现单号 */
  qrcode_ticket?: string;
}

/** 查询扫码状态 —— 请求体。 */
export interface ShopFundsQrcodeCheckBody {
  /** 二维码ticket，可从商户提现接口获取 */
  qrcode_ticket: string;
}
/** 查询扫码状态 —— 返回体。 */
export interface ShopFundsQrcodeCheckResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 扫码状态 */
  status?: number;
  /** 业务返回错误码 */
  self_check_err_code?: number;
  /** 业务返回错误信息 */
  self_check_err_msg?: string;
  /** 扫码者身份 */
  scan_user_type?: number;
}

/** 获取二维码 —— 请求体。 */
export interface ShopFundsQrcodeGetBody {
  /** 二维码ticket，可通过生成二维码接口获取 */
  qrcode_ticket: string;
}
/** 获取二维码 —— 返回体。 */
export interface ShopFundsQrcodeGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 二维码(base64编码二进制,需要base64解码) */
  qrcode_buf?: string;
}

/** 撤销主页背景图申请 —— 请求体。 */
export interface EcBasicsHomepageBackgroundApplyCancelBody {
  /** 申请编号 */
  apply_id: number;
}
/** 撤销主页背景图申请 —— 返回体。 */
export interface EcBasicsHomepageBackgroundApplyCancelResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询背景图 —— 请求体（文档未列字段，放行任意键）。 */
export type EcBasicsHomepageBackgroundGetBody = Record<string, unknown>;
/** 查询背景图 —— 返回体。 */
export interface EcBasicsHomepageBackgroundGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 当前生效的背景图片url。 */
  img_url?: string;
  /** 最近一次流程中的申请。已生效/已撤销的申请不返回。 */
  apply?: Record<string, unknown>;
}

/** 清空主页背景图并撤销流程中的申请 —— 请求体（文档未列字段，放行任意键）。 */
export type EcBasicsHomepageBackgroundRemoveBody = Record<string, unknown>;
/** 清空主页背景图并撤销流程中的申请 —— 返回体。 */
export interface EcBasicsHomepageBackgroundRemoveResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 提交背景图申请 —— 请求体。 */
export interface EcBasicsHomepageBackgroundApplySubmitBody {
  /** 图片链接。请务必使用 上传图片 接口上传图片，并将返回的 img_url 填入此处，不接受其他任何格式的图片 url。若 url 曾经做过转换（url 前缀为 mmecimage.cn/p/），则可以 */
  img_url: string;
}
/** 提交背景图申请 —— 返回体。 */
export interface EcBasicsHomepageBackgroundApplySubmitResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 申请编号 */
  apply_id?: number;
}

/** 撤销精选展示位申请 —— 请求体。 */
export interface EcBasicsHomepageBannerApplyCancelBody {
  /** 申请编号 */
  apply_id: number;
}
/** 撤销精选展示位申请 —— 返回体。 */
export interface EcBasicsHomepageBannerApplyCancelResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询精选展示位 —— 请求体（文档未列字段，放行任意键）。 */
export type EcBasicsHomepageBannerGetBody = Record<string, unknown>;
/** 查询精选展示位 —— 返回体。 */
export interface EcBasicsHomepageBannerGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 当前生效的展示位 */
  banner?: Record<string, unknown>;
  /** 最近一次流程中的申请。不返回已生效或已撤销的申请 */
  apply?: Record<string, unknown>;
}

/** 清空精选展示位并撤销流程中的申请 —— 请求体（文档未列字段，放行任意键）。 */
export type EcBasicsHomepageBannerRemoveBody = Record<string, unknown>;
/** 清空精选展示位并撤销流程中的申请 —— 返回体。 */
export interface EcBasicsHomepageBannerRemoveResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 提交精选展示位申请 —— 请求体。 */
export interface EcBasicsHomepageBannerApplySubmitBody {
  /** 精选展示位。 */
  banner: Record<string, unknown>;
}
/** 提交精选展示位申请 —— 返回体。 */
export interface EcBasicsHomepageBannerApplySubmitResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 申请编号 */
  apply_id?: number;
}

/** 获取分类关联的商品ID列表 —— 请求体。 */
export interface EcStoreClassificationTreeProductGetBody {
  /** - */
  req: Record<string, unknown>;
}
/** 获取分类关联的商品ID列表 —— 返回体。 */
export interface EcStoreClassificationTreeProductGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 分类关联的商品 ID 列表 */
  product_ids?: unknown[];
  /** 翻页上下文，用于请求下一页。为空表示已到最后一页 */
  page_context?: string;
}

/** 获取在店铺主页展示的商品分类 —— 请求体（文档未列字段，放行任意键）。 */
export type EcStoreClassificationTreeGetBody = Record<string, unknown>;
/** 获取在店铺主页展示的商品分类 —— 返回体。 */
export interface EcStoreClassificationTreeGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 分类树 */
  tree?: Record<string, unknown>;
  /** 分类树版本号 */
  version?: number;
}

/** 获取主页展示商品列表 —— 请求体。 */
export interface EcStoreWindowProductListGetBody {
  /** 每页数量（默认 10，不超过 30） */
  page_size: number;
  /** 翻页上下文，由上次请求返回。不传默认获取第一页 */
  next_key?: string;
}
/** 获取主页展示商品列表 —— 返回体。 */
export interface EcStoreWindowProductListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品信息 */
  products?: unknown[];
  /** 本次翻页的上下文，用于请求下一页 */
  next_key?: string;
  /** 商品总数 */
  total_num?: number;
}

/** 隐藏小店主页商品 —— 请求体。 */
export interface EcStoreWindowProductHideBody {
  /** 商品 ID */
  product_id: string;
  /** 是否隐藏。1=隐藏，0=取消隐藏 */
  is_set_hide: number;
}
/** 隐藏小店主页商品 —— 返回体。 */
export interface EcStoreWindowProductHideResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 重新排序主页展示商品 —— 请求体。 */
export interface EcStoreWindowProductReorderBody {
  /** 商品 ID */
  product_id: string;
  /** 商品重新排序后的新序号，最大移动步长为 500 */
  index_num: number;
}
/** 重新排序主页展示商品 —— 返回体。 */
export interface EcStoreWindowProductReorderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 置顶小店主页商品 —— 请求体。 */
export interface EcStoreWindowProductSettopBody {
  /** 商品 ID */
  product_id: string;
  /** 是否置顶。1=置顶，0=取消置顶 */
  is_set_top: number;
}
/** 置顶小店主页商品 —— 返回体。 */
export interface EcStoreWindowProductSettopResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 上传多媒体资源 —— 请求体。 */
export interface EcCommkfCosuploadBody {
  /** 文件类型，目前支持的文件类型有（video/file/image） */
  msg_type: string;
  /** 用户的 open_id，用于标识上传资源的用户。 */
  open_id: string;
  /** 需要上传的视频/图片/文件。 */
  file: unknown;
}
/** 上传多媒体资源 —— 返回体。 */
export interface EcCommkfCosuploadResp {
  /** 多媒体cos_url */
  cos_url?: string;
  /** 错误信息 */
  errmsg?: string;
  /** 错误码 */
  errcode?: number;
}

/** 发送消息 —— 请求体。 */
export interface EcCommkfSendmsgBody {
  /** 唯一任务ID，如果填写则以该任务ID进行去重 */
  request_id?: string;
  /** 用户的 open_id，用于标识上传资源的用户。 */
  open_id: string;
  /** 文件类型， file（文件）、text（文本）、image（图片）、video（视频）、product_share (商品卡片)、order_share（订单卡片） */
  msg_type: string;
  /** msg_type 为 text 时必填，包含消息内容。 */
  text: Record<string, unknown>;
  /** msg_type 为 image 时必填，包含消息内容。 */
  image: Record<string, unknown>;
  /** msg_type 为 video 时必填，包含消息内容。 */
  video: Record<string, unknown>;
  /** msg_type 为 product_share 时必填，包含消息内容。 */
  product_share: Record<string, unknown>;
  /** msg_type 为 order_share 时必填，包含消息内容。 */
  order_share: Record<string, unknown>;
  /** msg_type 为 file 时必填，包含消息内容。 */
  file: Record<string, unknown>;
}
/** 发送消息 —— 返回体。 */
export interface EcCommkfSendmsgResp {
  /** 消息的单调自增msg_id */
  msg_id?: string;
  /** 错误信息 */
  errmsg?: string;
  /** 错误码 */
  errcode?: number;
}

/** 批量新增联盟机构推广 —— 请求体。 */
export interface EcLeagueItemHeadsupplierBatchaddBody {
  /** 机构开放唯一凭证，即 账号ID，机构可在「微信小店·联盟带货机构管理平台 - 设置 - 开放信息」中获得。（需要已完成机构开通，且账号没有异常状态） */
  headsupplier_appid: string;
  /** 商品列表 */
  list: unknown[];
  /** 推广开始时间戳 */
  begin_time?: number;
  /** 推广结束时间戳 */
  end_time?: number;
  /** 是否永久推广 */
  is_forerver?: boolean;
}
/** 批量新增联盟机构推广 —— 返回体。 */
export interface EcLeagueItemHeadsupplierBatchaddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 信息 */
  result_info_list?: unknown[];
}

/** 批量新增联盟商品 —— 请求体。 */
export interface EcLeagueItemBatchaddBody {
  /** 获取商品推广类别 */
  type: number;
  /** 商品列表 */
  list: unknown[];
  /** 推广开始时间戳 */
  begin_time?: number;
  /** 推广结束时间戳 */
  end_time?: number;
  /** 是否永久推广 */
  is_forerver?: boolean;
  /** 带货者appid列表 */
  talent_appids?: unknown[];
}
/** 批量新增联盟商品 —— 返回体。 */
export interface EcLeagueItemBatchaddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 信息 */
  result_info_list?: unknown[];
}

/** 获取联盟推广计划详情 —— 请求体。 */
export interface EcLeagueItemGetBody {
  /** 获取商品推广类别 */
  type: number;
  /** 商品id */
  product_id: number;
  /** 推广计划id */
  promotion_plan_id?: number;
}
/** 获取联盟推广计划详情 —— 返回体。 */
export interface EcLeagueItemGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 推广计划信息 */
  item?: Record<string, unknown>;
}

/** 获取联盟商品列表 —— 请求体。 */
export interface EcLeagueItemListGetBody {
  /** 单页商品数（不超过100） */
  page_size: number;
  /** 页面下标，下标从1开始，默认为1 */
  page_index?: number;
  /** 商品id，获取特殊推广商品时有效 */
  product_id?: number;
  /** 是否需要返回满足筛选条件的商品总数（填last_buffer后该值无效） */
  need_total_num?: boolean;
}
/** 获取联盟商品列表 —— 返回体。 */
export interface EcLeagueItemListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品信息 */
  items?: unknown[];
  /** 是否还有剩余商品 */
  has_more?: boolean;
  /** 商品总数 */
  total_num?: number;
}

/** 获取商品推广计划列表 —— 请求体。 */
export interface EcLeaguePromotionPlanListBody {
  /** 商品id */
  product_id: number;
  /** 页面下标，下标从1开始，默认为1 */
  page_index: number;
  /** 单页带货者数（不超过20） */
  page_size: number;
  /** 推广计划类型 */
  promotion_plan_type?: number;
}
/** 获取商品推广计划列表 —— 返回体。 */
export interface EcLeaguePromotionPlanListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品总数 */
  total_num?: number;
  /** 后面是否还有（true: 还有内容; false: 已结束） */
  continue_flag?: boolean;
  /** 商品信息列表 */
  list?: unknown[];
}

/** 获取商品推广带货者列表 —— 请求体。 */
export interface EcLeaguePromotionTalentListBody {
  /** 商品id */
  product_id: number;
  /** 页面下标，下标从1开始，默认为1 */
  page_index: number;
  /** 单页带货者数（不超过20） */
  page_size: number;
  /** 推广计划id */
  promotion_plan_id: number;
  /** 带货者appid */
  talent_appid?: string;
}
/** 获取商品推广带货者列表 —— 返回体。 */
export interface EcLeaguePromotionTalentListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品总数 */
  total_num?: number;
  /** 后面是否还有（true: 还有内容; false: 已结束） */
  continue_flag?: boolean;
  /** 商品信息列表 */
  list?: unknown[];
}

/** 更新联盟推广计划信息 —— 请求体。 */
export interface EcLeagueItemUpdBody {
  /** 获取商品推广类别 */
  type: number;
  /** 商品id，可从获取联盟商品推广列表接口中获取 */
  product_id: number;
  /** 推广计划id */
  promotion_plan_id: number;
  /** 更新操作类别 */
  operate_type: number;
  /** 推广佣金[0, 90]%，操作为编辑时必填 */
  ratio?: number;
  /** 特殊推广信息 */
  exclusive_info?: Record<string, unknown>;
}
/** 更新联盟推广计划信息 —— 返回体。 */
export interface EcLeagueItemUpdResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 推广计划id */
  promotion_plan_id?: number;
  /** 更新失败的达人appid列表 */
  fail_talent_appids?: unknown[];
}

/** 获取带货者详情信息 —— 请求体。 */
export interface EcLeaguePromoterGetBody {
  /** 带货者appid */
  talent_appid?: string;
  /** 带货者搜索参数，支持带货者appid和 视频号finder_id */
  talent_search_key?: string;
}
/** 获取带货者详情信息 —— 返回体。 */
export interface EcLeaguePromoterGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 带货者信息 */
  talent?: Record<string, unknown>;
}

/** 获取带货者列表 —— 请求体。 */
export interface EcLeaguePromoterListGetBody {
  /** 页面下标，下标从1开始，默认为1 */
  page_index?: number;
  /** 单页带货者数（不超过20） */
  page_size: number;
}
/** 获取带货者列表 —— 返回体。 */
export interface EcLeaguePromoterListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 带货者总数 */
  total_num?: number;
  /** 后面是否还有（true: 还有内容; false: 已结束） */
  continue_flag?: boolean;
  /** 带货者列表信息 */
  list?: unknown[];
}

/** 获取带货者商品数据列表 —— 请求体。 */
export interface EcLeagueTalentGetproductdatalistBody {
  /** 获取的商品数据类型 */
  get_data_type: number;
  /** 页面下标，下标从1开始，默认为1 */
  page_index: number;
  /** 单页带货者数（不超过20） */
  page_size: number;
  /** 带货者appid */
  talent_appid: string;
}
/** 获取带货者商品数据列表 —— 返回体。 */
export interface EcLeagueTalentGetproductdatalistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品总数 */
  total_num?: number;
  /** 后面是否还有（true: 还有内容; false: 已结束） */
  continue_flag?: boolean;
  /** 商品信息列表 */
  list?: unknown[];
}

/** 编辑带货者 —— 请求体。 */
export interface EcLeagueTalentUpdateBody {
  /** 带货者appid */
  talent_appid: string;
  /** 编辑操作类型 */
  upd_talent_type: number;
}
/** 编辑带货者 —— 返回体。 */
export interface EcLeagueTalentUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取文件下载链接 —— 请求体。 */
export interface EcOpenGetDownloadUrlBody {
  /** 下单用户openid */
  openid: string;
  /** 用户下单的订单号 */
  order_id: string;
}
/** 获取文件下载链接 —— 返回体。 */
export interface EcOpenGetDownloadUrlResp {
  /** 错误码，0-成功,其他-失败 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 链接到期时间(秒)，有效期10分钟 */
  expire_time?: number;
  /** 文件下载链接 */
  url?: string;
}

/** 上传资料 —— 请求体。 */
export interface EcOpenUploadBody {
  /** 上传资料的用户openid（upload_type=1时必填） */
  openid: string;
  /** 上传文件的url，支持图片、CAD、3dMax、压缩包、PDF,Excel、Word等 upload_type=1时必填，支持<50M大小的文件 */
  file_url?: string;
  /** 上传的资料文件内容，支持图片、CAD、3dMax、压缩包、PDF、Excel、Word等 upload_type=0时必填，支持<10M大小的文件 */
  file?: unknown;
}
/** 上传资料 —— 查询参数。 */
export interface EcOpenUploadQuery {
  /** 上传方式 */
  upload_type: number;
  /** 上传资料的用户openid（upload_type=0时必填） */
  openid: string;
}
/** 上传资料 —— 返回体。 */
export interface EcOpenUploadResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 文件media_id */
  media_id?: string;
}

/** 创建并发送礼物 —— 请求体。 */
export interface EcOrderPresentorderCreateBody {
  /** 活动id */
  activity_id: number;
  /** 用户openid */
  openid: string;
  /** 合作小店appid */
  shop_appid: string;
  /** 礼物祝福语信息，最大100字符 */
  wishmessage: string;
  /** 指定活动商品 */
  product_id: number;
  /** 指定活动sku */
  sku_id: number;
  /** 幂等id */
  idempotent_id?: string;
}
/** 创建并发送礼物 —— 返回体。 */
export interface EcOrderPresentorderCreateResp {
  /** 礼物单id */
  present_order_id?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 外部app跳转业务类型(仅外部应用身份调用返回) */
  business_type?: string;
  /** 外部app跳转参数(仅外部应用身份调用返回) */
  query?: string;
}

/** 查询礼物活动详情 —— 请求体。 */
export interface EcB2cActivityInfoPromoterGetBody {
  /** 小店appid */
  shop_appid: string;
  /** 小店活动id */
  activity_id: number;
}
/** 查询礼物活动详情 —— 返回体。 */
export interface EcB2cActivityInfoPromoterGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 活动信息 */
  activity?: Record<string, unknown>;
}

/** 查询礼物订单详情 —— 请求体。 */
export interface EcOrderPresentGetBody {
  /** 礼物单ID */
  present_order_id: string;
}
/** 查询礼物订单详情 —— 返回体。 */
export interface EcOrderPresentGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 礼物单结构 */
  present?: Record<string, unknown>;
}

/** 查询礼物订单列表 —— 请求体。 */
export interface EcOrderPresentlistGetBody {
  /** 礼物单创建时间范围，时间范围至少填一个 */
  create_time_range?: Record<string, unknown>;
  /** 礼物单更新时间范围，时间范围至少填一个 */
  update_time_range?: Record<string, unknown>;
  /** 小店appid */
  shop_appid: string;
  /** 每页数量(不超过100) */
  page_size: number;
  /** 分页参数，上一页请求返回，首次置空即可 */
  next_key?: string;
}
/** 查询礼物订单列表 —— 返回体。 */
export interface EcOrderPresentlistGetResp {
  /** 礼物单ID */
  present_order_list?: unknown[];
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 分页参数，下一页请求时传入 */
  next_key?: string;
}

/** 查询收礼者订单列表 —— 请求体。 */
export interface EcOrderReceiverorderlistGetBody {
  /** 订单创建时间范围，时间范围至少填一个 */
  create_time_range?: Record<string, unknown>;
  /** 订单更新时间范围，时间范围至少填一个 */
  update_time_range?: Record<string, unknown>;
  /** 小店appid */
  shop_appid: string;
  /** 收礼者openid */
  openid: string;
  /** 每页数量(不超过100) */
  page_size: number;
  /** 分页参数，上一页请求返回，首次置空即可 */
  next_key?: string;
}
/** 查询收礼者订单列表 —— 返回体。 */
export interface EcOrderReceiverorderlistGetResp {
  /** 订单列表 */
  order_list?: unknown[];
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 分页参数 */
  next_key?: string;
}

/** 查询小店礼物活动列表 —— 请求体。 */
export interface EcB2cActivityListPromoterGetBody {
  /** 偏移量 */
  offset: number;
  /** 单次请求个数，最大为100 */
  limit: number;
  /** 小店appid */
  shop_appid?: string;
  /** 活动状态：1 未开始，2 进行中，4 已开奖，5 失效 */
  status?: number;
  /** 类型：0 小店授权，1 自购，2 全部，默认为0 */
  type?: number;
}
/** 查询小店礼物活动列表 —— 返回体。 */
export interface EcB2cActivityListPromoterGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 信息列表 */
  list?: unknown[];
  /** 总数 */
  total_num?: number;
}

/** 指定礼物收礼者 —— 请求体。 */
export interface EcOrderPresentorderReceiverSetBody {
  /** 礼物单ID */
  present_order_id: string;
  /** 礼物单子单列表 */
  sub_order_list: unknown[];
}
/** 指定礼物收礼者 —— 返回体。 */
export interface EcOrderPresentorderReceiverSetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询工单详情 —— 请求体。 */
export interface EcPlatformkfGetmchticketdetailBody {
  /** 工单id */
  ticket_id: string;
}
/** 查询工单详情 —— 返回体。 */
export interface EcPlatformkfGetmchticketdetailResp {
  /** 工单详细信息，结构同工单列表中的ticket_item_list中的元素 */
  merchant_ticket?: Record<string, unknown>;
  /** 错误码，0 表示成功 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取商家工单列表 —— 请求体。 */
export interface EcPlatformkfGetmchticketlistBody {
  /** 工单状态（1：待商家处理，2：待平台处理，3：已完结），不传则返回所有状态 */
  ticket_state?: number;
  /** 工单类型 (当前仅支持「9:催发货」) */
  ticket_class_type?: number;
  /** 工单id、订单id，任意其一 */
  search_ticket_id?: string;
  /** 查询起始时间（Unix 时间戳，秒）-工单的创建时间 */
  search_start_time?: number;
  /** 查询结束时间（Unix 时间戳，秒）-工单的创建时间 */
  search_end_time?: number;
  /** 排序方式（1：按创建时间排序，2：按工单截止时间升序）。默认按创建时间降序 */
  sort_order_type?: number;
  /** 每页数量，默认 10，最大建议不超过 50 */
  limit?: number;
  /** 分页起始偏移量，从 0 开始 */
  start?: number;
}
/** 获取商家工单列表 —— 返回体。 */
export interface EcPlatformkfGetmchticketlistResp {
  /** 工单列表 */
  ticket_item_list?: unknown[];
  /** 工单总数 */
  total?: number;
  /** 错误码，0 表示成功 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询工单分类配置 —— 请求体（文档未列字段，放行任意键）。 */
export type EcPlatformkfGetticketclassconfigBody = Record<string, unknown>;
/** 查询工单分类配置 —— 返回体。 */
export interface EcPlatformkfGetticketclassconfigResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 商家回复选项配置 */
  mch_reply_options?: Record<string, unknown>;
}

/** 商户处理商家工单 —— 请求体。 */
export interface EcPlatformkfOperatemchticketBody {
  /** 工单 ID */
  ticket_id: string;
  /** 回复选项 ID，对应查询工单分类配置接口返回的 option_id */
  reply_option: number;
  /** 补充说明文字；当对应选项 is_must_description=true 时必填 */
  description: string;
  /** 商家与用户协商的时间（Unix 时间戳，秒）；当对应选项 is_must_confer_time=true 时必填 */
  confer_time: number;
}
/** 商户处理商家工单 —— 返回体。 */
export interface EcPlatformkfOperatemchticketResp {
  /** 错误码，0 表示成功 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询质检仓配置 —— 请求体（文档未列字段，放行任意键）。 */
export type EcQicInspectConfigGetBody = Record<string, unknown>;
/** 查询质检仓配置 —— 返回体。 */
export interface EcQicInspectConfigGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 质检仓配置信息 */
  inspect_config?: Record<string, unknown>;
}

/** 查询送检配置模板信息 —— 请求体（文档未列字段，放行任意键）。 */
export type EcQicInspectSubmitconfigGetBody = Record<string, unknown>;
/** 查询送检配置模板信息 —— 查询参数。 */
export interface EcQicInspectSubmitconfigGetQuery {
  /** 订单id */
  order_id?: string;
}
/** 查询送检配置模板信息 —— 返回体。 */
export interface EcQicInspectSubmitconfigGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 送检配置模板信息 */
  submit_config?: Record<string, unknown>;
}

/** 打印质检码 —— 请求体。 */
export interface EcQicInspectCodePrintBody {
  /** 订单id */
  order_id: string;
}
/** 打印质检码 —— 返回体。 */
export interface EcQicInspectCodePrintResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 质检码详情 */
  data?: Record<string, unknown>;
}

/** 自寄快递送检 —— 请求体。 */
export interface EcQicInspectRegisterLogisticsBody {
  /** 订单号列表 */
  order_id_list: unknown[];
  /** 快递物流信息 */
  logistics_info: Record<string, unknown>;
}
/** 自寄快递送检 —— 返回体。 */
export interface EcQicInspectRegisterLogisticsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 绑定送检信息 —— 请求体。 */
export interface EcQicInspectSubmitBody {
  /** 订单id */
  order_id: string;
  /** 送检信息 */
  inspect_info: Record<string, unknown>;
}
/** 绑定送检信息 —— 返回体。 */
export interface EcQicInspectSubmitResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取店铺H5链接 —— 请求体。 */
export interface EcBasicsShopH5urlGetBody {
  /** 小店通过关联账号绑定的企业微信id，获取方式见获取关联账号企微id */
  wecom_corp_id?: string;
  /** 小店通过关联账号绑定的企业微信下的成员id，获取方式见获取关联账号企微id */
  wecom_user_id?: string;
}
/** 获取店铺H5链接 —— 返回体。 */
export interface EcBasicsShopH5urlGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 店铺h5链接 */
  shop_h5url?: string;
}

/** 获取店铺二维码 —— 请求体。 */
export interface EcBasicsShopQrcodeGetBody {
  /** 小店通过关联账号绑定的企业微信id，获取方式见获取关联账号企微id */
  wecom_corp_id?: string;
  /** 小店通过关联账号绑定的企业微信下的成员id，获取方式见获取关联账号企微id */
  wecom_user_id?: string;
  /** 二维码类型 */
  qrcode_type: number;
}
/** 获取店铺二维码 —— 返回体。 */
export interface EcBasicsShopQrcodeGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 店铺二维码链接 */
  shop_qrcode?: string;
}

/** 获取店铺口令 —— 请求体。 */
export interface EcBasicsShopTaglinkGetBody {
  /** 小店通过关联账号绑定的企业微信id，获取方式见获取关联账号企微id */
  wecom_corp_id?: string;
  /** 小店通过关联账号绑定的企业微信下的成员id，获取方式见获取关联账号企微id */
  wecom_user_id?: string;
}
/** 获取店铺口令 —— 返回体。 */
export interface EcBasicsShopTaglinkGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 店铺微信口令 */
  shop_taglink?: string;
}

/** 获取店铺基本信息 —— 请求体（文档未列字段，放行任意键）。 */
export type EcBasicsInfoGetBody = Record<string, unknown>;
/** 获取店铺基本信息 —— 返回体。 */
export interface EcBasicsInfoGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 店铺信息 */
  info?: Record<string, unknown>;
}

/** 获取国补订单开票信息 —— 请求体。 */
export interface EcSubsidyQueryInvoicingInfoBody {
  /** 订单id */
  order_id: string;
}
/** 获取国补订单开票信息 —— 返回体。 */
export interface EcSubsidyQueryInvoicingInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 回包信息 */
  data?: Record<string, unknown>;
}

/** 上传国补订单发票文件 —— 请求体。 */
export interface EcSubsidyUploadInvoiceFileBody {
  /** 文件链接，需保证公网可访问 */
  file_link: string;
}
/** 上传国补订单发票文件 —— 返回体。 */
export interface EcSubsidyUploadInvoiceFileResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 回包信息 */
  data?: Record<string, unknown>;
}

/** 上传国补订单发票信息 —— 请求体。 */
export interface EcSubsidyUploadInvoiceInfoBody {
  /** 订单id */
  order_id: string;
  /** 发票代码, 发票类型为90可以选填。 */
  invoice_code?: string;
  /** 发票号码 */
  invoice_no: string;
  /** 开票时间，秒级时间戳，要求小于当前时间 */
  invoice_date: string;
  /** media_id, 需要调用上传国补订单发票上传获得 */
  invoice_media_id: string;
  /** 发票类型 */
  invoice_type: string;
  /** 发票校验码; 发票类型为10或者04时，校验码必填; 发票类型01、09、90时，校验码选填; */
  invoice_check_code?: string;
  /** 税价合计, 单位(分) */
  invoice_total_amount: number;
  /** 发票税额, 单位(分) */
  invoice_tax_amount: number;
  /** 销售企业名称 */
  sales_enterprise_name: string;
  /** 销售方纳税人识别号 */
  tax_payer: string;
  /** 数量 */
  num: number;
  /** 货物或应税劳务服务名 */
  service_name: string;
  /** 请参考国家补贴发票要求说明-备注事项 */
  remark: string;
  /** 请参考国家补贴发票要求说明-规格型号 */
  invoice_goods_model: string;
}
/** 上传国补订单发票信息 —— 返回体。 */
export interface EcSubsidyUploadInvoiceInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 获取分配方式 —— 请求体（文档未列字段，放行任意键）。 */
export type EcSupplierRelationGetDistributeBody = Record<string, unknown>;
/** 获取分配方式 —— 返回体。 */
export interface EcSupplierRelationGetDistributeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 分配类型 */
  distribute_type?: number;
  /** 全店订单自动分配的供货商appid */
  all_supplier_appid?: string;
  /** 全店订单自动分配的供货商名称 */
  all_distribute_supplier_name?: string;
}

/** 获取商品对应的自动分配供货商 —— 请求体。 */
export interface EcSupplierRelationGetProductDefaultDistributeBody {
  /** 商品id */
  product_id: number;
}
/** 获取商品对应的自动分配供货商 —— 返回体。 */
export interface EcSupplierRelationGetProductDefaultDistributeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 是否存在已设置自动分配的供货商 */
  exist_default_supplier?: boolean;
  /** 设置自动分配的供货商appid，当且仅当exist_default_supplier = true时有意义 */
  supplier_appid?: string;
}

/** 获取按商品自动分配的商品列表 —— 请求体。 */
export interface EcSupplierRelationGetProductListBody {
  /** 是否过滤distribute_status */
  is_filter_distribute_status?: boolean;
  /** 分配状态，当且仅当is_filter_distribute_status = true时生效 */
  distribute_status?: number;
  /** 是否过滤supplier_appid */
  is_filter_supplier_appid?: boolean;
  /** 供货商appid，当且仅当is_filter_supplier_appid = true时有效 */
  supplier_appid?: string;
  /** 单页数量 */
  limit?: number;
  /** 偏移量，分页用 */
  page_context?: string;
}
/** 获取按商品自动分配的商品列表 —— 返回体。 */
export interface EcSupplierRelationGetProductListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 偏移量，分页用 */
  page_context?: string;
  /** 总数 */
  total_count?: number;
  /** 商品列表 */
  list?: unknown[];
}

/** 设置全店订单自动分配 —— 请求体。 */
export interface EcSupplierRelationSetAllDistributionBody {
  /** 全店订单自动分配给该供货商 */
  supplier_appid: string;
}
/** 设置全店订单自动分配 —— 返回体。 */
export interface EcSupplierRelationSetAllDistributionResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 设置全店订单手动分配 —— 请求体（文档未列字段，放行任意键）。 */
export type EcSupplierRelationSetManuallyDistributeBody = Record<string, unknown>;
/** 设置全店订单手动分配 —— 返回体。 */
export interface EcSupplierRelationSetManuallyDistributeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 设置按商品自动分配 —— 请求体。 */
export interface EcSupplierRelationSetProductDistributeBody {
  /** 设置列表 */
  list: unknown[];
}
/** 设置按商品自动分配 —— 返回体。 */
export interface EcSupplierRelationSetProductDistributeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 分配订单代发 —— 请求体。 */
export interface EcOrderDropshipAssignBody {
  /** 订单号 */
  order_id: string;
  /** 供货商appid */
  supplier_appid: string;
  /** 代发商品信息 */
  dropship_product_list: unknown[];
}
/** 分配订单代发 —— 返回体。 */
export interface EcOrderDropshipAssignResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 取消分配代发单 —— 请求体。 */
export interface EcOrderDropshipCancelBody {
  /** 订单号 */
  order_id: string;
  /** 代发单号 */
  ds_order_id: string;
  /** 代发商品信息 */
  dropship_product_list?: unknown[];
}
/** 取消分配代发单 —— 返回体。 */
export interface EcOrderDropshipCancelResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 查询代发单详情 —— 请求体。 */
export interface EcOrderDropshipGetBody {
  /** 代发单号 */
  ds_order_id: string;
}
/** 查询代发单详情 —— 返回体。 */
export interface EcOrderDropshipGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 代发单结构 */
  dropship_order?: Record<string, unknown>;
}

/** 拉取代发单列表 —— 请求体。 */
export interface EcOrderDropshipListBody {
  /** 订单号，非必填，可根据订单号反查代发单 */
  order_id?: number;
  /** 供货商appid */
  supplier_appid?: string;
  /** 代发单状态 */
  status?: number;
  /** 代发单创建时间范围 */
  create_time_range?: Record<string, unknown>;
  /** 分页参数，上一页请求返回 */
  page_info?: Record<string, unknown>;
  /** 代发单更新时间范围 */
  update_time_range?: Record<string, unknown>;
}
/** 拉取代发单列表 —— 返回体。 */
export interface EcOrderDropshipListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 代发单号列表 */
  ds_order_id_list?: unknown[];
  /** 分页参数，下一页请求返回 */
  next_page?: Record<string, unknown>;
  /** 总数 */
  total?: number;
  /** 是否还有下一页, true:有下一页；false:已经结束，没有下一页。 */
  has_more?: boolean;
}

/** 搜索代发单 —— 请求体。 */
export interface EcOrderDropshipSearchBody {
  /** 搜索条件 */
  search_condition: Record<string, unknown>;
  /** 分页参数，上一页请求返回 */
  page_info?: Record<string, unknown>;
}
/** 搜索代发单 —— 返回体。 */
export interface EcOrderDropshipSearchResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 代发单号列表 */
  ds_order_id_list?: unknown[];
  /** 分页参数，下一页请求返回 */
  next_page?: Record<string, unknown>;
  /** 总数 */
  total?: number;
  /** 是否还有下一页, true:有下一页；false:已经结束，没有下一页。 */
  has_more?: boolean;
}

/** 获取供货商列表 —— 请求体。 */
export interface EcSupplierRelationGetSupplierListBody {
  /** 偏移量 */
  offset?: number;
  /** 单页数量 */
  limit?: number;
}
/** 获取供货商列表 —— 返回体。 */
export interface EcSupplierRelationGetSupplierListResp {
  /** 供货商列表 */
  list?: unknown[];
  /** 列表总数 */
  total_count?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 申请关联供货商 —— 请求体。 */
export interface EcSupplierRelationInviteSupplierBody {
  /** 申请关联的供货商的appid */
  supplier_appid: string;
  /** 第三方服务商ServiceID。当第三方平台代商家调用时，该字段【必填】，且平台将校验该ServiceID与实际调用方的一致性。 */
  service_id?: number;
  /** 第三方服务商备注信息，应清晰说明具体的调用场景。平台建议第三方服务商无特殊情况下均传入备注信息，详见接口注意事项。 */
  remark?: string;
}
/** 申请关联供货商 —— 返回体。 */
export interface EcSupplierRelationInviteSupplierResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询供货单详情 —— 请求体。 */
export interface EcOrderSupplyorderGetBody {
  /** 供货单号 */
  supply_order_id: string;
}
/** 查询供货单详情 —— 返回体。 */
export interface EcOrderSupplyorderGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 供货单结构 */
  supply_order?: Record<string, unknown>;
}

/** 获取供货单列表 —— 请求体。 */
export interface EcOrderSupplyorderListBody {
  /** 供货单创建时间范围。时间范围至少填一个 */
  create_time_range?: Record<string, unknown>;
  /** 供货单状态，具体枚举值请参考下文 */
  status?: number;
  /** 供货商appid */
  supplier_appid?: string;
  /** 分页参数，上一页请求返回 */
  page_info?: Record<string, unknown>;
  /** 订单号，非必填，可通过订单号反查供货单 */
  order_id?: string;
  /** 供货单更新时间范围 */
  update_time_range?: Record<string, unknown>;
}
/** 获取供货单列表 —— 返回体。 */
export interface EcOrderSupplyorderListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 供货单号列表 */
  supply_order_id_list?: unknown[];
  /** 分页参数，下一页请求返回 */
  next_page?: Record<string, unknown>;
  /** 总数 */
  total?: number;
  /** 是否还有下一页, true:有下一页；false:已经结束，没有下一页。 */
  has_more?: boolean;
}

/** 搜索供货单 —— 请求体。 */
export interface EcOrderSupplyorderSearchBody {
  /** 搜索条件。备注：以下参数必须至少设置一个字段，否则接口报错 */
  search_condition: Record<string, unknown>;
  /** 分页参数，上一页请求返回 */
  page_info: Record<string, unknown>;
}
/** 搜索供货单 —— 返回体。 */
export interface EcOrderSupplyorderSearchResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 供货单号列表 */
  supply_order_id_list?: unknown[];
  /** 分页参数，下一页请求返回 */
  next_page?: Record<string, unknown>;
  /** 总数 */
  total?: number;
  /** 是否还有下一页, true:有下一页；false:已经结束，没有下一页。 */
  has_more?: boolean;
}

/** 获取用户信息 —— 请求体。 */
export interface EcVipUserInfoGetBody {
  /** 用户 openid */
  openid: string;
}
/** 获取用户信息 —— 返回体。 */
export interface EcVipUserInfoGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户信息 */
  info?: Record<string, unknown>;
}

/** 获取用户列表 —— 请求体。 */
export interface EcVipUserListGetBody {
  /** 当前页，从 1 开始 */
  page_num: number;
  /** 每页数量，最大 200 */
  page_size: number;
}
/** 获取用户列表 —— 返回体。 */
export interface EcVipUserListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户信息列表 */
  list?: unknown[];
  /** 会员用户总数 */
  total_num?: number;
}

/** 获取用户积分流水 —— 请求体。 */
export interface EcVipUserScoreFlowrecordGetBody {
  /** 用户 openid */
  openid: string;
  /** 当前页，从 1 开始 */
  page_num: number;
  /** 每页数量 */
  page_size: number;
}
/** 获取用户积分流水 —— 返回体。 */
export interface EcVipUserScoreFlowrecordGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 积分流水列表 */
  list?: unknown[];
  /** 流水记录总数 */
  total_num?: number;
}

/** 获取用户积分 —— 请求体。 */
export interface EcVipUserScoreGetBody {
  /** 用户 openid */
  openid: string;
}
/** 获取用户积分 —— 返回体。 */
export interface EcVipUserScoreGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户积分信息 */
  info?: Record<string, unknown>;
}

/** 批量增加覆盖区域 —— 请求体。 */
export interface EcWarehouseCoverlocationsAddBody {
  /** 外部仓库ID，参考查询区域仓库列表接口 */
  out_warehouse_id: string;
  /** 覆盖区域，可从获取区域仓库接口获得 */
  cover_locations: unknown[];
}
/** 批量增加覆盖区域 —— 返回体。 */
export interface EcWarehouseCoverlocationsAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 创建区域仓库 —— 请求体。 */
export interface EcWarehouseCreateBody {
  /** 外部仓库ID，一个店铺下，同一个外部ID只能创建一个仓库，最大128字符 */
  out_warehouse_id: string;
  /** 仓库名称 */
  name: string;
  /** 仓库介绍 */
  intro: string;
  /** 覆盖区域，可以在创建后添加 */
  cover_locations?: unknown[];
}
/** 创建区域仓库 —— 返回体。 */
export interface EcWarehouseCreateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 批量删除覆盖区域 —— 请求体。 */
export interface EcWarehouseCoverlocationsDelBody {
  /** 外部仓库ID，参考查询区域仓库列表接口 */
  out_warehouse_id: string;
  /** 覆盖区域，可从获取区域仓库接口获得 */
  cover_locations: unknown[];
}
/** 批量删除覆盖区域 —— 返回体。 */
export interface EcWarehouseCoverlocationsDelResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取地址行政编码 —— 请求体。 */
export interface EcBasicsAddresscodeGetBody {
  /** 地址行政编码，不填或者填0时，获取全国的省级行政编码 */
  addr_code?: number;
}
/** 获取地址行政编码 —— 返回体。 */
export interface EcBasicsAddresscodeGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 本行政编码地址信息 */
  addrs_msg?: Record<string, unknown>;
  /** 下一级所有地址信息 */
  next_level_addrs?: unknown[];
}

/** 获取指定地址下区域仓库的优先级 —— 请求体。 */
export interface EcWarehouseAddressPrioritysortGetBody {
  /** 省份地址编码 */
  address_id1: number;
  /** 市地址编码 */
  address_id2?: number;
  /** 区地址编码 */
  address_id3?: number;
  /** 街道地址编码 */
  address_id4?: number;
}
/** 获取指定地址下区域仓库的优先级 —— 返回体。 */
export interface EcWarehouseAddressPrioritysortGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 数据信息 */
  data?: Record<string, unknown>;
}

/** 获取区域仓库 —— 请求体。 */
export interface EcWarehouseGetBody {
  /** 外部仓库ID，参考查询区域仓库列表接口 */
  out_warehouse_id: string;
}
/** 获取区域仓库 —— 返回体。 */
export interface EcWarehouseGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** data */
  data?: Record<string, unknown>;
}

/** 查询区域仓库列表 —— 请求体。 */
export interface EcWarehouseListGetBody {
  /** 每页数量（最大不超过10） */
  page_size: number;
  /** 由上次请求返回，记录翻页的上下文。传入时会从上次返回的结果往后翻一页，不传默认获取第一页数据 */
  next_key?: string;
}
/** 查询区域仓库列表 —— 返回体。 */
export interface EcWarehouseListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** data */
  data?: Record<string, unknown>;
}

/** 获取区域仓库存数量 —— 请求体。 */
export interface EcWarehouseStockGetBody {
  /** 商品ID */
  product_id: string;
  /** skuID */
  sku_id: string;
  /** 外部仓库ID */
  out_warehouse_id: string;
}
/** 获取区域仓库存数量 —— 返回体。 */
export interface EcWarehouseStockGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 库存信息 */
  data?: Record<string, unknown>;
}

/** 设置指定地址下区域仓库的优先级 —— 请求体。 */
export interface EcWarehouseAddressPrioritysortSetBody {
  /** 省份地址编码，可从获取区域仓库接口获得 */
  address_id1: number;
  /** 市地址编码，可从获取区域仓库接口获得 */
  address_id2?: number;
  /** 区地址编码，可从获取区域仓库接口获得 */
  address_id3?: number;
  /** 街道地址编码，可从获取区域仓库接口获得 */
  address_id4?: number;
  /** 按照out_warehouse_id排序优先级从高到低 */
  priority_sort?: unknown[];
}
/** 设置指定地址下区域仓库的优先级 —— 返回体。 */
export interface EcWarehouseAddressPrioritysortSetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 修改区域仓库详情 —— 请求体。 */
export interface EcWarehouseDetailUpdateBody {
  /** 外部仓库ID，参考查询区域仓库列表接口 */
  out_warehouse_id: string;
  /** 仓库名称 */
  name: string;
  /** 仓库介绍 */
  intro: string;
}
/** 修改区域仓库详情 —— 返回体。 */
export interface EcWarehouseDetailUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 更新区域仓库存数量 —— 请求体。 */
export interface EcWarehouseStockUpdateBody {
  /** 商品ID */
  product_id: string;
  /** skuID */
  sku_id: string;
  /** 外部仓库ID */
  out_warehouse_id: string;
  /** 修改类型。1: 增加；2:减少；3:设置 */
  diff_type: number;
  /** 增加、减少或者设置的库存值 */
  num: number;
}
/** 更新区域仓库存数量 —— 返回体。 */
export interface EcWarehouseStockUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取关联账号企微id —— 请求体。 */
export interface EcWecomGetWecomIdBody {
  /** 见企微文档基本概念介绍corpid小节 */
  corp_id: string;
  /** 见企微文档基本概念介绍userid小节, 需要保证user_id属于corp_id */
  user_id?: string;
}
/** 获取关联账号企微id —— 返回体。 */
export interface EcWecomGetWecomIdResp {
  /** 错误信息 */
  errmsg?: string;
  /** 回包信息 */
  data?: Record<string, unknown>;
  /** 错误码 */
  errcode?: number;
}

/** 小店获取关联小程序信息 —— 请求体（文档未列字段，放行任意键）。 */
export type EcVipInfoGetBody = Record<string, unknown>;
/** 小店获取关联小程序信息 —— 返回体。 */
export interface EcVipInfoGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 关联的小程序 appid */
  wxa_appid?: string;
  /** 关联小程序信息 */
  info?: Record<string, unknown>;
  /** 状态，1:上线,2:未上线,3:上线前测试状态 说明：状态为 2、3 时，只有白名单用户可以在小店看到会员入口。 */
  state?: number;
}

/** 新增小程序会员信息 —— 请求体。 */
export interface VipUserInfoAddBody {
  /** 用户操作的会话 id，由小店传递给小程序，有效期 10 分钟 */
  session_id: string;
  /** 小程序用户 openid */
  wxa_openid: string;
  /** 小程序会员信息 */
  info: Record<string, unknown>;
  /** 是否自动领会员开卡礼券 */
  receive_register_coupon?: boolean;
}
/** 新增小程序会员信息 —— 返回体。 */
export interface VipUserInfoAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 删除小程序会员信息 —— 请求体。 */
export interface VipUserInfoDeleteBody {
  /** 小程序用户 openid */
  wxa_openid: string;
}
/** 删除小程序会员信息 —— 返回体。 */
export interface VipUserInfoDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取小程序已关联小店列表 —— 请求体（文档未列字段，放行任意键）。 */
export type VipShopListGetBody = Record<string, unknown>;
/** 获取小程序已关联小店列表 —— 返回体。 */
export interface VipShopListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 已关联小店列表 */
  list?: unknown[];
}

/** 获取小程序会员信息 —— 请求体。 */
export interface VipUserInfoGetBody {
  /** 小程序用户 openid */
  wxa_openid: string;
}
/** 获取小程序会员信息 —— 返回体。 */
export interface VipUserInfoGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 小程序会员信息 */
  info?: Record<string, unknown>;
}

/** 获取小程序会员列表 —— 请求体。 */
export interface VipUserListGetBody {
  /** 偏移量 */
  offset: number;
  /** 本次读取数量 */
  limit: number;
}
/** 获取小程序会员列表 —— 返回体。 */
export interface VipUserListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 小程序会员列表 */
  list?: unknown[];
}

/** 更新小程序会员信息 —— 请求体。 */
export interface VipUserInfoUpdateBody {
  /** 小程序用户 openid */
  wxa_openid: string;
  /** 小程序会员信息 */
  info: Record<string, unknown>;
}
/** 更新小程序会员信息 —— 返回体。 */
export interface VipUserInfoUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取供货商基础信息 —— 请求体（文档未列字段，放行任意键）。 */
export type EcSupplierBaseGetSupplierBaseInfoBody = Record<string, unknown>;
/** 获取供货商基础信息 —— 返回体。 */
export interface EcSupplierBaseGetSupplierBaseInfoResp {
  /** - */
  errcode?: number;
  /** - */
  errmsg?: string;
  /** 供货商名称 */
  name?: string;
  /** 供货商头像。个人主体无头像。 */
  head_img?: string;
  /** 供货商主体。枚举值： 2: 企业 2500: 个人 */
  subject_type?: number;
  /** 供货商可用的经营模式 */
  business_mode?: Record<string, unknown>;
}

/** 获取打印报文 —— 请求体。 */
export interface EcLogisticsEwaybillBizOrderGetprintinfoBody {
  /** 电子面单订单id，全局唯一id */
  ewaybill_order_id: string;
  /** 模板id, 如无需使用后台模板，可直接传递template_type做为默认模板， 如‘single’ */
  template_id: string;
  /** 子单的物流单号，不传则返回整单的打印报文 */
  sub_waybill_id?: string;
}
/** 获取打印报文 —— 返回体。 */
export interface EcLogisticsEwaybillBizOrderGetprintinfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 电子面单打印报文，打单时传给打印机使用 */
  print_info?: string;
}

/** 代发单与供货单发货 —— 请求体。 */
export interface EcOrderDropshipSupplierDeliverySendBody {
  /** 代发单号 */
  ds_order_id: string;
  /** 供货单号（与供货单号选传其一） */
  supply_order_id: string;
  /** 物流信息 */
  delivery_list: unknown[];
}
/** 代发单与供货单发货 —— 返回体。 */
export interface EcOrderDropshipSupplierDeliverySendResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 修改代发单与供货单物流 —— 请求体。 */
export interface EcOrderDropshipSupplierDeliveryUpdateBody {
  /** 代发单号 */
  ds_order_id: string;
  /** 供货单号（与代发单号选传其一） */
  supply_order_id: string;
  /** 物流修改信息 */
  change_infos: unknown[];
}
/** 修改代发单与供货单物流 —— 返回体。 */
export interface EcOrderDropshipSupplierDeliveryUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询代发单详情 —— 请求体。 */
export interface EcOrderDropshipSupplierGetBody {
  /** 代发单号 */
  ds_order_id: string;
}
/** 查询代发单详情 —— 返回体。 */
export interface EcOrderDropshipSupplierGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 代发单结构 */
  dropship_order?: Record<string, unknown>;
}

/** 获取代发单列表 —— 请求体。 */
export interface EcOrderDropshipSupplierListBody {
  /** 代发单创建时间范围。时间范围至少填一个 */
  create_time_range?: Record<string, unknown>;
  /** 代发单状态，具体枚举值请参考下文 */
  status?: number;
  /** 商家appid */
  shop_appid?: string;
  /** 分页参数，上一页请求返回 */
  page_info?: Record<string, unknown>;
  /** 订单号，非必填，可通过订单号反查代发单 */
  order_id?: string;
  /** 代发单更新时间范围 */
  update_time_range?: Record<string, unknown>;
}
/** 获取代发单列表 —— 返回体。 */
export interface EcOrderDropshipSupplierListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 代发单号列表 */
  ds_order_id_list?: unknown[];
  /** 分页参数，下一页请求返回 */
  next_page?: Record<string, unknown>;
  /** 总数 */
  total?: number;
  /** 是否还有下一页, true:有下一页；false:已经结束，没有下一页。 */
  has_more?: boolean;
}

/** 搜索代发单 —— 请求体。 */
export interface EcOrderDropshipSupplierSearchBody {
  /** 搜索条件。备注：以下参数必须至少设置一个字段，否则接口报错 */
  search_condition: Record<string, unknown>;
  /** 分页参数，上一页请求返回 */
  page_info: Record<string, unknown>;
}
/** 搜索代发单 —— 返回体。 */
export interface EcOrderDropshipSupplierSearchResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 代发单号列表 */
  ds_order_id_list?: unknown[];
  /** 分页参数，下一页请求返回 */
  next_page?: Record<string, unknown>;
  /** 总数 */
  total?: number;
  /** 是否还有下一页, true:有下一页；false:已经结束，没有下一页。 */
  has_more?: boolean;
}

/** 同意商家关联申请 —— 请求体。 */
export interface EcSupplierRelationAcceptInvitationBody {
  /** 发起关联申请的小店商家appid */
  ec_appid: string;
  /** 第三方服务商ServiceID。当第三方平台代商家调用时，该字段【必填】，且平台将校验该ServiceID与实际调用方的一致性。 */
  service_id?: number;
  /** 第三方服务商备注信息，应清晰说明具体的调用场景。平台建议第三方服务商无特殊情况下均传入备注信息，详见接口注意事项。 */
  remark?: string;
}
/** 同意商家关联申请 —— 返回体。 */
export interface EcSupplierRelationAcceptInvitationResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取关联的商家列表 —— 请求体。 */
export interface EcSupplierRelationGetEcListBody {
  /** 分页游标，起始位置 */
  offset: number;
  /** 分页数量 */
  limit: number;
  /** 是否开启状态筛选。默认为 false。若为 true，则 type 必填。 */
  is_filter_type?: boolean;
  /** 筛选类型，当 is_filter_type 为 true 时生效。枚举值： 1: 已关联 (FilterTypeBind) 2: 待审核 (FilterTypeAuditing) 3: 已取消/历史记 */
  type?: number;
}
/** 获取关联的商家列表 —— 返回体。 */
export interface EcSupplierRelationGetEcListResp {
  /** 商家列表 */
  list?: unknown[];
  /** 总数 */
  total_count?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 拒绝商家关联申请 —— 请求体。 */
export interface EcSupplierRelationRejectInvitationBody {
  /** 发起邀请的小店商家appid */
  ec_appid: string;
  /** 第三方服务商ServiceID。当第三方平台代商家调用时，该字段【必填】，且平台将校验该ServiceID与实际调用方的一致性。 */
  service_id?: number;
  /** 第三方服务商备注信息，应清晰说明具体的调用场景。平台建议第三方服务商无特殊情况下均传入备注信息，详见接口注意事项。 */
  remark?: string;
}
/** 拒绝商家关联申请 —— 返回体。 */
export interface EcSupplierRelationRejectInvitationResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询供货单详情 —— 请求体。 */
export interface EcOrderSupplyorderSupplierGetBody {
  /** 供货单号 */
  supply_order_id: string;
}
/** 查询供货单详情 —— 返回体。 */
export interface EcOrderSupplyorderSupplierGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 供货单结构 */
  supply_order?: Record<string, unknown>;
}

/** 获取供货单列表 —— 请求体。 */
export interface EcOrderSupplyorderSupplierListBody {
  /** 供货单创建时间范围。时间范围至少填一个 */
  create_time_range?: Record<string, unknown>;
  /** 供货单状态，具体枚举值请参考下文 */
  status?: number;
  /** 商家appid */
  shop_appid?: string;
  /** 分页参数，上一页请求返回 */
  page_info?: Record<string, unknown>;
  /** 订单号，非必填，可通过订单号反查供货单 */
  order_id?: string;
  /** 供货单更新时间范围 */
  update_time_range?: Record<string, unknown>;
}
/** 获取供货单列表 —— 返回体。 */
export interface EcOrderSupplyorderSupplierListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 供货单号列表 */
  supply_order_id_list?: unknown[];
  /** 分页参数，下一页请求返回 */
  next_page?: Record<string, unknown>;
  /** 总数 */
  total?: number;
  /** 是否还有下一页, true:有下一页；false:已经结束，没有下一页。 */
  has_more?: boolean;
}

/** 搜索供货单 —— 请求体。 */
export interface EcOrderSupplyorderSupplierSearchBody {
  /** 搜索条件。备注：以下参数必须至少设置一个字段，否则接口报错 */
  search_condition: Record<string, unknown>;
  /** 分页参数，上一页请求返回 */
  page_info: Record<string, unknown>;
}
/** 搜索供货单 —— 返回体。 */
export interface EcOrderSupplyorderSupplierSearchResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 供货单号列表 */
  supply_order_id_list?: unknown[];
  /** 分页参数，下一页请求返回 */
  next_page?: Record<string, unknown>;
  /** 总数 */
  total?: number;
  /** 是否还有下一页, true:有下一页；false:已经结束，没有下一页。 */
  has_more?: boolean;
}

/** 添加货品 —— 请求体。 */
export interface EcSupplierProductAddBody {
  /** 货品标题，至少3个字符，最长120个字符 */
  title: string;
  /** 货品短标题 */
  short_title?: string;
  /** 商家自定义货品ID */
  out_product_id?: string;
  /** 售后描述 */
  aftersale_desc?: string;
  /** 货品头图，至少3张，最多9张（部分类目至少4张）。图片url需以mmecimage.cn/p/开头 */
  head_imgs: unknown[];
  /** 视频头图，目前仅支持一个 */
  head_videos?: unknown[];
  /** 货品详情 */
  desc_info?: Record<string, unknown>;
  /** 三级类目信息，必须选到第三级类目 */
  cats: unknown[];
  /** 货品参数属性 */
  attrs?: unknown[];
  /** 货品编码 */
  spu_code?: string;
  /** 品牌ID，无品牌则不填 */
  brand_id?: number;
  /** 货品资质信息 */
  product_qua_infos?: unknown[];
  /** SKU列表，长度最少为1，最大为500 */
  skus: unknown[];
  /** 发货方式。0=快递发货（默认），1=无需快递 */
  deliver_method?: number;
  /** 运费信息 */
  express_info?: Record<string, unknown>;
  /** 额外的售后服务 */
  extra_service?: Record<string, unknown>;
  /** 售后/退货地址 */
  after_sale_info?: Record<string, unknown>;
  /** 尺码表信息 */
  size_chart?: Record<string, unknown>;
  /** 添加完成后是否立即上架。0=否（默认），1=是 */
  listing?: number;
}
/** 添加货品 —— 返回体。 */
export interface EcSupplierProductAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 返回数据 */
  data?: Record<string, unknown>;
}

/** 撤回货品审核 —— 请求体。 */
export interface EcSupplierProductAuditCancelBody {
  /** 货品ID */
  product_id: string;
}
/** 撤回货品审核 —— 返回体。 */
export interface EcSupplierProductAuditCancelResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 删除货品 —— 请求体。 */
export interface EcSupplierProductDeleteBody {
  /** 货品ID */
  product_id: string;
}
/** 删除货品 —— 返回体。 */
export interface EcSupplierProductDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 下架货品 —— 请求体。 */
export interface EcSupplierProductDelistingBody {
  /** 货品ID */
  product_id: string;
}
/** 下架货品 —— 返回体。 */
export interface EcSupplierProductDelistingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取货品详情 —— 请求体。 */
export interface EcSupplierProductGetBody {
  /** 货品ID */
  product_id: string;
  /** 默认取1 1:获取线上数据 2:获取草稿数据 3:同时获取线上和草稿数据（注意：上架过的货品才有线上数据） */
  data_type?: number;
}
/** 获取货品详情 —— 返回体。 */
export interface EcSupplierProductGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 货品线上数据，入参data_type==2时不返回该字段；入参data_type==3且货品从未上架过，不返回该字段 */
  product?: Record<string, unknown>;
  /** 货品草稿数据（结构同product），入参data_type==1时不返回该字段 */
  edit_product?: Record<string, unknown>;
}

/** 获取货品列表 —— 请求体。 */
export interface EcSupplierProductListGetBody {
  /** 货品状态，不填默认拉全部货品 */
  status?: number;
  /** 每页数量（默认10，不超过30） */
  page_size: number;
  /** 由上次请求返回，记录翻页的上下文。传入时会从上次返回的结果往后翻一页，不传默认获取第一页数据 */
  next_key?: string;
}
/** 获取货品列表 —— 返回体。 */
export interface EcSupplierProductListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 货品id列表 */
  product_ids?: unknown[];
  /** 本次翻页的上下文，用于请求下一页 */
  next_key?: string;
  /** 货品总数 */
  total_num?: number;
}

/** 上架货品 —— 请求体。 */
export interface EcSupplierProductListingBody {
  /** 货品ID */
  product_id: string;
}
/** 上架货品 —— 返回体。 */
export interface EcSupplierProductListingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 更新货品 —— 请求体。 */
export interface EcSupplierProductUpdateBody {
  /** 货品ID */
  product_id: string;
  /** 货品标题，至少3个字符，最长120个字符 */
  title: string;
  /** 货品短标题 */
  short_title?: string;
  /** 售后描述 */
  aftersale_desc?: string;
  /** 货品头图，至少3张，最多9张（部分类目至少4张）。图片url需以mmecimage.cn/p/开头 */
  head_imgs: unknown[];
  /** 视频头图，目前仅支持一个 */
  head_videos?: unknown[];
  /** 货品详情 */
  desc_info?: Record<string, unknown>;
  /** 三级类目信息，必须选到第三级类目 */
  cats: unknown[];
  /** 货品参数属性 */
  attrs?: unknown[];
  /** 货品编码 */
  spu_code?: string;
  /** 品牌ID，无品牌则不填 */
  brand_id?: number;
  /** 货品资质信息 */
  product_qua_infos?: unknown[];
  /** SKU列表，长度最少为1，最大为500 */
  skus: unknown[];
  /** 发货方式。0=快递发货（默认），1=无需快递 */
  deliver_method?: number;
  /** 运费信息 */
  express_info?: Record<string, unknown>;
  /** 额外的售后服务 */
  extra_service?: Record<string, unknown>;
  /** 售后/退货地址 */
  after_sale_info?: Record<string, unknown>;
  /** 尺码表信息 */
  size_chart?: Record<string, unknown>;
  /** 更新完成后是否立即上架。0=否（默认），1=是 */
  listing?: number;
}
/** 更新货品 —— 返回体。 */
export interface EcSupplierProductUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 返回数据 */
  data?: Record<string, unknown>;
}

/** 免审更新货品 —— 请求体。 */
export interface EcSupplierProductAuditfreeBody {
  /** 货品ID */
  product_id: number;
  /** 货品编码 */
  spu_code?: string;
  /** 需要进行更新的sku */
  skus: unknown[];
  /** 运费信息 */
  express_info?: Record<string, unknown>;
  /** 额外服务 */
  extra_service?: Record<string, unknown>;
  /** 发货方式：0-快递发货（默认），1-无需快递 */
  deliver_method?: number;
  /** 售后/退货地址 */
  after_sale_info?: Record<string, unknown>;
}
/** 免审更新货品 —— 返回体。 */
export interface EcSupplierProductAuditfreeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取佣金单详情 —— 请求体。 */
export interface EcTalentGetOrderDetailBody {
  /** 订单号，可从获取佣金单列表接口获得 */
  order_id: string;
  /** 商品skuid，可从获取佣金单列表接口获得 */
  sku_id: string;
  /** 订单额外参数【在订单列表里面返回的参数回传】 */
  special_id?: string;
}
/** 获取佣金单详情 —— 返回体。 */
export interface EcTalentGetOrderDetailResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 订单基础信息 */
  base_info?: Record<string, unknown>;
  /** 订单佣金信息 */
  commission_info?: Record<string, unknown>;
  /** 下单通道信息 */
  channel_info?: Record<string, unknown>;
  /** 内容推广推客机构信息 */
  promotion_head_supplier_info?: Record<string, unknown>;
  /** 商品信息 */
  product_info?: Record<string, unknown>;
}

/** 获取佣金单列表 —— 请求体。 */
export interface EcTalentGetOrderListBody {
  /** 佣金单创建时间范围之开始时间【和更新时间范围二选一】 */
  create_time_gt?: number;
  /** 佣金单创建时间范围之结束时间【和更新时间范围二选一】 */
  create_time_lt?: number;
  /** 订单 ID 过滤 */
  order_id?: string;
  /** 商品 id 过滤 */
  spu_id?: string;
  /** 佣金单更新时间范围之开始时间【和创建时间范围二选一】 */
  update_time_gt?: number;
  /** 佣金单更新时间范围之结束时间【和创建时间范围二选一】 */
  update_time_lt?: number;
  /** 单页佣金单数（不超过10） */
  page_size: number;
  /** 由上次请求返回，顺序翻页时需要传入, 会从上次返回的结果往后翻一页 */
  next_key?: string;
}
/** 获取佣金单列表 —— 返回体。 */
export interface EcTalentGetOrderListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 佣金单信息 */
  order_list?: unknown[];
  /** 是否还有剩余订单 */
  has_more?: boolean;
  /** 本次翻页的上下文，用于顺序翻页请求 */
  next_key?: string;
}

/** 获取达人橱窗商品详情 —— 请求体。 */
export interface EcTalentWindowProductGetBody {
  /** 橱窗商品ID(可以从"获取达人橱窗商品列表"接口获取) */
  product_id: string;
}
/** 获取达人橱窗商品详情 —— 返回体。 */
export interface EcTalentWindowProductGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 橱窗商品详情 */
  product?: Record<string, unknown>;
}

/** 获取达人橱窗商品列表 —— 请求体。 */
export interface EcTalentWindowProductListGetBody {
  /** 单页商品数（不超过500） */
  page_size: number;
  /** 页面下标，下标从1开始 (不可以与last_buffer一起填写) */
  page_index?: number;
  /** 由上次请求返回，顺序翻页时需要传入, 会从上次返回的结果往后翻一页（不可以与page_index一起填写） */
  last_buffer?: string;
}
/** 获取达人橱窗商品列表 —— 返回体。 */
export interface EcTalentWindowProductListGetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** products */
  products?: unknown[];
  /** 本次翻页的上下文，用于顺序翻页请求 */
  last_buffer?: string;
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
  // ===== leagueheadsupplier =====
  /** 获取机构账户余额 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/balance/api_getbalance.html */
  ecLeagueHeadsupplierFundsBalanceGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/funds/balance/get',
    title: '获取机构账户余额',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/balance/api_getbalance.html',
  },
  /** 获取资金流水详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/balance/api_getfundsflowdetail.html */
  ecLeagueHeadsupplierFundsFlowdetailGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/funds/flowdetail/get',
    title: '获取资金流水详情',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/balance/api_getfundsflowdetail.html',
  },
  /** 获取资金流水列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/balance/api_getfundsflowlist.html */
  ecLeagueHeadsupplierFundsFlowlistGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/funds/flowlist/get',
    title: '获取资金流水列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/balance/api_getfundsflowlist.html',
  },
  /** 网络通信检测 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_callbackcheck.html */
  callbackCheck: {
    method: 'POST',
    path: '/cgi-bin/callback/check',
    title: '网络通信检测',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_callbackcheck.html',
  },
  /** 重置指定API调用次数 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_clearapiquota.html */
  openapiQuotaClear: {
    method: 'POST',
    path: '/cgi-bin/openapi/quota/clear',
    title: '重置指定API调用次数',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_clearapiquota.html',
  },
  /** 重置API调用次数 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_clearquota.html */
  clearQuota: {
    method: 'POST',
    path: '/cgi-bin/clear_quota',
    title: '重置API调用次数',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_clearquota.html',
  },
  /** 使用AppSecret重置API调用次数 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_clearquotabyappsecret.html */
  clearQuotaV2: {
    method: 'POST',
    path: '/cgi-bin/clear_quota/v2',
    title: '使用AppSecret重置API调用次数',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_clearquotabyappsecret.html',
  },
  /** 获取接口调用凭据 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_getaccesstoken.html */
  token: {
    method: 'GET',
    path: '/cgi-bin/token',
    title: '获取接口调用凭据',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_getaccesstoken.html',
  },
  /** 获取微信API服务器IP @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_getapidomainip.html */
  getApiDomainIp: {
    method: 'GET',
    path: '/cgi-bin/get_api_domain_ip',
    title: '获取微信API服务器IP',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_getapidomainip.html',
  },
  /** 查询API调用额度 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_getapiquota.html */
  openapiQuotaGet: {
    method: 'POST',
    path: '/cgi-bin/openapi/quota/get',
    title: '查询API调用额度',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_getapiquota.html',
  },
  /** 获取微信推送服务器IP @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_getcallbackip.html */
  getcallbackip: {
    method: 'GET',
    path: '/cgi-bin/getcallbackip',
    title: '获取微信推送服务器IP',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_getcallbackip.html',
  },
  /** 获取稳定版接口调用凭据 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_getstableaccesstoken.html */
  stableToken: {
    method: 'POST',
    path: '/cgi-bin/stable_token',
    title: '获取稳定版接口调用凭据',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_getstableaccesstoken.html',
  },
  /** 获取所有类目 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/category/api_getallcategoryfromleague.html */
  ecCategoryLeagueAll: {
    method: 'GET',
    path: '/channels/ec/category/league/all',
    title: '获取所有类目',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/category/api_getallcategoryfromleague.html',
  },
  /** 获取合作小店详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/headsupplier/api_getshop.html */
  ecLeagueHeadsupplierShopGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/shop/get',
    title: '获取合作小店详情',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/headsupplier/api_getshop.html',
  },
  /** 获取合作小店列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/headsupplier/api_getshoplist.html */
  ecLeagueHeadsupplierShopListGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/shop/list/get',
    title: '获取合作小店列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/headsupplier/api_getshoplist.html',
  },
  /** 获取店铺自定义的推广锁客时效 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/headsupplier/api_getshoplocktime.html */
  ecLeagueHeadsupplierLockcustomertimeGetlocktime: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/lockcustomertime/getlocktime',
    title: '获取店铺自定义的推广锁客时效',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/headsupplier/api_getshoplocktime.html',
  },
  /** 更新机构合作关系 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/headsupplier/api_update_hs_relation.html */
  ecLeagueHeadsupplierHeadsupplierrelationUpdate: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/headsupplierrelation/update',
    title: '更新机构合作关系',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/headsupplier/api_update_hs_relation.html',
  },
  /** 机构给帮卖机构供货 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_add_secondheadsupplier_item.html */
  ecLeagueHeadsupplierSecondheadsupplieritemAdd: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/secondheadsupplieritem/add',
    title: '机构给帮卖机构供货',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_add_secondheadsupplier_item.html',
  },
  /** 机构添加合作商品 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_addcooperativeitem.html */
  ecLeagueHeadsupplierCooperativeitemAdd: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/cooperativeitem/add',
    title: '机构添加合作商品',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_addcooperativeitem.html',
  },
  /** 配置达人佣金率 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_addsubitem.html */
  ecLeagueHeadsupplierSubitemAdd: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/subitem/add',
    title: '配置达人佣金率',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_addsubitem.html',
  },
  /** 机构获取已添加的推广计划 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_get_secondheadsupplier_itemlist.html */
  ecLeagueHeadsupplierSecondheadsupplieritemGetlist: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/secondheadsupplieritem/getlist',
    title: '机构获取已添加的推广计划',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_get_secondheadsupplier_itemlist.html',
  },
  /** 获取合作商品列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_getcooperativeitemlist.html */
  ecLeagueHeadsupplierCooperativeitemListGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/cooperativeitem/list/get',
    title: '获取合作商品列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_getcooperativeitemlist.html',
  },
  /** 获取商品推广参数详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_getitempromotiondetail.html */
  ecLeagueHeadsupplierItemPromotiondetailGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/item/promotiondetail/get',
    title: '获取商品推广参数详情',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_getitempromotiondetail.html',
  },
  /** 获取机构配置达人佣金计划列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_getsubitemlist.html */
  ecLeagueHeadsupplierSubitemListGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/subitem/list/get',
    title: '获取机构配置达人佣金计划列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_getsubitemlist.html',
  },
  /** 获取机构选品广场商品列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_listselectionproducts.html */
  ecLeagueHeadsupplierSelectionproductsListGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/selectionproducts/list/get',
    title: '获取机构选品广场商品列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_listselectionproducts.html',
  },
  /** 机构更新或删除已添加的推广计划 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_update_secondheadsupplier_item.html */
  ecLeagueHeadsupplierSecondheadsupplieritemUpdate: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/secondheadsupplieritem/update',
    title: '机构更新或删除已添加的推广计划',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_update_secondheadsupplier_item.html',
  },
  /** 添加机构商品到橱窗 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_addwindow.html */
  ecLeagueHeadsupplierWindowAdd: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/window/add',
    title: '添加机构商品到橱窗',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_addwindow.html',
  },
  /** 查询橱窗上机构商品列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_getallwindow.html */
  ecLeagueHeadsupplierWindowGetall: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/window/getall',
    title: '查询橱窗上机构商品列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_getallwindow.html',
  },
  /** 获取达人橱窗授权链接 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_getwindowauth.html */
  ecLeagueHeadsupplierWindowauthGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/windowauth/get',
    title: '获取达人橱窗授权链接',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_getwindowauth.html',
  },
  /** 获取达人橱窗授权状态 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_getwindowauthstatus.html */
  ecLeagueHeadsupplierWindowauthStatusGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/windowauth/status/get',
    title: '获取达人橱窗授权状态',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_getwindowauthstatus.html',
  },
  /** 查询橱窗上机构商品详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_getwindowdetail.html */
  ecLeagueHeadsupplierWindowGetdetail: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/window/getdetail',
    title: '查询橱窗上机构商品详情',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_getwindowdetail.html',
  },
  /** 从橱窗移除机构商品 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_removewindow.html */
  ecLeagueHeadsupplierWindowRemove: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/window/remove',
    title: '从橱窗移除机构商品',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_removewindow.html',
  },
  /** 获取佣金单详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/order/api_getorder.html */
  ecLeagueHeadsupplierOrderGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/order/get',
    title: '获取佣金单详情',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/order/api_getorder.html',
  },
  /** 获取佣金单列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/order/api_getorderlist.html */
  ecLeagueHeadsupplierOrderListGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/order/list/get',
    title: '获取佣金单列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/order/api_getorderlist.html',
  },
  /** 获取机构绑定的推客信息 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_getbindsharerlist.html */
  ecPromoterGetBindSharerList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_bind_sharer_list',
    title: '获取机构绑定的推客信息',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_getbindsharerlist.html',
  },
  /** 获取合作的小店列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_getbindshoplist.html */
  ecPromoterGetBindShopList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_bind_shop_list',
    title: '获取合作的小店列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_getbindshoplist.html',
  },
  /** 获取合作小店的关联账号列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_getbindshoppromoterlist.html */
  ecPromoterGetBindShopPromoterList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_bind_shop_promoter_list',
    title: '获取合作小店的关联账号列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_getbindshoppromoterlist.html',
  },
  /** 获取合作的带货者列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_getbindtalentlist.html */
  ecPromoterGetBindTalentList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_bind_talent_list',
    title: '获取合作的带货者列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_getbindtalentlist.html',
  },
  /** 获取推客的注册状态以及和机构的绑定状态 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_getpromoterregisterandbindstatus.html */
  ecPromoterGetPromoterRegisterAndBindStatus: {
    method: 'POST',
    path: '/channels/ec/promoter/get_promoter_register_and_bind_status',
    title: '获取推客的注册状态以及和机构的绑定状态',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_getpromoterregisterandbindstatus.html',
  },
  /** 机构解绑推客 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_mmecpromoter_headsupplier_unbind_promoter.html */
  ecPromoterHeadsupplierUnbindPromoter: {
    method: 'POST',
    path: '/channels/ec/promoter/headsupplier_unbind_promoter',
    title: '机构解绑推客',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_mmecpromoter_headsupplier_unbind_promoter.html',
  },
  /** 设置推客的的分佣类型和比例信息 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_setsharercommissioninfo.html */
  ecPromoterSetSharerCommissionInfo: {
    method: 'POST',
    path: '/channels/ec/promoter/set_sharer_commission_info',
    title: '设置推客的的分佣类型和比例信息',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_setsharercommissioninfo.html',
  },
  /** 获取小店关联账号的文章列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/article/api_getshopmparticlelist.html */
  ecPromoterGetShopMpArticleList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_shop_mp_article_list',
    title: '获取小店关联账号的文章列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/article/api_getshopmparticlelist.html',
  },
  /** 获取某个带货者可推广文章列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/article/api_gettalentbizarticlelist.html */
  ecPromoterGetTalentBizArticleList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_talent_biz_article_list',
    title: '获取某个带货者可推广文章列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/article/api_gettalentbizarticlelist.html',
  },
  /** 推客机构获取内容推广的自营商品订单详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/clue/api_getclue.html */
  ecLeagueHeadsupplierClueGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/clue/get',
    title: '推客机构获取内容推广的自营商品订单详情',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/clue/api_getclue.html',
  },
  /** 推客机构获取内容推广的自营商品订单列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/clue/api_getcluelist.html */
  ecLeagueHeadsupplierClueListGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/clue/list/get',
    title: '推客机构获取内容推广的自营商品订单列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/clue/api_getcluelist.html',
  },
  /** 获取分发给其他机构的优惠券 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_get_coupon_to_headsupplier.html */
  ecPromoterGetCouponToHeadsupplier: {
    method: 'POST',
    path: '/channels/ec/promoter/get_coupon_to_headsupplier',
    title: '获取分发给其他机构的优惠券',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_get_coupon_to_headsupplier.html',
  },
  /** 获取定向券ID列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotecooperativecouponlist.html */
  ecPromoterGetCooperativeCouponList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_cooperative_coupon_list',
    title: '获取定向券ID列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotecooperativecouponlist.html',
  },
  /** 获取券ID对应的详情内容 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotecoupondetail.html */
  ecPromoterGetCouponDetail: {
    method: 'POST',
    path: '/channels/ec/promoter/get_coupon_detail',
    title: '获取券ID对应的详情内容',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotecoupondetail.html',
  },
  /** 获取某个券ID对应的小程序内嵌微信小店优惠券推广参数 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotecouponpromotersharelink.html */
  ecPromoterGetCouponPromoterShareLink: {
    method: 'POST',
    path: '/channels/ec/promoter/get_coupon_promoter_share_link',
    title: '获取某个券ID对应的小程序内嵌微信小店优惠券推广参数',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotecouponpromotersharelink.html',
  },
  /** 获取某个券ID对应的推广二维码 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotecouponqrcode.html */
  ecPromoterGetCouponQrCode: {
    method: 'POST',
    path: '/channels/ec/promoter/get_coupon_qr_code',
    title: '获取某个券ID对应的推广二维码',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotecouponqrcode.html',
  },
  /** 获取某个券ID对应的推广短链 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotecouponshortlink.html */
  ecPromoterGetCouponShortLink: {
    method: 'POST',
    path: '/channels/ec/promoter/get_coupon_short_link',
    title: '获取某个券ID对应的推广短链',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotecouponshortlink.html',
  },
  /** 获取公开券ID列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotepublishcouponlist.html */
  ecPromoterGetPublicCouponList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_public_coupon_list',
    title: '获取公开券ID列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotepublishcouponlist.html',
  },
  /** 分发优惠券给其他机构 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_set_coupon_to_headsupplier.html */
  ecPromoterSetCouponToHeadsupplier: {
    method: 'POST',
    path: '/channels/ec/promoter/set_coupon_to_headsupplier',
    title: '分发优惠券给其他机构',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_set_coupon_to_headsupplier.html',
  },
  /** 获取推客对某个商品的推广短链 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getproductpromotionlinkinfo.html */
  ecPromoterGetProductPromotionLinkInfo: {
    method: 'POST',
    path: '/channels/ec/promoter/get_product_promotion_link_info',
    title: '获取推客对某个商品的推广短链',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getproductpromotionlinkinfo.html',
  },
  /** 获取推客对某个商品的推广二维码 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getproductpromotionqrcodeinfo.html */
  ecPromoterGetProductPromotionQrcodeInfo: {
    method: 'POST',
    path: '/channels/ec/promoter/get_product_promotion_qrcode_info',
    title: '获取推客对某个商品的推广二维码',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getproductpromotionqrcodeinfo.html',
  },
  /** 获取可推广的商品详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getpromoteproductdetail.html */
  ecPromoterGetPromoteProductDetail: {
    method: 'POST',
    path: '/channels/ec/promoter/get_promote_product_detail',
    title: '获取可推广的商品详情',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getpromoteproductdetail.html',
  },
  /** 获取可推广的商品id列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getpromoteproductlist.html */
  ecPromoterGetPromoteProductList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_promote_product_list',
    title: '获取可推广的商品id列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getpromoteproductlist.html',
  },
  /** 获取商品推广统计数据 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getpromoterproductsharestats.html */
  ecLeagueHeadsupplierPromoteractionGetproductsharestats: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/promoteraction/getproductsharestats',
    title: '获取商品推广统计数据',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getpromoterproductsharestats.html',
  },
  /** 获取某个推客某个商品的内嵌商品卡片product_promotion_link @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getpromotersingleproductpromotioninfo.html */
  ecPromoterGetPromoterSingleProductPromotionInfo: {
    method: 'POST',
    path: '/channels/ec/promoter/get_promoter_single_product_promotion_info',
    title: '获取某个推客某个商品的内嵌商品卡片product_promotion_link',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getpromotersingleproductpromotioninfo.html',
  },
  /** 获取推客的某个商品的推广分佣比例 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getsharerproductcommissioninfo.html */
  ecPromoterGetSharerProductCommissionInfo: {
    method: 'POST',
    path: '/channels/ec/promoter/get_sharer_product_commission_info',
    title: '获取推客的某个商品的推广分佣比例',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getsharerproductcommissioninfo.html',
  },
  /** 设置推客的单个商品的分佣比例信息 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_setsharerproductcommissioninfo.html */
  ecPromoterSetSharerProductCommissionInfo: {
    method: 'POST',
    path: '/channels/ec/promoter/set_sharer_product_commission_info',
    title: '设置推客的单个商品的分佣比例信息',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_setsharerproductcommissioninfo.html',
  },
  /** 获取某个带货者当前直播的带货商品列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivecommissionproductlist.html */
  ecPromoterGetLiveCommissionProductList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_live_commission_product_list',
    title: '获取某个带货者当前直播的带货商品列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivecommissionproductlist.html',
  },
  /** 生成某个带货者的用于直播预约的推广参数 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivenoticepromotersharelink.html */
  ecPromoterGetLiveNoticePromoterShareLink: {
    method: 'POST',
    path: '/channels/ec/promoter/get_live_notice_promoter_share_link',
    title: '生成某个带货者的用于直播预约的推广参数',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivenoticepromotersharelink.html',
  },
  /** 获取带货者的直播预约列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivenoticerecordlist.html */
  ecPromoterGetLiveNoticeRecordList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_live_notice_record_list',
    title: '获取带货者的直播预约列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivenoticerecordlist.html',
  },
  /** 为某个推客生成单个直播预约的推广二维码 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivenoticerecordqrcode.html */
  ecPromoterGetLiveNoticeRecordQrCode: {
    method: 'POST',
    path: '/channels/ec/promoter/get_live_notice_record_qr_code',
    title: '为某个推客生成单个直播预约的推广二维码',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivenoticerecordqrcode.html',
  },
  /** 获取直播预约的单个推客的推广预约人数 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivenoticereservationinfo.html */
  ecPromoterGetLiveNoticeReservationInfo: {
    method: 'POST',
    path: '/channels/ec/promoter/get_live_notice_reservation_info',
    title: '获取直播预约的单个推客的推广预约人数',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivenoticereservationinfo.html',
  },
  /** 获取直播预告推广统计数据 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivenoticestats.html */
  ecLeagueHeadsupplierPromoteractionGetlivenoticestats: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/promoteraction/getlivenoticestats',
    title: '获取直播预告推广统计数据',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivenoticestats.html',
  },
  /** 获取直播大场保护的提报二维码 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getliveprotectionqrcode.html */
  ecLeagueHeadsupplierLiveprotectionGetqrcode: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/liveprotection/getqrcode',
    title: '获取直播大场保护的提报二维码',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getliveprotectionqrcode.html',
  },
  /** 获取带货者的直播列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getliverecordlist.html */
  ecPromoterGetLiveRecordList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_live_record_list',
    title: '获取带货者的直播列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getliverecordlist.html',
  },
  /** 为某个推客生成单个直播的推广二维码 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getliverecordqrcode.html */
  ecPromoterGetLiveRecordQrCode: {
    method: 'POST',
    path: '/channels/ec/promoter/get_live_record_qr_code',
    title: '为某个推客生成单个直播的推广二维码',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getliverecordqrcode.html',
  },
  /** 获取直播推广统计数据 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getpromoterlivestats.html */
  ecLeagueHeadsupplierPromoteractionGetlivestats: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/promoteraction/getlivestats',
    title: '获取直播推广统计数据',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getpromoterlivestats.html',
  },
  /** 获取小店关联账号的当前直播的自营商品列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshoplivecommissionproductlist.html */
  ecPromoterGetShopLiveCommissionProductList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_shop_live_commission_product_list',
    title: '获取小店关联账号的当前直播的自营商品列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshoplivecommissionproductlist.html',
  },
  /** 为推客获取小店关联账号直播预约的推广参数 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshoplivenoticepromotersharelink.html */
  ecPromoterGetShopLiveNoticePromoterShareLink: {
    method: 'POST',
    path: '/channels/ec/promoter/get_shop_live_notice_promoter_share_link',
    title: '为推客获取小店关联账号直播预约的推广参数',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshoplivenoticepromotersharelink.html',
  },
  /** 获取小店关联账号的预约直播列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshoplivenoticerecordlist.html */
  ecPromoterGetShopLiveNoticeRecordList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_shop_live_notice_record_list',
    title: '获取小店关联账号的预约直播列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshoplivenoticerecordlist.html',
  },
  /** 为推客生成小店关联账号直播预约的推广二维码 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshoplivenoticerecordqrcode.html */
  ecPromoterGetShopLiveNoticeRecordQrCode: {
    method: 'POST',
    path: '/channels/ec/promoter/get_shop_live_notice_record_qr_code',
    title: '为推客生成小店关联账号直播预约的推广二维码',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshoplivenoticerecordqrcode.html',
  },
  /** 获取小店关联账号的直播列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshopliverecordlist.html */
  ecPromoterGetShopLiveRecordList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_shop_live_record_list',
    title: '获取小店关联账号的直播列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshopliverecordlist.html',
  },
  /** 为推客生成小店关联账号直播的推广二维码 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshopliverecordqrcode.html */
  ecPromoterGetShopLiveRecordQrCode: {
    method: 'POST',
    path: '/channels/ec/promoter/get_shop_live_record_qr_code',
    title: '为推客生成小店关联账号直播的推广二维码',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshopliverecordqrcode.html',
  },
  /** 获取带货者推广的短视频信息 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/video/api_getfeedlist.html */
  ecPromoterGetFeedList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_feed_list',
    title: '获取带货者推广的短视频信息',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/video/api_getfeedlist.html',
  },
  /** 生成某个带货者的某些短视频内嵌短视频卡片需要的feedtoken @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/video/api_getfeedpromotioninfo.html */
  ecPromoterGetFeedPromotionInfo: {
    method: 'POST',
    path: '/channels/ec/promoter/get_feed_promotion_info',
    title: '生成某个带货者的某些短视频内嵌短视频卡片需要的feedtoken',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/video/api_getfeedpromotioninfo.html',
  },
  /** 获取小店关联账号的短视频列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/video/api_getshopfeedlist.html */
  ecPromoterGetShopFeedList: {
    method: 'POST',
    path: '/channels/ec/promoter/get_shop_feed_list',
    title: '获取小店关联账号的短视频列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/video/api_getshopfeedlist.html',
  },
  /** 生成小店关联账号的短视频内嵌小程序推广信息 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/video/api_getshopfeedpromotioninfo.html */
  ecPromoterGetShopFeedPromotionInfo: {
    method: 'POST',
    path: '/channels/ec/promoter/get_shop_feed_promotion_info',
    title: '生成小店关联账号的短视频内嵌小程序推广信息',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/video/api_getshopfeedpromotioninfo.html',
  },
  /** 获取商品基础详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/shop/api_getproductdetail.html */
  ecLeagueHeadsupplierProductdetailGet: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/productdetail/get',
    title: '获取商品基础详情',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/shop/api_getproductdetail.html',
  },
  /** 获取订阅的商品列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/shop/api_getsubscribeproduct.html */
  ecLeagueHeadsupplierSubscriptionGetsubscribe: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/subscription/getsubscribe',
    title: '获取订阅的商品列表',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/shop/api_getsubscribeproduct.html',
  },
  /** 获取商品活动补贴信息 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/shop/api_league_get_product_activity_info.html */
  ecLeagueHeadsupplierProductGetactivity: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/product/getactivity',
    title: '获取商品活动补贴信息',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/shop/api_league_get_product_activity_info.html',
  },
  /** 商品订阅 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/shop/api_subscribeproduct.html */
  ecLeagueHeadsupplierSubscriptionSubscribe: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/subscription/subscribe',
    title: '商品订阅',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/shop/api_subscribeproduct.html',
  },
  /** 取消商品订阅 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/shop/api_unsubscribeproduct.html */
  ecLeagueHeadsupplierSubscriptionUnsubscribe: {
    method: 'POST',
    path: '/channels/ec/league/headsupplier/subscription/unsubscribe',
    title: '取消商品订阅',
    cat: 'leagueheadsupplier',
    doc: 'https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/shop/api_unsubscribeproduct.html',
  },
  // ===== shop =====
  /** 查询rid信息 @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/common/api_getridinfo.html */
  openapiRidGet: {
    method: 'POST',
    path: '/cgi-bin/openapi/rid/get',
    title: '查询rid信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/common/api_getridinfo.html',
  },
  /** 通过mediaid获取数据 @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_getdatabymediaid.html */
  ecBasicsMediaGet: {
    method: 'GET',
    path: '/channels/ec/basics/media/get',
    title: '通过mediaid获取数据',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_getdatabymediaid.html',
  },
  /** 上传图片 @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_img_upload.html */
  shopEcBasicsImgUpload: {
    method: 'POST',
    path: '/shop/ec/basics/img/upload',
    title: '上传图片',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_img_upload.html',
  },
  /** 上传资质图片 @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_qualificationupload.html */
  shopEcBasicsQualificationUpload: {
    method: 'POST',
    path: '/shop/ec/basics/qualification/upload',
    title: '上传资质图片',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_qualificationupload.html',
  },
  /** 完成视频上传 @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_video_finishupload.html */
  shopEcBasicsVideoFinishupload: {
    method: 'POST',
    path: '/shop/ec/basics/video/finishupload',
    title: '完成视频上传',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_video_finishupload.html',
  },
  /** 获取上传后的视频临时URL @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_video_getplayinfo.html */
  shopEcBasicsVideoGetplayinfo: {
    method: 'GET',
    path: '/shop/ec/basics/video/getplayinfo',
    title: '获取上传后的视频临时URL',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_video_getplayinfo.html',
  },
  /** 申请上传视频 @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_video_initupload.html */
  shopEcBasicsVideoInitupload: {
    method: 'POST',
    path: '/shop/ec/basics/video/initupload',
    title: '申请上传视频',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_video_initupload.html',
  },
  /** 上传视频数据分块 @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_video_uploadpart.html */
  shopEcBasicsVideoUploadpart: {
    method: 'POST',
    path: '/shop/ec/basics/video/uploadpart',
    title: '上传视频数据分块',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_video_uploadpart.html',
  },
  /** 新增品牌资质 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_addbrandlogic.html */
  shopEcBrandAdd: {
    method: 'POST',
    path: '/shop/ec/brand/add',
    title: '新增品牌资质',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/brand/api_addbrandlogic.html',
  },
  /** 撤回品牌资质审核 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_cancelauditbrandlogic.html */
  shopEcBrandAuditCancel: {
    method: 'POST',
    path: '/shop/ec/brand/audit/cancel',
    title: '撤回品牌资质审核',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/brand/api_cancelauditbrandlogic.html',
  },
  /** 删除品牌资质 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_deletebrandlogic.html */
  ecBrandDelete: {
    method: 'POST',
    path: '/channels/ec/brand/delete',
    title: '删除品牌资质',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/brand/api_deletebrandlogic.html',
  },
  /** 获取品牌库列表 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_getallbrandslogic.html */
  shopEcBrandAll: {
    method: 'POST',
    path: '/shop/ec/brand/all',
    title: '获取品牌库列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/brand/api_getallbrandslogic.html',
  },
  /** 获取品牌资质申请列表 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_getbrandlistlogic.html */
  ecBrandListGet: {
    method: 'POST',
    path: '/channels/ec/brand/list/get',
    title: '获取品牌资质申请列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/brand/api_getbrandlistlogic.html',
  },
  /** 获取品牌资质申请详情 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_getbrandlogic.html */
  ecBrandGet: {
    method: 'POST',
    path: '/channels/ec/brand/get',
    title: '获取品牌资质申请详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/brand/api_getbrandlogic.html',
  },
  /** 获取生效中的品牌资质列表 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_getvalidbrandlistlogic.html */
  ecBrandValidListGet: {
    method: 'POST',
    path: '/channels/ec/brand/valid/list/get',
    title: '获取生效中的品牌资质列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/brand/api_getvalidbrandlistlogic.html',
  },
  /** 更新品牌资质 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_updatebrandlogic.html */
  ecBrandUpdate: {
    method: 'POST',
    path: '/channels/ec/brand/update',
    title: '更新品牌资质',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/brand/api_updatebrandlogic.html',
  },
  /** 获取保证金类目规则 @see https://developers.weixin.qq.com/doc/store/shop/API/category-rule/api_get_category_rule.html */
  shopEcCategoryGetcategoryrule: {
    method: 'POST',
    path: '/shop/ec/category/getcategoryrule',
    title: '获取保证金类目规则',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/category-rule/api_get_category_rule.html',
  },
  /** 获取类目下商品发布规则 @see https://developers.weixin.qq.com/doc/store/shop/API/category-rule/api_getcategoryproductrule.html */
  shopEcCategoryGetcategoryproductrule: {
    method: 'POST',
    path: '/shop/ec/category/getcategoryproductrule',
    title: '获取类目下商品发布规则',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/category-rule/api_getcategoryproductrule.html',
  },
  /** 同意售后 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_acceptapply.html */
  ecAftersaleAcceptapply: {
    method: 'POST',
    path: '/channels/ec/aftersale/acceptapply',
    title: '同意售后',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_acceptapply.html',
  },
  /** 换货发货 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_acceptexchangereship.html */
  ecAftersaleAcceptexchangereship: {
    method: 'POST',
    path: '/channels/ec/aftersale/acceptexchangereship',
    title: '换货发货',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_acceptexchangereship.html',
  },
  /** 售后单兑换虚拟号 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_applyvirtualtelnum.html */
  ecAftersaleApplyvirtualtelnum: {
    method: 'POST',
    path: '/channels/ec/aftersale/applyvirtualtelnum',
    title: '售后单兑换虚拟号',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_applyvirtualtelnum.html',
  },
  /** 代用户发起售后 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_genaftersaleorder.html */
  ecAftersaleGenaftersaleorder: {
    method: 'POST',
    path: '/channels/ec/aftersale/genaftersaleorder',
    title: '代用户发起售后',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_genaftersaleorder.html',
  },
  /** 获取售后单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_getaftersalelist.html */
  ecAftersaleGetaftersalelist: {
    method: 'POST',
    path: '/channels/ec/aftersale/getaftersalelist',
    title: '获取售后单列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_getaftersalelist.html',
  },
  /** 获取售后单 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_getaftersaleorder.html */
  ecAftersaleGetaftersaleorder: {
    method: 'POST',
    path: '/channels/ec/aftersale/getaftersaleorder',
    title: '获取售后单',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_getaftersaleorder.html',
  },
  /** 获取全量售后原因 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_getaftersalereason.html */
  ecAftersaleReasonGet: {
    method: 'POST',
    path: '/channels/ec/aftersale/reason/get',
    title: '获取全量售后原因',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_getaftersalereason.html',
  },
  /** 获取拒绝售后原因 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_getaftersalerejectreason.html */
  ecAftersaleRejectreasonGet: {
    method: 'POST',
    path: '/channels/ec/aftersale/rejectreason/get',
    title: '获取拒绝售后原因',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_getaftersalerejectreason.html',
  },
  /** 商家处理极速换货用户退货 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_handlefastexchangereceipt.html */
  ecAftersaleHandlefastexchangereceipt: {
    method: 'POST',
    path: '/channels/ec/aftersale/handlefastexchangereceipt',
    title: '商家处理极速换货用户退货',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_handlefastexchangereceipt.html',
  },
  /** 商家协商 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_merchantupdateaftersale.html */
  ecAftersaleMerchantupdateaftersale: {
    method: 'POST',
    path: '/channels/ec/aftersale/merchantupdateaftersale',
    title: '商家协商',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_merchantupdateaftersale.html',
  },
  /** 查询可换货列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_mmecapi_getexchangeableskulist.html */
  ecAftersaleGetexchangeableskulist: {
    method: 'POST',
    path: '/channels/ec/aftersale/getexchangeableskulist',
    title: '查询可换货列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_mmecapi_getexchangeableskulist.html',
  },
  /** 代用户发起退差价 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_refundpricediff.html */
  ecAftersaleRefundpricediff: {
    method: 'POST',
    path: '/channels/ec/aftersale/refundpricediff',
    title: '代用户发起退差价',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_refundpricediff.html',
  },
  /** 拒绝售后 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_rejectapply.html */
  ecAftersaleRejectapply: {
    method: 'POST',
    path: '/channels/ec/aftersale/rejectapply',
    title: '拒绝售后',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_rejectapply.html',
  },
  /** 换货拒绝发货 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_rejectexchangereship.html */
  ecAftersaleRejectexchangereship: {
    method: 'POST',
    path: '/channels/ec/aftersale/rejectexchangereship',
    title: '换货拒绝发货',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_rejectexchangereship.html',
  },
  /** 上传退款凭证 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_uploadrefundcertificate.html */
  ecAftersaleUploadrefundcertificate: {
    method: 'POST',
    path: '/channels/ec/aftersale/uploadrefundcertificate',
    title: '上传退款凭证',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_uploadrefundcertificate.html',
  },
  /** 商家补充纠纷单留言 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/complaint/api_addcomplaintmaterial.html */
  ecAftersaleAddcomplaintmaterial: {
    method: 'POST',
    path: '/channels/ec/aftersale/addcomplaintmaterial',
    title: '商家补充纠纷单留言',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/complaint/api_addcomplaintmaterial.html',
  },
  /** 商家举证 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/complaint/api_addcomplaintproof.html */
  ecAftersaleAddcomplaintproof: {
    method: 'POST',
    path: '/channels/ec/aftersale/addcomplaintproof',
    title: '商家举证',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/complaint/api_addcomplaintproof.html',
  },
  /** 获取纠纷单 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/complaint/api_getcomplaintorder.html */
  ecAftersaleGetcomplaintorder: {
    method: 'POST',
    path: '/channels/ec/aftersale/getcomplaintorder',
    title: '获取纠纷单',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/complaint/api_getcomplaintorder.html',
  },
  /** 同步工单 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/complaint/api_mmecapi_syncworkorder.html */
  ecAftersaleSyncworkorder: {
    method: 'POST',
    path: '/channels/ec/aftersale/syncworkorder',
    title: '同步工单',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/complaint/api_mmecapi_syncworkorder.html',
  },
  /** 获取保障单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_getguaranteeorder.html */
  ecAftersaleGetguaranteeorder: {
    method: 'POST',
    path: '/channels/ec/aftersale/getguaranteeorder',
    title: '获取保障单详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_getguaranteeorder.html',
  },
  /** 商家同意保障单申请 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_merchantacceptguarantee.html */
  ecAftersaleMerchantacceptguarantee: {
    method: 'POST',
    path: '/channels/ec/aftersale/merchantacceptguarantee',
    title: '商家同意保障单申请',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_merchantacceptguarantee.html',
  },
  /** 商家协商保障单 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_merchantmodifyguarantee.html */
  ecAftersaleMerchantmodifyguarantee: {
    method: 'POST',
    path: '/channels/ec/aftersale/merchantmodifyguarantee',
    title: '商家协商保障单',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_merchantmodifyguarantee.html',
  },
  /** 商家举证保障单 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_merchantproofguarantee.html */
  ecAftersaleMerchantproofguarantee: {
    method: 'POST',
    path: '/channels/ec/aftersale/merchantproofguarantee',
    title: '商家举证保障单',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_merchantproofguarantee.html',
  },
  /** 商家拒绝保障单申请 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_merchantrefuseguarantee.html */
  ecAftersaleMerchantrefuseguarantee: {
    method: 'POST',
    path: '/channels/ec/aftersale/merchantrefuseguarantee',
    title: '商家拒绝保障单申请',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_merchantrefuseguarantee.html',
  },
  /** 商家获取保障单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_searchguaranteeorder.html */
  ecAftersaleSearchguaranteeorder: {
    method: 'POST',
    path: '/channels/ec/aftersale/searchguaranteeorder',
    title: '商家获取保障单列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_searchguaranteeorder.html',
  },
  /** 申请类目 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_addcategory.html */
  ecCategoryAdd: {
    method: 'POST',
    path: '/channels/ec/category/add',
    title: '申请类目',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_addcategory.html',
  },
  /** 撤销类目审核 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_cancelauditcategory.html */
  shopEcCategoryAuditCancel: {
    method: 'POST',
    path: '/shop/ec/category/audit/cancel',
    title: '撤销类目审核',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_cancelauditcategory.html',
  },
  /** 获取所有类目 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getallcategory.html */
  shopEcCategoryAll: {
    method: 'GET',
    path: '/shop/ec/category/all',
    title: '获取所有类目',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getallcategory.html',
  },
  /** 获取店铺的类目审核单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getbizcatflowdetail.html */
  shopEcCategoryGetbizcatflowdetail: {
    method: 'POST',
    path: '/shop/ec/category/getbizcatflowdetail',
    title: '获取店铺的类目审核单详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getbizcatflowdetail.html',
  },
  /** 获取店铺的类目审核单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getbizcatflowlist.html */
  shopEcCategoryGetbizcatflowlist: {
    method: 'POST',
    path: '/shop/ec/category/getbizcatflowlist',
    title: '获取店铺的类目审核单列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getbizcatflowlist.html',
  },
  /** 获取类目信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getcategorydetail.html */
  shopEcCategoryDetail: {
    method: 'POST',
    path: '/shop/ec/category/detail',
    title: '获取类目信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getcategorydetail.html',
  },
  /** 获取店铺的类目权限详情 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getcategoryrelationdetail.html */
  shopEcCategoryGetCategoryRelationDetail: {
    method: 'POST',
    path: '/shop/ec/category/get_category_relation_detail',
    title: '获取店铺的类目权限详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getcategoryrelationdetail.html',
  },
  /** 获取店铺的类目权限列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getcategoryrelationlist.html */
  shopEcCategoryGetCategoryRelationList: {
    method: 'POST',
    path: '/shop/ec/category/get_category_relation_list',
    title: '获取店铺的类目权限列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getcategoryrelationlist.html',
  },
  /** 添加地址 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/address/api_addaddress.html */
  ecMerchantAddressAdd: {
    method: 'POST',
    path: '/channels/ec/merchant/address/add',
    title: '添加地址',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/address/api_addaddress.html',
  },
  /** 删除地址 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/address/api_deleteaddress.html */
  ecMerchantAddressDelete: {
    method: 'POST',
    path: '/channels/ec/merchant/address/delete',
    title: '删除地址',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/address/api_deleteaddress.html',
  },
  /** 获取地址详情 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/address/api_getaddress.html */
  ecMerchantAddressGet: {
    method: 'POST',
    path: '/channels/ec/merchant/address/get',
    title: '获取地址详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/address/api_getaddress.html',
  },
  /** 获取地址列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/address/api_getaddresslist.html */
  ecMerchantAddressList: {
    method: 'POST',
    path: '/channels/ec/merchant/address/list',
    title: '获取地址列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/address/api_getaddresslist.html',
  },
  /** 更新地址 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/address/api_updateaddress.html */
  ecMerchantAddressUpdate: {
    method: 'POST',
    path: '/channels/ec/merchant/address/update',
    title: '更新地址',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/address/api_updateaddress.html',
  },
  /** 订单补发货 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/delivery/api_delivery_compensation.html */
  ecOrderDeliveryCompensation: {
    method: 'POST',
    path: '/channels/ec/order/delivery/compensation',
    title: '订单补发货',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/delivery/api_delivery_compensation.html',
  },
  /** 获取快递公司列表-旧 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/delivery/api_getdeliverycompanylist.html */
  ecOrderDeliverycompanylistGet: {
    method: 'POST',
    path: '/channels/ec/order/deliverycompanylist/get',
    title: '获取快递公司列表-旧',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/delivery/api_getdeliverycompanylist.html',
  },
  /** 获取快递公司列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/delivery/api_getdeliverycompanylistnew.html */
  ecOrderDeliverycompanylistNewGet: {
    method: 'POST',
    path: '/channels/ec/order/deliverycompanylist/new/get',
    title: '获取快递公司列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/delivery/api_getdeliverycompanylistnew.html',
  },
  /** 订单发货 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/delivery/api_senddelivery.html */
  ecOrderDeliverySend: {
    method: 'POST',
    path: '/channels/ec/order/delivery/send',
    title: '订单发货',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/delivery/api_senddelivery.html',
  },
  /** 电子面单子件追加 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_addsuborder.html */
  ecLogisticsEwaybillBizOrderAddsuborder: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/order/addsuborder',
    title: '电子面单子件追加',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_addsuborder.html',
  },
  /** 批量打印通知 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_batchprintorder.html */
  ecLogisticsEwaybillBizOrderBatchprint: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/order/batchprint',
    title: '批量打印通知',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_batchprintorder.html',
  },
  /** 电子面单取消下单 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_cancelorder.html */
  ecLogisticsEwaybillBizOrderCancel: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/order/cancel',
    title: '电子面单取消下单',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_cancelorder.html',
  },
  /** 电子面单取号 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_createorder.html */
  ecLogisticsEwaybillBizOrderCreate: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/order/create',
    title: '电子面单取号',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_createorder.html',
  },
  /** 新增面单模板 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_createtemplate.html */
  ecLogisticsEwaybillBizTemplateCreate: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/template/create',
    title: '新增面单模板',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_createtemplate.html',
  },
  /** 删除面单模版 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_deltemplate.html */
  ecLogisticsEwaybillBizTemplateDelete: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/template/delete',
    title: '删除面单模版',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_deltemplate.html',
  },
  /** 获取面单标准模板 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_get_template_config.html */
  ecLogisticsEwaybillBizTemplateConfig: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/template/config',
    title: '获取面单标准模板',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_get_template_config.html',
  },
  /** 查询开通的电子面单网点/账号信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_getacct.html */
  ecLogisticsEwaybillBizAccountGet: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/account/get',
    title: '查询开通的电子面单网点/账号信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_getacct.html',
  },
  /** 查询开通的快递公司列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_getdeliverylist.html */
  ecLogisticsEwaybillBizDeliveryGet: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/delivery/get',
    title: '查询开通的快递公司列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_getdeliverylist.html',
  },
  /** 查询面单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_getorder.html */
  ecLogisticsEwaybillBizOrderGet: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/order/get',
    title: '查询面单详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_getorder.html',
  },
  /** 获取面单模板信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_gettemplate.html */
  ecLogisticsEwaybillBizTemplateGet: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/template/get',
    title: '获取面单模板信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_gettemplate.html',
  },
  /** 根据模板ID获取面单模板信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_gettemplatebyid.html */
  ecLogisticsEwaybillBizTemplateGetbyid: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/template/getbyid',
    title: '根据模板ID获取面单模板信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_gettemplatebyid.html',
  },
  /** 电子面单预取号 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_precreateorder.html */
  ecLogisticsEwaybillBizOrderPrecreate: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/order/precreate',
    title: '电子面单预取号',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_precreateorder.html',
  },
  /** 打印成功通知 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_printorder.html */
  ecLogisticsEwaybillBizOrderPrint: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/order/print',
    title: '打印成功通知',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_printorder.html',
  },
  /** 更新面单模版 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_updatetemplate.html */
  ecLogisticsEwaybillBizTemplateUpdate: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/template/update',
    title: '更新面单模版',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_updatetemplate.html',
  },
  /** 获取打印报文 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_get_print_content.html */
  ecLogisticsEwaybillBizPrintGet: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/print/get',
    title: '获取打印报文',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_get_print_content.html',
  },
  /** 增加运费模版 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/merchant/api_addfreighttemplate.html */
  ecMerchantAddfreighttemplate: {
    method: 'POST',
    path: '/channels/ec/merchant/addfreighttemplate',
    title: '增加运费模版',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/merchant/api_addfreighttemplate.html',
  },
  /** 查询运费模版 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/merchant/api_getfreighttemplatedetail.html */
  ecMerchantGetfreighttemplatedetail: {
    method: 'POST',
    path: '/channels/ec/merchant/getfreighttemplatedetail',
    title: '查询运费模版',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/merchant/api_getfreighttemplatedetail.html',
  },
  /** 获取运费模板列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/merchant/api_getfreighttemplatelist.html */
  ecMerchantGetfreighttemplatelist: {
    method: 'POST',
    path: '/channels/ec/merchant/getfreighttemplatelist',
    title: '获取运费模板列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/merchant/api_getfreighttemplatelist.html',
  },
  /** 更新运费模版 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/merchant/api_updatefreighttemplate.html */
  ecMerchantUpdatefreighttemplate: {
    method: 'POST',
    path: '/channels/ec/merchant/updatefreighttemplate',
    title: '更新运费模版',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/merchant/api_updatefreighttemplate.html',
  },
  /** 同意用户修改收货地址申请 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_acceptorderaddressmodifyapply.html */
  ecOrderAddressmodifyAccept: {
    method: 'POST',
    path: '/channels/ec/order/addressmodify/accept',
    title: '同意用户修改收货地址申请',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_acceptorderaddressmodifyapply.html',
  },
  /** 申请查看订单真实号码 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_applyrealnumber.html */
  ecOrderRealnumberApply: {
    method: 'POST',
    path: '/channels/ec/order/realnumber/apply',
    title: '申请查看订单真实号码',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_applyrealnumber.html',
  },
  /** 订单再次申请虚拟号 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_applyvirtualnumberagain.html */
  ecOrderVirtualnumberApplyagain: {
    method: 'POST',
    path: '/channels/ec/order/virtualnumber/applyagain',
    title: '订单再次申请虚拟号',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_applyvirtualnumberagain.html',
  },
  /** 同意待发货前更换sku请求 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_approvepreshipmentchangesku.html */
  ecOrderPreshipmentchangeskuApprove: {
    method: 'POST',
    path: '/channels/ec/order/preshipmentchangesku/approve',
    title: '同意待发货前更换sku请求',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_approvepreshipmentchangesku.html',
  },
  /** 修改物流信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_changedeliveryinfo.html */
  ecOrderDeliveryinfoUpdate: {
    method: 'POST',
    path: '/channels/ec/order/deliveryinfo/update',
    title: '修改物流信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_changedeliveryinfo.html',
  },
  /** 修改订单备注 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_changemerchantnotes.html */
  ecOrderMerchantnotesUpdate: {
    method: 'POST',
    path: '/channels/ec/order/merchantnotes/update',
    title: '修改订单备注',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_changemerchantnotes.html',
  },
  /** 修改订单地址 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_changeorderaddress.html */
  ecOrderAddressUpdate: {
    method: 'POST',
    path: '/channels/ec/order/address/update',
    title: '修改订单地址',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_changeorderaddress.html',
  },
  /** 修改订单价格 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_changeorderprice.html */
  ecOrderPriceUpdate: {
    method: 'POST',
    path: '/channels/ec/order/price/update',
    title: '修改订单价格',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_changeorderprice.html',
  },
  /** 解密订单中的详细收货信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_decodesensitiveinfo.html */
  ecOrderSensitiveinfoDecode: {
    method: 'POST',
    path: '/channels/ec/order/sensitiveinfo/decode',
    title: '解密订单中的详细收货信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_decodesensitiveinfo.html',
  },
  /** 订单虚拟号延期 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_delayvirtualnumber.html */
  ecOrderVirtualnumberDelay: {
    method: 'POST',
    path: '/channels/ec/order/virtualnumber/delay',
    title: '订单虚拟号延期',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_delayvirtualnumber.html',
  },
  /** 获取订单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getorder.html */
  ecOrderGet: {
    method: 'POST',
    path: '/channels/ec/order/get',
    title: '获取订单详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getorder.html',
  },
  /** 获取订单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getorderlist.html */
  ecOrderListGet: {
    method: 'POST',
    path: '/channels/ec/order/list/get',
    title: '获取订单列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getorderlist.html',
  },
  /** 获取礼物单的子单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getpresentsuborder.html */
  ecOrderPresentsuborderGet: {
    method: 'POST',
    path: '/channels/ec/order/presentsuborder/get',
    title: '获取礼物单的子单列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getpresentsuborder.html',
  },
  /** 获取所有待发货前更换sku待处理请求 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getpreshipmentchangeskuwaithandlelist.html */
  ecOrderPreshipmentchangeskuGet: {
    method: 'POST',
    path: '/channels/ec/order/preshipmentchangesku/get',
    title: '获取所有待发货前更换sku待处理请求',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getpreshipmentchangeskuwaithandlelist.html',
  },
  /** 查看订单真实号审核状态 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getrealnumberviewaudit.html */
  ecOrderRealnumberviewauditGet: {
    method: 'POST',
    path: '/channels/ec/order/realnumberviewaudit/get',
    title: '查看订单真实号审核状态',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getrealnumberviewaudit.html',
  },
  /** 礼物订单新增备注信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_presentnote.html */
  ecOrderPresentnoteAdd: {
    method: 'POST',
    path: '/channels/ec/order/presentnote/add',
    title: '礼物订单新增备注信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_presentnote.html',
  },
  /** 添加待认证的手机号 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_privatenumberaddphone.html */
  ecMerchantPrivatenumberAddphone: {
    method: 'POST',
    path: '/channels/ec/merchant/privatenumber/addphone',
    title: '添加待认证的手机号',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_privatenumberaddphone.html',
  },
  /** 获取小店手机号认证状态 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_privatenumbergetshopphone.html */
  ecMerchantPrivatenumberGetphone: {
    method: 'POST',
    path: '/channels/ec/merchant/privatenumber/getphone',
    title: '获取小店手机号认证状态',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_privatenumbergetshopphone.html',
  },
  /** 获取短信验证码 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_privatenumbersendverifycode.html */
  ecMerchantPrivatenumberSendverifycode: {
    method: 'POST',
    path: '/channels/ec/merchant/privatenumber/sendverifycode',
    title: '获取短信验证码',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_privatenumbersendverifycode.html',
  },
  /** 获取发货协商结果 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_querydeliverynegotiation.html */
  ecOrderDeliverynegotiationResultGet: {
    method: 'POST',
    path: '/channels/ec/order/deliverynegotiation/result/get',
    title: '获取发货协商结果',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_querydeliverynegotiation.html',
  },
  /** 拒绝用户修改收货地址申请 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_rejectorderaddressmodifyapply.html */
  ecOrderAddressmodifyReject: {
    method: 'POST',
    path: '/channels/ec/order/addressmodify/reject',
    title: '拒绝用户修改收货地址申请',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_rejectorderaddressmodifyapply.html',
  },
  /** 拒绝待发货前更换sku请求 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_rejectpreshipmentchangesku.html */
  ecOrderPreshipmentchangeskuReject: {
    method: 'POST',
    path: '/channels/ec/order/preshipmentchangesku/reject',
    title: '拒绝待发货前更换sku请求',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_rejectpreshipmentchangesku.html',
  },
  /** 订单搜索 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_searchorder.html */
  ecOrderSearch: {
    method: 'POST',
    path: '/channels/ec/order/search',
    title: '订单搜索',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_searchorder.html',
  },
  /** 提交发货协商申请 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_submitdeliverynegotiation.html */
  ecOrderDeliverynegotiationSubmit: {
    method: 'POST',
    path: '/channels/ec/order/deliverynegotiation/submit',
    title: '提交发货协商申请',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_submitdeliverynegotiation.html',
  },
  /** 上传生鲜质检信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_submitfreshinspectinfo.html */
  ecOrderFreshinspectSubmit: {
    method: 'POST',
    path: '/channels/ec/order/freshinspect/submit',
    title: '上传生鲜质检信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_submitfreshinspectinfo.html',
  },
  /** 添加非卖商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_addgiftproduct.html */
  ecProductGiftAdd: {
    method: 'POST',
    path: '/channels/ec/product/gift/add',
    title: '添加非卖商品',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_addgiftproduct.html',
  },
  /** 获取赠品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_getgiftproduct.html */
  ecProductGiftGet: {
    method: 'POST',
    path: '/channels/ec/product/gift/get',
    title: '获取赠品',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_getgiftproduct.html',
  },
  /** 获取赠品列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_getgiftproductlist.html */
  ecProductGiftListGet: {
    method: 'POST',
    path: '/channels/ec/product/gift/list/get',
    title: '获取赠品列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_getgiftproductlist.html',
  },
  /** 在售商品转赠品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_setproductasgift.html */
  ecProductGiftOnsaleSet: {
    method: 'POST',
    path: '/channels/ec/product/gift/onsale/set',
    title: '在售商品转赠品',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_setproductasgift.html',
  },
  /** 更新非卖商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_updategiftproduct.html */
  ecProductGiftUpdate: {
    method: 'POST',
    path: '/channels/ec/product/gift/update',
    title: '更新非卖商品',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_updategiftproduct.html',
  },
  /** 更新赠品库存 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_updategiftstock.html */
  ecProductGiftStockUpdate: {
    method: 'POST',
    path: '/channels/ec/product/gift/stock/update',
    title: '更新赠品库存',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_updategiftstock.html',
  },
  /** 创建赠品活动 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/giftactivity/api_addgiftactivity.html */
  ecProductActivityAdd: {
    method: 'POST',
    path: '/channels/ec/product/activity/add',
    title: '创建赠品活动',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/giftactivity/api_addgiftactivity.html',
  },
  /** 删除赠品活动 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/giftactivity/api_deletegiftactivity.html */
  ecProductActivityDel: {
    method: 'POST',
    path: '/channels/ec/product/activity/del',
    title: '删除赠品活动',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/giftactivity/api_deletegiftactivity.html',
  },
  /** 停止赠品活动 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/giftactivity/api_stopgiftactivity.html */
  ecProductActivityStop: {
    method: 'POST',
    path: '/channels/ec/product/activity/stop',
    title: '停止赠品活动',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/giftactivity/api_stopgiftactivity.html',
  },
  /** 添加限时抢购任务 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/limiteddiscounttask/api_addlimiteddiscounttask.html */
  ecProductLimiteddiscounttaskAdd: {
    method: 'POST',
    path: '/channels/ec/product/limiteddiscounttask/add',
    title: '添加限时抢购任务',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/limiteddiscounttask/api_addlimiteddiscounttask.html',
  },
  /** 删除限时抢购任务 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/limiteddiscounttask/api_deletelimiteddiscounttask.html */
  ecProductLimiteddiscounttaskDelete: {
    method: 'POST',
    path: '/channels/ec/product/limiteddiscounttask/delete',
    title: '删除限时抢购任务',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/limiteddiscounttask/api_deletelimiteddiscounttask.html',
  },
  /** 获取限时抢购任务列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/limiteddiscounttask/api_getlimiteddiscounttasklist.html */
  ecProductLimiteddiscounttaskListGet: {
    method: 'POST',
    path: '/channels/ec/product/limiteddiscounttask/list/get',
    title: '获取限时抢购任务列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/limiteddiscounttask/api_getlimiteddiscounttasklist.html',
  },
  /** 停止限时抢购任务 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/limiteddiscounttask/api_stoplimiteddiscounttask.html */
  ecProductLimiteddiscounttaskStop: {
    method: 'POST',
    path: '/channels/ec/product/limiteddiscounttask/stop',
    title: '停止限时抢购任务',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/limiteddiscounttask/api_stoplimiteddiscounttask.html',
  },
  /** 更新限时抢购任务 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/limiteddiscounttask/api_updatelimiteddiscounttask.html */
  ecProductLimiteddiscounttaskUpdate: {
    method: 'POST',
    path: '/channels/ec/product/limiteddiscounttask/update',
    title: '更新限时抢购任务',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/limiteddiscounttask/api_updatelimiteddiscounttask.html',
  },
  /** 添加商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_addproduct.html */
  ecProductAdd: {
    method: 'POST',
    path: '/channels/ec/product/add',
    title: '添加商品',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_addproduct.html',
  },
  /** 商品立即开售 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_begintimingsale.html */
  ecProductBegintimingsale: {
    method: 'POST',
    path: '/channels/ec/product/begintimingsale',
    title: '商品立即开售',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_begintimingsale.html',
  },
  /** 撤回商品审核 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_cancelauditproduct.html */
  ecProductAuditCancel: {
    method: 'POST',
    path: '/channels/ec/product/audit/cancel',
    title: '撤回商品审核',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_cancelauditproduct.html',
  },
  /** 取消商品开售 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_canceltimingsale.html */
  ecProductCanceltimingsale: {
    method: 'POST',
    path: '/channels/ec/product/canceltimingsale',
    title: '取消商品开售',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_canceltimingsale.html',
  },
  /** 发品前校验 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_categoryprecheck.html */
  ecProductCategoryprecheck: {
    method: 'POST',
    path: '/channels/ec/product/categoryprecheck',
    title: '发品前校验',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_categoryprecheck.html',
  },
  /** 删除商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_deleteproduct.html */
  ecProductDelete: {
    method: 'POST',
    path: '/channels/ec/product/delete',
    title: '删除商品',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_deleteproduct.html',
  },
  /** 下架商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_delistingproduct.html */
  ecProductDelisting: {
    method: 'POST',
    path: '/channels/ec/product/delisting',
    title: '下架商品',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_delistingproduct.html',
  },
  /** 站内外商品属性映射 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_externalproductmapping.html */
  ecProductExternalproductmapping: {
    method: 'POST',
    path: '/channels/ec/product/externalproductmapping',
    title: '站内外商品属性映射',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_externalproductmapping.html',
  },
  /** 商品属性映射及推荐 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_externalproductmappingnew.html */
  ecProductExternalproductmappingnew: {
    method: 'POST',
    path: '/channels/ec/product/externalproductmappingnew',
    title: '商品属性映射及推荐',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_externalproductmappingnew.html',
  },
  /** 获取商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproduct.html */
  ecProductGet: {
    method: 'POST',
    path: '/channels/ec/product/get',
    title: '获取商品',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproduct.html',
  },
  /** 获取商品提审限额 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproductauditquota.html */
  ecProductGetauditquota: {
    method: 'POST',
    path: '/channels/ec/product/getauditquota',
    title: '获取商品提审限额',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproductauditquota.html',
  },
  /** 获取商品上架策略 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproductauditstrategy.html */
  ecProductAuditstrategyGet: {
    method: 'POST',
    path: '/channels/ec/product/auditstrategy/get',
    title: '获取商品上架策略',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproductauditstrategy.html',
  },
  /** 获取商品H5短链 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproducth5url.html */
  ecProductH5urlGet: {
    method: 'POST',
    path: '/channels/ec/product/h5url/get',
    title: '获取商品H5短链',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproducth5url.html',
  },
  /** 获取商品列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproductlist.html */
  ecProductListGet: {
    method: 'POST',
    path: '/channels/ec/product/list/get',
    title: '获取商品列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproductlist.html',
  },
  /** 获取商品二维码 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproductqrcode.html */
  ecProductQrcodeGet: {
    method: 'POST',
    path: '/channels/ec/product/qrcode/get',
    title: '获取商品二维码',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproductqrcode.html',
  },
  /** 获取商品Scheme码 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproductscheme.html */
  ecProductSchemeGet: {
    method: 'POST',
    path: '/channels/ec/product/scheme/get',
    title: '获取商品Scheme码',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproductscheme.html',
  },
  /** 获取商品口令 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproducttaglink.html */
  ecProductTaglinkGet: {
    method: 'POST',
    path: '/channels/ec/product/taglink/get',
    title: '获取商品口令',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproducttaglink.html',
  },
  /** 上架商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_listingproduct.html */
  ecProductListing: {
    method: 'POST',
    path: '/channels/ec/product/listing',
    title: '上架商品',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_listingproduct.html',
  },
  /** 类目推荐 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_product_classify.html */
  ecProductCategoryClassify: {
    method: 'POST',
    path: '/channels/ec/product/category/classify',
    title: '类目推荐',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_product_classify.html',
  },
  /** 商品品牌推荐 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_productbrandrecommend.html */
  ecProductProductbrandrecommend: {
    method: 'POST',
    path: '/channels/ec/product/productbrandrecommend',
    title: '商品品牌推荐',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_productbrandrecommend.html',
  },
  /** 设置商品上架策略 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_setproductauditstrategy.html */
  ecProductAuditstrategySet: {
    method: 'POST',
    path: '/channels/ec/product/auditstrategy/set',
    title: '设置商品上架策略',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_setproductauditstrategy.html',
  },
  /** 更新商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_updateproduct.html */
  ecProductUpdate: {
    method: 'POST',
    path: '/channels/ec/product/update',
    title: '更新商品',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_updateproduct.html',
  },
  /** 免审更新商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_updateproductauditfree.html */
  ecProductAuditfree: {
    method: 'POST',
    path: '/channels/ec/product/auditfree',
    title: '免审更新商品',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_updateproductauditfree.html',
  },
  /** 新增第三方货源信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/mmecapi_addproductthirdpartysource.html */
  ecProductAddproductthirdpartysource: {
    method: 'POST',
    path: '/channels/ec/product/addproductthirdpartysource',
    title: '新增第三方货源信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/mmecapi_addproductthirdpartysource.html',
  },
  /** 批量获取库存信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/stock/api_batchgetstock.html */
  ecProductStockBatchget: {
    method: 'POST',
    path: '/channels/ec/product/stock/batchget',
    title: '批量获取库存信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/stock/api_batchgetstock.html',
  },
  /** 获取库存 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/stock/api_getstock.html */
  ecProductStockGet: {
    method: 'POST',
    path: '/channels/ec/product/stock/get',
    title: '获取库存',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/stock/api_getstock.html',
  },
  /** 获取库存流水 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/stock/api_getstockflow.html */
  ecProductStockGetflow: {
    method: 'POST',
    path: '/channels/ec/product/stock/getflow',
    title: '获取库存流水',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/stock/api_getstockflow.html',
  },
  /** 快速更新库存 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/stock/api_updatestock.html */
  ecProductStockUpdate: {
    method: 'POST',
    path: '/channels/ec/product/stock/update',
    title: '快速更新库存',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/stock/api_updatestock.html',
  },
  /** 获取授权视频号列表 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopfinderauthorizationlist.html */
  ecCompassShopFinderAuthorizationListGet: {
    method: 'POST',
    path: '/channels/ec/compass/shop/finder/authorization/list/get',
    title: '获取授权视频号列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopfinderauthorizationlist.html',
  },
  /** 获取带货达人列表 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopfinderlist.html */
  ecCompassShopFinderListGet: {
    method: 'POST',
    path: '/channels/ec/compass/shop/finder/list/get',
    title: '获取带货达人列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopfinderlist.html',
  },
  /** 获取带货数据概览 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopfinderoverall.html */
  ecCompassShopFinderOverallGet: {
    method: 'POST',
    path: '/channels/ec/compass/shop/finder/overall/get',
    title: '获取带货数据概览',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopfinderoverall.html',
  },
  /** 获取带货达人商品列表 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopfinderproductlist.html */
  ecCompassShopFinderProductListGet: {
    method: 'POST',
    path: '/channels/ec/compass/shop/finder/product/list/get',
    title: '获取带货达人商品列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopfinderproductlist.html',
  },
  /** 获取带货达人详情 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopfinderproductoverall.html */
  ecCompassShopFinderProductOverallGet: {
    method: 'POST',
    path: '/channels/ec/compass/shop/finder/product/overall/get',
    title: '获取带货达人详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopfinderproductoverall.html',
  },
  /** 获取店铺开播列表 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshoplivelist.html */
  ecCompassShopLiveListGet: {
    method: 'POST',
    path: '/channels/ec/compass/shop/live/list/get',
    title: '获取店铺开播列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshoplivelist.html',
  },
  /** 获取电商数据概览 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopoverall.html */
  ecCompassShopOverallGet: {
    method: 'POST',
    path: '/channels/ec/compass/shop/overall/get',
    title: '获取电商数据概览',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopoverall.html',
  },
  /** 获取商品详细信息 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopproductdata.html */
  ecCompassShopProductDataGet: {
    method: 'POST',
    path: '/channels/ec/compass/shop/product/data/get',
    title: '获取商品详细信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopproductdata.html',
  },
  /** 获取商品列表 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopproductlist.html */
  ecCompassShopProductListGet: {
    method: 'POST',
    path: '/channels/ec/compass/shop/product/list/get',
    title: '获取商品列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopproductlist.html',
  },
  /** 获取店铺人群数据 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopsaleprofiledata.html */
  ecCompassShopSaleProfileDataGet: {
    method: 'POST',
    path: '/channels/ec/compass/shop/sale/profile/data/get',
    title: '获取店铺人群数据',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopsaleprofiledata.html',
  },
  /** 创建优惠券 @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_createcoupon.html */
  ecCouponCreate: {
    method: 'POST',
    path: '/channels/ec/coupon/create',
    title: '创建优惠券',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_createcoupon.html',
  },
  /** 获取优惠券详情 @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_getcoupon.html */
  ecCouponGet: {
    method: 'POST',
    path: '/channels/ec/coupon/get',
    title: '获取优惠券详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_getcoupon.html',
  },
  /** 获取优惠券ID列表 @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_getcouponlist.html */
  ecCouponGetList: {
    method: 'POST',
    path: '/channels/ec/coupon/get_list',
    title: '获取优惠券ID列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_getcouponlist.html',
  },
  /** 获取用户优惠券详情 @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_getusercoupon.html */
  ecCouponGetUserCoupon: {
    method: 'POST',
    path: '/channels/ec/coupon/get_user_coupon',
    title: '获取用户优惠券详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_getusercoupon.html',
  },
  /** 获取用户优惠券ID列表 @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_getusercouponlist.html */
  ecCouponGetUserCouponList: {
    method: 'POST',
    path: '/channels/ec/coupon/get_user_coupon_list',
    title: '获取用户优惠券ID列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_getusercouponlist.html',
  },
  /** 更新优惠券内容 @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_updatecoupon.html */
  ecCouponUpdate: {
    method: 'POST',
    path: '/channels/ec/coupon/update',
    title: '更新优惠券内容',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_updatecoupon.html',
  },
  /** 更新优惠券状态 @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_updatecouponstatus.html */
  ecCouponUpdateStatus: {
    method: 'POST',
    path: '/channels/ec/coupon/update_status',
    title: '更新优惠券状态',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_updatecouponstatus.html',
  },
  /** 获取店铺收藏的人数 @see https://developers.weixin.qq.com/doc/store/shop/API/favorite/shopfavorite/api_getfavoritescount.html */
  ecFavoritesCountGet: {
    method: 'POST',
    path: '/channels/ec/favorites/count/get',
    title: '获取店铺收藏的人数',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/favorite/shopfavorite/api_getfavoritescount.html',
  },
  /** 根据卡号查银行信息 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/bank/api_ecgetbankbynum.html */
  shopFundsGetbankbynum: {
    method: 'POST',
    path: '/shop/funds/getbankbynum',
    title: '根据卡号查银行信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/bank/api_ecgetbankbynum.html',
  },
  /** 搜索银行列表 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/bank/api_ecgetbanklist.html */
  shopFundsGetbanklist: {
    method: 'POST',
    path: '/shop/funds/getbanklist',
    title: '搜索银行列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/bank/api_ecgetbanklist.html',
  },
  /** 查询城市列表 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/bank/api_ecgetcity.html */
  shopFundsGetcity: {
    method: 'POST',
    path: '/shop/funds/getcity',
    title: '查询城市列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/bank/api_ecgetcity.html',
  },
  /** 查询大陆银行省份列表 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/bank/api_ecgetprovince.html */
  shopFundsGetprovince: {
    method: 'POST',
    path: '/shop/funds/getprovince',
    title: '查询大陆银行省份列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/bank/api_ecgetprovince.html',
  },
  /** 查询支行列表 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/bank/api_ecgetsubbranch.html */
  shopFundsGetsubbranch: {
    method: 'POST',
    path: '/shop/funds/getsubbranch',
    title: '查询支行列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/bank/api_ecgetsubbranch.html',
  },
  /** 获取账户余额 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getbalance.html */
  ecFundsGetbalance: {
    method: 'POST',
    path: '/channels/ec/funds/getbalance',
    title: '获取账户余额',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getbalance.html',
  },
  /** 获取结算账户 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getbankacct.html */
  ecFundsGetbankacct: {
    method: 'POST',
    path: '/channels/ec/funds/getbankacct',
    title: '获取结算账户',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getbankacct.html',
  },
  /** 获取资金流水详情 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getfundsflowdetail.html */
  ecFundsGetfundsflowdetail: {
    method: 'POST',
    path: '/channels/ec/funds/getfundsflowdetail',
    title: '获取资金流水详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getfundsflowdetail.html',
  },
  /** 获取资金流水列表 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getfundsflowlist.html */
  ecFundsGetfundsflowlist: {
    method: 'POST',
    path: '/channels/ec/funds/getfundsflowlist',
    title: '获取资金流水列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getfundsflowlist.html',
  },
  /** 获取提现记录 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getwithdrawdetail.html */
  ecFundsGetwithdrawdetail: {
    method: 'POST',
    path: '/channels/ec/funds/getwithdrawdetail',
    title: '获取提现记录',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getwithdrawdetail.html',
  },
  /** 获取提现记录列表 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getwithdrawlist.html */
  ecFundsGetwithdrawlist: {
    method: 'POST',
    path: '/channels/ec/funds/getwithdrawlist',
    title: '获取提现记录列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getwithdrawlist.html',
  },
  /** 查询订单流水列表 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_listorderflow.html */
  ecFundsListorderflow: {
    method: 'POST',
    path: '/channels/ec/funds/listorderflow',
    title: '查询订单流水列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_listorderflow.html',
  },
  /** 修改结算账户 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_setbankacct.html */
  ecFundsSetbankacct: {
    method: 'POST',
    path: '/channels/ec/funds/setbankacct',
    title: '修改结算账户',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_setbankacct.html',
  },
  /** 商户提现 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_submitwithdraw.html */
  ecFundsSubmitwithdraw: {
    method: 'POST',
    path: '/channels/ec/funds/submitwithdraw',
    title: '商户提现',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_submitwithdraw.html',
  },
  /** 查询扫码状态 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/qrcode/api_eccheckqrcode.html */
  shopFundsQrcodeCheck: {
    method: 'POST',
    path: '/shop/funds/qrcode/check',
    title: '查询扫码状态',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/qrcode/api_eccheckqrcode.html',
  },
  /** 获取二维码 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/qrcode/api_ecgetqrcode.html */
  shopFundsQrcodeGet: {
    method: 'POST',
    path: '/shop/funds/qrcode/get',
    title: '获取二维码',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/funds/qrcode/api_ecgetqrcode.html',
  },
  /** 撤销主页背景图申请 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/background/api_cancelbackgroundapply.html */
  ecBasicsHomepageBackgroundApplyCancel: {
    method: 'POST',
    path: '/channels/ec/basics/homepage/background/apply/cancel',
    title: '撤销主页背景图申请',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/homepage/background/api_cancelbackgroundapply.html',
  },
  /** 查询背景图 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/background/api_getbackground.html */
  ecBasicsHomepageBackgroundGet: {
    method: 'POST',
    path: '/channels/ec/basics/homepage/background/get',
    title: '查询背景图',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/homepage/background/api_getbackground.html',
  },
  /** 清空主页背景图并撤销流程中的申请 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/background/api_removebackground.html */
  ecBasicsHomepageBackgroundRemove: {
    method: 'POST',
    path: '/channels/ec/basics/homepage/background/remove',
    title: '清空主页背景图并撤销流程中的申请',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/homepage/background/api_removebackground.html',
  },
  /** 提交背景图申请 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/background/api_submitbackgroundapply.html */
  ecBasicsHomepageBackgroundApplySubmit: {
    method: 'POST',
    path: '/channels/ec/basics/homepage/background/apply/submit',
    title: '提交背景图申请',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/homepage/background/api_submitbackgroundapply.html',
  },
  /** 撤销精选展示位申请 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/banner/api_cancelbannerapply.html */
  ecBasicsHomepageBannerApplyCancel: {
    method: 'POST',
    path: '/channels/ec/basics/homepage/banner/apply/cancel',
    title: '撤销精选展示位申请',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/homepage/banner/api_cancelbannerapply.html',
  },
  /** 查询精选展示位 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/banner/api_getbanner.html */
  ecBasicsHomepageBannerGet: {
    method: 'POST',
    path: '/channels/ec/basics/homepage/banner/get',
    title: '查询精选展示位',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/homepage/banner/api_getbanner.html',
  },
  /** 清空精选展示位并撤销流程中的申请 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/banner/api_removebanner.html */
  ecBasicsHomepageBannerRemove: {
    method: 'POST',
    path: '/channels/ec/basics/homepage/banner/remove',
    title: '清空精选展示位并撤销流程中的申请',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/homepage/banner/api_removebanner.html',
  },
  /** 提交精选展示位申请 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/banner/api_submitbannerapply.html */
  ecBasicsHomepageBannerApplySubmit: {
    method: 'POST',
    path: '/channels/ec/basics/homepage/banner/apply/submit',
    title: '提交精选展示位申请',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/homepage/banner/api_submitbannerapply.html',
  },
  /** 获取分类关联的商品ID列表 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/shoptype/api_getclassificationproductlist.html */
  ecStoreClassificationTreeProductGet: {
    method: 'POST',
    path: '/channels/ec/store/classification/tree/product/get',
    title: '获取分类关联的商品ID列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/homepage/shoptype/api_getclassificationproductlist.html',
  },
  /** 获取在店铺主页展示的商品分类 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/shoptype/api_getclassificationtree.html */
  ecStoreClassificationTreeGet: {
    method: 'POST',
    path: '/channels/ec/store/classification/tree/get',
    title: '获取在店铺主页展示的商品分类',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/homepage/shoptype/api_getclassificationtree.html',
  },
  /** 获取主页展示商品列表 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/storewindow/api_getstorewindowproductlist.html */
  ecStoreWindowProductListGet: {
    method: 'POST',
    path: '/channels/ec/store/window/product/list/get',
    title: '获取主页展示商品列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/homepage/storewindow/api_getstorewindowproductlist.html',
  },
  /** 隐藏小店主页商品 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/storewindow/api_hidestorewindowproduct.html */
  ecStoreWindowProductHide: {
    method: 'POST',
    path: '/channels/ec/store/window/product/hide',
    title: '隐藏小店主页商品',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/homepage/storewindow/api_hidestorewindowproduct.html',
  },
  /** 重新排序主页展示商品 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/storewindow/api_reorderstorewindowproduct.html */
  ecStoreWindowProductReorder: {
    method: 'POST',
    path: '/channels/ec/store/window/product/reorder',
    title: '重新排序主页展示商品',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/homepage/storewindow/api_reorderstorewindowproduct.html',
  },
  /** 置顶小店主页商品 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/storewindow/api_settopstorewindowproduct.html */
  ecStoreWindowProductSettop: {
    method: 'POST',
    path: '/channels/ec/store/window/product/settop',
    title: '置顶小店主页商品',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/homepage/storewindow/api_settopstorewindowproduct.html',
  },
  /** 上传多媒体资源 @see https://developers.weixin.qq.com/doc/store/shop/API/kf/api_cosupload.html */
  ecCommkfCosupload: {
    method: 'POST',
    path: '/channels/ec/commkf/cosupload',
    title: '上传多媒体资源',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/kf/api_cosupload.html',
  },
  /** 发送消息 @see https://developers.weixin.qq.com/doc/store/shop/API/kf/api_sendmsg.html */
  ecCommkfSendmsg: {
    method: 'POST',
    path: '/channels/ec/commkf/sendmsg',
    title: '发送消息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/kf/api_sendmsg.html',
  },
  /** 批量新增联盟机构推广 @see https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_batchaddheadsupplieritem.html */
  ecLeagueItemHeadsupplierBatchadd: {
    method: 'POST',
    path: '/channels/ec/league/item/headsupplier/batchadd',
    title: '批量新增联盟机构推广',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_batchaddheadsupplieritem.html',
  },
  /** 批量新增联盟商品 @see https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_batchadditem.html */
  ecLeagueItemBatchadd: {
    method: 'POST',
    path: '/channels/ec/league/item/batchadd',
    title: '批量新增联盟商品',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_batchadditem.html',
  },
  /** 获取联盟推广计划详情 @see https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_getitem.html */
  ecLeagueItemGet: {
    method: 'POST',
    path: '/channels/ec/league/item/get',
    title: '获取联盟推广计划详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_getitem.html',
  },
  /** 获取联盟商品列表 @see https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_getitemlist.html */
  ecLeagueItemListGet: {
    method: 'POST',
    path: '/channels/ec/league/item/list/get',
    title: '获取联盟商品列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_getitemlist.html',
  },
  /** 获取商品推广计划列表 @see https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_listspupromotionplans.html */
  ecLeaguePromotionPlanList: {
    method: 'POST',
    path: '/channels/ec/league/promotion/plan/list',
    title: '获取商品推广计划列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_listspupromotionplans.html',
  },
  /** 获取商品推广带货者列表 @see https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_listspupromotiontalents.html */
  ecLeaguePromotionTalentList: {
    method: 'POST',
    path: '/channels/ec/league/promotion/talent/list',
    title: '获取商品推广带货者列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_listspupromotiontalents.html',
  },
  /** 更新联盟推广计划信息 @see https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_upditem.html */
  ecLeagueItemUpd: {
    method: 'POST',
    path: '/channels/ec/league/item/upd',
    title: '更新联盟推广计划信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_upditem.html',
  },
  /** 获取带货者详情信息 @see https://developers.weixin.qq.com/doc/store/shop/API/league/promoter/api_getpromoter.html */
  ecLeaguePromoterGet: {
    method: 'POST',
    path: '/channels/ec/league/promoter/get',
    title: '获取带货者详情信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/league/promoter/api_getpromoter.html',
  },
  /** 获取带货者列表 @see https://developers.weixin.qq.com/doc/store/shop/API/league/promoter/api_getpromoterlist.html */
  ecLeaguePromoterListGet: {
    method: 'POST',
    path: '/channels/ec/league/promoter/list/get',
    title: '获取带货者列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/league/promoter/api_getpromoterlist.html',
  },
  /** 获取带货者商品数据列表 @see https://developers.weixin.qq.com/doc/store/shop/API/league/promoter/api_gettalentproductdata.html */
  ecLeagueTalentGetproductdatalist: {
    method: 'POST',
    path: '/channels/ec/league/talent/getproductdatalist',
    title: '获取带货者商品数据列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/league/promoter/api_gettalentproductdata.html',
  },
  /** 编辑带货者 @see https://developers.weixin.qq.com/doc/store/shop/API/league/promoter/api_updatetalent.html */
  ecLeagueTalentUpdate: {
    method: 'POST',
    path: '/channels/ec/league/talent/update',
    title: '编辑带货者',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/league/promoter/api_updatetalent.html',
  },
  /** 获取文件下载链接 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/basic/api_getdownloadurl.html */
  ecOpenGetDownloadUrl: {
    method: 'POST',
    path: '/channels/ec/open/get_download_url',
    title: '获取文件下载链接',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/basic/api_getdownloadurl.html',
  },
  /** 上传资料 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/basic/api_uploadec.html */
  ecOpenUpload: {
    method: 'POST',
    path: '/channels/ec/open/upload',
    title: '上传资料',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/basic/api_uploadec.html',
  },
  /** 创建并发送礼物 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_create_present_order.html */
  ecOrderPresentorderCreate: {
    method: 'POST',
    path: '/channels/ec/order/presentorder/create',
    title: '创建并发送礼物',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_create_present_order.html',
  },
  /** 查询礼物活动详情 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_activity.html */
  ecB2cActivityInfoPromoterGet: {
    method: 'POST',
    path: '/channels/ec/b2c/activity/info/promoter/get',
    title: '查询礼物活动详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_activity.html',
  },
  /** 查询礼物订单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_present.html */
  ecOrderPresentGet: {
    method: 'POST',
    path: '/channels/ec/order/present/get',
    title: '查询礼物订单详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_present.html',
  },
  /** 查询礼物订单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_present_list.html */
  ecOrderPresentlistGet: {
    method: 'POST',
    path: '/channels/ec/order/presentlist/get',
    title: '查询礼物订单列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_present_list.html',
  },
  /** 查询收礼者订单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_receiver_order_list.html */
  ecOrderReceiverorderlistGet: {
    method: 'POST',
    path: '/channels/ec/order/receiverorderlist/get',
    title: '查询收礼者订单列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_receiver_order_list.html',
  },
  /** 查询小店礼物活动列表 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_list_present_activity.html */
  ecB2cActivityListPromoterGet: {
    method: 'POST',
    path: '/channels/ec/b2c/activity/list/promoter/get',
    title: '查询小店礼物活动列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_list_present_activity.html',
  },
  /** 指定礼物收礼者 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_set_present_receiver.html */
  ecOrderPresentorderReceiverSet: {
    method: 'POST',
    path: '/channels/ec/order/presentorder/receiver/set',
    title: '指定礼物收礼者',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_set_present_receiver.html',
  },
  /** 查询工单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/platformkf/api_getmchticketdetail.html */
  ecPlatformkfGetmchticketdetail: {
    method: 'POST',
    path: '/channels/ec/platformkf/getmchticketdetail',
    title: '查询工单详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/platformkf/api_getmchticketdetail.html',
  },
  /** 获取商家工单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/platformkf/api_getmchticketlist.html */
  ecPlatformkfGetmchticketlist: {
    method: 'POST',
    path: '/channels/ec/platformkf/getmchticketlist',
    title: '获取商家工单列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/platformkf/api_getmchticketlist.html',
  },
  /** 查询工单分类配置 @see https://developers.weixin.qq.com/doc/store/shop/API/platformkf/api_getticketclassconfig.html */
  ecPlatformkfGetticketclassconfig: {
    method: 'POST',
    path: '/channels/ec/platformkf/getticketclassconfig',
    title: '查询工单分类配置',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/platformkf/api_getticketclassconfig.html',
  },
  /** 商户处理商家工单 @see https://developers.weixin.qq.com/doc/store/shop/API/platformkf/api_operatemchticket.html */
  ecPlatformkfOperatemchticket: {
    method: 'POST',
    path: '/channels/ec/platformkf/operatemchticket',
    title: '商户处理商家工单',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/platformkf/api_operatemchticket.html',
  },
  /** 查询质检仓配置 @see https://developers.weixin.qq.com/doc/store/shop/API/qic/api_getinspectconfig.html */
  ecQicInspectConfigGet: {
    method: 'GET',
    path: '/channels/ec/qic/inspect/config/get',
    title: '查询质检仓配置',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/qic/api_getinspectconfig.html',
  },
  /** 查询送检配置模板信息 @see https://developers.weixin.qq.com/doc/store/shop/API/qic/api_getinspectsubmitconfig.html */
  ecQicInspectSubmitconfigGet: {
    method: 'GET',
    path: '/channels/ec/qic/inspect/submitconfig/get',
    title: '查询送检配置模板信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/qic/api_getinspectsubmitconfig.html',
  },
  /** 打印质检码 @see https://developers.weixin.qq.com/doc/store/shop/API/qic/api_printinspectcode.html */
  ecQicInspectCodePrint: {
    method: 'POST',
    path: '/channels/ec/qic/inspect/code/print',
    title: '打印质检码',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/qic/api_printinspectcode.html',
  },
  /** 自寄快递送检 @see https://developers.weixin.qq.com/doc/store/shop/API/qic/api_registerlogistics.html */
  ecQicInspectRegisterLogistics: {
    method: 'POST',
    path: '/channels/ec/qic/inspect/register_logistics',
    title: '自寄快递送检',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/qic/api_registerlogistics.html',
  },
  /** 绑定送检信息 @see https://developers.weixin.qq.com/doc/store/shop/API/qic/api_submitinspectinfo.html */
  ecQicInspectSubmit: {
    method: 'POST',
    path: '/channels/ec/qic/inspect/submit',
    title: '绑定送检信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/qic/api_submitinspectinfo.html',
  },
  /** 获取店铺H5链接 @see https://developers.weixin.qq.com/doc/store/shop/API/storemanage/api_getshoph5url.html */
  ecBasicsShopH5urlGet: {
    method: 'POST',
    path: '/channels/ec/basics/shop/h5url/get',
    title: '获取店铺H5链接',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/storemanage/api_getshoph5url.html',
  },
  /** 获取店铺二维码 @see https://developers.weixin.qq.com/doc/store/shop/API/storemanage/api_getshopqrcode.html */
  ecBasicsShopQrcodeGet: {
    method: 'POST',
    path: '/channels/ec/basics/shop/qrcode/get',
    title: '获取店铺二维码',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/storemanage/api_getshopqrcode.html',
  },
  /** 获取店铺口令 @see https://developers.weixin.qq.com/doc/store/shop/API/storemanage/api_getshoptaglink.html */
  ecBasicsShopTaglinkGet: {
    method: 'POST',
    path: '/channels/ec/basics/shop/taglink/get',
    title: '获取店铺口令',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/storemanage/api_getshoptaglink.html',
  },
  /** 获取店铺基本信息 @see https://developers.weixin.qq.com/doc/store/shop/API/storemanage/api_mmecapi_basicinfo.html */
  ecBasicsInfoGet: {
    method: 'GET',
    path: '/channels/ec/basics/info/get',
    title: '获取店铺基本信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/storemanage/api_mmecapi_basicinfo.html',
  },
  /** 获取国补订单开票信息 @see https://developers.weixin.qq.com/doc/store/shop/API/subsidy/invoicing/api_query_invoicing_info.html */
  ecSubsidyQueryInvoicingInfo: {
    method: 'POST',
    path: '/channels/ec/subsidy/query_invoicing_info',
    title: '获取国补订单开票信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/subsidy/invoicing/api_query_invoicing_info.html',
  },
  /** 上传国补订单发票文件 @see https://developers.weixin.qq.com/doc/store/shop/API/subsidy/invoicing/api_upload_invoice_file.html */
  ecSubsidyUploadInvoiceFile: {
    method: 'POST',
    path: '/channels/ec/subsidy/upload_invoice_file',
    title: '上传国补订单发票文件',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/subsidy/invoicing/api_upload_invoice_file.html',
  },
  /** 上传国补订单发票信息 @see https://developers.weixin.qq.com/doc/store/shop/API/subsidy/invoicing/api_upload_invoice_info.html */
  ecSubsidyUploadInvoiceInfo: {
    method: 'POST',
    path: '/channels/ec/subsidy/upload_invoice_info',
    title: '上传国补订单发票信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/subsidy/invoicing/api_upload_invoice_info.html',
  },
  /** 获取分配方式 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_get_distribution.html */
  ecSupplierRelationGetDistribute: {
    method: 'POST',
    path: '/channels/ec/supplier/relation/get_distribute',
    title: '获取分配方式',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_get_distribution.html',
  },
  /** 获取商品对应的自动分配供货商 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_get_product_default_distribution.html */
  ecSupplierRelationGetProductDefaultDistribute: {
    method: 'POST',
    path: '/channels/ec/supplier/relation/get_product_default_distribute',
    title: '获取商品对应的自动分配供货商',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_get_product_default_distribution.html',
  },
  /** 获取按商品自动分配的商品列表 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_get_product_list.html */
  ecSupplierRelationGetProductList: {
    method: 'POST',
    path: '/channels/ec/supplier/relation/get_product_list',
    title: '获取按商品自动分配的商品列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_get_product_list.html',
  },
  /** 设置全店订单自动分配 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_set_all_distribution.html */
  ecSupplierRelationSetAllDistribution: {
    method: 'POST',
    path: '/channels/ec/supplier/relation/set_all_distribution',
    title: '设置全店订单自动分配',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_set_all_distribution.html',
  },
  /** 设置全店订单手动分配 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_set_manually_distribution.html */
  ecSupplierRelationSetManuallyDistribute: {
    method: 'POST',
    path: '/channels/ec/supplier/relation/set_manually_distribute',
    title: '设置全店订单手动分配',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_set_manually_distribution.html',
  },
  /** 设置按商品自动分配 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_set_product_distribution.html */
  ecSupplierRelationSetProductDistribute: {
    method: 'POST',
    path: '/channels/ec/supplier/relation/set_product_distribute',
    title: '设置按商品自动分配',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_set_product_distribution.html',
  },
  /** 分配订单代发 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/order/api_dropship_assign.html */
  ecOrderDropshipAssign: {
    method: 'POST',
    path: '/channels/ec/order/dropship/assign',
    title: '分配订单代发',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supplier/order/api_dropship_assign.html',
  },
  /** 取消分配代发单 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/order/api_dropship_cancel.html */
  ecOrderDropshipCancel: {
    method: 'POST',
    path: '/channels/ec/order/dropship/cancel',
    title: '取消分配代发单',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supplier/order/api_dropship_cancel.html',
  },
  /** 查询代发单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/order/api_dropship_get.html */
  ecOrderDropshipGet: {
    method: 'POST',
    path: '/channels/ec/order/dropship/get',
    title: '查询代发单详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supplier/order/api_dropship_get.html',
  },
  /** 拉取代发单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/order/api_dropship_list.html */
  ecOrderDropshipList: {
    method: 'POST',
    path: '/channels/ec/order/dropship/list',
    title: '拉取代发单列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supplier/order/api_dropship_list.html',
  },
  /** 搜索代发单 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/order/api_dropship_search.html */
  ecOrderDropshipSearch: {
    method: 'POST',
    path: '/channels/ec/order/dropship/search',
    title: '搜索代发单',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supplier/order/api_dropship_search.html',
  },
  /** 获取供货商列表 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/relation/api_get_supplier_list.html */
  ecSupplierRelationGetSupplierList: {
    method: 'POST',
    path: '/channels/ec/supplier/relation/get_supplier_list',
    title: '获取供货商列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supplier/relation/api_get_supplier_list.html',
  },
  /** 申请关联供货商 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/relation/api_invite_supplier.html */
  ecSupplierRelationInviteSupplier: {
    method: 'POST',
    path: '/channels/ec/supplier/relation/invite_supplier',
    title: '申请关联供货商',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supplier/relation/api_invite_supplier.html',
  },
  /** 查询供货单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/supply/api_supplyorder_get.html */
  ecOrderSupplyorderGet: {
    method: 'POST',
    path: '/channels/ec/order/supplyorder/get',
    title: '查询供货单详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supply/api_supplyorder_get.html',
  },
  /** 获取供货单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/supply/api_supplyorder_list.html */
  ecOrderSupplyorderList: {
    method: 'POST',
    path: '/channels/ec/order/supplyorder/list',
    title: '获取供货单列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supply/api_supplyorder_list.html',
  },
  /** 搜索供货单 @see https://developers.weixin.qq.com/doc/store/shop/API/supply/api_supplyorder_search.html */
  ecOrderSupplyorderSearch: {
    method: 'POST',
    path: '/channels/ec/order/supplyorder/search',
    title: '搜索供货单',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/supply/api_supplyorder_search.html',
  },
  /** 获取用户信息 @see https://developers.weixin.qq.com/doc/store/shop/API/vip/api_getuserinfo.html */
  ecVipUserInfoGet: {
    method: 'POST',
    path: '/channels/ec/vip/user/info/get',
    title: '获取用户信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/vip/api_getuserinfo.html',
  },
  /** 获取用户列表 @see https://developers.weixin.qq.com/doc/store/shop/API/vip/api_getuserlist.html */
  ecVipUserListGet: {
    method: 'POST',
    path: '/channels/ec/vip/user/list/get',
    title: '获取用户列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/vip/api_getuserlist.html',
  },
  /** 获取用户积分流水 @see https://developers.weixin.qq.com/doc/store/shop/API/vip/api_getuserscoreflowrecord.html */
  ecVipUserScoreFlowrecordGet: {
    method: 'POST',
    path: '/channels/ec/vip/user/score/flowrecord/get',
    title: '获取用户积分流水',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/vip/api_getuserscoreflowrecord.html',
  },
  /** 获取用户积分 @see https://developers.weixin.qq.com/doc/store/shop/API/vip/api_getvipuserscore.html */
  ecVipUserScoreGet: {
    method: 'POST',
    path: '/channels/ec/vip/user/score/get',
    title: '获取用户积分',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/vip/api_getvipuserscore.html',
  },
  /** 批量增加覆盖区域 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_addcoverlocations.html */
  ecWarehouseCoverlocationsAdd: {
    method: 'POST',
    path: '/channels/ec/warehouse/coverlocations/add',
    title: '批量增加覆盖区域',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_addcoverlocations.html',
  },
  /** 创建区域仓库 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_createwarehouse.html */
  ecWarehouseCreate: {
    method: 'POST',
    path: '/channels/ec/warehouse/create',
    title: '创建区域仓库',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_createwarehouse.html',
  },
  /** 批量删除覆盖区域 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_delcoverlocations.html */
  ecWarehouseCoverlocationsDel: {
    method: 'POST',
    path: '/channels/ec/warehouse/coverlocations/del',
    title: '批量删除覆盖区域',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_delcoverlocations.html',
  },
  /** 获取地址行政编码 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_getaddresscode.html */
  ecBasicsAddresscodeGet: {
    method: 'POST',
    path: '/channels/ec/basics/addresscode/get',
    title: '获取地址行政编码',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_getaddresscode.html',
  },
  /** 获取指定地址下区域仓库的优先级 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_getaddressprioritysort.html */
  ecWarehouseAddressPrioritysortGet: {
    method: 'POST',
    path: '/channels/ec/warehouse/address/prioritysort/get',
    title: '获取指定地址下区域仓库的优先级',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_getaddressprioritysort.html',
  },
  /** 获取区域仓库 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_getwarehouse.html */
  ecWarehouseGet: {
    method: 'POST',
    path: '/channels/ec/warehouse/get',
    title: '获取区域仓库',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_getwarehouse.html',
  },
  /** 查询区域仓库列表 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_getwarehouselist.html */
  ecWarehouseListGet: {
    method: 'POST',
    path: '/channels/ec/warehouse/list/get',
    title: '查询区域仓库列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_getwarehouselist.html',
  },
  /** 获取区域仓库存数量 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_getwarehousestock.html */
  ecWarehouseStockGet: {
    method: 'POST',
    path: '/channels/ec/warehouse/stock/get',
    title: '获取区域仓库存数量',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_getwarehousestock.html',
  },
  /** 设置指定地址下区域仓库的优先级 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_setaddressprioritysort.html */
  ecWarehouseAddressPrioritysortSet: {
    method: 'POST',
    path: '/channels/ec/warehouse/address/prioritysort/set',
    title: '设置指定地址下区域仓库的优先级',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_setaddressprioritysort.html',
  },
  /** 修改区域仓库详情 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_updatewarehousedetail.html */
  ecWarehouseDetailUpdate: {
    method: 'POST',
    path: '/channels/ec/warehouse/detail/update',
    title: '修改区域仓库详情',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_updatewarehousedetail.html',
  },
  /** 更新区域仓库存数量 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_updatewarehousestock.html */
  ecWarehouseStockUpdate: {
    method: 'POST',
    path: '/channels/ec/warehouse/stock/update',
    title: '更新区域仓库存数量',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_updatewarehousestock.html',
  },
  /** 获取关联账号企微id @see https://developers.weixin.qq.com/doc/store/shop/API/wecom/api_shop_get_wecom_openid.html */
  ecWecomGetWecomId: {
    method: 'POST',
    path: '/channels/ec/wecom/get_wecom_id',
    title: '获取关联账号企微id',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/wecom/api_shop_get_wecom_openid.html',
  },
  /** 小店获取关联小程序信息 @see https://developers.weixin.qq.com/doc/store/shop/API/wxamember/shop/api_v3_getwxainfo.html */
  ecVipInfoGet: {
    method: 'POST',
    path: '/channels/ec/vip/v3/wxa/info/get',
    title: '小店获取关联小程序信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/wxamember/shop/api_v3_getwxainfo.html',
  },
  /** 新增小程序会员信息 @see https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_adduserinfo.html */
  vipUserInfoAdd: {
    method: 'POST',
    path: '/wxa/vip/user/info/add',
    title: '新增小程序会员信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_adduserinfo.html',
  },
  /** 删除小程序会员信息 @see https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_deluserinfo.html */
  vipUserInfoDelete: {
    method: 'POST',
    path: '/wxa/vip/user/info/delete',
    title: '删除小程序会员信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_deluserinfo.html',
  },
  /** 获取小程序已关联小店列表 @see https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_getshoplist.html */
  vipShopListGet: {
    method: 'POST',
    path: '/wxa/vip/shop/list/get',
    title: '获取小程序已关联小店列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_getshoplist.html',
  },
  /** 获取小程序会员信息 @see https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_getuserinfo.html */
  vipUserInfoGet: {
    method: 'POST',
    path: '/wxa/vip/user/info/get',
    title: '获取小程序会员信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_getuserinfo.html',
  },
  /** 获取小程序会员列表 @see https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_getuserlist.html */
  vipUserListGet: {
    method: 'POST',
    path: '/wxa/vip/user/list/get',
    title: '获取小程序会员列表',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_getuserlist.html',
  },
  /** 更新小程序会员信息 @see https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_updateuserinfo.html */
  vipUserInfoUpdate: {
    method: 'POST',
    path: '/wxa/vip/user/info/update',
    title: '更新小程序会员信息',
    cat: 'shop',
    doc: 'https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_updateuserinfo.html',
  },
  // ===== supplier =====
  /** 获取供货商基础信息 @see https://developers.weixin.qq.com/doc/store/supplier/api/account/api_get_supplier_base_info.html */
  ecSupplierBaseGetSupplierBaseInfo: {
    method: 'POST',
    path: '/channels/ec/supplier/base/get_supplier_base_info',
    title: '获取供货商基础信息',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/account/api_get_supplier_base_info.html',
  },
  /** 获取打印报文 @see https://developers.weixin.qq.com/doc/store/supplier/api/delivery/electronic/api_get_print_content.html */
  ecLogisticsEwaybillBizOrderGetprintinfo: {
    method: 'POST',
    path: '/channels/ec/logistics/ewaybill/biz/order/getprintinfo',
    title: '获取打印报文',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/delivery/electronic/api_get_print_content.html',
  },
  /** 代发单与供货单发货 @see https://developers.weixin.qq.com/doc/store/supplier/api/delivery/shipping/api_delivery_send.html */
  ecOrderDropshipSupplierDeliverySend: {
    method: 'POST',
    path: '/channels/ec/order/dropship/supplier/delivery/send',
    title: '代发单与供货单发货',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/delivery/shipping/api_delivery_send.html',
  },
  /** 修改代发单与供货单物流 @see https://developers.weixin.qq.com/doc/store/supplier/api/delivery/shipping/api_delivery_update.html */
  ecOrderDropshipSupplierDeliveryUpdate: {
    method: 'POST',
    path: '/channels/ec/order/dropship/supplier/delivery/update',
    title: '修改代发单与供货单物流',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/delivery/shipping/api_delivery_update.html',
  },
  /** 查询代发单详情 @see https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-order/api_dropship_get.html */
  ecOrderDropshipSupplierGet: {
    method: 'POST',
    path: '/channels/ec/order/dropship/supplier/get',
    title: '查询代发单详情',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-order/api_dropship_get.html',
  },
  /** 获取代发单列表 @see https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-order/api_dropship_list.html */
  ecOrderDropshipSupplierList: {
    method: 'POST',
    path: '/channels/ec/order/dropship/supplier/list',
    title: '获取代发单列表',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-order/api_dropship_list.html',
  },
  /** 搜索代发单 @see https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-order/api_dropship_search.html */
  ecOrderDropshipSupplierSearch: {
    method: 'POST',
    path: '/channels/ec/order/dropship/supplier/search',
    title: '搜索代发单',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-order/api_dropship_search.html',
  },
  /** 同意商家关联申请 @see https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-relation/api_accept_invitation.html */
  ecSupplierRelationAcceptInvitation: {
    method: 'POST',
    path: '/channels/ec/supplier/relation/accept_invitation',
    title: '同意商家关联申请',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-relation/api_accept_invitation.html',
  },
  /** 获取关联的商家列表 @see https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-relation/api_get_ec_list.html */
  ecSupplierRelationGetEcList: {
    method: 'POST',
    path: '/channels/ec/supplier/relation/get_ec_list',
    title: '获取关联的商家列表',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-relation/api_get_ec_list.html',
  },
  /** 拒绝商家关联申请 @see https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-relation/api_reject_invitation.html */
  ecSupplierRelationRejectInvitation: {
    method: 'POST',
    path: '/channels/ec/supplier/relation/reject_invitation',
    title: '拒绝商家关联申请',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-relation/api_reject_invitation.html',
  },
  /** 查询供货单详情 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-order/api_supplyorder_get.html */
  ecOrderSupplyorderSupplierGet: {
    method: 'POST',
    path: '/channels/ec/order/supplyorder/supplier/get',
    title: '查询供货单详情',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-order/api_supplyorder_get.html',
  },
  /** 获取供货单列表 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-order/api_supplyorder_list.html */
  ecOrderSupplyorderSupplierList: {
    method: 'POST',
    path: '/channels/ec/order/supplyorder/supplier/list',
    title: '获取供货单列表',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-order/api_supplyorder_list.html',
  },
  /** 搜索供货单 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-order/api_supplyorder_search.html */
  ecOrderSupplyorderSupplierSearch: {
    method: 'POST',
    path: '/channels/ec/order/supplyorder/supplier/search',
    title: '搜索供货单',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-order/api_supplyorder_search.html',
  },
  /** 添加货品 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_addsupplyproduct.html */
  ecSupplierProductAdd: {
    method: 'POST',
    path: '/channels/ec/supplier/product/add',
    title: '添加货品',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_addsupplyproduct.html',
  },
  /** 撤回货品审核 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_cancelauditsupplyproduct.html */
  ecSupplierProductAuditCancel: {
    method: 'POST',
    path: '/channels/ec/supplier/product/audit/cancel',
    title: '撤回货品审核',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_cancelauditsupplyproduct.html',
  },
  /** 删除货品 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_deletesupplyproduct.html */
  ecSupplierProductDelete: {
    method: 'POST',
    path: '/channels/ec/supplier/product/delete',
    title: '删除货品',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_deletesupplyproduct.html',
  },
  /** 下架货品 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_delistingsupplyproduct.html */
  ecSupplierProductDelisting: {
    method: 'POST',
    path: '/channels/ec/supplier/product/delisting',
    title: '下架货品',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_delistingsupplyproduct.html',
  },
  /** 获取货品详情 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_getsupplyproduct.html */
  ecSupplierProductGet: {
    method: 'POST',
    path: '/channels/ec/supplier/product/get',
    title: '获取货品详情',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_getsupplyproduct.html',
  },
  /** 获取货品列表 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_getsupplyproductlist.html */
  ecSupplierProductListGet: {
    method: 'POST',
    path: '/channels/ec/supplier/product/list/get',
    title: '获取货品列表',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_getsupplyproductlist.html',
  },
  /** 上架货品 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_listingsupplyproduct.html */
  ecSupplierProductListing: {
    method: 'POST',
    path: '/channels/ec/supplier/product/listing',
    title: '上架货品',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_listingsupplyproduct.html',
  },
  /** 更新货品 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_updatesupplyproduct.html */
  ecSupplierProductUpdate: {
    method: 'POST',
    path: '/channels/ec/supplier/product/update',
    title: '更新货品',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_updatesupplyproduct.html',
  },
  /** 免审更新货品 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_updatesupplyproductauditfree.html */
  ecSupplierProductAuditfree: {
    method: 'POST',
    path: '/channels/ec/supplier/product/auditfree',
    title: '免审更新货品',
    cat: 'supplier',
    doc: 'https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_updatesupplyproductauditfree.html',
  },
  // ===== talent =====
  /** 获取佣金单详情 @see https://developers.weixin.qq.com/doc/store/talent/openapi/order/api_get_order_detail.html */
  ecTalentGetOrderDetail: {
    method: 'POST',
    path: '/channels/ec/talent/get_order_detail',
    title: '获取佣金单详情',
    cat: 'talent',
    doc: 'https://developers.weixin.qq.com/doc/store/talent/openapi/order/api_get_order_detail.html',
  },
  /** 获取佣金单列表 @see https://developers.weixin.qq.com/doc/store/talent/openapi/order/api_get_order_list.html */
  ecTalentGetOrderList: {
    method: 'POST',
    path: '/channels/ec/talent/get_order_list',
    title: '获取佣金单列表',
    cat: 'talent',
    doc: 'https://developers.weixin.qq.com/doc/store/talent/openapi/order/api_get_order_list.html',
  },
  /** 获取达人橱窗商品详情 @see https://developers.weixin.qq.com/doc/store/talent/openapi/window/api_get_product_detail.html */
  ecTalentWindowProductGet: {
    method: 'POST',
    path: '/channels/ec/talent/window/product/get',
    title: '获取达人橱窗商品详情',
    cat: 'talent',
    doc: 'https://developers.weixin.qq.com/doc/store/talent/openapi/window/api_get_product_detail.html',
  },
  /** 获取达人橱窗商品列表 @see https://developers.weixin.qq.com/doc/store/talent/openapi/window/api_get_product_list.html */
  ecTalentWindowProductListGet: {
    method: 'POST',
    path: '/channels/ec/talent/window/product/list/get',
    title: '获取达人橱窗商品列表',
    cat: 'talent',
    doc: 'https://developers.weixin.qq.com/doc/store/talent/openapi/window/api_get_product_list.html',
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
  /** 获取机构账户余额 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/balance/api_getbalance.html */
  ecLeagueHeadsupplierFundsBalanceGet(
    body?: EcLeagueHeadsupplierFundsBalanceGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierFundsBalanceGetResp>;
  /** 获取资金流水详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/balance/api_getfundsflowdetail.html */
  ecLeagueHeadsupplierFundsFlowdetailGet(
    body?: EcLeagueHeadsupplierFundsFlowdetailGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierFundsFlowdetailGetResp>;
  /** 获取资金流水列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/balance/api_getfundsflowlist.html */
  ecLeagueHeadsupplierFundsFlowlistGet(
    body?: EcLeagueHeadsupplierFundsFlowlistGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierFundsFlowlistGetResp>;
  /** 网络通信检测 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_callbackcheck.html */
  callbackCheck(
    body?: CallbackCheckBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CallbackCheckResp>;
  /** 重置指定API调用次数 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_clearapiquota.html */
  openapiQuotaClear(
    body?: OpenapiQuotaClearBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenapiQuotaClearResp>;
  /** 重置API调用次数 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_clearquota.html */
  clearQuota(
    body?: ClearQuotaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ClearQuotaResp>;
  /** 使用AppSecret重置API调用次数 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_clearquotabyappsecret.html */
  clearQuotaV2(
    body?: ClearQuotaV2Body,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ClearQuotaV2Resp>;
  /** 获取接口调用凭据 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_getaccesstoken.html */
  token(
    body?: TokenBody,
    query?: TokenQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TokenResp>;
  /** 获取微信API服务器IP @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_getapidomainip.html */
  getApiDomainIp(
    body?: GetApiDomainIpBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetApiDomainIpResp>;
  /** 查询API调用额度 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_getapiquota.html */
  openapiQuotaGet(
    body?: OpenapiQuotaGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenapiQuotaGetResp>;
  /** 获取微信推送服务器IP @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_getcallbackip.html */
  getcallbackip(
    body?: GetcallbackipBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetcallbackipResp>;
  /** 获取稳定版接口调用凭据 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/basic/api_getstableaccesstoken.html */
  stableToken(
    body?: StableTokenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<StableTokenResp>;
  /** 获取所有类目 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/category/api_getallcategoryfromleague.html */
  ecCategoryLeagueAll(
    body?: EcCategoryLeagueAllBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCategoryLeagueAllResp>;
  /** 获取合作小店详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/headsupplier/api_getshop.html */
  ecLeagueHeadsupplierShopGet(
    body?: EcLeagueHeadsupplierShopGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierShopGetResp>;
  /** 获取合作小店列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/headsupplier/api_getshoplist.html */
  ecLeagueHeadsupplierShopListGet(
    body?: EcLeagueHeadsupplierShopListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierShopListGetResp>;
  /** 获取店铺自定义的推广锁客时效 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/headsupplier/api_getshoplocktime.html */
  ecLeagueHeadsupplierLockcustomertimeGetlocktime(
    body?: EcLeagueHeadsupplierLockcustomertimeGetlocktimeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierLockcustomertimeGetlocktimeResp>;
  /** 更新机构合作关系 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/headsupplier/api_update_hs_relation.html */
  ecLeagueHeadsupplierHeadsupplierrelationUpdate(
    body?: EcLeagueHeadsupplierHeadsupplierrelationUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierHeadsupplierrelationUpdateResp>;
  /** 机构给帮卖机构供货 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_add_secondheadsupplier_item.html */
  ecLeagueHeadsupplierSecondheadsupplieritemAdd(
    body?: EcLeagueHeadsupplierSecondheadsupplieritemAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierSecondheadsupplieritemAddResp>;
  /** 机构添加合作商品 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_addcooperativeitem.html */
  ecLeagueHeadsupplierCooperativeitemAdd(
    body?: EcLeagueHeadsupplierCooperativeitemAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierCooperativeitemAddResp>;
  /** 配置达人佣金率 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_addsubitem.html */
  ecLeagueHeadsupplierSubitemAdd(
    body?: EcLeagueHeadsupplierSubitemAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierSubitemAddResp>;
  /** 机构获取已添加的推广计划 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_get_secondheadsupplier_itemlist.html */
  ecLeagueHeadsupplierSecondheadsupplieritemGetlist(
    body?: EcLeagueHeadsupplierSecondheadsupplieritemGetlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierSecondheadsupplieritemGetlistResp>;
  /** 获取合作商品列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_getcooperativeitemlist.html */
  ecLeagueHeadsupplierCooperativeitemListGet(
    body?: EcLeagueHeadsupplierCooperativeitemListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierCooperativeitemListGetResp>;
  /** 获取商品推广参数详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_getitempromotiondetail.html */
  ecLeagueHeadsupplierItemPromotiondetailGet(
    body?: EcLeagueHeadsupplierItemPromotiondetailGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierItemPromotiondetailGetResp>;
  /** 获取机构配置达人佣金计划列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_getsubitemlist.html */
  ecLeagueHeadsupplierSubitemListGet(
    body?: EcLeagueHeadsupplierSubitemListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierSubitemListGetResp>;
  /** 获取机构选品广场商品列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_listselectionproducts.html */
  ecLeagueHeadsupplierSelectionproductsListGet(
    body?: EcLeagueHeadsupplierSelectionproductsListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierSelectionproductsListGetResp>;
  /** 机构更新或删除已添加的推广计划 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/getshop/api_update_secondheadsupplier_item.html */
  ecLeagueHeadsupplierSecondheadsupplieritemUpdate(
    body?: EcLeagueHeadsupplierSecondheadsupplieritemUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierSecondheadsupplieritemUpdateResp>;
  /** 添加机构商品到橱窗 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_addwindow.html */
  ecLeagueHeadsupplierWindowAdd(
    body?: EcLeagueHeadsupplierWindowAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierWindowAddResp>;
  /** 查询橱窗上机构商品列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_getallwindow.html */
  ecLeagueHeadsupplierWindowGetall(
    body?: EcLeagueHeadsupplierWindowGetallBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierWindowGetallResp>;
  /** 获取达人橱窗授权链接 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_getwindowauth.html */
  ecLeagueHeadsupplierWindowauthGet(
    body?: EcLeagueHeadsupplierWindowauthGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierWindowauthGetResp>;
  /** 获取达人橱窗授权状态 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_getwindowauthstatus.html */
  ecLeagueHeadsupplierWindowauthStatusGet(
    body?: EcLeagueHeadsupplierWindowauthStatusGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierWindowauthStatusGetResp>;
  /** 查询橱窗上机构商品详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_getwindowdetail.html */
  ecLeagueHeadsupplierWindowGetdetail(
    body?: EcLeagueHeadsupplierWindowGetdetailBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierWindowGetdetailResp>;
  /** 从橱窗移除机构商品 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/opentalent/window/api_removewindow.html */
  ecLeagueHeadsupplierWindowRemove(
    body?: EcLeagueHeadsupplierWindowRemoveBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierWindowRemoveResp>;
  /** 获取佣金单详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/order/api_getorder.html */
  ecLeagueHeadsupplierOrderGet(
    body?: EcLeagueHeadsupplierOrderGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierOrderGetResp>;
  /** 获取佣金单列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/order/api_getorderlist.html */
  ecLeagueHeadsupplierOrderListGet(
    body?: EcLeagueHeadsupplierOrderListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierOrderListGetResp>;
  /** 获取机构绑定的推客信息 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_getbindsharerlist.html */
  ecPromoterGetBindSharerList(
    body?: EcPromoterGetBindSharerListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetBindSharerListResp>;
  /** 获取合作的小店列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_getbindshoplist.html */
  ecPromoterGetBindShopList(
    body?: EcPromoterGetBindShopListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetBindShopListResp>;
  /** 获取合作小店的关联账号列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_getbindshoppromoterlist.html */
  ecPromoterGetBindShopPromoterList(
    body?: EcPromoterGetBindShopPromoterListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetBindShopPromoterListResp>;
  /** 获取合作的带货者列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_getbindtalentlist.html */
  ecPromoterGetBindTalentList(
    body?: EcPromoterGetBindTalentListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetBindTalentListResp>;
  /** 获取推客的注册状态以及和机构的绑定状态 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_getpromoterregisterandbindstatus.html */
  ecPromoterGetPromoterRegisterAndBindStatus(
    body?: EcPromoterGetPromoterRegisterAndBindStatusBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetPromoterRegisterAndBindStatusResp>;
  /** 机构解绑推客 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_mmecpromoter_headsupplier_unbind_promoter.html */
  ecPromoterHeadsupplierUnbindPromoter(
    body?: EcPromoterHeadsupplierUnbindPromoterBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterHeadsupplierUnbindPromoterResp>;
  /** 设置推客的的分佣类型和比例信息 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/account/api_setsharercommissioninfo.html */
  ecPromoterSetSharerCommissionInfo(
    body?: EcPromoterSetSharerCommissionInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterSetSharerCommissionInfoResp>;
  /** 获取小店关联账号的文章列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/article/api_getshopmparticlelist.html */
  ecPromoterGetShopMpArticleList(
    body?: EcPromoterGetShopMpArticleListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetShopMpArticleListResp>;
  /** 获取某个带货者可推广文章列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/article/api_gettalentbizarticlelist.html */
  ecPromoterGetTalentBizArticleList(
    body?: EcPromoterGetTalentBizArticleListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetTalentBizArticleListResp>;
  /** 推客机构获取内容推广的自营商品订单详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/clue/api_getclue.html */
  ecLeagueHeadsupplierClueGet(
    body?: EcLeagueHeadsupplierClueGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierClueGetResp>;
  /** 推客机构获取内容推广的自营商品订单列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/clue/api_getcluelist.html */
  ecLeagueHeadsupplierClueListGet(
    body?: EcLeagueHeadsupplierClueListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierClueListGetResp>;
  /** 获取分发给其他机构的优惠券 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_get_coupon_to_headsupplier.html */
  ecPromoterGetCouponToHeadsupplier(
    body?: EcPromoterGetCouponToHeadsupplierBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetCouponToHeadsupplierResp>;
  /** 获取定向券ID列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotecooperativecouponlist.html */
  ecPromoterGetCooperativeCouponList(
    body?: EcPromoterGetCooperativeCouponListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetCooperativeCouponListResp>;
  /** 获取券ID对应的详情内容 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotecoupondetail.html */
  ecPromoterGetCouponDetail(
    body?: EcPromoterGetCouponDetailBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetCouponDetailResp>;
  /** 获取某个券ID对应的小程序内嵌微信小店优惠券推广参数 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotecouponpromotersharelink.html */
  ecPromoterGetCouponPromoterShareLink(
    body?: EcPromoterGetCouponPromoterShareLinkBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetCouponPromoterShareLinkResp>;
  /** 获取某个券ID对应的推广二维码 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotecouponqrcode.html */
  ecPromoterGetCouponQrCode(
    body?: EcPromoterGetCouponQrCodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetCouponQrCodeResp>;
  /** 获取某个券ID对应的推广短链 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotecouponshortlink.html */
  ecPromoterGetCouponShortLink(
    body?: EcPromoterGetCouponShortLinkBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetCouponShortLinkResp>;
  /** 获取公开券ID列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_getpromotepublishcouponlist.html */
  ecPromoterGetPublicCouponList(
    body?: EcPromoterGetPublicCouponListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetPublicCouponListResp>;
  /** 分发优惠券给其他机构 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/coupon/api_set_coupon_to_headsupplier.html */
  ecPromoterSetCouponToHeadsupplier(
    body?: EcPromoterSetCouponToHeadsupplierBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterSetCouponToHeadsupplierResp>;
  /** 获取推客对某个商品的推广短链 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getproductpromotionlinkinfo.html */
  ecPromoterGetProductPromotionLinkInfo(
    body?: EcPromoterGetProductPromotionLinkInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetProductPromotionLinkInfoResp>;
  /** 获取推客对某个商品的推广二维码 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getproductpromotionqrcodeinfo.html */
  ecPromoterGetProductPromotionQrcodeInfo(
    body?: EcPromoterGetProductPromotionQrcodeInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetProductPromotionQrcodeInfoResp>;
  /** 获取可推广的商品详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getpromoteproductdetail.html */
  ecPromoterGetPromoteProductDetail(
    body?: EcPromoterGetPromoteProductDetailBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetPromoteProductDetailResp>;
  /** 获取可推广的商品id列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getpromoteproductlist.html */
  ecPromoterGetPromoteProductList(
    body?: EcPromoterGetPromoteProductListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetPromoteProductListResp>;
  /** 获取商品推广统计数据 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getpromoterproductsharestats.html */
  ecLeagueHeadsupplierPromoteractionGetproductsharestats(
    body?: EcLeagueHeadsupplierPromoteractionGetproductsharestatsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierPromoteractionGetproductsharestatsResp>;
  /** 获取某个推客某个商品的内嵌商品卡片product_promotion_link @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getpromotersingleproductpromotioninfo.html */
  ecPromoterGetPromoterSingleProductPromotionInfo(
    body?: EcPromoterGetPromoterSingleProductPromotionInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetPromoterSingleProductPromotionInfoResp>;
  /** 获取推客的某个商品的推广分佣比例 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_getsharerproductcommissioninfo.html */
  ecPromoterGetSharerProductCommissionInfo(
    body?: EcPromoterGetSharerProductCommissionInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetSharerProductCommissionInfoResp>;
  /** 设置推客的单个商品的分佣比例信息 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/getshop/api_setsharerproductcommissioninfo.html */
  ecPromoterSetSharerProductCommissionInfo(
    body?: EcPromoterSetSharerProductCommissionInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterSetSharerProductCommissionInfoResp>;
  /** 获取某个带货者当前直播的带货商品列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivecommissionproductlist.html */
  ecPromoterGetLiveCommissionProductList(
    body?: EcPromoterGetLiveCommissionProductListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetLiveCommissionProductListResp>;
  /** 生成某个带货者的用于直播预约的推广参数 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivenoticepromotersharelink.html */
  ecPromoterGetLiveNoticePromoterShareLink(
    body?: EcPromoterGetLiveNoticePromoterShareLinkBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetLiveNoticePromoterShareLinkResp>;
  /** 获取带货者的直播预约列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivenoticerecordlist.html */
  ecPromoterGetLiveNoticeRecordList(
    body?: EcPromoterGetLiveNoticeRecordListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetLiveNoticeRecordListResp>;
  /** 为某个推客生成单个直播预约的推广二维码 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivenoticerecordqrcode.html */
  ecPromoterGetLiveNoticeRecordQrCode(
    body?: EcPromoterGetLiveNoticeRecordQrCodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetLiveNoticeRecordQrCodeResp>;
  /** 获取直播预约的单个推客的推广预约人数 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivenoticereservationinfo.html */
  ecPromoterGetLiveNoticeReservationInfo(
    body?: EcPromoterGetLiveNoticeReservationInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetLiveNoticeReservationInfoResp>;
  /** 获取直播预告推广统计数据 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getlivenoticestats.html */
  ecLeagueHeadsupplierPromoteractionGetlivenoticestats(
    body?: EcLeagueHeadsupplierPromoteractionGetlivenoticestatsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierPromoteractionGetlivenoticestatsResp>;
  /** 获取直播大场保护的提报二维码 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getliveprotectionqrcode.html */
  ecLeagueHeadsupplierLiveprotectionGetqrcode(
    body?: EcLeagueHeadsupplierLiveprotectionGetqrcodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierLiveprotectionGetqrcodeResp>;
  /** 获取带货者的直播列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getliverecordlist.html */
  ecPromoterGetLiveRecordList(
    body?: EcPromoterGetLiveRecordListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetLiveRecordListResp>;
  /** 为某个推客生成单个直播的推广二维码 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getliverecordqrcode.html */
  ecPromoterGetLiveRecordQrCode(
    body?: EcPromoterGetLiveRecordQrCodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetLiveRecordQrCodeResp>;
  /** 获取直播推广统计数据 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getpromoterlivestats.html */
  ecLeagueHeadsupplierPromoteractionGetlivestats(
    body?: EcLeagueHeadsupplierPromoteractionGetlivestatsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierPromoteractionGetlivestatsResp>;
  /** 获取小店关联账号的当前直播的自营商品列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshoplivecommissionproductlist.html */
  ecPromoterGetShopLiveCommissionProductList(
    body?: EcPromoterGetShopLiveCommissionProductListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetShopLiveCommissionProductListResp>;
  /** 为推客获取小店关联账号直播预约的推广参数 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshoplivenoticepromotersharelink.html */
  ecPromoterGetShopLiveNoticePromoterShareLink(
    body?: EcPromoterGetShopLiveNoticePromoterShareLinkBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetShopLiveNoticePromoterShareLinkResp>;
  /** 获取小店关联账号的预约直播列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshoplivenoticerecordlist.html */
  ecPromoterGetShopLiveNoticeRecordList(
    body?: EcPromoterGetShopLiveNoticeRecordListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetShopLiveNoticeRecordListResp>;
  /** 为推客生成小店关联账号直播预约的推广二维码 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshoplivenoticerecordqrcode.html */
  ecPromoterGetShopLiveNoticeRecordQrCode(
    body?: EcPromoterGetShopLiveNoticeRecordQrCodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetShopLiveNoticeRecordQrCodeResp>;
  /** 获取小店关联账号的直播列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshopliverecordlist.html */
  ecPromoterGetShopLiveRecordList(
    body?: EcPromoterGetShopLiveRecordListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetShopLiveRecordListResp>;
  /** 为推客生成小店关联账号直播的推广二维码 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/live/api_getshopliverecordqrcode.html */
  ecPromoterGetShopLiveRecordQrCode(
    body?: EcPromoterGetShopLiveRecordQrCodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetShopLiveRecordQrCodeResp>;
  /** 获取带货者推广的短视频信息 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/video/api_getfeedlist.html */
  ecPromoterGetFeedList(
    body?: EcPromoterGetFeedListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetFeedListResp>;
  /** 生成某个带货者的某些短视频内嵌短视频卡片需要的feedtoken @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/video/api_getfeedpromotioninfo.html */
  ecPromoterGetFeedPromotionInfo(
    body?: EcPromoterGetFeedPromotionInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetFeedPromotionInfoResp>;
  /** 获取小店关联账号的短视频列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/video/api_getshopfeedlist.html */
  ecPromoterGetShopFeedList(
    body?: EcPromoterGetShopFeedListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetShopFeedListResp>;
  /** 生成小店关联账号的短视频内嵌小程序推广信息 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/sharer/video/api_getshopfeedpromotioninfo.html */
  ecPromoterGetShopFeedPromotionInfo(
    body?: EcPromoterGetShopFeedPromotionInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPromoterGetShopFeedPromotionInfoResp>;
  /** 获取商品基础详情 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/shop/api_getproductdetail.html */
  ecLeagueHeadsupplierProductdetailGet(
    body?: EcLeagueHeadsupplierProductdetailGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierProductdetailGetResp>;
  /** 获取订阅的商品列表 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/shop/api_getsubscribeproduct.html */
  ecLeagueHeadsupplierSubscriptionGetsubscribe(
    body?: EcLeagueHeadsupplierSubscriptionGetsubscribeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierSubscriptionGetsubscribeResp>;
  /** 获取商品活动补贴信息 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/shop/api_league_get_product_activity_info.html */
  ecLeagueHeadsupplierProductGetactivity(
    body?: EcLeagueHeadsupplierProductGetactivityBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierProductGetactivityResp>;
  /** 商品订阅 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/shop/api_subscribeproduct.html */
  ecLeagueHeadsupplierSubscriptionSubscribe(
    body?: EcLeagueHeadsupplierSubscriptionSubscribeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierSubscriptionSubscribeResp>;
  /** 取消商品订阅 @see https://developers.weixin.qq.com/doc/store/leagueheadsupplier/api/shop/api_unsubscribeproduct.html */
  ecLeagueHeadsupplierSubscriptionUnsubscribe(
    body?: EcLeagueHeadsupplierSubscriptionUnsubscribeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueHeadsupplierSubscriptionUnsubscribeResp>;
  /** 查询rid信息 @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/common/api_getridinfo.html */
  openapiRidGet(
    body?: OpenapiRidGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenapiRidGetResp>;
  /** 通过mediaid获取数据 @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_getdatabymediaid.html */
  ecBasicsMediaGet(
    body?: EcBasicsMediaGetBody,
    query?: EcBasicsMediaGetQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBasicsMediaGetResp>;
  /** 上传图片 @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_img_upload.html */
  shopEcBasicsImgUpload(
    body?: ShopEcBasicsImgUploadBody,
    query?: ShopEcBasicsImgUploadQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcBasicsImgUploadResp>;
  /** 上传资质图片 @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_qualificationupload.html */
  shopEcBasicsQualificationUpload(
    body?: ShopEcBasicsQualificationUploadBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcBasicsQualificationUploadResp>;
  /** 完成视频上传 @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_video_finishupload.html */
  shopEcBasicsVideoFinishupload(
    body?: ShopEcBasicsVideoFinishuploadBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcBasicsVideoFinishuploadResp>;
  /** 获取上传后的视频临时URL @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_video_getplayinfo.html */
  shopEcBasicsVideoGetplayinfo(
    body?: ShopEcBasicsVideoGetplayinfoBody,
    query?: ShopEcBasicsVideoGetplayinfoQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcBasicsVideoGetplayinfoResp>;
  /** 申请上传视频 @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_video_initupload.html */
  shopEcBasicsVideoInitupload(
    body?: ShopEcBasicsVideoInituploadBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcBasicsVideoInituploadResp>;
  /** 上传视频数据分块 @see https://developers.weixin.qq.com/doc/store/shop/API/apimgnt/resource/api_video_uploadpart.html */
  shopEcBasicsVideoUploadpart(
    body?: ShopEcBasicsVideoUploadpartBody,
    query?: ShopEcBasicsVideoUploadpartQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcBasicsVideoUploadpartResp>;
  /** 新增品牌资质 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_addbrandlogic.html */
  shopEcBrandAdd(
    body?: ShopEcBrandAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcBrandAddResp>;
  /** 撤回品牌资质审核 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_cancelauditbrandlogic.html */
  shopEcBrandAuditCancel(
    body?: ShopEcBrandAuditCancelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcBrandAuditCancelResp>;
  /** 删除品牌资质 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_deletebrandlogic.html */
  ecBrandDelete(
    body?: EcBrandDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBrandDeleteResp>;
  /** 获取品牌库列表 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_getallbrandslogic.html */
  shopEcBrandAll(
    body?: ShopEcBrandAllBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcBrandAllResp>;
  /** 获取品牌资质申请列表 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_getbrandlistlogic.html */
  ecBrandListGet(
    body?: EcBrandListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBrandListGetResp>;
  /** 获取品牌资质申请详情 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_getbrandlogic.html */
  ecBrandGet(
    body?: EcBrandGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBrandGetResp>;
  /** 获取生效中的品牌资质列表 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_getvalidbrandlistlogic.html */
  ecBrandValidListGet(
    body?: EcBrandValidListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBrandValidListGetResp>;
  /** 更新品牌资质 @see https://developers.weixin.qq.com/doc/store/shop/API/brand/api_updatebrandlogic.html */
  ecBrandUpdate(
    body?: EcBrandUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBrandUpdateResp>;
  /** 获取保证金类目规则 @see https://developers.weixin.qq.com/doc/store/shop/API/category-rule/api_get_category_rule.html */
  shopEcCategoryGetcategoryrule(
    body?: ShopEcCategoryGetcategoryruleBody,
    query?: ShopEcCategoryGetcategoryruleQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcCategoryGetcategoryruleResp>;
  /** 获取类目下商品发布规则 @see https://developers.weixin.qq.com/doc/store/shop/API/category-rule/api_getcategoryproductrule.html */
  shopEcCategoryGetcategoryproductrule(
    body?: ShopEcCategoryGetcategoryproductruleBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcCategoryGetcategoryproductruleResp>;
  /** 同意售后 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_acceptapply.html */
  ecAftersaleAcceptapply(
    body?: EcAftersaleAcceptapplyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleAcceptapplyResp>;
  /** 换货发货 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_acceptexchangereship.html */
  ecAftersaleAcceptexchangereship(
    body?: EcAftersaleAcceptexchangereshipBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleAcceptexchangereshipResp>;
  /** 售后单兑换虚拟号 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_applyvirtualtelnum.html */
  ecAftersaleApplyvirtualtelnum(
    body?: EcAftersaleApplyvirtualtelnumBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleApplyvirtualtelnumResp>;
  /** 代用户发起售后 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_genaftersaleorder.html */
  ecAftersaleGenaftersaleorder(
    body?: EcAftersaleGenaftersaleorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleGenaftersaleorderResp>;
  /** 获取售后单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_getaftersalelist.html */
  ecAftersaleGetaftersalelist(
    body?: EcAftersaleGetaftersalelistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleGetaftersalelistResp>;
  /** 获取售后单 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_getaftersaleorder.html */
  ecAftersaleGetaftersaleorder(
    body?: EcAftersaleGetaftersaleorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleGetaftersaleorderResp>;
  /** 获取全量售后原因 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_getaftersalereason.html */
  ecAftersaleReasonGet(
    body?: EcAftersaleReasonGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleReasonGetResp>;
  /** 获取拒绝售后原因 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_getaftersalerejectreason.html */
  ecAftersaleRejectreasonGet(
    body?: EcAftersaleRejectreasonGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleRejectreasonGetResp>;
  /** 商家处理极速换货用户退货 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_handlefastexchangereceipt.html */
  ecAftersaleHandlefastexchangereceipt(
    body?: EcAftersaleHandlefastexchangereceiptBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleHandlefastexchangereceiptResp>;
  /** 商家协商 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_merchantupdateaftersale.html */
  ecAftersaleMerchantupdateaftersale(
    body?: EcAftersaleMerchantupdateaftersaleBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleMerchantupdateaftersaleResp>;
  /** 查询可换货列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_mmecapi_getexchangeableskulist.html */
  ecAftersaleGetexchangeableskulist(
    body?: EcAftersaleGetexchangeableskulistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleGetexchangeableskulistResp>;
  /** 代用户发起退差价 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_refundpricediff.html */
  ecAftersaleRefundpricediff(
    body?: EcAftersaleRefundpricediffBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleRefundpricediffResp>;
  /** 拒绝售后 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_rejectapply.html */
  ecAftersaleRejectapply(
    body?: EcAftersaleRejectapplyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleRejectapplyResp>;
  /** 换货拒绝发货 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_rejectexchangereship.html */
  ecAftersaleRejectexchangereship(
    body?: EcAftersaleRejectexchangereshipBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleRejectexchangereshipResp>;
  /** 上传退款凭证 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/aftersale/api_uploadrefundcertificate.html */
  ecAftersaleUploadrefundcertificate(
    body?: EcAftersaleUploadrefundcertificateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleUploadrefundcertificateResp>;
  /** 商家补充纠纷单留言 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/complaint/api_addcomplaintmaterial.html */
  ecAftersaleAddcomplaintmaterial(
    body?: EcAftersaleAddcomplaintmaterialBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleAddcomplaintmaterialResp>;
  /** 商家举证 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/complaint/api_addcomplaintproof.html */
  ecAftersaleAddcomplaintproof(
    body?: EcAftersaleAddcomplaintproofBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleAddcomplaintproofResp>;
  /** 获取纠纷单 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/complaint/api_getcomplaintorder.html */
  ecAftersaleGetcomplaintorder(
    body?: EcAftersaleGetcomplaintorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleGetcomplaintorderResp>;
  /** 同步工单 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/complaint/api_mmecapi_syncworkorder.html */
  ecAftersaleSyncworkorder(
    body?: EcAftersaleSyncworkorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleSyncworkorderResp>;
  /** 获取保障单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_getguaranteeorder.html */
  ecAftersaleGetguaranteeorder(
    body?: EcAftersaleGetguaranteeorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleGetguaranteeorderResp>;
  /** 商家同意保障单申请 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_merchantacceptguarantee.html */
  ecAftersaleMerchantacceptguarantee(
    body?: EcAftersaleMerchantacceptguaranteeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleMerchantacceptguaranteeResp>;
  /** 商家协商保障单 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_merchantmodifyguarantee.html */
  ecAftersaleMerchantmodifyguarantee(
    body?: EcAftersaleMerchantmodifyguaranteeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleMerchantmodifyguaranteeResp>;
  /** 商家举证保障单 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_merchantproofguarantee.html */
  ecAftersaleMerchantproofguarantee(
    body?: EcAftersaleMerchantproofguaranteeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleMerchantproofguaranteeResp>;
  /** 商家拒绝保障单申请 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_merchantrefuseguarantee.html */
  ecAftersaleMerchantrefuseguarantee(
    body?: EcAftersaleMerchantrefuseguaranteeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleMerchantrefuseguaranteeResp>;
  /** 商家获取保障单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-aftersale/guarantee/api_searchguaranteeorder.html */
  ecAftersaleSearchguaranteeorder(
    body?: EcAftersaleSearchguaranteeorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcAftersaleSearchguaranteeorderResp>;
  /** 申请类目 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_addcategory.html */
  ecCategoryAdd(
    body?: EcCategoryAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCategoryAddResp>;
  /** 撤销类目审核 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_cancelauditcategory.html */
  shopEcCategoryAuditCancel(
    body?: ShopEcCategoryAuditCancelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcCategoryAuditCancelResp>;
  /** 获取所有类目 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getallcategory.html */
  shopEcCategoryAll(
    body?: ShopEcCategoryAllBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcCategoryAllResp>;
  /** 获取店铺的类目审核单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getbizcatflowdetail.html */
  shopEcCategoryGetbizcatflowdetail(
    body?: ShopEcCategoryGetbizcatflowdetailBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcCategoryGetbizcatflowdetailResp>;
  /** 获取店铺的类目审核单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getbizcatflowlist.html */
  shopEcCategoryGetbizcatflowlist(
    body?: ShopEcCategoryGetbizcatflowlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcCategoryGetbizcatflowlistResp>;
  /** 获取类目信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getcategorydetail.html */
  shopEcCategoryDetail(
    body?: ShopEcCategoryDetailBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcCategoryDetailResp>;
  /** 获取店铺的类目权限详情 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getcategoryrelationdetail.html */
  shopEcCategoryGetCategoryRelationDetail(
    body?: ShopEcCategoryGetCategoryRelationDetailBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcCategoryGetCategoryRelationDetailResp>;
  /** 获取店铺的类目权限列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-category/api_getcategoryrelationlist.html */
  shopEcCategoryGetCategoryRelationList(
    body?: ShopEcCategoryGetCategoryRelationListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopEcCategoryGetCategoryRelationListResp>;
  /** 添加地址 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/address/api_addaddress.html */
  ecMerchantAddressAdd(
    body?: EcMerchantAddressAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcMerchantAddressAddResp>;
  /** 删除地址 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/address/api_deleteaddress.html */
  ecMerchantAddressDelete(
    body?: EcMerchantAddressDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcMerchantAddressDeleteResp>;
  /** 获取地址详情 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/address/api_getaddress.html */
  ecMerchantAddressGet(
    body?: EcMerchantAddressGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcMerchantAddressGetResp>;
  /** 获取地址列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/address/api_getaddresslist.html */
  ecMerchantAddressList(
    body?: EcMerchantAddressListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcMerchantAddressListResp>;
  /** 更新地址 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/address/api_updateaddress.html */
  ecMerchantAddressUpdate(
    body?: EcMerchantAddressUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcMerchantAddressUpdateResp>;
  /** 订单补发货 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/delivery/api_delivery_compensation.html */
  ecOrderDeliveryCompensation(
    body?: EcOrderDeliveryCompensationBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDeliveryCompensationResp>;
  /** 获取快递公司列表-旧 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/delivery/api_getdeliverycompanylist.html */
  ecOrderDeliverycompanylistGet(
    body?: EcOrderDeliverycompanylistGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDeliverycompanylistGetResp>;
  /** 获取快递公司列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/delivery/api_getdeliverycompanylistnew.html */
  ecOrderDeliverycompanylistNewGet(
    body?: EcOrderDeliverycompanylistNewGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDeliverycompanylistNewGetResp>;
  /** 订单发货 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/delivery/api_senddelivery.html */
  ecOrderDeliverySend(
    body?: EcOrderDeliverySendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDeliverySendResp>;
  /** 电子面单子件追加 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_addsuborder.html */
  ecLogisticsEwaybillBizOrderAddsuborder(
    body?: EcLogisticsEwaybillBizOrderAddsuborderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizOrderAddsuborderResp>;
  /** 批量打印通知 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_batchprintorder.html */
  ecLogisticsEwaybillBizOrderBatchprint(
    body?: EcLogisticsEwaybillBizOrderBatchprintBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizOrderBatchprintResp>;
  /** 电子面单取消下单 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_cancelorder.html */
  ecLogisticsEwaybillBizOrderCancel(
    body?: EcLogisticsEwaybillBizOrderCancelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizOrderCancelResp>;
  /** 电子面单取号 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_createorder.html */
  ecLogisticsEwaybillBizOrderCreate(
    body?: EcLogisticsEwaybillBizOrderCreateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizOrderCreateResp>;
  /** 新增面单模板 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_createtemplate.html */
  ecLogisticsEwaybillBizTemplateCreate(
    body?: EcLogisticsEwaybillBizTemplateCreateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizTemplateCreateResp>;
  /** 删除面单模版 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_deltemplate.html */
  ecLogisticsEwaybillBizTemplateDelete(
    body?: EcLogisticsEwaybillBizTemplateDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizTemplateDeleteResp>;
  /** 获取面单标准模板 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_get_template_config.html */
  ecLogisticsEwaybillBizTemplateConfig(
    body?: EcLogisticsEwaybillBizTemplateConfigBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizTemplateConfigResp>;
  /** 查询开通的电子面单网点/账号信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_getacct.html */
  ecLogisticsEwaybillBizAccountGet(
    body?: EcLogisticsEwaybillBizAccountGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizAccountGetResp>;
  /** 查询开通的快递公司列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_getdeliverylist.html */
  ecLogisticsEwaybillBizDeliveryGet(
    body?: EcLogisticsEwaybillBizDeliveryGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizDeliveryGetResp>;
  /** 查询面单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_getorder.html */
  ecLogisticsEwaybillBizOrderGet(
    body?: EcLogisticsEwaybillBizOrderGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizOrderGetResp>;
  /** 获取面单模板信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_gettemplate.html */
  ecLogisticsEwaybillBizTemplateGet(
    body?: EcLogisticsEwaybillBizTemplateGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizTemplateGetResp>;
  /** 根据模板ID获取面单模板信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_gettemplatebyid.html */
  ecLogisticsEwaybillBizTemplateGetbyid(
    body?: EcLogisticsEwaybillBizTemplateGetbyidBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizTemplateGetbyidResp>;
  /** 电子面单预取号 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_precreateorder.html */
  ecLogisticsEwaybillBizOrderPrecreate(
    body?: EcLogisticsEwaybillBizOrderPrecreateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizOrderPrecreateResp>;
  /** 打印成功通知 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_printorder.html */
  ecLogisticsEwaybillBizOrderPrint(
    body?: EcLogisticsEwaybillBizOrderPrintBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizOrderPrintResp>;
  /** 更新面单模版 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_ewaybill_updatetemplate.html */
  ecLogisticsEwaybillBizTemplateUpdate(
    body?: EcLogisticsEwaybillBizTemplateUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizTemplateUpdateResp>;
  /** 获取打印报文 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/ewaybill/api_get_print_content.html */
  ecLogisticsEwaybillBizPrintGet(
    body?: EcLogisticsEwaybillBizPrintGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizPrintGetResp>;
  /** 增加运费模版 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/merchant/api_addfreighttemplate.html */
  ecMerchantAddfreighttemplate(
    body?: EcMerchantAddfreighttemplateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcMerchantAddfreighttemplateResp>;
  /** 查询运费模版 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/merchant/api_getfreighttemplatedetail.html */
  ecMerchantGetfreighttemplatedetail(
    body?: EcMerchantGetfreighttemplatedetailBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcMerchantGetfreighttemplatedetailResp>;
  /** 获取运费模板列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/merchant/api_getfreighttemplatelist.html */
  ecMerchantGetfreighttemplatelist(
    body?: EcMerchantGetfreighttemplatelistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcMerchantGetfreighttemplatelistResp>;
  /** 更新运费模版 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-delivery/merchant/api_updatefreighttemplate.html */
  ecMerchantUpdatefreighttemplate(
    body?: EcMerchantUpdatefreighttemplateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcMerchantUpdatefreighttemplateResp>;
  /** 同意用户修改收货地址申请 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_acceptorderaddressmodifyapply.html */
  ecOrderAddressmodifyAccept(
    body?: EcOrderAddressmodifyAcceptBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderAddressmodifyAcceptResp>;
  /** 申请查看订单真实号码 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_applyrealnumber.html */
  ecOrderRealnumberApply(
    body?: EcOrderRealnumberApplyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderRealnumberApplyResp>;
  /** 订单再次申请虚拟号 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_applyvirtualnumberagain.html */
  ecOrderVirtualnumberApplyagain(
    body?: EcOrderVirtualnumberApplyagainBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderVirtualnumberApplyagainResp>;
  /** 同意待发货前更换sku请求 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_approvepreshipmentchangesku.html */
  ecOrderPreshipmentchangeskuApprove(
    body?: EcOrderPreshipmentchangeskuApproveBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderPreshipmentchangeskuApproveResp>;
  /** 修改物流信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_changedeliveryinfo.html */
  ecOrderDeliveryinfoUpdate(
    body?: EcOrderDeliveryinfoUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDeliveryinfoUpdateResp>;
  /** 修改订单备注 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_changemerchantnotes.html */
  ecOrderMerchantnotesUpdate(
    body?: EcOrderMerchantnotesUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderMerchantnotesUpdateResp>;
  /** 修改订单地址 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_changeorderaddress.html */
  ecOrderAddressUpdate(
    body?: EcOrderAddressUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderAddressUpdateResp>;
  /** 修改订单价格 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_changeorderprice.html */
  ecOrderPriceUpdate(
    body?: EcOrderPriceUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderPriceUpdateResp>;
  /** 解密订单中的详细收货信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_decodesensitiveinfo.html */
  ecOrderSensitiveinfoDecode(
    body?: EcOrderSensitiveinfoDecodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderSensitiveinfoDecodeResp>;
  /** 订单虚拟号延期 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_delayvirtualnumber.html */
  ecOrderVirtualnumberDelay(
    body?: EcOrderVirtualnumberDelayBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderVirtualnumberDelayResp>;
  /** 获取订单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getorder.html */
  ecOrderGet(
    body?: EcOrderGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderGetResp>;
  /** 获取订单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getorderlist.html */
  ecOrderListGet(
    body?: EcOrderListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderListGetResp>;
  /** 获取礼物单的子单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getpresentsuborder.html */
  ecOrderPresentsuborderGet(
    body?: EcOrderPresentsuborderGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderPresentsuborderGetResp>;
  /** 获取所有待发货前更换sku待处理请求 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getpreshipmentchangeskuwaithandlelist.html */
  ecOrderPreshipmentchangeskuGet(
    body?: EcOrderPreshipmentchangeskuGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderPreshipmentchangeskuGetResp>;
  /** 查看订单真实号审核状态 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getrealnumberviewaudit.html */
  ecOrderRealnumberviewauditGet(
    body?: EcOrderRealnumberviewauditGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderRealnumberviewauditGetResp>;
  /** 礼物订单新增备注信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_presentnote.html */
  ecOrderPresentnoteAdd(
    body?: EcOrderPresentnoteAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderPresentnoteAddResp>;
  /** 添加待认证的手机号 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_privatenumberaddphone.html */
  ecMerchantPrivatenumberAddphone(
    body?: EcMerchantPrivatenumberAddphoneBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcMerchantPrivatenumberAddphoneResp>;
  /** 获取小店手机号认证状态 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_privatenumbergetshopphone.html */
  ecMerchantPrivatenumberGetphone(
    body?: EcMerchantPrivatenumberGetphoneBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcMerchantPrivatenumberGetphoneResp>;
  /** 获取短信验证码 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_privatenumbersendverifycode.html */
  ecMerchantPrivatenumberSendverifycode(
    body?: EcMerchantPrivatenumberSendverifycodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcMerchantPrivatenumberSendverifycodeResp>;
  /** 获取发货协商结果 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_querydeliverynegotiation.html */
  ecOrderDeliverynegotiationResultGet(
    body?: EcOrderDeliverynegotiationResultGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDeliverynegotiationResultGetResp>;
  /** 拒绝用户修改收货地址申请 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_rejectorderaddressmodifyapply.html */
  ecOrderAddressmodifyReject(
    body?: EcOrderAddressmodifyRejectBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderAddressmodifyRejectResp>;
  /** 拒绝待发货前更换sku请求 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_rejectpreshipmentchangesku.html */
  ecOrderPreshipmentchangeskuReject(
    body?: EcOrderPreshipmentchangeskuRejectBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderPreshipmentchangeskuRejectResp>;
  /** 订单搜索 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_searchorder.html */
  ecOrderSearch(
    body?: EcOrderSearchBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderSearchResp>;
  /** 提交发货协商申请 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_submitdeliverynegotiation.html */
  ecOrderDeliverynegotiationSubmit(
    body?: EcOrderDeliverynegotiationSubmitBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDeliverynegotiationSubmitResp>;
  /** 上传生鲜质检信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_submitfreshinspectinfo.html */
  ecOrderFreshinspectSubmit(
    body?: EcOrderFreshinspectSubmitBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderFreshinspectSubmitResp>;
  /** 添加非卖商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_addgiftproduct.html */
  ecProductGiftAdd(
    body?: EcProductGiftAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductGiftAddResp>;
  /** 获取赠品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_getgiftproduct.html */
  ecProductGiftGet(
    body?: EcProductGiftGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductGiftGetResp>;
  /** 获取赠品列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_getgiftproductlist.html */
  ecProductGiftListGet(
    body?: EcProductGiftListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductGiftListGetResp>;
  /** 在售商品转赠品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_setproductasgift.html */
  ecProductGiftOnsaleSet(
    body?: EcProductGiftOnsaleSetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductGiftOnsaleSetResp>;
  /** 更新非卖商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_updategiftproduct.html */
  ecProductGiftUpdate(
    body?: EcProductGiftUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductGiftUpdateResp>;
  /** 更新赠品库存 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/gift/api_updategiftstock.html */
  ecProductGiftStockUpdate(
    body?: EcProductGiftStockUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductGiftStockUpdateResp>;
  /** 创建赠品活动 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/giftactivity/api_addgiftactivity.html */
  ecProductActivityAdd(
    body?: EcProductActivityAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductActivityAddResp>;
  /** 删除赠品活动 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/giftactivity/api_deletegiftactivity.html */
  ecProductActivityDel(
    body?: EcProductActivityDelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductActivityDelResp>;
  /** 停止赠品活动 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/giftactivity/api_stopgiftactivity.html */
  ecProductActivityStop(
    body?: EcProductActivityStopBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductActivityStopResp>;
  /** 添加限时抢购任务 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/limiteddiscounttask/api_addlimiteddiscounttask.html */
  ecProductLimiteddiscounttaskAdd(
    body?: EcProductLimiteddiscounttaskAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductLimiteddiscounttaskAddResp>;
  /** 删除限时抢购任务 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/limiteddiscounttask/api_deletelimiteddiscounttask.html */
  ecProductLimiteddiscounttaskDelete(
    body?: EcProductLimiteddiscounttaskDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductLimiteddiscounttaskDeleteResp>;
  /** 获取限时抢购任务列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/limiteddiscounttask/api_getlimiteddiscounttasklist.html */
  ecProductLimiteddiscounttaskListGet(
    body?: EcProductLimiteddiscounttaskListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductLimiteddiscounttaskListGetResp>;
  /** 停止限时抢购任务 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/limiteddiscounttask/api_stoplimiteddiscounttask.html */
  ecProductLimiteddiscounttaskStop(
    body?: EcProductLimiteddiscounttaskStopBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductLimiteddiscounttaskStopResp>;
  /** 更新限时抢购任务 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/limiteddiscounttask/api_updatelimiteddiscounttask.html */
  ecProductLimiteddiscounttaskUpdate(
    body?: EcProductLimiteddiscounttaskUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductLimiteddiscounttaskUpdateResp>;
  /** 添加商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_addproduct.html */
  ecProductAdd(
    body?: EcProductAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductAddResp>;
  /** 商品立即开售 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_begintimingsale.html */
  ecProductBegintimingsale(
    body?: EcProductBegintimingsaleBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductBegintimingsaleResp>;
  /** 撤回商品审核 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_cancelauditproduct.html */
  ecProductAuditCancel(
    body?: EcProductAuditCancelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductAuditCancelResp>;
  /** 取消商品开售 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_canceltimingsale.html */
  ecProductCanceltimingsale(
    body?: EcProductCanceltimingsaleBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductCanceltimingsaleResp>;
  /** 发品前校验 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_categoryprecheck.html */
  ecProductCategoryprecheck(
    body?: EcProductCategoryprecheckBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductCategoryprecheckResp>;
  /** 删除商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_deleteproduct.html */
  ecProductDelete(
    body?: EcProductDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductDeleteResp>;
  /** 下架商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_delistingproduct.html */
  ecProductDelisting(
    body?: EcProductDelistingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductDelistingResp>;
  /** 站内外商品属性映射 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_externalproductmapping.html */
  ecProductExternalproductmapping(
    body?: EcProductExternalproductmappingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductExternalproductmappingResp>;
  /** 商品属性映射及推荐 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_externalproductmappingnew.html */
  ecProductExternalproductmappingnew(
    body?: EcProductExternalproductmappingnewBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductExternalproductmappingnewResp>;
  /** 获取商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproduct.html */
  ecProductGet(
    body?: EcProductGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductGetResp>;
  /** 获取商品提审限额 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproductauditquota.html */
  ecProductGetauditquota(
    body?: EcProductGetauditquotaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductGetauditquotaResp>;
  /** 获取商品上架策略 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproductauditstrategy.html */
  ecProductAuditstrategyGet(
    body?: EcProductAuditstrategyGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductAuditstrategyGetResp>;
  /** 获取商品H5短链 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproducth5url.html */
  ecProductH5urlGet(
    body?: EcProductH5urlGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductH5urlGetResp>;
  /** 获取商品列表 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproductlist.html */
  ecProductListGet(
    body?: EcProductListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductListGetResp>;
  /** 获取商品二维码 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproductqrcode.html */
  ecProductQrcodeGet(
    body?: EcProductQrcodeGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductQrcodeGetResp>;
  /** 获取商品Scheme码 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproductscheme.html */
  ecProductSchemeGet(
    body?: EcProductSchemeGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductSchemeGetResp>;
  /** 获取商品口令 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_getproducttaglink.html */
  ecProductTaglinkGet(
    body?: EcProductTaglinkGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductTaglinkGetResp>;
  /** 上架商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_listingproduct.html */
  ecProductListing(
    body?: EcProductListingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductListingResp>;
  /** 类目推荐 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_product_classify.html */
  ecProductCategoryClassify(
    body?: EcProductCategoryClassifyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductCategoryClassifyResp>;
  /** 商品品牌推荐 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_productbrandrecommend.html */
  ecProductProductbrandrecommend(
    body?: EcProductProductbrandrecommendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductProductbrandrecommendResp>;
  /** 设置商品上架策略 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_setproductauditstrategy.html */
  ecProductAuditstrategySet(
    body?: EcProductAuditstrategySetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductAuditstrategySetResp>;
  /** 更新商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_updateproduct.html */
  ecProductUpdate(
    body?: EcProductUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductUpdateResp>;
  /** 免审更新商品 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/api_updateproductauditfree.html */
  ecProductAuditfree(
    body?: EcProductAuditfreeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductAuditfreeResp>;
  /** 新增第三方货源信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/shop/mmecapi_addproductthirdpartysource.html */
  ecProductAddproductthirdpartysource(
    body?: EcProductAddproductthirdpartysourceBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductAddproductthirdpartysourceResp>;
  /** 批量获取库存信息 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/stock/api_batchgetstock.html */
  ecProductStockBatchget(
    body?: EcProductStockBatchgetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductStockBatchgetResp>;
  /** 获取库存 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/stock/api_getstock.html */
  ecProductStockGet(
    body?: EcProductStockGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductStockGetResp>;
  /** 获取库存流水 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/stock/api_getstockflow.html */
  ecProductStockGetflow(
    body?: EcProductStockGetflowBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductStockGetflowResp>;
  /** 快速更新库存 @see https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-product/stock/api_updatestock.html */
  ecProductStockUpdate(
    body?: EcProductStockUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcProductStockUpdateResp>;
  /** 获取授权视频号列表 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopfinderauthorizationlist.html */
  ecCompassShopFinderAuthorizationListGet(
    body?: EcCompassShopFinderAuthorizationListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCompassShopFinderAuthorizationListGetResp>;
  /** 获取带货达人列表 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopfinderlist.html */
  ecCompassShopFinderListGet(
    body?: EcCompassShopFinderListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCompassShopFinderListGetResp>;
  /** 获取带货数据概览 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopfinderoverall.html */
  ecCompassShopFinderOverallGet(
    body?: EcCompassShopFinderOverallGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCompassShopFinderOverallGetResp>;
  /** 获取带货达人商品列表 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopfinderproductlist.html */
  ecCompassShopFinderProductListGet(
    body?: EcCompassShopFinderProductListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCompassShopFinderProductListGetResp>;
  /** 获取带货达人详情 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopfinderproductoverall.html */
  ecCompassShopFinderProductOverallGet(
    body?: EcCompassShopFinderProductOverallGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCompassShopFinderProductOverallGetResp>;
  /** 获取店铺开播列表 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshoplivelist.html */
  ecCompassShopLiveListGet(
    body?: EcCompassShopLiveListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCompassShopLiveListGetResp>;
  /** 获取电商数据概览 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopoverall.html */
  ecCompassShopOverallGet(
    body?: EcCompassShopOverallGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCompassShopOverallGetResp>;
  /** 获取商品详细信息 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopproductdata.html */
  ecCompassShopProductDataGet(
    body?: EcCompassShopProductDataGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCompassShopProductDataGetResp>;
  /** 获取商品列表 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopproductlist.html */
  ecCompassShopProductListGet(
    body?: EcCompassShopProductListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCompassShopProductListGetResp>;
  /** 获取店铺人群数据 @see https://developers.weixin.qq.com/doc/store/shop/API/compass/api_getshopsaleprofiledata.html */
  ecCompassShopSaleProfileDataGet(
    body?: EcCompassShopSaleProfileDataGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCompassShopSaleProfileDataGetResp>;
  /** 创建优惠券 @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_createcoupon.html */
  ecCouponCreate(
    body?: EcCouponCreateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCouponCreateResp>;
  /** 获取优惠券详情 @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_getcoupon.html */
  ecCouponGet(
    body?: EcCouponGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCouponGetResp>;
  /** 获取优惠券ID列表 @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_getcouponlist.html */
  ecCouponGetList(
    body?: EcCouponGetListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCouponGetListResp>;
  /** 获取用户优惠券详情 @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_getusercoupon.html */
  ecCouponGetUserCoupon(
    body?: EcCouponGetUserCouponBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCouponGetUserCouponResp>;
  /** 获取用户优惠券ID列表 @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_getusercouponlist.html */
  ecCouponGetUserCouponList(
    body?: EcCouponGetUserCouponListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCouponGetUserCouponListResp>;
  /** 更新优惠券内容 @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_updatecoupon.html */
  ecCouponUpdate(
    body?: EcCouponUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCouponUpdateResp>;
  /** 更新优惠券状态 @see https://developers.weixin.qq.com/doc/store/shop/API/coupon/api_updatecouponstatus.html */
  ecCouponUpdateStatus(
    body?: EcCouponUpdateStatusBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCouponUpdateStatusResp>;
  /** 获取店铺收藏的人数 @see https://developers.weixin.qq.com/doc/store/shop/API/favorite/shopfavorite/api_getfavoritescount.html */
  ecFavoritesCountGet(
    body?: EcFavoritesCountGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcFavoritesCountGetResp>;
  /** 根据卡号查银行信息 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/bank/api_ecgetbankbynum.html */
  shopFundsGetbankbynum(
    body?: ShopFundsGetbankbynumBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopFundsGetbankbynumResp>;
  /** 搜索银行列表 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/bank/api_ecgetbanklist.html */
  shopFundsGetbanklist(
    body?: ShopFundsGetbanklistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopFundsGetbanklistResp>;
  /** 查询城市列表 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/bank/api_ecgetcity.html */
  shopFundsGetcity(
    body?: ShopFundsGetcityBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopFundsGetcityResp>;
  /** 查询大陆银行省份列表 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/bank/api_ecgetprovince.html */
  shopFundsGetprovince(
    body?: ShopFundsGetprovinceBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopFundsGetprovinceResp>;
  /** 查询支行列表 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/bank/api_ecgetsubbranch.html */
  shopFundsGetsubbranch(
    body?: ShopFundsGetsubbranchBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopFundsGetsubbranchResp>;
  /** 获取账户余额 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getbalance.html */
  ecFundsGetbalance(
    body?: EcFundsGetbalanceBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcFundsGetbalanceResp>;
  /** 获取结算账户 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getbankacct.html */
  ecFundsGetbankacct(
    body?: EcFundsGetbankacctBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcFundsGetbankacctResp>;
  /** 获取资金流水详情 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getfundsflowdetail.html */
  ecFundsGetfundsflowdetail(
    body?: EcFundsGetfundsflowdetailBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcFundsGetfundsflowdetailResp>;
  /** 获取资金流水列表 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getfundsflowlist.html */
  ecFundsGetfundsflowlist(
    body?: EcFundsGetfundsflowlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcFundsGetfundsflowlistResp>;
  /** 获取提现记录 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getwithdrawdetail.html */
  ecFundsGetwithdrawdetail(
    body?: EcFundsGetwithdrawdetailBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcFundsGetwithdrawdetailResp>;
  /** 获取提现记录列表 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_getwithdrawlist.html */
  ecFundsGetwithdrawlist(
    body?: EcFundsGetwithdrawlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcFundsGetwithdrawlistResp>;
  /** 查询订单流水列表 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_listorderflow.html */
  ecFundsListorderflow(
    body?: EcFundsListorderflowBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcFundsListorderflowResp>;
  /** 修改结算账户 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_setbankacct.html */
  ecFundsSetbankacct(
    body?: EcFundsSetbankacctBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcFundsSetbankacctResp>;
  /** 商户提现 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/funds/api_submitwithdraw.html */
  ecFundsSubmitwithdraw(
    body?: EcFundsSubmitwithdrawBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcFundsSubmitwithdrawResp>;
  /** 查询扫码状态 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/qrcode/api_eccheckqrcode.html */
  shopFundsQrcodeCheck(
    body?: ShopFundsQrcodeCheckBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopFundsQrcodeCheckResp>;
  /** 获取二维码 @see https://developers.weixin.qq.com/doc/store/shop/API/funds/qrcode/api_ecgetqrcode.html */
  shopFundsQrcodeGet(
    body?: ShopFundsQrcodeGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShopFundsQrcodeGetResp>;
  /** 撤销主页背景图申请 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/background/api_cancelbackgroundapply.html */
  ecBasicsHomepageBackgroundApplyCancel(
    body?: EcBasicsHomepageBackgroundApplyCancelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBasicsHomepageBackgroundApplyCancelResp>;
  /** 查询背景图 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/background/api_getbackground.html */
  ecBasicsHomepageBackgroundGet(
    body?: EcBasicsHomepageBackgroundGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBasicsHomepageBackgroundGetResp>;
  /** 清空主页背景图并撤销流程中的申请 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/background/api_removebackground.html */
  ecBasicsHomepageBackgroundRemove(
    body?: EcBasicsHomepageBackgroundRemoveBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBasicsHomepageBackgroundRemoveResp>;
  /** 提交背景图申请 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/background/api_submitbackgroundapply.html */
  ecBasicsHomepageBackgroundApplySubmit(
    body?: EcBasicsHomepageBackgroundApplySubmitBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBasicsHomepageBackgroundApplySubmitResp>;
  /** 撤销精选展示位申请 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/banner/api_cancelbannerapply.html */
  ecBasicsHomepageBannerApplyCancel(
    body?: EcBasicsHomepageBannerApplyCancelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBasicsHomepageBannerApplyCancelResp>;
  /** 查询精选展示位 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/banner/api_getbanner.html */
  ecBasicsHomepageBannerGet(
    body?: EcBasicsHomepageBannerGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBasicsHomepageBannerGetResp>;
  /** 清空精选展示位并撤销流程中的申请 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/banner/api_removebanner.html */
  ecBasicsHomepageBannerRemove(
    body?: EcBasicsHomepageBannerRemoveBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBasicsHomepageBannerRemoveResp>;
  /** 提交精选展示位申请 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/banner/api_submitbannerapply.html */
  ecBasicsHomepageBannerApplySubmit(
    body?: EcBasicsHomepageBannerApplySubmitBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBasicsHomepageBannerApplySubmitResp>;
  /** 获取分类关联的商品ID列表 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/shoptype/api_getclassificationproductlist.html */
  ecStoreClassificationTreeProductGet(
    body?: EcStoreClassificationTreeProductGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcStoreClassificationTreeProductGetResp>;
  /** 获取在店铺主页展示的商品分类 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/shoptype/api_getclassificationtree.html */
  ecStoreClassificationTreeGet(
    body?: EcStoreClassificationTreeGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcStoreClassificationTreeGetResp>;
  /** 获取主页展示商品列表 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/storewindow/api_getstorewindowproductlist.html */
  ecStoreWindowProductListGet(
    body?: EcStoreWindowProductListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcStoreWindowProductListGetResp>;
  /** 隐藏小店主页商品 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/storewindow/api_hidestorewindowproduct.html */
  ecStoreWindowProductHide(
    body?: EcStoreWindowProductHideBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcStoreWindowProductHideResp>;
  /** 重新排序主页展示商品 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/storewindow/api_reorderstorewindowproduct.html */
  ecStoreWindowProductReorder(
    body?: EcStoreWindowProductReorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcStoreWindowProductReorderResp>;
  /** 置顶小店主页商品 @see https://developers.weixin.qq.com/doc/store/shop/API/homepage/storewindow/api_settopstorewindowproduct.html */
  ecStoreWindowProductSettop(
    body?: EcStoreWindowProductSettopBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcStoreWindowProductSettopResp>;
  /** 上传多媒体资源 @see https://developers.weixin.qq.com/doc/store/shop/API/kf/api_cosupload.html */
  ecCommkfCosupload(
    body?: EcCommkfCosuploadBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCommkfCosuploadResp>;
  /** 发送消息 @see https://developers.weixin.qq.com/doc/store/shop/API/kf/api_sendmsg.html */
  ecCommkfSendmsg(
    body?: EcCommkfSendmsgBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcCommkfSendmsgResp>;
  /** 批量新增联盟机构推广 @see https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_batchaddheadsupplieritem.html */
  ecLeagueItemHeadsupplierBatchadd(
    body?: EcLeagueItemHeadsupplierBatchaddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueItemHeadsupplierBatchaddResp>;
  /** 批量新增联盟商品 @see https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_batchadditem.html */
  ecLeagueItemBatchadd(
    body?: EcLeagueItemBatchaddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueItemBatchaddResp>;
  /** 获取联盟推广计划详情 @see https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_getitem.html */
  ecLeagueItemGet(
    body?: EcLeagueItemGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueItemGetResp>;
  /** 获取联盟商品列表 @see https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_getitemlist.html */
  ecLeagueItemListGet(
    body?: EcLeagueItemListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueItemListGetResp>;
  /** 获取商品推广计划列表 @see https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_listspupromotionplans.html */
  ecLeaguePromotionPlanList(
    body?: EcLeaguePromotionPlanListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeaguePromotionPlanListResp>;
  /** 获取商品推广带货者列表 @see https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_listspupromotiontalents.html */
  ecLeaguePromotionTalentList(
    body?: EcLeaguePromotionTalentListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeaguePromotionTalentListResp>;
  /** 更新联盟推广计划信息 @see https://developers.weixin.qq.com/doc/store/shop/API/league/item/api_upditem.html */
  ecLeagueItemUpd(
    body?: EcLeagueItemUpdBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueItemUpdResp>;
  /** 获取带货者详情信息 @see https://developers.weixin.qq.com/doc/store/shop/API/league/promoter/api_getpromoter.html */
  ecLeaguePromoterGet(
    body?: EcLeaguePromoterGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeaguePromoterGetResp>;
  /** 获取带货者列表 @see https://developers.weixin.qq.com/doc/store/shop/API/league/promoter/api_getpromoterlist.html */
  ecLeaguePromoterListGet(
    body?: EcLeaguePromoterListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeaguePromoterListGetResp>;
  /** 获取带货者商品数据列表 @see https://developers.weixin.qq.com/doc/store/shop/API/league/promoter/api_gettalentproductdata.html */
  ecLeagueTalentGetproductdatalist(
    body?: EcLeagueTalentGetproductdatalistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueTalentGetproductdatalistResp>;
  /** 编辑带货者 @see https://developers.weixin.qq.com/doc/store/shop/API/league/promoter/api_updatetalent.html */
  ecLeagueTalentUpdate(
    body?: EcLeagueTalentUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLeagueTalentUpdateResp>;
  /** 获取文件下载链接 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/basic/api_getdownloadurl.html */
  ecOpenGetDownloadUrl(
    body?: EcOpenGetDownloadUrlBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOpenGetDownloadUrlResp>;
  /** 上传资料 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/basic/api_uploadec.html */
  ecOpenUpload(
    body?: EcOpenUploadBody,
    query?: EcOpenUploadQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOpenUploadResp>;
  /** 创建并发送礼物 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_create_present_order.html */
  ecOrderPresentorderCreate(
    body?: EcOrderPresentorderCreateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderPresentorderCreateResp>;
  /** 查询礼物活动详情 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_activity.html */
  ecB2cActivityInfoPromoterGet(
    body?: EcB2cActivityInfoPromoterGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcB2cActivityInfoPromoterGetResp>;
  /** 查询礼物订单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_present.html */
  ecOrderPresentGet(
    body?: EcOrderPresentGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderPresentGetResp>;
  /** 查询礼物订单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_present_list.html */
  ecOrderPresentlistGet(
    body?: EcOrderPresentlistGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderPresentlistGetResp>;
  /** 查询收礼者订单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_receiver_order_list.html */
  ecOrderReceiverorderlistGet(
    body?: EcOrderReceiverorderlistGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderReceiverorderlistGetResp>;
  /** 查询小店礼物活动列表 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_list_present_activity.html */
  ecB2cActivityListPromoterGet(
    body?: EcB2cActivityListPromoterGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcB2cActivityListPromoterGetResp>;
  /** 指定礼物收礼者 @see https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_set_present_receiver.html */
  ecOrderPresentorderReceiverSet(
    body?: EcOrderPresentorderReceiverSetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderPresentorderReceiverSetResp>;
  /** 查询工单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/platformkf/api_getmchticketdetail.html */
  ecPlatformkfGetmchticketdetail(
    body?: EcPlatformkfGetmchticketdetailBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPlatformkfGetmchticketdetailResp>;
  /** 获取商家工单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/platformkf/api_getmchticketlist.html */
  ecPlatformkfGetmchticketlist(
    body?: EcPlatformkfGetmchticketlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPlatformkfGetmchticketlistResp>;
  /** 查询工单分类配置 @see https://developers.weixin.qq.com/doc/store/shop/API/platformkf/api_getticketclassconfig.html */
  ecPlatformkfGetticketclassconfig(
    body?: EcPlatformkfGetticketclassconfigBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPlatformkfGetticketclassconfigResp>;
  /** 商户处理商家工单 @see https://developers.weixin.qq.com/doc/store/shop/API/platformkf/api_operatemchticket.html */
  ecPlatformkfOperatemchticket(
    body?: EcPlatformkfOperatemchticketBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcPlatformkfOperatemchticketResp>;
  /** 查询质检仓配置 @see https://developers.weixin.qq.com/doc/store/shop/API/qic/api_getinspectconfig.html */
  ecQicInspectConfigGet(
    body?: EcQicInspectConfigGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcQicInspectConfigGetResp>;
  /** 查询送检配置模板信息 @see https://developers.weixin.qq.com/doc/store/shop/API/qic/api_getinspectsubmitconfig.html */
  ecQicInspectSubmitconfigGet(
    body?: EcQicInspectSubmitconfigGetBody,
    query?: EcQicInspectSubmitconfigGetQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcQicInspectSubmitconfigGetResp>;
  /** 打印质检码 @see https://developers.weixin.qq.com/doc/store/shop/API/qic/api_printinspectcode.html */
  ecQicInspectCodePrint(
    body?: EcQicInspectCodePrintBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcQicInspectCodePrintResp>;
  /** 自寄快递送检 @see https://developers.weixin.qq.com/doc/store/shop/API/qic/api_registerlogistics.html */
  ecQicInspectRegisterLogistics(
    body?: EcQicInspectRegisterLogisticsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcQicInspectRegisterLogisticsResp>;
  /** 绑定送检信息 @see https://developers.weixin.qq.com/doc/store/shop/API/qic/api_submitinspectinfo.html */
  ecQicInspectSubmit(
    body?: EcQicInspectSubmitBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcQicInspectSubmitResp>;
  /** 获取店铺H5链接 @see https://developers.weixin.qq.com/doc/store/shop/API/storemanage/api_getshoph5url.html */
  ecBasicsShopH5urlGet(
    body?: EcBasicsShopH5urlGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBasicsShopH5urlGetResp>;
  /** 获取店铺二维码 @see https://developers.weixin.qq.com/doc/store/shop/API/storemanage/api_getshopqrcode.html */
  ecBasicsShopQrcodeGet(
    body?: EcBasicsShopQrcodeGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBasicsShopQrcodeGetResp>;
  /** 获取店铺口令 @see https://developers.weixin.qq.com/doc/store/shop/API/storemanage/api_getshoptaglink.html */
  ecBasicsShopTaglinkGet(
    body?: EcBasicsShopTaglinkGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBasicsShopTaglinkGetResp>;
  /** 获取店铺基本信息 @see https://developers.weixin.qq.com/doc/store/shop/API/storemanage/api_mmecapi_basicinfo.html */
  ecBasicsInfoGet(
    body?: EcBasicsInfoGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBasicsInfoGetResp>;
  /** 获取国补订单开票信息 @see https://developers.weixin.qq.com/doc/store/shop/API/subsidy/invoicing/api_query_invoicing_info.html */
  ecSubsidyQueryInvoicingInfo(
    body?: EcSubsidyQueryInvoicingInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSubsidyQueryInvoicingInfoResp>;
  /** 上传国补订单发票文件 @see https://developers.weixin.qq.com/doc/store/shop/API/subsidy/invoicing/api_upload_invoice_file.html */
  ecSubsidyUploadInvoiceFile(
    body?: EcSubsidyUploadInvoiceFileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSubsidyUploadInvoiceFileResp>;
  /** 上传国补订单发票信息 @see https://developers.weixin.qq.com/doc/store/shop/API/subsidy/invoicing/api_upload_invoice_info.html */
  ecSubsidyUploadInvoiceInfo(
    body?: EcSubsidyUploadInvoiceInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSubsidyUploadInvoiceInfoResp>;
  /** 获取分配方式 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_get_distribution.html */
  ecSupplierRelationGetDistribute(
    body?: EcSupplierRelationGetDistributeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierRelationGetDistributeResp>;
  /** 获取商品对应的自动分配供货商 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_get_product_default_distribution.html */
  ecSupplierRelationGetProductDefaultDistribute(
    body?: EcSupplierRelationGetProductDefaultDistributeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierRelationGetProductDefaultDistributeResp>;
  /** 获取按商品自动分配的商品列表 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_get_product_list.html */
  ecSupplierRelationGetProductList(
    body?: EcSupplierRelationGetProductListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierRelationGetProductListResp>;
  /** 设置全店订单自动分配 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_set_all_distribution.html */
  ecSupplierRelationSetAllDistribution(
    body?: EcSupplierRelationSetAllDistributionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierRelationSetAllDistributionResp>;
  /** 设置全店订单手动分配 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_set_manually_distribution.html */
  ecSupplierRelationSetManuallyDistribute(
    body?: EcSupplierRelationSetManuallyDistributeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierRelationSetManuallyDistributeResp>;
  /** 设置按商品自动分配 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/auto/api_set_product_distribution.html */
  ecSupplierRelationSetProductDistribute(
    body?: EcSupplierRelationSetProductDistributeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierRelationSetProductDistributeResp>;
  /** 分配订单代发 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/order/api_dropship_assign.html */
  ecOrderDropshipAssign(
    body?: EcOrderDropshipAssignBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDropshipAssignResp>;
  /** 取消分配代发单 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/order/api_dropship_cancel.html */
  ecOrderDropshipCancel(
    body?: EcOrderDropshipCancelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDropshipCancelResp>;
  /** 查询代发单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/order/api_dropship_get.html */
  ecOrderDropshipGet(
    body?: EcOrderDropshipGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDropshipGetResp>;
  /** 拉取代发单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/order/api_dropship_list.html */
  ecOrderDropshipList(
    body?: EcOrderDropshipListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDropshipListResp>;
  /** 搜索代发单 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/order/api_dropship_search.html */
  ecOrderDropshipSearch(
    body?: EcOrderDropshipSearchBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDropshipSearchResp>;
  /** 获取供货商列表 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/relation/api_get_supplier_list.html */
  ecSupplierRelationGetSupplierList(
    body?: EcSupplierRelationGetSupplierListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierRelationGetSupplierListResp>;
  /** 申请关联供货商 @see https://developers.weixin.qq.com/doc/store/shop/API/supplier/relation/api_invite_supplier.html */
  ecSupplierRelationInviteSupplier(
    body?: EcSupplierRelationInviteSupplierBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierRelationInviteSupplierResp>;
  /** 查询供货单详情 @see https://developers.weixin.qq.com/doc/store/shop/API/supply/api_supplyorder_get.html */
  ecOrderSupplyorderGet(
    body?: EcOrderSupplyorderGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderSupplyorderGetResp>;
  /** 获取供货单列表 @see https://developers.weixin.qq.com/doc/store/shop/API/supply/api_supplyorder_list.html */
  ecOrderSupplyorderList(
    body?: EcOrderSupplyorderListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderSupplyorderListResp>;
  /** 搜索供货单 @see https://developers.weixin.qq.com/doc/store/shop/API/supply/api_supplyorder_search.html */
  ecOrderSupplyorderSearch(
    body?: EcOrderSupplyorderSearchBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderSupplyorderSearchResp>;
  /** 获取用户信息 @see https://developers.weixin.qq.com/doc/store/shop/API/vip/api_getuserinfo.html */
  ecVipUserInfoGet(
    body?: EcVipUserInfoGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcVipUserInfoGetResp>;
  /** 获取用户列表 @see https://developers.weixin.qq.com/doc/store/shop/API/vip/api_getuserlist.html */
  ecVipUserListGet(
    body?: EcVipUserListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcVipUserListGetResp>;
  /** 获取用户积分流水 @see https://developers.weixin.qq.com/doc/store/shop/API/vip/api_getuserscoreflowrecord.html */
  ecVipUserScoreFlowrecordGet(
    body?: EcVipUserScoreFlowrecordGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcVipUserScoreFlowrecordGetResp>;
  /** 获取用户积分 @see https://developers.weixin.qq.com/doc/store/shop/API/vip/api_getvipuserscore.html */
  ecVipUserScoreGet(
    body?: EcVipUserScoreGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcVipUserScoreGetResp>;
  /** 批量增加覆盖区域 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_addcoverlocations.html */
  ecWarehouseCoverlocationsAdd(
    body?: EcWarehouseCoverlocationsAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcWarehouseCoverlocationsAddResp>;
  /** 创建区域仓库 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_createwarehouse.html */
  ecWarehouseCreate(
    body?: EcWarehouseCreateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcWarehouseCreateResp>;
  /** 批量删除覆盖区域 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_delcoverlocations.html */
  ecWarehouseCoverlocationsDel(
    body?: EcWarehouseCoverlocationsDelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcWarehouseCoverlocationsDelResp>;
  /** 获取地址行政编码 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_getaddresscode.html */
  ecBasicsAddresscodeGet(
    body?: EcBasicsAddresscodeGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcBasicsAddresscodeGetResp>;
  /** 获取指定地址下区域仓库的优先级 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_getaddressprioritysort.html */
  ecWarehouseAddressPrioritysortGet(
    body?: EcWarehouseAddressPrioritysortGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcWarehouseAddressPrioritysortGetResp>;
  /** 获取区域仓库 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_getwarehouse.html */
  ecWarehouseGet(
    body?: EcWarehouseGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcWarehouseGetResp>;
  /** 查询区域仓库列表 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_getwarehouselist.html */
  ecWarehouseListGet(
    body?: EcWarehouseListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcWarehouseListGetResp>;
  /** 获取区域仓库存数量 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_getwarehousestock.html */
  ecWarehouseStockGet(
    body?: EcWarehouseStockGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcWarehouseStockGetResp>;
  /** 设置指定地址下区域仓库的优先级 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_setaddressprioritysort.html */
  ecWarehouseAddressPrioritysortSet(
    body?: EcWarehouseAddressPrioritysortSetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcWarehouseAddressPrioritysortSetResp>;
  /** 修改区域仓库详情 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_updatewarehousedetail.html */
  ecWarehouseDetailUpdate(
    body?: EcWarehouseDetailUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcWarehouseDetailUpdateResp>;
  /** 更新区域仓库存数量 @see https://developers.weixin.qq.com/doc/store/shop/API/warehouse/api_updatewarehousestock.html */
  ecWarehouseStockUpdate(
    body?: EcWarehouseStockUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcWarehouseStockUpdateResp>;
  /** 获取关联账号企微id @see https://developers.weixin.qq.com/doc/store/shop/API/wecom/api_shop_get_wecom_openid.html */
  ecWecomGetWecomId(
    body?: EcWecomGetWecomIdBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcWecomGetWecomIdResp>;
  /** 小店获取关联小程序信息 @see https://developers.weixin.qq.com/doc/store/shop/API/wxamember/shop/api_v3_getwxainfo.html */
  ecVipInfoGet(
    body?: EcVipInfoGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcVipInfoGetResp>;
  /** 新增小程序会员信息 @see https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_adduserinfo.html */
  vipUserInfoAdd(
    body?: VipUserInfoAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VipUserInfoAddResp>;
  /** 删除小程序会员信息 @see https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_deluserinfo.html */
  vipUserInfoDelete(
    body?: VipUserInfoDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VipUserInfoDeleteResp>;
  /** 获取小程序已关联小店列表 @see https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_getshoplist.html */
  vipShopListGet(
    body?: VipShopListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VipShopListGetResp>;
  /** 获取小程序会员信息 @see https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_getuserinfo.html */
  vipUserInfoGet(
    body?: VipUserInfoGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VipUserInfoGetResp>;
  /** 获取小程序会员列表 @see https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_getuserlist.html */
  vipUserListGet(
    body?: VipUserListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VipUserListGetResp>;
  /** 更新小程序会员信息 @see https://developers.weixin.qq.com/doc/store/shop/API/wxamember/wxa/api_v3_wxa_updateuserinfo.html */
  vipUserInfoUpdate(
    body?: VipUserInfoUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VipUserInfoUpdateResp>;
  /** 获取供货商基础信息 @see https://developers.weixin.qq.com/doc/store/supplier/api/account/api_get_supplier_base_info.html */
  ecSupplierBaseGetSupplierBaseInfo(
    body?: EcSupplierBaseGetSupplierBaseInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierBaseGetSupplierBaseInfoResp>;
  /** 获取打印报文 @see https://developers.weixin.qq.com/doc/store/supplier/api/delivery/electronic/api_get_print_content.html */
  ecLogisticsEwaybillBizOrderGetprintinfo(
    body?: EcLogisticsEwaybillBizOrderGetprintinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcLogisticsEwaybillBizOrderGetprintinfoResp>;
  /** 代发单与供货单发货 @see https://developers.weixin.qq.com/doc/store/supplier/api/delivery/shipping/api_delivery_send.html */
  ecOrderDropshipSupplierDeliverySend(
    body?: EcOrderDropshipSupplierDeliverySendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDropshipSupplierDeliverySendResp>;
  /** 修改代发单与供货单物流 @see https://developers.weixin.qq.com/doc/store/supplier/api/delivery/shipping/api_delivery_update.html */
  ecOrderDropshipSupplierDeliveryUpdate(
    body?: EcOrderDropshipSupplierDeliveryUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDropshipSupplierDeliveryUpdateResp>;
  /** 查询代发单详情 @see https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-order/api_dropship_get.html */
  ecOrderDropshipSupplierGet(
    body?: EcOrderDropshipSupplierGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDropshipSupplierGetResp>;
  /** 获取代发单列表 @see https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-order/api_dropship_list.html */
  ecOrderDropshipSupplierList(
    body?: EcOrderDropshipSupplierListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDropshipSupplierListResp>;
  /** 搜索代发单 @see https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-order/api_dropship_search.html */
  ecOrderDropshipSupplierSearch(
    body?: EcOrderDropshipSupplierSearchBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderDropshipSupplierSearchResp>;
  /** 同意商家关联申请 @see https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-relation/api_accept_invitation.html */
  ecSupplierRelationAcceptInvitation(
    body?: EcSupplierRelationAcceptInvitationBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierRelationAcceptInvitationResp>;
  /** 获取关联的商家列表 @see https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-relation/api_get_ec_list.html */
  ecSupplierRelationGetEcList(
    body?: EcSupplierRelationGetEcListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierRelationGetEcListResp>;
  /** 拒绝商家关联申请 @see https://developers.weixin.qq.com/doc/store/supplier/api/dropship/dropship-relation/api_reject_invitation.html */
  ecSupplierRelationRejectInvitation(
    body?: EcSupplierRelationRejectInvitationBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierRelationRejectInvitationResp>;
  /** 查询供货单详情 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-order/api_supplyorder_get.html */
  ecOrderSupplyorderSupplierGet(
    body?: EcOrderSupplyorderSupplierGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderSupplyorderSupplierGetResp>;
  /** 获取供货单列表 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-order/api_supplyorder_list.html */
  ecOrderSupplyorderSupplierList(
    body?: EcOrderSupplyorderSupplierListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderSupplyorderSupplierListResp>;
  /** 搜索供货单 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-order/api_supplyorder_search.html */
  ecOrderSupplyorderSupplierSearch(
    body?: EcOrderSupplyorderSupplierSearchBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcOrderSupplyorderSupplierSearchResp>;
  /** 添加货品 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_addsupplyproduct.html */
  ecSupplierProductAdd(
    body?: EcSupplierProductAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierProductAddResp>;
  /** 撤回货品审核 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_cancelauditsupplyproduct.html */
  ecSupplierProductAuditCancel(
    body?: EcSupplierProductAuditCancelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierProductAuditCancelResp>;
  /** 删除货品 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_deletesupplyproduct.html */
  ecSupplierProductDelete(
    body?: EcSupplierProductDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierProductDeleteResp>;
  /** 下架货品 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_delistingsupplyproduct.html */
  ecSupplierProductDelisting(
    body?: EcSupplierProductDelistingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierProductDelistingResp>;
  /** 获取货品详情 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_getsupplyproduct.html */
  ecSupplierProductGet(
    body?: EcSupplierProductGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierProductGetResp>;
  /** 获取货品列表 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_getsupplyproductlist.html */
  ecSupplierProductListGet(
    body?: EcSupplierProductListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierProductListGetResp>;
  /** 上架货品 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_listingsupplyproduct.html */
  ecSupplierProductListing(
    body?: EcSupplierProductListingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierProductListingResp>;
  /** 更新货品 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_updatesupplyproduct.html */
  ecSupplierProductUpdate(
    body?: EcSupplierProductUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierProductUpdateResp>;
  /** 免审更新货品 @see https://developers.weixin.qq.com/doc/store/supplier/api/supply/supply-product/api_updatesupplyproductauditfree.html */
  ecSupplierProductAuditfree(
    body?: EcSupplierProductAuditfreeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcSupplierProductAuditfreeResp>;
  /** 获取佣金单详情 @see https://developers.weixin.qq.com/doc/store/talent/openapi/order/api_get_order_detail.html */
  ecTalentGetOrderDetail(
    body?: EcTalentGetOrderDetailBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcTalentGetOrderDetailResp>;
  /** 获取佣金单列表 @see https://developers.weixin.qq.com/doc/store/talent/openapi/order/api_get_order_list.html */
  ecTalentGetOrderList(
    body?: EcTalentGetOrderListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcTalentGetOrderListResp>;
  /** 获取达人橱窗商品详情 @see https://developers.weixin.qq.com/doc/store/talent/openapi/window/api_get_product_detail.html */
  ecTalentWindowProductGet(
    body?: EcTalentWindowProductGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcTalentWindowProductGetResp>;
  /** 获取达人橱窗商品列表 @see https://developers.weixin.qq.com/doc/store/talent/openapi/window/api_get_product_list.html */
  ecTalentWindowProductListGet(
    body?: EcTalentWindowProductListGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcTalentWindowProductListGetResp>;
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
