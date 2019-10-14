---
layout:     post
title:      Quick Sort
date:       2019-10-14 17:09:57 +0800
author:     Leo
categories: Learn
tags:       Java algorithm
---
Quick sort picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.

* Always pick first element as pivot.
* Always pick last element as pivot (implemented below)
* Pick a random element as pivot.
* Pick median as pivot.

The key process in quickSort is `partition()`. Target of partitions is, given an array and an element `x` of array as pivot, put `x` at its correct position in sorted array and put all smaller elements (smaller than `x`) before `x`, and put all greater elements (greater than `x`) after `x`. All this should be done in linear time.

Pseudo Code for recursive QuickSort function :

```
/* low  --> Starting index,  high  --> Ending index */
quickSort(arr[], low, high) {
    if (low < high)
    {
        /* pi is partitioning index, arr[pi] is now
           at right place */
        pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);  // Before pi
        quickSort(arr, pi + 1, high); // After pi
    }
}
```

Pseudo Code for Partition function :

```
/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
    array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
partition (arr[], low, high) {
    // pivot (Element to be placed at right position)
    pivot = arr[high];  

    i = (low - 1)  // initial index

    for (j = low; j <= high- 1; j++) {
        // If current element is smaller than the pivot
        // or else does nothing
        if (arr[j] < pivot) {
            i++;    // increment index of smaller element
            swap arr[i] and arr[j]
        }
    }

    /* out of the loop, now the only element left is arr[high] (pivot), we now swap pivot to its right place, which is arr[i + i] */
    swap arr[i + 1] and arr[high])

    // return the index of pivot
    return (i + 1)
}
```

Implemention :

```java
package sort;

public class QuickSort {

	public static void sort(int[] arr, int low, int high) {

		if (low < high) {
			int sorted = QuickSort.partition(arr, low, high);
			QuickSort.sort(arr, low, sorted - 1);
			QuickSort.sort(arr, sorted + 1, high);
		}
	}

	private static int partition(int[] arr, int low, int high) {

		int pivot = arr[high];
		int i = low - 1;

		for (int j = low; j <= high - 1; j++) {
			if (arr[j] < pivot) {
				i++;
				int tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}

		int tmp = arr[i + 1];
		arr[i + 1] = pivot;
		arr[high] = tmp;

		return (i + 1);
	}
}

```
