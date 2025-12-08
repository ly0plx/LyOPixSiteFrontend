import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>LyOPix</h1>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
