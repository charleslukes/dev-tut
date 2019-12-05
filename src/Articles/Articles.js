import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "../Cards/Card";
import "./Articles.css";
import { card } from "../utils/card";

const Articles = () => {
  return (
    <>
      <Container className="articles-container">
        <Row>
          <Col md={12}>
            <ul className="articles_page">
              <li className="main_title">ARTICLES</li>
              <li className="articles_icons">
                <li>
                  <Image src="/html.png" fluid roundedCircle />
                </li>
                <li>
                  <Image src="/logo192.png" fluid roundedCircle />
                </li>
                <li>
                  <Image src="/pure_Js.png" fluid roundedCircle />
                </li>
                <li>
                  <Image src="/node.png" fluid roundedCircle />
                </li>
                <li>
                  <Image src="/python.svg" fluid roundedCircle />
                </li>
              </li>
            </ul>
            <div className="articles_grid">
              {card.map(({ imgLink, lang, date, title, author }) => (
                <Card
                  imgLink={imgLink}
                  lang={lang}
                  date={date}
                  title={title}
                  author={author}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Articles;
