import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";

const ReactGetStarted = () => {
  return (
    <div className="react-get-started">
      <h2>Getting Started with React</h2>
      <p>
        React is a powerful JavaScript library for building user interfaces.
        Before diving into React, there are a few prerequisites you should be
        familiar with:
      </p>
      <ul>
        <li>Basic knowledge of HTML, CSS, and JavaScript</li>
        <li>
          Understanding of ES6 syntax and concepts such as arrow functions,
          classes, and modules
        </li>
        <li>
          Familiarity with web development concepts like DOM manipulation and
          event handling
        </li>
      </ul>
      <p>To start learning React, follow these steps:</p>
      <ol>
        <li>
          Install Node.js and npm (Node Package Manager) on your computer.
        </li>
        <li>
          Create a new React project using a tool like Create React App:{" "}
          <code>npx create-react-app my-react-app</code>
        </li>
        <li>
          Navigate to your project directory and start the development server:{" "}
          <code>cd my-react-app && npm start</code>
        </li>
        <li>
          Open your browser and go to <code>http://localhost:3000</code> to see
          your React application running.
        </li>
        <li>
          Begin learning React by exploring its core concepts, such as
          components, props, state, and JSX.
        </li>
      </ol>
      {/* Back to Topics link */}
      <Row className="mt-4">
        <Col>
          <Link to="/topics">
            <Button variant="primary">Back to Topics</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default ReactGetStarted;

/* 
Component Demonstration:
- Provides a guide on getting started with React, including prerequisites and steps to begin learning.
- Recommends basic knowledge of HTML, CSS, JavaScript, ES6 syntax, and web development concepts.
- Lists steps to start a new React project using Create React App and running it locally.
- Encourages exploring React's core concepts like components, props, state, and JSX.
- At the end of the component, there's a button styled link to navigate back to the main topics.
*/
