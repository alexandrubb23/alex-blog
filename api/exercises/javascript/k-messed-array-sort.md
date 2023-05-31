---
title: 'K-Messed Array Sort'
date: '2023-05-31'
topic: 'JavaScript'
---

Given an array of integers arr where each element is at most k places away from its sorted position, code an efficient function sortKMessedArray that sorts arr.

A simple solution would be to use an efficient sorting algorithm to sort the whole array again. The worse-case time complexity of this approach will be O(n\*log(n)) where N is the size of the input array. This method also does not use the fact that the array is k-sorted.

We can also use an insertion sort that will correct the order in just O(n\*k) time.
Insertion Sort performs really well for small values of k but it is not recommended for large values of k (use it for k < 12).

```
function sortKMessedArray(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    let currentElement = arr[i];
    let previousElement = i - 1;

    while(previousElement >= 0 && arr[previousElement] > currentElement) {
      arr[previousElement + 1] = arr[previousElement];
      previousElement--;
    }

    arr[previousElement + 1] = currentElement;
  }

  return arr;
}

const arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
const sorted = sortKMessedArray(arr);

console.log(sorted);
```
