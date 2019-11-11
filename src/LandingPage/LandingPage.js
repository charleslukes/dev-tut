import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NewsCard from "../Cards/NewsCard";
import Button from "../Buttons/Button";
import Card from "../Cards/Card";
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

  const news = [
    {
      imgLink:
        "https://www.irishtimes.com/polopoly_fs/1.3942790.1565937760!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
      lang: "JAVASCRIPT",
      title: "This an awesome title for Javascript"
    },
    {
      imgLink:
        "https://devclass.com/wp-content/uploads/2019/01/scaled-python.jpeg",
      lang: "REACT",
      title: "This an awesome title for React"
    },
    {
      imgLink: "https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
      lang: "PYTHON",
      title: "This an awesome title for Python"
    }
  ];
  return (
    <>
      <div className="mt-4">
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
              <div className="d-flex justify-content-center flex-column align-items-center new-info">
                <div className="d-flex justify-content-between align-items-end newsBtn font-weight-bold py-4">
                  <span>New</span>
                  <div className="nav-icon d-flex align-items-center">
                    <button className="d-flex mr-2">
                      <i class="material-icons">navigate_before</i>
                    </button>
                    <button className="d-flex">
                      <i class="material-icons">navigate_next</i>
                    </button>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-end trend font-weight-bold py-4">
                  <div>Trending</div>
                  <div>Popular</div>
                </div>

                {news.map(({ imgLink, lang, title }) => (
                  <NewsCard imgLink={imgLink} lang={lang} title={title} />
                ))}

                <Button name={"View More"} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
