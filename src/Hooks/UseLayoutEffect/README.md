# useLayoutEffect()

- Version of useEffect that fires **before** the browser repaints the screen.
- Can hurt performance -> blocks UI update.
  - Prefer _useEffect_ when possible.

#### The Difference Between useEffect and useLayoutEffect

**useEffect** runs _asynchronously_ and after a render is painted to the screen.

1. The user engages with the React app. Let’s just say the user clicks a button on the UI. 
2. The state of the components changes. 
3. The DOM is then mutated. 
4. Changes are then reflected on the browser screen. 
5. The function is invoked to clean up effects from the previous render if **useEffect** dependencies have changed. 
6. Following cleanup, the **useEffect** hook is invoked.

**useLayoutEffect** runs _synchronously_ after a render but before the screen is updated.

1. The user interacts with the app. Let’s just say the user clicks a button on the UI. 
2. The state of the components changes. 
3. The DOM is then mutated. 
4. The function is invoked to clean up effects from the previous render if **useLayoutEffect** dependencies have changed. 
5. Following cleanup, the **useLayoutEffect** hook is invoked. 
6. The browser screen updates to reflect changes.

---

_Note: Before React 18, rendering was synchronous. This meant that once React started rendering, nothing could stop it until it completed rendering the component. However, with concurrent rendering, React can pause the rendering and continue with it later or abort the rendering altogether. This is an important new implementation that allows us to provide a more fluid user experience to the users._
