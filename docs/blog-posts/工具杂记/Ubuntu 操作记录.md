---
title: Ubuntu 操作记录
tags:
  - 计算机
abbrlink: 20240821
categories:
  - 计算机大杂烩
date: 2024-08-21 10:05:58
updated: 2024-10-13 17:01
---

### 基础操作
```shell
# 查看当前路径
pwd

# 查看所在目录下的文件列表
ls
ls -a # 显示隐藏文件
ls -l # 显示详细信息

# 切换路径
cd [path]



```


## 自动换源 -chsrc

[chsrc: 全平台命令行换源工具 chsrc，目标支持 Linux (包括麒麟、openEuler、deepin 等), Windows, macOS, BSD 等尽可能多的操作系统，龙芯、飞 (gitee.com)](https://gitee.com/mirrors/chsrc)

安装 (x64)
```bash
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-linux -o chsrc; chmod +x ./chsrc
```

运行换源命令
```bash
sudo ~/chsrc set ubuntu
```

## firefox 浏览器

安装 firefox 浏览器
```text
sudo apt update 
sudo apt upgrade
sudo apt install firefox
```

**firefox 中文乱码**
将 wsl2 的子系统与 win11 的字体文件进行软链接
```bash
# to differentiate self-built font links from system font files 
sudo mkdir /usr/share/fonts/win11
sudo ln -s /mnt/c/Windows/Fonts/* /usr/share/fonts/win11
```


## 宝塔

```bash
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh -y
```

