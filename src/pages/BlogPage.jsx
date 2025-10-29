import { Helmet } from "react-helmet-async";
import "../styles/page-css/BlogPage.css";

export default function BlogPage({ details }) {
  return (
    <div className="post-page">
      <Helmet>
        <title>{details.title} | Blog | LyOPix Coding</title>
      </Helmet>
      <div className="post-container">
        <img src={details.image} alt="" />
        <h1>{details.title}</h1>
        <p className="author">By: {details.author} - {details.date}</p>
        <p>{details.content}</p>
      </div>
    </div>
  );
}
