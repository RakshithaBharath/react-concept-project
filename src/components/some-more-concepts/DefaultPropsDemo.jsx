import React from "react";
import { Link } from "react-router-dom";

const DefaultPropsDemo = ({ defaultText, defaultButtonText }) => {
  return (
    <div className="content-wrapper mt-3">
      <h2>DefaultProps Demo</h2>

      {/* Use Case Section */}
      <div>
        <h3>Use Case</h3>
        <p>
          The <code>defaultProps</code> feature in React allows setting default
          values for props in a component. This ensures that if the props are
          not provided, the component still renders correctly with default
          values.
        </p>
      </div>

      {/* Component Demonstration Section */}
      <div>
        <h3>Component Demonstration</h3>
        <div>
          <label htmlFor="text">Text:</label>
          <input
            type="text"
            id="text"
            defaultValue={defaultText}
            className="form-control"
          />
        </div>
        <div className="mt-2">
          <button className="btn btn-primary">{defaultButtonText}</button>
        </div>
      </div>

      {/* Back to Topics Link */}
      <div>
        <Link to="/topics" className="btn btn-secondary mt-3">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

// Default props values
DefaultPropsDemo.defaultProps = {
  defaultText: "Default Text",
  defaultButtonText: "Default Button",
};

export default DefaultPropsDemo;

/*
  Component: DefaultPropsDemo

  Description:
  This component demonstrates the use of defaultProps feature in React to set default values for props.
  It provides a use case explanation and a component demonstration showcasing how default props work.

  Props:
  - defaultText: Default text value for the input field.
  - defaultButtonText: Default text for the button.

  Route:
  '/default-props-demo'

  Additional Notes:
  - defaultProps ensure that components render correctly even when props are not provided.
*/
