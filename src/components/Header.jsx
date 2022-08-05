import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Isaac
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About Me
        </NavLink>
        <NavLink className="nav-link" to="/projects">
          Projects
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact Me
        </NavLink>
      </div>
    </div>
  );
}
