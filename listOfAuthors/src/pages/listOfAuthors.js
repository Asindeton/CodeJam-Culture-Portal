import React, { Fragment } from 'react';
import { Link } from "gatsby"
import Image from "../components/image"
import CardOfAuthor from '../components/cardOfAuthor';
import SearchAuthors from '../components/searchAuthors';

import DataForList from "../data/prepareDataForList"



const ListOfAuthors = () => (
  <Fragment> 
    <SearchAuthors/> 
    <div className='flexWrap'>

      <CardOfAuthor imgName='1.jpg' name={DataForList[0].ru.fullName} years={DataForList[0].ru.yearsOfLife} description={DataForList[0].ru.smallDescription}/>
      <CardOfAuthor imgName='2.jpg' name={DataForList[1].ru.fullName} years={DataForList[1].ru.yearsOfLife} description={DataForList[1].ru.smallDescription}/>
      <CardOfAuthor imgName='3.jpg' name={DataForList[2].ru.fullName} years={DataForList[2].ru.yearsOfLife} description={DataForList[2].ru.smallDescription}/>  
      <CardOfAuthor imgName='4.jpg' name={DataForList[3].ru.fullName} years={DataForList[3].ru.yearsOfLife} description={DataForList[3].ru.smallDescription}/>
      <CardOfAuthor imgName='5.jpg' name={DataForList[4].ru.fullName} years={DataForList[4].ru.yearsOfLife} description={DataForList[4].ru.smallDescription}/>
      <CardOfAuthor imgName='6.jpg' name={DataForList[5].ru.fullName} years={DataForList[5].ru.yearsOfLife} description={DataForList[5].ru.smallDescription}/>
      <CardOfAuthor imgName='7.jpg' name={DataForList[6].ru.fullName} years={DataForList[6].ru.yearsOfLife} description={DataForList[5].ru.smallDescription}/>
      <CardOfAuthor imgName='8.jpg' name={DataForList[7].ru.fullName} years={DataForList[7].ru.yearsOfLife} description={DataForList[6].ru.smallDescription}/>
      <CardOfAuthor imgName='9.jpg' name={DataForList[8].ru.fullName} years={DataForList[8].ru.yearsOfLife} description={DataForList[6].ru.smallDescription}/>
      <CardOfAuthor imgName='10.jpg' name={DataForList[9].ru.fullName} years={DataForList[9].ru.yearsOfLife} description={DataForList[7].ru.smallDescription}/>
      <CardOfAuthor imgName='11.jpg' name={DataForList[10].ru.fullName} years={DataForList[10].ru.yearsOfLife} description={DataForList[10].ru.smallDescription}/>  
      
  

  
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Fragment>
)

export default ListOfAuthors
