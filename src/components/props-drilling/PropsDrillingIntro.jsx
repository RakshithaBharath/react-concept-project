import React from "react";

const PropsDrillingIntro = () => {
  return (
    <div className="container mt-5 content-wrapper">
      <h2 className="text-center mb-4">
        Introduction to Props Drilling in React
      </h2>
      <div>
        <h3>Types of Props Dealing</h3>
        <p>
          In React, there are primarily two ways to pass data between
          components:
        </p>
        <ul>
          <li>
            <strong>Props Drilling:</strong> Passing data from a parent
            component down to a deeply nested child component through
            intermediate components.
          </li>
          <li>
            <strong>Context API or State Management Libraries:</strong> Managing
            global or local state that can be accessed by any component without
            the need for props drilling.
          </li>
        </ul>
      </div>
      <div>
        <h3>What is Props Drilling?</h3>
        <p>
          Props drilling is a pattern in React where data needs to be passed
          down through multiple levels of nested components to reach a deeply
          nested child component.
        </p>
      </div>
      <div>
        <h3>Why Do We Need It?</h3>
        <p>
          Props drilling is necessary when a parent component needs to pass data
          to a deeply nested child component that is not directly connected
          through a parent-child relationship.
        </p>
      </div>
      <div>
        <h3>Use Cases</h3>
        <p>Props drilling is commonly used in scenarios such as:</p>
        <ul>
          <li>Passing data or configuration down to reusable components.</li>
          <li>Sharing state between components in a component tree.</li>
          <li>
            Handling user authentication and authorization across multiple
            components.
          </li>
        </ul>
      </div>
      <div>
        <h3>Real-time Example</h3>
        <p>
          For example, in a nested hierarchy of components representing a UI, if
          a deeply nested component needs access to user authentication data
          stored in the top-level parent component, props drilling would be
          employed to pass this data down the component tree.
        </p>
      </div>
      <div>
        <h3>Industry-wise Applications</h3>
        <p>
          In industries such as e-commerce, finance, and healthcare, where
          complex user interfaces and data sharing between components are
          common, props drilling plays a crucial role in managing data flow and
          component communication.
        </p>
      </div>
      {/* Back to Topics Link */}
      <div className="mt-5">
        <a href="/topics" className="btn btn-primary">
          Back to Topics
        </a>
      </div>
    </div>
  );
};

export default PropsDrillingIntro;
/*
Detailed Explanation:
Import Statements:

React: Imports the main React library to use JSX and React components.
PropsDrillingIntro Component:

This functional component serves as an introduction to the concept of props drilling in React. It provides a structured layout explaining various aspects of props drilling.
Container and Header:

The outermost div with classes container mt-5 content-wrapper sets up the main container for the content, with margin-top and content-wrapper styling.
The header h2 with classes text-center mb-4 centers the title and adds a bottom margin for spacing.
Types of Props Dealing Section:

This section explains two primary ways to pass data between components in React: Props Drilling and using Context API or state management libraries.
An unordered list (ul) with list items (li) details each method.
What is Props Drilling Section:

This section provides a definition and explanation of props drilling, describing it as a pattern where data is passed through multiple levels of nested components.
Why Do We Need It Section:

This section explains the necessity of props drilling, particularly when a parent component needs to pass data to a deeply nested child component.
Use Cases Section:

This section outlines common scenarios where props drilling is used, such as passing data to reusable components, sharing state between components, and handling user authentication.
Real-time Example Section:

This section provides a real-time example to illustrate props drilling, describing a situation where user authentication data is passed from a top-level parent component to a deeply nested child component.
Industry-wise Applications Section:

This section explains the applications of props drilling across various industries like e-commerce, finance, and healthcare, emphasizing its importance in managing data flow and component communication.
Back to Topics Link:

A link (a) styled as a button using Bootstrap classes (btn btn-secondary) allows users to navigate back to the topics page.

The PropsDrillingIntro component is a well-structured informational component designed to educate you about props drilling in React, highlighting its importance, use cases, and applications.
*/
