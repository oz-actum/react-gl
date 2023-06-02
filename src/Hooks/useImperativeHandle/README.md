# useImperativeHandle

- Allows you to **pass values and functions** from a _Child_ component to a _Parent_ using a `ref`.
  - From there, the _Parent_ can either use it itself or pass it to another _Child_.
- You can only pass a `ref` as a `prop` to a _Child_ that **wraps its component** in `forwardRef`
- Imperative code using refs should be avoided in most cases.
  - If you can express something as a prop, you should not use a ref.
- Parameters:
  - `ref`: The `ref` you received as the second argument from the `forwardRef` render function. 
  - `createHandle`: A function that takes no arguments and returns the ref handle you want to expose. Usually, you will return an object with the methods you want to expose. 
  - _optional dependencies_: The list of all reactive values referenced inside the `createHandle` code.

```jsx
useImperativeHandle(ref, () => {
    return {
      // ... your methods ...
    };
  }, [deps?]);
```

```jsx
const MyComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
        // ... your methods ...
    };
  });

  return (
      // ... your JSX ...
  );
});
```

---

The general pattern in React is to have a **unidirectional** flow of data.

In cases where **bidirectional** dataflow is needed, we can use `useImperativeHandle`
