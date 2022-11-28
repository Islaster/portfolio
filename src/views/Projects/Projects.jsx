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
        {arrayChunk(projects, 3).map((row, i) => (
          <Row key={i}>
            {row.map((col, i) => (
              <Col key={i}>
                <a href={col.url}>
                  <img src={col.img} alt={col.name} />
                </a>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
}
