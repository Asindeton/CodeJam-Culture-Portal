import React, {useContext} from "react"
//import { Link } from "gatsby"
//
import Layout from "../components/layout"
import SEO from "../components/seo"

import {GlobalStateContext} from "../context/GlobalContextProvider" 

const A9 = (props) => {  
  const state = useContext(GlobalStateContext);

  return (  
    <Layout>
      <SEO title="author 9" />
      <h1>Author 9</h1>
      <h2>{state.language}</h2>
      
    </Layout>
  )

}

export default A9