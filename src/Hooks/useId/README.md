# useId()

- Generating unique IDs for **accessibility attributes**.
- Generating IDs for several related elements.
- Specifying a shared prefix for all generated IDs.
- **Should not be used to generate keys** in a list.
- With server rendering, `useId()` **requires an identical component tree on the server and the client**.
  - Incremental global variable will not guarantee the id match on the client after the hydration.
