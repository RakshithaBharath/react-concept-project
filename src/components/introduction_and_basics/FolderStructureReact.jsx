import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Button } from "react-bootstrap"; // Import Button from react-bootstrap

const FolderStructureReact = () => {
  return (
    <div className="container">
      <h2 className="mt-4 mb-3">
        File and Folder Structure of a React Project
      </h2>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>File/Folder</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>package.json</td>
              <td>
                This file contains metadata about the project and its
                dependencies. It includes information such as the project name,
                version, description, entry point, scripts, and dependencies.
              </td>
            </tr>
            <tr>
              <td>src Folder</td>
              <td>This folder contains the source code of the project.</td>
            </tr>
            <tr>
              <td>public Folder</td>
              <td>This folder contains static assets and the HTML file.</td>
            </tr>
            <tr>
              <td>node_modules Folder</td>
              <td>
                This folder contains all the project dependencies installed via
                npm or yarn.
              </td>
            </tr>
            <tr>
              <td>package-lock.json (or yarn.lock)</td>
              <td>
                This file provides a detailed description of the project's
                dependency tree. It ensures that the same dependencies are
                installed across different machines.
              </td>
            </tr>
            <tr>
              <td>README.md</td>
              <td>
                This file typically provides information about the project,
                including its purpose, usage, installation instructions, and
                other relevant details.
              </td>
            </tr>
            <tr>
              <td>.gitignore</td>
              <td>
                This file specifies intentionally untracked files that Git
                should ignore. It often includes files such as node_modules (to
                exclude dependencies), build artifacts, and sensitive
                configuration files.
              </td>
            </tr>
            <tr>
              <td>src/components Folder</td>
              <td>
                This folder contains reusable React components used throughout
                the project.
              </td>
            </tr>
            <tr>
              <td>src/App.js</td>
              <td>
                This file serves as the main component of the React application.
                It renders other components and manages the overall structure of
                the application.
              </td>
            </tr>
            <tr>
              <td>src/index.js</td>
              <td>
                This file is the entry point of the React application. It
                renders the root component (often App.js) into the DOM.
              </td>
            </tr>
            <tr>
              <td>public/index.html</td>
              <td>
                This HTML file serves as the template for the React application.
                It includes the root <code>&lt;div&gt;</code> where the React
                components will be rendered. Other static assets such as images,
                fonts, and icons can also be referenced here.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Back to Topics Button */}
      <div className="mt-3">
        <Link to="/topics">
          <Button variant="primary">Back to Topics</Button>
        </Link>
      </div>
    </div>
  );
};

export default FolderStructureReact;
/* 
Component Logic:
- Provides information about the file and folder structure of a typical React project.
- Describes the purpose and content of various files and folders in the project directory.
- Helps developers understand the organization of a React project and the role of each file/folder.
- At the end of the component, there's a link to navigate back to the main topics.
*/
