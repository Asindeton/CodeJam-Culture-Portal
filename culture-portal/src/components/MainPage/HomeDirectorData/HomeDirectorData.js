import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import directorsData from "../directorsData"
import { Link } from "gatsby"

import "./HomeDirectorData.scss";

function getDirectorOfDay(data, random){
//  let currentDay = new Date(Date.now()).getDate();
//  while(currentDay>data.length){
//    currentDay -= data.length
//  }
   return data[random];
}
const languageData = {
  "title":{
    en:"Belarusian Movie Director of the day",
    ru:"Белорусский кинорежиссер дня",
    be:"Беларускі кінарэжысёр дня"
  },
  "button":{
    en:"Learn more",
    ru:"Подробнее",
    be:"Падрабязна"
  },
  "firstMovie":{
    en:"First film created",
    ru:"Создан первый фильм",
    be:"Створан першы фільм"
  },
  "awards":{
    en:"Awards and nominations",
    ru:"Наград и номинаций",
    be:"Узнагарод і намінацый"
  },
  "filmAmount":{
    en:"Number of films currently",
    ru:"Создано фильмов",
    be:"Створана фільмаў"
  },
};
export default function HomeDirectorData(props) {
  const data = directorsData;
  const random = props.random;
  const language = props.language;

  let directorOfDay = getDirectorOfDay(data, random);

  return (
    <div className="home__director-data-wrapper">
      <Container className="home__director-data-container">
        <Row className="home__director-data-description">
          <Col lg={{span: 10, offset: 1}}>
            <Row>
              <Col
                className="home__director-data-title">
                {languageData.title[language]}
              </Col>
              <Col
                className="home__director-data-about">
               About
              </Col>
            </Row>
            <Row>
              <Col className="home__director-data-name-wrapper">
                <span className="home__director-data-name-first">{directorOfDay.name[language]}</span>
                <span className="home__director-data-name-second">{directorOfDay.surname[language]}</span>
              </Col>
            </Row>
            <Row>
              <Col >

              <Link to={'/author' + (random+1)}  className="home__director-data-button">{languageData.button[language]}</Link>

              </Col>
            </Row>
            <Row>
              <Col lg={{offset: 6}} className="home__director-data-point-container">
                <Row>
              <Col className="home__director-data-point-wrapper">
                <span className="home__director-data-point-number">{directorOfDay.filmography[0].information[0].year}</span>
                <span>{languageData.firstMovie[language]}</span></Col>
              <Col className="home__director-data-point-wrapper">
                <span className="home__director-data-point-number">{directorOfDay.awards}</span>
                <span>{languageData.awards[language]}</span></Col>
              <Col className="home__director-data-point-wrapper">
                <span className="home__director-data-point-number">{directorOfDay.filmography.length}</span>
                <span>{languageData.filmAmount[language]}</span>
              </Col>
                </Row>
                </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
