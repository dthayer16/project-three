import React, { Component } from "react";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Discover from "./pages/Discover";
import Flights from "./pages/Flights";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Wrapper from "./components/Wrapper";
import Signup from "./pages/SignUpForm"
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Navvy from "./components/Navbar"
import { UserProvider } from "./pages/UserContext";

class App extends Component {

  state = {
    search: "Phoenix, AZ",
  };

  constructor(e) {
    super();
    const state = JSON.parse(localStorage.getItem("state")) || {
      loggedIn: false,
      token: "",
      email: null
    };
    this.state = state;
  }

  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      window.localStorage.setItem("state", JSON.stringify(this.state));
    });
  }

  updateUser = userObject => {
    this.setState(userObject);
  };

  handleInputChange = event => {
    this.context.search = event.target.value;
    console.log(this.context)
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ search: this.context.search });
    console.log("form submitted")
  };

  render() {

    return (
      <Router>
        <UserProvider value={this.state}>
          <div>
            <Navvy handleFormSubmit = {this.handleFormSubmit} handleInputChange = {this.handleInputChange} email={this.state.email} updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
            {/* <Navvy email={localStorage.getItem("email")} updateUser={this.updateUser} loggedIn={this.state.loggedIn} /> */}
            <Wrapper>
              <Route exact path="/" component={Search} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/flights" component={Flights} />
              <Route exact path="/discover" component={Discover} />
              <Route exact path="/saved" render={props => {
                return this.state.token ? <Saved /> : <Redirect to="/login" />
              }} />
              {/* <Route path="/signup" component={Signup} /> */}
              <Route path="/signup" render={props => (
                <Signup
                  updateUser={this.updateUser}
                />
              )} />
              <Route path="/login" render={props => (
                <Login
                  updateUser={this.updateUser}
                />
              )} />
            </Wrapper>
            <Footer />
          </div>
        </UserProvider>
      </Router>
    );
  }
}


export default App;
