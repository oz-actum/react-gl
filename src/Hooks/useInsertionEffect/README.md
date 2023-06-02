# useInsertionEffect

- A version of `useLayoutEffect` Hook that fires **before any DOM mutations**.
  - You don't have access to refs to DOM nodes at this time.
- The use case is specifically for inserting global DOM nodes like `<style>` or SVG `<defs>`.
  - It's not really meant to be used by anything else other than these CSS libraries (CSS-in-JS).
- `useInsertionEffect` doesn't fire on the server.
- Parameters:
  - `setup`: The function with your Effect’s logic. Should also return a cleanup function.
  - `dependencies?`: The list of all reactive values referenced inside the setup code.
