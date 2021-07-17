import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import "../navigations/Navbar.css";
import logo from "../../assets/images/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import MobileSearch from "../MobileSearch";

function NavbarTop() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      id="nav"
      expanded={expanded}
    >
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
        <div id="mobile-search">{/* <MobileSearch /> */}</div>
        <Navbar.Toggle
          id="toggle"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="me-auto">
            <Link to="/" onClick={() => setExpanded(false)}>
              <Navbar.Text id="nav-items">Home</Navbar.Text>
            </Link>
            <Navbar.Text href="#pricing" id="nav-items">
              About
            </Navbar.Text>
            <Link to="/cars" onClick={() => setExpanded(false)}>
              <Navbar.Text href="#pricing" id="nav-items">
                Cars
              </Navbar.Text>
            </Link>
            <div id="search">
              <Search />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
