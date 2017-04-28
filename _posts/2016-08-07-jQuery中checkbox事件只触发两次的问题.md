---
layout:     post
title:      jQuery中checkbox事件只触发两次的问题
date:       2016-08-07 20:50:00 +0800
author:     Leo
categories: Learn
tags:       jQuery HTML CSS
---
今天在写一个要对checkbox进行相应的jQuery demo的时候有如下代码：

```javascript
$(document).ready(function() {
	$("#checktor").change(function() {
		if(this.checked) {
			$("input[name='coding']").attr("checked", true)
		} else {
			$("input[name='coding']").removeAttr("checked")
		}
	})
})
```

经测试发现只有前两次点击和取消有效，经过尝试多种解决方法之后，把`attr`改为`prop`有效。<br>
更新后的代码如下：

```javascript
$(document).ready(function() {
	$("#checktor").change(function() {
		if(this.checked) {
			$("input[name='coding']").prop("checked", true)
		} else {
			$("input[name='coding']").removeProp("checked")
		}
	})
})
```
