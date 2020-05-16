import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import contactStyle from "./contact.module.css"

import linkedin from "../images/linkedin.png"
import resume from "../images/resume.pdf"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`Jan Temmerman`, `portfolio`, `about`]} description="Portfolio website of Jan Temmerman, about"/>
    <section className="centered">
        <div className={contactStyle.container}>

            <h1 className={contactStyle.greet}>About Me</h1>

            <p className={contactStyle.intro}>Hi I'm Jan Temmerman! 
                I'm currently a student at Artevelde Hogeschool where I study New Media Development. 
                In my free time, I like to workout, play badminton, play videogames or work on my own projects.
            </p>

            <div className={contactStyle.profilepic} ></div>

            <p className={contactStyle.intro}>I have knowledge of <b>HTML</b>, <b>CSS</b>, <b>JS</b>, <b>TS</b>, <b>PHP</b>, <b>SQL</b>. 
                For projects I have worked with <b>React</b>, <b>React Native</b>, <b>Laravel</b> and <b>Symfony</b>.
                Every project is managed using <b>Git</b> source control.
            </p>

            <p className={contactStyle.intro}>
                <a href="https://2019.summerofcode.be/" className={contactStyle.download} >Open Summer Of Code 2019</a> was awesome! Looking forward to attending next year.
            </p>

            <p className={contactStyle.intro}>
                <a href={resume} className={contactStyle.download} >Take a peek at my CV</a> or learn more about me on LinkedIn.
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

export default AboutPage
