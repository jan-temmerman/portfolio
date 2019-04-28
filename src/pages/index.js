import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import indexStyle from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="first">
      <div className={indexStyle.container}>
        <h1 className={indexStyle.greet}>New Media Developer</h1>
        <p className={indexStyle.intro}>I love solving problems. Can I help you make digital products?</p>
        <Link className={indexStyle.button} to="/">Contact me</Link>
      </div>
    </section>
    <section className="second">
      <h1>Section 2</h1>
    </section>
    <section className="third">
      <h1>Section 3</h1>
    </section>
  </Layout>
)

export default IndexPage
