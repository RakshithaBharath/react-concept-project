import React, { Component } from "react";
import { Link } from "react-router-dom";

class UpdatingDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    alert("constructor called");
    console.log("constructor called");
  }

  static getDerivedStateFromProps(props, state) {
    alert("getDerivedStateFromProps called");
    console.log("getDerivedStateFromProps called");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    alert("shouldComponentUpdate called");
    console.log("shouldComponentUpdate called");
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    alert("componentDidUpdate called");
    console.log("componentDidUpdate called");
    console.log("Snapshot:", snapshot);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    alert("getSnapshotBeforeUpdate called");
    console.log("getSnapshotBeforeUpdate called");
    return prevState.count;
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    alert("render called");
    console.log("render called");
    return (
      <div>
        <h2>Updating Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick} className="btn btn-secondary">
          Increment Count
        </button>
        <div>
          <Link to="/topics" className="btn btn-primary mt-3">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }
}

export default UpdatingDemo;

/*
  Component: UpdatingDemo

  Description:
  This component demonstrates the updating phase of a React component's lifecycle.
  It implements the shouldComponentUpdate, getSnapshotBeforeUpdate, componentDidUpdate methods to showcase the lifecycle events.

  Props:
  None

  State:
  - count: A counter value for demonstration purposes.

  Lifecycle Methods:
  - constructor(): Initializes the component and state.
  - getDerivedStateFromProps(): Used to update the state based on changes in props.
  - shouldComponentUpdate(): Determines whether the component should re-render.
  - getSnapshotBeforeUpdate(): Captures information before the component updates the DOM.
  - componentDidUpdate(): Invoked immediately after updating occurs.

  Route:
  '/updating-demo'

  Additional Notes:
  - The alerts and console logs are used to demonstrate the sequence of lifecycle method calls during updating.
*/
