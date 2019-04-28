import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import WebWork from "../components/webWork"
import WorkText from "../components/workText"
import SEO from "../components/seo"

import indexStyle from "./index.module.css"

import image1 from "../images/work1_0.png"
import image2 from "../images/work1_1.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="first">
      <div className={indexStyle.container}>
        <h1 className={indexStyle.greet}>New Media Developer</h1>
        <p className={indexStyle.intro}>I love solving problems. Can I help you make digital products?</p>
        <Link className={indexStyle.button} to="/">Contact me</Link>
        <div className={indexStyle.arrow}></div>
      </div>
    </section>
    <section className="second">
      <h1>Section 2</h1>
    </section>
    <section className="third">
      <div className={indexStyle.workContainer}>
        <WorkText title="Dormy" description="Dormy, a website where students can easily rent a dorm and loaners can put their dorms for rent. This project was built using NodeJs and firebase."/>
        <WebWork image1={image1} image2={image2}/>
      </div>
    </section>
  </Layout>
)

export default IndexPage
