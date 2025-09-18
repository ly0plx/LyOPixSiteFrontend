import "../styles/Home.css";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div className="home-container">
      <Helmet>
        <title>LyOPix - Web Design for all</title>
      </Helmet>
      <h2>Welcome to LyOPix Home</h2>
      <p>This page has its own styles 🎨</p>
    </div>
  );
}
