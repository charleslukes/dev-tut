import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Button from "../Buttons/Button";
import Stack from "../Cards/Stacks";
import DevArticle from "../Cards/DevArticle";
import "./DevProfile.css";

const DevProfile = () => {
  return (
    <>
      <Container>
        {/* <Row className="bg-danger">
          <Col>
            <h1>Hellloooo</h1>
          </Col>
        </Row> */}
        <Row>
          <Col md={4}>
            <div className="d-flex justify-content-center align-items-center flex-column devprofile-container">
              <div className="devprofile-img">
                <Image
                  src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/IX9Z71L6PD.jpg"
                  fluid
                  roundedCircle
                />
              </div>
              <div className="devprofile-details">
                I have a 10 years experience in software engeerings
              </div>
              <div className="d-flex flex-wrap">
                <Stack stack={"JavaScript"} />
                <Stack stack={"Python"} />
                <Stack stack={"Java"} />
                <Stack stack={"React"} />
                <Stack stack={"Angular"} />
                <Stack stack={"Node"} />
              </div>
              <div className="dev-social-collections">
                <span>
                  <i class="fab fa-facebook fb"></i>
                </span>
                <span>
                  <i class="fab fa-twitter twit"></i>
                </span>
                <span>
                  <i class="fab fa-github git"></i>
                </span>
              </div>
              <Button name="message" parentClass="devprofile-btn" />
            </div>
          </Col>
          <Col md={8} className="dev-articles mt-3">
            <DevArticle />
            <DevArticle />
            <DevArticle />
            <DevArticle />
            <DevArticle />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DevProfile;
