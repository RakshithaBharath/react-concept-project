// src/components/Topics/Topics.jsx

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Topics.module.css"; // Import CSS module

const Topics = () => {
  return (
    <div className="content-wrapper">
      {/*Introduction to React and Basics*/}

      <h6 className={styles.mainHeading}>Introduction to React and Basics</h6>

      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/introduction-to-react">
            Introduction to React
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/react-get-started">
            React Get Started
          </Link>
        </li>{" "}
        <li>
          <Link className={styles.link} to="/react-upgrade">
            React Upgrade
          </Link>
        </li>{" "}
        <li>
          <Link className={styles.link} to="/react-es6">
            React ES6
          </Link>
        </li>{" "}
        <li>
          <Link className={styles.link} to="/react-components-basics">
            React Components Basics
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/big-picture-of-components">
            Big Picture of Components
          </Link>
        </li>{" "}
        <li>
          <Link className={styles.link} to="/folder-structure-react">
            Folder Structure React
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/react-boilerplate">
            React Boilerplate
          </Link>
        </li>
      </ul>

      {/*Components Basics*/}

      <h6 className={styles.mainHeading}>Components Basics</h6>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/function-component-intro">
            Function Components Introduction
          </Link>
        </li>

        <li>
          <Link className={styles.link} to="/1-basic-function-component">
            1. Basic Function Component
          </Link>
        </li>

        <li>
          <Link className={styles.link} to="/2-arrow-function-component">
            2. Arrow Function Component
          </Link>
        </li>

        <li>
          <Link className={styles.link} to="/3-named-export-function">
            3. Named Export Funtion Component
          </Link>
        </li>

        <li>
          <Link className={styles.link} to="/4-default-export-component">
            4. Default Export Component
          </Link>
        </li>

        <li>
          <Link className={styles.link} to="/5-functional-component-with-props">
            5. Functional Component With Props
          </Link>
        </li>

        <li>
          <Link
            className={styles.link}
            to="/6-functional-component-with-eS6-destructuring-for-props"
          >
            6. Functional Component with ES6 Destructuring for Props
          </Link>
        </li>

        <li>
          <Link className={styles.link} to="/7-functional-component-with-hooks">
            7. Functional Component with Hooks
          </Link>
        </li>
      </ul>

      {/*JSX Basics*/}

      <h6 className={styles.mainHeading}>JSX Basics</h6>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/jsx-syntax-intro">
            JSX Syntax Introduction
          </Link>
        </li>
      </ul>

      {/*ES6 Basics*/}

      <h6 className={styles.mainHeading}>React ES6</h6>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/react-es6-intro">
            React ES6
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/react-es6-classes">
            1. ES6 Classes
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/react-es6-arrow-functions">
            2. ES6 Arrow Functions
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/react-es6-regular-function-and-this"
          >
            3. This k.w With Regular Function
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/react-es6-arrow-function-and-this">
            4. This k.w With Arrow Function
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/react-es6-variables">
            5. ES6 Variables
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/react-array-methods">
            6. Array Methods
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/react-es6-destructuring">
            7. ES6 Destructuring
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/react-es6-spread-operator">
            8. ES6 Spread Operator
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/react-es6-modules">
            9. ES6 Modules
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/react-es6-ternary-operator">
            10. Ternary Operator
          </Link>
        </li>
      </ul>

      {/*Some More Concepts and Basics*/}

      <h6 className={styles.mainHeading}>Some More Concepts</h6>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/react-fragments">
            React Fragments
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/class-based-component-within-component"
          >
            Class Based Component within Component
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/function-based-component-within-component"
          >
            Function Based Component within Component
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/class-based-component-with-states-props-demo"
          >
            Class Based Components with State and Props
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/props-in-constructor">
            Props in Constructor
          </Link>
        </li>{" "}
        <li>
          <Link className={styles.link} to="/default-props-demo">
            Default Props
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/state-with-multiple-properties">
            State with Multiple Properties
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/state-change-demo">
            State Change
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/life-cycle-component">
            Life Cycle of Component
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/mounting-demo">
            Mounting Demo
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/updating-demo">
            Updating Demo
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/unmounting-demo">
            Unmounting Demo
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/life-cycle-summary">
            Life Cycle Summary
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/events-in-react">
            Events in React
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/events-in-react-class-based-demo">
            Events in React Class Based
          </Link>
        </li>{" "}
        <li>
          <Link
            className={styles.link}
            to="/events-in-react-function-based-demo"
          >
            Events in React Function Based
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/conditional-rendering">
            Conditional Rendering
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/list-and-keys">
            List and Keys
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/form-handling">
            Form Handling
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/higher-order-components">
            Higher Order Components
          </Link>
        </li>
      </ul>

      {/*Hooks in React*/}

      <h6 className={styles.mainHeading}>Hooks in React</h6>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/react-hooks-intro">
            React Hooks Introduction
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/use-state-hook-demo">
            Use State Hook
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/use-effect-hook-demo">
            Use Effect Hook
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/use-context-hook-demo">
            Use Context Hook
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/use-reducer-hook-demo">
            Use Reducer Hook
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/use-ref-hook-demo">
            Use Ref Hook
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/use-callback-hook-demo">
            Use Callback Hook
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/use-layout-effect-hook-demo">
            Use Layout Effect Hook
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/use-debug-value-hook-demo">
            Use Debug Value Hook
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/use-imperative-handle-hook-demo">
            Use Imperative Handle Hook
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/use-context-selector-hook-demo">
            Use Context Selector Hook
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/use-transition-hook-demo">
            Use Transition Hook
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/use-deferred-value-hook-demo">
            Use Deferred Value Hook
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/use-event-hook-demo">
            Use Event Hook
          </Link>
        </li>
      </ul>
      {/*Form Validation in React*/}

      <h6 className={styles.mainHeading}>Form Validation in React</h6>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/form-validation-react-intro">
            Form Validation in React Introduction
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/form-validation-react-prop-types">
            Form Validation in React using Prop Types
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/form-validation-react-demo">
            Form Validation in React Demo
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/form-validation-third-party-demo">
            Form Validation in ReactUsing Third Party Libraries
          </Link>
        </li>
      </ul>

      {/*Controlled vs Uncontrolled Components in React*/}

      <h6 className={styles.mainHeading}>
        Controlled And Uncontrolled Components in React
      </h6>
      <ul className={styles.list}>
        <li>
          <Link
            className={styles.link}
            to="/controlled-vs-uncontrolled-components-react-intro"
          >
            Form Validation in React Introduction
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/controlled-component-react-demo">
            Controlled Component in React
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/uncontrolled-component-react-demo">
            Uncontrolled Component in React
          </Link>
        </li>
      </ul>

      {/*Props Drilling in React*/}

      <h6 className={styles.mainHeading}>Props Drilling in React</h6>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/props-drilling-react-intro">
            Introduction to Props Drilling
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/props-drilling-react-real-time-usecase"
          >
            Props Drilling Real Time Use Case
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/props-drilling-react-real-time-usecase-state-management"
          >
            Props Drilling Real Time Use Case using State Management
          </Link>
        </li>
      </ul>

      {/*HTTP Requests in React*/}

      <h6 className={styles.mainHeading}>HTTP Requests in React</h6>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/http-libraries-react-intro">
            HTTP Request Libraries in React
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/http-libraries-react-fetch-api">
            HTTP Request Using Fetch Library for Fake API
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/http-libraries-react-fetch-api-bug-tracking"
          >
            HTTP Request Using Fetch API for Bug Tracking App
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/http-libraries-react-fetch-api-banking-management"
          >
            HTTP Request Using Fetch API for Banking Management App
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/http-libraries-react-axios-api">
            HTTP Request Using Axios library for Fake API
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/http-libraries-react-axios-api-bug-tracking"
          >
            HTTP Request Using Axios Library for Bug Tracking App
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/http-libraries-react-axios-api-banking-management"
          >
            HTTP Request Using Axios Library for Banking Management App
          </Link>
        </li>
      </ul>

      {/*UI Components in React*/}

      <h6 className={styles.mainHeading}> UI Components in React</h6>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/ui-components-react-overview">
            An Overview
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/ui-components-react-data-grid">
            Data Grid
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/ui-components-react-data-display">
            Data Display
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/ui-components-react-data-transition"
          >
            Transition
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/ui-components-react-data-surface">
            Surface
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/ui-components-react-data-feedback">
            Feedback
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/ui-components-react-data-mouseover-interactions"
          >
            Mouseover Interactions
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/ui-components-react-data-pagination"
          >
            Pagination
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Topics;
