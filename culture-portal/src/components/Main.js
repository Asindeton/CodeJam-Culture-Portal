import React from 'react';
import DirectorActivityMap from "./DirectorPage/Map/DirectorActivityMap";
import DirectorMovies from "./DirectorPage/Youtube/DirectorMovies";
import DirectorWorks from "./DirectorPage/Works/DirectorWorks";
import filmDirectorsData from "./MainPage/directorsData";
import DirectorTimeLine from "./DirectorPage/DirectorTimeLine/DirectorTimeLine";
import SimpleSlider from './DirectorPage/Gallery/Gallery'

const mapsLocation = {
  'Всероссийский государственный институт кинематографии имени С. А. Герасимова': [55.77583, 37.63722],
  'Новосибирск': [55.01667, 82.91667],
  'Белорусский государственный университет': [53.89389, 27.547083],
};

function Main() {
  return (
    <>
       <DirectorActivityMap data={{mapsLocation}}></DirectorActivityMap>
       <DirectorMovies></DirectorMovies>
       <DirectorWorks data={filmDirectorsData.arsanskiy}/>
       <DirectorTimeLine data={filmDirectorsData.arsanskiy}/>
       <SimpleSlider />
    </>
  );
}

export default Main;
