import React from "react"
import CountDown from 'reactjs-countdown';

import SEO from "../components/seo"
import Layout from "../components/layout"

import contactStyle from "./contact.module.css"

import bodymovin from "lottie-web"

class IbitePage extends React.Component {

    componentDidMount() {
        bodymovin.loadAnimation({
            container: document.getElementById('ibite_animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../images/ibite_pillars.json'
          })
    }
    
    render() {
        return(
            <Layout>
                <SEO title="Contact" keywords={[`Jan Temmerman`, `portfolio`, `skitrip`]} description="Portfolio website of jan temmerman, skitrip"/>
                <section className="centered">
                <div id="ibite_animation"></div>
                </section>
            </Layout>
        )
    }    
}

export default IbitePage
