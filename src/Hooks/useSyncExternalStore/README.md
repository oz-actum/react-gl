# useSyncExternalStore

- Lets you **subscribe** to an external store.
  - Third party state management libraries that hold state outside of React.
  - Browser's API that exposes a mutable value and events to subscribe to its changes.
- Usually within a custom hook.
- Parameters:
  - `subscribe`: A function that takes a single `callback` argument and subscribes it to the store.
    When the store changes, it should invoke the provided `callback`. This will cause the component to re-render
    The `subscribe` function should return a function that cleans up the subscription.
  - `getSnapshot`: A function that returns a snapshot of the data (should be immutable) in the store that’s needed by the component.
    While the store has not changed, repeated calls to `getSnapshot` must return the same value. If the store changes and the returned value is different, React re-renders the component.
  - `getServerSnapshot?`: A function that returns the initial snapshot of the data in the store. It will be used only during server rendering and during hydration of server-rendered content on the client.

---

Unlike `useEffect` that can be used for **synchronizing** with an external system,
`useSyncExternalStore` **subscribes** to an external store where the **callback triggers the re-rendering** (no reactive dependencies).
