import { Helmet } from 'react-helmet-async'
import '../styles/page-css/Blog.css'

export default function Blog() {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog | LyOPix Coding</title>
      </Helmet>
      <div className="intro">
        <h1>Blog</h1>
        <p>Welcome to the blog! Stay tuned for updates.</p>
      </div>
      <hr />
      <div className="content">
        <div className="post-list">
          <div className="post">
            <img src="https://picsum.photos/300/200" alt="" />
            <h2>Example Post</h2>
            <a href="https://lyopix.com/blog/<!-- Slug here -->" className="btn" >Open</a>
          </div>
          <div className="post">
            <img src="https://picsum.photos/300/200" alt="" />
            <h2>Example Post</h2>
            <a href="https://lyopix.com/blog/<!-- Slug here -->" className="btn" >Open</a>
          </div>
          <div className="post">
            <img src="https://picsum.photos/300/200" alt="" />
            <h2>Example Post</h2>
            <a href="https://lyopix.com/blog/<!-- Slug here -->" className="btn" >Open</a>
          </div>
          <div className="post">
            <img src="https://picsum.photos/300/200" alt="" />
            <h2>Example Post</h2>
            <a href="https://lyopix.com/blog/<!-- Slug here -->" className="btn" >Open</a>
          </div>
          <div className="post">
            <img src="https://picsum.photos/300/200" alt="" />
            <h2>Example Post</h2>
            <a href="https://lyopix.com/blog/<!-- Slug here -->" className="btn" >Open</a>
          </div>
          <div className="post">
            <img src="https://picsum.photos/300/200" alt="" />
            <h2>Example Post</h2>
            <a href="https://lyopix.com/blog/<!-- Slug here -->" className="btn" >Open</a>
          </div>
        </div>
      </div>
    </div>
  );
}