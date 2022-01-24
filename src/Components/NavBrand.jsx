import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../assets/logo192.png';
import RotateImg from '../styles/Images';

const NavBrand = () => (
  <Navbar.Brand href="/">
    <RotateImg
      src={logo}
      height="60"
      width="60"
      className="App-logo d-inline-block align-top"
      alt="Logo"
    />
  </Navbar.Brand>
);
export default NavBrand;
