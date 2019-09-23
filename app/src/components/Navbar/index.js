import React from "react";
import "./style.css";
import {Navbar, Button, FormControl, Form, Nav, NavDropdown} from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navvy() {
  return (
<<<<<<< HEAD
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
          <Form inline>
            <FormControl style={{width: "21rem"}} type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
            <Button variant="info" style={{marginLeft: "25rem"}}>Log In/Sign Up</Button>
        </Navbar.Collapse>
      </Navbar>
=======
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Project Three
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/stufftodo"
              className={window.location.pathname === "/stufftodo" ? "nav-link active" : "nav-link"}
            >
              Stuff to Do
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/traveloptions"
              className={window.location.pathname === "/traveloptions" ? "nav-link active" : "nav-link"}
            >
              Travel Options
            </Link>
          </li>
        </ul>
      </div>
    </nav>
>>>>>>> master
  );
}

export default Navvy;
