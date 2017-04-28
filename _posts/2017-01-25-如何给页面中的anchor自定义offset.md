---
layout:     post
title:      如何给页面中的anchor自定义offset
date:       2017-01-25 00:35:56 +0800
author:     Leo
categories: Learn
tags:       HTML CSS
---
在前端开发中，经常会有在同一个页面中跳转的需求，这使用`<a>`标签可以很轻易地做到，只需要给它添加一个`id`属性即可。

例如`<a href="#foo" id="foo">bar</a>`便是指让页面跳转到此anchor。

然而，很多情况下这并不能完全满足我们的需求，举个例子，如果页面中含有一个position为fixed的header，那么由于这个header脱离了normal flow，anchor实际跳转的位置便会被header遮盖住一部分。

解决如上问题的方式有很多，在此处仅列出两条为参考。

* 首先给anchor一个class<br>
  `<a class="anchor" id="top"></a>`<br>
  然后就可以设置使这个anchor比它在normal flow中的位置更高或更低，通过让它成为block element，再设置position为relative，下例-250px会使anchor向上挪动250px。<br>
  
  ```css
  a.anchor {
    display: block;
    position: relative;
    top: -250px;
    visibility: hidden;
  }
  ```
  
* 另外一种方法更为简洁，使padding和margin共同作用，便可随心所欲地添加offset。
  
  ```html
  <a href="#foo">
  	<h1 style="padding-top: 40px; margin-top: -40px;" id="foo">My anchor</h1>
  </a>
  ```
  
