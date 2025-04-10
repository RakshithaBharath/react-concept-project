// ReactES6Introduction.jsx
import React from "react";
import { Link } from "react-router-dom";

const ReactES6Introduction = () => {
  return (
    <div className="container mt-5">
      <h2>What is ES6?</h2>
      <p>
        ES6 stands for ECMAScript 6. ECMAScript was created to standardize
        JavaScript, and ES6 is the 6th version of ECMAScript. It was published
        in 2015 and is also known as ECMAScript 2015.
      </p>
      <h2>Why Should I Learn ES6?</h2>
      <p>
        React uses ES6, and you should be familiar with some of the new features
        like:
      </p>
      <ul>
        <li>Classes</li>
        <li>Arrow Functions</li>
        <li>Variables (let, const, var)</li>
        <li>Array Methods like .map()</li>
        <li>Destructuring</li>
        <li>Modules</li>
        <li>Ternary Operator</li>
        <li>Spread Operator</li>
      </ul>
      <div>
        <Link to="/topics" className="btn btn-primary">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default ReactES6Introduction;

/*
In this component:

- We create a functional component named ReactES6Introduction.
- The component explains what ES6 is and why it is important to learn, especially for React development.
- It lists key ES6 features like classes, arrow functions, variables, array methods, destructuring, modules, ternary operator, and spread operator.
- A Bootstrap styled "Back to Topics" button is provided to navigate back to the topics page.
*/
