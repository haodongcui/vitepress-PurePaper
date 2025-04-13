---
title: Vitepress 文件路径重定向
tags:
  - 博客
  - Vitepress
categories:
  - "技术经验\r"
date: 2024-12-28 12:49:58
abbrlink: 24122812
updated: 2024-10-29 22:49
---

为了文件夹的整洁，不希望在每个文件夹下都单独有一个 `index.md` 文件，而是希望统一在 `/docs/blog-info/` 目录下。

查阅 [官方文档的API列表](https://vitepress.dev/reference/site-config#rewrites)，发现提供了 `rewrites` 选项，完美符合统一单个文件的目的。

```ts
export default {
  rewrites: {
    'path/to/A': 'path/to/B'
  }
}
```
经考察，发现该函数是在生成文档的编译阶段，依据相对 docs 的路径，把 A 文件输出为指定的 B 文件。

我作了如下的文件路径映射
```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  
  // 重定向(相对docsDir,且开头不加/)
  rewrites: {
    'blog-info/home.md': 'index.md',
    'blog-info/essay.md': 'blog-essays/index.md',
    'blog-info/post.md': 'blog-posts/index.md',
  },
```

需要注意的是，在尝试过程中发现，路径开头不能有 / ，否则不生效。