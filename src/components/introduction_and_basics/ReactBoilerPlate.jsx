import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ReactBoilerplate = () => {
  return (
    <div className="content-wrapper">
      <h2>React Boilerplate</h2>
      <h3>Project Structure:</h3>
      <ul>
        <li>
          <code>src/</code>: Source code directory containing React components,
          styles, and other assets.
        </li>
        <li>
          <code>public/</code>: Public directory containing static assets like
          HTML files, images, and favicon.
        </li>
        <li>
          <code>node_modules/</code>: Directory for installed npm packages.
        </li>
        <li>
          <code>package.json</code>: File containing project metadata and
          dependencies.
        </li>
        <li>
          <code>README.md</code>: File providing information about the project.
        </li>
        <li>
          <code>babel.config.js</code> or <code>.babelrc</code>: Configuration
          for Babel, which transpiles JSX and modern JavaScript features.
        </li>
        <li>
          <code>webpack.config.js</code>: Configuration for webpack, which
          bundles JavaScript, CSS, and other assets.
        </li>
        <li>
          <code>index.js</code> or <code>App.js</code>: Entry point of the
          application.
        </li>
      </ul>

      <h3>Dependencies:</h3>
      <ul>
        <li>React: Core library for building user interfaces.</li>
        <li>ReactDOM: Library for rendering React components in the DOM.</li>
        <li>
          Babel: Transpiler for converting JSX and modern JavaScript syntax.
        </li>
        <li>Webpack: Module bundler for packaging JavaScript and assets.</li>
        <li>ESLint: JavaScript linter for maintaining code quality.</li>
        <li>Stylelint: CSS linter for maintaining consistent styles.</li>
        <li>
          Other libraries and utilities for routing, state management, styling,
          etc., depending on project requirements.
        </li>
      </ul>

      <h3>Configuration Files:</h3>
      <ul>
        <li>
          <code>package.json</code>: Manages project dependencies, scripts, and
          metadata.
        </li>
        <li>
          <code>babel.config.js</code> or <code>.babelrc</code>: Configuration
          for Babel transpiler.
        </li>
        <li>
          <code>webpack.config.js</code>: Configuration for webpack bundler.
        </li>
        <li>
          <code>.eslintrc</code> or <code>.eslintrc.js</code>: ESLint
          configuration file.
        </li>
        <li>
          <code>.stylelintrc</code> or <code>.stylelintrc.js</code>: Stylelint
          configuration file.
        </li>
        <li>
          Other configuration files for testing frameworks, code formatters,
          etc.
        </li>
      </ul>

      <h3>Scripts:</h3>
      <ul>
        <li>
          <code>start</code>: Command to run the development server.
        </li>
        <li>
          <code>build</code>: Command to build the production-ready bundle.
        </li>
        <li>
          <code>test</code>: Command to run tests.
        </li>
        <li>
          Additional scripts for linting, formatting, and other development
          tasks.
        </li>
      </ul>

      <h3>Development Tools:</h3>
      <ul>
        <li>
          Development server: Provides hot module reloading and live preview
          during development.
        </li>
        <li>
          Code editor integration: Plugins or configurations for popular editors
          like Visual Studio Code, Sublime Text, or Atom.
        </li>
        <li>
          Browser extensions: Tools like React DevTools for debugging and
          inspecting React components.
        </li>
      </ul>

      <div>
        <Link to="/topics">
          <Button variant="primary">Back to Topics</Button>
        </Link>
      </div>
    </div>
  );
};

export default ReactBoilerplate;

/* 
Component Logic:
- Provides information about the typical structure and dependencies of a React project.
- Lists common directories, configuration files, dependencies, scripts, and development tools used in React development.
- Includes a button-styled link to navigate back to the main topics.
*/
