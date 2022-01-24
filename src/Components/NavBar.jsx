import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../assets/logo192.png';
import RotateImg from '../styles/Images';
import CollapseNavBar from './CollapseNavBar';

const NavBar = () => (
  <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <RotateImg
          src={logo}
          height="60"
          width="60"
          className="App-logo d-inline-block align-top"
          alt="Logo"
        />

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <CollapseNavBar />
    </Container>
  </Navbar>
);

export default NavBar;
