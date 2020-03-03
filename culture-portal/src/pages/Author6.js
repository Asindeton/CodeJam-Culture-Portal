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
  'Dnipro': [48.4666008, 34.72],
  'Belarusian State Academy of Arts': [53.9226577, 27.5988599],
  'All-Russian State University of Cinematography named after S. A. Gerasimov': [55.7856664, 37.6337376],
};

function Author6() {
  return (
    <Layout title='Culture portal'>
      <SEO title="Golub" />    
      <div className="director__container">
      <DirectorDescription data={directorsData[5]}></DirectorDescription>
       <DirectorMovies link='5X1bTL7U7xo'/>
       <DirectorWorks data={directorsData[5]}/>

       <SimpleSlider data={directorsData[5]} />
      <DirectorTimeLine data={directorsData[5]}/>
      <DirectorActivityMap data={{mapsLocation}}></DirectorActivityMap>
      </div>
    </Layout>
  );
}

export default Author6
