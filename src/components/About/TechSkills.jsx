import {
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiPython,
  DiNodejs,
  DiDjango,
  DiBootstrap,
  DiMaterializecss,
  DiReact,
  DiPostgresql,
} from "react-icons/di";
import { SiExpress, SiMongodb } from "react-icons/si";

export default function TechSkills() {
  return (
    <div>
      <p>
        Tech Skills: <br />
        Languages: <br />
        <DiJsBadge size={70} /> <DiHtml5 size={70} /> <DiCss3 size={70} />{" "}
        <DiPython size={70} /> <DiNodejs size={70} /> <br />
        FrameWorks: <br />
        <DiDjango size={70} /> <DiBootstrap size={70} />{" "}
        <DiMaterializecss size={70} /> <DiReact size={70} />{" "}
        <SiExpress size={70} /> <br />
        Databases: <br />
        <SiMongodb size={70} /> <DiPostgresql size={70} />
      </p>
    </div>
  );
}
