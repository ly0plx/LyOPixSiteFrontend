import "../styles/Footer.css";
import SingleInput from "../components/SingleInput";
import SocialLinks from "../components/SocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUp,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-left">
          <h1>LyOPix Coding</h1>
          <h3>For Developers. By a Developer.</h3>
        </div>
        <div className="footer-right">
          <h3>+1 (801)-900-4297</h3>
          <h3>tanner@lyopix.com</h3>
        </div>
      </div>
      <hr />
      <div className="footer-main">
        <div className="open-hours">
          <h4>Contact Hours</h4>
          <ul>
            <li>Mon-Fri: 5pm - 7pm</li>
            <li>Saturday: 10am - 6pm</li>
          </ul>
        </div>
        <div className="connect">
          <h4>Connect</h4>
          <ul>
            <li>
              <Link to="https://github.com/ly0plx">
                <FontAwesomeIcon icon={faGithub} />
                ly0plx/LyOPix
              </Link>
            </li>
            <li>
              <Link to="mailto:tanner@lyopix.com">
                <FontAwesomeIcon icon={faEnvelope} />
                tanner@lyopix.com
              </Link>
            </li>
            <li>
              <Link to="tel:8019002497">
                <FontAwesomeIcon icon={faPhone} />
                +1 (801)-900-4297
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-navigation">
          <h4>Navigate</h4>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tools">Tools</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/lab">Lab</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-tools">
          <h4>Tools</h4>
          <ul>
            <li>Tool Example #1</li>
            <li>Tool Example #2</li>
            <li>Tool Example #3</li>
            <li>Tool Example #4</li>
            <li>Tool Example #5</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; Tanner Ordonez</span>
        <ul>
          <li>Privacy Policy</li>
          <li>·</li>
          <li>Terms Of Use</li>
        </ul>
        <FontAwesomeIcon icon={faArrowUp} onClick={scrollToTop} />
      </div>
    </footer>
  );
}
