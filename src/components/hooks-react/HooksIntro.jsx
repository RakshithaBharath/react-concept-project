import React from "react";
import { Link } from "react-router-dom";

const HooksIntro = () => {
  return (
    <div className="content-wrapper">
      <h2>React Hooks</h2>
      <div>
        <p>
          React hooks are functions that enable functional components to use
          state and other React features without writing a class.
        </p>
        <div>
          <p>
            Here we are using the useState Hook to keep track of the application
            state.
          </p>
          <p>
            State generally refers to application data or properties that need
            to be tracked.
          </p>
        </div>

        <div>
          <h3>Hook Rules</h3>
          <ol>
            <li>Hooks can only be called inside React function components.</li>
            <li>Hooks can only be called at the top level of a component.</li>
            <li>Hooks cannot be conditional.</li>
          </ol>
          <p>
            <code>Note: Hooks will not work in React class components.</code>
          </p>
        </div>
        <h3>useState</h3>
        <div>
          <p>useState allows functional components to manage local state.</p>
        </div>

        <h3>useEffect</h3>
        <div>
          <p>
            Enables performing side effects in functional components, such as
            data fetching, subscriptions, or manually changing the DOM.
          </p>
        </div>

        <h3>useContext</h3>
        <div>
          <p>
            Provides access to the React context within functional components.
          </p>
        </div>

        <h3>useReducer</h3>
        <div>
          <p>
            An alternative to useState, used for managing more complex state
            logic in functional components.
          </p>
        </div>

        <h3>useRef</h3>
        <div>
          <p>
            Allows functional components to keep a mutable reference to a DOM
            element or a value that persists across renders.
          </p>
        </div>

        <h3>useCallback</h3>
        <div>
          <p>
            Memoizes functions to prevent unnecessary re-renders in functional
            components.
          </p>
        </div>

        <h3>useMemo</h3>
        <div>
          <p>
            Memoizes the result of expensive calculations to optimize
            performance in functional components.
          </p>
        </div>

        <h3>useLayoutEffect</h3>
        <div>
          <p>
            Similar to useEffect, but fires synchronously after all DOM
            mutations. It's commonly used when the effect needs to be executed
            synchronously to avoid visual inconsistencies.
          </p>
        </div>

        <h3>useDebugValue</h3>
        <div>
          <p>Customizes the display of hooks in React DevTools.</p>
        </div>

        <h3>useImperativeHandle</h3>
        <div>
          <p>
            Customizes the instance value that is exposed by a ref, primarily
            used in conjunction with forwardRef.
          </p>
        </div>

        <h3>useContextSelector</h3>
        <div>
          <p>
            A utility for selecting a value from the context object in
            functional components.
          </p>
        </div>

        <h3>useTransition</h3>
        <div>
          <p>
            Manages asynchronous state updates to create smooth transitions
            during rendering.
          </p>
        </div>

        <h3>useDeferredValue</h3>
        <div>
          <p>Delays the update of a state value to improve performance.</p>
        </div>

        <h3>useEvent</h3>
        <div>
          <p>Listens to events on DOM elements.</p>
        </div>
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

export default HooksIntro;

/* 
  Component Description:
  - The HooksIntro component provides an introduction to React Hooks.
  - It explains the purpose of hooks and lists the rules for using them.
  - The component also describes various hooks such as useState, useEffect, useContext, and more.
  - A Bootstrap-styled link is provided to navigate back to the topics page.
*/
