// FunctionalComponentWithProps.jsx
import React from "react";

// Functional component with props
function FunctionalComponentWithProps(props) {
  return (
    <div>
      <h2>Functional Component with Props</h2>
      <p>Hello, {props.name}!</p>
    </div>
  );
}

export default FunctionalComponentWithProps;

/*
In this component:

- We define a function component named FunctionalComponentWithProps.
- It accepts props as its argument, which can be passed from the parent component.
- Inside the JSX, we access the value of the 'name' prop passed from the parent using props.name.
- This component will render a greeting message using the value of the 'name' prop.
*/
