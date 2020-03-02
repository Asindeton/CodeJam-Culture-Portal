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
  'Rogachev': [53.1, 30.05],
  'Tashkent': [41.3, 69.26667],
  'Gorky Film Studio': [55.8339864, 37.6386315],
};

function Author5() {
  return (
    <Layout title='Culture portal'>
      <SEO title="Gunzburg" />    
      <div className="director__container">
      <DirectorDescription data={directorsData[4]}></DirectorDescription>
       <DirectorMovies link='AGCPJNlLG1o'/>
       <DirectorWorks data={directorsData[4]}/>

       <SimpleSlider data={directorsData[4]} />
      <DirectorTimeLine data={directorsData[4]}/>
      <DirectorActivityMap data={{mapsLocation}}></DirectorActivityMap>
      </div>
    </Layout>
  );
}

export default Author5
