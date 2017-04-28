---
layout:     post
title:      jQuery中如何动态选取元素，以及nth-child选择器的介绍
date:       2016-08-06 20:50:00 +0800
author:     Leo
categories: Learn
tags:       jQuery HTML CSS
---
今天在做一个demo的时候要用jQuery动态创建tr添加进表格，但是在想要删除这条动态创建的tr的时候却发现什么选择器都不好使了。<br>
在网上找了很多方法，有说用live的，有说用delegate的，自己尝试了一遍之后都不行。找来找去最后发现原来bind,live,delegate这些方法在jQuery1.9及其以上的版本已经都弃用了，取而代之的是`on()`方法，下面就对这个方法做一个说明，以备后用。

```javascript
$(selector).on(event, childSelector, data, function, map)
```

|参数|描述|
|:--|:--|
|event|必需，由逗号分割，必须是有效事件|
|childSelector|可选，指定要添加事件处理程序的子元素|
|data|可选，规定传递到函数的附加数据|
|function|可选，规定事件发生时的处理函数|
|map|规定事件映射{event:function, event:function..}|

例如我今天做的demo：

```javascript
$(document).ready(function() {
	$("#enter").click(function() {
	//when i click the button, add a new line in my table.
	//give the new tr lable a id is important, cause i must use this id to delete the line $(this)
		$newLine = $("<tr id='newLine'><td>" + 
		$('#name').val() + "</td><td>" + 
		$('#password').val() + 
		"</td><td><span id='delete'>delete</span></td></tr>");
		$newLine.appendTo("#info");
	});
	
	//bindding a on function, when i click the newLine(which means the new tr lable), remove it.
	$("#info").on("click", "#newLine", function() {
	    if(confirm("Are you sure?")) {
            $(this).remove();
    }
	});
});
```

下面简单介绍一下`nth-child(in+j)`的用法。<br>
这是一个功能强大的选择器，在HTML5变成中经常使用在CSS布局上。

|常用|描述|
|:--|:--|
|:nth-child(odd)|选中所有奇数行,下标从1开始|
|:nth-child(even)|选中所有偶数行|
|:nth-child(in+j)|对给定表达式进行运算后选定行，例如3n+2就是选定第2行，第5行..|

同时，在一个`nth-child`选择器下面再写另一个`nth-child`选择器将会替换掉上面的选择器设置的效果，这样可以单独设置表头的特效。
