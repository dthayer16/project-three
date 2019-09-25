import React from "react";
import "./style.css";
import {Navbar, Button, FormControl, Form, Nav, NavDropdown, InputGroup} from "react-bootstrap";
import SearchForm from "../SearchForm";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navvy(props) {
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
              <div className="form-group">
                  <InputGroup size="md">
                      <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"
                                   onChange={props.handleInputChange}
                                   name="search"
                                   type="text"
                                   className="form-control"
                                   placeholder="San Diego, CA"
                      />
                      <InputGroup.Append>
                          <Button variant="info" onClick={props.handleFormSubmit}><i className="fas fa-search"> </i></Button>
                      </InputGroup.Append>
                  </InputGroup>

              </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>

  );
}

export default Navvy;
