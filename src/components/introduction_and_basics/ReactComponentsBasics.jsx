import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ReactComponentsBasics = () => {
  return (
    <div className="react-components-basics">
      <h2>Basics of React Components</h2>
      <p>
        React components are the building blocks of a React application. They
        encapsulate the UI and its behavior, allowing for a modular and reusable
        approach to building user interfaces. Here are some key points about
        React components:
      </p>
      <ul>
        <li>
          <strong>Component Structure:</strong> Each React component typically
          consists of a render method, which returns JSX representing the UI
          elements to be rendered.
        </li>
        <li>
          <strong>Functional Components:</strong> Functional components are
          defined as JavaScript functions and are primarily used for presenting
          UI based on props.
        </li>
        <li>
          <strong>Class Components:</strong> Class components are defined as ES6
          classes and have additional features like state and lifecycle methods.
        </li>
        <li>
          <strong>Props:</strong> Props (short for properties) are used for
          passing data from parent to child components. They are immutable and
          help make components reusable and customizable.
        </li>
        <li>
          <strong>State:</strong> State is used to manage component-specific
          data that may change over time. It allows components to be dynamic and
          interactive.
        </li>
        <li>
          <strong>Lifecycle Methods:</strong> Class components have lifecycle
          methods that allow developers to hook into various stages of a
          component's lifecycle, such as mounting, updating, and unmounting.
        </li>
        <li>
          <strong>Composition:</strong> React components can be composed
          together to create complex UIs. Parent components can contain child
          components, and child components can contain other child components,
          enabling a hierarchical structure.
        </li>
      </ul>
      <p>
        Understanding the basics of React components is essential for building
        React applications efficiently. Whether you're working with functional
        components or class components, mastering component-based development is
        key to becoming proficient in React.
      </p>
      {/* Back to Topics link */}
      <div>
        <Link to="/topics">
          <Button variant="primary">Back to Topics</Button>
        </Link>
      </div>
    </div>
  );
};

export default ReactComponentsBasics;

/* 
Component Demonstration:
- Discusses the basics of React components, covering component structure, functional components, class components, props, state, lifecycle methods, and composition.
- Emphasizes the importance of understanding React component fundamentals for efficient React application development.
- Includes a button styled link to navigate back to the main topics.
*/
