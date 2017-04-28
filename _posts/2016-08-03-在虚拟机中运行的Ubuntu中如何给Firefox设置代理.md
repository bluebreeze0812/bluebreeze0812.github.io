---
layout:     post
title:      在虚拟机中运行的Ubuntu中如何给Firefox设置代理
date:       2016-08-03 20:50:00 +0800
author:     Leo
categories: Gain
tags:       Tips Ubuntu firefox Proxy
---
	注：以下方法在VirtualBox中证实有效，但在VMware中却没用，可能跟网络地址分配方式有关，以后有时间再深入研究下如何在VMware中实现代理。

1. 在终端中键入命令 `route -n` 获取0.0.0.0网段的IP网关。
2. 在Firefox的首选项->高级->网络->设置中设置SOCKS代理，地址就是第一步获取到的网关，端口视宿主机代理软件设置的端口而定（我自己用的是shadowsocks的默认设置，1080端口）
3. 选中`socks_v5`和`remote DNS`选项。

完成

