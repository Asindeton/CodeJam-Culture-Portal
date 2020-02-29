import React,{useContext} from 'react';
import DirectorActivityMap from "../components/DirectorPage/Map/DirectorActivityMap";

import directorsData from "../components/MainPage/directorsData";
import Layout from '../components/layout';
import "../components/DirectorPage/DirectorPage.scss"
import HomeDirectorData from '../components/MainPage/HomeDirectorData/HomeDirectorData.js'
import ProjectDescription from '../components/MainPage/HomeProjectDescription/ProjectDescription.js'

import {GlobalStateContext} from "../components/context/GlobalContextProvider"

import DataForList from "../components/data/prepareDataForList"

import {main as translate}  from "../components/data/dictionary"

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let currLang;
let randomNumAuthor = getRandomInt(11)

function Main() {
   const state = useContext(GlobalStateContext);
   currLang = state.language;
  return (
    <Layout title='Culture portal'>
      <div className="director__container">
      <HomeDirectorData language={currLang} random={randomNumAuthor}/>
      <ProjectDescription language={currLang}/>
      </div>
    </Layout>
  );
}



export default Main;
