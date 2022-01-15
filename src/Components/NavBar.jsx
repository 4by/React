import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Form, FormControl, Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import logo from '../assets/logo192.png';
import RotateImg from '../styles/Images';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/React">

          <RotateImg
            src={logo}
            height="60"
            width="60"
            className="App-logo d-inline-block align-top"
            alt="Logo"
          />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/React">Home</Nav.Link>
            <Nav.Link href="/React/#/about">About us</Nav.Link>
            <Nav.Link href="/React/#/contacts">Contact</Nav.Link>
            <Nav.Link href="/React/#/blog">Blog</Nav.Link>
            {/* СОЗДАЕТ ССЫЛКИ НА КНОПКАХ, В ПОСЛЕДСТВИЕ ИМ БУДЕТ ПРИВЕДЕНО СООТВЕТСТВИЕ */}
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="search"
              className="mr-sm-2"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
