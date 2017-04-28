---
layout:     post
title:      textarea的placeholder不能显示的问题
date:       2017-02-03 15:18:07 +0800
author:     Leo
categories: Learn
tags:       HTML
---
众所周知，`placeholder`是`input`元素在没有输入的情况下展示给用户的提示信息，那么当然<em>元素中没有任何输入</em>就是它正常显示的前提条件。

而程序员经常犯的毛病就是<strong>瞎JB乱换行</strong>，导致`textarea`的`placeholder`不能显示。。

正常的`textarea`应该长这样:

```html
<textarea cols="10" rows="15" placeholder="Describe yourself..."></textarea>
```

而不正常的，也就是经常犯错的长这样:

```html
<textarea cols="10" rows="15" placeholder="Describe yourself...">
</textarea>
```

明白了么？

乱换行是病，得治。
