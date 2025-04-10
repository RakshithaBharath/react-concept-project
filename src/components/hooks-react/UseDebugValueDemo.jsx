import React, { useState, useEffect, useDebugValue } from "react";
import { Link } from "react-router-dom";

// Function to determine debug value based on count
const getDebugValue = (count) => {
  return count > 5 ? "High Count" : "Low Count";
};

// Component to demonstrate useDebugValue hook
const UseDebugValueDemo = () => {
  // State to keep track of count
  const [count, setCount] = useState(0);

  // Set debug value based on count
  useDebugValue(getDebugValue(count));

  // useEffect hook to update document title
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Dependency array to run effect on count change

  return (
    <div
      className="
    container content-wrapper"
    >
      {/* Main heading */}
      <h2>useDebugValue Demo</h2>

      {/* Count display and increment button */}
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)} className="btn btn-dark">
          Increment
        </button>
      </div>

      {/* Use case section */}
      <div>
        <h3>Use Case</h3>
        <p>
          <strong>useDebugValue:</strong>
        </p>
        <ul>
          <li>
            Provides custom debugging information for functional components.
          </li>
          <li>
            Use it when you want to display additional information in React
            DevTools for better debugging.
          </li>
          <li>
            Helps in understanding the component's behavior during development.
          </li>
        </ul>
      </div>

      {/* Component demonstration section */}
      <div>
        <h3>Component Demonstration</h3>
        <p>
          <strong>What is happening here:</strong>
        </p>
        <ul>
          <li>
            The useDebugValue hook sets a debug value based on the count state,
            providing additional information for debugging.
          </li>
          <li>
            The useEffect hook updates the document title based on the count
            state, ensuring that it reflects the current count.
          </li>
          <li>
            The count value is displayed in the UI, and clicking the "Increment"
            button updates it.
          </li>
        </ul>
      </div>

      {/* Notes section */}
      <div>
        <h3>Notes</h3>
        <p>
          <strong>Understanding useDebugValue:</strong>
        </p>
        <ul>
          <li>
            useDebugValue is a custom hook provided by React that allows you to
            provide additional debugging information for functional components.
            It's useful for displaying custom data alongside the component name
            in React DevTools.
          </li>
        </ul>
      </div>

      {/* Back to topics link */}
      <div>
        <Link to="/topics" className="btn btn-primary mt-3">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default UseDebugValueDemo;
// Detailed explanation of the UseDebugValueDemo component:
/*
   - The UseDebugValueDemo component demonstrates the use of the useDebugValue hook in React functional components.
   - It maintains a count state which is incremented when the user clicks the "Increment" button.
   - The useDebugValue hook is used to provide additional debugging information based on the count state.
   - useEffect hook is used to update the document title with the current count.
   - The component also includes sections for use case, component demonstration, and notes to provide detailed information about the use of useDebugValue hook.
   - Finally, there's a "Back to Topics" link styled with Bootstrap classes.
*/
