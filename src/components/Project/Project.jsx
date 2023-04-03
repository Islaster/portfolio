import "./Project.css";

export default function Project({ project }) {
  console.log(project);
  return (
    <div className="project">
      <p style={{ fontSize: "3vh" }}>{project.name}</p>
      <br />
      {project.type === "video" ? (
        <>
          <video src={project.url} controls />
          <br />
          <p>Tech Stack: {project.tech}</p>
        </>
      ) : (
        <div className="galleryContainer">
          <img src={project.url} className="projectImg" alt="" />
          <div className="galleryOverlay">
            <p className="text">{project.tech}</p>
          </div>
        </div>
      )}
    </div>
  );
}
