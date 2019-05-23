---
layout:     post
title:      Vue, use a component inside another component
date:       2019-05-24 00:30:54 +0800
author:     Leo
categories: Learn
tags:       Vue
---

Say you have a Pixel component in  `src/components/Pixel.vue`

In another component, Canvas, which is located in  `src/components/Canvas.vue`, you can import that Pixel component by importing it inside the  `script`  tag of the Vue Single File Component:

```html
<template>
  <p>Canvas</p>
  <Pixel />
</template>

<script>
import Pixel from './Pixel'

export default {
  name: 'App',
  components: {
    Pixel
  }
}
</script>
```
