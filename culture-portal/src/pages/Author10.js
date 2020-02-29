import React from 'react';
import DirectorActivityMap from "../components/DirectorPage/Map/DirectorActivityMap";
import DirectorMovies from "../components/DirectorPage/Youtube/DirectorMovies";
import DirectorWorks from "../components/DirectorPage/Works/DirectorWorks";
import DirectorTimeLine from "../components/DirectorPage/DirectorTimeLine/DirectorTimeLine";
import directorsData from "../components/MainPage/directorsData";
import SimpleSlider from '../components/DirectorPage/Gallery/Gallery'
import Layout from '../components/layout';
import DirectorDescription from "../components/DirectorPage/DirectorDescription/DirectorDescription";
import "../components/DirectorPage/DirectorPage.scss"

const mapsLocation = {
  'Всероссийский государственный институт кинематографии имени С. А. Герасимова': [55.77583, 37.63722],
  'Новосибирск': [55.01667, 82.91667],
  'Белорусский государственный университет': [53.89389, 27.547083],
};

function Author10() {
  return (
    <Layout title='Culture portal'>
      <div className="director__container">
      <DirectorDescription data={directorsData[9]}></DirectorDescription>
       <DirectorMovies/>
       <DirectorWorks data={directorsData[9]}/>

       <SimpleSlider data={directorsData[9]} />
      <DirectorTimeLine data={directorsData[9]}/>
      <DirectorActivityMap data={{mapsLocation}}></DirectorActivityMap>
      </div>
    </Layout>
  );
}

export default Author10
