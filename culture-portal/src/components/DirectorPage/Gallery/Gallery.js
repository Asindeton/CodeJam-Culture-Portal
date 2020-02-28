import React from 'react'
import { Link } from "gatsby"

import Gallery from 'react-grid-gallery';
import './Gallery.scss'
import autor from '../../../images/assets/arshanskiy1.jpg'
import autorTwo from '../../../images/assets/arshanskiy2.jpg'
import autorThree from '../../../images/assets/arshanskiy3.jpg'
import belousovOne from '../../../images/assets/belousov1.jpg'
import belousovTwo from '../../../images/assets/belousov2.jpg'
import belousovThree from '../../../images/assets/belousov3.jpg'
import zalmanovichOne from '../../../images/assets/zalmanovich.jpg'
import veinerovichOne from '../../../images/assets/veinerovich1.jpg'
import veinerovichTwo from '../../../images/assets/veinerovich2.jpg'
import veinerovichThree from '../../../images/assets/veinerovich3.jpg'
import ginzburgOne from '../../../images/assets/ginzburg1.jpg'
import ginzburgTwo from '../../../images/assets/ginzburg2.jpg'
import ginzburgThree from '../../../images/assets/ginzburg3.jpg'
import golubOne from '../../../images/assets/golub1.jpg'
import golubTwo from '../../../images/assets/golub2.jpg'
import golubThree from '../../../images/assets/golub3.jpg'
import gutkovichOne from '../../../images/assets/gutkovich1.jpg'
import gutkovichTwo from '../../../images/assets/gutkovich2.jpg'
import gutkovichThree from '../../../images/assets/gutkovich3.jpg'
import dashukOne from '../../../images/assets/dashuk1.jpg'
import dashukTwo from '../../../images/assets/dashuk2.jpg'
import dashukThree from '../../../images/assets/dashuk3.jpg'
import korshOne from '../../../images/assets/korsh1.jpg'
import korshTwo from '../../../images/assets/korsh2.jpg'
import korshThree from '../../../images/assets/korsh3.jpg'
import hashchevatskiOne from '../../../images/assets/hashchevatski1.jpg'
import hashchevatskiTwo from '../../../images/assets/hashchevatski2.jpg'
import hashchevatskiThree from '../../../images/assets/hashchevatski3.jpg'
import maruhinOne from '../../../images/assets/maruhin.jpg'
import maruhinTwo from '../../../images/assets/maruhin2.jpg'
import maruhinThree from '../../../images/assets/maruhin3.jpg'
import maruhinFour from '../../../images/assets/maruhin4.jpg'
const languageData = {
   "title":{
      en:"Photo gallery",
      ru:"Фотогалерия",
      be:"Фотагалерыя"
   }
};
const language = "ru";
class SimpleSlider extends React.Component {
      constructor(props) {
         super(props)
         this.state = {
            imageOne: [autor],
            imageTwo: [autorTwo],
            imageThree: [autorThree],
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
                  isSelected: true,
                  caption: "After Rain (Jeshu John - designerspics.com)"
               },
               {
                  src: [this.state.imageTwo],
                  thumbnail: [this.state.imageTwo],
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
                  imageOne: [autor],
                  imageTwo: [autorTwo],
                  imageThree: [autorThree]
               },
               {
                  name: 'Олег Павлович Белоусов',
                  imageOne: [belousovOne],
                  imageTwo: [belousovTwo],
                  imageThree: [belousovThree]
               },
               {
                  name: 'Моисей Залманович Беров',
                  imageOne: [zalmanovichOne],
                  imageTwo: [zalmanovichOne],
                  imageThree: [zalmanovichOne]
               },
               {
                  name: 'Иосиф Наумович Вейнерович',
                  imageOne: [veinerovichOne],
                  imageTwo: [veinerovichTwo],
                  imageThree: [veinerovichThree]
               },
               {
                  name: 'Александр Ильич Гинцбург',
                  imageOne: [ginzburgOne],
                  imageTwo: [ginzburgTwo],
                  imageThree: [ginzburgThree]
               },
               {
                  name: 'Лев Владимирович Голуб',
                  imageOne: [golubOne],
                  imageTwo: [golubTwo],
                  imageThree: [golubThree]
               },
               {
                  name: 'Александр Захарович Гуткович',
                  imageOne: [gutkovichOne],
                  imageTwo: [gutkovichTwo],
                  imageThree: [gutkovichThree]
               },
               {
                  name: 'Виктор Никифорович Дашук',
                  imageOne: [dashukOne],
                  imageTwo: [dashukTwo],
                  imageThree: [dashukThree]
               },
               {
                  name: 'Владимир Владимирович Корш-Саблин',
                  imageOne: [korshOne],
                  imageTwo: [korshTwo],
                  imageThree: [korshThree]
               },
               {
                  name: 'Юрий Иосифович Хащеватский',
                  imageOne: [hashchevatskiOne],
                  imageTwo: [hashchevatskiTwo],
                  imageThree: [hashchevatskiThree]
               },
               {
                  name: 'Юрий Александрович Марухин',
                  imageOne: [maruhinOne],
                  imageTwo: [maruhinTwo],
                  imageThree: [maruhinThree]
               }
            ]
      return (
         <div className = 'slider' >

            <h3 className="gallery__title"> {languageData.title[language]} </h3>
            <Gallery className='slider-img' infinity={true} images={ IMAGES } />
         </div>
      )
   }
}

export default SimpleSlider

/*
 <ul>
         {Autors.map((newList)=>(
            <li
            className='img-list'
            onClick={()=>{this.changeValue(newList.name, newList.imageOne, newList.imageTwo, newList.imageThree)}}
            > {newList.name}</li>
         ))}
         </ul>
*/
