import React from "react";
import "./style.css";
import { Navbar, Button, FormControl, Form, Nav, NavDropdown } from "react-bootstrap";
import axios from "axios";

class Navvy extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logOut = (e) => {
    console.log('logging out')
    axios.post('/v1/user/logout')
    .then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          email: null
        })
        localStorage.clear();
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    return (
      <Navbar bg="info" expand="lg" style={{ margin: "3px" }}>
        <Navbar.Brand href="/">Where to?</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <NavDropdown title="Navigation" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/discover">Results</NavDropdown.Item>
              <NavDropdown.Item href="/about">Form</NavDropdown.Item>

              {!this.props.loggedIn && (
                <NavDropdown.Item href="/register">Sign Up</NavDropdown.Item>
              )}

              {!this.props.loggedIn && (
                <NavDropdown.Item href="/register">Log In</NavDropdown.Item>
              )}

              {this.props.loggedIn && (
                <NavDropdown.Item href="/" onClick={this.logOut}>Log Out</NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl style={{ width: "21rem" }} type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light"><i className="fas fa-search"> </i></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default Navvy;
