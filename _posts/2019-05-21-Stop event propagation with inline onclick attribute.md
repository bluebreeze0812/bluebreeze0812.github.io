---
layout:     post
title:      Stop event propagation with inline onclick attribute
date:       2019-05-21 20:56:44 +0800
author:     Leo
categories: Learn
tags:       HTML JavaScript
---

Use [event.stopPropagation()](https://developer.mozilla.org/en/DOM/event.stopPropagation).

```html
<span onclick="event.stopPropagation(); alert('you clicked inside the header');">something inside the header</span>
```

For IE: `window.event.cancelBubble = true`

```html
<span onclick="window.event.cancelBubble = true; alert('you clicked inside the header');">something inside the header</span>
```
