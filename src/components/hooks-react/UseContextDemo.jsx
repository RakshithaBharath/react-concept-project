import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Create a context
const ThemeContext = React.createContext();

// Component that provides the context value
const ThemeProvider = ({ children }) => {
  const theme = "light"; // Set the context value

  return (
    // Provide the context value to the children components
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

// Component that consumes the context value
const ThemedComponent = () => {
  // Use the useContext hook to access the context value
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>Themed Component</h2>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

// Component to demonstrate useContext hook
const UseContextDemo = () => {
  return (
    <div>
      <h2>useContext Demo</h2>
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
      <h3>Use Case</h3>
      <ul>
        <li>Used to access context values within functional components.</li>
        <li>Provides a simple way to avoid prop drilling.</li>
        <li>
          Use it when you need to access global data or state across multiple
          components.
        </li>
      </ul>
      <h3>Component Demonstration</h3>
      <ul>
        <li>
          The ThemeProvider component provides the context value (theme) using
          the createContext() API.
        </li>
        <li>
          The ThemedComponent consumes the context value (theme) using the
          useContext hook.
        </li>
        <li>The ThemedComponent displays the current theme.</li>
      </ul>
      <div>
        {/* Bootstrap-styled back button */}
        <Link to="/topics" className="btn btn-primary mt-3">
          Back to Topics
        </Link>
      </div>
    </div>
  );
};

export default UseContextDemo;

/* 
  Component Description:
  - The UseContextDemo component demonstrates how to use the useContext hook in React.
  - It includes a ThemeProvider component that provides a context value (theme) using the ThemeContext.
  - The ThemedComponent consumes the context value using the useContext hook and displays the current theme.
  - This example highlights the use of useContext to access context values within functional components, 
    avoiding the need for prop drilling and allowing for global state management across multiple components.
*/
