---
title: Python Plotly库
tags:
  - Plotly
  - Python
  - 绘图
categories:
  - 编程及专业软件
date: 2024-09-25 23:46:55
abbrlink: 24092523
updated: 2024-09-28 13:07
---

# 查询

## 图片导出


```python
# 导出为html
# fig.write_html("my_plot.html")

# 导出为其它格式：

# 需安装kaleido
# pip install kaleido 
# 如果图片导出陷入死循环，可限制kaleido版本，使用如下命令
# pip install --upgrade "kaleido==0.1.*"

# 保存为png、pdf等
# fig.write_image("my_plot.png")
# fig.write_image("my_plot.pdf")
```

## 所有 px.data 数据集


```python
import plotly.express as px

# print(dir(px.data))
```

## 预设主题

内置主题列表：

- plotly: 默认的明亮主题
- plotly_dark: 暗色主题
- ggplot2: 模仿 ggplot2 风格的主题
- seaborn: 模仿 seaborn 风格的主题
- simple_white: 简洁的白色主题
- none: 无模板，默认不设置任何样式
- presentation: 为演示而设计的简洁主题
- xgridoff: 网格线关闭的主题
- ygridoff: 关闭 y 轴网格线的主题
- gridon: 打开网格线的主题

使用方法：
```python
template='presentation'
```

## 内置色阶


```python
# # 查看内置连续色阶
# fig1 = px.colors.sequential.swatches_continuous()#适用于大多数连续场景
# fig1.show()

# # 查看内置离散色阶
# fig2 = px.colors.qualitative.swatches()
# fig2.show()
```

## 所有 layout 参数


```python
################################# 所有布局设置 #################################
import plotly.graph_objs as go


# 示例数据
x_data = [1, 2, 3, 4, 5]
y_data = [10, 11, 12, 13, 14]

# 创建基础散点图
scatter = go.Scatter(
    x=x_data,
    y=y_data,
    mode='markers'
)

# 创建图表对象
fig = go.Figure(data=[scatter])

# 使用 update_layout 设置布局
fig.update_layout(
    title='示例图表标题',                                     # 图表主标题
    title_font=dict(size=20, color='black', family='Arial'),  # 标题字体样式
    title_x=0.5,                                             # 标题水平居中 (0.0 表示左对齐，1.0 表示右对齐)

    showlegend=True,                                         # 是否显示图例
    legend_title='图例标题',                                  # 图例标题
    legend_title_font=dict(size=15, color='black', family='Arial'),  # 图例标题字体样式
    legend=dict(                                             # 图例属性
        x=0.8,                                               # 图例在 x 轴上的位置 (0-1 范围)
        y=1,                                                 # 图例在 y 轴上的位置 (0-1 范围)
        bgcolor='rgba(255, 255, 255, 0.5)',                  # 图例背景颜色及透明度
        bordercolor='black',                                 # 图例边框颜色
        borderwidth=2                                        # 图例边框宽度
    ),

    xaxis=dict(                                              # x 轴设置
        title='X 轴标题',                                    # x 轴标题
        title_font=dict(size=18, color='blue', family='Courier New'),  # x 轴标题字体样式
        showgrid=True,                                       # 是否显示网格线
        gridcolor='lightgrey',                               # 网格线颜色
        gridwidth=1,                                         # 网格线宽度
        zeroline=True,                                       # 是否显示 x 轴上的零线
        zerolinecolor='grey',                                # 零线颜色
        zerolinewidth=2,                                     # 零线宽度
        showline=True,                                       # 是否显示坐标轴线
        linecolor='black',                                   # 坐标轴线颜色
        linewidth=2,                                         # 坐标轴线宽度
        ticks='outside',                                     # 显示刻度线在坐标轴外侧
        ticklen=5,                                           # 刻度线长度
        tickwidth=2,                                         # 刻度线宽度
        tickcolor='black',                                   # 刻度线颜色
        tickmode='linear',                                   # 刻度线模式，可以为 'auto' 或 'linear'
        tickangle=45                                         # 刻度线角度
    ),

    yaxis=dict(                                              # y 轴设置
        title='Y 轴标题',                                    # y 轴标题
        title_font=dict(size=18, color='green', family='Courier New'),  # y 轴标题字体样式
        showgrid=True,                                       # 是否显示网格线
        gridcolor='lightgrey',                               # 网格线颜色
        gridwidth=1,                                         # 网格线宽度
        zeroline=True,                                       # 是否显示 y 轴上的零线
        zerolinecolor='grey',                                # 零线颜色
        zerolinewidth=2,                                     # 零线宽度
        showline=True,                                       # 是否显示坐标轴线
        linecolor='black',                                   # 坐标轴线颜色
        linewidth=2,                                         # 坐标轴线宽度
        ticks='outside',                                     # 显示刻度线在坐标轴外侧
        ticklen=5,                                           # 刻度线长度
        tickwidth=2,                                         # 刻度线宽度
        tickcolor='black',                                   # 刻度线颜色
        tickmode='linear',                                   # 刻度线模式，可以为 'auto' 或 'linear'
        tickangle=0                                          # 刻度线角度
    ),

    margin=dict(                                             # 控制图表的边距
        l=50,                                                # 左边距
        r=50,                                                # 右边距
        b=50,                                                # 底部边距
        t=80,                                                # 顶部边距
        pad=10                                               # 边距内衬
    ),

    paper_bgcolor='rgba(255,255,255,1)',                     # 整个图表区域的背景颜色
    plot_bgcolor='rgba(240,240,240,1)',                      # 绘图区的背景颜色

    hovermode='closest',                                     # 悬停显示最近的数据点信息
    dragmode='zoom',                                         # 图表拖动模式，可以设置为 'zoom'、'pan'、'select' 等
    hoverlabel=dict(                                         # 控制悬停标签的样式
        bgcolor='white',                                     # 悬停标签的背景颜色
        font_size=12,                                        # 悬停标签的字体大小
        font_family='Arial'                                  # 悬停标签的字体
    ),

    font=dict(                                               # 控制整个图表的字体样式
        family='Arial, sans-serif',                          # 字体
        size=12,                                             # 字体大小
        color='black'                                        # 字体颜色
    ),

    template='plotly',                                       # 使用 plotly 的默认模板

    modebar=dict(                                            # 模式栏设置
        orientation='h',                                     # 设置模式栏的方向为水平 ('v' 为垂直)
        bgcolor='rgba(255,255,255,0.7)',                     # 模式栏的背景颜色
        color='black',                                       # 模式栏图标颜色
        activecolor='blue'                                   # 模式栏被激活图标的颜色
    ),

    annotations=[                                            # 添加注释
        dict(
            x=2,                                             # 注释的位置 (x 坐标)
            y=12,                                            # 注释的位置 (y 坐标)
            xref='x',                                        # 引用 x 轴的坐标
            yref='y',                                        # 引用 y 轴的坐标
            text='注释示例',                                  # 注释的文本
            showarrow=True,                                  # 是否显示箭头
            arrowhead=2,                                     # 箭头样式
            ax=20,                                           # 箭头的 x 偏移量
            ay=-30                                           # 箭头的 y 偏移量
        )
    ]
)

# 显示图表
fig.show()
```



# 示例

## 散点图


```python
import plotly.express as px

# 示例数据
df = px.data.iris()  # 使用 iris 数据集

# 绘制散点图
fig = px.scatter(
    df, 
    x='sepal_width', 
    y='sepal_length', 
    color='species',  # 不同种类使用不同颜色
    title='鸢尾花萼长与宽的散点图'
)
fig.show()

```



## 折线图


```python
import plotly.express as px

# 示例数据
df = px.data.gapminder().query("country == 'India'")

# 绘制折线图
fig = px.line(
    df, 
    x='year', 
    y='gdpPercap', 
    title='印度GDP随年份变化图'
)
fig.show()

```



## 柱状图 (Bar Plot)


```python
import plotly.express as px

# 示例数据
df = px.data.tips()

# 绘制柱状图
fig = px.bar(
    df, 
    x='day', 
    y='total_bill', 
    color='sex',  # 按性别分色
    title='每日小费总额柱状图',
    template='presentation'  # 使用预设主题
)
fig.show()

```



## 直方图 (Histogram)


```python
import plotly.express as px

# 示例数据
df = px.data.tips()

# 绘制直方图
fig = px.histogram(
    df, 
    x='total_bill', 
    nbins=20,  # 设置柱数
    title='小费总额的直方图'
)
fig.show()

```



## 箱线图 (Box Plot)


```python
import plotly.express as px

# 示例数据
df = px.data.tips()

# 绘制箱线图
fig = px.box(
    df, 
    x='day', 
    y='total_bill', 
    color='smoker',  # 按是否吸烟分色
    title='每日小费的箱线图'
)
fig.show()

```



## 饼图 (Pie Chart)


```python
import plotly.express as px

# 示例数据
df = px.data.tips()

# 绘制饼图
fig = px.pie(
    df, 
    names='day',  # 显示每一天
    values='total_bill',  # 根据小费总额计算比例
    title='每日小费的饼图'
)
fig.show()

```



## 气泡图 (Bubble Plot)


```python
import plotly.express as px

# 示例数据
df = px.data.gapminder().query("year == 2007")

# 绘制气泡图
fig = px.scatter(
    df, 
    x='gdpPercap', 
    y='lifeExp', 
    size='pop',  # 气泡大小由人口决定
    color='continent',  # 按洲分色
    title='2007年世界国家GDP与预期寿命的气泡图'
)
fig.show()

```



## 热力图 (Heatmap)


```python
import plotly.express as px

# 示例数据
df = px.data.tips()

# 绘制热力图
fig = px.density_heatmap(
    df, 
    x='total_bill', 
    y='tip', 
    title='小费与总额的热力图'
)
fig.show()

```



## 面积图 (Area Chart)


```python
import plotly.express as px

# 示例数据
df = px.data.gapminder().query("country == 'Canada'")

# 绘制面积图
fig = px.area(
    df, 
    x='year', 
    y='pop', 
    title='加拿大人口随时间的面积图'
)
fig.show()

```



## 散点矩阵 (Scatter Matrix / Pair Plot)


```python
import plotly.express as px

# 示例数据
df = px.data.iris()

# 绘制散点矩阵
fig = px.scatter_matrix(
    df, 
    dimensions=['sepal_width', 'sepal_length', 'petal_width', 'petal_length'], 
    color='species',  # 按种类分色
    title='鸢尾花数据集的散点矩阵',
    template='plotly_dark'  # 使用暗黑主题
)
fig.show()

```



## 条形图 (Horizontal Bar Plot)


```python
import plotly.express as px

# 示例数据
df = px.data.gapminder().query("year == 2007").sort_values(by='gdpPercap', ascending=False)

# 绘制条形图
fig = px.bar(
    df, 
    x='gdpPercap', 
    y='country', 
    orientation='h',  # 设置条形图为水平
    title='2007年各国GDP的条形图'
)
fig.show()

```



## 地理热力图


```python
import plotly.express as px

# 使用 gapminder 数据集，展示 2007 年世界各国的 GDP
df = px.data.gapminder().query("year == 2007")

# 绘制地理热力图
fig = px.choropleth(
    df, 
    locations="iso_alpha",  # 根据国家的 ISO alpha-3 代码来定位
    color="gdpPercap",  # GDP per capita 作为颜色强度
    hover_name="country",  # 悬停时显示的国家名称
    color_continuous_scale=px.colors.sequential.Plasma,  # 使用连续颜色
    title='2007年世界各国人均GDP'
)

# 显示图表
fig.show()

```



## 等高线图


```python
import plotly.graph_objects as go
import pandas as pd
import numpy as np

# 创建一个示例数据集
x = np.linspace(-3.5, 3.5, 100)
y = np.linspace(-3.5, 3.5, 100)
x, y = np.meshgrid(x, y)
z = np.exp(-x**2 - y**2)

# 创建一个DataFrame
df = pd.DataFrame(dict(x=x.ravel(), y=y.ravel(), z=z.ravel()))

# 使用 go.Contour 创建等高线图
fig = go.Figure(data=go.Contour(
    z=z,
    x=x[0],
    y=y[:,0],
    colorscale='Viridis'
))

# 更新布局
fig.update_layout(
    title='等高线图',
    xaxis_title='X',
    yaxis_title='Y',
)

# 显示图表
fig.show()
```



# 收藏

## 多子图直方图


```python
import pandas as pd
import plotly.express as px
import plotly.graph_objs as go
from plotly.subplots import make_subplots  # 导入 make_subplots


# 数据
data = pd.DataFrame({
    '高等数学': [65, 65, 67, 68, 70, 71, 75, 76,
              77, 79, 80, 82, 83, 83, 83, 84, 
              84, 85, 86, 86, 87, 88, 88, 88, 
              91, 93, 93, 93, 93, 94, 95, 97, 
              99, 99, 100, 100, 100, 100],
    '物理': [57, 60, 62, 64, 67, 67, 70, 72, 73, 
           74, 74, 74, 77, 77, 78, 78, 79, 80, 
           80, 81, 81, 81, 82, 82, 84, 84, 84, 
           84, 86, 87, 88, 93, 95, 96, 96, 98, 
           99, 99]
})

# 创建两个子图
fig = make_subplots(rows=1, cols=2, subplot_titles=("高等数学成绩分布", "物理成绩分布"))

# 第一个子图：高等数学成绩直方图
fig.add_trace(
    go.Histogram(
        x=data['高等数学'],
        # nbinsx=6, # 设置 x 轴上的区间个数 
        # 设置区间上下限，例如从 0 到 10
        xbins=dict(
            start=55,
            end=100,
            size=7  # 设置每个区间的宽度
        ),
        marker_color=px.colors.qualitative.Pastel1[0],
        opacity=0.8,
        marker_line_color='black',
        marker_line_width=1
    ),
    row=1, col=1
)

# 第二个子图：物理成绩直方图
fig.add_trace(
    go.Histogram(
        x=data['物理'],
        # nbinsx=8,
        xbins=dict(
            start=55,
            end=100,
            size=7  # 设置每个区间的宽度
        ),
        marker_color=px.colors.qualitative.Pastel1[1],
        opacity=0.8,
        marker_line_color='black',
        marker_line_width=1
    ),
    row=1, col=2
)

# 更新布局
fig.update_layout(
    width=1200,
    height=600,
    plot_bgcolor='white',
    paper_bgcolor='white',
    showlegend=False,
    title_font_size=24,
    xaxis_title_font_size=18,
    yaxis_title_font_size=18,
    xaxis_tickfont_size=14,
    yaxis_tickfont_size=14,
)

# 更新各个子图的布局
for i in range(1, 3):
    fig.update_xaxes(title_text="分数", title_font_size=18, tickfont_size=14, row=1, col=i)
    fig.update_yaxes(title_text="频数", title_font_size=18, tickfont_size=14, row=1, col=i)

# 显示图表
fig.show()

# 保存为 PDF 文件
# fig.write_image("fig/成绩分布直方图.pdf")

```



## 茎叶图


```python
import pandas as pd
import plotly.express as px

# 数据
data = pd.DataFrame({
    '高等数学': [65, 65, 67, 68, 70, 71, 75, 76,
              77, 79, 80, 82, 83, 83, 83, 84, 
              84, 85, 86, 86, 87, 88, 88, 88, 
              91, 93, 93, 93, 93, 94, 95, 97, 
              99, 99, 100, 100, 100, 100],
    '物理': [57, 60, 62, 64, 67, 67, 70, 72, 73, 
           74, 74, 74, 77, 77, 78, 78, 79, 80, 
           80, 81, 81, 81, 82, 82, 84, 84, 84, 
           84, 86, 87, 88, 93, 95, 96, 96, 98, 
           99, 99]
})

def stem_and_leaf(data):
    stems = {}
    for number in data:
        stem, leaf = divmod(number, 10)
        stems.setdefault(stem, []).append(leaf)
    return stems

# 创建一个空的图表
fig = px.scatter(x=[0], y=[0], opacity=0, title='物理成绩茎叶图')  # 使用透明的散点图来创建一个空图表

# 获取茎叶图数据
stems_math = stem_and_leaf(data['物理'])

# 计算茎叶图文本注释的总数
num_annotations = len(stems_math)

# 在图表上添加茎叶图的文本
for i, (stem, leaves) in enumerate(sorted(stems_math.items())):
    text = f"{stem} | {' '.join(map(str, sorted(leaves)))}"
    # 调整y位置使得文本居中
    y_position = 1 - (i + 0.5) / num_annotations
    fig.add_annotation(
        x=0, 
        y=y_position,
        text=text,
        showarrow=False,
        xref='paper',
        yref='paper',
        xanchor='left',
        yanchor='middle'
    )

# 设置图表的尺寸
fig.update_layout(
    width=270, 
    height=270, 
    plot_bgcolor='white', 
    title_x=0.5,  # 将标题居中
    margin=dict(l=50, r=50, b=50, t=50),
    xaxis=dict(
        showticklabels=False,  # 不显示刻度标签
        showgrid=False,        # 不显示网格线
        zeroline=False,        # 不显示零线
        showline=False,        # 不显示坐标轴线
        visible=False,         # 隐藏x轴
    ),
    yaxis=dict(
        showticklabels=False,  # 不显示刻度标签
        showgrid=False,        # 不显示网格线
        zeroline=False,        # 不显示零线
        showline=False,        # 不显示坐标轴线
        visible=False,         # 隐藏x轴
    )
)

# 显示图表
fig.show()

# 如果需要保存为图片
# fig.write_image("fig/物理成绩茎叶图.pdf")

```


