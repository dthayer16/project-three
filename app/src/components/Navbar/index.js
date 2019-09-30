import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
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
    console.log(this.props);
    return (
      <Navbar bg="info" expand="lg" style={{ margin: "3px" }}>
        <Navbar.Brand href="/">Where to?</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <NavDropdown title="Navigation" id="basic-nav-dropdown">
              {this.props.loggedIn && (
                <NavDropdown.Header>Signed in as: <span style={{ color: '#17A2B8' }}>{this.props.email}</span></NavDropdown.Header>
              )}

              <Link className="dropdown-item" to="/">Home</Link>
              <Link className="dropdown-item" to="/discover">Results</Link>
              <Link className="dropdown-item" to="/about">Form</Link>
              <Link className="dropdown-item" to="/saved">Saved</Link>

              {!this.props.loggedIn && (
                <Link className="dropdown-item" to="/signup">Signup</Link>
              )}

              {!this.props.loggedIn && (
                <Link className="dropdown-item" to="/login">Log In</Link>
              )}

              {this.props.loggedIn && (
                <Link className="dropdown-item" onClick={this.logOut} to="/">Log Out</Link>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default Navvy;
