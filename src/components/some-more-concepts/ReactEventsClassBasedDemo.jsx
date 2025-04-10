import React from "react";
import { Link } from "react-router-dom";

class ReactEventsClassBasedDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  handleClick = () => {
    this.setState({ clicked: true });
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted with value: " + this.state.inputValue);
  };

  handleKeyPress = (e) => {
    this.setState({ keyPressed: e.key });
  };

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  handleDoubleClick = () => {
    this.setState({ doubleClicked: true });
  };

  handleContextMenu = (e) => {
    e.preventDefault();
    this.setState({ contextMenu: true });
  };

  handleDragStart = () => {
    this.setState({ dragStart: true });
  };

  handleScroll = () => {
    this.setState({ scrolled: true });
  };

  handleImageLoad = () => {
    this.setState({ imageLoaded: true });
  };

  handleError = () => {
    this.setState({ errorOccurred: true });
  };

  render() {
    return (
      <div className="content-wrapper">
        <h2>React Events Class-Based Demo</h2>
        <button onClick={this.handleClick} className="btn btn-success">
          Click Me
        </button>
        {this.state.clicked && <p>Button clicked!</p>}

        <input type="text" onChange={this.handleChange} />
        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </form>
        {this.state.inputValue && <p>Input value: {this.state.inputValue}</p>}

        <div
          style={{ width: 200, height: 100, backgroundColor: "lightgray" }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          Hover over me
        </div>
        {this.state.hovered && <p>Mouse entered!</p>}

        <div
          onDoubleClick={this.handleDoubleClick}
          onContextMenu={this.handleContextMenu}
        >
          Double click or right click me
        </div>
        {this.state.doubleClicked && <p>Double clicked!</p>}
        {this.state.contextMenu && <p>Context menu opened!</p>}

        <div draggable="true" onDragStart={this.handleDragStart}>
          Drag me
        </div>
        {this.state.dragStart && <p>Drag started!</p>}

        <div
          style={{ height: 200, overflowY: "scroll" }}
          onScroll={this.handleScroll}
        >
          Scroll me
          <p>
            {/* Add content to create a scrollbar */}
            {/* You can add more content here */}
          </p>
        </div>
        {this.state.scrolled && <p>Scrolled!</p>}

        <img
          src="https://picsum.photos/200/100"
          alt="Placeholder"
          onLoad={this.handleImageLoad}
          onError={this.handleError}
        />
        {this.state.imageLoaded && <p>Image loaded!</p>}
        {this.state.errorOccurred && <p>Error loading image!</p>}
        <ReactEventsClassBasedDemoUseCase />
        <ReactEventsClassBasedDemoDescription />
        <div>
          <Link to="/topics">Back to Topics</Link>
        </div>
      </div>
    );
  }
}

const ReactEventsClassBasedDemoUseCase = () => {
  return (
    <div>
      <h3>Use Case</h3>
      <p>
        This component demonstrates various React events and their handling
        using class component syntax.
      </p>
    </div>
  );
};

const ReactEventsClassBasedDemoDescription = () => {
  return (
    <div>
      <h3>Component Description</h3>
      <p>
        The <code>ReactEventsClassBasedDemo</code> component illustrates how to
        handle different events such as click, input change, mouse hover, double
        click, context menu, drag, scroll, image load, and error using a
        class-based approach in React.
      </p>
    </div>
  );
};

export {
  ReactEventsClassBasedDemo,
  ReactEventsClassBasedDemoUseCase,
  ReactEventsClassBasedDemoDescription,
};

/*
  Component: ReactEventsClassBasedDemo

  Description:
  This component demonstrates various React events and their handling using class component syntax.
  It showcases how to handle different events such as click, input change, mouse hover, double
  click, context menu, drag, scroll, image load, and error using a class-based approach in React.

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
  - handleKeyPress: Handles key press event.
  - handleMouseEnter: Handles mouse enter event.
  - handleMouseLeave: Handles mouse leave event.
  - handleDoubleClick: Handles double click event.
  - handleContextMenu: Handles context menu event.
  - handleDragStart: Handles drag start event.
  - handleScroll: Handles scroll event.
  - handleImageLoad: Handles image load event.
  - handleError: Handles error event.

  Route:
  '/react-events-class-based-demo'

  Additional Notes:
  - This component includes sub-components for Use Case and Component Description.
*/
