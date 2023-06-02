# useCallback()

- Caches a _function_ between re-renders until its dependencies change.
- Useful when you are trying to optimize a child component.
- Performance vs. complexity

```jsx
// Simplified implementation (inside React)
function useCallback(fn, dependencies) {
  return useMemo(() => fn, dependencies);
}
```
