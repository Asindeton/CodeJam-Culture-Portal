import React,{useContext} from "react";

import "./DirectorTimeLine.scss"
import { Timeline, Event } from "react-timeline-scribble";

import {authorData as translate} from "../../data/dictionary"
import {GlobalStateContext} from '../../context/GlobalContextProvider'


let title;
let currLang;

export default function DirectorTimeLine(props) {
   const state = useContext(GlobalStateContext);
   let language = state.language;
   currLang = state.language;

   title = translate.title[currLang];

  const data = props.data.biography;

  let Events = data.map(item=>{
    return <Event interval = {item.years}>{item.do[language]}</Event>
  });
  return(
    <>
      <h2 className='timeline__title'>{title}</h2>
      <div className='timeline__points'>
          <Timeline>
            {Events}
          </Timeline>
      </div>
    </>
  )
}
