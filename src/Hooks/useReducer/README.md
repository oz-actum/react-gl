# useReducer()

- Lets you add a **reducer** to your component.
- Helps you manage complex state logic.
- Can be an alternative to Redux or MobX when combined with useContext Hook.
- Parameters:
  - `reducer` function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state.
  - `initialValue` value from which the initial state is calculated
- Returns: 
  - `state` current state.
  - `dispatch` function that lets you update the state to a different value and trigger a re-render.

![react-usereducer.svg](..%2F..%2F..%2Fpublic%2Freact-usereducer.svg)
