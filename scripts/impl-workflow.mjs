export const meta = {
  name: 'wxstack-impl',
  description: '并行实现 wxstack 各业务包（基于 @wxstack/core），注释全中文、接口以官方文档为准',
  phases: [{ title: '实现业务包', detail: '每个代理实现一个业务包的 TS 源码' }],
};

// ───────────────────────── 共享上下文 ─────────────────────────

const CORE_CONTRACT = String.raw`
# @wxstack/core 内核 API 契约（必须基于此实现，禁止臆造不存在的导出）

均从包 '@wxstack/core' 顶层导出（ESM）。加解密也可从 '@wxstack/core/crypto' 导入；回调内核从 '@wxstack/core/webhook' 导入（顶层亦再导出 createWebhook）。

## 传输/类型
- HttpMethod='GET'|'POST'|'PUT'|'PATCH'|'DELETE'；QueryValue=string|number|boolean|undefined|null
- RequestBody=undefined|string|Buffer|Uint8Array|ArrayBuffer|FormData|Record<string,unknown>|unknown[]
- ResponseType='auto'|'json'|'text'|'arraybuffer'|'stream'
- HttpResponse<T>={status:number;headers:Record<string,string>;data:T;raw:Buffer}
- Transport={request<T>(req):Promise<HttpResponse<T>>}
- DomainPreference='auto'|'disaster'|'shanghai'|'sh'|'shenzhen'|'sz'|'hongkong'|'hk'
- WX_API_DOMAINS:Record<DomainPreference,string>（auto=>'https://api.weixin.qq.com'）
- class FetchTransport implements Transport { constructor(opts?:{baseURL?;timeoutMs?;defaultHeaders?;retry?;retryOnPost?;failover?;fetchImpl?}) }
- function buildQuery(query?):string

## 错误
- WxError{code;details?}；WxApiError{errcode;errmsg;rid?;hint?}；WxHttpError{status;isRetryable}
- WxCryptoError；WxConfigError；WxTokenError；WxRateLimitError(extends WxApiError)
- TOKEN_INVALID_ERRCODES:ReadonlySet<number>；buildApiError(body);isApiErrorBody(body)

## 存储/日志
- KVStore{get;set(k,v,ttlSec?);del;acquireLock?;releaseLock?}；MemoryStore；FileStore
- Logger{debug/info/warn/error(msg,meta?)}；noopLogger；createConsoleLogger(level?)

## 令牌
- TokenFetchResult={token:string;expiresIn:number}；TokenFetcher=(key)=>Promise<TokenFetchResult>
- class TokenManager{constructor(opts:{store;fetcher;logger?;earlyRefreshSec?;lockTtlSec?;lockWaitMs?});getToken(key);refresh(key);invalidate(key)}
- TokenMode='normal'|'stable'
- createAccessTokenManager(opts:{appId;appSecret;mode?;store;transport;logger?;keyPrefix?}):{manager;key;provider}
  仅用于 api.weixin.qq.com 标准 access_token（/cgi-bin/token、/cgi-bin/stable_token）。
  企业微信/开放平台等非标准令牌，请自行 new TokenManager 提供 fetcher。

## 业务客户端基类（最重要）
- TokenProvider={get():Promise<string>;refresh():Promise<string>}；TokenPlacement='query'|'header'|'none'
- CallOptions={method?;url:string;query?;body?;headers?;signal?;timeoutMs?;responseType?;auth?:boolean;throwOnApiError?:boolean}
- BaseClientConfig={baseURL?;domain?;timeoutMs?;retry?;retryOnPost?;store?;logger?;transport?;throwOnApiError?}
- abstract class BaseClient {
    constructor(config?:BaseClientConfig)
    protected transport:Transport; protected store:KVStore; protected logger:Logger; protected throwOnApiError:boolean
    protected tokenProvider?:TokenProvider     // 子类构造函数里赋值
    protected tokenPlacement:TokenPlacement     // 默认 'query'
    protected tokenQueryKey:string              // 默认 'access_token'
    requestRaw<T>(opts:CallOptions):Promise<HttpResponse<T>>
    request<T>(opts:CallOptions):Promise<T>      // 解包；errcode!=0 抛 WxApiError；令牌失效自动刷新重放一次
    protected get<T>(url, query?, extra?):Promise<T>
    protected post<T>(url, body?, extra?):Promise<T>
  }
  store/transport/logger 为 protected，可在子类构造函数中读取后传给 createAccessTokenManager。

## XML / 加解密 / 回调
- parseXml(xml):XmlNode；buildXml(obj,root?='xml'):string
- WXBizMsgCrypt(token,encodingAESKey,receiveId){verifyUrl;verifyEchoStr(msgSig,ts,nonce,echostr):string;decryptMessage(msgSig,ts,nonce,encrypt):string;buildEncryptedReply(reply,ts?,nonce?):string}
- verifySignature(token,ts,nonce,sig)；verifyMsgSignature(token,ts,nonce,encrypt,msgSig)；decodeAESKey(s):Buffer
- decryptMpData(sessionKey,encryptedData,iv,appId?):object
- 支付：Signer{serialNo;sign(msg):Promise<{serialNo;signature}>}；Verifier{verify(serialNo,msg,sig):Promise<boolean>}
  LocalSigner(privateKeyPem,serialNo)；LocalVerifier{addPublicKey(serialNo,pem);addCertificate(serialNo,certPem);serials;verify}
  nonceStr(len?=32)；unixTimestamp()；buildSignMessage(method,urlPath,ts,nonce,body)；buildVerifyMessage(ts,nonce,body)
  rsaSign(msg,privateKey)；rsaVerify(msg,sig,publicKey)；aesGcmDecrypt(apiV3Key,nonce,ciphertextB64,associatedData?='')
  rsaOaepEncrypt(plain,publicKey)；rsaOaepDecrypt(ciphertextB64,privateKey)
  buildJsapiPaySign(appId,prepayId,signer):Promise<{timeStamp;nonceStr;package;signType:'RSA';paySign}>
  buildAppPaySign(appId,prepayId,signer):Promise<{appid;timestamp;noncestr;prepayid;package;sign}>
- createWebhook(opts:{token;receiveId?;encodingAESKey?;onMessage?;handlers?;logger?}):{handle(raw:{method;rawBody;query;headers?}):Promise<{status;body;contentType}>}
`;

const CONVENTIONS = String.raw`
# 编码规范（统一遵守）
1. 注释/文档字符串/用户可见文本一律「简体中文」；标识符英文。
2. 每个高层方法用 JSDoc 写明用途/参数/返回，并以 @see 附官方文档 URL。
3. 文件放在 packages/<dir>/src/ 下：index.ts（工厂+类+类型，re-export 必要的核心错误类）、client.ts（鉴权装配+高层方法）、types.ts（配置与关键类型）、actions/*.ts（端点多时按域分组，导出 (client,params)=>client.request(...) 纯函数）、webhook.ts（如适用）。
4. 双 API：高层语义方法 + 继承自基类的逃生口 client.request()/requestRaw()（务必在注释/README 说明逃生口可调任意未封装端点）。
5. export function createXxxClient(config):XxxClient。
6. 全 async/await。
7. 只写自己负责的包目录；不要改 packages/core、其它包或根配置。
8. 不要运行构建/安装命令；只写 .ts 源码。
9. strict:true（未开 noUncheckedIndexedAccess）。避免浏览器专属类型（BodyInit/DOM）；Node 全局 fetch/FormData/Blob 可用。
10. 二进制下载：this.requestRaw({...,responseType:'arraybuffer'}) 取 resp.raw（Buffer）。
11. multipart 上传：全局 FormData+Blob 作为 body 传给 this.request/requestRaw。
12. 每个包写一个简短 README.md（中文）说明安装、快速上手、逃生口。
`;

const preface = (extra) => `${CORE_CONTRACT}\n${CONVENTIONS}\n${extra}`;

// ───────────────────────── 各包规格 ─────────────────────────

const PKGS = [
  {
    label: 'oa',
    prompt: preface(String.raw`
# 任务：实现 @wxstack/oa（公众号 订阅号/服务号），目录 packages/oa/src/

本仓库 git HEAD 仍保留旧版 JS 实现（位于 packages/oa，已从工作区删除但在版本库中）。请「忠实移植」为 TypeScript：
步骤：
1. 用 Bash 读取旧实现：先 \`git ls-tree -r --name-only HEAD -- packages/oa\` 列出文件，再用 \`git show HEAD:packages/oa/<file>\` 逐个查看（client.js、index.js、auth/*、lib/*、middleware/express.js、request/http.js、request/retry.js、request/domains.js、request/actions/*.js）。
2. 旧 client.js 暴露了完整的高层方法清单（含每个方法的 @see 官方文档 URL 与参数 JSDoc）——必须「完整保留所有方法、参数语义与 @see URL」。
3. 用 @wxstack/core 重写底层：删除旧的 axios/http/retry/token/crypto/xml/errors（这些已由 core 提供）。OaClient extends BaseClient，用 createAccessTokenManager(keyPrefix:'oa') 装配 access_token（query 模式）。支持 config: { appId, appSecret, domain?, timeoutMs?, retry?, tokenMode?:'normal'|'stable', store?, logger?, transport? }。
4. 所有 action 函数改为 TS，签名 (client:OaClient, params)=>client.request<...>(...)；client.js 里的方法逐一委托。按旧的分组建 actions/ 文件：base、menu、message、customer、material、draftbox、leaving、user、qrcode、wedata、other。
5. 网页授权 OAuth（snsAccessToken/snsUserInfo 等）走 /sns/ 路径，不需要 access_token（用 client.request({auth:false,...}) 或 client.requestRaw）。
6. 提供公众号消息回调：在 webhook.ts 用 core 的 createWebhook 封装一个 createOaWebhook({token,encodingAESKey?,appId,...handlers})；并保留一个 createExpressMiddleware(options) 作为 Express 适配（参考旧 middleware/express.js 的行为：GET 校验 echostr，POST 解析/解密消息，挂 req.wechatMessage 与 res.wechatReply）。Express 类型用 any 即可（不要新增依赖）。
7. index.ts：export createClient(=createOaClient 的别名以兼容旧用法)、createOaClient、OaClient、createExpressMiddleware、createOaWebhook、相关类型，并 re-export core 的 WxApiError/WxHttpError/WxCryptoError/parseXml/buildXml/WXBizMsgCrypt。
8. 保留旧的 lang 选项、参数名（向后兼容）。types.ts 写 OaClientConfig 等。
9. 写 packages/oa/README.md（中文）。
目标：方法数量与覆盖面不少于旧实现（约 100+ 方法）。逐一移植，勿遗漏。`),
  },

  {
    label: 'pay',
    prompt: preface(String.raw`
# 任务：实现 @wxstack/pay（微信支付 v3），目录 packages/pay/src/

鉴权方式特殊：不使用 access_token，而是「每请求 RSA-SHA256 签名」。因此 PayClient 不要复用 BaseClient 的令牌逻辑——请直接组合 core 的 FetchTransport 与 LocalSigner/LocalVerifier，自己实现带签名的 request()，并暴露逃生口。基址：https://api.mch.weixin.qq.com 。

## 配置 PayClientConfig
{ mchid:string; appid?:string; privateKey:string|Buffer（商户API私钥PEM）; serialNo:string（商户证书序列号）; apiV3Key:string（32字节）;
  wechatPayPublicKey?:string|Buffer; wechatPayPublicKeyId?:string（启用「微信支付公钥」模式时提供，id 形如 PUB_KEY_ID_...）;
  platformCerts?:Array<{serialNo:string;certificate:string}>（可选，平台证书PEM）;
  transport?:Transport; timeoutMs?:number; logger?:Logger;
  // 服务商模式：
  sp?:{ spMchid:string; spAppid?:string } }

## 必须实现的核心
1. 内部 signer = new LocalSigner(privateKey, serialNo)；verifier = new LocalVerifier()，构造时把 wechatPayPublicKey（addPublicKey(wechatPayPublicKeyId,...)）与 platformCerts（addCertificate）载入。
2. request<T>(method, path, opts?:{ body?:object; query?:Record<string,QueryValue>; sensitiveSerial?:string }):Promise<T>
   - urlPath = path + buildQuery(query)（注意：待签名串里的 URL 必须含查询串）。
   - bodyStr = body? JSON.stringify(body):''；ts=unixTimestamp()；nonce=nonceStr()。
   - message = buildSignMessage(method, urlPath, ts, nonce, bodyStr)；{signature}=await signer.sign(message)。
   - Authorization 头：WECHATPAY2-SHA256-RSA2048 mchid="..",nonce_str="..",timestamp="..",serial_no="<商户序列号>",signature="<base64>"。
   - 头：Accept: application/json；Content-Type: application/json（有 body 时）；User-Agent: wxstack-pay；若 sensitiveSerial 则加 Wechatpay-Serial: <该序列号>。
   - 用 transport.request 发送（responseType:'auto'）。捕获 WxHttpError：微信支付错误体为 {code,message,detail?}，请解析 details.body JSON 后抛出 WxApiError(message, code)（code 是字符串，可放 errcode=-1、把字符串 code 放 hint/details）。2xx 直接返回 data；204 无内容返回 undefined。
   - 可选：用响应头 Wechatpay-Timestamp/Nonce/Signature/Serial + verifier 校验应答签名（verifyResponse(headers, rawBodyString)）；找不到序列号时跳过并告警。
3. requestRaw 暴露完整响应（含 raw、headers），供下载账单等。

## 高层方法（method+path 已核对官方文档，注释加 @see https://pay.weixin.qq.com/doc/v3/merchant/...）
- transactions.jsapi(body) POST /v3/pay/transactions/jsapi → {prepay_id}
- transactions.app(body)  POST /v3/pay/transactions/app  → {prepay_id}
- transactions.native(body) POST /v3/pay/transactions/native → {code_url}
- transactions.h5(body)   POST /v3/pay/transactions/h5   → {h5_url}
- transactions.queryById(transaction_id, {mchid}) GET /v3/pay/transactions/id/{transaction_id}?mchid=
- transactions.queryByOutTradeNo(out_trade_no,{mchid}) GET /v3/pay/transactions/out-trade-no/{out_trade_no}?mchid=
- transactions.close(out_trade_no,{mchid}) POST /v3/pay/transactions/out-trade-no/{out_trade_no}/close（body {mchid}）
- refunds.create(body) POST /v3/refund/domestic/refunds
- refunds.query(out_refund_no) GET /v3/refund/domestic/refunds/{out_refund_no}
- profitSharing.create(body) POST /v3/profitsharing/orders；query GET /v3/profitsharing/orders/{out_order_no}?transaction_id=；addReceiver POST /v3/profitsharing/receivers/add；deleteReceiver /v3/profitsharing/receivers/delete
- transfer.batch(body) POST /v3/transfer/batches（商家转账到零钱-批次版）；并实现新版商家转账 transferBills(body) POST /v3/fund-app/mch-transfer/transfer-bills（如文档存在）。注释注明两者差异，未确定的字段交由逃生口。
- bill.tradeBill(params) GET /v3/bill/tradebill；bill.fundFlowBill GET /v3/bill/fundflowbill；并提供 downloadBill(download_url) 用 requestRaw 取 raw（仍需签名，download_url 的 path+query 参与签名）。
- certificates() GET /v3/certificates → 用 apiV3Key 对每个 encrypt_certificate 做 aesGcmDecrypt(apiV3Key, nonce, ciphertext, associated_data) 得到证书PEM，addCertificate 到 verifier，并返回 {serialNo, certificate}[]。
- 敏感字段：encryptSensitive(plain) 用 wechatPayPublicKey/最新平台证书公钥 rsaOaepEncrypt；decryptSensitive(cipher) 用商户私钥 rsaOaepDecrypt。

## 回调
- callback.decrypt({headers, body}):  解析 body(JSON: {id,create_time,event_type,resource_type,resource,summary})；resource={ciphertext,nonce,associated_data,algorithm,original_type}；用 aesGcmDecrypt(apiV3Key, resource.nonce, resource.ciphertext, resource.associated_data) 得到明文 JSON；可选先用 verifier 验签（Wechatpay-Signature/Timestamp/Nonce/Serial + 原始 body 字符串 + buildVerifyMessage）。返回 {event_type, resource:解密对象}。
- callback.verify(headers, rawBody):boolean（验签，序列号缺失时下载证书后重试一次）。

## 调起支付参数
- buildJsapiPayParams(prepayId, appId?) 用 core 的 buildJsapiPaySign(appId??this.appid, prepayId, {sign:(m)=>signer.sign(m)})。
- buildAppPayParams(prepayId, appId?) 用 buildAppPaySign（App 还需 partnerid=mchid，请在返回里补 partnerid）。

## 服务商模式
- 配置 sp 时，下单 body 用 sp_appid/sp_mchid/sub_mchid/sub_appid 字段（由调用方在 body 自填即可）；不强转。

index.ts 导出 createPayClient、PayClient、类型，re-export WxApiError。写 README.md（中文，含公钥模式与平台证书模式说明、回调示例）。`),
  },

  {
    label: 'mp',
    prompt: preface(String.raw`
# 任务：实现 @wxstack/mp（小程序服务端），目录 packages/mp/src/

MpClient extends BaseClient，createAccessTokenManager(keyPrefix:'mp')，access_token 放 query。config:{appId,appSecret,domain?,tokenMode?,timeoutMs?,retry?,store?,logger?,transport?}。
所有方法注释加 @see https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/... 。

实现（method+path）：
- 登录 code2Session(jsCode): GET /sns/jscode2session?appid&secret&js_code&grant_type=authorization_code（auth:false）→{openid,session_key,unionid}
- 解密：decryptData(sessionKey,encryptedData,iv) 调 core 的 decryptMpData（appId 校验水印）。
- 手机号 getPhoneNumber({code}): POST /wxa/business/getuserphonenumber → {phone_info}
- 订阅消息：sendSubscribeMessage(body) POST /cgi-bin/message/subscribe/send；subscribe.addTemplate({tid,kidList,sceneDesc?}) POST /wxaapi/newtmpl/addtemplate→{priTmplId}；delTemplate({priTmplId}) POST /wxaapi/newtmpl/deltemplate；getTemplateList() GET /wxaapi/newtmpl/gettemplate；getCategory() GET /wxaapi/newtmpl/getcategory；getPubTemplateKeyWordsById({tid}) GET /wxaapi/newtmpl/getpubtemplatekeywords；getPubTemplateTitleList({ids,start,limit}) GET /wxaapi/newtmpl/getpubtemplatetitles。
- 小程序码（二进制，用 requestRaw responseType:'arraybuffer' 返回 Buffer）：getQRCode(body) POST /wxa/getwxacode；getUnlimited(body) POST /wxa/getwxacodeunlimit；createQRCode(body) POST /cgi-bin/wxaapp/createwxaqrcode。注意失败时响应是 JSON 错误，需检查 content-type 或前若干字节，若是 JSON 错误则抛 WxApiError。
- URL：generateScheme(body) POST /wxa/generatescheme→{openlink}；generateUrlLink(body) POST /wxa/generate_urllink→{url_link}；generateShortLink(body) POST /wxa/genwxashortlink→{link}；queryScheme(body) POST /wxa/queryscheme；queryUrlLink(body) POST /wxa/query_urllink。
- 内容安全：msgSecCheck(body) POST /wxa/msg_sec_check（body含 content/version:2/scene/openid）；mediaCheckAsync(body) POST /wxa/media_check_async→{trace_id}。
- 客服消息：sendCustomMessage(body) POST /cgi-bin/message/custom/send；setTyping(body) POST /cgi-bin/message/custom/typing；uploadTempMedia(type,file) POST /cgi-bin/media/upload?type=（multipart，FormData）；getTempMedia(mediaId) GET /cgi-bin/media/get（二进制）。
- 数据分析：getDailySummary(body)/getDailyVisitTrend/getWeeklyVisitTrend/getMonthlyVisitTrend/getVisitDistribution/getDailyRetain/getWeeklyRetain/getMonthlyRetain/getVisitPage/getUserPortrait，分别 POST /datacube/getweanalysisappid{...}（body {begin_date,end_date} YYYYMMDD）。
- 发货信息管理（支付后发货，路径 /wxa/sec/order/）：uploadShippingInfo、uploadCombinedShippingInfo、getOrder、isTradeManaged、notifyConfirmReceive、setMsgJumpPath。
- 风控：getUserRiskRank(body) POST /wxa/getuserriskrank。
- soter：verifySignature(body) POST /cgi-bin/soter/verify_signature。
- 物流助手（express）与直播（broadcast）核心若干端点可选实现少量，其余交逃生口（在 README 注明）。

index.ts 导出 createMpClient、MpClient、类型、re-export WxApiError 与 decryptMpData。写 README.md（中文）。`),
  },

  {
    label: 'wecom',
    prompt: preface(String.raw`
# 任务：实现 @wxstack/wecom（企业微信），目录 packages/wecom/src/

基址 https://qyapi.weixin.qq.com 。令牌非标准：GET /cgi-bin/gettoken?corpid&corpsecret→{access_token,expires_in}。
请 WecomClient extends BaseClient，在构造函数：super({...config, baseURL:'https://qyapi.weixin.qq.com'})；然后自建令牌：
  const manager = new TokenManager({ store:this.store, logger:this.logger, fetcher: async()=>{ const {data}=await this.transport.request({method:'GET',url:'/cgi-bin/gettoken',query:{corpid,corpsecret}}); if(!data.access_token) throw new WxTokenError(data.errmsg, data.errcode, data); return {token:data.access_token, expiresIn:data.expires_in??7200}; } });
  const key = \`wecom:access_token:\${corpid}:\${agentid??secret前缀}\`; this.tokenProvider={get:()=>manager.getToken(key), refresh:()=>manager.refresh(key)}; this.tokenPlacement='query'.
config:{ corpid:string; corpsecret:string; agentid?:number; domain?; ... }。不同 secret 对应不同应用，key 需含区分（用 corpsecret 的哈希或前 6 位）。
所有方法 @see https://developer.work.weixin.qq.com/document/path/... 。

实现：
- 通讯录：user.get(userid) GET /cgi-bin/user/get?userid；user.create(body) POST /cgi-bin/user/create；user.update(body) POST /cgi-bin/user/update；user.delete(userid) GET /cgi-bin/user/delete?userid；user.simpleList({department_id,fetch_child?}) GET /cgi-bin/user/simplelist；user.list GET /cgi-bin/user/list；department.list({id?}) GET /cgi-bin/department/list；department.create/update/delete POST/GET /cgi-bin/department/*；tag.create/update/delete /cgi-bin/tag/*；tag.addTagUsers POST /cgi-bin/tag/addtagusers；tag.getList GET /cgi-bin/tag/list。
- 应用消息：message.send(body) POST /cgi-bin/message/send（body含 agentid,touser,msgtype,text/...）；message.recall POST /cgi-bin/message/recall。
- 客户联系（外部联系人）：externalContact.getFollowUserList GET /cgi-bin/externalcontact/get_follow_user_list；list({userid}) GET /cgi-bin/externalcontact/list；get({external_userid}) GET /cgi-bin/externalcontact/get；addContactWay(body) POST /cgi-bin/externalcontact/add_contact_way；groupChat.list(body) POST /cgi-bin/externalcontact/groupchat/list；groupChat.get(body) POST /cgi-bin/externalcontact/groupchat/get。
- 素材：media.upload(type,file) POST /cgi-bin/media/upload?type=（multipart）；media.get(media_id) GET /cgi-bin/media/get（二进制）。
- 身份验证 OAuth：getUserInfo(code) GET /cgi-bin/auth/getuserinfo?code= → {userid/openid}；并提供 buildOAuthUrl({redirect_uri,scope?,state?,agentid?}) 生成 https://open.weixin.qq.com/connect/oauth2/authorize?...#wechat_redirect。
- JS-SDK：getJsApiTicket() GET /cgi-bin/get_jsapi_ticket（缓存）；getAgentTicket() GET /cgi-bin/ticket/get?type=agent_config（缓存）；并提供 buildJsSdkSignature(url,ticket) 用 SHA1(noncestr,jsapi_ticket,timestamp,url) 生成 {noncestr,timestamp,signature}。
- 第三方/服务商（service）：getSuiteToken({suite_id,suite_secret,suite_ticket}) POST /cgi-bin/service/get_suite_token；getPreAuthCode；getPermanentCode；getCorpToken。以独立子模块/方法实现，未确定字段交逃生口。
- 回调加解密：用 core 的 WXBizMsgCrypt(token,encodingAESKey,corpid)（receiveid=corpid）与 createWebhook 封装 createWecomWebhook({token,encodingAESKey,corpid,handlers})。

index.ts 导出 createWecomClient、WecomClient、类型，re-export WxApiError、WXBizMsgCrypt。写 README.md（中文）。`),
  },

  {
    label: 'op',
    prompt: preface(String.raw`
# 任务：实现 @wxstack/op（微信开放平台 第三方平台 + 扫码登录），目录 packages/op/src/

基址 https://api.weixin.qq.com 。这是最复杂的包：令牌派生链
component_verify_ticket(微信每10分钟推送，必须落库) → component_access_token → pre_auth_code → 用户授权 → authorizer_access_token/refresh_token → 代公众号/小程序调用。

ComponentClient（不强制 extends BaseClient，可直接组合 FetchTransport + TokenManager）。config:{ componentAppId; componentAppSecret; componentToken; componentEncodingAESKey; store?; transport?; logger? }。
ticket 落库：setVerifyTicket(ticket) 存入 store（key \`op:component_verify_ticket:\${componentAppId}\`，长 TTL）；getVerifyTicket() 读取。
- componentAccessToken：TokenManager.fetcher → POST /cgi-bin/component/api_component_token，body {component_appid, component_appsecret, component_verify_ticket:(await getVerifyTicket())}→{component_access_token,expires_in}。所有 component 级接口在 query 带 component_access_token。
- createPreAuthCode() POST /cgi-bin/component/api_create_preauthcode?component_access_token （body {component_appid}）→{pre_auth_code}
- buildAuthUrl({pre_auth_code, redirect_uri, auth_type?, biz_appid?}) 生成 https://mp.weixin.qq.com/cgi-bin/componentloginpage?... 与移动端 https://open.weixin.qq.com/wxaopen/safe/bindcomponent?... 两种。
- queryAuth(authorization_code) POST /cgi-bin/component/api_query_auth?component_access_token →{authorization_info:{authorizer_appid,authorizer_access_token,authorizer_refresh_token,...}}（请把 refresh_token 落库）。
- getAuthorizerToken(authorizer_appid, authorizer_refresh_token?) POST /cgi-bin/component/api_authorizer_token（refresh_token 缺省从 store 读）→ 刷新并落库 authorizer_access_token。
- getAuthorizerInfo(authorizer_appid) POST /cgi-bin/component/api_get_authorizer_info。
- getAuthorizerOption/setAuthorizerOption。
- 代调用：callAuthorizer(authorizer_appid, {method,path,body?,query?}) —— 自动取该授权方的 authorizer_access_token 放 query access_token 后请求任意接口（逃生口，覆盖代公众号/小程序的全部 OpenAPI）。
- 授权事件/ticket 推送回调：用 WXBizMsgCrypt(componentToken, componentEncodingAESKey, componentAppId)（receiveid=component_appid）解密；createComponentWebhook({...,onVerifyTicket,onAuthorized,onUnauthorized,onUpdateAuthorized}) 自动落库 ticket。
- 小程序代开发/代码管理（在授权方 access_token 下调用）：commit、get_qrcode、submit_audit、get_auditstatus、release、modify_domain 等，封装为 miniprogram.* 方法（用 callAuthorizer 或专用方法，路径 /wxa/...）。

另：网站应用扫码登录（开放平台 OAuth，独立）：
- WebsiteLoginClient/或 createWebsiteLogin({appId,appSecret}): buildQrConnectUrl({redirect_uri,scope?='snsapi_login',state?}) → https://open.weixin.qq.com/connect/qrconnect?appid&redirect_uri&response_type=code&scope&state#wechat_redirect；getAccessToken(code) GET /sns/oauth2/access_token?appid&secret&code&grant_type=authorization_code→{access_token,openid,unionid,...}；getUserInfo(access_token,openid) GET /sns/userinfo；refreshToken(refresh_token)。

index.ts 导出 createComponentClient、ComponentClient、createWebsiteLogin、createComponentWebhook、类型，re-export WxApiError、WXBizMsgCrypt。写 README.md（中文，含完整授权链路与 ticket 落库说明）。`),
  },

  {
    label: 'mg',
    prompt: preface(String.raw`
# 任务：实现 @wxstack/mg（小游戏服务端），目录 packages/mg/src/

与小程序服务端同源：MgClient extends BaseClient，createAccessTokenManager(keyPrefix:'mg')，access_token 放 query。config 同 mp。
@see https://developers.weixin.qq.com/minigame/dev/... 。

实现：
- 登录 code2Session(jsCode) GET /sns/jscode2session?...（auth:false）→{openid,session_key,unionid}；decryptData(sessionKey,encryptedData,iv) 用 core decryptMpData。
- 虚拟支付（米大师 Midas）：midas.getBalance(body) POST /cgi-bin/midas/getbalance；pay(body) POST /cgi-bin/midas/pay；cancelPay POST /cgi-bin/midas/cancelpay；present POST /cgi-bin/midas/present。沙箱版路径前缀 /cgi-bin/midas/sandbox/*，提供 sandbox 开关。注意：Midas 需要额外 zone_id/openid/ts/sig/mp_sig 签名参数，请实现 sig=HMAC 相关签名助手（按官方：sig 用 appkey 对参数排序后 HMAC-SHA256，mp_sig 用 session_key）。若签名细节不确定，保留可注入 sig/mp_sig 的入参并在注释说明，核心仍以逃生口兜底。
- 内容安全：msgSecCheck(body) POST /wxa/msg_sec_check（version:2）；mediaCheckAsync POST /wxa/media_check_async。
- 订阅消息：sendSubscribeMessage(body) POST /cgi-bin/message/subscribe/send。
- 防沉迷/实名 与 UnionID 相关接口若不确定，交逃生口并在 README 注明。

index.ts 导出 createMgClient、MgClient、类型、re-export WxApiError 与 decryptMpData。写 README.md（中文）。`),
  },

  {
    label: 'shop',
    prompt: preface(String.raw`
# 任务：实现 @wxstack/shop（微信小店），目录 packages/shop/src/

微信小店 2024 起打通公众号/小程序/视频号，服务端接口在 api.weixin.qq.com，路径多在 /channels/ec/ 下，鉴权用对应主体 access_token。
ShopClient extends BaseClient，createAccessTokenManager(keyPrefix:'shop')（access_token 放 query）。config:{appId,appSecret,...}。
@see https://developers.weixin.qq.com/doc/store/shop/... 。

由于小店接口仍在演进，策略：以「鉴权 + 逃生口 + 高频接口」为主，并在 README 明确：未封装接口请用 client.request()/requestRaw() 逃生口。

实现高频接口（method 多为 POST，路径以官方为准，注释加 @see；不确定字段交逃生口）：
- product.add/update/get/listing/delisting/getList —— /channels/ec/product/*（商品 SPU/SKU）。
- order.get/getList/search —— /channels/ec/order/*。
- aftersale.get/getList/accept/reject —— /channels/ec/aftersale/*。
- coupon.create/get/getList —— /channels/ec/coupon/*。
- 物流 order.uploadDeliveryInfo —— /channels/ec/order/deliveryinfo/* 。
- 回调：createShopWebhook（如适用，沿用消息回调或单独事件，可仅留逃生口与说明）。

实现要点：把上述方法实现为薄封装（POST 到对应 path，body 透传），并用 actions/ 分组。即便字段不完整，方法签名用 (body:Record<string,unknown>) 亦可，确保可用。index.ts 导出 createShopClient、ShopClient、类型，re-export WxApiError。写 README.md（中文，强调逃生口）。`),
  },

  {
    label: 'ch',
    prompt: preface(String.raw`
# 任务：实现 @wxstack/ch（视频号），目录 packages/ch/src/

视频号对外服务端 API 面较窄且在变化。坦诚策略：以「鉴权 + 逃生口 + 已开放接口」为主，不承诺大而全（README 写明）。
ChClient extends BaseClient，createAccessTokenManager(keyPrefix:'ch')，access_token 放 query。config:{appId,appSecret,...}。基址 api.weixin.qq.com，路径多在 /channels/ 下。
@see https://developers.weixin.qq.com/doc/channels/ 。

实现少量已知接口（薄封装，注释加 @see，不确定交逃生口）：
- finder.getInfo / shop.getInfo 等账号信息类（路径以官方为准，可用 /channels/ 前缀）。
- live（直播）：getLiveInfo 等若已知则封装，否则仅逃生口。
- 其余通过继承的 client.request()/requestRaw() 逃生口覆盖。

确保包可构建可用：至少实现 createChClient、ChClient（含逃生口）、若干薄封装方法占位（带 @see 与中文注释，body 透传）。index.ts 导出 + re-export WxApiError。写 README.md（中文，明确以逃生口为主）。`),
  },

  {
    label: 'ai',
    prompt: preface(String.raw`
# 任务：实现 @wxstack/ai（微信智能对话开放平台），目录 packages/ai/src/

智能对话开放平台体量较小。AiClient 用「平台 token 鉴权」。若其 token 获取方式与标准 access_token 一致则复用 createAccessTokenManager；否则用自建 TokenManager。基址按官方（智能对话平台接口）。
@see https://developers.weixin.qq.com/doc/aispeech/platform/INTRODUCTION.html 。

实现：
- AiClient extends BaseClient。config:{appId,appSecret,...}（或平台所需的 token 配置）。
- 核心方法 query(body)：向机器人发问取回复（POST 到平台对话接口，路径以官方为准）。
- 技能/意图/实体/问答库 的增删改查若已知则薄封装；否则以逃生口为主。
- 导入/导出 接口占位。

由于该平台资料有限，确保：鉴权可用 + 逃生口 client.request()/requestRaw() + 若干薄封装方法（带 @see、中文注释、body 透传）。index.ts 导出 createAiClient、AiClient、类型、re-export WxApiError。写 README.md（中文，说明以逃生口为主）。`),
  },
];

// ───────────────────────── 执行 ─────────────────────────

phase('实现业务包');
log(`开始并行实现 ${PKGS.length} 个业务包：${PKGS.map((p) => p.label).join('、')}`);

const results = await parallel(
  PKGS.map((p) => () =>
    agent(p.prompt, {
      label: `impl:${p.label}`,
      phase: '实现业务包',
      agentType: 'general-purpose',
    }).then((summary) => ({ pkg: p.label, summary })).catch((e) => ({ pkg: p.label, error: String(e) })),
  ),
);

for (const r of results) {
  if (r?.error) log(`✗ ${r.pkg} 失败：${r.error}`);
  else if (r) log(`✓ ${r.pkg} 完成`);
}

return results;
