---
layout:     post
title:      用java模拟producer,consumer问题
date:      	2017-05-07 20:01:21 +0800
author:     Leo
categories: Learn
tags:       Java
---
```java
package com.leo.test;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ConsumerProducer
{
    public static final int MAX_SIZE = 10;
    
    public static void main(String[] args)
    {
        // LinkedList also implements Queue interface in java
        Queue queue = new LinkedList<>();
        Producer p = new Producer(queue, MAX_SIZE, "Producer");
        Consumer m = new Consumer(queue, "Consumer");
        Thread pt = new Thread(p);
        Thread mt = new Thread(m);
        pt.start();
        mt.start();
    }
}

class Producer implements Runnable
{
    private final Queue<Integer> queue;
    private final int capacity;
    private final String name;
    
    public Producer(Queue<Integer> queue, int capacity, String name)
    {
        this.queue = queue;
        this.capacity = capacity;
        this.name = name;
    }

    @Override
    public void run()
    {
        while (true)
        {
            synchronized (queue)
            {
                while (queue.size() == capacity)
                {
                   System.out.println("Queue is full! Production hault!");
                    try
                    {
                        queue.wait();
                    }
                    catch (InterruptedException ex)
                    {
                        Logger.getLogger(Producer.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
                
                Random r = new Random();
                int i = r.nextInt();
                queue.add(i);
                System.out.println(name + " begin produce: " + i);
                
                queue.notify();
            }
        }
    }
}

class Consumer implements Runnable
{ 
    private final Queue<Integer> queue;
    private final String name;

    public Consumer(Queue<Integer> queue, String name)
    {
        this.queue = queue;
        this.name = name;
    }
    
    @Override
    public void run()
    {
        while (true)
        {
            synchronized (queue)
            {
                while (queue.isEmpty())
                {
                    System.out.println("Queue is empty! Please make more product!");
                    try
                    {
                        queue.wait();
                    }
                    catch (InterruptedException ex)
                    {
                        Logger.getLogger(Consumer.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
                
                System.out.println(name + " begin consume: " + queue.remove());
                
                queue.notify();
            }
        }
    }
}
```

永远记得：

1. 使用`synchronized`关键字对代码块加锁时，要在线程间共享的对象上加锁。在这个例子中，就是`Queue`
2. 用`while`检测条件，不要用`if`
3. 在被加锁对象的状态发生改变时，记得调用`notify()`或者`notifyAll()`来防止死锁

如何正确地使用`wait()`：

```java
// The standard idiom for calling the wait method in Java
synchronized (sharedObject)
{
   while (condition)
   {
      sharedObject.wait(); // (Releases lock, and reacquires on wakeup)
   }
   ... // do action based upon condition e.g. take or put into queue
}
```
