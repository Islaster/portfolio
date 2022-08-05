import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Project from "../../components/Projects/project";

export default function Projects() {
  let [projects, setProjects] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/islaster/repos")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
      <Header />
      {projects ? (
        projects.map((element, key) => <Project project={element} idx={key} />)
      ) : (
        <></>
      )}
    </div>
  );
}
