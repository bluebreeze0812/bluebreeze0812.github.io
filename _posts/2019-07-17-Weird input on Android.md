---
layout:     post
title:      Weird Input On Android
date:       2019-07-17 22:52:52 +0800
author:     Leo
categories: Learn
tags:       Misc
---
So today I found out a weird behaviour of the `input` tag under mobile devices, well, Android devices specifically.

Here is the thing: when I was implementing a feature of password input component, the approach I used was basically putting a hidden `ipnut` tag behind 6 `div` which are showing up front as 6 "fake"  input windows, when they were clicked, the hidden `input` actually get focused, and will handle the input events there after. 

At first, I made that `input` tag hidden by setting its `width` and `height` both to `0`, and thought that's good enough. Little did I know, I was horribly wrong.

Things went down when my code went though testing process, I found out that under some Androids devices (the ones I was testing with were on Android 7 or 8), when you type into a `input` element which does not have a legit `width` and `height`, the input cursor will always stay at the front, which means all the stuff you type in will be actually in **reverse** order.

For example: if you type in `123456`, then run `input.val()`, you will get `654321`, strange indeed.

Such behaviour will disappear if you give that `input` an actual `width` and `height` setting, nothing but `0`.

Also, desktop devices and IOS devices don't have this issue. I can only assume that this bug is a native Android bug, maybe it already got fixed on Android 9, cause it did not appear on my Samsung S10 either.
