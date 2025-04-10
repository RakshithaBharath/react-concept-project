import React, { Component } from "react";
import { Link } from "react-router-dom";

class SpreadOperatorExample extends Component {
  componentDidMount() {
    // Spread operator with arrays
    const originalArray = [1, 2, 3];
    const copiedArray = [...originalArray]; // Creates a copy of originalArray
    const concatenatedArray = [...originalArray, 4, 5]; // Concatenates originalArray with additional elements

    // Spread operator with objects
    const originalObject = { name: "John", age: 30 };
    const copiedObject = { ...originalObject }; // Creates a shallow copy of originalObject
    const updatedObject = { ...originalObject, age: 35 }; // Updates a property of originalObject

    // Alert and console log values
    alert("Spread Operator with Arrays");
    console.log("Original Array:", originalArray);
    console.log("Copied Array:", copiedArray);
    console.log("Concatenated Array:", concatenatedArray);

    alert("Spread Operator with Objects");
    console.log("Original Object:", originalObject);
    console.log("Copied Object:", copiedObject);
    console.log("Updated Object:", updatedObject);
  }

  render() {
    return (
      <div className="content-wrapper mt-3">
        <h2>Spread Operator Example</h2>
        <p>
          Check the browser console for detailed information about the spread
          operator's effects.
        </p>

        <div>
          <Link to="/topics" className="btn btn-primary mt-5">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }
}

export default SpreadOperatorExample;

/*
  Component: SpreadOperatorExample

  Description:
  This component demonstrates the usage of the spread operator with arrays and objects.
  It showcases how the spread operator can be used to create copies of arrays and objects,
  as well as concatenate arrays and update object properties.

  Lifecycle Method(s):
  - componentDidMount(): Demonstrates the spread operator's effects and logs information to the console.

  Props:
  None

  State:
  None

  Route:
  '/spread-operator-example'

  Subcomponents:
  None

  Additional Notes:
  - The spread operator is a useful tool for working with arrays and objects in a concise manner.
*/
