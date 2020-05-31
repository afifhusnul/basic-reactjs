import React from 'react';
import { Nav, Navbar,NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {HashRouter } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <HashRouter>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React Template</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">                        
            {/* <Nav.Link href="#master">Master Stock</Nav.Link> */}
            <NavDropdown title="Basic Practice" id="basic-nav-dropdown">
              <NavDropdown.Item href="#welcome">Welcome</NavDropdown.Item>
              <NavDropdown.Item href="#message">Message</NavDropdown.Item>
              <NavDropdown.Item href="#greet">Greet</NavDropdown.Item>
              <NavDropdown.Item href="#counter">Counter</NavDropdown.Item>
              <NavDropdown.Item href="#functionclick">Function Click</NavDropdown.Item>
              <NavDropdown.Item href="#classclick">Class Click</NavDropdown.Item>
              <NavDropdown.Item href="#eventbind">Event Bind</NavDropdown.Item>
              <NavDropdown.Item href="#parentcomp">Parent Component</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Menu 2" id="basic-nav-dropdown">
              <NavDropdown.Item href="#modal">Open Modal</NavDropdown.Item>
              <NavDropdown.Item href="#menu2">Menu 2</NavDropdown.Item>
              <NavDropdown.Item href="#menu3">menu 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#reversal">Menu 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      </HashRouter>
    )
  }
}