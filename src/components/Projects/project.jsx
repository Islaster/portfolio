export default function Project({ project, idx }) {
  console.log(project);
  return (
    <div>
      <a href={project.html_url}>
        {project.name} <br />
      </a>
    </div>
  );
}
