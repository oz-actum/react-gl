# How to create a custom Hook

- A custom Hook is a _function_ whose name starts with **"use"** and that may call other Hooks.
- Custom Hooks let you share stateful logic, not state itself.
  - Each call to a Hook is completely independent of every other call to the same Hook.
- You should avoid creating custom "lifecycle" Hooks (e.g. `useMount`) as they don't fit into the React paradigm.
- Keep your custom Hooks focused on concrete high-level use cases.

---

If we have code we would like to extract from a component, a custom hook might be the proper extraction if the following conditions are met:

- **The extracted code has no JSX output** (if it does, then you should create a component instead)
- **AND the extracted code includes calls to other hooks** (if it doesn't, then create a regular function instead)
