import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import StuffToDo from "./pages/StuffToDo";
import TravelDetails from "./pages/TravelDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={StuffToDo} />
          <Route exact path="/search" component={TravelDetails} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
