import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Projects from "./views/Projects/Projects";
import Contact from "./views/Contact/Contact";
import AboutMe from "./views/AboutMe/AboutMe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
