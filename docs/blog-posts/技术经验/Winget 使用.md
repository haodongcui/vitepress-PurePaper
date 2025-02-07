---
title: Winget 使用
tags:
  - 计算机
  - Win11
categories:
  - 计算机大杂烩
date: 2024-10-29 21:46:17
abbrlink: 24102921
created: 2024-10-29T22:04
updated: 2024-10-31 19:02
---

## 切换源

以管理员权限运行终端，
切换 `winget` 源为 `USTC` 镜像
```shell
winget source remove winget
winget source add winget https://mirrors.ustc.edu.cn/winget-source
```

重置为微软官方源：
```shell
winget source reset winget
```


## 搜索软件

```shell
winget search <软件名称/关键词>
```

## 安装软件

```shell
winget install <软件名称>
```

## 卸载软件

```shell
winget uninstall <软件名称>
```

## 更新软件

```shell
winget upgrade <软件名称>
```

## 查看已安装软件

```shell
winget list
```

