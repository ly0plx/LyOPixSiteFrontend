import { Helmet } from "react-helmet-async";
import "../styles/page-css/Blog.css";

export default function Blog() {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog | LyOPix Coding</title>
        <meta
          name="description"
          content="A developer news blog covering what’s happening in tech, what actually matters, and what’s worth ignoring."
        />
        <link rel="canonical" href="https://lyopix.com/blog" />
        <meta property="og:title" content="LyOPix Dev Blog" />
        <meta
          property="og:description"
          content="A developer news blog covering what’s happening in tech, what actually matters, and what’s worth ignoring."
        />
        <meta property="og:url" content="https://lyopix.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="hero">
        <div className="hero-content">
          <span className="hero-badge">Latest Articles</span>
          <h1>Blog & Insights</h1>
          <p>
            Explore tutorials, insights, and updates from the world of web
            development
          </p>
        </div>
      </div>

      <div className="content">
        <div className="post-grid">
          <article className="post-card">
            <div className="post-image">
              <img src="https://picsum.photos/400/250" alt="Blog post cover" />
              <span className="post-category">Tutorial</span>
            </div>
            <div className="post-content">
              <div className="post-meta">
                <span className="post-date">Nov 8, 2025</span>
                <span className="post-reading">5 min read</span>
              </div>
              <h2>Getting Started with React Hooks</h2>
              <p>
                Learn the fundamentals of React Hooks and how to use them
                effectively in your projects.
              </p>
              <a
                href="https://lyopix.com/blog/getting-started-react-hooks"
                className="post-link"
              >
                Read Article
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </article>

          <article className="post-card">
            <div className="post-image">
              <img src="https://picsum.photos/400/251" alt="Blog post cover" />
              <span className="post-category">Design</span>
            </div>
            <div className="post-content">
              <div className="post-meta">
                <span className="post-date">Nov 5, 2025</span>
                <span className="post-reading">8 min read</span>
              </div>
              <h2>Modern CSS Grid Layouts</h2>
              <p>
                Master CSS Grid with practical examples and create responsive
                layouts with ease.
              </p>
              <a
                href="https://lyopix.com/blog/modern-css-grid-layouts"
                className="post-link"
              >
                Read Article
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </article>

          <article className="post-card">
            <div className="post-image">
              <img src="https://picsum.photos/400/252" alt="Blog post cover" />
              <span className="post-category">JavaScript</span>
            </div>
            <div className="post-content">
              <div className="post-meta">
                <span className="post-date">Nov 1, 2025</span>
                <span className="post-reading">6 min read</span>
              </div>
              <h2>Async/Await Best Practices</h2>
              <p>
                Deep dive into asynchronous JavaScript and learn how to write
                cleaner async code.
              </p>
              <a
                href="https://lyopix.com/blog/async-await-best-practices"
                className="post-link"
              >
                Read Article
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </article>

          <article className="post-card">
            <div className="post-image">
              <img src="https://picsum.photos/400/253" alt="Blog post cover" />
              <span className="post-category">Performance</span>
            </div>
            <div className="post-content">
              <div className="post-meta">
                <span className="post-date">Oct 28, 2025</span>
                <span className="post-reading">10 min read</span>
              </div>
              <h2>Web Performance Optimization</h2>
              <p>
                Techniques and tools to make your websites faster and improve
                user experience.
              </p>
              <a
                href="https://lyopix.com/blog/web-performance-optimization"
                className="post-link"
              >
                Read Article
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </article>

          <article className="post-card">
            <div className="post-image">
              <img src="https://picsum.photos/400/254" alt="Blog post cover" />
              <span className="post-category">Tools</span>
            </div>
            <div className="post-content">
              <div className="post-meta">
                <span className="post-date">Oct 25, 2025</span>
                <span className="post-reading">4 min read</span>
              </div>
              <h2>Essential VS Code Extensions</h2>
              <p>
                A curated list of must-have extensions to boost your development
                productivity.
              </p>
              <a
                href="https://lyopix.com/blog/essential-vscode-extensions"
                className="post-link"
              >
                Read Article
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </article>

          <article className="post-card">
            <div className="post-image">
              <img src="https://picsum.photos/400/255" alt="Blog post cover" />
              <span className="post-category">Security</span>
            </div>
            <div className="post-content">
              <div className="post-meta">
                <span className="post-date">Oct 20, 2025</span>
                <span className="post-reading">7 min read</span>
              </div>
              <h2>Web Security Fundamentals</h2>
              <p>
                Protect your applications with these essential security
                practices and principles.
              </p>
              <a
                href="https://lyopix.com/blog/web-security-fundamentals"
                className="post-link"
              >
                Read Article
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
