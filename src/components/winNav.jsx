import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import "./Header.css";

export default function DeskNav() {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="secondary"
        className="nav-gradient"
        expand="sm"
        sticky="top"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <LinkContainer to="/">
              <Navbar.Brand className="brand">Isaac</Navbar.Brand>
            </LinkContainer>
            <Nav className="links">
              <LinkContainer to="/about">
                <Nav.Link className="nav-link link">About Me</Nav.Link>
              </LinkContainer>
              <NavDropdown
                title="Projects"
                id="collasible-nav-dropdown"
                className="link"
              >
                <LinkContainer to="/projects">
                  <NavDropdown.Item>Websites</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/source">
                  <NavDropdown.Item>Gallery</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/contact">
                <Nav.Link className="nav-link link" to="/contact">
                  Contact Me
                </Nav.Link>
              </LinkContainer>
              <div className="socials">
                <a
                  href="https://www.instagram.com/dev_named_isaac/"
                  target="_blank"
                  rel="noreferrer"
                  className="social"
                >
                  <BsInstagram style={{ color: "black" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/isaaclaster/"
                  target="_blank"
                  rel="noreferrer"
                  className="social"
                >
                  <AiFillLinkedin style={{ color: "black" }} />
                </a>
                <a
                  href="https://github.com/Islaster"
                  target="_blank"
                  rel="noreferrer"
                  className="social"
                >
                  <BsGithub style={{ color: "black" }} />
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
