// 工作流各实现代理共享的上下文：内核 API 契约 + 编码规范。
// 单独成文件便于工作流脚本与人工核对复用。

export const CORE_CONTRACT = String.raw`
# @wxstack/core 内核 API 契约（业务包必须基于此实现，禁止臆造不存在的导出）

所有内容均从包 \`@wxstack/core\` 顶层导出（ESM）。导入示例：
import { BaseClient, createAccessTokenManager, TokenManager, FetchTransport, WxApiError } from '@wxstack/core';
加解密也可从子路径 '@wxstack/core/crypto' 导入；回调内核从 '@wxstack/core/webhook' 导入；二者顶层也有再导出。

## 传输与类型
- type HttpMethod = 'GET'|'POST'|'PUT'|'PATCH'|'DELETE'
- type QueryValue = string|number|boolean|undefined|null
- type RequestBody = undefined|string|Buffer|Uint8Array|ArrayBuffer|FormData|Record<string,unknown>|unknown[]
- type ResponseType = 'auto'|'json'|'text'|'arraybuffer'|'stream'
- interface HttpRequest { method; url; headers?; query?; body?; signal?; timeoutMs?; responseType? }
- interface HttpResponse<T> { status:number; headers:Record<string,string>; data:T; raw:Buffer }
- interface Transport { request<T>(req:HttpRequest):Promise<HttpResponse<T>> }
- type DomainPreference = 'auto'|'disaster'|'shanghai'|'sh'|'shenzhen'|'sz'|'hongkong'|'hk'
- interface RetryOptions { retries?:number; baseDelayMs?:number; maxDelayMs?:number }
- const WX_API_DOMAINS: Record<DomainPreference,string>  // auto => 'https://api.weixin.qq.com'
- class FetchTransport implements Transport { constructor(opts?:{ baseURL?; timeoutMs?; defaultHeaders?; retry?; retryOnPost?; failover?; fetchImpl? }) }
- function buildQuery(query?):string  // '?a=1&b=2'，自动跳过 undefined/null

## 错误体系
- class WxError extends Error { code; details? }
- class WxApiError extends WxError { errcode:number; errmsg:string; rid?; hint? }
- class WxHttpError extends WxError { status:number; isRetryable:boolean }
- class WxCryptoError、WxConfigError、WxTokenError、WxRateLimitError(extends WxApiError)
- const TOKEN_INVALID_ERRCODES: ReadonlySet<number>  // 40001/40014/42001/41001
- function buildApiError(body:{errcode,errmsg?}): WxApiError
- function isApiErrorBody(body): body is {errcode:number; errmsg?:string}

## 存储与日志
- interface KVStore { get(k):Promise<string|null>; set(k,v,ttlSec?):Promise<void>; del(k):Promise<void>; acquireLock?(k,ttlSec):Promise<boolean>; releaseLock?(k):Promise<void> }
- class MemoryStore implements KVStore；class FileStore implements KVStore
- interface Logger { debug/info/warn/error(msg, meta?) }；const noopLogger:Logger；function createConsoleLogger(level?)

## 令牌
- interface TokenFetchResult { token:string; expiresIn:number }
- type TokenFetcher = (key:string)=>Promise<TokenFetchResult>
- class TokenManager { constructor(opts:{store:KVStore; fetcher:TokenFetcher; logger?; earlyRefreshSec?; lockTtlSec?; lockWaitMs?}); getToken(key):Promise<string>; refresh(key):Promise<string>; invalidate(key):Promise<void> }
- type TokenMode = 'normal'|'stable'
- function createAccessTokenManager(opts:{appId; appSecret; mode?:TokenMode; store:KVStore; transport:Transport; logger?; keyPrefix?}): { manager:TokenManager; key:string; provider:TokenProvider }
  说明：该工厂调用 api.weixin.qq.com 的 /cgi-bin/token 或 /cgi-bin/stable_token，适用于公众号/小程序等标准 access_token。
  企业微信(gettoken)、开放平台(component token)等非标准令牌请自行 new TokenManager 并提供 fetcher。

## 业务客户端基类（最重要）
- interface TokenProvider { get():Promise<string>; refresh():Promise<string> }
- type TokenPlacement = 'query'|'header'|'none'
- interface CallOptions { method?:HttpMethod; url:string; query?; body?; headers?; signal?; timeoutMs?; responseType?; auth?:boolean; throwOnApiError?:boolean }
- interface BaseClientConfig { baseURL?; domain?:DomainPreference; timeoutMs?; retry?:RetryOptions; retryOnPost?:boolean; store?:KVStore; logger?:Logger; transport?:Transport; throwOnApiError?:boolean }
- abstract class BaseClient {
    constructor(config?:BaseClientConfig)
    protected transport:Transport; protected store:KVStore; protected logger:Logger; protected throwOnApiError:boolean
    protected tokenProvider?:TokenProvider          // 子类在构造函数里赋值
    protected tokenPlacement:TokenPlacement          // 默认 'query'
    protected tokenQueryKey:string                   // 默认 'access_token'
    requestRaw<T>(opts:CallOptions):Promise<HttpResponse<T>>   // 返回完整响应(含 raw 字节)
    request<T>(opts:CallOptions):Promise<T>                     // 自动解包；errcode!=0 抛 WxApiError；命中令牌失效码自动刷新重放一次
    protected get<T>(url, query?, extra?):Promise<T>
    protected post<T>(url, body?, extra?):Promise<T>
  }
  典型子类（标准 access_token，放 query）：
    export class OaClient extends BaseClient {
      readonly appId:string;
      constructor(config:OaClientConfig){
        super(config);
        this.appId = config.appId;
        const { provider } = createAccessTokenManager({
          appId:config.appId, appSecret:config.appSecret, mode:config.tokenMode,
          store:this.store, transport:this.transport, logger:this.logger, keyPrefix:'oa',
        });
        this.tokenProvider = provider;     // 之后 this.request/get/post 会自动带 access_token
        this.tokenPlacement = 'query';
      }
      // 高层方法：return this.get(...) / this.post(...) / this.request(...)
    }
  注意：BaseClient 的 store/transport/logger 是 protected，可在子类构造函数中读取后传入 createAccessTokenManager。

## XML（公众号/企业微信回调用）
- function parseXml(xml:string):XmlNode；function buildXml(obj:Record<string,unknown>, root?='xml'):string

## 加解密（'@wxstack/core' 或 '@wxstack/core/crypto'）
- 消息回调：class WXBizMsgCrypt { constructor(token, encodingAESKey, receiveId); verifyUrl(sig,ts,nonce); verifyEchoStr(msgSig,ts,nonce,echostr):string; decryptMessage(msgSig,ts,nonce,encrypt):string; encryptMessage(reply,ts?,nonce?); buildEncryptedReply(reply,ts?,nonce?):string }
- function verifySignature(token,ts,nonce,sig):boolean；verifyMsgSignature(token,ts,nonce,encrypt,msgSig):boolean；decodeAESKey(s):Buffer
- 小程序：function decryptMpData(sessionKey, encryptedData, iv, appId?):object
- 支付：interface Signer{serialNo; sign(msg):Promise<{serialNo;signature}>}；interface Verifier{verify(serialNo,msg,sig):Promise<boolean>}
  class LocalSigner implements Signer { constructor(privateKeyPem:string|Buffer, serialNo:string) }
  class LocalVerifier implements Verifier { addPublicKey(serialNo,pem); addCertificate(serialNo,certPem); get serials; verify(...) }
  function nonceStr(len?=32):string；unixTimestamp():string
  function buildSignMessage(method,urlPath,ts,nonce,body):string   // 请求签名待签名串
  function buildVerifyMessage(ts,nonce,body):string                 // 应答/回调验签待签名串
  function rsaSign(msg, privateKey):string；rsaVerify(msg,sig,publicKey):boolean
  function aesGcmDecrypt(apiV3Key:string|Buffer, nonce:string, ciphertextB64:string, associatedData?=''):string
  function rsaOaepEncrypt(plain, publicKey):string；rsaOaepDecrypt(ciphertextB64, privateKey):string
  function buildJsapiPaySign(appId, prepayId, signer):Promise<{timeStamp;nonceStr;package;signType:'RSA';paySign}>
  function buildAppPaySign(appId, prepayId, signer):Promise<{appid;timestamp;noncestr;prepayid;package;sign}>

## 回调内核（'@wxstack/core/webhook'，顶层亦再导出 createWebhook）
- function createWebhook(opts:{token; receiveId?; encodingAESKey?; onMessage?; handlers?; logger?}): { handle(raw:RawCallback):Promise<WebhookResult> }
- interface RawCallback { method:string; rawBody:string|Buffer; query:Record<string,string|undefined>; headers? }
- interface WebhookResult { status:number; body:string; contentType:string }
`;

export const CONVENTIONS = String.raw`
# 编码规范（所有业务包统一遵守）

1. 语言：源码注释、文档字符串、用户可见文本一律使用「简体中文」。标识符用英文。
2. 每个高层方法必须用 JSDoc 写明用途、参数、返回，并以 @see 附上官方文档 URL（权威依据）。
3. 文件结构（放在 packages/<dir>/src/ 下）：
   - index.ts        —— 导出 createXxxClient 工厂、XxxClient 类、相关类型；并 re-export 需要的核心错误类（如 WxApiError）。
   - client.ts       —— XxxClient 实现（鉴权装配 + 高层方法 + 继承自基类的逃生口）。
   - types.ts        —— 配置接口与关键入参/出参类型（可按需拆分）。
   - actions/*.ts    —— 端点过多时按业务域分组（可选；每个文件导出纯函数 (client, params)=>client.request(...)，由 client.ts 绑定为方法）。
   - 回调相关放 webhook.ts（如适用）。
4. 双 API 风格：
   - 高层语义方法（带类型、带 @see）。
   - 低层逃生口：直接继承基类的 client.request()/client.requestRaw()，覆盖未封装接口。务必在 README/注释中说明逃生口可调用任意未封装端点。
5. 工厂函数：export function createXxxClient(config): XxxClient。
6. 现代异步：全部 async/await；尽量支持 AbortSignal（通过 CallOptions.signal 透传，可选）。
7. 不要修改 packages/<其它包> 或 packages/core；只写自己负责的包目录。不要改根配置。
8. 不要运行构建或安装命令；只写源码（.ts）。构建由统一阶段完成。
9. TypeScript 严格模式（strict:true，但未开启 noUncheckedIndexedAccess）。避免使用浏览器专属类型（如 BodyInit/DOM 库）；Node 全局 fetch/FormData/Blob 可用。
10. 二进制接口（图片/媒体下载、二维码）用 this.requestRaw({...,responseType:'arraybuffer'}) 取 resp.raw（Buffer）。
11. 文件上传（multipart）：用全局 FormData + Blob 构造 body 传给 this.request/requestRaw（FetchTransport 原样转交 fetch，会自动设置 multipart 边界）。
`;
