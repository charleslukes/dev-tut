import React from "react";
import "./Card.css";
import { Image } from "react-bootstrap";

const Card = ({ imgLg, imgLink, lang, date, title, author }) => {
  return (
    <>
      <div className={imgLg ? "min-card-lg m-2" : "min-card m-2"}>
        <div className="min-img">
          <Image src={imgLink} rounded fluid />
        </div>
        <div className="d-flex justify-content-between small-text mt-1">
          <span className="lang-type">#{lang}</span>
          <span className="lang-date">{date}</span>
        </div>
        <div className={imgLg ? "text-center" : ""}>
          <div className="font-weight-bold">{title}</div>
          <div className="small-text mt-2 mb-4">{author}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
