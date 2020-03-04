import React from 'react';
import logo from '../images/keepfblogo.png';
import { Navbar,
Nav,
NavDropdown,
Form,
FormControl,
Button } from 'react-bootstrap';

function Menubar() {
  return (
    <Navbar className="bg-blue" expand="lg">
  <Navbar.Brand href="#home">
    <img src={logo} style={{height: '50px'}} />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" style={{color: 'white', fontWeight: 'bold', marginLeft: '10px'}}>Facebook Video Downloader</Nav.Link>
      <Nav.Link href="#link" style={{color: 'Grey', fontWeight: 'bold', marginLeft: '10px'}}>How To?</Nav.Link>
      <Nav.Link href="#link" style={{color: 'Grey', fontWeight: 'bold', marginLeft: '10px'}}>Private Video Downloader</Nav.Link>
    </Nav>
    <Nav.Link href="#link" style={{color: 'Grey', fontWeight: 'bold', marginLeft: '10px'}}>Contact Us</Nav.Link>
  </Navbar.Collapse>
</Navbar>

  );
}

export default Menubar;
