import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Header = () => {
    return (
        <div className="pb-5">
            <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
                <Container>
                    <Navbar.Brand href="/">
                        <span className="text-danger fw-bold">
                            Dungeon Adventurer
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/knowledgebase">
                                Knowledgebase
                            </Nav.Link>
                            <NavDropdown
                                title="Account"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="/login">
                                    Login
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/register">
                                    Register
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
