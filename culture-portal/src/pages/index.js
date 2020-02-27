import React,{Component} from "react"
import { Link } from "gatsby"

import Layout from '../components/layout';
import SEO from '../components/seo';
import './loa.scss';
import Main from './Main'

const IndexPage = () => {
 return (
    <>
       <SEO />
       <Main />
    </>
  )
}

export default IndexPage
