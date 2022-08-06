import Header from "../../components/Header";
import AboutPara from "../../components/About/AboutPara";
import TechSkills from "../../components/About/TechSkills";
import "./About.css";

export default function AboutMe() {
  return (
    <>
      <Header />
      <div className="d-flex p-2 flex-column">
        <img src="/images/profile.jpg" alt="profile pic" className="profile" />
        <AboutPara />
        <TechSkills />
      </div>
    </>
  );
}
