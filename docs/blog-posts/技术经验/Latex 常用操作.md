---
title: Latex 常用操作
tags:
  - Latex
  - 常用命令
categories:
  - 编程及专业软件
date: 2024-7-31 22:47:30 +0800
abbrlink: e2cd5a67
updated: 2024-11-21 00:40
---


## 导言区
```latex
% 文档类
\documentclass[13pt]{article}
% 中文宏包
\usepackage{ctex}
% 设置页面
\usepackage{geometry}
% 插图片
\usepackage{graphicx}
% 子图并排
\usepackage{subfigure}
% 设置标题 重命名为英文
\renewcommand{\figurename}{Figure}
\renewcommand{\tablename}{Table}
\renewcommand{\contentsname}{Contents}
% 设置摘要页缩减 
\usepackage{changepage}
% 便于修改字体
\usepackage{fontspec}
% 设置页眉页脚
\usepackage{fancyhdr}
% 清空页眉页脚
\pagestyle{fancy}
% 设置列表缩进
\usepackage[shortlabels]{enumitem}
% 设置修改默认的section标题大小、粗细
\usepackage{titlesec}
\titleformat*{\section}{\LARGE\bfseries}
\titleformat*{\subsection}{\Large\bfseries}
\titleformat*{\subsubsection}{\Large\bfseries}
% 添加书签,实现pdf跳转功能
\usepackage{hyperref}
\hypersetup{hidelinks,
	colorlinks=true,
	allcolors=black,
	pdfstartview=Fit,
	breaklinks=true
}
% 使用数学宏包
\usepackage{amsmath}
% 设置表格的列格式
\usepackage{array}
% 三线表宏包
\usepackage{booktabs}
% 设置产考文献不输出默认名
\usepackage{etoolbox}
\patchcmd{\thebibliography}{\section*{\refname}}{}{}{}
% 引入网站作为参考文献
\usepackage{url}
% 设置等宽的代码字体
\setmonofont{Courier New}
% 颜色
\usepackage{xcolor}
% 代码高亮方案宏包
\usepackage{listings}
\definecolor{CPPLight}  {HTML} {686868}
\definecolor{CPPSteel}  {HTML} {888888}
\definecolor{CPPDark}   {HTML} {262626}
\definecolor{CPPBlue}   {HTML} {4172A3}
\definecolor{CPPGreen}  {HTML} {487818}
\definecolor{CPPBrown}  {HTML} {A07040}
\definecolor{CPPRed}    {HTML} {AD4D3A}
\definecolor{CPPViolet} {HTML} {7040A0}
\definecolor{CPPGray}  {HTML} {B8B8B8}
```


## 字符
```latex
%花体
\mathcal{R}

%希腊字母
\varepsilon %伊普西龙
```
![](https://cdn.nlark.com/yuque/__latex/903be6f861bace4034113178118962e7.svg#card=math&code=%25%E8%8A%B1%E4%BD%93%0A%5Cmathcal%7BR%7D%0A%0A%25%E5%B8%8C%E8%85%8A%E5%AD%97%E6%AF%8D%0A%5Cvarepsilon%20%25&id=OGw7Z)

## 自定义 hypothesis 环境
```latex
% 定义新的定理样式
\newtheoremstyle{Hstyle}% name
{3pt}% Space above
{3pt}% Space below
{\itshape}% Body font
{}% Indent amount
{\bfseries}% Theorem head font
{.}% Punctuation after theorem head
{ }% Space after theorem head
{\thmname{#1}\thmnumber{(#2)}}

% 应用新的定理样式
\theoremstyle{Hstyle}
\newtheorem{hypothesis}{}

% 设置自动编号样式
\renewcommand{\thehypothesis}{H\arabic{hypothesis}}
```


## 长度尺寸
在 LaTeX 中，有很多不同的长度单位和尺寸参数用于排版。以下是一些常用的长度单位和尺寸参数的说明及其使用方法：### 尺寸参数

1. `\linewidth`
   - 表示当前环境的宽度。例如，在 `document` 环境中，它表示页面正文的宽度，而在 `minipage` 或 `parbox` 环境中，它表示这些框的宽度。
   - 用途：调整元素的宽度以适应当前环境。
   - 示例：
```latex
\begin{center}
\rule{\linewidth}{1mm}
\end{center}
```

1. `\textwidth`
   - 表示文本区域的宽度，通常指页面正文的宽度（不包括页边距）。
   - 用途：定义表格或图片的宽度，以适应页面的文本宽度。
   - 示例：
```latex
\includegraphics[width=\textwidth]{example-image}
```

1. `\textheight`
   - 表示文本区域的高度，通常指页面正文的高度（不包括页眉和页脚）。
   - 用途：设置图片或表格的高度。
   - 示例：
```latex
\includegraphics[height=\textheight]{example-image}
```

1. `\columnwidth`
   - 表示当前列的宽度。在单栏文档中，它等于 `\textwidth`，在双栏文档中，它等于单栏的宽度。
   - 用途：调整多栏文档中元素的宽度。
   - 示例：
```latex
\begin{figure*}
\includegraphics[width=\columnwidth]{example-image}
\end{figure*}
```
### 长度单位

1. `pt`**（point）**
   - 点（pt），LaTeX 中最基本的长度单位，1 pt = 1/72.27 英寸。
   - 用途：设置字体大小、行间距等。
   - 示例：
```latex
\fontsize{12pt}{14pt}\selectfont
```

1. `cm`**（centimeter）**
   - 厘米（cm）。
   - 用途：设置元素的宽度、高度或其他尺寸。
   - 示例：
```latex
\setlength{\parindent}{1cm}
```

1. `mm`**（millimeter）**
   - 毫米（mm）。
   - 用途：设置较小尺寸的元素。
   - 示例：
```latex
\setlength{\fboxsep}{3mm}
```

1. `in`**（inch）**
   - 英寸（in）。
   - 用途：设置元素的宽度、高度或其他尺寸。
   - 示例：
```latex
\setlength{\textwidth}{6.5in}
```

1. `ex`
   - `ex` 单位是当前字体中小写字母 "x" 的高度。
   - 用途：与字体大小相关的布局调整。
   - 示例：
```latex
\setlength{\parskip}{1ex}
```

1. `em`
   - `em` 单位是当前字体的宽度，通常等于大写字母 "M" 的宽度。
   - 用途：与字体大小相关的布局调整。
   - 示例：
```latex
\setlength{\parindent}{2em}
```
### 使用示例
以下是一个综合示例，展示了如何在 LaTeX 中使用这些尺寸参数和单位：
```latex
\documentclass[12pt]{article}
\usepackage{graphicx}

\begin{document}

% 使用 \linewidth 设置一个宽度为当前环境宽度的水平线
\noindent\rule{\linewidth}{1pt}

% 插入一个宽度为 \textwidth 的图片
\includegraphics[width=\textwidth]{example-image}

% 使用 \textheight 设置一个宽度为当前文本高度一半的图片
\includegraphics[height=0.5\textheight]{example-image}

% 使用 \columnwidth 设置一个宽度为当前列宽度的图片
\includegraphics[width=\columnwidth]{example-image}

% 设置段落缩进为 1 cm
\setlength{\parindent}{1cm}
This is a paragraph with a 1 cm indentation.

% 设置段落间距为 1 ex
\setlength{\parskip}{1ex}
This is a paragraph with a 1 ex space between paragraphs.

\end{document}
```
通过理解和使用这些尺寸参数和单位，可以更灵活地控制 LaTeX 文档的排版和布局。

## 表格宽度控制
```latex
	%\usepackage{array} 详细控制居中与列宽
	
	\begin{table}[htbp]
		\centering
		\label{tabel:符号说明}

		\begin{tabular}{
				>{\centering\arraybackslash}p{\textwidth/3}
				>{\centering\arraybackslash}p{\textwidth/3}
				}
			\toprule
			符号 & 意义 \\
			\midrule
			$Q_i$ & 品类$i$的总销量 \\
			$P_I$ & 品类$i$的平均销量 \\
			\bottomrule
		\end{tabular}
	\end{table}
```

## 并排图片
```latex
\begin{figure}[htbp]
    \centering
    \subfigure[图1的标题]{
        \includegraphics[width=0.45\textwidth]{example-image-a}
        \label{fig:subfig1}
    }
    \hspace{0.05\textwidth}
    \subfigure[图2的标题]{
        \includegraphics[width=0.45\textwidth]{example-image-b}
        \label{fig:subfig2}
    }
    \caption{两个图并排显示的示例}
    \label{fig:subfigures}
\end{figure}
```


## VSCode 暗黑预览
VSCode 的 LaTeX Workshop 插件, 如果要切换为暗色主题，可更改设置:
```json
"latex-workshop.view.pdf.theme": "dark",
"latex-workshop.view.pdf.invert": 0.89
```

## align 与 aligned 多行公式
1. align 环境：
- 直接用于排列多行公式。
- 每行公式默认都有自己的编号（除非使用\nonumber 或\notag 命令禁用）。
- 通常不嵌套在 equation 环境中使用，因为 equation 环境是为单一公式设计的。
2. aligned 环境：
- 通常用作其他数学环境（如 equation）内的子环境，用于对齐一组公式。
- 不会为公式组中的每行公式生成独立的编号。整个 aligned 块在外部环境的控制下作为一个单元来编号。
- 常见的用法是将 aligned 嵌套在 equation 环境中，以便为整个公式块生成单一编号。

参考链接：[# latex aligned环境和align环境 区别](https://blog.csdn.net/HaoZiHuang/article/details/136344346)

## 组合数

```
\binom{n}{k}
```
$$
\binom{n}{k}
$$

# Latex 常用操作
$\tilde{x}$
$\subset$
$\supset$
