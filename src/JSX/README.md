# JSX

A **syntax extension** for JavaScript that lets you write HTML-like markup inside a JavaScript file. The purpose is to provide a syntax sugar for the `React.crateElement()` function.


### It IS:

 - intended to be used by various preprocessors (transpilers) to transform these tokens into standard ECMAScript.

### It's NOT:
- intended to be implemented by engines or browsers.
- a proposal to incorporate JSX into the ECMAScript spec itself.

---

## Syntax

Two types of expression:

 - JSX Element
 - JSX Fragment

#### JSX Element
```jsx
<ElementName props={}>{children}</ElementName>


<ElementName            props={}>          {children}          </ElementName>
^       ^               ^                  ^                   ^
|       element name    attributes(opt)    childrens(opt)      closing tag
opening 
tag

    
    
<ElementName />
^
self closing tag
```

#### JSX Fragment
```jsx
<>{children}</>


<>                {children}          </>
^                 ^                   ^
opening tag       childrens(opt)      closing tag
```

#### Naming conventions

Element name can be built of `[a-zA-Z] [0-9] [_$]` characters

Cannot start with `[0-9]`

Attributes to be cameCase to match the corresponding DOM property (except data-* and aria-* attributes).

## React.createElement()

`React.createElement(component, props, ...children)`

```jsx
React.createElement(
  button,
  {className: 'btn', style: { width: '100px' } onClick: () => console.log('CLICK')},
  'Click Me'
)

<button className="btn" style={{ width: '100px' }} onClick={() => console.log('CLICK')}>Click Me</button>

```
