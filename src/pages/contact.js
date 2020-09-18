import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

import contactStyle from "./contact.module.css"

import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import facebook from "../images/facebook.png"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`Jan Temmerman`, `portfolio`, `contact`]} description="Portfolio website of jan temmerman, contact"/>
    <section className="centered">
      <div className={contactStyle.container}>
        <h1 className={contactStyle.greet}>Contact</h1>
        <p className={contactStyle.intro}>Feel free to send me a mail, message me on LinkedIn or check out my projects on Github!</p>
        <table>
          <tr>
              <td>Mail</td>
              <a href="mailto:temmjan@gmail.com" className={contactStyle.contact}>
                <td>temmjan@gmail.com</td>
              </a>
          </tr>
        </table>
        <div className={contactStyle.iconContainer}>
            <a href="https://www.linkedin.com/in/💻-jan-temmerman-896b07146">
                <img className={contactStyle.icon} src={linkedin} alt="linkedin"/>
            </a>
            <a href="https://github.com/gdm-1718-jantemme">
            <img className={contactStyle.icon} src={github} alt="github"/>
            </a>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
