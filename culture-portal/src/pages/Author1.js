import React from 'react';
import DirectorActivityMap from "../components/DirectorPage/Map/DirectorActivityMap";
import DirectorMovies from "../components/DirectorPage/Youtube/DirectorMovies";
import DirectorWorks from "../components/DirectorPage/Works/DirectorWorks";
import DirectorTimeLine from "../components/DirectorPage/DirectorTimeLine/DirectorTimeLine";
import directorsData from "../components/MainPage/directorsData";
import SimpleSlider from '../components/DirectorPage/Gallery/Gallery'
import Layout from '../components/layout';
import DirectorDescription from "../components/DirectorPage/DirectorDescription/DirectorDescription";
import "../components/DirectorPage/DirectorPage.scss"
import SEO from "../components/seo";

const mapsLocation = {
  'Nevel': [56.01667, 29.93333],
  'VGIK': [55.77583, 37.63722],
  'Landok': [59.924111, 30.2949473],
};

function Author1() {
  return (
    <Layout title='Culture portal'>
      <SEO title="Arshansky" />
      <div className="director__container">
      <DirectorDescription data={directorsData[0]}></DirectorDescription>
       <DirectorMovies link={'3gLr5VrKIY0'}/>

       <DirectorWorks data={directorsData[0]}/>

       <SimpleSlider data={directorsData[0]} />
      <DirectorTimeLine data={directorsData[0]}/>
      <DirectorActivityMap data={{mapsLocation}}></DirectorActivityMap>
      </div>
    </Layout>
  );
}

export default Author1
