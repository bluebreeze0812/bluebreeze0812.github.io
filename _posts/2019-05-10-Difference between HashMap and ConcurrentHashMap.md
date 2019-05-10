---
layout:     post
title:      Difference between HashMap and ConcurrentHashMap
date:       2019-05-10 23:51:44 +0800
author:     Leo
categories: Learn
tags:       Java
---
HashMap is the Class which is under Traditional Collection and ConcurrentHashMap is a Class which is under Concurrent Collections, apart from this there are various differences between them which are:

1. HashMap is non-Synchronized in nature i.e. HashMap is not Thread-safe whereas ConcurrentHashMap is Thread-safe in nature.

2. HashMap performance is relatively high because it is non-synchronized in nature and any number of threads can perform simultaneously. But ConcurrentHashMap performance is low sometimes because sometimes Threads are required to wait on ConcurrentHashMap.

3. While one thread is Iterating the HashMap object, if other thread try to add/modify the contents of Object then we will get Run-time exception saying `ConcurrentModificationException`.Whereas In ConcurrentHashMap we wont get any exception while performing any modification at the time of Iteration.

4. In HashMap, `null` values are allowed for key and values, whereas in ConcurrentHashMap `null` value is not allowed for key and value, otherwise we will get Run-time exception saying `NullPointerException`.

5. HashMap is introduced in `JDK 1.2` whereas ConcurrentHashMap is introduced by SUN Microsystem in `JDK 1.5`.

****Using HashMap****
```java
import java.util.HashMap; 
  
class HashMapDemo extends Thread { 
    static HashMap<Integer,String> l = new HashMap<Integer,String>(); 
  
    public void run() { 
        // Child thread trying to add 
        // new element in the object 
        l.put(103,"D"); 
      
        try { 
            Thread.sleep(1000); 
        } catch(InterruptedException e) { 
            System.out.println("Child Thread going to add element"); 
        } 
    } 
  
    public static void main(String[] args) throws InterruptedException { 
        l.put(100,"A"); 
        l.put(101,"B"); 
        l.put(102,"C"); 
        HashMapDemo t=new HashMapDemo(); 
        t.start(); 
          
        for (Object o : l.entrySet()) { 
            Object s=o; 
            System.out.println(s); 
            Thread.sleep(1000); 
        } 
        System.out.println(l); 
    } 
} 
```

****Output:****
```java
100=A
Exception in thread "main" java.util.ConcurrentModificationException
```

****Using ConcurrentHashMap****
```java
import java.util.HashMap; 
import java.util.concurrent.*; 
  
class ConcurrentHashMapDemo extends Thread { 
    static ConcurrentHashMap<Integer,String> l = new ConcurrentHashMap<Integer,String>(); 
  
    public void run() { 
      
        // Child add new element in the object 
        l.put(103,"D"); 
          
        try { 
            Thread.sleep(2000); 
        } catch(InterruptedException e) { 
            System.out.println("Child Thread going to add element"); 
        } 
    } 
      
    public static void main(String[] args) throws InterruptedException { 
        l.put(100,"A"); 
        l.put(101,"B"); 
        l.put(102,"C"); 
        HashMapDemo t=new HashMapDemo(); 
        t.start(); 
          
        for (Object o : l.entrySet()) { 
            Object s=o; 
            System.out.println(s); 
            Thread.sleep(1000); 
        } 
        System.out.println(l); 
    } 
} 
```
****Output:****
```java
100=A
101=B
102=C
103=D
{100=A, 101=B, 102=C, 103=D}
```
----

### `null`values demonstration
**Using HashMap**
```java
import java.util.*; 
class HashMapDemo { 
    public static void main(String[] args) { 
        HashMap m=new HashMap(); 
        m.put(100,"Hello"); 
        m.put(101,"Geeks"); 
        m.put(102,"Geeks"); 
        m.put(null,"World"); 
        System.out.println(m); 
    } 
}
```
**Output:**
```java
{null=World, 100=Hello, 101=Geeks, 102=Geeks}
```

**Using ConcurrentHashMap**
```java
import java.util.concurrent.*; 
class ConcurrentHashMapDemo { 
    public static void main(String[] args) { 
        ConcurrentHashMap m=new ConcurrentHashMap(); 
        m.put(100,"Hello"); 
        m.put(101,"Geeks"); 
        m.put(102,"Geeks"); 
        m.put(null,"World"); 
        System.out.println(m); 
    } 
} 
```
**Output:**
```java
Exception in thread "main" java.lang.NullPointerException
```
