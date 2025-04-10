import React from "react";
import { Link } from "react-router-dom";

const LifeCycleComponents = () => {
  return (
    <div className="content-wrapper">
      <h2>Lifecycle of Components</h2>

      {/* Mounting Phase */}
      <h3>Mounting</h3>
      <p>
        Mounting means putting elements into the DOM. React has four built-in
        methods that get called, in this order, when mounting a component:
      </p>
      <ul>
        <li>constructor()</li>
        <li>getDerivedStateFromProps()</li>
        <li>render()</li>
        <li>componentDidMount()</li>
      </ul>
      <p>
        <strong>constructor():</strong> The constructor() method is called
        before anything else, when the component is initiated, and it is the
        natural place to set up the initial state and other initial values.
      </p>
      <p>
        <strong>getDerivedStateFromProps():</strong> The
        getDerivedStateFromProps() method is called right before rendering the
        element(s) in the DOM. This is the natural place to set the state object
        based on the initial props.
      </p>
      <p>
        <strong>render():</strong> The render() method is required and is the
        method that actually outputs the HTML to the DOM.
      </p>
      <p>
        <strong>componentDidMount():</strong> The componentDidMount() method is
        called after the component is rendered. This is where you run statements
        that require that the component is already placed in the DOM.
      </p>

      {/* Updating Phase */}
      <h3>Updating</h3>
      <p>
        The next phase in the lifecycle is when a component is updated. A
        component is updated whenever there is a change in the component's state
        or props. React has five built-in methods that get called, in this
        order, when a component is updated:
      </p>
      <ul>
        <li>getDerivedStateFromProps()</li>
        <li>shouldComponentUpdate()</li>
        <li>render()</li>
        <li>getSnapshotBeforeUpdate()</li>
        <li>componentDidUpdate()</li>
      </ul>

      {/* Unmounting Phase */}
      <h3>Unmounting</h3>
      <p>
        The next phase in the lifecycle is when a component is removed from the
        DOM, or unmounting as React likes to call it. React has only one
        built-in method that gets called when a component is unmounted:
      </p>
      <ul>
        <li>componentWillUnmount()</li>
      </ul>
      <p>
        <strong>componentWillUnmount():</strong> The componentWillUnmount method
        is called when the component is about to be removed from the DOM.
      </p>

      {/* Back to Topics link */}
      <div>
        <Link to="/topics" className="btn btn-primary mt-3">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default LifeCycleComponents;

/*
  Component: LifeCycleComponents

  Description:
  This component explains the lifecycle of React components, including the mounting, updating, and unmounting phases.
  It provides information about the methods called during each phase and their purposes.

  Props:
  None

  Route:
  '/lifecycle-components'

  Additional Notes:
  - React components go through different lifecycle phases, each with specific methods that can be overridden to perform tasks.
  - Understanding the component lifecycle is crucial for managing state, performing side effects, and optimizing performance.
*/
