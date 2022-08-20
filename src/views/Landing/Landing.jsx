import Button from "react-bootstrap/Button";
import Particle from "../../components/Landing/particle/particle";
import "./Landing.css";

export default function Landing() {
  return (
    <>
      <div className="welcome">
        <h1>Hi, I'm Isaac</h1>
        <h4>A Full-Stack Developer</h4>
        <Button variant="dark" size="lg" href="/about">
          Enter
        </Button>
      </div>
      <Particle />
    </>
  );
}
