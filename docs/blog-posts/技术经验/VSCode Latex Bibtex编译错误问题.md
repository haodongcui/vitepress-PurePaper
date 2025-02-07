---
title: VSCode Latex Bibtex编译错误问题
tags:
  - VSCode
  - Latex
categories:
  - "技术经验\r"
date: 2025-01-20 16:08:18
abbrlink: 25012016
updated: 2024-10-29 22:49
---

## biber 格式

如果你使用的是 biber 格式的文献引用方法，如下
```latex
\documentclass{article}
\usepackage[backend=biber,style=ieee]{biblatex}
\addbibresource{references.bib} % 指定 .bib 文件

\begin{document}
	The method from \cite{BarbalatLemma} is OK!
	\printbibliography
\end{document}
```

则 VSCode 的 recipes 编译链应该将 biber 链放在第一条
```json
"latex-workshop.latex.recipes": [
	{
	  "name": "xelatex -> bibtex -> xelatex*2",
	  "tools": [
		"xelatex",
		"bibtex",
		"xelatex",
		"xelatex"
	  ]
	},
	...
]
```


## bibtex 格式
如果你使用的是 bibtex 格式的文献引用方法，如 `natbib` 或 `cite` 宏包， 如下
```latex
\documentclass{article}


\usepackage{natbib} % or \usepackage{cite}
\bibliographystyle{plain} % 设置参考文献样式
\bibliography{references} % 指定 .bib 文件（无需扩展名）

\begin{document}
    The method from \cite{BarbalatLemma} is OK!
    \bibliography{references} % 打印参考文献
\end{document}

```

则 VSCode 的 recipes 编译链应该将 biber 链放在第一条
```json
"latex-workshop.latex.recipes": [
	{
	  "name": "xelatex -> bibtex -> xelatex*2",
	  "tools": [
		"xelatex",
		"bibtex",
		"xelatex",
		"xelatex"
	  ]
	},
	...
]
```

