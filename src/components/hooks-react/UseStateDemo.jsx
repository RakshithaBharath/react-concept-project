import React, { useState } from "react";
import { Link } from "react-router-dom";

const UseStateDemo = () => {
  // Using useState to manage state
  const [count, setCount] = useState(0);

  // Increment function to update count
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Decrement function to update count
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h2>useState Hook Demo</h2>
      <div>
        <button onClick={incrementCount} className="btn btn-primary">
          Increment
        </button>
        <button onClick={decrementCount} className="btn btn-danger">
          Decrement
        </button>
      </div>
      <p>Count: {count}</p>
      <h3>Use Case</h3>
      <ul>
        <li>Allows functional components to manage local state.</li>
        <li>Commonly used for simple state management within a component.</li>
        <li>
          Use it when you need to store and update a single piece of state
          within a component.
        </li>
      </ul>
      <h3>Component Demonstration</h3>
      <ul>
        <li>
          The component uses the useState hook to manage a single piece of state
          named "count".
        </li>
        <li>The "count" state is initialized to 0.</li>
        <li>
          Two functions, incrementCount and decrementCount, are defined to
          update the "count" state by increasing or decreasing its value,
          respectively.
        </li>
        <li>
          When the user clicks the "Increment" button, the count value is
          incremented by 1.
        </li>
        <li>
          When the user clicks the "Decrement" button, the count value is
          decremented by 1.
        </li>
        <li>The current count value is displayed in the UI.</li>
        <li>
          This component serves as a simple demonstration of how to use the
          useState hook for managing local state in a functional component.
        </li>
      </ul>
      <div>
        {/* Bootstrap-styled back button */}
        <Link to="/topics" className="btn btn-secondary mt-3">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default UseStateDemo;

/* 
  Component Description:
  - The UseStateDemo component demonstrates how to use the useState hook in React.
  - It manages a single piece of state, "count", initialized to 0.
  - The component includes two buttons for incrementing and decrementing the count value.
  - The current count value is displayed in the UI.
  - This component serves as a basic example of state management in functional components using useState.
*/
