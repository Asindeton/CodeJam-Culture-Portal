import React, { Component, Fragment } from 'react';
import { Link } from "gatsby"
import Image from "../components/image"
import CardOfAuthor from '../components/cardOfAuthor';
import SearchAuthors from '../components/searchAuthors';

import DataForList from "../data/prepareDataForList"

class ListOfAuthors extends Component {
  constructor(props) {
    super(props);
    this.state={
      searchName: '',
      searchPlace: '',
    };
    this.setSearchName = (name) => {
      this.setState((state) => {
        return {
          searchName: name.toLowerCase(),
        };
      })
    }; 
    this.setSearchPlace = (place) => {
      this.setState((state) => {
        return {
          searchPlace: place.toLowerCase(),
        };
      })
    };
    
    
    this.search = () => {
      
      let DataForListSearchName = (this.state.searchName.length === 0)? DataForList: DataForList.filter((item) => {
        return item.ru.fullName.toLowerCase().indexOf(this.state.searchName) > -1;
      });
      
      let DataForListSearchPlace = (this.state.searchPlace.length === 0)? DataForListSearchName: DataForListSearchName.filter((item) => {
        return item.ru.place.toLowerCase().indexOf(this.state.searchPlace) > -1;
      });

      return DataForListSearchPlace;
    };
    
    
  }
  
  

  
  render() {

    
    const allAuthors=this.search().map((item,ind) => {
    return (
      <CardOfAuthor imgName={item.ru.img} name={item.ru.fullName} years={item.ru.yearsOfLife} description={item.ru.smallDescription} key={ind}/>
    )
  })
    
    
    
    return (
      <Fragment> 
        <SearchAuthors searchNameF={this.setSearchName} searchPlaceF={this.setSearchPlace}/> 
        <div className='flexWrap'>          
          {allAuthors}
        </div>
        <Link to="/">Go back to the homepage</Link>
      </Fragment>
    )
  }  
}



export default ListOfAuthors
