// FunctionalComponentWithHooks.jsx
import React, { useState } from "react";

const FunctionalComponentWithHooks = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Functional Component with Hooks</h2>
      <p>Count: {count}</p>
      <button className="btn btn-primary" onClick={incrementCount}>
        Increment
      </button>
    </div>
  );
};

export default FunctionalComponentWithHooks;

/*
In this component:

- We import React and useState hook from React library.
- FunctionalComponentWithHooks is a functional component that uses the useState hook to manage state.
- It initializes a state variable 'count' with an initial value of 0 and a function 'setCount' to update it.
- A button with onClick event handler is used to increment the count.
*/
