---
layout:     post
title:      Understanding process.nextTick()
date:       2019-07-08 23:57:01 +0800
author:     Leo
categories: Learn
tags:       Node
---

As you try to understand the  [Node.js event loop](https://flaviocopes.com/node-event-loop/), one important part of it is  `process.nextTick()`.

Every time the event loop takes a full trip, we call it a tick.

When we pass a function to  `process.nextTick()`, we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts:

```js
process.nextTick(() => {
  //do something
})
```

The event loop is busy processing the current function code.

When this operation ends, the JS engine runs all the functions passed to  `nextTick`  calls during that operation.

It’s the way we can tell the JS engine to process a function asynchronously (after the current function), but as soon as possible, not queue it.

Calling  `setTimeout(() => {}, 0)`  will execute the function at the end of next tick, much later than when using  `nextTick()`  which prioritizes the call and executes it just before the beginning of the next tick.

Use  `nextTick()`  when you want to make sure that in the next event loop iteration that code is already executed.
