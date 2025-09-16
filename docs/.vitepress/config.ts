import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: 'wxstack',
  description: 'Node 微信生态开发 SDK 文档',
  themeConfig: {
    nav: [
      { text: '总览', link: '/' },
      {
        text: 'SDK',
        items: [
          { text: '公众号（oa）', link: '/oa/' },
          { text: '小程序（mp）', link: '/mp/' },
          { text: '企业微信（wecom）', link: '/wecom/' },
          { text: '微信支付（pay）', link: '/pay/' },
          { text: '商店（shop）', link: '/shop/' }
        ]
      }
    ],
    sidebar: {
  "/oa/guide/": [
    {
      "text": "指南",
      "items": [
        {
          "text": "快速开始",
          "link": "/oa/guide/getting-started"
        }
      ]
    }
  ],
  "/oa/api/": [
    {
      "text": "API",
      "items": [
        {
          "text": "索引",
          "link": "/oa/api/"
        },
        {
          "text": "Base",
          "link": "/oa/api/base"
        },
        {
          "text": "Customer（服务号）",
          "link": "/oa/api/customer"
        },
        {
          "text": "Draftbox",
          "link": "/oa/api/draftbox"
        },
        {
          "text": "Leaving",
          "link": "/oa/api/leaving"
        },
        {
          "text": "Material",
          "link": "/oa/api/material"
        },
        {
          "text": "Menu",
          "link": "/oa/api/menu"
        },
        {
          "text": "Message",
          "link": "/oa/api/message"
        },
        {
          "text": "Other",
          "link": "/oa/api/other"
        },
        {
          "text": "Qrcode",
          "link": "/oa/api/qrcode"
        },
        {
          "text": "User",
          "link": "/oa/api/user"
        },
        {
          "text": "Wedata",
          "link": "/oa/api/wedata"
        }
      ]
    }
  ]
},
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wxstack/wxstack' }
    ]
  }
});
