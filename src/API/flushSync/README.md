# flushSync

- Lets you force React to **flush** any updates inside the provided callback **synchronously**. This ensures that the DOM is updated immediately.
- Using `flushSync` is **uncommon**, and using it often can **significantly hurt the performance** of your app.
    - may force pending Suspense boundaries to show their fallback state.
    - may run pending effects and synchronously apply any updates they contain before returning.
