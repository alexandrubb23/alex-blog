---
title: 'Undertanding the Differences: __proto__ vs prototype in JavaScript'
date: '2023-05-25'
---

In JavaScript, both `__proto__` and `prototype` are related to the object prototype chain and inheritance. However, they have different purposes and usage.

Lets's explore the differences between them:

## `Object.prototype.__proto__`

- Is a non-standard property that exists on every object in `JavaScript` (except `null` and `undefined`)
- It provides a reference to the objects's prototype
- It allow access to the prototype of an object at runtime
- It can be used for prototype chain traversal to access properties and methods inherited from the prototype

While `__proto__` is widely supported in moder browsers, it is not part of the `ECMAScript` standard and its usage is generally discouraged. Instead, the recommended approach is to use the `Object.getPrototypeOf()` and `Object.setPrototypeOf()` methods to work with prototypes.

## `Object.prototype`

- Is a property that exists on constructor functions (`functions` used as classes) in `JavaScript`.
- Is an object that serves as the blueprint for creating new objects with the `new` keyword.
- The `prototype` object is used to define properties and methods that will be inherited by instances created from the constructor function.
- It is not accesible directly from instances but is accessible as `ConstructorFunction.prototype`.
- When a new instance is created, the `__proto__` property of the instance is set to the `prototype` of the constructor functions.

Let's illustrate the usage of `__proto__` and `prototype`:

```
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
}

const person = new Person('Alex');

console.log(person.__proto__ === Person.prototype); // true

person.sayHello(); // Output: Hello, my name is Alex
```

In the example above, `Person.prototype` is the prototype object that contains the `sayHello` method. Whe the `Person` constructor function is used to create a new instance (`person`), the `__proto__` property in person points to `Person.prototype`, allowing `person` to access and inherit the `sayHello` method.

⚠️ It's important to note that while `__proto__` is non-standard and should be avoided in favor of `Object.getPrototypeOf` and `Object.setPrototypeOf()`, the `prototype` is a fundamental concept for defining the prototype-based inheritance in JavaScript.

Happy coding 🙂
