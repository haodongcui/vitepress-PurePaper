---
title: Git 常用操作
tags:
  - Git
  - 软件使用
abbrlink: 20240809a
categories:
  - 软件大杂烩
date: 2024-08-09 20:00:09
updated: 2024-11-03 22:31
---

# 下载项目

### 初始化 `.Git`
```bash
git init
```

### 添加库
```bash
git remote add origin 源码地址
```

### 将库里的代码下载到本地
```bash
git pull origin main
```

# 配置更新

### 配置更新地址
```bash
git remote add upstream 想要拉取更新的库
```
依据此库来对本地代码进行更新


### 查看当前仓库的远程仓库地址和原仓库地址
```bash
git remote -v
```

### 获取更新
```bash
git fetch upstream
```

### 将更新代码和本地代码合并
```bash
git merge upstream/master
```


# 报错及相关链接


fatal: unable to access 'https://github.com/ver-gas/Mathematical-modeling.git/': Failed to connect to github.com port 443 after 21274 ms: Couldn't connect to server

参考链接：[完美解决 git 报错 “fatal: unable to access ‘https://github.com/.../.git‘: Recv failure Connection was rese-CSDN博客](https://blog.csdn.net/qq_43546721/article/details/139506583)



[浅析.gitignore文件不起作用的原因及其解决办法 - 古兰精 - 博客园 (cnblogs.com)](https://www.cnblogs.com/goloving/p/15017769.html#:~:text=%E6%B5%85%E6%9E%90.gitigno#:~:text=%E6%B5%85%E6%9E%90.gitigno)



## git 代理问题

参考链接：[开启了代理，但是git仍然连接拒绝的解决方法_git设置代理不起作用-CSDN博客](https://blog.csdn.net/wtl1992/article/details/131743283)

windows 中 git 默认不会使用系统代理

**设置代理命令：**

```bash
# 配置socks5代理
git config --global http.proxy socks5 127.0.0.1:7890
git config --global https.proxy socks5 127.0.0.1:7890
 
# 配置http代理
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
```

**查看代理命令：**
```bash
git config --global --get http.proxy
git config --global --get https.proxy
```

**取消代理命令:**
```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```


# 本地连接仓库并推送

## 本地连接仓库
```bash
git init
git remote add origin <远程仓库地址>
git checkout -b main # 设置分支为main
```

## 推送
```bash
git add .
git commit -m "<message>"
git push origin main
```

或强制推送覆盖
```bash
git add .
git commit -m "<message>"
git push -f origin main
```
其中 `-f` 全拼为 `--force`

