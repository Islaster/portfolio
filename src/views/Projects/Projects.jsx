import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Project.css";

export default function Projects() {
  return (
    <div className="websites">
      <Container>
        <Row>
          <Col>
            <a href="https://blog-about-nothing.herokuapp.com/">
              <img
                src="/images/carousel/blog-about-nothing.png"
                alt="blog about nothing"
              />
            </a>
          </Col>
          <Col>
            <a href="https://sleepy-journey-76294.herokuapp.com/">
              <img src="/images/carousel/gamestore.png" alt="gamestore" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
