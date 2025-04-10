import React, { Component } from "react";
import { Link } from "react-router-dom";

class PropsInConstructorDemo extends Component {
  constructor(props) {
    super(props);
    // Access props in the constructor
    const { name } = this.props; // Destructure the 'name' prop
    this.state = {
      message: `Hello, ${name}!`, // Initialize state message using props
    };
  }

  render() {
    return (
      <div className="content-wrapper mt-3">
        <h2>Using Props in Constructor</h2>
        <p>{this.state.message}</p>
        <div>
          <Link to="/topics" className="btn btn-primary mt-3">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }
}

export default PropsInConstructorDemo;

/*
  Component: PropsInConstructorDemo

  Description:
  This component demonstrates how to access props in the constructor of a class component.
  It initializes the state message using the provided prop 'name' to greet the user.

  Props:
  - name: A string representing the name of the user.

  State:
  - message: A string message initialized with a greeting using the 'name' prop.

  Lifecycle Method(s):
  - constructor(props): Initializes state using props and calls super(props) to inherit from React.Component.

  Route:
  '/props-in-constructor-demo'

  Additional Notes:
  - Accessing props in the constructor allows initialization of state based on props values.
  - Initializing state in the constructor is a common practice when the state depends on props.
*/
