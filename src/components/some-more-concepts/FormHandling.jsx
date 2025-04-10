import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormComponent = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    gender: "",
    toppings: [],
    fruit: "",
    date: "",
  });

  // Event handler for updating form inputs
  // Function to handle changes in form inputs
  const handleChange = (e) => {
    // Destructure the properties of the event target
    const { name, value, type, checked } = e.target;
    // Update the form data based on the type of input
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        // If the input type is checkbox
        type === "checkbox"
          ? // If the checkbox is checked, add the value to the array
            checked
            ? [...prevData[name], value]
            : // If the checkbox is unchecked, remove the value from the array
              prevData[name].filter((item) => item !== value)
          : // For other input types, simply update the value
            value,
    }));
    // console.log(e);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Display alert with form data
    alert(JSON.stringify(formData, null, 2));
  };

  // Options for drop-down menu
  const fruitOptions = ["Apple", "Banana", "Orange", "Guava", "Papaya"];

  return (
    <div className="container">
      <h2>Form Component</h2>
      <div>
        <h3>Just for Learning Purpose, Enter your Details :</h3>
        <ul>
          <li>
            This form component demonstrates various types of form inputs in
            React.
          </li>
          <li>
            You can enter text in the input fields, select options from
            drop-down menu, and choose radio buttons and checkboxes.
          </li>
          <li>
            The 'handleChange' function updates the form data whenever the input
            values change.
          </li>
          <li>
            The 'handleSubmit' function is called when the form is submitted,
            displaying an alert with the form data.
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label>First Name:</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label>Last Name:</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label>Gender:</label>
            <br />
            <div>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Message:</label>
            <textarea
              name="message"
              className="form-control"
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />
          </div>
          <div className="col-md-6">
            <label>Toppings:</label>
            <br />
            <div>
              <input
                type="checkbox"
                name="toppings"
                value="Cheese"
                checked={formData.toppings.includes("Cheese")}
                onChange={handleChange}
              />
              Cheese
              <input
                type="checkbox"
                name="toppings"
                value="Pepperoni"
                checked={formData.toppings.includes("Pepperoni")}
                onChange={handleChange}
              />
              Pepperoni
              <input
                type="checkbox"
                name="toppings"
                value="Mushrooms"
                checked={formData.toppings.includes("Mushrooms")}
                onChange={handleChange}
              />
              Mushrooms
              <input
                type="checkbox"
                name="toppings"
                value="Onions"
                checked={formData.toppings.includes("Onions")}
                onChange={handleChange}
              />
              Onions
              <input
                type="checkbox"
                name="toppings"
                value="Olives"
                checked={formData.toppings.includes("Olives")}
                onChange={handleChange}
              />
              Olives
              <input
                type="checkbox"
                name="toppings"
                value="Bell Peppers"
                checked={formData.toppings.includes("Bell Peppers")}
                onChange={handleChange}
              />
              Bell Peppers
              <input
                type="checkbox"
                name="toppings"
                value="Sausage"
                checked={formData.toppings.includes("Sausage")}
                onChange={handleChange}
              />
              Sausage
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Favorite Fruit:</label>
            <select
              name="fruit"
              className="form-control"
              value={formData.fruit}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {fruitOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              className="form-control"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
      {/* Back to Topics link */}
      <div>
        <Link to="/topics" className="btn btn-primary  mt-3">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default FormComponent;
/* Component Description:
   This component represents a form with various input fields such as text inputs, radio buttons, checkboxes, dropdowns, and a date picker. 
   It showcases how to handle form input changes and form submission in React using functional components and hooks.
*/
