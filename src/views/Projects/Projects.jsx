import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Project.css";

export default function Projects() {
  const projects = [
    {
      name: "Blackjack",
      url: "https://blackjack-6792d.web.app/",
      img: "/images/carousel/blackjack.png",
      tech: ["HTML", "CSS", "JS"],
    },
    // Add more projects here
  ];

  return (
    <div className="projects-section">
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project, idx) => (
            <Col key={idx}>
              <a href={project.url}>
                <Card className="project-card">
                  <Card.Img variant="top" src={project.img} />
                  <div className="project-overlay">
                    <div className="project-tech">
                      {project.tech.join(" | ")}
                    </div>
                  </div>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
