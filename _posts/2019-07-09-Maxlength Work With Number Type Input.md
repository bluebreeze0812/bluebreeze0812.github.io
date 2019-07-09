---
layout:     post
title:      Maxlength Work With Number Type Input
date:       2019-07-09 23:43:29 +0800
author:     Leo
categories: Learn
tags:       HTML JavaScript
---
`maxlength` attribute cannot be used on `input` tags which `type` attribute is `number`, it will not take any effect. There are 2 work arounds to achieve the same functionality though.

1. Use the `max` attribute. It will specify the highest possible number that you may insert

    ```html
    <input type="number" max="999" />
    ```

    if you add both a max and a min value you can specify the range of allowed values:

    ```html
    <input type="number" min="1" max="999" />
    ```
2. Use js code
    
	```html
	<input 
		name="somename"
		oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
		type = "number"
		maxlength = "6"
	/>
	```
