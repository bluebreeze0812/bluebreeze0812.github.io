---
layout:     post
title:      使用socket编程实现一个多线程的echo服务器
date:      	2017-04-26 14:05:39 +0800
author:     Leo
categories: Learn
tags:       Java
---
```java
package com.leo.test;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

public class SocketThreadTest
{
    private static final int SERVER_PORT = 10801;
    
    public static void main(String[] args) throws IOException
    {
        try (ServerSocket server = new ServerSocket(SERVER_PORT))
        {
            while (true)
            {
                Socket socket = server.accept();
                SocketThreadHandler socketThread = new SocketThreadHandler(socket);
                Thread t = new Thread(socketThread);
                t.start();
            }
        }
    }
}

class SocketThreadHandler implements Runnable
{
    private Socket client;

    public SocketThreadHandler(Socket client)
    {
        this.client = client;
    }
    
    @Override
    public void run()
    {
        try 
        {
            InputStream inputStream = client.getInputStream();
            OutputStream outputStream = client.getOutputStream();
            
            Scanner in = new Scanner(inputStream);
            PrintWriter out = new PrintWriter(outputStream, true);
            
            out.println("Hello there! Say anything you like or print 'bye' to exit.");
            
            while (in.hasNextLine())
            {
                String line = in.nextLine().trim();
                if (line.equalsIgnoreCase("bye"))
                {
                    client.close();
                }
                else
                {
                    out.println("Echo: " + line);
                }
            }
        } 
        catch (IOException ex) {
            Logger.getLogger(SocketThreadHandler.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}

```

值得注意的是这里的`PrintWriter`建议将它的构造器第二个参数置为`true`(auto-flush)，或者显式flush，不然你将看不到任何输出，因为内容只保存在内存中。

使用`telnet`工具连接到本地的10801端口可以进行测试。

		telnet localhost 10801
