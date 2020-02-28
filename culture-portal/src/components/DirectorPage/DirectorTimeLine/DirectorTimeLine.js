import React from "react";
import "./DirectorTimeLine.scss"
import { Timeline, Event } from "react-timeline-scribble";

export default function DirectorTimeLine(props) {
  const language = 'ru';
  const languageData = {
    "title":{
      en:"Timeline",
      ru:"Хроника жизни",
      be:"Хроніка жыцця"
    }
  };
  const data = props.data.biography;

  let Events = data.map(item=>{
    return <Event interval = {item.years}>{item.do[language]}</Event>
  });
  return(
    <>
      <h2 className='timeline__title'>{languageData.title[language]}</h2>
      <div className='timeline__points'>
          <Timeline>
            {Events}
          </Timeline>
      </div>
    </>
  )
}
