---
title: 'Whats new in JavaScript ES6?'
date: '2023-05-19'
---

**JavaScript ES6**, also known as **ECMAScript 2015**, brought many significant and powerful **features** to the language. Here are some of the notable additions:

## let and const:

These provide **block scope variable** and **constant declarations**, respectively. Unlike var, which is **function-scoped**, let and const are **block-scoped**.

```
let name = 'Alex';
const age = 38;
```

## Arrow functions:

A new syntax for writing functions in a more concise way. They also have the benefit of not creating their own **this context**, so they're handy when you want to **preserve** the **this** value from an outer function or method.

```
const calculateTax = (income, taxRate) => income * (taxRate / 100);
```

## Template literals:

These allow for easier string **interpolation**, **multi-line strings**, and can be used to create **domain-specific** languages.

```
const name = 'Alex';
const text = `Hello, my name is ${name} and I'm a Software Engineer.`;
```

## Destructuring assignment:

This feature allows you to **unpack values** from arrays or properties from objects into distinct variables.

```
const numbers = [1, 2, 3, 4, 5];

const [one, two, three, four, five] = numbers;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
console.log(four); // 4
console.log(five); // 5

const person = {
  name: 'Alex',
  age: 38,
  address: {
    city: 'Bucharest',
    country: 'Romania'
  }
}

const { name, age, address } = person;

console.log(name); // Alex
console.log(age); // 38
console.log(address); // { city: 'Bucharest', country: 'Romania' }

```

## Default parameter values:

Functions can now have default values specified for **parameters**.

```
const calculateTax = (income, taxRate = 0.9) => income * (taxRate / 100);
```

## Rest parameters and spread operator:

The **rest parameter** syntax allows us to represent an indefinite number of arguments as an array, and the **spread operator** allows an **iterable** (like an array or string) to be expanded in places where zero or more arguments or elements are expected.

### Rest parameters

```
const Content = ({ body, ...boxProps}) => {
  return (
    <HStact>
      <Box {...boxProps}>
        {body}
      </Box>
    </HStach>
  )
}
```

### Spread operator

```
const person = {
  name: 'Alex',
  age: 38,
  address: {
    city: 'Bucharest',
    country: 'Romania'
  }
}

const person2 = { ...person }; // Shallow copy!!!
```

## Promises:

Promises represent an eventual completion (or failure) and its resulting value, providing a more powerful and flexible way of handling **asynchronous operations** over traditional **callback-based** approaches.

```
// resolve a Promise imediatelly
Promise.resolve('Done');

// reject a Promise imediatelly
Promise.reject('Failed');

const getUser = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const userData = {
        id: 1,
        name: 'Alex',
        role: 'Admin'
      };

      resolve(userData);
    }, 1000);
  })
}

const printUser = async () => {
  const user = await getUser();

  console.log(user);
}

printUser(); // {
    "id": 1,
    "name": "Alex",
    "role": "Admin"
}
```

## Classes:

**JavaScript** is a **prototype-based** language and doesn't have classes in the traditional sense. However, ES6 **introduces class syntax** as a syntactical sugar over **prototype-based inheritance**, making it easier for developers coming from a class-based language to adapt.

```
class Person {
  constructor(name, profession) {
    this.name = name;
    this.profession = profession;
  }
}

const person = new Person('Alex', 'Software Engineer');

console.log(`Hello, my name is ${person.name} and I'm a ${person.profession}.`);
// Hello, my name is Alex and I'm a Software Engineer.
```

## Modules:

ES6 introduces a **module** system where you can import and export functions, objects, or values from module to module.

```index.html
main.js
modules/
  canvas.js
  square.js
```

## Enhanced object literals:

This feature allows for a more concise syntax to create objects, including **shorthand** for property methods and names.

### Without object literals

```
const name = 'Alex';

const person = {
  name: name,
  age: 38,
  address: {
    city: 'Bucharest',
    country: 'Romania'
  }
}
```

### With object literals

```
const person = {
  name, // the key/value pair have the same "name"
  age: 38,
  address: {
    city: 'Bucharest',
    country: 'Romania'
  }
}
```

## Generators:

In **JavaScript**, a **generator** is a function that can stop midway and then continue from where it left off. **Generators** are a special kind of function that can **pause execution** and resume later, allowing other code to run in the meantime.

**Generators** are defined using the **function\*** syntax, and they use the **yield keyword** to pause the function execution.

This ability to pause and resume execution makes **generators** a powerful feature in **JavaScript**, as they can be used to **handle asynchronous** operations, iterate over large data sets without blocking the main thread, implement custom, complex iterators and much more.

```
function* generatePromises(start, end) {
  for (let i = start; i <= end; i++) {
    yield new Promise((resolve) => resolve(i));
  }
}

async function processPromises() {
  let count = 0;
  const promisesGenerator = generatePromises(1, 1000000);

  for await (const promise of promisesGenerator) {
    await promise;

    count++;
  }

  console.log(`Processed ${count} promises.`);
}

processPromises();
```

These are just a few of the many enhancements and additions that came with **ES6**. The full list is much longer and includes features like **generators**, **iterators**, **Maps**, **Sets**, and much more.

```

```
