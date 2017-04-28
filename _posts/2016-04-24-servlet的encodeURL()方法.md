---
layout:     post
title:      "servlet的encodeURL()方法"
date:       2016-04-24 18:15:42 +0800
author:     Leo
categories: Learn
tags:       Java
---
如果用户浏览器禁用了cookie，会使session也无法使用。
因为服务器是以接受从用户浏览器发送过来的cookie中的`jsessionid`属性来获取session的。
为了在这种情况下也能跟踪用户状态，可以考虑使用重写URL地址，将`sessionid`一并带入request。

java专门提供了`encodeURL(String url)`方法来实现。

`encodeURL(String url)`方法一经调用，会首先检测：

1. servlet是否有request.getSession()。如果没有，则直接返回url。
2. 用户浏览器是否禁用了cookie。如果没有，则直接返回url。
3. 如果以上条件都不满足，则返回加上jsessionid的url。
