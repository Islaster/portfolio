import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Navbar bg="secondary" className="nav-gradient" expand="lg" sticky="top">
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
            <a
              href="https://www.instagram.com/nexus_orgin/?hl=en"
              className="socials"
            >
              <BsInstagram style={{ color: "black" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/isaaclaster/"
              className="socials"
            >
              <AiFillLinkedin style={{ color: "black" }} />
            </a>
            <a href="https://github.com/Islaster" className="socials">
              <BsGithub style={{ color: "black" }} />
            </a>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
