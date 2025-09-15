import { XMLParser, XMLBuilder } from 'fast-xml-parser';

const parser = new XMLParser({
    ignoreAttributes: false,
    trimValues: true,
    cdataPropName: '#cdata',
    preserveOrder: false,
});
const builder = new XMLBuilder({
    ignoreAttributes: false,
    cdataPropName: '#cdata',
    suppressEmptyNode: true,
});

export function parseXml(xmlStr) {
    return parser.parse(xmlStr);
}

export function buildWechatXml(obj) {
    const wrap = (v) => {
        if (v === undefined || v === null) return '';
        if (typeof v === 'number') return v;
        return { '#cdata': String(v) };
    };
    const xmlObj = { xml: {} };
    for (const [k, v] of Object.entries(obj)) {
        xmlObj.xml[k] = typeof v === 'string' ? wrap(v) : v;
    }
    return builder.build(xmlObj);
}