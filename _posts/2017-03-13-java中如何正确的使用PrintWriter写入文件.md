---
layout:     post
title:      java中如何正确的使用PrintWriter写入文件
date:      	2017-03-13 13:16:27 +0800
author:     Leo
categories: Learn
tags:       Java
---
在java中如果创建了一个`PrintWriter`对象想写入文件，必须在写入完成后调用`PrintWriter::close()`方法，不然你会发现在指定目录创建了一个空文件。

实例：

```java
public class test 
{
    public static void main(String args[]) 
    {
        try 
        {
            Scanner s = new Scanner(Paths.get("build.xml"));
            StringBuilder sb = new StringBuilder();
            while (s.hasNext())
            {
                sb.append(s.nextLine());
                sb.append("\n");
            }
            String output = sb.toString();
            PrintWriter pw = new PrintWriter("D:\\mytext.xml");
            pw.println(output);
            //Important!!
            pw.close();
        } 
        catch (IOException ex) 
        {
            Logger.getLogger(test.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
```
