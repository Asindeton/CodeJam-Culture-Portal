import React from 'react'
import { Link } from "gatsby"

import dataImage from './data.js'
import Gallery from 'react-grid-gallery';

class SimpleSlider extends React.Component {
      constructor(props) {
         super(props)
         this.state = {
            imageOne: [dataImage[1].imageOne],
            imageTwo: [dataImage[1].imageTwo],
            imageThree: [dataImage[1].imageThree],
            name: ''
         }
         this.changeValue = this.changeValue.bind(this);
      }

      changeValue(name, imageOne, imageTwo, imageThree) {
         this.setState({
            imageOne: imageOne,
            imageTwo: imageTwo,
            imageThree: imageThree,
            name: name

         });
      }

      render() {
            const IMAGES = [{
                  src: [this.state.imageOne],
                  thumbnail: [this.state.imageOne],
                  thumbnailWidth: 460,
                  thumbnailHeight: 262,
                  isSelected: true,
                  caption: "After Rain (Jeshu John - designerspics.com)"
               },
               {
                  src: [this.state.imageTwo],
                  thumbnail: [this.state.imageTwo],
                  thumbnailWidth: 420,
                  thumbnailHeight: 262,
                  tags: [{
                     value: "Ocean",
                     title: "Ocean"
                  }, {
                     value: "People",
                     title: "People"
                  }],
                  caption: "Boats (Jeshu John - designerspics.com)"
               },

               {
                  src: [this.state.imageThree],
                  thumbnail: [this.state.imageThree],
                  thumbnailWidth: 420,
                  thumbnailHeight: 262,
                  tags: [{
                     value: "Ocean",
                     title: "Ocean"
                  }, {
                     value: "People",
                     title: "People"
                  }],
                  caption: "Boats (Jeshu John - designerspics.com)"
               }
            ]

            const Autors = [{
                  name: 'Эдуард Львович Аршанский',
                  imageOne: [dataImage[0].imageOne],
                  imageTwo: [dataImage[0].imageTwo],
                  imageThree: [dataImage[0].imageThree]
               },
               {
                  name: 'Олег Павлович Белоусов',
                  imageOne: [dataImage[1].imageOne],
                  imageTwo: [dataImage[1].imageTwo],
                  imageThree: [dataImage[1].imageThree]
               },
               {
                  name: 'Моисей Залманович Беров',
                  imageOne: [dataImage[2].imageOne],
                  imageTwo: [dataImage[2].imageTwo],
                  imageThree: [dataImage[2].imageThree]
               },
               {
                  name: 'Иосиф Наумович Вейнерович',
                  imageOne: [dataImage[3].imageOne],
                  imageTwo: [dataImage[3].imageTwo],
                  imageThree: [dataImage[3].imageThree]
               },
               {
                  name: 'Александр Ильич Гинцбург',
                  imageOne: [dataImage[4].imageOne],
                  imageTwo: [dataImage[4].imageTwo],
                  imageThree: [dataImage[4].imageThree]
               },
               {
                  name: 'Лев Владимирович Голуб',
                  imageOne: [dataImage[5].imageOne],
                  imageTwo: [dataImage[5].imageTwo],
                  imageThree: [dataImage[5].imageThree]
               },
               {
                  name: 'Александр Захарович Гуткович',
                  imageOne: [dataImage[6].imageOne],
                  imageTwo: [dataImage[6].imageTwo],
                  imageThree: [dataImage[6].imageThree]
               },
               {
                  name: 'Виктор Никифорович Дашук',
                  imageOne: [dataImage[7].imageOne],
                  imageTwo: [dataImage[7].imageTwo],
                  imageThree: [dataImage[7].imageThree]
               },
               {
                  name: 'Владимир Владимирович Корш-Саблин',
                  imageOne: [dataImage[8].imageOne],
                  imageTwo: [dataImage[8].imageTwo],
                  imageThree: [dataImage[8].imageThree]
               },
               {
                  name: 'Юрий Иосифович Хащеватский',
                  imageOne: [dataImage[9].imageOne],
                  imageTwo: [dataImage[9].imageTwo],
                  imageThree: [dataImage[9].imageThree]
               },
               {
                  name: 'Юрий Александрович Марухин',
                  imageOne: [dataImage[10].imageOne],
                  imageTwo: [dataImage[10].imageTwo],
                  imageThree: [dataImage[10].imageThree]
               }
            ]
      return (
         <div className = 'slider' >
         <ul>
         {Autors.map((newList)=>(
            <li
            className='img-list'
            onClick={()=>{this.changeValue(newList.name, newList.imageOne, newList.imageTwo, newList.imageThree)}}
            > {newList.name}</li>
         ))}
         </ul>
            <h3> {this.state.name} </h3>
            <Gallery className='slider-img' infinity={true} images={ IMAGES } />
         </div>
      )
   }
}

export default SimpleSlider
