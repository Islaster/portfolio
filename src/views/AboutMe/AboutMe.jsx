import Header from "../../components/Header";
import AboutPara from "../../components/About/AboutPara";
import TechSkills from "../../components/About/TechSkills";

export default function AboutMe() {
  return (
    <>
      <Header />
      <div className="d-flex p-2 flex-column">
        <AboutPara />
        <TechSkills />
      </div>
    </>
  );
}
