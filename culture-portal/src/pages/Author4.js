import React from 'react';
import DirectorActivityMap from "../components/DirectorPage/Map/DirectorActivityMap";
import DirectorWorks from "../components/DirectorPage/Works/DirectorWorks";
import DirectorTimeLine from "../components/DirectorPage/DirectorTimeLine/DirectorTimeLine";
import directorsData from "../components/MainPage/directorsData";
import SimpleSlider from '../components/DirectorPage/Gallery/Gallery'
import Layout from '../components/layout';
import DirectorDescription from "../components/DirectorPage/DirectorDescription/DirectorDescription";
import "../components/DirectorPage/DirectorPage.scss";
import SEO from "../components/seo";

const mapsLocation = {
  'Minsk': [53.91667, 27.55],
  'Belarusfilm': [53.9275797, 27.6276866],
};

function Author4() {
  return (
    <Layout title='Culture portal'>
      <SEO title="Weinerovich" />    
      <div className="director__container">
      <DirectorDescription data={directorsData[3]}></DirectorDescription>
       <DirectorWorks data={directorsData[3]}/>

       <SimpleSlider data={directorsData[3]} />
      <DirectorTimeLine data={directorsData[3]}/>
      <DirectorActivityMap data={{mapsLocation}}></DirectorActivityMap>
      </div>
    </Layout>
  );
}

export default Author4
