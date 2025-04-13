---
title: VSCode Latex 配置
tags:
  - Latex
  - VSCode
categories:
  - "技术经验\r"
date: 2025-01-20 16:28:04
abbrlink: 25012016
updated: 2024-10-29 22:49
---

settings.json 的 Latex 配置如下
```json

  // ############################## LaTex设置 ##############################
  // 编译方式(tools)
  "latex-workshop.latex.tools": [
    {
      "name": "xelatex",
      "command": "xelatex",
      "args": [
        "-synctex=1",
        "-interaction=nonstopmode",
        "-file-line-error",
        "%DOC%"
      ]
    },
    {
      "name": "pdflatex",
      "command": "pdflatex",
      "args": [
        "-synctex=1",
        "-interaction=nonstopmode",
        "-file-line-error",
        "%DOC%"
      ]
    },
    {
      "name": "bibtex",
      "command": "bibtex",
      "args": [
        "%DOCFILE%"
      ]
    },
    {
      "name": "biber",
      "command": "biber",
      "args": [
        "%DOCFILE%"
      ]
    }
  ],
  // 编译组合(recipes)
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
    {
      "name": "xelatex -> biber -> xelatex",
      "tools": [
        "xelatex",
        "biber",
        "xelatex",
      ]
    },
    {
      "name": "pdflatex -> bibtex -> pdflatex*2",
      "tools": [
        "pdflatex",
        "bibtex",
        "pdflatex",
        "pdflatex"
      ]
    },
    {
      "name": "PDFLaTeX",
      "tools": [
        "pdflatex"
      ]
    },
    {
      "name": "XeLaTeX",
      "tools": [
        "xelatex"
      ]
    },
    {
      "name": "latexmk",
      "tools": [
        "latexmk"
      ]
    },
    {
      "name": "BibTeX",
      "tools": [
        "bibtex"
      ]
    },
    {
      "name": "Biber",
      "tools": [
        "biber"
      ]
    },
  ],
  "latex-workshop.latex.clean.fileTypes": [
    "*.aux",
    "*.bbl",
    "*.blg",
    "*.bcf",
    "*.idx",
    "*.ind",
    "*.lof",
    "*.lot",
    "*.out",
    "*.toc",
    "*.acn",
    "*.acr",
    "*.alg",
    "*.glg",
    "*.glo",
    "*.gls",
    "*.ist",
    "*.fls",
    "*.log",
    "*.fdb_latexmk",
    "*.run.xml"
  ],
  "latex-workshop.latex.autoBuild.run": "onFileChange", // onFileChange / onSave / never
  "latex-workshop.latex.autoClean.run": "onFailed",
  "latex-workshop.latex.recipe.default": "lastUsed",
  "latex-workshop.showContextMenu": true,
  "latex-workshop.intellisense.package.enabled": true,
  "latex-workshop.message.error.show": false,
  "latex-workshop.message.warning.show": false,
  "latex-workshop.view.pdf.internal.synctex.keybinding": "double-click",
  "latex-workshop.view.pdf.invert": 0.2, // PDF预览颜色反转
  "latex-workshop.view.pdf.viewer": "singleton",
  "[latex]": {
    "editor.defaultFormatter": "James-Yu.latex-workshop"
  },

```