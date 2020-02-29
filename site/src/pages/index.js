import React, { useContext }from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import {GlobalStateContext} from "../context/GlobalContextProvider"

import DataForList from "../components/prepareDataForList"

import HomeDirectorData from "../components/HomeDirectorData"

import ProjectDescription from "../components/ProjectDescription"

import {main as translate}  from "../data/dictionary"

import './index.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}    

let currLang;

  let randomNumAuthor = getRandomInt(11)
    
const IndexPage = () => {
    
  const state = useContext(GlobalStateContext); 
  
  currLang = state.language;

  return (
    <Layout>
      <SEO title="Home" />

      <HomeDirectorData language={currLang} random={randomNumAuthor}/>
      <ProjectDescription language={currLang}/>
      
    
    </Layout>
  )

}

export default IndexPage
