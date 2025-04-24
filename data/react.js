export const reactQuestions = [
    {
        question: "1. What is React?",
        answer: "React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create large web applications that can change data without reloading the page."
    },
    {
        question: "2. What are components in React?",
        answer: "Components are the building blocks of a React application. They are reusable pieces of UI that can be composed to create complex interfaces."
    },
    {
        question: "3. What is JSX?",
        answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML elements in JavaScript and place them in the DOM without using functions like createElement."
    },
    {
        question: "4. What is the difference between a functional component and a class component?",
        answer: "Functional components are simpler and are defined as JavaScript functions, while class components are ES6 classes that extend React.Component and can hold state and lifecycle methods."
    },
    {
        question: "5. What is state in React?",
        answer: "State is a built-in object that stores property values that belong to a component. When the state changes, the component re-renders."
    },
    {
        question: "6. What is props in React?",
        answer: "Props (short for properties) are read-only attributes passed from a parent component to a child component. They allow data to flow through the component tree."
    },
    {
        question: "7. What is the virtual DOM?",
        answer: "The virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize rendering by only updating parts of the DOM that have changed."
    },
    {
        question: "8. What is the purpose of keys in React?",
        answer: "Keys help React identify which items have changed, are added, or are removed. They should be unique among siblings to ensure efficient updates."
    },
    {
        question: "9. What is lifting state up in React?",
        answer: "Lifting state up is a technique where you move the state from a child component to a parent component to share data between sibling components."
    },
    {
        question: "10. What are controlled components?",
        answer: "Controlled components are form elements whose value is controlled by React state. The component's state is the single source of truth for the input value."
    },
    {
        question: "11. How do you create a React component?",
        answer: "There are two ways to create components: Functional Component: function Greeting(props) { return <h1>Hello, {props.name}</h1>; } Class Component: class Greeting extends React.Component { render() { return <h1>Hello, {this.props.name}</h1>; } }"
    },
    {
        question: "12. What are React lifecycle methods?",
        answer: "Class components have lifecycle methods that run at specific times: Mounting: constructor(), render(), componentDidMount() Updating: shouldComponentUpdate(), render(), componentDidUpdate() Unmounting: componentWillUnmount()"
    },
    {
        question: "13. How do you handle events in React?",
        answer: "React events are named using camelCase and you pass functions as event handlers: function Button() { function handleClick() { alert('Button clicked'); } return (<button onClick={handleClick}>Click me</button>); }"
    },
    {
        question: "14. What are keys in React and why are they important?",
        answer: "Keys help React identify which items have changed, are added, or are removed. They should be given to elements inside arrays: function List(props) { const items = props.items.map((item) => <li key={item.id}>{item.name}</li>); return <ul>{items}</ul>; }"
    },
    {
        question: "15. How do you conditionally render in React?",
        answer: "Several ways to conditionally render: If statement: function Greeting({ isLoggedIn }) { if (isLoggedIn) { return <User Greeting />; } return <GuestGreeting />; } Ternary operator: {isLoggedIn ? <User Greeting /> : <GuestGreeting />} Logical && operator: {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}"
    },
    {
        question: "16. What is the purpose of the useState hook?",
        answer: "The useState hook allows you to add state to functional components. It returns an array with the current state and a function to update it."
    },
    {
        question: "17. What is the useEffect hook?",
        answer: "The useEffect hook allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM."
    },
    {
        question: "18. What is the difference between useEffect and useLayoutEffect?",
        answer: "useEffect runs after the render is committed to the screen, while useLayoutEffect runs synchronously after all DOM mutations. Use useLayoutEffect for reading layout from the DOM and synchronously re-rendering."
    },
    {
        question: "19. What is the useRef hook?",
        answer: "The useRef hook returns a mutable ref object whose current property is initialized to the passed argument. It can be used to access DOM elements directly."
    },
    {
        question: "20. What is the purpose of the useContext hook?",
        answer: "The useContext hook allows you to access the context value directly in functional components without needing to wrap them in a Context.Consumer."
    },
    {
        question: "21. What is the Context API?",
        answer: "The Context API provides a way to pass data through the component tree without manually passing props down at every level. It is useful for global data like themes or user authentication."
    },
    {
        question: "22. How do you create a context?",
        answer: "const MyContext = React.createContext(defaultValue);"
    },
    {
        question: "23. How do you provide a context value?",
        answer: "<MyContext.Provider value={/* some value */}> {/* children */} </MyContext.Provider>"
    },
    {
        question: "24. How do you consume a context value?",
        answer: "const value = useContext(MyContext);"
    },
    {
        question: "25. What is prop drilling?",
        answer: "Prop drilling is the process of passing data from a parent component to a deeply nested child component through multiple layers of components, which can make the code harder to maintain."
    },
    {
        question: "26. What is a higher-order component (HOC)?",
        answer: "A higher-order component is a function that takes a component and returns a new component, allowing you to reuse component logic."
    },
    {
        question: "27. How do you create a higher-order component?",
        answer: "function withExtraInfo(WrappedComponent) { return function EnhancedComponent(props) { return <WrappedComponent {...props} extraProp='value' />; }; }"
    },
    {
        question: "28. What is the purpose of the React.Fragment?",
        answer: "React.Fragment allows you to group multiple elements without adding extra nodes to the DOM. It can be used to return multiple elements from a component."
    },
    {
        question: "29. What is the purpose of the key prop in lists?",
        answer: "The key prop helps React identify which items have changed, are added, or are removed. It should be unique among siblings to ensure efficient updates."
    },
    {
        question: "30. How do you handle forms in React?",
        answer: "Forms in React can be handled using controlled components, where the form data is managed by the component's state. You can use the onChange event to update the state."
    },
    {
        question: "31. What is the purpose of the shouldComponentUpdate lifecycle method?",
        answer: "The shouldComponentUpdate method allows you to optimize performance by preventing unnecessary re-renders. It returns a boolean indicating whether the component should update."
    },
    {
        question: "32. What is the purpose of the componentDidMount lifecycle method?",
        answer: "The componentDidMount method is called after a component is mounted. It is commonly used for data fetching or setting up subscriptions."
    },
    {
        question: "33. What is the purpose of the componentDidUpdate lifecycle method?",
        answer: "The componentDidUpdate method is called after a component updates. It can be used to perform actions based on changes in props or state."
    },
    {
        question: "34. What is the purpose of the componentWillUnmount lifecycle method?",
        answer: "The componentWillUnmount method is called just before a component is unmounted and destroyed. It is used for cleanup, such as canceling network requests or removing event listeners."
    },
    {
        question: "35. What is the purpose of the getDerivedStateFromProps lifecycle method?",
        answer: "The getDerivedStateFromProps method allows you to update the state based on changes in props. It is called right before rendering and can return an object to update the state."
    },
    {
        question: "36. What is the purpose of the getSnapshotBeforeUpdate lifecycle method?",
        answer: "The getSnapshotBeforeUpdate method allows you to capture some information from the DOM (e.g., scroll position) before it is potentially changed. It returns a value that can be passed to componentDidUpdate."
    },
    {
        question: "37. What is the purpose of error boundaries in React?",
        answer: "Error boundaries are components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app."
    },
    {
        question: "38. How do you create an error boundary?",
        answer: "class ErrorBoundary extends React.Component { constructor(props) { super(props); this.state = { hasError: false }; } static getDerivedStateFromError(error) { return { hasError: true }; } componentDidCatch(error, info) { console.log(error, info); } render() { if (this.state.hasError) { return <h1>Something went wrong.</h1>; } return this.props.children; } }"
    },
    {
        question: "39. What is the purpose of React.StrictMode?",
        answer: "React.StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants, helping to identify unsafe lifecycles, legacy API usage, and other issues."
    },
    {
        question: "40. What is the purpose of React DevTools?",
        answer: "React DevTools is a browser extension that allows you to inspect the React component hierarchy, view props and state, and debug performance issues in your React applications."
    },
    {
        question: "41. What are the rules of Hooks?",
        answer: "Two main rules: 1. Only call Hooks at the top level (not inside loops, conditions, or nested functions) 2. Only call Hooks from React function components or custom Hooks. React relies on the order in which Hooks are called, so they must be called consistently."
    },
    {
        question: "42. How to use useEffect for data fetching?",
        answer: "function UserProfile({ userId }) { const [user, setUser ] = useState(null); const [loading, setLoading] = useState(true); useEffect(() => { async function fetchUser () { const response = await fetch(`/api/users/${userId}`); const data = await response.json(); setUser (data); setLoading(false); } fetchUser (); return () => { /* Cleanup function */ }; }, [userId]); if (loading) return <div>Loading...</div>; return <div>{user.name}</div>; }"
    },
    {
        question: "43. How to create a custom Hook?",
        answer: "A custom Hook is a JavaScript function whose name starts with 'use' and may call other Hooks: function useLocalStorage(key, initialValue) { const [value, setValue] = useState(() => { const storedValue = localStorage.getItem(key); return storedValue !== null ? JSON.parse(storedValue) : initialValue; }); useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]); return [value, setValue]; }"
    },
    {
        question: "44. What is the useCallback hook?",
        answer: "The useCallback hook returns a memoized callback function. It is useful for optimizing performance by preventing unnecessary re-creations of functions on every render."
    },
    {
        question: "45. What is the useMemo hook?",
        answer: "The useMemo hook returns a memoized value. It is useful for optimizing performance by preventing expensive calculations on every render."
    },
    {
        question: "46. How do you manage side effects in functional components?",
        answer: "Side effects in functional components can be managed using the useEffect hook. It allows you to perform operations like data fetching, subscriptions, or manually changing the DOM after the component renders."
    },
    {
        question: "47. What is the purpose of the useImperativeHandle hook?",
        answer: "The useImperativeHandle hook customizes the instance value that is exposed when using ref in parent components. It is used with forwardRef to control the instance value."
    },
    {
        question: "48. How do you handle multiple state variables in a functional component?",
        answer: "You can use multiple useState hooks to manage different state variables independently: const [count, setCount] = useState(0); const [name, setName] = useState('');"
    },
    {
        question: "49. What is the purpose of the useDebugValue hook?",
        answer: "The useDebugValue hook is used to display a label for custom hooks in React DevTools, helping developers understand the state of the hook during debugging."
    },
    {
        question: "50. How do you optimize performance in React applications?",
        answer: "Performance can be optimized by using techniques such as memoization with React.memo, useMemo, and useCallback, as well as code-splitting and lazy loading components."
    },
    {
        question: "51. What is the purpose of the React Router?",
        answer: "React Router is a library for routing in React applications. It allows you to create single-page applications with navigation and dynamic routing."
    },
    {
        question: "52. How do you set up React Router?",
        answer: "import { BrowserRouter, Route, Switch } from 'react-router-dom'; function App() { return (<BrowserRouter><Switch><Route path='/' component={Home} /><Route path='/about' component={About} /></Switch></BrowserRouter>); }"
    },
    {
        question: "53. What is the purpose of the Switch component in React Router?",
        answer: "The Switch component renders the first child Route that matches the location. It is used to group Route components and ensure that only one route is rendered at a time."
    },
    {
        question: "54. How do you create a dynamic route in React Router?",
        answer: "<Route path='/user/:id' component={User } /> You can access the dynamic segment using props.match.params.id in the component."
    },
    {
        question: "55. How do you redirect in React Router?",
        answer: "import { Redirect } from 'react-router-dom'; function MyComponent() { return <Redirect to='/login' />; }"
    },
    {
        question: "56. What is the purpose of the Link component in React Router?",
        answer: "The Link component is used to create navigational links in React Router. It allows you to navigate to different routes without reloading the page."
    },
    {
        question: "57. How do you pass props to a route component in React Router?",
        answer: "<Route path='/user' render={(props) => <User  {...props} extraProp='value' />} />"
    },
    {
        question: "58. What is the purpose of the useHistory hook?",
        answer: "The useHistory hook gives you access to the history instance used by React Router. It allows you to programmatically navigate, go back, or go forward in the history stack."
    },
    {
        question: "59. How do you handle 404 pages in React Router?",
        answer: "<Route component={NotFound} /> Place this route at the end of your routes to catch all unmatched paths."
    },
    {
        question: "60. What is Redux?",
        answer: "Redux is a state management library for JavaScript applications. It provides a centralized store for managing application state and follows a unidirectional data flow."
    },
    {
        question: "61. What are the core principles of Redux?",
        answer: "1. Single source of truth: The state of your whole application is stored in an object tree within a single store. 2. State is read-only: The only way to change the state is to emit an action, an object describing what happened. 3. Changes are made with pure functions: To specify how the state tree is transformed by actions, you write pure reducers."
    },
    {
        question: "62. How do you create a Redux store?",
        answer: "import { createStore } from 'redux'; const store = createStore(rootReducer);"
    },
    {
        question: "63. What is an action in Redux?",
        answer: "An action is a plain JavaScript object that describes a change in the application state. It must have a type property that indicates the type of action being performed."
    },
    {
        question: "64. What is a reducer in Redux?",
        answer: "A reducer is a pure function that takes the previous state and an action as arguments and returns the next state. It specifies how the application's state changes in response to actions."
    },
    {
        question: "65. How do you dispatch an action in Redux?",
        answer: "store.dispatch(action);"
    },
    {
        question: "66. How do you connect a React component to Redux?",
        answer: "You can use the connect function from react-redux to connect a React component to the Redux store."
    },
    {
        question: "67. What is the purpose of the Provider component in Redux?",
        answer: "The Provider component makes the Redux store available to any nested components that need to access the Redux store. It should wrap your application at the top level."
    },
    {
        question: "68. What is middleware in Redux?",
        answer: "Middleware is a way to extend Redux with custom functionality. It provides a third-party extension point between dispatching an action and the moment it reaches the reducer."
    },
    {
        question: "69. How do you apply middleware in Redux?",
        answer: "import { applyMiddleware, createStore } from 'redux'; const store = createStore(rootReducer, applyMiddleware(thunk));"
    },
    {
        question: "70. What is Redux Thunk?",
        answer: "Redux Thunk is a middleware that allows you to write action creators that return a function instead of an action. This is useful for handling asynchronous actions."
    },
    {
        question: "71. How do you handle asynchronous actions in Redux?",
        answer: "const fetchData = () => { return async (dispatch) => { const response = await fetch('/api/data'); const data = await response.json(); dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data }); }; };"
    },
    {
        question: "72. What is the purpose of the combineReducers function in Redux?",
        answer: "The combineReducers function is used to combine multiple reducers into a single reducer function. This allows you to manage different parts of the state tree separately."
    },
    {
        question: "73. What is the purpose of the Redux DevTools?",
        answer: "Redux DevTools is a browser extension that allows you to inspect every action and state change in your Redux store. It helps in debugging and tracking the state of your application."
    },
    {
        question: "74. How do you enable Redux DevTools in your application?",
        answer: "const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());"
    },
    {
        question: "75. What is the purpose of the connect function in Redux?",
        answer: "The connect function connects a React component to the Redux store. It allows you to map state and dispatch to the component's props."
    },
    {
        question: "76. What is the purpose of the mapStateToProps function?",
        answer: "The mapStateToProps function allows you to specify which pieces of the Redux state you want to pass as props to your component. It takes the entire state as an argument and returns an object containing the desired state properties."
    },
    {
        question: "77. What is the purpose of the mapDispatchToProps function?",
        answer: "The mapDispatchToProps function allows you to specify which action creators you want to expose as props to your component. It can return an object or a function."
    },
    {
        question: "78. What is the purpose of the Redux Toolkit?",
        answer: "The Redux Toolkit is the official, recommended way to write Redux logic. It provides a set of tools and best practices to simplify the process of writing Redux applications."
    },
    {
        question: "79. How do you create a slice in Redux Toolkit?",
        answer: "import { createSlice } from '@reduxjs/toolkit'; const counterSlice = createSlice({ name: 'counter', initialState: { count: 0 }, reducers: { increment: state => { state.count += 1; }, decrement: state => { state.count -= 1; }, }, }); export const { increment, decrement } = counterSlice.actions; export default counterSlice.reducer;"
    },
    {
        question: "80. How do you optimize rendering performance in React?",
        answer: "To optimize rendering performance, you can use techniques such as React.memo, useMemo, useCallback, and code-splitting. Additionally, avoid unnecessary state updates and re-renders."
    },
    {
        question: "81. How does React.memo work?",
        answer: "React.memo is a higher-order component that memoizes the rendered output. It prevents unnecessary re-renders when props haven't changed."
    },
    {
        question: "82. When to use useMemo?",
        answer: "useMemo memoizes expensive calculations. Use it when you need to optimize expensive calculations that don't need to run on every render."
    },
    {
        question: "83. When to use useCallback?",
        answer: "useCallback returns a memoized version of the callback function that only changes if one of the dependencies has changed."
    },
    {
        question: "84. What is the purpose of the React Profiler?",
        answer: "The React Profiler is a tool that helps you measure the performance of your React application. It allows you to see how often a component renders and what causes it to render."
    },
    {
        question: "85. How do you optimize rendering performance in React?",
        answer: "To optimize rendering performance, you can use techniques such as React.memo, useMemo, useCallback, and code-splitting. Additionally, avoid unnecessary state updates and re-renders."
    },
    {
        question: "86. What is code-splitting in React?",
        answer: "Code-splitting is a technique that allows you to split your code into smaller chunks, which can be loaded on demand. This improves the initial load time of your application."
    },
    {
        question: "87. How do you implement lazy loading in React?",
        answer: "const LazyComponent = React.lazy(() => import('./LazyComponent')); function App() { return (<React.Suspense fallback={<div>Loading...</div>}><LazyComponent /></React.Suspense>); }"
    },
    {
        question: "88. What is the purpose of React.StrictMode?",
        answer: "React.StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants, helping to identify unsafe lifecycles, legacy API usage, and other issues."
    },
    {
        question: "89. How do you measure performance in React?",
        answer: "You can measure performance using the React Profiler, which provides insights into component rendering times, or by using browser performance tools to analyze load times and rendering performance."
    },
    {
        question: "90. What is the purpose of the useTransition hook?",
        answer: "The useTransition hook allows you to mark updates as transitions, enabling React to keep the UI responsive during state updates that may take longer to process."
    },
    {
        question: "91. What is the purpose of the useDeferredValue hook?",
        answer: "The useDeferredValue hook allows you to defer updating a value until the browser is idle, which can help keep the UI responsive during heavy updates."
    },
    {
        question: "92. How do you handle performance issues in React applications?",
        answer: "Performance issues can be handled by profiling components, optimizing rendering with memoization, using lazy loading, and minimizing unnecessary re-renders."
    },
    {
        question: "93. What is the purpose of the React Profiler API?",
        answer: "The React Profiler API allows you to measure the performance of your React application by tracking how often a component renders and what causes it to render."
    },
    {
        question: "94. How do you use the Profiler component?",
        answer: "import { Profiler } from 'react'; function onRender(id, phase, actualDuration) { console.log({ id, phase, actualDuration }); } function App() { return (<Profiler id='App' onRender={onRender}>{/* Your components */}</Profiler>); }"
    },
    {
        question: "95. What is the purpose of the React.memo function?",
        answer: "React.memo is a higher-order component that memoizes the rendered output of a component, preventing unnecessary re-renders when the props have not changed."
    },
    {
        question: "96. How do you optimize images in a React application?",
        answer: "Images can be optimized by using formats like WebP, lazy loading images, and using responsive images with the srcset attribute or picture element."
    },
    {
        question: "97. What is the purpose of the useLayoutEffect hook?",
        answer: "The useLayoutEffect hook is similar to useEffect, but it runs synchronously after all DOM mutations. It is useful for reading layout from the DOM and synchronously re-rendering."
    },
    {
        question: "98. How do you prevent memory leaks in React?",
        answer: "Memory leaks can be prevented by cleaning up subscriptions, timers, and event listeners in the useEffect cleanup function or in the componentWillUnmount lifecycle method."
    },
    {
        question: "99. What is the purpose of the useDebugValue hook?",
        answer: "The useDebugValue hook is used to display a label for custom hooks in React DevTools, helping developers understand the state of the hook during debugging."
    },
    {
        question: "100. How do you handle errors in React applications?",
        answer: "Errors can be handled using error boundaries, try-catch blocks, and by implementing global error handling strategies to catch and log errors."
    },
]