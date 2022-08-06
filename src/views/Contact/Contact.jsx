import Header from "../../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="d-flex p-2 flex-column ">
      <Header />
      <Container className="contact">
        <Row>
          <Col>Phone</Col>
          <Col>Email</Col>
        </Row>
        <Row>
          <Col>(812)318-2870</Col>
          <Col>Isaac.Laster812@outlook.com</Col>
        </Row>
      </Container>
    </div>
  );
}
