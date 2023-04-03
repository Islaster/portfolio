import Project from "../Project";
import { projects } from "../ProjectList";
import { arrayChunk } from "../../ArrayChunk/ArrayChunk";
import Banner from "../../Carousel/Banner";
import { Row, Col } from "react-bootstrap";

export default function Deskpro() {
  return (
    <div>
      <Banner />
      <h3 style={{ color: "antiquewhite" }}>My Projects</h3>
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
        <h1>No Projects</h1>
      )}
    </div>
  );
}
