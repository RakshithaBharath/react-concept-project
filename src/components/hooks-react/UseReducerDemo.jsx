import React, { useReducer } from "react";
import { Link } from "react-router-dom";

// Define the initial state
const initialState = {
  count: 0, // Initial count value
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 }; // Increment count
    case "decrement":
      return { ...state, count: state.count - 1 }; // Decrement count
    case "reset":
      return initialState; // Reset to initial state
    default:
      return state; // Return current state for unknown action types
  }
};

// Component to demonstrate useReducer hook
const UseReducerDemo = () => {
  // Use the useReducer hook to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>useReducer Demo</h2>
      <div>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="btn btn-primary"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="btn btn-success"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="btn btn-danger"
        >
          Reset
        </button>
      </div>
      <p>Count: {state.count}</p>
      <h3>Use Case</h3>
      <ul>
        <li>Used for managing complex state logic in functional components.</li>
        <li>
          Provides a centralized way to handle state updates based on actions.
        </li>
        <li>
          Use it when you have state logic that involves multiple actions or
          transitions.
        </li>
      </ul>
      <h3>Component Demonstration</h3>
      <ul>
        <li>
          The useReducer hook manages state with a reducer function, which
          handles state transitions based on dispatched actions.
        </li>
        <li>
          Actions like "increment", "decrement", and "reset" update the state
          based on the current action type.
        </li>
        <li>
          The current count value is displayed in the UI and can be incremented,
          decremented, or reset using buttons.
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

export default UseReducerDemo;

/* 
  Component Description:
  - The UseReducerDemo component demonstrates how to use the useReducer hook in React.
  - It includes the initialState object that defines the initial state of the component.
  - The reducer function handles state transitions based on the action type and returns the new state.
  - The useReducer hook is used to manage the state and provides the state and dispatch function.
  - The component includes buttons for incrementing, decrementing, and resetting the count value.
  - Each button dispatches an action to update the state based on the specified action type.
  - The current count value is displayed in the UI.
  - This example highlights the use of useReducer for managing complex state logic in functional components.
*/
