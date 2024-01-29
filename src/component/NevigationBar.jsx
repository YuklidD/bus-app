import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const NavigationBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top" className="navbar">
      <Container>
        <Navbar.Brand href="#home">Bus Schedule</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Link to="/login" className="nav-link">
            <Button variant="outline-light" className="ms-lg-auto">
              Login
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
