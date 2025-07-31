## vitepress-pure-blog

- [repo](https://github.com/haodongcui/vitepress-pure-blog)
- [demo](https://haodongcui.github.io/blog)

[vitepress-pure-blog](https://github.com/haodongcui/vitepress-pure-blog), 自制的一个简洁且漂亮的 vitepress 博客.

![preview of dark mode](./preview2025-2-8.png)

该博客, 使用 vitepress 搭建, 仅在默认主题的基础上进行了修改, 自定义了布局样式, 实现了个人博客的大部分功能, 暂未导出主题配置文件.



## 功能

### 已实现的功能
除了默认主题的功能外, 已实现了以下功能:
- [x] 数学公式(插件)
- [x] 导航栏毛玻璃效果
- [x] 代码块mac样式
- [x] 内容与开发分离的文件结构, 使用 Obsidian 作为 "后端" (haha)
- [x] 附了一个我喜欢的 obsidian 主题, 见 `docs/.obsidian/snippets/`.
- [x] 首页
- [x] 文章列表
- [x] 分类页面
- [x] 标签页面
- [x] 评论系统(仅giscus)
- [x] 文章顶部 `标题` / `时间` / `分类` / `标签` 展示
- [x] 侧边栏目录宽度自适应


> [!TIP]特点：
> 文章列表的实现 
> 适配于 obsidian 的文件结构
> 样式简洁明了.



## 使用

工具: `Git` / `NodeJs` / `pnpm`(可选) / `Obsidian`

```bash
git clone https://github.com/haodongcui/vitepress-blog-ob.git
```

安装依赖
```bash
pnpm install
```

启动项目预览
```bash
pnpm dev
```

或其他如`npm` / `yarn` 都可.

## obsidian 使用

以 `docs/` 目录为 `obsidian` 仓库的根目录, 

只有其中的 `blog-posts/`, `blog-essays/`, `blog-info` 三个文件夹会打包发布 `github pages`,

`docs/` 下的其他文件夹、文件, 均不会发布, 故可以用来存放一些不想公开的内容, 如日记等.



## 碎碎念

>从一个未接触过前端、看不懂文档的小白, 到能自定义一个博客, 这一路真的很惊奇。
>体验过的一些常见的博客框架: [Jekyll](https://jekyllcn.com/docs/home/), [Hexo](https://hexo.io/zh-cn/), [Gitbook](https://www.gitbook.com/), [Vuepress](https://vuepress.vuejs.org/zh/), [Vitepress](https://vitepress.dev/zh/), [Astro](https://astro.build/), 入门了 Git, Html, Css, Js, Nodejs, Vue, Astro

为什么选择 [vitepress](https://vitepress.dev/zh/) 呢? 
- 一是, 功能丰富, 可定制性强, 相对 Jekyll, Gitbook 来说.
- 二是, 轻便, 现代, 相比 Hexo 来说.
- 三是, 它未来可期, 相比 Vuepress 来说, hahaha.
- 四是, 它的构建产物是一个单页面应用`SPA`, 页面之间无缝切换, 这是相比 Astro 来说, 我更喜欢的一点, 但是初次加载确实不如 Astro 快


## 参考

- vitepress 官方文档: [vitepress 官方文档](https://vitepress.dev/zh/)
- vitepress 插件汇总: [来自 yiov.top 的插件汇总](https://vitepress.yiov.top/plugin.html)
- 文章列表实现参考: [vitepress-blog-pure](https://github.com/airene/vitepress-blog-pure)
- 文章列表实现参考: [文章列表](https://juejin.cn/post/6896382276389732359)
- Astro视频教程: [水哥澎湃的 astro bilibili视频教程](https://www.bilibili.com/video/BV1Y44y1o7zC/?spm_id_from=333.999.0.0&vd_source=6c5d9f6d5c8c5d9f6d5c5d9f6d5c5d9f)
- 配色参考: [charm | astro](https://astro-charm.vercel.app/)
- Github secrets 配置参考: [Github Actions 入门](https://zhuanlan.zhihu.com/p/364366127)
