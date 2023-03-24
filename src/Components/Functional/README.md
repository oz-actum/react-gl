# Functional Component

- React lets you create components, reusable UI elements for your app.
- In a React app, every piece of UI is a component.
- React components are regular JavaScript functions except:
  - Their names always begin with a capital letter.
  - They return JSX markup.
- Stateless by default
  - Hooks are used for state and lifecycle

### Default vs named exports

| Syntax  | Export statement                      | Import statement                     |
|---------|---------------------------------------|--------------------------------------|
| Default | `export default function Button() {}` | `import Button from './Button';`     |
| Named   | `export function Button() {}`         | `import { Button } from './Button';` |
