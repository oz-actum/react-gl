# useContext()

- Lets you **read** and **subscribe** to _context_ from the component.
- Should be called at the top level of the component.
- useContext() always looks for the closest provider _above_ the component that calls it.
  - It searches upwards and **does not** consider providers in the component from which you’re calling useContext().
- Causes component's re-rendering on the context change.
  - Consider using memoization.
- Before you start using Context, consider the usage of _component composition_.
