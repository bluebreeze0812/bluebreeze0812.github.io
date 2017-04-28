---
layout:     post
title:      Hibernate中程序不能自动构建完毕的问题
date:      	2017-04-07 21:51:05 +0800
author:     Leo
categories: Learn
tags:       Java Hibernate
---
今天在做Hibernate开发的时候发现了一个问题，在使用NetBeans编译运行完程序之后，代码并不会自动退出，而是在后台保持running状态。在通过StackOverflow查询之后发现这是Hibernate4的一个已知BUG，`StandardServiceRegistry`即使在程序结束后也不会自动销毁，而必须手动关闭。看来这个BUG即使在Hibernate5中也并没有得到正确修复。

通过以下代码可以解决这个问题：

```java
sessionFactory.close();
StandardServiceRegistryBuilder.destroy(sessionFactory.getSessionFactoryOptions().getServiceRegistry());
```

可以想见，把这段代码放在`finally`块中是一个好选择。

