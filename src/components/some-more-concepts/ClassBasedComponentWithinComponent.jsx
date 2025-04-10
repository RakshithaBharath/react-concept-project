import React, { Component } from "react";
import { Link } from "react-router-dom";

// Child component
class ChildComponent extends Component {
  render() {
    return <p>This is the Child Component.</p>;
  }
}

// Parent component containing ChildComponent
class ClassBasedComponentWithinComponent extends Component {
  render() {
    return (
      <div className="content-wrapper mt-3">
        <h2>Class Based Parent Component</h2>
        <p>This is the Parent Component.</p>
        <ChildComponent /> {/* Rendering the ChildComponent */}
        <div>
          <Link to="/topics" className="btn btn-primary mt-3">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }
}

export default ClassBasedComponentWithinComponent;

/*
  Component: ClassBasedComponentWithinComponent

  Description:
  This component demonstrates how to render a class-based child component within a class-based parent component.
  It includes a simple parent component that contains an instance of the child component.

  Child Component:
  - ChildComponent: A simple class-based component that renders a paragraph.

  Parent Component:
  - ClassBasedComponentWithinComponent: Renders a heading, a paragraph, and includes the ChildComponent.

  Lifecycle Method(s):
  None

  Props:
  None

  State:
  None

  Route:
  '/class-based-component-within-component'

  Subcomponents:
  - ChildComponent

  Additional Notes:
  - This example illustrates basic component composition in React using class-based components.
  - The link provided at the bottom navigates back to the topics page, styled with Bootstrap classes for consistency.
*/
