import React, { useContext } from 'react';
import CardOfAuthor from '../components/cardOfAuthor';
import SearchAuthors from '../components/searchAuthors';

import DataForList from "../components/prepareDataForList"

import Layout from "../components/layout"

import SEO from "../components/seo"

import {GlobalStateContext} from "../components/context/GlobalContextProvider" 

import {allAuthors as translate}  from "../data/dictionary"

import './listOfAuthors.css';

let currLang = "be";



let detail;
let searchNamePlaceholder;
let searchPlacePlaceholder;


const ListOfAuthors = () => {
  
  const state = useContext(GlobalStateContext);

  
  currLang = state.language; 
  
  detail = translate.detail[currLang];
  searchNamePlaceholder = translate.searchNamePlaceholder[currLang];
  searchPlacePlaceholder = translate.searchPlacePlaceholder[currLang];
  
  
  
  
      const search = () => {
      
      let DataForListSearchName = (state.searchName.length === 0)? DataForList: DataForList.filter((item) => {
        return item.fullName[currLang].toLowerCase().indexOf(state.searchName) > -1;
      });
      
      let DataForListSearchPlace = (state.searchPlace.length === 0)? DataForListSearchName: DataForListSearchName.filter((item) => {
        return item.place[currLang].toLowerCase().indexOf(state.searchPlace) > -1;
      });

      return DataForListSearchPlace;
    };  
  
  const allAuthors=search().map((item,ind) => {
    return (
      <CardOfAuthor imgName={item.img} name={item.fullName[currLang]} years={item.yearsOfLife} description={item.smallDescription[currLang]} key={ind} detail={detail} link={ind}/>
      )
    }) 
  


    return (
      
      
    <Layout>
      
      <SEO title="All authors" />
        <SearchAuthors searchPlacePlaceholder = {searchPlacePlaceholder} searchNamePlaceholder = {searchNamePlaceholder}/> 
        <div className='flexWrap'>          
          {allAuthors}
        </div>
      
    </Layout>

  )
  
}

 



export default ListOfAuthors
