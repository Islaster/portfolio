import { useEffect, useState } from "react";
import Project from "../../components/Project/Project";
import Banner from "../../components/Carousel/Banner";
import { arrayChunk } from "../../components/ArrayChunk/ArrayChunk";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Projects() {
  let [projects, setProjects] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/islaster/repos")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
  projects
    ? arrayChunk(projects, 3).map((e) => console.log(e))
    : console.log(null);

  return (
    <div>
      <Banner />
      {projects ? (
        arrayChunk(projects, 3).map((e, i) => (
          <Row key={i}>
            {e.map((e, i) => (
              <Col>
                <Project project={e} idx={i} />
              </Col>
            ))}
          </Row>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
