import Button from "react-bootstrap/Button";
import Contact from "../../components/Landing/Contact/Contact";
import Particle from "../../components/Landing/particle/particle";
import Project from "../../components/Landing/Project/Project";
import "./Landing.css";

export default function Landing() {
  return (
    <>
      <section className="welcome">
        <h1>Hi, I'm Isaac</h1>
        <h4>A Full-Stack Developer</h4>
        <Button variant="dark" size="lg" href="/about">
          Learn More
        </Button>
      </section>
      <section>
        <Project />
      </section>
      <section>
        <Contact />
      </section>
      <Particle />
    </>
  );
}
