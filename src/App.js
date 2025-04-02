import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import NotFound from "./components/error/NotFound";
import Topics from "./components/topics/Topics";

function App() {
  return (
    <div>
      <Header />

      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/topics" element={<Topics/>}/>

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
