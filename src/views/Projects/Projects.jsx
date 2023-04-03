import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Project.css";
import { arrayChunk } from "../../components/ArrayChunk/ArrayChunk";

export default function Projects() {
  const projects = [
    {
      name: "Blog About Nothing",
      url: "https://blog-about-nothing.herokuapp.com/",
      img: "/images/carousel/blog-about-nothing.png",
    },
    {
      name: "Game Ranch",
      url: "https://sleepy-journey-76294.herokuapp.com/",
      img: "/images/carousel/gamestore.png",
    },
  ];
  function info() {
    this.style.filter = "brightness(50%)";
    const p = document.createElement("p");
    p.innerHTML = this.alt;
    this.appendChild(p);
  }
  return (
    <div className="websites">
      <Container>
        <h1 className="h1-error">404</h1>
        <br />
        <p className="P-error">
          you didnt break the internet, but we can't find what you are looking
          for.
        </p>
      </Container>
    </div>
  );
}
