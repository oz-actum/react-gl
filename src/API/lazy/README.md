# Lazy

- Lets you defer loading component’s code until it is rendered for the first time.
- Call lazy **outside** your components to declare a lazy-loaded React component.
- Parameter:
  - `load`: A function that returns a Promise.
    - At first call, React resolves it and returns a component.
      - If the Promise rejects, React will `throw` the rejection reason for the nearest Error Boundary to handle.
    - At next calls, React takes the cached component.
- It can be used with Suspense to handle both loading and error states.
