# Class Component

- Base Component class that extends JavaScript class.
- Only the _render_ method is required in the Component's class, the rest is optional.
- **Class components are not recommended in React.**

## Props and State

- Props are read-only and available as `this.props`
  - Via props, we configure the component from the outside.
- State is an object that can be mutated via `setState()` method, and read as `this.state`.
  - A component memory / local state

**Constructor part is needed for older versions of JavaScript.**

```tsx
class ClassComponent extends Component<Props, State> {
  constructor(props: Props) { // pass props to the component
    super(props); // invokes contructor in React Component class and makes props to be accessible as this.props
    this.state = { counter: 0 }; // the state can be assigned directly only in constructor
    this.handleClick = this.handleClick.bind(this); // whithout binding, the method's "this" pointer will be undefined
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
    // this.state = { counter: this.state.counter + 1} // will not work as we cannot mutate state directly
  }

  render() {
    return (
      <>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Click Me
        </button>
        <div>You clicked {this.state.counter} times</div>
        <div>{this.props.message}</div>
      </>
    );
  }
}
```

**No constructor is needed as Babel does this job.**

```tsx
class WithoutConstructor extends Component<Props, State> {
  state = { counter: 0 }; // public class field method

  /**
   *   With arrow function expression "this" always represents the object
   *   that defined the arrow function, so "this" points to "WithoutConstructor"
   */
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <>
        <h3>{this.constructor.name}</h3>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Click Me
        </button>
        <div>You clicked {this.state.counter} times</div>
        <div>{this.props.message}</div>
      </>
    );
  }
}
```

## Lifecycle

![react-lifecycle.png](..%2F..%2F..%2F..%2Fpublic%2Freact-lifecycle.png)
