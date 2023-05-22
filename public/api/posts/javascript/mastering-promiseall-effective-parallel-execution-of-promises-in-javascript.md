---
title: 'Mastering Promise.all(): Effective Parallel Execution of Promises in JavaScript'
date: '2023-05-22'
---

In this article we will discuss about `Promis.all()`. What is it and how we can implement our own.

## JavaScript Promise.all

`Promise.all` is a built-in `JavaScript` method that allows you to handle multiple promises concurrently and wait for all of them to resolve or reject. It takes an array (or any iterable) of promises as input and returns a new promise.

## How Promise.all works

- If all the input promises in the array fulfill (resolve) successfully, `Promise.all` returns a new promise that fulfills with an array of the resolved values in the same order as the input promises.

- If any of the input promises reject (have an error), the `Promise.all` immediately rejects with the reason of the first promise that rejects. The remaining promises in the input array are ignored, and their results are not included in the output array.

- The returned promise will only fulfill when all the input promises fulfill or reject. It acts as a "gate" that waits for all the promises to complete.

Here's an example usage of `Promise.all`:

```
const promise1 = Promise.resolve('I 🧡');
const promise2 = new Promise(resolve => setTimeout(resolve, 2000, 'React'));

Promise.all([promise1, promise2])
  .then(results => {
    console.log(results); // [ 'I 🧡 ', 'React' ]
    // Handle the results by joining them with a space
    console.log(results.join(' ')); // I 🧡 React
  })
  .catch(error => {
    console.error(error); // Handle the rejection error
  });

```

In the example, `Promise.all` is used to wait for the completion of two promises: `promise1`, `promise2`. The `.then()` method is used to handle the array of resolved values when all promises fulfill, and the `.catch()` method is used to handle any rejection error.

Note that `Promise.all` is useful when you have a collection of promises and want to handle their results collectively. It provides a way to perform operations on multiple promises in parallel and synchronize their completion.

## Implementing a Custom `Promise.all` Function

In the next chapter, we will walk through the process of implementing our own version of `Promise.all` to gain a deeper understanding of how it works under the hood.

### Creating the Custom Function

Let's start by creating our own function called `PromiseAll`, which will take an `array` of promises as its input parameter:

```
function PromieAll(promises) {
  // Handle promises
}
```

The next step is to return a new `Promise` from our `PromiseAll` function:

```
function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    // Handle each promise
  });
}
```

### Iterating Over Promises

Inside the PromiseAll function, we need to iterate over each promise in the input array and handle their resolution or rejection:

```
function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(async (promise, index) => {
      // Handle each promise
    });
  });
}
```

### Handling Resolved and Rejected Promises

Now, let's add the necessary logic to handle each promise and keep track of the results:

```
function PromiseAll<T>(promises: Promise<T>[]): Promise<T[]> {
  // Save resolved promise
  const results: T[] = [];

  // Keep track of all promises
  let pending = promises.length;

  return new Promise((resolve, reject) => {
    promises.forEach(async (promise, index) => {
      try {
        results[index] = await promise;

        // Decrement pending
        pending--;

        if (pending === 0) {
          resolve(results);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
}
```

### Testing the Implementation

Finally, let's test our `PromiseAll` implementation using a few example scenarios:

```
function soon(val: number): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}

PromiseAll([]).then(result =>
  console.log('This should be an empty array []:', result)
);

PromiseAll([soon(1), soon(2), soon(3)]).then(result =>
  console.log('This should be [1, 2, 3]:', result)
);

PromiseAll([soon(1), Promise.reject('🤖'), soon(3)])
  .then(() => console.log('We should not get here'))
  .catch(error => console.log('Unexpected failure', error));
```

By running these test cases, you can verify that our custom `ProimiseAll` function behaves similarly to the native `Promise.all` implementation.

With this custom implementation, you now have a deeper understanding of how `Promise.all` works and can adapt it to fit your specific needs or explore further modifications.

Feel free to experiment and enhance this custom implementation as you continue to explore JavaScript promises and their powerful capabilities.

Happy coding!
