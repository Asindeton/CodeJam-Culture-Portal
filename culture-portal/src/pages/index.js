import React,{Component} from "react"
import { Link } from "gatsby"

import Layout from '../components/layout';
import SEO from '../components/seo';
import './index.css'
import Footer from './Footer'
import Header from '../components/Header/Header'
import Main from '../components/Main'


const IndexPage = () => {
 return (
    <div>
       <Header />
         <Main />
       <Footer />
    </div>
  )
}


export default IndexPage
