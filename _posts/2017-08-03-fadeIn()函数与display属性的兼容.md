---
layout:     post
title:      fadeIn()函数与display属性的兼容
date:       2017-08-03 22:38:27 +0800
author:     Leo
categories: Learn
tags:       HTML jQuery
---
今天在做需求的时候遇到了一个问题

有一个元素需要加上一个淡入淡出的动画，很自然的想到使用`fadeIn()`,`fadeOut()`,或者`fadeToggle()`来实现，但这个元素同时必须具有`display: inline-block`的属性，不然整个模块的布局就会乱掉。

那么问题来了，`jQuery`的`fadeIn()`函数默认会给元素加上`display: block`的属性，导致排版冲突。

其实解决的方法很简单，只要在调用了`fadeIn()`函数的元素后加上`css('display', 'inline-block')`语句就可以了。

例如：

```JavaScript
$(".pseudoElement").fadeIn().css("display", "inline-block");

```

