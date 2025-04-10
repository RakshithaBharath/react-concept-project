import React, { Component } from "react";
import { Link } from "react-router-dom";

class StateChangeDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }

  // Method to change the color property in state
  changeColor = () => {
    this.setState({ color: "blue" });
  };

  render() {
    return (
      <div className="content-wrapper mt-3">
        <h2>Changing State Object</h2>
        <p>
          In this example, we demonstrate how to change a value in the state
          object using the <code>this.setState()</code> method.
        </p>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
          className="btn btn-success"
        >
          Change color
        </button>
        <div>
          <p>
            Always use the <code>setState()</code> method to change the state
            object. It will ensure that the component knows it has been updated
            and calls the <code>render()</code> method (and all the other
            lifecycle methods).
          </p>
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

export default StateChangeDemo;

/*
  Component: StateChangeDemo

  Description:
  This component demonstrates changing a value in the state object using the setState() method.
  It provides a button to change the color property in the state from "red" to "blue".

  Props:
  None

  State:
  - brand: Holds the brand value.
  - model: Holds the model value.
  - color: Holds the color value.
  - year: Holds the year value.

  Route:
  '/state-change-demo'

  Additional Notes:
  - The setState() method is used to update the state object in React components.
  - It ensures that the component knows it has been updated and triggers the re-rendering process.
*/
