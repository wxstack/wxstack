// 公众号用法演示（离线展示 API 形态，不发起真实网络请求）。
// 运行：node examples/esm/oa-usage.mjs
import { WxApiError, createOaClient } from '@wxstack/oa';

const oa = createOaClient({
  appId: 'demo-app-id',
  appSecret: 'demo-app-secret',
  domain: 'auto',
  tokenMode: 'stable', // 多实例部署建议用稳定版令牌
});

console.log('✅ 公众号客户端创建成功');
console.log(
  '🔑 逃生口 request/requestRaw 可用：',
  typeof oa.request === 'function' && typeof oa.requestRaw === 'function',
);

// 抽样展示部分高层方法（不调用，避免真实请求）
const sampleMethods = [
  'getUserInfo',
  'sendTemplateMessage',
  'createCustomMenu',
  'createQrcode',
  'getMaterialCount',
];
const available = sampleMethods.filter((m) => typeof oa[m] === 'function');
console.log('📋 部分高层方法：', available.join('、'));

// 真实调用示例（需替换为有效凭据后才会成功）：
// try {
//   const user = await oa.getUserInfo({ openid: 'oOpenId' });
//   console.log(user);
// } catch (err) {
//   if (err instanceof WxApiError) console.error('微信业务错误：', err.errcode, err.errmsg);
//   else throw err;
// }
void WxApiError;
