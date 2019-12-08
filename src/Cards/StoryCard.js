import React from "react";
import { Image } from "react-bootstrap";
import "./StoryCard.css";

const StoryCard = ({ image, title, authorName, subTitle }) => {
  return (
    <>
      <div className="story_card">
        <Image className="story_image" src={image} fluid />
        <div className="story_details">
          <h5>{title}</h5>
          <p>
            By <span className="story_author">{authorName}</span> | December 06,
            2019
          </p>
          <p>{subTitle}</p>
          <p id="story_readmore">Read More</p>
        </div>
      </div>
    </>
  );
};

export default StoryCard;
