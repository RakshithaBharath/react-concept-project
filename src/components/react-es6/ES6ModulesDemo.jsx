import React from "react";
import { Link } from "react-router-dom";

import { add, subtract } from "./math";
import { capitalize, reverse } from "./string";

const ES6ModulesDemo = () => {
  // Using math module
  const resultAdd = add(5, 3);
  const resultSubtract = subtract(10, 4);

  // Using string module
  const capitalizedString = capitalize("hello");
  const reversedString = reverse("world");

  return (
    <div className="content-wrapper mt-3">
      <h2>ES6 Modules Demo</h2>
      <p>Utilizing the power of ES6 modules:</p>
      <p>
        Modules help us organize our code into manageable, reusable pieces. They
        allow us to break down our application into smaller parts, making it
        easier to maintain and collaborate on.
      </p>
      <p>
        React leverages the module system extensively. Each component in React
        can be considered as a module, encapsulating its own functionality,
        styling, and state. This modular approach enables us to build complex
        UIs by composing smaller, reusable components together.
      </p>
      <p style={{ fontWeight: "bold" }}>Math Module:</p>
      <p>
        Performing mathematical operations using functions from the Math module:
      </p>
      <p>5 + 3 = {resultAdd}</p>
      <p>10 - 4 = {resultSubtract}</p>
      <p style={{ fontWeight: "bold" }}>String Module:</p>
      <p>Manipulating strings using functions from the String module:</p>
      <p>Capitalized string: {capitalizedString}</p>
      <p>Reversed string: {reversedString}</p>
      <div>
        <Link to="/topics" className="btn btn-primary mt-1">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default ES6ModulesDemo;

/*
  Component: ES6ModulesDemo

  Description:
  This component demonstrates the usage of ES6 modules by importing functions from separate modules.
  It showcases how modules help organize code into reusable pieces and facilitate the maintenance and collaboration of codebases.

  Props:
  None

  State:
  None

  Route:
  '/es6-modules-demo'

  Subcomponents:
  None

  Additional Notes:
  - The component utilizes functions imported from separate modules to perform mathematical and string operations.
*/
