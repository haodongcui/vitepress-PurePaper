import { defineConfig } from 'vitepress'

import { getOtherDirs } from './utiles/getOtherDirs.js';  // 导入获取其他文件夹的函数
import vue from '@vitejs/plugin-vue';
// import generateRewrites from './utiles/rewrites-generator.js';
// import { getSlugRewrites } from './utiles/rewrites.data.js'
// import { withMermaid } from "vitepress-plugin-mermaid"

export default defineConfig({
  lang: 'zh-CN',
  title: "東の小屋",
  description: "这是東的小站",
  base: '/',
  head: [
    // ['script', { src: '/live2d-widget/autoload.js' }],
    // ['script', { src: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/epsilon/epsilon.model.json' }],
  ],
  cleanUrls: true,
  // appearance:'dark', // 默认主题颜色
  // 重定向(相对docsDir,且开头不加/)
  rewrites: {
    // ...generateRewrites(),
    // ...getSlugRewrites(),
    // ...getSlugRewrites(),
    'blog-info/home.md': 'index.md',
    'blog-info/about.md': 'about.md',
    'blog-info/nav.md': 'nav.md',
    'blog-info/posts.md': 'posts.md',
    'blog-info/categories.md': 'categories.md',
    'blog-info/tags.md': 'tags.md',
    'blog-info/essays.md': 'essays.md',
    // 'blog-posts/:path*/(.*)': 'posts/(.*)', // 将多层目录映射到单层posts目录下
    // 'blog-essays/:path*/(.*)': 'essays/(.*)', // 将多层目录映射到单层essays目录下
  },

  // transformPageData: (data, context) => {
  //   // 自定义处理逻辑
  //   // console.log(data);
  //   // console.log(context);
  //   return data;
  // },

  // 编译时保留的文章文件夹列表，不编译其余文件夹，防止泄露隐私
  srcExclude: getOtherDirs(['/blog-info', '/blog-posts', '/blog-essays']),

  themeConfig: {
    
    nav: [
      { text: "🏡首页", link: "/index.md" },
      // { text: "🪶笔记", items: [{text:'📖技术',link:'/blog-posts/index.md'},{text:'🌱随笔',link:'/blog-essays/index.md'}] },
      { text: "🪶笔记", link: '/posts/index.md' },
      // { text: "🪶随笔", link: "/blog-essays/index.md" },
      // { text: "归档", link: "/blog-info/archives.md" },
      // { text: "🏷️标签", link: "/blog-info/tags.md" },
      { text: "🚀导航", link: "/nav.md" },
      { text: "💕关于", link: "/about.md" },

    ],

    outline: {
      level: [1,3], // 显示 a-b 级
      label: "目录"
    },

    returnToTopLabel:'返回顶部', 

    socialLinks: [
      { icon: 'github', link: 'https://github.com/haodongcui' }
    ],

    search: {
      provider: 'local'
    }


  },

  vite: {
    // plugins: [vue()]
  },

  // markdown 配置
  markdown: {
    math: true,       // 启用 mathjax
    breaks: true,     // 一个 \n 即可换行，与 obsidian 一致
    image: {
      lazyLoading: true // 图片懒加载
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
  },


  // build后执行的钩子函数
  // async buildEnd() {
  // },


})




// 补充类型
interface SidebarItem {
  text: string;          // 标题文本
  link?: string;         // 链接
  items?: SidebarItem[]; // 嵌套子项
}








// 插件汇总列表
// https://vitepress.yiov.top/preface.html

// 侧边栏配置文档
// https://vitepress.dev/zh/reference/default-theme-sidebar
// https://vitepress-sidebar.cdget.com/zhHans/guide/getting-started

// 其他文档
// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config

// 本地搜索
// https://vitepress.dev/zh/reference/default-theme-search#local-search

// 模型资源
// https://github.com/iCharlesZ/vscode-live2d-models#url