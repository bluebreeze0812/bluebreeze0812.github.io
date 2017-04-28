---
layout:     post
title:      Firefox中不能取消input元素的outline问题
date:       2017-02-03 15:10:40 +0800
author:     Leo
categories: Learn
tags:       HTML CSS firefox
---
firefox就是金贵，不但滚动条样式不能自己设置，就连outline也不能轻易取消。。

今天也是调试了很多遍，试了各种pseudo class，但是那个可恶丑陋的dot border就是稳稳地呆在那里，一副“你随便搞，弄好了算我输”的样子。。

最后还是去stackoverflow找到了答案，原来W3专门为了firefox做了一个`-moz-focus-inner`伪类。只要把它的`border`置空就行了。

类似这样：

	::-moz-focus-inner {border:0;}
	
注意前导的`selector`可有可无。
