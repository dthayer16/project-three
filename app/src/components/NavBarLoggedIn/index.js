import React from "react";
import "./style.css";
import {Navbar, Button, FormControl, Form, Nav, NavDropdown} from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavLogged() {
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
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/saved">Saved</NavDropdown.Item>
              </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl style={{width: "21rem"}} type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
            <Button variant="info" style={{marginLeft: "25rem"}}>Sign Out</Button>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavLogged;
