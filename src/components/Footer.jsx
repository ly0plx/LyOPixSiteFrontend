import "../styles/Footer.css";
import SingleInput from "../components/SingleInput";
import SocialLinks from "../components/SocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-circle">
                <img src={logo} alt="Logo" />
              </div>
              <h2>LyOPix Coding</h2>
            </div>
            <p className="brand-tagline">
              Making the future customizable, one line of code at a time.
            </p>
            <SocialLinks />
          </div>

          <div className="footer-links-group">
            <div className="footer-column">
              <h3>Explore</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Products</h3>
              <ul>
                <li><a href="#product1">Product One</a></li>
                <li><a href="#product2">Product Two</a></li>
                <li><a href="#product3">Product Three</a></li>
                <li><a href="#product4">Product Four</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Connect</h3>
              <ul>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#press">Press Kit</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe to get the latest news and updates.</p>
            <SingleInput
              icon={<FontAwesomeIcon icon={faPaperPlane} />}
              action=""
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {new Date().getFullYear()} LyOPix Coding. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#terms">Terms of Service</a>
            <span className="separator">•</span>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
        
        <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </footer>
  );
}