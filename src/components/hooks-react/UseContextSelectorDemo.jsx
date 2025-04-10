import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";

// Create a context
const MyContext = createContext();

// Custom implementation of useContextSelector hook
const useContextSelector = (Context, selector) => {
  const contextValue = useContext(Context);
  return selector(contextValue);
};

// Parent component
const UseContextSelectorDemo = () => {
  const contextValue = { value1: "Hello", value2: "World" };

  return (
    <MyContext.Provider value={contextValue}>
      <div>
        <h2>useContextSelector Demo</h2>
        <div>
          <h3>Use Case</h3>
          <ul>
            <li>
              The useContextSelector hook is a custom implementation that allows
              selecting specific values from a React context.
            </li>
            <li>
              This implementation uses the useContext hook internally to access
              the context value and then applies the provided selector function
              to extract the desired value.
            </li>
            <li>
              In this example, we demonstrate the usage of useContextSelector
              within a parent and child component.
            </li>
            <li>
              The parent component provides a context value containing two
              values (value1 and value2).
            </li>
            <li>
              The child component uses useContextSelector to select value1 from
              the context and renders it.
            </li>
            <li>
              This showcases how to utilize context selectors in React
              functional components for more granular access to context values.
            </li>
          </ul>
        </div>
        <ChildComponent />
        <h3>Component Demonstration</h3>
        <div>
          <p>
            <strong>What is happening here:</strong>
          </p>
          <ul>
            <li>
              The ChildComponent utilizes the useContextSelector hook to select
              values from the context and renders them.
            </li>
          </ul>
        </div>
        <div>
          {/* Back to topics link with Bootstrap primary style */}
          <Link to="/topics" className="btn btn-primary">
            Back to Topics
          </Link>
        </div>
      </div>
    </MyContext.Provider>
  );
};

// Child component
const ChildComponent = () => {
  // Using the useContextSelector hook to select values from the context
  const value1 = useContextSelector(MyContext, (context) => context.value1);
  const value2 = useContextSelector(MyContext, (context) => context.value2);

  return (
    <div>
      <p>Value from context 1: {value1}</p>
      <p>Value from context 2: {value2}</p>
    </div>
  );
};

export default UseContextSelectorDemo;

/*
In this component:

- We create a React context named MyContext to share values between components.
- The useContextSelector hook allows selecting specific values from a context.
- UseContextSelectorDemo serves as the parent component, providing context values and rendering ChildComponent.
- ChildComponent utilizes the useContextSelector hook to access context values and render them.
- We provide a brief explanation of the component's purpose and usage, along with a Back to Topics link styled with Bootstrap's primary button style.
*/
