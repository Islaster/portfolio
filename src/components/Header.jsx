import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Navbar bg="secondary" className="nav-gradient" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="brand">Isaac</Navbar.Brand>
          </LinkContainer>
          <Nav className="links">
            <LinkContainer to="/about">
              <Nav.Link className="nav-link">About Me</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <LinkContainer to="/projects">
                <NavDropdown.Item>Websites</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/source">
                <NavDropdown.Item>Source Code</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/contact">
              <Nav.Link className="nav-link" to="/contact">
                Contact Me
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
