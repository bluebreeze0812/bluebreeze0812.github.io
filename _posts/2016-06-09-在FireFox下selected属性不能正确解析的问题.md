---
layout:     post
title:      在FireFox下selected属性不能正确解析的问题
date:       2016-06-09 20:50:00 +0800
author:     Leo
categories: Gain
tags:       Tips HTML firefox
---
今天在开发一个HTML页面的时候发现给某个option标签加上selected属性在FF下并不能被默认选中，除非用ctrl+F5强制刷新才能重新渲染。
这可能是FF团队在出于性能方面的考虑将DOM元素缓存，而当刷新的时候会优先读取缓存中的数据。
后来找到了解决办法，在selece标签内部添加autocomplete属性，并将其值设为off。

如下：
`<select name="cal" autocomplete="off">`


