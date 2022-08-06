import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
            <LinkContainer to="/projects">
              <Nav.Link className="nav-link" to="/projects">
                Projects
              </Nav.Link>
            </LinkContainer>
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
