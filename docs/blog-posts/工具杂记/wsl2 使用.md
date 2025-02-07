---
title: wsl2 使用
tags:
  - 计算机
  - wsl2
  - Linux
  - Ubuntu
abbrlink: 20240821
categories:
  - 计算机大杂烩
date: 2024-08-21 09:43:45
updated: 2024-10-13 17:58
---

操作系统：Windows11

在任务栏搜索栏中，搜索“功能”，打开“启用或关闭 Windows 功能”，开启“适用于 Windows 的 Linux 子系统”和“虚拟化平台”，开启后会提示重启电脑，重启即可。

### 安装

打开终端，安装（默认是 `Ubuntu`）
```shell
wsl --install
```

Linux 输入密码时，是不显示的，输入正确按回车即可

### 查看已安装的子系统
查看已安装的子系统
```shell
wsl --list -v
```
可简写为
```shell
wsl -l -v
```


### 查看可安装的发行版
查看可安装的发行版
```shell
wsl --list --online
```
可简写为
```shell
wsl -l --online
```

下载指定的发行版（比如 `kali-linux` 是可安装的发行版，现安装它作演示）
```shell
wsl --install kali-linux
```


### 卸载
卸载 `kali-linux`
```shell
wsl --unregister kali-linux
```

查看现有子系统
```shell
wsl -l -v
```

### 备份与恢复

导出 `Ubuntu` 子系统至目前所在目录的 `ubuntu.tar`
```shell
wsl --export Ubuntu ubuntu.tar
```

从 `ubuntu.tar` 的路径导入，并命名为 `Ubuntu2`
```shell
wsl --import Ubuntu2 E:\Desktop\ubuntu.tar
```

查看现有子系统
```shell
wsl -l -v
```

### 退出子系统

进入子系统后，退出回到命令行
```shell
exit
```

### 关闭子系统

关闭所有子系统
```shell
wsl --shutdown
```

查看现有子系统状态
```shell
wsl -l -v
```


## 图形界面

[wsl安装ubuntu并设置gnome图形界面详细步骤（win11+ubuntu18）_wslubuntu图形界面-CSDN博客](https://blog.csdn.net/m0_51194302/article/details/127891929)

