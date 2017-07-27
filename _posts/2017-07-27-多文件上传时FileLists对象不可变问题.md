---
layout:     post
title:      多文件上传时FileList对象不可变问题
date:       2017-07-27 23:18:19 +0800
author:     Leo
categories: Learn
tags:       HTML
---
首先简单介绍一下文件上传的基础：

1. 单文件上传

    最简单的文件上传，是单文件上传，form标签中加入`enctype="multipart/form-data"`，form表单中有一个`input[type="file"]`项

    ```html
    <form name="form1" method="post" action="/abc.php" enctype="multipart/form-data">
	    <input type="text" name="user" id="user" placeholder="enter your name...">
	    <input type="file" name="userImage" id="userImage">
	    <input type="submit" name="submit" value="submit">
    </form>
    ```

2. 多文件上传

    1. 类似单文件上传，简单的多文件上传其实就是多几个`input[type="file"]`项
    
        ```html
        <form name="form1" method="post" action="/abc.php" enctype="multipart/form-data">
            <input type="text" name="user" id="user" placeholder="enter your name...">
            <input type="file" name="userImage1" id="userImage1">
            <input type="file" name="userImage2" id="userImage2">
            <input type="file" name="userImage3" id="userImage3">
            <input type="submit" name="submit" value="submit">
        </form>
        ```
        
    2. HTML5为表单文件项新增了一个`multiple`属性，可以设置实现选择多个文件，如
    
        ```html
        <form name="form1" method="post" action="/abc.php" enctype="multipart/form-data">
            <input type="text" name="user" id="user" placeholder="enter your name...">
            <input type="file" name="userImage" id="userImage" multiple>
            <input type="submit" name="submit" value="submit">
        </form>
        ```
        
使用`multiple`来享受H5带来的方便快捷固然很好，但有一个问题需要注意，那就是在需要获取文件信息的时候，只能获取到第一个上传文件的信息。可以使用下面的代码自行测试一下：


```html
<input type="file" onchange="console.log(this.value);">
<input type="file" multiple onchange="console.log(this.value);">
```

既然直接通过value获取不到所有选中的文件信息，只能寻求其他途径，这时便轮到`FileList`出场了

`FileList`属性是HTML5新增的，它里面保存了等待上传的文件的所有信息，可以通过以下代码获取到这个对象

```javascript
function getFileList(e) {
    console.log(e.target.files);
}

$("input[type=file]").change(function(e) {
    getFileList(e);
});
```

或者更简单一些：

```html
<input type="file" multiple onchange="console.log(this.files);">
```

可以看到，获取`FileList`对象实际上在js中名字是`files`，但是在控制台的输出名字却是`FileList`，这点值得注意

另外，`FileList`对象是只读的，可以把它手动置空，但不能修改其中的内容

所以，如果在选择了多个文件上传，但又希望可以在上传之前让用户动态的对这些待上传文件进行修改，那么就必须把`FileList`之中的内容复制到一个数组中去，并对这个数组进行修改，最后再通过`ajax`把这个数组上传到后台

PS：

手动把`FileList`置空很简单，只要把对应的`input`标签的`value`属性置空就可以了

```javascript
$("input[type=file]").val("");
```






