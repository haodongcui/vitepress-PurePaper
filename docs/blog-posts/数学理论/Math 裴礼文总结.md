---
title: Math 裴礼文总结
tags:
  - 裴礼文
  - 数学分析
categories:
  - math
abbrlink: 24091515
date: 2024-09-15 15:28:31
updated: 2024-11-07 23:01
---

# 数学归纳法
## 第一数学归纳法
先证 $n=1$ 成立，再证若 $n=k$ 成立，推得 $n=k+1$ 成立
## 第二数学归纳法（完整归纳法）
先证 $n=1$ 成立，再证若 $n\leq k$ 成立，推得 $n=k+1$ 成立
## 反向归纳法
先证对 $\forall n=2^{k}$ 成立，再证若 $n=k+1$ 成立，推得 $n=k$ 成立

$2^k$ 可替换为 $k$ 的无穷序列

# 极限
证明极限的存在性
- $\varepsilon-N$ 定义及其否定
- Cauchy 准则
- 单调有界定理
- 海涅定理
 
求极限的方法
- 等价代换
	- Taylor 公式
	- Stirling 公式
	- 调和级数：对数 + 欧拉常数
- 常用变形
	- 指对变换
	- 分子有理化
	- 连续性将极限拿进去
- 两边夹法则（放缩）
- L'Hospital 法则、Stolz 公式
- 凑积分定义
- 收敛级数
	- 收敛级数通项趋于 0
	- 收敛级数余项趋于 0
	- 作差构建级数 $x_{n}=\sum_{i=2}^{\infty}(x_{i}-x_{i-1})+x_{1}$，判断 $\sum_{i=2}^{\infty}|x_{i}-x_{i-1}|$ 的收敛性，加之 M 判别法
- 罕见：$e^{ t }$ 乘积先求导再积分构造


## Stirling 公式
$$
n! = \sqrt{ 2\pi n } (\frac{n}{e})^{n}e^{ \frac{\theta_{n}}{12n} },\quad 0\leq\theta_{n}\leq 1
$$

## Wallis 公式
$$
\begin{align}
I_{n} & = \int_{0}^{\frac{\pi}{2}}\sin^nx\mathrm{d}x = \int_{0}^{\frac{\pi}{2}}\cos^nx\mathrm{d}x =
\begin{cases}
\frac{(n-1)!!}{n!!} \frac{\pi}{2} & n \text{为偶数} \\
\frac{(n-1)!!}{n!!}  & n \text{为奇数} \\
\end{cases}
\end{align}
$$

$$
I_{m,n} = \int_{0}^{\frac{\pi}{2}} \sin^mx \cos^nx\mathrm{d}x = 
\begin{cases}
\frac{(m-1)!!(n-1)!!}{(m+n)!!} \frac{\pi}{2} & m,n \text{均为偶数} \\
\frac{(m-1)!!(n-1)!!}{(m+n)!!} & \text{其他} \\
\end{cases}
$$


## 调和级数（欧拉级数）
$$
\sum_{k=1}^{n} \frac{1}{k} = \ln n + C + \varepsilon_{n}, \quad\lim_{ n \to \infty } \varepsilon_{n}=0
$$
其中 $C$ 为欧拉常数。

两边夹法则
- 方法一
	- 放大：每个都放到最大
	- 放小：只要最大的一个
	- 这样可以都向同一个方向放缩
- 方法二
	- 平均值放缩
	- 调和，几何，算数，平方
- 方法三
	- 反用拉格朗日公式，对 $\xi$ 放缩

## 常用 Taylor 公式
$$
\begin{align}
& e^{x}=\sum_{n=0}^{\infty}\frac{x^{n}}{n!}=1+\frac{x}{1!}+\frac{x^{2}}{2!}+\cdots\\ \\
& \cos x=\sum_{n=0}^{\infty}\frac{(-1)^{n}}{(2n)!}x^{2n}=1-\frac{x^{2}}{2!}+\frac{x^{4}}{4!}+\cdots\\ \\
& \sin x=\sum_{n=0}^{\infty}\frac{(-1)^{n}}{(2n+1)!}x^{2n+1}=x-\frac{x^{3}}{3!}+\frac{x^{5}}{5!}+\cdots\\ \\
& \ln(1+x)=\sum_{n=0}^{\infty}(-1)^{n}\frac{x^{n+1}}{n+1}=x-\frac{x^{2}}{2}+\frac{x^{3}}{3}+\cdots\\ \\
& (1+x)^{\alpha}=\sum_{n=0}^{\infty}C_{\alpha}^{n}x^{n}=1+\frac{\alpha}{1!}x+\frac{\alpha(x+1)}{2!}x^{2}+\cdots\\
\end{align}
$$

无穷阶次比较
令 $0<\theta<1,k\in \mathbb{N},a>1$,当 $n\to \infty$ 时
$$
\ln \ln n\ll \ln n\ll n^{\theta}\leq n^{k}\ll a^{n}\ll n!\ll n^{n}
$$

# 实数基本定理

1. 确界原理
2. 单调有界原理
3. Cauchy 准则
4. 致密性定理
5. 聚点定理
6. 区间套定理
7. 有限开覆盖定理
8. Dedekind 分割定理

# 连续性

连续性的证明
- 利用定义
- 左、右极限与值相等
- 反证法使用序列语言
- 邻域语言

连续性 $\implies$ 介值性
介值性 + 单射 $\implies$ 严格单调且连续

一个间断点的例子
$$
\begin{align}
& f(x) = x^{2} \sin\left( \frac{1}{x} \right) \\ \\
& f'(x) = 2x\sin\left( \frac{1}{x} \right) - \cos\left( \frac{1}{x} \right)
\end{align}
$$

$f(x)$ 在 0 处是可去间断点，$f'(x)$ 在 0 处是第二类间断点（在 0 处左右两侧均没有单侧极限）

一致连续性的证明：
- 导函数 $f'$ 有界 $\implies$Lipschitz 条件 $\implies$ 一致连续性
- 反证法 + 定义的否定形式构造序列


Cantor 定理：
闭区间上的连续函数必定一致连续

# 一元微分学

导数的证明与计算：
- 导数定义、定义展开式
- 在一点处导数存在等价于左右导数存在且相等
- 导数极限定理
- 导数处处存在意义下，导数无第一类间断点

高阶导数
- Leibniz 公式
- 数学归纳法
- 构造递推方程
- Taylor 展开式

Leibniz 公式：
$$
(uv)^{(n)}=\sum_{k=0}^{n} \binom{n}{k} u^{(k)} v^{(n-k)}
$$

一些高阶导数
$$
\begin{align}
(\sin x)^{(n)} = \sin\left( x+\frac{n\pi}{2} \right) \\
(\cos x)^{(n)} = \cos\left( x+\frac{n\pi}{2} \right)
\end{align}
$$
 
特殊小技巧：
例 3.1.7：根据导数定义，构造 $\sum_{k=1}^{n}(\frac{x}{2^{k-1}}-\frac{x}{2^{k}})$ 两两相消

微分中值定理及相关证明：
- Rolle 中值定理
- Lagrange 中值定理
- Cauchy 中值定理
- 构造辅助函数
- 联系了原函数与导函数的关系
- Fermat 定理
- 若是关于 $f(x)$ 的证明，可由 $f(x\pm h)或f(b)$ 在 $f(x)$ 处 Taylor 展开

Rolle 定理推其他两个定理，可以通过构造行列式形式的辅助函数 $F(x)$ 来证明证明
$$
F(x)=\left|\begin{matrix}
f(a) & g(a) & h(a) \\
f(b) & g(b) & h(b) \\
f(x) & g(x) & h(x)
\end{matrix}\right|
$$

不等式证明：
- 单调性放缩
- 微分中值定理
- 数列：利用微分中值定理构造差分相消结构
- Taylor 公式
- 求极值
- 单调极限
- 凹凸性
 
凸函数
- 任意內闭子区间有界
- 任意内闭子区间满足 Lipschitz 条件

# 一元积分学

积分的计算及证明
- 拆分区间（一段函数有界、区间长度区域 0，一段区间长度有限、函数一致趋于 0）
- 平移伸缩区间至 $[0,1]$，方便计算
- 注意区分各量的独立性，看时机赋值

黎曼可积
- 黎曼积分定义
- 振幅和任意小
- 异常振幅的区间长度任意小

可积性性质及一些证明方法
- 闭区间上可积函数的连续点处处稠密


>**反常积分收敛性**
>
>定号
>>M 比较判别法
>>变上限积分有界
>
>变号但单调
>>Dirichlet：g 单调趋于 0 且 f 变上限积分有界
>>Abel：g 单调有界且 f 无穷级数收敛（f 变上限积分极限存在）
>
>基本方法
>>定义、Cauchy、运算性质
>>分部积分或变量代换转为别的式子


## 有理函数求积分（待）

# 级数

一致连续性
- 定义
- Cauchy 准则
- 余项 放大法
- 确界法
- 反证 + 序列

$$
(1-x)^{-\frac{1}{2}} = \sum_{i=1}^{\infty} \frac{(2n-1)!!}{(2n)!!} x^n , \quad |x|<1
$$

## 一致收敛（待）



# 不等式专题
>乘积到乘积：Cauchy 不等式 -> Holder 不等式 
>加法到加法：三角不等式 -> Minkowski 不等式
>乘积到加法：均值不等式 -> Young 不等式
>
>Cauchy 不等式
$$
||(x,y)|| \le ||x|| ||y||
$$

>Holder 不等式
$$
||fg||_{1} \le ||f||_{p} ||g||_{q}
$$

>Minkowski 不等式
$$
||f+g||_{p} \le ||f||_{p} + ||g||_{p}
$$



Young 不等式
$$
ab \le \frac{1}{p} a^{p} + \frac{1}{q} b^{q}
$$
Young 不等式（推广）
$$
ab \le \int_{0}^{a} f(x)dx + \int_{0}^{b} f^{-1}(y)dy
$$
其中, $f:\mathbb{R}\to \mathbb{R}$ 连续其严格单调递增, $f(0)=0$.


Cauchy 不等式（连续）
$$
\Big(\int_{a}^{b} f(x)g(x)\mathrm{d}x \Big)^{2}
\le
\Big( \int_{a}^{b}f(x)^2 \Big)^{ \frac{1}{2} }
\Big( \int_{a}^{b}g(x)^2 \Big)^{ \frac{1}{2} }
$$

Holder 不等式（连续）
$$
\int_{\Omega} f(x)g(x)\mathrm{d}x
\le
\left(  \int_{\Omega} |f(x)|^p \mathrm{d}x \right)^{ \frac{1}{p} }
\left(  \int_{\Omega} |g(x)|^q \mathrm{d}x \right)^{ \frac{1}{q} }
$$
其中 $p>1,\frac{1}{p}+\frac{1}{q}=1$

Minkowski 不等式（连续）
$$
\Big( \int_{\Omega} ( f(x)+g(x) )^p \mathrm{d}x \Big)^{\frac{1}{p}}
\le
\Big( \int_{\Omega} f^p(x) \mathrm{d}x \Big)^{\frac{1}{p}}
+
\Big( \int_{\Omega} g^p(x) \mathrm{d}x \Big)^{\frac{1}{p}}
$$


Holder 不等式（离散）
$$
\sum_{i=1}^n a_{i}b_{i}
\le
\left( \sum_{i=1}^n a_{i}^p \right)^{\frac{1}{p}}
\left( \sum_{i=1}^n b_{i}^q \right)^{\frac{1}{q}}
$$
其中 $p>1,\frac{1}{p}+\frac{1}{q}=1$


# 多元函数

多元函数求极限
- 两边夹法则
- 变量替换，转为一元函数
- 极坐标
- 初等变形
- 若能事先看出极限，可用 $\varepsilon-N$ 方法证明



# Stokes 公式

$$
\int_{d\Omega} \omega = \int_{\Omega} d\omega
$$

## Green 公式

$$
\int_{\partial\Omega} Pdx+Qdy = \int_{\Omega} \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dxdy
$$

# 随时补充

凸函数在开区间上连续.

相容线性方程组指的是方程有解，即有唯一解或无穷多解，不相容即指无解.

