import React, {useContext} from "react";
import "./DirectorDescription.scss";

import {authorData as translate} from "../../data/dictionary"
import {GlobalStateContext} from '../../context/GlobalContextProvider'

let description;
let yearsOfLife;
let placeOfBirth;
let currLang;
export default function DirectorData(props) {
   const state = useContext(GlobalStateContext);
   const data = props.data;
   let language = state.language;
   currLang = state.language;

   description = translate.description[currLang];
   yearsOfLife = translate.yearsOfLife[currLang];
   placeOfBirth = translate.placeOfBirth[currLang];

   return (
    <div className="director__wrapper">
      <p className="director__name-wrapper">
        <span className="director__name">{data.name[language]}</span>
        <span className="director__name">{data.surname[language]}</span>
      </p>
      <img className="director__photo" src={data.picture} alt='director-image'/>
      <div className="director__description-wrapper">
        <h4 className="director__description-title">{description}</h4>
        <p className="director__description">{data.fullDescription[language]}</p>
        <p className="director__description-heading">{yearsOfLife}
          <span className="director__description-text">{data.yearsOfLife}</span></p>
        <p className="director__description-heading">{placeOfBirth}
          <span className="director__description-text">{data.placeOfBirth[language]}</span></p>
      </div>
    </div>
  )

}
