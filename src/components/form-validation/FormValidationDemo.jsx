import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormValidationDemo = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    agreement: false,
    message: "",
    age: "",
    city: "",
    hobby: [],
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    agreement: "",
    message: "",
    age: "",
    city: "",
    hobby: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [formDirty, setFormDirty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const {
      username,
      email,
      password,
      gender,
      agreement,
      message,
      age,
      city,
      hobby,
    } = formData;
    let formValid = true;
    const newErrors = { ...errors };

    if (!username.trim()) {
      formValid = false;
      newErrors.username = "Username is required";
    } else {
      newErrors.username = "";
    }

    if (!email.trim()) {
      formValid = false;
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      formValid = false;
      newErrors.email = "Invalid email format";
    } else {
      newErrors.email = "";
    }

    if (!password.trim()) {
      formValid = false;
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      formValid = false;
      newErrors.password = "Password must be at least 8 characters long";
    } else {
      newErrors.password = "";
    }

    if (!gender) {
      formValid = false;
      newErrors.gender = "Gender is required";
    } else {
      newErrors.gender = "";
    }

    if (!agreement) {
      formValid = false;
      newErrors.agreement = "You must agree to the terms and conditions";
    } else {
      newErrors.agreement = "";
    }

    if (!message.trim()) {
      formValid = false;
      newErrors.message = "Message is required";
    } else {
      newErrors.message = "";
    }

    if (!age) {
      formValid = false;
      newErrors.age = "Age is required";
    } else {
      newErrors.age = "";
    }

    if (!city) {
      formValid = false;
      newErrors.city = "City is required";
    } else {
      newErrors.city = "";
    }

    if (hobby.length === 0) {
      formValid = false;
      newErrors.hobby = "At least one hobby must be selected";
    } else {
      newErrors.hobby = "";
    }

    if (formValid) {
      const selectedHobbies = hobby.join(", ");
      const formDataMessage = `
        Username: ${username}
        Email: ${email}
        Password: ${password}
        Gender: ${gender}
        Agreement: ${agreement ? "Agreed" : "Not agreed"}
        Message: ${message}
        Age: ${age}
        City: ${city}
        Hobbies: ${selectedHobbies}
      `;

      alert(
        `Form submitted successfully! Here are the details: \n\n${formDataMessage}`
      );
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, options } = e.target;
    const val = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: name === "hobby" ? getSelectedOptions(options) : val,
    });

    setFormDirty(true);
  };

  const getSelectedOptions = (options) => {
    return Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
  };

  const hasError = (field) => {
    return (submitted || formDirty) && errors[field];
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container mt-5 content-wrapper">
      <h2 className="text-center mb-4">Form Validation Demo</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="bg-light rounded p-4">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
              />
              {hasError("username") && (
                <p className="error">{errors.username}</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
              {hasError("email") && <p className="error">{errors.email}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
              />
              {hasError("password") && (
                <p className="error">{errors.password}</p>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Gender:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />{" "}
                  Female
                </label>
              </div>
              {hasError("gender") && <p className="error">{errors.gender}</p>}
            </div>

            <div className="mb-3">
              <label>
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                />{" "}
                I agree to the terms and conditions
              </label>
              {hasError("agreement") && (
                <p className="error">{errors.agreement}</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
              ></textarea>
              {hasError("message") && <p className="error">{errors.message}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age:
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="form-control"
              />
              {hasError("age") && <p className="error">{errors.age}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City:
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select City</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
              </select>
              {hasError("city") && <p className="error">{errors.city}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="hobby" className="form-label">
                Hobby:
              </label>
              <select
                name="hobby"
                multiple
                value={formData.hobby}
                onChange={handleChange}
                className="form-control"
              >
                <option value="reading">Reading</option>
                <option value="sports">Sports</option>
                <option value="music">Music</option>
              </select>
              {hasError("hobby") && <p className="error">{errors.hobby}</p>}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={!formDirty}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="mt-4">
        <h3>Use Case</h3>
        <p>
          This component demonstrates form validation in React by checking if
          the form fields meet certain criteria (e.g., required fields, valid
          email format, agreement checkbox, etc.).
        </p>
      </div>

      {/* Component Description */}
      <div className="mt-4">
        <h3>Component Description</h3>
        <p>
          The FormValidationDemo component renders a form with various input
          fields such as username, email, password, gender, agreement checkbox,
          message textarea, age, city dropdown, and hobby multi-select dropdown.
          It validates user input using state, event handlers, and conditional
          rendering to display error messages.
        </p>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <Link to="/topics" className="btn btn-primary">
            Back to Topics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormValidationDemo;
/* Component Explanation:
   The FormValidationDemo component implements form validation for various input fields.
   It maintains state for form data, errors, submission status, and form dirtiness.
   The component handles form submission, field changes, and error display.
   It also includes explanations for each function and section of the component.
*/
