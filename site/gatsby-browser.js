import React from 'react'
import GlobalContextProvider from "./src/context/GlobalContextProvider"
import 'bootstrap/dist/css/bootstrap.css'

export const wrapRootElement = ({element}) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}