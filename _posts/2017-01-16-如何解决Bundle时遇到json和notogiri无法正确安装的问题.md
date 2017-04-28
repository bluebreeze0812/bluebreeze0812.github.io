---
layout:     post
title:      如何解决Bundle时遇到json和notogiri无法正确安装的问题
date:       2017-01-16 18:28:00 +0800
author:     Leo
categories: Learn
tags:       Linux Ubuntu Ruby shell
---
一般造成这种问题的原因是工作环境没有提前安装好`json`和`notogiri`的dependencies.

对于错误提示

>ERROR:  Error installing json:<br>
>ERROR: Failed to build gem native extension.

输入命令

```shell
sudo apt-get install libgmp3-dev ruby-dev
```

之后再次运行`bundle install`可解决

对于错误提示

>ERROR:  Error installing nokogiri:<br>
>ERROR: Failed to build gem native extension.

输入命令

```shell
sudo apt-get install build-essential patch
sudo apt-get install ruby-dev zlib1g-dev liblzma-dev
sudo gem install nokogiri 和或 sudo gem install nokogiri -v '1.6.8.1'
```

之后再次运行`bundle install`可解决

