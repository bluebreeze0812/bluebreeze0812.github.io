---
layout:     post
title:      JavaScript中“||”运算符的返回值
date:       2016-07-25 20:50:00 +0800
author:     Leo
categories: Learn
tags:       JavaScript
---
原则上，`||`运算符会返回表达式中第一个为`true`的变量，如果表达式中的变量都为`false`，则返回最后一个值。

特别地，`||`运算符可以返回任意数据类型的变量*（包括对象）*。

举例说明：

```javascript
<script>
     var foo = 0;
     var foo1 = false;
     var foo2 = "";
     var foo3 = NaN;
     var foo4 = null;
     var foo5 = undefined;
   
  alert(foo || foo1 || foo2 || foo3 || foo4 || foo5);
</script>
```

返回值为 `undefined`


```javascript
<script>
 var foo = 0;
 var foo1 = false;
 var foo2 = "";
 var foo3 = NaN;
 var foo4 = null;
 var foo5 = "OK";
   
 alert(foo || foo1 || foo2 || foo5 || foo3 || foo4);
</script>
```

返回值为 `OK`
