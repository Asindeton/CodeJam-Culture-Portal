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
  'Odessa': [46.4598865, 30.5717043],
  'Belarusfilm': [53.927751, 27.630546]
};

function Author10() {
  return (
    <Layout title='Culture portal'>
      <SEO title="Khaschevatsky" />    
      <div className="director__container">
      <DirectorDescription data={directorsData[9]}></DirectorDescription>
       <DirectorMovies link='LcQBNLLewpo'/>
       <DirectorWorks data={directorsData[9]}/>

       <SimpleSlider data={directorsData[9]} />
      <DirectorTimeLine data={directorsData[9]}/>
      <DirectorActivityMap data={{mapsLocation}}></DirectorActivityMap>
      </div>
    </Layout>
  );
}

export default Author10
