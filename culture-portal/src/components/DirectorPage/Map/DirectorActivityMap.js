import React from "react";
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import "./DirectorActivityMap.scss";
function getCenter(array) {
  let coordinatesObject = {
    minLatitude: array[0][0],
    maxLatitude: array[0][0],
    minLongitude: array[0][1],
    maxLongitude: array[0][1]
  };
  for (let index = 0; index < array.length; index++) {
    if (array[index][0] < coordinatesObject.minLatitude) {
      coordinatesObject.minLatitude = array[index][0];
    }
    if (array[index][0] > coordinatesObject.maxLatitude) {
      coordinatesObject.maxLatitude = array[index][0];
    }
    if (array[index][1] < coordinatesObject.minLongitude) {
      coordinatesObject.minLongitude = array[index][1];
    }
    if (array[index][1] > coordinatesObject.maxLongitude) {
      coordinatesObject.maxLongitude = array[index][1];
    }
  }
  let diff = Math.abs(Math.max(coordinatesObject.maxLatitude - coordinatesObject.minLatitude,
    coordinatesObject.maxLongitude - coordinatesObject.minLongitude));
  let center = [(coordinatesObject.maxLatitude + coordinatesObject.minLatitude) / 2,
    (coordinatesObject.maxLongitude + coordinatesObject.minLongitude) / 2
  ];
  let zoom = 1;

  for (let value = 32; value > 0; value=value/2){
    if(value - diff < 0){
      break;
    }
    zoom++;
  }
  return [center, zoom]
}

export default function DirectorActivityMap(props) {
  const data = props.data.mapsLocation;
  const name = Object.keys(data);
  const coordinates = Object.values(data);
  const [center, zoom]= getCenter(coordinates);
  let placeMark = coordinates.map((item,index)=>{
   return <Placemark
     geometry={coordinates[index]}
     properties={{iconCaption: name[index]}}
     modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
   />
  });
  return (<YMaps>
    <Map className="map__container" defaultState={{center: center, zoom: zoom}}>
      {placeMark}
    </Map>
  </YMaps>)
}
//
