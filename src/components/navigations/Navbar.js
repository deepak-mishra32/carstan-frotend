import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import "../navigations/Navbar.css";
import logo from "../../assets/images/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavbarTop() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" id="nav">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              id="logo"
              className="d-inline-block align-top"
              alt="Carstan"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="me-auto">
            <Link to="/">
              <Navbar.Text id="nav-items">Home</Navbar.Text>
            </Link>
            <Navbar.Text href="#pricing" id="nav-items">
              About
            </Navbar.Text>
            <Link to="/cars">
              <Navbar.Text href="#pricing" id="nav-items">
                Cars
              </Navbar.Text>
            </Link>
            <Search />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
