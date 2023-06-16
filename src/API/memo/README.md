# Memo

- Lets you skip re-rendering a component when its props are unchanged.
- When a component is wrapped in `React.memo()`, React renders the component and memoizes the result. Before the next render, if the new `props` are the same, React reuses the memoized result, **skipping the next rendering**.
- Parameters:
  - `Component`: The component that you want to memoize.
  - `arePropsEqual?`:  A function that accepts two arguments: the component’s `previous props`, and its `new props`.
    - returns `true` if `previous props` and `new props` are equal, otherwise returns `false`.
    - if not specified, React will compare each component's `prop`.

### When to use:
1. Pure functional component
   - Your component is functional and given the same props, always renders the same output.
2. Renders often
3. Re-renders with the same props
   - Your component is usually provided with the same props during re-rendering.
4. Medium to big size
   - Your component contains many UI elements to reason props equality check.

### When to avoid:
1. If the component isn't heavy and usually renders with different `props`.
2. Performance-related changes applied incorrectly can even harm performance.
   - Don't use memoization if you can't quantify the performance gains.

---

https://medium.com/life-at-apollo-division/memoization-in-js-and-react-fbad19fca15d
