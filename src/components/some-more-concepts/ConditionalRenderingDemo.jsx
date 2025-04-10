import React from "react";
import { Link } from "react-router-dom";

// Components for conditional rendering
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

// Component to explain conditional rendering
function ConditionalRenderingDemo() {
  // Notes explaining conditional rendering
  const notes = `
    In React, we often need to conditionally render components based on certain conditions.
    There are several ways to achieve this, including using the if statement, logical && operator, and ternary operator.
    Let's explore each method:
  `;

  // Example using the if statement
  const ExampleIfStatement = ({ isGoal }) => {
    if (isGoal) {
      return <MadeGoal />;
    }
    return <MissedGoal />;
  };

  // Example using the logical && operator
  const ExampleLogicalOperator = ({ cars }) => (
    <>
      <h2>Garage</h2>
      {cars.length > 0 ? (
        <h3>You have {cars.length} cars in your garage.</h3>
      ) : (
        <h3>You have 0 cars in your garage.</h3>
      )}
    </>
  );

  // Example using the ternary operator
  const ExampleTernaryOperator = ({ isGoal }) => (
    <div>{isGoal ? <MadeGoal /> : <MissedGoal />}</div>
  );

  // Data for examples
  const isGoal = false; // Change to true to see "Goal!" message
  const cars = ["Ford", "BMW", "Audi"]; // Change to [] to see "You have 0 cars in your garage."

  return (
    <div>
      <h2>Conditional Rendering Demo</h2>
      <p>{notes}</p>

      {/* Example using the if statement */}
      <h3>Example using the if statement:</h3>
      <ExampleIfStatement isGoal={isGoal} />

      {/* Example using the logical && operator */}
      <h3>Example using the logical && operator:</h3>
      <ExampleLogicalOperator cars={cars} />

      {/* Example using the ternary operator */}
      <h3>Example using the ternary operator:</h3>
      <ExampleTernaryOperator isGoal={isGoal} />

      {/* Back to Topics link */}
      <div>
        <Link to="/topics" className="btn btn-primary">
          Back to Topics
        </Link>
      </div>
    </div>
  );
}

export default ConditionalRenderingDemo;

/*
  Component: ConditionalRenderingDemo

  Description:
  This component demonstrates various methods of conditional rendering in React.
  It includes examples using the if statement, logical && operator, and ternary operator.

  Props:
  None

  Route:
  '/conditional-rendering-demo'

  Additional Notes:
  - The component includes sub-components for different examples of conditional rendering.
*/
