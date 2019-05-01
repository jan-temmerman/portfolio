import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import contactStyle from "./contact.module.css"

import linkedin from "../images/linkedin.png"

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`Jan Temmerman`, `portfolio`, `about`]} />
    <section className="centered">
        <div className={contactStyle.container}>
            <h1 className={contactStyle.greet}>About Me</h1>
            <p className={contactStyle.intro}>Hi i'm Jan Temmerman! 
                I'm currently a student at Artevelde Hogeschool where i study New Media Development. 
                In my free time, I like to workout, do badminton, play videogames or work on my own projects.
            </p>
            <div className={contactStyle.profilepic} ></div>
            <p className={contactStyle.intro}>I have knowledge of <b>HTML</b>, <b>CSS</b>, <b>JS</b>, <b>PHP</b>, <b>SQL</b>. 
                For projects I have worked with <b>React Native</b> and <b>Laravel</b>.
                Every project is managed using <b>Git</b> source control.
            </p>
            <p className={contactStyle.intro}>
                Learn more about me on LinkedIn.
            </p>
            <div className={contactStyle.iconContainer}>
                <a href="https://www.linkedin.com/in/jan-temmerman-896b07146/">
                    <img className={contactStyle.icon} src={linkedin} alt="linkedin"/>
                </a>
            </div>
        </div>
    </section>
  </Layout>
)

export default IndexPage
