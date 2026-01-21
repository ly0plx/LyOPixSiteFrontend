import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../styles/page-css/NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <Helmet>
        <title>404 Not Found | LyOPix Coding</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="button">Go Home</Link>
    </div>
  );
}
