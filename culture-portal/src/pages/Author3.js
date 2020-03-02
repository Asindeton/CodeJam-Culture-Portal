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
  'Velizh': [55.6, 31.2],
  'VGIK': [55.835017, 37.6373791],
  'Belarusfilm': [53.9275797, 27.6276866],
};

function Author3() {
  return (
    <Layout title='Culture portal'>
      <SEO title="Berov" />
      <div className="director__container">
      <DirectorDescription data={directorsData[2]}></DirectorDescription>
       <DirectorWorks data={directorsData[2]}/>

       <SimpleSlider data={directorsData[2]} />
      <DirectorTimeLine data={directorsData[2]}/>
      <DirectorActivityMap data={{mapsLocation}}></DirectorActivityMap>
      </div>
    </Layout>
  );
}

export default Author3
