import React, { Component } from "react";
import { Link } from "react-router-dom";

class UnmountingDemo extends Component {
  componentDidMount() {
    this.logMessage("componentDidMount called");
  }

  componentWillUnmount() {
    this.logMessage("componentWillUnmount called");
  }

  logMessage(message) {
    const logMessage = `${message}`;
    alert(logMessage);
    console.log(logMessage);
  }

  render() {
    this.logMessage("render called");
    return (
      <div>
        <h2>Unmounting Demo</h2>
        <p>
          This component will demonstrate the unmounting phase of the component
          lifecycle.
        </p>
        <div>
          <Link to="/topics" className="btn btn-primary">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }
}

export default UnmountingDemo;

/*
  Component: UnmountingDemo

  Description:
  This component demonstrates the unmounting phase of a React component's lifecycle.
  It implements the componentWillUnmount method to perform cleanup tasks before the component is removed from the DOM.

  Props:
  None

  Lifecycle Methods:
  - componentDidMount(): Invoked after the component is mounted.
  - componentWillUnmount(): Invoked immediately before a component is unmounted and destroyed.

  Route:
  '/unmounting-demo'

  Additional Notes:
  - The alerts and console logs are used to demonstrate the sequence of lifecycle method calls during unmounting.
*/
