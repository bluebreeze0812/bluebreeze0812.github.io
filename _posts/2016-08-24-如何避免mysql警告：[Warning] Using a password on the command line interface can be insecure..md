---
layout:     post
title:      如何避免mysql警告：[Warning] Using a password on the command line interface can be insecure.
date:       2016-08-24 20:50:00 +0800
author:     Leo
categories: Learn
tags:       MySQL
---
在shell中运行如下命令：

```shell
mysql_config_editor set --login-path=local --host=localhost --user=username --password
```

在确认过密码后，再次登录mysql时就可以键入：

```shell
mysql --login-path=local
```

完成！以后不管是在shell程序还是在.sh文件都可以使用以上命令来登录mysql了。

