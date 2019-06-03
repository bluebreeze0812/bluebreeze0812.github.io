---
layout:     post
title:      How to check if a number is a Integer
date:       2019-06-03 23:31:34 +0800
author:     Leo
categories: Learn
tags:       JavaScript
---
`JavaScript` does not discriminate `integer` and `float` type of numbers, all the numbers are stored as 64-bit `float` values, just like `double` type in `Java`. On the other hand, in actual usage, like `Array` indexes, bit-wise operations, they are based on 32-bit.

## Checking with mod
Any Integers can be fully divided by 1, using this principle to check whether a number is a `integer`.

```js
function isInteger(obj) {
    return obj%1 === 0
}
isInteger(3) // true
isInteger(3.3) // false　
```

This method seems to be handy, but can fall short and have unexpected behaviors when handling Strings and special values.

```js
isInteger('') // true
isInteger('3') // true
isInteger(true) // true
isInteger([]) // true
```

Because of that, we need to check that if this was a legit number or not first, such as using `typeof`

```js
function isInteger(obj) {
    return typeof obj === 'number' && obj%1 === 0
}
isInteger('') // false
isInteger('3') // false
isInteger(true) // false
isInteger([]) // false
```

## Using `Math.floor()`, `Math.ceil()`,  `Math.round()` to check

Integers are always equal to themselves after rounding, using this trait to check whether a number is a `integer`

Example with `Math.floor()`
```js
function isInteger(obj) {
    return Math.floor(obj) === obj
}
isInteger(3) // true
isInteger(3.3) // false
isInteger('') // false
isInteger('3') // false
isInteger(true) // false
isInteger([]) // false
```

Using this method, it's safe to pass down parameters such as Strings and booleans and even arrays, with less coding as well.

## Using `parseInt()`

```js
function isInteger(obj) {
    return parseInt(obj, 10) === obj
}
isInteger(3) // true
isInteger(3.3) // false
isInteger('') // false
isInteger('3') // false
isInteger(true) // false
isInteger([]) // false
```

Also works, but this method has a slyly fall back:

```js
isInteger(1000000000000000000000) // false
```

Such weird behavior was because `parseInt()` will always convert the first parameter into a `String` before actually parsing integers, so this is not a good option when dealing with big numbers.

## Using bit-wise operations

```js
function isInteger(obj) {
    return (obj | 0) === obj
}
isInteger(3) // true
isInteger(3.3) // false
isInteger('') // false
isInteger('3') // false
isInteger(true) // false
isInteger([]) // false
```

Seems neat, and has great time efficiency too, but as mentioned before, it can only handle numbers within the range of 32-bit, so that the following code will return `false`.

```js
isInteger(Math.pow(2, 32)) // false
``

Then again, we do not need to handle with such big numbers from day to day usage.

## Using `Number.isInteger()`

This is a `ES6` only work around, supported by the newest version of `Chrome` and `Firefox`

```js
Number.isInteger(3) // true
Number.isInteger(3.1) // false
Number.isInteger('') // false
Number.isInteger('3') // false
Number.isInteger(true) // false
Number.isInteger([]) // false
```
