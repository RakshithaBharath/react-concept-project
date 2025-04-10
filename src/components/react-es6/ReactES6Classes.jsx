// ReactES6Classes.jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ReactES6Classes extends Component {
  render() {
    return (
      <div className="container mt-5 content-wrapper">
        <h2>Classes in ES6</h2>
        <p>
          ES6 introduced classes, which are a type of function but declared
          using the <code>class</code> keyword. Properties are assigned inside a{" "}
          <code>constructor()</code> method.
        </p>
        <h3>Example: Simple Class Constructor</h3>
        <pre>
          <code>
            {`class Car {
  constructor(name) {
    this.brand = name;
  }
}

const mycar = new Car("Ford");`}
          </code>
        </pre>
        <p>
          Notice the convention of starting the class name with an uppercase
          character.
        </p>
        <h3>Method in Classes</h3>
        <p>You can add your own methods in a class:</p>
        <pre>
          <code>
            {`class Car {
  constructor(name) {
    this.brand = name;
  }
  
  present() {
    return 'I have a ' + this.brand;
  }
}

const mycar = new Car("Ford");
mycar.present();`}
          </code>
        </pre>
        <h3>Class Inheritance</h3>
        <p>
          To create class inheritance, use the <code>extends</code> keyword:
        </p>
        <pre>
          <code>
            {`class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}
const mycar = new Model("Ford", "Mustang");
mycar.show();`}
          </code>
        </pre>
        <p>
          The <code>super()</code> method refers to the parent class, allowing
          access to its properties and methods.
        </p>
        <div>
          <Link to="/topics" className="btn btn-primary">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }
}

export default ReactES6Classes;

/*
In this component:

- We define a class component named ReactES6Classes.
- The component explains ES6 classes, constructors, methods, and inheritance with code examples.
- A Bootstrap styled "Back to Topics" button is provided to navigate back to the topics page.
*/
