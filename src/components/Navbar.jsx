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

  const NAVBAR_HEIGHT = 70;
  const NAVBAR_SCROLLED_HEIGHT = 60;

  // scroll behavior
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > window.innerHeight - NAVBAR_HEIGHT);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "nav-scrolled" : ""}`}>
        <img src={logo} alt="LyOPix Logo" className="icon" />

        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lab"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Lab
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `cta button ${isActive ? "active" : ""}`}
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
        <div className="close" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faXmark} aria-label="Close Mobile Navbar" />
        </div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/tools"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Tools
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Blog
        </NavLink>
        <NavLink
          to="/lab"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Lab
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `cta ${isActive ? "active" : ""}`}
        >
          Contact Me
        </NavLink>
      </div>
    </>
  );
}
