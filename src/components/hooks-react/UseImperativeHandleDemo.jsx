import React, { useRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";

// Child component that will expose a method using useImperativeHandle
const ChildComponent = React.forwardRef((props, ref) => {
  const internalRef = useRef();

  // Expose a method using useImperativeHandle
  useImperativeHandle(ref, () => ({
    focus: () => {
      internalRef.current.focus();
    },
  }));

  return <input ref={internalRef} type="text" />;
});

// Parent component
const UseImperativeHandleDemo = () => {
  // Ref to access the child component's imperative methods
  const inputRef = useRef();

  // Function to handle button click and trigger focus on child component
  const handleClick = () => {
    inputRef.current.focus(); // Call the exposed method when the button is clicked
  };

  return (
    <div>
      {/* Use Bootstrap primary style for the heading */}
      <h2 className="text-primary">useImperativeHandle Demo</h2>
      <div>
        <h3>Use Case</h3>
        <p>
          <strong>useImperativeHandle:</strong>
        </p>
        <ul>
          <li>
            Allows a parent component to access imperative methods exposed by a
            child component.
          </li>
          <li>
            Useful when you need to interact with a child component's internal
            functionality directly from the parent component.
          </li>
          <li>
            Helps in encapsulating logic within the child component while
            providing a controlled interface to the parent component.
          </li>
        </ul>
      </div>
      <div>
        <h3>Component Demonstration</h3>
        <p>
          <strong>What is happening here:</strong>
        </p>
        <ul>
          <li>
            The ChildComponent exposes a method "focus" using
            useImperativeHandle, allowing the parent component to call it
            imperatively.
          </li>
          <li>
            The parent component, UseImperativeHandleDemo, utilizes the exposed
            "focus" method to trigger focus on the input field inside the
            ChildComponent.
          </li>
          <li>
            This demonstration showcases how to achieve direct communication and
            interaction between parent and child components using
            useImperativeHandle.
          </li>
        </ul>
      </div>
      {/* ChildComponent with ref to access its imperative methods */}
      <ChildComponent ref={inputRef} />
      {/* Button to trigger focus on the child component */}
      <button onClick={handleClick} className="btn btn-success">
        Focus Input
      </button>
      {/* Back to topics link with Bootstrap primary style */}
      <div>
        <Link to="/topics" className="btn btn-primary">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default UseImperativeHandleDemo;

/*
In-depth Explanation:
- This component demonstrates the use of the useImperativeHandle hook in React.
- The ChildComponent forwards a ref to an internal input element using useRef.
- Inside ChildComponent, the useImperativeHandle hook is used to expose a focus method to the parent component.
- The parent component, UseImperativeHandleDemo, utilizes this exposed focus method to trigger focus on the input field inside ChildComponent when a button is clicked.
- By using useImperativeHandle, we can achieve direct communication and interaction between parent and child components, allowing for better encapsulation and control over functionality.
*/
