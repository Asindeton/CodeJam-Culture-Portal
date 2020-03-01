import React, {Component, useState, useContext} from 'react'

import Layout from '../components/layout';
import {description as translate} from "../components/data/dictionary"
import taskInfo from "../components/data/dictionary2"
import worklogData from './WorklogD';
import {GlobalStateContext} from '../components/context/GlobalContextProvider'
import './Worklog.css'


let team;
let currLang;
let task;
let difficulties;
let one;
let two;
let three;
let level;
let value;
let isMaked;
let taskValue;

const url = "https://obhajiwala.com/assets/less/icons/ionicons/src/ios7-minus-empty.svg";

const Toggle = () => {
   const state = useContext(GlobalStateContext);
   currLang = state.language;
   team = translate.team[currLang];

  const [isToggledOn, setToggle] = useState(false)
  return (
     <>
     <div className='toggle'>
    <button className="worklogButton" onClick={() => setToggle(!isToggledOn)}>
     {isToggledOn ? 'ON' : [team] }</button>
     {isToggledOn &&  <table className='table' responsive>
               <tr>
                <th>Task</th>
                <th>Name</th>
                <th>Functionality</th>
                <th>Time</th>
                </tr>
                {worklogData.map((newWorklog)=>(
                  <tr>
                  <td>{newWorklog.task}</td>
                  <td>{newWorklog.name}</td>
                  <td>{newWorklog.functionality}</td>
                  <td>{newWorklog.time}</td>
                  </tr>
                ))}
            </table>}
            </div>
            </>
)}


const ToggleTwo = () => {

   const state = useContext(GlobalStateContext);
   currLang = state.language;
   task = translate.task[currLang];
   isMaked = translate.isMaked[currLang];
   taskValue = translate.taskValue[currLang];

  const [isToggledOn, setToggle] = useState(false)
       return (

          <div className='toggle'>
         <button className="worklogButton" onClick={() => setToggle(!isToggledOn)}>
          {isToggledOn ? 'ON' : [task]}</button>
          {isToggledOn &&  <table className='table' responsive>
          <tr>
            <th>{isMaked}</th>
            <th>{taskValue}</th>
          </tr>
          {taskInfo.map((newInfo)=>(
              <tr>
              <td><input type='checkbox' checked/></td>
              <td>{newInfo.value[currLang]}</td>
              </tr>
          ))}
       </table>}
    </div>
    );
}

function ToggleThree() {
   const state = useContext(GlobalStateContext);
   currLang = state.language;
   difficulties = translate.difficulties[currLang];
   one = translate.one[currLang];
   two = translate.two[currLang];
   three = translate.three[currLang];
   level = translate.level[currLang];
  const [isToggledOn, setToggle] = useState(false)
   return (
      <div className='toggle'>
     <button className="worklogButton" onClick={() => setToggle(!isToggledOn)}>
      {isToggledOn ? 'ON' : [difficulties]}</button>
      {isToggledOn && <table className='table' responsive>
          <tr>
            <th>{level}</th>
          </tr>
          <tr>
            <td>{one}</td>
          </tr>
          <tr>
            <td>{two}</td>
          </tr>
          <tr>
            <td>{three}</td>
          </tr>
         </table>}
    </div>
    );
}

function Worklog() {
      return(
         <Layout>
            <Toggle />
            <ToggleTwo />
            <ToggleThree />
         </Layout>
      )
}

export default Worklog
