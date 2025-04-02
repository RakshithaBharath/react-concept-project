// UsingFunctionalComponentWithHooks.jsx
import React from "react";
import { Link } from "react-router-dom";
import FunctionalComponentWithHooks from "./FunctionalComponentWithHooks";

const UsingFunctionalComponentWithHooks = () => {
  return (
    <div className="container mt-5">
      <h1>Using Functional Component with Hooks</h1>
      <FunctionalComponentWithHooks />
      <div>
        <Link to="/topics" className="btn btn-primary mt-5">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default UsingFunctionalComponentWithHooks;

/*
In this example:

- We import FunctionalComponentWithHooks, a functional component that utilizes React Hooks.
- The component is rendered within the JSX, allowing its functionality to be utilized.
- A Bootstrap button styled with the class "btn btn-primary" is included for navigation back to the Topics page.
*/
