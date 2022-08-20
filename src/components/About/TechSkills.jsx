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
import "./TechSkills.css";

export default function TechSkills() {
  return (
    <div>
      <p className="skills">
        <div className="mainHeader">
          Tech Skills <br />
        </div>
        <div className="lang">
          <div className="techHeader">
            Languages: <br />
          </div>
          <a href="https://www.javascript.com/">
            <DiJsBadge size={70} />
          </a>
          <a href="https://html.com/">
            <DiHtml5 size={70} />
          </a>
          <a href="https://www.w3.org/Style/CSS/">
            <DiCss3 size={70} />
          </a>
          <a href="https://www.python.org/">
            <DiPython size={70} />{" "}
          </a>
          <a href="https://nodejs.org/en/">
            <DiNodejs size={70} /> <br />
          </a>
        </div>
        <div className="framewrk">
          <div className="techHeader">
            FrameWorks: <br />
          </div>
          <a href="https://www.djangoproject.com/">
            <DiDjango size={70} />
          </a>
          <a href="https://getbootstrap.com/">
            <DiBootstrap size={70} />{" "}
          </a>
          <a href="https://materializecss.com/">
            <DiMaterializecss size={70} />
          </a>
          <a href="https://reactjs.org/">
            <DiReact size={70} />{" "}
          </a>
          <a href="https://expressjs.com/">
            <SiExpress size={70} /> <br />
          </a>
        </div>
        <div className="datab">
          <div className="techHeader">
            Databases: <br />
          </div>
          <a href="https://www.mongodb.com/">
            <SiMongodb size={70} />
          </a>
          <a href="https://www.postgresql.org/">
            <DiPostgresql size={70} />
          </a>
        </div>
      </p>
    </div>
  );
}
