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
import { SiExpress, SiMongodb, SiFirebase } from "react-icons/si";
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
          <a
            href="https://www.javascript.com/"
            target="_blank"
            rel="noreferrer"
          >
            <DiJsBadge size={70} />
          </a>
          <a href="https://html.com/" target="_blank" rel="noreferrer">
            <DiHtml5 size={70} />
          </a>
          <a
            href="https://www.w3.org/Style/CSS/"
            target="_blank"
            rel="noreferrer"
          >
            <DiCss3 size={70} />
          </a>
          <a href="https://www.python.org/" target="_blank" rel="noreferrer">
            <DiPython size={70} />{" "}
          </a>
          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
            <DiNodejs size={70} /> <br />
          </a>
        </div>
        <div className="framewrk">
          <div className="techHeader">
            FrameWorks: <br />
          </div>
          <a
            href="https://www.djangoproject.com/"
            target="_blank"
            rel="noreferrer"
          >
            <DiDjango size={70} />
          </a>
          <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
            <DiBootstrap size={70} />{" "}
          </a>
          <a
            href="https://materializecss.com/"
            target="_blank"
            rel="noreferrer"
          >
            <DiMaterializecss size={70} />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <DiReact size={70} />{" "}
          </a>
          <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
            <SiExpress size={70} /> <br />
          </a>
        </div>
        <div className="datab">
          <div className="techHeader">
            Databases: <br />
          </div>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <SiMongodb size={70} />
          </a>
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noreferrer"
          >
            <DiPostgresql size={70} />
          </a>
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            <SiFirebase size={70} />
          </a>
        </div>
      </p>
    </div>
  );
}
