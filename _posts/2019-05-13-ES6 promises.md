---
layout:     post
title:      ES6 promises
date:       2019-05-13 20:19:37 +0800
author:     Leo
categories: Learn
tags:       JavaScript
---
## How does a Promise work?

The  Promise  objects represents the eventual completion of an asynchronous operation. It returns a single value based on an operation being  resolved  or  rejected. A promise is always in one of three stages:

-   fulfilled
-   rejected
-   pending

The  Promise()  constructor takes two arguments: a  `resolve`  function and a  `reject`  function. It returns one or the other based on the outcome of the asynchronous operation.

## Creating a Promise

You can create a promise in using the  Promise  constructor:

```js
const myPromise = amount => {
  return new Promise((resolve,reject) => {
    if(amount > 0){
      resolve("success!")
    }
    reject("failure!")
  })
}

myPromise(1)
//resolves Promise { 'success!' }
```

In the example above, we create a  `myPromise()`  function that takes a single  amount  parameter and returns a  Promise  object. The promise constructor function takes two arguments:  `resolve`  and  `reject`.

We then call our  `myPromise(1)`  function. Notice how it returns a resolved  Promise  object with the "success!" message since our argument  `1`  is greater than  `0`.

If we hadn't wrapped our  Promise  in a function, then it would have executed when it was defined rather than when we invoked it via  `myPromise(1)`.

## Promise Methods

Promise methods exist to handle the resolution or rejection of a  Promise  object. Below is a brief description and example of the methods commonly used with promises:

### then()
The  `then()`  method executes after a promise is either fulfilled or rejected. It takes two function arguments for  `resolved`  and  `rejected`.

```js
let handleSuccess = (x) => {
  console.log(x + " it worked!")
}

let handleError = (x) => {
  console.log(x + " oh no, it failed!")
}

const myPromise = amount => {
  return new Promise((resolve,reject) => {
    if(amount > 0){
      resolve("success!")
    }
    reject("failure!")
  })
}

myPromise(1).then(handleSuccess, handleError)

//logs 'success! it worked!'

myPromise(0).then(handleSuccess,handleError)

//logs 'failure! oh no, it failed!'
```

Notice how we call `then()` twice on our constructed `myPromise()` function. It's important to remember that the method accepts two functions as arguments, in our case `handleSuccess()` and `handleError()`. Notice how the original message gets passed to the handler function for both `resolved` and `rejected` scenarios.

### catch()
The `catch()` method provides a better way to handle rejections and failures. It is a "catch all" for any rejected promise:

```js
const myPromise = amount => {
  return new Promise((resolve,reject) => {
    if(amount > 0){
      resolve("success!")
    }
    reject("failure!")
  })
}

myPromise(0).then(res => {
  console.log(res + " success!")
}).catch(err => {
  console.log(err + "oh no, it failed!")
})

//logs 'failure! oh no, it failed!'
```

In the above example,  `catch()`  takes the returned promise from the  `then()`  function and handles the rejection with its own argument function. Notice how we only pass a single argument to the  `then()`  function for handling a successful response.

Not only does the  `catch()`  method save us from having to specify the second argument for  `then()`, it also catches any other errors along the way. Any internal errors thrown by  `then()`  will still be caught by  `catch()`:

```js
const myPromise = amount => {
  return new Promise((resolve,reject) => {
    if(amount > 0){
      resolve("success!")
    }
    reject("failure!")
  })
}

myPromise(1).then(res => {
  throw new Error();
  console.log(res + " success!")
}).catch(err => {
  console.log(err + "oh no, it failed!")
})

//logs 'Error oh no, it failed!'
```

Even if we throw an error within our  `then()`  handler, the  `catch()`  method will still catch it.

### Promise.resolve()

Returns a resolved promise with the given value:

```
Promise.resolve("Success")

//returns Promise {'Success'}
```

### Promise.reject()

Returns a rejected promise with the given value:

```js
Promise.reject("error")

//returns unhandled promise rejection
```

### Promise.all()

The  `all()`  method takes an array of promises as an argument. It returns a `resolved` promise based on the referenced promises ALL being `fulfilled` or `rejected`:

```js
const p1 = new Promise((resolve,reject) => {
    setTimeout(resolve("p1 success"),2000)
})

const p2= new Promise((resolve,reject) =>{
    setTimeout(resolve("p2 success"),4000)
})

Promise.all([p1,p2]).then(res => {
    console.log(res);
})

//logs ['p1 success', 'p2 success'] after 4 seconds
```

### Promise.race()

The  `race()`  method takes an array of promises as an arugment. It returns a `resolved` promise based on the first referenced promise that resolves.

```js
const p1 = new Promise((resolve,reject) => {
    setTimeout(resolve("p1 success"),2000)
})

const p2= new Promise((resolve,reject) =>{
    setTimeout(resolve("p2 success"),4000)
})

Promise.race([p1,p2]).then(res => {
    console.log(res);
})

//logs 'p1 success' since p1 finishes first
```

Since `p1` is the first to resolve, `race()` returns the `resolved` promise for `p1` .

## ES6 Promise Chaining

You'll notice we call  `then()`  and  `catch()`  with dot notation. This is called  `chaining`  and it works because we return a `resolved` promise for each chained method.

`Chaining` can be a powerful tool. As long as you are returning a promise, you can extend `async` operations indefinitely.

