import React, {useContext} from "react"
//import { Link } from "gatsby"
//
import Layout from "../components/layout"
import SEO from "../components/seo"

import {GlobalStateContext} from "../context/GlobalContextProvider" 

const A4 = (props) => {  
  const state = useContext(GlobalStateContext);
  console.log(state.language);
  return (  
    <Layout>
      <SEO title="author 4" />
      <h1>Author 4</h1>
      <h2>{state.language}</h2>
      
    </Layout>
  )

}

export default A4