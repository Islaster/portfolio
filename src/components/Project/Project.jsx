import "./Project.css";

export default function Project({ project }) {
  console.log(project);
  return (
    <div className="project">
      <p style={{ fontSize: "3vh" }}>{project.name}</p>
      <br />
      {project.type === "video" ? (
        <video src={project.url} controls />
      ) : (
        <img src={project.url} className="projectImg" alt="" />
      )}
      <br />
      <p style={{ fontSize: "4vh" }}>
        Tech Stack: <br /> {project.tech}
      </p>
    </div>
  );
}
