import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import CollapseNavBar from './CollapseNavBar';
import NavBrand from './NavBrand';

const NavBar = () => (
  <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Container>
      <NavBrand />
      <CollapseNavBar />
    </Container>
  </Navbar>
);

export default NavBar;
