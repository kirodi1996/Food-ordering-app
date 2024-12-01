# chapter 4
- Passing arg to functional component is known as props
- Config driven UI

# chapter 5
- use any name js or jsx for file name
- No folder structure suggested by react
- Two type of Export/Import
    - Default export
    - Named export
- React perform faster DOM manipulation
- Virtual DOM - Representation of actual DOM
- Diff algorithm - find out the diff between two virtual DOM
- Reconciliation algorithm / React fiber
- React Hooks 
    - Normal JS utility function
    - useState
    - useEffect
- When the state variable update, React rerender the component
- Find out the diffr between two object is fast comparitively two find out diff between two DOM nodes, React follow same rule.
- Two ways of render the DOM 
    - Loads ==> API ==> render
    - Load ==> render ==> API ==> render (better UX experience)
- React render cycle is very fast
- useEffect() will be called after the component renders
- Shimmer UI
- Conditional rendering - render diff component based on condition <Shimmer>
- Why do we create state variable (useState) 
- whenever state variable update, react triggers a reconcilliation cycle (rerenders).

# chapter 7
- useEffect is called after every component render, but dependency array change the behavior of this function
- Only callback function in mandatory.
- never create useState var outside the functional component or inside if else / function
- React router dom lib
- npm i react-router-dom to install react router
- import createBrowserRouter and pass route config in this
- pass routing config to RouterProvider
- root.render(<RouterProvider router={appRouter} />);
- there are some other routers as well.. read more from website
- React router dom gives us access to hook useRouterError, this will display a better msg
- Children routes in react
    - place <Outlet /> tag for children element
    - write children config in appRouter
- Link about contact us with route 
    - import Link from react-router-dom and use as anchor tag in html <Link to="/about">About us</Link>
- Two types of routing present in web apps
    - server side
    - client side
- For dynamic route path - route_path/:id
- useParam hook for fetching url params

# chapter 8

- Class based components 
    - extends React.Component
    - render method in class based component which will return JSX 
    - We create a constructor to receive props and call super(props) - why?
    - create state variable inside constructor
    - Update the state variable - this.setState()
- Life cycle methods of class based component
- first constructor is called and then render method call
- componentDidMount hook - To make api call
- series of function call - constructor -> render -> componentDidMount

- series of fn call in case of parent child relationship
    - parent constructor -> parent render -> child constructor -> child render -> child did Mount -> Parent did mount
- componentDidMount works in single batch to make dom manipulation in single phase
- three cycle happen in react 
 mounting -> updating -> unmounting

- function component - which return some piece of JSX
- useEffect can't be async why?

# chapter 9
- Single responsibility principle
- Custom hooks
- Chunking / Code splitting // Dynamic bundling
- Lazy loading