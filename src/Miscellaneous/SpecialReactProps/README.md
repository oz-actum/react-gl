# Special React Props

- `dangerouslySetInnerHTML`: An object of the form `{ __html: '<p>some html</p>' }` with a raw HTML string inside. Overrides the innerHTML property of the DOM node and displays the passed HTML inside. This should be used with extreme caution! If the HTML inside isn’t trusted (for example, if it’s based on user data), you risk introducing an XSS vulnerability.

- `suppressContentEditableWarning`: A boolean. If true, suppresses the warning that React shows for elements that both have children and `contentEditable={true}` (which normally do not work together). Use this if you’re building a text input library that manages the contentEditable content manually.

- `suppressHydrationWarning`: A boolean. If you use server rendering, normally there is a warning when the server and the client render different content. In some rare cases (like timestamps), it is very hard or impossible to guarantee an exact match. If you set suppressHydrationWarning to true, React will not warn you about mismatches in the attributes and the content of that element. It only works one level deep, and is intended to be used as an escape hatch. Don’t overuse it.

- `style`: An object with CSS styles, for example `{ fontWeight: 'bold', margin: 20 }`. Similarly to the DOM style property, the CSS property names need to be written as camelCase.
