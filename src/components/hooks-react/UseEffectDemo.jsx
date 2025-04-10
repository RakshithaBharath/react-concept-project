import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UseEffectDemo = () => {
  // State to manage the count
  const [count, setCount] = useState(0);

  // useEffect to perform side effects
  useEffect(() => {
    // Update document title with count after every render
    document.title = `Count: ${count}`;

    // Clean-up function to reset document title
    return () => {
      document.title = "React App"; // Reset document title when component unmounts
    };
  });

  // Increment count function
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>useEffect Demo</h2>
      <div>
        <button onClick={incrementCount} className="btn btn-dark">
          Increment
        </button>
      </div>
      <p>Count: {count}</p>
      <h3>Use Case</h3>
      <ul>
        <li>Allows performing side effects in functional components.</li>
        <li>
          Commonly used for tasks such as data fetching, subscriptions, or
          updating the DOM.
        </li>
        <li>Executes after every render by default.</li>
        <li>
          Use it when you need to perform side effects in functional components.
        </li>
      </ul>
      <h3>Component Demonstration</h3>
      <ul>
        <li>
          The document title is updated to reflect the current count after every
          render.
        </li>
        <li>
          A clean-up function is specified to reset the document title when the
          component is unmounted.
        </li>
      </ul>
      <div>
        {/* Bootstrap-styled back button */}
        <Link to="/topics" className="btn btn-primary mt-3">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default UseEffectDemo;

/* 
  Component Description:
  - The UseEffectDemo component demonstrates how to use the useEffect hook in React.
  - It manages a single piece of state, "count", initialized to 0.
  - The document title is updated to reflect the current count value after every render.
  - A clean-up function resets the document title when the component is unmounted.
  - This component serves as a basic example of performing side effects in functional components using useEffect.
*/
