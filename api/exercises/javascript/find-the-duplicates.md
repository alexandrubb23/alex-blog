---
title: 'Find the Duplicates'
date: '2023-05-31'
topic: 'JavaScript'
---

Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns an array of all passport numbers that are both arrays. Note that the output array should be sorted in ascending order.

Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the time & space complexities of your solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.

Example:

```
input:  arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]

output: [3, 6, 7] # since only these three values are both in arr1 and arr2
```

## JavaScript FP solution

First, the JavaScript Gigher Order Functions solution

```
function findDuplicates(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

const arr1 = [1, 2, 3, 5, 6, 7];
const arr2 = [3, 6, 7, 8, 20];

console.log(findDuplicates(arr1, arr2));
```

## Brute force solution

First, the brute force solution. Try two nested loops. For every value arr1[i] in the outer loop, we look it up in arr2 in the inner loop. The time complexity of this algorithm in the worst case scenario is O(N⋅M). Not very efficient. We can do better than that.

Case 1 (M ≈ N)
We can use the fact the arrays are sorted to traverse both of them in an in-order manner at the same time. The general idea of the algorithm is to use two indices, i and j, for arr1 and arr2, respectively. Every time one of indices, let’s say i without any loss of generality, points to a value that is smaller than the value pointed by other index, we increment i. If arr1[i] == arr2[j], we add the value to the output array and increment both indices.

```
function findDuplicates(arr1, arr2) {
  const duplicates = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      duplicates.push(arr1[i]);
      i = i + 1;
      j = j + 1;
    } else if (arr1[i] < arr2[j]) {
      i = i + 1;
    } else {
      j = j + 1
    }
  }

  return duplicates;
}

const arr1 = [1, 2, 3, 5, 6, 7];
const arr2 = [3, 6, 7, 8, 20];

console.log(findDuplicates(arr1, arr2));
```

Time Complexity: O(N+M) since in the worst case scenario we traverse both arrays once. Note that O(N+M) is a linear time complexity because the input size is O(N+M) as well.

Space Complexity: the variable duplicates is the only dynamic auxiliary space we’re using in the algorithm. In the worst case scenario, the size of duplicates is going to be as big as big as the smaller input array. For instance, when the smaller array is fully contained within the bigger one. The space complexity is therefore O(N), where N ≤ M.

## Case 2 (M ≫ N) - Binary Search

When one array is substantially longer than the other, we should try to avoid traversing the longer one. Instead, we can traverse the shorter array and look up its values in the longer array by using the binary search algorithm. We explain why this approach is superior in this case to the previous one in the complexity analysis section.

```
function findDuplicates(arr1, arr2) {
  const duplicates = [];

  for (number of arr1) {
    if (binarySearch(arr2, number) !== -1)
      duplicates.push(number);
  }

  return duplicates;
}

function binarySearch(arr, num) {
  begin = 0;
  end = arr.length - 1;

  while (begin <= end) {
    mid = begin + Math.floor((end-begin) / 2);
    if (arr[mid] < num) {
      begin = mid + 1;
    } else if (arr[mid] === num) {
      return mid;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

const arr1 = [1, 2, 3, 5, 6, 7];
const arr2 = [3, 6, 7, 8, 20];

console.log(findDuplicates(arr1, arr2));
```
