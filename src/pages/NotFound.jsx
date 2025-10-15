import { Helmet } from "react-helmet-async";
import "../styles/page-css/NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <Helmet>
        <title>404 Not Found | LyOPix Coding</title>
      </Helmet>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
