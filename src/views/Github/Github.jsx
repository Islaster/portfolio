import { useEffect, useState } from "react";
import Project from "../../components/Project/Project";
import Banner from "../../components/Carousel/Banner";

export default function Projects() {
  let [projects, setProjects] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/islaster/repos")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
      <Banner />
      {projects ? (
        projects.map((element, key) => <Project project={element} idx={key} />)
      ) : (
        <></>
      )}
    </div>
  );
}
