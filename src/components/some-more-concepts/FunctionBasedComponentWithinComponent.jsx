import React from "react";
import { Link } from "react-router-dom";

// Child component
const ChildComponent = () => {
  return <p>This is the Child Component.</p>;
};

// Parent component containing ChildComponent
const FunctionBasedComponentWithinComponent = () => {
  return (
    <div className="content-wrapper mt-3">
      <h2>Function Based Parent Component</h2>
      <p>This is the Parent Component.</p>
      <ChildComponent /> {/* Rendering the ChildComponent */}
      <div>
        <Link to="/topics" className="btn btn-primary mt-3">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default FunctionBasedComponentWithinComponent;

/*
  Component: FunctionBasedComponentWithinComponent

  Description:
  This component demonstrates how to render a functional child component within a functional parent component.
  It includes a simple parent component that contains an instance of the child component.

  Child Component:
  - ChildComponent: A simple functional component that renders a paragraph.

  Parent Component:
  - FunctionBasedComponentWithinComponent: Renders a heading, a paragraph, and includes the ChildComponent.

  Lifecycle Method(s):
  None

  Props:
  None

  State:
  None

  Route:
  '/function-based-component-within-component'

  Subcomponents:
  - ChildComponent

  Additional Notes:
  - This example illustrates basic component composition in React using functional components.
  - The link provided at the bottom navigates back to the topics page, styled with Bootstrap classes for consistency.
*/
