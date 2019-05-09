---
layout:     post
title:      Adding two double values in Java
date:       2019-05-09 22:43:43 +0800
author:     Leo
categories: Learn
tags:       Java
---
Today as I was doing modular tests, this is what result I got
![modular test][test]

What happens here is that, in Java,  `double`  values are  [IEEE floating point numbers][1]. Unless they are a power of 2 (or sums of powers of 2, e.g. 1/8 + 1/4 = 3/8), they cannot be represented exactly, even if they have high precision. this is a problem that is inherited in floating-point representation.

Workarounds:
-   If you know you'll only have so many decimal points, then use integer arithmetic, then convert to a decimal:
    
    ```
    (double) (51 + 1) / 10
    (double) (48 - 4) / 10
    ```
    
-   Use  [BigDecimal][2]
    
-   cut down on floating-point errors with the  [Kahan Summation Algorithm][3].

[test]: https://imgur.com/a/Seh5wQ3 "test result"
[1]: http://en.wikipedia.org/wiki/IEEE_floating_point
[2]: http://docs.oracle.com/javase/7/docs/api/java/math/BigDecimal.html
[3]: http://en.wikipedia.org/wiki/Kahan_summation_algorithm

