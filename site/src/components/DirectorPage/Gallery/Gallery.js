import React, {useContext} from 'react'

import Gallery from 'react-grid-gallery';
import './Gallery.scss'

import {authorData as translate} from "../../data/dictionary"
import {GlobalStateContext} from '../../context/GlobalContextProvider'


let currLang;
let author;
let photo;

function SimpleSlider(props) {
   const state = useContext(GlobalStateContext);
   currLang = state.language;
   author = translate.author[currLang];
   photo = translate.photo[currLang];
   const data = props.data;
            const IMAGES = [{
                  src: [data.galleryThree],
                  thumbnail: [data.galleryThree],
                  tags: [{
                     value: [author],
                     title: [author]
                  }],
                  caption: ""
               },{
                  src: [data.gallery],
                  thumbnail: [data.gallery],
                  tags: [{
                     value: [author],
                     title: [author]
                  }],
                  caption: ""
               },{
                  src: [data.galleryTwo],
                  thumbnail: [data.galleryTwo],
                  tags: [{
                     value: [author],
                     title: [author]
                  }],
                  caption: ""
               }
            ]

      return (
         <div className = 'slider' >

            <h3 className="gallery__title"> {photo} </h3>
            <Gallery className='slider-img' infinity={true} images={ IMAGES } />
         </div>
      )
}

export default SimpleSlider
