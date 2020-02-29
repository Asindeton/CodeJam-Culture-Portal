
import React, {useContext} from "react"


import Header from "./header"
import Footer from "./footer"
import layoutStyles from "./layout.module.css" 

import GlobalContextProvider from "../context/GlobalContextProvider" 

import {GlobalStateContext, GlobalDispatchContext} from "../context/GlobalContextProvider" 



const Layout = (props) => {

  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);


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
