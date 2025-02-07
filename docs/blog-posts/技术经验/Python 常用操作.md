---
title: Python 常用操作
tags:
  - Python
categories:
  - 编程及专业软件
date: 2024-08-30 21:52:15
abbrlink: 20240830215215
updated: 2024-09-28 13:07
---

# Python 常用操作

## matplotlib 中文和负号

```python
import matplotlib.pyplot as plt
plt.rcParams['font.family'] = 'SimHei'  # 中文
plt.rcParams['axes.unicode_minus'] = False      # 显示负号
%config InlineBackend.figure_format = 'retina' # notebook画图更清晰，非notebook不需要
```

## pandas 索引切片

```python
# 基于标签索引
df.loc[行索引, 列索引]
df.loc[行索引]

# 基于整数索引
df.iloc[行索引, 列索引] 
df.iloc[行索引]
```
都适用于布尔数组

## pandas  DataFrame 转 Numpy 数组
```python
d = df.values
d = np.numpy(df)
```

## pandas  apply 自定义函数

参考链接：[Pandas数据处理(五) — apply() 方法介绍！ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/340770847)

```python

df.apply(func, axis=0, raw=False, result_type=None, args=(), **kwds)

```

- func 代表的是传入的函数或 lambda 表达式；

-  axis 参数可提供的有两个，该参数默认为 0/列  
	- 0 或者 index ，表示函数处理的是每一列；
	- 1 或 columns ，表示处理的是每一行;

- raw 是 bool 类型，默认为 False;  
	- False ，表示把每一行或列作为 Series 传入函数中；
	- True，表示接受的是 ndarray 数据类型；

```python

# 构造df
df  =pd.DataFrame([[0,4,9]]*3,columns = ['A','B','A'])

# 求行/列均值
df.apply(np.mean, axis=0) # axis=1表示对列操作
df.apply(np.mean, axis=1) # axis=1表示对行操作

# 对行/列开方
df.apply(np.sqrt, axis=0) # axis=1表示对列操作
df.apply(np.sqrt, axis=1) # axis=1表示对行操作

# 自定义函数（如：求每行的非零元素个数）
def count_nonzero(row):
    count = 0
    for r in row:
        if r != 0:
            count += 1
    return count
df['非零元素个数'] = df.apply(count_nonzero, axis=1)

```


## pandas  query 筛选函数
```python
# 普通筛选
df.query('country=="china"') # 筛选df中country==china的行

# 变量筛选
country_name = 'china'
df.query('country==@country_name') # 使用@
df.query(f"country=='{country_name}'") # 使用f-string

# 判断条件
df.query('year>2001')
```

## pandas  reset_index 重置索引
```python
df.reset_index(inplace=True) # 重置索引
```

## plotly 导出图片陷入死循环

不要安装最新版本的 kaleido，使用下面的语句安装 `0.1` 版本的 `kaleido`
```python
pip install --upgrade "kaleido==0.1.*"
```

## jupyter 导出为 markdown

安装 `nbconvert` 库及依赖 `pandoc`，使用如下命令
```
pip install nbconvert
pip install pandoc
```

在 `LearnPlotly.ipynb` 文件所在目录下，右键打开终端，输入如下转换命令
```bash
jupyter nbconvert LearnPlotly.ipynb --to markdown
```

