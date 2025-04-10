// ThisWithRegularFunction.jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header {
  constructor() {
    this.color = "Red";
  }

  // Regular function:
  changeColor = function () {
    const demoElement = document.getElementById("demo");
    if (demoElement) {
      demoElement.innerHTML += `<br/>${this}`;
    }
  };
}

const myheader = new Header();

class ThisWithRegularFunction extends Component {
  componentDidMount() {
    // Add event listener to the button after the component is mounted
    const button = document.getElementById("btn");
    if (button) {
      button.addEventListener("click", myheader.changeColor);
    }
  }

  render() {
    return (
      <div className="container mt-5">
        <h2>Handling "this" with Regular Function</h2>
        <p>
          The <code>this</code> keyword represents different objects depending
          on how the function was called.
        </p>
        <p>
          Click the button to see how "this" behaves with a regular function:
        </p>
        <p style={{ fontStyle: "italic", color: "red" }}>
          In a regular function, the value of "this" depends on how the function
          is called. In this example, we bind "this" using a regular function
          declaration.
        </p>
        <button id="btn" className="btn btn-primary">
          Click Me!
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

export default ThisWithRegularFunction;

/*
In this component:

- We define a `Header` class with a `color` property and a `changeColor` method.
- The `changeColor` method is a regular function, which means the value of `this` depends on how the function is called.
- We create an instance of the `Header` class called `myheader`.
- In the `ThisWithRegularFunction` component, we add an event listener to a button in the `componentDidMount` lifecycle method, binding the `changeColor` method of the `myheader` instance.
- When the button is clicked, the `changeColor` method is invoked, demonstrating how `this` behaves in a regular function.
- The component includes a Bootstrap styled "Back to Topics" button for navigation.
*/
