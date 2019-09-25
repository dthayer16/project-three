<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
=======
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
>>>>>>> d0eb64f146ad6bd78369fecfde777af40f44e71c
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Wrapper from "./components/Wrapper";
import Signup from "./pages/SignUpForm"
import Login from "./pages/Login";
import Footer from "./components/Footer";
<<<<<<< HEAD
import axios from "axios";

class App extends React.Component {
  constructor(e) {
    super();
    const loggedIn = window.localStorage.getItem("token") ? true : false;
    this.state = {
      loggedIn,
      email: null
    };
    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    //this.updateUser = this.updateUser.bind(this)
  }
  getToken = (e) => {
    let token = localStorage.getItem("token");
    console.log(token);
  };

  getUser() {
    this.getToken();

    axios.get("/v1/user/info").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        this.setState({
          loggedIn: true,
          email: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          email: null
        });
      }
    });
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser = userObject => {
    this.setState(userObject);
  };

  render() {

    return (
      <Router>
        <div>
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/about" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/saved" render={props => {
              return localStorage.getItem('token') ? <Saved /> : <Redirect to="/login" />
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
      </Router>

    );
  }
=======
import {UserProvider} from "./pages/UserContext";

class App extends Component {

    state = {
        search: ""

    };



    render() {
        return (
            <UserProvider value={this.state}>
                <Router>
                    <div>
                        <Wrapper>
                            <Route exact path="/" component={Search}/>
                            <Route exact path="/search" component={Search}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/discover" component={Discover}/>
                            <Route exact path="/saved" component={Saved}/>
                            <Route exact path="/register" component={Register}/>
                        </Wrapper>
                        <Footer/>
                    </div>
                </Router>
            </UserProvider>
        );
    }

>>>>>>> d0eb64f146ad6bd78369fecfde777af40f44e71c
}

export default App;
