import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'; 
import { getOtherDirs } from './utiles/getOtherDirs.js';  // 导入获取其他文件夹的函数
import vue from '@vitejs/plugin-vue';
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

  // 重定向(相对docsDir,且开头不加/)
  rewrites: {
    'blog-info/index-home.md': 'index.md',
    'blog-info/index-essay.md': 'blog-essays/index.md',
    'blog-info/index-post.md': 'blog-posts/index.md',
  },

  // 编译时保留的文章文件夹列表，不编译其余文件夹，防止泄露隐私
  srcExclude: getOtherDirs(['/blog-info', '/blog-posts', '/blog-essays']),
  
  themeConfig: {

    nav: [
      { text: "🏡首页", link: "/index.md" },
      // { text: "🪶笔记", items: [{text:'📖技术',link:'/blog-posts/index.md'},{text:'🌱随笔',link:'/blog-essays/index.md'}] },
      { text: "🪶笔记", link:'/blog-posts/index.md' },
      // { text: "🪶随笔", link: "/blog-essays/index.md" },
      // { text: "归档", link: "/blog-info/archives.md" },
      { text: "🏷️标签", link: "/blog-info/tags.md" },
      { text: "🚀导航", link: "/blog-info/nav.md" },
      { text: "💕关于", link: "/blog-info/about.md" },

    ],

    // sidebar: {
    //   '/blog-posts': generateSidebar({          // 当用户位于指定目录时，会显示此侧边栏
    //     documentRootPath: '/docs',              //文档根目录
    //     scanStartPath: '/blog-posts',           //扫描起始目录(相对文档根目录的路径)
    //     debugPrint: false,                      //是否打印调试信息
    //     keepMarkdownSyntaxFromTitle: true,      //是否保留markdown语法
    //     // sortMenusByFrontmatterDate: true,       //是否根据文章的frontmatter中的date字段排序
    //   }) as SidebarItem[], // 类型断言,

    //   '/blog-essays': generateSidebar({
    //     documentRootPath: '/docs',
    //     scanStartPath: '/blog-essays',
    //     debugPrint: false,
    //     keepMarkdownSyntaxFromTitle: true,      //是否保留markdown语法
    //     // sortMenusByFrontmatterDate: true,       //是否根据文章的frontmatter中的date字段排序
    //   }) as SidebarItem[],
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/haodongcui' }
    ],

    search: {
      provider: 'local'
    }
    
    // lastUpdated: {
    //  text: 'Updated at',
    //  formatOptions: {
    //    dateStyle: 'full',
    //    timeStyle: 'medium'
    //  }
    // },

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
    }
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