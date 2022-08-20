import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Contact.css";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="d-flex p-2 flex-column ">
      <Container className="contact">
        <Row>
          <Col>Phone</Col>
          <Col>Email</Col>
          <Col>Socials</Col>
        </Row>
        <Row>
          <Col>(812)318-2870</Col>
          <Col>Isaac.Laster812@outlook.com</Col>
          <Col>
            <a
              href="https://www.instagram.com/nexus_orgin/?hl=en"
              className="socials"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/isaaclaster/"
              className="socials"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Islaster" className="socials">
              <BsGithub />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
