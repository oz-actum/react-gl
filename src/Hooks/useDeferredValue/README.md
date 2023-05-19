# useDeferredValue()

- Lets you defer updating a part of the UI.
- Shows stale content while fresh content is loading.
- Wraps **value** (primitive value or object) that's in the end generated or changed because of the state update.

**Lifecycle steps:**

- During the initial render, the returned deferred value will be the same as the value you provided.
- During updates, React will first attempt a re-render with the old value (so it will return the old value), and then try another re-render in background with the new value (so it will return the updated value).
