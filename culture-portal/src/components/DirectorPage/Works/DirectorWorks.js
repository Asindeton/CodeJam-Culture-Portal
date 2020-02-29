import React,{useState, useContext} from "react";

import {Accordion, Card, useAccordionToggle} from "react-bootstrap";
import "./DirectorWorks.scss";

import {authorData as translate} from "../../data/dictionary"
import {GlobalStateContext} from '../../context/GlobalContextProvider'

function CustomToggle({children, eventKey}) {
  const [open, setOpen] = useState(false);
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    setOpen(!open)
  );

  return (
    <>
      <div className='works__button'
           onClick={decoratedOnClick}
      >
        {(open) ?
          <img src="https://obhajiwala.com/assets/less/icons/ionicons/src/ios7-minus-empty.svg"
               style={{width:"32px", height:"32px"}} />:
          <img src='https://obhajiwala.com/assets/less/icons/ionicons/src/ios7-plus-empty.svg'
               style={{width:"32px", height:"32px"}}/>
          }
      </div>
      <span className='works__period'>{children}</span>
    </>
  );
}


let film;
let currLang;

export default function DirectorWorks(props) {
   const state = useContext(GlobalStateContext);
   const data = props.data;
   let language = state.language;
   currLang = state.language;

   film = translate.film[currLang]

  let AccordionData = data.filmography.map((item, index) => {
    return (
      <Accordion className='works__container'>
        <Card className='works__wrapper'>
          <Card.Header className='works__header'>
            <CustomToggle eventKey={index}>
              {item.period}
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={index}>
            <Card.Body className='works__body'>
              {item.information.map((i, ind) => {
                return (<div className='works__body-item'>
        <span className='works__body-item-title'>
          {i.film[language]}
        </span>
                  <span className='works__body-item-year'>
           {i.year}
        </span>
                </div>)
              })}
            </Card.Body>

          </Accordion.Collapse>
        </Card>
      </Accordion>)

  });

  return (<>
    <h2 className='works__title'>{film}</h2>
    <>
      {AccordionData}
    </>

  </>)
}
