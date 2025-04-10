import React, { useRef } from "react";
import { Link } from "react-router-dom";

// Component to demonstrate useRef hook
const UseRefDemo = () => {
  // Use the useRef hook to create a mutable ref object
  const inputRef = useRef(null);

  // Function to focus on the input element
  const focusInput = () => {
    inputRef.current.focus(); // Use the current property of the ref object to focus the input
  };

  return (
    <div>
      <h2>useRef Demo</h2>
      <div>
        <h3>Program Demonstration</h3>
        <input ref={inputRef} type="text" placeholder="Enter text" />
        <button onClick={focusInput} className="btn btn-success">
          Focus Input (With useRef)
        </button>
      </div>
      <div>
        <h3>Program Demonstration (Without useRef)</h3>
        <input type="text" placeholder="Enter text" />
        <button className="btn btn-danger">Focus Input (Without useRef)</button>
      </div>
      <h3>Use Case</h3>
      <p>
        <strong>useRef:</strong> Creates a mutable ref object to hold a
        reference to a DOM element or a value. Can be used to access DOM
        elements imperatively or to persist values across renders. Use it when
        you need to interact with DOM elements directly or store values across
        renders without causing re-renders.
      </p>
      <h3>Component Demonstration</h3>
      <p>
        <strong>What is happening here:</strong> The useRef hook creates a
        mutable ref (`inputRef`) that holds a reference to the input element.
        The `focusInput` function is defined to focus on the input element when
        the button is clicked. Clicking the "Focus Input (With useRef)" button
        demonstrates how to use useRef to imperatively interact with DOM
        elements. The second input demonstrates the difference between using
        useRef and not using it.
      </p>
      <div>
        {/* Bootstrap-styled back button */}
        <Link to="/topics" className="btn btn-primary mt-3">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default UseRefDemo;

/*
  Component Description:
  - The UseRefDemo component demonstrates how to use the useRef hook in React.
  - It includes an input field and a button. The input field uses a ref to keep a reference to the DOM element.
  - The useRef hook is used to create a ref object (`inputRef`) that holds the reference to the input element.
  - The `focusInput` function uses the ref's current property to focus the input element when the button is clicked.
  - This demonstrates how to use useRef to interact with DOM elements imperatively.
  - The second input and button serve to illustrate the difference between using useRef and not using it.
  - This example highlights the use of useRef for accessing and manipulating DOM elements directly within functional components.
*/
