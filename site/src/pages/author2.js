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
  'Slutsk': [53.01667, 27.55],
  'BSU': [53.89389, 27.547083],
  'Belarusfilm': [53.9275797, 27.6276866],
};

function Author2() {
  return (
    <Layout title='Culture portal'>
      <SEO title="Belousov" />
      <div className="director__container">
      <DirectorDescription data={directorsData[1]}></DirectorDescription>
       <DirectorMovies link={'0-FAaBFl72M'}/>
       <DirectorWorks data={directorsData[1]}/>

       <SimpleSlider data={directorsData[1]} />
      <DirectorTimeLine data={directorsData[1]}/>
      <DirectorActivityMap data={{mapsLocation}}></DirectorActivityMap>
      </div>
    </Layout>
  );
}

export default Author2
