// ReactES6ArrowFunctions.jsx
import React from "react";
import { Link } from "react-router-dom";

const ReactES6ArrowFunctions = () => {
  // Before arrow function
  const helloBefore = function () {
    return "Hello World!";
  };

  // Arrow function
  const helloArrow = () => {
    return "Hello World!";
  };

  // Arrow function with shorter syntax (implicit return)
  const helloShorter = () => "Hello World!";

  // Arrow function with parameters
  const helloWithParams = (val) => "Hello " + val;

  // Arrow function with single parameter without parentheses
  const helloSingleParam = (val) => "Hello " + val;

  return (
    <div className="container mt-5 content-wrapper">
      <h2>Arrow Functions in ES6</h2>
      <p>
        Arrow functions allow us to write shorter function syntax compared to
        traditional function expressions.
      </p>
      <h3>Example: Before</h3>
      <pre>
        <code>
          {`helloBefore = function() {
  return "Hello World!";
}`}
        </code>
      </pre>
      <p>Result: {helloBefore()}</p>

      <h3>Example: With Arrow Function</h3>
      <pre>
        <code>
          {`helloArrow = () => {
  return "Hello World!";
}`}
        </code>
      </pre>
      <p>Result: {helloArrow()}</p>

      <h3>Example: Arrow Function with Shorter Syntax</h3>
      <pre>
        <code>{`helloShorter = () => "Hello World!";`}</code>
      </pre>
      <p>Result: {helloShorter()}</p>

      <h3>Example: Arrow Function with Parameters</h3>
      <pre>
        <code>{`helloWithParams = (val) => "Hello " + val;`}</code>
      </pre>
      <p>Result: {helloWithParams("React")}</p>

      <h3>Example: Arrow Function with Single Parameter Without Parentheses</h3>
      <pre>
        <code>{`helloSingleParam = val => "Hello " + val;`}</code>
      </pre>
      <p>Result: {helloSingleParam("JavaScript")}</p>

      <div>
        <Link to="/topics" className="btn btn-primary">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default ReactES6ArrowFunctions;

/*
In this component:

- We define several variations of functions, showcasing the syntax before and after using arrow functions.
- Examples include standard arrow functions, arrow functions with implicit returns, and arrow functions with parameters.
- Each function is used to display its result in the JSX.
- A Bootstrap styled "Back to Topics" button is provided for navigation.
*/
