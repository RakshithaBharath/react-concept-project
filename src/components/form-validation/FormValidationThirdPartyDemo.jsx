import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik"; // Import necessary components from Formik
import * as Yup from "yup"; // Import Yup for validation schema

// Prerequisite Note Component
const PrerequisiteNote = () => (
  <div>
    <h3>Prerequisite Note:</h3>
    <p>
      Before proceeding with the form validation demo, make sure you have
      installed the required third-party libraries.
    </p>
    {/* Display installation commands */}
    <pre>
      <code>
        {`npm install formik yup`}
        <br />
        {`# Or if you're using yarn:`}
        <br />
        {`yarn add formik yup`}
      </code>
    </pre>
  </div>
);

const FormValidationThirdPartyDemo = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Form Validation Demo</h2>
      {/* Include Prerequisite Note component */}
      <PrerequisiteNote />
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Formik component for managing form state and validation */}
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            // Define validation schema using Yup
            validationSchema={Yup.object({
              username: Yup.string()
                .required("Username is required")
                .min(5, "Username must be at least 5 characters"),
              password: Yup.string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters"),
            })}
            // Handle form submission
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {/* Form component */}
            <Form className="bg-light rounded p-4">
              {/* Username field */}
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                />
                {/* Display error message for username field */}
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                />
              </div>

              {/* Password field */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                />
                {/* Display error message for password field */}
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              {/* Submit button */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      {/* Back to Topics link */}
      <div className="row mt-4">
        <div className="col-md-6">
          <Link to="/topics" className="btn btn-secondary">
            Back to Topics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormValidationThirdPartyDemo;
/**
 * This component, FormValidationThirdPartyDemo, showcases form validation in React using the Formik library along with Yup for validation schema. Let's break down the code and its functionality:

Import Statements: The component imports necessary modules from React, React Router, Formik, and Yup to handle form validation.

Prerequisite Note Component: This component displays a message reminding users to install the required third-party libraries, Formik and Yup, before proceeding with the form validation demo. It provides installation commands for npm and yarn.

FormValidationThirdPartyDemo Component: This is the main component that renders the form validation demo.

Formik Component: Within this component, we define the initial form values, validation schema using Yup, and the form submission handler.

initialValues: This object specifies the initial values for the form fields.
validationSchema: This object defines the validation rules for each form field using Yup. For example, the username field must be at least 5 characters long, and the password field must be at least 8 characters long.
onSubmit: This function handles the form submission. In this example, it simply alerts the form values.
Form Component: Inside the Formik component, we have a Form component where the form fields are defined.

Field: Each input field in the form is wrapped in a Field component, which manages the state of the corresponding input.
ErrorMessage: This component displays validation errors for each field if they exist.
Event Handlers: The handleChange and handleSubmit functions handle changes to form fields and form submission, respectively. They update the form state and trigger validation checks.

Error Handling: The hasError function checks if there are any validation errors for a specific field, and if so, it returns true.

isValidEmail Function: This function validates email addresses using a regular expression. It checks if the email format is valid.

Back to Topics Link: Finally, there's a link that redirects users back to the main topics page.

By using Formik and Yup, this component demonstrates a robust and scalable approach to form validation in React, providing a smooth user experience with real-time validation feedback.

 */
