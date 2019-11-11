import React from "react";
import { Image } from "react-bootstrap";
import "./NewsCard.css";

const NewsCard = ({ lang, title, imgLink }) => {
  return (
    <>
      <div className="d-flex font-weight-bold new-hold my-3">
        <div>
          <span className="small-text lang-type">#{lang}</span>
          <p>{title}</p>
        </div>
        <div className="img-display ml-1">
          <Image src={imgLink} fluid />
        </div>
      </div>
    </>
  );
};

export default NewsCard;
