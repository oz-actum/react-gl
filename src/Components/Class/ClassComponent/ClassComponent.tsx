import React, { Component, PureComponent, ReactNode } from "react";

interface Props {
  message?: string;
}

interface State {
  counter: number;
  message?: string;
}

export class ClassComponent extends Component<Props, State> {
  constructor(props: Props) {
    // pass props to the component
    super(props); // invokes constructor in React Component class and makes props to be accessible as this.props
    this.state = { counter: 0, message: this.props.message }; // the state can be assigned directly only in constructor
    this.handleClick = this.handleClick.bind(this); // without binding, the method's "this" pointer will be undefined
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
    // this.state = { counter: this.state.counter + 1} // will not work as we cannot mutate state directly
  }

  render() {
    console.log(`RENDER ${this.constructor.name}`);
    return (
      <>
        <h3>{this.constructor.name}</h3>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Click Me
        </button>
        <div>You clicked {this.state.counter} times</div>
        <input
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
        />
        <hr />
        <div className="ms-4">
          <WithoutConstructor message={this.state.message} />
          <hr />
          <WithLifecycle message={this.state.message} />
          <hr />
          <Pure message={this.state.message} />
        </div>
      </>
    );
  }
}

class WithoutConstructor extends Component<Props, State> {
  state = { counter: 0 }; // public class field method

  /**
   *   With arrow function expression "this" always represents the object
   *   that defined the arrow function, so "this" points to "ClassComponentWithoutConstructor"
   */
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log(`RENDER ${this.constructor.name}`);
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

class WithLifecycle extends Component<Props, State> {
  state = { counter: 0 };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  /**
   * This method is invoked the first time the component is loaded and rendered into the web page.
   */
  componentDidMount() {
    console.log("componentDidMount");
  }

  /**
   * Called it immediately before React updates the DOM. It enables your component to capture some information
   * from the DOM (e.g. scroll position) before it is potentially changed.
   *
   * Will not get called if shouldComponentUpdate is defined and returns false.
   *
   * There is no equivalent hook for function component at the moment.
   *
   * @param prevProps props before update
   * @param prevState state before update
   */
  getSnapshotBeforeUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>
  ) {
    console.log("getSnapshotBeforeUpdate");
    console.log(prevProps);
    console.log(prevState);

    return null;
  }

  /**
   * This method is invoked after re-rendering when the component's state or props have been modified
   * but not for the initial render.
   *
   * @param prevProps props before update
   * @param prevState state before update
   * @param snapshot data from getSnapshotBeforeUpdate method
   */
  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ) {
    console.log("componentDidUpdate");
    console.log(prevProps);
    console.log(prevState);
    console.log(snapshot);
  }

  /**
   * This method can compare props, state and context and decide whether the component will be re-rendered
   * by triggering the render() method.
   * The only purpose of this method is a performance optimization (like memo)
   *
   * Returning false does not prevent child components from re-rendering when their state changes.
   *
   * Returning false does not guarantee that the component will not re-render. React will use the return value as a hint
   * but it may still choose to re-render your component if it makes sense to do for other reasons.
   *
   * @param nextProps updated props
   * @param nextState updated state
   * @param nextContext updated context
   */
  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: any
  ): boolean {
    console.log("shouldComponentUpdate");
    console.log(nextProps);
    console.log(nextState);
    console.log(nextContext);
    return true;
  }

  /**
   * This method is invoked when the component is about to be destroyed from memory.
   */
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  /**
   * Should be written as a pure function of props, state, and context. It should not have side effects.
   *
   * Will not get called if shouldComponentUpdate is defined and returns false.
   *
   * When Strict Mode is on, React will call render twice in development and then throw away one of the results.
   * This helps you notice the accidental side effects that need to be moved out of the render method.
   */
  render(): ReactNode {
    console.log(`RENDER ${this.constructor.name}`);
    return (
      <div>
        <h3>{this.constructor.name}</h3>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Click Me
        </button>
        <div>You clicked {this.state.counter} times</div>
        <div>{this.props.message}</div>
      </div>
    );
  }
}

/**
 * Skips re-renders for same props and state
 * Equivalent to defining a custom shouldComponentUpdate method that shallowly compares props and state
 */
class Pure extends PureComponent<Props, State> {
  state = { counter: 0 };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log(`RENDER ${this.constructor.name}`);
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
