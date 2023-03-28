import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

function Navbarfile() {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{marginRight:"700px"}}>E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{marginRight:"30px"}}> Home</Nav.Link>
            <Nav.Link href="#link" style={{marginRight:"30px"}}>Products</Nav.Link>
            
            <NavDropdown title="UserEmail" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarfile