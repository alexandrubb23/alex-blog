---
title: 'Shallow Copy vs. Deep Copy: Understanding Object Copying in JavaScript'
date: '2023-05-18'
---

Before diving in, let's try to understand the difference between a shallow copy and a deep copy of an object.

## Shallow Copy

A shallow copy creates a new object and copies the references of the properties from the original object. The new object shares the same memory references as the original object for its properties. In other words, any changes made to the properties of the copied object will affect the original object and vice versa.

## Deep copy

A deep copy creates a completely independent copy of the original object and its properties. It recursively copies all the properties, including nested objects, so that any changes made to the copied object do not affect the original object, and vice versa. Deep copy ensures a complete separation of the data between the original and copied objects.

## Differences between shallow copy and deep copy

To ilustrate the differences, consider the following example:

```code
const person = {
  name: 'Alex',
  age: 38,
  address: {
    city: 'Bucharest',
    country: 'Romania',
  },
  hobbies: ['Reading', 'Sports', 'Games'],
};

```

## Shallow copy of person

```code
const shallowCopyPerson = Object.assign({}, person)
```

In the example above, the shallow copy (`shallowCopyPerson`) retains the same references for the nested objects (`hobbies` array and `address` object). As a result, modifying thos properties in the shallow copy also affects the original object.

## Deep copy of person

```code
const deepCopyPerson = JSON.parse(JSON.stringify(person));
```

On the other hand, the deep copy (`deepCopyPerson`) creates a completely independent copy, including separate copies of the nested objects. Modifying the deep copy does not affect the original object, demonstrating a true separation between the two.

It's important to note that while **JSON.parse** and **JSON.stringify** provide a convenient way to create a deep copy, they have limitations. They cannot handle functions, undefined values, and cyclic references within the object structure. In such cases, you would need to use alternative deep copy techniques, such as recursive cloning.

## Implement a custom deep copy function

We have mulltiple options for doing a deep copy of an object

### Using lodash [deepCopy](https://lodash.com/docs/4.17.15#cloneDeep) function

```code
import { cloneDeep } from 'lodash/cloneDeep';

const deepCopy = cloneDeep({
  name: 'Alex',
  age: 38,
  address: {
    city: 'Bucharest',
    country: 'Romania',
  },
  hobbies: ['Reading', 'Sports', 'Games'],
});
```

### Or we can implement our own method:

```code
function cloneDeep(object, clonedObjects = new WeakMap()) {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (clonedObjects.has(object)) {
    return clonedObjects.get(object);
  }

  const clonedObject = Array.isArray(object) ? [] : {};

  clonedObjects.set(object, clonedObject);

  if (Array.isArray(object)) {
    for (const item of object) {
      clonedObject.push(cloneDeep(item, clonedObjects));
    }
  } else {
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        clonedObject[key] = cloneDeep(object[key], clonedObjects);
      }
    }
  }

  return clonedObject;
}

```
