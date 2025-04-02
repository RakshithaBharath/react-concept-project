import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ReactES6 = () => {
  return (
    <div className="react-es6">
      <h2>Using ES6 Syntax in React</h2>
      <p>
        ES6 (ECMAScript 2015) introduced several new features and enhancements
        to JavaScript, which can be leveraged when developing React
        applications. Some key ES6 features commonly used in React include:
      </p>
      <ul>
        <li>
          Arrow functions for concise syntax and lexical scoping of{" "}
          <code>this</code>.
        </li>
        <li>
          Template literals for string interpolation and multi-line strings.
        </li>
        <li>
          Destructuring assignment for extracting values from objects and
          arrays.
        </li>
        <li>Classes for defining React components using the class syntax.</li>
        <li>
          Import and export statements for modularizing code and managing
          dependencies.
        </li>
        <li>
          Spread syntax (...) for merging objects, arrays, and function
          arguments.
        </li>
      </ul>
      <p>
        By using ES6 features in your React code, you can write more concise,
        readable, and maintainable applications. It's recommended to familiarize
        yourself with ES6 syntax to take full advantage of its capabilities in
        React development.
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

export default ReactES6;

/* 
Component Demonstration:
- Discusses the usage of ES6 syntax in React development, highlighting key features such as arrow functions, template literals, destructuring assignment, classes, import/export statements, and spread syntax.
- Emphasizes the benefits of using ES6 features for writing concise, readable, and maintainable React applications.
- Includes a button styled link to navigate back to the main topics.
*/
