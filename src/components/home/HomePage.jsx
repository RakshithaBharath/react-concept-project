import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css"; // Import CSS module

const HomePage = () => {
  return (
    <div className={`${styles["home-page"]} text-dark`}>
      {" "}
      {/* Styling with CSS module */}
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="display-4 font-weight-bolder">
            Welcome to React Concepts!
          </h1>
          <p className="lead mb-4 font-weight-bolder">
            Explore React concepts with confidence and stay up-to-date with
            regular updates!
          </p>
          <div className="row">
            <div className="col-md-6">
              <p className="text-black font-weight-bold">
                {" "}
                {/* Unique tutorial style */}
                This tutorial and session have been crafted in a unique style,
                ensuring that you not only grasp the syntax but also gain a deep
                understanding of each concept. Each link you explore will
                provide detailed notes directly in the UI, eliminating the need
                for you to take separate notes. I'll compile and summarize
                information from various sources, sparing you the effort of
                extensive reading. You'll see the actual implementation of each
                topic in real-time, allowing you to apply theory to practice
                seamlessly. With regular updates, you'll stay ahead of the curve
                and master React like a pro!
              </p>
            </div>
            <div className="col-md-6">
              <h2 className=" font-weight-bolder   text-black">
                {" "}
                {/* Detailed topics list */}
                What we learn:
              </h2>
              <ul className="list-unstyled  font-weight-bolder">
                <li>Introduction to React and Basics</li>
                <li>React Components Basics</li>
                <li>JSX Basics</li>
                <li>React ES6</li>
                <li>Some More Concepts</li>
                <li>Events in React</li>
                <li>Conditional Rendering</li>
                <li>List and Keys</li>
                <li>Form Handling</li>
                <li>Hooks in React</li>
                <li>Form Validation in React</li>
                <li>Controlled And Uncontrolled Components in React</li>
                <li>Props Drilling in React</li>
                <li>API Integration (Real-time)</li>
                <li>And More Topics...</li>
              </ul>
            </div>
          </div>
          <p className=" mt-4 font-weight-bolder text-black">
            {" "}
            {/* Promise of regular updates */}
            <i>
              With regular updates, I'll ensure that you're always learning the
              latest and most relevant React concepts. Stay tuned for new
              content and features!
            </i>
          </p>
          <div className="text-center mt-4">
            {/* Begin journey button */}
            <Link to="/topics" className="btn btn-success">
              Begin Your Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

/* 
Component Demonstration:
- Styling is applied using CSS modules for better modularity.
- The component provides a welcome message and encourages exploration of React concepts.
- It describes the tutorial's unique approach, including direct UI notes and real-time implementation examples.
- Detailed topics list is presented for you to understand what they'll learn.
- Promise of regular updates is made to ensure that you stay updated with the latest concepts.
- We can begin our journey by clicking the "Begin Your Journey" button.
*/
