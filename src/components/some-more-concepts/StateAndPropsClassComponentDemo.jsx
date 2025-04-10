import React, { Component } from "react";
import { Link } from "react-router-dom";

class StateAndPropsClassComponentDemo extends Component {
  constructor(props) {
    super(props);
    // Initialize state with color property
    this.state = {
      color: "red", // Default color
    };
  }

  render() {
    return (
      <div className="content-wrapper mt-3">
        <h2>State and Props in Class Components</h2>

        {/* Displaying state */}
        <div>
          <h3>State:</h3>
          <p>Color: {this.state.color}</p>
        </div>

        {/* Displaying props */}
        <div>
          <h3>Props:</h3>
          <p>Message: {this.props.message}</p>
        </div>

        {/* Notes section */}
        <div>
          <h3>Notes:</h3>
          <p>
            <strong>State:</strong> Class components were traditionally used to
            manage component state and lifecycle methods. State allows
            components to manage and update data internally. The constructor
            function in a class component is where you initialize the
            component's properties. In React, component properties are kept in
            an object called state. The constructor function is also where you
            honor the inheritance of the parent component by including the
            super() statement, which executes the parent component's constructor
            function, giving your component access to all the functions of the
            parent component (React.Component).
          </p>
          <p>
            <strong>Props:</strong> Props are used to pass data from a parent
            component to a child component. They are immutable and read-only.
            Function components are now preferred over class components due to
            their simplicity and readability. However, there are scenarios where
            class components may still be necessary, such as when using certain
            lifecycle methods or when working with legacy codebases. When
            deciding whether to use a class component or a function component,
            consider the complexity of the component, the need for lifecycle
            methods, and the project requirements.
          </p>
        </div>

        {/* Back to Topics link */}
        <div>
          <Link to="/topics" className="btn btn-primary mt-3">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }
}

export default StateAndPropsClassComponentDemo;

/*
  Component: StateAndPropsClassComponentDemo

  Description:
  This component demonstrates the use of state and props in a class component.
  It initializes state in the constructor and displays both state and props values in the render method.
  The component also includes a notes section explaining the concepts of state and props in class components.

  State:
  - color: Represents a color value, initialized to 'red'.

  Props:
  - message: A message passed from the parent component to demonstrate props usage.

  Lifecycle Method(s):
  - constructor(props): Initializes state and calls super(props) to inherit from React.Component.

  Route:
  '/state-and-props-class-component-demo'

  Additional Notes:
  - State allows components to manage internal data and update it dynamically.
  - Props are used to pass data from parent to child components and are immutable.
  - While function components are preferred for their simplicity, class components may still be needed for certain use cases.
*/
