import "../styles/Footer.css";
import SingleInput from "../components/SingleInput";
import SocialLinks from "../components/SocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="left">
          <h1>Subscribe to my newsletter</h1>
          <SingleInput
            icon={<FontAwesomeIcon icon={faPaperPlane} />}
            action=""
            placeholder="Email"
          />
          <SocialLinks />
        </div>
        <div className="right">
          <div className="left">
            <h3>Products</h3>
            <ul>
              <li>App</li>
              <li>App</li>
              <li>App</li>
              <li>App</li>
              <li>App</li>
              <li>App</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
}
