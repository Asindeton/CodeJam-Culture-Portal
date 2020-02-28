import React from "react"
import { Link } from "gatsby"
//
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}    


    
const IndexPage = () => {
  let randomAuthor = getRandomInt(11)
  let link = `/author${randomAuthor+1}`
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        Hi!!! Author of day is number {randomAuthor+1}
        <br/>
        <Link to={link}> More ... </Link>
      </div>
    </Layout>
  )

}

export default IndexPage
