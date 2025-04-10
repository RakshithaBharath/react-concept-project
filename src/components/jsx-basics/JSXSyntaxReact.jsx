import React from "react";
import { Link } from "react-router-dom";
import styles from "./JSXSyntaxReact.module.css";

// JSXSyntaxReact component demonstrating JSX syntax and features
const JSXSyntaxReact = () => {
  // JSX allows embedding expressions within curly braces
  const name = "Mahendra Singh Dhoni";
  const age = 30;
  const isMember = true;
  const style = { color: "blue", fontSize: "25px" };

  // JSX allows adding CSS classes using the `className` attribute
  const primaryClass = styles.primary; // Use the styles from the CSS module
  const secondaryClass = styles.secondary; // Use the styles from the CSS module

  // JSX allows conditional rendering using ternary operator or logical AND operator
  const isAdmin = true;

  return (
    <div>
      {/* JSX allows simple element rendering */}
      <h1>Hello, World!</h1>

      {/* JSX allows embedding expressions */}
      <p>
        My name is {name} and I am {age} years old.
      </p>

      {/* JSX allows rendering elements conditionally */}
      {isMember && <p>I am a member.</p>}

      {/* JSX allows adding inline styles */}
      <p style={style}>This text is styled.</p>

      {/* JSX allows adding CSS classes */}
      <div className={primaryClass}>Primary class</div>
      <div className={`${primaryClass} ${secondaryClass}`}>
        Multiple classes
      </div>

      {/* JSX allows rendering arrays of elements */}
      <ul>
        {[1, 2, 3].map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>

      {/* JSX allows rendering child components */}
      <ChildComponent />

      {/* JSX allows fragment syntax for grouping multiple elements */}
      <>
        <p>Element 1</p>
        <p>Element 2</p>
      </>

      {/* JSX allows rendering raw HTML */}
      <div dangerouslySetInnerHTML={{ __html: "<strong>Raw HTML</strong>" }} />

      {/* JSX allows commenting */}
      {/* This is a comment */}

      {/* JSX allows rendering components conditionally */}
      {isAdmin ? <AdminComponent /> : <UserComponent />}
      <div>
        <Link to="/topics" className="btn btn-primary">Back to Topics</Link>

      </div>
    </div>
  );
};

// Example child component
const ChildComponent = () => {
  return <p>This is a child component.</p>;
};

// Example conditional components
const AdminComponent = () => {
  return <p>Welcome, Admin!</p>;
};

const UserComponent = () => {
  return <p>Welcome, User!</p>;
};

export default JSXSyntaxReact;

/* 
Component Demonstration:
- Demonstrates various features and syntax of JSX in React, including embedding expressions, conditional rendering, inline styles, CSS classes, rendering arrays, child components, fragments, raw HTML, and comments.
- Provides examples of child components and conditional component rendering.
- Includes a link styled with React Router's Link component to navigate back to the main topics.
*/
