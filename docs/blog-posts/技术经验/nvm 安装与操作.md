---
title: nvm 安装与操作
tags:
  - 计算机
  - nvm
  - nodejs
abbrlink: 20240820
categories:
  - 软件大杂烩
date: 2024-08-20 17:46:27
updated: 2024-09-28 12:56
---

# nvm 安装与操作
## Win11 安装 nvm

参考链接：[node.js - 【工具】用nvm管理nodejs版本切换，真香！ - JavaDog程序狗 - SegmentFault 思否](https://segmentfault.com/a/1190000044661290#item-2-4)

在官网下载 nvm 安装程序
官方 github 地址
[Release v1.1.12 · coreybutler/nvm-windows (github.com)](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.12)

windows 下载 `nvm-setup.exe` 或 `nvm-setup.zip` 都可

路径配置全默认，就不用配置环境变量了，省事

```bash
# 查看可用nodejs的稳定版本
nvm list available
```

>常见问题：
>出现 `Could not retrieve https://nodejs.org/dist/index.json.` 的解决方案
>在安装目录 `C:\Users\20818\AppData\Roaming\nvm` 中打开 `setting.txt`，
>添加两行（配置镜像）
```
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```
>再运行 `nvm list available` 试试



## Ubuntu 安装 nvm

执行安装脚本
```shell
sudo apt install curl 
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
```
环境变量生效
```shell
source ~/.bashrc   
```
检验是否安装成功
```shell
nvm -v
```

### Ubuntu 配置 nvm 镜像

配置镜像参考：[使用nvm管理node多版本（安装、卸载nvm，配置环境变量，更换npm淘宝镜像）_node 版本管理-CSDN博客](https://blog.csdn.net/goods_yao/article/details/137854626)

直接设置镜像源
```shell
npm config set registry https://registry.npmmirror.com
```

修改镜像源
```shell
# 1. 清空缓存
npm cache clean --force
# 2. 切换新源
npm config set registry https://registry.npmmirror.com
# 3. 检查是否设置成功
npm config get registry
```

## nvm 基本操作

```shell
# 查看已安装的nodejs版本(两条命令都可)
nvm list
nvm list installed

# 显示所有可以下载的版本
nvm list available

# 安装指定nodejs版本
nvm install 20.16.0

# 安装最新的可用版本
nvm install node

# 切换为指定版本
nvm use 20.16.0

# 卸载指定版本
nvm uninstall 20.16.0
```


`gitbook` 可以使用 `12.16.3` 版本的 `Node.js`

