import React from "react";
import { Link } from "react-router-dom";

const FormValidationReact = () => {
  return (
    <div className="container mt-3">
      {/* Component title */}
      <h2>Validation in React: Theories and Approaches</h2>

      {/* Section 1: PropTypes */}
      <section>
        <h3>1. PropTypes</h3>
        <p>
          {/* Explanation of PropTypes */}
          PropTypes is a built-in typechecking feature in React that allows you
          to define the types of props that a component should receive. You can
          specify the expected data type (e.g., string, number, array, object)
          and whether a prop is required or optional. If the passed prop does
          not match the specified type, React will log a warning in the console.
        </p>
      </section>

      {/* Section 2: Form Validation */}
      <section>
        <h3>2. Form Validation</h3>
        <p>
          {/* Explanation of Form Validation */}
          For form inputs, you can implement validation logic to ensure that
          user input meets certain criteria (e.g., required fields, minimum
          length, valid email format). You can handle form validation using
          state, event handlers, and conditional rendering to display error
          messages.
        </p>
      </section>

      {/* Section 3: Third-Party Libraries */}
      <section>
        <h3>3. Third-Party Libraries</h3>
        <p>
          {/* Explanation of Third-Party Libraries */}
          There are several third-party validation libraries available for
          React, such as Yup, Formik, and React Hook Form. These libraries
          provide advanced validation features, form handling utilities, and
          validation schema definitions to simplify the validation process.
        </p>
      </section>

      {/* Back to Topics link styled with Bootstrap's primary button style */}
      <div>
        <Link to="/topics" className="btn btn-primary">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default FormValidationReact;

// Explanation of the component:
/*
This component provides an overview of different theories and approaches to validation in React.
It covers three main topics:
1. PropTypes: Explains how PropTypes can be used to define the types of props that a component should receive.
2. Form Validation: Discusses implementing validation logic for form inputs, including handling required fields, minimum length, and valid email format.
3. Third-Party Libraries: Mentions various third-party validation libraries available for React, such as Yup, Formik, and React Hook Form.

At the bottom, there's a "Back to Topics" link styled as a Bootstrap primary button for navigation.
*/
