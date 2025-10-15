import "../styles/page-css/Home.css";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <Helmet>
        <title>LyOPix Coding | Web Design For All</title>
      </Helmet>
      <div className="hero">
        <div className="main">
          <h1>Hey! I'm LyOPix!</h1>
          <p>
            I'm a software developer that makes everything custom so that you
            can enjoy services with advantages, and im always looking for ideas!
          </p>
        </div>
        <div className="bottom">
          <p>Learn More</p>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
      <hr />
      <div className="mee">
        <h2>Check Me Out:</h2>
        <button>
          <Link to="/about">About</Link>
        </button>
        <button>
          <Link to="/portfolio">Portfolio</Link>
        </button>
      </div>
      <hr />
      <div className="projects">
        <h2>My Projects:</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Example Project Name</h3>
            <h5>
              Status: <span>Finished</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos animi, quidem aut est necessitatibus quasi sapiente?
              Fugit nemo rerum molestias quidem quas, perspiciatis est eius
              culpa laborum saepe, deleniti alias?
            </p>
            <button>
              <a href="https://example.com/">Example Button Text</a>
            </button>
          </div>
          <div className="project-card">
            <h3>Example Project Name</h3>
            <h5>
              Status: <span>Finished</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos animi, quidem aut est necessitatibus quasi sapiente?
              Fugit nemo rerum molestias quidem quas, perspiciatis est eius
              culpa laborum saepe, deleniti alias?
            </p>
            <button>
              <a href="https://example.com/">Example Button Text</a>
            </button>
          </div>
          <div className="project-card">
            <h3>Example Project Name</h3>
            <h5>
              Status: <span>Finished</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos animi, quidem aut est necessitatibus quasi sapiente?
              Fugit nemo rerum molestias quidem quas, perspiciatis est eius
              culpa laborum saepe, deleniti alias?
            </p>
            <button>
              <a href="https://example.com/">Example Button Text</a>
            </button>
          </div>
          <div className="project-card">
            <h3>Example Project Name</h3>
            <h5>
              Status: <span>Finished</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos animi, quidem aut est necessitatibus quasi sapiente?
              Fugit nemo rerum molestias quidem quas, perspiciatis est eius
              culpa laborum saepe, deleniti alias?
            </p>
            <button>
              <a href="https://example.com/">Example Button Text</a>
            </button>
          </div>
          <div className="project-card">
            <h3>Example Project Name</h3>
            <h5>
              Status: <span>Finished</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos animi, quidem aut est necessitatibus quasi sapiente?
              Fugit nemo rerum molestias quidem quas, perspiciatis est eius
              culpa laborum saepe, deleniti alias?
            </p>
            <button>
              <a href="https://example.com/">Example Button Text</a>
            </button>
          </div>
          <div className="project-card">
            <h3>Example Project Name</h3>
            <h5>
              Status: <span>Finished</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos animi, quidem aut est necessitatibus quasi sapiente?
              Fugit nemo rerum molestias quidem quas, perspiciatis est eius
              culpa laborum saepe, deleniti alias?
            </p>
            <button>
              <a href="https://example.com/">Example Button Text</a>
            </button>
          </div>
          <div className="project-card">
            <h3>Example Project Name</h3>
            <h5>
              Status: <span>Finished</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos animi, quidem aut est necessitatibus quasi sapiente?
              Fugit nemo rerum molestias quidem quas, perspiciatis est eius
              culpa laborum saepe, deleniti alias?
            </p>
            <button>
              <a href="https://example.com/">Example Button Text</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
