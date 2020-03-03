import React, { useContext }from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import {GlobalStateContext} from "../components/context/GlobalContextProvider"

import HomeDirectorData from "../components/HomeDirectorData"

import ProjectDescription from "../components/ProjectDescription"

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
