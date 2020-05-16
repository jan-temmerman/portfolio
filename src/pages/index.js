import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import WebWork from "../components/webWork"
import WorkText from "../components/workText"
import SEO from "../components/seo"

import indexStyle from "./index.module.css"

import dormy1 from "../images/artetech-1.png"
import dormy2 from "../images/artetech-2.png"
import parkspot1 from "../images/work3_0.png"
import parkspot2 from "../images/work3_1.png"
import trashpanda1 from "../images/thrashpanda-1.png"
import trashpanda2 from "../images/thrashpanda-2.png"
import tmaas1 from "../images/work4_0.png"
import tmaas2 from "../images/work4_1.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`jan temmerman`, `portfolio`, `index`]} description="Portfolio website of jan temmerman, homepage"/>
    <section className="first">
      <div className={indexStyle.container}>
        <h1 className={indexStyle.greet}>New Media Developer</h1>
        <div className={indexStyle.intro}>
        <p>From design to development and everything inbetween. </p>
        </div>
        <Link className={indexStyle.buttonWhite} to="/contact">Contact me</Link>
        <a className={indexStyle.arrowAnimation}href="#second_section"><div className={indexStyle.arrow}></div></a>
      </div>
    </section>
    
    <section id="second_section" className="second">
      <div className={indexStyle.workContainer}>
        <WorkText 
        title="Trashpanda (WIP)" 
        intro="For my thesis i wanted to help the people who go out and clean the littered nature and streets in their free time.
        I am building an app with which they can track and log their runs and how much litter they pick up. I also want to use the 
        data they generate to show the world how much thrash we just throw on the streets."
        description="When you start a run, you can add items by telling the app what you're picking up or by just typing. You can also add a picture to the items."
        tech="This project is being built using React Native (Typescript) and Firebase."
        btnStyle={indexStyle.buttonBlack}
        github="https://github.com/gdm-1718-jantemme/Trashpanda-app"/>
        <WebWork image1={trashpanda1} image2={trashpanda2}/>
      </div>
    </section>

    <section id="third_section" className="third">
      <div className={indexStyle.workContainer}>
        <WorkText 
        title="Road Report" 
        intro="During the summer of 2019 I attended Open Summer of Code. At oSoc19 I was part of a team that worked 
        on an app where citizens of Ghent could report problems with sidewalks and cycling paths."
        description="Together with our client TMAAS we made a react native app with a php backend."
        tech="Made using React Native and Firebase."
        btnStyle={indexStyle.buttonWhite}
        github="https://github.com/oSoc19/RoadReport"
        />
        <WebWork image1={tmaas1} image2={tmaas2}/>
      </div>
    </section>

    <section id="fourth_section" className="fourth">
    <div className={indexStyle.workContainer}>
        <WorkText 
        title="Parkspot" 
        intro="A project where teams from Ghent, Stuttgart and Amsterdam work on solutions for the traffic problem in big cities. 
        I'm one of the 3 students that represented Ghent and we worked on developing an app that guides you to a parking spot of your preference.
        I recently rebuilt this project using typescript, I used better components and improved some features."
        description="First you enter your destination. Then you apply the filters you want: free parking, outside LEZ, edge of the city, etc. 
        The app then gives you the available options for your liking. If you chose a parking spot that's not close enough to your destination to walk, there will be suggestions like busses or trams."
        tech="This project is built using React Native, MongoDB and open data."
        btnStyle={indexStyle.buttonBlack}
        github="https://github.com/undefined-nmd/Parkspot"/>
        <WebWork image1={parkspot1} image2={parkspot2}/>
      </div>
    </section>

    <section id="fifth_section" className="fifth">
      <div className={indexStyle.workContainer}>
        <WorkText 
        title="ArteTech" 
        intro="ArteTech is a school project where we had to develop a EMS with symfony and a mobile first frontend for the employee's."
        description="The employee's use the frontend to fill in when they work and on what project they worked.
        The HR manager can track all this on the EMS and send mails from here to the customers. There's also a portal 
        for customers to check on the work that has been put in for their project."
        tech="The EMS front- and backend was built using Symfony and the employee frontend was built with React. The react app communicates with the symfony backend through an small api."
        btnStyle={indexStyle.buttonWhite}
        github="https://github.com/gdm-1718-jantemme/ArteTech"/>
        <WebWork image1={dormy1} image2={dormy2}/>
      </div>
    </section>
  </Layout>
)

export default IndexPage
