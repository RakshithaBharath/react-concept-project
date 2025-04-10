import React from "react";
import { Link } from "react-router-dom";

const FragmentsDemo = () => {
  return (
    <>
      <h2>Fragments Demo</h2>
      <p>
        Fragments allow you to group multiple children elements without adding
        extra nodes to the DOM.
      </p>
      <p>
        Fragments are useful when you want to return multiple elements from a
        component without wrapping them in a single parent element.
      </p>
      <p>
        Here's an example of using fragments to render a list without an extra
        wrapper:
      </p>
      <ul>
        <>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </>
      </ul>
      <div>
        <Link to="/topics" className="btn btn-primary mt-5">
          Back to Topics
        </Link>
      </div>
    </>
  );
};

export default FragmentsDemo;

/*
  Component: FragmentsDemo

  Description:
  This component demonstrates the usage of React Fragments to group multiple children elements
  without adding extra nodes to the DOM. It provides an example of rendering a list using fragments.

  Props:
  None

  State:
  None

  Route:
  '/fragments-demo'

  Subcomponents:
  None

  Additional Notes:
  - React Fragments allow for the return of multiple elements from a component without adding an extra wrapper element.
  - Useful for cleaner and more semantic HTML structures.
*/
