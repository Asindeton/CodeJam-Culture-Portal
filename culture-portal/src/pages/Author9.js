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
  'Moscow': [55.7251, 37.646921],
  'Belarusfilm': [53.927751, 27.630546]
};

function Author9() {
  return (
    <Layout title='Culture portal'>
      <SEO title="Korsh-Sablin" />    
      <div className="director__container">
      <DirectorDescription data={directorsData[8]}></DirectorDescription>
       <DirectorMovies link='YvbpZZsH32o'/>
       <DirectorWorks data={directorsData[8]}/>

       <SimpleSlider data={directorsData[8]} />
      <DirectorTimeLine data={directorsData[8]}/>
      <DirectorActivityMap data={{mapsLocation}}></DirectorActivityMap>
      </div>
    </Layout>
  );
}

export default Author9
