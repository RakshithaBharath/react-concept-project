import React, { useState } from "react";
import { Link } from "react-router-dom";

// Main component demonstrating various React events using function-based syntax
const ReactEventsFunctionBasedDemo = () => {
  const [state, setState] = useState({
    inputValue: "",
    clicked: false,
    keyPressed: "",
    hovered: false,
    doubleClicked: false,
    contextMenu: false,
    dragStart: false,
    scrolled: false,
    imageLoaded: false,
    errorOccurred: false,
  });

  // Handle button click
  const handleClick = () => {
    setState({ ...state, clicked: true });
  };

  // Handle input change
  const handleChange = (e) => {
    setState({ ...state, inputValue: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted with value: " + state.inputValue);
  };

  // Handle mouse enter
  const handleMouseEnter = () => {
    setState({ ...state, hovered: true });
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setState({ ...state, hovered: false });
  };

  // Handle double click
  const handleDoubleClick = () => {
    setState({ ...state, doubleClicked: true });
  };

  // Handle context menu
  const handleContextMenu = (e) => {
    e.preventDefault();
    setState({ ...state, contextMenu: true });
  };

  // Handle drag start
  const handleDragStart = () => {
    setState({ ...state, dragStart: true });
  };

  // Handle scroll
  const handleScroll = () => {
    setState({ ...state, scrolled: true });
  };

  // Handle image load
  const handleImageLoad = () => {
    setState({ ...state, imageLoaded: true });
  };

  // Handle image error
  const handleError = () => {
    setState({ ...state, errorOccurred: true });
  };

  return (
    <div className="content-wrapper">
      <h2>React Events Function-Based Demo</h2>

      {/* Button Click Event */}
      <button onClick={handleClick} className="btn btn-success">
        Click Me
      </button>
      {state.clicked && <p>Button clicked!</p>}

      {/* Input Change Event */}
      <input type="text" onChange={handleChange} />
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
      {state.inputValue && <p>Input value: {state.inputValue}</p>}

      {/* Mouse Enter and Leave Events */}
      <div
        style={{ width: 200, height: 100, backgroundColor: "lightgray" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me
      </div>
      {state.hovered && <p>Mouse entered!</p>}

      {/* Double Click and Context Menu Events */}
      <div onDoubleClick={handleDoubleClick} onContextMenu={handleContextMenu}>
        Double click or right click me
      </div>
      {state.doubleClicked && <p>Double clicked!</p>}
      {state.contextMenu && <p>Context menu opened!</p>}

      {/* Drag Event */}
      <div draggable="true" onDragStart={handleDragStart}>
        Drag me
      </div>
      {state.dragStart && <p>Drag started!</p>}

      {/* Scroll Event */}
      <div style={{ height: 200, overflowY: "scroll" }} onScroll={handleScroll}>
        Scroll me
        <div style={{ height: 300 }}>
          {/* Adding content to create scrollbar */}
          Scrollable content...
        </div>
      </div>
      {state.scrolled && <p>Scrolled!</p>}

      {/* Image Load and Error Events */}
      <img
        src="https://picsum.photos/200/100"
        alt="Placeholder"
        onLoad={handleImageLoad}
        onError={handleError}
      />
      {state.imageLoaded && <p>Image loaded!</p>}
      {state.errorOccurred && <p>Error loading image!</p>}

      {/* Sub-components for use case and description */}
      <ReactEventsFunctionBasedDemoUseCase />
      <ReactEventsFunctionBasedDemoDescription />

      {/* Back to Topics Button */}
      <div>
        <Link to="/topics" className="btn btn-primary">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

// Sub-component for use case
const ReactEventsFunctionBasedDemoUseCase = () => {
  return (
    <div>
      <h3>Use Case</h3>
      <p>
        This component demonstrates various React events and their handling
        using function-based component syntax with the useState hook.
      </p>
    </div>
  );
};

// Sub-component for description
const ReactEventsFunctionBasedDemoDescription = () => {
  return (
    <div>
      <h3>Component Description</h3>
      <p>
        The <code>ReactEventsFunctionBasedDemo</code> component illustrates how
        to handle different events such as click, input change, mouse hover,
        double click, context menu, drag, scroll, image load, and error using a
        function-based approach with the useState hook in React.
      </p>
    </div>
  );
};

export {
  ReactEventsFunctionBasedDemo,
  ReactEventsFunctionBasedDemoUseCase,
  ReactEventsFunctionBasedDemoDescription,
};

/*
  Component: ReactEventsFunctionBasedDemo

  Description:
  This component demonstrates various React events and their handling using function-based component syntax.
  It showcases how to handle different events such as click, input change, mouse hover, double click,
  context menu, drag, scroll, image load, and error using a function-based approach with the useState hook in React.

  Props:
  None

  State:
  - inputValue: Stores the value of an input field.
  - clicked: Indicates whether a button has been clicked.
  - keyPressed: Stores the key pressed.
  - hovered: Indicates if the mouse is currently hovering over an element.
  - doubleClicked: Indicates if an element has been double-clicked.
  - contextMenu: Indicates if the context menu has been opened.
  - dragStart: Indicates if a drag operation has started.
  - scrolled: Indicates if an element has been scrolled.
  - imageLoaded: Indicates if an image has finished loading.
  - errorOccurred: Indicates if an error occurred during image loading.

  Event Handlers:
  - handleClick: Handles button click event.
  - handleChange: Handles input change event.
  - handleSubmit: Handles form submission event.
  - handleMouseEnter: Handles mouse enter event.
  - handleMouseLeave: Handles mouse leave event.
  - handleDoubleClick: Handles double click event.
  - handleContextMenu: Handles context menu event.
  - handleDragStart: Handles drag start event.
  - handleScroll: Handles scroll event.
  - handleImageLoad: Handles image load event.
  - handleError: Handles error event.

  Route:
  '/react-events-function-based-demo'

  Additional Notes:
  - This component includes sub-components for Use Case and Component Description.
*/
