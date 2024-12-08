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

# chapter 10
- css lib - chakra ui, bootstrap, MUI, Ant design
- To configure tailwing open tailwing website -> framework guides -> parcel -> follow steps
- Postcss is tool to transform css with js
- Tailwind offer prebuild component
- when parcel will bundle the code , it will include only css that is required on our web page

# chapter 11
- Higher order component - function that takes a component or return a component
- Major two layers are in React
    - Data layer - state, props , js
    - UI layer - JSX
- install React developer tool extension
- Lifting state up - read from react doc
- HomeWork - open accordion should collapse on double click
- Problem with props drilling
- React context - A place where data present and any component can access 
- Use <UserContext.Provider> and pass value to app
- React context works for lazy loaded component as well
- difference between React context and redux store

# chapter 12
- zustand is also data management lib.
- Two lib react team offers 
    1. React-redux
    2. Redux toolkit
- Keeping all the data in single object is fine. But converting that into chunk we have slice concept.
- On any event can't update slice directly. we need to dispatch action.
- dispatch action calls a function and this function know as reducer.
- To read data from slice , we use selector. getting data from selector is known as subscribing to the store.

Steps to setup redux
- Install @reduxjs/toolkit and react-redux 
- Build our store
- Connect our store to our app
- create slice
- dispatch action
- write reducer function to update the slice
- use selector to read the data from slice
- Redux use immer library to identify diff between original and mutated state

# chapter 13

- Types of testing
    - Unit
    - Integration
    - End to end testing (e2e testing)
- React testing library - React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.
- React testing lib use Jest behind the scene
- npm install --save-dev @testing-library/react
- npm i -D jest
- npm install --save-dev babel-jest @babel/core @babel/preset-env
- Configure babel
- Configure parcelrc file to disable default babel transpilation
- Jest configuration - npx jest --init
- js dom provide run time env to execute test cases
- install js dom lib - npm install --save-dev jest-environment-jsdom
- install @babel/preset-react - to make jsx work in test cases
- Include @babel/preset-react include inside babel config
- install @testing-library/jest-dom
- Fetch fn is not part of react so we need to mock it
- beforeEach(), beforeAll(), afetrEach(), afterAll()