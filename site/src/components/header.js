import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React, {useContext} from "react"

import Form from 'react-bootstrap/Form';

import headerStyles from "./header.module.css"

import {GlobalStateContext, GlobalDispatchContext} from "../context/GlobalContextProvider" 

  const langObj = {
    ru: {
      Title: 'Культурный портал',
      Home: 'На главную',
      All: 'Все авторы'
    },
    en: {
      Title: 'Culture Portal',
      Home: 'Home',
      All: 'All authors'
    },
  }

const Header = () => {
  
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);
//  console.log(state);
//  console.log(dispatch);
  
  const changeLang = (val) => {
    if (val === 'EN') {
      dispatch ({type: 'SET_EN'})
    } else if (val === 'RU') {
      dispatch ({type: 'SET_RU'})
    } else dispatch ({type: 'SET_BY'})    
  }
  
  const title = (state.language === 'en') ? langObj.en.Title : langObj.ru.Title
  const home = (state.language === 'en') ? langObj.en.Home : langObj.ru.Home
  const all = (state.language === 'en') ? langObj.en.All : langObj.ru.All
  
  return (
   
    <header className={headerStyles.header}>
    <h1>
        {title}
    </h1>
  
    <ul className={headerStyles.navList}>
      <li>
        <Link to="/" className={headerStyles.navItem}>{home}</Link>
      </li>
      <li>
        <Link to="/listOfAuthors" className={headerStyles.navItem}>{all}</Link>
      </li>
  
      <Form>
        <Form.Control as="select" onChange={(e)=>changeLang(e.target.value)}>
          <option>EN</option>
          <option>RU</option>
          <option>BY</option>
        </Form.Control>
      </Form>

    </ul>

  </header>
    
  )
  
}

//Header.propTypes = {
//  siteTitle: PropTypes.string,
//}
//
//Header.defaultProps = {
//  siteTitle: ``,
//}

export default Header
