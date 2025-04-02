// UsingNamedExportComponent.jsx
import React from "react";
import { Link } from "react-router-dom";
import { NamedExportComponent } from "./NamedExportComponent"; // Importing the NamedExportComponent

function UsingNamedExportComponent() {
  return (
    <div>
      <h2>Using Named Export Component</h2>
      <p>
        This component demonstrates the usage of a named export function
        component.
      </p>

      {/* Rendering the NamedExportComponent */}
      <NamedExportComponent />
      <div>
        <Link to="/topics" className="btn btn-primary">
          Back to Topics
        </Link>
      </div>
    </div>
  );
}

export default UsingNamedExportComponent;

/*
In this example:

- NamedExportComponent is exported as a named export from NamedExportComponent.jsx.
- In UsingNamedExportComponent.jsx, we import NamedExportComponent using the named import syntax.
- We then use NamedExportComponent inside the UsingNamedExportComponent function component JSX to render it.
- We add a Link component from react-router-dom to navigate back to the Topics page. The link is styled using Bootstrap's "btn btn-primary" classes.
- Finally, UsingNamedExportComponent is exported as the default export from UsingNamedExportComponent.jsx.
*/
