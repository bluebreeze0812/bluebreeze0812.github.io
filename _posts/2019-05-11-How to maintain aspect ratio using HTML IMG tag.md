---
layout:     post
title:      How to maintain aspect ratio using HTML IMG tag
date:       2019-05-11 22:41:03 +0800
author:     Leo
categories: Learn
tags:       CSS HTML
---
1. don't set `height` AND `width`, use one or the other and the correct aspect ratio will be maintained.

	```css
	.widthSet {
	    max-width: 64px;
	}

	.heightSet {
	    max-height: 64px;
	}
	```

	```html
	<img src="http://placehold.it/200x250" width="64" />

	<img src="http://placehold.it/200x250" height="64" />

	<img src="http://placehold.it/200x250" class="widthSet" />

	<img src="http://placehold.it/200x250" class="heightSet" />
	```

2. use `object-fit` element

	```css
	img {
	    width: 100%;
	    height: 100%;
	    object-fit: contain;
    }
	```

3. given the circumstances, if possible, use `background` element instead
