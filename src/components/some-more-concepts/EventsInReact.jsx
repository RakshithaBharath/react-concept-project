import React from "react";
import { Link } from "react-router-dom";

class EventsInReact extends React.Component {
  render() {
    return (
      <div>
        <h2>React Events</h2>
        <p>
          In React, events are similar to DOM events but are implemented in a
          consistent and cross-browser-compatible manner. They are used to
          handle user interactions with the application, such as clicking a
          button, typing in an input field, or hovering over an element.
        </p>
        <p>
          React events are written using camelCase naming convention, such as{" "}
          <code>onClick</code>, <code>onChange</code>, <code>onSubmit</code>,
          etc. These event handlers are passed as props to React elements and
          are triggered when the corresponding events occur.
        </p>
        <p>Commonly used events in React include:</p>
        <ul>
          <li>
            <strong>onClick:</strong> Triggered when a clickable element is
            clicked.
          </li>
          <li>
            <strong>onChange:</strong> Fired when the value of an input element
            changes.
          </li>
          <li>
            <strong>onSubmit:</strong> Called when a form is submitted.
          </li>
          <li>
            <strong>onKeyPress:</strong> Triggered when a key is pressed.
          </li>
          <li>
            <strong>onKeyDown/onKeyUp:</strong> Fired when a key is pressed down
            or released.
          </li>
          <li>
            <strong>onFocus/onBlur:</strong> Invoked when an element gains or
            loses focus.
          </li>
          <li>
            <strong>onMouseEnter/onMouseLeave:</strong> Called when the mouse
            enters or leaves an element.
          </li>
          <li>
            <strong>onDoubleClick:</strong> Fired when an element is
            double-clicked.
          </li>
          <li>
            <strong>onContextMenu:</strong> Triggered when the right mouse
            button is clicked on an element.
          </li>
          <li>
            <strong>onDragStart/onDragEnd:</strong> Invoked when a drag
            operation starts or ends.
          </li>
          <li>
            <strong>onScroll:</strong> Called when the user scrolls an element.
          </li>
          <li>
            <strong>onLoad/onUnload:</strong> Fired when an element (like an
            image) has finished loading or unloading.
          </li>
          <li>
            <strong>onError:</strong> Triggered when an error occurs during
            element loading, such as with images or iframes.
          </li>
        </ul>
        {/* Back to Topics link */}
        <div>
          <Link to="/topics" className="btn btn-primary">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }
}

export default EventsInReact;

/* 
  Component: EventsInReact

  Description:
  This component provides an overview of React events and their usage.
  It lists common events used in React and describes their purposes.

  Props:
  None

  Route:
  '/events-in-react'
*/
