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