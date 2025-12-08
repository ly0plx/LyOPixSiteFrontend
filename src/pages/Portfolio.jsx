import { Helmet } from 'react-helmet-async'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/page-css/Portfolio.css'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <Helmet>
        <title>Portfolio | LyOPix Coding</title>
      </Helmet>
      
      <div className="portfolio-hero">
        <div className="portfolio-hero-content">
          <span className="portfolio-badge">My Work</span>
          <h1>Portfolio</h1>
          <p>Explore my collection of projects, from completed works to exciting upcoming releases</p>
        </div>
      </div>

      <div className="portfolio-main">
        <div className="project-gallery">
          <div className="project-item">
            <div className="project-thumbnail">
              <img src="https://picsum.photos/400/300" alt="Project preview" />
              <div className="project-overlay">
                <span className="project-status">Live</span>
              </div>
            </div>
            <div className="project-info">
              <h2>
                <a href="https://music.lyopix.com" className="project-title">
                  Music Streaming Platform
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-icon" />
                </a>
              </h2>
              <p className="project-description">A full-featured music streaming service with curated playlists</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">API</span>
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-thumbnail">
              <img src="https://picsum.photos/401/300" alt="Project preview" />
              <div className="project-overlay">
                <span className="project-status">Live</span>
              </div>
            </div>
            <div className="project-info">
              <h2>
                <a href="https://music.lyopix.com" className="project-title">
                  E-Commerce Dashboard
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-icon" />
                </a>
              </h2>
              <p className="project-description">Analytics dashboard for online retailers with real-time data</p>
              <div className="project-tags">
                <span className="tag">Vue.js</span>
                <span className="tag">Charts</span>
                <span className="tag">Analytics</span>
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-thumbnail">
              <img src="https://picsum.photos/402/300" alt="Project preview" />
              <div className="project-overlay">
                <span className="project-status status-coming">Coming Soon</span>
              </div>
            </div>
            <div className="project-info">
              <h2>
                <a href="https://music.lyopix.com" className="project-title">
                  Task Management App
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-icon" />
                </a>
              </h2>
              <p className="project-description">Collaborative task manager with team productivity features</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Firebase</span>
                <span className="tag">PWA</span>
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-thumbnail">
              <img src="https://picsum.photos/403/300" alt="Project preview" />
              <div className="project-overlay">
                <span className="project-status">Live</span>
              </div>
            </div>
            <div className="project-info">
              <h2>
                <a href="https://music.lyopix.com" className="project-title">
                  Weather Forecast Widget
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-icon" />
                </a>
              </h2>
              <p className="project-description">Beautiful weather widget with 7-day forecasts and animations</p>
              <div className="project-tags">
                <span className="tag">JavaScript</span>
                <span className="tag">CSS3</span>
                <span className="tag">API</span>
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-thumbnail">
              <img src="https://picsum.photos/404/300" alt="Project preview" />
              <div className="project-overlay">
                <span className="project-status status-coming">Coming Soon</span>
              </div>
            </div>
            <div className="project-info">
              <h2>
                <a href="https://music.lyopix.com" className="project-title">
                  AI Image Generator
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-icon" />
                </a>
              </h2>
              <p className="project-description">Generate stunning images using AI with custom prompts</p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">AI/ML</span>
                <span className="tag">API</span>
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-thumbnail">
              <img src="https://picsum.photos/405/300" alt="Project preview" />
              <div className="project-overlay">
                <span className="project-status">Live</span>
              </div>
            </div>
            <div className="project-info">
              <h2>
                <a href="https://music.lyopix.com" className="project-title">
                  Social Media Scheduler
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-icon" />
                </a>
              </h2>
              <p className="project-description">Schedule and manage posts across multiple social platforms</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">OAuth</span>
                <span className="tag">Automation</span>
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-thumbnail">
              <img src="https://picsum.photos/406/300" alt="Project preview" />
              <div className="project-overlay">
                <span className="project-status">Live</span>
              </div>
            </div>
            <div className="project-info">
              <h2>
                <a href="https://music.lyopix.com" className="project-title">
                  Portfolio Template Builder
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-icon" />
                </a>
              </h2>
              <p className="project-description">Create beautiful portfolio websites with drag-and-drop interface</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Builder</span>
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-thumbnail">
              <img src="https://picsum.photos/407/300" alt="Project preview" />
              <div className="project-overlay">
                <span className="project-status status-coming">Coming Soon</span>
              </div>
            </div>
            <div className="project-info">
              <h2>
                <a href="https://music.lyopix.com" className="project-title">
                  Code Snippet Manager
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-icon" />
                </a>
              </h2>
              <p className="project-description">Organize and share code snippets with syntax highlighting</p>
              <div className="project-tags">
                <span className="tag">Vue.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Tools</span>
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-thumbnail">
              <img src="https://picsum.photos/408/300" alt="Project preview" />
              <div className="project-overlay">
                <span className="project-status">Live</span>
              </div>
            </div>
            <div className="project-info">
              <h2>
                <a href="https://music.lyopix.com" className="project-title">
                  Fitness Tracking App
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-icon" />
                </a>
              </h2>
              <p className="project-description">Track workouts, calories, and fitness goals with detailed analytics</p>
              <div className="project-tags">
                <span className="tag">React Native</span>
                <span className="tag">Mobile</span>
                <span className="tag">Health</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}