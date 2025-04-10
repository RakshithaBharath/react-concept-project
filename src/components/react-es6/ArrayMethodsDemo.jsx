import React, { useState } from "react";
import { Link } from "react-router-dom";

const ArrayMethodsDemo = () => {
  // Sample array of numbers
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  // Function to add a new number to the array
  const addNumber = () => {
    const newNumber = Math.floor(Math.random() * 10) + 1;
    setNumbers([...numbers, newNumber]);
  };

  // Function to double each number in the array
  const doubleNumbers = () => {
    const doubled = numbers.map((num) => num * 2);
    setNumbers(doubled);
  };

  // Function to filter out odd numbers from the array
  const filterOddNumbers = () => {
    const filtered = numbers.filter((num) => num % 2 === 0);
    setNumbers(filtered);
  };

  // Function to find the sum of all numbers in the array
  const calculateSum = () => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    alert(`The sum of all numbers is: ${sum}`);
  };

  return (
    <div>
      <h2>ES6 Array Methods Demo</h2>
      <p>Array: {numbers.join(", ")}</p>
      <button className="btn btn-dark" onClick={addNumber}>
        Add Number
      </button>
      <button className="btn btn-success" onClick={doubleNumbers}>
        Double Numbers
      </button>
      <button className="btn btn-danger" onClick={filterOddNumbers}>
        Filter Odd Numbers
      </button>
      <button className="btn btn-warning" onClick={calculateSum}>
        Calculate Sum
      </button>
      {/* Back button to navigate back to Topics */}
      <div>
        <Link to="/topics" className="btn btn-primary mt-5">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default ArrayMethodsDemo;

/*
This component demonstrates the usage of various ES6 array methods.
- useState hook is used to manage the array of numbers.
- Functions addNumber, doubleNumbers, filterOddNumbers, and calculateSum are defined to perform operations on the array.
- Buttons trigger these functions to modify or analyze the array.
- The back button allows navigation back to the Topics page.
*/
