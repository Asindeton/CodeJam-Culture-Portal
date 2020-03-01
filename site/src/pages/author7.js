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
  'Askery': [54.968357, 29.395331],
  'National Academic Drama Theater named after Yakub Kolas': [55.193633, 30.201486],
  'Russian State Institute of Performing Arts': [59.940603, 30.345817],
};

function Author7() {
  return (
    <Layout title='Culture portal'>
      <SEO title="Gutkovich" />    
      <div className="director__container">
      <DirectorDescription data={directorsData[6]}></DirectorDescription>
       <DirectorMovies link='HcNpMn3o5Gs'/>
       <DirectorWorks data={directorsData[6]}/>

       <SimpleSlider data={directorsData[6]} />
      <DirectorTimeLine data={directorsData[6]}/>
      <DirectorActivityMap data={{mapsLocation}}></DirectorActivityMap>
      </div>
    </Layout>
  );
}

export default Author7
