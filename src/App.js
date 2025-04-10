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

import JSXSyntaxReact from "./components/jsx-basics/JSXSyntaxReact";

import ReactES6Introduction from "./components/react-es6/ReactES6Introduction";
import ReactES6ArrowFunctions from "./components/react-es6/ReactES6ArrowFunction";
import ReactES6Classes from "./components/react-es6/ReactES6Classes";
import ThisWithRegularFunction from "./components/react-es6/ThisWithRegularFunction";
import ThisWithArrowFunction from "./components/react-es6/ThisWithArrowFunction";
import ES6VarLetConst from "./components/react-es6/ES6VarLetConst";
import ArrayMethodsDemo from "./components/react-es6/ArrayMethodsDemo";
import ES6Destructuring from "./components/react-es6/ES6Destructuring";
import SpreadOperatorExample from "./components/react-es6/SpreadOperatorExample";
import ES6ModulesDemo from "./components/react-es6/ES6ModulesDemo";
import TernaryOperatorDemo from "./components/react-es6/TernaryOperatorDemo";

import FragmentsDemo from "./components/some-more-concepts/FragmentsDemo";
import ClassBasedComponentWithinComponent from "./components/some-more-concepts/ClassBasedComponentWithinComponent";
import FunctionBasedComponentWithinComponent from "./components/some-more-concepts/FunctionBasedComponentWithinComponent";
import StateAndPropsClassComponentDemo from "./components/some-more-concepts/StateAndPropsClassComponentDemo";
import PropsInConstructorDemo from "./components/some-more-concepts/PropsInConstructorDemo";
import StateWithMultiplePropertiesDemo from "./components/some-more-concepts/StateWithMultiplePropertiesDemo";
import StateChangeDemo from "./components/some-more-concepts/StateChangeDemo";
import LifeCycleComponents from "./components/some-more-concepts/LifeCycleComponents";
import MountingDemo from "./components/some-more-concepts/MountingDemo";
import UpdatingDemo from "./components/some-more-concepts/UpdatingDemo";
import UnmountingDemo from "./components/some-more-concepts/UnmountingDemo";
import LifeCycleSummary from "./components/some-more-concepts/LifeCycleSummary";
import EventsInReact from "./components/some-more-concepts/EventsInReact";
import ConditionalRenderingDemo from "./components/some-more-concepts/ConditionalRenderingDemo";
import ListAndKeys from "./components/some-more-concepts/ListAndKeys";
import FormHandling from "./components/some-more-concepts/FormHandling";
import DefaultPropsDemo from "./components/some-more-concepts/DefaultPropsDemo";
import { ReactEventsClassBasedDemo } from "./components/some-more-concepts/ReactEventsClassBasedDemo";
import { ReactEventsFunctionBasedDemo } from "./components/some-more-concepts/ReactEventsFunctionBasedDemo";
import HigherOrderComponentDemo from "./components/some-more-concepts/HigherOrderComponentDemo";

import FormValidationReact from "./components/form-validation/FormValidationReact";
import PropTypesDemo from "./components/form-validation/PropTypesDemo";
import FormValidationDemo from "./components/form-validation/FormValidationDemo";
import FormValidationThirdPartyDemo from "./components/form-validation/FormValidationThirdPartyDemo";

import HooksIntro from './components/hooks-react/HooksIntro';
import UseStateDemo from './components/hooks-react/UseStateDemo';
import UseEffectDemo from './components/hooks-react/UseEffectDemo';
import UseContextDemo from './components/hooks-react/UseContextDemo';
import UseReducerDemo from './components/hooks-react/UseReducerDemo';
import UseRefDemo from './components/hooks-react/UseRefDemo';
import UseCallbackDemo from './components/hooks-react/UseCallbackDemo';
import UseLayoutEffectDemo from './components/hooks-react/UseLayoutEffectDemo';
import UseDebugValueDemo from './components/hooks-react/UseDebugValueDemo';
import UseImperativeHandleDemo from './components/hooks-react/UseImperativeHandleDemo';
import UseContextSelectorDemo from './components/hooks-react/UseContextSelectorDemo';
import UseTransitionDemo from './components/hooks-react/UseTransitionDemo';
import UseDeferredValueDemo from './components/hooks-react/UseDeferredValueDemo';
import UseEventDemo from './components/hooks-react/UseEventDemo';

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
          {/*JSX Syntax Basics*/}
          <Route path="/jsx-syntax-intro" element={<JSXSyntaxReact />} />
          {/*ES6 Basics*/}
          <Route path="/react-es6-intro" element={<ReactES6Introduction />} />
          <Route path="/react-es6-classes" element={<ReactES6Classes />} />
          <Route
            path="/react-es6-arrow-functions"
            element={<ReactES6ArrowFunctions />}
          />
          <Route
            path="/react-es6-regular-function-and-this"
            element={<ThisWithRegularFunction />}
          />
          <Route
            path="/react-es6-arrow-function-and-this"
            element={<ThisWithArrowFunction />}
          />
          <Route path="/react-es6-variables" element={<ES6VarLetConst />} />
          <Route path="/react-array-methods" element={<ArrayMethodsDemo />} />
          <Route
            path="/react-es6-destructuring"
            element={<ES6Destructuring />}
          />
          <Route
            path="/react-es6-spread-operator"
            element={<SpreadOperatorExample />}
          />
          <Route path="/react-es6-modules" element={<ES6ModulesDemo />} />
          <Route
            path="/react-es6-ternary-operator"
            element={<TernaryOperatorDemo />}
          />
          {/*Some More Concepts*/}
          <Route path="/react-fragments" element={<FragmentsDemo />} />
          <Route
            path="/class-based-component-within-component"
            element={<ClassBasedComponentWithinComponent />}
          />
          <Route
            path="/function-based-component-within-component"
            element={<FunctionBasedComponentWithinComponent />}
          />
          // Inside the Router component, pass the props using the `element`
          attribute
          <Route
            path="/class-based-component-with-states-props-demo"
            element={
              <StateAndPropsClassComponentDemo message="Hello from props from App.js!" />
            }
          />
          // Pass he props here
          <Route path="/default-props-demo" element={<DefaultPropsDemo />} /> //
          Pass he props here
          <Route
            path="/props-in-constructor"
            element={<PropsInConstructorDemo name="MAHENDRA SINGH DHONI" />}
          />{" "}
          // Pass he props here
          <Route
            path="/state-with-multiple-properties"
            element={<StateWithMultiplePropertiesDemo />}
          />
          <Route path="/state-change-demo" element={<StateChangeDemo />} />
          <Route
            path="/life-cycle-component"
            element={<LifeCycleComponents />}
          />
          <Route path="/mounting-demo" element={<MountingDemo />} />
          <Route path="/updating-demo" element={<UpdatingDemo />} />
          <Route path="/unmounting-demo" element={<UnmountingDemo />} />
          <Route path="/life-cycle-summary" element={<LifeCycleSummary />} />
          <Route path="/events-in-react" element={<EventsInReact />} />
          <Route
            path="/events-in-react-class-based-demo"
            element={<ReactEventsClassBasedDemo />}
          />
          <Route
            path="/events-in-react-function-based-demo"
            element={<ReactEventsFunctionBasedDemo />}
          />
          <Route
            path="/conditional-rendering"
            element={<ConditionalRenderingDemo />}
          />
          <Route path="/list-and-keys" element={<ListAndKeys />} />
          <Route path="/form-handling" element={<FormHandling />} />
          <Route
            path="/higher-order-components"
            element={<HigherOrderComponentDemo />}
          />
          {/*Form Validation in React*/}
          <Route
            path="/form-validation-react-intro"
            element={<FormValidationReact />}
          />
          {/* <Route path="/form-validation-react-prop-types" element={<PropTypesDemo/>} /> */}
          <Route
            path="/form-validation-react-prop-types"
            element={
              <PropTypesDemo name="Dhoni" age={43} email="msdhoni@gmail.com" />
            }
          />
          <Route
            path="/form-validation-react-demo"
            element={<FormValidationDemo />}
          />
          <Route
            path="/form-validation-third-party-demo"
            element={<FormValidationThirdPartyDemo />}
          />

        <Route path="/react-hooks-intro" element={<HooksIntro/>} />
          <Route path="/use-state-hook-demo" element={<UseStateDemo/>} />
          <Route path="/use-effect-hook-demo" element={<UseEffectDemo/>} />
          <Route path="/use-context-hook-demo" element={<UseContextDemo/>} />
          <Route path="/use-reducer-hook-demo" element={<UseReducerDemo/>} />
          <Route path="/use-ref-hook-demo" element={<UseRefDemo/>} />
          <Route path="/use-callback-hook-demo" element={<UseCallbackDemo/>} />
          <Route path="/use-layout-effect-hook-demo" element={<UseLayoutEffectDemo/>} />
          <Route path="/use-debug-value-hook-demo" element={<UseDebugValueDemo/>} />
          <Route path="/use-imperative-handle-hook-demo" element={<UseImperativeHandleDemo/>} />
          <Route path="/use-context-selector-hook-demo" element={<UseContextSelectorDemo/>} />
          <Route path="/use-transition-hook-demo" element={<UseTransitionDemo/>} />
          <Route path="/use-deferred-value-hook-demo" element={<UseDeferredValueDemo/>} />
          <Route path="/use-event-hook-demo" element={<UseEventDemo/>} />

          </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
