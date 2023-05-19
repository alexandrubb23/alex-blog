---
title: 'Whats new in JavaScript ES6?'
date: '2023-05-19'
---

**JavaScript ES6**, also known as **ECMAScript 2015**, brought many significant and powerful **features** to the language. Here are some of the notable additions:

## let and const:

These provide **block scope variable** and **constant declarations**, respectively. Unlike var, which is **function-scoped**, let and const are **block-scoped**.

## Arrow functions:

A new syntax for writing functions in a more concise way. They also have the benefit of not creating their own **this context**, so they're handy when you want to **preserve** the **this** value from an outer function or method.

## Template literals:

These allow for easier string **interpolation**, **multi-line strings**, and can be used to create **domain-specific** languages.

## Destructuring assignment:

This feature allows you to **unpack values** from arrays or properties from objects into distinct variables.

## Default parameter values:

Functions can now have default values specified for **parameters**.

## Rest parameters and spread operator:

The **rest parameter** syntax allows us to represent an indefinite number of arguments as an array, and the **spread operator** allows an **iterable** (like an array or string) to be expanded in places where zero or more arguments or elements are expected.

## Promises:

Promises represent an eventual completion (or failure) and its resulting value, providing a more powerful and flexible way of handling **asynchronous operations** over traditional **callback-based** approaches.

## Classes:

**JavaScript** is a **prototype-based** language and doesn't have classes in the traditional sense. However, ES6 **introduces class syntax** as a syntactical sugar over **prototype-based inheritance**, making it easier for developers coming from a class-based language to adapt.

## Modules:

ES6 introduces a **module** system where you can import and export functions, objects, or values from module to module.

## Enhanced object literals:

This feature allows for a more concise syntax to create objects, including **shorthand** for property methods and names.

## Generators:

In **JavaScript**, a **generator** is a function that can stop midway and then continue from where it left off. **Generators** are a special kind of function that can **pause execution** and resume later, allowing other code to run in the meantime.

**Generators** are defined using the `function\*` syntax, and they use the **yield keyword** to pause the function execution.

This ability to pause and resume execution makes **generators** a powerful feature in **JavaScript**, as they can be used to **handle asynchronous** operations, iterate over large data sets without blocking the main thread, implement custom, complex iterators and much more.

These are just a few of the many enhancements and additions that came with **ES6**. The full list is much longer and includes features like **generators**, **iterators**, **Maps**, **Sets**, and much more.
