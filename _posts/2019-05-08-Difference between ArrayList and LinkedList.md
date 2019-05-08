---
layout:     post
title:      Difference between ArrayList and LinkedList
date:       2019-05-08 20:32:45 +0800
author:     Leo
categories: Learn
tags:       Java
---

ArrayList and LinkedList both implements `List` interface and maintains insertion order. Both are non synchronized classes.

However, there are many differences between ArrayList and LinkedList classes that are given below.

1.  Insertions are easy and fast in LinkedList as compared to ArrayList because there is no risk of resizing array and copying content to new array if array gets full which makes adding into ArrayList of `O(n)` in worst case, while adding is `O(1)` operation in LinkedList in Java. ArrayList also needs to be update its index if you insert something anywhere except at the end of array.
    
2.  Removal also better in LinkedList than ArrayList due to same reasons as insertion.

3.  LinkedList has more memory overhead than ArrayList because in ArrayList each index only holds actual `object` (data) but in case of LinkedList each node holds both data and `address` of next and previous node.

4.  Both LinkedList and ArrayList require `O(n)` time to find if an element is present or not. However we can do Binary Search on ArrayList if it is sorted and therefore can search in `O(Log n)` time.

#### Example of ArrayList and LinkedList in Java
```java
import java.util.*;
class TestArrayLinked {
    public static void main (String args[]) {
        List<String> al=new ArrayList<String>();//creating arraylist    
        al.add("Ravi");//adding object in arraylist    
        al.add("Vijay");    
        al.add("Ravi");    
        al.add("Ajay");    

        List<String> al2=new LinkedList<String>();//creating linkedlist    
        al2.add("James");//adding object in linkedlist    
        al2.add("Serena");    
        al2.add("Swati");    
        al2.add("Junaid");    

        System.out.println("arraylist: "+al);  
        System.out.println("linkedlist: "+al2);  
    }
}
```
