import React from "react";
import Dev from "../Cards/Dev";
import { devs } from "../utils/devs";
import { Container, Row } from "react-bootstrap";
const Devs = () => {
  return (
    <Container>
      <Row>
        <h1 className="my-4 stories_title">Developers</h1>
      </Row>
      <Row>
        <div className="d-flex flex-wrap">
          {devs.map(({ imageLink, devName, devLocation, devResume }) => (
            <Dev
              devName={devName}
              devLocation={devLocation}
              devResume={devResume}
            />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default Devs;
