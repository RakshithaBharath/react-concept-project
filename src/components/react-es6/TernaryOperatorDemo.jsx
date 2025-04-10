import React from "react";
import { Link } from "react-router-dom";

const WelcomeMessage = ({ isLoggedIn }) => {
  return isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>;
};

const TernaryOperatorDemo = () => {
  const age = 25;
  const isAdult = age >= 18 ? "Yes" : "No";
  const isAdmin = true;
  const userType = isAdmin ? "Admin" : "User";
  const isLoggedIn = true;

  return (
    <div className="content-wrapper mt-3">
      <h2>Ternary Operator Demo</h2>
      <p>Using the ternary operator to conditionally render content:</p>
      <p>Is the person an adult? {isAdult}</p>
      <p>User type: {userType}</p>
      <WelcomeMessage isLoggedIn={isLoggedIn} />
      <div>
        <Link to="/topics" className="btn btn-primary mt-5">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default TernaryOperatorDemo;

/*
  Component: TernaryOperatorDemo

  Description:
  This component demonstrates the usage of the ternary operator to conditionally render content based on boolean conditions.
  It showcases how the ternary operator can be used for simple conditional rendering within JSX.

  Props:
  None

  State:
  None

  Route:
  '/ternary-operator-demo'

  Subcomponents:
  - WelcomeMessage: Renders a welcome message based on the isLoggedIn prop.

  Additional Notes:
  - The component utilizes the ternary operator for conditional rendering of content.
*/
