// FunctionalComponentWithDestructuring.jsx
import React from "react";

// Functional component with ES6 destructuring for props
function FunctionalComponentWithDestructuring({ name }) {
  return (
    <div>
      <h2>Functional Component with ES6 Destructuring for Props</h2>
      <p>Hello, {name}!</p>
    </div>
  );
}

export default FunctionalComponentWithDestructuring;

/*
In this component:

- We define a functional component named FunctionalComponentWithDestructuring that accepts props.
- Using ES6 destructuring in the function parameter, we extract the `name` prop directly.
- Inside the component, we display a personalized greeting message using the `name` prop.
- The component also includes a Bootstrap button styled with the class "btn btn-primary" for navigation.
- The component is then exported as the default export.
*/
