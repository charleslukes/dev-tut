import React from "react";
import { Image } from "react-bootstrap";
import Button from "../Buttons/Button";
import Stack from "./Stacks";
import "./Dev.css";

const Dev = ({ imageLink, devName, devLocation, devResume }) => {
  return (
    <>
      <div className="devCard">
        <div className="d-flex pt-3">
          <div className="devImage">
            <Image
              src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/IX9Z71L6PD.jpg"
              fluid
              roundedCircle
            />
          </div>
          <div className="devDetails">
            <h6 className="devName">{devName}</h6>
            <small className="devLocation">{devLocation}</small>
          </div>
        </div>
        <div className="devStack">
          <p>&quot; {devResume} &quot;</p>
          <div className="devStackClass d-flex flex-wrap">
            <Stack stack={"JavaScript"} />
            <Stack stack={"Python"} />
            <Stack stack={"Java"} />
            <Stack stack={"React"} />
            <Stack stack={"Angular"} />
            <Stack stack={"Node"} />
          </div>
        </div>
        <div className="devCardBtn">
          <Button name="View Profile" parentClass={"dev-btn"} />
        </div>
      </div>
    </>
  );
};

export default Dev;
