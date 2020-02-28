import React from "react";
import "./DirectorDescription.scss";

const languageData = {

  "description": {
    en: "Description",
    ru: "Описание",
    be: "Апісанне"
  },
  "yearsOfLife":
    {
      en: "Years of life: ",
      ru: "Годы жизни: ",
      be: "Гады жыцця: "
    },
  "placeOfBirth":
    {
      en: "Place of birth: ",
      ru: "Место рождения: ",
      be: "Месца нараджэння: "
    },
};
export default function DirectorData(props) {
  const data = props.data;
  const language = 'en';
  return (
    <div className="director__wrapper">
      <p className="director__name-wrapper">
        <span className="director__name">{data.name[language]}</span>
        <span className="director__name">{data.surname[language]}</span>
      </p>
      <img className="director__photo" src={data.picture} alt='director-image'/>
      <div className="director__description-wrapper">
        <h4 className="director__description-title">{languageData.description[language]}</h4>
        <p className="director__description">{data.fullDescription[language]}</p>
        <p className="director__description-heading">{languageData.yearsOfLife[language]}
          <span className="director__description-text">{data.yearsOfLife}</span></p>
        <p className="director__description-heading">{languageData.placeOfBirth[language]}
          <span className="director__description-text">{data.placeOfBirth[language]}</span></p>
      </div>
    </div>
  )

}