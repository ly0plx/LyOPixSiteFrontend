import "../styles/About.css";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About | LyOPix</title>
      </Helmet>
      <h2>About LyOPix</h2>
      <p>Some info goes here...</p>
    </div>
  );
}
