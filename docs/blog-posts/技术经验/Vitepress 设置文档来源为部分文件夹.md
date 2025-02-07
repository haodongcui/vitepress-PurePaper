---
title: Vitepress 设置文档来源为部分文件夹
tags:
  - Vitepress
  - 博客
categories:
  - "技术经验\r"
date: 2024-12-28 12:36:14
abbrlink: 24122812
updated: 2024-10-29 22:49
---

为防止泄露隐私，通常只想让 vitepress 编译 docs 文件夹下的部分文件夹中的文档。

考察 [官方文档的 API 列表](https://vitepress.dev/reference/site-config#srcexclude)，发现提供了 `srcExclude` 选项，即提供排除的文件列表，而我们想要的是仅保留给定的文件列表，对此我们需要实现获取 docs 文件夹下指定文件 (夹) 列表之外的文件 (夹) 列表，定义 `getOtherDirs` 并引入 `config.mts`，代码如下


```js
// .vitepress/utiles/getOtherDirs.js
import fs from 'fs';
import path from 'path';

/**
 * 获取/docs目录下的其他文件夹
 * @param {string[]} dirList 指定的文件夹路径列表
 * @returns {string[]} 剩余的文件夹路径
 */

export function getOtherDirs(dirList) {
    // 定义/docs目录的路径
    const nodeJsPath = process.cwd();
    const docsDir = path.join(nodeJsPath, 'docs');

    // 获取/docs目录下的所有内容
    const allDirs = fs.readdirSync(docsDir);

    // 过滤出文件夹并排除给定的路径
    const otherDirs = allDirs.filter(dir => {
        const fullDirPath = path.join(docsDir, dir);
        // 确保是文件夹并且不在排除列表中
        return fs.statSync(fullDirPath).isDirectory() && !dirList.includes(`/${dir}`);
    });
	
	// 查看返回结果
    // console.log(otherDirs);

    // 返回剩余的文件夹路径
    return otherDirs;
}
```


```ts
// .vitepress/config.mts
import { getOtherDirs } from './utiles/getOtherDirs.js';  // 导入获取其他文件夹的函数

export default defineConfig({
  srcExclude: getOtherDirs(['/blog-info', '/blog-posts', '/blog-essays']),
  themeConfig: {...},
}
```

