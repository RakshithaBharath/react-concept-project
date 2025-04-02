// UsingFunctionalComponentWithProps.jsx
import React from "react";
import { Link } from "react-router-dom";
import FunctionalComponentWithProps from "./FunctionalComponentWithProps";

function UsingFunctionalComponentWithProps() {
  return (
    <div>
      <h1>Using Functional Component with Props</h1>
      {/* 
        We use the FunctionalComponentWithProps component twice:
        - First with the name prop set to "Karan".
        - Second with the name prop set to "Arjun".
      */}
      <FunctionalComponentWithProps name="Karan" />
      <FunctionalComponentWithProps name="Arjun" />
      <div>
        <Link to="/topics">
          <button className="btn btn-primary">Back to Topics</button>
        </Link>
      </div>
    </div>
  );
}

export default UsingFunctionalComponentWithProps;

/*
In this example:

- We import the FunctionalComponentWithProps component and use it twice within this component.
- The FunctionalComponentWithProps component is used with different values for the 'name' prop to demonstrate how props can be passed and used.
- Each instance of the FunctionalComponentWithProps component renders a personalized message based on the value of the 'name' prop.
- Finally, we provide a Bootstrap-styled button as a link to navigate back to the Topics page.
*/
