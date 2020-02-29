import React, {useContext} from "react"
//import { Link } from "gatsby"
//
import Layout from "../components/layout"
import SEO from "../components/seo"

import {GlobalStateContext} from "../context/GlobalContextProvider" 

const A3 = (props) => {  
  const state = useContext(GlobalStateContext);

  return (  
    <Layout>
      <SEO title="author 3" />
      <h1>Author 3</h1>
      <h2>{state.language}</h2>
      
    </Layout>
  )

}

export default A3