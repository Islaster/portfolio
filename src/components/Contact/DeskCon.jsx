import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import Button from "react-bootstrap/Button";

export default function DeskCon() {
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
          <Col>
            <a
              href="mailto:Isaac.Laster812@outlook.com"
              style={{ textDecoration: "none", color: "antiquewhite" }}
            >
              Isaac.Laster812@outlook.com
            </a>
          </Col>
          <Col>
            <Button
              style={{ marginBottom: "3vh" }}
              href="https://www.instagram.com/dev_named_isaac/"
              target="_blank"
              rel="noreferrer"
              className="socials"
            >
              Instagram
              <BsInstagram />
            </Button>
            <br />
            <Button
              href="https://www.linkedin.com/in/isaaclaster/"
              style={{ marginBottom: "3vh" }}
              target="_blank"
              rel="noreferrer"
              className="socials"
            >
              LinkedIn
              <AiFillLinkedin />
            </Button>
            <br />
            <Button
              href="https://github.com/Islaster"
              target="_blank"
              rel="noreferrer"
              className="socials"
            >
              Github
              <BsGithub />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
