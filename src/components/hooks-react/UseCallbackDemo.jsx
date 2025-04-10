import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

// Component to demonstrate useCallback hook
const UseCallbackDemo = () => {
  // State to keep track of the count
  const [count, setCount] = useState(0);

  // useCallback hook to memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Dependency array is empty, so the function is memoized once

  return (
    <div>
      <h2>useCallback Demo</h2>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment} className="btn btn-dark">
          Increment
        </button>
      </div>
      <h3>Use Case</h3>
      <p>
        <strong>useCallback:</strong> Memoizes functions to prevent unnecessary
        re-renders in functional components. Use it when you need to pass
        callbacks to child components that rely on reference equality. Helps in
        optimizing performance by avoiding unnecessary function re-creations.
      </p>
      <h3>Component Demonstration</h3>
      <p>
        <strong>What is happening here:</strong> The useCallback hook memoizes
        the increment function, ensuring that it's only recreated if any of its
        dependencies change. The count state is updated by incrementing it by 1
        when the button is clicked. The count value is displayed in the UI, and
        clicking the "Increment" button updates it.
      </p>

      <div>
        <h3>Understanding Terminology:</h3>
        <p>
          In the context of React hooks like useCallback, "memoizes" refers to
          the process of storing a function in memory for reuse. This term is
          derived from the concept of memoization, a programming technique used
          for optimizing performance by caching results. It's distinct from
          "memorizes," which typically means committing something to memory
          through repetition or study.
        </p>
      </div>
      <div>
        {/* Bootstrap-styled back button */}
        <Link to="/topics" className="btn btn-primary mt-3">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default UseCallbackDemo;

/*
  Component Description:
  - The UseCallbackDemo component demonstrates how to use the useCallback hook in React.
  - It includes a piece of state (`count`) and a memoized increment function.
  - The useCallback hook is used to memoize the `increment` function, which increments the count.
  - Memoizing the function prevents unnecessary re-creations of the function during re-renders, optimizing performance.
  - The count value is displayed, and clicking the "Increment" button updates the count.
  - An explanation of useCallback and its use case is provided, along with a clarification of the term "memoizes."
*/
