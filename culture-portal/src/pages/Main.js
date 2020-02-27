import React from 'react';
import DirectorActivityMap from "../components/DirectorPage/Map/DirectorActivityMap";
import DirectorMovies from "../components/DirectorPage/Youtube/DirectorMovies";
import DirectorWorks from "../components/DirectorPage/Works/DirectorWorks";
import filmDirectorsData from "../components/MainPage/directorsData";
import DirectorTimeLine from "../components/DirectorPage/DirectorTimeLine/DirectorTimeLine";
import directorsData from "../components/MainPage/directorsData";
import SimpleSlider from '../components/DirectorPage/Gallery/Gallery'
import Layout from '../components/layout';

const mapsLocation = {
  'Всероссийский государственный институт кинематографии имени С. А. Герасимова': [55.77583, 37.63722],
  'Новосибирск': [55.01667, 82.91667],
  'Белорусский государственный университет': [53.89389, 27.547083],
};

function Main() {
  return (
    <Layout title='Culture portal'>
       <DirectorActivityMap data={{mapsLocation}}></DirectorActivityMap>
       <DirectorMovies></DirectorMovies>
       <DirectorWorks data={directorsData[3]}/>
       <DirectorTimeLine data={directorsData[3]}/>
       <SimpleSlider />
    </Layout>
  );
}

export default Main;
