import React from 'react';
//import DirectorActivityMap from "./DirectorPage/Map/DirectorActivityMap";
//import DirectorMovies from "./DirectorPage/Youtube/DirectorMovies";
//import DirectorWorks from "./DirectorPage/Works/DirectorWorks";
import directorsData from "./MainPage/directorsData";
import HomeDirectorData from "./MainPage/HomeDirectorData/HomeDirectorData";
import ProjectDescription from "./MainPage/HomeProjectDescription/ProjectDescription";
//import DirectorTimeLine from "./DirectorPage/DirectorTimeLine/DirectorTimeLine";
const mapsLocation = {
  'Всероссийский государственный институт кинематографии имени С. А. Герасимова': [55.77583, 37.63722],
  'Новосибирск': [55.01667, 82.91667],
  'Белорусский государственный университет': [53.89389, 27.547083],
};

function App() {
  return (
    <>
      <HomeDirectorData data={{directorsData}} language='ru'/>
      {/*<DirectorActivityMap data={{mapsLocation}}></DirectorActivityMap>*/}
      {/*<DirectorMovies></DirectorMovies>*/}
      {/*<DirectorWorks data={directorsData[0]}/>*/}
      {/*<DirectorTimeLine data={directorsData[0]}/>*/}
      <ProjectDescription language='ru'/>
      </>
      );
      }

      export default App;
