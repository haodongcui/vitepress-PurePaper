// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/index.css'
import { useData, useRoute } from 'vitepress';
import { inBrowser } from 'vitepress'

// 自定义组件
import BeiAn from './components/BeiAn.vue'   // 备案信息
import Confetti from "./components/Confetti.vue"    // 五彩纸屑
import BackToTop from "./components/BackToTop.vue"  // 返回顶部
import ViewTrans from "./components/ViewTrans.vue"  // 视觉过渡
import DocHeader from "./components/DocHeader.vue"  // 文档头部

import busuanzi from 'busuanzi.pure.js'             // 不蒜子
import Bsz from "./components/BuSuanZi.vue"       // 不蒜子
import giscusTalk from 'vitepress-plugin-comment-with-giscus'; // giscus评论


// 自定义布局
import MyLayout from './layouts/MyLayout.vue';
import PostsList from './layouts/PostsList.vue'
import CategoriesList from './layouts/CategoriesList.vue'
import Categories from './layouts/Categories.vue'
import TagsList from './layouts/TagsList.vue'
import Tags from './layouts/Tags.vue'
import Posts from './layouts/Posts.vue'
import PostsNav from './layouts/PostsNav.vue'

export default {
  // extends: DefaultTheme,
  Layout: () => {
    // return h(DefaultTheme.Layout, null, {
    return h(MyLayout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-before': () => [h(DocHeader)],
      'layout-bottom': () => [h(Bsz), h(BeiAn)], // layout-bottom插槽
      // 'doc-footer-before': () => h(BackToTop), // doc-footer-before插槽
    })
  },


  async enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('Confetti', Confetti);
    app.component('BackToTop', BackToTop);
    app.component('PostsList', PostsList);
    app.component('CategoriesList', CategoriesList);
    app.component('Categories', Categories);
    app.component('TagsList', TagsList);
    app.component('Tags', Tags)
    app.component('PostsNav', PostsNav)
    app.component('Posts', Posts)
    app.component('ViewTrans', ViewTrans)
    app.component('DocHeader', DocHeader)

    // 不蒜子
    if (inBrowser) {
      router.onAfterRouteChange = () => {
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



