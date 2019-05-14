---
layout:     post
title:      Fitting an img inside a div and keeping the aspect ratio
date:       2019-05-14 20:04:51 +0800
author:     Leo
categories: Learn
tags:       CSS
---
To achieve that, we need some `JavaScript` to prevent cropping if you don't know the dimension of the image at the time you're writing the `css`.

### HTML & JavaScript

```js
<div id="container">
    <img src="something.jpg" alt="" />
</div>

<script type="text/javascript">
(function () {
var img = document.getElementById('container').firstChild;
img.onload = function () {
    if (img.height > img.width) {
        img.height = '100%';
        img.width = 'auto';
    }
};
}());
</script>
```

### CSS

```css
#container {
   width: 48px;
   height: 48px;
}

#container img {
   width: 100%;
}
```
