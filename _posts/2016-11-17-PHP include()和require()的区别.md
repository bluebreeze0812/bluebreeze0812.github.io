---
layout:     post
title:      PHP include()和require()的区别
date:       2016-11-17 18:21:00 +0800
author:     Leo
categories: Learn
tags:       PHP
---
1. 加载失败的处理方式不同

   `include()`即使文件不存在，加载失败，也不会导致脚本停止运行，而是抛出一个`PHP Warning`。<br>
   而`require()`如果加载失败则直接抛出一个`PHP Fatal error`。导致脚本停止。

2. PHP性能影响不同

   `include()`每次执行都要对文件进行读取和评估，而`require()`只对文件处理一次（事实上，文件内容替换了`require()`语句）。

3. 使用弹性不同

   `require()` 的使用方法如 `require("./inc.php")`; 。通常放在 PHP 程式的最前面，PHP 程式在执行前，就会先读入 `require()` 所指定引入的档案，使它变成 PHP 程式网页的一部份。<br>
   `include()` 使用方法如 `include("./inc/.php")`; 。一般是放在流程控制的处理区段中。PHP 程式网页在读到 `include()` 的档案时，才将它读进来。这种方式，可以把程式执行时的流程简单化。

顺带一提，`require_once()` 和 `include_once()`和上述两种方法的不同之处就在于它们会判断文件是否已经包含在脚本中，如果已经包含则跳过该语句。一般建议使用`*_once()`方法，可以避免重复包含文件导致的性能损失。

