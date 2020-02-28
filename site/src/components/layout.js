/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useContext} from "react"
//import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import layoutStyles from "./layout.module.css" 

import GlobalContextProvider from "../context/GlobalContextProvider" 

import {GlobalStateContext, GlobalDispatchContext} from "../context/GlobalContextProvider" 

//class Layout extends React.Component {
//  
//  constructor(props) {
//    super(props);
//    this.state = {
//      lang: 'en',
//    };
//    
//    this.updateLanguage = (language) => {      
//      this.setState((lang) => {
//          return { lang: language.toLowerCase() }
//        },console.log('>>>> ' + this.state.lang)
//      )      
//    }  
//  }
//  
//  render() {
////    const children = React.Children.map(this.props.children, child => {
////      return React.cloneElement(child, {
////        language: 'this.state.lang'
////      });
////    });
//    return (
//      <div className={layoutStyles.container}>
//        <p>{this.state.lang}</p>
//        <div className={layoutStyles.content}>
//            <Header func={this.updateLanguage}/> 
//            {React.cloneElement(this.props.children, { language: 'this.state.lang' })}
//        </div>
//        
//        <Footer />
//      </div>
//    )
//  }
//}

const Layout = (props) => {

  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);
//  console.log(state);
//  console.log(dispatch);

  return (

    <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
        <Header /> 
        {props.children}
    </div>
      <Footer />
    </div> 
  )

}
export default Layout
