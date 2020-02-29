import React from 'react';
import DirectorActivityMap from "../components/DirectorPage/Map/DirectorActivityMap";

import directorsData from "../components/MainPage/directorsData";
import Layout from '../components/layout';
import "../components/DirectorPage/DirectorPage.scss"
import HomeDirectorData from '../components/MainPage/HomeDirectorData/HomeDirectorData.js'
import ProjectDescription from '../components/MainPage/HomeProjectDescription/ProjectDescription.js'


function Main() {
  return (
    <Layout title='Culture portal'>
      <div className="director__container">
      <HomeDirectorData />

      </div>
    </Layout>
  );
}



export default Main;
