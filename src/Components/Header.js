import React, { Component } from 'react'
import { Form, FormControl, Navbar, Container, Button, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from  '../assets/logo192.png'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Contacts from '../Pages/Contacts'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <p>
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className='d-inline-block align-top'
                                alt="Logo"
                            />
                                React</p>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About us</Nav.Link>
                                <Nav.Link href="/contacts">Contact</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
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
                {/* РАБОТА BOOTSTRAP*/}
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/blog" element={<Blog />} />
                        {/* СООТВЕТСТВИЕ ССЫЛКАМ  */}
                    </Routes>
                </Router>
                {/*  РАБОТА REACTROUTER */}
            </>
        )
    }
}
