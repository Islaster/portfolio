import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Github from "./views/Github/Github";
import Contact from "./views/Contact/Contact";
import AboutMe from "./views/AboutMe/AboutMe";
import Projects from "./views/Projects/Projects";
import "./App.css";
import DeskNav from "./components/winNav";

function App() {
  return (
    <div className="App">
      <DeskNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/source" element={<Github />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
