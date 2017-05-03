---
layout:     post
title:      Maven下载catalog文件超时问题
date:      	2017-05-03 14:26:16 +0800
author:     Leo
categories: Learn
tags:       Java Maven
---
在maven的[入门教程](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)里面，有这样一个命令：

		mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
		
这句话的命令是创建一个默认的项目，但我在执行这个命令时，命令行会停在

		[INFO] Generating project in Batch mode
		
这句话会停很久。(当然，如果人品爆发也可能很快就过去)

增加一个-X参数，可以查看详细信息

		 mvn -X archetype:generate -DgroupId=com.mycompy.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
		
可以看到，进程停在了下面这一行：

		[DEBUG] Searching for remote catalog: https://repo.maven.apache.org/maven2/archetype-catalog.xml

去查询这个文件的时候网络比较差或者其他原因，导致挂在那里。

既然知道了症结，解决方式就显而易见了，我们可以直接从这个网站上把xml文件给down下来，放在想建立Maven Project的文件夹下，然后在构建的时候加上参数`-DarchetypeCatalog=local`就可以了。

		 mvn -X archetype:generate -DgroupId=com.mycompy.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false -DarchetypeCatalog=local

		

