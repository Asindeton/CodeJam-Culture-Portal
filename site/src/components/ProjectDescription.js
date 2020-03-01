import React from "react";
import { Link } from "gatsby"

import "./ProjectDescription.css";


export default function ProjectDescription(props) {
  const {language} = props;
  const languageData = {
    "title":{
      en:"Film directors of Belarus",
      ru:"Белорусские кинорежиссеры",
      be:"Беларускія кінарэжысёры"
    },
    "firstPart":{
      en:"The first Belarusian feature movie - \"Liasnaia byl'\"\n" +
        "was made by a script of Belarusian writer M. Charot\n" +
        "and Yu. Tarych in 1926.\n" +
        "It was soon followed by \"Da zautra\" (1929, dir. Yu. Tarych),\n" +
        "\"Kastus' Kalinouski\" (1928, dir. U. Hardzin),\n" +
        "\"U ahni narodzhanaia\" (1930, dir. U. Korsh-Sablin),\n" +
        "\"Zhanchyna\" (1932, dir. Ia. Dzihan).",
      ru:"Первый белорусский художественный фильм - \"Лясная быль\"\n" +
        "был сделан по сценарию белорусского писателя М. Шаро\n" +
        " и Ю. Тарыч в 1926 году.\n" +
        "Вскоре последовали «До завтра» (1929, реж. Ю. Тарыч),\n" +
        "\"Кастусь Калиновский\" (1928, реж. У. Хардзин),\n" +
        "\"В огне родженная\" (1930, реж. У. Корш-Саблин),\n" +
        "\"Женщина\" (1932, реж. Я. Дзихан).",
      be:"Першы беларускі мастацкі фільм - \"Лясная быль\" \"\n" +
        "быў зроблены паводле сцэнарыя беларускага пісьменніка М. Шаро\n" +
        "і Ю. Тарыч у 1926 годзе.\n" +
        "Неўзабаве рушыла ўслед \"Да заутра\" (1929, рэж. Ю. Тарыч),\n" +
        "\"Кастусь Каліноўскі\" (1928, рэж. У. Хардзін),\n" +
        "\"У агни народжаная\" (1930, рэж. У. Корш-Саблін),\n" +
        "\"Жанчына\" (1932, рэж. Ія. Дзіхан)."
    },
    "secondPart":{
      en:"Among belarusian writers working for cinematography and professional scriptwriters were:",
      ru:"Среди белорусских писателей-кинематографистов и профессиональных сценаристов были:",
      be:"Сярод беларускіх пісьменнікаў, якія працуюць у кінематаграфіі, і прафесійных сцэнарыстаў былі:"
    },
    "thirdPart":{
      en:["P. Brouka - \"Hto tvoj siabar?\", 1934",
        "Ia. Maur - \"Paleskiia rabinzony\", 1935",
        "Z. Biadulia - \"Salavej\", with M. Taube, 1937",
        "A. Vol'ny, \"U ahni narodzhany\", 1930",
        "R. Karabec, \"Dvojchy narodzhany\", 1934"],
      ru:["П. Броука - \"Кто твой друг?\", 1934",
        "Я. Мавр - \"Полесские робинзоны\", 1935",
        "З. Бядуля - \"Соловей\", совместно с M. Tаубе, 1937",
        "A. Вольный, \"В огне рожденные\", 1930",
        "Р. Карабец, \"Дважды рожденные\", 1934"],
      be:["П. Броука - \"Хто твой сябар?\", 1934",
        "Я. Маўр - \"Палескія рабінзоны\", 1935",
        "З. Бядуля - \"Салавей\", сумесна з M. Tаубе, 1937 г.",
        "A. Вольны, \"Ў агні народжаныя\", 1930",
        "Р. Карабец, \"Двойчы народжаныя\", 1934"],
    },
    "fourthPart":{
      en:"In 20-30-ies Belarusian studio was located in Leningrad.\n" +
        "It was moved to Miensk and became \"Belarusfilm\" later.\n" +
        "The first sound Belarusian movie was \"Pershy uzvod\" directed by U.\n" +
        "Korsh-Sablin in 1933. It is considered as one of the most\n" +
        "significant films of pre-war Belarusian cinematography.",
      ru:"В 20-30-х годах белорусская студия располагалась в Ленинграде.\n" +
        "Она была перенесена в Минск и позже стала \"Беларусьфильмом\".\n" +
        "Первым озвученным белорусским фильмом стал «Первый путь» режиссера\n" +
        "У. Корш-Саблин в 1933 году. Он считается одним из самых\n" +
        "значимых фильмов довоенного белорусского кинематографа.",
      be:"У 20-30-я гады ў Ленінградзе размяшчалася беларуская студыя.\n" +
        "Яна была перанесены ў Менск і стала \"Беларусьфільмам\" пазней.\n" +
        "Першым гукавым беларускім фільмам стаў \"Першы узвод\" рэжысёра \n" +
        "У.Корш-Саблін у 1933 г. Лічыцца адным з самых\n" +
        "значным фільмау даваеннай беларускай кінематаграфіі."
    },
    "button":{
      en:"Watch All Film Makers",
      ru:"Перейти к режиссерам",
      be:"Глядзець усіх рэжысерау",
    }
  };
  let thirdPart = languageData.thirdPart.en.map((item,index)=>{return <li key={index}>{languageData.thirdPart[language][index]}</li>});
  return (
    <div className="home__project-description-wrapper">
      <div className="home__project-description-container">
        <div className="home__project-description-title-wrapper">
          <h2 className="home__project-description-title">{languageData.title[language]}</h2>
          <p className="home__project-description-first-part">
            {languageData.firstPart[language]}
          </p>
        </div>
        <div className="home__project-description-second-part-wrapper">
          <p className="home__project-description-second-part-intro">
            {languageData.secondPart[language]}<br/>
          </p>
          <ul className="home__project-description-second-part-list">
            {thirdPart}
          </ul>
        </div>
        <div className="home__project-description-third-part-wrapper">
          <p className="home__project-description-third-part">
            {languageData.fourthPart[language]}
          </p>
        </div>

    
    
          <Link to={'/listOfAuthors'} className="home__project-description-button">{languageData.button[language]}</Link>
    
    
      </div>
    </div>
  )
}