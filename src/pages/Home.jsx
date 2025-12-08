import "../styles/page-css/Home.css";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <Helmet>
        <title>LyOPix Coding | Custom Web Solutions</title>
      </Helmet>
      <div className="hero">
        <div className="main">
          <h1>Hey! I'm LyOPix!</h1>
          <p>
            I'm a software developer specializing in custom web solutions. 
            I create tailored applications that give you a competitive edge, 
            and I'm always eager to bring new ideas to life.
          </p>
        </div>
        <div className="bottom">
          <p>Learn More</p>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
      <hr />
      <div className="mee">
        <h2>Explore My Work</h2>
        <button>
          <Link to="/about">About Me</Link>
        </button>
        <button>
          <Link to="/portfolio">View Portfolio</Link>
        </button>
      </div>
      <hr />
      <div className="projects">
        <h2>Featured Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Project Title</h3>
            <h5>
              Status: <span>Completed</span>
            </h5>
            <p>
              A comprehensive description of your project goes here. Highlight 
              the key features, technologies used, and the problem it solves. 
              Focus on the value it provides to users and any unique aspects 
              that make it stand out.
            </p>
            <button>
              <a href="https://example.com/">View Project</a>
            </button>
          </div>
          <div className="project-card">
            <h3>Project Title</h3>
            <h5>
              Status: <span>Completed</span>
            </h5>
            <p>
              A comprehensive description of your project goes here. Highlight 
              the key features, technologies used, and the problem it solves. 
              Focus on the value it provides to users and any unique aspects 
              that make it stand out.
            </p>
            <button>
              <a href="https://example.com/">View Project</a>
            </button>
          </div>
          <div className="project-card">
            <h3>Project Title</h3>
            <h5>
              Status: <span>Completed</span>
            </h5>
            <p>
              A comprehensive description of your project goes here. Highlight 
              the key features, technologies used, and the problem it solves. 
              Focus on the value it provides to users and any unique aspects 
              that make it stand out.
            </p>
            <button>
              <a href="https://example.com/">View Project</a>
            </button>
          </div>
          <div className="project-card">
            <h3>Project Title</h3>
            <h5>
              Status: <span>In Progress</span>
            </h5>
            <p>
              A comprehensive description of your project goes here. Highlight 
              the key features, technologies used, and the problem it solves. 
              Focus on the value it provides to users and any unique aspects 
              that make it stand out.
            </p>
            <button>
              <a href="https://example.com/">View Project</a>
            </button>
          </div>
          <div className="project-card">
            <h3>Project Title</h3>
            <h5>
              Status: <span>Completed</span>
            </h5>
            <p>
              A comprehensive description of your project goes here. Highlight 
              the key features, technologies used, and the problem it solves. 
              Focus on the value it provides to users and any unique aspects 
              that make it stand out.
            </p>
            <button>
              <a href="https://example.com/">View Project</a>
            </button>
          </div>
          <div className="project-card">
            <h3>Project Title</h3>
            <h5>
              Status: <span>Completed</span>
            </h5>
            <p>
              A comprehensive description of your project goes here. Highlight 
              the key features, technologies used, and the problem it solves. 
              Focus on the value it provides to users and any unique aspects 
              that make it stand out.
            </p>
            <button>
              <a href="https://example.com/">View Project</a>
            </button>
          </div>
          <div className="project-card">
            <h3>Project Title</h3>
            <h5>
              Status: <span>Completed</span>
            </h5>
            <p>
              A comprehensive description of your project goes here. Highlight 
              the key features, technologies used, and the problem it solves. 
              Focus on the value it provides to users and any unique aspects 
              that make it stand out.
            </p>
            <button>
              <a href="https://example.com/">View Project</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}