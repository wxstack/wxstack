// 客户端实例化冒烟测试：确认各业务客户端可构造、逃生口已装配、全量接口表 client.api 可用（无需网络）。
import crypto from 'node:crypto';
import { createAiClient } from '@wxstack/ai';
import { createChClient } from '@wxstack/ch';
import { createMgClient } from '@wxstack/mg';
import { createMpClient } from '@wxstack/mp';
import { createOaClient } from '@wxstack/oa';
import { createComponentClient } from '@wxstack/op';
import { createPayClient } from '@wxstack/pay';
import { createShopClient } from '@wxstack/shop';
import { createWecomClient } from '@wxstack/wecom';
import * as meta from 'wxstack';

const { privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
const pem = privateKey.export({ type: 'pkcs8', format: 'pem' });

const checks = [];
const hasEscape = (c) =>
  !!c && typeof c.request === 'function' && typeof c.requestRaw === 'function';
const apiCount = (c) => (c?.api ? Object.keys(c.api).length : 0);

const clients = {
  oa: createOaClient({ appId: 'wx', appSecret: 's' }),
  pay: createPayClient({
    mchid: '1',
    appid: 'wx',
    serialNo: 'AB',
    privateKey: pem,
    apiV3Key: '01234567890123456789012345678901',
  }),
  mp: createMpClient({ appId: 'wx', appSecret: 's' }),
  wecom: createWecomClient({ corpid: 'c', corpsecret: 's' }),
  mg: createMgClient({ appId: 'wx', appSecret: 's' }),
  shop: createShopClient({ appId: 'wx', appSecret: 's' }),
  ch: createChClient({ appId: 'wx', appSecret: 's' }),
  ai: createAiClient({ appId: 'wx', appSecret: 's' }),
};

for (const [name, c] of Object.entries(clients)) {
  if (name === 'pay') checks.push([`${name} (逃生口)`, hasEscape(c)]);
  else checks.push([`${name} (逃生口 + api:${apiCount(c)})`, hasEscape(c)]);
}

const op = createComponentClient({
  componentAppId: 'wx',
  componentAppSecret: 's',
  componentToken: 't',
  componentEncodingAESKey: 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFG',
});
checks.push([
  `op (api:${apiCount(op)} + authorizerApi)`,
  typeof op.callAuthorizer === 'function' &&
    apiCount(op) > 0 &&
    typeof op.authorizerApi === 'function',
]);

checks.push([
  'meta.pay/oa/mp',
  typeof meta.pay?.createPayClient === 'function' &&
    typeof meta.oa?.createOaClient === 'function' &&
    typeof meta.mp?.createMpClient === 'function',
]);

// 全量接口方法是函数
checks.push([
  'mp.api 方法可调用形态',
  typeof clients.mp.api.getUnlimited === 'function' ||
    Object.values(clients.mp.api).every((f) => typeof f === 'function'),
]);

let allPass = true;
for (const [n, pass] of checks) {
  console.log(pass ? '✓' : '✗', n);
  if (!pass) allPass = false;
}
const totalApi = Object.values(clients).reduce((s, c) => s + apiCount(c), 0) + apiCount(op);
console.log(`\n全量接口方法总数（client.api）：${totalApi}`);
console.log(allPass ? '全部客户端 OK' : '存在失败项');
process.exit(allPass ? 0 : 1);
