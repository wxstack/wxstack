// 本文件由 scripts/gen-endpoints.mjs 自动生成，请勿手改。
// 数据来源：官方文档站点 developers.weixin.qq.com，覆盖该平台已抓取的全部服务端接口与参数。
// 每个端点是「自动鉴权薄封装」；未在高层方法中显式封装的接口均可在此调用。

import type { CallOptions, QueryValue, RequestBody } from '@wxstack/core';

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

/** 获取聊天记录 —— 请求体（文档未列字段，放行任意键）。 */
export type CustomserviceMsgrecordGetmsglistBody = Record<string, unknown>;
/** 获取聊天记录 —— 返回体。 */
export interface CustomserviceMsgrecordGetmsglistResp {
  /** 消息内容 */
  recordlist?: unknown[];
  /** 消息数量 */
  number?: number;
  /** 消息id */
  msgid?: number;
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

/** 客服输入状态 —— 请求体。 */
export interface MessageCustomTypingBody {
  /** 用户的 OpenID */
  touser: string;
  /** 命令。Typing表示对用户下发"正在输入"状态 ；CancelTyping表示取消对用户的"正在输入"状态 */
  command: string;
  /** 子商户 ID，普通账号无需填写 */
  businessid?: string;
}
/** 客服输入状态 —— 返回体。 */
export interface MessageCustomTypingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 关闭会话 —— 请求体。 */
export interface CustomserviceKfsessionCloseBody {
  /** 完整客服账号，格式为：账号前缀@公众号微信号 */
  kf_account: string;
  /** 粉丝的openid */
  openid: string;
}
/** 关闭会话 —— 返回体。 */
export interface CustomserviceKfsessionCloseResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 创建会话 —— 请求体。 */
export interface CustomserviceKfsessionCreateBody {
  /** 完整客服账号，格式为：账号前缀@公众号微信号 */
  kf_account: string;
  /** 粉丝的openid */
  openid: string;
}
/** 创建会话 —— 返回体。 */
export interface CustomserviceKfsessionCreateResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取客户会话状态 —— 请求体（文档未列字段，放行任意键）。 */
export type CustomserviceKfsessionGetsessionBody = Record<string, unknown>;
/** 获取客户会话状态 —— 查询参数。 */
export interface CustomserviceKfsessionGetsessionQuery {
  /** 粉丝的openid */
  openid: string;
}
/** 获取客户会话状态 —— 返回体。 */
export interface CustomserviceKfsessionGetsessionResp {
  /** 会话接入时间 */
  createtime?: number;
  /** 接待客服账号 */
  kf_account?: string;
}

/** 获取客服会话列表 —— 请求体（文档未列字段，放行任意键）。 */
export type CustomserviceKfsessionGetsessionlistBody = Record<string, unknown>;
/** 获取客服会话列表 —— 查询参数。 */
export interface CustomserviceKfsessionGetsessionlistQuery {
  /** 完整客服账号 */
  kf_account: string;
}
/** 获取客服会话列表 —— 返回体。 */
export interface CustomserviceKfsessionGetsessionlistResp {
  /** 会话列表 */
  sessionlist?: unknown[];
}

/** 获取未接入会话列表 —— 请求体（文档未列字段，放行任意键）。 */
export type CustomserviceKfsessionGetwaitcaseBody = Record<string, unknown>;
/** 获取未接入会话列表 —— 返回体。 */
export interface CustomserviceKfsessionGetwaitcaseResp {
  /** 未接入会话数量 */
  count?: number;
  /** 未接入会话列表，最多返回100条数据，按照来访顺序 */
  waitcaselist?: unknown[];
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

/** 邀请绑定客服账号 —— 请求体。 */
export interface CustomserviceKfaccountInviteworkerBody {
  /** 完整客服帐号，格式为：帐号前缀@公众号微信号 */
  kf_account: string;
  /** 接收绑定邀请的客服微信号 */
  invite_wx: string;
}
/** 邀请绑定客服账号 —— 返回体。 */
export interface CustomserviceKfaccountInviteworkerResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 修改客服账号 —— 请求体。 */
export interface CustomserviceKfaccountUpdateBody {
  /** 完整客服账号，格式为：账号前缀@公众号微信号，账号前缀最多10个字符，必须是英文、数字字符或者下划线，后缀为公众号微信号，长度不超过30个字符 */
  kf_account: string;
  /** 客服昵称，最长16个字 */
  nickname: string;
}
/** 修改客服账号 —— 返回体。 */
export interface CustomserviceKfaccountUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 设置客服头像 —— 请求体。 */
export interface CustomserviceKfaccountUploadheadimgBody {
  /** form-data 中媒体文件标识，有filename、filelength、content-type 等信息，文件大小为5M 以内 */
  media: unknown;
}
/** 设置客服头像 —— 查询参数。 */
export interface CustomserviceKfaccountUploadheadimgQuery {
  /** 完整客服账号，格式为：账号前缀@公众号微信号 */
  kf_account: string;
}
/** 设置客服头像 —— 返回体。 */
export interface CustomserviceKfaccountUploadheadimgResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 创建个性化菜单 —— 请求体。 */
export interface MenuAddconditionalBody {
  /** 一级菜单数组(1-3个) */
  button: unknown[];
  /** 菜单匹配规则(至少一个非空字段) */
  matchrule: Record<string, unknown>;
}
/** 创建个性化菜单 —— 返回体。 */
export interface MenuAddconditionalResp {
  /** 菜单ID */
  menuid?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 创建自定义菜单 —— 请求体。 */
export interface MenuCreateBody {
  /** 一级菜单结构体数组 */
  button: unknown[];
}
/** 创建自定义菜单 —— 返回体。 */
export interface MenuCreateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 删除个性化菜单 —— 请求体。 */
export interface MenuDelconditionalBody {
  /** 菜单ID */
  menuid: string;
}
/** 删除个性化菜单 —— 返回体。 */
export interface MenuDelconditionalResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 删除自定义菜单 —— 请求体（文档未列字段，放行任意键）。 */
export type MenuDeleteBody = Record<string, unknown>;
/** 删除自定义菜单 —— 返回体。 */
export interface MenuDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询自定义菜单信息 —— 请求体（文档未列字段，放行任意键）。 */
export type GetCurrentSelfmenuInfoBody = Record<string, unknown>;
/** 查询自定义菜单信息 —— 返回体。 */
export interface GetCurrentSelfmenuInfoResp {
  /** 菜单是否开启，0代表未开启，1代表开启 */
  is_menu_open?: number;
  /** 菜单信息 */
  selfmenu_info?: Record<string, unknown>;
}

/** 获取自定义菜单配置 —— 请求体（文档未列字段，放行任意键）。 */
export type MenuGetBody = Record<string, unknown>;
/** 获取自定义菜单配置 —— 返回体。 */
export interface MenuGetResp {
  /** 默认菜单信息 */
  menu?: Record<string, unknown>;
  /** 个性化菜单列表 */
  conditionalmenu?: unknown[];
}

/** 测试个性化菜单匹配结果 —— 请求体。 */
export interface MenuTrymatchBody {
  /** 用户OpenID或微信号 */
  user_id: string;
}
/** 测试个性化菜单匹配结果 —— 返回体。 */
export interface MenuTrymatchResp {
  /** - */
  button?: unknown[];
}

/** 新增草稿 —— 请求体。 */
export interface DraftAddBody {
  /** 图文素材集合 */
  articles: unknown[];
}
/** 新增草稿 —— 返回体。 */
export interface DraftAddResp {
  /** 上传后的获取标志(不超过128字符) */
  media_id?: string;
}

/** 获取草稿列表 —— 请求体。 */
export interface DraftBatchgetBody {
  /** 从全部素材的该偏移位置开始返回，0表示从第一个素材返回 */
  offset: number;
  /** 返回素材的数量，取值在1到20之间 */
  count: number;
  /** 1 表示不返回 content 字段，0 表示正常返回，默认为 0 */
  no_content?: number;
}
/** 获取草稿列表 —— 返回体。 */
export interface DraftBatchgetResp {
  /** 草稿素材的总数 */
  total_count?: number;
  /** 本次调用获取的素材的数量 */
  item_count?: number;
  /** 素材列表 */
  item?: unknown[];
}

/** 获取草稿的总数 —— 请求体（文档未列字段，放行任意键）。 */
export type DraftCountBody = Record<string, unknown>;
/** 获取草稿的总数 —— 返回体。 */
export interface DraftCountResp {
  /** 草稿的总数 */
  total_count?: number;
}

/** 删除草稿 —— 请求体。 */
export interface DraftDeleteBody {
  /** 要删除的草稿的media_id */
  media_id: string;
}
/** 删除草稿 —— 返回体。 */
export interface DraftDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 草稿箱开关设置 —— 请求体（文档未列字段，放行任意键）。 */
export type DraftSwitchBody = Record<string, unknown>;
/** 草稿箱开关设置 —— 查询参数。 */
export interface DraftSwitchQuery {
  /** 仅检查状态时传1 */
  checkonly?: number;
}
/** 草稿箱开关设置 —— 返回体。 */
export interface DraftSwitchResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 仅 errcode==0 (即调用成功) 时返回，0 表示开关处于关闭，1 表示开启成功（或开关已开启） */
  is_open?: number;
}

/** 更新草稿 —— 请求体。 */
export interface DraftUpdateBody {
  /** 要修改的图文消息的id */
  media_id: string;
  /** 要更新的文章在图文消息中的位置（多图文消息时，此字段才有意义），第一篇为0 */
  index: number;
  /** 图文信息 */
  articles: Record<string, unknown>;
}
/** 更新草稿 —— 返回体。 */
export interface DraftUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取草稿详情 —— 请求体。 */
export interface DraftGetBody {
  /** 要获取的草稿的media_id */
  media_id: string;
}
/** 获取草稿详情 —— 返回体。 */
export interface DraftGetResp {
  /** 图文素材列表 */
  news_item?: unknown[];
}

/** 获取商品卡片的DOM结构 —— 请求体。 */
export interface EcServiceProductGetcardinfoBody {
  /** 商品id */
  product_id: string;
  /** 文章类型，当前支持：图片消息(newspic)、图文消息(news) */
  article_type: string;
  /** 卡片类型，当前支持：大卡(0)、小卡(1)、文字链接(2)、条卡(3) */
  card_type: number;
}
/** 获取商品卡片的DOM结构 —— 返回体。 */
export interface EcServiceProductGetcardinfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商品 key，部分文章类型插入商品卡片需要该 key */
  product_key?: string;
  /** 商品卡DOM结构，多数文章类型插入商品卡片需要DOM结构 */
  DOM?: string;
}

/** 获取sdk临时票据 —— 请求体（文档未列字段，放行任意键）。 */
export type TicketGetticketBody = Record<string, unknown>;
/** 获取sdk临时票据 —— 查询参数。 */
export interface TicketGetticketQuery {
  /** ticket 类型，jsapi 为 js-sdk 凭证；wx_card 为微信卡券凭证 */
  type: string;
}
/** 获取sdk临时票据 —— 返回体。 */
export interface TicketGetticketResp {
  /** 临时票据 */
  ticket?: string;
  /** 有效期（秒） */
  expires_in?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询授权信息 —— 请求体。 */
export interface InvoiceGetauthdataBody {
  /** 订单order_id */
  order_id: string;
  /** 财政局id */
  s_pappid: string;
}
/** 查询授权信息 —— 返回体。 */
export interface InvoiceGetauthdataResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 发票状态 */
  invoice_status?: string;
  /** 授权时间戳 */
  auth_time?: number;
}

/** 拒绝开票 —— 请求体。 */
export interface InvoiceRejectinsertBody {
  /** 开票平台在微信上的标识，由开票平台告知商户 */
  s_pappid: string;
  /** 订单 id */
  order_id: string;
  /** 商家解释拒绝开票的原因，如重复开票，抬头无效、已退货无法开票等 */
  reason: string;
  /** 跳转链接，引导用户进行下一步处理，如重新发起开票、重新填写抬头、展示订单情况等 */
  url?: string;
}
/** 拒绝开票 —— 返回体。 */
export interface InvoiceRejectinsertResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 更新发票卡券状态 —— 请求体。 */
export interface InvoicePlatformUpdatestatusBody {
  /** 发票 id */
  card_id: string;
  /** 发票 code */
  code: string;
  /** 发票报销状态 */
  reimburse_status: string;
}
/** 更新发票卡券状态 —— 返回体。 */
export interface InvoicePlatformUpdatestatusResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询已上传的PDF文件 —— 请求体。 */
export interface InvoicePlatformGetpdfBody {
  /** 填“get_url” */
  action: string;
  /** 发票s_media_id */
  s_media_id: string;
}
/** 查询已上传的PDF文件 —— 返回体。 */
export interface InvoicePlatformGetpdfResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** pdf 的 url ，两个小时有效期 */
  pdf_url?: string;
  /** pdf_url 过期时间， 7200 秒 */
  pdf_url_expire_time?: number;
}

/** 上传发票PDF —— 请求体。 */
export interface InvoicePlatformSetpdfBody {
  /** form-data中媒体文件标识，有filename、filelength、content-type等信息 */
  pdf: unknown;
}
/** 上传发票PDF —— 返回体。 */
export interface InvoicePlatformSetpdfResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 64位整数，在 将发票卡券插入用户卡包 时使用用于关联pdf和发票卡券，s_media_id有效期有3天，3天内若未将s_media_id关联到发票卡券，pdf将自动销毁 */
  s_media_id?: string;
}

/** 创建财政电子票据模板 —— 请求体。 */
export interface NontaxCreatebillcardBody {
  /** 财政电子票据信息 */
  base_info: Record<string, unknown>;
  /** 收款方（开票方）全称，显示在财政电子票据详情内 */
  payee: string;
}
/** 创建财政电子票据模板 —— 返回体。 */
export interface NontaxCreatebillcardResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 票据card_id */
  card_id?: string;
}

/** 获取授权页链接 —— 请求体。 */
export interface NontaxGetbillauthurlBody {
  /** 财政局id，需要找财政局提供 */
  s_pappid: string;
  /** 订单id */
  order_id: string;
  /** 订单金额，以分为单位 */
  money: number;
  /** 时间戳 */
  timestamp: number;
  /** 开票来源，web：公众号开票，app：app开票 */
  source: string;
  /** 授权成功后跳转页面 */
  redirect_url?: string;
  /** Api_ticket，参考获取api_ticket接口获取 */
  ticket: string;
}
/** 获取授权页链接 —— 返回体。 */
export interface NontaxGetbillauthurlResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 授权链接 */
  auth_url?: string;
  /** 过期时间，单位为秒，授权链接会在一段时间之后过期 */
  expire_time?: number;
}

/** 票据插入用户卡包 —— 请求体。 */
export interface NontaxInsertbillBody {
  /** 财政电子票据order_id */
  order_id: string;
  /** 财政电子票据card_id */
  card_id: string;
  /** 该订单号授权时使用的appid，一般为执收单位appid */
  appid: string;
  /** 财政电子票据具体内容 */
  card_ext: Record<string, unknown>;
}
/** 票据插入用户卡包 —— 返回体。 */
export interface NontaxInsertbillResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 财政电子票据code */
  code?: string;
  /** 用户标识，即领取到财政电子票据的openid */
  openid?: string;
}

/** 获取开票平台识别码 —— 请求体（文档未列字段，放行任意键）。 */
export type InvoiceSeturlBody = Record<string, unknown>;
/** 获取开票平台识别码 —— 返回体。 */
export interface InvoiceSeturlResp {
  /** 错误码 */
  errcode?: string;
  /** 错误信息 */
  errmsg?: string;
  /** 该开票平台专用的授权链接。开票平台须将 invoice_url 内的 s_pappid 给到服务的商户，商户在请求授权链接时会向微信传入该参数，标识所使用的开票平台是哪家 */
  invoice_url?: string;
}

/** 获取授权页链接 —— 请求体。 */
export interface InvoiceGetauthurlBody {
  /** 开票平台在微信的标识号，商户需要找开票平台提供 */
  s_pappid: string;
  /** 订单id，在商户内单笔开票请求的唯一识别号， */
  order_id: string;
  /** 订单金额，以分为单位 */
  money: number;
  /** 时间戳 */
  timestamp: number;
  /** 开票来源，app：app开票，web：微信h5开票，wxa：小程序开发票，wap：普通网页开票 */
  source: string;
  /** 授权成功后跳转页面。本字段只有在source为H5的时候需要填写，引导用户在微信中进行下一步流程。app开票因为从外部app拉起微信授权页，授权完成后自动回到原来的app，故无需填写。 */
  redirect_url?: string;
  /** 授权页ticket */
  ticket: string;
  /** 授权类型，0：开票授权，1：填写字段开票授权，2：领票授权 */
  type: number;
}
/** 获取授权页链接 —— 返回体。 */
export interface InvoiceGetauthurlResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 授权链接 */
  auth_url?: string;
  /** source为wxa时才有 */
  appid?: string;
}

/** 查询与设置授权页与商户信息 —— 请求体。 */
export interface InvoiceSetbizattrBody {
  /** 授权页字段（set_auth_field使用） */
  auth_field: Record<string, unknown>;
  /** 微信商户号与开票平台关系信息（set_pay_mch使用） */
  paymch_info: Record<string, unknown>;
  /** 联系方式信息(set_contact使用） */
  contact: Record<string, unknown>;
}
/** 查询与设置授权页与商户信息 —— 查询参数。 */
export interface InvoiceSetbizattrQuery {
  /** 接口功能类型，需填写允许的 action，当为 get_auth_field、get_pay_mch 时，请求体为空（传JSON格式{}） */
  action: string;
}
/** 查询与设置授权页与商户信息 —— 返回体。 */
export interface InvoiceSetbizattrResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 授权页字段（set_auth_field、get_auth_field返回） */
  auth_field?: Record<string, unknown>;
  /** 微信商户号与开票平台关系信息（get_pay_mch返回） */
  paymch_info?: Record<string, unknown>;
  /** 联系方式信息(get_contact返回） */
  contact?: Record<string, unknown>;
}

/** 获取商户专属抬头链接 —— 请求体。 */
export interface InvoiceBizGetselecttitleurlBody {
  /** 附加字段，用户提交发票时会发给商户 */
  attach?: string;
  /** 将商户名称显示给用户看 */
  biz_name?: string;
}
/** 获取商户专属抬头链接 —— 返回体。 */
export interface InvoiceBizGetselecttitleurlResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 专属抬头链接 */
  url?: string;
}

/** 录入抬头到用户微信 —— 请求体。 */
export interface InvoiceBizGetusertitleurlBody {
  /** 发票抬头，user_fill为0时必填 */
  title?: string;
  /** 联系方式，必须是数字或“-” */
  phone?: string;
  /** 税号，必须是15-20位数字或者英文字母 */
  tax_no?: string;
  /** 地址 */
  addr?: string;
  /** 银行类型 */
  bank_type?: string;
  /** 银行号码 */
  bank_no?: string;
  /** 0:企业设置的抬头，1:用户自己填写抬头 */
  user_fill?: number;
  /** 开票码 */
  out_title_id?: string;
}
/** 录入抬头到用户微信 —— 返回体。 */
export interface InvoiceBizGetusertitleurlResp {
  /** 用户确认链接 */
  url?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 解析扫描的抬头二维码 —— 请求体。 */
export interface InvoiceScantitleBody {
  /** 扫码获取的原始数据 */
  scan_text: string;
}
/** 解析扫描的抬头二维码 —— 返回体。 */
export interface InvoiceScantitleResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 0-单位抬头，1-个人抬头 */
  title_type?: number;
  /** 发票抬头 */
  title?: string;
  /** 联系方式 */
  phone?: string;
  /** 税号 */
  tax_no?: string;
  /** 地址 */
  addr?: string;
  /** 银行类型 */
  bank_type?: string;
  /** 银行号码 */
  bank_no?: string;
}

/** 将电子发票卡券插入用户卡包 —— 请求体。 */
export interface InvoiceInsertBody {
  /** 发票order_id，既商户给用户授权开票的订单号 */
  order_id: string;
  /** 发票card_id */
  card_id: string;
  /** 该订单号授权时使用的appid，一般为商户appid */
  appid: string;
  /** 发票具体内容 */
  card_ext: Record<string, unknown>;
}
/** 将电子发票卡券插入用户卡包 —— 返回体。 */
export interface InvoiceInsertResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 发票code */
  code?: string;
  /** 获得发票用户的openid */
  openid?: string;
  /** 只有在用户将公众号绑定到微信开放平台账号后，才会出现该字段 */
  unionid?: string;
}

/** 创建发票卡券模板 —— 请求体。 */
export interface InvoicePlatformCreatecardBody {
  /** 发票模板对象 */
  invoice_info: Record<string, unknown>;
}
/** 创建发票卡券模板 —— 返回体。 */
export interface InvoicePlatformCreatecardResp {
  /** 错误码 */
  errcode?: string;
  /** 错误信息 */
  errmsg?: string;
  /** 当错误码为 0 时，返回发票卡券模板的编号，用于后续该商户发票生成后，作为必填参数在调用插卡接口时传入 */
  card_id?: string;
}

/** 查询报销发票信息 —— 请求体（文档未列字段，放行任意键）。 */
export type InvoiceReimburseGetinvoiceinfoBody = Record<string, unknown>;
/** 查询报销发票信息 —— 返回体。 */
export interface InvoiceReimburseGetinvoiceinfoResp {
  /** 发票id */
  card_id?: string;
  /** 发票的有效期起始时间 */
  begin_time?: number;
  /** 发票的有效期截止时间 */
  end_time?: number;
  /** 用户标识 */
  openid?: string;
  /** 发票的类型，如广东增值税普通发票 */
  type?: string;
  /** 发票的收款方 */
  payee?: string;
  /** 发票详情 */
  detail?: string;
  /** 用户可在发票票面看到的主要信息 */
  user_info?: Record<string, unknown>;
}

/** 更新报销发票状态 —— 请求体（文档未列字段，放行任意键）。 */
export type InvoiceReimburseUpdateinvoicestatusBody = Record<string, unknown>;
/** 更新报销发票状态 —— 返回体。 */
export interface InvoiceReimburseUpdateinvoicestatusResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 批量获取报销发票信息 —— 请求体。 */
export interface InvoiceReimburseGetinvoicebatchBody {
  /** 发票列表 */
  item_list: unknown[];
}
/** 批量获取报销发票信息 —— 返回体。 */
export interface InvoiceReimburseGetinvoicebatchResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 发票信息 */
  item_list?: unknown[];
}

/** 批量更新报销发票状态 —— 请求体。 */
export interface InvoiceReimburseUpdatestatusbatchBody {
  /** 用户openid */
  openid: string;
  /** 发票报销状态 */
  reimburse_status: string;
  /** 发票列表 */
  invoice_list: unknown[];
}
/** 批量更新报销发票状态 —— 返回体。 */
export interface InvoiceReimburseUpdatestatusbatchResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 关闭已群发文章评论 —— 请求体。 */
export interface CommentCloseBody {
  /** 群发返回的msg_data_id */
  msg_data_id: number;
  /** 多图文时，用来指定第几篇图文，从0开始，不带默认操作该msg_data_id的第一篇图文 */
  index?: number;
}
/** 关闭已群发文章评论 —— 返回体。 */
export interface CommentCloseResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 删除评论 —— 请求体。 */
export interface CommentDeleteBody {
  /** 群发返回的msg_data_id */
  msg_data_id: number;
  /** 多图文时，用来指定第几篇图文，从0开始，不带默认操作该msg_data_id的第一篇图文 */
  index?: number;
  /** 评论id */
  user_comment_id: number;
}
/** 删除评论 —— 返回体。 */
export interface CommentDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 删除回复 —— 请求体。 */
export interface CommentReplyDeleteBody {
  /** 群发返回的msg_data_id */
  msg_data_id: number;
  /** 多图文时，用来指定第几篇图文，从0开始，不带默认操作该msg_data_id的第一篇图文 */
  index?: number;
  /** 评论id */
  user_comment_id: number;
}
/** 删除回复 —— 返回体。 */
export interface CommentReplyDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 评论标记精选 —— 请求体。 */
export interface CommentMarkelectBody {
  /** 群发返回的msg_data_id */
  msg_data_id: number;
  /** 多图文时，用来指定第几篇图文，从0开始，不带默认操作该msg_data_id的第一篇图文 */
  index?: number;
  /** 用户评论id */
  user_comment_id: number;
}
/** 评论标记精选 —— 返回体。 */
export interface CommentMarkelectResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查看指定文章的评论数据 —— 请求体。 */
export interface CommentListBody {
  /** 群发返回的msg_data_id */
  msg_data_id: number;
  /** 多图文时，用来指定第几篇图文，从0开始，不带默认返回该msg_data_id的第一篇图文 */
  index?: number;
  /** 起始位置 */
  begin: number;
  /** 获取数目（>=50会被拒绝） */
  count: number;
  /** type=0 普通评论&精选评论 type=1 普通评论 type=2 精选评论 */
  type: number;
}
/** 查看指定文章的评论数据 —— 返回体。 */
export interface CommentListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 评论列表 */
  comment?: unknown[];
  /** 评论总数 */
  total?: number;
}

/** 打开已群发文章评论 —— 请求体。 */
export interface CommentOpenBody {
  /** 群发返回的msg_data_id */
  msg_data_id: number;
  /** 多图文时，用来指定第几篇图文，从0开始，不带默认操作该msg_data_id的第一篇图文 */
  index?: number;
}
/** 打开已群发文章评论 —— 返回体。 */
export interface CommentOpenResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 回复评论 —— 请求体。 */
export interface CommentReplyAddBody {
  /** 群发返回的msg_data_id */
  msg_data_id: number;
  /** 多图文时，用来指定第几篇图文，从0开始，不带默认操作该msg_data_id的第一篇图文 */
  index?: number;
  /** 评论id */
  user_comment_id: number;
  /** 回复内容 */
  content: string;
}
/** 回复评论 —— 返回体。 */
export interface CommentReplyAddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 评论取消精选 —— 请求体。 */
export interface CommentUnmarkelectBody {
  /** 群发返回的msg_data_id */
  msg_data_id: number;
  /** 多图文时，用来指定第几篇图文，从0开始，不带默认操作该msg_data_id的第一篇图文 */
  index?: number;
  /** 用户评论id */
  user_comment_id: number;
}
/** 评论取消精选 —— 返回体。 */
export interface CommentUnmarkelectResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 上传永久素材 —— 请求体。 */
export interface MaterialAddMaterialBody {
  /** 媒体文件标识 */
  media: unknown;
  /** 素材描述信息，上传视频素材时需要 */
  description?: Record<string, unknown>;
}
/** 上传永久素材 —— 查询参数。 */
export interface MaterialAddMaterialQuery {
  /** 媒体类型，图片（image）、语音（voice）、视频（video）和缩略图（thumb） */
  type: string;
}
/** 上传永久素材 —— 返回体。 */
export interface MaterialAddMaterialResp {
  /** 新增的永久素材media_id */
  media_id?: string;
  /** 图片素材URL(仅图片返回) */
  url?: string;
}

/** 获取永久素材列表 —— 请求体。 */
export interface MaterialBatchgetMaterialBody {
  /** 素材的类型，图片（image）、视频（video）、语音 （voice）、图文（news） */
  type: string;
  /** 从全部素材的该偏移位置开始返回，0表示从第一个素材 返回 */
  offset: number;
  /** 返回素材的数量，取值在1到20之间 */
  count: number;
}
/** 获取永久素材列表 —— 返回体。 */
export interface MaterialBatchgetMaterialResp {
  /** 多个图文消息 */
  item?: unknown[];
  /** 该类型的素材的总数 */
  total_count?: number;
  /** 本次调用获取的素材的数量 */
  item_count?: number;
}

/** 删除永久素材 —— 请求体。 */
export interface MaterialDelMaterialBody {
  /** 要删除的素材media_id */
  media_id: string;
}
/** 删除永久素材 —— 返回体。 */
export interface MaterialDelMaterialResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取永久素材 —— 请求体。 */
export interface MaterialGetMaterialBody {
  /** 要获取的素材的media_id */
  media_id: string;
}
/** 获取永久素材 —— 返回体。 */
export interface MaterialGetMaterialResp {
  /** 图文素材，内容 */
  news_item?: unknown[];
  /** 视频素材，标题 */
  title?: string;
  /** 视频素材，描述 */
  description?: string;
  /** 视频下载，地址 */
  down_url?: string;
}

/** 获取永久素材总数 —— 请求体（文档未列字段，放行任意键）。 */
export type MaterialGetMaterialcountBody = Record<string, unknown>;
/** 获取永久素材总数 —— 返回体。 */
export interface MaterialGetMaterialcountResp {
  /** 语音总数量 */
  voice_count?: number;
  /** 视频总数量 */
  video_count?: number;
  /** 图片总数量 */
  image_count?: number;
  /** 图文总数量 */
  news_count?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 上传发表内容中的图片 —— 请求体。 */
export interface MediaUploadimgBody {
  /** 图片文件 */
  media: unknown;
}
/** 上传发表内容中的图片 —— 返回体。 */
export interface MediaUploadimgResp {
  /** 图片URL */
  url?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 获取高清语音素材 —— 请求体（文档未列字段，放行任意键）。 */
export type MediaGetJssdkBody = Record<string, unknown>;
/** 获取高清语音素材 —— 查询参数。 */
export interface MediaGetJssdkQuery {
  /** uploadVoice接口返回的serverID */
  media_id: string;
}
/** 获取高清语音素材 —— 返回体。 */
export interface MediaGetJssdkResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
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

/** 下载缴费对帐单 —— 请求体。 */
export interface NontaxDownloadbillBody {
  /** appid */
  appid: string;
  /** 商户号 */
  mch_id: string;
  /** 对账单日期，格式：20170903 */
  bill_date: string;
  /** ALL，返回当日所有订单信息，默认值；SUCCESS，返回当日成功支付的订单；REFUND，返回当日退款订单 */
  bill_type?: string;
}
/** 下载缴费对帐单 —— 返回体。 */
export interface NontaxDownloadbillResp {
  /** 返回码 */
  errcode?: number;
  /** 返回码描述 */
  errmsg?: string;
}

/** 获取缴费订单详情 —— 请求体。 */
export interface NontaxGetorderBody {
  /** appid */
  appid: string;
  /** 服务id */
  service_id?: number;
  /** 订单id */
  order_id: string;
}
/** 获取缴费订单详情 —— 返回体。 */
export interface NontaxGetorderResp {
  /** 返回码 */
  errcode?: number;
  /** 返回码描述 */
  errmsg?: string;
  /** appid */
  appid?: string;
  /** 用户标识 */
  openid?: string;
  /** 订单号 */
  order_id?: string;
  /** 订单创建时间（时间戳，单位是秒） */
  create_time?: number;
  /** 订单支付成功时间（时间戳，单位是秒） */
  pay_finish_time?: number;
  /** 描述（服务名称） */
  desc?: string;
  /** 总金额(单位是分) */
  fee?: number;
  /** 币种1：人民币2：美元 */
  fee_type?: number;
  /** 支付交易单号 */
  trans_id?: string;
  /** 订单总状态1：还没支付;3或4：支付成功;5：已退款;6：退款中;12：超时未支付订单自动关闭（若部分退款只退了一部分金额，订单总状态不会变，只有全部退完总状态才会变成已退款） */
  status?: number;
  /** 银行id（由微信非税平台分配的全局唯一id） */
  bank_id?: string;
  /** 银行名称 */
  bank_name?: string;
  /** 银行账号 */
  bank_account?: string;
  /** 退款完成时间（时间戳，单位是秒） */
  refund_finish_time?: number;
  /** 退款原因 */
  refund_reason?: string;
  /** 退款订单号 */
  refund_order_id?: string;
  /** 退款时传入的外部单号 */
  refund_out_id?: string;
  /** 缴费通知书编号（根据下单请求的参数返回） */
  payment_notice_no?: string;
  /** 订单号。（根据下单请求的参数返回） */
  order_no?: string;
  /** 执收单位编码 */
  department_code?: string;
  /** 执收单位名称 */
  department_name?: string;
  /** 通知书类型 */
  payment_notice_type?: number;
  /** 行政区划代码 */
  region_code?: string;
  /** 缴费子项目详情 */
  items?: Record<string, unknown>;
  /** 票据类型编码 */
  bill_type_code?: string;
  /** 票据号码 */
  bill_no?: string;
  /** 应收款信息来源，1：财政2：委办局 */
  payment_info_source?: number;
  /** 部分退款信息 */
  partial_refund_info?: Record<string, unknown>;
  /** 通知历史 */
  notify_history?: Record<string, unknown>;
  /** 场景。"biz":微信公众号"ctiyservice":城市服务"miniprogram":小程序"offline":线下二维码"pc":pc机"app":手机app"other":其它 */
  scene?: string;
}

/** 获取缴费订单列表 —— 请求体。 */
export interface NontaxGetorderlistBody {
  /** appid */
  appid: string;
  /** 行政区划代码 */
  region_code: string;
  /** 执收单位编码 */
  department_code: string;
  /** 缴费通知书编号（缴费通知书编号和订单号必须二选一。如果没有缴费通知书编号，则填订单号） */
  payment_notice_no?: string;
}
/** 获取缴费订单列表 —— 返回体。 */
export interface NontaxGetorderlistResp {
  /** 返回码 */
  errcode?: number;
  /** 返回码描述 */
  errmsg?: string;
  /** 已下单的订单id列表 */
  order_id_list?: unknown[];
  /** 已支付的订单id */
  paid_order_id?: string;
}

/** 提交刷卡支付 —— 请求体。 */
export interface NontaxMicropayBody {
  /** appid */
  appid: string;
  /** 银行id（由微信非税平台分配的全局唯一id），不指定时在已配置的银行列表中随机选择；不填时默认生产环境，测试环境需填上 */
  bank_id?: string;
  /** 清分银行账号（不使用清分机制的不用填） */
  bank_account?: string;
  /** 指定资金结算到mch_id。只能结算到 bank_id 下绑定的mch_id。不填时自动从 bank_id 下绑定的 mch_id 选择一个。 */
  mch_id?: string;
  /** 描述（服务名称） */
  desc: string;
  /** 总金额（单位是分） */
  fee: number;
  /** 用户姓名 */
  user_name?: string;
  /** 缴费子项目详情 */
  items: Record<string, unknown>;
  /** 缴款通知书创建时间（时间戳，单位是秒） */
  payment_notice_create_time: number;
  /** 限缴日期，格式YYYYMMDD */
  payment_expire_date?: string;
  /** 缴费通知书编号（缴费通知书编号和订单号必须二选一。如果没有缴费通知书编号，则填订单号） */
  payment_notice_no?: string;
  /** 订单号。（缴费通知书编号和订单号必须二选一。如果没有缴费通知书编号，则填订单号） */
  order_no?: string;
  /** 执收单位编码 */
  department_code: string;
  /** 执收单位名称 */
  department_name: string;
  /** 通知书类型 */
  payment_notice_type?: number;
  /** 行政区划代码 */
  region_code: string;
  /** 扫码支付授权码，设备读取用户微信中的条码或者二维码信息（注：用户刷卡条形码规则：18位纯数字，以10、11、12、13、14、15开头） */
  auth_code: string;
  /** 订单号（之前请求有返回订单号则填上） */
  order_id?: string;
}
/** 提交刷卡支付 —— 返回体。 */
export interface NontaxMicropayResp {
  /** 返回码 */
  errcode?: number;
  /** 返回码描述 */
  errmsg?: string;
  /** 订单号 */
  order_id?: string;
}

/** 模拟支付结果通知 —— 请求体。 */
export interface NontaxMocknotificationBody {
  /** appid */
  appid: string;
  /** 接收通知的url */
  url: string;
  /** 协议版本号，默认为1 */
  version: number;
}
/** 模拟支付结果通知 —— 返回体。 */
export interface NontaxMocknotificationResp {
  /** 返回码 */
  errcode?: number;
  /** 返回码描述 */
  errmsg?: string;
}

/** 模拟查询应收信息 —— 请求体。 */
export interface NontaxMockqueryfeeBody {
  /** appid */
  appid: string;
  /** 接收通知的url */
  url: string;
  /** 协议版本号，默认为1 */
  version: number;
}
/** 模拟查询应收信息 —— 返回体。 */
export interface NontaxMockqueryfeeResp {
  /** 返回码 */
  errcode?: number;
  /** 返回码描述 */
  errmsg?: string;
}

/** 通知不一致订单 —— 请求体。 */
export interface NontaxNotifyinconsistentorderBody {
  /** appid */
  appid: string;
  /** 订单号 */
  order_id: string;
}
/** 通知不一致订单 —— 返回体。 */
export interface NontaxNotifyinconsistentorderResp {
  /** 返回码 */
  errcode?: number;
  /** 返回码描述 */
  errmsg?: string;
}

/** 查询应收信息 —— 请求体。 */
export interface NontaxQueryfeeBody {
  /** appid */
  appid: string;
  /** 服务id */
  service_id: number;
  /** 银行id（由微信非税平台分配的全局唯一id），不指定时在已配置的银行列表中随机选择 */
  bank_id?: string;
  /** 缴费通知书编号 */
  payment_notice_no: string;
  /** 执收单位编码 */
  department_code: string;
  /** 通知书类型，1：普通通知书类型；2：处罚通知书类型 */
  payment_notice_type?: number;
  /** 行政区划代码 */
  region_code: string;
}
/** 查询应收信息 —— 返回体。 */
export interface NontaxQueryfeeResp {
  /** 返回码 */
  errcode?: number;
  /** 返回码描述 */
  errmsg?: string;
  /** 用户姓名 */
  user_name?: string;
  /** 总金额（单位是分） */
  fee?: number;
  /** 缴费子项目详情 */
  items?: Record<string, unknown>;
  /** 缴费通知书编号 */
  payment_notice_no?: string;
  /** 执收单位编码 */
  department_code?: string;
  /** 执收单位名称 */
  department_name?: string;
  /** 通知书类型 */
  payment_notice_type?: number;
  /** 行政区划代码 */
  region_code?: string;
  /** 缴费通知书创建时间（时间戳，单位是秒 */
  payment_notice_create_time?: number;
  /** 限缴日期，格式YYYYMMDD */
  payment_expire_date?: string;
}

/** 缴费订单退款 —— 请求体。 */
export interface NontaxRefundBody {
  /** appid */
  appid: string;
  /** 订单号 */
  order_id: string;
  /** 退款原因 */
  reason: string;
  /** 退款金额（单位是分），部分退款时必填 */
  refund_fee?: number;
  /** 退款单号（每笔部分退款唯一），部分退款时必填 */
  refund_out_id?: string;
}
/** 缴费订单退款 —— 返回体。 */
export interface NontaxRefundResp {
  /** 返回码 */
  errcode?: number;
  /** 返回码描述 */
  errmsg?: string;
  /** 退款订单号 */
  refund_order_id?: string;
}

/** 缴费支付下单 —— 请求体。 */
export interface NontaxUnifiedorderBody {
  /** appid */
  appid: string;
  /** 服务id */
  service_id?: number;
  /** 银行id（由微信非税平台分配的全局唯一id），不指定时在已配置的银行列表中随机选择；不填时默认生产环境，测试环境需填上 */
  bank_id?: string;
  /** 清分银行账号（不使用清分机制的不用填） */
  bank_account?: string;
  /** 指定资金结算到mch_id。只能结算到 bank_id 下绑定的mch_id。不填时自动从 bank_id 下绑定的 mch_id 选择一个。 */
  mch_id?: string;
  /** 用户标识。当 trade_type 为 MWEB 时，不需要填；其它情况，必填。 */
  openid?: string;
  /** 描述（服务名称） */
  desc: string;
  /** 总金额（单位是分） */
  fee: number;
  /** 支付中间页支付完成后跳转的页面（小程序下单非必填，其他必填） */
  return_url?: string;
  /** 用户端ip */
  ip: string;
  /** 订单号。（缴费通知书编号和订单号必须二选一。如果没有缴费通知书编号，则填订单号） */
  order_no?: string;
  /** 缴费通知书编号（缴费通知书编号和订单号必须二选一。如果没有缴费通知书编号，则填订单号） */
  payment_notice_no?: string;
  /** 执收单位编码 */
  department_code: string;
  /** 执收单位名称 */
  department_name: string;
  /** 通知书类型 */
  payment_notice_type?: number;
  /** 行政区划代码 */
  region_code: string;
  /** 用户姓名 */
  user_name?: string;
  /** 缴费子项目详情 */
  items: Record<string, unknown>;
  /** 缴款通知书创建时间（时间戳，单位是秒） */
  payment_notice_create_time: number;
  /** 限缴日期，格式YYYYMMDD */
  payment_expire_date?: string;
  /** 场景。"biz":微信公众号"ctiyservice":城市服务"miniprogram":小程序 */
  scene: string;
  /** app的appid，app下单时必填 */
  app_appid?: string;
  /** 默认是JSAPI类型，非微信浏览器的H5下单请填MWEB。 */
  trade_type?: string;
  /** 支付中间页/小程序是否自动调起支付 */
  auto_call_pay?: boolean;
}
/** 缴费支付下单 —— 返回体。 */
export interface NontaxUnifiedorderResp {
  /** 返回码 */
  errcode?: number;
  /** 返回码描述 */
  errmsg?: string;
  /** 用户姓名 */
  user_name?: string;
  /** 总金额（单位是分） */
  fee?: number;
  /** 缴费子项目详情 */
  items?: Record<string, unknown>;
  /** 缴费通知书编号 */
  payment_notice_no?: string;
  /** 执收单位编码 */
  department_code?: string;
  /** 执收单位名称 */
  department_name?: string;
  /** 通知书类型 */
  payment_notice_type?: number;
  /** 行政区划代码 */
  region_code?: string;
  /** 缴费通知书创建时间（时间戳，单位是秒） */
  payment_notice_create_time?: number;
  /** 限缴日期，格式YYYYMMDD */
  payment_expire_date?: string;
}

/** 获取自动回复规则 —— 请求体（文档未列字段，放行任意键）。 */
export type GetCurrentAutoreplyInfoBody = Record<string, unknown>;
/** 获取自动回复规则 —— 返回体。 */
export interface GetCurrentAutoreplyInfoResp {
  /** 关注后自动回复是否开启(0-未开启 1-开启) */
  is_add_friend_reply_open?: number;
  /** 消息自动回复是否开启(0-未开启 1-开启) */
  is_autoreply_open?: number;
  /** 关注后自动回复的信息 */
  add_friend_autoreply_info?: Record<string, unknown>;
  /** 消息自动回复的信息 */
  message_default_autoreply_info?: Record<string, unknown>;
  /** 关键词自动回复的信息 */
  keyword_autoreply_info?: Record<string, unknown>;
}

/** 删除群发消息 —— 请求体。 */
export interface MessageMassDeleteBody {
  /** 发送出去的消息ID */
  msg_id?: number;
  /** 要删除的内容在消息中的位置，第一篇编号为1，该字段不填或填0会删除全部内容 */
  article_idx: number;
  /** 要删除的内容url，当msg_id未指定时该参数才生效 */
  url?: string;
}
/** 删除群发消息 —— 返回体。 */
export interface MessageMassDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取群发速度 —— 请求体（文档未列字段，放行任意键）。 */
export type MessageMassSpeedGetBody = Record<string, unknown>;
/** 获取群发速度 —— 返回体。 */
export interface MessageMassSpeedGetResp {
  /** 群发速度的级别 */
  speed?: number;
  /** 群发速度的真实值 单位：万/分钟 */
  realspeed?: number;
}

/** 查询群发消息发送状态 —— 请求体。 */
export interface MessageMassGetBody {
  /** 群发消息后返回的消息id */
  msg_id: string;
}
/** 查询群发消息发送状态 —— 返回体。 */
export interface MessageMassGetResp {
  /** 群发消息后返回的消息id */
  msg_id?: string;
  /** 消息发送后的状态，SEND_SUCCESS表示发送成功，SENDING表示发送中，SEND_FAIL表示发送失败，DELETE表示已删除 */
  msg_status?: string;
}

/** 根据OpenID群发消息 —— 请求体。 */
export interface MessageMassSendBody {
  /** 填写图文消息的接收者，一串OpenID列表，OpenID最少2个，最多10000个 */
  touser: unknown[];
  /** 群发的消息类型，图文消息为mpnews，文本消息为text，语音为voice，音乐为music，图片为image，视频为video，卡券为wxcard */
  msgtype: string;
  /** 图文消息被判定为转载时，是否继续群发。 1为继续群发（转载），0为停止群发。 该参数默认为0。 */
  send_ignore_reprint?: number;
  /** 图文消息 */
  mpnews?: Record<string, unknown>;
  /** 文本消息 */
  text?: Record<string, unknown>;
  /** 语音消息 */
  voice?: Record<string, unknown>;
  /** 图片消息 */
  images?: Record<string, unknown>;
  /** 视频消息 */
  mpvideo?: Record<string, unknown>;
  /** 卡券消息 */
  wxcard?: Record<string, unknown>;
  /** 开发者侧群发msgid，长度限制32字节，如不填，则后台默认以群发范围和群发内容的摘要值做为 clientmsgid */
  clientmsgid?: string;
}
/** 根据OpenID群发消息 —— 返回体。 */
export interface MessageMassSendResp {
  /** 媒体文件类型，分别有图片（image）、语音（voice）、视频（video）和缩略图（thumb），次数为news，即图文消息 */
  type?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 消息发送任务的ID */
  msg_id?: number;
  /** 消息的数据ID，，该字段只有在群发图文消息时，才会出现。可以用于在图文分析数据接口中，获取到对应的图文消息的数据，是图文分析数据接口中的msgid字段中的前半部分，详见图文分析数据接口中的msgid字 */
  msg_data_id?: number;
}

/** 预览消息 —— 请求体。 */
export interface MessageMassPreviewBody {
  /** 接收消息用户对应该公众号的openid（touser、towxname二选一） */
  touser?: string;
  /** 接收消息用户微信号，实现对微信号的预览（touser、towxname二选一） */
  towxname?: string;
  /** 群发的消息类型，文章为mpnews，文本消息为text，语音为voice，音乐为music，贴图为image，视频为mpvideo，卡券为wxcard */
  msgtype: string;
  /** 文章 */
  mpnews?: Record<string, unknown>;
  /** 文本消息 */
  text?: Record<string, unknown>;
  /** 语音消息 */
  voice?: Record<string, unknown>;
  /** 音乐消息 */
  music?: Record<string, unknown>;
  /** 贴图消息 */
  image?: Record<string, unknown>;
  /** 视频消息 */
  mpvideo?: Record<string, unknown>;
  /** 卡券消息 */
  wxcard?: Record<string, unknown>;
}
/** 预览消息 —— 返回体。 */
export interface MessageMassPreviewResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 根据标签群发消息 —— 请求体。 */
export interface MessageMassSendallBody {
  /** 用于设定图文消息的接收者 */
  filter: Record<string, unknown>;
  /** 群发的消息类型，图文消息为mpnews，文本消息为text，语音为voice，音乐为music，图片为image，视频为mpvideo，卡券为wxcard */
  msgtype: string;
  /** 图文消息 */
  mpnews?: Record<string, unknown>;
  /** 文本消息 */
  text?: Record<string, unknown>;
  /** 语音消息 */
  voice?: Record<string, unknown>;
  /** 图片消息 */
  images?: Record<string, unknown>;
  /** 视频消息 */
  mpvideo?: Record<string, unknown>;
  /** 卡券消息 */
  wxcard?: Record<string, unknown>;
  /** 开发者侧群发msgid，长度限制32字节，如不填，则后台默认以群发范围和群发内容的摘要值做为 clientmsgid */
  clientmsgid?: string;
}
/** 根据标签群发消息 —— 返回体。 */
export interface MessageMassSendallResp {
  /** 媒体文件类型，分别有图片（image）、语音（voice）、视频（video）和缩略图（thumb），次数为news，即图文消息 */
  type?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 消息发送任务的ID */
  msg_id?: number;
  /** 消息的数据ID，，该字段只有在群发图文消息时，才会出现。可以用于在图文分析数据接口中，获取到对应的图文消息的数据，是图文分析数据接口中的msgid字段中的前半部分，详见图文分析数据接口中的msgid字 */
  msg_data_id?: number;
}

/** 设置群发速度 —— 请求体。 */
export interface MessageMassSpeedSetBody {
  /** 群发速度的级别（0 为 80w/分钟、1 为 60w/分钟、2 为 45w/分钟、3 为 30w/分钟、4 为 10w/分钟） */
  speed: number;
}
/** 设置群发速度 —— 返回体。 */
export interface MessageMassSpeedSetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 上传图文消息素材 —— 请求体。 */
export interface MediaUploadnewsBody {
  /** 图文消息，一个图文消息支持1到8条图文 */
  articles: unknown[];
}
/** 上传图文消息素材 —— 返回体。 */
export interface MediaUploadnewsResp {
  /** 媒体文件类型，图文消息（news） */
  type?: string;
  /** 图文消息上传后获取的唯一标识 */
  media_id?: string;
  /** 媒体文件上传时间 */
  created_at?: string;
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

/** 发送订阅通知 —— 请求体。 */
export interface MessageSubscribeBizsendBody {
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
/** 发送订阅通知 —— 返回体。 */
export interface MessageSubscribeBizsendResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 发送一次性订阅消息 —— 请求体。 */
export interface MessageTemplateSubscribeBody {
  /** 接收消息的用户openid */
  touser: string;
  /** 订阅消息模板ID */
  template_id: string;
  /** 点击消息跳转链接(需ICP备案) */
  url?: string;
  /** 跳小程序配置 */
  miniprogram?: Record<string, unknown>;
  /** 订阅场景值 */
  scene: string;
  /** 消息标题(15字以内) */
  title: string;
  /** 消息内容 */
  data: Record<string, unknown>;
}
/** 发送一次性订阅消息 —— 返回体。 */
export interface MessageTemplateSubscribeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 选用模板 —— 请求体。 */
export interface TemplateApiAddTemplateBody {
  /** 模板库中模板的编号，有“TM**”和“OPENTMTM**”等形式,对于类目模板，为纯数字ID */
  template_id_short: string;
  /** 选用的类目模板的关键词,按顺序传入,如果为空，或者关键词不在模板库中，会返回40246错误码 */
  keyword_name_list: unknown[];
}
/** 选用模板 —— 返回体。 */
export interface TemplateApiAddTemplateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 模板ID */
  template_id?: string;
}

/** 删除模板 —— 请求体。 */
export interface TemplateDelPrivateTemplateBody {
  /** 公众账号下模板消息ID, 包括类目模板ID */
  template_id: string;
}
/** 删除模板 —— 返回体。 */
export interface TemplateDelPrivateTemplateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 获取已选用模板列表 —— 请求体（文档未列字段，放行任意键）。 */
export type TemplateGetAllPrivateTemplateBody = Record<string, unknown>;
/** 获取已选用模板列表 —— 返回体。 */
export interface TemplateGetAllPrivateTemplateResp {
  /** 模版列表 */
  template_list?: unknown[];
}

/** 获取行业信息 —— 请求体（文档未列字段，放行任意键）。 */
export type TemplateGetIndustryBody = Record<string, unknown>;
/** 获取行业信息 —— 返回体。 */
export interface TemplateGetIndustryResp {
  /** 账号设置的主营行业 */
  primary_industry?: Record<string, unknown>;
  /** 账号设置的副营行业 */
  secondary_industry?: Record<string, unknown>;
}

/** 查询拦截的模板消息 —— 请求体。 */
export interface QueryblocktmplmsgBody {
  /** 被拦截的模板消息id */
  tmpl_msg_id: string;
  /** 上一页查询结果最大的id，用于翻页，第一次传0 */
  largest_id: number;
  /** 单页查询的大小，最大100 */
  limit: number;
}
/** 查询拦截的模板消息 —— 返回体。 */
export interface QueryblocktmplmsgResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 消息信息 */
  msginfo?: Record<string, unknown>;
}

/** 发送模板消息 —— 请求体。 */
export interface MessageTemplateSendBody {
  /** 接收者（用户）的 openid */
  touser: string;
  /** 所需下发的订阅模板id */
  template_id: string;
  /** 模板跳转链接（海外账号没有跳转能力,url 和 miniprogram 同时不填，无跳转，url 和 miniprogram 同时填写，优先跳转小程序） */
  url?: string;
  /** 跳转小程序时填写（url 和 miniprogram 同时不填，无跳转，page 和 miniprogram 同时填写，优先跳转小程序） */
  miniprogram?: Record<string, unknown>;
  /** 模板内容，需根据模板给定的格式给出（参考注意事项），格式形如 { "key1": { "value": any }, "key2": { "value": any } } */
  data: Record<string, unknown>;
  /** 防重入id。对于同一个openid + client_msg_id, 只发送一条消息,10分钟有效,超过10分钟不保证效果。若无防重入需求，可不填 */
  client_msg_id?: string;
}
/** 发送模板消息 —— 返回体。 */
export interface MessageTemplateSendResp {
  /** 消息id */
  msgid?: number;
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 设置所属行业 —— 请求体。 */
export interface TemplateApiSetIndustryBody {
  /** 公众号模板消息所属行业编号 */
  industry_id1: string;
  /** 公众号模板消息所属行业编号 */
  industry_id2: string;
}
/** 设置所属行业 —— 返回体。 */
export interface TemplateApiSetIndustryResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 申请二维码接口 —— 请求体。 */
export interface MarketcodeApplycodeBody {
  /** 申请码的数量，≥10000，≤20000000，10000的整数倍 */
  code_count: number;
  /** 外部单号，相同isv_application_id视为同一申请单 */
  isv_application_id: string;
}
/** 申请二维码接口 —— 返回体。 */
export interface MarketcodeApplycodeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 申请单号 */
  application_id?: number;
}

/** 下载二维码包接口 —— 请求体。 */
export interface MarketcodeApplycodedownloadBody {
  /** 申请单号 */
  application_id: number;
  /** 开始位置，来自查询二维码申请接口 */
  code_start: number;
  /** 结束位置，来自查询二维码申请接口 */
  code_end: number;
}
/** 下载二维码包接口 —— 返回体。 */
export interface MarketcodeApplycodedownloadResp {
  /** 文件buffer，需要先base64 decode，再做解密操作（解密参见3.1） */
  buffer?: unknown;
  /** 返回状态码 */
  errcode?: number;
  /** 错误提示 */
  errmsg?: string;
}

/** 查询二维码申请单接口 —— 请求体。 */
export interface MarketcodeApplycodequeryBody {
  /** 申请单号 */
  application_id: number;
  /** 外部单号，相同isv_application_id视为同一申请单 */
  isv_application_id: string;
}
/** 查询二维码申请单接口 —— 返回体。 */
export interface MarketcodeApplycodequeryResp {
  /** 返回状态码 */
  errcode?: number;
  /** 错误提示 */
  errmsg?: string;
  /** 申请单状态 */
  status?: string;
  /** 申请单号 */
  application_id?: number;
  /** 外部单号，相同isv_application_id视为同一申请单 */
  isv_application_id?: string;
  /** 二维码信息 */
  code_generate_list?: unknown[];
  /** 创建时间 */
  create_time?: number;
  /** 更新时间 */
  update_time?: number;
}

/** 激活二维码接口 —— 请求体。 */
export interface MarketcodeCodeactiveBody {
  /** 申请单号 */
  application_id: number;
  /** 活动名称,数据分析活动区分依据，请规范命名 */
  activity_name: string;
  /** 商品品牌,数据分析品牌区分依据，请规范命名 */
  product_brand: string;
  /** 商品标题,数据分析商品区分依据，请规范命名 */
  product_title: string;
  /** 商品条码,EAN商品条码，请规范填写 */
  product_code: string;
  /** 小程序的appid,扫码跳转小程序的appid */
  wxa_appid: string;
  /** 小程序的path,扫码跳转小程序的path */
  wxa_path: string;
  /** 小程序版本,默认为0正式版，开发版为1，体验版为2 */
  wxa_type?: number;
  /** 激活码段的起始位,如0（包含该值） */
  code_start: number;
  /** 激活码段的结束位,如9999（包含该值） */
  code_end: number;
}
/** 激活二维码接口 —— 返回体。 */
export interface MarketcodeCodeactiveResp {
  /** 返回状态码,0 */
  errcode?: number;
  /** 错误提示,返回信息，如errcode不为0，则errmsg为错误信息 */
  errmsg?: string;
}

/** 查询二维码激活状态接口 —— 请求体。 */
export interface MarketcodeCodeactivequeryBody {
  /** 申请单号 */
  application_id?: number;
  /** 该码在批次中的偏移量,传入application_id时必填 */
  code_index?: number;
  /** 28位普通码字符,code与code_url二选一 */
  code_url?: string;
  /** 九位的字符串原始码,code与code_url二选一 */
  code?: string;
}
/** 查询二维码激活状态接口 —— 返回体。 */
export interface MarketcodeCodeactivequeryResp {
  /** 返回状态码,0 */
  errcode?: number;
  /** 错误提示,返回信息，如errcode不为0，则errmsg为错误信，,errcode为0时返回下列字段 */
  errmsg?: string;
  /** 原始码,返回原始码数据，并返回对应的激活信息 */
  code?: string;
  /** 申请单号 */
  application_id?: number;
  /** 外部单号 */
  isv_application_id?: string;
  /** 活动名称 */
  activity_name?: string;
  /** 商品品牌 */
  product_brand?: string;
  /** 商品标题 */
  product_title?: string;
  /** 小程序的appid */
  wxa_appid?: string;
  /** 小程序的path */
  wxa_path?: string;
  /** 小程序版本 */
  wxa_type?: number;
  /** 激活码段的起始位,如0（包含该值） */
  code_start?: number;
  /** 激活码段的结束位,如9999（包含该值） */
  code_end?: number;
}

/** CODE_TICKET换CODE接口 —— 请求体。 */
export interface MarketcodeTickettocodeBody {
  /** 用户的openid */
  openid: string;
  /** 跳转时带上的code_ticket参数 */
  code_ticket: string;
}
/** CODE_TICKET换CODE接口 —— 返回体。 */
export interface MarketcodeTickettocodeResp {
  /** 返回状态码,0 */
  errcode?: number;
  /** 错误提示,返回信息，如errcode不为0，则errmsg为错误信息 */
  errmsg?: string;
  /** 原始码,返回原始码数据，并返回对应的激活信息 */
  code?: string;
  /** 申请单号 */
  application_id?: number;
  /** 外部单号 */
  isv_application_id?: string;
  /** 活动名称 */
  activity_name?: string;
  /** 商品品牌 */
  product_brand?: string;
  /** 商品标题 */
  product_title?: string;
  /** 小程序的appid */
  wxa_appid?: string;
  /** 小程序的path */
  wxa_path?: string;
  /** 激活码段的起始位,如0（包含该值） */
  code_start?: number;
  /** 激活码段的结束位,如9999（包含该值） */
  code_end?: number;
}

/** 上传语音文件 —— 请求体。 */
export interface MediaVoiceAddvoicetorecofortextBody {
  /** 语音内容 */
  media: unknown;
}
/** 上传语音文件 —— 查询参数。 */
export interface MediaVoiceAddvoicetorecofortextQuery {
  /** 文件格式（只支持mp3，16k，单声道，最大1M） */
  format: string;
  /** 语音唯一标识 */
  voice_id: string;
  /** 语言，zh_CN 或 en_US，默认中文 */
  lang?: string;
}
/** 上传语音文件 —— 返回体。 */
export interface MediaVoiceAddvoicetorecofortextResp {
  /** 错误码 */
  errcode?: string;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取语音识别结果 —— 请求体（文档未列字段，放行任意键）。 */
export type MediaVoiceQueryrecoresultfortextBody = Record<string, unknown>;
/** 获取语音识别结果 —— 查询参数。 */
export interface MediaVoiceQueryrecoresultfortextQuery {
  /** 语音唯一标识 */
  voice_id: string;
  /** 语言，zh_CN 或 en_US，默认中文 */
  lang?: string;
}
/** 获取语音识别结果 —— 返回体。 */
export interface MediaVoiceQueryrecoresultfortextResp {
  /** 识别结果 */
  result?: string;
}

/** 微信翻译 —— 请求体。 */
export interface MediaVoiceTranslatecontentBody {
  /** 源内容(utf8格式，最大600Byte) */
  content: string;
}
/** 微信翻译 —— 查询参数。 */
export interface MediaVoiceTranslatecontentQuery {
  /** 源语言，zh_CN 或 en_US */
  lfrom: string;
  /** 目标语言，zh_CN 或 en_US */
  lto: string;
}
/** 微信翻译 —— 返回体。 */
export interface MediaVoiceTranslatecontentResp {
  /** 原文内容 */
  from_content?: string;
  /** 译文内容 */
  to_content?: string;
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

/** 菜单识别 —— 请求体。 */
export interface CvOcrMenuBody {
  /** 图片文件，文件大小限制：小于2M */
  img?: unknown;
}
/** 菜单识别 —— 查询参数。 */
export interface CvOcrMenuQuery {
  /** 要检测的图片 url，传这个则不用传 img 参数。 */
  img_url?: string;
}
/** 菜单识别 —— 返回体。 */
export interface CvOcrMenuResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 识别的信息 */
  content?: Record<string, unknown>;
}

/** 获取已发布的消息列表 —— 请求体。 */
export interface FreepublishBatchgetBody {
  /** 从全部素材的该偏移位置开始返回，0表示从第一个素材返回 */
  offset: number;
  /** 返回素材的数量，取值在1到20之间 */
  count: number;
  /** 1 表示不返回content字段，0表示正常返回，默认为0 */
  no_content?: number;
}
/** 获取已发布的消息列表 —— 返回体。 */
export interface FreepublishBatchgetResp {
  /** 成功发布素材的总数 */
  total_count?: number;
  /** 本次调用获取的素材的数量 */
  item_count?: number;
  /** 图文消息条目列表 */
  item?: unknown[];
}

/** 发布状态查询 —— 请求体。 */
export interface FreepublishGetBody {
  /** 发布任务id */
  publish_id: string;
}
/** 发布状态查询 —— 返回体。 */
export interface FreepublishGetResp {
  /** 发布任务id */
  publish_id?: string;
  /** 发布状态(0:成功,1:发布中,2:原创失败,3:常规失败,4:平台审核不通过,5:成功后用户删除所有文章,6:成功后系统封禁所有文章) */
  publish_status?: number;
  /** 成功时的图文article_id */
  article_id?: string;
  /** 文章详情 */
  article_detail?: Record<string, unknown>;
  /** 失败文章编号 */
  fail_idx?: unknown[];
}

/** 发布草稿 —— 请求体。 */
export interface FreepublishSubmitBody {
  /** 要发布的草稿的media_id */
  media_id: string;
}
/** 发布草稿 —— 返回体。 */
export interface FreepublishSubmitResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 发布任务的id */
  publish_id?: string;
  /** 消息的数据ID */
  msg_data_id?: string;
}

/** 删除发布文章 —— 请求体。 */
export interface FreepublishDeleteBody {
  /** 成功发布时返回的 article_id */
  article_id: string;
  /** 要删除的文章在图文消息中的位置，第一篇编号为1，该字段不填或填0会删除全部文章 */
  index?: number;
}
/** 删除发布文章 —— 返回体。 */
export interface FreepublishDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取已发布图文信息 —— 请求体。 */
export interface FreepublishGetarticleBody {
  /** 要获取的草稿的article_id */
  article_id: string;
}
/** 获取已发布图文信息 —— 返回体。 */
export interface FreepublishGetarticleResp {
  /** 图文信息集合 */
  news_item?: unknown[];
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 增加或修改二维码规则 —— 请求体。 */
export interface WxopenQrcodejumpaddBody {
  /** 二维码规则。 */
  prefix: string;
  /** 扫了服务号二维码之后要跳转的小程序的appid。增加或修改“扫服务号二维码打开小程序”的二维码规则才需要传这个参数。 */
  appid: string;
  /** 小程序功能页面。 */
  path: string;
  /** 编辑标志位，0 表示新增二维码规则，1 表示修改已有二维码规则（注意，已经发布的规则，不支持修改） */
  is_edit: number;
  /** 测试范围。 1表示开发版（配置只对开发者生效）；2表示体验版（配置对管理员、体验者生效)；3表示正式版（配置对开发者、管理员和体验者生效）。 增加或修改“扫普通二维码打开小程序”的二维码规则才需要传这 */
  open_version: number;
  /** 测试链接，至多 5 个用于测试的二维码完整链接，此链接必须符合已填写的二维码规则。 增加或修改“扫普通二维码打开小程序”的二维码规则才需要传这个参数。 */
  debug_url?: unknown[];
  /** 是否独占符合二维码前缀匹配规则的所有子规 1 为不占用，2 为占用。查看详细规则 增加或修改“扫普通二维码打开小程序”的二维码规则才需要传这个参数。 */
  permit_sub_rule: number;
}
/** 增加或修改二维码规则 —— 返回体。 */
export interface WxopenQrcodejumpaddResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 删除已设置的二维码规则 —— 请求体。 */
export interface WxopenQrcodejumpdeleteBody {
  /** 二维码规则 */
  prefix: string;
  /** 小程序appid。 删除“扫服务号二维码打开小程序”的二维码规则才需要传这个参数。 */
  appid: string;
}
/** 删除已设置的二维码规则 —— 返回体。 */
export interface WxopenQrcodejumpdeleteResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取已设置的二维码规则 —— 请求体。 */
export interface WxopenQrcodejumpgetBody {
  /** 小程序的appid。获取“扫服务号二维码打开小程序”已设置的二维码规则才需要传这个参数。 */
  appid: string;
  /** 默认值为0。 0：查询最近新增 10000 条（数量大建议用1或者2）；1：prefix查询；2：分页查询，按新增顺序返回。获取“扫服务号二维码打开小程序”已设置的二维码规则才需要传这个参数。 */
  get_type: number;
  /** prefix查询，get_type=1 必传，最多传 200 个前缀。获取“扫服务号二维码打开小程序”已设置的二维码规则才需要传这个参数。 */
  prefix_list?: unknown[];
  /** 页码，get_type=2 必传，从 1 开始。获取“扫服务号二维码打开小程序”已设置的二维码规则才需要传这个参数。 */
  page_num?: number;
  /** 每页数量，get_type=2 必传，最大为 200。获取“扫服务号二维码打开小程序”已设置的二维码规则才需要传这个参数。 */
  page_size?: number;
}
/** 获取已设置的二维码规则 —— 返回体。 */
export interface WxopenQrcodejumpgetResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 二维码规则详情列表 */
  rule_list?: unknown[];
  /** 是否已经打开二维码跳转链接设置 */
  qrcodejump_open?: number;
  /** 二维码规则数量 */
  list_size?: number;
  /** 本月还可发布的次数 */
  qrcodejump_pub_quota?: number;
  /** 二维码规则总数据量，用于分页查询 */
  total_count?: number;
}

/** 发布已设置的二维码规则 —— 请求体。 */
export interface WxopenQrcodejumppublishBody {
  /** 二维码规则。如果是服务号，则是服务号的带参的二维码url。 */
  prefix: string;
}
/** 发布已设置的二维码规则 —— 返回体。 */
export interface WxopenQrcodejumppublishResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 生成带参数的二维码 —— 请求体。 */
export interface QrcodeCreateBody {
  /** 二维码有效时间（秒），最大2592000，仅临时二维码需要 */
  expire_seconds?: number;
  /** 二维码类型：QR_SCENE(临时整型)/QR_STR_SCENE(临时字符串)/QR_LIMIT_SCENE(永久整型)/QR_LIMIT_STR_SCENE(永久字符串) */
  action_name: string;
  /** 二维码详细信息 */
  action_info: Record<string, unknown>;
}
/** 生成带参数的二维码 —— 返回体。 */
export interface QrcodeCreateResp {
  /** 获取的二维码ticket，凭借此ticket可以在有效时间内换取二维码。 */
  ticket?: string;
  /** 该二维码有效时间，以秒为单位。 最大不超过2592000（即30天）。 */
  expire_seconds?: number;
  /** 二维码图片解析后的地址，开发者可根据该地址自行生成需要的二维码图片 */
  url?: string;
}

/** 短链转长信息 —— 请求体。 */
export interface ShortenFetchBody {
  /** 短key */
  short_key: string;
}
/** 短链转长信息 —— 返回体。 */
export interface ShortenFetchResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 长信息 */
  long_data?: string;
  /** 创建的时间戳 */
  create_time?: number;
  /** 剩余的过期秒数 */
  expire_seconds?: number;
}

/** 长信息转短链 —— 请求体。 */
export interface ShortenGenBody {
  /** 需要转换的长信息，不超过4KB */
  long_data: string;
  /** 过期秒数，最大值为2592000（即30天），默认为2592000 */
  expire_seconds: number;
}
/** 长信息转短链 —— 返回体。 */
export interface ShortenGenResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 短key，15字节，base62编码(0-9/a-z/A-Z) */
  short_key?: string;
}

/** 新增门店 —— 请求体。 */
export interface AddStoreBody {
  /** 从腾讯地图换取的位置点id， 即search_map_poi接口返回的sosomap_poi_uid字段 */
  map_poi_id: string;
  /** 门店图片，可传多张图片，字段是一个 json 字符串 */
  pic_list: string;
  /** 联系电话 */
  contract_phone: string;
  /** 营业时间，格式11:11-12:12 */
  hour: string;
  /** 经营资质证件号 */
  credential: string;
  /** 主体名字，如果复用公众号主体，则company_name为空，如果不复用公众号主体，则company_name为具体的主体名字 */
  company_name?: string;
  /** 卡券id，如果不需要添加卡券，该参数可为空 目前仅开放支持会员卡、买单和刷卡支付券，不支持自定义code，需要先去公众平台卡券后台创建cardid */
  card_id: string;
  /** 相关证明材料 临时素材mediaid 不复用公众号主体时，才需要填 支持0~5个mediaid，例如mediaid1 或 mediaid2 */
  qualification_list?: unknown[];
  /** 如果是从门店管理迁移门店到门店小程序，则需要填该字段 */
  poi_id?: string;
}
/** 新增门店 —— 返回体。 */
export interface AddStoreResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 新增信息 */
  data?: Record<string, unknown>;
}

/** 创建门店小程序 —— 请求体。 */
export interface ApplyMerchantBody {
  /** 一级类目id */
  first_catid: number;
  /** 二级类目id */
  second_catid: number;
  /** 头像临时素材mediaid( 支持jpg和png格式的图片) */
  headimg_mediaid: string;
  /** 门店小程序的昵称 名称长度为4-30个字符（中文算两个字符） */
  nickname: string;
  /** 门店小程序的介绍 */
  intro: string;
  /** 类目相关证件，临时素材mediaid */
  qualification_list: string;
  /** 营业执照或组织代码证，临时素材mediaid */
  org_code?: string;
  /** 补充材料，临时素材mediaid */
  other_files?: string;
}
/** 创建门店小程序 —— 返回体。 */
export interface ApplyMerchantResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 在地图中创建门店 —— 请求体。 */
export interface CreateMapPoiBody {
  /** 名字 */
  name: string;
  /** 经度 */
  longitude: string;
  /** 纬度 */
  latitude: string;
  /** 省份 */
  province: string;
  /** 城市 */
  city: string;
  /** 区 */
  district: string;
  /** 详细地址 */
  address: string;
  /** 类目，比如美食:中餐厅 */
  category: string;
  /** 电话，可多个，使用英文分号间隔 010-6666666-111; 010-6666666; 010- 6666666-222 */
  telephone: string;
  /** 门店图片url */
  photo: string;
  /** 营业执照url */
  license: string;
  /** 介绍 */
  introduct: string;
  /** 腾讯地图拉取省市区信息接口返回的id */
  districtid: string;
  /** 如果是迁移门店， 必须填 poi_id字段 */
  poi_id: string;
}
/** 在地图中创建门店 —— 返回体。 */
export interface CreateMapPoiResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 数据 */
  data?: Record<string, unknown>;
}

/** 获取省市区信息 —— 请求体（文档未列字段，放行任意键）。 */
export type GetDistrictBody = Record<string, unknown>;
/** 获取省市区信息 —— 返回体。 */
export interface GetDistrictResp {
  /** 状态码 */
  status?: number;
  /** 状态描述 */
  message?: string;
  /** 数据版本 */
  data_version?: string;
  /** 数据内容，此数组是二维数组，分别代表省市区的信息 */
  result?: unknown[];
}

/** 获取门店小程序审核结果 —— 请求体。 */
export interface GetMerchantAuditInfoBody {
  /** 审核单id */
  audit_id: number;
}
/** 获取门店小程序审核结果 —— 返回体。 */
export interface GetMerchantAuditInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 审核结果 */
  data?: Record<string, unknown>;
}

/** 拉取门店小程序类目 —— 请求体（文档未列字段，放行任意键）。 */
export type GetMerchantCategoryBody = Record<string, unknown>;
/** 拉取门店小程序类目 —— 返回体。 */
export interface GetMerchantCategoryResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 数据 */
  data?: Record<string, unknown>;
}

/** 修改门店小程序信息 —— 请求体。 */
export interface ModifyMerchantBody {
  /** 门店头像的临时素材mediaid，不改可传空值 */
  headimg_mediaid: string;
  /** 门店小程序的介绍，不改可传空值 */
  intro: string;
}
/** 修改门店小程序信息 —— 返回体。 */
export interface ModifyMerchantResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 删除门店 —— 请求体。 */
export interface DelStoreBody {
  /** 为门店小程序添加门店，审核成功后返回的门店id */
  poi_id: string;
}
/** 删除门店 —— 返回体。 */
export interface DelStoreResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 获取门店详情 —— 请求体。 */
export interface GetStoreInfoBody {
  /** 为门店小程序添加门店，审核成功后返回的门店id */
  poi_id: string;
}
/** 获取门店详情 —— 返回体。 */
export interface GetStoreInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 获取门店列表 —— 请求体。 */
export interface GetStoreListBody {
  /** 获取门店列表的初始偏移位置，从0开始计数 */
  offset: number;
  /** 获取门店个数 */
  limit: number;
}
/** 获取门店列表 —— 返回体。 */
export interface GetStoreListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 门店列表 */
  business_list?: unknown[];
  /** 门店总数 */
  total_count?: number;
}

/** 更新门店信息 —— 请求体。 */
export interface UpdateStoreBody {
  /** 为门店小程序添加门店，审核成功后返回的门店id */
  poi_id: string;
  /** 门店图片，可传多张图片，字段是一个 json 字符串 */
  pic_list: string;
  /** 联系电话 */
  contract_phone: string;
  /** 营业时间，格式11:11-12:12 */
  hour: string;
  /** 卡券id，如果不需要添加卡券，该参数可为空 目前仅开放支持会员卡、买单和刷卡支付券，不支持自定义code，需要先去公众平台卡券后台创建cardid */
  card_id: string;
}
/** 更新门店信息 —— 返回体。 */
export interface UpdateStoreResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 更新信息 */
  data?: Record<string, unknown>;
}

/** 搜索门店地图信息 —— 请求体。 */
export interface SearchMapPoiBody {
  /** 对应 拉取省市区信息接口 中的id字段 */
  districtid: number;
  /** 搜索的关键词 */
  keyword: string;
}
/** 搜索门店地图信息 —— 返回体。 */
export interface SearchMapPoiResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** 地图信息 */
  data?: Record<string, unknown>;
}

/** 转换openid —— 请求体。 */
export interface ChangeopenidBody {
  /** 原账号的原始id，不是appid */
  from_appid: string;
  /** 第1步中拉取的原账号用户列表，这些必须是旧账号目前关注的才行，否则会出错；一次最多100个。 */
  openid_list: unknown[];
}
/** 转换openid —— 返回体。 */
export interface ChangeopenidResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
  /** openid结果列表 */
  result_list?: unknown[];
}

/** 批量为用户打标签 —— 请求体。 */
export interface TagsMembersBatchtaggingBody {
  /** 粉丝openid列表，最多50个 */
  openid_list: unknown[];
  /** 标签id */
  tagid: number;
}
/** 批量为用户打标签 —— 返回体。 */
export interface TagsMembersBatchtaggingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 批量为用户取消标签 —— 请求体。 */
export interface TagsMembersBatchuntaggingBody {
  /** 粉丝openid列表 */
  openid_list: unknown[];
  /** 标签id */
  tagid: number;
}
/** 批量为用户取消标签 —— 返回体。 */
export interface TagsMembersBatchuntaggingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 创建标签 —— 请求体。 */
export interface TagsCreateBody {
  /** 标签信息 */
  tag: Record<string, unknown>;
}
/** 创建标签 —— 返回体。 */
export interface TagsCreateResp {
  /** 标签信息 */
  tag?: Record<string, unknown>;
}

/** 删除标签 —— 请求体。 */
export interface TagsDeleteBody {
  /** 标签信息 */
  tag?: Record<string, unknown>;
}
/** 删除标签 —— 返回体。 */
export interface TagsDeleteResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 获取标签下粉丝列表 —— 请求体。 */
export interface UserTagGetBody {
  /** 标签 ID */
  tagid?: number;
  /** 第一个拉取的OPENID，不填默认从头开始拉取 */
  next_openid?: string;
}
/** 获取标签下粉丝列表 —— 返回体。 */
export interface UserTagGetResp {
  /** 本次获取的粉丝数量 */
  count?: number;
  /** 标签下粉丝数据 */
  data?: Record<string, unknown>;
  /** 拉取列表最后一个用户的openid */
  next_openid?: string;
}

/** 获取用户的标签列表 —— 请求体。 */
export interface TagsGetidlistBody {
  /** 用户 openid */
  openid: string;
}
/** 获取用户的标签列表 —— 返回体。 */
export interface TagsGetidlistResp {
  /** 用户的标签列表 */
  tagid_list?: unknown[];
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 获取标签 —— 请求体（文档未列字段，放行任意键）。 */
export type TagsGetBody = Record<string, unknown>;
/** 获取标签 —— 返回体。 */
export interface TagsGetResp {
  /** 标签列表 */
  tags?: unknown[];
}

/** 编辑标签 —— 请求体。 */
export interface TagsUpdateBody {
  /** 标签信息 */
  tag: Record<string, unknown>;
}
/** 编辑标签 —— 返回体。 */
export interface TagsUpdateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 拉黑用户 —— 请求体。 */
export interface TagsMembersBatchblacklistBody {
  /** 需要拉黑的openid列表 */
  openid_list: unknown[];
}
/** 拉黑用户 —— 返回体。 */
export interface TagsMembersBatchblacklistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 取消拉黑用户 —— 请求体。 */
export interface TagsMembersBatchunblacklistBody {
  /** 需要取消拉黑的openid列表 */
  openid_list: unknown[];
}
/** 取消拉黑用户 —— 返回体。 */
export interface TagsMembersBatchunblacklistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 批量获取用户基本信息 —— 请求体。 */
export interface UserInfoBatchgetBody {
  /** 用户列表 */
  user_list: unknown[];
}
/** 批量获取用户基本信息 —— 返回体。 */
export interface UserInfoBatchgetResp {
  /** 用户列表 */
  user_info_list?: unknown[];
}

/** 获取公众号的黑名单列表 —— 请求体。 */
export interface TagsMembersGetblacklistBody {
  /** 起始OpenID，为空时从开头拉取 */
  begin_openid?: string;
}
/** 获取公众号的黑名单列表 —— 返回体。 */
export interface TagsMembersGetblacklistResp {
  /** 用户总数 */
  total?: number;
  /** 本次返回的用户数 */
  count?: number;
  /** 用户数据 */
  data?: Record<string, unknown>;
  /** 本次列表后一位openid */
  next_openid?: string;
}

/** 获取关注用户列表 —— 请求体（文档未列字段，放行任意键）。 */
export type UserGetBody = Record<string, unknown>;
/** 获取关注用户列表 —— 查询参数。 */
export interface UserGetQuery {
  /** 上一批列表的最后一个OPENID，不填默认从头开始拉取 */
  next_openid?: string;
}
/** 获取关注用户列表 —— 返回体。 */
export interface UserGetResp {
  /** 关注该公众账号的总用户数 */
  total?: number;
  /** 拉取的OPENID个数，最大值为10000 */
  count?: number;
  /** 列表数据，OPENID的列表 */
  data?: Record<string, unknown>;
  /** 拉取列表后一个用户的OPENID */
  next_openid?: string;
}

/** 设置用户备注名 —— 请求体。 */
export interface UserInfoUpdateremarkBody {
  /** 用户标识 */
  openid: string;
  /** 新的备注名，长度必须小于30字节 */
  remark: string;
}
/** 设置用户备注名 —— 返回体。 */
export interface UserInfoUpdateremarkResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取用户基本信息 —— 请求体（文档未列字段，放行任意键）。 */
export type UserInfoBody = Record<string, unknown>;
/** 获取用户基本信息 —— 查询参数。 */
export interface UserInfoQuery {
  /** 普通用户的标识，对当前公众号唯一 */
  openid: string;
  /** 返回国家地区语言版本 */
  lang?: string;
}
/** 获取用户基本信息 —— 返回体。 */
export interface UserInfoResp {
  /** 用户是否订阅该公众号标识，值为0时，代表此用户没有关注该公众号，拉取不到其余信息。 */
  subscribe?: number;
  /** 用户的标识，对当前公众号唯一 */
  openid?: string;
  /** 【注意：该字段不再提供】用户的语言，简体中文为zh_CN */
  language?: string;
  /** 用户关注时间，为时间戳。如果用户曾多次关注，则取最后关注时间 */
  subscribe_time?: number;
  /** 只有在用户将公众号绑定到微信开放平台账号后，才会出现该字段。 */
  unionid?: string;
  /** 公众号运营者对粉丝的备注，公众号运营者可在微信公众平台用户管理界面对粉丝添加备注 */
  remark?: string;
  /** 用户所在的分组ID（兼容旧的用户分组接口） */
  groupid?: number;
  /** 用户被打上的标签ID列表 */
  tagid_list?: unknown[];
  /** 返回用户关注的渠道来源，ADD_SCENE_SEARCH 公众号搜索，ADD_SCENE_ACCOUNT_MIGRATION 公众号迁移，ADD_SCENE_PROFILE_CARD 名片分享，ADD */
  subscribe_scene?: string;
  /** 二维码扫码场景（开发者自定义） */
  qr_scene?: number;
  /** 二维码扫码场景描述（开发者自定义） */
  qr_scene_str?: string;
}

/** 换取用户授权凭证 —— 请求体（文档未列字段，放行任意键）。 */
export type Oauth2AccessTokenBody = Record<string, unknown>;
/** 换取用户授权凭证 —— 查询参数。 */
export interface Oauth2AccessTokenQuery {
  /** 填写第一步获取的 code 参数 */
  code: string;
  /** 填写为 authorization_code */
  grant_type: string;
}
/** 换取用户授权凭证 —— 返回体。 */
export interface Oauth2AccessTokenResp {
  /** 网页授权接口调用凭证,注意：此access_token与基础支持的access_token不同 */
  access_token?: string;
  /** access_token接口调用凭证超时时间，单位（秒） */
  expires_in?: number;
  /** 用户刷新access_token */
  refresh_token?: string;
  /** 用户唯一标识，请注意，在未关注公众号时，用户访问公众号的网页，也会产生一个用户和公众号唯一的OpenID */
  openid?: string;
  /** 用户统一标识（针对一个微信开放平台账号下的应用，同一用户的 unionid 是唯一的），只有当scope为"snsapi_userinfo"时返回 */
  unionid?: string;
  /** 是否为快照页模式虚拟账号，只有当用户是快照页模式虚拟账号时返回，值为1 */
  is_snapshotuser?: number;
}

/** 检验用户授权凭证 —— 请求体（文档未列字段，放行任意键）。 */
export type AuthBody = Record<string, unknown>;
/** 检验用户授权凭证 —— 查询参数。 */
export interface AuthQuery {
  /** 用户的唯一标识 */
  openid: string;
}
/** 检验用户授权凭证 —— 返回体。 */
export interface AuthResp {
  /** 错误码 */
  errcode?: number;
  /** 错误描述 */
  errmsg?: string;
}

/** 刷新用户授权凭证 —— 请求体（文档未列字段，放行任意键）。 */
export type Oauth2RefreshTokenBody = Record<string, unknown>;
/** 刷新用户授权凭证 —— 查询参数。 */
export interface Oauth2RefreshTokenQuery {
  /** 填写为refresh_token */
  grant_type: string;
  /** 填写通过access_token获取到的refresh_token参数 */
  refresh_token: string;
}
/** 刷新用户授权凭证 —— 返回体。 */
export interface Oauth2RefreshTokenResp {
  /** 网页授权接口调用凭证,注意：此access_token与基础支持的access_token不同 */
  access_token?: string;
  /** access_token接口调用凭证超时时间，单位（秒） */
  expires_in?: number;
  /** 用户刷新access_token */
  refresh_token?: string;
  /** 用户唯一标识 */
  openid?: string;
  /** 用户授权的作用域，使用逗号（,）分隔 */
  scope?: string;
}

/** 获取授权用户信息 —— 请求体（文档未列字段，放行任意键）。 */
export type UserinfoBody = Record<string, unknown>;
/** 获取授权用户信息 —— 查询参数。 */
export interface UserinfoQuery {
  /** 用户的唯一标识 */
  openid: string;
  /** 返回国家地区语言版本，zh_CN 简体，zh_TW 繁体，en 英语 */
  lang?: string;
}
/** 获取授权用户信息 —— 返回体。 */
export interface UserinfoResp {
  /** 用户的唯一标识 */
  openid?: string;
  /** 用户昵称 */
  nickname?: string;
  /** 用户的性别，值为1时是男性，值为2时是女性，值为0时是未知 */
  sex?: number;
  /** 用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640*640正方形头像），用户没有头像时该项为空。若用户更换头像，原有头像URL将失效。 */
  headimgurl?: string;
  /** 只有在管理员将公众号绑定到微信开放平台账号后，才会出现该字段。 */
  unionid?: string;
  /** 用户个人资料填写的省份 */
  province?: string;
  /** 普通用户个人资料填写的城市 */
  city?: string;
  /** 国家，如中国为CN */
  country?: string;
  /** 用户特权信息，json 数组，如微信沃卡用户为（chinaunicom） */
  privilege?: unknown[];
}

/** 获取被动回复概要数据 —— 请求体。 */
export interface GetinterfacesummaryBody {
  /** 起始日期(YYYY-MM-DD格式) */
  begin_date: string;
  /** 结束日期(最大时间跨度30天) */
  end_date: string;
}
/** 获取被动回复概要数据 —— 返回体。 */
export interface GetinterfacesummaryResp {
  /** 数据列表 */
  list?: Record<string, unknown>;
}

/** 获取被动回复分布数据 —— 请求体（文档未列字段，放行任意键）。 */
export type GetinterfacesummaryhourBody = Record<string, unknown>;
/** 获取被动回复分布数据 —— 返回体。 */
export interface GetinterfacesummaryhourResp {
  /** 数据列表 */
  list?: Record<string, unknown>;
}

/** 获取消息发送概况数据 —— 请求体。 */
export interface GetupstreammsgBody {
  /** 起始日期(格式: yyyy-MM-dd)，与end_date差值小于7天 */
  begin_date: string;
  /** 结束日期(最大值为昨日) */
  end_date: string;
}
/** 获取消息发送概况数据 —— 返回体。 */
export interface GetupstreammsgResp {
  /** 数据列表 */
  list?: unknown[];
}

/** 获取消息发送分布数据 —— 请求体。 */
export interface GetupstreammsgdistBody {
  /** 起始日期(格式: yyyy-MM-dd)，跨度不超过15天 */
  begin_date: string;
  /** 结束日期 */
  end_date: string;
}
/** 获取消息发送分布数据 —— 返回体。 */
export interface GetupstreammsgdistResp {
  /** 数据列表 */
  list?: Record<string, unknown>;
}

/** 获取消息发送分布月数据 —— 请求体。 */
export interface GetupstreammsgdistmonthBody {
  /** 起始日期(格式: yyyy-MM-dd)，跨度不超过15天 */
  begin_date: string;
  /** 结束日期 */
  end_date: string;
}
/** 获取消息发送分布月数据 —— 返回体。 */
export interface GetupstreammsgdistmonthResp {
  /** 数据列表 */
  list?: Record<string, unknown>;
}

/** 获取消息发送分布周数据 —— 请求体。 */
export interface GetupstreammsgdistweekBody {
  /** 起始日期(格式: yyyy-MM-dd)，跨度不超过15天 */
  begin_date: string;
  /** 结束日期 */
  end_date: string;
}
/** 获取消息发送分布周数据 —— 返回体。 */
export interface GetupstreammsgdistweekResp {
  /** 数据列表 */
  list?: Record<string, unknown>;
}

/** 获取消息发送分时数据 —— 请求体。 */
export interface GetupstreammsghourBody {
  /** 起始日期(格式: yyyy-MM-dd) */
  begin_date: string;
  /** 结束日期(必须为同一天) */
  end_date: string;
}
/** 获取消息发送分时数据 —— 返回体。 */
export interface GetupstreammsghourResp {
  /** 数据列表 */
  list?: unknown[];
}

/** 获取消息发送月数据 —— 请求体。 */
export interface GetupstreammsgmonthBody {
  /** 起始日期(格式: yyyy-MM-dd) */
  begin_date: string;
  /** 结束日期(必须为同一天) */
  end_date: string;
}
/** 获取消息发送月数据 —— 返回体。 */
export interface GetupstreammsgmonthResp {
  /** 数据列表 */
  list?: unknown[];
}

/** 获取消息发送周数据 —— 请求体。 */
export interface GetupstreammsgweekBody {
  /** 起始日期(格式: yyyy-MM-dd) */
  begin_date: string;
  /** 结束日期(必须为同一天) */
  end_date: string;
}
/** 获取消息发送周数据 —— 返回体。 */
export interface GetupstreammsgweekResp {
  /** 数据列表 */
  list?: unknown[];
}

/** 获取发表内容每日阅读数据 —— 请求体。 */
export interface GetarticlereadBody {
  /** 起始日期(YYYY-MM-DD) */
  begin_date: string;
  /** 结束日期(最大值为昨日) */
  end_date: string;
}
/** 获取发表内容每日阅读数据 —— 返回体。 */
export interface GetarticlereadResp {
  /** 日期内文章数据列表 */
  list?: unknown[];
  /** 数据是否有延迟，is_delay=false表示数据是最新的 */
  is_delay?: boolean;
}

/** 获取发表内容每日分享数据 —— 请求体。 */
export interface GetarticleshareBody {
  /** 起始日期(YYYY-MM-DD) */
  begin_date: string;
  /** 结束日期(最大值为昨日) */
  end_date: string;
}
/** 获取发表内容每日分享数据 —— 返回体。 */
export interface GetarticleshareResp {
  /** 日期内文章数据列表 */
  list?: unknown[];
  /** 数据是否有延迟，is_delay=false表示数据是最新的 */
  is_delay?: boolean;
}

/** 获取图文群发每日数据 —— 请求体。 */
export interface GetarticlesummaryBody {
  /** 起始日期(YYYY-MM-DD) */
  begin_date: string;
  /** 结束日期(最大值为昨日) */
  end_date: string;
}
/** 获取图文群发每日数据 —— 返回体。 */
export interface GetarticlesummaryResp {
  /** 该日期内所有被阅读过的文章（仅包括群发的文章）数据 */
  list?: unknown[];
}

/** 获取图文群发总数据 —— 请求体。 */
export interface GetarticletotalBody {
  /** 起始日期(YYYY-MM-DD) */
  begin_date: string;
  /** 结束日期(最大值为昨日) */
  end_date: string;
}
/** 获取图文群发总数据 —— 返回体。 */
export interface GetarticletotalResp {
  /** 数据列表 */
  list?: unknown[];
}

/** 获取发表内容发表详细数据 —— 请求体。 */
export interface GetarticletotaldetailBody {
  /** 起始日期(YYYY-MM-DD) */
  begin_date: string;
  /** 结束日期(最大值为昨日) */
  end_date: string;
}
/** 获取发表内容发表详细数据 —— 返回体。 */
export interface GetarticletotaldetailResp {
  /** 日期内文章数据列表 */
  list?: unknown[];
  /** 数据是否有延迟，is_delay=false表示数据是最新的 */
  is_delay?: boolean;
}

/** 获取发表内容概况总数据 —— 请求体。 */
export interface GetbizsummaryBody {
  /** 起始日期(YYYY-MM-DD) */
  begin_date: string;
  /** 结束日期(最大值为昨日) */
  end_date: string;
}
/** 获取发表内容概况总数据 —— 返回体。 */
export interface GetbizsummaryResp {
  /** 日期内文章数据列表 */
  list?: unknown[];
  /** 数据是否有延迟，is_delay=false表示数据是最新的 */
  is_delay?: boolean;
}

/** 获取图文阅读概况数据 —— 请求体。 */
export interface GetuserreadBody {
  /** 起始日期(YYYY-MM-DD) */
  begin_date: string;
  /** 结束日期(最大值为昨日) */
  end_date: string;
}
/** 获取图文阅读概况数据 —— 返回体。 */
export interface GetuserreadResp {
  /** 数据列表 */
  list?: unknown[];
}

/** 获取图文阅读分时数据 —— 请求体。 */
export interface GetuserreadhourBody {
  /** 起始日期(YYYY-MM-DD) */
  begin_date: string;
  /** 结束日期(最大值为昨日) */
  end_date: string;
}
/** 获取图文阅读分时数据 —— 返回体。 */
export interface GetuserreadhourResp {
  /** 数据列表 */
  list?: unknown[];
}

/** 获取图文转发概况数据 —— 请求体。 */
export interface GetusershareBody {
  /** 起始日期(YYYY-MM-DD) */
  begin_date: string;
  /** 结束日期(最大值为昨日) */
  end_date: string;
}
/** 获取图文转发概况数据 —— 返回体。 */
export interface GetusershareResp {
  /** 数据列表 */
  list?: unknown[];
}

/** 获取图文转发分时数据 —— 请求体。 */
export interface GetusersharehourBody {
  /** 起始日期(YYYY-MM-DD) */
  begin_date: string;
  /** 结束日期(最大值为昨日) */
  end_date: string;
}
/** 获取图文转发分时数据 —— 返回体。 */
export interface GetusersharehourResp {
  /** 数据列表 */
  list?: unknown[];
}

/** 获取累计用户数据 —— 请求体。 */
export interface GetusercumulateBody {
  /** 起始日期(格式yyyy-MM-dd) */
  begin_date: string;
  /** 结束日期(最大跨度7天) */
  end_date: string;
}
/** 获取累计用户数据 —— 返回体。 */
export interface GetusercumulateResp {
  /** 数据列表 */
  list?: Record<string, unknown>;
}

/** 获取用户增减数据 —— 请求体。 */
export interface GetusersummaryBody {
  /** 起始日期(格式yyyy-MM-dd) */
  begin_date: string;
  /** 结束日期(最大跨度7天) */
  end_date: string;
}
/** 获取用户增减数据 —— 返回体。 */
export interface GetusersummaryResp {
  /** 数据列表 */
  list?: unknown[];
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
  // ===== apimanage =====
  /** 重置指定API调用次数 @see https://developers.weixin.qq.com/doc/service/api/apimanage/api_clearapiquota.html */
  openapiQuotaClear: {
    method: 'POST',
    path: '/cgi-bin/openapi/quota/clear',
    title: '重置指定API调用次数',
    cat: 'apimanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/apimanage/api_clearapiquota.html',
  },
  /** 重置API调用次数 @see https://developers.weixin.qq.com/doc/service/api/apimanage/api_clearquota.html */
  clearQuota: {
    method: 'POST',
    path: '/cgi-bin/clear_quota',
    title: '重置API调用次数',
    cat: 'apimanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/apimanage/api_clearquota.html',
  },
  /** 使用AppSecret重置API调用次数 @see https://developers.weixin.qq.com/doc/service/api/apimanage/api_clearquotabyappsecret.html */
  clearQuotaV2: {
    method: 'POST',
    path: '/cgi-bin/clear_quota/v2',
    title: '使用AppSecret重置API调用次数',
    cat: 'apimanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/apimanage/api_clearquotabyappsecret.html',
  },
  /** 查询API调用额度 @see https://developers.weixin.qq.com/doc/service/api/apimanage/api_getapiquota.html */
  openapiQuotaGet: {
    method: 'POST',
    path: '/cgi-bin/openapi/quota/get',
    title: '查询API调用额度',
    cat: 'apimanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/apimanage/api_getapiquota.html',
  },
  /** 查询rid信息 @see https://developers.weixin.qq.com/doc/service/api/apimanage/api_getridinfo.html */
  openapiRidGet: {
    method: 'POST',
    path: '/cgi-bin/openapi/rid/get',
    title: '查询rid信息',
    cat: 'apimanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/apimanage/api_getridinfo.html',
  },
  // ===== base =====
  /** 网络通信检测 @see https://developers.weixin.qq.com/doc/service/api/base/api_callbackcheck.html */
  callbackCheck: {
    method: 'POST',
    path: '/cgi-bin/callback/check',
    title: '网络通信检测',
    cat: 'base',
    doc: 'https://developers.weixin.qq.com/doc/service/api/base/api_callbackcheck.html',
  },
  /** 获取接口调用凭据 @see https://developers.weixin.qq.com/doc/service/api/base/api_getaccesstoken.html */
  token: {
    method: 'GET',
    path: '/cgi-bin/token',
    title: '获取接口调用凭据',
    cat: 'base',
    doc: 'https://developers.weixin.qq.com/doc/service/api/base/api_getaccesstoken.html',
  },
  /** 获取微信API服务器IP @see https://developers.weixin.qq.com/doc/service/api/base/api_getapidomainip.html */
  getApiDomainIp: {
    method: 'GET',
    path: '/cgi-bin/get_api_domain_ip',
    title: '获取微信API服务器IP',
    cat: 'base',
    doc: 'https://developers.weixin.qq.com/doc/service/api/base/api_getapidomainip.html',
  },
  /** 获取微信推送服务器IP @see https://developers.weixin.qq.com/doc/service/api/base/api_getcallbackip.html */
  getcallbackip: {
    method: 'GET',
    path: '/cgi-bin/getcallbackip',
    title: '获取微信推送服务器IP',
    cat: 'base',
    doc: 'https://developers.weixin.qq.com/doc/service/api/base/api_getcallbackip.html',
  },
  /** 获取稳定版接口调用凭据 @see https://developers.weixin.qq.com/doc/service/api/base/api_getstableaccesstoken.html */
  stableToken: {
    method: 'POST',
    path: '/cgi-bin/stable_token',
    title: '获取稳定版接口调用凭据',
    cat: 'base',
    doc: 'https://developers.weixin.qq.com/doc/service/api/base/api_getstableaccesstoken.html',
  },
  // ===== customer =====
  /** 获取聊天记录 @see https://developers.weixin.qq.com/doc/service/api/customer/message/api_getmsglist.html */
  customserviceMsgrecordGetmsglist: {
    method: 'POST',
    path: '/customservice/msgrecord/getmsglist',
    title: '获取聊天记录',
    cat: 'customer',
    doc: 'https://developers.weixin.qq.com/doc/service/api/customer/message/api_getmsglist.html',
  },
  /** 发送客服消息 @see https://developers.weixin.qq.com/doc/service/api/customer/message/api_sendcustommessage.html */
  messageCustomSend: {
    method: 'POST',
    path: '/cgi-bin/message/custom/send',
    title: '发送客服消息',
    cat: 'customer',
    doc: 'https://developers.weixin.qq.com/doc/service/api/customer/message/api_sendcustommessage.html',
  },
  /** 客服输入状态 @see https://developers.weixin.qq.com/doc/service/api/customer/message/api_typing.html */
  messageCustomTyping: {
    method: 'POST',
    path: '/cgi-bin/message/custom/typing',
    title: '客服输入状态',
    cat: 'customer',
    doc: 'https://developers.weixin.qq.com/doc/service/api/customer/message/api_typing.html',
  },
  /** 关闭会话 @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_closesession.html */
  customserviceKfsessionClose: {
    method: 'POST',
    path: '/customservice/kfsession/close',
    title: '关闭会话',
    cat: 'customer',
    doc: 'https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_closesession.html',
  },
  /** 创建会话 @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_createkfsession.html */
  customserviceKfsessionCreate: {
    method: 'POST',
    path: '/customservice/kfsession/create',
    title: '创建会话',
    cat: 'customer',
    doc: 'https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_createkfsession.html',
  },
  /** 获取客户会话状态 @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsession.html */
  customserviceKfsessionGetsession: {
    method: 'GET',
    path: '/customservice/kfsession/getsession',
    title: '获取客户会话状态',
    cat: 'customer',
    doc: 'https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsession.html',
  },
  /** 获取客服会话列表 @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsessionlist.html */
  customserviceKfsessionGetsessionlist: {
    method: 'GET',
    path: '/customservice/kfsession/getsessionlist',
    title: '获取客服会话列表',
    cat: 'customer',
    doc: 'https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsessionlist.html',
  },
  /** 获取未接入会话列表 @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getwaitcase.html */
  customserviceKfsessionGetwaitcase: {
    method: 'GET',
    path: '/customservice/kfsession/getwaitcase',
    title: '获取未接入会话列表',
    cat: 'customer',
    doc: 'https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getwaitcase.html',
  },
  /** 添加客服账号 @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_addkfaccount.html */
  customserviceKfaccountAdd: {
    method: 'POST',
    path: '/customservice/kfaccount/add',
    title: '添加客服账号',
    cat: 'customer',
    doc: 'https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_addkfaccount.html',
  },
  /** 删除客服账号 @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_delkfaccount.html */
  customserviceKfaccountDel: {
    method: 'POST',
    path: '/customservice/kfaccount/del',
    title: '删除客服账号',
    cat: 'customer',
    doc: 'https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_delkfaccount.html',
  },
  /** 获取所有客服账号 @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getkflist.html */
  customserviceGetkflist: {
    method: 'GET',
    path: '/cgi-bin/customservice/getkflist',
    title: '获取所有客服账号',
    cat: 'customer',
    doc: 'https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getkflist.html',
  },
  /** 获取在线客服列表 @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getonlinekflist.html */
  customserviceGetonlinekflist: {
    method: 'GET',
    path: '/cgi-bin/customservice/getonlinekflist',
    title: '获取在线客服列表',
    cat: 'customer',
    doc: 'https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getonlinekflist.html',
  },
  /** 邀请绑定客服账号 @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_invitekfworker.html */
  customserviceKfaccountInviteworker: {
    method: 'POST',
    path: '/customservice/kfaccount/inviteworker',
    title: '邀请绑定客服账号',
    cat: 'customer',
    doc: 'https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_invitekfworker.html',
  },
  /** 修改客服账号 @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_updatekfaccount.html */
  customserviceKfaccountUpdate: {
    method: 'POST',
    path: '/customservice/kfaccount/update',
    title: '修改客服账号',
    cat: 'customer',
    doc: 'https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_updatekfaccount.html',
  },
  /** 设置客服头像 @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_uploadkfheadimg.html */
  customserviceKfaccountUploadheadimg: {
    method: 'POST',
    path: '/customservice/kfaccount/uploadheadimg',
    title: '设置客服头像',
    cat: 'customer',
    doc: 'https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_uploadkfheadimg.html',
  },
  // ===== custommenu =====
  /** 创建个性化菜单 @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_addconditionalmenu.html */
  menuAddconditional: {
    method: 'POST',
    path: '/cgi-bin/menu/addconditional',
    title: '创建个性化菜单',
    cat: 'custommenu',
    doc: 'https://developers.weixin.qq.com/doc/service/api/custommenu/api_addconditionalmenu.html',
  },
  /** 创建自定义菜单 @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_createcustommenu.html */
  menuCreate: {
    method: 'POST',
    path: '/cgi-bin/menu/create',
    title: '创建自定义菜单',
    cat: 'custommenu',
    doc: 'https://developers.weixin.qq.com/doc/service/api/custommenu/api_createcustommenu.html',
  },
  /** 删除个性化菜单 @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_deleteconditionalmenu.html */
  menuDelconditional: {
    method: 'POST',
    path: '/cgi-bin/menu/delconditional',
    title: '删除个性化菜单',
    cat: 'custommenu',
    doc: 'https://developers.weixin.qq.com/doc/service/api/custommenu/api_deleteconditionalmenu.html',
  },
  /** 删除自定义菜单 @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_deletemenu.html */
  menuDelete: {
    method: 'GET',
    path: '/cgi-bin/menu/delete',
    title: '删除自定义菜单',
    cat: 'custommenu',
    doc: 'https://developers.weixin.qq.com/doc/service/api/custommenu/api_deletemenu.html',
  },
  /** 查询自定义菜单信息 @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_getcurrentselfmenuinfo.html */
  getCurrentSelfmenuInfo: {
    method: 'GET',
    path: '/cgi-bin/get_current_selfmenu_info',
    title: '查询自定义菜单信息',
    cat: 'custommenu',
    doc: 'https://developers.weixin.qq.com/doc/service/api/custommenu/api_getcurrentselfmenuinfo.html',
  },
  /** 获取自定义菜单配置 @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_getmenu.html */
  menuGet: {
    method: 'GET',
    path: '/cgi-bin/menu/get',
    title: '获取自定义菜单配置',
    cat: 'custommenu',
    doc: 'https://developers.weixin.qq.com/doc/service/api/custommenu/api_getmenu.html',
  },
  /** 测试个性化菜单匹配结果 @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_trymatchmenu.html */
  menuTrymatch: {
    method: 'POST',
    path: '/cgi-bin/menu/trymatch',
    title: '测试个性化菜单匹配结果',
    cat: 'custommenu',
    doc: 'https://developers.weixin.qq.com/doc/service/api/custommenu/api_trymatchmenu.html',
  },
  // ===== draftbox =====
  /** 新增草稿 @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_add.html */
  draftAdd: {
    method: 'POST',
    path: '/cgi-bin/draft/add',
    title: '新增草稿',
    cat: 'draftbox',
    doc: 'https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_add.html',
  },
  /** 获取草稿列表 @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_batchget.html */
  draftBatchget: {
    method: 'POST',
    path: '/cgi-bin/draft/batchget',
    title: '获取草稿列表',
    cat: 'draftbox',
    doc: 'https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_batchget.html',
  },
  /** 获取草稿的总数 @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_count.html */
  draftCount: {
    method: 'GET',
    path: '/cgi-bin/draft/count',
    title: '获取草稿的总数',
    cat: 'draftbox',
    doc: 'https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_count.html',
  },
  /** 删除草稿 @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_delete.html */
  draftDelete: {
    method: 'POST',
    path: '/cgi-bin/draft/delete',
    title: '删除草稿',
    cat: 'draftbox',
    doc: 'https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_delete.html',
  },
  /** 草稿箱开关设置 @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_switch.html */
  draftSwitch: {
    method: 'POST',
    path: '/cgi-bin/draft/switch',
    title: '草稿箱开关设置',
    cat: 'draftbox',
    doc: 'https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_switch.html',
  },
  /** 更新草稿 @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_update.html */
  draftUpdate: {
    method: 'POST',
    path: '/cgi-bin/draft/update',
    title: '更新草稿',
    cat: 'draftbox',
    doc: 'https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_update.html',
  },
  /** 获取草稿详情 @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_getdraft.html */
  draftGet: {
    method: 'POST',
    path: '/cgi-bin/draft/get',
    title: '获取草稿详情',
    cat: 'draftbox',
    doc: 'https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_getdraft.html',
  },
  /** 获取商品卡片的DOM结构 @see https://developers.weixin.qq.com/doc/service/api/draftbox/shop/api_ecsgetproductcardinfo.html */
  ecServiceProductGetcardinfo: {
    method: 'POST',
    path: '/channels/ec/service/product/getcardinfo',
    title: '获取商品卡片的DOM结构',
    cat: 'draftbox',
    doc: 'https://developers.weixin.qq.com/doc/service/api/draftbox/shop/api_ecsgetproductcardinfo.html',
  },
  // ===== invoice =====
  /** 获取sdk临时票据 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_getticket.html */
  ticketGetticket: {
    method: 'GET',
    path: '/cgi-bin/ticket/getticket',
    title: '获取sdk临时票据',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_getticket.html',
  },
  /** 查询授权信息 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_invoicebizgetauthdata.html */
  invoiceGetauthdata: {
    method: 'POST',
    path: '/card/invoice/getauthdata',
    title: '查询授权信息',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_invoicebizgetauthdata.html',
  },
  /** 拒绝开票 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_invoicebizrejectinsert.html */
  invoiceRejectinsert: {
    method: 'POST',
    path: '/card/invoice/rejectinsert',
    title: '拒绝开票',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_invoicebizrejectinsert.html',
  },
  /** 更新发票卡券状态 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_invoicekpupdatainvoicestatus.html */
  invoicePlatformUpdatestatus: {
    method: 'POST',
    path: '/card/invoice/platform/updatestatus',
    title: '更新发票卡券状态',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_invoicekpupdatainvoicestatus.html',
  },
  /** 查询已上传的PDF文件 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_invoiceplatformgetpdf.html */
  invoicePlatformGetpdf: {
    method: 'POST',
    path: '/card/invoice/platform/getpdf',
    title: '查询已上传的PDF文件',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_invoiceplatformgetpdf.html',
  },
  /** 上传发票PDF @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_invoiceplatformsetpdf.html */
  invoicePlatformSetpdf: {
    method: 'POST',
    path: '/card/invoice/platform/setpdf',
    title: '上传发票PDF',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_invoiceplatformsetpdf.html',
  },
  /** 创建财政电子票据模板 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_notaxinvoicecreatecard.html */
  nontaxCreatebillcard: {
    method: 'POST',
    path: '/nontax/createbillcard',
    title: '创建财政电子票据模板',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_notaxinvoicecreatecard.html',
  },
  /** 获取授权页链接 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_notaxinvoicegetauthurl.html */
  nontaxGetbillauthurl: {
    method: 'POST',
    path: '/nontax/getbillauthurl',
    title: '获取授权页链接',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_notaxinvoicegetauthurl.html',
  },
  /** 票据插入用户卡包 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_notaxinvoiceinsert.html */
  nontaxInsertbill: {
    method: 'POST',
    path: '/nontax/insertbill',
    title: '票据插入用户卡包',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_notaxinvoiceinsert.html',
  },
  /** 获取开票平台识别码 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_setinvoiceurl.html */
  invoiceSeturl: {
    method: 'POST',
    path: '/card/invoice/seturl',
    title: '获取开票平台识别码',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_setinvoiceurl.html',
  },
  /** 获取授权页链接 @see https://developers.weixin.qq.com/doc/service/api/invoice/auth/api_invoicebizgetauthurl.html */
  invoiceGetauthurl: {
    method: 'POST',
    path: '/card/invoice/getauthurl',
    title: '获取授权页链接',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/auth/api_invoicebizgetauthurl.html',
  },
  /** 查询与设置授权页与商户信息 @see https://developers.weixin.qq.com/doc/service/api/invoice/auth/api_invoicebizsetattr.html */
  invoiceSetbizattr: {
    method: 'POST',
    path: '/card/invoice/setbizattr',
    title: '查询与设置授权页与商户信息',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/auth/api_invoicebizsetattr.html',
  },
  /** 获取商户专属抬头链接 @see https://developers.weixin.qq.com/doc/service/api/invoice/name/api_invoicebizgetselecttitleurl.html */
  invoiceBizGetselecttitleurl: {
    method: 'POST',
    path: '/card/invoice/biz/getselecttitleurl',
    title: '获取商户专属抬头链接',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/name/api_invoicebizgetselecttitleurl.html',
  },
  /** 录入抬头到用户微信 @see https://developers.weixin.qq.com/doc/service/api/invoice/name/api_invoicebizgetusertitleurl.html */
  invoiceBizGetusertitleurl: {
    method: 'POST',
    path: '/card/invoice/biz/getusertitleurl',
    title: '录入抬头到用户微信',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/name/api_invoicebizgetusertitleurl.html',
  },
  /** 解析扫描的抬头二维码 @see https://developers.weixin.qq.com/doc/service/api/invoice/name/api_invoicescantitle.html */
  invoiceScantitle: {
    method: 'POST',
    path: '/card/invoice/scantitle',
    title: '解析扫描的抬头二维码',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/name/api_invoicescantitle.html',
  },
  /** 将电子发票卡券插入用户卡包 @see https://developers.weixin.qq.com/doc/service/api/invoice/platform/api_insertinvoice.html */
  invoiceInsert: {
    method: 'POST',
    path: '/card/invoice/insert',
    title: '将电子发票卡券插入用户卡包',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/platform/api_insertinvoice.html',
  },
  /** 创建发票卡券模板 @see https://developers.weixin.qq.com/doc/service/api/invoice/platform/api_invoiceplatformcreatecard.html */
  invoicePlatformCreatecard: {
    method: 'POST',
    path: '/card/invoice/platform/createcard',
    title: '创建发票卡券模板',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/platform/api_invoiceplatformcreatecard.html',
  },
  /** 查询报销发票信息 @see https://developers.weixin.qq.com/doc/service/api/invoice/reimbursement/api_invoicebxgetinvoice.html */
  invoiceReimburseGetinvoiceinfo: {
    method: 'POST',
    path: '/card/invoice/reimburse/getinvoiceinfo',
    title: '查询报销发票信息',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/reimbursement/api_invoicebxgetinvoice.html',
  },
  /** 更新报销发票状态 @see https://developers.weixin.qq.com/doc/service/api/invoice/reimbursement/api_invoicebxupdatainvoicestatus.html */
  invoiceReimburseUpdateinvoicestatus: {
    method: 'POST',
    path: '/card/invoice/reimburse/updateinvoicestatus',
    title: '更新报销发票状态',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/reimbursement/api_invoicebxupdatainvoicestatus.html',
  },
  /** 批量获取报销发票信息 @see https://developers.weixin.qq.com/doc/service/api/invoice/reimbursement/api_invoicereimbursegetinvoicebatch.html */
  invoiceReimburseGetinvoicebatch: {
    method: 'POST',
    path: '/card/invoice/reimburse/getinvoicebatch',
    title: '批量获取报销发票信息',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/reimbursement/api_invoicereimbursegetinvoicebatch.html',
  },
  /** 批量更新报销发票状态 @see https://developers.weixin.qq.com/doc/service/api/invoice/reimbursement/api_invoicereimburseupdatestatusbatch.html */
  invoiceReimburseUpdatestatusbatch: {
    method: 'POST',
    path: '/card/invoice/reimburse/updatestatusbatch',
    title: '批量更新报销发票状态',
    cat: 'invoice',
    doc: 'https://developers.weixin.qq.com/doc/service/api/invoice/reimbursement/api_invoicereimburseupdatestatusbatch.html',
  },
  // ===== leaving =====
  /** 关闭已群发文章评论 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_closecomment.html */
  commentClose: {
    method: 'POST',
    path: '/cgi-bin/comment/close',
    title: '关闭已群发文章评论',
    cat: 'leaving',
    doc: 'https://developers.weixin.qq.com/doc/service/api/leaving/api_closecomment.html',
  },
  /** 删除评论 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_delcomment.html */
  commentDelete: {
    method: 'POST',
    path: '/cgi-bin/comment/delete',
    title: '删除评论',
    cat: 'leaving',
    doc: 'https://developers.weixin.qq.com/doc/service/api/leaving/api_delcomment.html',
  },
  /** 删除回复 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_delreplycomment.html */
  commentReplyDelete: {
    method: 'POST',
    path: '/cgi-bin/comment/reply/delete',
    title: '删除回复',
    cat: 'leaving',
    doc: 'https://developers.weixin.qq.com/doc/service/api/leaving/api_delreplycomment.html',
  },
  /** 评论标记精选 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_electcomment.html */
  commentMarkelect: {
    method: 'POST',
    path: '/cgi-bin/comment/markelect',
    title: '评论标记精选',
    cat: 'leaving',
    doc: 'https://developers.weixin.qq.com/doc/service/api/leaving/api_electcomment.html',
  },
  /** 查看指定文章的评论数据 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_listcomment.html */
  commentList: {
    method: 'POST',
    path: '/cgi-bin/comment/list',
    title: '查看指定文章的评论数据',
    cat: 'leaving',
    doc: 'https://developers.weixin.qq.com/doc/service/api/leaving/api_listcomment.html',
  },
  /** 打开已群发文章评论 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_openarticlecomment.html */
  commentOpen: {
    method: 'POST',
    path: '/cgi-bin/comment/open',
    title: '打开已群发文章评论',
    cat: 'leaving',
    doc: 'https://developers.weixin.qq.com/doc/service/api/leaving/api_openarticlecomment.html',
  },
  /** 回复评论 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_replycomment.html */
  commentReplyAdd: {
    method: 'POST',
    path: '/cgi-bin/comment/reply/add',
    title: '回复评论',
    cat: 'leaving',
    doc: 'https://developers.weixin.qq.com/doc/service/api/leaving/api_replycomment.html',
  },
  /** 评论取消精选 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_unelectcomment.html */
  commentUnmarkelect: {
    method: 'POST',
    path: '/cgi-bin/comment/unmarkelect',
    title: '评论取消精选',
    cat: 'leaving',
    doc: 'https://developers.weixin.qq.com/doc/service/api/leaving/api_unelectcomment.html',
  },
  // ===== material =====
  /** 上传永久素材 @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_addmaterial.html */
  materialAddMaterial: {
    method: 'POST',
    path: '/cgi-bin/material/add_material',
    title: '上传永久素材',
    cat: 'material',
    doc: 'https://developers.weixin.qq.com/doc/service/api/material/permanent/api_addmaterial.html',
  },
  /** 获取永久素材列表 @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_batchgetmaterial.html */
  materialBatchgetMaterial: {
    method: 'POST',
    path: '/cgi-bin/material/batchget_material',
    title: '获取永久素材列表',
    cat: 'material',
    doc: 'https://developers.weixin.qq.com/doc/service/api/material/permanent/api_batchgetmaterial.html',
  },
  /** 删除永久素材 @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_delmaterial.html */
  materialDelMaterial: {
    method: 'POST',
    path: '/cgi-bin/material/del_material',
    title: '删除永久素材',
    cat: 'material',
    doc: 'https://developers.weixin.qq.com/doc/service/api/material/permanent/api_delmaterial.html',
  },
  /** 获取永久素材 @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterial.html */
  materialGetMaterial: {
    method: 'POST',
    path: '/cgi-bin/material/get_material',
    title: '获取永久素材',
    cat: 'material',
    doc: 'https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterial.html',
  },
  /** 获取永久素材总数 @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterialcount.html */
  materialGetMaterialcount: {
    method: 'GET',
    path: '/cgi-bin/material/get_materialcount',
    title: '获取永久素材总数',
    cat: 'material',
    doc: 'https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterialcount.html',
  },
  /** 上传发表内容中的图片 @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_uploadimage.html */
  mediaUploadimg: {
    method: 'POST',
    path: '/cgi-bin/media/uploadimg',
    title: '上传发表内容中的图片',
    cat: 'material',
    doc: 'https://developers.weixin.qq.com/doc/service/api/material/permanent/api_uploadimage.html',
  },
  /** 获取高清语音素材 @see https://developers.weixin.qq.com/doc/service/api/material/temporary/api_gethdvoice.html */
  mediaGetJssdk: {
    method: 'GET',
    path: '/cgi-bin/media/get/jssdk',
    title: '获取高清语音素材',
    cat: 'material',
    doc: 'https://developers.weixin.qq.com/doc/service/api/material/temporary/api_gethdvoice.html',
  },
  /** 获取临时素材 @see https://developers.weixin.qq.com/doc/service/api/material/temporary/api_getmedia.html */
  mediaGet: {
    method: 'GET',
    path: '/cgi-bin/media/get',
    title: '获取临时素材',
    cat: 'material',
    doc: 'https://developers.weixin.qq.com/doc/service/api/material/temporary/api_getmedia.html',
  },
  /** 新增临时素材 @see https://developers.weixin.qq.com/doc/service/api/material/temporary/api_uploadtempmedia.html */
  mediaUpload: {
    method: 'POST',
    path: '/cgi-bin/media/upload',
    title: '新增临时素材',
    cat: 'material',
    doc: 'https://developers.weixin.qq.com/doc/service/api/material/temporary/api_uploadtempmedia.html',
  },
  // ===== medicalassistant =====
  /** 消息推送接口 @see https://developers.weixin.qq.com/doc/service/api/medicalassistant/api_cityservice_sendchannelmsg.html */
  cityserviceSendchannelmsg: {
    method: 'POST',
    path: '/cityservice/sendchannelmsg',
    title: '消息推送接口',
    cat: 'medicalassistant',
    doc: 'https://developers.weixin.qq.com/doc/service/api/medicalassistant/api_cityservice_sendchannelmsg.html',
  },
  // ===== nontaxpay =====
  /** 下载缴费对帐单 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxdownloadbill.html */
  nontaxDownloadbill: {
    method: 'POST',
    path: '/nontax/downloadbill',
    title: '下载缴费对帐单',
    cat: 'nontaxpay',
    doc: 'https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxdownloadbill.html',
  },
  /** 获取缴费订单详情 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxgetorder.html */
  nontaxGetorder: {
    method: 'POST',
    path: '/nontax/getorder',
    title: '获取缴费订单详情',
    cat: 'nontaxpay',
    doc: 'https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxgetorder.html',
  },
  /** 获取缴费订单列表 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxgetorderlist.html */
  nontaxGetorderlist: {
    method: 'POST',
    path: '/nontax/getorderlist',
    title: '获取缴费订单列表',
    cat: 'nontaxpay',
    doc: 'https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxgetorderlist.html',
  },
  /** 提交刷卡支付 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxmicropay.html */
  nontaxMicropay: {
    method: 'POST',
    path: '/nontax/micropay',
    title: '提交刷卡支付',
    cat: 'nontaxpay',
    doc: 'https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxmicropay.html',
  },
  /** 模拟支付结果通知 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxmocknotification.html */
  nontaxMocknotification: {
    method: 'POST',
    path: '/nontax/mocknotification',
    title: '模拟支付结果通知',
    cat: 'nontaxpay',
    doc: 'https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxmocknotification.html',
  },
  /** 模拟查询应收信息 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxmockqueryfee.html */
  nontaxMockqueryfee: {
    method: 'POST',
    path: '/nontax/mockqueryfee',
    title: '模拟查询应收信息',
    cat: 'nontaxpay',
    doc: 'https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxmockqueryfee.html',
  },
  /** 通知不一致订单 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxnotifyinconsistentorder.html */
  nontaxNotifyinconsistentorder: {
    method: 'POST',
    path: '/nontax/notifyinconsistentorder',
    title: '通知不一致订单',
    cat: 'nontaxpay',
    doc: 'https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxnotifyinconsistentorder.html',
  },
  /** 查询应收信息 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxqueryfee.html */
  nontaxQueryfee: {
    method: 'POST',
    path: '/nontax/queryfee',
    title: '查询应收信息',
    cat: 'nontaxpay',
    doc: 'https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxqueryfee.html',
  },
  /** 缴费订单退款 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxrefund.html */
  nontaxRefund: {
    method: 'POST',
    path: '/nontax/refund',
    title: '缴费订单退款',
    cat: 'nontaxpay',
    doc: 'https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxrefund.html',
  },
  /** 缴费支付下单 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxunifiedorder.html */
  nontaxUnifiedorder: {
    method: 'POST',
    path: '/nontax/unifiedorder',
    title: '缴费支付下单',
    cat: 'nontaxpay',
    doc: 'https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxunifiedorder.html',
  },
  // ===== notify =====
  /** 获取自动回复规则 @see https://developers.weixin.qq.com/doc/service/api/notify/autoreplies/api_getcurrentautoreplyinfo.html */
  getCurrentAutoreplyInfo: {
    method: 'GET',
    path: '/cgi-bin/get_current_autoreply_info',
    title: '获取自动回复规则',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/autoreplies/api_getcurrentautoreplyinfo.html',
  },
  /** 删除群发消息 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_deletemassmsg.html */
  messageMassDelete: {
    method: 'POST',
    path: '/cgi-bin/message/mass/delete',
    title: '删除群发消息',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/message/api_deletemassmsg.html',
  },
  /** 获取群发速度 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_getspeed.html */
  messageMassSpeedGet: {
    method: 'POST',
    path: '/cgi-bin/message/mass/speed/get',
    title: '获取群发速度',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/message/api_getspeed.html',
  },
  /** 查询群发消息发送状态 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_massmsgget.html */
  messageMassGet: {
    method: 'POST',
    path: '/cgi-bin/message/mass/get',
    title: '查询群发消息发送状态',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/message/api_massmsgget.html',
  },
  /** 根据OpenID群发消息 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_masssend.html */
  messageMassSend: {
    method: 'POST',
    path: '/cgi-bin/message/mass/send',
    title: '根据OpenID群发消息',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/message/api_masssend.html',
  },
  /** 预览消息 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_preview.html */
  messageMassPreview: {
    method: 'POST',
    path: '/cgi-bin/message/mass/preview',
    title: '预览消息',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/message/api_preview.html',
  },
  /** 根据标签群发消息 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_sendall.html */
  messageMassSendall: {
    method: 'POST',
    path: '/cgi-bin/message/mass/sendall',
    title: '根据标签群发消息',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/message/api_sendall.html',
  },
  /** 设置群发速度 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_setspeed.html */
  messageMassSpeedSet: {
    method: 'POST',
    path: '/cgi-bin/message/mass/speed/set',
    title: '设置群发速度',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/message/api_setspeed.html',
  },
  /** 上传图文消息素材 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_uploadnewsmsg.html */
  mediaUploadnews: {
    method: 'POST',
    path: '/cgi-bin/media/uploadnews',
    title: '上传图文消息素材',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/message/api_uploadnewsmsg.html',
  },
  /** 选用模板 @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_addwxanewtemplate.html */
  newtmplAddtemplate: {
    method: 'POST',
    path: '/wxaapi/newtmpl/addtemplate',
    title: '选用模板',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/notify/api_addwxanewtemplate.html',
  },
  /** 删除模板 @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_delwxanewtemplate.html */
  newtmplDeltemplate: {
    method: 'POST',
    path: '/wxaapi/newtmpl/deltemplate',
    title: '删除模板',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/notify/api_delwxanewtemplate.html',
  },
  /** 获取类目 @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getcategory.html */
  newtmplGetcategory: {
    method: 'GET',
    path: '/wxaapi/newtmpl/getcategory',
    title: '获取类目',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getcategory.html',
  },
  /** 获取模板中的关键词 @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatekeywords.html */
  newtmplGetpubtemplatekeywords: {
    method: 'GET',
    path: '/wxaapi/newtmpl/getpubtemplatekeywords',
    title: '获取模板中的关键词',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatekeywords.html',
  },
  /** 获取类目下的公共模板 @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatetitles.html */
  newtmplGetpubtemplatetitles: {
    method: 'GET',
    path: '/wxaapi/newtmpl/getpubtemplatetitles',
    title: '获取类目下的公共模板',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatetitles.html',
  },
  /** 获取已有模板列表 @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getwxapubnewtemplate.html */
  newtmplGettemplate: {
    method: 'GET',
    path: '/wxaapi/newtmpl/gettemplate',
    title: '获取已有模板列表',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getwxapubnewtemplate.html',
  },
  /** 发送订阅通知 @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_sendnewsubscribemsg.html */
  messageSubscribeBizsend: {
    method: 'POST',
    path: '/cgi-bin/message/subscribe/bizsend',
    title: '发送订阅通知',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/notify/api_sendnewsubscribemsg.html',
  },
  /** 发送一次性订阅消息 @see https://developers.weixin.qq.com/doc/service/api/notify/subscribe/api_templatesubscribe.html */
  messageTemplateSubscribe: {
    method: 'POST',
    path: '/cgi-bin/message/template/subscribe',
    title: '发送一次性订阅消息',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/subscribe/api_templatesubscribe.html',
  },
  /** 选用模板 @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_addtemplate.html */
  templateApiAddTemplate: {
    method: 'POST',
    path: '/cgi-bin/template/api_add_template',
    title: '选用模板',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/template/api_addtemplate.html',
  },
  /** 删除模板 @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_deletetemplate.html */
  templateDelPrivateTemplate: {
    method: 'POST',
    path: '/cgi-bin/template/del_private_template',
    title: '删除模板',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/template/api_deletetemplate.html',
  },
  /** 获取已选用模板列表 @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_getalltemplates.html */
  templateGetAllPrivateTemplate: {
    method: 'GET',
    path: '/cgi-bin/template/get_all_private_template',
    title: '获取已选用模板列表',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/template/api_getalltemplates.html',
  },
  /** 获取行业信息 @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_getindustry.html */
  templateGetIndustry: {
    method: 'GET',
    path: '/cgi-bin/template/get_industry',
    title: '获取行业信息',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/template/api_getindustry.html',
  },
  /** 查询拦截的模板消息 @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_queryblocktmplmsg.html */
  queryblocktmplmsg: {
    method: 'POST',
    path: '/wxa/sec/queryblocktmplmsg',
    title: '查询拦截的模板消息',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/template/api_queryblocktmplmsg.html',
  },
  /** 发送模板消息 @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_sendtemplatemessage.html */
  messageTemplateSend: {
    method: 'POST',
    path: '/cgi-bin/message/template/send',
    title: '发送模板消息',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/template/api_sendtemplatemessage.html',
  },
  /** 设置所属行业 @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_setindustry.html */
  templateApiSetIndustry: {
    method: 'POST',
    path: '/cgi-bin/template/api_set_industry',
    title: '设置所属行业',
    cat: 'notify',
    doc: 'https://developers.weixin.qq.com/doc/service/api/notify/template/api_setindustry.html',
  },
  // ===== onecode =====
  /** 申请二维码接口 @see https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_applycode.html */
  marketcodeApplycode: {
    method: 'POST',
    path: '/intp/marketcode/applycode',
    title: '申请二维码接口',
    cat: 'onecode',
    doc: 'https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_applycode.html',
  },
  /** 下载二维码包接口 @see https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_applycodedownload.html */
  marketcodeApplycodedownload: {
    method: 'POST',
    path: '/intp/marketcode/applycodedownload',
    title: '下载二维码包接口',
    cat: 'onecode',
    doc: 'https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_applycodedownload.html',
  },
  /** 查询二维码申请单接口 @see https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_applycodequery.html */
  marketcodeApplycodequery: {
    method: 'POST',
    path: '/intp/marketcode/applycodequery',
    title: '查询二维码申请单接口',
    cat: 'onecode',
    doc: 'https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_applycodequery.html',
  },
  /** 激活二维码接口 @see https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_codeactive.html */
  marketcodeCodeactive: {
    method: 'POST',
    path: '/intp/marketcode/codeactive',
    title: '激活二维码接口',
    cat: 'onecode',
    doc: 'https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_codeactive.html',
  },
  /** 查询二维码激活状态接口 @see https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_codeactivequery.html */
  marketcodeCodeactivequery: {
    method: 'POST',
    path: '/intp/marketcode/codeactivequery',
    title: '查询二维码激活状态接口',
    cat: 'onecode',
    doc: 'https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_codeactivequery.html',
  },
  /** CODE_TICKET换CODE接口 @see https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_tickettocode.html */
  marketcodeTickettocode: {
    method: 'POST',
    path: '/intp/marketcode/tickettocode',
    title: 'CODE_TICKET换CODE接口',
    cat: 'onecode',
    doc: 'https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_tickettocode.html',
  },
  // ===== openpoc =====
  /** 上传语音文件 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_addvoicetorecofortext.html */
  mediaVoiceAddvoicetorecofortext: {
    method: 'POST',
    path: '/cgi-bin/media/voice/addvoicetorecofortext',
    title: '上传语音文件',
    cat: 'openpoc',
    doc: 'https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_addvoicetorecofortext.html',
  },
  /** 获取语音识别结果 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_queryrecoresultfortext.html */
  mediaVoiceQueryrecoresultfortext: {
    method: 'POST',
    path: '/cgi-bin/media/voice/queryrecoresultfortext',
    title: '获取语音识别结果',
    cat: 'openpoc',
    doc: 'https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_queryrecoresultfortext.html',
  },
  /** 微信翻译 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_translatecontent.html */
  mediaVoiceTranslatecontent: {
    method: 'POST',
    path: '/cgi-bin/media/voice/translatecontent',
    title: '微信翻译',
    cat: 'openpoc',
    doc: 'https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_translatecontent.html',
  },
  /** 图片智能裁剪 @see https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgaicrop.html */
  cvImgAicrop: {
    method: 'POST',
    path: '/cv/img/aicrop',
    title: '图片智能裁剪',
    cat: 'openpoc',
    doc: 'https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgaicrop.html',
  },
  /** 二维码/条码识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgqrcode.html */
  cvImgQrcode: {
    method: 'POST',
    path: '/cv/img/qrcode',
    title: '二维码/条码识别',
    cat: 'openpoc',
    doc: 'https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgqrcode.html',
  },
  /** 银行卡识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bankcardocr.html */
  cvOcrBankcard: {
    method: 'POST',
    path: '/cv/ocr/bankcard',
    title: '银行卡识别',
    cat: 'openpoc',
    doc: 'https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bankcardocr.html',
  },
  /** 营业执照识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bizlicenseocr.html */
  cvOcrBizlicense: {
    method: 'POST',
    path: '/cv/ocr/bizlicense',
    title: '营业执照识别',
    cat: 'openpoc',
    doc: 'https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bizlicenseocr.html',
  },
  /** 通用印刷体识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_commocr.html */
  cvOcrComm: {
    method: 'POST',
    path: '/cv/ocr/comm',
    title: '通用印刷体识别',
    cat: 'openpoc',
    doc: 'https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_commocr.html',
  },
  /** 驾驶证识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivinglicenseocr.html */
  cvOcrDrivinglicense: {
    method: 'POST',
    path: '/cv/ocr/drivinglicense',
    title: '驾驶证识别',
    cat: 'openpoc',
    doc: 'https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivinglicenseocr.html',
  },
  /** 行驶证识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivingocr.html */
  cvOcrDriving: {
    method: 'POST',
    path: '/cv/ocr/driving',
    title: '行驶证识别',
    cat: 'openpoc',
    doc: 'https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivingocr.html',
  },
  /** 身份证识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_idcardocr.html */
  cvOcrIdcard: {
    method: 'POST',
    path: '/cv/ocr/idcard',
    title: '身份证识别',
    cat: 'openpoc',
    doc: 'https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_idcardocr.html',
  },
  /** 菜单识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_menuocr.html */
  cvOcrMenu: {
    method: 'POST',
    path: '/cv/ocr/menu',
    title: '菜单识别',
    cat: 'openpoc',
    doc: 'https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_menuocr.html',
  },
  // ===== public =====
  /** 获取已发布的消息列表 @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_batchget.html */
  freepublishBatchget: {
    method: 'POST',
    path: '/cgi-bin/freepublish/batchget',
    title: '获取已发布的消息列表',
    cat: 'public',
    doc: 'https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_batchget.html',
  },
  /** 发布状态查询 @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_get.html */
  freepublishGet: {
    method: 'POST',
    path: '/cgi-bin/freepublish/get',
    title: '发布状态查询',
    cat: 'public',
    doc: 'https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_get.html',
  },
  /** 发布草稿 @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_submit.html */
  freepublishSubmit: {
    method: 'POST',
    path: '/cgi-bin/freepublish/submit',
    title: '发布草稿',
    cat: 'public',
    doc: 'https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_submit.html',
  },
  /** 删除发布文章 @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublishdelete.html */
  freepublishDelete: {
    method: 'POST',
    path: '/cgi-bin/freepublish/delete',
    title: '删除发布文章',
    cat: 'public',
    doc: 'https://developers.weixin.qq.com/doc/service/api/public/api_freepublishdelete.html',
  },
  /** 获取已发布图文信息 @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublishgetarticle.html */
  freepublishGetarticle: {
    method: 'POST',
    path: '/cgi-bin/freepublish/getarticle',
    title: '获取已发布图文信息',
    cat: 'public',
    doc: 'https://developers.weixin.qq.com/doc/service/api/public/api_freepublishgetarticle.html',
  },
  // ===== qrcode =====
  /** 增加或修改二维码规则 @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpadd.html */
  wxopenQrcodejumpadd: {
    method: 'POST',
    path: '/cgi-bin/wxopen/qrcodejumpadd',
    title: '增加或修改二维码规则',
    cat: 'qrcode',
    doc: 'https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpadd.html',
  },
  /** 删除已设置的二维码规则 @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpdelete.html */
  wxopenQrcodejumpdelete: {
    method: 'POST',
    path: '/cgi-bin/wxopen/qrcodejumpdelete',
    title: '删除已设置的二维码规则',
    cat: 'qrcode',
    doc: 'https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpdelete.html',
  },
  /** 获取已设置的二维码规则 @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpget.html */
  wxopenQrcodejumpget: {
    method: 'POST',
    path: '/cgi-bin/wxopen/qrcodejumpget',
    title: '获取已设置的二维码规则',
    cat: 'qrcode',
    doc: 'https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpget.html',
  },
  /** 发布已设置的二维码规则 @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumppublish.html */
  wxopenQrcodejumppublish: {
    method: 'POST',
    path: '/cgi-bin/wxopen/qrcodejumppublish',
    title: '发布已设置的二维码规则',
    cat: 'qrcode',
    doc: 'https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumppublish.html',
  },
  /** 生成带参数的二维码 @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodes/api_createqrcode.html */
  qrcodeCreate: {
    method: 'POST',
    path: '/cgi-bin/qrcode/create',
    title: '生成带参数的二维码',
    cat: 'qrcode',
    doc: 'https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodes/api_createqrcode.html',
  },
  /** 短链转长信息 @see https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_fetchshorten.html */
  shortenFetch: {
    method: 'POST',
    path: '/cgi-bin/shorten/fetch',
    title: '短链转长信息',
    cat: 'qrcode',
    doc: 'https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_fetchshorten.html',
  },
  /** 长信息转短链 @see https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_genshortkey.html */
  shortenGen: {
    method: 'POST',
    path: '/cgi-bin/shorten/gen',
    title: '长信息转短链',
    cat: 'qrcode',
    doc: 'https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_genshortkey.html',
  },
  // ===== stores =====
  /** 新增门店 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_addentityshop.html */
  addStore: {
    method: 'POST',
    path: '/wxa/add_store',
    title: '新增门店',
    cat: 'stores',
    doc: 'https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_addentityshop.html',
  },
  /** 创建门店小程序 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_applywxastore.html */
  applyMerchant: {
    method: 'POST',
    path: '/wxa/apply_merchant',
    title: '创建门店小程序',
    cat: 'stores',
    doc: 'https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_applywxastore.html',
  },
  /** 在地图中创建门店 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_createnewpoid.html */
  createMapPoi: {
    method: 'POST',
    path: '/wxa/create_map_poi',
    title: '在地图中创建门店',
    cat: 'stores',
    doc: 'https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_createnewpoid.html',
  },
  /** 获取省市区信息 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_getdistrictlist.html */
  getDistrict: {
    method: 'GET',
    path: '/wxa/get_district',
    title: '获取省市区信息',
    cat: 'stores',
    doc: 'https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_getdistrictlist.html',
  },
  /** 获取门店小程序审核结果 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_getwxastoreauditinfo.html */
  getMerchantAuditInfo: {
    method: 'GET',
    path: '/wxa/get_merchant_audit_info',
    title: '获取门店小程序审核结果',
    cat: 'stores',
    doc: 'https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_getwxastoreauditinfo.html',
  },
  /** 拉取门店小程序类目 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_getwxastorecatelist.html */
  getMerchantCategory: {
    method: 'GET',
    path: '/wxa/get_merchant_category',
    title: '拉取门店小程序类目',
    cat: 'stores',
    doc: 'https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_getwxastorecatelist.html',
  },
  /** 修改门店小程序信息 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_modifywxastore.html */
  modifyMerchant: {
    method: 'POST',
    path: '/wxa/modify_merchant',
    title: '修改门店小程序信息',
    cat: 'stores',
    doc: 'https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_modifywxastore.html',
  },
  /** 删除门店 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_newdelpoi.html */
  delStore: {
    method: 'POST',
    path: '/wxa/del_store',
    title: '删除门店',
    cat: 'stores',
    doc: 'https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_newdelpoi.html',
  },
  /** 获取门店详情 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_newgetpoi.html */
  getStoreInfo: {
    method: 'POST',
    path: '/wxa/get_store_info',
    title: '获取门店详情',
    cat: 'stores',
    doc: 'https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_newgetpoi.html',
  },
  /** 获取门店列表 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_newgetpoilist.html */
  getStoreList: {
    method: 'POST',
    path: '/wxa/get_store_list',
    title: '获取门店列表',
    cat: 'stores',
    doc: 'https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_newgetpoilist.html',
  },
  /** 更新门店信息 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_newupdatepoi.html */
  updateStore: {
    method: 'POST',
    path: '/wxa/update_store',
    title: '更新门店信息',
    cat: 'stores',
    doc: 'https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_newupdatepoi.html',
  },
  /** 搜索门店地图信息 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_poilistsearch.html */
  searchMapPoi: {
    method: 'POST',
    path: '/wxa/search_map_poi',
    title: '搜索门店地图信息',
    cat: 'stores',
    doc: 'https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_poilistsearch.html',
  },
  // ===== usermanage =====
  /** 转换openid @see https://developers.weixin.qq.com/doc/service/api/usermanage/changeopenid/api_changeopenid.html */
  changeopenid: {
    method: 'POST',
    path: '/cgi-bin/changeopenid',
    title: '转换openid',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/changeopenid/api_changeopenid.html',
  },
  /** 批量为用户打标签 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchtagging.html */
  tagsMembersBatchtagging: {
    method: 'POST',
    path: '/cgi-bin/tags/members/batchtagging',
    title: '批量为用户打标签',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchtagging.html',
  },
  /** 批量为用户取消标签 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchuntagging.html */
  tagsMembersBatchuntagging: {
    method: 'POST',
    path: '/cgi-bin/tags/members/batchuntagging',
    title: '批量为用户取消标签',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchuntagging.html',
  },
  /** 创建标签 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_createtag.html */
  tagsCreate: {
    method: 'POST',
    path: '/cgi-bin/tags/create',
    title: '创建标签',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_createtag.html',
  },
  /** 删除标签 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_deletetag.html */
  tagsDelete: {
    method: 'POST',
    path: '/cgi-bin/tags/delete',
    title: '删除标签',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_deletetag.html',
  },
  /** 获取标签下粉丝列表 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagfans.html */
  userTagGet: {
    method: 'POST',
    path: '/cgi-bin/user/tag/get',
    title: '获取标签下粉丝列表',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagfans.html',
  },
  /** 获取用户的标签列表 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagidlist.html */
  tagsGetidlist: {
    method: 'POST',
    path: '/cgi-bin/tags/getidlist',
    title: '获取用户的标签列表',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagidlist.html',
  },
  /** 获取标签 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettags.html */
  tagsGet: {
    method: 'GET',
    path: '/cgi-bin/tags/get',
    title: '获取标签',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettags.html',
  },
  /** 编辑标签 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_updatetag.html */
  tagsUpdate: {
    method: 'POST',
    path: '/cgi-bin/tags/update',
    title: '编辑标签',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_updatetag.html',
  },
  /** 拉黑用户 @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchblacklist.html */
  tagsMembersBatchblacklist: {
    method: 'POST',
    path: '/cgi-bin/tags/members/batchblacklist',
    title: '拉黑用户',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchblacklist.html',
  },
  /** 取消拉黑用户 @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchunblacklist.html */
  tagsMembersBatchunblacklist: {
    method: 'POST',
    path: '/cgi-bin/tags/members/batchunblacklist',
    title: '取消拉黑用户',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchunblacklist.html',
  },
  /** 批量获取用户基本信息 @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchuserinfo.html */
  userInfoBatchget: {
    method: 'POST',
    path: '/cgi-bin/user/info/batchget',
    title: '批量获取用户基本信息',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchuserinfo.html',
  },
  /** 获取公众号的黑名单列表 @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getblacklist.html */
  tagsMembersGetblacklist: {
    method: 'POST',
    path: '/cgi-bin/tags/members/getblacklist',
    title: '获取公众号的黑名单列表',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getblacklist.html',
  },
  /** 获取关注用户列表 @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getfans.html */
  userGet: {
    method: 'GET',
    path: '/cgi-bin/user/get',
    title: '获取关注用户列表',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getfans.html',
  },
  /** 设置用户备注名 @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_updateremark.html */
  userInfoUpdateremark: {
    method: 'POST',
    path: '/cgi-bin/user/info/updateremark',
    title: '设置用户备注名',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_updateremark.html',
  },
  /** 获取用户基本信息 @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_userinfo.html */
  userInfo: {
    method: 'GET',
    path: '/cgi-bin/user/info',
    title: '获取用户基本信息',
    cat: 'usermanage',
    doc: 'https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_userinfo.html',
  },
  // ===== webdev =====
  /** 换取用户授权凭证 @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsaccesstoken.html */
  oauth2AccessToken: {
    method: 'GET',
    path: '/sns/oauth2/access_token',
    title: '换取用户授权凭证',
    cat: 'webdev',
    doc: 'https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsaccesstoken.html',
  },
  /** 检验用户授权凭证 @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsauth.html */
  auth: {
    method: 'GET',
    path: '/sns/auth',
    title: '检验用户授权凭证',
    cat: 'webdev',
    doc: 'https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsauth.html',
  },
  /** 刷新用户授权凭证 @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsrefreshtoken.html */
  oauth2RefreshToken: {
    method: 'GET',
    path: '/sns/oauth2/refresh_token',
    title: '刷新用户授权凭证',
    cat: 'webdev',
    doc: 'https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsrefreshtoken.html',
  },
  /** 获取授权用户信息 @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsuserinfo.html */
  userinfo: {
    method: 'GET',
    path: '/sns/userinfo',
    title: '获取授权用户信息',
    cat: 'webdev',
    doc: 'https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsuserinfo.html',
  },
  // ===== wedata =====
  /** 获取被动回复概要数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummary.html */
  getinterfacesummary: {
    method: 'POST',
    path: '/datacube/getinterfacesummary',
    title: '获取被动回复概要数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummary.html',
  },
  /** 获取被动回复分布数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummaryhour.html */
  getinterfacesummaryhour: {
    method: 'POST',
    path: '/datacube/getinterfacesummaryhour',
    title: '获取被动回复分布数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummaryhour.html',
  },
  /** 获取消息发送概况数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsg.html */
  getupstreammsg: {
    method: 'POST',
    path: '/datacube/getupstreammsg',
    title: '获取消息发送概况数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsg.html',
  },
  /** 获取消息发送分布数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdist.html */
  getupstreammsgdist: {
    method: 'POST',
    path: '/datacube/getupstreammsgdist',
    title: '获取消息发送分布数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdist.html',
  },
  /** 获取消息发送分布月数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistmonth.html */
  getupstreammsgdistmonth: {
    method: 'POST',
    path: '/datacube/getupstreammsgdistmonth',
    title: '获取消息发送分布月数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistmonth.html',
  },
  /** 获取消息发送分布周数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistweek.html */
  getupstreammsgdistweek: {
    method: 'POST',
    path: '/datacube/getupstreammsgdistweek',
    title: '获取消息发送分布周数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistweek.html',
  },
  /** 获取消息发送分时数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsghour.html */
  getupstreammsghour: {
    method: 'POST',
    path: '/datacube/getupstreammsghour',
    title: '获取消息发送分时数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsghour.html',
  },
  /** 获取消息发送月数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgmonth.html */
  getupstreammsgmonth: {
    method: 'POST',
    path: '/datacube/getupstreammsgmonth',
    title: '获取消息发送月数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgmonth.html',
  },
  /** 获取消息发送周数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgweek.html */
  getupstreammsgweek: {
    method: 'POST',
    path: '/datacube/getupstreammsgweek',
    title: '获取消息发送周数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgweek.html',
  },
  /** 获取发表内容每日阅读数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticleread.html */
  getarticleread: {
    method: 'POST',
    path: '/datacube/getarticleread',
    title: '获取发表内容每日阅读数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticleread.html',
  },
  /** 获取发表内容每日分享数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticleshare.html */
  getarticleshare: {
    method: 'POST',
    path: '/datacube/getarticleshare',
    title: '获取发表内容每日分享数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticleshare.html',
  },
  /** 获取图文群发每日数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticlesummary.html */
  getarticlesummary: {
    method: 'POST',
    path: '/datacube/getarticlesummary',
    title: '获取图文群发每日数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticlesummary.html',
  },
  /** 获取图文群发总数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticletotal.html */
  getarticletotal: {
    method: 'POST',
    path: '/datacube/getarticletotal',
    title: '获取图文群发总数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticletotal.html',
  },
  /** 获取发表内容发表详细数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticletotaldetail.html */
  getarticletotaldetail: {
    method: 'POST',
    path: '/datacube/getarticletotaldetail',
    title: '获取发表内容发表详细数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticletotaldetail.html',
  },
  /** 获取发表内容概况总数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getbizsummary.html */
  getbizsummary: {
    method: 'POST',
    path: '/datacube/getbizsummary',
    title: '获取发表内容概况总数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getbizsummary.html',
  },
  /** 获取图文阅读概况数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserread.html */
  getuserread: {
    method: 'POST',
    path: '/datacube/getuserread',
    title: '获取图文阅读概况数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserread.html',
  },
  /** 获取图文阅读分时数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserreadhour.html */
  getuserreadhour: {
    method: 'POST',
    path: '/datacube/getuserreadhour',
    title: '获取图文阅读分时数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserreadhour.html',
  },
  /** 获取图文转发概况数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusershare.html */
  getusershare: {
    method: 'POST',
    path: '/datacube/getusershare',
    title: '获取图文转发概况数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusershare.html',
  },
  /** 获取图文转发分时数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusersharehour.html */
  getusersharehour: {
    method: 'POST',
    path: '/datacube/getusersharehour',
    title: '获取图文转发分时数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusersharehour.html',
  },
  /** 获取累计用户数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusercumulate.html */
  getusercumulate: {
    method: 'POST',
    path: '/datacube/getusercumulate',
    title: '获取累计用户数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusercumulate.html',
  },
  /** 获取用户增减数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusersummary.html */
  getusersummary: {
    method: 'POST',
    path: '/datacube/getusersummary',
    title: '获取用户增减数据',
    cat: 'wedata',
    doc: 'https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusersummary.html',
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
  /** 重置指定API调用次数 @see https://developers.weixin.qq.com/doc/service/api/apimanage/api_clearapiquota.html */
  openapiQuotaClear(
    body?: OpenapiQuotaClearBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenapiQuotaClearResp>;
  /** 重置API调用次数 @see https://developers.weixin.qq.com/doc/service/api/apimanage/api_clearquota.html */
  clearQuota(
    body?: ClearQuotaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ClearQuotaResp>;
  /** 使用AppSecret重置API调用次数 @see https://developers.weixin.qq.com/doc/service/api/apimanage/api_clearquotabyappsecret.html */
  clearQuotaV2(
    body?: ClearQuotaV2Body,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ClearQuotaV2Resp>;
  /** 查询API调用额度 @see https://developers.weixin.qq.com/doc/service/api/apimanage/api_getapiquota.html */
  openapiQuotaGet(
    body?: OpenapiQuotaGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenapiQuotaGetResp>;
  /** 查询rid信息 @see https://developers.weixin.qq.com/doc/service/api/apimanage/api_getridinfo.html */
  openapiRidGet(
    body?: OpenapiRidGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenapiRidGetResp>;
  /** 网络通信检测 @see https://developers.weixin.qq.com/doc/service/api/base/api_callbackcheck.html */
  callbackCheck(
    body?: CallbackCheckBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CallbackCheckResp>;
  /** 获取接口调用凭据 @see https://developers.weixin.qq.com/doc/service/api/base/api_getaccesstoken.html */
  token(
    body?: TokenBody,
    query?: TokenQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TokenResp>;
  /** 获取微信API服务器IP @see https://developers.weixin.qq.com/doc/service/api/base/api_getapidomainip.html */
  getApiDomainIp(
    body?: GetApiDomainIpBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetApiDomainIpResp>;
  /** 获取微信推送服务器IP @see https://developers.weixin.qq.com/doc/service/api/base/api_getcallbackip.html */
  getcallbackip(
    body?: GetcallbackipBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetcallbackipResp>;
  /** 获取稳定版接口调用凭据 @see https://developers.weixin.qq.com/doc/service/api/base/api_getstableaccesstoken.html */
  stableToken(
    body?: StableTokenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<StableTokenResp>;
  /** 获取聊天记录 @see https://developers.weixin.qq.com/doc/service/api/customer/message/api_getmsglist.html */
  customserviceMsgrecordGetmsglist(
    body?: CustomserviceMsgrecordGetmsglistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceMsgrecordGetmsglistResp>;
  /** 发送客服消息 @see https://developers.weixin.qq.com/doc/service/api/customer/message/api_sendcustommessage.html */
  messageCustomSend(
    body?: MessageCustomSendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageCustomSendResp>;
  /** 客服输入状态 @see https://developers.weixin.qq.com/doc/service/api/customer/message/api_typing.html */
  messageCustomTyping(
    body?: MessageCustomTypingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageCustomTypingResp>;
  /** 关闭会话 @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_closesession.html */
  customserviceKfsessionClose(
    body?: CustomserviceKfsessionCloseBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceKfsessionCloseResp>;
  /** 创建会话 @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_createkfsession.html */
  customserviceKfsessionCreate(
    body?: CustomserviceKfsessionCreateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceKfsessionCreateResp>;
  /** 获取客户会话状态 @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsession.html */
  customserviceKfsessionGetsession(
    body?: CustomserviceKfsessionGetsessionBody,
    query?: CustomserviceKfsessionGetsessionQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceKfsessionGetsessionResp>;
  /** 获取客服会话列表 @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getkfsessionlist.html */
  customserviceKfsessionGetsessionlist(
    body?: CustomserviceKfsessionGetsessionlistBody,
    query?: CustomserviceKfsessionGetsessionlistQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceKfsessionGetsessionlistResp>;
  /** 获取未接入会话列表 @see https://developers.weixin.qq.com/doc/service/api/customer/messctrl/api_getwaitcase.html */
  customserviceKfsessionGetwaitcase(
    body?: CustomserviceKfsessionGetwaitcaseBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceKfsessionGetwaitcaseResp>;
  /** 添加客服账号 @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_addkfaccount.html */
  customserviceKfaccountAdd(
    body?: CustomserviceKfaccountAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceKfaccountAddResp>;
  /** 删除客服账号 @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_delkfaccount.html */
  customserviceKfaccountDel(
    body?: CustomserviceKfaccountDelBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceKfaccountDelResp>;
  /** 获取所有客服账号 @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getkflist.html */
  customserviceGetkflist(
    body?: CustomserviceGetkflistBody,
    query?: CustomserviceGetkflistQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceGetkflistResp>;
  /** 获取在线客服列表 @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_getonlinekflist.html */
  customserviceGetonlinekflist(
    body?: CustomserviceGetonlinekflistBody,
    query?: CustomserviceGetonlinekflistQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceGetonlinekflistResp>;
  /** 邀请绑定客服账号 @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_invitekfworker.html */
  customserviceKfaccountInviteworker(
    body?: CustomserviceKfaccountInviteworkerBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceKfaccountInviteworkerResp>;
  /** 修改客服账号 @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_updatekfaccount.html */
  customserviceKfaccountUpdate(
    body?: CustomserviceKfaccountUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceKfaccountUpdateResp>;
  /** 设置客服头像 @see https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_uploadkfheadimg.html */
  customserviceKfaccountUploadheadimg(
    body?: CustomserviceKfaccountUploadheadimgBody,
    query?: CustomserviceKfaccountUploadheadimgQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CustomserviceKfaccountUploadheadimgResp>;
  /** 创建个性化菜单 @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_addconditionalmenu.html */
  menuAddconditional(
    body?: MenuAddconditionalBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MenuAddconditionalResp>;
  /** 创建自定义菜单 @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_createcustommenu.html */
  menuCreate(
    body?: MenuCreateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MenuCreateResp>;
  /** 删除个性化菜单 @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_deleteconditionalmenu.html */
  menuDelconditional(
    body?: MenuDelconditionalBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MenuDelconditionalResp>;
  /** 删除自定义菜单 @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_deletemenu.html */
  menuDelete(
    body?: MenuDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MenuDeleteResp>;
  /** 查询自定义菜单信息 @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_getcurrentselfmenuinfo.html */
  getCurrentSelfmenuInfo(
    body?: GetCurrentSelfmenuInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetCurrentSelfmenuInfoResp>;
  /** 获取自定义菜单配置 @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_getmenu.html */
  menuGet(
    body?: MenuGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MenuGetResp>;
  /** 测试个性化菜单匹配结果 @see https://developers.weixin.qq.com/doc/service/api/custommenu/api_trymatchmenu.html */
  menuTrymatch(
    body?: MenuTrymatchBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MenuTrymatchResp>;
  /** 新增草稿 @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_add.html */
  draftAdd(
    body?: DraftAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<DraftAddResp>;
  /** 获取草稿列表 @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_batchget.html */
  draftBatchget(
    body?: DraftBatchgetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<DraftBatchgetResp>;
  /** 获取草稿的总数 @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_count.html */
  draftCount(
    body?: DraftCountBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<DraftCountResp>;
  /** 删除草稿 @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_delete.html */
  draftDelete(
    body?: DraftDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<DraftDeleteResp>;
  /** 草稿箱开关设置 @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_switch.html */
  draftSwitch(
    body?: DraftSwitchBody,
    query?: DraftSwitchQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<DraftSwitchResp>;
  /** 更新草稿 @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_draft_update.html */
  draftUpdate(
    body?: DraftUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<DraftUpdateResp>;
  /** 获取草稿详情 @see https://developers.weixin.qq.com/doc/service/api/draftbox/draftmanage/api_getdraft.html */
  draftGet(
    body?: DraftGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<DraftGetResp>;
  /** 获取商品卡片的DOM结构 @see https://developers.weixin.qq.com/doc/service/api/draftbox/shop/api_ecsgetproductcardinfo.html */
  ecServiceProductGetcardinfo(
    body?: EcServiceProductGetcardinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<EcServiceProductGetcardinfoResp>;
  /** 获取sdk临时票据 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_getticket.html */
  ticketGetticket(
    body?: TicketGetticketBody,
    query?: TicketGetticketQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TicketGetticketResp>;
  /** 查询授权信息 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_invoicebizgetauthdata.html */
  invoiceGetauthdata(
    body?: InvoiceGetauthdataBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoiceGetauthdataResp>;
  /** 拒绝开票 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_invoicebizrejectinsert.html */
  invoiceRejectinsert(
    body?: InvoiceRejectinsertBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoiceRejectinsertResp>;
  /** 更新发票卡券状态 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_invoicekpupdatainvoicestatus.html */
  invoicePlatformUpdatestatus(
    body?: InvoicePlatformUpdatestatusBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoicePlatformUpdatestatusResp>;
  /** 查询已上传的PDF文件 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_invoiceplatformgetpdf.html */
  invoicePlatformGetpdf(
    body?: InvoicePlatformGetpdfBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoicePlatformGetpdfResp>;
  /** 上传发票PDF @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_invoiceplatformsetpdf.html */
  invoicePlatformSetpdf(
    body?: InvoicePlatformSetpdfBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoicePlatformSetpdfResp>;
  /** 创建财政电子票据模板 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_notaxinvoicecreatecard.html */
  nontaxCreatebillcard(
    body?: NontaxCreatebillcardBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NontaxCreatebillcardResp>;
  /** 获取授权页链接 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_notaxinvoicegetauthurl.html */
  nontaxGetbillauthurl(
    body?: NontaxGetbillauthurlBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NontaxGetbillauthurlResp>;
  /** 票据插入用户卡包 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_notaxinvoiceinsert.html */
  nontaxInsertbill(
    body?: NontaxInsertbillBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NontaxInsertbillResp>;
  /** 获取开票平台识别码 @see https://developers.weixin.qq.com/doc/service/api/invoice/FiscalReceipt/api_setinvoiceurl.html */
  invoiceSeturl(
    body?: InvoiceSeturlBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoiceSeturlResp>;
  /** 获取授权页链接 @see https://developers.weixin.qq.com/doc/service/api/invoice/auth/api_invoicebizgetauthurl.html */
  invoiceGetauthurl(
    body?: InvoiceGetauthurlBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoiceGetauthurlResp>;
  /** 查询与设置授权页与商户信息 @see https://developers.weixin.qq.com/doc/service/api/invoice/auth/api_invoicebizsetattr.html */
  invoiceSetbizattr(
    body?: InvoiceSetbizattrBody,
    query?: InvoiceSetbizattrQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoiceSetbizattrResp>;
  /** 获取商户专属抬头链接 @see https://developers.weixin.qq.com/doc/service/api/invoice/name/api_invoicebizgetselecttitleurl.html */
  invoiceBizGetselecttitleurl(
    body?: InvoiceBizGetselecttitleurlBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoiceBizGetselecttitleurlResp>;
  /** 录入抬头到用户微信 @see https://developers.weixin.qq.com/doc/service/api/invoice/name/api_invoicebizgetusertitleurl.html */
  invoiceBizGetusertitleurl(
    body?: InvoiceBizGetusertitleurlBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoiceBizGetusertitleurlResp>;
  /** 解析扫描的抬头二维码 @see https://developers.weixin.qq.com/doc/service/api/invoice/name/api_invoicescantitle.html */
  invoiceScantitle(
    body?: InvoiceScantitleBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoiceScantitleResp>;
  /** 将电子发票卡券插入用户卡包 @see https://developers.weixin.qq.com/doc/service/api/invoice/platform/api_insertinvoice.html */
  invoiceInsert(
    body?: InvoiceInsertBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoiceInsertResp>;
  /** 创建发票卡券模板 @see https://developers.weixin.qq.com/doc/service/api/invoice/platform/api_invoiceplatformcreatecard.html */
  invoicePlatformCreatecard(
    body?: InvoicePlatformCreatecardBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoicePlatformCreatecardResp>;
  /** 查询报销发票信息 @see https://developers.weixin.qq.com/doc/service/api/invoice/reimbursement/api_invoicebxgetinvoice.html */
  invoiceReimburseGetinvoiceinfo(
    body?: InvoiceReimburseGetinvoiceinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoiceReimburseGetinvoiceinfoResp>;
  /** 更新报销发票状态 @see https://developers.weixin.qq.com/doc/service/api/invoice/reimbursement/api_invoicebxupdatainvoicestatus.html */
  invoiceReimburseUpdateinvoicestatus(
    body?: InvoiceReimburseUpdateinvoicestatusBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoiceReimburseUpdateinvoicestatusResp>;
  /** 批量获取报销发票信息 @see https://developers.weixin.qq.com/doc/service/api/invoice/reimbursement/api_invoicereimbursegetinvoicebatch.html */
  invoiceReimburseGetinvoicebatch(
    body?: InvoiceReimburseGetinvoicebatchBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoiceReimburseGetinvoicebatchResp>;
  /** 批量更新报销发票状态 @see https://developers.weixin.qq.com/doc/service/api/invoice/reimbursement/api_invoicereimburseupdatestatusbatch.html */
  invoiceReimburseUpdatestatusbatch(
    body?: InvoiceReimburseUpdatestatusbatchBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<InvoiceReimburseUpdatestatusbatchResp>;
  /** 关闭已群发文章评论 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_closecomment.html */
  commentClose(
    body?: CommentCloseBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentCloseResp>;
  /** 删除评论 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_delcomment.html */
  commentDelete(
    body?: CommentDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentDeleteResp>;
  /** 删除回复 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_delreplycomment.html */
  commentReplyDelete(
    body?: CommentReplyDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentReplyDeleteResp>;
  /** 评论标记精选 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_electcomment.html */
  commentMarkelect(
    body?: CommentMarkelectBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentMarkelectResp>;
  /** 查看指定文章的评论数据 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_listcomment.html */
  commentList(
    body?: CommentListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentListResp>;
  /** 打开已群发文章评论 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_openarticlecomment.html */
  commentOpen(
    body?: CommentOpenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentOpenResp>;
  /** 回复评论 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_replycomment.html */
  commentReplyAdd(
    body?: CommentReplyAddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentReplyAddResp>;
  /** 评论取消精选 @see https://developers.weixin.qq.com/doc/service/api/leaving/api_unelectcomment.html */
  commentUnmarkelect(
    body?: CommentUnmarkelectBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommentUnmarkelectResp>;
  /** 上传永久素材 @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_addmaterial.html */
  materialAddMaterial(
    body?: MaterialAddMaterialBody,
    query?: MaterialAddMaterialQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MaterialAddMaterialResp>;
  /** 获取永久素材列表 @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_batchgetmaterial.html */
  materialBatchgetMaterial(
    body?: MaterialBatchgetMaterialBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MaterialBatchgetMaterialResp>;
  /** 删除永久素材 @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_delmaterial.html */
  materialDelMaterial(
    body?: MaterialDelMaterialBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MaterialDelMaterialResp>;
  /** 获取永久素材 @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterial.html */
  materialGetMaterial(
    body?: MaterialGetMaterialBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MaterialGetMaterialResp>;
  /** 获取永久素材总数 @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_getmaterialcount.html */
  materialGetMaterialcount(
    body?: MaterialGetMaterialcountBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MaterialGetMaterialcountResp>;
  /** 上传发表内容中的图片 @see https://developers.weixin.qq.com/doc/service/api/material/permanent/api_uploadimage.html */
  mediaUploadimg(
    body?: MediaUploadimgBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MediaUploadimgResp>;
  /** 获取高清语音素材 @see https://developers.weixin.qq.com/doc/service/api/material/temporary/api_gethdvoice.html */
  mediaGetJssdk(
    body?: MediaGetJssdkBody,
    query?: MediaGetJssdkQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MediaGetJssdkResp>;
  /** 获取临时素材 @see https://developers.weixin.qq.com/doc/service/api/material/temporary/api_getmedia.html */
  mediaGet(
    body?: MediaGetBody,
    query?: MediaGetQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MediaGetResp>;
  /** 新增临时素材 @see https://developers.weixin.qq.com/doc/service/api/material/temporary/api_uploadtempmedia.html */
  mediaUpload(
    body?: MediaUploadBody,
    query?: MediaUploadQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MediaUploadResp>;
  /** 消息推送接口 @see https://developers.weixin.qq.com/doc/service/api/medicalassistant/api_cityservice_sendchannelmsg.html */
  cityserviceSendchannelmsg(
    body?: CityserviceSendchannelmsgBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CityserviceSendchannelmsgResp>;
  /** 下载缴费对帐单 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxdownloadbill.html */
  nontaxDownloadbill(
    body?: NontaxDownloadbillBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NontaxDownloadbillResp>;
  /** 获取缴费订单详情 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxgetorder.html */
  nontaxGetorder(
    body?: NontaxGetorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NontaxGetorderResp>;
  /** 获取缴费订单列表 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxgetorderlist.html */
  nontaxGetorderlist(
    body?: NontaxGetorderlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NontaxGetorderlistResp>;
  /** 提交刷卡支付 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxmicropay.html */
  nontaxMicropay(
    body?: NontaxMicropayBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NontaxMicropayResp>;
  /** 模拟支付结果通知 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxmocknotification.html */
  nontaxMocknotification(
    body?: NontaxMocknotificationBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NontaxMocknotificationResp>;
  /** 模拟查询应收信息 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxmockqueryfee.html */
  nontaxMockqueryfee(
    body?: NontaxMockqueryfeeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NontaxMockqueryfeeResp>;
  /** 通知不一致订单 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxnotifyinconsistentorder.html */
  nontaxNotifyinconsistentorder(
    body?: NontaxNotifyinconsistentorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NontaxNotifyinconsistentorderResp>;
  /** 查询应收信息 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxqueryfee.html */
  nontaxQueryfee(
    body?: NontaxQueryfeeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NontaxQueryfeeResp>;
  /** 缴费订单退款 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxrefund.html */
  nontaxRefund(
    body?: NontaxRefundBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NontaxRefundResp>;
  /** 缴费支付下单 @see https://developers.weixin.qq.com/doc/service/api/nontaxpay/api_nontaxunifiedorder.html */
  nontaxUnifiedorder(
    body?: NontaxUnifiedorderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NontaxUnifiedorderResp>;
  /** 获取自动回复规则 @see https://developers.weixin.qq.com/doc/service/api/notify/autoreplies/api_getcurrentautoreplyinfo.html */
  getCurrentAutoreplyInfo(
    body?: GetCurrentAutoreplyInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetCurrentAutoreplyInfoResp>;
  /** 删除群发消息 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_deletemassmsg.html */
  messageMassDelete(
    body?: MessageMassDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageMassDeleteResp>;
  /** 获取群发速度 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_getspeed.html */
  messageMassSpeedGet(
    body?: MessageMassSpeedGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageMassSpeedGetResp>;
  /** 查询群发消息发送状态 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_massmsgget.html */
  messageMassGet(
    body?: MessageMassGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageMassGetResp>;
  /** 根据OpenID群发消息 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_masssend.html */
  messageMassSend(
    body?: MessageMassSendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageMassSendResp>;
  /** 预览消息 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_preview.html */
  messageMassPreview(
    body?: MessageMassPreviewBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageMassPreviewResp>;
  /** 根据标签群发消息 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_sendall.html */
  messageMassSendall(
    body?: MessageMassSendallBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageMassSendallResp>;
  /** 设置群发速度 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_setspeed.html */
  messageMassSpeedSet(
    body?: MessageMassSpeedSetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageMassSpeedSetResp>;
  /** 上传图文消息素材 @see https://developers.weixin.qq.com/doc/service/api/notify/message/api_uploadnewsmsg.html */
  mediaUploadnews(
    body?: MediaUploadnewsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MediaUploadnewsResp>;
  /** 选用模板 @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_addwxanewtemplate.html */
  newtmplAddtemplate(
    body?: NewtmplAddtemplateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NewtmplAddtemplateResp>;
  /** 删除模板 @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_delwxanewtemplate.html */
  newtmplDeltemplate(
    body?: NewtmplDeltemplateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NewtmplDeltemplateResp>;
  /** 获取类目 @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getcategory.html */
  newtmplGetcategory(
    body?: NewtmplGetcategoryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NewtmplGetcategoryResp>;
  /** 获取模板中的关键词 @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatekeywords.html */
  newtmplGetpubtemplatekeywords(
    body?: NewtmplGetpubtemplatekeywordsBody,
    query?: NewtmplGetpubtemplatekeywordsQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NewtmplGetpubtemplatekeywordsResp>;
  /** 获取类目下的公共模板 @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getpubnewtemplatetitles.html */
  newtmplGetpubtemplatetitles(
    body?: NewtmplGetpubtemplatetitlesBody,
    query?: NewtmplGetpubtemplatetitlesQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NewtmplGetpubtemplatetitlesResp>;
  /** 获取已有模板列表 @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_getwxapubnewtemplate.html */
  newtmplGettemplate(
    body?: NewtmplGettemplateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<NewtmplGettemplateResp>;
  /** 发送订阅通知 @see https://developers.weixin.qq.com/doc/service/api/notify/notify/api_sendnewsubscribemsg.html */
  messageSubscribeBizsend(
    body?: MessageSubscribeBizsendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageSubscribeBizsendResp>;
  /** 发送一次性订阅消息 @see https://developers.weixin.qq.com/doc/service/api/notify/subscribe/api_templatesubscribe.html */
  messageTemplateSubscribe(
    body?: MessageTemplateSubscribeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageTemplateSubscribeResp>;
  /** 选用模板 @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_addtemplate.html */
  templateApiAddTemplate(
    body?: TemplateApiAddTemplateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TemplateApiAddTemplateResp>;
  /** 删除模板 @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_deletetemplate.html */
  templateDelPrivateTemplate(
    body?: TemplateDelPrivateTemplateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TemplateDelPrivateTemplateResp>;
  /** 获取已选用模板列表 @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_getalltemplates.html */
  templateGetAllPrivateTemplate(
    body?: TemplateGetAllPrivateTemplateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TemplateGetAllPrivateTemplateResp>;
  /** 获取行业信息 @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_getindustry.html */
  templateGetIndustry(
    body?: TemplateGetIndustryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TemplateGetIndustryResp>;
  /** 查询拦截的模板消息 @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_queryblocktmplmsg.html */
  queryblocktmplmsg(
    body?: QueryblocktmplmsgBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryblocktmplmsgResp>;
  /** 发送模板消息 @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_sendtemplatemessage.html */
  messageTemplateSend(
    body?: MessageTemplateSendBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageTemplateSendResp>;
  /** 设置所属行业 @see https://developers.weixin.qq.com/doc/service/api/notify/template/api_setindustry.html */
  templateApiSetIndustry(
    body?: TemplateApiSetIndustryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TemplateApiSetIndustryResp>;
  /** 申请二维码接口 @see https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_applycode.html */
  marketcodeApplycode(
    body?: MarketcodeApplycodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MarketcodeApplycodeResp>;
  /** 下载二维码包接口 @see https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_applycodedownload.html */
  marketcodeApplycodedownload(
    body?: MarketcodeApplycodedownloadBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MarketcodeApplycodedownloadResp>;
  /** 查询二维码申请单接口 @see https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_applycodequery.html */
  marketcodeApplycodequery(
    body?: MarketcodeApplycodequeryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MarketcodeApplycodequeryResp>;
  /** 激活二维码接口 @see https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_codeactive.html */
  marketcodeCodeactive(
    body?: MarketcodeCodeactiveBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MarketcodeCodeactiveResp>;
  /** 查询二维码激活状态接口 @see https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_codeactivequery.html */
  marketcodeCodeactivequery(
    body?: MarketcodeCodeactivequeryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MarketcodeCodeactivequeryResp>;
  /** CODE_TICKET换CODE接口 @see https://developers.weixin.qq.com/doc/service/api/onecode/api_intp_marketcode_tickettocode.html */
  marketcodeTickettocode(
    body?: MarketcodeTickettocodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MarketcodeTickettocodeResp>;
  /** 上传语音文件 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_addvoicetorecofortext.html */
  mediaVoiceAddvoicetorecofortext(
    body?: MediaVoiceAddvoicetorecofortextBody,
    query?: MediaVoiceAddvoicetorecofortextQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MediaVoiceAddvoicetorecofortextResp>;
  /** 获取语音识别结果 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_queryrecoresultfortext.html */
  mediaVoiceQueryrecoresultfortext(
    body?: MediaVoiceQueryrecoresultfortextBody,
    query?: MediaVoiceQueryrecoresultfortextQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MediaVoiceQueryrecoresultfortextResp>;
  /** 微信翻译 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ai/api_translatecontent.html */
  mediaVoiceTranslatecontent(
    body?: MediaVoiceTranslatecontentBody,
    query?: MediaVoiceTranslatecontentQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MediaVoiceTranslatecontentResp>;
  /** 图片智能裁剪 @see https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgaicrop.html */
  cvImgAicrop(
    body?: CvImgAicropBody,
    query?: CvImgAicropQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvImgAicropResp>;
  /** 二维码/条码识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/image/api_imgqrcode.html */
  cvImgQrcode(
    body?: CvImgQrcodeBody,
    query?: CvImgQrcodeQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvImgQrcodeResp>;
  /** 银行卡识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bankcardocr.html */
  cvOcrBankcard(
    body?: CvOcrBankcardBody,
    query?: CvOcrBankcardQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvOcrBankcardResp>;
  /** 营业执照识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_bizlicenseocr.html */
  cvOcrBizlicense(
    body?: CvOcrBizlicenseBody,
    query?: CvOcrBizlicenseQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvOcrBizlicenseResp>;
  /** 通用印刷体识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_commocr.html */
  cvOcrComm(
    body?: CvOcrCommBody,
    query?: CvOcrCommQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvOcrCommResp>;
  /** 驾驶证识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivinglicenseocr.html */
  cvOcrDrivinglicense(
    body?: CvOcrDrivinglicenseBody,
    query?: CvOcrDrivinglicenseQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvOcrDrivinglicenseResp>;
  /** 行驶证识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_drivingocr.html */
  cvOcrDriving(
    body?: CvOcrDrivingBody,
    query?: CvOcrDrivingQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvOcrDrivingResp>;
  /** 身份证识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_idcardocr.html */
  cvOcrIdcard(
    body?: CvOcrIdcardBody,
    query?: CvOcrIdcardQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvOcrIdcardResp>;
  /** 菜单识别 @see https://developers.weixin.qq.com/doc/service/api/openpoc/ocr/api_menuocr.html */
  cvOcrMenu(
    body?: CvOcrMenuBody,
    query?: CvOcrMenuQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CvOcrMenuResp>;
  /** 获取已发布的消息列表 @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_batchget.html */
  freepublishBatchget(
    body?: FreepublishBatchgetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FreepublishBatchgetResp>;
  /** 发布状态查询 @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_get.html */
  freepublishGet(
    body?: FreepublishGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FreepublishGetResp>;
  /** 发布草稿 @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublish_submit.html */
  freepublishSubmit(
    body?: FreepublishSubmitBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FreepublishSubmitResp>;
  /** 删除发布文章 @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublishdelete.html */
  freepublishDelete(
    body?: FreepublishDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FreepublishDeleteResp>;
  /** 获取已发布图文信息 @see https://developers.weixin.qq.com/doc/service/api/public/api_freepublishgetarticle.html */
  freepublishGetarticle(
    body?: FreepublishGetarticleBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FreepublishGetarticleResp>;
  /** 增加或修改二维码规则 @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpadd.html */
  wxopenQrcodejumpadd(
    body?: WxopenQrcodejumpaddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenQrcodejumpaddResp>;
  /** 删除已设置的二维码规则 @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpdelete.html */
  wxopenQrcodejumpdelete(
    body?: WxopenQrcodejumpdeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenQrcodejumpdeleteResp>;
  /** 获取已设置的二维码规则 @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumpget.html */
  wxopenQrcodejumpget(
    body?: WxopenQrcodejumpgetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenQrcodejumpgetResp>;
  /** 发布已设置的二维码规则 @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodejump/api_qrcodejumppublish.html */
  wxopenQrcodejumppublish(
    body?: WxopenQrcodejumppublishBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenQrcodejumppublishResp>;
  /** 生成带参数的二维码 @see https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodes/api_createqrcode.html */
  qrcodeCreate(
    body?: QrcodeCreateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QrcodeCreateResp>;
  /** 短链转长信息 @see https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_fetchshorten.html */
  shortenFetch(
    body?: ShortenFetchBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShortenFetchResp>;
  /** 长信息转短链 @see https://developers.weixin.qq.com/doc/service/api/qrcode/shorten/api_genshortkey.html */
  shortenGen(
    body?: ShortenGenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ShortenGenResp>;
  /** 新增门店 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_addentityshop.html */
  addStore(
    body?: AddStoreBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<AddStoreResp>;
  /** 创建门店小程序 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_applywxastore.html */
  applyMerchant(
    body?: ApplyMerchantBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ApplyMerchantResp>;
  /** 在地图中创建门店 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_createnewpoid.html */
  createMapPoi(
    body?: CreateMapPoiBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CreateMapPoiResp>;
  /** 获取省市区信息 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_getdistrictlist.html */
  getDistrict(
    body?: GetDistrictBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetDistrictResp>;
  /** 获取门店小程序审核结果 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_getwxastoreauditinfo.html */
  getMerchantAuditInfo(
    body?: GetMerchantAuditInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetMerchantAuditInfoResp>;
  /** 拉取门店小程序类目 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_getwxastorecatelist.html */
  getMerchantCategory(
    body?: GetMerchantCategoryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetMerchantCategoryResp>;
  /** 修改门店小程序信息 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_modifywxastore.html */
  modifyMerchant(
    body?: ModifyMerchantBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ModifyMerchantResp>;
  /** 删除门店 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_newdelpoi.html */
  delStore(
    body?: DelStoreBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<DelStoreResp>;
  /** 获取门店详情 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_newgetpoi.html */
  getStoreInfo(
    body?: GetStoreInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetStoreInfoResp>;
  /** 获取门店列表 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_newgetpoilist.html */
  getStoreList(
    body?: GetStoreListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetStoreListResp>;
  /** 更新门店信息 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_newupdatepoi.html */
  updateStore(
    body?: UpdateStoreBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UpdateStoreResp>;
  /** 搜索门店地图信息 @see https://developers.weixin.qq.com/doc/service/api/stores/miniapp/api_poilistsearch.html */
  searchMapPoi(
    body?: SearchMapPoiBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SearchMapPoiResp>;
  /** 转换openid @see https://developers.weixin.qq.com/doc/service/api/usermanage/changeopenid/api_changeopenid.html */
  changeopenid(
    body?: ChangeopenidBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ChangeopenidResp>;
  /** 批量为用户打标签 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchtagging.html */
  tagsMembersBatchtagging(
    body?: TagsMembersBatchtaggingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TagsMembersBatchtaggingResp>;
  /** 批量为用户取消标签 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_batchuntagging.html */
  tagsMembersBatchuntagging(
    body?: TagsMembersBatchuntaggingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TagsMembersBatchuntaggingResp>;
  /** 创建标签 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_createtag.html */
  tagsCreate(
    body?: TagsCreateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TagsCreateResp>;
  /** 删除标签 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_deletetag.html */
  tagsDelete(
    body?: TagsDeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TagsDeleteResp>;
  /** 获取标签下粉丝列表 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagfans.html */
  userTagGet(
    body?: UserTagGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UserTagGetResp>;
  /** 获取用户的标签列表 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettagidlist.html */
  tagsGetidlist(
    body?: TagsGetidlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TagsGetidlistResp>;
  /** 获取标签 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_gettags.html */
  tagsGet(
    body?: TagsGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TagsGetResp>;
  /** 编辑标签 @see https://developers.weixin.qq.com/doc/service/api/usermanage/tag/api_updatetag.html */
  tagsUpdate(
    body?: TagsUpdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TagsUpdateResp>;
  /** 拉黑用户 @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchblacklist.html */
  tagsMembersBatchblacklist(
    body?: TagsMembersBatchblacklistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TagsMembersBatchblacklistResp>;
  /** 取消拉黑用户 @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchunblacklist.html */
  tagsMembersBatchunblacklist(
    body?: TagsMembersBatchunblacklistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TagsMembersBatchunblacklistResp>;
  /** 批量获取用户基本信息 @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_batchuserinfo.html */
  userInfoBatchget(
    body?: UserInfoBatchgetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UserInfoBatchgetResp>;
  /** 获取公众号的黑名单列表 @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getblacklist.html */
  tagsMembersGetblacklist(
    body?: TagsMembersGetblacklistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TagsMembersGetblacklistResp>;
  /** 获取关注用户列表 @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_getfans.html */
  userGet(
    body?: UserGetBody,
    query?: UserGetQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UserGetResp>;
  /** 设置用户备注名 @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_updateremark.html */
  userInfoUpdateremark(
    body?: UserInfoUpdateremarkBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UserInfoUpdateremarkResp>;
  /** 获取用户基本信息 @see https://developers.weixin.qq.com/doc/service/api/usermanage/userinfo/api_userinfo.html */
  userInfo(
    body?: UserInfoBody,
    query?: UserInfoQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UserInfoResp>;
  /** 换取用户授权凭证 @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsaccesstoken.html */
  oauth2AccessToken(
    body?: Oauth2AccessTokenBody,
    query?: Oauth2AccessTokenQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<Oauth2AccessTokenResp>;
  /** 检验用户授权凭证 @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsauth.html */
  auth(
    body?: AuthBody,
    query?: AuthQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<AuthResp>;
  /** 刷新用户授权凭证 @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsrefreshtoken.html */
  oauth2RefreshToken(
    body?: Oauth2RefreshTokenBody,
    query?: Oauth2RefreshTokenQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<Oauth2RefreshTokenResp>;
  /** 获取授权用户信息 @see https://developers.weixin.qq.com/doc/service/api/webdev/access/api_snsuserinfo.html */
  userinfo(
    body?: UserinfoBody,
    query?: UserinfoQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UserinfoResp>;
  /** 获取被动回复概要数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummary.html */
  getinterfacesummary(
    body?: GetinterfacesummaryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetinterfacesummaryResp>;
  /** 获取被动回复分布数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/api/api_getinterfacesummaryhour.html */
  getinterfacesummaryhour(
    body?: GetinterfacesummaryhourBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetinterfacesummaryhourResp>;
  /** 获取消息发送概况数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsg.html */
  getupstreammsg(
    body?: GetupstreammsgBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetupstreammsgResp>;
  /** 获取消息发送分布数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdist.html */
  getupstreammsgdist(
    body?: GetupstreammsgdistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetupstreammsgdistResp>;
  /** 获取消息发送分布月数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistmonth.html */
  getupstreammsgdistmonth(
    body?: GetupstreammsgdistmonthBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetupstreammsgdistmonthResp>;
  /** 获取消息发送分布周数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgdistweek.html */
  getupstreammsgdistweek(
    body?: GetupstreammsgdistweekBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetupstreammsgdistweekResp>;
  /** 获取消息发送分时数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsghour.html */
  getupstreammsghour(
    body?: GetupstreammsghourBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetupstreammsghourResp>;
  /** 获取消息发送月数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgmonth.html */
  getupstreammsgmonth(
    body?: GetupstreammsgmonthBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetupstreammsgmonthResp>;
  /** 获取消息发送周数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/mess/api_getupstreammsgweek.html */
  getupstreammsgweek(
    body?: GetupstreammsgweekBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetupstreammsgweekResp>;
  /** 获取发表内容每日阅读数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticleread.html */
  getarticleread(
    body?: GetarticlereadBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetarticlereadResp>;
  /** 获取发表内容每日分享数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticleshare.html */
  getarticleshare(
    body?: GetarticleshareBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetarticleshareResp>;
  /** 获取图文群发每日数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticlesummary.html */
  getarticlesummary(
    body?: GetarticlesummaryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetarticlesummaryResp>;
  /** 获取图文群发总数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticletotal.html */
  getarticletotal(
    body?: GetarticletotalBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetarticletotalResp>;
  /** 获取发表内容发表详细数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getarticletotaldetail.html */
  getarticletotaldetail(
    body?: GetarticletotaldetailBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetarticletotaldetailResp>;
  /** 获取发表内容概况总数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getbizsummary.html */
  getbizsummary(
    body?: GetbizsummaryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetbizsummaryResp>;
  /** 获取图文阅读概况数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserread.html */
  getuserread(
    body?: GetuserreadBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetuserreadResp>;
  /** 获取图文阅读分时数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getuserreadhour.html */
  getuserreadhour(
    body?: GetuserreadhourBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetuserreadhourResp>;
  /** 获取图文转发概况数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusershare.html */
  getusershare(
    body?: GetusershareBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetusershareResp>;
  /** 获取图文转发分时数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/news/api_getusersharehour.html */
  getusersharehour(
    body?: GetusersharehourBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetusersharehourResp>;
  /** 获取累计用户数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusercumulate.html */
  getusercumulate(
    body?: GetusercumulateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetusercumulateResp>;
  /** 获取用户增减数据 @see https://developers.weixin.qq.com/doc/service/api/wedata/user/api_getusersummary.html */
  getusersummary(
    body?: GetusersummaryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetusersummaryResp>;
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
