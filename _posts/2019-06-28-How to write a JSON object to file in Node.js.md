---
layout:     post
title:      How to write a JSON object to file in Node.js
date:       2019-06-28 01:16:14 +0800
author:     Leo
categories: Learn
tags:       Node
---

Sometimes the best way to store some data in a Node.js application is to save it to the filesystem.

If you have an object that can be serialized to  [JSON](https://flaviocopes.com/json/), you can use the  `JSON.stringify()`method and the  `fs`  method  `fs.writeFileSync()`  which synchronously writes a piece of data to a file:

```js
const fs = require('fs')

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}
```

To retrieve the data, you can use  `fs.readFileSync()`:

```js
const loadData = (path) => {
  try {
    return fs.readFileSync(path, 'utf8')
  } catch (err) {
    console.error(err)
    return false
  }
}
```

We used a synchronous API, so we can easily return the data once we get it.

We can also decide to use the asynchronous versions,  `fs.writeFile`  and  `fs.readFile`, although the code will change a little bit, and I recommend you take a read at  [how to write files using Node.js](https://flaviocopes.com/node-writing-files/)  and  [how to read files using Node.js](https://flaviocopes.com/node-reading-files/)  for this.
