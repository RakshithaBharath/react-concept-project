import React, { Component } from "react";
import { Link } from "react-router-dom";

class StateWithMultiplePropertiesDemo extends Component {
  constructor(props) {
    super(props);
    // Initialize state with multiple properties
    this.state = {
      name: "Virat",
      age: 30,
      isAdmin: false,
    };
  }

  render() {
    return (
      <div className="content-wrapper mt-3">
        <h2>State with Multiple Properties</h2>
        <p>
          In this example, we demonstrate how to manage state with multiple
          properties in a React component.
        </p>
        <div>
          <p>Name: {this.state.name}</p>
          <p>Age: {this.state.age}</p>
          <p>Is Admin: {this.state.isAdmin ? "Yes" : "No"}</p>
        </div>
        <div>
          <Link to="/topics" className="btn btn-primary mt-3">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }
}

export default StateWithMultiplePropertiesDemo;

/*
  Component: StateWithMultiplePropertiesDemo

  Description:
  This component demonstrates how to manage state with multiple properties in a React component.
  It initializes state with properties like name, age, and isAdmin, and displays them in the UI.

  Props:
  None

  State:
  - name: Holds the name value.
  - age: Holds the age value.
  - isAdmin: Holds the boolean value indicating whether the user is an admin.

  Route:
  '/state-with-multiple-properties-demo'

  Additional Notes:
  - State in React components can hold multiple properties to manage various aspects of component data.
*/
