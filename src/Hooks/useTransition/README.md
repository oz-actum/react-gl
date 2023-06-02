# useTransition()

- Lets you update the **state** without blocking the UI.
- Provides a _pending flag_ and _transition function_.
- With a transition, your UI stays responsive in the middle of a re-render.
  - If the user clicks a tab but then change their mind and click another tab, they can do that without waiting for the first re-render to finish.
- With the _pending flag_, you can render some loading indicator
