import "./Project.css";

export default function Project({ project }) {
  return (
    <div className="project">
      <a href={project.html_url}>{project.name}</a>
      <br />
    </div>
  );
}
