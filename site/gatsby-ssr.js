//const React = require('react')
//const GlobalContextProvider = require ("./src/context/GlobalContextProvider");
//
//exports.wrapRootElement = ({element}) => {
//  return <GlobalContextProvider>{element}</GlobalContextProvider>
//}

//const React = require("react")
//const { GlobalContextProvider } = require("./src/context/GlobalContextProvider")
//
//
//exports.wrapRootElement = ({ element }) => {
//  return (
//    <GlobalContextProvider>
//      {element}
//    </GlobalContextProvider>
//  )
//}


import React from 'react'
import GlobalContextProvider from "./src/context/GlobalContextProvider"

export const wrapRootElement = ({element}) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}