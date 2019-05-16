---
layout:     post
title:      Vue, why data must be a function
date:       2019-05-16 19:50:46 +0800
author:     Leo
categories: Learn
tags:       Vue
---

Using Vue you might surely asked yourself the question “why must  `data`  be a function that returns an object, and not just an object?”

```html
<template>
  <a v-on:click="counter = counter + 1">{{counter}}</a>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    }
  }
}
</script>

```

Especially considering that in some places,  `data`  is  **not**  a function, as you most probably see in the App component in several examples.

The explanation is that when the component is used multiple times, if it’s not a function, but a regular object, like this:

```js
data: {
  counter: 0
}

```

then because of how JavaScript works,  **every single instance of the component will share this property**.

This is not what you want in 99.9% of the cases, and instead you must do:

```js
data: function() {
  return {
    counter: 0
  }
}

```

It might be non-intuitive at first, but once you accept this explanation and learn that it’s kind of harmful to your application, and a possible source of bugs, you’ll remember to always use a function for data.
