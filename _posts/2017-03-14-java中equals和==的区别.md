---
layout:     post
title:      java中equals和==的区别
date:      	2017-03-14 22:31:51 +0800
author:     Leo
categories: Learn
tags:       Java
---
1. `==`检测两个对象是否指向同一块内存区域，而`equals`只比较定义让它比较的内容。

2. 如果一个类没有重写`equals`方法，则默认使用与这个类最近的一个重写了`equals`方法的父类。

3. 如果找不到这个父类，那么就会使用顶级父类`Object`的`equals`方法，在这种情况下，`equals`和`==`是等价的，即：当且仅当两个对象指向同一块内存区域的时候返回`true`，这时，`equals`比较的是*对象的一致*而不是*功能的一致*。

4. 如果重写了一个类的`equals`方法，应当也重写它的`hashCode`方法。而且，如果两个对象的`equals`比较结果为真，那么它们的`hashCode`方法**必须**返回同样的值。反之则不必。
