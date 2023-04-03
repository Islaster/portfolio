import { projects } from "../ProjectList";
import Project from "../Project";

export default function MobPro() {
  return (
    <section>
      <h3 style={{ color: "antiquewhite", marginTop: 15 }}>My Projects</h3>
      {projects.map((project, key) => {
        return (
          <>
            <Project project={project} idx={key} />
            <br />
          </>
        );
      })}
    </section>
  );
}
