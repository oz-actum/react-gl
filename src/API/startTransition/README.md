# startTransition

- Lets you update the state without blocking the UI by lowering the calculation priority.
- The function you pass to `startTransition` **must be synchronous**.
- Very similar to `useTransition` Hook, except:
  - no `isPending` flag
  - works also outside components
- Can be used in cases where the `isPending` flag is not needed/used, so you can save one re-rendering that is needed
  to update the `isPending` flag in `useTransition` Hook.
