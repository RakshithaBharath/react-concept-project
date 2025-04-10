// ThisWithArrowFunction.jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header {
  constructor() {
    this.color = "Red";
  }

  // Arrow function:
  changeColor = () => {
    const demoElement = document.getElementById("demo");
    if (demoElement) {
      demoElement.innerHTML += `${this}`;
    }
  };
}

const myheader = new Header();

class ThisWithArrowFunction extends Component {
  componentDidMount() {
    // The window object calls the function:
    window.addEventListener("load", myheader.changeColor);

    // A button object calls the function:
    const button = document.getElementById("btn");
    if (button) {
      button.addEventListener("click", myheader.changeColor);
    }
  }

  render() {
    return (
      <div className="container mt-5">
        <h2>Handling "this" with Arrow Function</h2>
        <p>
          Click the button or wait for the window to load to see how "this"
          behaves with an arrow function:
        </p>
        <p style={{ fontStyle: "italic", color: "red" }}>
          In an arrow function, "this" always refers to the enclosing lexical
          context, which in this case is the `Header` object.
        </p>
        <button id="btn" className="btn btn-primary">
          Change Color
        </button>
        <div id="demo"></div>
        <div className="mt-3">
          <Link to="/topics" className="btn btn-primary">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }
}

export default ThisWithArrowFunction;

/*
In this component:

- We define a `Header` class with a `color` property and a `changeColor` method using arrow function syntax.
- The `changeColor` method is an arrow function, so `this` always refers to the instance of the `Header` class.
- We create an instance of the `Header` class called `myheader`.
- In the `ThisWithArrowFunction` component, we add event listeners in the `componentDidMount` lifecycle method:
  - The window's `load` event to demonstrate `this` in the arrow function.
  - A button click event to demonstrate `this` in the arrow function.
- When these events are triggered, the `changeColor` method is invoked, and `this` refers to the `Header` instance.
- The component includes a Bootstrap styled "Back to Topics" button for navigation.
*/
