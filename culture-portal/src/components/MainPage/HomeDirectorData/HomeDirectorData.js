import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";

function getDirectorOfDay(data){
  const directorKeysArray = Object.keys(data);
  let currentDay = new Date(Date.now()).getDate();
  while(currentDay>directorKeysArray.length){
    currentDay -= directorKeysArray.length
  }
   return directorKeysArray[currentDay-1];
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
  const {data, language} = props;
  let directorOfDay = getDirectorOfDay(data);
  const directorOfDayData = data[directorOfDay][language];
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
                <span className="home__director-data-name-first">{directorOfDayData.name}</span>
                <span className="home__director-data-name-second">{directorOfDayData.surname}</span>
              </Col>
            </Row>
            <Row>
              <Col >
                <Button variant="dark" className="home__director-data-button">{languageData.button[language]}</Button>
              </Col>
            </Row>
            <Row>
              <Col lg={{offset: 6}} className="home__director-data-point-container">
                <Row>
              <Col className="home__director-data-point-wrapper">
                <span className="home__director-data-point-number">{Object.keys(directorOfDayData.filmography)[0]}</span>
                <span>{languageData.firstMovie[language]}</span></Col>
              <Col className="home__director-data-point-wrapper">
                <span className="home__director-data-point-number">{directorOfDayData.awards}</span>
                <span>{languageData.awards[language]}</span></Col>
              <Col className="home__director-data-point-wrapper">
                <span className="home__director-data-point-number">{Object.keys(directorOfDayData.filmography).length}</span>
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
