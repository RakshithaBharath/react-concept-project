import React, { useState, useTransition, useDeferredValue } from "react";
import { Link } from "react-router-dom";

// Component to demonstrate useDeferredValue hook
const UseDeferredValueDemo = () => {
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();
  const deferredText = useDeferredValue(text, { timeoutMs: 2000 });

  // Function to handle text input change
  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    startTransition(() => {
      // No need to update the text again after the timeout
      setTimeout(() => {}, 2000);
    });
  };

  return (
    <div>
      <h2>useDeferredValue Demo</h2>
      <div>
        <h3>Use Case</h3>
        <p>
          <strong>useDeferredValue:</strong> Allows deferring updates to a value
          until after a certain timeout, optimizing performance by batching
          updates.
        </p>
      </div>
      <div>
        <h3>Component Description</h3>
        <p>
          The useDeferredValue hook creates a deferred version of a value with a
          specified timeout. This deferred value is useful when you want to
          delay updates to a value to optimize performance by batching updates.
        </p>
      </div>
      <p>
        <strong>Example:</strong> In this example, we have an input field where
        you can type text. The value of the input field is stored in the state.
        We use the useDeferredValue hook to create a deferred version of the
        text state with a timeout of 2000 milliseconds. This means that when the
        user types in the input field, the value of the input is not immediately
        updated in the deferredText state. Instead, the update is deferred until
        after the timeout has elapsed, which can help optimize performance by
        batching updates.
      </p>
      {/* Input field to enter text */}
      <input type="text" value={text} onChange={handleChange} />
      <div>
        {/* Render the spinner if isPending is true */}
        {isPending && <Spinner />}
        <p>
          {/* Display the deferred text */}
          Deferred Text:{" "}
          <span className="text-danger">{isPending ? null : deferredText}</span>
        </p>
      </div>
      {/* Back to topics link */}
      <div>
        <Link to="/topics" className="btn btn-primary">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

// Spinner component
const Spinner = () => {
  return (
    <div className="spinner-border text-danger" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default UseDeferredValueDemo;
/*
Explanation:
The UseDeferredValueDemo component demonstrates the useDeferredValue hook, which allows deferring updates to a value until after a certain timeout. This optimization can help in scenarios where frequent updates to a value are expected, allowing React to batch updates and improve performance.

1. State:
   - 'text': Stores the value of the input field.
   - 'isPending': Tracks whether a transition is pending, which is managed by useTransition.

2. Hooks:
   - useTransition: Manages asynchronous state transitions, ensuring smooth UI updates.
   - useDeferredValue: Creates a deferred version of a value with a specified timeout, here used for 'text' state.

3. handleChange Function:
   - Updates the 'text' state when the input field value changes.
   - Uses startTransition to initiate a transition, indicating a state update is pending.

4. Component Structure:
   - Renders an input field for entering text.
   - Renders a Spinner component if a transition is pending.
   - Displays the deferred text, which updates after the specified timeout.

5. Spinner Component:
   - Renders a spinner animation while data is being fetched.

6. Back to Topics Link:
   - Styled using Bootstrap's primary button style.
   - Navigates back to the Topics page when clicked.
*/
