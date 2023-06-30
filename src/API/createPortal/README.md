# createPortal

- Lets you render some children into a different part of the DOM.
- Parameters:
  - `children`: Anything that can be rendered with React
  - `domNode`: Some DOM node that already exists. If changed during an update, portal content will be recreated.
  - `key?`: A unique string or number to be used as the portal’s key.
- Don't forget about the accessibility (e.g. focus management)
