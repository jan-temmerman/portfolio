import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import WebWork from "../components/webWork"
import WorkText from "../components/workText"
import SEO from "../components/seo"

import indexStyle from "./index.module.css"

import dormy1 from "../images/work1_0.jp2"
import dormy2 from "../images/work1_1.jp2"
import moodify1 from "../images/work2_1.jp2"
import moodify2 from "../images/work2_0.jp2"
import parkspot1 from "../images/work3_0.jp2"
import parkspot2 from "../images/work3_1.jp2"

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
        title="Moodify" 
        intro="For our Mobile Development class we needed to make a mood app. 
        Me and my group wanted to make a mood app that's different from others, so we started brainstorming."
        description="Eventually we came up with our main feature: A map that saves where you felt what mood. 
        You can then look back at your map and look where you felt the happiest and the worst."
        tech="Made using React Native and Firebase."
        btnStyle={indexStyle.buttonBlack}
        github="https://github.com/gdmgent-1819-mobdev2/positive-design-moodify"
        />
        <WebWork image1={moodify1} image2={moodify2}/>
      </div>
    </section>

    <section id="third_section" className="third">
      <div className={indexStyle.workContainer}>
        <WorkText 
        title="Dormy" 
        intro="Dormy, a website where students can easily rent a dorm and loaners can put their dorms for rent. 
        This was the first application I built using NodeJs. It was very hard, but I learned a lot."
        tech="This web app was made using NodeJs and Firebase."
        btnStyle={indexStyle.buttonWhite}
        github="https://github.com/gdmgent-1819-mobdev1/mobdev1-project-gdm-1718-jantemme"/>
        <WebWork image1={dormy1} image2={dormy2}/>
      </div>
    </section>

    <section id="fourth_section" className="fourth">
      <div className={indexStyle.workContainer}>
        <WorkText 
        title="Parkspot" 
        intro="A project where teams from Ghent, Stuttgart and Amsterdam work on solutions for the traffic problem in big cities. 
        I'm one of the 3 students that represents Ghent and we're currently working on an app that guides you to a parking spot of your preference."
        description="First you enter your destination. Then you apply the filters you want: free parking, outside LEZ, edge of the city, etc. 
        The app then gives you the available options for your liking. If you chose a parking spot that's not close enough to your destination to walk, there will be suggestions like busses or trams."
        tech="This project is being built using React Native, MongoDB and open data."
        btnStyle={indexStyle.buttonBlack}
        github="https://github.com/parkspot/parkspot-3"/>
        <WebWork image1={parkspot1} image2={parkspot2}/>
      </div>
    </section>
  </Layout>
)

export default IndexPage
