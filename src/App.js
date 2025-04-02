import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import NotFound from "./components/error/NotFound";
import Topics from "./components/topics/Topics";

import IntroductionToReact from "./components/introduction_and_basics/IntroductionToReact";
import ReactGetStarted from "./components/introduction_and_basics/ReactGetStarted";
import ReactUpgrade from "./components/introduction_and_basics/ReactUpgrade";
import ReactES6 from "./components/introduction_and_basics/ReactES6";
import BigPictureOfComponents from "./components/introduction_and_basics/BigPictureOfComponents";
import FolderStructureReact from "./components/introduction_and_basics/FolderStructureReact";
import ReactBoilerPlate from "./components/introduction_and_basics/ReactBoilerPlate";
import ReactComponentsBasics from "./components/introduction_and_basics/ReactComponentsBasics";

import FunctionComponentIntro from "./components/function-based-components/FunctionComponentIntro";
import BasicFunctionComponent from "./components/function-based-components/BasicFunctionComponent";
import ArrowFunctionComponent from "./components/function-based-components/ArrowFunctionComponent";
import UsingNamedExportComponent from "./components/function-based-components/UsingNamedExportComponent";
import UsingDefaultExportComponent from "./components/function-based-components/UsingDefaultExportComponent";
import UsingFunctionalComponentWithProps from "./components/function-based-components/UsingFunctionalComponentWithProps";
import UsingFunctionalComponentWithDestructuring from "./components/function-based-components/UsingFunctionalComponentWithDestructuring";
import UsingFunctionalComponentWithHooks from "./components/function-based-components/UsingFunctionalComponentWithHooks";

function App() {
  return (
    <div>
      <Header />

      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/topics" element={<Topics />} />

          {/*Introduction to React and Basics*/}
          <Route
            exact
            path="/introduction-to-react"
            element={<IntroductionToReact />}
          />
          <Route
            exact
            path="/react-get-started"
            element={<ReactGetStarted />}
          />
          <Route exact path="/react-upgrade" element={<ReactUpgrade />} />
          <Route exact path="/react-es6" element={<ReactES6 />} />
          <Route
            exact
            path="/react-components-basics"
            element={<ReactComponentsBasics />}
          />
          <Route
            exact
            path="/big-picture-of-components"
            element={<BigPictureOfComponents />}
          />
          <Route
            exact
            path="/folder-structure-react"
            element={<FolderStructureReact />}
          />
          <Route
            exact
            path="/react-boilerplate"
            element={<ReactBoilerPlate />}
          />

          {/*Components Basics*/}
          <Route
            path="/function-component-intro"
            element={<FunctionComponentIntro />}
          />
          <Route
            path="/1-basic-function-component"
            element={<BasicFunctionComponent />}
          />
          <Route
            path="/2-arrow-function-component"
            element={<ArrowFunctionComponent />}
          />
          <Route
            path="/3-named-export-function"
            element={<UsingNamedExportComponent />}
          />
          <Route
            path="/4-default-export-component"
            element={<UsingDefaultExportComponent />}
          />
          <Route
            path="/5-functional-component-with-props"
            element={<UsingFunctionalComponentWithProps />}
          />
          <Route
            path="/6-functional-component-with-eS6-destructuring-for-props"
            element={<UsingFunctionalComponentWithDestructuring />}
          />
          <Route
            path="/7-functional-component-with-hooks"
            element={<UsingFunctionalComponentWithHooks />}
          />

          {/* */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
