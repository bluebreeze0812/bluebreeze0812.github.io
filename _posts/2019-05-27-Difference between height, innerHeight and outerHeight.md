---
layout:     post
title:      Difference between height, innerHeight and outerHeight
date:       2019-05-27 22:52:40 +0800
author:     Leo
categories: Learn
tags:       JavaScript jQuery
---

I was surprised to find there is no simple online comparison giving an overview of the difference between JQuery’s height, innerHeight and outerHeight. It’s really quite simple and is down to whether the calculation factors in padding, border and margin.

Here’s the summary:

| | Padding | Border | Margin
:-: | :-: | :-: | :-: 
[height](http://api.jquery.com/height/) | N | N | N
[innerHeight](http://api.jquery.com/innerHeight/) | Y | N | N
[outerHeight](http://api.jquery.com/outerHeight/) | Y | Y | N
[outerHeight(true)](http://api.jquery.com/outerHeight/) | Y | Y | Y

The same applies to `width`, `innerWidth` and `outerWidth`
