import React from "react";
import "./DevArticle.css";

const DevArticle = () => {
  return (
    <div className="dev-article-display mb-1">
      <div className="font-weight-bold mb-2 lang">#PYTHON</div>
      <div className="dev-article-title">This is the awesome article.</div>
      <p className="dev-article-main my-2">
        I’ll be writing another post later on which explains how to deploy your
        bot to Heroku so that you don’t have to run it on your local system
      </p>
      <p className="dev-read-more">Read More...</p>
      <div className="dev-articles-likes">
        <span>
          <i class="far fa-eye article-view"></i> <span>25</span>
        </span>
        <span>
          <i class="fas fa-thumbs-up article-likes"></i> <span>10</span>
        </span>
      </div>
    </div>
  );
};

export default DevArticle;
