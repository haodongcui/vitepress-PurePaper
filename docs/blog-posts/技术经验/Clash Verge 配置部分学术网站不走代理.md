---
title: Clash Verge 配置部分学术网站不走代理
tags:
  - Clash
categories:
  - "CS\r"
date: 2024-12-22 19:53:12
abbrlink: 24122219
updated: 2024-10-29 22:49
---

[clash verge rev 文档](https://www.clashverge.dev/guide/extend.html)

`订阅` -> `右键菜单` -> `编辑规则` -> `高级` 或直接添加

```yaml
prepend:
  - 'DOMAIN-SUFFIX,edu.cn,DIRECT'
  - 'DOMAIN-SUFFIX,ieee.org,DIRECT'
  - 'DOMAIN-SUFFIX,sciencedirect.com,DIRECT'
  - 'DOMAIN-SUFFIX,gov.cn,DIRECT'
  - 'DOMAIN-SUFFIX,msftconnecttest.com,DIRECT'
  - 'DOMAIN-SUFFIX,msn.com,DIRECT'
append: []
delete: []

```

