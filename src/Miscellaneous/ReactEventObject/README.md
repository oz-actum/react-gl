# React Event Object (Synthetic Event)

- React event handlers receive a _React event object_ (Synthetic Event)
  - a cross-browser wrapper around the browser’s native event that **fixes some browser inconsistencies**.
- Methods:
  - `preventDefault()`: Prevents the default browser action for the event.
  - `stopPropagation()`: Stops the event propagation through the React tree.

---

### Event Bubbling

The "Event Bubbling" behavior makes it possible for you to handle an event in a parent element instead of the actual element that received the event (Event Delegation).

```text
window         / \
---------------| |-----------------
| element1     | |                |
|   -----------| |-----------     |
|   |element2  | |          |     |
|   -------------------------     |
|        Event BUBBLING           |
-----------------------------------
```
