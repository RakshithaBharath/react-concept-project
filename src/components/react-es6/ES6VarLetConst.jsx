// ES6VarLetConst.jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ES6VarLetConst extends Component {
  componentDidMount() {
    // Example with var
    var x;
    console.log("Before var declaration:", x); // Prints: undefined
    x = 5.6;
    console.log("After var initialization:", x); // Prints: 5.6
    x = 10.2; // Reinitialization
    console.log("After var reinitialization:", x); // Prints: 10.2

    // Example with let
    let y;
    // console.log("Before let declaration:", y); // Throws ReferenceError: Cannot access 'y' before initialization
    y = 5.6;
    console.log("After let initialization:", y); // Prints: 5.6
    y = 10.2; // Reinitialization
    console.log("After let reinitialization:", y); // Prints: 10.2

    // Example with const
    // console.log("Before const declaration:", z); // Throws ReferenceError: Cannot access 'z' before initialization
    const z = 5.6;
    console.log("After const initialization:", z); // Prints: 5.6
    // const z = 10.2; // Throws SyntaxError: Identifier 'z' has already been declared
    // z = 10.2; // Throws TypeError: Assignment to constant variable.

    // Example with accessing variables before declaration (hoisting)
    var hoistedVar;
    console.log("Before variable declaration (hoisting):", hoistedVar); // Prints: undefined
    hoistedVar = "I'm hoisted!";
    console.log("After variable initialization (hoisting):", hoistedVar); // Prints: I'm hoisted!
  }

  render() {
    return (
      <div className="container mt-5">
        <h2>ES6 Variable Declarations: var, let, and const</h2>
        <p>
          Before ES6, there was only one way of defining variables: with the{" "}
          <code>var</code> keyword. If you did not define them, they would be
          assigned to the global object. Now, with ES6, there are three ways of
          defining variables: <code>var</code>, <code>let</code>, and{" "}
          <code>const</code>.
        </p>
        <h3>Example with var:</h3>
        <p>
          If you use <code>var</code> outside of a function, it belongs to the
          global scope. If you use <code>var</code> inside of a function, it
          belongs to that function. If you use <code>var</code> inside of a
          block, i.e., a for loop, the variable is still available outside of
          that block. <code>var</code> has a function scope, not a block scope.
        </p>
        <h3>Example with let:</h3>
        <p>
          <code>let</code> is the block-scoped version of <code>var</code> and
          is limited to the block (or expression) where it is defined. If you
          use <code>let</code> inside of a block, i.e., a for loop, the variable
          is only available inside of that loop. <code>let</code> has a block
          scope.
        </p>
        <h3>Example with const:</h3>
        <p>
          <code>const</code> is a variable that once it has been created, its
          value can never change. <code>const</code> has a block scope. The
          keyword <code>const</code> does not define a constant value. It
          defines a constant reference to a value. Because of this, you can NOT
          reassign a constant value, reassign a constant array, or reassign a
          constant object. But you CAN change the elements of a constant array
          or change the properties of a constant object.
        </p>
        <div className="mt-3">
          <Link to="/topics" className="btn btn-primary">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }
}

export default ES6VarLetConst;

/*
In this component:

- We demonstrate the behavior of `var`, `let`, and `const` declarations.
- The componentDidMount lifecycle method showcases examples of variable hoisting and scope.
- In the render method, we explain the differences between `var`, `let`, and `const` through text and code examples.
- The "Back to Topics" button is styled with Bootstrap for consistency.
*/
