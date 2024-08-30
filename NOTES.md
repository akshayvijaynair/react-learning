# LEARNING NOTES

## Rendering 

Web applications typically are built and described using the Model-View-Controller (MVC) pattern. The Model in MVC is the data layer, 
the Controller facilitates communication with the data layer, and the View is what the user sees and interacts with. 
In an MVC application, the View sends input to the Controller, which passes data between the data layer and the View. 
React is only concerned with the V in MVC. It takes data as input and presents it to the user in some form.

React itself doesn't care whether the user is using a mobile phone, a tablet, a desktop web browser, a screen reader, 
a command-line interface, or any other kind of device or interface that may be invented in the future. 
React just renders components. How those components get presented to the user is up to a separate library.

> [!IMPORTANT]
> The library that handles rendering of React components in web browsers is called ReactDOM. If you want to render React
> elements to native mobile apps, you use React Native. If you want to render React components to static HTML, you can use
> ReactDOMServer.
>

## Virtual DOM
Changes to the DOM cause changes to what you see in your web browser, and updates made in the web browser (such as when you enter data into a form) cause changes to the DOM.

Compared to other kinds of JavaScript code, DOM manipulation is slow and inefficient. This is because whenever the DOM changes, the browser has to check whether the change will require the page to be redrawn and then the redrawing has to happen.

Adding to the difficulty of DOM manipulation is that the DOM's functions aren't always easy to use and some of them have excessively long names like Document.getElementsByClassName.

When the engineers at Facebook designed React, they decided to take the details of how and when the DOM is modified out of the hands of programmers. To do this, they created a layer between the code that the programmer writes and the DOM. They called this intermediary layer the Virtual DOM.

> [!IMPORTANT]
> Here's how it works:
>
> - A programmer writes React code to render a user interface, which results in a single React element being returned.
> - ReactDOM's render method creates a lightweight and simplified representation of the React element in memory (this is
>  the Virtual DOM).
> - ReactDOM listens for events that require changes to the web page.
> - The ReactDOM.render method creates a new in-memory representation of the web page.
> - The ReactDOM library compares the new Virtual DOM representation of the web page to the previous Virtual DOM
>  representation and calculates the difference between the two. This process is called reconciliation.
> - ReactDOM applies just the minimal set of changes to the browser DOM in the most efficient way that it can and using
>  the most efficient batching and timing of changes.
> 
> By taking the programmer out of the process of actually making updates to the browser DOM, ReactDOM can decide on optimal timing and the optimal method for making required updates. This greatly improves the efficiency of making updates to a browser view.

## Thinking in Components
React is a library for creating and putting together (or composing) components to build user interfaces. React components are independent pieces that can be reused and that can pass data to each other.

A component can be something as simple as a button or it can be more complex, such as a navigation bar that's made up of a collection of buttons and dropdowns.

As the programmer, it's your job to decide how big or how small each component in your application should be, but a good rule of thumb to think about is the idea of single responsibility.

## JSX
The first thing to know about JSX is that it's XML. So, if you know a little bit about XML (or if you've used XHTML), the rules of writing JSX should sound familiar. Namely:

All elements must be closed.

Elements that cannot have child nodes (so-called “empty” elements) must be closed with a slash. The most commonly used empty elements in HTML are br, img, input, and link.

Attributes that are strings must have quotes around them.

HTML elements in JSX must be written in all lowercase letters.

### Beware of Reserved Words
> [!WARNING]
> Because JSX compiles to JavaScript, there is the potential that an element name or attribute name that you use in your JSX code can cause errors in your compiled program. To guard against this, certain HTML attribute names that are also reserved words used in JavaScript have to be renamed, as follows:
>
> The `class` attribute becomes `className`.
> The `for` attribute becomes `htmlFor`.
>

### JSX Uses camelCase
> [!IMPORTANT]
> Attribute names in HTML that contain more than one word are camel-cased in JSX. For example:
> - The `onclick` attribute becomes `onClick`.
> - The `tabindex` attribute becomes `tabIndex`.
> 

### JSX Boolean Attributes
In HTML and in JSX, certain attributes don't require values, because their presence is interpreted as setting their value to a Boolean true. For example, in HTML, the disabled attribute of input elements causes an input to not be changeable by the user:

`<input type="text" name="username" disabled>`

In JSX, the value of an attribute can be omitted when it is explicitly true. So, to set the disabled attribute of a JSX input element to true, you can do either of the following:

`<input type="text" name="username" disabled = {true}/>`
OR
`<input type="text" name="username" disabled/>`

### Use Curly Braces to Include Literal JavaScript
When you need to include a variable or a piece of JavaScript in your JSX that shouldn't be interpreted by the transpiler, use curly braces around it. Listing 3-5 shows a component whose return statement includes literal JavaScript in JSX attributes.

```javascript
function SearchInput(props) {
    return (
        <div id="search-box">
            <input type="text"
            name="search"
            value={props.term}
            onChange={(e)=>{props.onChange(e.target.value)}}/>
        </div>
    )
}

export default SearchInput;
```
### Remember to Use Double Curly Braces with Objects
One common mistake is to forget that if you're including a JavaScript object literal inside of JSX, the JSX code will have double curly braces, as shown in Listing 3-6.

### Put Comments in Curly Braces
Because JSX is actually a way of writing JavaScript, HTML comments don't work in JSX. Instead, you can use JavaScript block comment syntax (/* and */).

```javascript
function Header(props){
    return (
        <h1 style={{fontSize:"24px",color:"blue"}}>
            {/* Todo: Make this header dynamic */}
        Welcome to My Website
        </h1>
    )
}
export default Header;
```

## Attributes vs. Props
In markup languages (such as XML and HTML), attributes define properties or characteristics of the element, and are specified using the name=value format.
Because JSX is an XML markup language, JSX elements can have attributes, and there's no limit to the number of attributes that a single JSX element can have.

### Passing Props
Attributes that you write in JSX elements are passed to the component represented by the element as properties, or props for short. You can access props inside the component using the component's props object.

### React Adds Several Attributes
Several attributes that are available for React's built-in HTML components don't exist in HTML. Chances are good that you'll never need to use any of these special attributes, but I'm including them here for completeness. These are:

- `dangerouslySetInnerHTML`: which allows you to set the innerHTML property of an element directly from React. As you can tell by the name of the attribute, this is not a recommended practice.

- `suppressContentEditableWarning`: which suppresses a warning that React will give you if you use the contentEditable attribute on an element that has children.

- `suppressHydrationWarning`: No, it's not a way to tell React to stop nagging you to drink more water. This attribute will suppress a warning that React gives you when content generated by server-side React and client-side React produce different content.

### Some React Attributes Behave Differently
Several attributes behave differently in React than they do in standard HTML:

- `checked` and `defaultChecked`: The checked attribute is used to dynamically set and unset the checked status of a radio button or checkbox. The defaultChecked attribute sets whether a radio button or checkbox is checked when the component is first mounted in the browser.

- `selected`: In HTML, when you want to make an option in a dropdown be the currently selected option, you use the selected attribute. In React, you set the value attribute of the containing select element instead.

- `style`: React's style attribute accepts a JavaScript object containing style properties and values, rather than CSS, which is how the style attribute in HTML works.

### React Supports Many HTML Attributes
The following list contains the standard HTML attributes supported by React's built-in HTML components:

`accept acceptCharset accessKey action allowFullScreen allowTransparency alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing charset challenge checked classID className cols colSpan content contentEditable contextMenu controls coords crossOrigin data dateTime defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameborder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode keyParams keyType label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name noValidate open optimum pattern placeholder poster preload radioGroup readOnly rel required role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcSet start step style summary tabIndex target title type useMap value width wmode wrap`

#### Non-Standard Attributes
In addition to the standard HTML attributes, React also supports several non-standard attributes that have specific purposes in some browsers and meta-data languages, including:

- `autoCapitalize` and `autoCorrect`, which are supported by Mobile Safari.

- `property` is used for Open Graph meta tags.

- `itemProp`, `itemScope`, `itemType`, `itemRef`, and `itemID` for HTML5 microdata.

- `unselectable` for Internet Explorer.

- `results` and `autoSave` are attributes supported by browsers built using the WebKit or Blink browser engines (including Chrome, Safari, Opera, and Edge).

#### Custom Attributes
As of version 16, React will pass any custom attributes that you use with HTML components through to the generated HTML, provided that the custom attributes are written using only lowercase letters.

