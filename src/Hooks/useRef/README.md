# useRef()

- Lets you reference a **value** that’s not needed for rendering.
- Value accessible through the _current_ property.
- On the next renders, useRef will return the same object.
- `ref.current` is mutable (unlike state).
- React does not re-render your component on `ref.current` change.
- Do not _write_ or _read_ `ref.current` during rendering.
