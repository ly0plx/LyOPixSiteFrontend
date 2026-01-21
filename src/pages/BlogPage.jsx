import { Helmet } from "react-helmet-async";
import "../styles/page-css/BlogPage.css";

export default function BlogPage({ details }) {
  console.log(details.tag);
  return (
    <div className="post-page">
      <Helmet>
        <title>{details.title} | Blog | LyOPix Coding</title>
        <meta name="description" content={details.content} />
        <link rel="canonical" href={"https://lyopix.com/blog/" + details.tag} />
        <meta property="og:title" content={details.title + " | Blog | LyOPix Coding"} />
        <meta property="og:description" content={details.content} />
        <meta property="og:url" content={"https://lyopix.com/blog/" + details.tag} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="post-container">
        <img src={details.image} alt="" />
        <h1>{details.title}</h1>
        <p className="author">
          By: {details.author} - {details.date}
        </p>
        <p>{details.content}</p>
      </div>
    </div>
  );
}
