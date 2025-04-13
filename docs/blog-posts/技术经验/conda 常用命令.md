---
title: conda 常用命令
tags:
  - 常用命令
  - conda
  - Anaconda
  - 软件使用
categories:
  - 编程及专业软件
date: 2024-07-31 21:06:50 +0800
abbrlink: 80c16b3c
updated: 2024-09-28 13:07
---


# conda 命令
## 环境管理
```shell
# 查看环境配置
conda config --show

# 查看虚拟环境列表
conda env list
conda info --env
conda info -e

# 创建虚拟环境
conda create -n env_name python=3.8

# 克隆虚拟环境(克隆A，创建B)
conda create -n B --clone A

# 激活虚拟环境
conda activate env_name

# 退出虚拟环境
conda activate
conda deactivate

# 删除虚拟环境
conda remove --name env_name --all

# 删除某环境的某包
conda remove --name env_name package_name

# 导出环境
conda env export --name env_name > env_name.yml

```


## 包管理
```shell
# 查询当前环境的包
conda list
# 查询源中是否有包
conda search package_name

# 当前环境安装包
conda install package_name
conda install package_name -c conda_forge(指定源)
conda install numpy=0.20.3
# 更新包
conda update package_name
# 卸载包
conda unstall package_name

# python版本管理
# 更新python指定版本
conda install python=3.5
# 更新python最新版本
conda update python

```


## 源管理
```shell
# 查询源(两条命令选其一即可)
conda config --get channels
conda config --show channels

# 追加源
conda config --add channels conda-forge

# 移除源
conda config --remove channels conda-forge

# pip设置源
# 设置清华源
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

```


## 包整理
```shell
# 必要包
os
numpy
pandas
matplotlib
scipy
seaborn
scikit-learn
jupyter notebook

# 机器/深度学习
tensorflow-gpu
keras

# 命令
conda install numpy pandas matplotlib scipy seaborn scikit-learn openpyxl
conda install jupyter notebook
# 或
pip install numpy pandas matplotlib scipy seaborn scikit-learn openpyxl
pip install jupyter notebook

# 可能注意
conda install openpyxl
```


# 特别注意
## tensorflow-gpu 安装
注意对应关系
tensorflow-gpu
![image.png](conda%20常用命令/IMG-conda%20常用命令-20250119010934590.png)
```shell
conda install tenforflow-gpu=2.6.0
conda install keras=2.6.0
```

## pytorch 安装
ptorch
![image.png](conda%20常用命令/IMG-conda%20常用命令-20250119010934601.png)
![image.png](conda%20常用命令/IMG-conda%20常用命令-20250119010934637.png)
```shell
conda install pytorch torchvision torchaudio pytorch-cuda=12.1 -c pytorch -c nvidia
```

## cvxpy 注意事项
cvxpy
python=3.7.2
```shell
conda install -c conda-forge lapack
conda install -c cvxgrp cvxpy
```

## .condarc 文件
```txt
.condarcchannels:
  - [https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/](https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/)
  - [http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/](http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/)
  - [http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/](http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/)
  - [http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free](http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free)
  - [http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r](http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r)
  - [http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/pro](http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/pro)
  - [http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2](http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2)
  - default
envs_dirs:
  - D://04_App_tech//Anaconoda//envs
  ```
