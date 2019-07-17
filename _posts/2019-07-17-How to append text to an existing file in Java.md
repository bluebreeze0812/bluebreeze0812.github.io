---
layout:     post
title:      How to append text to an existing file in Java
date:       2019-07-17 23:25:31 +0800
author:     Leo
categories: Learn
tags:       Java
---

## Java 7+

If you just need to do this one time, the  [Files class](https://docs.oracle.com/javase/7/docs/api/java/nio/file/Files.html)  makes this easy:

```java
try {
    Files.write(Paths.get("myfile.txt"), "the text".getBytes(), StandardOpenOption.APPEND);
}catch (IOException e) {
    //exception handling left as an exercise for the reader
}
```

**Careful**: The above approach will throw a  `NoSuchFileException`  if the file does not already exist. It also does not append a newline automatically (which you often want when appending to a text file)

However, if you will be writing to the same file many times, the above has to open and close the file on the disk many times, which is a slow operation. In this case, a buffered writer is better:

```java
try(FileWriter fw = new FileWriter("myfile.txt", true);
    BufferedWriter bw = new BufferedWriter(fw);
    PrintWriter out = new PrintWriter(bw))
{
    out.println("the text");
    //more code
    out.println("more text");
    //more code
} catch (IOException e) {
    //exception handling left as an exercise for the reader
}
```

**Notes:**

-   The second parameter to the  `FileWriter`  constructor will tell it to append to the file, rather than writing a new file. (If the file does not exist, it will be created.)
-   Using a  `BufferedWriter`  is recommended for an expensive writer (such as  `FileWriter`).
-   Using a  `PrintWriter`  gives you access to  `println`  syntax that you're probably used to from  `System.out`.
-   But the  `BufferedWriter`  and  `PrintWriter`  wrappers are not strictly necessary.


## Older Java

```java
try {
    PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter("myfile.txt", true)));
    out.println("the text");
    out.close();
} catch (IOException e) {
    //exception handling left as an exercise for the reader
}
```


## Exception Handling

If you need robust exception handling for older Java, it gets very verbose though:

```java
FileWriter fw = null;
BufferedWriter bw = null;
PrintWriter out = null;
try {
    fw = new FileWriter("myfile.txt", true);
    bw = new BufferedWriter(fw);
    out = new PrintWriter(bw);
    out.println("the text");
    out.close();
} catch (IOException e) {
    //exception handling left as an exercise for the reader
}
finally {
    try {
        if(out != null)
            out.close();
    } catch (IOException e) {
        //exception handling left as an exercise for the reader
    }
    try {
        if(bw != null)
            bw.close();
    } catch (IOException e) {
        //exception handling left as an exercise for the reader
    }
    try {
        if(fw != null)
            fw.close();
    } catch (IOException e) {
        //exception handling left as an exercise for the reader
    }
}
```
