import React from "react";
import "./style.css";
import {Navbar, Button, Nav, NavDropdown} from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavFrontPage() {
  return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

              <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Home</NavDropdown.Item>
                  <NavDropdown.Item href="/discover">Results</NavDropdown.Item>
                  <NavDropdown.Item href="/about">Form</NavDropdown.Item>
              </NavDropdown>
          </Nav>

            <Button variant="info" style={{marginLeft: "25rem"}}>Log In/Sign Up</Button>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavFrontPage;
