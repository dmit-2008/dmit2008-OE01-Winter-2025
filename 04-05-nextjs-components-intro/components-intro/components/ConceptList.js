// create a component that
// wraps children with a ul
// element
export default function ConceptList({ children }) {
  return <ul>
    {children}
  </ul>
}


// once done import and use in
// index.js

// Once done the above create a ConceptItem component.
// that takes a single prop called idea