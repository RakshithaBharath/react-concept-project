// src/components/ArrowFunctionComponent.jsx

import React from "react";
import { Link } from "react-router-dom";

// Arrow Function Component
const ArrowFunctionComponent = () => (
  <div>
    <h2>Arrow Function Component</h2>
    <p>This is an arrow function component.</p>
    <div>
      <Link to="/topics" className="btn btn-primary">
        Back to Topics
      </Link>
    </div>
  </div>
);

export default ArrowFunctionComponent;

/*
In this component:

- We import React from "react" since JSX gets transpiled into React.createElement calls.
- We import Link from "react-router-dom" to create navigational links.
- We define a function named ArrowFunctionComponent using arrow function syntax, which implicitly returns JSX.
- Inside the JSX, we have a div element containing an h2 heading and a p paragraph.
- We add a Link component from react-router-dom to navigate back to the Topics page. The link is styled using Bootstrap's "btn btn-primary" classes.
- We export the ArrowFunctionComponent as the default export so that it can be imported and used in other files.
*/
