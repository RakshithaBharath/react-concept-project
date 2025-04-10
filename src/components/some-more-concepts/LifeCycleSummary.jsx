import React, { Component } from "react";
import { Link } from "react-router-dom";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = { count: 0 };
    // Bind logMessage method to the component instance
    this.logMessage = this.logMessage.bind(this);
  }

  // Method to log messages and display alerts
  logMessage(message, state) {
    const logMessage = `${message}`;
    if (state) {
      alert(logMessage + ` State: ${JSON.stringify(state)}`);
      console.log(logMessage, state);
    } else {
      alert(logMessage);
      console.log(logMessage);
    }
  }

  // Method invoked after the component is mounted
  componentDidMount() {
    this.logMessage("componentDidMount called");
  }

  // Method invoked immediately before a component is unmounted and destroyed
  componentWillUnmount() {
    this.logMessage("componentWillUnmount called");
  }

  // Method invoked after updating occurs. This method is not called for the initial render.
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.logMessage("componentDidUpdate called", prevState);
  }

  // Event handler to increment the count
  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    // Log and alert when render is called
    this.logMessage("render called", this.state);
    return (
      <div className="content-wrapper">
        <h2>Lifecycle Methods Demo</h2>
        <p>
          This component demonstrates all the lifecycle methods discussed so
          far.
        </p>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.handleClick} className="btn btn-danger">
          Increment Count
        </button>

        <h3>Lifecycle Methods</h3>
        <p>
          <strong>Mounting:</strong> Mounting means putting elements into the
          DOM. React has four built-in methods that get called, in this order,
          when mounting a component:
        </p>
        <ul>
          <li>constructor()</li>
          <li>getDerivedStateFromProps()</li>
          <li>render()</li>
          <li>componentDidMount()</li>
        </ul>

        <p>
          <strong>Updating:</strong> The next phase in the lifecycle is when a
          component is updated. React has five built-in methods that get called,
          in this order, when a component is updated:
        </p>
        <ul>
          <li>getDerivedStateFromProps()</li>
          <li>shouldComponentUpdate()</li>
          <li>render()</li>
          <li>getSnapshotBeforeUpdate()</li>
          <li>componentDidUpdate()</li>
        </ul>

        <p>
          <strong>Unmounting:</strong> The next phase in the lifecycle is when a
          component is removed from the DOM, or unmounting as React likes to
          call it. React has only one built-in method that gets called when a
          component is unmounted:
        </p>
        <ul>
          <li>componentWillUnmount()</li>
        </ul>

        {/* Back to Topics link */}
        <div>
          <Link to="/topics" className="btn btn-primary">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }
}

export default LifecycleDemo;

/* 
  Component: LifecycleDemo

  Description:
  This component demonstrates all the lifecycle methods of a React component.
  It includes methods for mounting, updating, and unmounting phases.
  The component maintains a count state that can be incremented by clicking a button.

  Props:
  None

  Lifecycle Methods:
  - componentDidMount(): Invoked after the component is mounted.
  - componentWillUnmount(): Invoked immediately before a component is unmounted and destroyed.
  - componentDidUpdate(): Invoked immediately after updating occurs.
    This method is not called for the initial render.
    It is called after the render method has been called and the component's updates are flushed to the DOM.

  Route:
  '/lifecycle-demo'

  Additional Notes:
  - Alerts and console logs are used to demonstrate the sequence of lifecycle method calls.
*/
