import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PropTypesDemo = ({ name, age, email }) => {
  return (
    <div className="container mt-3">
      {/* Component title */}
      <h3>PropTypes Demo</h3>

      {/* Use Case section */}
      <div>
        <h4>Use Case</h4>
        <p>
          {/* Explanation of PropTypes usage */}
          The <code>PropTypesDemo</code> component demonstrates the usage of
          PropTypes in React to enforce type checking for component props.
        </p>
      </div>

      {/* Component Demonstration section */}
      <div>
        <h4>Component Demonstration</h4>
        <p>
          {/* Description of component rendering */}
          This component renders the provided <code>name</code>,{" "}
          <code>age</code>, and <code>email</code> props, enforcing their types
          using PropTypes.
        </p>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>

      {/* Passing Props to Route Component section */}
      <div>
        <h4>Passing Props to Route Component</h4>
        <p>
          {/* Instructions for passing props to Route component */}
          In React Router v6, you should pass props using the{" "}
          <code>element</code> prop of the <code>Route</code> component. For
          example, to pass props to the <code>PropTypesDemo</code> component,
          use:
        </p>
        <p>
          <code>
            &lt;Route path="/form-validation-react-prop-types"
            element=&lt;PropTypesDemo name="Dhoni" age={43}{" "}
            email="msdhoni@gmail.com" /&gt;/&gt;
          </code>
        </p>
        <p>
          {/* Additional explanation */}
          This ensures that the props are correctly passed to the component when
          it's rendered for the specified route. Additionally, using PropTypes
          in the <code>PropTypesDemo</code> component enforces type validation
          for the passed props. If the props are not of the specified types, a
          warning will be displayed in the console, helping to catch potential
          errors early during development.
        </p>
      </div>

      {/* Back to Topics link styled with Bootstrap's primary button style */}
      <div>
        <Link to="/topics" className="btn btn-primary">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

// PropTypes validation for component props
PropTypesDemo.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropTypesDemo;
// Explanation of the component:
/*
This component demonstrates the usage of PropTypes in React to enforce type checking for component props.
It includes sections explaining the use case, component demonstration, and passing props to the route component.
At the bottom, there's a "Back to Topics" link styled as a Bootstrap primary button for navigation.
*/
