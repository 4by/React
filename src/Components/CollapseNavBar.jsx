import React from 'react';
import {
  Navbar, Form, FormControl, Nav, Button,
} from 'react-bootstrap';

const CollapseBar = () => (

  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/#/about">About us</Nav.Link>
      <Nav.Link href="/#/contacts">Contact</Nav.Link>
      <Nav.Link href="/#/blog">Blog</Nav.Link>
      {/* СОЗДАЕТ ССЫЛКИ НА КНОПКАХ, В ПОСЛЕДСТВИЕ ИМ БУДЕТ ПРИВЕДЕНО СООТВЕТСТВИЕ */}
    </Nav>
    <Form>
      <FormControl
        type="text"
        placeholder="search"
        className="mr-sm-2"
      />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar.Collapse>

);

export default CollapseBar;
