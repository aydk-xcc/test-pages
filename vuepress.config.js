import { defineUserConfig } from 'vuepress';
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/test1/' },
        { text: 'External', link: 'https://google.com' },
      ]
  }),
  plugins: [
    searchPlugin({
        // 配置项
      }),
  ]
}