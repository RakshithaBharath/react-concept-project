import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

// Component to demonstrate useLayoutEffect hook
const UseLayoutEffectDemo = () => {
  // State to keep track of the window width
  const [width, setWidth] = useState(0);

  // useLayoutEffect hook to update the width after DOM mutations
  useLayoutEffect(() => {
    // Function to update the width state with the current window width
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener for window resize to update the width
    window.addEventListener("resize", updateWidth);

    // Call updateWidth initially to set the initial width
    updateWidth();

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      <h2>useLayoutEffect Demo</h2>
      <div>
        <p>Window Width: {width}px</p>
      </div>
      <h3>Use Case</h3>
      <p>
        <strong>useLayoutEffect:</strong> Fires synchronously after all DOM
        mutations. Use it when the effect needs to be executed synchronously to
        avoid visual inconsistencies. Helps ensure that any visual updates occur
        smoothly without flickering or layout issues.
      </p>
      <h3>Component Demonstration</h3>
      <div>
        <strong>What is happening here:</strong>
        <ul>
          <li>
            The useLayoutEffect hook updates the width state after DOM
            mutations, ensuring that the width is always accurate.
          </li>
          <li>
            By adding an event listener for the resize event, the width is
            updated whenever the window is resized.
          </li>
          <li>
            The width value is displayed in the UI, and it updates dynamically
            as the window is resized.
          </li>
        </ul>
      </div>
      <div>
        <h3>Notes</h3>
        <p>
          <strong>Understanding useLayoutEffect:</strong> useLayoutEffect is
          similar to useEffect, but it fires synchronously after all DOM
          mutations. It's useful when you need to perform operations that
          require immediate access to the DOM layout or to prevent visual
          inconsistencies.
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

export default UseLayoutEffectDemo;

/*
  Component Description:
  - The UseLayoutEffectDemo component demonstrates how to use the useLayoutEffect hook in React.
  - It includes a piece of state (`width`) that tracks the window's width.
  - The useLayoutEffect hook updates the `width` state after DOM mutations, ensuring accurate and synchronous updates.
  - An event listener for the resize event is added to update the width whenever the window is resized.
  - The component displays the current window width, which updates dynamically as the window size changes.
  - An explanation of useLayoutEffect and its use case is provided, along with a demonstration of its behavior.
*/
