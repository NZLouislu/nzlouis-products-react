import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { getExchanges } from "../services/fakeExchangService";

const NavBar = () => {
  const exchanges = getExchanges();

  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
              alt="NZLouis.com"
              src={require(`../images/nzlouis.jpg`).default}
              width="100"
              height="30"
              className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
          <Nav.Link as={Link} to="/pincodes">PIN Codes</Nav.Link>
          <NavDropdown title="Products" id="basic-nav-dropdown">
            {exchanges.map((item) => 
              <NavDropdown.Item 
                key={item.id} 
                as={Link} 
                to={`/products/${item.name}`}
              >
                Products ({item.name})
              </NavDropdown.Item>
            )}
          </NavDropdown>
          <Nav.Link as={Link} to="/catalogViewer">Catalog Viewer</Nav.Link>
          <NavDropdown title="Online Tests" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/liked/">Liked Button</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/counter/">Counter</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/todolist/">To Do List</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/toggle/">Toggle</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
