import React from 'react';
import DirectorActivityMap from "../components/DirectorPage/Map/DirectorActivityMap";
import DirectorMovies from "../components/DirectorPage/Youtube/DirectorMovies";
import DirectorWorks from "../components/DirectorPage/Works/DirectorWorks";
import DirectorTimeLine from "../components/DirectorPage/DirectorTimeLine/DirectorTimeLine";
import directorsData from "../components/MainPage/directorsData";
import SimpleSlider from '../components/DirectorPage/Gallery/Gallery'
import Layout from '../components/layout';
import DirectorDescription from "../components/DirectorPage/DirectorDescription/DirectorDescription";
import "../components/DirectorPage/DirectorPage.scss";
import SEO from "../components/seo";

const mapsLocation = {
  'Khoyniki': [51.883226, 29.969274],
  'Higher Courses for Scriptwriters and Directors': [55.7688907, 37.5743827],
  'Belarusian State University': [53.89389, 27.547083],
};

function Author8() {
  return (
    <Layout title='Culture portal'>
      <SEO title="Dashuk" />    
      <div className="director__container">
      <DirectorDescription data={directorsData[7]}></DirectorDescription>
       <DirectorMovies link='871A1vtH1CY'/>
       <DirectorWorks data={directorsData[7]}/>

       <SimpleSlider data={directorsData[7]} />
      <DirectorTimeLine data={directorsData[7]}/>
      <DirectorActivityMap data={{mapsLocation}}></DirectorActivityMap>
      </div>
    </Layout>
  );
}

export default Author8
