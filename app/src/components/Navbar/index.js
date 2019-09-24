import React from "react";
import "./style.css";
import {Navbar, Button, FormControl, Form, Nav, NavDropdown} from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navvy() {
  return (
      <Navbar bg="info" expand="lg" style={{margin: "3px"}}>
        <Navbar.Brand href="/">Where to?</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

              <NavDropdown title="Navigation" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Home</NavDropdown.Item>
                  <NavDropdown.Item href="/discover">Results</NavDropdown.Item>
                  <NavDropdown.Item href="/about">Form</NavDropdown.Item>
                  <NavDropdown.Item href="/register">Log in/Sign Up</NavDropdown.Item>
              </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl style={{width: "21rem"}} type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light"><i className="fas fa-search"> </i></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

  );
}

export default Navvy;
