---
title: DL linux 安装anaconda与py包
tags:
  - conda
  - wsl2
  - VSCode
categories:
  - "DL\r"
date: 2025-01-30 01:42:26
abbrlink: 25013001
---

## 安装 anaconda
打开 VPN，并从官网下载最新版本，如 2024.10.1 版本：
```shell
wget https://repo.anaconda.com/archive/Anaconda3-2024.10-1-Linux-x86_64.sh
```

安装
```shell
bash Anaconda3-2024.10-1-Linux-x86_64.sh
```

## 安装 torch
```shell
conda install pytorch torchvision torchaudio pytorch-cuda=12.4 -c pytorch -c nvidia
```

