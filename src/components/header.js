import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import LoginForm from "./LoginForm";

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">
          <img src="https://app.billie.io/img/logo.svg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/checkout">Checkout</Nav.Link>
          </Nav>
          <LoginForm />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
