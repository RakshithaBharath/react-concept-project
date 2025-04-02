// UsingDefaultExportComponent.jsx
import React from "react";
import { Link } from "react-router-dom";

import DefaultExportComponent from "./DefaultExportComponent";

function UsingDefaultExportComponent() {
  return (
    <div>
      <h2>Using Default Export Function Component</h2>
      <p>
        This component demonstrates the usage of a default export function
        component.
      </p>
      <DefaultExportComponent />
      <div>
        <Link to="/topics" className="btn btn-primary">
          Back to Topics
        </Link>
      </div>
    </div>
  );
}

export default UsingDefaultExportComponent;

/*
In this component:

- We define a function component named DefaultExportComponent.
- Inside the function component, we return JSX that renders an <h2> heading and a <p> paragraph.
- We export DefaultExportComponent as the default export using the export default syntax.
*/
