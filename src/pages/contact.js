import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import WebWork from "../components/webWork"
import WorkText from "../components/workText"
import SEO from "../components/seo"

import contactStyle from "./contact.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Jan Temmerman`, `portfolio`, `contact`]} />
    <section className="first">
      <div className={contactStyle.container}>
        <h1 className={contactStyle.greet}>Contact</h1>
        <p className={contactStyle.intro}>Mail | temmjan@gmail.com</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
