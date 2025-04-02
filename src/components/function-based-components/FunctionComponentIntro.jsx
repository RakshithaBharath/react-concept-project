import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const FunctionComponentIntro = () => {
  return (
    <div>
      {/* Title */}
      <h2>Introduction to Function-based Components in React</h2>

      {/* Description */}
      <p>
        Function-based components are one of the fundamental building blocks of
        React applications. They are JavaScript functions that return JSX
        (JavaScript XML) to define the component's UI.
      </p>

      {/* Subheading */}
      <h3>Ways to Create Function-based Components:</h3>

      {/* List of Methods */}
      <ol>
        <li>Basic Function Component</li>
        <li>Arrow Function Component</li>
        <li>Named Export Function Component</li>
        <li>Default Export Function Component</li>
        <li>Functional Component with Props</li>
        <li>Functional Component with ES6 Destructuring for Props</li>
        <li>Functional Component with Hooks</li>
      </ol>

      {/* Additional Description */}
      <p>
        Each of these methods offers a different approach to defining and
        structuring function-based components. We'll explore each method in
        detail with examples.
      </p>

      {/* Back Button */}
      <div>
        <Link to="/topics" className="btn btn-primary">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default FunctionComponentIntro;

/*
Component Logic:
1. Import necessary modules:
   - `React` from "react" for creating the component.
   - `Link` from "react-router-dom" for navigation.
   - `Button` from "react-bootstrap" for using Bootstrap-styled buttons.

2. Define the `FunctionComponentIntro` component:
   - Use an arrow function to define the component.
   - Return a JSX structure that includes:
     - A heading `<h2>` with the title "Introduction to Function-based Components in React".
     - A paragraph `<p>` describing function-based components.
     - A subheading `<h3>` for the different ways to create function-based components.
     - An ordered list `<ol>` with different methods to create function-based components.
     - A paragraph `<p>` summarizing the different methods.
     - A `div` containing a `Link` component wrapping a Bootstrap `Button` for navigation back to the topics page.

3. Export the `FunctionComponentIntro` component as the default export.
*/
