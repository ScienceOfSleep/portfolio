import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, my name is Josh</h1>
    <p>Welcome to my portfolio site.</p>
    <p>I design and build cool stuff.</p>
  </Layout>
)

export default IndexPage
