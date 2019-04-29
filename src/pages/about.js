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
        <h1 className={contactStyle.greet}>About Me</h1>
        <p className={contactStyle.intro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec varius orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus at euismod lorem. Aliquam ac ultrices nisl. Quisque lacinia justo odio. Quisque ullamcorper sem non sapien congue semper. Aliquam pharetra tincidunt dolor eget dignissim. Nunc convallis, nunc et pretium laoreet, risus magna posuere quam, id porta dui nisl mollis enim. Quisque eget volutpat risus. In semper eu nisl sed varius. Nam laoreet, eros sed iaculis pulvinar, leo tortor tempus sapien, ac congue nunc lorem sed magna. In vehicula tristique euismod. Pellentesque fringilla pellentesque leo eu porttitor.</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
