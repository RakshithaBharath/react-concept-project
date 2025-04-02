// UsingFunctionalComponentWithDestructuring.jsx
import React from "react";
import { Link } from "react-router-dom";
import FunctionalComponentWithDestructuring from "./FunctionalComponentWithDestructuring";

function UsingFunctionalComponentWithDestructuring() {
  return (
    <div>
      <h1>Using Functional Component with ES6 Destructuring for Props</h1>
      <FunctionalComponentWithDestructuring name="Sita" />
      <FunctionalComponentWithDestructuring name="Geeta" />
      <div>
        <Link to="/topics" className="btn btn-primary">
          Back to Topics
        </Link>
      </div>
    </div>
  );
}

export default UsingFunctionalComponentWithDestructuring;

/*
In this example:

- We import FunctionalComponentWithDestructuring, a component that utilizes ES6 destructuring to directly extract the name prop from the props object.
- We use FunctionalComponentWithDestructuring twice in the JSX, passing different names as props to demonstrate its reusability and flexibility.
- The component also includes a Bootstrap button styled with the class "btn btn-primary" for navigation.
- The button redirects users back to the Topics page when clicked.
*/
