import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as BootstrapNavbar } from "react-bootstrap";

export default function NavB() {
  return (
    <>
      <BootstrapNavbar bg="dark" data-bs-theme="dark" className="navbarClass">
        <Container id="contain">
          <BootstrapNavbar.Brand href="/">Netflix Clone</BootstrapNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>
    </>
  );
}
