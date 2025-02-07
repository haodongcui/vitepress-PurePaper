// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/index.css'
import { useData, useRoute } from 'vitepress';
import { inBrowser } from 'vitepress'

// 自定义组件
import beian from './components/bottom-beian.vue'   // 备案信息
import giscusTalk from 'vitepress-plugin-comment-with-giscus'; // giscus评论
import busuanzi from 'busuanzi.pure.js'             // 不蒜子
import bsz from "./components/bottom-bsz.vue"       // 不蒜子
import confetti from "./components/confetti.vue"    // 五彩纸屑
import MyLayout from './components/MyLayout.vue';
// import backtotop from "./components/backtotop.vue"  // 返回顶部

// 自定义布局
import PostList from './layouts/PostList.vue'
import Categories from './layouts/Categories.vue'
import Tags from './layouts/Tags.vue'
// Live2d-Widget
// import { loadlive2d } from 'live2d-widget';
// import Live2D from "./components/Live2D.vue"
// import loadLive2D from "./components/LoadLive2D.vue"

export default {
  // extends: DefaultTheme,
  Layout: () => {
    // return h(DefaultTheme.Layout, null, {
    return h(MyLayout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots

      'layout-bottom': () => [ h(bsz), h(beian) ], //不蒜子layout-bottom插槽
      // 'doc-footer-before': () => h(backtotop), // 使用doc-footer-before插槽
    })
  },


  async enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('confetti' , confetti);
    app.component('PostList', PostList);
    app.component('Categories', Categories);
    app.component('Tags', Tags)
    // app.component('Live2D', Live2D)

    // 不蒜子
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    };


  },

  setup() {
    // 获取前言和路由数据
    const { frontmatter } = useData();
    const route = useRoute();

    // giscus配置
    giscusTalk({
      repo: 'username/username.github.io', //仓库
      repoId: 'R_kgxxxxxxxx', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_xxxxxxxxxxxxxxxx', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );

  }





} satisfies Theme



