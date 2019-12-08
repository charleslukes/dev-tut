import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StoryCard from "../Cards/StoryCard";
import { stories } from "../utils/stories";
import "./Stories.css";

const Stories = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <h1 className="my-5 stories_title">Lastest Stories</h1>
        </Row>
        <Row>
          <Col md={12}>
            <div className="all_storycards">
              {stories.map(({ image, title, subTitle, authorName }) => (
                <StoryCard
                  image={image}
                  title={title}
                  subTitle={subTitle}
                  authorName={authorName}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Stories;
