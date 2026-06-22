/**
 * 轻量 XML 解析/构建，专用于微信回调消息格式（扁平或单层嵌套、CDATA 包裹）。
 *
 * 微信消息 XML 形如：
 *   <xml><ToUserName><![CDATA[toUser]]></ToUserName><MsgType><![CDATA[text]]></MsgType>...</xml>
 * 部分事件含单层嵌套（如 ScanCodeInfo / SendPicsInfo.PicList.item）。
 * 为保持内核零运行时依赖，这里实现一个针对该有限文法的递归解析器。
 */

/** 解析结果节点类型。 */
export type XmlValue = string | number | XmlNode | XmlValue[];
/** XML 对象节点。 */
export interface XmlNode {
  [key: string]: XmlValue;
}

/**
 * 解析微信 XML 字符串为对象。返回根元素（通常是 `<xml>`）内部的键值对象。
 * @param xml XML 文本。
 */
export function parseXml(xml: string): XmlNode {
  let s = xml.trim();
  // 去除 XML 声明
  s = s.replace(/^<\?xml[^>]*\?>/i, '').trim();
  const { node } = parseElement(s, 0);
  // 若根为 <xml>，返回其内容
  if (node && typeof node === 'object' && 'xml' in node) {
    const inner = (node as XmlNode).xml;
    return (typeof inner === 'object' && !Array.isArray(inner) ? inner : { xml: inner }) as XmlNode;
  }
  return node as XmlNode;
}

interface ParseResult {
  node: XmlValue;
  next: number;
}

function parseElement(s: string, start: number): ParseResult {
  // 找到首个开始标签
  const open = s.indexOf('<', start);
  if (open === -1) return { node: {}, next: s.length };
  const tagEnd = s.indexOf('>', open);
  const tagName = s
    .slice(open + 1, tagEnd)
    .replace(/\/$/, '')
    .split(/\s/)[0]!;
  const node: XmlNode = {};
  const obj = parseChildren(s, tagEnd + 1, tagName, node);
  return { node: { [tagName]: obj.value }, next: obj.next };
}

function parseChildren(
  s: string,
  start: number,
  parentTag: string,
  node: XmlNode,
): { value: XmlValue; next: number } {
  let i = start;
  let text = '';
  let hasChild = false;

  while (i < s.length) {
    const lt = s.indexOf('<', i);
    if (lt === -1) break;
    text += s.slice(i, lt);

    // CDATA
    if (s.startsWith('<![CDATA[', lt)) {
      const end = s.indexOf(']]>', lt);
      text += s.slice(lt + 9, end);
      i = end + 3;
      continue;
    }
    // 结束标签
    if (s.startsWith(`</${parentTag}>`, lt)) {
      const closeEnd = s.indexOf('>', lt);
      if (!hasChild) {
        return { value: coerce(text.trim()), next: closeEnd + 1 };
      }
      return { value: node, next: closeEnd + 1 };
    }
    // 子元素
    const childTagEnd = s.indexOf('>', lt);
    const rawTag = s.slice(lt + 1, childTagEnd);
    // 自闭合
    if (rawTag.endsWith('/')) {
      const childName = rawTag.replace(/\/$/, '').split(/\s/)[0]!;
      addChild(node, childName, '');
      hasChild = true;
      i = childTagEnd + 1;
      continue;
    }
    const childName = rawTag.split(/\s/)[0]!;
    const childInner = parseChildren(s, childTagEnd + 1, childName, {});
    addChild(node, childName, childInner.value);
    hasChild = true;
    i = childInner.next;
  }
  return { value: hasChild ? node : coerce(text.trim()), next: i };
}

function addChild(node: XmlNode, name: string, value: XmlValue): void {
  if (name in node) {
    const existing = node[name];
    if (Array.isArray(existing)) existing.push(value);
    else node[name] = [existing as XmlValue, value];
  } else {
    node[name] = value;
  }
}

/** 将纯文本值在可能时转为数字。 */
function coerce(text: string): string | number {
  if (text !== '' && /^-?\d+$/.test(text) && text.length < 16) {
    const n = Number(text);
    if (Number.isSafeInteger(n)) return text; // 微信 ID 类字段保持字符串更安全
  }
  return text;
}

/**
 * 构建微信回复 XML。字符串值用 CDATA 包裹，数字保持原样，数组作为重复元素。
 * @param obj 键值对象（不含根标签）。
 * @param root 根标签名，默认 `xml`。
 */
export function buildXml(obj: Record<string, unknown>, root = 'xml'): string {
  return `<${root}>${buildInner(obj)}</${root}>`;
}

function buildInner(obj: Record<string, unknown>): string {
  let out = '';
  for (const [k, v] of Object.entries(obj)) {
    out += buildField(k, v);
  }
  return out;
}

function buildField(key: string, value: unknown): string {
  if (value === undefined || value === null) return '';
  if (Array.isArray(value)) {
    return value.map((item) => buildField(key, item)).join('');
  }
  if (typeof value === 'number') {
    return `<${key}>${value}</${key}>`;
  }
  if (typeof value === 'object') {
    return `<${key}>${buildInner(value as Record<string, unknown>)}</${key}>`;
  }
  return `<${key}><![CDATA[${String(value)}]]></${key}>`;
}
