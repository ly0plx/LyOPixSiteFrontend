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
      <div className="intro">
        <h1>Portfolio</h1>
        <p>Welcome to my portfolio! See all my projects (upcoming and done) here.</p>
      </div>
      <hr />
      <div className="content">
        <div className="post-list">
          <div className="post">
            <img src="https://picsum.photos/300/200" alt="" />
            <h2><a href="https://music.lyopix.com" >Example Post <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></h2>
          </div>
          <div className="post">
            <img src="https://picsum.photos/300/200" alt="" />
            <h2><a href="https://music.lyopix.com" >Example Post <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></h2>
          </div>
          <div className="post">
            <img src="https://picsum.photos/300/200" alt="" />
            <h2><a href="https://music.lyopix.com" >Example Post <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></h2>
          </div>
          <div className="post">
            <img src="https://picsum.photos/300/200" alt="" />
            <h2><a href="https://music.lyopix.com" >Example Post <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></h2>
          </div>
          <div className="post">
            <img src="https://picsum.photos/300/200" alt="" />
            <h2><a href="https://music.lyopix.com" >Example Post <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></h2>
          </div>
          <div className="post">
            <img src="https://picsum.photos/300/200" alt="" />
            <h2><a href="https://music.lyopix.com" >Example Post <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></h2>
          </div>
          <div className="post">
            <img src="https://picsum.photos/300/200" alt="" />
            <h2><a href="https://music.lyopix.com" >Example Post <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></h2>
          </div>
          <div className="post">
            <img src="https://picsum.photos/300/200" alt="" />
            <h2><a href="https://music.lyopix.com" >Example Post <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></h2>
          </div>
          <div className="post">
            <img src="https://picsum.photos/300/200" alt="" />
            <h2><a href="https://music.lyopix.com" >Example Post <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></h2>
          </div>
          
        </div>
      </div>
    </div>
  );
}