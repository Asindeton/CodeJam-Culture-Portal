import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

import './loa.css';

const IndexPage = () => (
  <Layout title='Culture portal'>


    <div style={{ maxWidth: `400px`, marginBottom: `1.45rem` }} className='center'>
      <Image imgName='1.jpg'/>
  
      <br/>  
    
      <Link to="/listOfAuthors/">Go to page list of authors</Link>
  
    </div> 
  </Layout>
)

export default IndexPage
