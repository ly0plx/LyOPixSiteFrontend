import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // scroll behavior
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "nav-scrolled" : ""}`}>
        <img src={logo} alt="Logo" className="icon" />

        <ul className="nav-links">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/tools" className={({ isActive }) => isActive ? "active" : ""}>Tools</NavLink></li>
          <li><NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink></li>
          <li><NavLink to="/lab" className={({ isActive }) => isActive ? "active" : ""}>Lab</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `cta ${isActive ? "active" : ""}`}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>

        <FontAwesomeIcon
          icon={menuOpen ? faXmark : faBars}
          className="menubutton"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </nav>
      <div
        className={`overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide Panel */}
      <div className={`panel ${menuOpen ? "open" : ""}`}>
        <div className="close" onClick={() => setMenuOpen(false)}>✕</div>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/tools" className={({ isActive }) => isActive ? "active" : ""}>Tools</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink>
        <NavLink to="/lab" className={({ isActive }) => isActive ? "active" : ""}>Lab</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `cta ${isActive ? "active" : ""}`}>Contact Me</NavLink>
      </div>
    </>
  );
}
