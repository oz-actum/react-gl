# Best Practices

### Use Fragments Instead of Wrapping DIVs

Using `<div>` increases the DOM size, especially in huge projects since the more tags or DOM nodes you have, the more memory your website needs and the more power a browser uses to load your website. This leads to lower page speed and potentially poor user experience.

**Bad**

```jsx
const Component = () => {
  return (
    <div>
      <h1>Heading</h1>
      <p>Paragraph</p>
    </div>
  );
};
```

**Good**

```jsx
const Component = () => {
  return (
    <>
      <h1>Heading</h1>
      <p>Paragraph</p>
    </>
  );
};
```

### Avoid Using Indices as `key` Props

React don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state. If you choose not to assign an explicit key to list items then React will default to using indexes as keys.

**Bad**

```jsx
const Component = () => {
  const data = [
    { id: "k19e_3me", name: "John" },
    { id: "r1L34.25", name: "Alice" },
    { id: "9Sf3DG.7", name: "Marry" },
  ];
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
};
```

**Good**

```jsx
const Component = () => {
  const data = [
    { id: "k19e_3me", name: "John" },
    { id: "r1L34.25", name: "Alice" },
    { id: "9Sf3DG.7", name: "Marry" },
  ];
  return (
    <ul>
      {data.map((item, index) => (
        <li key={`li-${index}-${item.id}`}>{item.name}</li>
      ))}
    </ul>
  );
};
```

### Optimize State Usage

Avoid using state as much as possible since the more state you use, the more data you have to keep track of across your app. Store rather a whole data-related object instead of storing the individual properties.

**Bad**

```jsx
const Component = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setage] = useState("");

  return <></>;
};
```

**Good**

```jsx
const Component = () => {
  const [userData, setUserData] = useState({});

  return <></>;
};
```

### Use Object Destructuring for Props

Instead of passing the props object, use object destructuring to pass the prop name. This discards the need to refer to the props object each time you need to use it.

**Bad**

```jsx
const Component = (props) => {
  return (
    <>
      <h1>{props.heading}</h1>
      <p>{props.paragraph}</p>
    </>
  );
};
```

**Good**

```jsx
const Component = ({ heading, paragraph }) => {
  return (
    <>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
    </>
  );
};
```

### Use Memoization for Expensive Calculations or Re-Renders

If you call some expensive calculation at the top of your component, it will re-run on every state change. If moving outside the component is not possible, consider memoization.

**Bad**

```jsx
const Component = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(0);

  const total = expensiveCalculation(count);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setState(state + 1)}>Set state</button>
    </>
  );
};
```

**Good**

```jsx
const Component = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(0);

  const total = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setState(state + 1)}>Set state</button>
    </>
  );
};
```

### Avoid Props Drilling

If some deeply nested component requires some state from the parent component, it's better to use a state management library or context API. Otherwise, you are passing this data as a prop to bunch of intermediate components that don't actually need it.

**Bad**

```jsx
const Component = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Heading</h1>
      <Child count={count} />
    </>
  );
};

const Child = ({ count }) => {
  return (
    <>
      <h2>Child</h2>
      <GrandChild count={count} />
    </>
  );
};

const GrandChild = ({ count }) => {
  return (
    <>
      <h3>GrandChild</h3>
      <p>{count}</p>
    </>
  );
};
```

**Good**

```jsx
const Component = () => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={count}>
      <h1>Heading</h1>
      <Child />
    </CountContext.Provider>
  );
};

const Child = () => {
  return (
    <>
      <h2>Child</h2>
      <GrandChild />
    </>
  );
};

const GrandChild = () => {
  const count = useContext(CountContext);

  return (
    <>
      <h3>GrandChild</h3>
      <p>{count}</p>
    </>
  );
};
```
