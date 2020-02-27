import React from "react";

const languageData = {
  "filmDirector":{
    en: "Film Director",
    ru: "Кинорежиссёр",
    be: "Кінарэжысёр"
  },

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
    <div>
      <h2>{languageData.filmDirector[language]}</h2>
      <p>{data.name[language]} &nbsp; {data.surname[language]}</p>
      <img src={data.picture} alt='director-image'/>
      <div>
        <h4>{languageData.description[language]}</h4>
        <p>{data.fullDescription[language]}</p>
        <p>{languageData.yearsOfLife[language]} <span>{data.yearsOfLife}</span></p>
        <p>{languageData.placeOfBirth[language]} <span>{data.placeOfBirth[language]}</span></p>
      </div>
    </div>
  )

}