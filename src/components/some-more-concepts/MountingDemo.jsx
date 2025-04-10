import React, { Component } from "react";
import { Link } from "react-router-dom";

class MountingDemo extends Component {
  constructor(props) {
    super(props);
    // Define initial state here
    this.state = {
      // Define initial state properties here if needed
    };
    alert("constructor called");
    console.log("constructor called");
  }

  static getDerivedStateFromProps(props, state) {
    alert("getDerivedStateFromProps called");
    console.log("getDerivedStateFromProps called");
    return null;
  }

  componentDidMount() {
    alert("componentDidMount called");
    console.log("componentDidMount called");
  }

  render() {
    alert("render called");
    console.log("render called");
    return (
      <div>
        <h2>Mounting Demo</h2>
        <p>Check console and alerts for lifecycle method calls</p>
        <div>
          <Link to="/topics" className="btn btn-primary">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }
}

export default MountingDemo;

/*
  Component: MountingDemo

  Description:
  This component demonstrates the mounting phase of a React component's lifecycle.
  It implements the constructor, getDerivedStateFromProps, componentDidMount methods to showcase the lifecycle events.

  Props:
  None

  State:
  None

  Lifecycle Methods:
  - constructor(): Initializes the component and state.
  - getDerivedStateFromProps(): Used to update the state based on changes in props.
  - componentDidMount(): Invoked immediately after the component is mounted.

  Route:
  '/mounting-demo'

  Additional Notes:
  - The alerts and console logs are used to demonstrate the sequence of lifecycle method calls during mounting.
*/
