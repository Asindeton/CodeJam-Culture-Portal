import React,{Component} from "react"
import { Link } from "gatsby"


import Layout from '../components/layout';
import SEO from '../components/seo';
import './index.css'
import Footer from './tutorial/footer'
import Main from './Main'
import SimpleSlider from './gallery'


const IndexPage = () => {
 return (
  <div>
     <Main />
       <SimpleSlider />
    <Footer />
  </div>
)
}


export default IndexPage
