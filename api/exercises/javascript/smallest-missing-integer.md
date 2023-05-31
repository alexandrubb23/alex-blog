---
title: 'Smallest Missing Integer'
date: '2023-05-31'
topic: 'JavaScript'
---

Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that finds the smallest nonnegative integer that is NOT in the array.

Even if your programming language of choice doesn’t have that restriction (like Python), assume that the maximum value an integer can have is MAX_INT = 2^31-1. So, for instance, the operation MAX_INT + 1 would be undefined in our case.

Solve first for the case when you’re NOT allowed to modify the input arr. If successful and still have time, see if you can come up with an algorithm with an improved space complexity when modifying arr is allowed. Do so without trading off the time complexity.

Analyze the time and space complexities of your algorithm.

Example:

input: arr = [0, 2, 1, 3, 5]

output: 4

A super naive solution is to randomly pick numbers from 0 to MAX_INT and check if they are in arr. However, this is not a good approach. First, the worst-case scenario doesn’t even have an upper bound. We could be very unlucky and keep withdrawing numbers that are in the array. Also, If the size of arr is very large, we'll have to look up the random numbers in that array many times.

Another simple solution is to keep a record of the minimum/maximum while iterating over all numbers in arr and then produce numbers smaller/larger than all numbers in arr. However, this won't work if the minimum number is 0 and the maximum number is MAX_INT. Another iteration tactic is returning the sum of all numbers, but it won't work, for instance, for the array [0, 3]. Also, returning the multiplication of all numbers in arr wouldn’t be correct if 0 is one of the numbers in arr.

There are many possible solutions to this problem. We’ll review some of them here.

The brute force solution
A simple solution would be to create a copy arr, sort that copy in an ascending order, iterate over its values, and then return the first index for which the condition i != arrSorted[i] is met, where arrSorted is the sorted copy of arr. This approach works since all the values in arr are nonnegative integers.

Solution:

```
function getDifferentNumber(arr) {
  const n = arr.length;

  const arrSorted = [...arr];
  arrSorted.sort();

  for (let i = 0; i <= n - 1; i++) {
    // [0, 1, 2, 3, 5];
    console.log(`${arrSorted[i]} !== ${i}`);
    if (arrSorted[i] !== i) return i;
  }

  return n;
}

const arr = [0, 2, 1, 3, 5];

console.log(getDifferentNumber(arr));
```

Time Complexity: duplicating the array is O(N), sorting it is O(N⋅log(N)), and then traversing the array is another O(N). The total time complexity is, therefore, O(N⋅log(N)).

Space Complexity: we used a single auxiliary array, arrSorted, whose size is the same as arr. The space complexity is O(N).

The efficient solution
The reason we needed to sort arrSorted in the brute force solution above was because doing so allowed us to cap the number of lookups to O(N). However, if all that we’re doing is simply checking whether certain values exist, then there is a better data structure for this purpose, which obviates the need for sorting. That data structure is the Set. A Set is similar to a Hash Table (a.k.a Map or Hash Map). Both support lookups and insertions in O(1) time. The difference is that while a hash table returns a value that is mapped to a key, a set returns a boolean: true if a looked-up element exists in the set and false otherwise.

The new algorithm is practically identical to the brute force one, but instead of using a duplicate array and sorting it, we’ll use a set.

## Efficient solution

```
function getDifferentNumber(arr) {
  const n = arr.length;

  const set = new Set(arr);
  for (let i = 0; i <= n - 1; i++) {
    if (set.has(i) === false) return i
  }

  return n;
}

const arr = [0, 2, 1, 3, 5];

console.log(getDifferentNumber(arr));
```

Time Complexity: With sorting gone, the time complexity consists of building the set, which is O(N) and the lookup loop, which is also O(N). The reason the time complexity of the lookup loop is linear is because find()‘s time complexity is constant, i.e. O(1). The total time complexity is therefore O(N).

Space Complexity: We used a single auxiliary set whose size is the same as arr. Hence, the space complexity is O(N).
