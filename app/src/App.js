import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Wrapper from "./components/Wrapper";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import {UserProvider} from "./pages/UserContext";

class App extends Component {

    state = {
        search: "Phoenix",

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

}

export default App;
