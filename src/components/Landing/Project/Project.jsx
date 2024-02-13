import Button from "react-bootstrap/Button";
import "./Project.css";

export default function Project() {
  return (
    <div className="Project">
      <h1>Check Out My Projects</h1>
      <br />
      <span>
        <Button href="/source" variant="dark" size="lg" className="space">
          Projects
        </Button>
        <Button href="/projects" variant="dark" size="lg" className="space">
          Websites
        </Button>
      </span>
    </div>
  );
}
