import React, { Component, Fragment } from 'react';
import { Link } from "gatsby"
import CardOfAuthor from '../components/cardOfAuthor';
import SearchAuthors from '../components/searchAuthors';
import DataForList from "../components/data/prepareDataForList"
import Layout from '../components/layout';

let lang = "be";
let detail;
let searchNamePlaceholder;
let searchPlacePlaceholder;


class ListOfAuthors extends Component {
  constructor(props) {
    super(props);
    this.state={
      searchName: '',
      searchPlace: '',
    };

//    if (this.props.lang === undefined) {
//      lang = 'en'; ////////////////////////////////////////////////////////// <<<<< set language if not set lang props 'en' | 'ru' | 'be'
//    } else {
//      lang = this.props.lang;
//    };

    lang = 'en'; //<<<<<<<<< <<<<<<<<<< <<<<<<<<<<<<

    if (lang === 'ru') {
      detail = 'Подробней...';
    } else if (lang === 'en') {
      detail = 'More details...';
    } else detail = 'Падрабязна...';


    if (lang === 'ru') {
      searchNamePlaceholder = 'Имя';
    } else if (lang === 'en') {
      searchNamePlaceholder = 'Name';
    } else searchNamePlaceholder = 'Імя';


    if (lang === 'ru') {
      searchPlacePlaceholder = 'Место рождения';
    } else if (lang === 'en') {
      searchPlacePlaceholder = 'Place of birth';
    } else searchPlacePlaceholder = 'Месца нараджэння';

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
        return item.fullName[lang].toLowerCase().indexOf(this.state.searchName) > -1;
      });

      let DataForListSearchPlace = (this.state.searchPlace.length === 0)? DataForListSearchName: DataForListSearchName.filter((item) => {
        return item.place[lang].toLowerCase().indexOf(this.state.searchPlace) > -1;
      });

      return DataForListSearchPlace;
    };

  }
  render() {
    const allAuthors=this.search().map((item,ind) => {
    return (
      <CardOfAuthor imgName={item.img} name={item.fullName[lang]} years={item.yearsOfLife} description={item.smallDescription[lang]} key={ind} detail={detail}/>
      )
    })
    return (
      <Layout>
      <Fragment>
      
        <SearchAuthors searchNameF={this.setSearchName} searchPlaceF={this.setSearchPlace} searchPlacePlaceholder = {searchPlacePlaceholder} searchNamePlaceholder = {searchNamePlaceholder}/>
        <div className='flexWrap'>
          {allAuthors}
        </div>
        <Link to="/">Go back to the homepage</Link>

      </Fragment>
      </Layout>
    )
  }
}



export default ListOfAuthors
