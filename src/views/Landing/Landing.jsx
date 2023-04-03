import Button from "react-bootstrap/Button";
import Contact from "../../components/Landing/Contact/Contact";
import Particle from "../../components/Landing/particle/particle";
import Project from "../../components/Landing/Project/Project";
import { AiOutlineDownCircle } from "react-icons/ai";
import "./Landing.css";
import { useState, useEffect } from "react";

export default function Landing() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 480;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <>
      <section className="welcome" id="welcome">
        <h1>Hi, I'm Isaac</h1>
        <h4>A Full-Stack Developer</h4>
        <Button variant="dark" size="lg" href="/about">
          Learn More
        </Button>
        <div className="bottom">
          {width > breakpoint ? (
            <a href="#contact" className="lanchor">
              <AiOutlineDownCircle size={35} style={{ color: "white" }} />
            </a>
          ) : (
            <></>
          )}
        </div>
      </section>
      <section className="lProject">
        <Project />
      </section>
      <section className="lContact">
        <Contact width={width} breakpoint={breakpoint} />
      </section>
      <Particle />
    </>
  );
}
