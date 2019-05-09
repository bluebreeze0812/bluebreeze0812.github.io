---
layout:     post
title:      Difference between HashMap and HashSet
date:       2019-05-09 23:13:01 +0800
author:     Leo
categories: Learn
tags:       Java
---
HashSet is implementation of Set Interface which does not allow duplicate value. The main thing is, objects that are stored in HashSet must override `equals()` for check for equality and `hashCode()` methods for no duplicate value are stored in our set.

HashMap is an implementation of `Map` Interface, which map a key to value. Duplicate keys are not allowed in a map.Basically Map Interface has two implementation classes HashMap and TreeMap the main difference is TreeMap maintains order of the objects but HashMap will not.HashMap allows null values and null keys.

Both HashSet and HashMap are not synchronized.

****Differences:****
1. Implementation
	HashMap implements `Map` interface and HashSet implements `Set` interface.

2. Duplicates
	HashSet does’t allow duplicate values. HashMap store key, value pairs and it does not allow duplicate keys. If key is duplicate then old key is replaced with new value.

3. Number of objects during storing objects
	HashMap requires two objects `put(K key, V Value)` to add an element to HashMap object, while HashSet requires only one object `add(Object o)` .

4. Dummy value
	In HashMap no concept of dummy value, HashSet internally uses HashMap to add elements. In HashSet, the argument passed in  `add(Object)`  method serves as key `K`. Java internally associates dummy value for each value passed in `add(Object)` method.

5. Storing or Adding mechanism
	HashMap internally uses hashing to store or add objects, HashSet internally uses HashMap object to store or add the objects.

****Examples:****
```java
// HashSet 
import java.util.HashSet; 
  
public class HashSetExample { 
    public static void main(String[] args) { 
        HashSet<String> hs = new HashSet<String>(); 
        
        hs.add("geeks"); 
        hs.add("practice"); 
        hs.add("contribute"); 
        
        System.out.println("Before adding duplicate values \n\n" + hs); 
  
        // Addition of duplicate elements 
        hs.add("geeks"); 
        hs.add("practice"); 
  
        System.out.println("\nAfter adding duplicate values \n\n" + hs); 
  
        // Addition of null values 
        hs.add(null); 
        hs.add(null); 
  
        // Displaying HashSet elements 
        System.out.println("\nAfter adding null values \n\n" + hs); 
    } 
} 
```

```java
Before adding duplicate values 

[practice, geeks, contribute]

After adding duplicate values 

[practice, geeks, contribute]

After adding null values 

[null, practice, geeks, contribute]
```

```java
import java.util.HashMap; 
  
public class HashMapExample { 
    public static void main(String[] args) { 
        HashMap<Integer, String> hm = new HashMap<Integer, String>(); 
        
        hm.put(12, "geeks"); 
        hm.put(2, "practice"); 
        hm.put(7, "contribute"); 
  
        System.out.println("\nHashMap object output :\n\n" + hm); 
  
        // store data with duplicate key 
        hm.put(12, "geeks"); 
  
        System.out.println("\nAfter inserting duplicate key :\n\n" + hm); 
    } 
} 
```

```java
HashMap object output :

{2=practice, 7=contribute, 12=geeks}

After inserting duplicate key :

{2=practice, 7=contribute, 12=geeks}
```
