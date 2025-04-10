import React, { Component } from "react";
import { Link } from "react-router-dom";

class ES6Destructuring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: "",
      truck: "",
      suv: "",
      car1: "",
      truck1: "",
      suv1: "",
      car2: "",
      suv2: "",
      add: "",
      subtract: "",
      multiply: "",
      divide: "",
      vehicleOne: "",
    };
  }

  componentDidMount() {
    // Destructuring arrays
    const vehicles = ["mustang", "f-150", "expedition"];

    // Old way
    const car = vehicles[0];
    const truck = vehicles[1];
    const suv = vehicles[2];

    // New way with destructuring
    const [car1, truck1, suv1] = vehicles;

    // Destructuring arrays with omitted elements
    const [car2, , suv2] = vehicles;

    // Destructuring arrays from a function return
    function calculate(a, b) {
      const add = a + b;
      const subtract = a - b;
      const multiply = a * b;
      const divide = a / b;

      return [add, subtract, multiply, divide];
    }

    const [add, subtract, multiply, divide] = calculate(4, 7);

    // Destructuring objects
    const vehicleOne = {
      brand: "Ford",
      model: "Mustang",
      type: "car",
      year: 2021,
      color: "red",
      registration: {
        city: "Houston",
        state: "Texas",
        country: "USA",
      },
    };

    this.setState({
      car,
      truck,
      suv,
      car1,
      truck1,
      suv1,
      car2,
      suv2,
      add,
      subtract,
      multiply,
      divide,
      vehicleOne,
    });
  }

  render() {
    const {
      car,
      truck,
      suv,
      car1,
      truck1,
      suv1,
      car2,
      suv2,
      add,
      subtract,
      multiply,
      divide,
      vehicleOne,
    } = this.state;

    return (
      <div className="content-wrapper mt-3">
        <h2>ES6 Destructuring</h2>
        <p>
          Destructuring makes it easy to extract only what is needed from arrays
          and objects. Let's explore examples of destructuring with arrays and
          objects.
        </p>

        {/* Destructuring Arrays */}
        <h3>Destructuring Arrays</h3>
        <p>
          <strong>car:</strong> {car}
          <br />
          <strong>truck:</strong> {truck}
          <br />
          <strong>suv:</strong> {suv}
          <br />
          <strong>car1:</strong> {car1}
          <br />
          <strong>truck1:</strong> {truck1}
          <br />
          <strong>suv1:</strong> {suv1}
          <br />
          <strong>car2:</strong> {car2}
          <br />
          <strong>suv2:</strong> {suv2}
          <br />
        </p>

        {/* Destructuring Arrays */}
        <h3>Destructuring Arrays</h3>
        <p>
          <strong>add:</strong> {add}
          <br />
          <strong>subtract:</strong> {subtract}
          <br />
          <strong>multiply:</strong> {multiply}
          <br />
          <strong>divide:</strong> {divide}
          <br />
        </p>

        {/* Destructuring Objects */}
        <h3>Destructuring Objects</h3>
        <p>
          <strong>vehicleOne:</strong> {JSON.stringify(vehicleOne)}
        </p>

        {/* Back to Topics Link */}
        <div>
          <Link to="/topics" className="btn btn-primary mt-1">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }
}

export default ES6Destructuring;

/*
  Component: ES6Destructuring

  Description:
  This component demonstrates the usage of ES6 destructuring with arrays and objects.
  It provides examples of destructuring arrays, including handling omitted elements and destructuring from function returns.
  Additionally, it showcases destructuring objects, both shallow and deeply nested.

  Lifecycle Method(s):
  - componentDidMount(): Initializes destructuring examples.

  Props:
  None

  State:
  None

  Route:
  '/es6-destructuring'

  Subcomponents:
  None

  Additional Notes:
  - Destructuring simplifies the extraction of specific properties from arrays and objects.
  - The component includes examples of both array and object destructuring, showcasing their utility.
*/
