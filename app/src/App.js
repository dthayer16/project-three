import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import StuffToDo from "./pages/StuffToDo";
import TravelDetails from "./pages/TravelDetails";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div>

        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/stufftodo" component={StuffToDo} />
          <Route exact path="/traveloptions" component={TravelDetails} />
          <Route exact path="/register" component={Register} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
