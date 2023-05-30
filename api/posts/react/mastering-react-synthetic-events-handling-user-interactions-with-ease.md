---
title: 'Mastering React Synthetic Events: Handling User Interactions with Ease'
date: '2023-05-30'
topic: 'React'
---

In **React**, a **SyntheticEvent** is a cross-browser wrapper around the native browser event. It is an abstraction provided by **React** to handle events consistently across different browsers and environments.

![React SytheticEvent](/images/react/mastering-react-synthetic-events-handling-user-interactions-with-ease.webp)
_React SytheticEvent._

When an event is triggered in a **React** application, such as a button click or a form submission, **React** creates a **SyntheticEvent** object that contains information about the **event**. This object is passed as an argument to the event handler function.

```
import React from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>You have clicked the button {count} time(s)</h1>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        Click me!
      </button>
    </>
  );
}
```

The **SyntheticEvent** object provides a set of properties and methods that allow you to access and manipulate the event data.

It has properties like:

- **target** (referring to the DOM element that triggered the event)
- **currentTarget** (referring to the element that has the event listener attached)
- **type** (representing the type of the event),

and more...

```
function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform form validation and handle form submission logic here

    console.log(formData);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Email address
        </label>
        <input
          aria-describedby='emailHelp'
          className='form-control'
          id='email'
          onChange={handleInputChange}
          type='email'
          value={formData.email} // Reflect the value from state
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <input
          className='form-control'
          id='password'
          onChange={handleInputChange}
          type='password'
          value={formData.password} // Reflect the value from state
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
}

```

One important aspect of **SyntheticEvent** is that it is pooled, which means that after the event handler function is executed, the **SyntheticEvent** object is reused and its properties are nullified.

This pooling mechanism allows **React** to improve performance and reduce memory consumption.

It's important to note that although the **SyntheticEvent** object behaves like a regular event object, it is a synthetic representation created by **React** and may have some differences and additional features compared to native event objects.
