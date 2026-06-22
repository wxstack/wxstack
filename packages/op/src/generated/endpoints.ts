// 本文件由 scripts/gen-endpoints.mjs 自动生成，请勿手改。
// 数据来源：官方文档站点 developers.weixin.qq.com，覆盖该平台已抓取的全部服务端接口与参数。
// 每个端点是「自动鉴权薄封装」；未在高层方法中显式封装的接口均可在此调用。

import type { CallOptions, QueryValue, RequestBody } from '@wxstack/core';

/** 注册设备ID —— 请求体。 */
export interface BusinessRuntimeAdddeviceBody {
  /** 产品 id */
  product_id: number;
  /** 设备 id 列表。可以采用 设备 SN 码，也可以由开发者自行生成。 */
  device_id_list: unknown[];
  /** 「微信终端合作平台」上登记的 model name */
  model_name: string;
}
/** 注册设备ID —— 返回体。 */
export interface BusinessRuntimeAdddeviceResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 向WMPF推送消息 —— 请求体。 */
export interface BusinessRuntimePushappmsgBody {
  /** 推送消息内容，大小不超过 5 KB */
  msg: string;
  /** 从 WMPF 获取的 pushToken */
  push_token: string;
}
/** 向WMPF推送消息 —— 返回体。 */
export interface BusinessRuntimePushappmsgResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/**  —— 请求体（文档未列字段，放行任意键）。 */
export type MessageTemplateSubscribeBody = Record<string, unknown>;
/**  —— 返回体。 */
export type MessageTemplateSubscribeResp = Record<string, unknown>;

/**  —— 请求体（文档未列字段，放行任意键）。 */
export type Oauth2AccessTokenBody = Record<string, unknown>;
/**  —— 返回体。 */
export type Oauth2AccessTokenResp = Record<string, unknown>;

/**  —— 请求体（文档未列字段，放行任意键）。 */
export type UserinfoBody = Record<string, unknown>;
/**  —— 返回体。 */
export type UserinfoResp = Record<string, unknown>;

/** 快速创建个人小程序 —— 请求体（文档未列字段，放行任意键）。 */
export type FastregisterpersonalweappBody = Record<string, unknown>;
/** 快速创建个人小程序 —— 返回体。 */
export type FastregisterpersonalweappResp = Record<string, unknown>;

/** 服务商使用云托管开放服务 —— 请求体（文档未列字段，放行任意键）。 */
export type Jscode2sessionBody = Record<string, unknown>;
/** 服务商使用云托管开放服务 —— 返回体。 */
export type Jscode2sessionResp = Record<string, unknown>;

/**  —— 请求体（文档未列字段，放行任意键）。 */
export type TokenBody = Record<string, unknown>;
/**  —— 返回体。 */
export type TokenResp = Record<string, unknown>;

/** PC 小程序插件接入指南 Beta —— 请求体（文档未列字段，放行任意键）。 */
export type PcsdkLoginBody = Record<string, unknown>;
/** PC 小程序插件接入指南 Beta —— 返回体。 */
export type PcsdkLoginResp = Record<string, unknown>;

/** 获取行业屏蔽信息 —— 请求体（文档未列字段，放行任意键）。 */
export type OperationamsBody = Record<string, unknown>;
/** 获取行业屏蔽信息 —— 返回体。 */
export interface OperationamsResp {
  /** 错误码 */
  ret?: number;
  /** 错误信息 */
  err_msg?: string;
  /** 屏蔽的行业类别 */
  ams_category?: string;
}

/** 获取服务商广告明细数据 —— 请求体。 */
export interface GetdefaultamsinfoBody {
  /** 返回第几页数据 */
  page: number;
  /** 当页返回数据条数(最大为200) */
  page_size: number;
  /** 获取数据的开始时间yyyy-mm-dd */
  start_date: string;
  /** 获取数据的结束时间yyyy-mm-dd */
  end_date: string;
  /** 广告位类型名称 */
  ad_slot?: string;
}
/** 获取服务商广告明细数据 —— 返回体。 */
export interface GetdefaultamsinfoResp {
  /** 错误码 */
  ret?: number;
  /** 返回错误信息 */
  err_msg?: string;
  /** list */
  list?: unknown[];
  /** 请求返回总条数 */
  total_num?: number;
}

/** 设置自定义分账比例 —— 请求体。 */
export interface SetdefaultamsinfoBody {
  /** 服务商自定义分账比例。签约时，默认优先使用自定义分账比例，若不存在，则使用默认分账比例。如share_ratio为40，则代表服务商获得收益的40%，小程序商家获得收益的60% */
  share_ratio: number;
  /** 针对该小程序APPID设置自定义分账比例。 */
  appid: string;
}
/** 设置自定义分账比例 —— 返回体。 */
export interface SetdefaultamsinfoResp {
  /** 错误码 */
  ret?: number;
  /** 错误信息 */
  err_msg?: string;
}

/** 获取授权账号详情 —— 请求体。 */
export interface ApiGetAuthorizerInfoBody {
  /** 第三方平台 appid */
  component_appid: string;
  /** 授权的公众号或者小程序的appid */
  authorizer_appid: string;
}
/** 获取授权账号详情 —— 返回体。 */
export interface ApiGetAuthorizerInfoResp {
  /** 授权账号信息 */
  authorizer_info?: Record<string, unknown>;
  /** 授权信息 */
  authorization_info?: Record<string, unknown>;
}

/** 拉取已授权的账号信息 —— 请求体。 */
export interface ApiGetAuthorizerListBody {
  /** 第三方平台 APPID */
  component_appid: string;
  /** 偏移位置/起始位置 */
  offset: number;
  /** 拉取数量，最大为 500 */
  count: number;
}
/** 拉取已授权的账号信息 —— 返回体。 */
export interface ApiGetAuthorizerListResp {
  /** 授权的账号总数 */
  total_count?: number;
  /** 当前查询的帐号基本信息列表 */
  list?: unknown[];
}

/** 获取授权方选项信息 —— 请求体。 */
export interface GetAuthorizerOptionBody {
  /** 选项名称 */
  option_name: string;
}
/** 获取授权方选项信息 —— 返回体。 */
export interface GetAuthorizerOptionResp {
  /** 选项名称 */
  option_name?: string;
  /** 选项值 */
  option_value?: string;
}

/** 设置授权方选项信息 —— 请求体。 */
export interface SetAuthorizerOptionBody {
  /** 选项名称 */
  option_name: string;
  /** 设置的选项值 */
  option_value: string;
}
/** 设置授权方选项信息 —— 返回体。 */
export interface SetAuthorizerOptionResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 数据库聚合 —— 请求体。 */
export interface ComponenttcbDbaggregateBody {
  /** 云环境ID */
  env: string;
  /** 数据库操作语句 */
  query: string;
}
/** 数据库聚合 —— 返回体。 */
export interface ComponenttcbDbaggregateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 记录数组 */
  data?: unknown[];
}

/** 数据库导出 —— 请求体。 */
export interface ComponenttcbDbexportBody {
  /** 云环境ID */
  env: string;
  /** 导出文件路径（文件会导出到公共的云存储中，可使用获取下载链接 API 获取下载链接） */
  file_path: string;
  /** 导出文件类型，1表示JSON；2表示CSV。文件格式参考数据库导入指引中的 文件格式 部分 */
  file_type: number;
  /** 导出条件. */
  query: string;
}
/** 数据库导出 —— 返回体。 */
export interface ComponenttcbDbexportResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 导出任务ID，使用数据库迁移进度查询 API 查询导出结果，获取文件下载链接。 */
  job_id?: number;
}

/** 数据库导入 —— 请求体。 */
export interface ComponenttcbDbimportBody {
  /** 云环境ID */
  env: string;
  /** 导入collection名 */
  collection_name: string;
  /** 导入文件路径(导入文件需先上传到同环境的存储中，可使用开发者工具或 HTTP API的上传文件 API上传） */
  file_path: string;
  /** 导入文件类型，文件格式参考数据库导入指引中的 文件格式 部分 */
  file_type: number;
  /** 是否在遇到错误时停止导入 */
  stop_on_error: boolean;
  /** 冲突处理模式 */
  conflict_mode: number;
}
/** 数据库导入 —— 返回体。 */
export interface ComponenttcbDbimportResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 导入任务ID，可使用数据库迁移进度查询 API 查询导入进度及结果 */
  job_id?: number;
}

/** 数据库索引管理 —— 请求体。 */
export interface ComponenttcbDbindexBody {
  /** 操作类型 */
  action: string;
  /** 环境ID */
  env: string;
  /** 集合名称 */
  collection_name: string;
  /** 索引信息 */
  indexes: unknown[];
}
/** 数据库索引管理 —— 返回体。 */
export interface ComponenttcbDbindexResp {
  /** - */
  errcode?: number;
  /** - */
  errmsg?: string;
}

/** 数据库记录管理 —— 请求体。 */
export interface ComponenttcbDbrecordBody {
  /** 操作类型 */
  action: string;
  /** 环境ID */
  env: string;
  /** 数据库操作语句。 */
  query: string;
}
/** 数据库记录管理 —— 返回体。 */
export interface ComponenttcbDbrecordResp {
  /** 错误码 */
  errcode?: number;
  /** 错误i信息 */
  errmsg?: string;
  /** 插入成功的数据集合主键_id。insert时返回 */
  id_list?: unknown[];
  /** 删除记录数量。delete时返回 */
  deleted?: number;
  /** 更新条件匹配到的结果数。update时返回 */
  matched?: number;
  /** 修改的记录数，update时返回。注意：使用set操作新插入的数据不计入修改数目 */
  modified?: number;
  /** 新插入记录的id，update时返回。注意：只有使用set操作新插入数据时这个字段会有值 */
  id?: string;
  /** 分页信息。query时返回 */
  pager?: Record<string, unknown>;
  /** 记录数组。query时返回 */
  data?: unknown[];
}

/** 数据库状态查询 —— 请求体。 */
export interface ComponenttcbDbmigrationstateBody {
  /** 环境ID */
  env: string;
  /** 迁移任务ID */
  job_id: number;
}
/** 数据库状态查询 —— 返回体。 */
export interface ComponenttcbDbmigrationstateResp {
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

/** 获取数据库操作权限 —— 请求体。 */
export interface ComponenttcbDbgetaclBody {
  /** 环境ID */
  env: string;
  /** 集合名称 */
  collection_name: string;
}
/** 获取数据库操作权限 —— 返回体。 */
export interface ComponenttcbDbgetaclResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 权限说明 */
  acl_tag?: string;
  /** 自定义规则 */
  rule?: string;
}

/** 修改数据库操作权限 —— 请求体。 */
export interface ComponenttcbDbmodifyaclBody {
  /** 环境ID */
  env: string;
  /** 集合名称 */
  collection_name: string;
  /** 权限说明 */
  acl_tag: string;
  /** 自定义规则 */
  rule: string;
}
/** 修改数据库操作权限 —— 返回体。 */
export interface ComponenttcbDbmodifyaclResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 转换云环境 —— 请求体。 */
export interface TcbModifyenvBody {
  /** 环境id */
  env: string;
}
/** 转换云环境 —— 返回体。 */
export interface TcbModifyenvResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 创建环境 —— 请求体。 */
export interface ComponenttcbCreateenvBody {
  /** 环境别名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符 */
  alias: string;
  /** 环境类型：run */
  EnvType: string;
}
/** 创建环境 —— 返回体。 */
export interface ComponenttcbCreateenvResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 后付费订单号 */
  tranid?: string;
  /** 环境ID */
  env?: string;
}

/** 查询环境共享信息 —— 请求体。 */
export interface ComponenttcbBatchgetenvidBody {
  /** 要查询的appid */
  appids: unknown[];
  /** 请求环境源，填 1，表示云托管环境 */
  source_type: number;
}
/** 查询环境共享信息 —— 返回体。 */
export interface ComponenttcbBatchgetenvidResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 关系数据 */
  relation_data?: unknown[];
  /** 错误信息 */
  err_list?: unknown[];
}

/** 获取环境信息 —— 请求体（文档未列字段，放行任意键）。 */
export type ComponenttcbDescribeenvsBody = Record<string, unknown>;
/** 获取环境信息 —— 返回体。 */
export interface ComponenttcbDescribeenvsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 数据 */
  info_list?: unknown[];
}

/** 管理微信令牌权限 —— 请求体。 */
export interface TcbUsecloudaccesstokenBody {
  /** 可选get或者set */
  action: string;
  /** true表示开启，false表示关闭。全局配置，action=set时必填。 */
  open: boolean;
  /** api白名单，action=set时必填。 */
  api_whitelist: unknown[];
  /** 环境 id , 白名单为环境维度配置 */
  env: string;
  /** 版本号，action=set时必填 */
  version: number;
}
/** 管理微信令牌权限 —— 返回体。 */
export interface TcbUsecloudaccesstokenResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 开启/关闭，action=get时返回 */
  open?: boolean;
  /** api白名单，action=get时返回 */
  api_whitelist?: unknown[];
  /** 版本号，action=get时返回 */
  version?: number;
}

/** 环境共享 —— 请求体。 */
export interface ComponenttcbBatchshareenvBody {
  /** 共享信息 */
  data: unknown[];
  /** 请求环境源（云开发、云托管填不同的值，参考枚举） */
  source_type: number;
}
/** 环境共享 —— 返回体。 */
export interface ComponenttcbBatchshareenvResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 错误信息 */
  err_list?: unknown[];
  /** 确认信息 */
  msg_info_list?: unknown[];
}

/** 解除环境共享关联关系 —— 请求体。 */
export interface ComponenttcbBatchunshareenvBody {
  /** 解除共享的信息 */
  data: unknown[];
  /** 请求环境源，填 1，表示云托管环境 */
  source_type: number;
}
/** 解除环境共享关联关系 —— 返回体。 */
export interface ComponenttcbBatchunshareenvResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 错误详情 */
  err_list?: unknown[];
}

/** 删除文件 —— 请求体。 */
export interface ComponenttcbBatchdeletefileBody {
  /** 云环境ID */
  env: string;
  /** 文件 ID 列表 */
  fileid_list: unknown[];
}
/** 删除文件 —— 返回体。 */
export interface ComponenttcbBatchdeletefileResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 文件列表 */
  delete_list?: unknown[];
}

/** 获取下载文件链接 —— 请求体。 */
export interface ComponenttcbBatchdownloadfileBody {
  /** 云环境ID */
  env: string;
  /** 文件列表 */
  file_list: unknown[];
}
/** 获取下载文件链接 —— 返回体。 */
export interface ComponenttcbBatchdownloadfileResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 文件列表 */
  file_list?: unknown[];
}

/** 获取文件列表 —— 请求体。 */
export interface ComponenttcbGetbucketBody {
  /** 环境ID */
  env: string;
  /** 前缀匹配，用来规定返回的文件前缀地址 */
  prefix?: string;
  /** 定界符为一个符号，如果有 Prefix，则将 Prefix 到 delimiter 之间的相同路径归为一类，定义为 Common Prefix，然后列出所有 Common Prefix。如果没有 Pr */
  delimiter?: string;
  /** 默认以 UTF-8 二进制顺序列出条目，所有列出条目从marker开始 */
  marker?: string;
}
/** 获取文件列表 —— 返回体。 */
export interface ComponenttcbGetbucketResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 文件信息 */
  contents?: unknown[];
  /** 返回内容是否被截断 */
  is_truncated?: boolean;
}

/** 获取上传文件链接 —— 请求体。 */
export interface ComponenttcbUploadfileBody {
  /** 云环境ID */
  env: string;
  /** 上传路径 */
  path: string;
}
/** 获取上传文件链接 —— 返回体。 */
export interface ComponenttcbUploadfileResp {
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
}

/** 创建云函数 —— 请求体。 */
export interface ComponenttcbBatchuploadscfBody {
  /** 函数名 */
  functionname: string;
  /** 环境ID */
  envs: unknown[];
  /** 包含函数代码文件的 zip 格式文件，使用该接口时要求将 zip 文件的内容转成 base64 编码，最大支持20M （云开发自动上传云端依赖，无需手动上传） */
  zipfile: string;
  /** VPC唯一标识 */
  vpcid?: string;
  /** 子网id */
  subnetid?: string;
}
/** 创建云函数 —— 返回体。 */
export interface ComponenttcbBatchuploadscfResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 失败列表 */
  fail_env_list?: unknown[];
}

/** 删除云函数 —— 请求体。 */
export interface ComponenttcbDeletescfBody {
  /** 环境名 */
  functionname: string;
  /** 环境ID */
  env: string;
}
/** 删除云函数 —— 返回体。 */
export interface ComponenttcbDeletescfResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取云函数 —— 请求体。 */
export interface ComponenttcbGetscflistBody {
  /** 环境ID */
  env: string;
  /** 数据偏移量。默认值0 */
  offset?: number;
  /** 返回数据长度。默认值20 */
  limit?: number;
  /** 模糊匹配 functionName */
  searchkey?: string;
}
/** 获取云函数 —— 返回体。 */
export interface ComponenttcbGetscflistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 云函数个数 */
  total_count?: number;
  /** 云函数信息 */
  functions?: unknown[];
}

/** 获取触发器 —— 请求体。 */
export interface ComponenttcbGettriggersBody {
  /** 环境ID */
  env: string;
  /** 函数名 */
  funcname: string;
}
/** 获取触发器 —— 返回体。 */
export interface ComponenttcbGettriggersResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 触发器信息 */
  triggers?: unknown[];
}

/** 更新触发器 —— 请求体。 */
export interface ComponenttcbBatchupdatetriggersBody {
  /** 触发器信息 */
  triggers: unknown[];
  /** 函数名 */
  funcname: string;
  /** 环境ID */
  envs: unknown[];
}
/** 更新触发器 —— 返回体。 */
export interface ComponenttcbBatchupdatetriggersResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 失败列表 */
  err_list?: unknown[];
}

/** 更新云函数代码 —— 请求体。 */
export interface ComponenttcbBatchuploadscfcodeBody {
  /** 函数名 */
  functionname: string;
  /** 环境ID */
  envs: unknown[];
  /** 包含函数代码文件的 zip 格式文件，使用该接口时要求将 zip 文件的内容转成 base64 编码，最大支持20M（云开发自动上传云端依赖，无需手动上传） */
  zipfile: string;
}
/** 更新云函数代码 —— 返回体。 */
export interface ComponenttcbBatchuploadscfcodeResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 失败列表 */
  fail_list?: unknown[];
}

/** 更新云函数配置 —— 请求体。 */
export interface ComponenttcbUpdatescfconfigBody {
  /** 环境ID */
  env: string;
  /** 函数名 */
  functionname: string;
  /** 内存大小 */
  memorysize?: number;
  /** 超时时间，单位：秒 */
  timeout?: number;
  /** 环境变量 */
  environment_variables?: unknown[];
  /** 公网访问配置 */
  public_net_config?: Record<string, unknown>;
  /** 私有网络配置 */
  vpc_config?: Record<string, unknown>;
}
/** 更新云函数配置 —— 返回体。 */
export interface ComponenttcbUpdatescfconfigResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 开通静态网站 —— 请求体。 */
export interface ComponenttcbCreatestaticstoreBody {
  /** 环境ID */
  env: string;
}
/** 开通静态网站 —— 返回体。 */
export interface ComponenttcbCreatestaticstoreResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查看静态网站状态 —— 请求体。 */
export interface ComponenttcbDescribestaticstoreBody {
  /** 环境id */
  env: string;
}
/** 查看静态网站状态 —— 返回体。 */
export interface ComponenttcbDescribestaticstoreResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 数据 */
  data?: unknown[];
}

/** 获取静态网站文件列表 —— 请求体。 */
export interface ComponenttcbStaticfilelistBody {
  /** 环境ID */
  env: string;
  /** 前缀匹配，用来规定返回的文件前缀地址 */
  prefix?: string;
  /** 定界符为一个符号，如果有 Prefix，则将 Prefix 到 delimiter 之间的相同路径归为一类，定义为 Common Prefix，然后列出所有 Common Prefix。如果没有 Pr */
  delimiter?: string;
  /** 默认以 UTF-8 二进制顺序列出条目，所有列出条目从marker开始 */
  marker?: string;
}
/** 获取静态网站文件列表 —— 返回体。 */
export interface ComponenttcbStaticfilelistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 文件信息 */
  contents?: unknown[];
  /** 返回内容是否被截断 */
  is_truncated?: boolean;
}

/** 获取上传静态网站文件链接 —— 请求体。 */
export interface ComponenttcbStaticuploadfileBody {
  /** 环境ID */
  env: string;
  /** 上传文件路径 */
  filename: string;
}
/** 获取上传静态网站文件链接 —— 返回体。 */
export interface ComponenttcbStaticuploadfileResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 上传链接 */
  signed_url?: string;
  /** x-cos-security-token的值 */
  token?: string;
}

/** 查询是否绑定手机号 —— 请求体。 */
export interface TcbCheckmobileBody {
  /** 是否在小程序未绑定手机号时推送模版消息给管理员收集手机号 */
  push_tmpl?: boolean;
}
/** 查询是否绑定手机号 —— 返回体。 */
export interface TcbCheckmobileResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 是否绑定了手机号 */
  has_mobile?: boolean;
}

/** 开通云开发 —— 请求体（文档未列字段，放行任意键）。 */
export type TcbCreateclouduserBody = Record<string, unknown>;
/** 开通云开发 —— 返回体。 */
export interface TcbCreateclouduserResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
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

/** 数据库集合管理 —— 请求体。 */
export interface ComponenttcbDbcollectionBody {
  /** 环境ID */
  env: string;
  /** 返回数据长度。get时选填 */
  limit?: number;
  /** 数据偏移量。get时选填 */
  offset?: number;
  /** 操作类型 */
  action: string;
  /** 集合名称。add、del时必填 */
  collection_name: string;
}
/** 数据库集合管理 —— 返回体。 */
export interface ComponenttcbDbcollectionResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 集合信息。get时返回 */
  collections?: unknown[];
  /** 页面信息。get时返回 */
  total?: number;
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

/** 创建云环境 —— 请求体。 */
export interface TcbCreateenvandresourceBody {
  /** 参数值CreatePostpayPackage */
  type: string;
  /** 环境别名 */
  alias: string;
}
/** 创建云环境 —— 返回体。 */
export interface TcbCreateenvandresourceResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 环境id */
  envid?: string;
}

/** 获取云环境 —— 请求体。 */
export interface TcbGetenvinfoBody {
  /** 环境id，如果传了这个参数则只返回该环境的相关信息 */
  env?: string;
}
/** 获取云环境 —— 返回体。 */
export interface TcbGetenvinfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 环境信息 */
  info_list?: unknown[];
}

/** 环境共享 —— 请求体。 */
export interface TcbShareenvBody {
  /** 云环境ID */
  env: string;
  /** 被授权账号id */
  appid: string;
}
/** 环境共享 —— 返回体。 */
export interface TcbShareenvResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
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

/** 获取消息推送配置 —— 请求体（文档未列字段，放行任意键）。 */
export type TcbGetcallbackconfigBody = Record<string, unknown>;
/** 获取消息推送配置 —— 返回体。 */
export interface TcbGetcallbackconfigResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 数据 */
  data?: Record<string, unknown>;
}

/** 上传消息推送配置 —— 请求体。 */
export interface TcbSetcallbackconfigBody {
  /** 云函数配置，若不填则不更新 */
  function_config?: Record<string, unknown>;
  /** 云托管配置，若不填则不更新 */
  container_config: Record<string, unknown>;
}
/** 上传消息推送配置 —— 返回体。 */
export interface TcbSetcallbackconfigResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 创建云函数 —— 请求体。 */
export interface TcbCreatefunctionBody {
  /** 环境id */
  env: string;
  /** 云函数名 */
  function_name: string;
}
/** 创建云函数 —— 返回体。 */
export interface TcbCreatefunctionResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取代码保护密钥 —— 请求体（文档未列字段，放行任意键）。 */
export type TcbGetcodesecretBody = Record<string, unknown>;
/** 获取代码保护密钥 —— 返回体。 */
export interface TcbGetcodesecretResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 代码保护密钥 */
  codesecret?: string;
}

/** 获取云函数配置 —— 请求体。 */
export interface TcbGetfuncconfigBody {
  /** 配置类型 */
  type: number;
  /** 环境id */
  env: string;
  /** 云函数名 */
  function_name: string;
}
/** 获取云函数配置 —— 返回体。 */
export interface TcbGetfuncconfigResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 配置的json字符串 */
  config?: string;
}

/** 获取云函数下载地址 —— 请求体。 */
export interface TcbDownloadfunctionBody {
  /** 环境id */
  env: string;
  /** 云函数名 */
  function_name: string;
}
/** 获取云函数下载地址 —— 返回体。 */
export interface TcbDownloadfunctionResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 下载地址 */
  url?: string;
  /** 函数的SHA256编码 */
  checksum?: string;
}

/** 获取云函数列表 —— 请求体。 */
export interface TcbListfunctionsBody {
  /** 环境id */
  env: string;
  /** 获取数量限制 */
  limit: number;
  /** 偏移量 */
  offset: number;
}
/** 获取云函数列表 —— 返回体。 */
export interface TcbListfunctionsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 总量 */
  total_count?: number;
  /** 函数列表 */
  functions?: unknown[];
}

/** 上传云函数配置 —— 请求体。 */
export interface TcbUploadfuncconfigBody {
  /** 配置类型 */
  type: number;
  /** 环境id */
  env: string;
  /** 云函数名 */
  function_name: string;
  /** 配置的json字符串 */
  config: string;
}
/** 上传云函数配置 —— 返回体。 */
export interface TcbUploadfuncconfigResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取上传凭证 —— 请求体。 */
export interface TcbGetuploadsignatureBody {
  /** 上传云函数POST数据的签名 */
  hashed_payload: string;
}
/** 获取上传凭证 —— 返回体。 */
export interface TcbGetuploadsignatureResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 带签名headers */
  headers?: string;
}

/** 申请商户号授权 —— 请求体。 */
export interface TcbWxpayopenauthBody {
  /** bind/openjsapi/openrefund */
  action: string;
  /** 商户号 */
  merchant_code: string;
}
/** 申请商户号授权 —— 返回体。 */
export interface TcbWxpayopenauthResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取授权绑定的商户号列表 —— 请求体（文档未列字段，放行任意键）。 */
export type TcbWxpaylistBody = Record<string, unknown>;
/** 获取授权绑定的商户号列表 —— 返回体。 */
export interface TcbWxpaylistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 商户号信息 */
  list?: unknown[];
}

/** 创建云托管环境 —— 请求体。 */
export interface ComponenttcbCreatecloudbaserunenvBody {
  /** 环境别名，要以a-z开头，不能包含 a-z,0-9,- 以外的字符 */
  alias?: string;
  /** 私有网络Id */
  vpc_id?: string;
  /** 子网列表 */
  sub_net_ids?: unknown[];
}
/** 创建云托管环境 —— 返回体。 */
export interface ComponenttcbCreatecloudbaserunenvResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 环境id */
  env_id?: string;
  /** 后付费订单号 */
  tran_id?: string;
}

/** 获取环境信息 —— 请求体（文档未列字段，放行任意键）。 */
export type ComponenttcbDescribecloudbaserunenvsBody = Record<string, unknown>;
/** 获取环境信息 —— 返回体。 */
export interface ComponenttcbDescribecloudbaserunenvsResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 环境列表 */
  env_list?: unknown[];
}

/** 创建服务 —— 请求体。 */
export interface ComponenttcbEstablishcloudbaserunserverBody {
  /** 环境id */
  env_id: string;
  /** 服务名称 */
  service_name: string;
  /** 是否开通外网访问 */
  is_public: boolean;
  /** 镜像仓库 */
  image_repo?: string;
  /** 服务描述 */
  remark?: string;
  /** es信息 */
  es_info?: Record<string, unknown>;
  /** 日志类型; es/cls */
  log_type?: string;
  /** vpc信息 */
  vpc_info?: Record<string, unknown>;
  /** 0/1 */
  public_access?: number;
}
/** 创建服务 —— 返回体。 */
export interface ComponenttcbEstablishcloudbaserunserverResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 创建服务版本 —— 请求体。 */
export interface ComponenttcbCreatecloudbaserunserverversionBody {
  /** 环境ID */
  env_id: string;
  /** 枚举（package/repository/image/jar/war) */
  upload_type: string;
  /** 流量占比 */
  flow_ratio: number;
  /** Cpu的大小，单位：核 */
  cpu: number;
  /** Mem的大小，单位：G */
  mem: number;
  /** 最小副本数，最小值：0 */
  min_num: number;
  /** 副本最大数，最大值：50 */
  max_num: number;
  /** 策略类型(枚举值：比如cpu) */
  policy_type: string;
  /** 策略阈值 */
  policy_threshold: number;
  /** 服务端口 */
  container_port: number;
  /** 服务名称 */
  server_name?: string;
  /** repository的类型(coding/gitlab/github/coding) */
  repository_type?: string;
  /** Dockerfile地址 */
  dockerfile_path?: string;
  /** 构建目录 */
  build_dir?: string;
  /** 环境变量 */
  env_params?: string;
  /** repository地址 */
  repository?: string;
  /** 分支 */
  branch?: string;
  /** 版本备注 */
  version_remark?: string;
  /** 代码包名字 */
  package_name?: string;
  /** 代码包的版本 */
  package_version?: string;
  /** Image的详情 */
  image_info?: Record<string, unknown>;
  /** Github等拉取代码的详情 */
  code_detail?: Record<string, unknown>;
  /** 私有镜像秘钥信息 */
  image_secret_info?: Record<string, unknown>;
  /** 私有镜像 认证名称 */
  image_pull_secret?: string;
  /** 用户自定义采集日志路径 */
  custom_logs?: string;
  /** 延迟多长时间开始健康检查（单位s） */
  initial_delay_seconds?: number;
  /** cfs挂载信息 */
  mount_volume_info?: unknown[];
  /** 4 代表只能微信链路访问 */
  access_type?: number;
  /** es信息 */
  es_info?: Record<string, unknown>;
  /** 是否使用统一域名 */
  enable_union?: boolean;
  /** 服务路径 */
  server_path?: string;
  /** 容器的描述文件 */
  sidecar_specs?: unknown[];
  /** 安全特性 */
  security?: Record<string, unknown>;
  /** 服务磁盘挂载 */
  service_volumes?: unknown[];
  /** 是否创建JnsGw 0未传默认创建 1创建 2不创建 */
  is_create_jns_gw?: number;
  /** 数据卷挂载参数 */
  service_volume_mounts?: unknown[];
  /** 是否有Dockerfile：0-default has, 1-has, 2-has not */
  has_dockerfile?: number;
  /** 基础镜像 */
  base_image?: string;
  /** 容器启动入口命令 */
  entry_point?: string;
  /** 仓库语言 */
  repo_language?: string;
  /** 文件名 */
  upload_filename?: string;
  /** 自动扩缩容策略组 */
  policy_detail?: unknown[];
}
/** 创建服务版本 —— 返回体。 */
export interface ComponenttcbCreatecloudbaserunserverversionResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 结果(creating/succ) */
  result?: string;
  /** 版本名称（只有 Result 为succ的时候，才会返回VersionName) */
  version_name?: string;
  /** 操作记录id */
  run_id?: string;
}

/** 删除服务版本 —— 请求体。 */
export interface ComponenttcbDeletecloudbaserunserverversionBody {
  /** 环境ID */
  env_id: string;
  /** 服务名称 */
  server_name: string;
  /** 版本名称 */
  version_name: string;
  /** 是否删除服务，只有最后一个版本的时候，才生效。 */
  is_delete_server?: boolean;
  /** 是否删除镜像。只有删除服务的时候，才会起作用 */
  is_delete_image?: boolean;
}
/** 删除服务版本 —— 返回体。 */
export interface ComponenttcbDeletecloudbaserunserverversionResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 返回结果，succ为成功 */
  result?: string;
}

/** 发布服务 —— 请求体。 */
export interface ComponenttcbReleasecloudbaserunversionBody {
  /** 环境id */
  env_id: string;
  /** 服务名称 */
  server_name: string;
  /** 发布版本 */
  release_version: string;
}
/** 发布服务 —— 返回体。 */
export interface ComponenttcbReleasecloudbaserunversionResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 是否成功，success是成功，failed是失败 */
  result?: string;
  /** 发布单id */
  release_order_id?: number;
}

/** 滚动更新服务版本 —— 请求体。 */
export interface ComponenttcbRollupdatecloudbaserunserverversionBody {
  /** 环境ID */
  env_id: string;
  /** 要替换的版本名称，可以为latest */
  version_name: string;
  /** 枚举（package/repository/image) */
  upload_type?: string;
  /** repository的类型(coding/gitlab/github) */
  repository_type?: string;
  /** 流量占比 */
  flow_ratio?: number;
  /** dockerfile地址 */
  dockerfile_path?: string;
  /** 构建目录 */
  build_dir?: string;
  /** Cpu的大小，单位：核 */
  cpu?: string;
  /** Mem的大小，单位：G */
  mem?: string;
  /** 最小副本数，最小值：0 */
  min_num?: string;
  /** 最大副本数 */
  max_num?: string;
  /** 策略类型 */
  policy_type?: string;
  /** 策略阈值 */
  policy_threshold?: string;
  /** 环境变量 */
  env_params?: string;
  /** 容器端口 */
  container_port?: number;
  /** 服务名称 */
  server_name?: string;
  /** repository地址 */
  repository?: string;
  /** 分支 */
  branch?: string;
  /** 版本备注 */
  version_remark?: string;
  /** 代码包名字 */
  package_name?: string;
  /** 代码包版本 */
  package_version?: string;
  /** Image的详情 */
  image_info?: Record<string, unknown>;
  /** Github等拉取代码的详情 */
  code_detail?: Record<string, unknown>;
  /** 是否回放流量 */
  is_rebuild?: boolean;
  /** 延迟多长时间开始健康检查（单位s） */
  initial_delay_seconds?: number;
  /** cfs挂载信息 */
  mount_volume_info?: unknown[];
  /** 是否回滚 */
  rollback?: boolean;
  /** 版本历史名 */
  snapshot_name?: string;
  /** 自定义采集路径 */
  custom_logs?: string;
  /** 是否启用统一域名 */
  enable_union?: boolean;
  /** 服务路径（只会第一次生效） */
  server_path?: string;
  /** 是否更新Cls */
  is_update_cls?: boolean;
  /** 自动扩缩容策略组 */
  policy_detail?: unknown[];
}
/** 滚动更新服务版本 —— 返回体。 */
export interface ComponenttcbRollupdatecloudbaserunserverversionResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** succ为成功 */
  result?: string;
  /** 操作记录id */
  run_id?: string;
}

/** 申请设置订单页path信息 —— 请求体。 */
export interface SecurityApplysetorderpathinfoBody {
  /** 批量申请的信息 */
  batch_req: Record<string, unknown>;
}
/** 申请设置订单页path信息 —— 返回体。 */
export interface SecurityApplysetorderpathinfoResp {
  /** 返回码 */
  errcode?: number;
  /** 返回码信息 */
  errmsg?: string;
}

/** 小程序名称检测 —— 请求体。 */
export interface WxverifyCheckwxverifynicknameBody {
  /** 名称（昵称） */
  nick_name: string;
}
/** 小程序名称检测 —— 返回体。 */
export interface WxverifyCheckwxverifynicknameResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 是否命中关键字策略。若命中，可以选填关键字材料 */
  hit_condition?: boolean;
  /** 命中关键字的说明描述 */
  wording?: string;
}

/** 获取基本信息 —— 请求体（文档未列字段，放行任意键）。 */
export type AccountGetaccountbasicinfoBody = Record<string, unknown>;
/** 获取基本信息 —— 返回体。 */
export interface AccountGetaccountbasicinfoResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 账号 appid */
  appid?: string;
  /** 账号类型（1：订阅号，2：服务号，3：小程序） */
  account_type?: number;
  /** 主体类型 */
  principal_type?: number;
  /** 主体名称 */
  principal_name?: string;
  /** 实名验证状态 */
  realname_status?: number;
  /** 微信认证信息 */
  wx_verify_info?: Record<string, unknown>;
  /** 功能介绍信息 */
  signature_info?: Record<string, unknown>;
  /** 头像信息 */
  head_image_info?: Record<string, unknown>;
  /** 小程序名称 */
  nickname?: string;
  /** 注册国家 */
  registered_country?: number;
  /** 名称信息 */
  nickname_info?: Record<string, unknown>;
  /** 非个人主体时返回的是企业或者政府或其他组织的代号 */
  credential?: string;
  /** 认证类型；如果未完成微信认证则返回0；不同枚举值对应的类型说明看下方 */
  customer_type?: number;
}

/** 查询绑定的开放平台账号 —— 请求体（文档未列字段，放行任意键）。 */
export type OpenHaveBody = Record<string, unknown>;
/** 查询绑定的开放平台账号 —— 返回体。 */
export interface OpenHaveResp {
  /** 是否绑定open账号，true表示绑定；false表示未绑定任何open账号 */
  have_open?: boolean;
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询开放平台账号是否与小程序同主体 —— 请求体（文档未列字段，放行任意键）。 */
export type OpenSameentityBody = Record<string, unknown>;
/** 查询开放平台账号是否与小程序同主体 —— 返回体。 */
export interface OpenSameentityResp {
  /** 是否同主体；true表示同主体；false表示不同主体 */
  same_entity?: boolean;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 数据预拉取和数据周期性更新 —— 请求体。 */
export interface FetchdatasettingBody {
  /** 可填"get"、“ set_pre_fetch”、"set_period_fetch" */
  action: string;
  /** 数据预拉取是否开启，action=set_pre_fetch时，必填 */
  is_pre_fetch_open?: boolean;
  /** 数据来源，0: 开发者服务器；1：云函数。action=set_pre_fetch时，必填 */
  pre_fetch_type?: number;
  /** 数据下载地址，当pre_fetch_type=0必填。 说明，1、需要将域名先添加到第三方平台的业务域名；2、然后将该域名添加到小程序业务域名；才可以成功设置 */
  pre_fetch_url?: string;
  /** 环境ID，当pre_fetch_type=1必填 */
  pre_env?: string;
  /** 函数名，当pre_fetch_type=1必填 */
  pre_function_name?: string;
  /** 周期性拉取数据是否开启，true开启，false关闭。action= set_period_fetch时，必填 */
  is_period_fetch_open?: boolean;
  /** 数据来源，0: 开发者服务器；1：云函数。action= set_period_fetch时，必填 */
  period_fetch_type?: number;
  /** 数据下载地址，当period_fetch_type=0必填； 1、需要将域名先添加到第三方平台的业务域名；2、然后将该域名添加到小程序业务域名；才可以成功设置 */
  period_fetch_url?: string;
  /** 环境ID，当period_fetch_type=1必填 */
  period_env?: string;
  /** 函数名，当period_fetch_type=1必填 */
  period_function_name?: string;
}
/** 数据预拉取和数据周期性更新 —— 返回体。 */
export interface FetchdatasettingResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 数据预拉取是否开启 */
  is_pre_fetch_open?: boolean;
  /** 数据来源，0: 开发者服务器；1：云函数 */
  pre_fetch_type?: number;
  /** 数据下载地址，当pre_fetch_type=0有效 */
  pre_fetch_url?: string;
  /** 环境ID，当pre_fetch_type=1有效 */
  pre_env?: string;
  /** 函数名，当pre_fetch_type=1有效 */
  pre_function_name?: string;
  /** 数据周期性更新是否开启 */
  is_period_fetch_open?: boolean;
  /** 0: 开发者服务器；1：云函数 */
  period_fetch_type?: number;
  /** 数据下载地址当period_fetch_type=0有效 */
  period_fetch_url?: string;
  /** 环境ID，当period_fetch_type=1有效 */
  period_env?: string;
  /** 函数名，当period_fetch_type=1有效 */
  period_function_name?: string;
}

/** 查询小程序名称审核状态 —— 请求体。 */
export interface ApiWxaQuerynicknameBody {
  /** 审核单 id，由设置名称接口返回 */
  audit_id: number;
}
/** 查询小程序名称审核状态 —— 返回体。 */
export interface ApiWxaQuerynicknameResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 审核昵称 */
  nickname?: string;
  /** 审核状态，1：审核中，2：审核失败，3：审核成功 */
  audit_stat?: number;
  /** 失败原因 */
  fail_reason?: string;
  /** 审核提交时间 */
  create_time?: number;
  /** 审核完成时间 */
  audit_time?: number;
}

/** 获取订单页path信息 —— 请求体。 */
export interface SecurityGetorderpathinfoBody {
  /** 0:线上版，1:审核版 */
  info_type: number;
}
/** 获取订单页path信息 —— 返回体。 */
export interface SecurityGetorderpathinfoResp {
  /** 返回码 */
  errcode?: number;
  /** 返回码信息 */
  errmsg?: string;
  /** 订单页path信息 */
  msg?: Record<string, unknown>;
}

/** 获取搜索状态 —— 请求体（文档未列字段，放行任意键）。 */
export type GetwxasearchstatusBody = Record<string, unknown>;
/** 获取搜索状态 —— 返回体。 */
export interface GetwxasearchstatusResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 1 表示不可搜索，0 表示可搜索 */
  status?: number;
}

/** 修改头像 —— 请求体。 */
export interface AccountModifyheadimageBody {
  /** 头像素材 media_id */
  head_img_media_id: string;
  /** 裁剪框左上角 x 坐标（取值范围：[0, 1]） */
  x1: string;
  /** 裁剪框左上角 y 坐标（取值范围：[0, 1]） */
  y1: string;
  /** 裁剪框右下角 x 坐标（取值范围：[0, 1]） */
  x2: string;
  /** 裁剪框右下角 y 坐标（取值范围：[0, 1]） */
  y2: string;
}
/** 修改头像 —— 返回体。 */
export interface AccountModifyheadimageResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 设置小程序名称 —— 请求体。 */
export interface SetnicknameBody {
  /** 昵称，不支持包含“小程序”关键字的昵称 */
  nick_name: string;
  /** 身份证照片 mediaid，个人号必填 */
  id_card: string;
  /** 组织机构代码证或营业执照 mediaid，组织号必填 */
  license: string;
  /** 其他证明材料 mediaid */
  naming_other_stuff_1?: string;
  /** 其他证明材料 mediaid */
  naming_other_stuff_2?: string;
  /** 其他证明材料 mediaid */
  naming_other_stuff_3?: string;
  /** 其他证明材料 mediaid */
  naming_other_stuff_4?: string;
  /** 其他证明材料 mediaid */
  naming_other_stuff_5?: string;
}
/** 设置小程序名称 —— 返回体。 */
export interface SetnicknameResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 材料说明 */
  wording?: string;
  /** 审核单 id，通过用于查询改名审核状态 */
  audit_id?: number;
}

/** 设置搜索状态 —— 请求体。 */
export interface ChangewxasearchstatusBody {
  /** 1 表示不可搜索，0 表示可搜索 */
  status: number;
}
/** 设置搜索状态 —— 返回体。 */
export interface ChangewxasearchstatusResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 设置小程序介绍 —— 请求体。 */
export interface AccountModifysignatureBody {
  /** 功能介绍（简介） */
  signature: string;
}
/** 设置小程序介绍 —— 返回体。 */
export interface AccountModifysignatureResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 添加类目 —— 请求体。 */
export interface WxopenAddcategoryBody {
  /** 类目信息列表 */
  categories: unknown[];
}
/** 添加类目 —— 返回体。 */
export interface WxopenAddcategoryResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 删除类目 —— 请求体。 */
export interface WxopenDeletecategoryBody {
  /** 一级类目 ID */
  first: number;
  /** 二级类目 ID */
  second: number;
}
/** 删除类目 —— 返回体。 */
export interface WxopenDeletecategoryResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取可设置的所有类目 —— 请求体（文档未列字段，放行任意键）。 */
export type WxopenGetallcategoriesBody = Record<string, unknown>;
/** 获取可设置的所有类目 —— 返回体。 */
export interface WxopenGetallcategoriesResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 类目信息列表 */
  categories_list?: Record<string, unknown>;
}

/** 获取不同类型主体可设置的类目 —— 请求体。 */
export interface WxopenGetcategoriesbytypeBody {
  /** 如果不填，默认传0；个人主体是0；企业主体是1；政府是2；媒体是3；其他组织是4 */
  verify_type: number;
}
/** 获取不同类型主体可设置的类目 —— 返回体。 */
export interface WxopenGetcategoriesbytypeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 类目信息列表 */
  categories_list?: Record<string, unknown>;
}

/** 获取类目名称信息 —— 请求体（文档未列字段，放行任意键）。 */
export type GetCategoryBody = Record<string, unknown>;
/** 获取类目名称信息 —— 返回体。 */
export interface GetCategoryResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 类目信息列表 */
  category_list?: unknown[];
}

/** 获取已设置的所有类目 —— 请求体（文档未列字段，放行任意键）。 */
export type WxopenGetcategoryBody = Record<string, unknown>;
/** 获取已设置的所有类目 —— 返回体。 */
export interface WxopenGetcategoryResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 已设置的类目信息列表 */
  categories?: unknown[];
  /** 一个更改周期内可以添加类目的次数 */
  limit?: number;
  /** 本更改周期内还可以添加类目的次数 */
  quota?: number;
  /** 最多可以设置的类目数量 */
  category_limit?: number;
}

/** 修改类目资质信息 —— 请求体。 */
export interface WxopenModifycategoryBody {
  /** 一级类目 ID */
  first: number;
  /** 二级类目 ID */
  second: number;
  /** 资质信息列表 */
  certicates: unknown[];
}
/** 修改类目资质信息 —— 返回体。 */
export interface WxopenModifycategoryResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 上传代码并生成体验版 —— 请求体。 */
export interface CommitBody {
  /** 代码库中的代码模板 ID，可通过getTemplateList接口获取代码模板template_id。 */
  template_id: number;
  /** 为了方便第三方平台的开发者引入 extAppid 的开发调试工作，引入ext.json配置文件概念，该参数则是用于控制ext.json配置文件的内容。关于该参数的补充说明请查看下方的"ext_json */
  ext_json: string;
  /** 代码版本号，开发者可自定义（长度不要超过 64 个字符） */
  user_version: string;
  /** 代码描述，开发者可自定义 */
  user_desc: string;
}
/** 上传代码并生成体验版 —— 返回体。 */
export interface CommitResp {
  /** 返回码 */
  errcode?: number;
  /** 返回信息 */
  errmsg?: string;
}

/** 查询审核单状态 —— 请求体。 */
export interface GetAuditstatusBody {
  /** 提交审核时获得的审核 id */
  auditid: number;
}
/** 查询审核单状态 —— 返回体。 */
export interface GetAuditstatusResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 审核状态 */
  status?: number;
  /** 当 status = 1 时，返回的拒绝原因; status = 4 时，返回的延后原因 */
  reason?: string;
  /** 当 status = 1 时，会返回审核失败的小程序截图示例。用竖线分隔的 media_id 的列表，可通过获取永久素材接口拉取截图内容 */
  screenshot?: string;
}

/** 获取已上传的代码页面列表 —— 请求体（文档未列字段，放行任意键）。 */
export type GetPageBody = Record<string, unknown>;
/** 获取已上传的代码页面列表 —— 返回体。 */
export interface GetPageResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** page_list 页面配置列表 */
  page_list?: unknown[];
}

/** 获取隐私接口检测结果 —— 请求体（文档未列字段，放行任意键）。 */
export type SecurityGetCodePrivacyInfoBody = Record<string, unknown>;
/** 获取隐私接口检测结果 —— 返回体。 */
export interface SecurityGetCodePrivacyInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 没权限的隐私接口的api英文名 */
  without_auth_list?: unknown[];
  /** 没配置的隐私接口的api英文名 */
  without_conf_list?: unknown[];
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

/** 查询最新一次审核单状态 —— 请求体（文档未列字段，放行任意键）。 */
export type GetLatestAuditstatusBody = Record<string, unknown>;
/** 查询最新一次审核单状态 —— 返回体。 */
export interface GetLatestAuditstatusResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 最新的审核id */
  auditid?: number;
  /** 审核状态 */
  status?: number;
  /** 当审核被拒绝时，返回的拒绝原因 */
  reason?: string;
  /** 当审核被拒绝时，会返回审核失败的小程序截图示例。用 竖线I 分隔的 media_id 的列表，可通过获取永久素材接口拉取截图内容 */
  screenshot?: string;
  /** 审核版本 */
  user_version?: string;
  /** 版本描述 */
  user_desc?: string;
  /** 时间戳，提交审核的时间 */
  submit_audit_time?: number;
}

/** 查询各版本用户占比 —— 请求体（文档未列字段，放行任意键）。 */
export type WxopenGetweappsupportversionBody = Record<string, unknown>;
/** 查询各版本用户占比 —— 返回体。 */
export interface WxopenGetweappsupportversionResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 当前版本 */
  now_version?: string;
  /** 版本的用户占比列表 */
  uv_info?: Record<string, unknown>;
}

/** 获取体验版二维码 —— 请求体。 */
export interface GetQrcodeBody {
  /** 指定二维码扫码后直接进入指定页面并可同时带上参数 */
  path?: string;
}
/** 获取体验版二维码 —— 返回体。 */
export interface GetQrcodeResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询小程序版本信息 —— 请求体（文档未列字段，放行任意键）。 */
export type GetversioninfoBody = Record<string, unknown>;
/** 查询小程序版本信息 —— 返回体。 */
export interface GetversioninfoResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 体验版信息 */
  exp_info?: Record<string, unknown>;
  /** 线上版信息 */
  release_info?: Record<string, unknown>;
}

/** 查询小程序服务状态 —— 请求体（文档未列字段，放行任意键）。 */
export type GetvisitstatusBody = Record<string, unknown>;
/** 查询小程序服务状态 —— 返回体。 */
export interface GetvisitstatusResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 服务状态。0表示已暂停服务（包含主动暂停服务违规被暂停服务）。1表示未暂停服务。 */
  status?: number;
}

/** 分阶段发布 —— 请求体。 */
export interface GrayreleaseBody {
  /** 灰度的百分比 0~ 100 的整。如果gray_percentage=0，support_experiencer_first与support_debuger_first二选一必填 */
  gray_percentage: number;
  /** true表示支持按项目成员灰度，默认是false */
  support_debuger_first?: boolean;
  /** true表示支持按体验成员灰度，默认是false */
  support_experiencer_first?: boolean;
}
/** 分阶段发布 —— 返回体。 */
export interface GrayreleaseResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 发布已通过审核的小程序 —— 请求体（文档未列字段，放行任意键）。 */
export type ReleaseBody = Record<string, unknown>;
/** 发布已通过审核的小程序 —— 返回体。 */
export interface ReleaseResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 小程序版本回退 —— 请求体。 */
export interface RevertcodereleaseBody {
  /** 只能填get_history_version。表示获取可回退的小程序版本。该参数为 URL 参数，非 Body 参数。 */
  action?: string;
  /** 默认是回滚到上一个版本；也可回滚到指定的小程序版本，可通过get_history_version获取app_version。该参数为 URL 参数，非 Body 参数。 */
  app_version?: string;
}
/** 小程序版本回退 —— 返回体。 */
export interface RevertcodereleaseResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 模板信息列表。当action=get_history_version，才会返回。 */
  version_list?: Record<string, unknown>;
}

/** 取消分阶段发布 —— 请求体（文档未列字段，放行任意键）。 */
export type RevertgrayreleaseBody = Record<string, unknown>;
/** 取消分阶段发布 —— 返回体。 */
export interface RevertgrayreleaseResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询服务商审核额度 —— 请求体（文档未列字段，放行任意键）。 */
export type QueryquotaBody = Record<string, unknown>;
/** 查询服务商审核额度 —— 返回体。 */
export interface QueryquotaResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** quota剩余值 */
  rest?: number;
  /** 当月分配quota */
  limit?: number;
  /** 剩余加急次数 */
  speedup_rest?: number;
  /** 当月分配加急次数 */
  speedup_limit?: number;
}

/** 设置最低基础库版本 —— 请求体。 */
export interface WxopenSetweappsupportversionBody {
  /** 为已发布的基础库版本号 */
  version: string;
}
/** 设置最低基础库版本 —— 返回体。 */
export interface WxopenSetweappsupportversionResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 设置小程序服务状态 —— 请求体。 */
export interface ChangeVisitstatusBody {
  /** 设置可访问状态，发布后默认可访问，close 为不可见，open 为可见 */
  action: string;
}
/** 设置小程序服务状态 —— 返回体。 */
export interface ChangeVisitstatusResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 加急代码审核 —— 请求体。 */
export interface SpeedupauditBody {
  /** 审核单ID */
  auditid: number;
}
/** 加急代码审核 —— 返回体。 */
export interface SpeedupauditResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 提交代码审核 —— 请求体。 */
export interface SubmitAuditBody {
  /** 审核项列表（选填，至多填写 5 项）；类目是必填的，且要填写已经在小程序配置好的类目。 */
  item_list: unknown[];
  /** 反馈内容，至多 200 字 */
  feedback_info?: string;
  /** 用 | 分割的 media_id 列表，至多 5 张图片, 可以通过新增临时素材接口上传而得到 */
  feedback_stuff?: string;
  /** 小程序版本说明和功能解释 */
  version_desc?: string;
  /** 预览信息（小程序页面截图和操作录屏） */
  preview_info?: Record<string, unknown>;
  /** 用户生成内容场景（UGC）信息安全声明 */
  ugc_declare?: Record<string, unknown>;
  /** 用于声明是否不使用“代码中检测出但是未配置的隐私相关接口” */
  privacy_api_not_use?: boolean;
  /** 订单中心path */
  order_path?: string;
}
/** 提交代码审核 —— 返回体。 */
export interface SubmitAuditResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 审核编号 */
  auditid?: number;
}

/** 撤回代码审核 —— 请求体（文档未列字段，放行任意键）。 */
export type UndocodeauditBody = Record<string, unknown>;
/** 撤回代码审核 —— 返回体。 */
export interface UndocodeauditResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 上传提审素材 —— 请求体。 */
export interface UploadmediaBody {
  /** 图片（image）: 2M，支持PNG\JPEG\JPG\GIF格式 视频（video）：10MB，支持MP4格式 完成素材上传后，使用返回的mediaid，可以在提审接口通过post preview */
  media: unknown;
}
/** 上传提审素材 —— 返回体。 */
export interface UploadmediaResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 类型 */
  type?: string;
  /** 媒体id */
  mediaid?: unknown;
}

/** 获取发布后生效业务域名列表 —— 请求体（文档未列字段，放行任意键）。 */
export type GetEffectiveWebviewdomainBody = Record<string, unknown>;
/** 获取发布后生效业务域名列表 —— 返回体。 */
export interface GetEffectiveWebviewdomainResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 通过公众平台配置的服务器域名列表 */
  mp_webviewdomain?: unknown[];
  /** 通过第三方平台接口modifyJumpDomain 配置的业务域名 */
  third_webviewdomain?: unknown[];
  /** 通过modifyJumpDomainDirectly接口配置的业务域名列表 */
  direct_webviewdomain?: unknown[];
  /** 最后提交代码或者发布上线后生效的域名列表 */
  effective_webviewdomain?: unknown[];
}

/** 获取发布后生效服务器域名列表 —— 请求体（文档未列字段，放行任意键）。 */
export type GetEffectiveDomainBody = Record<string, unknown>;
/** 获取发布后生效服务器域名列表 —— 返回体。 */
export interface GetEffectiveDomainResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 通过公众平台配置的服务器域名列表 */
  mp_domain?: Record<string, unknown>;
  /** 通过第三方平台接口modify_domain 配置的服务器域名 */
  third_domain?: Record<string, unknown>;
  /** 通过“modify_domain_directly”接口配置的服务器域名列表 */
  direct_domain?: Record<string, unknown>;
  /** 最后提交代码或者发布上线后生效的域名列表 */
  effective_domain?: Record<string, unknown>;
}

/** 获取业务域名校验文件 —— 请求体（文档未列字段，放行任意键）。 */
export type GetWebviewdomainConfirmfileBody = Record<string, unknown>;
/** 获取业务域名校验文件 —— 返回体。 */
export interface GetWebviewdomainConfirmfileResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 文件名 */
  file_name?: string;
  /** 文件内容 */
  file_content?: string;
}

/** 获取DNS预解析域名 —— 请求体（文档未列字段，放行任意键）。 */
export type GetPrefetchdnsdomainBody = Record<string, unknown>;
/** 获取DNS预解析域名 —— 返回体。 */
export interface GetPrefetchdnsdomainResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 预解析dns域名 */
  prefetch_dns_domain?: Record<string, unknown>;
  /** 总共可配置域名个数 */
  size_limit?: number;
}

/** 配置小程序业务域名 —— 请求体。 */
export interface SetwebviewdomainBody {
  /** 操作类型，如果没有指定 action，则默认将第三方平台登记的小程序业务域名全部添加到该小程序 */
  action?: string;
  /** 小程序业务域名，当 action 参数是 get 时不需要此字段 */
  webviewdomain?: unknown[];
}
/** 配置小程序业务域名 —— 返回体。 */
export interface SetwebviewdomainResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 快速配置小程序业务域名 —— 请求体。 */
export interface SetwebviewdomainDirectlyBody {
  /** 操作类型 */
  action: string;
  /** 小程序业务域名，当 action 参数是 get 时不需要此字段 */
  webviewdomain: unknown[];
}
/** 快速配置小程序业务域名 —— 返回体。 */
export interface SetwebviewdomainDirectlyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 业务域名 */
  webviewdomain?: unknown[];
}

/** 配置小程序服务器域名 —— 请求体。 */
export interface ModifyDomainBody {
  /** 操作类型 */
  action: string;
  /** request 合法域名；当 action 是 get 时不需要此字段 */
  requestdomain: unknown[];
  /** socket 合法域名；当 action 是 get 时不需要此字段 */
  wsrequestdomain: unknown[];
  /** uploadFile 合法域名；当 action 是 get 时不需要此字段 */
  uploaddomain: unknown[];
  /** downloadFile 合法域名；当 action 是 get 时不需要此字段 */
  downloaddomain: unknown[];
  /** udp 合法域名；当 action 是 get 时不需要此字段 */
  udpdomain: unknown[];
  /** tcp 合法域名；当 action 是 get 时不需要此字段 */
  tcpdomain: unknown[];
}
/** 配置小程序服务器域名 —— 返回体。 */
export interface ModifyDomainResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** request 合法域名 */
  requestdomain?: unknown[];
  /** socket 合法域名 */
  wsrequestdomain?: unknown[];
  /** uploadFile 合法域名 */
  uploaddomain?: unknown[];
  /** downloadFile 合法域名 */
  downloaddomain?: unknown[];
  /** udp 合法域名 */
  udpdomain?: unknown[];
  /** tcp 合法域名 */
  tcpdomain?: unknown[];
  /** request 不合法域名 */
  invalid_requestdomain?: unknown[];
  /** socket 不合法域名 */
  invalid_wsrequestdomain?: unknown[];
  /** uploadFile 不合法域名 */
  invalid_uploaddomain?: unknown[];
  /** downloadFile 不合法域名 */
  invalid_downloaddomain?: unknown[];
  /** udp 不合法域名 */
  invalid_udpdomain?: unknown[];
  /** tcp 不合法域名 */
  invalid_tcpdomain?: unknown[];
  /** 没有经过icp备案的域名 */
  no_icp_domain?: unknown[];
}

/** 快速配置小程序服务器域名 —— 请求体。 */
export interface ModifyDomainDirectlyBody {
  /** 操作类型 */
  action: string;
  /** request 合法域名；当 action 是 get 时不需要此字 */
  requestdomain: unknown[];
  /** socket 合法域名；当 action 是 get 时不需要此字段 */
  wsrequestdomain: unknown[];
  /** uploadFile 合法域名；当 action 是 get 时不需要此字段 */
  uploaddomain: unknown[];
  /** downloadFile 合法域名；当 action 是 get 时不需要此字段 */
  downloaddomain: unknown[];
  /** udp 合法域名；当 action 是 get 时不需要此字段 */
  udpdomain: unknown[];
  /** tcp 合法域名；当 action 是 get 时不需要此字段 */
  tcpdomain: unknown[];
}
/** 快速配置小程序服务器域名 —— 返回体。 */
export interface ModifyDomainDirectlyResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 设置DNS预解析域名 —— 请求体。 */
export interface SetPrefetchdnsdomainBody {
  /** 预解析域名 */
  prefetch_dns_domain: Record<string, unknown>;
}
/** 设置DNS预解析域名 —— 返回体。 */
export interface SetPrefetchdnsdomainResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 添加半屏小程序 —— 请求体。 */
export interface WxaembeddedAddEmbeddedBody {
  /** 添加的半屏小程序 appid */
  appid: string;
  /** 申请理由，不超过 30 个字 */
  apply_reason?: string;
}
/** 添加半屏小程序 —— 返回体。 */
export interface WxaembeddedAddEmbeddedResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 取消授权小程序 —— 请求体。 */
export interface WxaembeddedDelAuthorizeBody {
  /** 取消授权半屏小程序 appid */
  appid: string;
}
/** 取消授权小程序 —— 返回体。 */
export interface WxaembeddedDelAuthorizeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 删除半屏小程序 —— 请求体。 */
export interface WxaembeddedDelEmbeddedBody {
  /** 已添加的半屏小程序appid */
  appid: string;
}
/** 删除半屏小程序 —— 返回体。 */
export interface WxaembeddedDelEmbeddedResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取半屏小程序调用列表 —— 请求体。 */
export interface WxaembeddedGetListBody {
  /** query参数，分页起始值 ，默认值为0 */
  start?: number;
  /** query参数，一次拉取最大值，最大 1000，默认值为10 */
  num?: number;
}
/** 获取半屏小程序调用列表 —— 返回体。 */
export interface WxaembeddedGetListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 半屏小程序列表 */
  wxa_embedded_list?: unknown[];
  /** 授权方式。0表示需要管理员确认，1表示自动通过，2表示自动拒绝 */
  embedded_flag?: number;
}

/** 获取半屏小程序授权列表 —— 请求体。 */
export interface WxaembeddedGetOwnListBody {
  /** query参数，分页起始值 ，默认值为0 */
  start?: number;
  /** query参数，一次拉取最大值，最大 1000，默认值为10 */
  num?: number;
}
/** 获取半屏小程序授权列表 —— 返回体。 */
export interface WxaembeddedGetOwnListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 半屏小程序列表 */
  wxa_embedded_list?: unknown[];
  /** 授权方式。0表示需要管理员确认，1表示自动通过，2表示自动拒绝 */
  embedded_flag?: number;
}

/** 设置授权方式 —— 请求体。 */
export interface WxaembeddedSetAuthorizeBody {
  /** 半屏小程序授权方式。0表示需要管理员验证；1表示自动通过；2表示自动拒绝。 */
  flag: number;
}
/** 设置授权方式 —— 返回体。 */
export interface WxaembeddedSetAuthorizeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取校验文件名称及内容 —— 请求体（文档未列字段，放行任意键）。 */
export type WxopenQrcodejumpdownloadBody = Record<string, unknown>;
/** 获取校验文件名称及内容 —— 返回体。 */
export interface WxopenQrcodejumpdownloadResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 文件名称 */
  file_name?: string;
  /** 文件内容 */
  file_content?: string;
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

/** 申请开通直播 —— 请求体。 */
export interface BusinessApplyliveinfoBody {
  /** 填：“apply” */
  action: string;
}
/** 申请开通直播 —— 返回体。 */
export interface BusinessApplyliveinfoResp {
  /** 0代表申请已经受理，等待小程序管理员操作；2表示小程序近90天没有存在支付行为，不能申请开通直播能力。（数据生效时间为T+1，请耐心等待） */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** "apply" */
  action?: string;
}

/** 申请开通物流消息 —— 请求体（文档未列字段，放行任意键）。 */
export type ExpressDeliveryOpenMsgOpenOpenmsgBody = Record<string, unknown>;
/** 申请开通物流消息 —— 返回体。 */
export interface ExpressDeliveryOpenMsgOpenOpenmsgResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 申请开通物流查询组件 —— 请求体（文档未列字段，放行任意键）。 */
export type ExpressDeliveryOpenMsgOpenQueryPluginBody = Record<string, unknown>;
/** 申请开通物流查询组件 —— 返回体。 */
export interface ExpressDeliveryOpenMsgOpenQueryPluginResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 申请开通物流退货组件 —— 请求体（文档未列字段，放行任意键）。 */
export type ExpressDeliveryReturnOpenReturnBody = Record<string, unknown>;
/** 申请开通物流退货组件 —— 返回体。 */
export interface ExpressDeliveryReturnOpenReturnResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 绑定体验者 —— 请求体。 */
export interface BindTesterBody {
  /** 微信号 */
  wechatid: string;
}
/** 绑定体验者 —— 返回体。 */
export interface BindTesterResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 人员对应的唯一字符串 */
  userstr?: string;
}

/** 获取体验者列表 —— 请求体。 */
export interface MemberauthBody {
  /** 填 "get_experiencer" 即可 */
  action: string;
}
/** 获取体验者列表 —— 返回体。 */
export interface MemberauthResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 人员信息列表 */
  members?: unknown[];
}

/** 解除绑定体验者 —— 请求体。 */
export interface UnbindTesterBody {
  /** 微信号。 userstr 和 wechatid 填写其中一个即可 */
  wechatid?: string;
  /** 人员对应的唯一字符串， 可通过getTester接口获取人员对应的字符串 */
  userstr?: string;
}
/** 解除绑定体验者 —— 返回体。 */
export interface UnbindTesterResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 申请地理位置接口 —— 请求体。 */
export interface SecurityApplyPrivacyInterfaceBody {
  /** 申请的 api 英文名，例如wx.choosePoi，严格区分大小写 */
  api_name: string;
  /** 申请说原因，不超过300个字符；需要以utf-8编码提交，否则会出现审核失败 */
  content: string;
  /** (辅助网页)例如，上传官网网页链接用于辅助审核；url_list、pic_list、video_list三选一填写 */
  url_list?: unknown[];
  /** (辅助图片)填写图片的url ，最多10个；url_list、pic_list、video_list三选一填写 */
  pic_list?: unknown[];
  /** (辅助视频)填写视频的链接 ，最多支持1个；视频格式只支持mp4格式；url_list、pic_list、video_list三选一填写 */
  video_list?: unknown[];
}
/** 申请地理位置接口 —— 返回体。 */
export interface SecurityApplyPrivacyInterfaceResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 审核id */
  audit_id?: number;
}

/** 获取地理位置接口列表 —— 请求体（文档未列字段，放行任意键）。 */
export type SecurityGetPrivacyInterfaceBody = Record<string, unknown>;
/** 获取地理位置接口列表 —— 返回体。 */
export interface SecurityGetPrivacyInterfaceResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 地理位置相关隐私接口 */
  interface_list?: unknown[];
}

/** 获取小程序用户隐私保护指引 —— 请求体。 */
export interface GetprivacysettingBody {
  /** 1表示现网版本，即，传1则该接口返回的内容是现网版本的；2表示开发版，即，传2则该接口返回的内容是开发版本的。默认是2。 */
  privacy_ver: number;
}
/** 获取小程序用户隐私保护指引 —— 返回体。 */
export interface GetprivacysettingResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 代码是否存在， 0 不存在， 1 存在 。如果最近没有通过commit接口上传代码，则会出现 code_exist=0的情况。 */
  code_exist?: number;
  /** 代码检测出来的用户信息类型（privacy_key） */
  privacy_list?: unknown[];
  /** 要收集的用户信息配置 */
  setting_list?: unknown[];
  /** 更新时间 */
  update_time?: number;
  /** 收集方（开发者）信息配置 */
  owner_setting?: Record<string, unknown>;
  /** 用户信息类型对应的中英文描述 */
  privacy_desc?: Record<string, unknown>;
  /** 该小程序中引用了第三方sdk的信息说明 */
  sdk_privacy_info_list?: unknown[];
}

/** 设置小程序用户隐私保护指引 —— 请求体。 */
export interface SetprivacysettingBody {
  /** 用户隐私保护指引的版本，1表示现网版本；2表示开发版。默认是2开发版。 */
  privacy_ver?: number;
  /** 要收集的用户信息配置，可选择的用户信息类型参考下方详情。当privacy_ver传2或者不传时，setting_list是必填；当privacy_ver传1时，该参数不可传，否则会报错 */
  setting_list?: unknown[];
  /** 收集方（开发者）信息配置 */
  owner_setting: Record<string, unknown>;
  /** 该小程序中引用了第三方sdk的信息说明 */
  sdk_privacy_info_list?: unknown[];
}
/** 设置小程序用户隐私保护指引 —— 返回体。 */
export interface SetprivacysettingResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 上传小程序用户隐私保护指引 —— 请求体。 */
export interface UploadprivacyextfileBody {
  /** 只支持传txt文件 */
  file: unknown;
}
/** 上传小程序用户隐私保护指引 —— 返回体。 */
export interface UploadprivacyextfileResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 文件的media_id */
  ext_file_media_id?: string;
}

/** 获取小程序申诉记录 —— 请求体。 */
export interface GetappealrecordsBody {
  /** 违规处罚记录id（通过getillegalrecords接口返回的记录id） */
  illegal_record_id: string;
}
/** 获取小程序申诉记录 —— 返回体。 */
export interface GetappealrecordsResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 申诉记录列表 */
  records?: unknown[];
}

/** 获取小程序违规处罚记录 —— 请求体。 */
export interface GetillegalrecordsBody {
  /** 查询时间段的开始时间，如果不填，则表示end_time之前90天内的记录 */
  start_time?: number;
  /** 查询时间段的结束时间，如果不填，则表示start_time之后90天内的记录 */
  end_time?: number;
}
/** 获取小程序违规处罚记录 —— 返回体。 */
export interface GetillegalrecordsResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 违规处罚记录列表 */
  records?: unknown[];
}

/** 申请小程序备案 —— 请求体。 */
export interface IcpApplyIcpFilingBody {
  /** 备案主体信息 */
  icp_subject: Record<string, unknown>;
  /** 微信小程序信息 */
  icp_applets: Record<string, unknown>;
  /** 其他备案媒体材料 */
  icp_materials: Record<string, unknown>;
}
/** 申请小程序备案 —— 返回体。 */
export interface IcpApplyIcpFilingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 错误提示 */
  hints?: unknown[];
}

/** 撤回小程序备案申请 —— 请求体（文档未列字段，放行任意键）。 */
export type IcpCancelApplyIcpFilingBody = Record<string, unknown>;
/** 撤回小程序备案申请 —— 返回体。 */
export interface IcpCancelApplyIcpFilingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 注销小程序备案 —— 请求体。 */
export interface IcpCancelIcpFilingBody {
  /** 注销类型：1 -- 注销主体, 2 -- 注销小程序, 3 -- 注销微信小程序 */
  cancel_type: number;
  /** 注销原因：1. 不再运营该小程序；2. 主体信息发生变更，需注销备案后重新备案； */
  reason_type?: number;
}
/** 注销小程序备案 —— 返回体。 */
export interface IcpCancelIcpFilingResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 发起小程序管理员人脸核身 —— 请求体。 */
export interface IcpCreateIcpVerifytaskBody {
  /** 小程序认证及备案二合一场景，填 `true`，否则为小程序备案场景。默认值为 `false`。 */
  along_with_auth?: boolean;
}
/** 发起小程序管理员人脸核身 —— 返回体。 */
export interface IcpCreateIcpVerifytaskResp {
  /** 人脸核验任务id */
  task_id?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 人脸核验任务url，`along_with_auth` 填 `true` 时返回。 */
  verify_url?: string;
}

/** 获取小程序备案状态及驳回原因 —— 请求体（文档未列字段，放行任意键）。 */
export type IcpGetIcpEntranceInfoBody = Record<string, unknown>;
/** 获取小程序备案状态及驳回原因 —— 返回体。 */
export interface IcpGetIcpEntranceInfoResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 备案状态信息 */
  info?: Record<string, unknown>;
}

/** 获取小程序备案媒体材料 —— 请求体（文档未列字段，放行任意键）。 */
export type IcpGetIcpMediaBody = Record<string, unknown>;
/** 获取小程序备案媒体材料 —— 查询参数。 */
export interface IcpGetIcpMediaQuery {
  /** 上传小程序备案媒体材料接口返回的 media_id */
  media_id: string;
}
/** 获取小程序备案媒体材料 —— 返回体。 */
export interface IcpGetIcpMediaResp {
  /** 错误码。 */
  errcode?: number;
  /** 错误提示。 */
  errmsg?: string;
}

/** 获取小程序已备案详情 —— 请求体（文档未列字段，放行任意键）。 */
export type IcpGetOnlineIcpOrderBody = Record<string, unknown>;
/** 获取小程序已备案详情 —— 返回体。 */
export interface IcpGetOnlineIcpOrderResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 备案主体信息，不包括图片、视频材料(参考：申请小程序备案接口的 `icp_subject`) */
  icp_subject?: Record<string, unknown>;
  /** 微信小程序信息，不包括图片、视频材料(参考：申请小程序备案接口的 `icp_subject`) */
  icp_applets?: unknown[];
}

/** 获取证件类型 —— 请求体（文档未列字段，放行任意键）。 */
export type IcpQueryIcpCertificateTypesBody = Record<string, unknown>;
/** 获取证件类型 —— 返回体。 */
export interface IcpQueryIcpCertificateTypesResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 证件类型列表 */
  items?: unknown[];
}

/** 获取区域信息 —— 请求体（文档未列字段，放行任意键）。 */
export type IcpQueryIcpDistrictCodeBody = Record<string, unknown>;
/** 获取区域信息 —— 返回体。 */
export interface IcpQueryIcpDistrictCodeResp {
  /** 错误码 */
  errcode?: number;
  /** 错误原因 */
  errmsg?: string;
  /** 区域信息列表 */
  items?: unknown[];
}

/** 获取前置审批项类型 —— 请求体（文档未列字段，放行任意键）。 */
export type IcpQueryIcpNrlxTypesBody = Record<string, unknown>;
/** 获取前置审批项类型 —— 返回体。 */
export interface IcpQueryIcpNrlxTypesResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 前置审批项类型列表 */
  items?: unknown[];
}

/** 获取小程序服务内容类型 —— 请求体（文档未列字段，放行任意键）。 */
export type IcpQueryIcpServiceContentTypesBody = Record<string, unknown>;
/** 获取小程序服务内容类型 —— 返回体。 */
export interface IcpQueryIcpServiceContentTypesResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 服务内容类型列表 */
  items?: unknown[];
}

/** 获取单位性质 —— 请求体（文档未列字段，放行任意键）。 */
export type IcpQueryIcpSubjectTypesBody = Record<string, unknown>;
/** 获取单位性质 —— 返回体。 */
export interface IcpQueryIcpSubjectTypesResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 单位性质列表 */
  items?: unknown[];
}

/** 查询人脸核身任务状态 —— 请求体。 */
export interface IcpQueryIcpVerifytaskBody {
  /** 人脸核身任务id，示例值：`"R5PqRPNb6GmG3i0rqd4pTg"` */
  task_id: string;
}
/** 查询人脸核身任务状态 —— 返回体。 */
export interface IcpQueryIcpVerifytaskResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 人脸核身任务是否已完成 */
  is_finish?: boolean;
  /** 任务状态枚举：0. 未开始；1. 等待中；2. 失败；3. 成功。返回的 `is_finish` 字段为 `true` 时，`face_status` 才是最终状态。 */
  face_status?: number;
  /** 发起时 `along_with_auth` 填 `true` 时有效：9. 认证短信核验通过。 */
  along_with_auth_result?: number;
}

/** 上传小程序备案媒体材料 —— 请求体。 */
export interface IcpUploadIcpMediaBody {
  /** 媒体材料类型。目前支持两种：图片(`"image"`)和视频(`"video"`)，示例值：`"image"` */
  type: string;
  /** 证件类型(参考：获取证件类型)，如果上传的是证件媒体材料，则必填，示例值：`2` */
  certificate_type?: number;
  /** 媒体材料所属的备案字段名(参考：申请小程序备案接口)，如要用于多个备案字段，则填写其中一个字段名即可。例如：要上传身份证头像面照片作为备案主体负责人和小程序负责人的证件照正面，就填写 `"icp_su */
  icp_order_field: string;
  /** 待上传的图片或视频的**二进制**内容 */
  media: string;
}
/** 上传小程序备案媒体材料 —— 返回体。 */
export interface IcpUploadIcpMediaResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 媒体材料类型。目前支持两种：图片(`"image"`)和视频(`"video"`)，示例值：`"image"` */
  type?: string;
  /** 媒体id，示例值：`"4ahCGpd3CYkE6RpkNkUR5czt3LvG8xDnDdKAz6bBKttSfM8p4k5Rj6823HXugPwQBurgMezyib7"` */
  media_id?: string;
  /** 创建时间，UNIX时间戳，示例值：`1692883651` */
  created_at?: number;
}

/** 获取可设置公众号列表 —— 请求体。 */
export interface GetwxamplinkforshowBody {
  /** 页码，从 0 开始 */
  page: number;
  /** 每页记录数，最大为 20 */
  num: number;
}
/** 获取可设置公众号列表 —— 返回体。 */
export interface GetwxamplinkforshowResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 总记录数 */
  total_num?: number;
  /** 公众号信息列表 */
  biz_info_list?: unknown[];
}

/** 获取已设置公众号信息 —— 请求体（文档未列字段，放行任意键）。 */
export type GetshowwxaitemBody = Record<string, unknown>;
/** 获取已设置公众号信息 —— 返回体。 */
export interface GetshowwxaitemResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 是否可以设置 1 可以，0，不可以 */
  can_open?: number;
  /** 是否已经设置，1 已设置，0，未设置 */
  is_open?: number;
  /** 展示的公众号 appid */
  appid?: string;
  /** 展示的公众号 nickname */
  nickname?: string;
  /** 展示的公众号头像 */
  headimg?: string;
}

/** 设置扫码关注的公众号 —— 请求体。 */
export interface UpdateshowwxaitemBody {
  /** 是否打开扫码关注组件，0 关闭，1 开启 */
  wxa_subscribe_biz_flag: number;
  /** 如果开启，需要传新的公众号 appid */
  appid?: string;
}
/** 设置扫码关注的公众号 —— 返回体。 */
export interface UpdateshowwxaitemResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 用户PC端登录 —— 请求体。 */
export interface WedataWedataLoginBody {
  /** 服务商session，用户访问服务商系统的session */
  user_session: string;
  /** 用户在服务商系统的唯一标识，可以是手机号、邮箱、员工ID等等 */
  uid: string;
  /** 用户的外网ip */
  client_ip: string;
  /** 用户的user_agent */
  user_agent: string;
}
/** 用户PC端登录 —— 返回体。 */
export interface WedataWedataLoginResp {
  /** 返回信息 */
  base_resp?: Record<string, unknown>;
  /** We分析登录链接 */
  redirect_url?: string;
  /** 过期时间（unix时间戳，单位秒） */
  expire_at?: number;
}

/** 查询登录配置 —— 请求体（文档未列字段，放行任意键）。 */
export type WedataWedataGetLoginConfigBody = Record<string, unknown>;
/** 查询登录配置 —— 返回体。 */
export interface WedataWedataGetLoginConfigResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 服务商appid */
  component_appid?: string;
  /** 服务商昵称 */
  component_nickname?: string;
  /** 反查地址 */
  recheck_url?: string;
  /** 关联小程序appid，没配置时无返回 */
  appinfo?: unknown[];
}

/** 获取商家We分析权限集列表 —— 请求体（文档未列字段，放行任意键）。 */
export type WedataWedataGetPermListBody = Record<string, unknown>;
/** 获取商家We分析权限集列表 —— 返回体。 */
export interface WedataWedataGetPermListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 权限集列表 */
  perm?: unknown[];
}

/** 查询用户绑定列表 —— 请求体（文档未列字段，放行任意键）。 */
export type WedataWedataQueryBindListBody = Record<string, unknown>;
/** 查询用户绑定列表 —— 返回体。 */
export interface WedataWedataQueryBindListResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 用户绑定信息 */
  info?: unknown[];
}

/** 设置登录配置 —— 请求体。 */
export interface WedataWedataSetLoginConfigBody {
  /** 1: 配置反查地址 ; 2:配置关联appid */
  set_type: number;
  /** 反查地址，set_type =1时生效，若为空表示删除 */
  recheck_url?: string;
  /** 关联appid，set_type=2时生效，若为空表示删除 */
  associate_appid?: unknown[];
}
/** 设置登录配置 —— 返回体。 */
export interface WedataWedataSetLoginConfigResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 设置用户We分析权限集 —— 请求体。 */
export interface WedataWedataSetUserPermBody {
  /** 用户在服务商系统的唯一标识，可以是手机号、邮箱、员工编号等等 */
  uid: string;
  /** 权限集 */
  perm: unknown[];
}
/** 设置用户We分析权限集 —— 返回体。 */
export interface WedataWedataSetUserPermResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 用户解绑 —— 请求体。 */
export interface WedataWedataUnbindUserBody {
  /** 用户在服务商系统的唯一标识，可以是手机号、邮箱、员工ID 等等。 */
  uid: string;
}
/** 用户解绑 —— 返回体。 */
export interface WedataWedataUnbindUserResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 查询个人认证身份选项列表 —— 请求体。 */
export interface AuthidentitytreeBody {
  /** ACCESS_TOKEN */
  access_token: string;
}
/** 查询个人认证身份选项列表 —— 返回体。 */
export interface AuthidentitytreeResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 职业树 */
  identity_tree_list?: unknown[];
}

/** 小程序认证进度查询 —— 请求体。 */
export interface QueryauthBody {
  /** 认证任务id */
  taskid: string;
}
/** 小程序认证进度查询 —— 返回体。 */
export interface QueryauthResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 当前任务流程的状态码：0: 初始状态；1: 任务超时, 24小时内有效；2: 用户授权拒绝；3: 用户授权同意；4: 发起人脸流程；5: 人脸认证失败；6: 人脸认证ok；7: 人脸认证后，已经提交手 */
  task_status?: number;
  /** 小程序管理员授权链接 */
  auth_url?: string;
  /** 审核单状态，创建认证审核审核单成功后该值有效。0：审核单不存在；1：待支付；2：审核中；3：打回重填；4：认证通过；5：认证最终失败（不能再修改） */
  apply_status?: number;
  /** 小程序后台展示的认证订单号 */
  orderid?: number;
  /** 小程序appid */
  appid?: string;
  /** 当审核单被打回重填(apply_status=3)时有效 */
  refill_reason?: string;
  /** 审核最终失败的原因(apply_status=5)时有效 */
  fail_reason?: string;
}

/** 小程序认证重新提审 —— 请求体。 */
export interface ReauthBody {
  /** 认证数据 */
  auth_data: Record<string, unknown>;
}
/** 小程序认证重新提审 —— 返回体。 */
export interface ReauthResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 认证任务id */
  taskid?: string;
  /** 小程序管理员授权链接 */
  auth_url?: string;
}

/** 小程序认证上传补充材料 —— 请求体。 */
export interface UploadauthmaterialBody {
  /** 图片（image）: 不超过2M，支持PNG\JPEG\JPG\GIF格式 */
  media: unknown;
}
/** 小程序认证上传补充材料 —— 返回体。 */
export interface UploadauthmaterialResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 类型 */
  type?: string;
  /** 媒体id */
  mediaid?: unknown;
}

/** 小程序认证 —— 请求体。 */
export interface WxaauthBody {
  /** 认证数据 */
  auth_data: Record<string, unknown>;
}
/** 小程序认证 —— 返回体。 */
export interface WxaauthResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 认证任务id */
  taskid?: string;
  /** 小程序管理员授权链接 */
  auth_url?: string;
}

/** 查询小程序认证及备案进度 —— 请求体。 */
export interface QueryAuthAndIcpBody {
  /** 小程序认证及备案任务流程id */
  procedure_id: string;
}
/** 查询小程序认证及备案进度 —— 返回体。 */
export interface QueryAuthAndIcpResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 当前任务流程状态，见下方任务流程状态枚举 */
  procedure_status?: number;
  /** 小程序后台展示的认证订单号 */
  orderid?: number;
  /** 小程序认证审核单被驳回（`procedure_status` 为 `18`）时有效 */
  refill_reason?: string;
  /** 小程序认证审核最终失败的原因（`procedure_status` 为 `20`）时有效 */
  fail_reason?: string;
  /** 小程序备案相关信息 */
  icp_audit?: Record<string, unknown>;
}

/** 申请小程序认证及备案 —— 请求体。 */
export interface SubmitAuthAndIcpBody {
  /** 认证数据 */
  auth_data: Record<string, unknown>;
  /** 备案主体信息 */
  icp_subject: Record<string, unknown>;
  /** 微信小程序信息 */
  icp_applets: Record<string, unknown>;
  /** 其他备案媒体材料 */
  icp_materials: Record<string, unknown>;
}
/** 申请小程序认证及备案 —— 返回体。 */
export interface SubmitAuthAndIcpResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 错误提示 */
  hints?: unknown[];
  /** 小程序认证及备案任务流程 id */
  procedure_id?: string;
  /** 小程序认证认证审核费用付费链接，当 pay_type 为 2 时返回 */
  pay_url?: string;
}

/** 获取公众号关联的小程序 —— 请求体（文档未列字段，放行任意键）。 */
export type WxopenWxamplinkgetBody = Record<string, unknown>;
/** 获取公众号关联的小程序 —— 返回体。 */
export interface WxopenWxamplinkgetResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 关联的小程序列表 */
  wxopens?: Record<string, unknown>;
}

/** 公众号关联小程序 —— 请求体。 */
export interface WxopenWxamplinkBody {
  /** 小程序 appid */
  appid: string;
  /** 是否发送模板消息通知公众号粉丝。1表示是，0表示否。 */
  notify_users: number;
  /** 是否展示公众号主页中。1表示是，0表示否。 */
  show_profile: number;
}
/** 公众号关联小程序 —— 返回体。 */
export interface WxopenWxamplinkResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 公众号解除关联小程序 —— 请求体。 */
export interface WxopenWxampunlinkBody {
  /** 小程序 appid */
  appid: string;
}
/** 公众号解除关联小程序 —— 返回体。 */
export interface WxopenWxampunlinkResp {
  /** 返回码 */
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

/** 使用AppSecret重置第三方平台API调用次数 —— 请求体。 */
export interface ClearQuotaV2Body {
  /** 授权用户appid */
  appid: string;
  /** 第三方appid */
  component_appid: string;
  /** 第三方appsecret */
  appsecret: string;
}
/** 使用AppSecret重置第三方平台API调用次数 —— 返回体。 */
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

/** 绑定开放平台账号 —— 请求体。 */
export interface OpenBindBody {
  /** 开放平台账号 appid，由创建开发平台账号接口返回 */
  open_appid: string;
  /** 非必填，如果不填则取生成authorizer_access_token的授权公众号或小程序的 appid。如果填，则需要填与生成authorizer_access_token的授权公众号或小程序的 a */
  appid?: string;
}
/** 绑定开放平台账号 —— 返回体。 */
export interface OpenBindResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 创建开放平台账号 —— 请求体。 */
export interface OpenCreateBody {
  /** 非必填，如果不填则取生成authorizer_access_token的授权公众号或小程序的 appid。如果填，则需要填与生成authorizer_access_token的授权公众号或小程序的 a */
  appid?: string;
}
/** 创建开放平台账号 —— 返回体。 */
export interface OpenCreateResp {
  /** 所创建的开放平台账号的 appid */
  open_appid?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取开放平台账号 —— 请求体。 */
export interface OpenGetBody {
  /** 非必填，如果不填则取生成authorizer_access_token的授权公众号或小程序的 appid。如果填，则需要填与生成authorizer_access_token的授权公众号或小程序的 a */
  appid?: string;
}
/** 获取开放平台账号 —— 返回体。 */
export interface OpenGetResp {
  /** 公众号或小程序所绑定的开放平台账号的 appid */
  open_appid?: string;
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 解除绑定开放平台账号 —— 请求体。 */
export interface OpenUnbindBody {
  /** 开放平台账号 appid，由创建开发平台账号接口返回 */
  open_appid: string;
  /** 非必填，如果不填则取生成authorizer_access_token的授权公众号或小程序的 appid。如果填，则需要填与生成authorizer_access_token的授权公众号或小程序的 a */
  appid?: string;
}
/** 解除绑定开放平台账号 —— 返回体。 */
export interface OpenUnbindResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 转正为个人升级版小程序 —— 请求体。 */
export interface FastnormalizebetaweappBody {
  /** 服务商联系方式，用于展示在用户认证成功或失败的模板消息中 */
  component_phone: string;
  /** 接口新旧版本标识，使用该新接口必须填true */
  new_version: boolean;
}
/** 转正为个人升级版小程序 —— 查询参数。 */
export interface FastnormalizebetaweappQuery {
  /** 创建填写“createtask”；查询任务状态填写“query” */
  action: string;
}
/** 转正为个人升级版小程序 —— 返回体。 */
export interface FastnormalizebetaweappResp {
  /** - */
  errcode?: number;
  /** - */
  errmsg?: string;
  /** - */
  taskid?: string;
  /** - */
  authorize_url?: string;
  /** - */
  status?: number;
}

/** 修改试用小程序名称 —— 请求体。 */
export interface SetbetaweappnicknameBody {
  /** 小程序名称，昵称半自动设定，强制后缀“的体验小程序”。且该参数会进行关键字检查，如果命中品牌关键字则会报错。 如遇到品牌大客户要用试用小程序，建议用户先换个名字，认证后再修改成品牌名 */
  name: string;
}
/** 修改试用小程序名称 —— 返回体。 */
export interface SetbetaweappnicknameResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 注册试用小程序 —— 请求体。 */
export interface FastregisterbetaweappBody {
  /** 小程序名称，昵称半自动设定，强制后缀“的体验小程序”。且该参数会进行关键字检查，如果命中品牌关键字则会报错。 如遇到品牌大客户要用试用小程序，建议用户先换个名字，认证后再修改成品牌名。 只支持4-30 */
  name: string;
  /** 微信用户的openid（不是微信号），试用小程序创建成功后会默认将该用户设置为小程序管理员。获取openid的方法请查看公众号获取openidh5获取openid、小程序获取openid、网站应用获取 */
  openid: string;
}
/** 注册试用小程序 —— 返回体。 */
export interface FastregisterbetaweappResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 该请求的唯一标识符，用于关联微信用户和后面产生的appid */
  unique_id?: string;
  /** 用户授权确认url，需将该url发送给用户，小程序管理员在微信打开并进入授权页面完成授权方可创建小程序 */
  authorize_url?: string;
}

/** 试用小程序快速转正 —— 请求体。 */
export interface VerifybetaweappBody {
  /** 企业法人认证需要的信息 */
  verify_info: Record<string, unknown>;
  /** 接口新旧版本标识，使用该新接口必须填true，不填默认false */
  new_version?: boolean;
}
/** 试用小程序快速转正 —— 返回体。 */
export interface VerifybetaweappResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 认证链接 */
  authorized_url?: string;
}

/** 快速注册企业小程序 —— 请求体。 */
export interface FastregisterweappBody {
  /** 企业名（需与工商部门登记信息一致）；如果是“无主体名称个体工商户”则填“个体户+法人姓名”，例如“个体户张三” */
  name: string;
  /** 企业代码 */
  code: string;
  /** 企业代码类型 1：统一社会信用代码（18 位） 2：组织机构代码（9 位 xxxxxxxx-x） 3：营业执照注册号(15 位) */
  code_type: number;
  /** 法人微信号 */
  legal_persona_wechat: string;
  /** 法人姓名（绑定银行卡） */
  legal_persona_name: string;
  /** 第三方联系电话 */
  component_phone?: string;
}
/** 快速注册企业小程序 —— 查询参数。 */
export interface FastregisterweappQuery {
  /** 创建小程序填写“create”；查询创建任务状态填写“search”。参考请求示例 */
  action: string;
}
/** 快速注册企业小程序 —— 返回体。 */
export interface FastregisterweappResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 快速注册个人升级版小程序 —— 请求体。 */
export interface FastregistertransactionweappBody {
  /** 微信用户的openid（不是微信号） 获取openid的方法请查看用户管理、 微信网页开发-介绍、关于微信快速登录功能的说明 */
  openid: string;
  /** 第三方联系电话 */
  component_phone: string;
  /** 接口新旧版本标识，使用该新接口必须填true，不填默认false */
  new_version?: boolean;
}
/** 快速注册个人升级版小程序 —— 返回体。 */
export interface FastregistertransactionweappResp {
  /** 状态码，0成功，其他失败 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 任务id，后面query查询需要用到 */
  taskid?: string;
  /** 给用户扫码认证的验证url */
  authorize_url?: string;
  /** 任务的状态 */
  status?: number;
}

/** 复用公众号主体快速注册小程序 —— 请求体。 */
export interface AccountFastregisterBody {
  /** 公众号扫码授权的凭证(公众平台扫码页面回跳到第三方平台时携带)，要看复用公众号主体快速注册小程序使用说明 */
  ticket: string;
}
/** 复用公众号主体快速注册小程序 —— 返回体。 */
export interface AccountFastregisterResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 新创建小程序的 appid */
  appid?: string;
  /** 新创建小程序的授权码；注：使用 appid 及 authorization_code 换取 authorizer_refresh_token 后需及时保存。 */
  authorization_code?: string;
  /** 复用公众号微信认证小程序是否成功 */
  is_wx_verify_succ?: boolean;
  /** 小程序是否和公众号关联成功 */
  is_link_succ?: boolean;
}

/** 获取第三方平台业务域名校验文件 —— 请求体（文档未列字段，放行任意键）。 */
export type GetDomainConfirmfileBody = Record<string, unknown>;
/** 获取第三方平台业务域名校验文件 —— 返回体。 */
export interface GetDomainConfirmfileResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 文件名 */
  file_name?: string;
  /** 文件内容 */
  file_content?: string;
}

/** 设置第三方平台业务域名 —— 请求体。 */
export interface ModifyWxaJumpDomainBody {
  /** 操作类型。可选值请看下文 */
  action: string;
  /** 最多可以添加300个小程序业务域名，以;隔开。注意：域名不需带有http:// 等协议内容，也不能在域名末尾附加详细的 URI 地址，严格按照类似 www.qq.com 的写法。 */
  wxa_jump_h5_domain?: string;
  /** 是否同时修改“全网发布版本的值”。（false：只改“测试版”；true：同时改“测试版”和“全网发布版”）省略时，默认为false。 */
  is_modify_published_together?: boolean;
}
/** 设置第三方平台业务域名 —— 返回体。 */
export interface ModifyWxaJumpDomainResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 目前生效的 “全网发布版”第三方平台“小程序业务域名”。如果修改失败，该字段不会返回。如果没有已发布的第三方平台，该字段也不会返回。 */
  published_wxa_jump_h5_domain?: string;
  /** 目前生效的 “测试版”第三方平台“小程序业务域名”。如果修改失败，该字段不会返回 */
  testing_wxa_jump_h5_domain?: string;
  /** 未通过验证的域名。如果不存在未通过验证的域名，该字段不会返回。 */
  invalid_wxa_jump_h5_domain?: string;
}

/** 设置第三方平台服务器域名 —— 请求体。 */
export interface ModifyWxaServerDomainBody {
  /** 操作类型。可选值请看下文 */
  action: string;
  /** 最多可以添加1000个服务器域名，以;隔开。注意：域名不需带有http:// 等协议内容，也不能在域名末尾附加详细的 URI 地址，严格按照类似 www.qq.com 的写法。 */
  wxa_server_domain?: string;
  /** 是否同时修改“全网发布版本的值”。（false：只改“测试版”；true：同时改“测试版”和“全网发布版”）省略时，默认为false。 */
  is_modify_published_together?: boolean;
}
/** 设置第三方平台服务器域名 —— 返回体。 */
export interface ModifyWxaServerDomainResp {
  /** 返回码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 目前生效的 “全网发布版”第三方平台“小程序服务器域名”。如果修改失败，该字段不会返回。如果没有已发布的第三方平台，该字段也不会返回。 */
  published_wxa_server_domain?: string;
  /** 目前生效的 “测试版”第三方平台“小程序服务器域名”。如果修改失败，该字段不会返回 */
  testing_wxa_server_domain?: string;
  /** 未通过验证的域名。如果不存在未通过验证的域名，该字段不会返回。 */
  invalid_wxa_server_domain?: string;
}

/** 将草稿添加到模板库 —— 请求体。 */
export interface AddtotemplateBody {
  /** 草稿 ID */
  draft_id: number;
  /** 默认值是0，对应普通模板；可选1，对应标准模板库，关于标准模板库和普通模板库的区别可以查看小程序模板库介绍 */
  template_type?: number;
}
/** 将草稿添加到模板库 —— 返回体。 */
export interface AddtotemplateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 删除代码模板 —— 请求体。 */
export interface DeletetemplateBody {
  /** 要删除的模板 ID ，可通过获取模板列表接口获取。 */
  template_id: number;
}
/** 删除代码模板 —— 返回体。 */
export interface DeletetemplateResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
}

/** 获取草稿箱列表 —— 请求体（文档未列字段，放行任意键）。 */
export type GettemplatedraftlistBody = Record<string, unknown>;
/** 获取草稿箱列表 —— 返回体。 */
export interface GettemplatedraftlistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 草稿箱信息。 */
  draft_list?: unknown[];
}

/** 获取模板列表 —— 请求体。 */
export interface GettemplatelistBody {
  /** 可选是0（对应普通模板）和1（对应标准模板），如果不填，则返回全部的。关于标准模板和普通模板的区别可查看小程序模板库介绍 */
  template_type?: number;
}
/** 获取模板列表 —— 返回体。 */
export interface GettemplatelistResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
  errmsg?: string;
  /** 模板信息列表 */
  template_list?: unknown[];
}

/** 获取授权账号调用令牌 —— 请求体。 */
export interface ApiAuthorizerTokenBody {
  /** 第三方平台 appid */
  component_appid: string;
  /** 授权方 appid */
  authorizer_appid: string;
  /** 刷新令牌，获取授权信息时得到 */
  authorizer_refresh_token: string;
}
/** 获取授权账号调用令牌 —— 返回体。 */
export interface ApiAuthorizerTokenResp {
  /** 授权方令牌 */
  authorizer_access_token?: string;
  /** 有效期，单位：秒 */
  expires_in?: number;
  /** 刷新令牌 */
  authorizer_refresh_token?: string;
}

/** 获取刷新令牌 —— 请求体。 */
export interface ApiQueryAuthBody {
  /** 第三方平台 appid */
  component_appid: string;
  /** 授权码, 会在授权成功时返回给第三方平台，详见第三方平台授权流程说明。该参数也可以通过平台推送的"授权变更通知"获取。 */
  authorization_code: string;
}
/** 获取刷新令牌 —— 返回体。 */
export interface ApiQueryAuthResp {
  /** 授权信息 */
  authorization_info?: Record<string, unknown>;
}

/** 获取令牌 —— 请求体。 */
export interface ApiComponentTokenBody {
  /** 第三方平台 appid */
  component_appid: string;
  /** 第三方平台 appsecret */
  component_appsecret: string;
  /** 微信后台推送的 ticket */
  component_verify_ticket: string;
}
/** 获取令牌 —— 返回体。 */
export interface ApiComponentTokenResp {
  /** 第三方平台 access_token */
  component_access_token?: string;
  /** 有效期，单位：秒 */
  expires_in?: number;
}

/** 获取预授权码 —— 请求体。 */
export interface ApiCreatePreauthcodeBody {
  /** 第三方平台 appid */
  component_appid: string;
}
/** 获取预授权码 —— 返回体。 */
export interface ApiCreatePreauthcodeResp {
  /** 预授权码 */
  pre_auth_code?: string;
  /** 有效期，单位：秒 */
  expires_in?: number;
}

/** 启动票据推送服务 —— 请求体。 */
export interface ApiStartPushTicketBody {
  /** 平台型第三方平台的appid */
  component_appid: string;
  /** 平台型第三方平台的APPSECRET */
  component_secret: string;
}
/** 启动票据推送服务 —— 返回体。 */
export interface ApiStartPushTicketResp {
  /** 错误码 */
  errcode?: number;
  /** 错误信息 */
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
  // ===== Miniprogram_Frame =====
  /** 注册设备ID @see https://developers.weixin.qq.com/doc/oplatform/Miniprogram_Frame/api/backend/addDevice.html */
  businessRuntimeAdddevice: {
    method: 'POST',
    path: '/wxa/business/runtime/adddevice',
    title: '注册设备ID',
    cat: 'Miniprogram_Frame',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/Miniprogram_Frame/api/backend/addDevice.html',
  },
  /** 向WMPF推送消息 @see https://developers.weixin.qq.com/doc/oplatform/Miniprogram_Frame/api/backend/pushAppMsg.html */
  businessRuntimePushappmsg: {
    method: 'POST',
    path: '/wxa/business/runtime/pushappmsg',
    title: '向WMPF推送消息',
    cat: 'Miniprogram_Frame',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/Miniprogram_Frame/api/backend/pushAppMsg.html',
  },
  // ===== Mobile_App =====
  /** messageTemplateSubscribe @see https://developers.weixin.qq.com/doc/oplatform/Mobile_App/One-time_subscription_info.html */
  messageTemplateSubscribe: {
    method: 'POST',
    path: '/cgi-bin/message/template/subscribe',
    title: '',
    cat: 'Mobile_App',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/Mobile_App/One-time_subscription_info.html',
  },
  /** oauth2AccessToken @see https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Login/Authorized_API_call_UnionID.html */
  oauth2AccessToken: {
    method: 'GET',
    path: '/sns/oauth2/access_token',
    title: '',
    cat: 'Mobile_App',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Login/Authorized_API_call_UnionID.html',
  },
  // ===== Third-party_Platforms =====
  /** userinfo @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/Before_Develop/Official_Accounts/official_account_website_authorization.html */
  userinfo: {
    method: 'GET',
    path: '/sns/userinfo',
    title: '',
    cat: 'Third-party_Platforms',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/Before_Develop/Official_Accounts/official_account_website_authorization.html',
  },
  /** 快速创建个人小程序 @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/product/Register_Mini_Programs/fastregisterpersonalmp.html */
  fastregisterpersonalweapp: {
    method: 'POST',
    path: '/wxa/component/fastregisterpersonalweapp',
    title: '快速创建个人小程序',
    cat: 'Third-party_Platforms',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/product/Register_Mini_Programs/fastregisterpersonalmp.html',
  },
  /** 服务商使用云托管开放服务 @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/product/wxcloudrun_dev_token.html */
  jscode2session: {
    method: 'GET',
    path: '/sns/component/jscode2session',
    title: '服务商使用云托管开放服务',
    cat: 'Third-party_Platforms',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/product/wxcloudrun_dev_token.html',
  },
  // ===== Website_App =====
  /** token @see https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_PC_APIs/getaccesstoken.html */
  token: {
    method: 'GET',
    path: '/cgi-bin/token',
    title: '',
    cat: 'Website_App',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_PC_APIs/getaccesstoken.html',
  },
  /** PC 小程序插件接入指南 Beta @see https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_PC_APIs/running_a_mini_program.html */
  pcsdkLogin: {
    method: 'POST',
    path: '/sns/pcsdk/login',
    title: 'PC 小程序插件接入指南 Beta',
    cat: 'Website_App',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_PC_APIs/running_a_mini_program.html',
  },
  // ===== openApi =====
  /** 获取行业屏蔽信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ams/ad-black/api_getamscategoryblacklist.html */
  operationams: {
    method: 'POST',
    path: '/wxa/operationams',
    title: '获取行业屏蔽信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/ams/ad-black/api_getamscategoryblacklist.html',
  },
  /** 获取服务商广告明细数据 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ams/ad-data/api_getagencyadsdetail.html */
  getdefaultamsinfo: {
    method: 'POST',
    path: '/wxa/getdefaultamsinfo',
    title: '获取服务商广告明细数据',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/ams/ad-data/api_getagencyadsdetail.html',
  },
  /** 设置自定义分账比例 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ams/percentage/api_setcustomshareratio.html */
  setdefaultamsinfo: {
    method: 'POST',
    path: '/wxa/setdefaultamsinfo',
    title: '设置自定义分账比例',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/ams/percentage/api_setcustomshareratio.html',
  },
  /** 获取授权账号详情 @see https://developers.weixin.qq.com/doc/oplatform/openApi/authorization-management/api_getauthorizerinfo.html */
  apiGetAuthorizerInfo: {
    method: 'POST',
    path: '/cgi-bin/component/api_get_authorizer_info',
    title: '获取授权账号详情',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/authorization-management/api_getauthorizerinfo.html',
  },
  /** 拉取已授权的账号信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/authorization-management/api_getauthorizerlist.html */
  apiGetAuthorizerList: {
    method: 'POST',
    path: '/cgi-bin/component/api_get_authorizer_list',
    title: '拉取已授权的账号信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/authorization-management/api_getauthorizerlist.html',
  },
  /** 获取授权方选项信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/authorization-management/api_getauthorizeroptioninfo.html */
  getAuthorizerOption: {
    method: 'POST',
    path: '/cgi-bin/component/get_authorizer_option',
    title: '获取授权方选项信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/authorization-management/api_getauthorizeroptioninfo.html',
  },
  /** 设置授权方选项信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/authorization-management/api_setauthorizeroptioninfo.html */
  setAuthorizerOption: {
    method: 'POST',
    path: '/cgi-bin/component/set_authorizer_option',
    title: '设置授权方选项信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/authorization-management/api_setauthorizeroptioninfo.html',
  },
  /** 数据库聚合 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_dbaggregate.html */
  componenttcbDbaggregate: {
    method: 'POST',
    path: '/componenttcb/dbaggregate',
    title: '数据库聚合',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_dbaggregate.html',
  },
  /** 数据库导出 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_dbexport.html */
  componenttcbDbexport: {
    method: 'POST',
    path: '/componenttcb/dbexport',
    title: '数据库导出',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_dbexport.html',
  },
  /** 数据库导入 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_dbimport.html */
  componenttcbDbimport: {
    method: 'POST',
    path: '/componenttcb/dbimport',
    title: '数据库导入',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_dbimport.html',
  },
  /** 数据库索引管理 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_dbindexmanage.html */
  componenttcbDbindex: {
    method: 'POST',
    path: '/componenttcb/dbindex',
    title: '数据库索引管理',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_dbindexmanage.html',
  },
  /** 数据库记录管理 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_dbrecordmanage.html */
  componenttcbDbrecord: {
    method: 'POST',
    path: '/componenttcb/dbrecord',
    title: '数据库记录管理',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_dbrecordmanage.html',
  },
  /** 数据库状态查询 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_getmigrationstate.html */
  componenttcbDbmigrationstate: {
    method: 'POST',
    path: '/componenttcb/dbmigrationstate',
    title: '数据库状态查询',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_getmigrationstate.html',
  },
  /** 获取数据库操作权限 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_getpermission.html */
  componenttcbDbgetacl: {
    method: 'POST',
    path: '/componenttcb/dbgetacl',
    title: '获取数据库操作权限',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_getpermission.html',
  },
  /** 修改数据库操作权限 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_setpermission.html */
  componenttcbDbmodifyacl: {
    method: 'POST',
    path: '/componenttcb/dbmodifyacl',
    title: '修改数据库操作权限',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_setpermission.html',
  },
  /** 转换云环境 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_changetcbenv.html */
  tcbModifyenv: {
    method: 'POST',
    path: '/tcb/modifyenv',
    title: '转换云环境',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_changetcbenv.html',
  },
  /** 创建环境 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_createtcbenv.html */
  componenttcbCreateenv: {
    method: 'POST',
    path: '/componenttcb/createenv',
    title: '创建环境',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_createtcbenv.html',
  },
  /** 查询环境共享信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_getsharecloudbaseenv.html */
  componenttcbBatchgetenvid: {
    method: 'POST',
    path: '/componenttcb/batchgetenvid',
    title: '查询环境共享信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_getsharecloudbaseenv.html',
  },
  /** 获取环境信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_gettcbenvlist.html */
  componenttcbDescribeenvs: {
    method: 'POST',
    path: '/componenttcb/describeenvs',
    title: '获取环境信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_gettcbenvlist.html',
  },
  /** 管理微信令牌权限 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_setcloudaccesstoken.html */
  tcbUsecloudaccesstoken: {
    method: 'POST',
    path: '/tcb/usecloudaccesstoken',
    title: '管理微信令牌权限',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_setcloudaccesstoken.html',
  },
  /** 环境共享 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_sharecloudbaseenv.html */
  componenttcbBatchshareenv: {
    method: 'POST',
    path: '/componenttcb/batchshareenv',
    title: '环境共享',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_sharecloudbaseenv.html',
  },
  /** 解除环境共享关联关系 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_unsharecloudbaseenv.html */
  componenttcbBatchunshareenv: {
    method: 'POST',
    path: '/componenttcb/batchunshareenv',
    title: '解除环境共享关联关系',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_unsharecloudbaseenv.html',
  },
  /** 删除文件 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/file-mgnt/api_deletetcbfile.html */
  componenttcbBatchdeletefile: {
    method: 'POST',
    path: '/componenttcb/batchdeletefile',
    title: '删除文件',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/file-mgnt/api_deletetcbfile.html',
  },
  /** 获取下载文件链接 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/file-mgnt/api_getdownloadfilelink.html */
  componenttcbBatchdownloadfile: {
    method: 'POST',
    path: '/componenttcb/batchdownloadfile',
    title: '获取下载文件链接',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/file-mgnt/api_getdownloadfilelink.html',
  },
  /** 获取文件列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/file-mgnt/api_gettcbfile.html */
  componenttcbGetbucket: {
    method: 'POST',
    path: '/componenttcb/getbucket',
    title: '获取文件列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/file-mgnt/api_gettcbfile.html',
  },
  /** 获取上传文件链接 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/file-mgnt/api_getuploadfilelink.html */
  componenttcbUploadfile: {
    method: 'POST',
    path: '/componenttcb/uploadfile',
    title: '获取上传文件链接',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/file-mgnt/api_getuploadfilelink.html',
  },
  /** 创建云函数 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_batchuuloadcloudfunction.html */
  componenttcbBatchuploadscf: {
    method: 'POST',
    path: '/componenttcb/batchuploadscf',
    title: '创建云函数',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_batchuuloadcloudfunction.html',
  },
  /** 删除云函数 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_deletecloudfunction.html */
  componenttcbDeletescf: {
    method: 'POST',
    path: '/componenttcb/deletescf',
    title: '删除云函数',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_deletecloudfunction.html',
  },
  /** 获取云函数 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_getcloudfunctionlist.html */
  componenttcbGetscflist: {
    method: 'POST',
    path: '/componenttcb/getscflist',
    title: '获取云函数',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_getcloudfunctionlist.html',
  },
  /** 获取触发器 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_gettriggers.html */
  componenttcbGettriggers: {
    method: 'POST',
    path: '/componenttcb/gettriggers',
    title: '获取触发器',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_gettriggers.html',
  },
  /** 更新触发器 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_updatetriggers.html */
  componenttcbBatchupdatetriggers: {
    method: 'POST',
    path: '/componenttcb/batchupdatetriggers',
    title: '更新触发器',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_updatetriggers.html',
  },
  /** 更新云函数代码 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_uploadcloudfunctioncode.html */
  componenttcbBatchuploadscfcode: {
    method: 'POST',
    path: '/componenttcb/batchuploadscfcode',
    title: '更新云函数代码',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_uploadcloudfunctioncode.html',
  },
  /** 更新云函数配置 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_uploadcloudfunctionconfig.html */
  componenttcbUpdatescfconfig: {
    method: 'POST',
    path: '/componenttcb/updatescfconfig',
    title: '更新云函数配置',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_uploadcloudfunctionconfig.html',
  },
  /** 开通静态网站 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/staticstore-management/api_createstaticstore.html */
  componenttcbCreatestaticstore: {
    method: 'POST',
    path: '/componenttcb/createstaticstore',
    title: '开通静态网站',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/staticstore-management/api_createstaticstore.html',
  },
  /** 查看静态网站状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/staticstore-management/api_getstaticstore.html */
  componenttcbDescribestaticstore: {
    method: 'POST',
    path: '/componenttcb/describestaticstore',
    title: '查看静态网站状态',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/staticstore-management/api_getstaticstore.html',
  },
  /** 获取静态网站文件列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/staticstore-management/api_getstaticstorefile.html */
  componenttcbStaticfilelist: {
    method: 'POST',
    path: '/componenttcb/staticfilelist',
    title: '获取静态网站文件列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/staticstore-management/api_getstaticstorefile.html',
  },
  /** 获取上传静态网站文件链接 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/staticstore-management/api_getuploadstaticstorefile.html */
  componenttcbStaticuploadfile: {
    method: 'POST',
    path: '/componenttcb/staticuploadfile',
    title: '获取上传静态网站文件链接',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/staticstore-management/api_getuploadstaticstorefile.html',
  },
  /** 查询是否绑定手机号 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/admin-management/api_checkmobileconfig.html */
  tcbCheckmobile: {
    method: 'POST',
    path: '/tcb/checkmobile',
    title: '查询是否绑定手机号',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/admin-management/api_checkmobileconfig.html',
  },
  /** 开通云开发 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/admin-management/api_createclouduser.html */
  tcbCreateclouduser: {
    method: 'POST',
    path: '/tcb/createclouduser',
    title: '开通云开发',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/admin-management/api_createclouduser.html',
  },
  /** 获取腾讯云API调用凭证 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/admin-management/api_getcloudtoken.html */
  tcbGetqcloudtoken: {
    method: 'POST',
    path: '/tcb/getqcloudtoken',
    title: '获取腾讯云API调用凭证',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/admin-management/api_getcloudtoken.html',
  },
  /** 新增集合 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_adddatabasecollection.html */
  tcbDatabasecollectionadd: {
    method: 'POST',
    path: '/tcb/databasecollectionadd',
    title: '新增集合',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_adddatabasecollection.html',
  },
  /** 数据库插入记录 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_adddatabaseitem.html */
  tcbDatabaseadd: {
    method: 'POST',
    path: '/tcb/databaseadd',
    title: '数据库插入记录',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_adddatabaseitem.html',
  },
  /** 数据库聚合 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_aggregatedatabase.html */
  tcbDatabaseaggregate: {
    method: 'POST',
    path: '/tcb/databaseaggregate',
    title: '数据库聚合',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_aggregatedatabase.html',
  },
  /** 数据库集合管理 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_dbcollectionmanage.html */
  componenttcbDbcollection: {
    method: 'POST',
    path: '/componenttcb/dbcollection',
    title: '数据库集合管理',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_dbcollectionmanage.html',
  },
  /** 删除集合 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_deletedatabasecollection.html */
  tcbDatabasecollectiondelete: {
    method: 'POST',
    path: '/tcb/databasecollectiondelete',
    title: '删除集合',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_deletedatabasecollection.html',
  },
  /** 数据库删除记录 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_deletedatabaseitem.html */
  tcbDatabasedelete: {
    method: 'POST',
    path: '/tcb/databasedelete',
    title: '数据库删除记录',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_deletedatabaseitem.html',
  },
  /** 数据库导出 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_exportdatabaseitem.html */
  tcbDatabasemigrateexport: {
    method: 'POST',
    path: '/tcb/databasemigrateexport',
    title: '数据库导出',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_exportdatabaseitem.html',
  },
  /** 获取集合信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_getdatabasecollection.html */
  tcbDatabasecollectionget: {
    method: 'POST',
    path: '/tcb/databasecollectionget',
    title: '获取集合信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_getdatabasecollection.html',
  },
  /** 统计集合记录数 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_getdatabasecount.html */
  tcbDatabasecount: {
    method: 'POST',
    path: '/tcb/databasecount',
    title: '统计集合记录数',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_getdatabasecount.html',
  },
  /** 数据库迁移状态查询 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_getdatabasemigratestatus.html */
  tcbDatabasemigratequeryinfo: {
    method: 'POST',
    path: '/tcb/databasemigratequeryinfo',
    title: '数据库迁移状态查询',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_getdatabasemigratestatus.html',
  },
  /** 数据库查询记录 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_getdatabaserecord.html */
  tcbDatabasequery: {
    method: 'POST',
    path: '/tcb/databasequery',
    title: '数据库查询记录',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_getdatabaserecord.html',
  },
  /** 数据库导入 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_importdatabaseitem.html */
  tcbDatabasemigrateimport: {
    method: 'POST',
    path: '/tcb/databasemigrateimport',
    title: '数据库导入',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_importdatabaseitem.html',
  },
  /** 更新数据库索引 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_updatedatabaseindexs.html */
  tcbUpdateindex: {
    method: 'POST',
    path: '/tcb/updateindex',
    title: '更新数据库索引',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_updatedatabaseindexs.html',
  },
  /** 数据库更新记录 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_updatedatabaserecord.html */
  tcbDatabaseupdate: {
    method: 'POST',
    path: '/tcb/databaseupdate',
    title: '数据库更新记录',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_updatedatabaserecord.html',
  },
  /** 创建云环境 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/env-management/api_createenv.html */
  tcbCreateenvandresource: {
    method: 'POST',
    path: '/tcb/createenvandresource',
    title: '创建云环境',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/env-management/api_createenv.html',
  },
  /** 获取云环境 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/env-management/api_getenvinfo.html */
  tcbGetenvinfo: {
    method: 'POST',
    path: '/tcb/getenvinfo',
    title: '获取云环境',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/env-management/api_getenvinfo.html',
  },
  /** 环境共享 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/env-management/api_shareenv.html */
  tcbShareenv: {
    method: 'POST',
    path: '/tcb/shareenv',
    title: '环境共享',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/env-management/api_shareenv.html',
  },
  /** 删除文件 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/file-management/api_deletetcbcloudfile.html */
  tcbBatchdeletefile: {
    method: 'POST',
    path: '/tcb/batchdeletefile',
    title: '删除文件',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/file-management/api_deletetcbcloudfile.html',
  },
  /** 获取文件下载链接 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/file-management/api_getdownloadtcbfilelink.html */
  tcbBatchdownloadfile: {
    method: 'POST',
    path: '/tcb/batchdownloadfile',
    title: '获取文件下载链接',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/file-management/api_getdownloadtcbfilelink.html',
  },
  /** 获取文件上传链接 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/file-management/api_getuploadtcbfilelink.html */
  tcbUploadfile: {
    method: 'POST',
    path: '/tcb/uploadfile',
    title: '获取文件上传链接',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/file-management/api_getuploadtcbfilelink.html',
  },
  /** 获取消息推送配置 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/msg-push/api_getcallbackconfig.html */
  tcbGetcallbackconfig: {
    method: 'POST',
    path: '/tcb/getcallbackconfig',
    title: '获取消息推送配置',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/msg-push/api_getcallbackconfig.html',
  },
  /** 上传消息推送配置 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/msg-push/api_setcallbackconfig.html */
  tcbSetcallbackconfig: {
    method: 'POST',
    path: '/tcb/setcallbackconfig',
    title: '上传消息推送配置',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/msg-push/api_setcallbackconfig.html',
  },
  /** 创建云函数 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_createfunction.html */
  tcbCreatefunction: {
    method: 'POST',
    path: '/tcb/createfunction',
    title: '创建云函数',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_createfunction.html',
  },
  /** 获取代码保护密钥 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getcodesecret.html */
  tcbGetcodesecret: {
    method: 'POST',
    path: '/tcb/getcodesecret',
    title: '获取代码保护密钥',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getcodesecret.html',
  },
  /** 获取云函数配置 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getfuntionconfig.html */
  tcbGetfuncconfig: {
    method: 'POST',
    path: '/tcb/getfuncconfig',
    title: '获取云函数配置',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getfuntionconfig.html',
  },
  /** 获取云函数下载地址 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getfuntionlink.html */
  tcbDownloadfunction: {
    method: 'POST',
    path: '/tcb/downloadfunction',
    title: '获取云函数下载地址',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getfuntionlink.html',
  },
  /** 获取云函数列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getfuntionlist.html */
  tcbListfunctions: {
    method: 'POST',
    path: '/tcb/listfunctions',
    title: '获取云函数列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getfuntionlist.html',
  },
  /** 上传云函数配置 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getuploadfuntionconfig.html */
  tcbUploadfuncconfig: {
    method: 'POST',
    path: '/tcb/uploadfuncconfig',
    title: '上传云函数配置',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getuploadfuntionconfig.html',
  },
  /** 获取上传凭证 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getyploadsignature.html */
  tcbGetuploadsignature: {
    method: 'POST',
    path: '/tcb/getuploadsignature',
    title: '获取上传凭证',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getyploadsignature.html',
  },
  /** 申请商户号授权 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/wechatpay/api_getwechatpayauth.html */
  tcbWxpayopenauth: {
    method: 'POST',
    path: '/tcb/wxpayopenauth',
    title: '申请商户号授权',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/wechatpay/api_getwechatpayauth.html',
  },
  /** 获取授权绑定的商户号列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/wechatpay/api_getwechatpaylist.html */
  tcbWxpaylist: {
    method: 'POST',
    path: '/tcb/wxpaylist',
    title: '获取授权绑定的商户号列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/wechatpay/api_getwechatpaylist.html',
  },
  /** 创建云托管环境 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/cloudenv-mgnt/api_createcloudbaseenv.html */
  componenttcbCreatecloudbaserunenv: {
    method: 'POST',
    path: '/componenttcb/createcloudbaserunenv',
    title: '创建云托管环境',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/cloudenv-mgnt/api_createcloudbaseenv.html',
  },
  /** 获取环境信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/cloudenv-mgnt/api_getwxcloudbaserunenvs.html */
  componenttcbDescribecloudbaserunenvs: {
    method: 'POST',
    path: '/componenttcb/describecloudbaserunenvs',
    title: '获取环境信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/cloudenv-mgnt/api_getwxcloudbaserunenvs.html',
  },
  /** 创建服务 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/service-mgnt/api_createcloudbaseservice.html */
  componenttcbEstablishcloudbaserunserver: {
    method: 'POST',
    path: '/componenttcb/establishcloudbaserunserver',
    title: '创建服务',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/service-mgnt/api_createcloudbaseservice.html',
  },
  /** 创建服务版本 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/service-mgnt/api_createcloudbaseserviceversion.html */
  componenttcbCreatecloudbaserunserverversion: {
    method: 'POST',
    path: '/componenttcb/createcloudbaserunserverversion',
    title: '创建服务版本',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/service-mgnt/api_createcloudbaseserviceversion.html',
  },
  /** 删除服务版本 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/service-mgnt/api_deletecloudbaseserviceversion.html */
  componenttcbDeletecloudbaserunserverversion: {
    method: 'POST',
    path: '/componenttcb/deletecloudbaserunserverversion',
    title: '删除服务版本',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/service-mgnt/api_deletecloudbaseserviceversion.html',
  },
  /** 发布服务 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/service-mgnt/api_releasecloudbaseserviceversion.html */
  componenttcbReleasecloudbaserunversion: {
    method: 'POST',
    path: '/componenttcb/releasecloudbaserunversion',
    title: '发布服务',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/service-mgnt/api_releasecloudbaseserviceversion.html',
  },
  /** 滚动更新服务版本 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/service-mgnt/api_updatecloudbaseserviceversion.html */
  componenttcbRollupdatecloudbaserunserverversion: {
    method: 'POST',
    path: '/componenttcb/rollupdatecloudbaserunserverversion',
    title: '滚动更新服务版本',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/service-mgnt/api_updatecloudbaseserviceversion.html',
  },
  /** 申请设置订单页path信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_applysetorderpathinfo.html */
  securityApplysetorderpathinfo: {
    method: 'POST',
    path: '/wxa/security/applysetorderpathinfo',
    title: '申请设置订单页path信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_applysetorderpathinfo.html',
  },
  /** 小程序名称检测 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_checknickname.html */
  wxverifyCheckwxverifynickname: {
    method: 'POST',
    path: '/cgi-bin/wxverify/checkwxverifynickname',
    title: '小程序名称检测',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_checknickname.html',
  },
  /** 获取基本信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getaccountbasicinfo.html */
  accountGetaccountbasicinfo: {
    method: 'POST',
    path: '/cgi-bin/account/getaccountbasicinfo',
    title: '获取基本信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getaccountbasicinfo.html',
  },
  /** 查询绑定的开放平台账号 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getbindopenaccount.html */
  openHave: {
    method: 'GET',
    path: '/cgi-bin/open/have',
    title: '查询绑定的开放平台账号',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getbindopenaccount.html',
  },
  /** 查询开放平台账号是否与小程序同主体 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getbindopenaccountentity.html */
  openSameentity: {
    method: 'GET',
    path: '/cgi-bin/open/sameentity',
    title: '查询开放平台账号是否与小程序同主体',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getbindopenaccountentity.html',
  },
  /** 数据预拉取和数据周期性更新 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getfetchdatasetting.html */
  fetchdatasetting: {
    method: 'POST',
    path: '/wxa/fetchdatasetting',
    title: '数据预拉取和数据周期性更新',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getfetchdatasetting.html',
  },
  /** 查询小程序名称审核状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getnicknamestatus.html */
  apiWxaQuerynickname: {
    method: 'POST',
    path: '/wxa/api_wxa_querynickname',
    title: '查询小程序名称审核状态',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getnicknamestatus.html',
  },
  /** 获取订单页path信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getorderpathinfo.html */
  securityGetorderpathinfo: {
    method: 'POST',
    path: '/wxa/security/getorderpathinfo',
    title: '获取订单页path信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getorderpathinfo.html',
  },
  /** 获取搜索状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getsearchstatus.html */
  getwxasearchstatus: {
    method: 'GET',
    path: '/wxa/getwxasearchstatus',
    title: '获取搜索状态',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getsearchstatus.html',
  },
  /** 修改头像 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_setheadimage.html */
  accountModifyheadimage: {
    method: 'POST',
    path: '/cgi-bin/account/modifyheadimage',
    title: '修改头像',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_setheadimage.html',
  },
  /** 设置小程序名称 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_setnickname.html */
  setnickname: {
    method: 'POST',
    path: '/wxa/setnickname',
    title: '设置小程序名称',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_setnickname.html',
  },
  /** 设置搜索状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_setsearchstatus.html */
  changewxasearchstatus: {
    method: 'POST',
    path: '/wxa/changewxasearchstatus',
    title: '设置搜索状态',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_setsearchstatus.html',
  },
  /** 设置小程序介绍 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_setsignature.html */
  accountModifysignature: {
    method: 'POST',
    path: '/cgi-bin/account/modifysignature',
    title: '设置小程序介绍',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_setsignature.html',
  },
  /** 添加类目 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_addcategory.html */
  wxopenAddcategory: {
    method: 'POST',
    path: '/cgi-bin/wxopen/addcategory',
    title: '添加类目',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_addcategory.html',
  },
  /** 删除类目 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_deletecategory.html */
  wxopenDeletecategory: {
    method: 'POST',
    path: '/cgi-bin/wxopen/deletecategory',
    title: '删除类目',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_deletecategory.html',
  },
  /** 获取可设置的所有类目 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_getallcategories.html */
  wxopenGetallcategories: {
    method: 'GET',
    path: '/cgi-bin/wxopen/getallcategories',
    title: '获取可设置的所有类目',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_getallcategories.html',
  },
  /** 获取不同类型主体可设置的类目 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_getallcategoriesbytype.html */
  wxopenGetcategoriesbytype: {
    method: 'POST',
    path: '/cgi-bin/wxopen/getcategoriesbytype',
    title: '获取不同类型主体可设置的类目',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_getallcategoriesbytype.html',
  },
  /** 获取类目名称信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_getallcategoryname.html */
  getCategory: {
    method: 'GET',
    path: '/wxa/get_category',
    title: '获取类目名称信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_getallcategoryname.html',
  },
  /** 获取已设置的所有类目 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_getsettingcategories.html */
  wxopenGetcategory: {
    method: 'GET',
    path: '/cgi-bin/wxopen/getcategory',
    title: '获取已设置的所有类目',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_getsettingcategories.html',
  },
  /** 修改类目资质信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_modifycategory.html */
  wxopenModifycategory: {
    method: 'POST',
    path: '/cgi-bin/wxopen/modifycategory',
    title: '修改类目资质信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_modifycategory.html',
  },
  /** 上传代码并生成体验版 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_commit.html */
  commit: {
    method: 'POST',
    path: '/wxa/commit',
    title: '上传代码并生成体验版',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_commit.html',
  },
  /** 查询审核单状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getauditstatus.html */
  getAuditstatus: {
    method: 'POST',
    path: '/wxa/get_auditstatus',
    title: '查询审核单状态',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getauditstatus.html',
  },
  /** 获取已上传的代码页面列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getcodepage.html */
  getPage: {
    method: 'GET',
    path: '/wxa/get_page',
    title: '获取已上传的代码页面列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getcodepage.html',
  },
  /** 获取隐私接口检测结果 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getcodeprivacyinfo.html */
  securityGetCodePrivacyInfo: {
    method: 'GET',
    path: '/wxa/security/get_code_privacy_info',
    title: '获取隐私接口检测结果',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getcodeprivacyinfo.html',
  },
  /** 获取分阶段发布详情 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getgrayreleaseplan.html */
  getgrayreleaseplan: {
    method: 'GET',
    path: '/wxa/getgrayreleaseplan',
    title: '获取分阶段发布详情',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getgrayreleaseplan.html',
  },
  /** 查询最新一次审核单状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getlatestauditstatus.html */
  getLatestAuditstatus: {
    method: 'GET',
    path: '/wxa/get_latest_auditstatus',
    title: '查询最新一次审核单状态',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getlatestauditstatus.html',
  },
  /** 查询各版本用户占比 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getsupportversion.html */
  wxopenGetweappsupportversion: {
    method: 'POST',
    path: '/cgi-bin/wxopen/getweappsupportversion',
    title: '查询各版本用户占比',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getsupportversion.html',
  },
  /** 获取体验版二维码 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_gettrialqrcode.html */
  getQrcode: {
    method: 'GET',
    path: '/wxa/get_qrcode',
    title: '获取体验版二维码',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_gettrialqrcode.html',
  },
  /** 查询小程序版本信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getversioninfo.html */
  getversioninfo: {
    method: 'POST',
    path: '/wxa/getversioninfo',
    title: '查询小程序版本信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getversioninfo.html',
  },
  /** 查询小程序服务状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getvisitstatus.html */
  getvisitstatus: {
    method: 'POST',
    path: '/wxa/getvisitstatus',
    title: '查询小程序服务状态',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getvisitstatus.html',
  },
  /** 分阶段发布 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_grayrelease.html */
  grayrelease: {
    method: 'POST',
    path: '/wxa/grayrelease',
    title: '分阶段发布',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_grayrelease.html',
  },
  /** 发布已通过审核的小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_release.html */
  release: {
    method: 'POST',
    path: '/wxa/release',
    title: '发布已通过审核的小程序',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_release.html',
  },
  /** 小程序版本回退 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_revertcoderelease.html */
  revertcoderelease: {
    method: 'GET',
    path: '/wxa/revertcoderelease',
    title: '小程序版本回退',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_revertcoderelease.html',
  },
  /** 取消分阶段发布 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_revertgrayrelease.html */
  revertgrayrelease: {
    method: 'GET',
    path: '/wxa/revertgrayrelease',
    title: '取消分阶段发布',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_revertgrayrelease.html',
  },
  /** 查询服务商审核额度 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_setcodeauditquota.html */
  queryquota: {
    method: 'GET',
    path: '/wxa/queryquota',
    title: '查询服务商审核额度',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_setcodeauditquota.html',
  },
  /** 设置最低基础库版本 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_setsupportversion.html */
  wxopenSetweappsupportversion: {
    method: 'POST',
    path: '/cgi-bin/wxopen/setweappsupportversion',
    title: '设置最低基础库版本',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_setsupportversion.html',
  },
  /** 设置小程序服务状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_setvisitstatus.html */
  changeVisitstatus: {
    method: 'POST',
    path: '/wxa/change_visitstatus',
    title: '设置小程序服务状态',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_setvisitstatus.html',
  },
  /** 加急代码审核 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_speedupcodeaudit.html */
  speedupaudit: {
    method: 'POST',
    path: '/wxa/speedupaudit',
    title: '加急代码审核',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_speedupcodeaudit.html',
  },
  /** 提交代码审核 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_submitaudit.html */
  submitAudit: {
    method: 'POST',
    path: '/wxa/submit_audit',
    title: '提交代码审核',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_submitaudit.html',
  },
  /** 撤回代码审核 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_undoaudit.html */
  undocodeaudit: {
    method: 'GET',
    path: '/wxa/undocodeaudit',
    title: '撤回代码审核',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_undoaudit.html',
  },
  /** 上传提审素材 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_uploadmediatocodeaudit.html */
  uploadmedia: {
    method: 'POST',
    path: '/wxa/uploadmedia',
    title: '上传提审素材',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_uploadmediatocodeaudit.html',
  },
  /** 获取发布后生效业务域名列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_geteffectivejumpdomain.html */
  getEffectiveWebviewdomain: {
    method: 'POST',
    path: '/wxa/get_effective_webviewdomain',
    title: '获取发布后生效业务域名列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_geteffectivejumpdomain.html',
  },
  /** 获取发布后生效服务器域名列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_geteffectiveserverdomain.html */
  getEffectiveDomain: {
    method: 'POST',
    path: '/wxa/get_effective_domain',
    title: '获取发布后生效服务器域名列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_geteffectiveserverdomain.html',
  },
  /** 获取业务域名校验文件 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_getjumpdomainconfirmfile.html */
  getWebviewdomainConfirmfile: {
    method: 'POST',
    path: '/wxa/get_webviewdomain_confirmfile',
    title: '获取业务域名校验文件',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_getjumpdomainconfirmfile.html',
  },
  /** 获取DNS预解析域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_getprefetchdomain.html */
  getPrefetchdnsdomain: {
    method: 'GET',
    path: '/wxa/get_prefetchdnsdomain',
    title: '获取DNS预解析域名',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_getprefetchdomain.html',
  },
  /** 配置小程序业务域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_modifyjumpdomain.html */
  setwebviewdomain: {
    method: 'POST',
    path: '/wxa/setwebviewdomain',
    title: '配置小程序业务域名',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_modifyjumpdomain.html',
  },
  /** 快速配置小程序业务域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_modifyjumpdomaindirectly.html */
  setwebviewdomainDirectly: {
    method: 'POST',
    path: '/wxa/setwebviewdomain_directly',
    title: '快速配置小程序业务域名',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_modifyjumpdomaindirectly.html',
  },
  /** 配置小程序服务器域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_modifyserverdomain.html */
  modifyDomain: {
    method: 'POST',
    path: '/wxa/modify_domain',
    title: '配置小程序服务器域名',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_modifyserverdomain.html',
  },
  /** 快速配置小程序服务器域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_modifyserverdomaindirectly.html */
  modifyDomainDirectly: {
    method: 'POST',
    path: '/wxa/modify_domain_directly',
    title: '快速配置小程序服务器域名',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_modifyserverdomaindirectly.html',
  },
  /** 设置DNS预解析域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_setprefetchdomain.html */
  setPrefetchdnsdomain: {
    method: 'POST',
    path: '/wxa/set_prefetchdnsdomain',
    title: '设置DNS预解析域名',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_setprefetchdomain.html',
  },
  /** 添加半屏小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_addembedded.html */
  wxaembeddedAddEmbedded: {
    method: 'POST',
    path: '/wxaapi/wxaembedded/add_embedded',
    title: '添加半屏小程序',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_addembedded.html',
  },
  /** 取消授权小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_deleteauthorizedembedded.html */
  wxaembeddedDelAuthorize: {
    method: 'POST',
    path: '/wxaapi/wxaembedded/del_authorize',
    title: '取消授权小程序',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_deleteauthorizedembedded.html',
  },
  /** 删除半屏小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_deleteembedded.html */
  wxaembeddedDelEmbedded: {
    method: 'POST',
    path: '/wxaapi/wxaembedded/del_embedded',
    title: '删除半屏小程序',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_deleteembedded.html',
  },
  /** 获取半屏小程序调用列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_getembeddedlist.html */
  wxaembeddedGetList: {
    method: 'GET',
    path: '/wxaapi/wxaembedded/get_list',
    title: '获取半屏小程序调用列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_getembeddedlist.html',
  },
  /** 获取半屏小程序授权列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_getownlist.html */
  wxaembeddedGetOwnList: {
    method: 'GET',
    path: '/wxaapi/wxaembedded/get_own_list',
    title: '获取半屏小程序授权列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_getownlist.html',
  },
  /** 设置授权方式 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_setauthorizedembedded.html */
  wxaembeddedSetAuthorize: {
    method: 'POST',
    path: '/wxaapi/wxaembedded/set_authorize',
    title: '设置授权方式',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_setauthorizedembedded.html',
  },
  /** 获取校验文件名称及内容 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/jumpqrcode-config/api_downloadqrcodetext.html */
  wxopenQrcodejumpdownload: {
    method: 'POST',
    path: '/cgi-bin/wxopen/qrcodejumpdownload',
    title: '获取校验文件名称及内容',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/jumpqrcode-config/api_downloadqrcodetext.html',
  },
  /** 增加或修改二维码规则 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/jumpqrcode-config/api_qrcodejumpadd.html */
  wxopenQrcodejumpadd: {
    method: 'POST',
    path: '/cgi-bin/wxopen/qrcodejumpadd',
    title: '增加或修改二维码规则',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/jumpqrcode-config/api_qrcodejumpadd.html',
  },
  /** 删除已设置的二维码规则 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/jumpqrcode-config/api_qrcodejumpdelete.html */
  wxopenQrcodejumpdelete: {
    method: 'POST',
    path: '/cgi-bin/wxopen/qrcodejumpdelete',
    title: '删除已设置的二维码规则',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/jumpqrcode-config/api_qrcodejumpdelete.html',
  },
  /** 获取已设置的二维码规则 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/jumpqrcode-config/api_qrcodejumpget.html */
  wxopenQrcodejumpget: {
    method: 'POST',
    path: '/cgi-bin/wxopen/qrcodejumpget',
    title: '获取已设置的二维码规则',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/jumpqrcode-config/api_qrcodejumpget.html',
  },
  /** 发布已设置的二维码规则 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/jumpqrcode-config/api_qrcodejumppublish.html */
  wxopenQrcodejumppublish: {
    method: 'POST',
    path: '/cgi-bin/wxopen/qrcodejumppublish',
    title: '发布已设置的二维码规则',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/jumpqrcode-config/api_qrcodejumppublish.html',
  },
  /** 申请开通直播 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/live-player/api_applylivelnfo.html */
  businessApplyliveinfo: {
    method: 'POST',
    path: '/wxa/business/applyliveinfo',
    title: '申请开通直播',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/live-player/api_applylivelnfo.html',
  },
  /** 申请开通物流消息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/logistics-service/api_applymsgplugin.html */
  expressDeliveryOpenMsgOpenOpenmsg: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/open_msg/open_openmsg',
    title: '申请开通物流消息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/logistics-service/api_applymsgplugin.html',
  },
  /** 申请开通物流查询组件 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/logistics-service/api_applyqueryplugin.html */
  expressDeliveryOpenMsgOpenQueryPlugin: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/open_msg/open_query_plugin',
    title: '申请开通物流查询组件',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/logistics-service/api_applyqueryplugin.html',
  },
  /** 申请开通物流退货组件 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/logistics-service/api_applyreturnplugin.html */
  expressDeliveryReturnOpenReturn: {
    method: 'POST',
    path: '/cgi-bin/express/delivery/return/open_return',
    title: '申请开通物流退货组件',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/logistics-service/api_applyreturnplugin.html',
  },
  /** 绑定体验者 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/member-management/api_bindtester.html */
  bindTester: {
    method: 'POST',
    path: '/wxa/bind_tester',
    title: '绑定体验者',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/member-management/api_bindtester.html',
  },
  /** 获取体验者列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/member-management/api_gettester.html */
  memberauth: {
    method: 'POST',
    path: '/wxa/memberauth',
    title: '获取体验者列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/member-management/api_gettester.html',
  },
  /** 解除绑定体验者 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/member-management/api_unbindtester.html */
  unbindTester: {
    method: 'POST',
    path: '/wxa/unbind_tester',
    title: '解除绑定体验者',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/member-management/api_unbindtester.html',
  },
  /** 申请地理位置接口 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/privacy-api-management/api_applyprivacyinterface.html */
  securityApplyPrivacyInterface: {
    method: 'POST',
    path: '/wxa/security/apply_privacy_interface',
    title: '申请地理位置接口',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/privacy-api-management/api_applyprivacyinterface.html',
  },
  /** 获取地理位置接口列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/privacy-api-management/api_getprivacyinterface.html */
  securityGetPrivacyInterface: {
    method: 'GET',
    path: '/wxa/security/get_privacy_interface',
    title: '获取地理位置接口列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/privacy-api-management/api_getprivacyinterface.html',
  },
  /** 获取小程序用户隐私保护指引 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/privacy-management/api_getprivacysetting.html */
  getprivacysetting: {
    method: 'POST',
    path: '/cgi-bin/component/getprivacysetting',
    title: '获取小程序用户隐私保护指引',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/privacy-management/api_getprivacysetting.html',
  },
  /** 设置小程序用户隐私保护指引 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/privacy-management/api_setprivacysetting.html */
  setprivacysetting: {
    method: 'POST',
    path: '/cgi-bin/component/setprivacysetting',
    title: '设置小程序用户隐私保护指引',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/privacy-management/api_setprivacysetting.html',
  },
  /** 上传小程序用户隐私保护指引 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/privacy-management/api_uploadprivacysetting.html */
  uploadprivacyextfile: {
    method: 'POST',
    path: '/cgi-bin/component/uploadprivacyextfile',
    title: '上传小程序用户隐私保护指引',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/privacy-management/api_uploadprivacysetting.html',
  },
  /** 获取小程序申诉记录 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record-management/api_getappealrecords.html */
  getappealrecords: {
    method: 'POST',
    path: '/wxa/getappealrecords',
    title: '获取小程序申诉记录',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record-management/api_getappealrecords.html',
  },
  /** 获取小程序违规处罚记录 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record-management/api_getillegalrecords.html */
  getillegalrecords: {
    method: 'POST',
    path: '/wxa/getillegalrecords',
    title: '获取小程序违规处罚记录',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record-management/api_getillegalrecords.html',
  },
  /** 申请小程序备案 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_applyicpfiling.html */
  icpApplyIcpFiling: {
    method: 'POST',
    path: '/wxa/icp/apply_icp_filing',
    title: '申请小程序备案',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_applyicpfiling.html',
  },
  /** 撤回小程序备案申请 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_cancelapplyicpfiling.html */
  icpCancelApplyIcpFiling: {
    method: 'POST',
    path: '/wxa/icp/cancel_apply_icp_filing',
    title: '撤回小程序备案申请',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_cancelapplyicpfiling.html',
  },
  /** 注销小程序备案 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_cancelicpfiling.html */
  icpCancelIcpFiling: {
    method: 'POST',
    path: '/wxa/icp/cancel_icp_filing',
    title: '注销小程序备案',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_cancelicpfiling.html',
  },
  /** 发起小程序管理员人脸核身 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_createicpverifytask.html */
  icpCreateIcpVerifytask: {
    method: 'POST',
    path: '/wxa/icp/create_icp_verifytask',
    title: '发起小程序管理员人脸核身',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_createicpverifytask.html',
  },
  /** 获取小程序备案状态及驳回原因 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_geticpentranceinfo.html */
  icpGetIcpEntranceInfo: {
    method: 'GET',
    path: '/wxa/icp/get_icp_entrance_info',
    title: '获取小程序备案状态及驳回原因',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_geticpentranceinfo.html',
  },
  /** 获取小程序备案媒体材料 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_geticpmedia.html */
  icpGetIcpMedia: {
    method: 'GET',
    path: '/wxa/icp/get_icp_media',
    title: '获取小程序备案媒体材料',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_geticpmedia.html',
  },
  /** 获取小程序已备案详情 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_getonlineicporder.html */
  icpGetOnlineIcpOrder: {
    method: 'GET',
    path: '/wxa/icp/get_online_icp_order',
    title: '获取小程序已备案详情',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_getonlineicporder.html',
  },
  /** 获取证件类型 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpcertificatetypes.html */
  icpQueryIcpCertificateTypes: {
    method: 'GET',
    path: '/wxa/icp/query_icp_certificate_types',
    title: '获取证件类型',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpcertificatetypes.html',
  },
  /** 获取区域信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpdistrictcode.html */
  icpQueryIcpDistrictCode: {
    method: 'GET',
    path: '/wxa/icp/query_icp_district_code',
    title: '获取区域信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpdistrictcode.html',
  },
  /** 获取前置审批项类型 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpnrlxtypes.html */
  icpQueryIcpNrlxTypes: {
    method: 'GET',
    path: '/wxa/icp/query_icp_nrlx_types',
    title: '获取前置审批项类型',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpnrlxtypes.html',
  },
  /** 获取小程序服务内容类型 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpservicecontenttypes.html */
  icpQueryIcpServiceContentTypes: {
    method: 'GET',
    path: '/wxa/icp/query_icp_service_content_types',
    title: '获取小程序服务内容类型',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpservicecontenttypes.html',
  },
  /** 获取单位性质 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpsubjecttypes.html */
  icpQueryIcpSubjectTypes: {
    method: 'GET',
    path: '/wxa/icp/query_icp_subject_types',
    title: '获取单位性质',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpsubjecttypes.html',
  },
  /** 查询人脸核身任务状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpverifytask.html */
  icpQueryIcpVerifytask: {
    method: 'POST',
    path: '/wxa/icp/query_icp_verifytask',
    title: '查询人脸核身任务状态',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpverifytask.html',
  },
  /** 上传小程序备案媒体材料 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_uploadicpmedia.html */
  icpUploadIcpMedia: {
    method: 'POST',
    path: '/wxa/icp/upload_icp_media',
    title: '上传小程序备案媒体材料',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_uploadicpmedia.html',
  },
  /** 获取可设置公众号列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/subscribe-component/api_getlinkforshow.html */
  getwxamplinkforshow: {
    method: 'GET',
    path: '/wxa/getwxamplinkforshow',
    title: '获取可设置公众号列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/subscribe-component/api_getlinkforshow.html',
  },
  /** 获取已设置公众号信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/subscribe-component/api_getshowitem.html */
  getshowwxaitem: {
    method: 'GET',
    path: '/wxa/getshowwxaitem',
    title: '获取已设置公众号信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/subscribe-component/api_getshowitem.html',
  },
  /** 设置扫码关注的公众号 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/subscribe-component/api_setshowitem.html */
  updateshowwxaitem: {
    method: 'POST',
    path: '/wxa/updateshowwxaitem',
    title: '设置扫码关注的公众号',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/subscribe-component/api_setshowitem.html',
  },
  /** 用户PC端登录 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedata_login.html */
  wedataWedataLogin: {
    method: 'POST',
    path: '/wedata/wedata_login',
    title: '用户PC端登录',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedata_login.html',
  },
  /** 查询登录配置 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedatagetloginconfig.html */
  wedataWedataGetLoginConfig: {
    method: 'POST',
    path: '/wedata/wedata_get_login_config',
    title: '查询登录配置',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedatagetloginconfig.html',
  },
  /** 获取商家We分析权限集列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedatagetpermlist.html */
  wedataWedataGetPermList: {
    method: 'POST',
    path: '/wedata/wedata_get_perm_list',
    title: '获取商家We分析权限集列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedatagetpermlist.html',
  },
  /** 查询用户绑定列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedataquerybindlist.html */
  wedataWedataQueryBindList: {
    method: 'POST',
    path: '/wedata/wedata_query_bind_list',
    title: '查询用户绑定列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedataquerybindlist.html',
  },
  /** 设置登录配置 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedatasetloginconfig.html */
  wedataWedataSetLoginConfig: {
    method: 'POST',
    path: '/wedata/wedata_set_login_config',
    title: '设置登录配置',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedatasetloginconfig.html',
  },
  /** 设置用户We分析权限集 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedatasetuserperm.html */
  wedataWedataSetUserPerm: {
    method: 'POST',
    path: '/wedata/wedata_set_user_perm',
    title: '设置用户We分析权限集',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedatasetuserperm.html',
  },
  /** 用户解绑 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedataunbinduser.html */
  wedataWedataUnbindUser: {
    method: 'POST',
    path: '/wedata/wedata_unbind_user',
    title: '用户解绑',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedataunbinduser.html',
  },
  /** 查询个人认证身份选项列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/weapp-wxverify/api_secwxaapi_authidentitytree.html */
  authidentitytree: {
    method: 'GET',
    path: '/wxa/sec/authidentitytree',
    title: '查询个人认证身份选项列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/weapp-wxverify/api_secwxaapi_authidentitytree.html',
  },
  /** 小程序认证进度查询 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/weapp-wxverify/api_secwxaapi_queryauth.html */
  queryauth: {
    method: 'POST',
    path: '/wxa/sec/queryauth',
    title: '小程序认证进度查询',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/weapp-wxverify/api_secwxaapi_queryauth.html',
  },
  /** 小程序认证重新提审 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/weapp-wxverify/api_secwxaapi_reauth.html */
  reauth: {
    method: 'POST',
    path: '/wxa/sec/reauth',
    title: '小程序认证重新提审',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/weapp-wxverify/api_secwxaapi_reauth.html',
  },
  /** 小程序认证上传补充材料 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/weapp-wxverify/api_secwxaapi_uploadauthmaterial.html */
  uploadauthmaterial: {
    method: 'POST',
    path: '/wxa/sec/uploadauthmaterial',
    title: '小程序认证上传补充材料',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/weapp-wxverify/api_secwxaapi_uploadauthmaterial.html',
  },
  /** 小程序认证 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/weapp-wxverify/api_secwxaapi_wxaauth.html */
  wxaauth: {
    method: 'POST',
    path: '/wxa/sec/wxaauth',
    title: '小程序认证',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/weapp-wxverify/api_secwxaapi_wxaauth.html',
  },
  /** 查询小程序认证及备案进度 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/wxverifyicp/api_queryauthandicp.html */
  queryAuthAndIcp: {
    method: 'POST',
    path: '/wxa/sec/query_auth_and_icp',
    title: '查询小程序认证及备案进度',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/wxverifyicp/api_queryauthandicp.html',
  },
  /** 申请小程序认证及备案 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/wxverifyicp/api_submitauthandicp.html */
  submitAuthAndIcp: {
    method: 'POST',
    path: '/wxa/sec/submit_auth_and_icp',
    title: '申请小程序认证及备案',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/wxverifyicp/api_submitauthandicp.html',
  },
  /** 获取公众号关联的小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/officalaccount-management/link-miniprogram/api_getlinkminiprogram.html */
  wxopenWxamplinkget: {
    method: 'POST',
    path: '/cgi-bin/wxopen/wxamplinkget',
    title: '获取公众号关联的小程序',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/officalaccount-management/link-miniprogram/api_getlinkminiprogram.html',
  },
  /** 公众号关联小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/officalaccount-management/link-miniprogram/api_linkminiprogram.html */
  wxopenWxamplink: {
    method: 'POST',
    path: '/cgi-bin/wxopen/wxamplink',
    title: '公众号关联小程序',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/officalaccount-management/link-miniprogram/api_linkminiprogram.html',
  },
  /** 公众号解除关联小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/officalaccount-management/link-miniprogram/api_unlinkminiprogram.html */
  wxopenWxampunlink: {
    method: 'POST',
    path: '/cgi-bin/wxopen/wxampunlink',
    title: '公众号解除关联小程序',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/officalaccount-management/link-miniprogram/api_unlinkminiprogram.html',
  },
  /** 重置API调用次数 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openapi/api_clearquota.html */
  clearQuota: {
    method: 'POST',
    path: '/cgi-bin/clear_quota',
    title: '重置API调用次数',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/openapi/api_clearquota.html',
  },
  /** 使用AppSecret重置第三方平台API调用次数 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openapi/api_componentclearquota_v2.html */
  clearQuotaV2: {
    method: 'POST',
    path: '/cgi-bin/component/clear_quota/v2',
    title: '使用AppSecret重置第三方平台API调用次数',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/openapi/api_componentclearquota_v2.html',
  },
  /** 查询API调用额度 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openapi/api_getapiquota.html */
  openapiQuotaGet: {
    method: 'POST',
    path: '/cgi-bin/openapi/quota/get',
    title: '查询API调用额度',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/openapi/api_getapiquota.html',
  },
  /** 查询rid信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openapi/api_getridinfo.html */
  openapiRidGet: {
    method: 'POST',
    path: '/cgi-bin/openapi/rid/get',
    title: '查询rid信息',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/openapi/api_getridinfo.html',
  },
  /** 绑定开放平台账号 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openplatform-management/api_bindopenaccount.html */
  openBind: {
    method: 'POST',
    path: '/cgi-bin/open/bind',
    title: '绑定开放平台账号',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/openplatform-management/api_bindopenaccount.html',
  },
  /** 创建开放平台账号 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openplatform-management/api_createopenaccount.html */
  openCreate: {
    method: 'POST',
    path: '/cgi-bin/open/create',
    title: '创建开放平台账号',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/openplatform-management/api_createopenaccount.html',
  },
  /** 获取开放平台账号 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openplatform-management/api_getopenaccount.html */
  openGet: {
    method: 'POST',
    path: '/cgi-bin/open/get',
    title: '获取开放平台账号',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/openplatform-management/api_getopenaccount.html',
  },
  /** 解除绑定开放平台账号 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openplatform-management/api_unbindopenaccount.html */
  openUnbind: {
    method: 'POST',
    path: '/cgi-bin/open/unbind',
    title: '解除绑定开放平台账号',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/openplatform-management/api_unbindopenaccount.html',
  },
  /** 转正为个人升级版小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-regist-beta/api_fastnormalizebetaweapp.html */
  fastnormalizebetaweapp: {
    method: 'POST',
    path: '/wxa/component/fastnormalizebetaweapp',
    title: '转正为个人升级版小程序',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-regist-beta/api_fastnormalizebetaweapp.html',
  },
  /** 修改试用小程序名称 @see https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-regist-beta/api_modifybetaminiprogramnickname.html */
  setbetaweappnickname: {
    method: 'POST',
    path: '/wxa/setbetaweappnickname',
    title: '修改试用小程序名称',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-regist-beta/api_modifybetaminiprogramnickname.html',
  },
  /** 注册试用小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-regist-beta/api_registerbetaminiprogram.html */
  fastregisterbetaweapp: {
    method: 'POST',
    path: '/wxa/component/fastregisterbetaweapp',
    title: '注册试用小程序',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-regist-beta/api_registerbetaminiprogram.html',
  },
  /** 试用小程序快速转正 @see https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-regist-beta/api_verfifybetaminiprogram.html */
  verifybetaweapp: {
    method: 'POST',
    path: '/wxa/verifybetaweapp',
    title: '试用小程序快速转正',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-regist-beta/api_verfifybetaminiprogram.html',
  },
  /** 快速注册企业小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-registration-ent/api_registerminiprogram.html */
  fastregisterweapp: {
    method: 'POST',
    path: '/cgi-bin/component/fastregisterweapp',
    title: '快速注册企业小程序',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-registration-ent/api_registerminiprogram.html',
  },
  /** 快速注册个人升级版小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-registration-ind/api_fastregistertransactionweapp.html */
  fastregistertransactionweapp: {
    method: 'POST',
    path: '/wxa/component/fastregistertransactionweapp',
    title: '快速注册个人升级版小程序',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-registration-ind/api_fastregistertransactionweapp.html',
  },
  /** 复用公众号主体快速注册小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-registration-officalaccount/api_registerminiprogrambyoffiaccount.html */
  accountFastregister: {
    method: 'POST',
    path: '/cgi-bin/account/fastregister',
    title: '复用公众号主体快速注册小程序',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-registration-officalaccount/api_registerminiprogrambyoffiaccount.html',
  },
  /** 获取第三方平台业务域名校验文件 @see https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/domain-mgnt/api_getthirdpartyjumpdomainconfirmfile.html */
  getDomainConfirmfile: {
    method: 'POST',
    path: '/cgi-bin/component/get_domain_confirmfile',
    title: '获取第三方平台业务域名校验文件',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/domain-mgnt/api_getthirdpartyjumpdomainconfirmfile.html',
  },
  /** 设置第三方平台业务域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/domain-mgnt/api_modifythirdpartyjumpdomain.html */
  modifyWxaJumpDomain: {
    method: 'POST',
    path: '/cgi-bin/component/modify_wxa_jump_domain',
    title: '设置第三方平台业务域名',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/domain-mgnt/api_modifythirdpartyjumpdomain.html',
  },
  /** 设置第三方平台服务器域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/domain-mgnt/api_modifythirdpartyserverdomain.html */
  modifyWxaServerDomain: {
    method: 'POST',
    path: '/cgi-bin/component/modify_wxa_server_domain',
    title: '设置第三方平台服务器域名',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/domain-mgnt/api_modifythirdpartyserverdomain.html',
  },
  /** 将草稿添加到模板库 @see https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/template-management/api_addtotemplate.html */
  addtotemplate: {
    method: 'POST',
    path: '/wxa/addtotemplate',
    title: '将草稿添加到模板库',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/template-management/api_addtotemplate.html',
  },
  /** 删除代码模板 @see https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/template-management/api_deletetemplate.html */
  deletetemplate: {
    method: 'POST',
    path: '/wxa/deletetemplate',
    title: '删除代码模板',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/template-management/api_deletetemplate.html',
  },
  /** 获取草稿箱列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/template-management/api_gettemplatedraftlist.html */
  gettemplatedraftlist: {
    method: 'GET',
    path: '/wxa/gettemplatedraftlist',
    title: '获取草稿箱列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/template-management/api_gettemplatedraftlist.html',
  },
  /** 获取模板列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/template-management/api_gettemplatelist.html */
  gettemplatelist: {
    method: 'GET',
    path: '/wxa/gettemplatelist',
    title: '获取模板列表',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/template-management/api_gettemplatelist.html',
  },
  /** 获取授权账号调用令牌 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getauthorizeraccesstoken.html */
  apiAuthorizerToken: {
    method: 'POST',
    path: '/cgi-bin/component/api_authorizer_token',
    title: '获取授权账号调用令牌',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getauthorizeraccesstoken.html',
  },
  /** 获取刷新令牌 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getauthorizerrefreshtoken.html */
  apiQueryAuth: {
    method: 'POST',
    path: '/cgi-bin/component/api_query_auth',
    title: '获取刷新令牌',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getauthorizerrefreshtoken.html',
  },
  /** 获取令牌 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getcomponentaccesstoken.html */
  apiComponentToken: {
    method: 'POST',
    path: '/cgi-bin/component/api_component_token',
    title: '获取令牌',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getcomponentaccesstoken.html',
  },
  /** 获取预授权码 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getpreauthcode.html */
  apiCreatePreauthcode: {
    method: 'POST',
    path: '/cgi-bin/component/api_create_preauthcode',
    title: '获取预授权码',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getpreauthcode.html',
  },
  /** 启动票据推送服务 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_startpushticket.html */
  apiStartPushTicket: {
    method: 'POST',
    path: '/cgi-bin/component/api_start_push_ticket',
    title: '启动票据推送服务',
    cat: 'openApi',
    doc: 'https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_startpushticket.html',
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
  /** 注册设备ID @see https://developers.weixin.qq.com/doc/oplatform/Miniprogram_Frame/api/backend/addDevice.html */
  businessRuntimeAdddevice(
    body?: BusinessRuntimeAdddeviceBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessRuntimeAdddeviceResp>;
  /** 向WMPF推送消息 @see https://developers.weixin.qq.com/doc/oplatform/Miniprogram_Frame/api/backend/pushAppMsg.html */
  businessRuntimePushappmsg(
    body?: BusinessRuntimePushappmsgBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessRuntimePushappmsgResp>;
  /** messageTemplateSubscribe @see https://developers.weixin.qq.com/doc/oplatform/Mobile_App/One-time_subscription_info.html */
  messageTemplateSubscribe(
    body?: MessageTemplateSubscribeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MessageTemplateSubscribeResp>;
  /** oauth2AccessToken @see https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Login/Authorized_API_call_UnionID.html */
  oauth2AccessToken(
    body?: Oauth2AccessTokenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<Oauth2AccessTokenResp>;
  /** userinfo @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/Before_Develop/Official_Accounts/official_account_website_authorization.html */
  userinfo(
    body?: UserinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UserinfoResp>;
  /** 快速创建个人小程序 @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/product/Register_Mini_Programs/fastregisterpersonalmp.html */
  fastregisterpersonalweapp(
    body?: FastregisterpersonalweappBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FastregisterpersonalweappResp>;
  /** 服务商使用云托管开放服务 @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/product/wxcloudrun_dev_token.html */
  jscode2session(
    body?: Jscode2sessionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<Jscode2sessionResp>;
  /** token @see https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_PC_APIs/getaccesstoken.html */
  token(
    body?: TokenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TokenResp>;
  /** PC 小程序插件接入指南 Beta @see https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_PC_APIs/running_a_mini_program.html */
  pcsdkLogin(
    body?: PcsdkLoginBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<PcsdkLoginResp>;
  /** 获取行业屏蔽信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ams/ad-black/api_getamscategoryblacklist.html */
  operationams(
    body?: OperationamsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OperationamsResp>;
  /** 获取服务商广告明细数据 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ams/ad-data/api_getagencyadsdetail.html */
  getdefaultamsinfo(
    body?: GetdefaultamsinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetdefaultamsinfoResp>;
  /** 设置自定义分账比例 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ams/percentage/api_setcustomshareratio.html */
  setdefaultamsinfo(
    body?: SetdefaultamsinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SetdefaultamsinfoResp>;
  /** 获取授权账号详情 @see https://developers.weixin.qq.com/doc/oplatform/openApi/authorization-management/api_getauthorizerinfo.html */
  apiGetAuthorizerInfo(
    body?: ApiGetAuthorizerInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ApiGetAuthorizerInfoResp>;
  /** 拉取已授权的账号信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/authorization-management/api_getauthorizerlist.html */
  apiGetAuthorizerList(
    body?: ApiGetAuthorizerListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ApiGetAuthorizerListResp>;
  /** 获取授权方选项信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/authorization-management/api_getauthorizeroptioninfo.html */
  getAuthorizerOption(
    body?: GetAuthorizerOptionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetAuthorizerOptionResp>;
  /** 设置授权方选项信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/authorization-management/api_setauthorizeroptioninfo.html */
  setAuthorizerOption(
    body?: SetAuthorizerOptionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SetAuthorizerOptionResp>;
  /** 数据库聚合 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_dbaggregate.html */
  componenttcbDbaggregate(
    body?: ComponenttcbDbaggregateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbDbaggregateResp>;
  /** 数据库导出 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_dbexport.html */
  componenttcbDbexport(
    body?: ComponenttcbDbexportBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbDbexportResp>;
  /** 数据库导入 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_dbimport.html */
  componenttcbDbimport(
    body?: ComponenttcbDbimportBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbDbimportResp>;
  /** 数据库索引管理 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_dbindexmanage.html */
  componenttcbDbindex(
    body?: ComponenttcbDbindexBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbDbindexResp>;
  /** 数据库记录管理 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_dbrecordmanage.html */
  componenttcbDbrecord(
    body?: ComponenttcbDbrecordBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbDbrecordResp>;
  /** 数据库状态查询 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_getmigrationstate.html */
  componenttcbDbmigrationstate(
    body?: ComponenttcbDbmigrationstateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbDbmigrationstateResp>;
  /** 获取数据库操作权限 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_getpermission.html */
  componenttcbDbgetacl(
    body?: ComponenttcbDbgetaclBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbDbgetaclResp>;
  /** 修改数据库操作权限 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/db-mgnt/api_setpermission.html */
  componenttcbDbmodifyacl(
    body?: ComponenttcbDbmodifyaclBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbDbmodifyaclResp>;
  /** 转换云环境 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_changetcbenv.html */
  tcbModifyenv(
    body?: TcbModifyenvBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbModifyenvResp>;
  /** 创建环境 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_createtcbenv.html */
  componenttcbCreateenv(
    body?: ComponenttcbCreateenvBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbCreateenvResp>;
  /** 查询环境共享信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_getsharecloudbaseenv.html */
  componenttcbBatchgetenvid(
    body?: ComponenttcbBatchgetenvidBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbBatchgetenvidResp>;
  /** 获取环境信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_gettcbenvlist.html */
  componenttcbDescribeenvs(
    body?: ComponenttcbDescribeenvsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbDescribeenvsResp>;
  /** 管理微信令牌权限 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_setcloudaccesstoken.html */
  tcbUsecloudaccesstoken(
    body?: TcbUsecloudaccesstokenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbUsecloudaccesstokenResp>;
  /** 环境共享 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_sharecloudbaseenv.html */
  componenttcbBatchshareenv(
    body?: ComponenttcbBatchshareenvBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbBatchshareenvResp>;
  /** 解除环境共享关联关系 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/env-mgnt/api_unsharecloudbaseenv.html */
  componenttcbBatchunshareenv(
    body?: ComponenttcbBatchunshareenvBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbBatchunshareenvResp>;
  /** 删除文件 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/file-mgnt/api_deletetcbfile.html */
  componenttcbBatchdeletefile(
    body?: ComponenttcbBatchdeletefileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbBatchdeletefileResp>;
  /** 获取下载文件链接 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/file-mgnt/api_getdownloadfilelink.html */
  componenttcbBatchdownloadfile(
    body?: ComponenttcbBatchdownloadfileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbBatchdownloadfileResp>;
  /** 获取文件列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/file-mgnt/api_gettcbfile.html */
  componenttcbGetbucket(
    body?: ComponenttcbGetbucketBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbGetbucketResp>;
  /** 获取上传文件链接 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/file-mgnt/api_getuploadfilelink.html */
  componenttcbUploadfile(
    body?: ComponenttcbUploadfileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbUploadfileResp>;
  /** 创建云函数 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_batchuuloadcloudfunction.html */
  componenttcbBatchuploadscf(
    body?: ComponenttcbBatchuploadscfBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbBatchuploadscfResp>;
  /** 删除云函数 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_deletecloudfunction.html */
  componenttcbDeletescf(
    body?: ComponenttcbDeletescfBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbDeletescfResp>;
  /** 获取云函数 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_getcloudfunctionlist.html */
  componenttcbGetscflist(
    body?: ComponenttcbGetscflistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbGetscflistResp>;
  /** 获取触发器 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_gettriggers.html */
  componenttcbGettriggers(
    body?: ComponenttcbGettriggersBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbGettriggersResp>;
  /** 更新触发器 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_updatetriggers.html */
  componenttcbBatchupdatetriggers(
    body?: ComponenttcbBatchupdatetriggersBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbBatchupdatetriggersResp>;
  /** 更新云函数代码 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_uploadcloudfunctioncode.html */
  componenttcbBatchuploadscfcode(
    body?: ComponenttcbBatchuploadscfcodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbBatchuploadscfcodeResp>;
  /** 更新云函数配置 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/scf-mgnt/api_uploadcloudfunctionconfig.html */
  componenttcbUpdatescfconfig(
    body?: ComponenttcbUpdatescfconfigBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbUpdatescfconfigResp>;
  /** 开通静态网站 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/staticstore-management/api_createstaticstore.html */
  componenttcbCreatestaticstore(
    body?: ComponenttcbCreatestaticstoreBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbCreatestaticstoreResp>;
  /** 查看静态网站状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/staticstore-management/api_getstaticstore.html */
  componenttcbDescribestaticstore(
    body?: ComponenttcbDescribestaticstoreBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbDescribestaticstoreResp>;
  /** 获取静态网站文件列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/staticstore-management/api_getstaticstorefile.html */
  componenttcbStaticfilelist(
    body?: ComponenttcbStaticfilelistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbStaticfilelistResp>;
  /** 获取上传静态网站文件链接 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-batch/staticstore-management/api_getuploadstaticstorefile.html */
  componenttcbStaticuploadfile(
    body?: ComponenttcbStaticuploadfileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbStaticuploadfileResp>;
  /** 查询是否绑定手机号 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/admin-management/api_checkmobileconfig.html */
  tcbCheckmobile(
    body?: TcbCheckmobileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbCheckmobileResp>;
  /** 开通云开发 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/admin-management/api_createclouduser.html */
  tcbCreateclouduser(
    body?: TcbCreateclouduserBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbCreateclouduserResp>;
  /** 获取腾讯云API调用凭证 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/admin-management/api_getcloudtoken.html */
  tcbGetqcloudtoken(
    body?: TcbGetqcloudtokenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbGetqcloudtokenResp>;
  /** 新增集合 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_adddatabasecollection.html */
  tcbDatabasecollectionadd(
    body?: TcbDatabasecollectionaddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasecollectionaddResp>;
  /** 数据库插入记录 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_adddatabaseitem.html */
  tcbDatabaseadd(
    body?: TcbDatabaseaddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabaseaddResp>;
  /** 数据库聚合 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_aggregatedatabase.html */
  tcbDatabaseaggregate(
    body?: TcbDatabaseaggregateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabaseaggregateResp>;
  /** 数据库集合管理 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_dbcollectionmanage.html */
  componenttcbDbcollection(
    body?: ComponenttcbDbcollectionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbDbcollectionResp>;
  /** 删除集合 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_deletedatabasecollection.html */
  tcbDatabasecollectiondelete(
    body?: TcbDatabasecollectiondeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasecollectiondeleteResp>;
  /** 数据库删除记录 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_deletedatabaseitem.html */
  tcbDatabasedelete(
    body?: TcbDatabasedeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasedeleteResp>;
  /** 数据库导出 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_exportdatabaseitem.html */
  tcbDatabasemigrateexport(
    body?: TcbDatabasemigrateexportBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasemigrateexportResp>;
  /** 获取集合信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_getdatabasecollection.html */
  tcbDatabasecollectionget(
    body?: TcbDatabasecollectiongetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasecollectiongetResp>;
  /** 统计集合记录数 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_getdatabasecount.html */
  tcbDatabasecount(
    body?: TcbDatabasecountBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasecountResp>;
  /** 数据库迁移状态查询 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_getdatabasemigratestatus.html */
  tcbDatabasemigratequeryinfo(
    body?: TcbDatabasemigratequeryinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasemigratequeryinfoResp>;
  /** 数据库查询记录 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_getdatabaserecord.html */
  tcbDatabasequery(
    body?: TcbDatabasequeryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasequeryResp>;
  /** 数据库导入 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_importdatabaseitem.html */
  tcbDatabasemigrateimport(
    body?: TcbDatabasemigrateimportBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabasemigrateimportResp>;
  /** 更新数据库索引 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_updatedatabaseindexs.html */
  tcbUpdateindex(
    body?: TcbUpdateindexBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbUpdateindexResp>;
  /** 数据库更新记录 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/db-management/api_updatedatabaserecord.html */
  tcbDatabaseupdate(
    body?: TcbDatabaseupdateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDatabaseupdateResp>;
  /** 创建云环境 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/env-management/api_createenv.html */
  tcbCreateenvandresource(
    body?: TcbCreateenvandresourceBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbCreateenvandresourceResp>;
  /** 获取云环境 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/env-management/api_getenvinfo.html */
  tcbGetenvinfo(
    body?: TcbGetenvinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbGetenvinfoResp>;
  /** 环境共享 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/env-management/api_shareenv.html */
  tcbShareenv(
    body?: TcbShareenvBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbShareenvResp>;
  /** 删除文件 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/file-management/api_deletetcbcloudfile.html */
  tcbBatchdeletefile(
    body?: TcbBatchdeletefileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbBatchdeletefileResp>;
  /** 获取文件下载链接 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/file-management/api_getdownloadtcbfilelink.html */
  tcbBatchdownloadfile(
    body?: TcbBatchdownloadfileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbBatchdownloadfileResp>;
  /** 获取文件上传链接 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/file-management/api_getuploadtcbfilelink.html */
  tcbUploadfile(
    body?: TcbUploadfileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbUploadfileResp>;
  /** 获取消息推送配置 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/msg-push/api_getcallbackconfig.html */
  tcbGetcallbackconfig(
    body?: TcbGetcallbackconfigBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbGetcallbackconfigResp>;
  /** 上传消息推送配置 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/msg-push/api_setcallbackconfig.html */
  tcbSetcallbackconfig(
    body?: TcbSetcallbackconfigBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbSetcallbackconfigResp>;
  /** 创建云函数 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_createfunction.html */
  tcbCreatefunction(
    body?: TcbCreatefunctionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbCreatefunctionResp>;
  /** 获取代码保护密钥 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getcodesecret.html */
  tcbGetcodesecret(
    body?: TcbGetcodesecretBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbGetcodesecretResp>;
  /** 获取云函数配置 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getfuntionconfig.html */
  tcbGetfuncconfig(
    body?: TcbGetfuncconfigBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbGetfuncconfigResp>;
  /** 获取云函数下载地址 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getfuntionlink.html */
  tcbDownloadfunction(
    body?: TcbDownloadfunctionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbDownloadfunctionResp>;
  /** 获取云函数列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getfuntionlist.html */
  tcbListfunctions(
    body?: TcbListfunctionsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbListfunctionsResp>;
  /** 上传云函数配置 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getuploadfuntionconfig.html */
  tcbUploadfuncconfig(
    body?: TcbUploadfuncconfigBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbUploadfuncconfigResp>;
  /** 获取上传凭证 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/scf-management/api_getyploadsignature.html */
  tcbGetuploadsignature(
    body?: TcbGetuploadsignatureBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbGetuploadsignatureResp>;
  /** 申请商户号授权 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/wechatpay/api_getwechatpayauth.html */
  tcbWxpayopenauth(
    body?: TcbWxpayopenauthBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbWxpayopenauthResp>;
  /** 获取授权绑定的商户号列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudbase-common/wechatpay/api_getwechatpaylist.html */
  tcbWxpaylist(
    body?: TcbWxpaylistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<TcbWxpaylistResp>;
  /** 创建云托管环境 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/cloudenv-mgnt/api_createcloudbaseenv.html */
  componenttcbCreatecloudbaserunenv(
    body?: ComponenttcbCreatecloudbaserunenvBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbCreatecloudbaserunenvResp>;
  /** 获取环境信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/cloudenv-mgnt/api_getwxcloudbaserunenvs.html */
  componenttcbDescribecloudbaserunenvs(
    body?: ComponenttcbDescribecloudbaserunenvsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbDescribecloudbaserunenvsResp>;
  /** 创建服务 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/service-mgnt/api_createcloudbaseservice.html */
  componenttcbEstablishcloudbaserunserver(
    body?: ComponenttcbEstablishcloudbaserunserverBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbEstablishcloudbaserunserverResp>;
  /** 创建服务版本 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/service-mgnt/api_createcloudbaseserviceversion.html */
  componenttcbCreatecloudbaserunserverversion(
    body?: ComponenttcbCreatecloudbaserunserverversionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbCreatecloudbaserunserverversionResp>;
  /** 删除服务版本 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/service-mgnt/api_deletecloudbaseserviceversion.html */
  componenttcbDeletecloudbaserunserverversion(
    body?: ComponenttcbDeletecloudbaserunserverversionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbDeletecloudbaserunserverversionResp>;
  /** 发布服务 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/service-mgnt/api_releasecloudbaseserviceversion.html */
  componenttcbReleasecloudbaserunversion(
    body?: ComponenttcbReleasecloudbaserunversionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbReleasecloudbaserunversionResp>;
  /** 滚动更新服务版本 @see https://developers.weixin.qq.com/doc/oplatform/openApi/cloudrun-batch/service-mgnt/api_updatecloudbaseserviceversion.html */
  componenttcbRollupdatecloudbaserunserverversion(
    body?: ComponenttcbRollupdatecloudbaserunserverversionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ComponenttcbRollupdatecloudbaserunserverversionResp>;
  /** 申请设置订单页path信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_applysetorderpathinfo.html */
  securityApplysetorderpathinfo(
    body?: SecurityApplysetorderpathinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SecurityApplysetorderpathinfoResp>;
  /** 小程序名称检测 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_checknickname.html */
  wxverifyCheckwxverifynickname(
    body?: WxverifyCheckwxverifynicknameBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxverifyCheckwxverifynicknameResp>;
  /** 获取基本信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getaccountbasicinfo.html */
  accountGetaccountbasicinfo(
    body?: AccountGetaccountbasicinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<AccountGetaccountbasicinfoResp>;
  /** 查询绑定的开放平台账号 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getbindopenaccount.html */
  openHave(
    body?: OpenHaveBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenHaveResp>;
  /** 查询开放平台账号是否与小程序同主体 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getbindopenaccountentity.html */
  openSameentity(
    body?: OpenSameentityBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenSameentityResp>;
  /** 数据预拉取和数据周期性更新 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getfetchdatasetting.html */
  fetchdatasetting(
    body?: FetchdatasettingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FetchdatasettingResp>;
  /** 查询小程序名称审核状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getnicknamestatus.html */
  apiWxaQuerynickname(
    body?: ApiWxaQuerynicknameBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ApiWxaQuerynicknameResp>;
  /** 获取订单页path信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getorderpathinfo.html */
  securityGetorderpathinfo(
    body?: SecurityGetorderpathinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SecurityGetorderpathinfoResp>;
  /** 获取搜索状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_getsearchstatus.html */
  getwxasearchstatus(
    body?: GetwxasearchstatusBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetwxasearchstatusResp>;
  /** 修改头像 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_setheadimage.html */
  accountModifyheadimage(
    body?: AccountModifyheadimageBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<AccountModifyheadimageResp>;
  /** 设置小程序名称 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_setnickname.html */
  setnickname(
    body?: SetnicknameBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SetnicknameResp>;
  /** 设置搜索状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_setsearchstatus.html */
  changewxasearchstatus(
    body?: ChangewxasearchstatusBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ChangewxasearchstatusResp>;
  /** 设置小程序介绍 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/basic-info-management/api_setsignature.html */
  accountModifysignature(
    body?: AccountModifysignatureBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<AccountModifysignatureResp>;
  /** 添加类目 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_addcategory.html */
  wxopenAddcategory(
    body?: WxopenAddcategoryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenAddcategoryResp>;
  /** 删除类目 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_deletecategory.html */
  wxopenDeletecategory(
    body?: WxopenDeletecategoryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenDeletecategoryResp>;
  /** 获取可设置的所有类目 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_getallcategories.html */
  wxopenGetallcategories(
    body?: WxopenGetallcategoriesBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenGetallcategoriesResp>;
  /** 获取不同类型主体可设置的类目 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_getallcategoriesbytype.html */
  wxopenGetcategoriesbytype(
    body?: WxopenGetcategoriesbytypeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenGetcategoriesbytypeResp>;
  /** 获取类目名称信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_getallcategoryname.html */
  getCategory(
    body?: GetCategoryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetCategoryResp>;
  /** 获取已设置的所有类目 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_getsettingcategories.html */
  wxopenGetcategory(
    body?: WxopenGetcategoryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenGetcategoryResp>;
  /** 修改类目资质信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/category-management/api_modifycategory.html */
  wxopenModifycategory(
    body?: WxopenModifycategoryBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenModifycategoryResp>;
  /** 上传代码并生成体验版 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_commit.html */
  commit(
    body?: CommitBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<CommitResp>;
  /** 查询审核单状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getauditstatus.html */
  getAuditstatus(
    body?: GetAuditstatusBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetAuditstatusResp>;
  /** 获取已上传的代码页面列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getcodepage.html */
  getPage(
    body?: GetPageBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetPageResp>;
  /** 获取隐私接口检测结果 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getcodeprivacyinfo.html */
  securityGetCodePrivacyInfo(
    body?: SecurityGetCodePrivacyInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SecurityGetCodePrivacyInfoResp>;
  /** 获取分阶段发布详情 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getgrayreleaseplan.html */
  getgrayreleaseplan(
    body?: GetgrayreleaseplanBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetgrayreleaseplanResp>;
  /** 查询最新一次审核单状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getlatestauditstatus.html */
  getLatestAuditstatus(
    body?: GetLatestAuditstatusBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetLatestAuditstatusResp>;
  /** 查询各版本用户占比 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getsupportversion.html */
  wxopenGetweappsupportversion(
    body?: WxopenGetweappsupportversionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenGetweappsupportversionResp>;
  /** 获取体验版二维码 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_gettrialqrcode.html */
  getQrcode(
    body?: GetQrcodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetQrcodeResp>;
  /** 查询小程序版本信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getversioninfo.html */
  getversioninfo(
    body?: GetversioninfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetversioninfoResp>;
  /** 查询小程序服务状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_getvisitstatus.html */
  getvisitstatus(
    body?: GetvisitstatusBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetvisitstatusResp>;
  /** 分阶段发布 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_grayrelease.html */
  grayrelease(
    body?: GrayreleaseBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GrayreleaseResp>;
  /** 发布已通过审核的小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_release.html */
  release(
    body?: ReleaseBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ReleaseResp>;
  /** 小程序版本回退 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_revertcoderelease.html */
  revertcoderelease(
    body?: RevertcodereleaseBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<RevertcodereleaseResp>;
  /** 取消分阶段发布 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_revertgrayrelease.html */
  revertgrayrelease(
    body?: RevertgrayreleaseBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<RevertgrayreleaseResp>;
  /** 查询服务商审核额度 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_setcodeauditquota.html */
  queryquota(
    body?: QueryquotaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryquotaResp>;
  /** 设置最低基础库版本 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_setsupportversion.html */
  wxopenSetweappsupportversion(
    body?: WxopenSetweappsupportversionBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenSetweappsupportversionResp>;
  /** 设置小程序服务状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_setvisitstatus.html */
  changeVisitstatus(
    body?: ChangeVisitstatusBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ChangeVisitstatusResp>;
  /** 加急代码审核 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_speedupcodeaudit.html */
  speedupaudit(
    body?: SpeedupauditBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SpeedupauditResp>;
  /** 提交代码审核 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_submitaudit.html */
  submitAudit(
    body?: SubmitAuditBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SubmitAuditResp>;
  /** 撤回代码审核 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_undoaudit.html */
  undocodeaudit(
    body?: UndocodeauditBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UndocodeauditResp>;
  /** 上传提审素材 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/code-management/api_uploadmediatocodeaudit.html */
  uploadmedia(
    body?: UploadmediaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UploadmediaResp>;
  /** 获取发布后生效业务域名列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_geteffectivejumpdomain.html */
  getEffectiveWebviewdomain(
    body?: GetEffectiveWebviewdomainBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetEffectiveWebviewdomainResp>;
  /** 获取发布后生效服务器域名列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_geteffectiveserverdomain.html */
  getEffectiveDomain(
    body?: GetEffectiveDomainBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetEffectiveDomainResp>;
  /** 获取业务域名校验文件 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_getjumpdomainconfirmfile.html */
  getWebviewdomainConfirmfile(
    body?: GetWebviewdomainConfirmfileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetWebviewdomainConfirmfileResp>;
  /** 获取DNS预解析域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_getprefetchdomain.html */
  getPrefetchdnsdomain(
    body?: GetPrefetchdnsdomainBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetPrefetchdnsdomainResp>;
  /** 配置小程序业务域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_modifyjumpdomain.html */
  setwebviewdomain(
    body?: SetwebviewdomainBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SetwebviewdomainResp>;
  /** 快速配置小程序业务域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_modifyjumpdomaindirectly.html */
  setwebviewdomainDirectly(
    body?: SetwebviewdomainDirectlyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SetwebviewdomainDirectlyResp>;
  /** 配置小程序服务器域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_modifyserverdomain.html */
  modifyDomain(
    body?: ModifyDomainBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ModifyDomainResp>;
  /** 快速配置小程序服务器域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_modifyserverdomaindirectly.html */
  modifyDomainDirectly(
    body?: ModifyDomainDirectlyBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ModifyDomainDirectlyResp>;
  /** 设置DNS预解析域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/domain-management/api_setprefetchdomain.html */
  setPrefetchdnsdomain(
    body?: SetPrefetchdnsdomainBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SetPrefetchdnsdomainResp>;
  /** 添加半屏小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_addembedded.html */
  wxaembeddedAddEmbedded(
    body?: WxaembeddedAddEmbeddedBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxaembeddedAddEmbeddedResp>;
  /** 取消授权小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_deleteauthorizedembedded.html */
  wxaembeddedDelAuthorize(
    body?: WxaembeddedDelAuthorizeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxaembeddedDelAuthorizeResp>;
  /** 删除半屏小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_deleteembedded.html */
  wxaembeddedDelEmbedded(
    body?: WxaembeddedDelEmbeddedBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxaembeddedDelEmbeddedResp>;
  /** 获取半屏小程序调用列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_getembeddedlist.html */
  wxaembeddedGetList(
    body?: WxaembeddedGetListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxaembeddedGetListResp>;
  /** 获取半屏小程序授权列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_getownlist.html */
  wxaembeddedGetOwnList(
    body?: WxaembeddedGetOwnListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxaembeddedGetOwnListResp>;
  /** 设置授权方式 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/embedded-management/api_setauthorizedembedded.html */
  wxaembeddedSetAuthorize(
    body?: WxaembeddedSetAuthorizeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxaembeddedSetAuthorizeResp>;
  /** 获取校验文件名称及内容 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/jumpqrcode-config/api_downloadqrcodetext.html */
  wxopenQrcodejumpdownload(
    body?: WxopenQrcodejumpdownloadBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenQrcodejumpdownloadResp>;
  /** 增加或修改二维码规则 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/jumpqrcode-config/api_qrcodejumpadd.html */
  wxopenQrcodejumpadd(
    body?: WxopenQrcodejumpaddBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenQrcodejumpaddResp>;
  /** 删除已设置的二维码规则 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/jumpqrcode-config/api_qrcodejumpdelete.html */
  wxopenQrcodejumpdelete(
    body?: WxopenQrcodejumpdeleteBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenQrcodejumpdeleteResp>;
  /** 获取已设置的二维码规则 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/jumpqrcode-config/api_qrcodejumpget.html */
  wxopenQrcodejumpget(
    body?: WxopenQrcodejumpgetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenQrcodejumpgetResp>;
  /** 发布已设置的二维码规则 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/jumpqrcode-config/api_qrcodejumppublish.html */
  wxopenQrcodejumppublish(
    body?: WxopenQrcodejumppublishBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenQrcodejumppublishResp>;
  /** 申请开通直播 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/live-player/api_applylivelnfo.html */
  businessApplyliveinfo(
    body?: BusinessApplyliveinfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BusinessApplyliveinfoResp>;
  /** 申请开通物流消息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/logistics-service/api_applymsgplugin.html */
  expressDeliveryOpenMsgOpenOpenmsg(
    body?: ExpressDeliveryOpenMsgOpenOpenmsgBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryOpenMsgOpenOpenmsgResp>;
  /** 申请开通物流查询组件 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/logistics-service/api_applyqueryplugin.html */
  expressDeliveryOpenMsgOpenQueryPlugin(
    body?: ExpressDeliveryOpenMsgOpenQueryPluginBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryOpenMsgOpenQueryPluginResp>;
  /** 申请开通物流退货组件 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/logistics-service/api_applyreturnplugin.html */
  expressDeliveryReturnOpenReturn(
    body?: ExpressDeliveryReturnOpenReturnBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ExpressDeliveryReturnOpenReturnResp>;
  /** 绑定体验者 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/member-management/api_bindtester.html */
  bindTester(
    body?: BindTesterBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<BindTesterResp>;
  /** 获取体验者列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/member-management/api_gettester.html */
  memberauth(
    body?: MemberauthBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<MemberauthResp>;
  /** 解除绑定体验者 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/member-management/api_unbindtester.html */
  unbindTester(
    body?: UnbindTesterBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UnbindTesterResp>;
  /** 申请地理位置接口 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/privacy-api-management/api_applyprivacyinterface.html */
  securityApplyPrivacyInterface(
    body?: SecurityApplyPrivacyInterfaceBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SecurityApplyPrivacyInterfaceResp>;
  /** 获取地理位置接口列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/privacy-api-management/api_getprivacyinterface.html */
  securityGetPrivacyInterface(
    body?: SecurityGetPrivacyInterfaceBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SecurityGetPrivacyInterfaceResp>;
  /** 获取小程序用户隐私保护指引 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/privacy-management/api_getprivacysetting.html */
  getprivacysetting(
    body?: GetprivacysettingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetprivacysettingResp>;
  /** 设置小程序用户隐私保护指引 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/privacy-management/api_setprivacysetting.html */
  setprivacysetting(
    body?: SetprivacysettingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SetprivacysettingResp>;
  /** 上传小程序用户隐私保护指引 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/privacy-management/api_uploadprivacysetting.html */
  uploadprivacyextfile(
    body?: UploadprivacyextfileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UploadprivacyextfileResp>;
  /** 获取小程序申诉记录 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record-management/api_getappealrecords.html */
  getappealrecords(
    body?: GetappealrecordsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetappealrecordsResp>;
  /** 获取小程序违规处罚记录 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record-management/api_getillegalrecords.html */
  getillegalrecords(
    body?: GetillegalrecordsBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetillegalrecordsResp>;
  /** 申请小程序备案 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_applyicpfiling.html */
  icpApplyIcpFiling(
    body?: IcpApplyIcpFilingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<IcpApplyIcpFilingResp>;
  /** 撤回小程序备案申请 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_cancelapplyicpfiling.html */
  icpCancelApplyIcpFiling(
    body?: IcpCancelApplyIcpFilingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<IcpCancelApplyIcpFilingResp>;
  /** 注销小程序备案 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_cancelicpfiling.html */
  icpCancelIcpFiling(
    body?: IcpCancelIcpFilingBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<IcpCancelIcpFilingResp>;
  /** 发起小程序管理员人脸核身 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_createicpverifytask.html */
  icpCreateIcpVerifytask(
    body?: IcpCreateIcpVerifytaskBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<IcpCreateIcpVerifytaskResp>;
  /** 获取小程序备案状态及驳回原因 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_geticpentranceinfo.html */
  icpGetIcpEntranceInfo(
    body?: IcpGetIcpEntranceInfoBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<IcpGetIcpEntranceInfoResp>;
  /** 获取小程序备案媒体材料 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_geticpmedia.html */
  icpGetIcpMedia(
    body?: IcpGetIcpMediaBody,
    query?: IcpGetIcpMediaQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<IcpGetIcpMediaResp>;
  /** 获取小程序已备案详情 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_getonlineicporder.html */
  icpGetOnlineIcpOrder(
    body?: IcpGetOnlineIcpOrderBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<IcpGetOnlineIcpOrderResp>;
  /** 获取证件类型 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpcertificatetypes.html */
  icpQueryIcpCertificateTypes(
    body?: IcpQueryIcpCertificateTypesBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<IcpQueryIcpCertificateTypesResp>;
  /** 获取区域信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpdistrictcode.html */
  icpQueryIcpDistrictCode(
    body?: IcpQueryIcpDistrictCodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<IcpQueryIcpDistrictCodeResp>;
  /** 获取前置审批项类型 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpnrlxtypes.html */
  icpQueryIcpNrlxTypes(
    body?: IcpQueryIcpNrlxTypesBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<IcpQueryIcpNrlxTypesResp>;
  /** 获取小程序服务内容类型 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpservicecontenttypes.html */
  icpQueryIcpServiceContentTypes(
    body?: IcpQueryIcpServiceContentTypesBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<IcpQueryIcpServiceContentTypesResp>;
  /** 获取单位性质 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpsubjecttypes.html */
  icpQueryIcpSubjectTypes(
    body?: IcpQueryIcpSubjectTypesBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<IcpQueryIcpSubjectTypesResp>;
  /** 查询人脸核身任务状态 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_queryicpverifytask.html */
  icpQueryIcpVerifytask(
    body?: IcpQueryIcpVerifytaskBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<IcpQueryIcpVerifytaskResp>;
  /** 上传小程序备案媒体材料 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/record/api_uploadicpmedia.html */
  icpUploadIcpMedia(
    body?: IcpUploadIcpMediaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<IcpUploadIcpMediaResp>;
  /** 获取可设置公众号列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/subscribe-component/api_getlinkforshow.html */
  getwxamplinkforshow(
    body?: GetwxamplinkforshowBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetwxamplinkforshowResp>;
  /** 获取已设置公众号信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/subscribe-component/api_getshowitem.html */
  getshowwxaitem(
    body?: GetshowwxaitemBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetshowwxaitemResp>;
  /** 设置扫码关注的公众号 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/subscribe-component/api_setshowitem.html */
  updateshowwxaitem(
    body?: UpdateshowwxaitemBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UpdateshowwxaitemResp>;
  /** 用户PC端登录 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedata_login.html */
  wedataWedataLogin(
    body?: WedataWedataLoginBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WedataWedataLoginResp>;
  /** 查询登录配置 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedatagetloginconfig.html */
  wedataWedataGetLoginConfig(
    body?: WedataWedataGetLoginConfigBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WedataWedataGetLoginConfigResp>;
  /** 获取商家We分析权限集列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedatagetpermlist.html */
  wedataWedataGetPermList(
    body?: WedataWedataGetPermListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WedataWedataGetPermListResp>;
  /** 查询用户绑定列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedataquerybindlist.html */
  wedataWedataQueryBindList(
    body?: WedataWedataQueryBindListBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WedataWedataQueryBindListResp>;
  /** 设置登录配置 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedatasetloginconfig.html */
  wedataWedataSetLoginConfig(
    body?: WedataWedataSetLoginConfigBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WedataWedataSetLoginConfigResp>;
  /** 设置用户We分析权限集 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedatasetuserperm.html */
  wedataWedataSetUserPerm(
    body?: WedataWedataSetUserPermBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WedataWedataSetUserPermResp>;
  /** 用户解绑 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/we-analysis/api_wedataunbinduser.html */
  wedataWedataUnbindUser(
    body?: WedataWedataUnbindUserBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WedataWedataUnbindUserResp>;
  /** 查询个人认证身份选项列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/weapp-wxverify/api_secwxaapi_authidentitytree.html */
  authidentitytree(
    body?: AuthidentitytreeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<AuthidentitytreeResp>;
  /** 小程序认证进度查询 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/weapp-wxverify/api_secwxaapi_queryauth.html */
  queryauth(
    body?: QueryauthBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryauthResp>;
  /** 小程序认证重新提审 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/weapp-wxverify/api_secwxaapi_reauth.html */
  reauth(
    body?: ReauthBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ReauthResp>;
  /** 小程序认证上传补充材料 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/weapp-wxverify/api_secwxaapi_uploadauthmaterial.html */
  uploadauthmaterial(
    body?: UploadauthmaterialBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<UploadauthmaterialResp>;
  /** 小程序认证 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/weapp-wxverify/api_secwxaapi_wxaauth.html */
  wxaauth(
    body?: WxaauthBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxaauthResp>;
  /** 查询小程序认证及备案进度 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/wxverifyicp/api_queryauthandicp.html */
  queryAuthAndIcp(
    body?: QueryAuthAndIcpBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<QueryAuthAndIcpResp>;
  /** 申请小程序认证及备案 @see https://developers.weixin.qq.com/doc/oplatform/openApi/miniprogram-management/wxverifyicp/api_submitauthandicp.html */
  submitAuthAndIcp(
    body?: SubmitAuthAndIcpBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SubmitAuthAndIcpResp>;
  /** 获取公众号关联的小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/officalaccount-management/link-miniprogram/api_getlinkminiprogram.html */
  wxopenWxamplinkget(
    body?: WxopenWxamplinkgetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenWxamplinkgetResp>;
  /** 公众号关联小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/officalaccount-management/link-miniprogram/api_linkminiprogram.html */
  wxopenWxamplink(
    body?: WxopenWxamplinkBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenWxamplinkResp>;
  /** 公众号解除关联小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/officalaccount-management/link-miniprogram/api_unlinkminiprogram.html */
  wxopenWxampunlink(
    body?: WxopenWxampunlinkBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<WxopenWxampunlinkResp>;
  /** 重置API调用次数 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openapi/api_clearquota.html */
  clearQuota(
    body?: ClearQuotaBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ClearQuotaResp>;
  /** 使用AppSecret重置第三方平台API调用次数 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openapi/api_componentclearquota_v2.html */
  clearQuotaV2(
    body?: ClearQuotaV2Body,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ClearQuotaV2Resp>;
  /** 查询API调用额度 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openapi/api_getapiquota.html */
  openapiQuotaGet(
    body?: OpenapiQuotaGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenapiQuotaGetResp>;
  /** 查询rid信息 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openapi/api_getridinfo.html */
  openapiRidGet(
    body?: OpenapiRidGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenapiRidGetResp>;
  /** 绑定开放平台账号 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openplatform-management/api_bindopenaccount.html */
  openBind(
    body?: OpenBindBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenBindResp>;
  /** 创建开放平台账号 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openplatform-management/api_createopenaccount.html */
  openCreate(
    body?: OpenCreateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenCreateResp>;
  /** 获取开放平台账号 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openplatform-management/api_getopenaccount.html */
  openGet(
    body?: OpenGetBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenGetResp>;
  /** 解除绑定开放平台账号 @see https://developers.weixin.qq.com/doc/oplatform/openApi/openplatform-management/api_unbindopenaccount.html */
  openUnbind(
    body?: OpenUnbindBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<OpenUnbindResp>;
  /** 转正为个人升级版小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-regist-beta/api_fastnormalizebetaweapp.html */
  fastnormalizebetaweapp(
    body?: FastnormalizebetaweappBody,
    query?: FastnormalizebetaweappQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FastnormalizebetaweappResp>;
  /** 修改试用小程序名称 @see https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-regist-beta/api_modifybetaminiprogramnickname.html */
  setbetaweappnickname(
    body?: SetbetaweappnicknameBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<SetbetaweappnicknameResp>;
  /** 注册试用小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-regist-beta/api_registerbetaminiprogram.html */
  fastregisterbetaweapp(
    body?: FastregisterbetaweappBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FastregisterbetaweappResp>;
  /** 试用小程序快速转正 @see https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-regist-beta/api_verfifybetaminiprogram.html */
  verifybetaweapp(
    body?: VerifybetaweappBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<VerifybetaweappResp>;
  /** 快速注册企业小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-registration-ent/api_registerminiprogram.html */
  fastregisterweapp(
    body?: FastregisterweappBody,
    query?: FastregisterweappQuery & Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FastregisterweappResp>;
  /** 快速注册个人升级版小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-registration-ind/api_fastregistertransactionweapp.html */
  fastregistertransactionweapp(
    body?: FastregistertransactionweappBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<FastregistertransactionweappResp>;
  /** 复用公众号主体快速注册小程序 @see https://developers.weixin.qq.com/doc/oplatform/openApi/register-management/fast-registration-officalaccount/api_registerminiprogrambyoffiaccount.html */
  accountFastregister(
    body?: AccountFastregisterBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<AccountFastregisterResp>;
  /** 获取第三方平台业务域名校验文件 @see https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/domain-mgnt/api_getthirdpartyjumpdomainconfirmfile.html */
  getDomainConfirmfile(
    body?: GetDomainConfirmfileBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GetDomainConfirmfileResp>;
  /** 设置第三方平台业务域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/domain-mgnt/api_modifythirdpartyjumpdomain.html */
  modifyWxaJumpDomain(
    body?: ModifyWxaJumpDomainBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ModifyWxaJumpDomainResp>;
  /** 设置第三方平台服务器域名 @see https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/domain-mgnt/api_modifythirdpartyserverdomain.html */
  modifyWxaServerDomain(
    body?: ModifyWxaServerDomainBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ModifyWxaServerDomainResp>;
  /** 将草稿添加到模板库 @see https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/template-management/api_addtotemplate.html */
  addtotemplate(
    body?: AddtotemplateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<AddtotemplateResp>;
  /** 删除代码模板 @see https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/template-management/api_deletetemplate.html */
  deletetemplate(
    body?: DeletetemplateBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<DeletetemplateResp>;
  /** 获取草稿箱列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/template-management/api_gettemplatedraftlist.html */
  gettemplatedraftlist(
    body?: GettemplatedraftlistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GettemplatedraftlistResp>;
  /** 获取模板列表 @see https://developers.weixin.qq.com/doc/oplatform/openApi/thirdparty-management/template-management/api_gettemplatelist.html */
  gettemplatelist(
    body?: GettemplatelistBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<GettemplatelistResp>;
  /** 获取授权账号调用令牌 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getauthorizeraccesstoken.html */
  apiAuthorizerToken(
    body?: ApiAuthorizerTokenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ApiAuthorizerTokenResp>;
  /** 获取刷新令牌 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getauthorizerrefreshtoken.html */
  apiQueryAuth(
    body?: ApiQueryAuthBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ApiQueryAuthResp>;
  /** 获取令牌 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getcomponentaccesstoken.html */
  apiComponentToken(
    body?: ApiComponentTokenBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ApiComponentTokenResp>;
  /** 获取预授权码 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getpreauthcode.html */
  apiCreatePreauthcode(
    body?: ApiCreatePreauthcodeBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ApiCreatePreauthcodeResp>;
  /** 启动票据推送服务 @see https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_startpushticket.html */
  apiStartPushTicket(
    body?: ApiStartPushTicketBody,
    query?: Record<string, QueryValue>,
    extra?: GeneratedCallExtra,
  ): Promise<ApiStartPushTicketResp>;
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
