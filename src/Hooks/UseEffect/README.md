# useEffect()

- Lets you run some code after rendering so that you can synchronize your component with some external system
- By dependencies, you can control if the Effect should run or not

```jsx
useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount and also if either a or b have changed since the last render
}, [a, b]);
```

- If applicable, a *cleanup function* should be defined
  - runs before a new Effect is invoked
