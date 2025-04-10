import React from "react";

// Higher Order Component function
const withLogging = (WrappedComponent) => {
  // Define a new component inside the HOC
  class WithLogging extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is unmounted`);
    }

    render() {
      // Render the wrapped component with its original props
      return <WrappedComponent {...this.props} />;
    }
  }

  // Return the new component
  return WithLogging;
};

// Sample component
const MyComponent = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Wrap the sample component with the HOC
const MyComponentWithLogging = withLogging(MyComponent);

// Demo Component
const HigherOrderComponentDemo = () => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Higher Order Component Demo</h2>
          {/* Render the wrapped component */}
          <MyComponentWithLogging name="Guys!! Did you noticed where I came from !! I am an implementation of HOC &#128512;" />
        </div>
      </div>

      {/* Use Case Section */}
      <div className="row mt-5">
        <div className="col-md-6">
          <h3>Use Case</h3>
          <ul>
            <li>
              Higher Order Components (HOCs) are commonly used in React
              applications to add additional functionality to existing
              components without modifying their original code.
            </li>
            <li>
              They allow for cross-cutting concerns like logging,
              authentication, or performance monitoring to be applied to
              multiple components in a modular and reusable way.
            </li>
          </ul>
        </div>
      </div>

      {/* Component Description */}
      <div className="row mt-5">
        <div className="col-md-6">
          <h3>Component Description</h3>
          <ul>
            <li>
              In this example, we create a Higher Order Component called
              withLogging that logs when the wrapped component is mounted and
              unmounted.
            </li>
            <li>
              We define a sample component called MyComponent, which simply
              renders a greeting message.
            </li>
            <li>
              We wrap MyComponent with the withLogging HOC to create a new
              component called MyComponentWithLogging, adding logging
              functionality to it.
            </li>
          </ul>
        </div>
      </div>

      {/* Back to Topics Link */}
      <div className="row mt-5">
        <div className="col-md-6">
          <a href="/topics" className="btn btn-primary">
            Back to Topics
          </a>
        </div>
      </div>
    </div>
  );
};

export default HigherOrderComponentDemo;

/* 
  Component Description:
  - This component demonstrates the usage of a Higher Order Component (HOC) called withLogging.
  - The HOC adds logging functionality to a wrapped component, logging when it is mounted and unmounted.
  - It showcases how HOCs can be used to enhance the functionality of existing components in a modular and reusable manner.
*/
