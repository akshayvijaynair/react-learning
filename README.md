# React Learning Notes

React is a JavaScript library developed by Facebook. A JavaScript library is a collection of functions that can be used to introduce and develop powerful features and functionalities in your projects.

React is used to design highly performant user interfaces and applications. React was designed by Facebook to solve common design problems and performance roadblocks. It uses JSX, which offers all the benefits offered by JavaScript. Within JSX, we can include any JavaScript expressions within braces. 

Each React element is a JavaScript object that can be stored in a variable or can be passed in a program. Using React with the JavaScript library, Developers can build intuitive and interactive UIs that have the best rendering performance with minimum coding.

Today, React is used by Airbnb, American Express, Amazon Video, Docker, Expedia, Instagram, Khan Academy, Dropbox, BBC, NFL, Netflix, etc. to power their apps.

### Key Features of React
- The Document Object Model (DOM) is a programming interface for HTML documents. It provides different interfaces that allow you to programmatically access, control and modify elements in HTML using JavaScript. However, DOM is not the most efficient interface, and a large number of simultaneous DOM operations slow down the application on a browser. Here, React plays an important role. Instead of manipulating the DOM directly, React introduces a Virtual DOM, which creates an in-memory representation of the actual DOM structure.
- In React, Declarative Programming is of high importance. It makes code readable and easy to debug. You can design and create interactive UIs by changing the state of the components. React automatically updates the DOM accordingly.
- The reconciliation algorithm of React is called React Fiber, which generates a virtual tree of DOM nodes internally when the app starts. It is then rendered into the page. When the state changes, a new virtual DOM tree is generated and compared with the previous version - this process is called diffing. The computed difference is then applied to the real DOM.

## Dip your toe in
[First react application](./class%20files/01_1.2_HelloReact/First%20react%20application.md)
 
- Observe JSX, Use of Babel alongside React
- Observe injection of React as a JS script with DOM interactivity

[Create react from starter project](./React from starter.md)

## Concept 1: Components

Components help you break down a large interface into small units that can be built and maintained independently. This means you do not build your interface as a big monolithic unit but, instead, smaller units that work cohesively.

Components are reusable features that can be composed to create a user interface. This reusability allows you to design components that can be used across multiple projects, saving you a lot of time.
By modularising features:

- UI scales efficiently as your app grows
- UI can be efficiently maintained
- A vibrant React community has made several component packages that you can download and use for your projects, without needing to build them from scratch. 

### Component Types
[](./class%20files/221_class_components/components.md)
- **Class Component:** A class component is subclassed from the component class in React. A class component offers several out-of-the-box features. For instance, they let you store the local state. They also allow you to create lifecycle hooks, which will be covered later in the course.
- **Function Component:** This is the second type of component that you can build using React.  These are simple functions that return a React element. They can also bring in a props object as an argument.  According to React’s official documents, the most fundamental way to define a component is by writing a JavaScript function. A function component is a presentational component, which allows you to accept data through a prop and render it on the UI.  These are suitable for separating visuals from container components where your logic and state may reside.

> :warning: Although class components, as a syntax, is still in use, function components, coupled with the super-powerful Hooks API, offer a cleaner and simpler syntax in the long run and are probably a better choice. Your code is more readable and easier to test. 

## Concept 2: JSX| A Templating Language

JSX is an extension to the regular JavaScript, and although it appears similar to HTML, it is more powerful and expressive.   

JSX is similar to a templating syntax for React applications. This makes it easy for developers to incorporate visual elements and dynamic data in a format and syntax familiar to them. However, an important advantage of using JSX is that it allows you to use JavaScript throughout. React encourages the use of standard JavaScript instead of forcing you to use library or framework-specific methods and directives. 

JSX is similar to a templating language, which means it lets you describe visual elements in an HTML-like syntax but, internally, it transforms the syntax into code that React uses. JSX is designed to produce React elements. So, when you write JSX, it is compiled into standard JavaScript functions containing nested invocations of the createElement function, which is used by React to create renderable elements internally.  

## Concept 3: State
The state is an instance of the React component class, which can be defined as an object that governs how a component renders and behaves. Simply put, the state of a component allows it to be dynamic and interactive, controlling its behaviour.

In React, a state describes the contents of an interface. Whenever the state is changed, the interface automatically updates to reflect the change made. The interface can be declaratively updated by updating the underlying state. All other tasks are managed seamlessly by React.

### State in Class Components?
When using class components, state management is a built-in feature. This means you can create and manage state variables directly within the class component, without the requirement of any extra tool.
First, you need to declare and initialise state properties. This can be done in the constructor method of the class component, or if the create-react-app–based workflow is used, the state object can be declared using the class field declaration syntax.

> **Note: The state is local and private to a component and is not accessible outside the component. However, a component’s state can be shared with another component using props.**

Class components offer built-in state management and, thus, are a natural choice. On the other hand, function components are inherently stateless. They accept data using props and do not offer state management or lifecycle methods.


### Functional Stateless Component
Stateless function component is a standard JavaScript function that receives input as a single prop argument and returns a React element to render.
(props) => JSX
The input shapes the rendered output but only if it is available in the form of props.

#### Hook
A hook is a special function that allows you to "hook" React features, that is, use state and other React features without writing a class. Similarly, useState is a hook that lets you add the React state to the function components.

## Concept 4: Props
Properties (Props) act as conduits, that is, they allow parent components to pass data to their child components via a one-way data flow.

a state is used when a component has to store and process dynamic data, and it is always local to a component. However, since the state is local and encapsulated within a component, how can this data be shared with other components down the hierarchy? 

A typical React application is made up of several components, and although multiple techniques are available to share data between components, the most fundamental way is using props. 

Props offer a simple way for parent components to pass data to child components. In terms of usage, they are similar to the standard attributes on a component and can be bound to dynamic data using a pair of curly braces. Props are immutable, that is, the data of a prop cannot be changed. 

This is because the concept on which props have been built is that of pure functions, and any changes made to the data of the parameters cannot be changed in a Prop.

>
>| **Props**                                                             | **State**                                                                                  |
>|:----------------------------------------------------------------------|:-------------------------------------------------------------------------------------------|
>| Props are passed to the components (just like in function parameters) | State is managed within the component (just like a variable is declared within a function) |
>| Props are immutable                                                   | State is mutable                                                                           |
>| Props are used to manage data down from the view-controller           | States are managed in the view-controller                                                  |

### PropTypes
- Props let you access all types of data, such as strings, numbers, objects, arrays and functions. Since a prop is a conduit, it ultimately feeds into the component’s internal logic, which has to process and consume the incoming data.
- React offers a prop types package that exports numerous validators for all data types. These validators will show appropriate warnings in the console whenever a prop receives an incompatible type of data.

> :warning: These validators will only issue warnings during development. Once a production build is produced, no warning will be shown because the validation code is removed during the optimisation phase.
- PropTypes are special properties that we can assign to run type checking on the props for a component. They export various validators that are used to ensure that the data received is valid. Owing to performance reasons, propTypes is checked only in the development mode.  Since props are a way of providing data and configuring a prop, the importance of validating props in production becomes crucial.
- In certain instances, the value of a prop could belong to more than one type. In such cases, you can use the oneOfType validator and provide options. If a prop accepts data of all renderable types, such as numbers, strings and react elements, you can use the node validator.
- Besides the built-in types, React also allows you to define custom validators.   
- Using the proptypes package is extremely simple, and you can extend its capabilities by writing your validators.

 :alert: these four concepts cover the primary ideas behind React and the UI building with the React library