import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Hypothetical useEvent hook
const useEvent = (eventName, handler) => {
  useEffect(() => {
    const eventListener = (event) => handler(event);

    window.addEventListener(eventName, eventListener);

    return () => {
      window.removeEventListener(eventName, eventListener);
    };
  }, [eventName, handler]);
};

const UseEventDemo = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  // Subscribe to mousemove event using useEvent hook
  useEvent("mousemove", (event) => {
    setCoordinates({ x: event.clientX, y: event.clientY });
  });

  return (
    <div>
      <h2>useEvent Demo</h2>
      <div>
        <h3>Use Case</h3>
        <p>
          <strong>useEvent:</strong> Allows subscribing to DOM events in a
          reusable and declarative way within functional components.
        </p>
      </div>
      <div>
        <h3>Component Description</h3>
        <p>
          This example demonstrates how you might use a hypothetical{" "}
          <code>useEvent</code> hook to subscribe to the <code>mousemove</code>{" "}
          event and display the coordinates of the mouse cursor.
        </p>
      </div>
      <div>
        <strong>Mouse Coordinates:</strong>
        <p>X: {coordinates.x}</p>
        <p>Y: {coordinates.y}</p>
      </div>
      <div>
        <Link to="/topics" className="btn btn-primary">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default UseEventDemo;

/*
Explanation:
- The UseEventDemo component demonstrates the usage of a hypothetical useEvent hook to subscribe to the mousemove event.
- The useEvent hook is a custom hook that takes an event name and a handler function. It uses useEffect to add and remove an event listener for the specified event.
- Inside UseEventDemo, the useEvent hook is used to subscribe to the mousemove event. Whenever the mouse moves, the coordinates of the cursor are updated and displayed in the component.
- The component description provides an overview of the useEvent hook and its purpose.
- Mouse coordinates (X and Y) are displayed in the UI, showing the current position of the mouse cursor.
- The "Back to Topics" link is styled with Bootstrap's primary button style for better visual appeal and user experience.
*/
