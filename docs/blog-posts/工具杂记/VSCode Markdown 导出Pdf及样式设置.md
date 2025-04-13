---
title: VSCode Markdown 导出Pdf及样式设置
tags:
  - 简历制作
  - VSCode
  - Markdown
abbrlink: 20240808a
categories:
  - 软件大杂烩
date: 2024-08-08 18:05:18
updated: 2024-09-28 12:56
---

 

## 导出 Pdf

1. 下载并安装 Markdown Pdf 插件
2. 在 md 文件中，右键点击：`Markdown Pdf: Export(pdf)`

## 样式设置

1. 在 [Typora主题](https://www.typora.net/themes/) 中选择自己喜欢的主题，并下载 `css` 样式文件
2. 打开 VSCode 配置文件（设置的右上角）`settings.json`，添加下面这行代码
```json
"markdown-pdf.styles": ["E:\\05_bib\\misty-light-windows.css"],
```
其中 `E:\\05_bib\\` 为我放置样式文件的路径，`misty-light-windows.css` 为我的样式文件

## 参考资料

- [VSCode之Markdown导出PDF——使用插件Markdown PDF及css美化](https://blog.csdn.net/qq_34243930/article/details/107815936)

- [VSCode Markdown pdf 调整输出格式](https://blog.csdn.net/weixin_39278265/article/details/112552773)

- [Typora主题](https://www.typora.net/themes/)

- [朦胧主题](https://www.typora.net/11.html)