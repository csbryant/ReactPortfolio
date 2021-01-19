import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Navbar.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbars() {
  return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Chris Bryant</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Bio">About</Nav.Link>
      <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default Navbars;
