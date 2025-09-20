import "../styles/Footer.css";
import SingleInput from "../components/SingleInput";
import SocialLinks from "../components/SocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Portfolio</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
