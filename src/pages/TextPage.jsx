import React from 'react';
import '../styles/page-css/TextPage.css';
import { Helmet } from 'react-helmet-async';

const TextPage = ({ title = "Page Title", content = "Page content goes here." }) => {
  return (
    <>
    <Helmet>
      <title>{title} | LyOPix Coding</title>
    </Helmet>
    <div className="text-page">
      <div className="text-page-container">
        <div className="text-page-card">
          <div className="text-page-accent-line" />
          
          <h1 className="text-page-title">
            {title}
          </h1>
          
          <div className="text-page-content">
            {content}
          </div>

          <div className="text-page-glow" />
        </div>
      </div>
    </div>
    </>
  );
};

export default TextPage;