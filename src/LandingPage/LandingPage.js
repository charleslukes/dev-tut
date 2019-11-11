import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "../Card/Card";
import "./LandingPage.css";

const LandingPage = () => {
  const num = [
    {
      imgLink:
        "https://www.irishtimes.com/polopoly_fs/1.3942790.1565937760!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
      lang: "JAVASCRIPT",
      date: "11.11.2019",
      title: "This an awesome title for Javascript",
      author: "Micheal Smith",
      imgLg: "large"
    },
    {
      imgLink:
        "https://devclass.com/wp-content/uploads/2019/01/scaled-python.jpeg",
      lang: "REACT",
      date: "18.11.2019",
      title: "This an awesome title for React",
      author: "John Smith"
    },
    {
      imgLink: "https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
      lang: "PYTHON",
      date: "01.11.2019",
      title: "This an awesome title for Python",
      author: "Micheal John"
    }
  ];
  return (
    <>
      <div className="mt-3">
        <Container fluid>
          <Row>
            <Col md={5}>
              <div className="contain-img">
                <Image
                  src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/IX9Z71L6PD.jpg"
                  fluid
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex flex-wrap justify-content-center">
                {num.map(({ imgLg, imgLink, lang, date, title, author }) => (
                  <Card
                    imgLg={imgLg}
                    imgLink={imgLink}
                    lang={lang}
                    date={date}
                    title={title}
                    author={author}
                  />
                ))}
              </div>
            </Col>
            <Col md={3}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
