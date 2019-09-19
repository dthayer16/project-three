import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import StuffToDo from "./pages/StuffToDo";
import TravelDetails from "./pages/TravelDetails";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/stufftodo" component={StuffToDo} />
          <Route exact path="/traveloptions" component={TravelDetails} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
