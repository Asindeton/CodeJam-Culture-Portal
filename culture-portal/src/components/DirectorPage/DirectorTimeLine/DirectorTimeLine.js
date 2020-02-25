import React from "react";
import { Timeline, Event } from "react-timeline-scribble";

export default function DirectorTimeLine(props) {
  const language = 'ru';
  const data = props.data[language].biography;

  let Events = data.map(item=>{
    return <Event interval = {item.period}>{item.text}</Event>
  });
  return(
    <>
      <h2 className='timeline__title'>Timeline</h2>
      <div className='timeline__points'>
          <Timeline>
            {Events}
          </Timeline>
      </div>
    </>
  )
}
