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
  'Fedorovka': [53.4311028, 40.9512262],
  'VGIK': [55.8352084, 37.6370953],
  'Belarusian Union of Cinematographers': [53.926837, 27.630791],
};

function Author11() {
  return (
    <Layout title='Culture portal'>
      <SEO title="Marukhin" />    
      <div className="director__container">
      <DirectorDescription data={directorsData[10]}></DirectorDescription>
       <DirectorMovies link='p9GsK5m7d_w'/>
       <DirectorWorks data={directorsData[10]}/>

       <SimpleSlider data={directorsData[10]} />
      <DirectorTimeLine data={directorsData[10]}/>
      <DirectorActivityMap data={{mapsLocation}}></DirectorActivityMap>
      </div>
    </Layout>
  );
}

export default Author11
